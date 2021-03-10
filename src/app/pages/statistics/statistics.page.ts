import {Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import { map, endWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import {ModalController} from '@ionic/angular';
import {NoticeComponent} from '../notice/notice.component';
//import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import {ActivatedRoute} from '@angular/router';
//
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import * as email from '../services/auth.service';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

import * as userEmail from '../services/auth.service'
//import { NgxQRCodeModule,QrcodeComponent } from 'ngx-qrcode2';

interface workout{
  Workout:string;
  Total_Weight:string;
  Reps:string;
  Starting_Weight:string;
  Time:string;
}

interface users{
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  Trophies: any;
}



@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.page.html',
    styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
    @ViewChild('unityView', {static: false}) unityView;
    baseUrl: string;
    project: string;
    myAny:any;
    WorkoutCollection: AngularFirestoreCollection<workout>;

    ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
    techiediaries = 'https://www.npmjs.com/~techiediaries';
    letsboot = 'https://www.letsboot.com/';

   
      public myAngularxQrCode: string = "hello";
      routeParams;
  
    constructor(
      platformLocation: PlatformLocation,
      public afs: AngularFirestore, 
      public afAuth: AngularFireAuth, 
      //qr: NgxQRCodeModule,

      private modalCtrl: ModalController,
      //private afStorage: AngularFireStorage, 
      public pickerCtrl: PickerController,
      public alertController: AlertController,
      private storage: Storage,
      private cd: ChangeDetectorRef,
      private route: ActivatedRoute,
      private router: Router,


      ) {
      const location = (platformLocation as any).location;
      this.baseUrl = location.origin + location.pathname.replace('index.html', '');
      console.log('baseUrl', this.baseUrl);
      this.myAngularxQrCode = 'Your QR code data string';
      
    }
  
    load(name: string) {
      this.project = name;
      this.unityView.loadProject(`../../../assets/${name}/${name}.json`);
    }
  
    send(objectName: string, methodName: string, messageValue: string) {
      this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
    }

    user = {
      name: 'hello User',
      intro: 'Fitness meet me',
      img: 'assets/images/pfp.png'
    };

    img = 'assets/images/top.png';
    gaugeType = 'arch';
    gaugeValue = 1390;
    gaugeLabel = 'current';
    gaugeAppendText = '';
    sleep = {
        gaugeType: 'full',
        gaugeValue: 8,
        gaugeLabel: 'Total Sleep',
        gaugeAppendText: 'h 21 min'
    };

    accounts = "users/";

    //email = "perDQBAB2cP48ChbcUixU7ykbbP2";
    private async normalLogin(email:any,password:any){
      await this.afAuth.signInWithEmailAndPassword(email, password);
    }

    SignOut() {
      this.router.navigateByUrl('/home');
    }
    

    ngOnInit() {
      if (!email.__email)
      {
        this.storage.get("email").then(data=>{
          //if data exists
            if(data)
            {
              let uid = data.credential.uid;
              let Email = data.credential.email;
              let displayName = data.credential.displayName;
              let photoURL = data.credential.photoURL;

              email.setEmail(data.credential.email);

              /////  might edit out later
              
              if (data.type == "google")
              {
                this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(data.token))  
                .then( success => {
                  console.log("Firebase success: " + JSON.stringify(success));
                  //this.router.navigateByUrl('/tabs/statistics');
                })
                .catch( error => {
                    console.log("Firebase failure: " + JSON.stringify(error)) 
                   // this.router.navigateByUrl('/login');
              });
              }
              else if (data.type == "normal")
              {
                console.log("Normal Login");
                this.normalLogin(data.email, data.password);
                console.log("normal login");
                //this.router.navigateByUrl('/tabs/statistics');
              }
            }
            else
            {
              // no email and no email in storage
              console.log("IT'S EMPTY")
              //this.router.navigateByUrl('/login');
            }
        });
      }  
      else
      {
        // email has a value
      }
      this.routeParams = this.route.params.subscribe(
        params => {

            console.log("Your Email: " + userEmail.__email);
            this.WorkoutCollection = this.afs.doc(this.accounts+userEmail.__email).collection('Workouts' , ref => ref.orderBy('Time'));
              
            this.myAny = this.WorkoutCollection.snapshotChanges().pipe(map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as workout;
                const id = a.payload.doc.id;
                console.log(data);
                return { id, data};
              });
            }));
        });

    }


}
