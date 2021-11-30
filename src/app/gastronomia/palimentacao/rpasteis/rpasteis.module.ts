import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpasteisPageRoutingModule } from './rpasteis-routing.module';

import { RpasteisPage } from './rpasteis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpasteisPageRoutingModule
  ],
  declarations: [RpasteisPage]
})
export class RpasteisPageModule {}
