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

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { LocalMoviesComponent } from './components/local-movies/local-movies.component';
import { CinemaShowsComponent } from './components/cinema-shows/cinema-shows.component';
import { TheaterHallsComponent } from './components/theater-halls/theater-halls.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SearchMovieComponent,
    LocalMoviesComponent,
    CinemaShowsComponent,
    TheaterHallsComponent,
    MovieItemComponent
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
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
