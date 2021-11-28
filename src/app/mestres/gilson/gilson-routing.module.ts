import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GilsonPage } from './gilson.page';

const routes: Routes = [
  {
    path: '',
    component: GilsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GilsonPageRoutingModule {}
