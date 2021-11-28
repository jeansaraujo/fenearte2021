import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaePage } from './bae.page';

const routes: Routes = [
  {
    path: '',
    component: BaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaePageRoutingModule {}
