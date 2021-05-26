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
  fireBaseUrl: any = {};
  getAllUrls: any = [];
  dream11TeamData: any = [];
  teamImages: any = [];
  teamImage: any = null;
  crVersion: any;
  constructor(
    private market: Market,
    private socialSharing: SocialSharing,
    public manucl: MenuController,
    public http: HttpClient,
    // private fireStore: AngularFirestore
    // private firestore: AngularFirestore
  ) {
    // this.fireBaseUrl = {
    //   "appVersion": "0.0.8",
    //   "main_title": "Sri Lanka tour of Bangladesh, 2021",
    //   "notes": "Please check you team after toss",
    //   "apps": [
    //     {
    //       "logo": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/AppsLogos%2Fdream11.png?alt=media&token=69c602af-9216-4788-ad4b-c74954227a8b",
    //       "title": "Dream11 Teams",
    //       "macths": [
    //         {
    //           "title": "Bangladesh vs Sri Lanka ODIs",
    //           "form": "Bangladesh",
    //           "logo1": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/Team-logs%2Fbangla.png?alt=media&token=b151d97c-31a0-463c-a73e-544ce24a028a",
    //           "short1": "BAN",
    //           "to": "Sri Lanka",
    //           "logo2": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/Team-logs%2Fsri%20lanka.png?alt=media&token=29753e06-0db2-44f8-9aa2-aa5279d566e0",
    //           "short2": "SL",
    //           "time": "May 23,12:30 PM",
    //           "teams": [
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fdream11%20(1).jpg?alt=media&token=f53c5474-67bb-4a99-a87d-cffd88db3c05",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fdream11%20(2).jpg?alt=media&token=9be31c91-cbab-4dcb-8634-255cec68075a",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fdream11%20(3).jpg?alt=media&token=dad74baa-34a5-4ab6-9886-484ba2f1046e",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fdream11%20(4).jpg?alt=media&token=a41b893b-878e-4bf2-baec-b110f21e578a",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fdream11%20(5).jpg?alt=media&token=d3b9cdf1-e835-4b53-b8e7-4d70f7c85552"
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "logo": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/AppsLogos%2Fhowzat.jpg?alt=media&token=a708b01b-a868-4903-8b98-a472fc1b6197",
    //       "title": "Howzat Teams",
    //       "macths": [
    //         {
    //           "title": "Bangladesh vs Sri Lanka ODIs",
    //           "form": "Bangladesh",
    //           "short1": "BAN",
    //           "to": "Sri Lanka",
    //           "short2": "SL",
    //           "time": "May 23,12:30 PM",
    //           "teams": [
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fhowzat%20(1).jpg?alt=media&token=113d9160-a753-4530-aa8c-a8beb2f73600",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fhowzat%20(2).jpg?alt=media&token=0719adf0-61be-46db-966c-eb3e7a8eaffc",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fhowzat%20(3).jpg?alt=media&token=0a8c46b7-4e76-4bbc-8dbd-5aeb6bb21e04",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fhowzat%20(4).jpg?alt=media&token=fc41fd54-f652-431f-b031-34ee56865949",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fhowzat%20(5).jpg?alt=media&token=e1de8942-93cf-45a5-ac55-6674e27ae760"
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "logo": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/AppsLogos%2Fmy11circle.png?alt=media&token=177372d4-eb40-4a9e-8ee7-b9d74cc0ef2e",
    //       "title": "My11Circle Teams",
    //       "macths": [
    //         {
    //           "title": "Bangladesh vs Sri Lanka ODIs",
    //           "form": "Bangladesh",
    //           "short1": "BAN",
    //           "to": "Sri Lanka",
    //           "short2": "SL",
    //           "time": "May 23,12:30 PM",
    //           "teams": [
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fmy11%20(1).jpg?alt=media&token=305c48bd-9f22-463f-9dd9-416fb741b83b",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fmy11%20(2).jpg?alt=media&token=256ef64a-0af5-468d-938f-f0377a2d8086",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fmy11%20(3).jpg?alt=media&token=34f9ee53-204e-4c78-ab8d-b4b01195e999",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fmy11%20(4).jpg?alt=media&token=98c0b438-9bd8-445a-86e6-1bd07119210d"
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "logo": "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/AppsLogos%2Fgamezy.jpg?alt=media&token=10b276a7-67db-4d12-b6d8-584adc325015",
    //       "title": "Gamezy Teams",
    //       "macths": [
    //         {
    //           "title": "Bangladesh vs Sri Lanka ODIs",
    //           "form": "Bangladesh",
    //           "short1": "BAN",
    //           "to": "Sri Lanka",
    //           "short2": "SL",
    //           "time": "May 23,12:30 PM",
    //           "teams": [
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fgamezy%20(1).jpg?alt=media&token=ee6d2b80-4492-4d2d-aa64-f86cbbf155df",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fgamezy%20(2).jpg?alt=media&token=5a0f39a4-d8a9-4203-a57b-9b0083c94790",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fgamezy%20(3).jpg?alt=media&token=944da59d-68ab-4ce0-9cbe-3f5a6c4f08c0",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fgamezy%20(4).jpg?alt=media&token=e0caa737-850e-4da2-873e-245010bd46aa",
    //             "https://firebasestorage.googleapis.com/v0/b/dream11-team-guide-new.appspot.com/o/dreamm11%2Fgamezy%20(5).jpg?alt=media&token=5ff6557e-8633-4fff-9447-f3b77af8b0a5"
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
    // this.getAllUrls = this.fireBaseUrl["apps"];
  }

  appShare() {
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

  rateApp() {
    this.market.open('com.lifetechs.dreamteamguide');
  }

  toggleMenu() {
    this.manucl.toggle()
  }

}
