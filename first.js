var http = require('http');
console.log("this server is runnning on http://localhost:3000 ");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  //console.log("this server is runnning on localhost:8080 ");
}).listen(3000);