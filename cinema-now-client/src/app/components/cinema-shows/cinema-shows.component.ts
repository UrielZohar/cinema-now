import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpService } from './../../services/http.service';


@Component({
  selector: 'app-cinema-shows',
  templateUrl: './cinema-shows.component.html',
  styleUrls: ['./cinema-shows.component.scss']
})
export class CinemaShowsComponent implements AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  dataSource: any = new MatTableDataSource([]);
  displayedColumns: string[] = ['date', 'movieId', 'hallId', 'timeId'];
  constructor(
    private httpService: HttpService
  ) {
    this.httpService.getShows()
      .then(res => {
        this.dataSource.data = res;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
