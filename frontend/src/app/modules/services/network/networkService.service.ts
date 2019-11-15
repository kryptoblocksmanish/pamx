import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseServiceConfig } from "../baseServiceConfig";

@Injectable()
export class NetworkService extends BaseServiceConfig {
    constructor(private http: HttpClient) {
        super();
    }

    testConnect() {
        return this.http.get(this.NETWORK_HOST_URL + "/connectRDP");
    }
}