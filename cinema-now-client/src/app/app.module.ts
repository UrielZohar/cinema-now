import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { LocalMoviesComponent } from './components/local-movies/local-movies.component';
import { CinemaShowsComponent } from './components/cinema-shows/cinema-shows.component';
import { TheaterHallsComponent } from './components/theater-halls/theater-halls.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SearchMovieComponent,
    LocalMoviesComponent,
    CinemaShowsComponent,
    TheaterHallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
