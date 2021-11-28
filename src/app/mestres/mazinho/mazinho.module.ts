import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MazinhoPageRoutingModule } from './mazinho-routing.module';

import { MazinhoPage } from './mazinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MazinhoPageRoutingModule
  ],
  declarations: [MazinhoPage]
})
export class MazinhoPageModule {}
