import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcoxinhaPageRoutingModule } from './rcoxinha-routing.module';

import { RcoxinhaPage } from './rcoxinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcoxinhaPageRoutingModule
  ],
  declarations: [RcoxinhaPage]
})
export class RcoxinhaPageModule {}
