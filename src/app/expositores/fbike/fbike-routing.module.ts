import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FbikePage } from './fbike.page';

const routes: Routes = [
  {
    path: '',
    component: FbikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FbikePageRoutingModule {}
