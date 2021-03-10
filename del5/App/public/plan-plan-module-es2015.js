(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/plan/plan.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/plan/plan.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n    <div class=\"top background-size\" [ngStyle]=\"{'background-image':'url('+img+')'}\">\n    </div>\n    <custom-timeline [list]=\"list\"></custom-timeline>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/plan/plan-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/plan/plan-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageRoutingModule", function() { return PlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan.page */ "./src/app/pages/plan/plan.page.ts");




const routes = [
    {
        path: '',
        component: _plan_page__WEBPACK_IMPORTED_MODULE_3__["PlanPage"]
    }
];
let PlanPageRoutingModule = class PlanPageRoutingModule {
};
PlanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/plan/plan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/plan/plan.module.ts ***!
  \*******************************************/
/*! exports provided: PlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-routing.module */ "./src/app/pages/plan/plan-routing.module.ts");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan.page */ "./src/app/pages/plan/plan.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let PlanPageModule = class PlanPageModule {
};
PlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_plan_page__WEBPACK_IMPORTED_MODULE_6__["PlanPage"]]
    })
], PlanPageModule);



/***/ }),

/***/ "./src/app/pages/plan/plan.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/plan/plan.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .top {\n  height: 230px;\n}\n:host ::ng-deep ion-grid {\n  margin-top: -140px;\n}\n:host ::ng-deep ion-item {\n  color: var(--ion-color-primary);\n}\n:host ::ng-deep ion-item:first-child h4, :host ::ng-deep ion-item:first-child p {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL3BhZ2VzL3BsYW4vcGxhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYW4vcGxhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0FDSEo7QURNRTtFQUNFLCtCQUFBO0FDSko7QURPTTtFQUNFLFlBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW4vcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cblxuICAudG9wIHtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIGlvbi1ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiAtMTQwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgaW9uLWl0ZW0ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGg0LCBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLnRvcCB7XG4gIGhlaWdodDogMjMwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAtMTQwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgaW9uLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgOjpuZy1kZWVwIGlvbi1pdGVtOmZpcnN0LWNoaWxkIGg0LCA6aG9zdCA6Om5nLWRlZXAgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/plan/plan.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/plan/plan.page.ts ***!
  \*****************************************/
/*! exports provided: PlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPage", function() { return PlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanPage = class PlanPage {
    constructor() {
        this.img = 'assets/images/top.png';
        this.list = [
            {
                img: 'assets/images/sport/1.jpg',
                title: 'Interval Run',
                intro: 'Next Workout ● Today 40 mins',
                date: '21 August 2022 at 8:19pm',
            },
            {
                img: 'assets/images/sport/2.jpg',
                title: 'Workouts Schedule',
                intro: '3 Workouts Remaing This Week',
                date: '21 August 2022 at 8:19pm',
            },
            {
                img: 'assets/images/sport/3.jpg',
                title: 'Interval Run',
                intro: 'Next Workout ● Today 40 mins',
                date: '21 August 2022 at 8:19pm',
            },
            {
                img: 'assets/images/sport/4.jpg',
                title: 'Rope skipping',
                intro: 'Next Workout ● Today 40 mins',
                date: '21 August 2022 at 8:19pm',
            },
            {
                img: 'assets/images/sport/5.jpg',
                title: 'Muscular Training',
                intro: 'Next Workout ● Today 40 mins',
                date: '21 August 2022 at 8:19pm',
            },
            {
                img: 'assets/images/sport/6.jpg',
                title: 'Bike',
                intro: 'Next Workout ● Today 40 mins',
                date: '21 August 2022 at 8:19pm',
            }
        ];
    }
    ngOnInit() {
    }
};
PlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan',
        template: __webpack_require__(/*! raw-loader!./plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/plan/plan.page.html"),
        styles: [__webpack_require__(/*! ./plan.page.scss */ "./src/app/pages/plan/plan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlanPage);



/***/ })

}]);
//# sourceMappingURL=plan-plan-module-es2015.js.map