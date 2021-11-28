import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefeiturasPageRoutingModule } from './prefeituras-routing.module';

import { PrefeiturasPage } from './prefeituras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefeiturasPageRoutingModule
  ],
  declarations: [PrefeiturasPage]
})
export class PrefeiturasPageModule {}
