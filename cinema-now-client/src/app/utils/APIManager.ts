
class APIManager {
    static ROOT = 'http://localhost:3000';

    static searchMoviesByTitle(title: string, pageNumber = 1) {
      return `${APIManager.ROOT}/movies?title=${title}&page=${pageNumber}`;
    }

    static saveMovieInLocal() {
      return `${APIManager.ROOT}/local/save`;
    }
    
    static getLocalMoviesMap() {
      return `${APIManager.ROOT}/local/movies/map`;
    }

    static getLocalMovies() {
      return `${APIManager.ROOT}/local/movies`;
    }

    static getHalls() {
      return `${APIManager.ROOT}/halls`;
    }

    static deleteLocalMovie(id: string) {
      return `${APIManager.ROOT}/local/${id}/delete`;
    }

    static scheduleShow() {
      return `${APIManager.ROOT}/shows/save`;
    }

  }
  
  export default APIManager;
  