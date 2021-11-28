import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MameliaPageRoutingModule } from './mamelia-routing.module';

import { MameliaPage } from './mamelia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MameliaPageRoutingModule
  ],
  declarations: [MameliaPage]
})
export class MameliaPageModule {}
