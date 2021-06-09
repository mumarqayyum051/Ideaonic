import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  form!: FormGroup
    ngOnInit() {
      this.form = new FormGroup({
        fname: new FormControl('',  [Validators.required,Validators.minLength(5)]),
        email: new FormControl('', [Validators.required,Validators.email])
      })
    }
    sub() {
      console.log(this.form.value);
    }
    get fname()
    {
      return this.form.get('fname');
    }
    get email()
    {
      return this.form.get('email');
    }

}
    
  

