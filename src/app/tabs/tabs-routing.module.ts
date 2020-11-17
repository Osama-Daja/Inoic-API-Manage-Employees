import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage
  },
  {
    path: '',
    redirectTo: '/publichome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}


/*

,
          {
            path: 'inputemployee',
            loadChildren: () =>
              import('../tabs/inputemployee/inputemployee.module').then(m => m.InputemployeePageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
          },
          {
            path: 'inputemployee',
            loadChildren: () =>
              import('../tabs/inputemployee/inputemployee.module').then(m => m.InputemployeePageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
          },
          {
            path: 'inputadmin',
            loadChildren: () =>
              import('../tabs/inputadmin/inputadmin.module').then(m => m.InputadminPageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
          },
          {
            path: 'employelist',
            loadChildren: () =>
              import('../tabs/employelist/employelist.module').then(m => m.EmployelistPageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
          },
          {
            path: 'adminlist',
                loadChildren: () =>
                  import('../tabs/adminlist/adminlist.module').then(m => m.AdminlistPageModule)
                  ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
          }






      { path: "", redirectTo: "publichome", pathMatch: "full" },
      {
        path: 'publichome',
            loadChildren: () =>
              import('../tabs/publichome/publichome.module').then(m => m.PublichomePageModule)
      },
      {
        path: 'login',
            loadChildren: () =>
              import('../tabs/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'adminlist',
            loadChildren: () =>
              import('../tabs/adminlist/adminlist.module').then(m => m.AdminlistPageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
      },
      {
        path: 'employelist',
            loadChildren: () =>
              import('../tabs/employelist/employelist.module').then(m => m.EmployelistPageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
      },
      {
        path: 'inputadmin',
            loadChildren: () =>
              import('../tabs/inputadmin/inputadmin.module').then(m => m.InputadminPageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
      },
      {
        path: 'inputemployee',
            loadChildren: () =>
              import('../tabs/inputemployee/inputemployee.module').then(m => m.InputemployeePageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
      },
      {
        path: 'privatehome',
            loadChildren: () =>
              import('../tabs/privatehome/privatehome.module').then(m => m.PrivatehomePageModule)
              ,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
      }



      
*/
