import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndigenasPage } from './indigenas.page';

const routes: Routes = [
  {
    path: '',
    component: IndigenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndigenasPageRoutingModule {}
