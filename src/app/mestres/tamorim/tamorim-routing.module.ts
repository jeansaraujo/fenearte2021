import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamorimPage } from './tamorim.page';

const routes: Routes = [
  {
    path: '',
    component: TamorimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamorimPageRoutingModule {}
