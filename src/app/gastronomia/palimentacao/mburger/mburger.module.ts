import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MburgerPageRoutingModule } from './mburger-routing.module';

import { MburgerPage } from './mburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MburgerPageRoutingModule
  ],
  declarations: [MburgerPage]
})
export class MburgerPageModule {}
