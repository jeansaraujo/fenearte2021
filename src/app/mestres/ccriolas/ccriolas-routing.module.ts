import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcriolasPage } from './ccriolas.page';

const routes: Routes = [
  {
    path: '',
    component: CcriolasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcriolasPageRoutingModule {}
