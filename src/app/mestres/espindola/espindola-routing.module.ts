import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspindolaPage } from './espindola.page';

const routes: Routes = [
  {
    path: '',
    component: EspindolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspindolaPageRoutingModule {}
