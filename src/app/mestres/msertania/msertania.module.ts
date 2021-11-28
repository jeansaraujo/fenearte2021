import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsertaniaPageRoutingModule } from './msertania-routing.module';

import { MsertaniaPage } from './msertania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsertaniaPageRoutingModule
  ],
  declarations: [MsertaniaPage]
})
export class MsertaniaPageModule {}
