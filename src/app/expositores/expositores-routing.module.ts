import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpositoresPage } from './expositores.page';

const routes: Routes = [
  {
    path: '',
    component: ExpositoresPage
  },  {
    path: 'individual',
    loadChildren: () => import('./individual/individual.module').then( m => m.IndividualPageModule)
  },
  {
    path: 'pabpe',
    loadChildren: () => import('./pabpe/pabpe.module').then( m => m.PabpePageModule)
  },
  {
    path: 'pab',
    loadChildren: () => import('./pab/pab.module').then( m => m.PabPageModule)
  },
  {
    path: 'prefeituras',
    loadChildren: () => import('./prefeituras/prefeituras.module').then( m => m.PrefeiturasPageModule)
  },
  {
    path: 'associacoes',
    loadChildren: () => import('./associacoes/associacoes.module').then( m => m.AssociacoesPageModule)
  },
  {
    path: 'palimentacao',
    loadChildren: () => import('./palimentacao/palimentacao.module').then( m => m.PalimentacaoPageModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'internacional',
    loadChildren: () => import('./internacional/internacional.module').then( m => m.InternacionalPageModule)
  },
  {
    path: 'indigenas',
    loadChildren: () => import('./indigenas/indigenas.module').then( m => m.IndigenasPageModule)
  },
  {
    path: 'rsolidarias',
    loadChildren: () => import('./rsolidarias/rsolidarias.module').then( m => m.RsolidariasPageModule)
  },
  {
    path: 'aartesanal',
    loadChildren: () => import('./aartesanal/aartesanal.module').then( m => m.AartesanalPageModule)
  },
  {
    path: 'fbike',
    loadChildren: () => import('./fbike/fbike.module').then( m => m.FbikePageModule)
  },
  {
    path: 'quiosque',
    loadChildren: () => import('./quiosque/quiosque.module').then( m => m.QuiosquePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpositoresPageRoutingModule {}
