import { Pipe, PipeTransform } from '@angular/core';
import { LocalMoviesService } from 'src/app/services/local-movies.service'

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  constructor(
    private localMoviesService: LocalMoviesService
  ) {

  }

  transform(movieId: string): unknown {
    return this.localMoviesService.getMovieName(movieId);
  }

}
