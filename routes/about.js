var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    var uniFavs = [
      'Rainbows',
      'Marshmallows',
      'Butterflies',
      'NodeJS',
      'Heavy Metal'
    ];

    res.render('templates/about',
      {
        uniFavs: uniFavs
      }
    );
});

module.exports = router;