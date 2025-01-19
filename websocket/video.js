const WebSocket = require('ws')


const wss = new WebSocket.Server({ port: 8090 }, () => {
    console.log('video ws running at port 8090')
});


//code starts
let streamBuffer = []
let streamLocked = false
wss.on('connection', function connection(ws) {

  //send the previous buffer. Starting buffer has meta data without which video doesn't run
  var dataBuf = streamBuffer.length > 0 ? Buffer.concat(streamBuffer) : undefined
  dataBuf ? ws.send(dataBuf) : undefined

  //send if anyone is already streaming
  streamLocked ? ws.send('locked') : undefined

  ws.on('message', (message, isBinary) => {
    isBinary ? onBinary(message, ws) : onText(message.toString(), ws)
  });

  ws.on('close', () => {
    sendClose(ws)
  })

});

function onText(message, ws){
  if(message.includes("T9")){
    sendText(message, ws)
  }else{
    userJoined(message, ws)
  }
}

function sendText(message, ws){
  let text = message.split("T9")[1]
  text = `@${ws.name} : ${text}`
  
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(`T9${text}`)
    }
  })
}


function userJoined(message, ws){
  if(message == 'locked'){
    ws.locker = true
    streamLocked = true
    wss.clients.forEach(function each(client) {
      if (client !== ws  && client.readyState === WebSocket.OPEN) {
        client.send('locked');
      }
    });
  }else if(message == 'unlocked'){
    ws.locker = false
    streamLocked = false
    streamBuffer = []
    wss.clients.forEach(function each(client) {
      if (client !== ws  && client.readyState === WebSocket.OPEN) {
        client.send('unlocked');
      }
    });
  }else{
    ws.name = message
  let names = []
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        names.push(client.name)
      }
    })
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(names.join(','));
      }
    });
  }
  
}

function sendClose(ws){
  if(ws.locker){
    streamBuffer = []
    streamLocked = false
  }
  let names = []
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      names.push(client.name)
    }
  })
  wss.clients.forEach(function each(client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(names.join(','));
    }
  });
}

function onBinary(data, ws) {
    streamBuffer.push(data)
    wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: true });
            client.send('ignore')
        }
    });
}