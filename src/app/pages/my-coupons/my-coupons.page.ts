import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.page.html',
  styleUrls: ['./my-coupons.page.scss'],
})
export class MyCouponsPage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
