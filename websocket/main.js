const WebSocket = require('ws')
const fs = require('fs')
const https = require('https');

// const wss = new WebSocket.Server({ port: 8080 }, () => {
//     console.log('running at port 8080')
// });

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/bharattube.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/bharattube.xyz/fullchain.pem')
};
const server = https.createServer(options)

const wss = new WebSocket.Server({server})


wss.on('connection', function connection(ws) {

  ws.on('message', (message, isBinary) => {
    isBinary ? onBinary(message, ws) : onText(message.toString(), ws)
  });

  ws.on('close', () => {
    sendClose(ws)
  })

});

function onText(message, ws){
  ws.name = message
  let names = []
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      names.push(client.name)
    }
  })
  names.shift()
  console.log(names)
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
  names.shift()
  console.log(names)
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

// function onText(message, user){
//   switch(message.event){
//     case "connect":
//       ws.name = message.name
//       sendToEveryoneExceptUser(JSON.stringify({name : message.name, event : 'joined', all : Names}), user)
//       break;
//     case "disconnect":
//       sendLeaveMessage(JSON.stringify({name : message.name, event : 'left'}))
//       break;
//   }
// }

//send to all except the current user
// function sendToEveryoneExceptUser(message, user){
//   let sendList = Users.filter(x => x != user)
//   sendList.forEach(ws => ws.send(message))
// }

// //disconnected user is already removed from list
// function sendLeaveMessage(message){
//   Users.forEach(x => x.send(message))
// }







server.listen(8080, ()=> {
  console.log('at 8080 ws')
})