import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErasmoPage } from './erasmo.page';

const routes: Routes = [
  {
    path: '',
    component: ErasmoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErasmoPageRoutingModule {}
