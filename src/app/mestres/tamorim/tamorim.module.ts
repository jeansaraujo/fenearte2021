import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamorimPageRoutingModule } from './tamorim-routing.module';

import { TamorimPage } from './tamorim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamorimPageRoutingModule
  ],
  declarations: [TamorimPage]
})
export class TamorimPageModule {}
