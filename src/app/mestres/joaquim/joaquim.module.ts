import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoaquimPageRoutingModule } from './joaquim-routing.module';

import { JoaquimPage } from './joaquim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoaquimPageRoutingModule
  ],
  declarations: [JoaquimPage]
})
export class JoaquimPageModule {}
