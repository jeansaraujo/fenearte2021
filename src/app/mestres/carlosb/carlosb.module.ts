import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarlosbPageRoutingModule } from './carlosb-routing.module';

import { CarlosbPage } from './carlosb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarlosbPageRoutingModule
  ],
  declarations: [CarlosbPage]
})
export class CarlosbPageModule {}
