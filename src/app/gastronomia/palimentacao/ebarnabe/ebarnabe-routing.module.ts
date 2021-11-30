import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbarnabePage } from './ebarnabe.page';

const routes: Routes = [
  {
    path: '',
    component: EbarnabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbarnabePageRoutingModule {}
