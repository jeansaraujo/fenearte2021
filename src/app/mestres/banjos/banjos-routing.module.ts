import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanjosPage } from './banjos.page';

const routes: Routes = [
  {
    path: '',
    component: BanjosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanjosPageRoutingModule {}
