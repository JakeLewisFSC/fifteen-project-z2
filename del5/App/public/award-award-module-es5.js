(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["award-award-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/award/award.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/award/award.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n    <div class=\"top background-size\" [ngStyle]=\"{'background-image':'url('+img+')'}\">\n    </div>\n    <ion-card class=\"ion-text-center top-card fadeInUp\"\n              [ngStyle]=\"{'animation-duration':(1) * 0.5+'s'}\">\n        <ngx-gauge [type]=\"time.gaugeType\" cap=\"round\" size=\"110\" foregroundColor=\"rgba(118, 212, 242, 0.79)\"\n                   backgroundColor=\"rgba(176, 242, 206, 0.54)\"\n                   [value]=\"time.gaugeValue\"\n                   [label]=\"time.gaugeLabel\"\n                   max=\"5\"\n                   [append]=\"time.gaugeAppendText\">\n        </ngx-gauge>\n        <ngx-gauge [type]=\"distance.gaugeType\" cap=\"round\" size=\"110\" foregroundColor=\"rgba(236, 240, 71, 0.88)\"\n                   backgroundColor=\"rgba(236, 240, 71, 0.18)\"\n                   [value]=\"distance.gaugeValue\"\n                   [label]=\"distance.gaugeLabel\"\n                   max=\"5\"\n                   [append]=\"distance.gaugeAppendText\">\n        </ngx-gauge>\n        <ngx-gauge [type]=\"calories.gaugeType\" cap=\"round\" size=\"110\" foregroundColor=\"rgba(233, 66, 234, 0.81)\"\n                   backgroundColor=\"rgba(233, 66, 234, 0.11)\"\n                   [value]=\"calories.gaugeValue\"\n                   [label]=\"calories.gaugeLabel\"\n                   max=\"5\"\n                   [append]=\"calories.gaugeAppendText\">\n        </ngx-gauge>\n    </ion-card>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-item lines=\"none\" *ngFor=\"let item of list;let i=index\"\n                          [classList]=\"'fadeInUp'\"\n                          [ngStyle]=\"{'animation-duration':(i+1) * 0.5+'s'}\">\n                    <ion-thumbnail>\n                        <img [src]=\"item.img\">\n                    </ion-thumbnail>\n                    <ion-label class=\"ion-padding-start\">\n                        <h4>{{item.title}}</h4>\n                        <ion-icon *ngFor=\"let cup of item.cups;let i=index\" [src]=\"cup\" size=\"large\"\n                                  [classList]=\"'flip-in-ver-right'\"\n                                  [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\"></ion-icon>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!--\n    <button (click)=\"upload()\">Debug</button>\n    -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/award/award-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/award/award-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AwardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardPageRoutingModule", function() { return AwardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _award_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award.page */ "./src/app/pages/award/award.page.ts");




var routes = [
    {
        path: '',
        component: _award_page__WEBPACK_IMPORTED_MODULE_3__["AwardPage"]
    }
];
var AwardPageRoutingModule = /** @class */ (function () {
    function AwardPageRoutingModule() {
    }
    AwardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AwardPageRoutingModule);
    return AwardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/award/award.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/award/award.module.ts ***!
  \*********************************************/
/*! exports provided: AwardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardPageModule", function() { return AwardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _award_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award-routing.module */ "./src/app/pages/award/award-routing.module.ts");
/* harmony import */ var _award_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award.page */ "./src/app/pages/award/award.page.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/fesm5/ngx-gauge.js");








var AwardPageModule = /** @class */ (function () {
    function AwardPageModule() {
    }
    AwardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _award_routing_module__WEBPACK_IMPORTED_MODULE_5__["AwardPageRoutingModule"],
                ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"]
            ],
            declarations: [_award_page__WEBPACK_IMPORTED_MODULE_6__["AwardPage"]]
        })
    ], AwardPageModule);
    return AwardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/award/award.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/award/award.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .top {\n  height: 200px;\n}\n:host .top-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -140px;\n  background: white;\n  padding: 20px;\n}\n:host ion-item {\n  --background: linear-gradient(to right, #ffffff 0%, #e0ebef 100%);\n  margin: 0px 10px 10px 10px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL3BhZ2VzL2F3YXJkL2F3YXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXdhcmQvYXdhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQ0FKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGlFQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXdhcmQvYXdhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudG9wIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLnRvcC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTE0MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNlMGViZWYgMTAwJSk7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIH1cbn1cbiIsIjpob3N0IC50b3Age1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuOmhvc3QgLnRvcC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDAlLCAjZTBlYmVmIDEwMCUpO1xuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/award/award.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/award/award.page.ts ***!
  \*******************************************/
/*! exports provided: AwardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardPage", function() { return AwardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm5/angular-fire-auth.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");



//import { _countGroupLabelsBeforeOption } from '@angular/material/core';

//



//firebase



var AwardPage = /** @class */ (function () {
    function AwardPage(modalCtrl, 
    //private afStorage: AngularFireStorage,
    afs, afAuth, pickerCtrl, alertController, 
    //private storage: Storage,
    cd, route, router) {
        this.modalCtrl = modalCtrl;
        this.afs = afs;
        this.afAuth = afAuth;
        this.pickerCtrl = pickerCtrl;
        this.alertController = alertController;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.img = 'assets/images/top.png';
        this.time = {
            gaugeType: 'full',
            gaugeValue: 5,
            gaugeLabel: 'Time',
            gaugeAppendText: ':40:59'
        };
        this.distance = {
            gaugeType: 'full',
            gaugeValue: 26.30,
            gaugeLabel: 'Distance(mi)',
            gaugeAppendText: ''
        };
        this.calories = {
            gaugeType: 'full',
            gaugeValue: 3255,
            gaugeLabel: 'Calories',
            gaugeAppendText: ''
        };
        this.list = [];
        this.list2 = [
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
    }
    AwardPage.prototype.upload = function () {
        this.afs.collection('users').doc(_login_login_page__WEBPACK_IMPORTED_MODULE_6__["__id"]).set({ Trophies: this.list2 }, { merge: true });
    };
    AwardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams = this.route.params.subscribe(function (params) {
            /*Update Variables here*/
            _this.afs.collection('users').doc(_login_login_page__WEBPACK_IMPORTED_MODULE_6__["__id"]);
            _this.myAny = _this.afs.collection('users').doc(_login_login_page__WEBPACK_IMPORTED_MODULE_6__["__id"]).snapshotChanges().subscribe(function (values) {
                var data = values.payload.data();
                if (data.Trophies) {
                    _this.list = data.Trophies;
                }
                else {
                    var CurrntMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
                    var date = new Date;
                    var Month = date.getMonth();
                    if (_login_login_page__WEBPACK_IMPORTED_MODULE_6__["__email"] != "") {
                        _this.list = [{
                                title: CurrntMonth[Month].substring(0, 3),
                                cups: [],
                                img: 'assets/images/sport/1.jpg'
                            },
                        ];
                        _this.afs.collection('users').doc(_login_login_page__WEBPACK_IMPORTED_MODULE_6__["__id"]).set({ Trophies: _this.list }, { merge: true });
                        _this.cd.detectChanges();
                    }
                }
                _this.cd.detectChanges();
            });
        });
    };
    AwardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AwardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-award',
            template: __webpack_require__(/*! raw-loader!./award.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/award/award.page.html"),
            styles: [__webpack_require__(/*! ./award.page.scss */ "./src/app/pages/award/award.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AwardPage);
    return AwardPage;
}());



/***/ })

}]);
//# sourceMappingURL=award-award-module-es5.js.map