import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// // import { environment } from '../environments/environment.prod';
// export const firebaseConfig = {
//   apiKey: "AIzaSyBam8wOIPcqsETNWrogwuX80c9wZur1JIU",
//   authDomain: "dream11-team-guide-new.firebaseapp.com",
//   databaseURL: "https://dream11-team-guide-new-default-rtdb.firebaseio.com",
//   projectId: "dream11-team-guide-new",
//   storageBucket: "dream11-team-guide-new.appspot.com",
//   messagingSenderId: "4647694526",
//   appId: "1:4647694526:web:a4f5c768f719edbf5e6eef",
//   measurementId: "G-C369YJ8HKF"
// }
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Market,
    SocialSharing,
    AdMobFree,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
