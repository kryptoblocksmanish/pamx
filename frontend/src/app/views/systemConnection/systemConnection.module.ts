import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SystemConnectionRoutes } from './systemConnection.routing';
import { ListMachinesComponent } from './external/listMachines.component';
import { AccountsviewComponent } from './accountsView/accountsview.component';
// import { ButtonRenderComponent } from './external/ButtonRenderComponent.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(SystemConnectionRoutes),
    FormsModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    DataTableModule
  ],
  declarations: [
    ListMachinesComponent,
    AccountsviewComponent,
    // ButtonRenderComponent
  ],
  // entryComponents: [ButtonRenderComponent],
})
export class SystemConnectionModule { }
