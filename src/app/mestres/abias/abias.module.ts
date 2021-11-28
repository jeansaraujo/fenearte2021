import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbiasPageRoutingModule } from './abias-routing.module';

import { AbiasPage } from './abias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbiasPageRoutingModule
  ],
  declarations: [AbiasPage]
})
export class AbiasPageModule {}
