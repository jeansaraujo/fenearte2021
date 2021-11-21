import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheexpositorPageRoutingModule } from './acheexpositor-routing.module';

import { AcheexpositorPage } from './acheexpositor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheexpositorPageRoutingModule
  ],
  declarations: [AcheexpositorPage]
})
export class AcheexpositorPageModule {}
