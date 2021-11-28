import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuiosquePageRoutingModule } from './quiosque-routing.module';

import { QuiosquePage } from './quiosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuiosquePageRoutingModule
  ],
  declarations: [QuiosquePage]
})
export class QuiosquePageModule {}
