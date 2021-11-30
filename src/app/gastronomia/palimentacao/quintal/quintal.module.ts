import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintalPageRoutingModule } from './quintal-routing.module';

import { QuintalPage } from './quintal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintalPageRoutingModule
  ],
  declarations: [QuintalPage]
})
export class QuintalPageModule {}
