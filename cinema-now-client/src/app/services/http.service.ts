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

  private httpRequest(url: any, type: string, withSpinner: boolean = false) {
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

      default: {
        return null;
      }
      
    }
  }

  searchMoviesByTitle(title: string, page: number, withSpinner: boolean = false) {
    return this.httpRequest(APIManager.searchMoviesByTitle(title, page), "GET", true);  
  }
}