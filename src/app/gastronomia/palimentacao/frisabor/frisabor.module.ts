import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrisaborPageRoutingModule } from './frisabor-routing.module';

import { FrisaborPage } from './frisabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrisaborPageRoutingModule
  ],
  declarations: [FrisaborPage]
})
export class FrisaborPageModule {}
