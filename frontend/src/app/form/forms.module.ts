import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";

import { FormsRoutes } from './forms.routing';
import { BasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CustomFormsModule } from 'ng2-validation';
import { ArchwizardModule } from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NGXFormWizardModule,
    CustomFormsModule,
    ArchwizardModule
  ],
  declarations: [
    BasicComponent,
    FormvalComponent,
    MultiselectComponent
  ]
})
export class FormModule { }
