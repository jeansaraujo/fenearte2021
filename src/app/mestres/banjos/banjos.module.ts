import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanjosPageRoutingModule } from './banjos-routing.module';

import { BanjosPage } from './banjos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanjosPageRoutingModule
  ],
  declarations: [BanjosPage]
})
export class BanjosPageModule {}
