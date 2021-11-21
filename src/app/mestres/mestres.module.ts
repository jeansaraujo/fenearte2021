import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MestresPageRoutingModule } from './mestres-routing.module';

import { MestresPage } from './mestres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MestresPageRoutingModule
  ],
  declarations: [MestresPage]
})
export class MestresPageModule {}
