import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalagoanaPage } from './talagoana.page';

const routes: Routes = [
  {
    path: '',
    component: TalagoanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalagoanaPageRoutingModule {}
