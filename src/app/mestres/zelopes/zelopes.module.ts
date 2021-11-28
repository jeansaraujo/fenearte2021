import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZelopesPageRoutingModule } from './zelopes-routing.module';

import { ZelopesPage } from './zelopes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZelopesPageRoutingModule
  ],
  declarations: [ZelopesPage]
})
export class ZelopesPageModule {}
