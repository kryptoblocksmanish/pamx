import { Routes } from '@angular/router';
import { ListMachinesComponent } from './external/listMachines.component';

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
      
    ]
  }
];
