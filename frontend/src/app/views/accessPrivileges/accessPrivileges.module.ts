import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular-6-datatable';
import { ListAccessPrivilegesComponent } from './listAccessPrivileges.component';
import { AccessPrivilegesRoutes } from './accessPrivileges.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(AccessPrivilegesRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListAccessPrivilegesComponent
  ]
})
export class AccessPrivilegesModule { }
