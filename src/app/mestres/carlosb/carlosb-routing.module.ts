import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarlosbPage } from './carlosb.page';

const routes: Routes = [
  {
    path: '',
    component: CarlosbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarlosbPageRoutingModule {}
