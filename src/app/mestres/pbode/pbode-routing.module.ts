import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PbodePage } from './pbode.page';

const routes: Routes = [
  {
    path: '',
    component: PbodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PbodePageRoutingModule {}
