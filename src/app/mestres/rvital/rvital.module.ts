import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RvitalPageRoutingModule } from './rvital-routing.module';

import { RvitalPage } from './rvital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RvitalPageRoutingModule
  ],
  declarations: [RvitalPage]
})
export class RvitalPageModule {}
