import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MazinhoPage } from './mazinho.page';

const routes: Routes = [
  {
    path: '',
    component: MazinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MazinhoPageRoutingModule {}
