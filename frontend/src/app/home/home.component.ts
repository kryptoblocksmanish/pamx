// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { KeycloakService } from '../core/auth/keycloak.service';

// @Component( {
//     selector: 'app-home',
//     templateUrl: './home.component.html',
//     styleUrls: ['./home.component.css']
// } )
// export class HomeComponent implements OnInit {

//     animes: any
//     errors: any

//     constructor( private http: HttpClient ) { }

//     ngOnInit() {
//     }

//     getKeycloakService() {
//         return KeycloakService
//     }

//     callApi() {
//         this.errors = null;
//         this.http.get( environment.apiUrl + "/animes" ).subscribe( data => {
//             this.animes = data
//         }, ( err: HttpErrorResponse ) => {
//             this.errors = err
//         } );
//     }

//     stringify( val ) {
//         return JSON.stringify( val );
//     }

// }
