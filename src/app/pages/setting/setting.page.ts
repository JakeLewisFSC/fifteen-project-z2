import {Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NoticeComponent} from '../notice/notice.component';
//import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import {ActivatedRoute} from '@angular/router';
//
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
//
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import * as email from '../services/auth.service';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

declare let unityARCaller: any;


interface users{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    Trophies: any;

    Pin: any;
    User_Weight:any;
    Goal_Weight:any;
    Heaviest_Weight:any;
  }

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SettingPage implements OnInit {

    ////

    openUnity() {
      // It is possible to send a string message to Unity-side (optional)
      unityARCaller.launchAR( "my message for Unity-side", this.uReturnedFromUnity, this.uMessageReceivedFromUnity );
    }
    
    sendMessageToUnity() {
      // Send a message to Unity while Unity is still running
      unityARCaller.sendMessage( "Function name", "Optional parameter" );
    }
    
    uReturnedFromUnity = (param) => {
      // param:String is the (optional) message returned from Unity-side
      alert( param );
    };
    
    uMessageReceivedFromUnity = (message) => {
      // message:String is the message received from Unity-side
      // If you call a UI-blocking function here like 'alert', subsequent messages from Unity
      // will be queued by the OS and will only be received after returning to Ionic and
      // unblocking the UI
      console.log( "=========" + message + "=========" );
    };

    ////

    routeParams;
    userCollection: AngularFirestoreCollection<users>;
    userDocument: AngularFirestoreDocument<users>;
    userX: any;
    myAny:any; 
    UserPin = "--";
    UserWeight:any;
    HeaviestWeight:any;
    GoalWeight = "--";
    isIOS = false;

    Edit = false;
  
    list = [
      {icon: 'bicycle', color: 'primary', title: "Today's Weight", date: '200'},
      {icon: 'ios-walk', color: 'tertiary', title: 'Goal Weight', date: '190'},
      {icon: 'stats', color: 'tertiary', title: 'Heaviest Weight', date: '210'}
    ];
    

    img = 'assets/images/backgroundD.png';
    user = {
        name: 'hello User',
        intro: 'Fitness meet me',
        img: 'assets/images/pfp.png'
    };

    constructor(
        private modalCtrl: ModalController,
        //private afStorage: AngularFireStorage,
        public afs: AngularFirestore, 
        public afAuth: AngularFireAuth, 
        public pickerCtrl: PickerController,
        public alertController: AlertController,
        private storage: Storage,
        private cd: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        public platform: Platform,
        ) {
    }

    EditCancel(){
      this.Edit = false;
      this.cd.detectChanges();
    }
    EditSave(){
      //const inputValue1 = <HTMLInputElement> document.getElementById("uWeight");
      var inputValue1 = (<HTMLInputElement>document.getElementById("uWeight")).value;
      var inputValue2 = (<HTMLInputElement>document.getElementById("gWeight")).value;
      var inputValue3 = (<HTMLInputElement>document.getElementById("hWeight")).value;

      if (inputValue1 == "")
      {
        inputValue1 = this.UserWeight;
      }
      if (inputValue2 == "")
      {
        inputValue2 = this.GoalWeight;
      }
      if (inputValue3 == "")
      {
        inputValue3 = this.HeaviestWeight;
      }


      this.afs.collection('users').doc(email.__email).set(
        {
          User_Weight:inputValue1,
          Goal_Weight:inputValue2,
          Heaviest_Weight:inputValue3,
        },{merge:true});
      this.Edit = false;
      this.cd.detectChanges();
    }
    EditOn(){
      this.Edit = true;
      this.cd.detectChanges();
      console.log("IM HERRREE");
    }

  ngOnInit() {

      this.routeParams = this.route.params.subscribe(
        params => {
          this.Edit = false;
          console.log('Hello ' + email.__email);
            /*Update Variables here*/

          if(this.platform.is('ios'))
          {
            this.isIOS = true;
          }  
            
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
                        //this.router.navigateByUrl('/login');
                  });
                  }
                  else if (data.type == "normal")
                  {
                    console.log("Normal Login");
                    this.normalLogin(data.email, data.password);
                    //this.router.navigateByUrl('/tabs/statistics');
                  }
  
  
                  /////////
                  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${Email}`);
                  //console.log("We are here: "+email);
                  if (displayName)
                  {
                    const data2 = {
                      uid,
                      Email,
                      displayName,
                      photoURL
                    };
                    userRef.set(data2, { merge: true });
                  }
                  else
                  {
                    const data2 = {
                      uid,
                      Email,
                      photoURL
                    };
                    userRef.set(data2, { merge: true });
                  }

                 
                  
                  // new1 ////
                  this.myAny = this.afs.collection('users').doc(Email).snapshotChanges().subscribe(
                    values => {
                       const data3 = values.payload.data() as users;
                       console.log("myAny" + data3.email);
                       if (data3.photoURL){
                       this.user.img = data3.photoURL;}
                       else{
                        this.user.img = 'assets/images/pfp.png';
                        console.log("Default IMG");
                       }
                       ////////////
                        if (data3.Pin){
                          this.UserPin = data3.Pin;}
                        if (data3.Heaviest_Weight){
                          this.HeaviestWeight = data3.Heaviest_Weight;
                        }
                        if (data3.User_Weight)
                        {
                          this.UserWeight = data3.User_Weight;
                        }
                        if (data3.Goal_Weight)
                        {
                          this.GoalWeight = data3.Goal_Weight;
                        }
                        ///////////
                       if (!data3.displayName){
                        let split = Email.split("@");
                        let displayname = split[0];
                        this.afs.collection('users').doc(Email).set({displayName:displayname},{merge:true});
                       }
                       this.user.name = data3.displayName;
                       this.cd.detectChanges();
          
                    });
                    //////////
                }
                else
                {
                  console.log("IT'S EMPTY")
                  //this.router.navigateByUrl('/login');
                }
            });
          }  
          else
          {
            this.myAny = this.afs.collection('users').doc(email.__email).snapshotChanges().subscribe(
              values => {
                const data = values.payload.data() as users;
                console.log("myAny" + data.email);
                if (data.photoURL){
                this.user.img = data.photoURL;}
                if (data.Pin){
                  this.UserPin = data.Pin;}
                if (data.Heaviest_Weight){
                  this.HeaviestWeight = data.Heaviest_Weight;
                }
                if (data.User_Weight){
                  this.UserWeight = data.User_Weight;
                }
                if (data.Goal_Weight){
                  this.GoalWeight = data.Goal_Weight;
                }

                if (!data.displayName){
                  let split = email.__email.split("@");
                  let displayname = split[0];
                  this.afs.collection('users').doc(email.__email).set({displayName:displayname},{merge:true});
                }
                this.user.name = data.displayName;
                this.cd.detectChanges();
  
              });
          }
        });
  }

    async onNotice() {
        try {
            const modal = await this.modalCtrl.create({
                component: NoticeComponent, cssClass: 'notice-modal',
            });
            await modal.present();
            const {data} = await modal.onWillDismiss();
            if (data) {
            }
        } catch (e) {

        }
    }

    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    private async normalLogin(email:any,password:any){
      await this.afAuth.signInWithEmailAndPassword(email, password);
    }

    SignOut() {
      this.router.navigateByUrl('/home');
    }

}
