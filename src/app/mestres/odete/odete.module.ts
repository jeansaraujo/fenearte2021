import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdetePageRoutingModule } from './odete-routing.module';

import { OdetePage } from './odete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdetePageRoutingModule
  ],
  declarations: [OdetePage]
})
export class OdetePageModule {}
