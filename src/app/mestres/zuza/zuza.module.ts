import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZuzaPageRoutingModule } from './zuza-routing.module';

import { ZuzaPage } from './zuza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZuzaPageRoutingModule
  ],
  declarations: [ZuzaPage]
})
export class ZuzaPageModule {}
