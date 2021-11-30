import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbahiaPageRoutingModule } from './abahia-routing.module';

import { AbahiaPage } from './abahia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbahiaPageRoutingModule
  ],
  declarations: [AbahiaPage]
})
export class AbahiaPageModule {}
