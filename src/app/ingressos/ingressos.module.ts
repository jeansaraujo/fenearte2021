import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngressosPageRoutingModule } from './ingressos-routing.module';

import { IngressosPage } from './ingressos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngressosPageRoutingModule
  ],
  declarations: [IngressosPage]
})
export class IngressosPageModule {}
