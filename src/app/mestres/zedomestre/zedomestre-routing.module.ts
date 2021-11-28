import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZedomestrePage } from './zedomestre.page';

const routes: Routes = [
  {
    path: '',
    component: ZedomestrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZedomestrePageRoutingModule {}
