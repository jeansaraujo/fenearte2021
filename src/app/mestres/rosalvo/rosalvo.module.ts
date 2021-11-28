import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosalvoPageRoutingModule } from './rosalvo-routing.module';

import { RosalvoPage } from './rosalvo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosalvoPageRoutingModule
  ],
  declarations: [RosalvoPage]
})
export class RosalvoPageModule {}
