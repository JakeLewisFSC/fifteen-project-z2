import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {Component, Input, ViewChild,ChangeDetectorRef} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
//
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import * as email from '../../pages/services/auth.service';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';


interface users{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    Trophies: any;
    Age: string;
    User_Weight: string;
    //Watts: string;
}
interface Workout{
    Calories:string;
    Time:string;
    Watts:string;
    
  }

@Component({
    selector: 'custom-line-chart',
    templateUrl: './custom-line-chart.component.html',
    styleUrls: ['./custom-line-chart.component.scss'],
})
export class CustomLineChartComponent {

    mAge: any;
    mUser_Weight: any;
    mWatts: any;

    routeParams;
    userCollection: AngularFirestoreCollection<users>;
    userDocument: AngularFirestoreDocument<users>;
    userX: any;
    myAny:any;

    foodCollection: AngularFirestoreCollection<Workout>;
    foods: any;
    isIOS = false;
  

    @Input() list = [];
    @ViewChild(IonSlides, {static: false}) slides: IonSlides;

    scene=true;

    sceneOn(){
        this.scene = true;
    }
    sceneOff(){
        this.scene = false;
    }
    position = 6;
    pos1(){
        this.position = 1;
    }
    pos2(){
        this.position =2;
    }
    pos3(){
        this.position=3;
    }
    pos4(){
        this.position=4;
    }
    pos5(){
        this.position=5;
    }
    pos6(){
        this.position=6;
    }
    public lineChartData: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Activity 1'},
        {data: [38, 29, 10, 31, 46, 65, 30], label: 'Activity 2'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Activity 3'}
    ];
    public weightLBS: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'WEIGHT/LBS'}
    ];
    public muscleLBS: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'MUSCLE LBS'}
    ];
    public fatLBS: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'FAT LBS'}
    ];
    public muscleFatLBS: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'MUSCLE/FAT LBS'}
    ];
    public visceralFatLBS: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'VISCERAL FAT LBS'}
    ];
    public metabolism: ChartDataSets[] = [
        {data: [0,0,0,0,0,0,0,0,0,0], label: 'Caloreis'}
    ];
    public metabolismLabels: Label[] = ['','','','','','','','','',''];

    public lineChartLabels: Label[] = ['Jan', 'Feb', 'May', 'Mar', 'Jun', 'Apr', 'Jul'];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{                gridLines: {
                display: true,
                //color: "red"
              },
          ticks: {
            beginAtZero: true,
            stepSize: 1 ,
            fontSize: 9,
            fontColor: "white", // this here     
        }}],
            yAxes: [{      id: 'y-axis-0',
                    position: 'left',          
                gridLines: {
                display: true,
                //color: "red"
              },
          ticks: {
            beginAtZero: true,
            stepSize: 1 ,
            fontSize: 9,
            fontColor: "white", // this here     
        }}]
        },
        legend: {
            labels: {
              fontColor: 'white',
            }
          },
        
        annotation: {
            fontColor: 'white',
            annotations: [
                {fontColor: 'white'},
            ],
        },
    };
    public lineChartColors: Color[] = [
        { // grey
            backgroundColor: '#65c3e98c', // inner values
            borderColor: '#3489cde3', // Stream Line
            pointBackgroundColor: 'rgba(148,159,177,1)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsWeightLBS: Color[] = [
        { // grey
            backgroundColor: '#7affaf', // inner values
            borderColor: '#00FF00', // Stream Line
            pointBackgroundColor: 'rgba(0,255,51,0.8)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsMuscleLBS: Color[] = [
        { // grey
            backgroundColor: '#65c3e98c', // inner values
            borderColor: '#3489cde3', // Stream Line
            pointBackgroundColor: 'rgba(148,159,177,1)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsFatLBS: Color[] = [
        { // grey
            backgroundColor: '#65c3e98c', // inner values
            borderColor: '#3489cde3', // Stream Line
            pointBackgroundColor: 'rgba(148,159,177,1)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsMuscleFatLBS: Color[] = [
        { // grey
            backgroundColor: '#65c3e98c', // inner values
            borderColor: '#3489cde3', // Stream Line
            pointBackgroundColor: 'rgba(148,159,177,1)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsVisceralFatLBS: Color[] = [
        { // grey
            backgroundColor: '#65c3e98c', // inner values
            borderColor: '#3489cde3', // Stream Line
            pointBackgroundColor: 'rgba(148,159,177,1)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartColorsCalories: Color[] = [
        { // grey
            backgroundColor: '#f0ec84', // inner values
            borderColor: '#FFFF00', // Stream Line
            pointBackgroundColor: 'rgba(255,255,51,0.8)', // inner circle
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,255,255,1)'
        },
        { // dark grey
            backgroundColor: '#3682ccb0', // nothing
            borderColor: '#3682ccb0', // nothing?
            pointBackgroundColor: 'rgba(77,83,96,1)', // nothing
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)' //nothing
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [pluginAnnotations];

    onNext() {
        this.slides.isEnd().then(r => {
            if (!r) {
                this.slides.slideNext(1000);
            }
        });
    }

    accounts = "users/";
    count = 9;
    Calories = 0;

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
            if(this.platform.is('ios'))
            {
                this.isIOS = true;
            }
              if(data)
              {
                  console.log("Data TRUE");
                let uid = data.credential.uid;
                let Email = data.credential.email;
                let displayName = data.credential.displayName;
                let photoURL = data.credential.photoURL;
                
  
                email.setEmail(data.credential.email);

                this.routeParams = this.route.params.subscribe(
                    params => {
                      console.log('Hello ' + data.credential.email);
                      let MyDate = new Date().toLocaleString();
                      let split = MyDate.split(",");
                      let displayDate = split[0];
                        /*Update Variables here*/

                        this.myAny = this.afs.doc(this.accounts+data.credential.email).snapshotChanges().subscribe(
                            values => {
                               const data3 = values.payload.data() as users;
                               console.log("myAny" + data3.email);
                               if (data3.Age){
                               this.mAge = data3.Age;}
                               else{
                                this.mAge= "no data";}
                               if (data3.User_Weight){
                                   this.mUser_Weight = data3.User_Weight;}
                               else{
                                    this.mUser_Weight = "no data";}
                               this.cd.detectChanges();
                  
                            });
          
                        this.foodCollection = this.afs.doc(this.accounts+data.credential.email).collection('Workouts', ref => ref.limit(10).orderBy('Position','desc')/* , ref => ref.orderBy('FruitName') */);
          
                        this.foods = this.foodCollection.snapshotChanges().pipe(map(actions => {
                          return actions.map(a => {
                            const data = a.payload.doc.data() as Workout;
                            const id = a.payload.doc.id;
                            console.log(Math.round(Number(data.Calories)) + "   " + data.Time);
          
                            this.metabolism[0].data[this.count] = Math.round(Number(data.Calories));
                            this.metabolismLabels[this.count] = data.Time;
                            this.count = this.count - 1;
                            if(data.Time == displayDate)
                            {
                                this.Calories = Math.round(Number(data.Calories));
                                this.mWatts = Math.round(Number(data.Watts));
                                this.cd.detectChanges();
                            }
                            if (this.count < 0) {this.count = 0;}
                            
                            return { id, data};
                          });
                        }));
          
                    });



  
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
                      this.router.navigateByUrl('/login');
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
                this.router.navigateByUrl('/login');
              }
          });
        }  
        else
        {
          // email has a value
          this.routeParams = this.route.params.subscribe(
            params => {
                if(this.platform.is('ios'))
                {
                    this.isIOS = true;
                }
              console.log('Hello ' + email.__email);
              let MyDate = new Date().toLocaleString();
              let split = MyDate.split(",");
              let displayDate = split[0];
                /*Update Variables here*/
                this.userDocument = this.afs.doc(this.accounts+email.__email);
  
                this.myAny = this.afs.doc(this.accounts+email.__email).snapshotChanges().subscribe(
                    values => {
                       const data3 = values.payload.data() as users;
                       console.log("myAny" + data3.email);
                       if (data3.Age){
                        this.mAge = data3.Age;}
                       else{
                        this.mAge= "no data";}
                       if (data3.User_Weight){
                        this.mUser_Weight = data3.User_Weight;}
                       else{
                        this.mUser_Weight = "no data";}
                       this.cd.detectChanges();
          
                    });
  
                this.foodCollection = this.afs.doc(this.accounts+email.__email).collection('Workouts', ref => ref.limit(10).orderBy('Position','desc')/* , ref => ref.orderBy('FruitName') */);
  
                this.foods = this.foodCollection.snapshotChanges().pipe(map(actions => {
                  return actions.map(a => {
                    const data = a.payload.doc.data() as Workout;
                    const id = a.payload.doc.id;
                    console.log(Math.round(Number(data.Calories)) + "   " + data.Time);
  
                    this.metabolism[0].data[this.count] = Math.round(Number(data.Calories));
                    this.metabolismLabels[this.count] = data.Time;
                    this.count = this.count - 1;
                    if(data.Time == displayDate)
                    {
                        this.Calories = Math.round(Number(data.Calories));
                        if (data.Watts)
                        {
                         this.mWatts = Math.round(Number(data.Watts));
                        }
                        else
                        {
                            this.mWatts = "no data";
                        }
                        this.cd.detectChanges();
                    }
                    else
                    {
                        this.mWatts = 0;
                    }
                    if (this.count < 0) {this.count = 0;}
                    
                    return { id, data};
                  });
                }));
  
            });
        }

        
    }

    constructor
    (
        //private afStorage: AngularFireStorage,
        public afs: AngularFirestore, 
        public afAuth: AngularFireAuth, 
        private storage: Storage,
        private cd: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        public platform: Platform,
    ) 
    {
    }

    public chartClicked(event): void {
        console.log(event);
    }

    public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
