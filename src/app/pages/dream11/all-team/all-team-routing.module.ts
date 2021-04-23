import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTeamPage } from './all-team.page';

const routes: Routes = [
  {
    path: '',
    component: AllTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllTeamPageRoutingModule {}
