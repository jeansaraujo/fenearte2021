import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeguinhaPage } from './neguinha.page';

const routes: Routes = [
  {
    path: '',
    component: NeguinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeguinhaPageRoutingModule {}
