import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-series-leaserboard',
  templateUrl: './series-leaserboard.page.html',
  styleUrls: ['./series-leaserboard.page.scss'],
})
export class SeriesLeaserboardPage implements OnInit {
  binding : any = 'Series';
  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
