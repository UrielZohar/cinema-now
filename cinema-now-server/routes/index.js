var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname, 'dist', 'cinema-now-client'));
});

module.exports = router;
