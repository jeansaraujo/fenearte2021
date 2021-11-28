import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DamianaPage } from './damiana.page';

const routes: Routes = [
  {
    path: '',
    component: DamianaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DamianaPageRoutingModule {}
