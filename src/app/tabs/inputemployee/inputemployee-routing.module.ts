import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputemployeePage } from './inputemployee.page';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InputemployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputemployeePageRoutingModule {}
