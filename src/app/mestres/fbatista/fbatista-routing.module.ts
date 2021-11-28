import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FbatistaPage } from './fbatista.page';

const routes: Routes = [
  {
    path: '',
    component: FbatistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FbatistaPageRoutingModule {}
