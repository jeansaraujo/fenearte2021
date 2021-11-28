import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefeiturasPage } from './prefeituras.page';

const routes: Routes = [
  {
    path: '',
    component: PrefeiturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefeiturasPageRoutingModule {}
