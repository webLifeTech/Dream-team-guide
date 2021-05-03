import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMacthsPage } from './all-macths.page';

const routes: Routes = [
  {
    path: '',
    component: AllMacthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMacthsPageRoutingModule {}
