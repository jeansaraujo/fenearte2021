import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErasmoPageRoutingModule } from './erasmo-routing.module';

import { ErasmoPage } from './erasmo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErasmoPageRoutingModule
  ],
  declarations: [ErasmoPage]
})
export class ErasmoPageModule {}
