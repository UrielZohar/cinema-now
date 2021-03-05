var express = require('express');
const DAL = require('../DAL/DAL');
var router = express.Router();


const Hall = DAL.getHallsModel();
/* GET home page. */
router.get('/', function(req, res, next) {
  Hall.find({}).exec().then(allHalls => {
    res.send(allHalls);
  });
});

module.exports = router;
