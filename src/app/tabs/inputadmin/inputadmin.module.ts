import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputadminPageRoutingModule } from './inputadmin-routing.module';

import { InputadminPage } from './inputadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputadminPageRoutingModule
  ],
  declarations: [InputadminPage]
})
export class InputadminPageModule {}
