import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbahiaPage } from './abahia.page';

const routes: Routes = [
  {
    path: '',
    component: AbahiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbahiaPageRoutingModule {}
