import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PabPage } from './pab.page';

const routes: Routes = [
  {
    path: '',
    component: PabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PabPageRoutingModule {}
