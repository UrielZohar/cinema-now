import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { LocalMoviesComponent } from './components/local-movies/local-movies.component';
import { CinemaShowsComponent } from './components/cinema-shows/cinema-shows.component';
import { TheaterHallsComponent } from './components/theater-halls/theater-halls.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ScheduleShowDialogComponent } from './components/schedule-show-dialog/schedule-show-dialog.component';
import { MoviePipe } from './pipes/movie.pipe';
import { HallPipe } from './pipes/hall.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SearchMovieComponent,
    LocalMoviesComponent,
    CinemaShowsComponent,
    TheaterHallsComponent,
    MovieItemComponent,
    ScheduleShowDialogComponent,
    MoviePipe,
    HallPipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
