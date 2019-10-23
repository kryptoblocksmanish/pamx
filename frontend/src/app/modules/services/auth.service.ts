import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLogger } from '../utils/CustomLogger';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;
  private redirectUrl: string;

  constructor(private router: Router) { }

  public setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  public auth(login: string, password: string): void {
    if (login === 'admin' && password === '1') {
      this.authenticated = true;
      this.redirectUrl = this.redirectUrl === undefined ? '/home' : this.redirectUrl;
      CustomLogger.logString("Authenticated...and redirected to..." + this.redirectUrl);
      this.router.navigate([this.redirectUrl]);
    }
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }
}