import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsiqueiraPage } from './msiqueira.page';

const routes: Routes = [
  {
    path: '',
    component: MsiqueiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsiqueiraPageRoutingModule {}
