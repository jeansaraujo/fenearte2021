import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalmeidaPageRoutingModule } from './malmeida-routing.module';

import { MalmeidaPage } from './malmeida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalmeidaPageRoutingModule
  ],
  declarations: [MalmeidaPage]
})
export class MalmeidaPageModule {}
