import { Injectable } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private market: Market,
    private socialSharing: SocialSharing,
    public manucl : MenuController,
  ) { }

  appShare(){
    this.socialSharing.share(
      'Play Dream guide Downlaod, Share and Give 5 Stare Review',
      'Thank you',
      'https://play-lh.googleusercontent.com/8yM33fm7z4KOK_Hk1PYH1yCB8MqVHFM3g5eNQCZM0zW8msS5oWTqXcUuaPdQBOQyrA=s360-rw',
      'https://play.google.com/store/apps/details?id=com.lifetechs.dreamteamguide'
      ).then((res) => {
      // Success!
    }).catch((error) => {
      // Error!
    })
  }

  rateApp(){
    this.market.open('com.lifetechs.dreamteamguide');
  }

  toggleMenu(){
    this.manucl.toggle()
  }

}
