import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FcarrancasPage } from './fcarrancas.page';

const routes: Routes = [
  {
    path: '',
    component: FcarrancasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcarrancasPageRoutingModule {}
