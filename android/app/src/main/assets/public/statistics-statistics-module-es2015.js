(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statistics/statistics.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statistics/statistics.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"white\" style=\"height: 60px;background-color: #161616; margin-top: -10px;\">\n  <ion-title class=\"ion-text-center\" color=\"white\" style=\"margin-top: 20px;\">\n    Home\n  </ion-title>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"top background-size\">\n    </div>\n    <ion-item class=\"fadeInUp\" color=\"none\" lines=\"none\" [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\" style=\"margin-top: -200px;;\">\n      <ion-label color=\"white\"slot=\"start\" style=\"font-size: 11px;\">\n       Date <br> 4/09/21 \n      </ion-label>\n      <ion-label color=\"white\"slot=\"end\" style=\"font-size: 11px; float: right;\">\n        Last Sync <br> 15:00\n      </ion-label>\n    </ion-item>\n\n\n    <!--\n\n      NOTE this class information goes to the ion-card below later\n      class=\"ion-text-center fadeInUp circle\"\n      margin top is -10 not 140\n      |\n      v\n    -->\n\n    <ion-card  [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\" style=\"margin-top: -10px;\">\n       <!-- <h3>Metabolism</h3>-->\n\n       \n        <ngx-gauge style=\"margin-top: 0px;display: block;margin-left: auto;margin-right: auto;\"type=\"full\" cap=\"round\" thick=\"12\" size=\"150\" foregroundColor=\"rgba(204, 68, 227, 0.78)\"\n                   backgroundColor=\"rgba(204, 68, 227, 0.18)\"\n                   [value]=\"gaugeValue\"\n                   label=\"BMR\"\n                   [max]=\"1500\"\n                   [append]=\"gaugeAppendText\">\n        </ngx-gauge>\n\n        <!--\n        <ngx-gauge [type]=\"sleep.gaugeType\" cap=\"round\" thick=\"12\" size=\"200\" foregroundColor=\"rgba(95, 227, 64, 0.69)\"\n                   backgroundColor=\"rgba(176, 242, 206, 0.54)\"\n                   [value]=\"sleep.gaugeValue\"\n                   [label]=\"sleep.gaugeLabel\"\n                   max=\"12\"\n                   [append]=\"sleep.gaugeAppendText\">\n        </ngx-gauge>\n        -->\n    </ion-card>\n    <ion-item color=\"none\" lines=\"none\">\n        <ion-label color=\"white\" class=\"ion-text-center\" style=\"margin-left: -20px;margin-top: -13px;\">\n          Metabolism\n      </ion-label>\n    </ion-item>\n\n    <custom-line-chart></custom-line-chart>\n\n    <!--\n    <custom-bar-chart></custom-bar-chart>\n    <custom-pie-chart></custom-pie-chart>\n    -->\n    <!--\n    <ion-card class=\"ion-text-left fadeInUp\" style=\"width: 95%px; height: 400px;\" [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\">\n      <ion-content>\n\n      \n      <div>\n        <ion-title class=\"ion-text-center\">\n          Recent Workouts\n        </ion-title>\n        <ion-list>\n          <div *ngFor=\"let index of myAny | async\">\n            <ion-item>\n              Workout\n            </ion-item>\n            <ion-item lines=\"none\">\n              Type: {{index.data.Workout}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Total Weight: {{index.data.Total_Weight}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Reps: {{index.data.Reps}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Starting Weight: {{index.data.Starting_Weight}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Time: {{index.data.Time}}\n            </ion-item>\n            <ion-item lines=\"none\">\n            </ion-item>\n\n\n            \n          </div>\n        </ion-list>\n      </div>\n    </ion-content>\n\n    </ion-card>\n  -->\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unity/unity.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unity/unity.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"unityContainer\" class=\"unity-container\"></div>"

/***/ }),

/***/ "./src/app/pages/statistics/statistics-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/statistics/statistics-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageRoutingModule", function() { return StatisticsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics.page */ "./src/app/pages/statistics/statistics.page.ts");




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_3__["StatisticsPage"]
    }
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/statistics/statistics.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/statistics.module.ts ***!
  \*******************************************************/
/*! exports provided: StatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/pages/statistics/statistics-routing.module.ts");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics.page */ "./src/app/pages/statistics/statistics.page.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm2015/ngx-gauge.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _unity_unity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../unity/unity.component */ "./src/app/unity/unity.component.ts");











let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsPageRoutingModule"],
            ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
        ],
        declarations: [_unity_unity_component__WEBPACK_IMPORTED_MODULE_10__["UnityComponent"], _statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]]
    })
], StatisticsPageModule);



/***/ }),

/***/ "./src/app/pages/statistics/statistics.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .top {\n  height: 200px;\n}\n:host .today {\n  margin-top: -140px;\n  background: white;\n}\n:host h5 {\n  color: var(--ion-color-step-600, #666);\n}\n.qr {\n  width: 200px;\n  max-width: 200px;\n  height: 200px;\n  max-height: 200px;\n  margin: auto;\n  padding: 10px;\n}\nion-card {\n  box-shadow: unset !important;\n}\nion-content {\n  --background: #fff url('backgroundD.png') no-repeat center center / cover;\n}\n.circle {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  height: 150px;\n  background: #303030;\n  border-radius: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3Qtei9zcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0Usc0NBQUE7QUNGSjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRjtBRE9BO0VBQ0UsNEJBQUE7QUNKRjtBRE1BO0VBQ0UseUVBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBR0EsbUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC50b3Age1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAudG9kYXkge1xuICAgIG1hcmdpbi10b3A6IC0xNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIGg1IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2KTtcbiAgfVxufVxuXG4ucXJ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcblxuICBcbn1cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRELnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5jaXJjbGUgeyBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDQ4LCA0OCwgNDgpOyBcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA3NXB4OyBcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3NXB4OyBcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcbn0iLCI6aG9zdCAudG9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbjpob3N0IC50b2RheSB7XG4gIG1hcmdpbi10b3A6IC0xNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG46aG9zdCBoNSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2NjYpO1xufVxuXG4ucXIge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kRC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLmNpcmNsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNzVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/statistics/statistics.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.ts ***!
  \*****************************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPage", function() { return StatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/pages/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








//import { _countGroupLabelsBeforeOption } from '@angular/material/core';

//






let StatisticsPage = class StatisticsPage {
    constructor(platformLocation, afs, afAuth, 
    //qr: NgxQRCodeModule,
    modalCtrl, 
    //private afStorage: AngularFireStorage, 
    pickerCtrl, alertController, storage, cd, route, router) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        this.pickerCtrl = pickerCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
        this.techiediaries = 'https://www.npmjs.com/~techiediaries';
        this.letsboot = 'https://www.letsboot.com/';
        this.myAngularxQrCode = "hello";
        this.user = {
            name: 'hello User',
            intro: 'Fitness meet me',
            img: 'assets/images/pfp.png'
        };
        this.img = 'assets/images/top.png';
        this.gaugeType = 'arch';
        this.gaugeValue = 1390;
        this.gaugeLabel = 'current';
        this.gaugeAppendText = '';
        this.sleep = {
            gaugeType: 'full',
            gaugeValue: 8,
            gaugeLabel: 'Total Sleep',
            gaugeAppendText: 'h 21 min'
        };
        this.accounts = "users/";
        const location = platformLocation.location;
        this.baseUrl = location.origin + location.pathname.replace('index.html', '');
        console.log('baseUrl', this.baseUrl);
        this.myAngularxQrCode = 'Your QR code data string';
    }
    load(name) {
        this.project = name;
        this.unityView.loadProject(`../../../assets/${name}/${name}.json`);
    }
    send(objectName, methodName, messageValue) {
        this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
    }
    //email = "perDQBAB2cP48ChbcUixU7ykbbP2";
    normalLogin(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(email, password);
        });
    }
    SignOut() {
        this.router.navigateByUrl('/home');
    }
    ngOnInit() {
        if (!_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["__email"]) {
            this.storage.get("email").then(data => {
                //if data exists
                if (data) {
                    let uid = data.credential.uid;
                    let Email = data.credential.email;
                    let displayName = data.credential.displayName;
                    let photoURL = data.credential.photoURL;
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["setEmail"](data.credential.email);
                    /////  might edit out later
                    if (data.type == "google") {
                        this.afAuth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].GoogleAuthProvider.credential(data.token))
                            .then(success => {
                            console.log("Firebase success: " + JSON.stringify(success));
                            //this.router.navigateByUrl('/tabs/statistics');
                        })
                            .catch(error => {
                            console.log("Firebase failure: " + JSON.stringify(error));
                            // this.router.navigateByUrl('/login');
                        });
                    }
                    else if (data.type == "normal") {
                        console.log("Normal Login");
                        this.normalLogin(data.email, data.password);
                        console.log("normal login");
                        //this.router.navigateByUrl('/tabs/statistics');
                    }
                }
                else {
                    // no email and no email in storage
                    console.log("IT'S EMPTY");
                    //this.router.navigateByUrl('/login');
                }
            });
        }
        else {
            // email has a value
        }
        this.routeParams = this.route.params.subscribe(params => {
            console.log("Your Email: " + _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["__email"]);
            this.WorkoutCollection = this.afs.doc(this.accounts + _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["__email"]).collection('Workouts', ref => ref.orderBy('Time'));
            this.myAny = this.WorkoutCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    console.log(data);
                    return { id, data };
                });
            }));
        });
    }
};
StatisticsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unityView', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatisticsPage.prototype, "unityView", void 0);
StatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/statistics/statistics.page.html"),
        styles: [__webpack_require__(/*! ./statistics.page.scss */ "./src/app/pages/statistics/statistics.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], StatisticsPage);



/***/ }),

/***/ "./src/app/unity/unity.component.css":
/*!*******************************************!*\
  !*** ./src/app/unity/unity.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unity-container,\n.unity-container canvas {\n    background-color: #000;\n    height: 200px;\n    margin: auto !important;\n    width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdHkvdW5pdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdW5pdHkvdW5pdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0eS1jb250YWluZXIsXG4udW5pdHktY29udGFpbmVyIGNhbnZhcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/unity/unity.component.ts":
/*!******************************************!*\
  !*** ./src/app/unity/unity.component.ts ***!
  \******************************************/
/*! exports provided: UnityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityComponent", function() { return UnityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnityComponent = class UnityComponent {
    constructor() { }
    ngOnInit() {
        //(window as any).global = window;
        window['receiveMessageFromUnity'] = this.receiveMessageFromUnity;
        if (this.appLocation) {
            this.loadProject(this.appLocation);
        }
    }
    loadProject(path) {
        this.unityInstance = window['UnityLoader'].instantiate('unityContainer', path);
    }
    sendMessageToUnity(objectName, methodName, messageValue) {
        console.log('sendMessageToUnity', objectName, methodName, messageValue);
        this.unityInstance.SendMessage(objectName, methodName, messageValue);
    }
    receiveMessageFromUnity(messageValue) {
        console.log('receiveMessageFromUnity', messageValue);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UnityComponent.prototype, "appLocation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UnityComponent.prototype, "appWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UnityComponent.prototype, "appHeight", void 0);
UnityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unity',
        template: __webpack_require__(/*! raw-loader!./unity.component.html */ "./node_modules/raw-loader/index.js!./src/app/unity/unity.component.html"),
        styles: [__webpack_require__(/*! ./unity.component.css */ "./src/app/unity/unity.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UnityComponent);



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module-es2015.js.map