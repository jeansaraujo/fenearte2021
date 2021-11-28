import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PabPageRoutingModule } from './pab-routing.module';

import { PabPage } from './pab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PabPageRoutingModule
  ],
  declarations: [PabPage]
})
export class PabPageModule {}
