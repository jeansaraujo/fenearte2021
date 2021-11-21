import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassarelaPage } from './passarela.page';

const routes: Routes = [
  {
    path: '',
    component: PassarelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassarelaPageRoutingModule {}
