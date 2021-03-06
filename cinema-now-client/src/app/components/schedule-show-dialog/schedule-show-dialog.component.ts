import { HttpService } from './../../services/http.service';
import { Component, Inject } from '@angular/core';
import {
  MatDialogRef, 
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LocalMoviesService } from '../../services/local-movies.service';


export interface DialogData {
  movieTitle: string;
  movieId: string;
  hallId: string;
  date: string;
  timeId: string;
  _id?: string
}

export interface ShowTime {
  value: string
  viewValue: string,
}

export interface ShowHall {
  value: string
  viewValue: string,
}



@Component({
  selector: 'app-schedule-show-dialog',
  templateUrl: './schedule-show-dialog.component.html',
  styleUrls: ['./schedule-show-dialog.component.scss']
})
export class ScheduleShowDialogComponent {

  isCheckingForTimes: boolean = false;
  showId?: string; 
  showDate?: Date; 
  showTimeId?: string; 
  showTimeOptions: ShowTime[];
  showHallOptions: ShowTime[];
  hallId?: string;
  movieTitle: string;
  constructor(
    public dialogRef: MatDialogRef<ScheduleShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private localMoviesService: LocalMoviesService) {
    this.hallId = data.hallId;
    this.showTimeId = data.timeId;
    this.showDate = new Date(+data.date);
    this.movieTitle = this.localMoviesService.getMovieName(data.movieId);

    this.showTimeOptions = [
      {
        value: "1",
        viewValue: "10:00"
      },
      {
        value: "2",
        viewValue: "14:00"
      },
      {
        value: "3",
        viewValue: "21:00"
      }
    ];
    this.showHallOptions = [
      {
        value: "1",
        viewValue: "Hall 100"
      },
      {
        value: "2",
        viewValue: "Hall 200"
      },
      {
        value: "3",
        viewValue: "Hall 300"
      }
    ];
  }
  onClose(): void {
    this.dialogRef.close();
  }
  onDateChange(eventType: any, newDate: any) {
    // TODO: check which times are avaiable for this date
  }

  async schedleShow() {
    if (!this.hallId || !this.showDate || !this.showTimeId) {
      return;
    }
    const showDateTimestamp = (+<Date>this.showDate).toString();
    const res = await this.httpService.scheduleShow({
      movieId: this.data.movieId,
      timeId: <string>(this.showTimeId),
      date: showDateTimestamp,
      hallId: <string>this.hallId,
      _id: this.data._id
    });
    if (res) {
      this.snackBar.open("Succeeded", "Show Saved", {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      this.dialogRef.close({...res});
    }
  }

}
