import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-theater-halls',
  templateUrl: './theater-halls.component.html',
  styleUrls: ['./theater-halls.component.scss']
})
export class TheaterHallsComponent implements OnInit {

  halls: any = [];
  constructor(private httpService: HttpService) {
    this.httpService.getHalls()
      ?.then(res => {
        this.halls = res;
      });
   }

  ngOnInit(): void {
  }

}
