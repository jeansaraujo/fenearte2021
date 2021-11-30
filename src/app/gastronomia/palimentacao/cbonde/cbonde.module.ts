import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbondePageRoutingModule } from './cbonde-routing.module';

import { CbondePage } from './cbonde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbondePageRoutingModule
  ],
  declarations: [CbondePage]
})
export class CbondePageModule {}
