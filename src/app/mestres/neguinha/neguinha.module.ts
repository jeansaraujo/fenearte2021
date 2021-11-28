import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeguinhaPageRoutingModule } from './neguinha-routing.module';

import { NeguinhaPage } from './neguinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeguinhaPageRoutingModule
  ],
  declarations: [NeguinhaPage]
})
export class NeguinhaPageModule {}
