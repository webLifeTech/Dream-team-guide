import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllMacthsPageRoutingModule } from './all-macths-routing.module';

import { AllMacthsPage } from './all-macths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllMacthsPageRoutingModule
  ],
  declarations: [AllMacthsPage]
})
export class AllMacthsPageModule {}
