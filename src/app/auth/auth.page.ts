import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  submissionType: 'login' | 'join' = 'login';
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  toggleText() {
    if (this.submissionType === 'login') {
      this.submissionType = 'join';
      // this.formGroup.get('email').get('password').patchValue()
    } else if (this.submissionType === 'join') {
      this.submissionType = 'login';
    }
  }

  formSubmit() {
    console.log(this.formGroup.value);
    const { email, password } = this.formGroup.value;
    if (!email || !password) {
      return;
    }
    if (this.submissionType === 'login') {
      console.log(1, 'handle login', email, password);
    } else if (this.submissionType === 'join') {
      const { firstName, lastName } = this.formGroup.value;
      if (!firstName || !lastName) {
        return;
      }
      console.log(2, 'handle login', firstName, lastName, email, password);
    }
  }
}
