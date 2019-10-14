import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from '../auth/authLogin.component';
import { AuthSignupComponent } from '../auth/authSignup.component';

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthSignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { } 