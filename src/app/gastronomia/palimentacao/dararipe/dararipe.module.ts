import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DararipePageRoutingModule } from './dararipe-routing.module';

import { DararipePage } from './dararipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DararipePageRoutingModule
  ],
  declarations: [DararipePage]
})
export class DararipePageModule {}
