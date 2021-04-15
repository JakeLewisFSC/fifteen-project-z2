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

module.exports = "<ion-header color=\"white\" style=\"height: 60px;background-color: #161616; margin-top: -10px;\">\n    <ion-title class=\"ion-text-center\" color=\"white\" style=\"margin-top: 20px;\">\n      Settings\n    </ion-title>\n  </ion-header>\n  \n<ion-content fullscreen [ngStyle]=\"{'background-image':'url('+img+')'}\">\n<div *ngFor=\"let index of userX | async\"></div>\n<ion-item lines=\"none\" style=\"background-color: transparent;\" color=\"none\">\n\n<ion-button *ngIf=\"!Edit && !isIOS\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 36px;width: 45px;\"slot=\"end\" color=\"none\" (click)=\"EditOn()\">\n    <ion-icon style=\"margin-left: -30px;font-size: 36px;\"color=\"white\"slot=\"end\"name=\"more\"class=\"container_2\"></ion-icon>\n</ion-button>\n\n<ion-button *ngIf=\"!Edit && isIOS\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 36px;width: 45px;\"slot=\"end\" color=\"none\" (click)=\"EditOn()\">\n    <ion-icon style=\"margin-left: 0px;font-size: 36px;\"color=\"white\"slot=\"end\"name=\"more\"></ion-icon>\n</ion-button>\n\n<ion-button *ngIf=\"Edit && !isIOS\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 36px;width: 45px;\"slot=\"end\" color=\"none\" (click)=\"EditSave()\">\n    <ion-icon style=\"margin-left: -30px;font-size: 36px;\"color=\"primary\"slot=\"end\"name=\"save\"></ion-icon>\n</ion-button>\n\n<ion-button *ngIf=\"Edit && isIOS\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 36px;width: 45px;\"slot=\"end\" color=\"none\" (click)=\"EditSave()\">\n    <ion-icon style=\"margin-left: 0px;font-size: 36px;\"color=\"primary\"slot=\"end\"name=\"save\"></ion-icon>\n</ion-button>\n\n<ion-button *ngIf=\"Edit\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 31px;width: 80px;text-align: left;\"slot=\"start\" color=\"none\" (click)=\"EditCancel()\">\n    <ion-label  color=\"red\" style=\"text-align: left;\">\n        Cancel\n    </ion-label>\n</ion-button>\n\n<ion-button *ngIf=\"!Edit\"lines=\"none\" style=\"background-color: transparent;--box-shadow: none !important;height: 31px;width: 80px;text-align: left;\"slot=\"start\" color=\"none\" (click)=\"SignOut()\">\n    <ion-label  color=\"red\" style=\"text-align: left;\">\n        Sign out\n    </ion-label>\n</ion-button>\n    \n</ion-item>\n\n<!--\n//////////////////\n\nold class for <ion-avatar>\nclass=\"tilt-in-top-1\"\n\n//////////////////    \n-->\n\n    <div class=\"top background-size\" style=\"margin-top: -45px;\">\n\n        <ion-item lines=\"none\" class=\"transparent user\">\n            <ion-avatar style=\"margin-top: 0px;display: block;margin-left: auto;margin-right: auto;\" >\n                <img [src]=\"user.img\">\n            </ion-avatar>\n<!--\n            <ion-label class=\"ion-padding-start\">\n                <h4 class=\"tracking-in-expand\" [ngStyle]=\"{'animation-delay':(1) * 0.5+'s'}\">{{user.name}}</h4>\n                <p class=\"tracking-in-expand\" [ngStyle]=\"{'animation-delay':(2) * 0.5+'s'}\">{{user.intro}}</p>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n\n                <ion-button (click)=\"onNotice()\">\n                    <ion-icon name=\"notifications-outline\" color=\"light\" size=\"large\"\n                              class=\"swing\"\n                              [ngStyle]=\"{'animation-duration':(2) * 0.5+'s','animation-iteration-count':'infinite'}\"></ion-icon>\n                    <ion-badge color=\"danger\" class=\"num\">3</ion-badge>\n\n                </ion-button>\n\n            </ion-buttons>-->\n \n        </ion-item>\n        <ion-item color=\"none\" lines=\"none\">\n            <ion-label color=\"white\" class=\"ion-text-center\" style=\"margin-top: -3px;font-size: 25px;\">\n              {{user.name}}\n          </ion-label>\n        </ion-item>\n        <ion-item color=\"none\" lines=\"none\">\n            <ion-label color=\"white\" class=\"ion-text-center\" style=\"margin-top: -3px;font-size: 15px;\">\n              Pin Number: {{UserPin}}\n          </ion-label>\n        </ion-item>\n        <!--\n        <div class=\"test1\" (click)=\"SignOut()\">\n            Sign Out\n        </div>-->\n    </div>\n\n    \n    <ion-card style=\"height:200px;margin-top: 40px;z-index: 0;overflow: visible; background-color: rgba(200,200,200,0.1);\">\n        <ion-card-content style=\"overflow: visible; \"color=\"none\">\n            <ion-row >\n                <ion-col size=\"5\">\n                    <ion-img style=\"height:100px;width:100px;margin-top: 0px;margin-left: 30px;\" src=\"assets/images/exampleAva.jpeg\"></ion-img>  \n                </ion-col>\n                <ion-col  size=\"7\" style=\"margin-left: 0px;\">\n                    <!--\n                    <ion-item  color=\"none\" style=\"margin-top: -10px;margin-left: 10px;width: 200px;\"lines=\"none\" *ngFor=\"let item of list;let i=index\">\n                        <ion-icon [name]=\"item.icon\" [color]=\"item.color\" size=\"large\" class=\"scale-in-center\"\n                                  [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\"></ion-icon>\n                        <ion-label class=\"ion-padding-start\">\n                            <h5 style=\"color: white;\"[classList]=\"'tracking-in-expand'\"\n                                [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\">{{item.title}}</h5>\n                            <p style=\"color:lightgray\"[classList]=\"'tracking-in-expand'\"\n                               [ngStyle]=\"{'animation-delay':(i + 1) * 0.6+'s'}\">{{item.date}}</p>\n                        </ion-label>\n                    </ion-item>\n                    -->\n\n                    <ion-item  color=\"none\" style=\"margin-top: -10px;margin-left: 10px;width: 200px;\"lines=\"none\">\n                        <ion-icon name=\"bicycle\" color=\"primary\" size=\"large\" class=\"scale-in-center\"\n                                  [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\"></ion-icon>\n                        <ion-label class=\"ion-padding-start\">\n                            <h5 style=\"color: white;\"[classList]=\"'tracking-in-expand'\"\n                                [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\">Today's Weight</h5>\n                            <p *ngIf=\"!Edit\" style=\"color:lightgray\"[classList]=\"'tracking-in-expand'\"\n                               [ngStyle]=\"{'animation-delay':(i + 1) * 0.6+'s'}\">{{UserWeight}}</p>\n                            <input *ngIf=\"Edit\" type=\"text\" id=\"uWeight\" name=\"uWeight\" style=\"width: 100px;height: 22px;\">\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item  color=\"none\" style=\"margin-top: -10px;margin-left: 10px;width: 200px;\"lines=\"none\">\n                        <ion-icon name=\"ios-walk\" color=\"tertiary\" size=\"large\" class=\"scale-in-center\"\n                                  [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\"></ion-icon>\n                        <ion-label class=\"ion-padding-start\">\n                            <h5 style=\"color: white;\"[classList]=\"'tracking-in-expand'\"\n                                [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\">Goal Weight</h5>\n                            <p *ngIf=\"!Edit\"style=\"color:lightgray\"[classList]=\"'tracking-in-expand'\"\n                               [ngStyle]=\"{'animation-delay':(i + 1) * 0.6+'s'}\">{{GoalWeight}}</p>\n                               <input *ngIf=\"Edit\" type=\"text\" id=\"gWeight\" name=\"gWeight\" style=\"width: 100px;height: 22px;\">\n                            \n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item  color=\"none\" style=\"margin-top: -10px;margin-left: 10px;width: 200px;\"lines=\"none\">\n                        <ion-icon name=\"stats\" color=\"tertiary\" size=\"large\" class=\"scale-in-center\"\n                                  [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\"></ion-icon>\n                        <ion-label class=\"ion-padding-start\">\n                            <h5 style=\"color: white;\"[classList]=\"'tracking-in-expand'\"\n                                [ngStyle]=\"{'animation-delay':(i + 1) * 0.5+'s'}\">Heaviest Weight</h5>\n                            <p *ngIf=\"!Edit\"style=\"color:lightgray\"[classList]=\"'tracking-in-expand'\"\n                               [ngStyle]=\"{'animation-delay':(i + 1) * 0.6+'s'}\">{{HeaviestWeight}}</p>\n                               <input *ngIf=\"Edit\" type=\"text\" id=\"hWeight\" name=\"hWeight\" style=\"width: 100px;height: 22px;\">\n                                \n                        </ion-label>\n                    </ion-item>\n\n\n\n\n                </ion-col>\n            </ion-row>\n            \n        </ion-card-content>\n      \n    </ion-card>\n    <!--<custom-walk></custom-walk>-->\n    <!--<ion-card class=\"fadeInUp\" \n    [ngStyle]=\"{'animation-duration':(3) * 0.5+'s'}\" color=\"white\" style=\"height: 300px; width: 95%;\">\n\n    </ion-card>-->\n    <!--<custom-line-chart></custom-line-chart>-->\n    <!--<custom-steps></custom-steps>-->\n</ion-content>\n"

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

module.exports = "app-setting .top {\n  height: 200px;\n}\napp-setting .user {\n  padding-top: 45px;\n  color: white;\n}\napp-setting .user p {\n  color: white;\n}\napp-setting h5 {\n  color: var(--ion-color-step-600, #666);\n}\napp-setting .num {\n  position: absolute;\n  padding: 2px;\n  right: 5px;\n  top: -2px;\n}\n.test1 {\n  margin-top: -15px;\n  margin-left: 80%;\n  color: #ec6060;\n}\nion-content {\n  --background: #fff url('backgroundD.png') no-repeat center center / cover;\n}\nion-modal.notice-modal {\n  background-color: rgba(0, 0, 0, 0.2) !important;\n  -webkit-transition: opacity 0.55s linear;\n  transition: opacity 0.55s linear;\n  padding: 30vh 3vh;\n}\nion-card {\n  overflow: visible;\n}\nion-card-content {\n  overflow: visible;\n}\n.container_2 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3Qtei9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0FDRE47QURLRTtFQUNFLHNDQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7QURPQTtFQUNFLHlFQUFBO0FDSkY7QURPQTtFQUNFLCtDQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGlCQUFBO0FDSkY7QURNQTtFQUdFLGlCQUFBO0FDTEY7QURPQTtFQUVFLGlCQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0VBSUEsd0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2V0dGluZyB7XG4gIC50b3Age1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAudXNlciB7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgaDUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2NjYpO1xuICB9XG5cbiAgLm51bXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAtMnB4O1xuICB9XG59XG4udGVzdDF7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xuICBjb2xvcjogcmdiKDIzNiwgOTYsIDk2KTtcblxufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZEQucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLW1vZGFsLm5vdGljZS1tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjU1cyBsaW5lYXI7XG4gIHBhZGRpbmc6IDMwdmggM3ZoO1xufVxuaW9uLWNhcmR7XG4gIC8vaGVpZ2h0OjMwdmg7XG4gIC8vd2lkdGg6IDUwdnc7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAgICBcbn1cbmlvbi1jYXJkLWNvbnRlbnR7XG4gIC8vaGVpZ2h0OiA3MCU7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAgICBcbn1cblxuLmNvbnRhaW5lcl8yIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn0iLCJhcHAtc2V0dGluZyAudG9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbmFwcC1zZXR0aW5nIC51c2VyIHtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmFwcC1zZXR0aW5nIC51c2VyIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG5hcHAtc2V0dGluZyBoNSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2NjYpO1xufVxuYXBwLXNldHRpbmcgLm51bSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMnB4O1xuICByaWdodDogNXB4O1xuICB0b3A6IC0ycHg7XG59XG5cbi50ZXN0MSB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogODAlO1xuICBjb2xvcjogI2VjNjA2MDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kRC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLW1vZGFsLm5vdGljZS1tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNTVzIGxpbmVhcjtcbiAgcGFkZGluZzogMzB2aCAzdmg7XG59XG5cbmlvbi1jYXJkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNvbnRhaW5lcl8yIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn0iXX0= */"

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
    afs, afAuth, pickerCtrl, alertController, storage, cd, route, router, platform) {
        this.modalCtrl = modalCtrl;
        this.afs = afs;
        this.afAuth = afAuth;
        this.pickerCtrl = pickerCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.platform = platform;
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
        this.UserPin = "--";
        this.GoalWeight = "--";
        this.isIOS = false;
        this.Edit = false;
        this.list = [
            { icon: 'bicycle', color: 'primary', title: "Today's Weight", date: '200' },
            { icon: 'ios-walk', color: 'tertiary', title: 'Goal Weight', date: '190' },
            { icon: 'stats', color: 'tertiary', title: 'Heaviest Weight', date: '210' }
        ];
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
    EditCancel() {
        this.Edit = false;
        this.cd.detectChanges();
    }
    EditSave() {
        //const inputValue1 = <HTMLInputElement> document.getElementById("uWeight");
        var inputValue1 = document.getElementById("uWeight").value;
        var inputValue2 = document.getElementById("gWeight").value;
        var inputValue3 = document.getElementById("hWeight").value;
        if (inputValue1 == "") {
            inputValue1 = this.UserWeight;
        }
        if (inputValue2 == "") {
            inputValue2 = this.GoalWeight;
        }
        if (inputValue3 == "") {
            inputValue3 = this.HeaviestWeight;
        }
        this.afs.collection('users').doc(_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]).set({
            User_Weight: inputValue1,
            Goal_Weight: inputValue2,
            Heaviest_Weight: inputValue3,
        }, { merge: true });
        this.Edit = false;
        this.cd.detectChanges();
    }
    EditOn() {
        this.Edit = true;
        this.cd.detectChanges();
        console.log("IM HERRREE");
    }
    ngOnInit() {
        this.routeParams = this.route.params.subscribe(params => {
            this.Edit = false;
            console.log('Hello ' + _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]);
            /*Update Variables here*/
            if (this.platform.is('ios')) {
                this.isIOS = true;
            }
            if (!_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]) {
                this.storage.get("email").then(data => {
                    //if data exists
                    if (data) {
                        let uid = data.credential.uid;
                        let Email = data.credential.email;
                        let displayName = data.credential.displayName;
                        let photoURL = data.credential.photoURL;
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["setEmail"](data.credential.email);
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
                        if (displayName) {
                            const data2 = {
                                uid,
                                Email,
                                displayName,
                                photoURL
                            };
                            userRef.set(data2, { merge: true });
                        }
                        else {
                            const data2 = {
                                uid,
                                Email,
                                photoURL
                            };
                            userRef.set(data2, { merge: true });
                        }
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
                            ////////////
                            if (data3.Pin) {
                                this.UserPin = data3.Pin;
                            }
                            if (data3.Heaviest_Weight) {
                                this.HeaviestWeight = data3.Heaviest_Weight;
                            }
                            if (data3.User_Weight) {
                                this.UserWeight = data3.User_Weight;
                            }
                            if (data3.Goal_Weight) {
                                this.GoalWeight = data3.Goal_Weight;
                            }
                            ///////////
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
                this.myAny = this.afs.collection('users').doc(_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]).snapshotChanges().subscribe(values => {
                    const data = values.payload.data();
                    console.log("myAny" + data.email);
                    if (data.photoURL) {
                        this.user.img = data.photoURL;
                    }
                    if (data.Pin) {
                        this.UserPin = data.Pin;
                    }
                    if (data.Heaviest_Weight) {
                        this.HeaviestWeight = data.Heaviest_Weight;
                    }
                    if (data.User_Weight) {
                        this.UserWeight = data.User_Weight;
                    }
                    if (data.Goal_Weight) {
                        this.GoalWeight = data.Goal_Weight;
                    }
                    if (!data.displayName) {
                        let split = _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"].split("@");
                        let displayname = split[0];
                        this.afs.collection('users').doc(_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["__email"]).set({ displayName: displayname }, { merge: true });
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
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es2015.js.map