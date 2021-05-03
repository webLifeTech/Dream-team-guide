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
      try {
        window.cordova.plugins.firebase.config.fetch(1).then((isfetch: any) => {
          window.cordova.plugins.firebase.config.fetchAndActivate().then((res: any) => {
            window.cordova.plugins.firebase.config.getString('getAllurl').then((res2: any) => {
              this.gs.fireBaseUrl = JSON.parse(res2);
              this.gs.getAllUrls = this.gs.fireBaseUrl["apps"];
              console.log("this.gs.fireBaseUrl>>>>>>>>>>>>>>>>>>>>>>>>>>>"+JSON.stringify(this.gs.fireBaseUrl))
              this.av.getVersionNumber().then( crVersion =>{
                this.gs.crVersion = crVersion;
                // console.log("crVersion============="+crVersion)
                if(crVersion != this.gs.fireBaseUrl['appVersion']){
                  this.appUpdate();
                }else{
                  this.admobFree.showInterstitialAds();
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
      this.admobFree.adMobFreeBanner();
    });
  }

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
        text: 'New v'+this.gs.fireBaseUrl['appVersion'],
        handler: () => {
          this.gs.rateApp();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.admobFree.showInterstitialAds();
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
  // helpdesk(){
  //   this.router.navigate(['/helpdesk']);
  //   this.gs.toggleMenu();
  //   this.admobFree.rendomAdShow();
  // }
}
