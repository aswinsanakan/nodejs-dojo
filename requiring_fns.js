// Requiring & calling functions from modules
var stuff = require('./myModules/stuff');

console.log(stuff.counter(["Aswin", "Ashok", "Sherfin"]));
console.log(stuff.adder(3,6));
console.log(`Pi is ${stuff.pi}`);