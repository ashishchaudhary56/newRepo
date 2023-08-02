import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const loginURL = 'https://spring.harsh.rathod.dev/AadharApp/citizens/logIn';
const signUpURL = 'https://spring.harsh.rathod.dev/AadharApp/citizens/signUp';
const getUserDetails = 'https://spring.harsh.rathod.dev/AadharApp/citizens/dashboard';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(data: { citizenId: String; password: String }): Observable<any> {
    return this.httpClient.post(loginURL, data, { withCredentials: true });
  }

  signUp(data: {
    userFullName: String;
    email: String;
    gender: String;
    mobile: String;
    address: String;
  }): Observable<any> {
    return this.httpClient.post(signUpURL, data, { withCredentials: true });
  }

  getUserDetails(data: { citizenId: any }): Observable<any> {
    return this.httpClient.post(getUserDetails, data, {
      withCredentials: true,
    });
  }
}
