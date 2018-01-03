var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/profile/:name', function(req,res){
  var data = {age: 32, job: 'ninja', 'hobbies': ['gaming','reading']};
  res.render('profile', {person: req.params.name, data: data});
});

app.get('/contact', function(req,res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
  res.render('contact-success', {data: req.body});
});

// If no routes found, render 404.ejs
app.use(function(req, res, next){
  res.status(404).render('404');
});

app.listen(3000);