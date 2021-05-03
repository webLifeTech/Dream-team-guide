import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.page.html',
  styleUrls: ['./winners.page.scss'],
})
export class WinnersPage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
