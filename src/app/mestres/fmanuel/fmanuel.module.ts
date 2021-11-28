import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmanuelPageRoutingModule } from './fmanuel-routing.module';

import { FmanuelPage } from './fmanuel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmanuelPageRoutingModule
  ],
  declarations: [FmanuelPage]
})
export class FmanuelPageModule {}
