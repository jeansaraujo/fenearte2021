import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MameliaPage } from './mamelia.page';

const routes: Routes = [
  {
    path: '',
    component: MameliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MameliaPageRoutingModule {}
