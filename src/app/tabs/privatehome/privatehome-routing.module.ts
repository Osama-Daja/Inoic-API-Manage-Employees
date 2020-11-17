import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatehomePage } from './privatehome.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatehomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatehomePageRoutingModule {}
