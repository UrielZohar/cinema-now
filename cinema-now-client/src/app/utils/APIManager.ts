
class APIManager {
    static ROOT = 'http://localhost:3000';

    static searchMoviesByTitle(title: string, pageNumber = 1) {
      return `${APIManager.ROOT}/movies?title=${title}&page=${pageNumber}`;
    }

    static saveMovieInLocal() {
      return `${APIManager.ROOT}/local/save`;
    }

  }
  
  export default APIManager;
  