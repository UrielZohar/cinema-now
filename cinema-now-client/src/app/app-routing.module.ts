import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { LocalMoviesComponent } from './components/local-movies/local-movies.component';
import { CinemaShowsComponent } from './components/cinema-shows/cinema-shows.component';
import { TheaterHallsComponent } from './components/theater-halls/theater-halls.component';

const routes: Routes = [
	{
		path: 'search',
		component: SearchMovieComponent
	},
	{
		path: 'local',
		component: LocalMoviesComponent
	},
	{
		path: 'shows',
		component: CinemaShowsComponent
	},
	{
		path: 'halls',
		component: TheaterHallsComponent
	},
	{
		path: "",
		redirectTo: 'search',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
