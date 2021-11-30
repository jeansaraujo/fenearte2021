import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReligiososPageRoutingModule } from './religiosos-routing.module';

import { ReligiososPage } from './religiosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReligiososPageRoutingModule
  ],
  declarations: [ReligiososPage]
})
export class ReligiososPageModule {}
