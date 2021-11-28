import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalimentacaoPageRoutingModule } from './palimentacao-routing.module';

import { PalimentacaoPage } from './palimentacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalimentacaoPageRoutingModule
  ],
  declarations: [PalimentacaoPage]
})
export class PalimentacaoPageModule {}
