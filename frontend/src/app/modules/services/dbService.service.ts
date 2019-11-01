import { BaseDB } from "./baseDB.model";
import { Injectable } from "@angular/core";
import { CustomGlobalConstants } from "../utils/CustomGlobalConstants";
import { GlobalService } from "./global.service";
import { UserProfile } from "../models/UserProfile.model";
import { CustomLogger } from "../utils/CustomLogger";
import { HttpClient } from "@angular/common/http";
import { MachineProfile } from "../models/MachineProfile.model";

@Injectable()
export class DBService extends BaseDB {
    HOST_URL = CustomGlobalConstants.SERVER_URL;
    USER_PROFILES_HOST_URL = this.HOST_URL + "/users";
    MACHINE_PROFILES_HOST_URL = this.HOST_URL + "/machines";

    constructor(private http: HttpClient, private Globals: GlobalService) {
        super();
    }

    //users
    addUserProfile(userProfile: UserProfile) {
        let url = this.USER_PROFILES_HOST_URL + '/addUserProfile/';
        CustomLogger.logString("url:::" + url);
        return this.http.post(url, userProfile);
    }

    getAllUserProfiles() {
        return this.http.get(this.USER_PROFILES_HOST_URL + "/getAllUserProfiles");
    }


    //machines
    addMachineProfile(machine: MachineProfile) {
        let url = this.MACHINE_PROFILES_HOST_URL + '/addMachineProfile/';
        return this.http.post(url, machine);
    }
    editMachineProfile(machine: MachineProfile) {
        let url = this.MACHINE_PROFILES_HOST_URL + '/editMachineProfile/';
        return this.http.post(url, machine);
    }

    deleteMachineProfile(machine: MachineProfile) {
        let url = this.MACHINE_PROFILES_HOST_URL + '/deleteMachineProfile/';
        return this.http.post(url, machine);
    }

    getAllMachineProfiles() {
        return this.http.get(this.MACHINE_PROFILES_HOST_URL + "/getAllMachineProfiles");
    }


}