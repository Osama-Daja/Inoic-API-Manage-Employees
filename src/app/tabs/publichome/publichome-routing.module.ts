import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublichomePage } from './publichome.page';

const routes: Routes = [
  {
    path: '',
    component: PublichomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublichomePageRoutingModule {}
