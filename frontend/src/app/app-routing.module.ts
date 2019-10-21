import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthLoginComponent } from './auth/authLogin.component';
import { AuthSignupComponent } from './auth/authSignup.component';
import { AuthGuardService } from './misc/services/auth-guard.service';

export const routes: Routes = [

  // {
  //   path: '',
  //   component: AuthLoginComponent
  // },
  {
    path: 'auth/authSignup',
    component: AuthSignupComponent
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: AuthLoginComponent },
  {
    path: 'home', component: FullComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'systemConnection', loadChildren: () => import('./systemConnection/systemConnection.module').then(m => m.SystemManagementModule) },
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
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
      }
    ]
  },


  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'systemConnection', loadChildren: () => import('./systemConnection/systemConnection.module').then(m => m.SystemManagementModule) },
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
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
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
