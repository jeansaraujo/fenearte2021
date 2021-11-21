import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeneartePageRoutingModule } from './fenearte-routing.module';

import { FeneartePage } from './fenearte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeneartePageRoutingModule
  ],
  declarations: [FeneartePage]
})
export class FeneartePageModule {}
