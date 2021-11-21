import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseuPageRoutingModule } from './museu-routing.module';

import { MuseuPage } from './museu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseuPageRoutingModule
  ],
  declarations: [MuseuPage]
})
export class MuseuPageModule {}
