import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsertaniaPage } from './msertania.page';

const routes: Routes = [
  {
    path: '',
    component: MsertaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsertaniaPageRoutingModule {}
