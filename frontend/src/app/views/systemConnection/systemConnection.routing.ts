import { Routes } from '@angular/router';
import { ListMachinesComponent } from './external/listMachines.component';
import { AccountsviewComponent } from './accountsView/accountsview.component';

export const SystemConnectionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListMachinesComponent,
        data: {
          title: 'External Machines',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Machines' }
          ]
        }
      },
      {
        path: 'accounts',
        component: AccountsviewComponent,
        data: {
          title: 'Accounts View',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Machines' }
          ]
        }
      },
      
    ]
  }
];
