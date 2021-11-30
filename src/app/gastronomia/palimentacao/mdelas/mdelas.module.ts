import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdelasPageRoutingModule } from './mdelas-routing.module';

import { MdelasPage } from './mdelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdelasPageRoutingModule
  ],
  declarations: [MdelasPage]
})
export class MdelasPageModule {}
