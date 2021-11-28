import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DavitPageRoutingModule } from './davit-routing.module';
import { DavitPage } from './davit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavitPageRoutingModule
  ],
  declarations: [DavitPage]
})
export class DavitPageModule {}
