import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BezinhoPage } from './bezinho.page';

const routes: Routes = [
  {
    path: '',
    component: BezinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BezinhoPageRoutingModule {}
