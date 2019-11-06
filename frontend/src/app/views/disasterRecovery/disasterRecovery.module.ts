import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DisasterRecoveryRoutes } from './disasterRecovery.routing';
import { ListDisasterRecoveryComponent } from './listDisasterRecovery.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(DisasterRecoveryRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListDisasterRecoveryComponent
  ]
})
export class DisasterRecoveryModule { }
