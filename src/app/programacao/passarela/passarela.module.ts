import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassarelaPageRoutingModule } from './passarela-routing.module';

import { PassarelaPage } from './passarela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassarelaPageRoutingModule
  ],
  declarations: [PassarelaPage]
})
export class PassarelaPageModule {}
