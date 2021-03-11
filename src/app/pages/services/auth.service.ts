import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';

//ionic storage
import { Storage } from '@ionic/storage';


import {
  
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from './user.model'; 

export var __email;
export var __id;

export function setEmail(email:string)
{
  __email = email;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;
 
  

  

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private googlePlus: GooglePlus,
    private platform: Platform,
    private storage: Storage,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }  
  AuthLogin(provider) {
   
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  facebookSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin2(provider);
  }
  private async oAuthLogin2(provider) {
    const credential = await this.afAuth.signInWithPopup(provider);
    this.emailToPhoneStorage(credential.user,provider,"facebook");
    return this.updateUserData(credential.user);
  }
  

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }



  private async CustomLogin(formData)
  {
    const credential = await this.afAuth.signInWithEmailAndPassword(formData.value.name,formData.value.pwd);
    this.emailToPhoneStorage2(credential.user,formData.value.name,formData.value.pwd,"normal");
    return this.updateUserData(credential.user);
  }

  private async onReg(formData){
    const credential = await this.afAuth.createUserWithEmailAndPassword(formData.value.name,formData.value.pwd);
    let split = formData.value.name.split("@");
    credential.additionalUserInfo.username = split[0];
    this.emailToPhoneStorage2(credential.user,formData.value.name,formData.value.pwd,"normal");
    return this.updateUserData(credential.user);
  }



  googleSignIn() {

    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
               
    this.googlePlus.login({
      'webClientId': '07715471610-4ffd37q62ds1qd5j7ak978cmhreld65t.apps.googleusercontent.com',
      'offline': false
    }).then( res => {
      this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res .idToken))
        .then( success => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.emailToPhoneStorage(success.user,res.idToken,"google");
          return this.updateUserData(success.user);
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: ", err));
      } 
      else if (this.platform.is('ios')) {
               
    this.googlePlus.login({
      'webClientId': '07715471610-4ffd37q62ds1qd5j7ak978cmhreld65t.apps.googleusercontent.com',
      'offline': false
    }).then( res => {
      this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {
          console.log("JAKE: " + JSON.stringify(res));

          this.emailToPhoneStorage(success.user,res.idToken,"google");
          return this.updateUserData(success.user);
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: ", err));
      } 
      else {// desktop
           //fallback to browser APIs or
           const provider = new firebase.auth.GoogleAuthProvider();
           return this.oAuthLogin(provider);
             }
      });

  }

  private async oAuthLogin(provider) {
    const credential = await this.afAuth.signInWithPopup(provider);
    this.emailToPhoneStorage(credential.user,provider,"none");
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${email}`);
    console.log("We are here: "+email);

    
    if (displayName)
    {
      const data  = {
        uid,
        email,
        displayName,
        photoURL
      };
      __email = email;
      console.log("We are here2: "+__email);
      __id = uid;
      this.router.navigate(['/tabs']);
      return userRef.set(data, { merge: true });
    }
    else
    {
      const data  = {
        uid,
        email,
        photoURL
      };
      __email = email;
      console.log("We are here2: "+__email);
      __id = uid;
      this.router.navigate(['/tabs']);
      return userRef.set(data, { merge: true });
    }
    /*
    = {
      uid,
      email,
      displayName,
      photoURL
    };*/
  }

  public async signOut() {
    await this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

  emailToPhoneStorage(credential_:any, token_:any, type_:string){
    let fields = {
      credential: credential_,
      token: token_,
      type:type_,
    }
    this.storage.get("email").then(data=>{
      //if data exists
      if(data)
        {
          this.storage.set("email", fields);
        }
        else
        {
          this.storage.set("email", fields);
        }
    });
  }
  emailToPhoneStorage2(credential_:any, email_:string, password_:string, type_:string){
    let fields = {
      credential: credential_,
      email:email_,
      password:password_,
      type:type_,
    }
    this.storage.get("email").then(data=>{
      //if data exists
      if(data)
        {
          this.storage.set("email", fields);
        }
        else
        {
          this.storage.set("email", fields);
        }
    });
  }

  deleteEmailInPhoneStorage(credential:any){
    this.storage.get("email").then(data=>{
      //if data exists
      if(data)
        {
          this.storage.set("email", "");
        }
        else
        {
          this.storage.set("email", "");
        }
    });
  }

  signInWithEmailInPhoneStorage(){
    this.storage.get("email").then(data=>{
      //if data exists
      if(data && data != "")
        {
          this.updateUserData(data);
          console.log(data);
        }
        else
        {
          console.log("IT'S EMPTY")
          this.router.navigateByUrl('/login');
        }
    });
  }

  public googleAutoLogin(res:any){
    console.log("Auto Login");
    this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));
  }

}