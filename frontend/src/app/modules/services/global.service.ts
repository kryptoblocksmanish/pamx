import { Injectable } from '@angular/core';
import { UserSessionTracking } from '../models/userSessionTracking.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  private is_valid: boolean = true;//should be false on startup
  private current_page_permission = [];
  private company_category_name: string = "";
  private company_role_name: string = "";
  private current_user_session_tracking: UserSessionTracking = null;
  private last_login_time = Date.now();


  static current_username: string = "";
  static current_role: string = "";

  // setCurrentUsername(username) {
  //   this.current_username = username;
  // }

  // getCurrentUserName(){
  //   return this.current_username;
  // }

  isUserValid() {
    return this.is_valid;
  }

  setUserValid(is_valid = false) {
    this.is_valid = is_valid;
  }

  getCurrentPagePermission() {
    return this.current_page_permission;
  }
  setCurrentPagePermission(currentPagePermission: []) {
    this.current_page_permission = currentPagePermission;
  }

  getCompanyCategoryName() {
    return this.company_category_name;
  }
  setCompanyCategoryName(companyCategoryName) {
    this.company_category_name = companyCategoryName;
  }

  getCompanyRoleName() {
    return this.company_role_name;
  }
  setCompanyRoleName(companyRoleName) {
    this.company_role_name = companyRoleName;
  }


  getCurrentUserSessionTracking() {
    return this.current_user_session_tracking;
  }
  setCurrentUserSessionTracking(currentUserSessionTracking: UserSessionTracking) {
    this.current_user_session_tracking = currentUserSessionTracking;
  }

  getLastLoginTime() {
    return this.last_login_time;
  }
  setLastLoginTime(lastLoginTime) {
    this.last_login_time = lastLoginTime;
  }

  clearAll() {
    this.is_valid = false;
    this.current_page_permission = [];
    this.current_user_session_tracking = null;
  }

  showAll() {
    console.log("is_valid:" + this.is_valid);
    console.log("current_page_permission:", this.current_page_permission);
    console.log("company_category_name:" + this.company_category_name);
    console.log("company_role_name:" + this.company_role_name);
  }
}
