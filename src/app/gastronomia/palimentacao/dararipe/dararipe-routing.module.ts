import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DararipePage } from './dararipe.page';

const routes: Routes = [
  {
    path: '',
    component: DararipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DararipePageRoutingModule {}
