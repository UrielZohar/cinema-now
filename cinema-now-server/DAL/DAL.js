const mongoose = require('mongoose');
const uri = "mongodb+srv://uriel-cinema-now:cinemaTRY2025@cinema-now.mdegl.mongodb.net/mean-docker?retryWrites=true&w=majority";
mongoose.connect(uri, { 
  useNewUrlParser: true ,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection succeeded ')
}, (err) => console.error('Connection failed ', err))
.catch((err) => {
  console.error('Connection failed ', err)
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