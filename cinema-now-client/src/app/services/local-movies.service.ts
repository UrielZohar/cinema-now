import { Injectable } from '@angular/core';

import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LocalMoviesService {

  isReady: boolean = false;
  localMoviesMap: {[key: string]: Movie} = {};
  constructor(private httpService: HttpService) {
    this.getLocalMoviesMap()
    .then((res) => {
      if (!!res) {
        this.isReady = true;
      }
    });
  }

  async getLocalMoviesMap (): Promise<any> {
    const localMoviesMap = await this.httpService.getLocalMoviesMap();
    if (localMoviesMap) {
      this.localMoviesMap = localMoviesMap;
      return Promise.resolve(localMoviesMap);
    }
    return Promise.reject();
  }

  addToLocalMoviesMap(movie: Movie) {
    this.localMoviesMap[movie.id] = movie;
  }

  isMovieExist(id: string) {
    return !!this.localMoviesMap[id];
  }

  getMovieName(id: string) {
    return this.localMoviesMap[id].title;
  }

  deleteLocalMovie(id: string) {
    delete this.localMoviesMap[id];
  }
}
