import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivatehomePageRoutingModule } from './privatehome-routing.module';

import { PrivatehomePage } from './privatehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivatehomePageRoutingModule
  ],
  declarations: [PrivatehomePage]
})
export class PrivatehomePageModule {}
