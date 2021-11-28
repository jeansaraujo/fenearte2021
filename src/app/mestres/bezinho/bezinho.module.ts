import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BezinhoPageRoutingModule } from './bezinho-routing.module';

import { BezinhoPage } from './bezinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BezinhoPageRoutingModule
  ],
  declarations: [BezinhoPage]
})
export class BezinhoPageModule {}
