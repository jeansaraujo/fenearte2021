import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomenageadosPageRoutingModule } from './homenageados-routing.module';

import { HomenageadosPage } from './homenageados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomenageadosPageRoutingModule
  ],
  declarations: [HomenageadosPage]
})
export class HomenageadosPageModule {}
