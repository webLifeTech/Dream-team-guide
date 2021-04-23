import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public gs : GlobalService,
    public router : Router,
    public admobFree : AdmobfreeService,
  ) { }

  ngOnInit() {
  }

  appGuide(){
    this.router.navigate(['/tabs/mymatches']);
  }

  seeAll(teams){
    this.admobFree.rendomAdShow();
    this.gs.teamImages = teams;
    this.router.navigate(['/all-team']);
  }

}
