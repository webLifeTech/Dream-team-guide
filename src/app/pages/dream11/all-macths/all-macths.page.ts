import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-macths',
  templateUrl: './all-macths.page.html',
  styleUrls: ['./all-macths.page.scss'],
})
export class AllMacthsPage implements OnInit {

  constructor(
    public gs : GlobalService,
    public admobFree : AdmobfreeService,
    public router : Router
  ) { }

  ngOnInit() {
  }

  seeAll(teams){
    this.admobFree.rendomAdShow();
    this.gs.teamImages = teams;
    this.router.navigate(['/all-team']);
  }

}
