import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLogger } from '../misc/utils/CustomLogger';
import { UserProfile } from '../misc/models/UserProfile.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../misc/services/auth.service';

@Component({
  selector: 'app-authLogin',
  templateUrl: './authLogin.component.html'
})
export class AuthLoginComponent implements OnInit, AfterViewInit {
  constructor(public router: Router, private authService: AuthService) { }

  userProfile: UserProfile;
  loginForm: FormGroup;
  login_name: FormControl;
  password: FormControl;

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

  ngAfterViewInit() {
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

  onClickExternalLogin(){
    CustomLogger.logString("external login....");
    this.router.navigate(["home"]);
  }
}
