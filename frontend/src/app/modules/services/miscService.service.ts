import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MiscService {
    KEYCLOAK_SERVER = "http://localhost:8080";
    BASE_KEYCLOAK_API = this.KEYCLOAK_SERVER + "/auth/admin/realms/";
    constructor(private http: HttpClient) {
    }

    getKeycloakRolesList(): Observable<Object> {
        let realm = "keycloak-auth";
        let userId = "kerri";
        let url = this.BASE_KEYCLOAK_API + realm + "/users/ " + userId + "/role-mappings/real";
        return this.http.get(this.BASE_KEYCLOAK_API + url);
    }
}