import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterHallsComponent } from './theater-halls.component';

describe('TheaterHallsComponent', () => {
  let component: TheaterHallsComponent;
  let fixture: ComponentFixture<TheaterHallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterHallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterHallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
