import { Routes } from '@angular/router';
import { ListPasswordsComponent } from './showPasswords/listPasswords.component';


export const ManagePasswordsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPasswordsComponent,
        data: {
          title: 'Password List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users....' }
          ]
        }
      }
    ]
  }
];
