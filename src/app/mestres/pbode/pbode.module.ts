import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbodePageRoutingModule } from './pbode-routing.module';

import { PbodePage } from './pbode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbodePageRoutingModule
  ],
  declarations: [PbodePage]
})
export class PbodePageModule {}
