import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnenemPageRoutingModule } from './snenem-routing.module';

import { SnenemPage } from './snenem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnenemPageRoutingModule
  ],
  declarations: [SnenemPage]
})
export class SnenemPageModule {}
