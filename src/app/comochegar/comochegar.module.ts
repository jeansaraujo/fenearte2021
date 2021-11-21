import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComochegarPageRoutingModule } from './comochegar-routing.module';

import { ComochegarPage } from './comochegar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComochegarPageRoutingModule
  ],
  declarations: [ComochegarPage]
})
export class ComochegarPageModule {}
