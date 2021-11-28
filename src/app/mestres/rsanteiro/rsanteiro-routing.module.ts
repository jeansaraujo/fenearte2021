import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsanteiroPage } from './rsanteiro.page';

const routes: Routes = [
  {
    path: '',
    component: RsanteiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RsanteiroPageRoutingModule {}
