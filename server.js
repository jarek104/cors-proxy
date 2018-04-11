// The first time you start this erver it will add itself as a service to start with windows
// var Service = require('node-windows').Service;

// var svc = new Service({
//   name:'Cors Proxy',
//   description: 'CORS Proxy',
//   script: 'D:\\GITLAB\\cors-proxy\\server.js'
// });

// svc.on('install',function(){
//   svc.start();
// });

// svc.install();





var express = require('express')
var proxy = require('http-proxy-middleware')
var cors = require('cors')


var jsonPlaceholderProxy = proxy({
  target: 'https://jolewniczak:a57cfd524fd558b1f6a9c4113fbed622@csp.jenkins.hylandqa.net',
  changeOrigin: true,
  logLevel: 'info',
  secure: false
})

var app = express()
app.use(cors())

app.use('/job', jsonPlaceholderProxy)

app.listen(3000)

console.log('[DEMO] Server: listening on port 3000')
console.log('[DEMO] Opening: http://localhost:3000')
