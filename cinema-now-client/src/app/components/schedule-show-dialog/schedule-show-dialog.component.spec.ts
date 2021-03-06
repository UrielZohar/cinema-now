import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleShowDialogComponent } from './schedule-show-dialog.component';

describe('ScheduleShowDialogComponent', () => {
  let component: ScheduleShowDialogComponent;
  let fixture: ComponentFixture<ScheduleShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleShowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
