import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanetePageRoutingModule } from './janete-routing.module';

import { JanetePage } from './janete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanetePageRoutingModule
  ],
  declarations: [JanetePage]
})
export class JanetePageModule {}
