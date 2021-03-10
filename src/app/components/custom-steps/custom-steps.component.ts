import {Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NoticeComponent} from '../../pages/notice/notice.component';
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
import * as email from '../../pages/login/login.page';
import { Storage } from '@ionic/storage';



interface users{
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string; 
  Trophies: any;
  Points: number;
}

@Component({
  selector: 'custom-steps',
  templateUrl: './custom-steps.component.html',
  styleUrls: ['./custom-steps.component.scss'],
})
export class CustomStepsComponent {

  routeParams;
  userCollection: AngularFirestoreCollection<users>;
  userDocument: AngularFirestoreDocument<users>;
  userX: any;
  myAny:any;
  points:any;

  constructor(
    private modalCtrl: ModalController,
    //private afStorage: AngularFireStorage,
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private storage: Storage,
  ) { }

  ngOnInit() {
      this.routeParams = this.route.params.subscribe(
        params => {
            /*Update Variables here*/
          if (!email.__email)
          {
            this.storage.get("email").then(data=>{
              //if data exists
                if(data)
                {
                  console.log("Path 1");
                  let uid = data.credential.uid;
                  let Email = data.credential.email;
                  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
                  //console.log("We are here: "+email);

                  // new1 ////

                  this.myAny = this.afs.collection('users').doc(uid).snapshotChanges().subscribe(
                    values => {
                      const data = values.payload.data() as users;
                      if (!data.Points)
                      {
                       this.afs.collection('users').doc(Email).set({Points:0},{merge:true});
                       this.points = 0;
                      }
                      else
                      {
                        this.points = data.Points;
                      }
                      this.cd.detectChanges();
          
                    });
                    
                    //////////
                }
                else
                {
                  console.log("Path 2");
                  console.log("IT'S EMPTY")
                }
            });
          }  
          else
          {
            console.log("Path 3");
            this.myAny = this.afs.collection('users').doc(email.__id).snapshotChanges().subscribe(
              values => {
                const data = values.payload.data() as users;
                console.log("myAny" + data.email);
                if (!data.Points)
                {
                 this.afs.collection('users').doc(email.__id).set({Points:0},{merge:true});
                 this.points = 0;
                }
                else
                {
                  this.points = data.Points;
                }
                this.cd.detectChanges();
  
              });
          }
        });


      
  }
}
