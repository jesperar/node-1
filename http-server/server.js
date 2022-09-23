const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', function(req, res) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.write('<h1>2222</h1>')
  res.end()
})

server.listen(5555, function() {
  console.log('start in 5555');
})
