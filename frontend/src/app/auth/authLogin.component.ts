import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLogger } from '../misc/utils/CustomLogger';
import { UserProfile } from '../misc/models/UserProfile.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authLogin',
  templateUrl: './authLogin.component.html'
})
export class AuthLoginComponent implements OnInit, AfterViewInit {
  constructor(public router: Router) { }

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
    /*$(function() {
            $(".preloader").fadeOut();
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });*/
  }

  checkLogin() {
    CustomLogger.logString("About to login");
    this.userProfile = this.loginForm.value;
    CustomLogger.logString("login:" + this.userProfile.login_name);
    CustomLogger.logString("password:" + this.userProfile.password);
    localStorage.setItem('isLoggedin', 'true');
    if (this.userProfile.login_name == "admin" && this.userProfile.password == "1") {
      this.router.navigate(["/dashboard/dashboard1"]);
    }

  }
}
