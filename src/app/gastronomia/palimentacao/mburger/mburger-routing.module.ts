import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MburgerPage } from './mburger.page';

const routes: Routes = [
  {
    path: '',
    component: MburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MburgerPageRoutingModule {}
