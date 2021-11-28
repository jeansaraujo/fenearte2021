import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaePageRoutingModule } from './bae-routing.module';

import { BaePage } from './bae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaePageRoutingModule
  ],
  declarations: [BaePage]
})
export class BaePageModule {}
