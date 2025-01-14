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
  ws.on('message', function incoming(message) {
    console.log('received audio')
    fs.writeFileSync('received.ogg',message)
    console.log(message)
    ws.send(message)
  });
});

server.listen(8080, ()=> {
  console.log('at 8080 ws')
})