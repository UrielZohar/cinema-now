import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { fromEvent, interval } from 'rxjs';
import { debounce, map, filter } from 'rxjs/operators';

import { HttpService } from '../../services/http.service';


const DEBOUNCE_TIME = 1000;

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput') input!: ElementRef;

  searchKey: string = "";
  searchResult: any;
  subscription : any;
  isLoading: boolean = false;
  movies: Movie[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const valueChanges = fromEvent(this.input.nativeElement, 'keyup')
    this.searchResult = valueChanges.pipe(
      map((e: any) => e.target.value),
      filter(() => !this.isLoading ),    
      debounce(() => interval(DEBOUNCE_TIME))
    );
    this.subscription = this.searchResult.subscribe(
      async (searchKey: any) => {
        this.isLoading = true;
        const res = await this.httpService.searchMoviesByTitle(searchKey, 1, true);
        if (res) {
          this.movies = res.results;
        }
        this.isLoading = false;
        
      }
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
