import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutettoPageRoutingModule } from './frutetto-routing.module';

import { FrutettoPage } from './frutetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutettoPageRoutingModule
  ],
  declarations: [FrutettoPage]
})
export class FrutettoPageModule {}
