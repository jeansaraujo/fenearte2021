import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PintorPageRoutingModule } from './pintor-routing.module';

import { PintorPage } from './pintor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PintorPageRoutingModule
  ],
  declarations: [PintorPage]
})
export class PintorPageModule {}
