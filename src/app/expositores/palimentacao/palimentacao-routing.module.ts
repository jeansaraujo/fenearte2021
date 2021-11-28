import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalimentacaoPage } from './palimentacao.page';

const routes: Routes = [
  {
    path: '',
    component: PalimentacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalimentacaoPageRoutingModule {}
