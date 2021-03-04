import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { fromEvent, interval } from 'rxjs';
import { debounce, map, filter } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpService } from '../../services/http.service';
import { LocalMoviesService } from '../../services/local-movies.service';


const DEBOUNCE_TIME = 1000;

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput') input!: ElementRef;

  isNoResults: boolean = false;
  searchKey: string = "";
  searchResult: any;
  subscription : any;
  isLoading: boolean = false;
  movies: Movie[] = [];
  totalPages: number = 0;
  currentPage: number = 0;
  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private localMoviesService: LocalMoviesService
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const valueChanges = fromEvent(this.input.nativeElement, 'keyup')
    this.searchResult = valueChanges.pipe(
      map((e: any) => e.target.value),
      filter((val) => !this.isLoading ),    
      debounce(() => interval(DEBOUNCE_TIME))
    );
    this.subscription = this.searchResult.subscribe(
      async (searchKey: any) => {
        this.isNoResults = false;
        if (!searchKey) {
          this.currentPage = 1;
          this.totalPages = 1;
          this.movies = [];
          return;
        }
        this.isLoading = true;
        const res = await this.httpService.searchMoviesByTitle(searchKey, 1, true);
        if (!res) {
          this.isLoading = false;
          return;
        } else {
          this.currentPage = 1;
          this.totalPages = res.total_pages;
          this.isLoading = false;
          this.movies = res.results;
          if (this.movies.length === 0) {
            this.isNoResults = true;
          }
          this.markSavedMovies();
        }
      }
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackbyFunc(idx: number, item: Movie) {
    if (!item) {
      return null;
    }
    return item.id;
  }

  async saveToLocalMovies(id: string) {
    const idx: number = this.movies.findIndex(item => item.id == id);
    const res = await this.httpService.saveMovieInLocal(this.movies[idx]);
    if (res) {
      this.movies[idx] = {
        ...this.movies[idx],
        isSavedInLocal: true
      }
      this.snackBar.open("Succeeded", "Saved Locally", {
        duration: 800,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      this.localMoviesService.addToLocalMoviesMap(id);
    }
  }

  async loadNextPage() {
    if (this.currentPage < this.totalPages) {
      const res = await this.httpService.searchMoviesByTitle(this.searchKey, this.currentPage + 1, true);
      this.currentPage++;
      this.totalPages = res.total_pages;
      if (res) {
        this.movies.push(...res.results);
        this.markSavedMovies();
      }
      this.isLoading = false;
    }
  }
  
  markSavedMovies() {
    this.movies.forEach((movie: Movie) => {
      if (this.localMoviesService.isMovieExist(movie.id)) {
        movie.isSavedInLocal = true;
      }
    })
  }
}
