import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "publichome", pathMatch: "full" },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tabs/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'publichome',
    loadChildren: () => import('./tabs/publichome/publichome.module').then(m => m.PublichomePageModule)
  },
  {
    path: 'privatehome',
    loadChildren: () => import('./tabs/privatehome/privatehome.module').then(m => m.PrivatehomePageModule)
  },
  {
    path: 'employelist',
    loadChildren: () => import('./tabs/employelist/employelist.module').then(m => m.EmployelistPageModule)
  },
  {
    path: 'adminlist',
    loadChildren: () => import('./tabs/adminlist/adminlist.module').then(m => m.AdminlistPageModule)
  },
  {
    path: 'inputemployee',
    loadChildren: () => import('./tabs/inputemployee/inputemployee.module').then(m => m.InputemployeePageModule)
    //,canActivate:[AuthGuard],data : {permittedRoles:['Admin' , 'Leader']}
  },
  {
    path: 'inputadmin',
    loadChildren: () => import('./tabs/inputadmin/inputadmin.module').then(m => m.InputadminPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
