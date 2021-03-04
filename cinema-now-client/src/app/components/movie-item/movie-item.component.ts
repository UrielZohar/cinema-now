import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movieDetails: any;
  @Output('clickOnAction') clickOnAction = new EventEmitter<string>(); 

  constructor(public _dialog: MatDialog) { }

  ngOnInit() {
  }

  triggerClickOnAction(id: string) {
    this.clickOnAction.emit(id);
  }
}
