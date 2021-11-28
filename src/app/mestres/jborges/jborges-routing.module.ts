import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JborgesPage } from './jborges.page';

const routes: Routes = [
  {
    path: '',
    component: JborgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JborgesPageRoutingModule {}
