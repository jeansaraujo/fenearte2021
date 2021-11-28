import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FnucaPageRoutingModule } from './fnuca-routing.module';

import { FnucaPage } from './fnuca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FnucaPageRoutingModule
  ],
  declarations: [FnucaPage]
})
export class FnucaPageModule {}
