import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTeamPageRoutingModule } from './all-team-routing.module';

import { AllTeamPage } from './all-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTeamPageRoutingModule
  ],
  declarations: [AllTeamPage]
})
export class AllTeamPageModule {}
