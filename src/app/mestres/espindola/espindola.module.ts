import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspindolaPageRoutingModule } from './espindola-routing.module';

import { EspindolaPage } from './espindola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspindolaPageRoutingModule
  ],
  declarations: [EspindolaPage]
})
export class EspindolaPageModule {}
