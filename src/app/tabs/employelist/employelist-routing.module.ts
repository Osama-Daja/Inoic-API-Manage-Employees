import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployelistPage } from './employelist.page';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployelistPageRoutingModule {}
