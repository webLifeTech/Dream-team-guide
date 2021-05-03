import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.page.html',
  styleUrls: ['./earn.page.scss'],
})
export class EarnPage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
