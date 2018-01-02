// sample function calls

// Set Timeout
console.log('Hey ninjas!');
setTimeout( () => console.log('3 seconds have passed!'), 3000);

// Set Interval
var time = 0;
var timer = setInterval(function(){
  time += 2;
  if(time > 5){
    clearInterval(timer);
  }
  console.log(time + ' seconds have passed!');
}, 2000);

// Get dir & file names
console.log(__dirname);
console.log(__filename);

// Normal function statement
function sayHi() {
  console.log('Hi');
}
sayHi();

// Function expression / anonymous fn
var sayBye = function(){
  console.log('Bye');
}
sayBye();

// Pass sayBye as param and call it
function callFunction(fun){
  fun();
}
callFunction(sayBye);