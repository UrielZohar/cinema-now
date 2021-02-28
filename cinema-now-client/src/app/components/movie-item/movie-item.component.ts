import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviePageComponent } from '../movie-page/movie-page.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movieDetails;

  constructor(private _apiService: ApiService,
    public _dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleMovieToLikeList(movieId, isLike, movie) {
    movie.isLike = !isLike;
    this._apiService.addMovieToLikeList(movieId, isLike).then( (res: any) => {

    }, (err) => {
    });
  }

  async openMoivePage(movie) {

    let youtubeVideo: any = await this._apiService.getYoutubeOfMovie(movie.id)
    console.log(youtubeVideo);
    let dialogRef = this._dialog.open(MoviePageComponent, {
      height: '600px',
      width: '1200px',
      data: { data: movie, youtubeKey: youtubeVideo ? youtubeVideo.key : null }
    });
  }

}
