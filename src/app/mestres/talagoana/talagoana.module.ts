import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalagoanaPageRoutingModule } from './talagoana-routing.module';

import { TalagoanaPage } from './talagoana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalagoanaPageRoutingModule
  ],
  declarations: [TalagoanaPage]
})
export class TalagoanaPageModule {}
