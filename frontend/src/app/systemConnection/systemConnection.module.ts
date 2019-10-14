import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SystemManagementRoutes } from './systemConnection.routing';
import { ExternalListMachinesComponent } from './external/externalListMachines.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(SystemManagementRoutes),
    FormsModule
  ],
  declarations: [
    ExternalListMachinesComponent
  ]
})
export class SystemManagementModule { }
