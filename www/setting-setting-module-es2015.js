(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notice/notice.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notice/notice.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of list\">\n        <ion-card class=\"ion-text-center\">\n            <h3 class=\"ion-text-uppercase ion-padding-top\">{{item.title}}</h3>\n            <p>{{item.intro}}</p>\n        </ion-card>\n    </ion-slide>\n</ion-slides>\n<ion-footer>\n    <ion-button expand=\"full\" (click)=\"onClose()\" class=\"ion-no-margin\" style=\"height: 50px\">Ok</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/setting/setting.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/setting/setting.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen [ngStyle]=\"{'background-image':'url('+img+')'}\">\n<div *ngFor=\"let index of userX | async\"></div>\n\n    <div class=\"top background-size\" >\n\n        <ion-item lines=\"none\" class=\"transparent user\">\n            <ion-avatar class=\"tilt-in-top-1\">\n                <img [src]=\"user.img\">\n            </ion-avatar>\n\n            <ion-label class=\"ion-padding-start\">\n                <h4 class=\"tracking-in-expand\" [ngStyle]=\"{'animation-delay':(1) * 0.5+'s'}\">{{user.name}}</h4>\n                <p class=\"tracking-in-expand\" [ngStyle]=\"{'animation-delay':(2) * 0.5+'s'}\">{{user.intro}}</p>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n\n                <ion-button (click)=\"onNotice()\">\n                    <ion-icon name=\"notifications-outline\" color=\"light\" size=\"large\"\n                              class=\"swing\"\n                              [ngStyle]=\"{'animation-duration':(2) * 0.5+'s','animation-iteration-count':'infinite'}\"></ion-icon>\n                    <ion-badge color=\"danger\" class=\"num\">3</ion-badge>\n\n                </ion-button>\n\n            </ion-buttons>\n \n        </ion-item>\n        <div class=\"test1\" (click)=\"SignOut()\">\n            Sign Out\n        </div>\n    </div>\n\n    <custom-walk></custom-walk>\n    <!--<ion-card class=\"fadeInUp\" \n    [ngStyle]=\"{'animation-duration':(3) * 0.5+'s'}\" color=\"white\" style=\"height: 300px; width: 95%;\">\n\n    </ion-card>-->\n    <!--<custom-line-chart></custom-line-chart>-->\n    <custom-steps></custom-steps> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/notice/notice.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/notice/notice.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-slides {\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n}\n:host ::ng-deep.swiper-pagination-bullet {\n  background: var(--ion-color-primary) !important;\n  width: 10px !important;\n  height: 10px !important;\n}\n:host ion-card {\n  box-shadow: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3Qtei9zcmMvYXBwL3BhZ2VzL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJRTtFQUNFLDRCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpY2Uvbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tc2xpZGVzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgOjpuZy1kZWVwLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCI6aG9zdCBpb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/notice/notice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/notice/notice.component.ts ***!
  \**************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let NoticeComponent = class NoticeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.list = [
            { title: 'Alert 1', intro: 'Example of how alerts will display.' },
            { title: 'Alert 2', intro: 'Example of how alerts will display.' },
            { title: 'Alert 3', intro: 'Example of how alerts will display.' }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.list = [
            { title: 'Alert 1', intro: 'Example of how alerts will display.' },
            { title: 'Alert 2', intro: 'Example of how alerts will display.' },
            { title: 'Alert 3', intro: 'Example of how alerts will display.' }
        ];
    }
    onClose() {
        this.modalCtrl.dismiss();
    }
};
NoticeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
NoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice',
        template: __webpack_require__(/*! raw-loader!./notice.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notice/notice.component.html"),
        styles: [__webpack_require__(/*! ./notice.component.scss */ "./src/app/pages/notice/notice.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], NoticeComponent);



/***/ }),

/***/ "./src/app/pages/setting/setting-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/pages/setting/setting-routing.module.ts");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notice/notice.component */ "./src/app/pages/notice/notice.component.ts");









let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"], _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__["NoticeComponent"]],
        entryComponents: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_8__["NoticeComponent"]]
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-setting .top {\n  height: 200px;\n}\napp-setting .user {\n  padding-top: 45px;\n  color: white;\n}\napp-setting .user p {\n  color: white;\n}\napp-setting h5 {\n  color: var(--ion-color-step-600, #666);\n}\napp-setting .num {\n  position: absolute;\n  padding: 2px;\n  right: 5px;\n  top: -2px;\n}\n.test1 {\n  margin-top: -15px;\n  margin-left: 80%;\n  color: #ec6060;\n}\nion-content {\n  --background: #fff url('backgroundD.png') no-repeat center center / cover;\n}\nion-modal.notice-modal {\n  background-color: rgba(0, 0, 0, 0.2) !important;\n  -webkit-transition: opacity 0.55s linear;\n  transition: opacity 0.55s linear;\n  padding: 30vh 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3Qtei9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0FDRE47QURLRTtFQUNFLHNDQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7QURPQTtFQUNFLHlFQUFBO0FDSkY7QURPQTtFQUNFLCtDQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXNldHRpbmcge1xuICAudG9wIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLnVzZXIge1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIHAge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGg1IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2KTtcbiAgfVxuXG4gIC5udW17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogLTJweDtcbiAgfVxufVxuLnRlc3Qxe1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgY29sb3I6IHJnYigyMzYsIDk2LCA5Nik7XG5cbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRELnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1tb2RhbC5ub3RpY2UtbW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41NXMgbGluZWFyO1xuICBwYWRkaW5nOiAzMHZoIDN2aDtcbn1cblxuIiwiYXBwLXNldHRpbmcgLnRvcCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5hcHAtc2V0dGluZyAudXNlciB7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5hcHAtc2V0dGluZyAudXNlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuYXBwLXNldHRpbmcgaDUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2KTtcbn1cbmFwcC1zZXR0aW5nIC5udW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAtMnB4O1xufVxuXG4udGVzdDEge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgY29sb3I6ICNlYzYwNjA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZEQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1tb2RhbC5ub3RpY2UtbW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjU1cyBsaW5lYXI7XG4gIHBhZGRpbmc6IDMwdmggM3ZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notice/notice.component */ "./src/app/pages/notice/notice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/pages/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




//import { _countGroupLabelsBeforeOption } from '@angular/material/core';

//



//firebase





let SettingPage = class SettingPage {
    constructor(modalCtrl, 
    //private afStorage: AngularFireStorage,
    afs, afAuth, pickerCtrl, alertController, storage, cd, route, router) {
        this.modalCtrl = modalCtrl;
        this.afs = afs;
        this.afAuth = afAuth;
        this.pickerCtrl = pickerCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.uReturnedFromUnity = (param) => {
            // param:String is the (optional) message returned from Unity-side
            alert(param);
        };
        this.uMessageReceivedFromUnity = (message) => {
            // message:String is the message received from Unity-side
            // If you call a UI-blocking function here like 'alert', subsequent messages from Unity
            // will be queued by the OS and will only be received after returning to Ionic and
            // unblocking the UI
            console.log("=========" + message + "=========");
        };
        this.img = 'assets/images/backgroundD.png';
        this.user = {
            name: 'hello User',
            intro: 'Fitness meet me',
            img: 'assets/images/pfp.png'
        };
    }
    ////
    openUnity() {
        // It is possible to send a string message to Unity-side (optional)
        unityARCaller.launchAR("my message for Unity-side", this.uReturnedFromUnity, this.uMessageReceivedFromUnity);
    }
    sendMessageToUnity() {
        // Send a message to Unity while Unity is still running
        unityARCaller.sendMessage("Function name", "Optional parameter");
    }
    ngOnInit() {
        this.routeParams = this.route.params.subscribe(params => {
            console.log('Hello ' + _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]);
            /*Update Variables here*/
            if (!_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]) {
                this.storage.get("email").then(data => {
                    //if data exists
                    if (data) {
                        let uid = data.credential.uid;
                        let Email = data.credential.email;
                        let displayName = data.credential.displayName;
                        let photoURL = data.credential.photoURL;
                        /////  might edit out later
                        if (data.type == "google") {
                            this.afAuth.signInWithCredential(firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].GoogleAuthProvider.credential(data.token))
                                .then(success => {
                                console.log("Firebase success: " + JSON.stringify(success));
                                //this.router.navigateByUrl('/tabs/statistics');
                            })
                                .catch(error => {
                                console.log("Firebase failure: " + JSON.stringify(error));
                                //this.router.navigateByUrl('/login');
                            });
                        }
                        else if (data.type == "normal") {
                            console.log("Normal Login");
                            this.normalLogin(data.email, data.password);
                            //this.router.navigateByUrl('/tabs/statistics');
                        }
                        /////////
                        const userRef = this.afs.doc(`users/${Email}`);
                        //console.log("We are here: "+email);
                        const data2 = {
                            uid,
                            Email,
                            displayName,
                            photoURL
                        };
                        userRef.set(data2, { merge: true });
                        // new1 ////
                        this.myAny = this.afs.collection('users').doc(Email).snapshotChanges().subscribe(values => {
                            const data3 = values.payload.data();
                            console.log("myAny" + data3.email);
                            if (data3.photoURL) {
                                this.user.img = data3.photoURL;
                            }
                            else {
                                this.user.img = 'assets/images/pfp.png';
                                console.log("Default IMG");
                            }
                            if (!data3.displayName) {
                                let split = Email.split("@");
                                let displayname = split[0];
                                this.afs.collection('users').doc(Email).set({ displayName: displayname }, { merge: true });
                            }
                            this.user.name = data3.displayName;
                            this.cd.detectChanges();
                        });
                        //////////
                    }
                    else {
                        console.log("IT'S EMPTY");
                        //this.router.navigateByUrl('/login');
                    }
                });
            }
            else {
                this.myAny = this.afs.collection('users').doc(_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__id"]).snapshotChanges().subscribe(values => {
                    const data = values.payload.data();
                    console.log("myAny" + data.email);
                    if (data.photoURL) {
                        this.user.img = data.photoURL;
                    }
                    if (!data.displayName) {
                        let split = _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"].split("@");
                        let displayname = split[0];
                        this.afs.collection('users').doc(_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__id"]).set({ displayName: displayname }, { merge: true });
                    }
                    this.user.name = data.displayName;
                    this.cd.detectChanges();
                });
            }
        });
    }
    onNotice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], cssClass: 'notice-modal',
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                if (data) {
                }
            }
            catch (e) {
            }
        });
    }
    normalLogin(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(email, password);
        });
    }
    SignOut() {
        this.router.navigateByUrl('/home');
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/setting/setting.page.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es2015.js.map