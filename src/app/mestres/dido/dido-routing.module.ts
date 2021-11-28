import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DidoPage } from './dido.page';

const routes: Routes = [
  {
    path: '',
    component: DidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DidoPageRoutingModule {}
