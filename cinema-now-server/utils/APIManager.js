
class APIManager {
  static get IMAGE_ROOT() {
    return 'https://image.tmdb.org/t/p/w500';
  }

  static get PlACE_HOLDER_416_625() {
    return 'https://via.placeholder.com/416x625';
  }
  static get API_KEY() {
    return '7a16c8eccfde1a15f89bc37e999b6c78';
  }
  static get ROOT() {
    return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}`;
  }

  static searchMoviesByTitle(title, pageNumber) {
    return `${APIManager.ROOT}&language=en-US&query=${title}&page=${pageNumber}&include_adult=false`;
  }
}
  
module.exports = APIManager;