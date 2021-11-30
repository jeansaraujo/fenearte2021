import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdelasPage } from './mdelas.page';

const routes: Routes = [
  {
    path: '',
    component: MdelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdelasPageRoutingModule {}
