import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private LoginService: LoginService, public router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.username, this.password);

    this.router.navigate(['/home'])
  }
}
