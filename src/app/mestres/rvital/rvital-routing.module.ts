import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RvitalPage } from './rvital.page';

const routes: Routes = [
  {
    path: '',
    component: RvitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RvitalPageRoutingModule {}
