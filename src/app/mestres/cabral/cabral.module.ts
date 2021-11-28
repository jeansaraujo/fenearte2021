import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabralPageRoutingModule } from './cabral-routing.module';

import { CabralPage } from './cabral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabralPageRoutingModule
  ],
  declarations: [CabralPage]
})
export class CabralPageModule {}
