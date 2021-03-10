/*import {Component, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
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
import * as email from '../login/login.page';

interface users{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    Trophies: any;
  }

@Component({
    selector: 'app-award',
    templateUrl: './award.page.html',
    styleUrls: ['./award.page.scss'],
})
export class AwardPage implements OnInit {
    img = 'assets/images/top.png';
    routeParams;
    myAny:any;
    time = {
        gaugeType: 'full',
        gaugeValue: 5,
        gaugeLabel: 'Time',
        gaugeAppendText: ':40:59'
    };
    distance = {
        gaugeType: 'full',
        gaugeValue: 26.30,
        gaugeLabel: 'Distance(mi)',
        gaugeAppendText: ''
    };
    calories = {
        gaugeType: 'full',
        gaugeValue: 3255,
        gaugeLabel: 'Calories',
        gaugeAppendText: ''
    };

    upload(){
        this.afs.collection('users').doc(email.__email).set({Trophies:this.list2},{merge:true});
    }

    list = [
        
    ];

    list2 = [
        {
            title: 'Jan',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/2.svg', 'assets/images/svg/3.svg',
                'assets/images/svg/4.svg', 'assets/images/svg/5.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/1.jpg'
        },
        {
            title: 'Feb',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/3.svg', 'assets/images/svg/5.svg',
                'assets/images/svg/6.svg', 'assets/images/svg/5.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/2.jpg'
        },
        {
            title: 'May',
            cups: ['assets/images/svg/2.svg', 'assets/images/svg/5.svg', 'assets/images/svg/3.svg',
                'assets/images/svg/1.svg', 'assets/images/svg/4.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/3.jpg'
        },
        {
            title: 'Mar',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/1.svg', 'assets/images/svg/2.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/4.jpg'
        },
        {
            title: 'Jun',
            cups: ['assets/images/svg/6.svg', 'assets/images/svg/3.svg', 'assets/images/svg/1.svg',
                'assets/images/svg/2.svg', 'assets/images/svg/4.svg'],
            img: 'assets/images/sport/5.jpg'
        }, {
            title: 'Apr',
            cups: ['assets/images/svg/5.svg', 'assets/images/svg/4.svg',
                'assets/images/svg/6.svg', 'assets/images/svg/4.svg'],
            img: 'assets/images/sport/6.jpg'
        }
    ];



    constructor(
        private modalCtrl: ModalController,
        //private afStorage: AngularFireStorage,
        public afs: AngularFirestore, 
        public afAuth: AngularFireAuth, 
        public pickerCtrl: PickerController,
        public alertController: AlertController,
        //private storage: Storage,
        private cd: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.routeParams = this.route.params.subscribe(
          params => {
              //Update Variables here
              this.afs.collection('users').doc(email.__email)
              this.myAny = this.afs.collection('users').doc(email.__email).snapshotChanges().subscribe(
                values => {
                   const data = values.payload.data() as users;
                   if (data.Trophies){
                       this.list = data.Trophies;
                   }
                   else{
                        var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];  
                        let date = new Date;
                        let Month = date.getMonth();
                        if (email.__email != ""){
                        this.list = [{
                                title: CurrntMonth[Month].substring(0,3),
                                cups: [],
                                img: 'assets/images/sport/1.jpg'
                                },
                            ];
                            this.afs.collection('users').doc(email.__email).set({Trophies:this.list},{merge:true});
                            this.cd.detectChanges();
                        }

                   }
                   this.cd.detectChanges();
                });

            });
      }

}*/


import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-award',
    templateUrl: './award.page.html',
    styleUrls: ['./award.page.scss'],
})
export class AwardPage implements OnInit {
    img = 'assets/images/top.png';
    time = {
        gaugeType: 'full',
        gaugeValue: 5,
        gaugeLabel: 'Time',
        gaugeAppendText: ':40:59'
    };
    distance = {
        gaugeType: 'full',
        gaugeValue: 26.30,
        gaugeLabel: 'Distance(mi)',
        gaugeAppendText: ''
    };
    calories = {
        gaugeType: 'full',
        gaugeValue: 3255,
        gaugeLabel: 'Calories',
        gaugeAppendText: ''
    };
    list = [
        {
            title: 'Jan',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/2.svg', 'assets/images/svg/3.svg',
                'assets/images/svg/4.svg', 'assets/images/svg/5.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/1.jpg'
        },
        {
            title: 'Feb',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/3.svg', 'assets/images/svg/5.svg',
                'assets/images/svg/6.svg', 'assets/images/svg/5.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/2.jpg'
        },
        {
            title: 'May',
            cups: ['assets/images/svg/2.svg', 'assets/images/svg/5.svg', 'assets/images/svg/3.svg',
                'assets/images/svg/1.svg', 'assets/images/svg/4.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/3.jpg'
        },
        {
            title: 'Mar',
            cups: ['assets/images/svg/1.svg', 'assets/images/svg/1.svg', 'assets/images/svg/2.svg', 'assets/images/svg/6.svg'],
            img: 'assets/images/sport/4.jpg'
        },
        {
            title: 'Jun',
            cups: ['assets/images/svg/6.svg', 'assets/images/svg/3.svg', 'assets/images/svg/1.svg',
                'assets/images/svg/2.svg', 'assets/images/svg/4.svg'],
            img: 'assets/images/sport/5.jpg'
        }, {
            title: 'Apr',
            cups: ['assets/images/svg/5.svg', 'assets/images/svg/4.svg',
                'assets/images/svg/6.svg', 'assets/images/svg/4.svg'],
            img: 'assets/images/sport/6.jpg'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}