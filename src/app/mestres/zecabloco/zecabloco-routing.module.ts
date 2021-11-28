import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZecablocoPage } from './zecabloco.page';

const routes: Routes = [
  {
    path: '',
    component: ZecablocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZecablocoPageRoutingModule {}
