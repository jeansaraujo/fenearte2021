import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalimentacaoPage } from './palimentacao.page';

const routes: Routes = [
  {
    path: '',
    component: PalimentacaoPage
  },
  {
    path: 'dararipe',
    loadChildren: () => import('./dararipe/dararipe.module').then( m => m.DararipePageModule)
  },
  {
    path: 'mburger',
    loadChildren: () => import('./mburger/mburger.module').then( m => m.MburgerPageModule)
  },
  {
    path: 'ebarnabe',
    loadChildren: () => import('./ebarnabe/ebarnabe.module').then( m => m.EbarnabePageModule)
  },
  {
    path: 'frisabor',
    loadChildren: () => import('./frisabor/frisabor.module').then( m => m.FrisaborPageModule)
  },
  {
    path: 'frutetto',
    loadChildren: () => import('./frutetto/frutetto.module').then( m => m.FrutettoPageModule)
  },
  {
    path: 'mdelas',
    loadChildren: () => import('./mdelas/mdelas.module').then( m => m.MdelasPageModule)
  },
  {
    path: 'bobdog',
    loadChildren: () => import('./bobdog/bobdog.module').then( m => m.BobdogPageModule)
  },
  {
    path: 'abahia',
    loadChildren: () => import('./abahia/abahia.module').then( m => m.AbahiaPageModule)
  },
  {
    path: 'quintal',
    loadChildren: () => import('./quintal/quintal.module').then( m => m.QuintalPageModule)
  },
  {
    path: 'cpe',
    loadChildren: () => import('./cpe/cpe.module').then( m => m.CpePageModule)
  },
  {
    path: 'rpasteis',
    loadChildren: () => import('./rpasteis/rpasteis.module').then( m => m.RpasteisPageModule)
  },
  {
    path: 'cbonde',
    loadChildren: () => import('./cbonde/cbonde.module').then( m => m.CbondePageModule)
  },
  {
    path: 'dmacaxeira',
    loadChildren: () => import('./dmacaxeira/dmacaxeira.module').then( m => m.DmacaxeiraPageModule)
  },
  {
    path: 'rcoxinha',
    loadChildren: () => import('./rcoxinha/rcoxinha.module').then( m => m.RcoxinhaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalimentacaoPageRoutingModule {}
