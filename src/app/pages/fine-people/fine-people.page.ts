import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-fine-people',
  templateUrl: './fine-people.page.html',
  styleUrls: ['./fine-people.page.scss'],
})
export class FinePeoplePage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
