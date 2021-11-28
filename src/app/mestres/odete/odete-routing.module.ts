import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdetePage } from './odete.page';

const routes: Routes = [
  {
    path: '',
    component: OdetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdetePageRoutingModule {}
