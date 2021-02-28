import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public _spinnerCount = 0;

  private _subject = new Subject<any>();

  constructor() { }

  spinnerUpdates() {
    return this._subject;
  }

  public turnOnSpinner() {
    this._spinnerCount++;
    this._subject.next(this._spinnerCount);
  }

  public turnOffSpinner() {
    this._spinnerCount--;
    this._subject.next(this._spinnerCount);
  }
}
