import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcarrancasPageRoutingModule } from './fcarrancas-routing.module';

import { FcarrancasPage } from './fcarrancas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcarrancasPageRoutingModule
  ],
  declarations: [FcarrancasPage]
})
export class FcarrancasPageModule {}
