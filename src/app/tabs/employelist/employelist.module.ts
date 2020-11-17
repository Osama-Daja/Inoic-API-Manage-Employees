import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployelistPageRoutingModule } from './employelist-routing.module';

import { EmployelistPage } from './employelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployelistPageRoutingModule
  ],
  declarations: [EmployelistPage]
})
export class EmployelistPageModule {}
