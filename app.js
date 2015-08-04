var express = require('express');
var ejs = require('ejs');

var unicorns = require('./routes/unicorns');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();
app.set('view engine', 'ejs');

app.use('/home', unicorns);
app.use('/about', about);
app.use('/contact', contact);

app.locals.title = "Unicorn Magic";
app.locals.welcome = "Welcome to my Unicorn Page!";

app.use(function (req, res) {
  res.status(403).send('Error!');
});

app.use(function (err, req, res, next) {

  // pass 4 arguments to create an error handling middleware
  console.log('ERRRRRRRRRR', err.stack);
  res.status(500).send('My Bad');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});