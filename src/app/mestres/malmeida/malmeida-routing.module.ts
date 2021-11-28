import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalmeidaPage } from './malmeida.page';

const routes: Routes = [
  {
    path: '',
    component: MalmeidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalmeidaPageRoutingModule {}
