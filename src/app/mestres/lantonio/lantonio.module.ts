import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LantonioPageRoutingModule } from './lantonio-routing.module';

import { LantonioPage } from './lantonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LantonioPageRoutingModule
  ],
  declarations: [LantonioPage]
})
export class LantonioPageModule {}
