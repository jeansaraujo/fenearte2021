import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaPage } from './gastronomia.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaPage
  },
  {
    path: 'palimentacao',
    loadChildren: () => import('./palimentacao/palimentacao.module').then( m => m.PalimentacaoPageModule)
  },
  {
    path: 'cfenearte',
    loadChildren: () => import('./cfenearte/cfenearte.module').then( m => m.CfeneartePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaPageRoutingModule {}
