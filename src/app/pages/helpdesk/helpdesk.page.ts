import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.page.html',
  styleUrls: ['./helpdesk.page.scss'],
})
export class HelpdeskPage implements OnInit {

  constructor(public gs : GlobalService,) { }

  ngOnInit() {
  }

}
