import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputemployeePageRoutingModule } from './inputemployee-routing.module';

import { InputemployeePage } from './inputemployee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputemployeePageRoutingModule
  ],
  declarations: [InputemployeePage]
})
export class InputemployeePageModule {}
