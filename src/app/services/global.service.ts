import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  fireBaseUrl : any = {};
  getAllUrls : any = [];
  dream11TeamData : any = [];
  teamImages : any = [];
  teamImage:any = null;
  crVersion : any;
  constructor(
    private market: Market,
    private socialSharing: SocialSharing,
    public manucl : MenuController,
    public http : HttpClient,
    // private fireStore: AngularFirestore
    // private firestore: AngularFirestore
  ) { }

  appShare(){
    this.socialSharing.share(
      'Dream team 11 Guru For ipl best team 11, Download Share and Give 5 Stare Review',
      'Thank you',
      'https://play-lh.googleusercontent.com/9QHm3JWdY4SFOb2W9V2NTKe50ntdfpwz6EEjpy0F4Frj5JLNw4-sVuvXR-Om-oqgOwk=s360-rw',
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

  // getData(){
    // const storeRef = this.fireStore.collection<any>('images')
    // console.log("err>>>>>>>>>>>>>>>>>>>>>"+JSON.stringify(storeRef));
    // return new Promise ((resolve , reject) =>{
  	// 	this.http.get('dream11-team-guide-new.appspot.com').subscribe(res => {
    //     console.log("res>>>>>>>>>>>>>>>>>>>>>"+res);
  	// 		resolve(res);
  	// 	},(err) =>{
  	// 		reject(err);
  	// 	});
  	// });
  // }

}
