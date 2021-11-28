import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LgaldinoPageRoutingModule } from './lgaldino-routing.module';

import { LgaldinoPage } from './lgaldino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LgaldinoPageRoutingModule
  ],
  declarations: [LgaldinoPage]
})
export class LgaldinoPageModule {}
