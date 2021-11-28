import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbatistaPageRoutingModule } from './fbatista-routing.module';

import { FbatistaPage } from './fbatista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbatistaPageRoutingModule
  ],
  declarations: [FbatistaPage]
})
export class FbatistaPageModule {}
