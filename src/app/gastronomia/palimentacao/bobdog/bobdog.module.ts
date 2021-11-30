import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BobdogPageRoutingModule } from './bobdog-routing.module';

import { BobdogPage } from './bobdog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BobdogPageRoutingModule
  ],
  declarations: [BobdogPage]
})
export class BobdogPageModule {}
