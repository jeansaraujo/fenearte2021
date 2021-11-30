import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DmacaxeiraPageRoutingModule } from './dmacaxeira-routing.module';

import { DmacaxeiraPage } from './dmacaxeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DmacaxeiraPageRoutingModule
  ],
  declarations: [DmacaxeiraPage]
})
export class DmacaxeiraPageModule {}
