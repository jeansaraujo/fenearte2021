import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MestresPage } from './mestres.page';

const routes: Routes = [
  {
    path: '',
    component: MestresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MestresPageRoutingModule {}
