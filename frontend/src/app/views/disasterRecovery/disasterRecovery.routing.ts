import { Routes } from '@angular/router';
import { ListDisasterRecoveryComponent } from './listDisasterRecovery.component';

export const DisasterRecoveryRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListDisasterRecoveryComponent,
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
