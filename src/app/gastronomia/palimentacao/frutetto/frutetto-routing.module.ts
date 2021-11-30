import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutettoPage } from './frutetto.page';

const routes: Routes = [
  {
    path: '',
    component: FrutettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutettoPageRoutingModule {}
