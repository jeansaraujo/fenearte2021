import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FvitalinoPageRoutingModule } from './fvitalino-routing.module';

import { FvitalinoPage } from './fvitalino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FvitalinoPageRoutingModule
  ],
  declarations: [FvitalinoPage]
})
export class FvitalinoPageModule {}
