import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MestresPage } from './mestres.page';

const routes: Routes = [
  {
    path: '',
    component: MestresPage
  },
  {
    path: 'abias',
    loadChildren: () => import('./abias/abias.module').then( m => m.AbiasPageModule)
  },
  {
    path: 'bezinho',
    loadChildren: () => import('./bezinho/bezinho.module').then( m => m.BezinhoPageModule)
  },
  {
    path: 'banjos',
    loadChildren: () => import('./banjos/banjos.module').then( m => m.BanjosPageModule)
  },
  {
    path: 'bitinho',
    loadChildren: () => import('./bitinho/bitinho.module').then( m => m.BitinhoPageModule)
  },
  {
    path: 'cabral',
    loadChildren: () => import('./cabral/cabral.module').then( m => m.CabralPageModule)
  },
  {
    path: 'carlosb',
    loadChildren: () => import('./carlosb/carlosb.module').then( m => m.CarlosbPageModule)
  },
  {
    path: 'ccriolas',
    loadChildren: () => import('./ccriolas/ccriolas.module').then( m => m.CcriolasPageModule)
  },
  {
    path: 'chico',
    loadChildren: () => import('./chico/chico.module').then( m => m.ChicoPageModule)
  },
  {
    path: 'cida',
    loadChildren: () => import('./cida/cida.module').then( m => m.CidaPageModule)
  },
  {
    path: 'cunha',
    loadChildren: () => import('./cunha/cunha.module').then( m => m.CunhaPageModule)
  },
  {
    path: 'damiana',
    loadChildren: () => import('./damiana/damiana.module').then( m => m.DamianaPageModule)
  },
  {
    path: 'odete',
    loadChildren: () => import('./odete/odete.module').then( m => m.OdetePageModule)
  },
  {
    path: 'dido',
    loadChildren: () => import('./dido/dido.module').then( m => m.DidoPageModule)
  },
  {
    path: 'davit',
    loadChildren: () => import('./davit/davit.module').then( m => m.DavitPageModule)
  },
    {
    path: 'erasmo',
    loadChildren: () => import('./erasmo/erasmo.module').then( m => m.ErasmoPageModule)
  },
  {
    path: 'fcarrancas',
    loadChildren: () => import('./fcarrancas/fcarrancas.module').then( m => m.FcarrancasPageModule)
  },
  {
    path: 'fnuca',
    loadChildren: () => import('./fnuca/fnuca.module').then( m => m.FnucaPageModule)
  },
  {
    path: 'fvitalino',
    loadChildren: () => import('./fvitalino/fvitalino.module').then( m => m.FvitalinoPageModule)
  },
  {
    path: 'zecabloco',
    loadChildren: () => import('./zecabloco/zecabloco.module').then( m => m.ZecablocoPageModule)
  },
  {
    path: 'zezinho',
    loadChildren: () => import('./zezinho/zezinho.module').then( m => m.ZezinhoPageModule)
  },
  {
    path: 'fmanuel',
    loadChildren: () => import('./fmanuel/fmanuel.module').then( m => m.FmanuelPageModule)
  },
  {
    path: 'felias',
    loadChildren: () => import('./felias/felias.module').then( m => m.FeliasPageModule)
  },
  {
    path: 'fida',
    loadChildren: () => import('./fida/fida.module').then( m => m.FidaPageModule)
  },
  {
    path: 'gilson',
    loadChildren: () => import('./gilson/gilson.module').then( m => m.GilsonPageModule)
  },
  {
    path: 'ivo',
    loadChildren: () => import('./ivo/ivo.module').then( m => m.IvoPageModule)
  },
  {
    path: 'josa',
    loadChildren: () => import('./josa/josa.module').then( m => m.JosaPageModule)
  },
  {
    path: 'joaquim',
    loadChildren: () => import('./joaquim/joaquim.module').then( m => m.JoaquimPageModule)
  },
  {
    path: 'jborges',
    loadChildren: () => import('./jborges/jborges.module').then( m => m.JborgesPageModule)
  },
  {
    path: 'nena',
    loadChildren: () => import('./nena/nena.module').then( m => m.NenaPageModule)
  },
  {
    path: 'nilson',
    loadChildren: () => import('./nilson/nilson.module').then( m => m.NilsonPageModule)
  },
  {
    path: 'lula',
    loadChildren: () => import('./lula/lula.module').then( m => m.LulaPageModule)
  },
  {
    path: 'lantonio',
    loadChildren: () => import('./lantonio/lantonio.module').then( m => m.LantonioPageModule)
  },
  {
    path: 'lbenicio',
    loadChildren: () => import('./lbenicio/lbenicio.module').then( m => m.LbenicioPageModule)
  },
  {
    path: 'lgaldino',
    loadChildren: () => import('./lgaldino/lgaldino.module').then( m => m.LgaldinoPageModule)
  },
  {
    path: 'bae',
    loadChildren: () => import('./bae/bae.module').then( m => m.BaePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'msertania',
    loadChildren: () => import('./msertania/msertania.module').then( m => m.MsertaniaPageModule)
  },
  {
    path: 'malmeida',
    loadChildren: () => import('./malmeida/malmeida.module').then( m => m.MalmeidaPageModule)
  },
  {
    path: 'msiqueira',
    loadChildren: () => import('./msiqueira/msiqueira.module').then( m => m.MsiqueiraPageModule)
  },
  {
    path: 'mazinho',
    loadChildren: () => import('./mazinho/mazinho.module').then( m => m.MazinhoPageModule)
  },
  {
    path: 'mfirmino',
    loadChildren: () => import('./mfirmino/mfirmino.module').then( m => m.MfirminoPageModule)
  },
  {
    path: 'miro',
    loadChildren: () => import('./miro/miro.module').then( m => m.MiroPageModule)
  },
  {
    path: 'neguinha',
    loadChildren: () => import('./neguinha/neguinha.module').then( m => m.NeguinhaPageModule)
  },
  {
    path: 'nado',
    loadChildren: () => import('./nado/nado.module').then( m => m.NadoPageModule)
  },
  {
    path: 'nido',
    loadChildren: () => import('./nido/nido.module').then( m => m.NidoPageModule)
  },
  {
    path: 'nicola',
    loadChildren: () => import('./nicola/nicola.module').then( m => m.NicolaPageModule)
  },
  {
    path: 'pbode',
    loadChildren: () => import('./pbode/pbode.module').then( m => m.PbodePageModule)
  },
  {
    path: 'pintor',
    loadChildren: () => import('./pintor/pintor.module').then( m => m.PintorPageModule)
  },
  {
    path: 'rsanteiro',
    loadChildren: () => import('./rsanteiro/rsanteiro.module').then( m => m.RsanteiroPageModule)
  },
  {
    path: 'rvital',
    loadChildren: () => import('./rvital/rvital.module').then( m => m.RvitalPageModule)
  },
  {
    path: 'rosalvo',
    loadChildren: () => import('./rosalvo/rosalvo.module').then( m => m.RosalvoPageModule)
  },
  {
    path: 'espindola',
    loadChildren: () => import('./espindola/espindola.module').then( m => m.EspindolaPageModule)
  },
  {
    path: 'talagoana',
    loadChildren: () => import('./talagoana/talagoana.module').then( m => m.TalagoanaPageModule)
  },
  {
    path: 'ttimbi',
    loadChildren: () => import('./ttimbi/ttimbi.module').then( m => m.TtimbiPageModule)
  },
  {
    path: 'tamorim',
    loadChildren: () => import('./tamorim/tamorim.module').then( m => m.TamorimPageModule)
  },
  {
    path: 'zealves',
    loadChildren: () => import('./zealves/zealves.module').then( m => m.ZealvesPageModule)
  },
  {
    path: 'zedomestre',
    loadChildren: () => import('./zedomestre/zedomestre.module').then( m => m.ZedomestrePageModule)
  },
  {
    path: 'zelopes',
    loadChildren: () => import('./zelopes/zelopes.module').then( m => m.ZelopesPageModule)
  },
  {
    path: 'wporto',
    loadChildren: () => import('./wporto/wporto.module').then( m => m.WportoPageModule)
  },
  {
    path: 'zuza',
    loadChildren: () => import('./zuza/zuza.module').then( m => m.ZuzaPageModule)
  },
  {
    path: 'mamelia',
    loadChildren: () => import('./mamelia/mamelia.module').then( m => m.MameliaPageModule)
  },
  {
    path: 'fbatista',
    loadChildren: () => import('./fbatista/fbatista.module').then( m => m.FbatistaPageModule)
  },
  {
    path: 'snenem',
    loadChildren: () => import('./snenem/snenem.module').then( m => m.SnenemPageModule)
  },
  {
    path: 'vbrito',
    loadChildren: () => import('./vbrito/vbrito.module').then( m => m.VbritoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MestresPageRoutingModule {}
