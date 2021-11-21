import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanetePage } from './janete.page';

const routes: Routes = [
  {
    path: '',
    component: JanetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JanetePageRoutingModule {}
