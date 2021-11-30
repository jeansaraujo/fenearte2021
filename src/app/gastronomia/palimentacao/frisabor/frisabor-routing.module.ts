import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrisaborPage } from './frisabor.page';

const routes: Routes = [
  {
    path: '',
    component: FrisaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrisaborPageRoutingModule {}
