import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesLeaserboardPageRoutingModule } from './series-leaserboard-routing.module';

import { SeriesLeaserboardPage } from './series-leaserboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesLeaserboardPageRoutingModule
  ],
  declarations: [SeriesLeaserboardPage]
})
export class SeriesLeaserboardPageModule {}
