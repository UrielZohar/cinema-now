var express = require('express');
var axios = require('axios');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-docker', { useNewUrlParser: true });


var router = express.Router();
const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  poster_path: String,
  overview: String,
  release_date: String
});

const Movie = mongoose.model('Movie', movieSchema);


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

module.exports = router;
