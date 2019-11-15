import { Injectable } from "@angular/core";
import { PasswordObj } from "../../models/passwordModule/PasswordObj.model";
import { HttpClient } from "@angular/common/http";
import { BaseServiceConfig } from "../baseServiceConfig";

@Injectable()
export class PasswordService extends BaseServiceConfig {

    constructor(private http:HttpClient){
        super();
    }

    /**
     * Change password for given machine uid
     * @param user_uid 
     * @param machine_uid 
     */
    changePassword(user_uid, machine_uid){
        //get the passwordobj related to this
        //change the password and update database
        let passwordObj = new PasswordObj();
        passwordObj.user_uid = user_uid;
        passwordObj.machine_uid = machine_uid;
        return this.http.post(this.PASSWORD_HOST + "/changePassword", passwordObj);
    }
}