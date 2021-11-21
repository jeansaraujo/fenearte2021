import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaoPageRoutingModule } from './salao-routing.module';

import { SalaoPage } from './salao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaoPageRoutingModule
  ],
  declarations: [SalaoPage]
})
export class SalaoPageModule {}
