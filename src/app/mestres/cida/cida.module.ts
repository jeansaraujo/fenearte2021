import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CidaPageRoutingModule } from './cida-routing.module';

import { CidaPage } from './cida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidaPageRoutingModule
  ],
  declarations: [CidaPage]
})
export class CidaPageModule {}
