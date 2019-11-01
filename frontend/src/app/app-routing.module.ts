import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLoginComponent } from './auth/authLogin.component';
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';
import { FullComponent } from './layouts/full/full.component';
import { CRUDMachineComponent } from './views/systemConnection/external/crudMachine.component';
import { ExternalListMachinesComponent } from './views/systemConnection/external/externalListMachines.component';


export const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: AuthLoginComponent },
  // { path: 'secured', canActivate: [AuthGuard], component: FullComponent },
  // {
  //   path: 'dashboard/dashboard1',
  //   loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
  // },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'systemConnection/externalListMachines',
        // loadChildren: () => import('./views/systemConnection/systemConnection.module').then(m => m.SystemManagementModule)
        component: ExternalListMachinesComponent
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },

      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard/dashboard1',
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
      },



      {
        path: 'crudMachine',
        component: CRUDMachineComponent
      },
      {
        path: 'externalList',
        component: ExternalListMachinesComponent
      },

    ]
  },

  



  // {
  // 	path: 'secured-role',
  // 	canLoad: [AuthGuard],
  // 	loadChildren: 'app/secured-role/secured-role.module#SecuredRoleModule',
  // 	data: {
  // 		Permission: {
  // 			Role: 'AppRole',
  // 			RedirectTo: '403'
  // 		} as PermissionGuard
  // 	}
  // },
  // {
  // 	path: 'groupRestricted',
  // 	canLoad: [AuthGuard],
  // 	loadChildren: 'app/group-restricted/group-restricted.module#GroupRestrictedModule',
  // 	data: {
  // 		Permission: {
  // 			Only: ['User'],
  // 			RedirectTo: '403'
  // 		} as PermissionGuard
  // 	}
  // },

  // { path: '403', redirectTo: '404' },
  // { path: '404', redirectTo: '404' },

  // { path: '**', redirectTo: '404' },




  // {
  //   path: 'auth/authSignup',
  //   component: AuthSignupComponent
  // },
  // // { path: '', redirectTo: 'home', pathMatch: 'full' },

  // // { path: '', redirectTo: 'login', pathMatch: 'full' },

  // { path: 'login', component: AuthLoginComponent },
  // {
  //   path: '', component: FullComponent, canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'systemConnection',
  //       loadChildren: () => import('./systemConnection/systemConnection.module').then(m => m.SystemManagementModule)
  //     },

  //     {
  //       path: 'settings',
  //       loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  //     },

  //     { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'starter',
  //       loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  //     },
  //     {
  //       path: 'component',
  //       loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
  //     },
  //     { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  //     { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
  //     { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
  //     { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
  //     {
  //       path: 'widgets',
  //       loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
  //     },
  //     {
  //       path: 'extra-component',
  //       loadChildren:
  //         () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentsModule)
  //     },
  //     { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  //     {
  //       path: 'apps/email',
  //       loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
  //     },
  //     {
  //       path: 'sample-pages',
  //       loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
  //     }
  //   ]
  // },

  // {
  //   path: '',
  //   component: FullComponent,
  //   children: [
  //     { path: 'systemConnection', loadChildren: () => import('./systemConnection/systemConnection.module').then(m => m.SystemManagementModule) },
  //     { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'starter',
  //       loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  //     },
  //     {
  //       path: 'component',
  //       loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
  //     },
  //     { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  //     { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
  //     { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
  //     { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
  //     {
  //       path: 'widgets',
  //       loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
  //     },
  //     {
  //       path: 'extra-component',
  //       loadChildren:
  //         () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentsModule)
  //     },
  //     { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  //     {
  //       path: 'apps/email',
  //       loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
  //     },
  //     {
  //       path: 'sample-pages',
  //       loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren:
  //         () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  //     }
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }