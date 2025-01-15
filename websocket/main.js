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

let Users = []
let Names = []

wss.on('connection', function connection(ws) {

  ws.on('message', (message, isBinary) => {
    isBinary ? onBinary(message, ws) : onText(JSON.parse(message), ws)
  });

  ws.on('close', () => {
    if( Users.indexOf(ws) == -1){
      
    }else{
      onText({event : 'disconnect', name : Names[Users.indexOf(ws)]}, ws)
    }
  })

});

function onBinary(message, user){
  // sendToEveryoneExceptUser(message, user)
  Users.forEach(ws => ws.send(message))
}

function onText(message, user){
  switch(message.event){
    case "connect":
      addUser(message.name, user)
      sendToEveryoneExceptUser(JSON.stringify({name : message.name, event : 'joined'}), user)
      break;
    case "disconnect":
      sendLeaveMessage(JSON.stringify({name : message.name, event : 'left'}))
      removeUser(message.name, user)
      break;
  }
}


function addUser(name, ws) {
  Users.push(ws)
  Names.push(name)
}

function removeUser(name, ws) {
  Users.splice(Users.indexOf(ws),1)
  Names.splice(Names.indexOf(name),1)
}

//send to all except the current user
function sendToEveryoneExceptUser(message, user){
  let sendList = Users.filter(x => x != user)
  sendList.forEach(ws => ws.send(message))
}

//disconnected user is already removed from list
function sendLeaveMessage(message){
  Users.forEach(x => x.send(message))
}







server.listen(8080, ()=> {
  console.log('at 8080 ws')
})