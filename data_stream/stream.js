// Read files as Streams (chunks of data)

var http = require('http');
var fs = require('fs');
 
var myReadStream = fs.createReadStream(__dirname + '/stream_this.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/stream_out.txt');
var chunkCount = 0;

// myReadStream listens for any data incoming and then writes it
myReadStream.on('data', function(chunk){
  chunkCount += 1;
  console.log(chunkCount + ' chunk received...');
  myWriteStream.write(chunk);
});

// Read data stream via Pipe and writes it
var myWritePipeStream = fs.createWriteStream(__dirname + '/stream_pipe_out.txt')
myReadStream.pipe(myWritePipeStream);