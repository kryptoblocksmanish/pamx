import { Routes } from '@angular/router';
import { ListReportingComponent } from './listReporting.component';

export const ReportingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListReportingComponent,
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
