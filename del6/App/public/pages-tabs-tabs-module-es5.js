(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n        <ion-tab-button tab=\"statistics\" #stat [layout]=\"stat.selected?'icon-top':'label-hide'\">\n            <ng-template [ngIf]=\"stat.selected\" [ngIfElse]=\"noHome\">\n                <ion-icon name=\"md-trending-up\" color=\"primary\" class=\"heartBeat\"\n                          [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\"></ion-icon>\n            </ng-template>\n            <ng-template #noHome>\n                <ion-icon name=\"ios-trending-up\"></ion-icon>\n            </ng-template>\n            <ion-label>Statistics</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"award\" #award [layout]=\"award.selected?'icon-top':'label-hide'\">\n            <ng-template [ngIf]=\"award.selected\" [ngIfElse]=\"noAward\">\n                <ion-icon name=\"md-trophy\" color=\"tertiary\" class=\"heartBeat\"\n                          [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\"></ion-icon>\n            </ng-template>\n            <ng-template #noAward>\n                <ion-icon name=\"ios-trophy\"></ion-icon>\n            </ng-template>\n            <ion-label>Awards</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab2\">\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"plan\" #plan [layout]=\"plan.selected?'icon-top':'label-hide'\">\n            <ng-template [ngIf]=\"plan.selected\" [ngIfElse]=\"noPlan\">\n                <ion-icon name=\"md-calendar\" color=\"success\" class=\"heartBeat\"\n                          [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\"></ion-icon>\n            </ng-template>\n            <ng-template #noPlan>\n                <ion-icon name=\"ios-calendar\"></ion-icon>\n            </ng-template>\n            <ion-label>Plans</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"setting\" #setting [layout]=\"setting.selected?'icon-top':'label-hide'\">\n            <ng-template [ngIf]=\"setting.selected\" [ngIfElse]=\"noSetting\">\n                <ion-icon name=\"md-settings\" color=\"warning\" class=\"heartBeat\"\n                          [ngStyle]=\"{'animation-duration':(2) * 0.5+'s'}\"></ion-icon>\n            </ng-template>\n            <ng-template #noSetting>\n                <ion-icon name=\"settings\"></ion-icon>\n            </ng-template>\n            <ion-label>Setting</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>\n\n<ion-fab horizontal=\"center\" slot=\"fixed\" vertical=\"bottom\" class=\"fab-bottom\">\n    <ion-fab-button color=\"primary\" routerLink=\"/plan-add\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




var routes = [
    {
        path: '', redirectTo: '/tabs/statistics', pathMatch: 'full'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'statistics',
                loadChildren: function () { return __webpack_require__.e(/*! import() | statistics-statistics-module */ "statistics-statistics-module").then(__webpack_require__.bind(null, /*! ../statistics/statistics.module */ "./src/app/pages/statistics/statistics.module.ts")).then(function (m) { return m.StatisticsPageModule; }); }
            },
            {
                path: 'setting',
                loadChildren: function () { return __webpack_require__.e(/*! import() | setting-setting-module */ "setting-setting-module").then(__webpack_require__.bind(null, /*! ../setting/setting.module */ "./src/app/pages/setting/setting.module.ts")).then(function (m) { return m.SettingPageModule; }); }
            },
            {
                path: 'award',
                loadChildren: function () { return __webpack_require__.e(/*! import() | award-award-module */ "award-award-module").then(__webpack_require__.bind(null, /*! ../award/award.module */ "./src/app/pages/award/award.module.ts")).then(function (m) { return m.AwardPageModule; }); }
            },
            {
                path: 'plan',
                loadChildren: function () { return __webpack_require__.e(/*! import() | plan-plan-module */ "plan-plan-module").then(__webpack_require__.bind(null, /*! ../plan/plan.module */ "./src/app/pages/plan/plan.module.ts")).then(function (m) { return m.PlanPageModule; }); }
            },
            {
                path: 'export',
                loadChildren: function () { return __webpack_require__.e(/*! import() | export-change-password-module */ "export-change-password-module").then(__webpack_require__.bind(null, /*! ../export/change-password.module */ "./src/app/pages/export/change-password.module.ts")).then(function (m) { return m.ChangePasswordPageModule; }); }
            },
            {
                path: 'test-unity',
                loadChildren: function () { return __webpack_require__.e(/*! import() | test-unity-change-password-module */ "test-unity-change-password-module").then(__webpack_require__.bind(null, /*! ../test-unity/change-password.module */ "./src/app/pages/test-unity/change-password.module.ts")).then(function (m) { return m.ChangePasswordPageModule; }); }
            },
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .fab-bottom {\n  margin-bottom: constant(safe-area-inset-bottom);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwrQ0FBQTtFQUNBLDBDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIC5mYWItYm90dG9tIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICBtYXJnaW4tYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIH1cbn1cbiIsIjpob3N0IC5mYWItYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map