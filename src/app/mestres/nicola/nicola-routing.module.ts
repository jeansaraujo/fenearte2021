import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NicolaPage } from './nicola.page';

const routes: Routes = [
  {
    path: '',
    component: NicolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NicolaPageRoutingModule {}
