import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  username: string = '';
  confirm_password: string = '';
  password: string = '';

  constructor(private authService: AuthService, public router: Router) {
    this.signupForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  signUp(): void {
    console.log(this.signupForm.value);

    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
    });
    
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
}
