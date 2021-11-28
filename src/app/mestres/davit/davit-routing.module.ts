import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavitPage } from './davit.page';

const routes: Routes = [
  {
    path: '',
    component: DavitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavitPageRoutingModule {}
