import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpositoresPageRoutingModule } from './expositores-routing.module';

import { ExpositoresPage } from './expositores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpositoresPageRoutingModule
  ],
  declarations: [ExpositoresPage]
})
export class ExpositoresPageModule {}
