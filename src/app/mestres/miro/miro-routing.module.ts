import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiroPage } from './miro.page';

const routes: Routes = [
  {
    path: '',
    component: MiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiroPageRoutingModule {}
