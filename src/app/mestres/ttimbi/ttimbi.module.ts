import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtimbiPageRoutingModule } from './ttimbi-routing.module';

import { TtimbiPage } from './ttimbi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtimbiPageRoutingModule
  ],
  declarations: [TtimbiPage]
})
export class TtimbiPageModule {}
