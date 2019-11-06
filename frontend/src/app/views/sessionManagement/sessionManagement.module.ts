import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SessionManagementRoutes } from './sessionManagement.routing';
import { ListSessionManagementComponent } from './listSessionManagement.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(SessionManagementRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListSessionManagementComponent
  ]
})
export class SessionManagementModule { }
