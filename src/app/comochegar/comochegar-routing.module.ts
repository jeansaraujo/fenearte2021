import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComochegarPage } from './comochegar.page';

const routes: Routes = [
  {
    path: '',
    component: ComochegarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComochegarPageRoutingModule {}
