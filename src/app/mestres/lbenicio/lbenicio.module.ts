import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LbenicioPageRoutingModule } from './lbenicio-routing.module';

import { LbenicioPage } from './lbenicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LbenicioPageRoutingModule
  ],
  declarations: [LbenicioPage]
})
export class LbenicioPageModule {}
