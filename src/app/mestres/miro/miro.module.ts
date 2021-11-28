import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiroPageRoutingModule } from './miro-routing.module';

import { MiroPage } from './miro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiroPageRoutingModule
  ],
  declarations: [MiroPage]
})
export class MiroPageModule {}
