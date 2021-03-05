import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { LocalMoviesService } from '../../services/local-movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-local-movies',
  templateUrl: './local-movies.component.html',
  styleUrls: ['./local-movies.component.scss']
})
export class LocalMoviesComponent implements OnInit {

  movies: Movie[] = [];
  constructor(
    private httpService: HttpService,
    private localMoviesService: LocalMoviesService,
    private snackBar: MatSnackBar

  ) {
    this.httpService.getLocalMovies()
      ?.then((res: any) => {
      if (res) {
        this.movies = res;
      }
    });
  }

  trackbyFunc(idx: number, item: Movie) {
    if (!item) {
      return null;
    }
    return item.id;
  }

  ngOnInit(): void {}

  async deleteLocalMovie(id: string, title: string) {
    const answer = confirm(`Are you sure you want to delete the movie '${title}' (all its shows will be deleted also) ?`)
    if (!answer) {
      return;
    }
    const res = await this.httpService.deleteLocalMovie(id);
    if (res) {
      this.localMoviesService.deleteLocalMovie(id);
      this.movies = this.movies.filter(item => {
        return item.id != id;
      });
      this.snackBar.open("Succeeded", "Local movie deleted", {
        duration: 800,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    }
  }



}
