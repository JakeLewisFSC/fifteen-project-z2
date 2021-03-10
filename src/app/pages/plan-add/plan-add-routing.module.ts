import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanAddPage } from './plan-add.page';

const routes: Routes = [
  {
    path: '',
    component: PlanAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanAddPageRoutingModule {}
