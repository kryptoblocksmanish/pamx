import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { KeycloakService } from '../core/auth/keycloak.service';
import { UserProfile } from '../modules/models/UserProfile.model';
import { AuthService } from '../modules/services/auth.service';
import { CustomLogger } from '../modules/utils/CustomLogger';

@Component({
  selector: 'app-authLogin',
  templateUrl: './authLogin.component.html',
  styleUrls: ['./authLogin.component.css']
})
export class AuthLoginComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService, private http: HttpClient) { }

  userProfile: UserProfile;
  loginForm: FormGroup;
  login_name: FormControl;
  password: FormControl;

  ////////////////////
  animes: any
  errors: any
  getKeycloakService() {
    console.log("Called getKeycloakService()");
    return KeycloakService;
  }

  callApi() {
    this.errors = null;
    this.http.get(environment.apiUrl + "/animes").subscribe(data => {
      this.animes = data
    }, (err: HttpErrorResponse) => {
      this.errors = err
    });
  }

  stringify(val) {
    return JSON.stringify(val);
  }
  ////////////////////

  ngOnInit() {
    CustomLogger.logString("inside auth...");

    this.userProfile = new UserProfile();
    this.userProfile.login_name = "admin";
    this.userProfile.password = "1";

    this.loginForm = new FormGroup({
      login_name: new FormControl(),
      password: new FormControl()
    });
    this.loginForm.setValue(this.userProfile);
  }


  checkLogin() {
    CustomLogger.logString("About to login");
    this.userProfile = this.loginForm.value;
    CustomLogger.logString("login:" + this.userProfile.login_name);
    CustomLogger.logString("password:" + this.userProfile.password);

    this.authService.auth(
      this.userProfile.login_name,
      this.userProfile.password
    );
  }

  onClickExternalLogin() {
    CustomLogger.logString("external login....");
    this.router.navigate([""]);
  }

  onClickLogout(): void {
    CustomLogger.logString("authLogin: logging out");
    // this.keycloakAngular.logout();
    KeycloakService.logout();
    this.router.navigate(['home']);
    // window.location.href = "home";
  }
}