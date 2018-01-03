// File System
var fs = require('fs');

// Make dir, read input & write output
fs.mkdir('out_files', function(){
  fs.readFile('random_file.txt', 'utf8', function(err,data){
    fs.writeFile('./out_files/output.txt',data);
  });  
});

// Delete file first & then dir
fs.unlink('./out_files/output.txt', function(){
  fs.rmdir('out_files');
});