import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from './password.validator';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
})
export class DynamicformComponent implements OnInit {
  SignUpForm!: FormGroup;
  ngOnInit() {
    this.SignUpForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        addNames: this.fb.array([]),
        email: ['', Validators.email],
        subscribe: [false],
        password: [''],
        confirmpassword: [''],
      },
      { validator: PasswordValidator }
    );
    this.SignUpForm.get('subscribe')?.valueChanges.subscribe((checkedValue) => {
      const email = this.SignUpForm.get('email');
      if (checkedValue) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }
  constructor(private fb: FormBuilder) {}

  //Getters
  get name() {
    return this.SignUpForm.controls.name;
  }
  get addNames() {
    return this.SignUpForm.controls.addNames as FormArray;
  }
  get email() {
    return this.SignUpForm.controls.email;
  }
  get password() {
    return this.SignUpForm.controls.password;
  }
  get confirmpassword() {
    return this.SignUpForm.controls.confirmpassword;
  }

  //Methods
  addName() {
    return this.addNames.push(this.fb.control(''));
  }
  onSubmit() {
    console.log(this.SignUpForm.value);
  }
}
