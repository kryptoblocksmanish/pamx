// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
// import { GlobalService } from '../../modules/services/global.service';
// import { CustomLogger } from '../../modules/utils/CustomLogger';
// import { KeycloakService } from '../auth/keycloak.service';
// import { PermissionGuard } from '../model/permission-guard';

// @Injectable()
// export class AuthGuardService implements CanActivate, CanLoad {

//     constructor(public router: Router, private keycloakService: KeycloakService, private Globals: GlobalService) {
//     }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         let url: string = state.url;
//         return this.checkLogin(url);
//     }

//     /**
//      * Checks if a user is logged in before activating the secured page.
//      * @param url
//      */
//     checkLogin(url: string): boolean {
//         CustomLogger.logStringWithObject("AuthGuard: KeycloakService:::", KeycloakService);
//         CustomLogger.logStringWithObject("AuthGuard: KeycloakService.auth.loggedIn::", KeycloakService.auth.loggedIn)
//         CustomLogger.logStringWithObject("AuthGuard: KeycloakService.auth.authz::", KeycloakService.auth.authz)

//         if (KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated) {
//             CustomLogger.logString("User is LOGGED IN.....");
//             CustomLogger.logStringWithObject("KeycloakService.auth::", KeycloakService.auth);
//             CustomLogger.logStringWithObject("KeycloakService.auth.authz::", KeycloakService.auth.authz);

//             KeycloakService.auth.authz
//                 .loadUserProfile()
//                 .success(data => {
//                     CustomLogger.logStringWithObject("USER INFO:::", data);
//                 })
//                 .error((err) => {
//                     CustomLogger.logStringWithObject("Failed to load profile:::", err);
//                 });

//             return true;
//         } else {
//             CustomLogger.logString("User is NOT LOGGED IN .....");
//             KeycloakService.login();
//             return false;
//         }
//     }

//     /**
//      * Checks if the logged in user have enough privilege to load the page. Group can be specified in the app-routing.module routes. 
//      * Note that currently keycloak is not sending the list of roles that's why we are using groups.
//      * @param route The route
//      */
//     canLoad(route: Route): boolean {
//         CustomLogger.logString("Inside canLoad of auth-guard...");
//         if (!(KeycloakService.auth.loggedIn && KeycloakService.auth.authz.authenticated)) {
//             KeycloakService.login();
//             return false;
//         }

//         let data = route.data["Permission"] as PermissionGuard;
//         CustomLogger.logStringWithObject("CUrrent role::::: ", data.Role);
//         if (data.Role) {
//             let hasDefined = KeycloakService.hasRole(data.Role)
//             if (hasDefined)
//                 return true;

//             if (data.RedirectTo && data.RedirectTo !== undefined)
//                 this.router.navigate([data.RedirectTo]);

//             return false;

//         } else {
//             console.log('unrole');

//             if (Array.isArray(data.Only) && Array.isArray(data.Except)) {
//                 throw "Can't use both 'Only' and 'Except' in route data.";
//             }

//             if (Array.isArray(data.Only)) {
//                 let hasDefined = KeycloakService.hasGroups(data.Only)
//                 if (hasDefined)
//                     return true;

//                 if (data.RedirectTo && data.RedirectTo !== undefined)
//                     this.router.navigate([data.RedirectTo]);

//                 return false;
//             }

//             if (Array.isArray(data.Except)) {
//                 let hasDefined = KeycloakService.hasGroups(data.Except)
//                 if (!hasDefined)
//                     return true;

//                 if (data.RedirectTo && data.RedirectTo !== undefined)
//                     this.router.navigate([data.RedirectTo]);

//                 return false;
//             }
//         }
//     }

// }