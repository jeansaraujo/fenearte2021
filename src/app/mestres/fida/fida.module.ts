import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidaPageRoutingModule } from './fida-routing.module';

import { FidaPage } from './fida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FidaPageRoutingModule
  ],
  declarations: [FidaPage]
})
export class FidaPageModule {}
