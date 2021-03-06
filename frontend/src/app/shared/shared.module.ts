import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { AuthLoginComponent } from '../auth/authLogin.component';
import { AuthSignupComponent } from '../auth/authSignup.component';
// import { HomeComponent } from '../home/home.component';
import { SecuredComponent } from '../secured/secured.component';
import { CRUDMachineComponent } from '../views/systemConnection/external/crudMachine.component';
import { ConfirmationDialogComponent } from '../views/misc/confirmDialog.component';

@NgModule({
  declarations: [
    // AuthLoginComponent,
    AuthSignupComponent,
    SecuredComponent,
    // HomeComponent,
    CRUDMachineComponent,
    ConfirmationDialogComponent
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
    ConfirmationDialogComponent
  ]
})
export class SharedModule { } 
