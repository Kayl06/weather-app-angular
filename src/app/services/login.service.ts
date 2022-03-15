import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private is_logged_in = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  loginProcess() {
    this.is_logged_in.next(true);
  }

  isLoggedIn(): Observable<boolean> {
    return this.is_logged_in.asObservable();
  }
}
