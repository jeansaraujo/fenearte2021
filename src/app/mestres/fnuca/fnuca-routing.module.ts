import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FnucaPage } from './fnuca.page';

const routes: Routes = [
  {
    path: '',
    component: FnucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FnucaPageRoutingModule {}
