import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VcnafeneartePageRoutingModule } from './vcnafenearte-routing.module';

import { VcnafeneartePage } from './vcnafenearte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VcnafeneartePageRoutingModule
  ],
  declarations: [VcnafeneartePage]
})
export class VcnafeneartePageModule {}
