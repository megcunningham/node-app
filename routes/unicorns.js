var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('templates/unicorns'),
      {
        welcome: 'Welcome to my unicorn page!'
      }
});


module.exports = router;