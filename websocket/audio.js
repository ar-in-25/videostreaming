const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log('running at port 8080')
});


wss.on('connection', function connection(ws) {
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

function sendClose(ws){
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

function onBinary(data, ws){
  wss.clients.forEach(function each(client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(data, { binary: true });
    }
  });
}
