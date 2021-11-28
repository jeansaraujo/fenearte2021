import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtimbiPage } from './ttimbi.page';

const routes: Routes = [
  {
    path: '',
    component: TtimbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtimbiPageRoutingModule {}
