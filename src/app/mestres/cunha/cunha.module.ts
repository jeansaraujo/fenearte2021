import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CunhaPageRoutingModule } from './cunha-routing.module';

import { CunhaPage } from './cunha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CunhaPageRoutingModule
  ],
  declarations: [CunhaPage]
})
export class CunhaPageModule {}
