import { Component } from '@angular/core';

import { LocalMoviesService } from './services/local-movies.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema-now-client';

  constructor(
    public localMoviesService: LocalMoviesService,
  ) { }
}
