import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationDialogComponent } from "../../views/misc/confirmDialog.component";
import { BaseServiceConfig } from "./baseServiceConfig";

@Injectable()
export class MiscService extends BaseServiceConfig {
    KEYCLOAK_SERVER = "http://localhost:8080";
    BASE_KEYCLOAK_API = this.KEYCLOAK_SERVER + "/auth/realms/";
    constructor(private http: HttpClient, private modalService: NgbModal) {
        super();
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


    public confirmDialogBox(
        title: string,
        message: string,
        btnOkText: string = 'OK',
        btnCancelText: string = 'Cancel',
        dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
        const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
    
        return modalRef.result;
      }


}