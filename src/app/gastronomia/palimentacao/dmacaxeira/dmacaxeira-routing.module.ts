import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DmacaxeiraPage } from './dmacaxeira.page';

const routes: Routes = [
  {
    path: '',
    component: DmacaxeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmacaxeiraPageRoutingModule {}
