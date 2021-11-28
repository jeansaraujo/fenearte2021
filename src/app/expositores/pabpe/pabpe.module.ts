import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PabpePageRoutingModule } from './pabpe-routing.module';

import { PabpePage } from './pabpe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PabpePageRoutingModule
  ],
  declarations: [PabpePage]
})
export class PabpePageModule {}
