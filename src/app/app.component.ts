import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, Platform } from '@ionic/angular';
import { AdmobfreeService } from './services/admobfree.service';
import { GlobalService } from './services/global.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
declare var window : any


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  fireBaseUrl:any;
  constructor(
    private platform: Platform,
    private router: Router,
    public admobFree : AdmobfreeService,
    public gs : GlobalService,
    public ac : ActionSheetController,
    public av : AppVersion,
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
      this.gs.getData();
      try {
        window.cordova.plugins.firebase.config.fetch(1).then((isfetch: any) => {
          window.cordova.plugins.firebase.config.fetchAndActivate().then((res: any) => {
            window.cordova.plugins.firebase.config.getString('getAllurls').then((res2: any) => {
              this.fireBaseUrl = JSON.parse(res2);
              this.gs.dream11TeamData = this.fireBaseUrl["macths"];
              // console.log("this.fireBaseUrl>>>>>>>>>>>>>>>>>>>>>>>>>>>"+JSON.stringify(this.fireBaseUrl))
              this.av.getVersionNumber().then( crVersion =>{
                // console.log("crVersion============="+crVersion)
                if(crVersion != this.fireBaseUrl['appVersion']){
                  this.appUpdate();
                }
              })
            }).catch((error: any) => console.error(error));
        });
      }).catch((err) => {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' + err);
      });
    } catch (ex) {
      console.log('exexexexexexexexexexexexexexexex++++++++++++' + ex);
    }
      setTimeout(() => {
        this.admobFree.showInterstitialAds();
      }, 1000);
      this.admobFree.adMobFreeBanner();
    });
  }

  // [{"name": "Chennai Super Kings",},
  // {"name": "Delhi Capitals",},
  // {"name": "Kolkata Riders",},
  // {"name": "Mumbai Indians",},
  // {"name": "Punjab Kings",},
  // {"name": "Bangaluru",},
  // {"name": "Rajasthan Royals",},
  // {"name": "Sunrisers Hyderabad",}]

  async appUpdate() {
    const actionSheet = await this.ac.create({
      header: 'Anjoy New Version',
      mode: 'ios',
      buttons: [{
        text: 'Update Now',
        handler: () => {
          this.gs.rateApp();
        }
      }, {
        text: 'New v0.0.5',
        handler: () => {
          this.gs.rateApp();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
  
    await actionSheet.present();
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
