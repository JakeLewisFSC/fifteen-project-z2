import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {NgxGaugeModule} from 'ngx-gauge';
import {ChartsModule} from 'ng2-charts';
// FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import { NgxQRCodeModule , QrcodeComponent} from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';


//import { AngularFireStorage } from 'angularfire2/storage';

import { IonicStorageModule } from '@ionic/storage';


const config = {
  apiKey: "AIzaSyBFoCeHShLC0LiUlBU28PTDGKIetylRcGU",
  authDomain: "sanguine-willow-223916.firebaseapp.com",
  databaseURL: "https://sanguine-willow-223916.firebaseio.com",
  projectId: "sanguine-willow-223916",
  storageBucket: "sanguine-willow-223916.appspot.com",
  messagingSenderId: "707715471610",
  appId: "1:707715471610:web:270335ab826b30b4441143"
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        QRCodeModule,
        //NgxQRCodeModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule,
        NgxGaugeModule,
        ChartsModule,
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule, // firestore
        AngularFireStorageModule, // auth
        AngularFireAuthModule,
        
        //Facebook,
        //AngularFireStorageModule,
        IonicStorageModule.forRoot({
          name: '_myDb',
          driverOrder: ['localstorage']
        }),
    ],
    providers: [
        GooglePlus,
        StatusBar,
        SplashScreen,
        
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
