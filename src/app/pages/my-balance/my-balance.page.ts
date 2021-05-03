import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.page.html',
  styleUrls: ['./my-balance.page.scss'],
})
export class MyBalancePage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
