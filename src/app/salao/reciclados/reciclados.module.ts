import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecicladosPageRoutingModule } from './reciclados-routing.module';

import { RecicladosPage } from './reciclados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecicladosPageRoutingModule
  ],
  declarations: [RecicladosPage]
})
export class RecicladosPageModule {}
