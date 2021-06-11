import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
  interpolation: string =
    'Interpolation: This is made visible through Interpolation';
  Pbinding: string =
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  count: number = 0;
  name: string = '';
  username: string = '';
  private _customerName: string = '';
  @ViewChild('nameRef') nameElementRef!: ElementRef;

  //Setter Getter
  get customerName() {
    return this._customerName;
  }
  set customerName(inputValue: string) {
    this._customerName = inputValue;
    if (inputValue === 'umar') {
      console.log('TwoWay binding using setter getter');
      alert('TwoWay binding using setter getter');
    }
  }
  //Methods
  SplitBinding(UpdatedValue: string) {
    this.username = UpdatedValue;
    if (UpdatedValue === 'umar') {
      console.log('Two way binding has been splited');
      alert('Two way binding has been splited');
    }
  }
  increament() {
    return (this.count += 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
