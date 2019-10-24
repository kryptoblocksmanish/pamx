import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from '../auth/authLogin.component';
import { AuthSignupComponent } from '../auth/authSignup.component';
import { SecuredComponent } from '../secured/secured.component';
import { HomeComponent } from '../home/home.component';
import { ExternalListMachinesComponent } from '../systemConnection/external/externalListMachines.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthSignupComponent,
    SecuredComponent,
    HomeComponent,
    ExternalListMachinesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  exports: [
    FormsModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { } 
