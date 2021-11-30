import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BobdogPage } from './bobdog.page';

const routes: Routes = [
  {
    path: '',
    component: BobdogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BobdogPageRoutingModule {}
