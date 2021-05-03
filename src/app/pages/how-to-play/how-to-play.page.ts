import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.page.html',
  styleUrls: ['./how-to-play.page.scss'],
})
export class HowToPlayPage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
