import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JborgesPageRoutingModule } from './jborges-routing.module';

import { JborgesPage } from './jborges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JborgesPageRoutingModule
  ],
  declarations: [JborgesPage]
})
export class JborgesPageModule {}
