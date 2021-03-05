const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean-docker', { useNewUrlParser: true });

const hallSchema = new mongoose.Schema({
  name: String
});
// create mongoose model
const Halls = mongoose.model('Halls', hallSchema);


const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  poster_path: String,
  overview: String,
  release_date: String
});

const Movie = mongoose.model('Movie', movieSchema);


class DBActions {
  static getConnection() {
    return mongoose;
  }

  static getHallsModel() {
    return Halls;
  }
  
  static getMovieModel() {
    return Movie;
  }
}
module.exports = DBActions;