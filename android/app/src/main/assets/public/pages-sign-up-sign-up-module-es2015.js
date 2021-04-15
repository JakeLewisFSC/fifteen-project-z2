(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-up/sign-up.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n    <div class=\"main-content\">\n        <img src=\"assets/images/lightGray.png\">\n    </div>\n    <div class=\"logo\" >\n        <img src=\"assets/images/maxQ.png\">\n    </div>\n\n    <ion-card style=\"margin-top: 190px;\">\n        <form [formGroup]=\"lForm\">\n            <ion-item lines=\"none\">\n                <ion-icon name=\"md-person\"></ion-icon>\n                <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n            </ion-item>\n            <!--\n            <ion-text class=\"ion-text-center ion-padding-start\" color=\"danger\"\n                      *ngIf=\"!lForm.controls.name.valid  && lForm.controls.name.dirty\">\n                Username length must be longer than or equal to 6 characters\n            </ion-text>-->\n            <ion-item lines=\"none\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <ion-input formControlName=\"pwd\" type=\"password\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <ion-input formControlName=\"pwd2\" type=\"password\"></ion-input>\n            </ion-item>\n            <ion-text class=\"ion-text-center ion-padding-start\" color=\"danger\"\n                      *ngIf=\"!lForm.controls.pwd.valid  && lForm.controls.pwd.dirty\">\n                password Length at 6-30\n            </ion-text>\n            <ion-text class=\"ion-text-center ion-padding-start\" style=\"margin-left:10px;\" color=\"danger\"\n                      *ngIf=\"lForm.controls.pwd.value != lForm.controls.pwd2.value\">\n                      <br>\n                      \n                passwords do not match\n            </ion-text>\n            \n        </form>\n\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-button expand=\"block\" color=\"secondary\" class=\"btn-primary\" [disabled]=\"!lForm.valid\" (click)=\"auth.onReg(lForm)\">Sign Up\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        \n        <button class=\"google-div\" (click)=\"auth.googleSignIn()\">\n            <img class=\"google\" src=\"../../assets/images/googleLogInLight.png\">\n        </button>\n\n        <br>\n        <button class=\"facebook-div\" (click)=\"onLogin()\">\n            <img class=\"facebook\" src=\"../../assets/images/facebook.png\">\n        </button>\n        <br>\n        <span style=\"font-size: 10; color:black; margin-left: 30%;\" (click)=\"Account()\">\n            Already have an account?\n        </span>\n        <br>\n        \n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function() { return SignUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");




const routes = [
    {
        path: '',
        component: _sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
    }
];
let SignUpRoutingModule = class SignUpRoutingModule {
};
SignUpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpRoutingModule);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .main-content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n:host .main-content img {\n  width: 100%;\n  height: 100%;\n}\n:host .logo {\n  position: absolute;\n  margin-top: 60px;\n  z-index: 99;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n:host .logo img {\n  width: 225px !important;\n}\n:host .logo span {\n  margin-left: 5px;\n  font-size: 1.6rem;\n  color: var(--custom-text-color);\n  opacity: 0.6;\n  letter-spacing: 0.3px;\n}\n:host ion-card {\n  margin-top: 230px;\n  padding: 17px 10px 10px 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  background: white;\n  box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.7) !important;\n}\n:host ion-card ion-item {\n  border-radius: 24px;\n  margin: 10px;\n  border: 1px solid #5e5a5a;\n}\n.google {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ffffff;\n}\n.google-div {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n  background-color: #ffffff;\n}\n.facebook {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ffffff;\n}\n.facebook-div {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 88%;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3Qtei9zcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQU47QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDRk47QURJTTtFQUNFLHVCQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0hSO0FET0k7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7QUNMTjtBRE9NO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNMUjtBRFdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtBQ1JKO0FEWUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ1RKO0FEWUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDVEo7QURhRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5sb2dvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICB6LWluZGV4OiA5OTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20tdGV4dC1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogMjMwcHg7XG4gICAgICBwYWRkaW5nOiAxN3B4IDEwcHggMTBweCAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIFxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ZTVhNWE7XG4gICAgICB9XG4gICAgfVxuICBcbiAgfVxuICBcbiAgLmdvb2dsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBcbiAgXG4gIC5nb29nbGUtZGl2e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuZmFjZWJvb2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgXG4gIFxuICAuZmFjZWJvb2stZGl2e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogODglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH0iLCI6aG9zdCAubWFpbi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgLm1haW4tY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDIyNXB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubG9nbyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiB2YXIoLS1jdXN0b20tdGV4dC1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuOmhvc3QgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAyMzBweDtcbiAgcGFkZGluZzogMTdweCAxMHB4IDEwcHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24tY2FyZCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVlNWE1YTtcbn1cblxuLmdvb2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ29vZ2xlLWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZmFjZWJvb2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZhY2Vib29rLWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/pages/services/auth.service.ts");







let SignUpComponent = class SignUpComponent {
    constructor(formBuilder, loadingProvider, alertProvider, auth, router) {
        this.formBuilder = formBuilder;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.auth = auth;
        this.router = router;
        this.lForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            pwd2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
        });
    }
    ngOnInit() {
    }
    onLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingProvider.create();
            yield loader.present();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(2000).subscribe(r => {
                loader.dismiss().then(() => {
                    this.router.navigateByUrl('/tabs');
                });
            }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
        });
    }
    Account() {
        this.router.navigateByUrl('/login');
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AlertProvider"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/pages/sign-up/sign-up.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["AlertProvider"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SignUpComponent);



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponentModule", function() { return SignUpComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/pages/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");







let SignUpComponentModule = class SignUpComponentModule {
};
SignUpComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]]
    })
], SignUpComponentModule);



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map