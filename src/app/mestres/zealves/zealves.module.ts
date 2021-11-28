import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZealvesPageRoutingModule } from './zealves-routing.module';

import { ZealvesPage } from './zealves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZealvesPageRoutingModule
  ],
  declarations: [ZealvesPage]
})
export class ZealvesPageModule {}
