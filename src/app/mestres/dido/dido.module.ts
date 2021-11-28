import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DidoPageRoutingModule } from './dido-routing.module';
import { DidoPage } from './dido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DidoPageRoutingModule
  ],
  declarations: [DidoPage]
})
export class DidoPageModule {}
