(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-unity-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test-unity/change-password.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test-unity/change-password.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "HELLO WORLD"

/***/ }),

/***/ "./src/app/pages/test-unity/change-password-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/test-unity/change-password-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/test-unity/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test-unity/change-password.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/test-unity/change-password.module.ts ***!
  \************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/pages/test-unity/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/test-unity/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"],
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/pages/test-unity/change-password.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/test-unity/change-password.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtdW5pdHkvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/test-unity/change-password.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/test-unity/change-password.page.ts ***!
  \**********************************************************/
/*! exports provided: updateNameTime, __humidity, set_humidity, __index, set_index, __raw, set_raw, __resistance, set_resistance, __temperature, set_temperature, __time, set_time, __unit, set_unit, __VOC, set_VOC, __idx, set_idx, __FruitName, set_fruitname, __device, set_device, __img, set_img, __battery, set_battery, ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNameTime", function() { return updateNameTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__humidity", function() { return __humidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_humidity", function() { return set_humidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__index", function() { return __index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_index", function() { return set_index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__raw", function() { return __raw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raw", function() { return set_raw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__resistance", function() { return __resistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_resistance", function() { return set_resistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__temperature", function() { return __temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_temperature", function() { return set_temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__time", function() { return __time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_time", function() { return set_time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unit", function() { return __unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_unit", function() { return set_unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__VOC", function() { return __VOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_VOC", function() { return set_VOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__idx", function() { return __idx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_idx", function() { return set_idx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__FruitName", function() { return __FruitName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_fruitname", function() { return set_fruitname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__device", function() { return __device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_device", function() { return set_device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__img", function() { return __img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_img", function() { return set_img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__battery", function() { return __battery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_battery", function() { return set_battery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// Devices
function updateNameTime(name, time) {
    __FruitName = name;
    __time = time;
}
var __humidity;
function set_humidity(item) {
    __humidity = item;
}
var __index;
function set_index(item) {
    __index = item;
}
var __raw;
function set_raw(item) {
    __raw = item;
}
var __resistance;
function set_resistance(item) {
    __resistance = item;
}
var __temperature;
function set_temperature(item) {
    __temperature = item;
}
var __time;
function set_time(item) {
    __time = item;
}
var __unit;
function set_unit(item) {
    __unit = item;
}
var __VOC;
function set_VOC(item) {
    __VOC = item;
}
var __idx;
function set_idx(item) {
    __idx = item;
}
var __FruitName;
function set_fruitname(item) {
    __FruitName = item;
}
var __device;
function set_device(item) {
    __device = item;
}
var __img;
function set_img(item) {
    __img = item;
}
var __battery;
function set_battery(item) {
    __battery = item;
}
//
// freshness
//
let ChangePasswordPage = class ChangePasswordPage {
    constructor() {
    }
    ngOnInit() {
    }
};
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test-unity/change-password.page.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/test-unity/change-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=test-unity-change-password-module-es2015.js.map