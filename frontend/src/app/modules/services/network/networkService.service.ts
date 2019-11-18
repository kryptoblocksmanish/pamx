import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseServiceConfig } from "../baseServiceConfig";

@Injectable()
export class NetworkService extends BaseServiceConfig {
    constructor(private http: HttpClient) {
        super();
    }

    testConnectRDP() {
        return this.http.get(this.NETWORK_HOST_URL + "/testConnectRDP");
    }

    testConnectSSH(){
        return this.http.get(this.NETWORK_HOST_URL + "/testConnectSSH");
    }
}