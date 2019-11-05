import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CustomLogger } from '../../modules/utils/CustomLogger';
import { GlobalService } from '../../modules/services/global.service';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {

    static auth: any = {};
    static redirectUrl: string;

    /**
     * Initialized keycloak client
     */
    static init(): Promise<any> {
        let keycloakAuth: any = new Keycloak('assets/keycloak.json');
        KeycloakService.auth.loggedIn = false;
        console.log("keycloakservice: keycloakAuth:", keycloakAuth);

        return new Promise((resolve, reject) => {
            keycloakAuth.init({ onLoad: 'check-sso' })
                .success(() => {
                    console.log("keycloakservice: success...........keycloakauth:", keycloakAuth);
                    try {
                        KeycloakService.auth.loggedIn = true;
                        KeycloakService.auth.authz = keycloakAuth;
                        KeycloakService.auth.registerUrl = KeycloakService.auth.authz.createRegisterUrl();
                        KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/" + environment.keycloakRealm + "/protocol/openid-connect/logout?redirect_uri=" + environment.baseUrl + "/index.html";

                        if (keycloakAuth && keycloakAuth.tokenParsed) {
                            GlobalService.current_username = keycloakAuth.tokenParsed.preferred_username;
                        }

                        resolve();
                    } catch (error) {
                        CustomLogger.logError(error);
                        CustomLogger.logString("Redirecting to home...");
                        // window.location.href = "home";  
                    }

                })
                .error(() => {
                    console.log("keycloakservice: error..........");
                    reject();
                    window.location.href = "home";
                });
        });
    }

    /**
     * Checks if the logged user is a member of the specified group
     * 
     * @param groupName group name defined in keycloak
     */
    static hasGroup(groupName: string): boolean {
        return KeycloakService.auth.authz != null && KeycloakService.auth.authz.authenticated && KeycloakService.auth.authz.idTokenParsed.groups.indexOf("/" + groupName) !== -1 ? true : false;
    }

    /**
     * Checks if the logged user is a member of the specified groups
     * 
     * @param groupNames a list of group names defined in keycloak
     */
    static hasGroups(groupNames: string[]): boolean {
        if (!groupNames) {
            return false;
        }
        return groupNames.some(e => {
            if (typeof e === "string") {
                return KeycloakService.hasGroup(e);
            }
        });
    }

    /**
     * Checks if the logged user has the role specified
     * 
     * @param roleName The name of the role
     * @param resource The keycloak client
     */
    static hasRole(roleName: string, resource?: string): boolean {
        return KeycloakService.auth.authz.hasRealmRole(roleName) || KeycloakService.auth.authz.hasResourceRole(roleName) || KeycloakService.auth.authz.hasResourceRole(roleName, resource);
    }

    /**
     * Logout the current user
     */
    static logout() {
        console.log('*** LOGOUT ***');
        KeycloakService.auth.loggedIn = false;
        // KeycloakService.auth.authz.logout({ redirectUri: "home" });
        // window.location.href = KeycloakService.auth.logoutUrl;
        KeycloakService.auth.authz.logout({ redirectUri: KeycloakService.auth.logoutUrl });
        KeycloakService.auth.authz = null;
    }

    /**
     * Redirects to keycloak login page
     */
    static login() {
        console.log("keycloak.service.ts: login:KeycloakService.auth:", KeycloakService.auth);
        console.log("keycloak.service.ts: login:KeycloakService.auth.authz:", KeycloakService.auth.authz);
        // if (!KeycloakService.auth || KeycloakService.auth.authz){
        //     window.location.href = "home";
        // } else 
        // if (KeycloakService.auth != undefined && KeycloakService.auth.authz != undefined)
        //     KeycloakService.auth.authz.login();
        // else {
        //     this.logout();
        // }
        KeycloakService.auth.authz.login();
    }

    /**
     * Returns the token of the currently logged user
     */
    static getToken(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (KeycloakService.auth.authz.token) {
                KeycloakService.auth.authz.updateToken(5)
                    .success(() => {
                        resolve(<string>KeycloakService.auth.authz.token);
                    })
                    .error(() => {
                        reject('Failed to refresh token');
                    });
            }
        });
    }

    /**
     * Returns true if the current user is logged in
     */
    static isLogged(): boolean {
        return KeycloakService.auth.authz != null && KeycloakService.auth.authz.authenticated;
    }

    /**
     * Returns keycloak registration url
     */
    static createRegisterUrl() {
        return KeycloakService.auth.registerUrl;
    }
}