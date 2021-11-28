import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZecablocoPageRoutingModule } from './zecabloco-routing.module';

import { ZecablocoPage } from './zecabloco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZecablocoPageRoutingModule
  ],
  declarations: [ZecablocoPage]
})
export class ZecablocoPageModule {}
