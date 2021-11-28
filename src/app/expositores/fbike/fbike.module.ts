import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbikePageRoutingModule } from './fbike-routing.module';

import { FbikePage } from './fbike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbikePageRoutingModule
  ],
  declarations: [FbikePage]
})
export class FbikePageModule {}
