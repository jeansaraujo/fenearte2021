import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VbritoPageRoutingModule } from './vbrito-routing.module';

import { VbritoPage } from './vbrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VbritoPageRoutingModule
  ],
  declarations: [VbritoPage]
})
export class VbritoPageModule {}
