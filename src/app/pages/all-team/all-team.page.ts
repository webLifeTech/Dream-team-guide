import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-team',
  templateUrl: './all-team.page.html',
  styleUrls: ['./all-team.page.scss'],
})
export class AllTeamPage implements OnInit {

  constructor(
    public router : Router,
    public gs : GlobalService,
    public admobFree : AdmobfreeService,
  ) { }

  ngOnInit() {
  }

  viewTeam(img){
    this.admobFree.rendomAdShow();
    this.gs.teamImage = img;
    this.router.navigate(['/veiw-team']);
  }

}
