import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NilsonPageRoutingModule } from './nilson-routing.module';

import { NilsonPage } from './nilson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NilsonPageRoutingModule
  ],
  declarations: [NilsonPage]
})
export class NilsonPageModule {}
