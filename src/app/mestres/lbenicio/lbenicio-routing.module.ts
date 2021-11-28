import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LbenicioPage } from './lbenicio.page';

const routes: Routes = [
  {
    path: '',
    component: LbenicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LbenicioPageRoutingModule {}
