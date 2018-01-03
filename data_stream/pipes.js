var http = require('http');
var fs = require('fs');

// Stream data via pipe to browser as text
var server = http.createServer(function(req, res){
  console.log('Request was made at ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/stream_this.txt', 'utf8');
  myReadStream.pipe(res);  // write data to response as text
});

server.listen(3000, '127.0.0.1');
console.log("You're listening to port 3000");