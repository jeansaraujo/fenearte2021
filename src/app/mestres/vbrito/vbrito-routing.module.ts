import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VbritoPage } from './vbrito.page';

const routes: Routes = [
  {
    path: '',
    component: VbritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VbritoPageRoutingModule {}
