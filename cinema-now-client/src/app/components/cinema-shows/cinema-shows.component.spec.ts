import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaShowsComponent } from './cinema-shows.component';

describe('CinemaShowsComponent', () => {
  let component: CinemaShowsComponent;
  let fixture: ComponentFixture<CinemaShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
