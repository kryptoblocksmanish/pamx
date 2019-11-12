import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { FullComponent } from './layouts/full/full.component';
import { P404Component } from './views/error/404.component';
import { CRUDMachineComponent } from './views/systemConnection/external/crudMachine.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    // pathMatch: 'full',
    children: [
      { path: '', redirectTo: '/mydashboard', pathMatch: 'full' },
      {
        path: 'listMachines',
        loadChildren: './views/systemConnection/systemConnection.module#SystemConnectionModule'
      },
      {
        path: 'settings',
        // loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
        loadChildren: './views/settings/settings.module#SettingsModule'
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      // },
      // {
      //   path: 'dashboard/dashboard1',
      //   loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      // },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'mydashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      // {
      //   path: 'dashboard/dashboard1',
      //   loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      // },
      
      {
        path: 'crudMachine',
        component: CRUDMachineComponent
      },      
      {
        path: 'listPasswords',
        loadChildren: './views/managePasswords/managePasswords.module#ManagePasswordsModule'
      },
      {
        path: 'listAccessPrivileges',
        loadChildren: './views/accessPrivileges/accessPrivileges.module#AccessPrivilegesModule'
      },
      {
        path: 'listDisasterRecovery',
        loadChildren: './views/disasterRecovery/disasterRecovery.module#DisasterRecoveryModule'
      },
      {
        path: 'listNotifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'listReporting',
        loadChildren: './views/reporting/reporting.module#ReportingModule'
      },
      {
        path: 'listSessionManagement',
        loadChildren: './views/sessionManagement/sessionManagement.module#SessionManagementModule'
      },








      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentsModule)
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {
        path: 'apps/email',
        loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
      },
      {
        path: 'sample-pages',
        loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
      },
      
    ]
  },

  { path: '**', redirectTo: '404' },
  { path: '404', component: P404Component },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: false }), NgbModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }