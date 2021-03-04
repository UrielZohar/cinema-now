var express = require('express');
var axios = require('axios');
var router = express.Router();

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

module.exports = router;
