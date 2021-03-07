const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean-docker', { 
  useNewUrlParser: true ,
  useFindAndModify: false,
});

const hallSchema = new mongoose.Schema({
  name: String
});
// create mongoose model
const Halls = mongoose.model('Halls', hallSchema);
///////////////////////////////

const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  poster_path: String,
  overview: String,
  release_date: String
});

const Movie = mongoose.model('Movie', movieSchema);
///////////////////////////////

const showSchema = new mongoose.Schema({
  movieId: String,
  date: String,
  timeId: String,
  hallId: String
});

const Show = mongoose.model('Show', showSchema);



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

  static getShowModel() {
    return Show;
  }
}
module.exports = DBActions;