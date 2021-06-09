import { Component } from '@angular/core';
import { Form1Component } from './form1/form1.component';
@Component({
  selector: 'app-root',
  template: `<h1>
      {{ Angular | lowercase }}
    </h1>
    <h1>
      {{ Angular1 | uppercase }}
    </h1>
    <h1>
      {{ Angular2 | titlecase }}
    </h1>
    <h1>
      {{ Angular4 | json }}
    </h1>
    <h1>
      {{ 1000 | currency: 'EUR' }}
    </h1>
    <h1>
      {{ 55.11 | number: '1.2-3' }}
    </h1>
    <h1>
      {{ 66.011 | number: '0.10' }}
    </h1>
    <h1>{{ 1 | percent }}</h1>
    <h1>{{ date }}</h1>
    <h1>{{ date | date }}</h1>
    <h1>{{ date | date: 'shortTime' }}</h1>
    <h1>{{ date | date: 'shortDate' }}</h1>
    <h1>{{ 2 | sqrtpipe }}</h1> `,
})
export class AppComponent {
  Angular: string = 'Lower Case Pipe';
  Angular1: string = 'upper case pipe';
  Angular2: string = 'title case pIPE';
  Angular3: string = 'Currency Pipe: 200';
  Angular4: any = {
    firstName: 'Umar',
    LastName: 'Qayyum',
  };
  date = new Date();
  num: number = 10;
}
