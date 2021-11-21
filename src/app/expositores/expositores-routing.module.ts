import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpositoresPage } from './expositores.page';

const routes: Routes = [
  {
    path: '',
    component: ExpositoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpositoresPageRoutingModule {}
