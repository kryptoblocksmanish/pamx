import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MiscService {
    KEYCLOAK_SERVER = "http://localhost:8080";
    BASE_KEYCLOAK_API = this.KEYCLOAK_SERVER + "/auth/realms/";
    constructor(private http: HttpClient) {
    }

    getKeycloakRolesList(): Observable<Object> {
        let realm = "keycloak-auth";
        let userId = "kerri";
        let url = this.BASE_KEYCLOAK_API + realm + "/users/ " + userId + "/role-mappings/real";
        return this.http.get(this.BASE_KEYCLOAK_API + url);
    }


    getKeycloakToken() {
        let realm = "keycloak-auth";
        let username = "admin";
        let password = "admin";
        let grant_type = "password";
        let client_id = "frontend";
        let client_secret = "36cdf012-1793-4094-9fb0-91c268ee7b47";
        let url = this.BASE_KEYCLOAK_API + realm + "/protocol/openid-connect/token";
        let body = {
            "username": username,
            "password": password,
            "grant_type": grant_type,
            "client_id": client_id,
            "client_secret": client_secret
        }
        return this.http.post(url, body);
    }
}