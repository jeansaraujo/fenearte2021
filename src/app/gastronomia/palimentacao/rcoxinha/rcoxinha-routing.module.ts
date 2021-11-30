import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcoxinhaPage } from './rcoxinha.page';

const routes: Routes = [
  {
    path: '',
    component: RcoxinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcoxinhaPageRoutingModule {}
