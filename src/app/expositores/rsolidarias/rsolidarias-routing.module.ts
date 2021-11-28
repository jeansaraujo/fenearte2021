import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsolidariasPage } from './rsolidarias.page';

const routes: Routes = [
  {
    path: '',
    component: RsolidariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RsolidariasPageRoutingModule {}
