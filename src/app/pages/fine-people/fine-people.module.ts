import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinePeoplePageRoutingModule } from './fine-people-routing.module';

import { FinePeoplePage } from './fine-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinePeoplePageRoutingModule
  ],
  declarations: [FinePeoplePage]
})
export class FinePeoplePageModule {}
