import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular-6-datatable';
import { ManagePasswordsRoutes } from './managePasswords.routing';
import { ListPasswordsComponent } from './showPasswords/listPasswords.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(ManagePasswordsRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListPasswordsComponent
  ]
})
export class ManagePasswordsModule { }
