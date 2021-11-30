import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CfeneartePageRoutingModule } from './cfenearte-routing.module';

import { CfeneartePage } from './cfenearte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CfeneartePageRoutingModule
  ],
  declarations: [CfeneartePage]
})
export class CfeneartePageModule {}
