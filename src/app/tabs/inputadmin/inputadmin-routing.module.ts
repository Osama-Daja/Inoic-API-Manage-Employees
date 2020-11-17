import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputadminPage } from './inputadmin.page';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InputadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputadminPageRoutingModule {}
