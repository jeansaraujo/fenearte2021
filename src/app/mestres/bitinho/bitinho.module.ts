import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitinhoPageRoutingModule } from './bitinho-routing.module';

import { BitinhoPage } from './bitinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitinhoPageRoutingModule
  ],
  declarations: [BitinhoPage]
})
export class BitinhoPageModule {}
