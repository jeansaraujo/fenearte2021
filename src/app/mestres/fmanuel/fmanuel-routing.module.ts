import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmanuelPage } from './fmanuel.page';

const routes: Routes = [
  {
    path: '',
    component: FmanuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmanuelPageRoutingModule {}
