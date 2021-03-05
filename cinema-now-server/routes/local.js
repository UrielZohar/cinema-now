var express = require('express');
var axios = require('axios');
var DAL = require('../DAL/DAL');

var router = express.Router();
const Movie = DAL.getMovieModel();

/* GET users listing. */
router.post('/save', (req, res) => {
  const { movie } = req.body;
  const newLocalMovie = new Movie(movie);
  newLocalMovie.save((error) => {
    if (error) {
      res.status(500).send('Something broke');
    } else {
      res.send("saved");
    }
  })
});

/* GET all local movies ids in map  */ 
router.get('/movies/map', (req, res, next) => {
  Movie.find({}).exec().then((allLocalMovies) => {
    var objectMap = {};
    allLocalMovies.forEach(item => {
      objectMap[item.id] = true;
    });
    res.send(objectMap);
  }, () => res.status(500).send('Something broke') )
});

/* GET all local movies */ 
router.get('/movies', (req, res, next) => {
  Movie.find({}).exec().then((allLocalMovies) => {
    res.send(allLocalMovies);
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
