import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnChanges {
  @Input() loggedIn!: boolean;
  message!: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
