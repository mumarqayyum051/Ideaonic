import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`

})
export class AppComponent implements OnInit{
  testForm!: FormGroup;
  constructor(private grp: FormBuilder){ }
  ngOnInit()
  {
    this.testForm = this.grp.group({
      fname : ["", Validators.minLength(3)],
      lname : ["", Validators.maxLength(3)]
    }
    
    )
  }
  onSubmit(form: FormGroup) 
  {
    console.log(form.value.fname);
    console.log(form.value.lname);
  }
}
  
