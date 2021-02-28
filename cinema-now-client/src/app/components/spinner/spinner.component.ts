import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public _spinnerCount = 0;

  constructor(public _spinnerService: SpinnerService) { }

  ngOnInit() {

    this._spinnerService.spinnerUpdates().subscribe({
      next: (val) => {
        this._spinnerCount = val;
      }
    })
  }

}
