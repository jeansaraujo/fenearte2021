import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AartesanalPage } from './aartesanal.page';

const routes: Routes = [
  {
    path: '',
    component: AartesanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AartesanalPageRoutingModule {}
