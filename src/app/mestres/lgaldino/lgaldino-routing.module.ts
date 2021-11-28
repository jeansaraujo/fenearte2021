import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LgaldinoPage } from './lgaldino.page';

const routes: Routes = [
  {
    path: '',
    component: LgaldinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LgaldinoPageRoutingModule {}
