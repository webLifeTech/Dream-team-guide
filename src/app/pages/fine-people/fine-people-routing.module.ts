import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinePeoplePage } from './fine-people.page';

const routes: Routes = [
  {
    path: '',
    component: FinePeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinePeoplePageRoutingModule {}
