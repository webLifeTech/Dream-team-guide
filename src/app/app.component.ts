import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { AdmobfreeService } from './services/admobfree.service';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private router: Router,
    public admobFree : AdmobfreeService,
    public gs : GlobalService,
  ) {
    this.initializeApp();
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url) {
        navigator['app'].exitApp();
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.admobFree.showInterstitialAds();
      }, 1000);
      this.admobFree.adMobFreeBanner();
    });
  }

  mybalance(){
    this.router.navigate(['/my-balance']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  earn(){
    this.router.navigate(['/earn']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  finepeople(){
    this.router.navigate(['/fine-people']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  mycoupons(){
    this.router.navigate(['/my-coupons']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  howtoplay(){
    this.router.navigate(['/how-to-play']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  seriesleaserboard(){
    this.router.navigate(['/series-leaserboard']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  setting(){
    this.router.navigate(['/setting']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  more(){
    this.router.navigate(['/more']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
  helpdesk(){
    this.router.navigate(['/helpdesk']);
    this.gs.toggleMenu();
    this.admobFree.rendomAdShow();
  }
}
