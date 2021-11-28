import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZealvesPage } from './zealves.page';

const routes: Routes = [
  {
    path: '',
    component: ZealvesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZealvesPageRoutingModule {}
