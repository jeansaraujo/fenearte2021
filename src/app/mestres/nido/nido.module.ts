import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NidoPageRoutingModule } from './nido-routing.module';

import { NidoPage } from './nido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NidoPageRoutingModule
  ],
  declarations: [NidoPage]
})
export class NidoPageModule {}
