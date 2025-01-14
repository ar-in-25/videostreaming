const WebSocket = require('ws')
const fs = require('fs')

const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log('running at port 8080')
});
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received audio')
    fs.writeFileSync('received.ogg',message)
    console.log(message)
    ws.send(message)
  });

});