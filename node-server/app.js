var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made at ', req.url);
  if(req.url === '/home' || req.url === '/' ){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
  } else if(req.url === '/api/json'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
      name: 'Ryu',
      job: 'Ninja',
      age: 29
    };
    res.end(JSON.stringify(myObj));
  } else if(req.url === '/random'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/random.html').pipe(res);
  } else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'arthos', age: 29}, {name: 'porthos', age: 32}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');