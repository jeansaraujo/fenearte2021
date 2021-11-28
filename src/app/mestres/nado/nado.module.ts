import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NadoPageRoutingModule } from './nado-routing.module';

import { NadoPage } from './nado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NadoPageRoutingModule
  ],
  declarations: [NadoPage]
})
export class NadoPageModule {}
