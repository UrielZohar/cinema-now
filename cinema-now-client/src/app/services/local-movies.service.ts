import { Injectable } from '@angular/core';

import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LocalMoviesService {

  isReady: boolean = false;
  localMoviesMap: {[key: string]: boolean} = {};
  constructor(private httpService: HttpService) {
    Promise.all([this.getLocalMoviesMap()])
    .then(() => {
      this.isReady = true;
    });
  }

  async getLocalMoviesMap () {
    const localMoviesMap = await this.httpService.getLocalMoviesMap();
    if (localMoviesMap) {
      this.localMoviesMap = localMoviesMap;
      return Promise.resolve();
    }
    return Promise.reject();
  }

  addToLocalMoviesMap(id: string) {
    this.localMoviesMap[id] = true;
  }

  isMovieExist(id: string) {
    return !!this.localMoviesMap[id];
  }
}
