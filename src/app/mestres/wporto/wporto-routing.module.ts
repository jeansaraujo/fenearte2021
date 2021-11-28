import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WportoPage } from './wporto.page';

const routes: Routes = [
  {
    path: '',
    component: WportoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WportoPageRoutingModule {}
