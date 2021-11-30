import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfeneartePage } from './cfenearte.page';

const routes: Routes = [
  {
    path: '',
    component: CfeneartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CfeneartePageRoutingModule {}
