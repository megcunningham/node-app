var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('!');
});

router.get(/hello/, function (req, res) {
  res.send('Hello!');
});

router.get('/about', function (req, res) {
    var uniFavs = [
      'Rainbows',
      'Marshmallows',
      'Butterflies',
      'NodeJS',
      'Heavy Metal'
    ];

    res.render('templates/about',
      {
        welcome: 'Thanks for coming!',
        awesomeThings: awesomeThings
      }
    );
  };
});

router.get('/test', function (req, res, next) {
  res.write('Test1!');
  next();
});

router.get('/test', function (req, res) {
  res.end('Test2!');
});

router.get('/json', function (req, res) {
  res.send({an: 'object'});
});