import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheexpositorPage } from './acheexpositor.page';

const routes: Routes = [
  {
    path: '',
    component: AcheexpositorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheexpositorPageRoutingModule {}
