import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsiqueiraPageRoutingModule } from './msiqueira-routing.module';

import { MsiqueiraPage } from './msiqueira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsiqueiraPageRoutingModule
  ],
  declarations: [MsiqueiraPage]
})
export class MsiqueiraPageModule {}
