var express = require('express');
var axios = require('axios');
var DAL = require('../DAL/DAL');

var router = express.Router();
const Show = DAL.getShowModel();

/* GET users listing. */
router.post('/save', (req, res) => {
  const { show } = req.body;
  const newShow = new Show(show);
  newShow.save((error) => {
    if (error) {
      res.status(500).send('Something broke');
    } else {
      res.send("saved");
    }
  })
});

/* GET all local movies ids in map  */ 
router.get('/map', (req, res, next) => {
  Show.find({}).exec().then((allShows) => {
    var objectMap = {};
    allShows.forEach(item => {
      objectMap[item.id] = true;
    });
    res.send(objectMap);
  }, () => res.status(500).send('Something broke') )
});

/* GET all local movies */ 
router.get('/', (req, res, next) => {
  Show.find({}).exec().then((allShows) => {
    res.send(allShows);
  }, () => res.status(500).send('Something broke') )
});

/* GET delete */
router.get('/:id/delete', (req, res) => {
  const { id } = req.params;
  Movie.deleteOne({ id }).then((result) => {
    if (result.deletedCount) {
      res.send("deleted");
    } else {
      res.status(500).send('Something broke');
    }
  }, () => res.status(500).send('Something broke'));
});

module.exports = router;
