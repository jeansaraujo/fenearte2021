import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CunhaPage } from './cunha.page';

const routes: Routes = [
  {
    path: '',
    component: CunhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CunhaPageRoutingModule {}
