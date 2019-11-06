import { Routes } from '@angular/router';
import { ListNotificationsComponent } from './listNotifications.component';

export const NotificationsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListNotificationsComponent,
        data: {
          title: 'Notifications',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Users....' }
          ]
        }
      }
    ]
  }
];
