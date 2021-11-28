import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosalvoPage } from './rosalvo.page';

const routes: Routes = [
  {
    path: '',
    component: RosalvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosalvoPageRoutingModule {}
