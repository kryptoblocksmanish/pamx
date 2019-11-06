import { Routes } from '@angular/router';
import { ListSessionManagementComponent } from './listSessionManagement.component';

export const SessionManagementRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListSessionManagementComponent,
        data: {
          title: 'Access Privileges',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users....' }
          ]
        }
      }
    ]
  }
];
