import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  isIntAdsReady : boolean = false;
  isRewardAdsReady : boolean = false;
  constructor(
    private admobFree: AdMobFree
  ) {
    // Banner ad : ca-app-pub-8376945539001469/1203672748
    // Interstilal ad : ca-app-pub-8376945539001469/3963080915
    // App Id : ca-app-pub-8376945539001469~6455999421
  }

  adMobFreeBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8376945539001469/1203672748',
      isTesting: true,
      bannerAtTop: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then((res) => {
      console.log("bannerConfig>>>>>>>>>>>>>>", res);
      }).catch(e => console.log(e));
  }

  showInterstitialAds() {
    if(!this.isIntAdsReady){
      this.isIntAdsReady = true;
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-8376945539001469/3963080915',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare().then((res) => {
        console.log("interstitialConfig>>>>>>>>>>>>>>", res);
          this.isIntAdsReady = false;
          this.admobFree.interstitial.show();
        }).catch(e => console.log(e));
    }
  }

  rendomAdShow(){
    var reqCount = [1, 2, 3, 4, 5, 6, 7, 8];
    var findFive = reqCount[Math.floor(Math.random() * reqCount.length)];
    if(findFive == 2 || findFive == 5){
      this.showInterstitialAds();
    }
  }
}
