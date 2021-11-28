import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeliasPageRoutingModule } from './felias-routing.module';

import { FeliasPage } from './felias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeliasPageRoutingModule
  ],
  declarations: [FeliasPage]
})
export class FeliasPageModule {}
