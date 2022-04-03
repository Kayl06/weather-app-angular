import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, public router: Router) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  login() {

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((res) => {
        console.log(res);
      });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
}
