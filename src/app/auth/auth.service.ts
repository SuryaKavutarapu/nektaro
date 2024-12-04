import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAPIURL, API_CONSTANTS } from '../constants/envconfig';
import { appConstants } from '../shared/constants/app.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

  login(payload: any): Observable<any> {
    return this.httpClient.post(getAPIURL(API_CONSTANTS.LOGIN), payload);
  }

  signup(payload: any): Observable<any> {
    return this.httpClient.post(getAPIURL(API_CONSTANTS.SIGNUP), payload);
  }

  get isAuthenticated() {
    return !!sessionStorage.getItem(appConstants.AUTH_TOKEN_KEY);
  }

  get getUserData() {
    return JSON.parse(sessionStorage.getItem(appConstants.USER_DATA) || '');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
