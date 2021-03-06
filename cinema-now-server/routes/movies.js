var express = require('express');
var axios = require('axios');
var DAL = require('../DAL/DAL');

var router = express.Router();
const Movie = DAL.getMovieModel();
const APIManager = require('../utils/APIManager');


/* GET users listing. */
router.get('/', (req, res, next) => {
  const { title } = req.query;
  const { page } = req.query;
  if (!page || !title) {
    throw "Error in the query params"
  }
  axios.get(APIManager.searchMoviesByTitle(title, page))
    .then(results => {
      // change the result
      results.data.results = results.data.results.map(movie => {
        if (movie.poster_path) {
          movie.poster_path = `${APIManager.IMAGE_ROOT}${movie.poster_path}`;
        } else {
          movie.poster_path = `${APIManager.PlACE_HOLDER_416_625}`;
        }
        return {
          id: movie.id,
          poster_path: movie.poster_path,
          overview: movie.overview,
          title: movie.title,
          release_date: movie.release_date
        };
      })
      res.send(results.data);
    })
    .catch((err) => {
      res.status(500).send('Something broke');
    });
});



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
