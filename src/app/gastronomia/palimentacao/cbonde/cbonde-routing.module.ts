import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbondePage } from './cbonde.page';

const routes: Routes = [
  {
    path: '',
    component: CbondePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbondePageRoutingModule {}
