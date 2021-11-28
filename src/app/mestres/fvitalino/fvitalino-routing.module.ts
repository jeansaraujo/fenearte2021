import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FvitalinoPage } from './fvitalino.page';

const routes: Routes = [
  {
    path: '',
    component: FvitalinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FvitalinoPageRoutingModule {}
