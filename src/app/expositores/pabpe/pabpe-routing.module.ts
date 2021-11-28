import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PabpePage } from './pabpe.page';

const routes: Routes = [
  {
    path: '',
    component: PabpePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PabpePageRoutingModule {}
