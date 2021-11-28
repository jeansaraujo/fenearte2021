import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabralPage } from './cabral.page';

const routes: Routes = [
  {
    path: '',
    component: CabralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabralPageRoutingModule {}
