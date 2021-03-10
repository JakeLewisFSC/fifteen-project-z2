(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statistics/statistics.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statistics/statistics.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n    <div class=\"top background-size\" [ngStyle]=\"{'background-image':'url('+img+')'}\">\n    </div>\n\n    <ion-card class=\"ion-text-center today fadeInUp\"  [ngStyle]=\"{'animation-duration': 0.5+'s'}\">\n        <h3 style=\"color: #3a74cb; height: 220px;\">BlueTooth / QR code Sign In</h3>\n\n       \n        <!--<qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode>-->\n        <!--<img class=\"qr\" src=\"../../../assets/images/qr_code.png\">-->\n    </ion-card>\n\n    <ion-card class=\"ion-text-center fadeInUp\"  [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\">\n        <h3>Today</h3>\n        <ngx-gauge [type]=\"gaugeType\" cap=\"round\" thick=\"12\" size=\"200\" foregroundColor=\"rgba(204, 68, 227, 0.78)\"\n                   backgroundColor=\"rgba(204, 68, 227, 0.18)\"\n                   [value]=\"gaugeValue\"\n                   [label]=\"gaugeLabel\"\n                   [max]=\"1500\"\n                   [append]=\"gaugeAppendText\">\n        </ngx-gauge>\n        <!--\n        <ngx-gauge [type]=\"sleep.gaugeType\" cap=\"round\" thick=\"12\" size=\"200\" foregroundColor=\"rgba(95, 227, 64, 0.69)\"\n                   backgroundColor=\"rgba(176, 242, 206, 0.54)\"\n                   [value]=\"sleep.gaugeValue\"\n                   [label]=\"sleep.gaugeLabel\"\n                   max=\"12\"\n                   [append]=\"sleep.gaugeAppendText\">\n        </ngx-gauge>\n        -->\n    </ion-card>\n\n    <ion-card class=\"ion-text-center fadeInUp\" style=\"width: 95%px; height: 400px;\" [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\">\n       \n\n        <div>\n            <h1>Avatar View</h1>\n            <ul>\n              <li><a  (click)=\"load('demo')\">Communication (3MB)</a></li>\n              <li><a  (click)=\"load('shooter')\">Game (9MB)</a></li>\n              <li><a  (click)=\"load('chest')\">Object Viewer (18MB)</a></li>\n              <li><a  (click)=\"load('loader')\">Object Loader (4MB)</a></li>\n            </ul>\n            <div class=\"buttons\" *ngIf=\"project=='demo'\">\n              <button (click)=\"send('MainObject', 'ReceiveMessageFromWeb', 'Hello from Web')\">Send Message</button>\n            </div>\n            <div class=\"buttons\" *ngIf=\"project=='shooter'\">\n              <button (click)=\"send('Game Controller', 'AddScore', 1)\">Add Score</button>\n              <button (click)=\"send('Game Controller', 'GameOver')\">End Game</button>\n            </div>\n            <div class=\"buttons\" *ngIf=\"project=='loader'\">\n              <button (click)=\"send('ObjController', 'LoadWeb', baseUrl + 'assets/loader/StreamingAssets/Car.obj')\">Load Car</button>\n              <button (click)=\"send('ObjController', 'LoadWeb', baseUrl + 'assets/loader/StreamingAssets/Chair.obj')\">Load Chair</button>\n              <button (click)=\"send('ObjController', 'LoadWeb', baseUrl + 'assets/loader/StreamingAssets/Cottage.obj')\">Load Cottage</button>\n            </div>\n          </div>\n          <app-unity #unityView></app-unity>\n          \n\n\n    </ion-card>\n    <custom-bar-chart></custom-bar-chart>\n    <custom-pie-chart></custom-pie-chart>\n\n    <ion-card class=\"ion-text-left fadeInUp\" style=\"width: 95%px; height: 400px;\" [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\">\n      <ion-content>\n\n      \n      <div>\n        <ion-title class=\"ion-text-center\">\n          Recent Workouts\n        </ion-title>\n        <ion-list>\n          <div *ngFor=\"let index of myAny | async\">\n            <ion-item>\n              Workout\n            </ion-item>\n            <ion-item lines=\"none\">\n              Type: {{index.data.Workout}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Total Weight: {{index.data.Total_Weight}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Reps: {{index.data.Reps}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Starting Weight: {{index.data.Starting_Weight}}\n            </ion-item>\n            <ion-item lines=\"none\">\n              Time: {{index.data.Time}}\n            </ion-item>\n            <ion-item lines=\"none\">\n            </ion-item>\n\n\n            \n          </div>\n        </ion-list>\n      </div>\n    </ion-content>\n\n    </ion-card>\n</ion-content>\n"

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

module.exports = ":host .top {\n  height: 200px;\n}\n:host .today {\n  margin-top: -140px;\n  background: white;\n}\n:host h5 {\n  color: var(--ion-color-step-600, #666);\n}\n.qr {\n  width: 200px;\n  max-width: 200px;\n  height: 200px;\n  max-height: 200px;\n  margin: auto;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0Usc0NBQUE7QUNGSjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC50b3Age1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAudG9kYXkge1xuICAgIG1hcmdpbi10b3A6IC0xNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIGg1IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2KTtcbiAgfVxufVxuXG4ucXJ7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweDtcblxuICBcbn0iLCI6aG9zdCAudG9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbjpob3N0IC50b2RheSB7XG4gIG1hcmdpbi10b3A6IC0xNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG46aG9zdCBoNSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2NjYpO1xufVxuXG4ucXIge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/pages/services/auth.service.ts");







let StatisticsPage = class StatisticsPage {
    constructor(platformLocation, afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
        this.techiediaries = 'https://www.npmjs.com/~techiediaries';
        this.letsboot = 'https://www.letsboot.com/';
        this.myAngularxQrCode = "hello";
        this.img = 'assets/images/top.png';
        this.gaugeType = 'arch';
        this.gaugeValue = 1390;
        this.gaugeLabel = 'Calories';
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
    ngOnInit() {
        console.log("Your Email: " + _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["__email"]);
        this.WorkoutCollection = this.afs.doc(this.accounts + _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["__email"]).collection('Workouts', ref => ref.orderBy('Time'));
        this.myAny = this.WorkoutCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                console.log(data);
                return { id, data };
            });
        }));
    }
};
StatisticsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
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
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
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