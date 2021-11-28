import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbiasPage } from './abias.page';

const routes: Routes = [
  {
    path: '',
    component: AbiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbiasPageRoutingModule {}
