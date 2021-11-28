import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DamianaPageRoutingModule } from './damiana-routing.module';

import { DamianaPage } from './damiana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DamianaPageRoutingModule
  ],
  declarations: [DamianaPage]
})
export class DamianaPageModule {}
