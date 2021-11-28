import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JosaPageRoutingModule } from './josa-routing.module';

import { JosaPage } from './josa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JosaPageRoutingModule
  ],
  declarations: [JosaPage]
})
export class JosaPageModule {}
