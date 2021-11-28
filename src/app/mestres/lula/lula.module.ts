import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LulaPageRoutingModule } from './lula-routing.module';

import { LulaPage } from './lula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LulaPageRoutingModule
  ],
  declarations: [LulaPage]
})
export class LulaPageModule {}
