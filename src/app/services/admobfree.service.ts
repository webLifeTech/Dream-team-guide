import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  isIntAdsReady : boolean = false;
  isRewardAdsReady : boolean = false;
  isLoading : any;
  constructor(
    private admobFree: AdMobFree,
    private lc : LoadingController,
    public platform: Platform,
  ) {
    // Banner ad : ca-app-pub-8376945539001469/1203672748
    // Interstilal ad : ca-app-pub-8376945539001469/3963080915
    // App Id : ca-app-pub-8376945539001469~6455999421

    this.platform.ready().then(() => {
      this.preInteAds();
    });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_CLOSE).subscribe(() => {
      this.preInteAds();
    });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_LOAD).subscribe(() => {
      if (this.isIntAdsReady) {
        this.admobFree.interstitial.show();
      }
    });
    this.admobFree.on(this.admobFree.events.INTERSTITIAL_OPEN).subscribe(() => {
      this.isIntAdsReady = false;
    });
  }

  adMobFreeBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8376945539001469/1203672748',
      isTesting: true,
      bannerAtTop: false,
      autoShow: true,
      overlap: false
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then((res) => {
      console.log("bannerConfig>>>>>>>>>>>>>>", res);
      }).catch(e => console.log(e));
  }

  showInterstitialAds() {
    this.preLoading().then(() => {
      this.isIntAdsReady = true;
      this.admobFree.interstitial.isReady().then((isAdtime) => {
          if (isAdtime) {
            this.admobFree.interstitial.show();
          }
          if (this.isLoading) {
            this.isLoading.dismiss();
          }
        }).catch((err) => {
          if (this.isLoading) {
            this.isLoading.dismiss();
          }
        });
    });

    this.admobFree.on(this.admobFree.events.INTERSTITIAL_OPEN).subscribe(() => {
      if (this.isLoading) {
        this.isLoading.dismiss();
      }
    });

    this.admobFree.on(this.admobFree.events.INTERSTITIAL_LOAD_FAIL).subscribe(() => {
      if (this.isLoading) {
        this.isLoading.dismiss();
      }
    });
  }

  async preLoading() {
    this.isLoading = await this.lc.create({
      message: "Please wait...",
      duration: 2000,
    });
    await this.isLoading.present();
  }

  preInteAds() {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-8376945539001469/3963080915',
        isTesting: true,
        autoShow: false
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare().then((res) => {
        console.log("interstitialConfig>>>>>>>>>>>>>>", res);
      }).catch(e => {
        console.log(e)
      });
  }

  rendomAdShow(){
    var reqCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var findFive = reqCount[Math.floor(Math.random() * reqCount.length)];
    if(findFive == 2 || findFive == 5 || findFive == 8){
      this.showInterstitialAds();
    }
  }
}
