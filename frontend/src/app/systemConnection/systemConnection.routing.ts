import { Routes } from '@angular/router';
import { ExternalListMachinesComponent } from './external/externalListMachines.component';


export const SystemManagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'externalListMachines',
        component: ExternalListMachinesComponent,
        data: {
          title: 'External Machines',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'External Machines' }
          ]
        }
      }
    ]
  }
];
