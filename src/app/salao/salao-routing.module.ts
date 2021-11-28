import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaoPage } from './salao.page';

const routes: Routes = [
  {
    path: '',
    component: SalaoPage
  },
  {
    path: 'ana',
    loadChildren: () => import('./ana/ana.module').then( m => m.AnaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaoPageRoutingModule {}
