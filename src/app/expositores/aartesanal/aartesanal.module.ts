import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AartesanalPageRoutingModule } from './aartesanal-routing.module';

import { AartesanalPage } from './aartesanal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AartesanalPageRoutingModule
  ],
  declarations: [AartesanalPage]
})
export class AartesanalPageModule {}
