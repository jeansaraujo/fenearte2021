import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidaPage } from './cida.page';

const routes: Routes = [
  {
    path: '',
    component: CidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidaPageRoutingModule {}
