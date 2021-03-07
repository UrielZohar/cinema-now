import { AfterViewInit, Component, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import { HttpService } from './../../services/http.service';
import { ScheduleShowDialogComponent } from '../schedule-show-dialog/schedule-show-dialog.component';


@Component({
  selector: 'app-cinema-shows',
  templateUrl: './cinema-shows.component.html',
  styleUrls: ['./cinema-shows.component.scss']
})
export class CinemaShowsComponent implements AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  dataSource: any = new MatTableDataSource([]);
  displayedColumns: string[] = ['date', 'movieId', 'hallId', 'timeId', 'actions'];
  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.httpService.getShows()
      .then(res => {
        this.dataSource.data = res;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  async deleteShow(showId: string) {
    const answer = window.confirm("Are you sure you want to delete this show ?");
    if (!answer) {
      return;
    }
    const res = await this.httpService.deleteShow(showId);
    if (res) {
      this.dataSource.data = this.dataSource.data.filter((show: Show) => {
        return show._id != showId;
      });
      this.snackBar.open("Succeeded", "Show deleted", {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    }
  }

  editShow(showToEdit: Show) {
    const dialogRef = this.dialog.open(ScheduleShowDialogComponent, {
      width: '520px',
      data: { 
        ...showToEdit,
      },
      disableClose: true
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.map((show: Show) => {
          if (show._id == result._id) {
            return result;
          } else {
            return show;
          }
        });
      }
    });
  }
}
