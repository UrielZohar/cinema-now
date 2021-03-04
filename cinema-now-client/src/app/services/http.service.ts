import { Injectable } from '@angular/core';
import APIManager from '../utils/APIManager';
import { SpinnerService } from './spinner.service';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private spinnerService: SpinnerService) {

  }

  private httpRequest(url: any, type: string, withSpinner: boolean = false, body: any = null) {
    switch (type) {
      case 'GET': {
        withSpinner && this.spinnerService.turnOnSpinner();
        return axios.get(url)
          .then(res => {
            withSpinner && this.spinnerService.turnOffSpinner();
            return res.data;
          })
          .catch(err => {
            withSpinner && this.spinnerService.turnOffSpinner();
            console.error(err);
            window.alert("Error from server");
            return null;
          });
      }

      case 'POST': {
       withSpinner && this.spinnerService.turnOnSpinner();
        return axios.post(url, body)
          .then(res => {
            withSpinner && this.spinnerService.turnOffSpinner();
            return res.data;
          })
          .catch(err => {
            withSpinner && this.spinnerService.turnOffSpinner();
            console.error(err);
            window.alert("Error from server");
            return null;
          });
      }

      default: {
        return null;
      } 
    }
  }

  searchMoviesByTitle(title: string, page: number, withSpinner: boolean = false) {
    return this.httpRequest(APIManager.searchMoviesByTitle(title, page), "GET", true);  
  }

  saveMovieInLocal(movie: Movie) {
    return this.httpRequest(APIManager.saveMovieInLocal(), "POST", true, { movie });  
  }
  
  getLocalMoviesMap() {
    return this.httpRequest(APIManager.getLocalMoviesMap(), "GET", true);  

  }
}