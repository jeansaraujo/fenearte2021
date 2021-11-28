import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WportoPageRoutingModule } from './wporto-routing.module';

import { WportoPage } from './wporto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WportoPageRoutingModule
  ],
  declarations: [WportoPage]
})
export class WportoPageModule {}
