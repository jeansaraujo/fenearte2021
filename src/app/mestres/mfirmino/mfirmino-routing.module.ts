import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfirminoPage } from './mfirmino.page';

const routes: Routes = [
  {
    path: '',
    component: MfirminoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfirminoPageRoutingModule {}
