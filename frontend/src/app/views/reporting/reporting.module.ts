import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReportingRoutes } from './reporting.routing';
import { ListReportingComponent } from './listReporting.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(ReportingRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListReportingComponent
  ]
})
export class ReportingModule { }
