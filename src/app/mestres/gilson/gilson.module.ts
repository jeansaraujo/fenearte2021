import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GilsonPageRoutingModule } from './gilson-routing.module';

import { GilsonPage } from './gilson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GilsonPageRoutingModule
  ],
  declarations: [GilsonPage]
})
export class GilsonPageModule {}
