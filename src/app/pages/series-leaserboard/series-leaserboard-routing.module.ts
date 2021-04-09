import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesLeaserboardPage } from './series-leaserboard.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesLeaserboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesLeaserboardPageRoutingModule {}
