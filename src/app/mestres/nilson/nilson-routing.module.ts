import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NilsonPage } from './nilson.page';

const routes: Routes = [
  {
    path: '',
    component: NilsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NilsonPageRoutingModule {}
