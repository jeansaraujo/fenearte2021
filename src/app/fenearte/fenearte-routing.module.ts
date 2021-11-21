import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeneartePage } from './fenearte.page';

const routes: Routes = [
  {
    path: '',
    component: FeneartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeneartePageRoutingModule {}
