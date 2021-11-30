import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecicladosPage } from './reciclados.page';

const routes: Routes = [
  {
    path: '',
    component: RecicladosPage
  },
  {
    path: 'details/:itemrecicla',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecicladosPageRoutingModule {}
