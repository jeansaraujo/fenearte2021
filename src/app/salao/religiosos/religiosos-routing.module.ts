import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReligiososPage } from './religiosos.page';

const routes: Routes = [
  {
    path: '',
    component: ReligiososPage
  },
  {
    path: 'details/:item',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReligiososPageRoutingModule {}
