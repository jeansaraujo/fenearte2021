import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidaPage } from './fida.page';

const routes: Routes = [
  {
    path: '',
    component: FidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidaPageRoutingModule {}
