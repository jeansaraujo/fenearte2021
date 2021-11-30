import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbarnabePageRoutingModule } from './ebarnabe-routing.module';

import { EbarnabePage } from './ebarnabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbarnabePageRoutingModule
  ],
  declarations: [EbarnabePage]
})
export class EbarnabePageModule {}
