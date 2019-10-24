import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeycloakAngularModule } from 'keycloak-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner.component';
import * as $ from 'jquery';
import { DBService } from './modules/services/dbService.service';
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { KeycloakService } from "./core/auth/keycloak.service";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    PerfectScrollbarModule,
    AppRoutingModule,
    SharedModule,
    KeycloakAngularModule
  ],
  providers: [
    DBService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    KeycloakService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => keycloak.init({
//     config: {
//       url: 'http://localhost:8080/auth',
//       realm: 'KryptoIAM',
//       clientId: 'MyClient1'
//     },
//     initOptions: {
//       onLoad: 'login-required',
//       checkLoginIframe: false
//     },
//     enableBearerInterceptor: true,
//     bearerExcludedUrls: ['/assets', '/clients/public']
//   });
// }