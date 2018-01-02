// Event Emitter

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var matt = new Person('Matt');
var arthur = new Person('Arthur');
var tony = new Person('Tony');
var people = [matt, arthur, tony];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

matt.emit('speak', 'Hello boys!');
tony.emit('speak', "I'm Ironman");