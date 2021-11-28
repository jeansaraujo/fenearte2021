import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitinhoPage } from './bitinho.page';

const routes: Routes = [
  {
    path: '',
    component: BitinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitinhoPageRoutingModule {}
