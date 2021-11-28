import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZezinhoPage } from './zezinho.page';

const routes: Routes = [
  {
    path: '',
    component: ZezinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZezinhoPageRoutingModule {}
