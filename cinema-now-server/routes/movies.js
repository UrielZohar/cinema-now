var express = require('express');
var axios = require('axios');
var router = express.Router();

const APIManager = require('../utils/APIManager');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const { title } = req.query;
  try {
    const results = await axios.get(APIManager.searchMoviesByTitle(title, 1));
    // change the result
    results.data.results = results.data.results.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = `${APIManager.IMAGE_ROOT}${movie.poster_path}`;
      } else {
        movie.poster_path = `${APIManager.PlACE_HOLDER_416_625}`;
      }
      return movie;
    })
    res.send(results.data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
