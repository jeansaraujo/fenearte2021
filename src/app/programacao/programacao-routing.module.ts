import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramacaoPage } from './programacao.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramacaoPage
  },
  {
    path: 'passarela',
    loadChildren: () => import('./passarela/passarela.module').then( m => m.PassarelaPageModule)
  },
  {
    path: 'oficinas',
    loadChildren: () => import('./oficinas/oficinas.module').then( m => m.OficinasPageModule)
  },
  {
    path: 'cozinha',
    loadChildren: () => import('./cozinha/cozinha.module').then( m => m.CozinhaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramacaoPageRoutingModule {}
