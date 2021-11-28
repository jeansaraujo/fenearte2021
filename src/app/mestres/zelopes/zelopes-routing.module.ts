import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZelopesPage } from './zelopes.page';

const routes: Routes = [
  {
    path: '',
    component: ZelopesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZelopesPageRoutingModule {}
