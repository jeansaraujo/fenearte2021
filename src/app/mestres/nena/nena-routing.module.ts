import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NenaPage } from './nena.page';

const routes: Routes = [
  {
    path: '',
    component: NenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NenaPageRoutingModule {}
