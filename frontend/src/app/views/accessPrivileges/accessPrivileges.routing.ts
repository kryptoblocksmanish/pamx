import { Routes } from '@angular/router';
import { ListAccessPrivilegesComponent } from './listAccessPrivileges.component';

export const AccessPrivilegesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListAccessPrivilegesComponent,
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
