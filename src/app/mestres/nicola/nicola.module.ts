import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NicolaPageRoutingModule } from './nicola-routing.module';

import { NicolaPage } from './nicola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NicolaPageRoutingModule
  ],
  declarations: [NicolaPage]
})
export class NicolaPageModule {}
