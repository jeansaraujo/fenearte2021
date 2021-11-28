import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsanteiroPageRoutingModule } from './rsanteiro-routing.module';

import { RsanteiroPage } from './rsanteiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsanteiroPageRoutingModule
  ],
  declarations: [RsanteiroPage]
})
export class RsanteiroPageModule {}
