import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZuzaPage } from './zuza.page';

const routes: Routes = [
  {
    path: '',
    component: ZuzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZuzaPageRoutingModule {}
