import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZedomestrePageRoutingModule } from './zedomestre-routing.module';

import { ZedomestrePage } from './zedomestre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZedomestrePageRoutingModule
  ],
  declarations: [ZedomestrePage]
})
export class ZedomestrePageModule {}
