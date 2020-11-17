import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublichomePageRoutingModule } from './publichome-routing.module';

import { PublichomePage } from './publichome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublichomePageRoutingModule
  ],
  declarations: [PublichomePage]
})
export class PublichomePageModule {}
