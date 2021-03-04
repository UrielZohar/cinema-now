import { TestBed } from '@angular/core/testing';

import { LocalMoviesService } from './local-movies.service';

describe('LocalMoviesService', () => {
  let service: LocalMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
