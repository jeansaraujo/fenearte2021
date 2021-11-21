import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomenageadosPage } from './homenageados.page';

const routes: Routes = [
  {
    path: '',
    component: HomenageadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomenageadosPageRoutingModule {}
