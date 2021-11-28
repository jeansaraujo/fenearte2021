import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndigenasPageRoutingModule } from './indigenas-routing.module';

import { IndigenasPage } from './indigenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndigenasPageRoutingModule
  ],
  declarations: [IndigenasPage]
})
export class IndigenasPageModule {}
