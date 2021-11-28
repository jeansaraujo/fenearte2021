import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LulaPage } from './lula.page';

const routes: Routes = [
  {
    path: '',
    component: LulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LulaPageRoutingModule {}
