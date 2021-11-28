import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcriolasPageRoutingModule } from './ccriolas-routing.module';

import { CcriolasPage } from './ccriolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcriolasPageRoutingModule
  ],
  declarations: [CcriolasPage]
})
export class CcriolasPageModule {}
