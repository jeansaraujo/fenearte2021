import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsolidariasPageRoutingModule } from './rsolidarias-routing.module';

import { RsolidariasPage } from './rsolidarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsolidariasPageRoutingModule
  ],
  declarations: [RsolidariasPage]
})
export class RsolidariasPageModule {}
