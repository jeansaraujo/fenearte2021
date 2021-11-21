import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'fenearte',
    loadChildren: () => import('./fenearte/fenearte.module').then( m => m.FeneartePageModule)
  },
  {
    path: 'ingressos',
    loadChildren: () => import('./ingressos/ingressos.module').then( m => m.IngressosPageModule)
  },
  {
    path: 'janete',
    loadChildren: () => import('./janete/janete.module').then( m => m.JanetePageModule)
  },
  {
    path: 'traslado',
    loadChildren: () => import('./traslado/traslado.module').then( m => m.TrasladoPageModule)
  },   {
    path: 'comochegar',
    loadChildren: () => import('./comochegar/comochegar.module').then( m => m.ComochegarPageModule)
  },
  {
    path: 'homenageados',
    loadChildren: () => import('./homenageados/homenageados.module').then( m => m.HomenageadosPageModule)
  },
  {
    path: 'mestres',
    loadChildren: () => import('./mestres/mestres.module').then( m => m.MestresPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'expositores',
    loadChildren: () => import('./expositores/expositores.module').then( m => m.ExpositoresPageModule)
  },
  {
    path: 'acheexpositor',
    loadChildren: () => import('./acheexpositor/acheexpositor.module').then( m => m.AcheexpositorPageModule)
  },
  {
    path: 'museu',
    loadChildren: () => import('./museu/museu.module').then( m => m.MuseuPageModule)
  },
  {
    path: 'salao',
    loadChildren: () => import('./salao/salao.module').then( m => m.SalaoPageModule)
  },
  {
    path: 'passarela',
    loadChildren: () => import('./passarela/passarela.module').then( m => m.PassarelaPageModule)
  },
  {
    path: 'programacao',
    loadChildren: () => import('./programacao/programacao.module').then( m => m.ProgramacaoPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'vcnafenearte',
    loadChildren: () => import('./vcnafenearte/vcnafenearte.module').then( m => m.VcnafeneartePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
