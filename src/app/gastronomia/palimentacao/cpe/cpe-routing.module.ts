import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpePage } from './cpe.page';

const routes: Routes = [
  {
    path: '',
    component: CpePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpePageRoutingModule {}
