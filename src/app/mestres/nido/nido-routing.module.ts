import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NidoPage } from './nido.page';

const routes: Routes = [
  {
    path: '',
    component: NidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NidoPageRoutingModule {}
