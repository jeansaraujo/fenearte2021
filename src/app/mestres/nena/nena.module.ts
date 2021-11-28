import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NenaPageRoutingModule } from './nena-routing.module';

import { NenaPage } from './nena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NenaPageRoutingModule
  ],
  declarations: [NenaPage]
})
export class NenaPageModule {}
