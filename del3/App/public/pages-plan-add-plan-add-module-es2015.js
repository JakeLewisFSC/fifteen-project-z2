(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-add-plan-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/success-modal/success-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/success-modal/success-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <div class=\"ion-text-center\">\n            <svg class=\"animated\" height=\"120\" viewBox=\"0 0 70 70\"\n                 width=\"120\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path class=\"success-animation\"\n                        d=\"M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z\"\n                        fill=\"#D8D8D8\"></path>\n                <circle cx=\"35\" cy=\"35\" fill=\"transparent\" class=\"success-circle\" r=\"24\"\n                        stroke=\"#979797\" stroke-linecap=\"round\" stroke-width=\"2\"></circle>\n                <polyline fill=\"transparent\" class=\"success-check\" points=\"23 34 34 43 47 27\"\n                          stroke=\"#979797\" stroke-width=\"2\"></polyline>\n            </svg>\n            <h2 class=\"ion-no-margin\">Success</h2>\n        </div>\n    </ion-row>\n</ion-grid>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/plan-add/plan-add.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/plan-add/plan-add.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/statistics\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>plan</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label>Weight</ion-label>\n                    <ion-input type=\"tel\" autofocus=\"true\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Sex</ion-label>\n                    <ion-select>\n                        <ion-select-option value=\"male\">Male</ion-select-option>\n                        <ion-select-option value=\"female\">Female</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>PlanDate</ion-label>\n                    <ion-datetime displayFormat=\"DDDD. DD MMM, YYYY\" placeholder=\"Select Date\"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Month</ion-label>\n                    <ion-select>\n                        <ion-select-option value=\"01\">January</ion-select-option>\n                        <ion-select-option value=\"02\">February</ion-select-option>\n                        <ion-select-option value=\"03\">March</ion-select-option>\n                        <ion-select-option value=\"04\">April</ion-select-option>\n                        <ion-select-option value=\"05\">May</ion-select-option>\n                        <ion-select-option value=\"06\">June</ion-select-option>\n                        <ion-select-option value=\"07\">July</ion-select-option>\n                        <ion-select-option value=\"08\">August</ion-select-option>\n                        <ion-select-option value=\"09\">September</ion-select-option>\n                        <ion-select-option value=\"10\">October</ion-select-option>\n                        <ion-select-option value=\"11\">November</ion-select-option>\n                        <ion-select-option value=\"12\" selected>December</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Routine</ion-label>\n                    <ion-buttons>\n                        <ion-button *ngFor=\"let cate of cateList\" [class.active]=\"selectCate===cate\"\n                                    (click)=\"onCate(cate)\">\n                            <ion-icon [name]=\"cate\" size=\"large\" color=\"primary\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Comment</ion-label>\n                    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\"></ion-textarea>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"block\" class=\"ion-no-margin btn-primary btn-color\" (click)=\"onSave()\">Save</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/components/success-modal/success-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/success-modal/success-modal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-grid {\n  background: #3a74cb !important;\n  width: 100%;\n  height: 100%;\n}\n:host ion-grid ion-row {\n  height: 100%;\n}\n:host h2 {\n  color: white;\n}\n:host .animated {\n  -webkit-animation: 1s ease-out both scaleAnimation;\n  animation: 1s ease-out both scaleAnimation;\n}\n:host .success-animation {\n  -webkit-animation: 0.3s linear 0.9s both fadeIn;\n  animation: 0.3s linear 0.9s both fadeIn;\n}\n:host .success-animation {\n  fill: #fff;\n  opacity: 0;\n}\n:host .success-check {\n  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) both drawCheck, 0.3s linear 0.9s both fadeOut;\n  animation: 1s cubic-bezier(0.77, 0, 0.175, 1) both drawCheck, 0.3s linear 0.9s both fadeOut;\n}\n:host .success-check {\n  stroke-dasharray: 36px, 36px;\n  stroke: #fff;\n}\n:host .success-circle {\n  -webkit-animation: 1s cubic-bezier(0.77, 0, 0.175, 1) both drawCircle, 0.3s linear 0.9s both fadeOut;\n  animation: 1s cubic-bezier(0.77, 0, 0.175, 1) both drawCircle, 0.3s linear 0.9s both fadeOut;\n}\n:host .success-circle {\n  stroke-dasharray: 151px, 151px;\n  stroke: #fff;\n}\n@-webkit-keyframes scaleAnimation {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes scaleAnimation {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes drawCheck {\n  0% {\n    stroke-dashoffset: 36px;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes drawCheck {\n  0% {\n    stroke-dashoffset: 36px;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes drawCircle {\n  0% {\n    stroke-dashoffset: 151px;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes drawCircle {\n  0% {\n    stroke-dashoffset: 151px;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL2NvbXBvbmVudHMvc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FESUU7RUFDRSxZQUFBO0FDRko7QURLRTtFQUNFLGtEQUFBO0VBQ0EsMENBQUE7QUNISjtBRE1FO0VBQ0UsK0NBQUE7RUFDQSx1Q0FBQTtBQ0pKO0FEUUU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ05KO0FEU0U7RUFDRSxtR0FBQTtFQUNBLDJGQUFBO0FDUEo7QURVRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEV0U7RUFDRSxvR0FBQTtFQUNBLDRGQUFBO0FDVEo7QURZRTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEYUU7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtJQUNBLHFCQUFBO0VDWEo7RURhRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VDWEo7QUFDRjtBRENFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNkJBQUE7SUFDQSxxQkFBQTtFQ1hKO0VEYUU7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ1hKO0FBQ0Y7QURjRTtFQUNFO0lBQ0UsVUFBQTtFQ1pKO0VEY0U7SUFDRSxVQUFBO0VDWko7QUFDRjtBRE1FO0VBQ0U7SUFDRSxVQUFBO0VDWko7RURjRTtJQUNFLFVBQUE7RUNaSjtBQUNGO0FEY0U7RUFDRTtJQUNFLFVBQUE7RUNaSjtFRGNFO0lBQ0UsVUFBQTtFQ1pKO0FBQ0Y7QURNRTtFQUNFO0lBQ0UsVUFBQTtFQ1pKO0VEY0U7SUFDRSxVQUFBO0VDWko7QUFDRjtBRGNFO0VBQ0U7SUFDRSx1QkFBQTtFQ1pKO0VEY0U7SUFDRSxvQkFBQTtFQ1pKO0FBQ0Y7QURNRTtFQUNFO0lBQ0UsdUJBQUE7RUNaSjtFRGNFO0lBQ0Usb0JBQUE7RUNaSjtBQUNGO0FEZUU7RUFDRTtJQUNFLHdCQUFBO0VDYko7RURlRTtJQUNFLG9CQUFBO0VDYko7QUFDRjtBRE9FO0VBQ0U7SUFDRSx3QkFBQTtFQ2JKO0VEZUU7SUFDRSxvQkFBQTtFQ2JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWdyaWQge1xuICAgIGJhY2tncm91bmQ6ICAjM2E3NGNiICAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGlvbi1yb3cge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYW5pbWF0ZWQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBlYXNlLW91dCBib3RoIHNjYWxlQW5pbWF0aW9uO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgYm90aCBzY2FsZUFuaW1hdGlvbjtcbiAgfVxuXG4gIC5zdWNjZXNzLWFuaW1hdGlvbiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IC4zcyBsaW5lYXIgLjlzIGJvdGggZmFkZUluO1xuICAgIGFuaW1hdGlvbjogLjNzIGxpbmVhciAuOXMgYm90aCBmYWRlSW47XG5cbiAgfVxuXG4gIC5zdWNjZXNzLWFuaW1hdGlvbiB7XG4gICAgZmlsbDogI2ZmZjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLnN1Y2Nlc3MtY2hlY2sge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBjdWJpYy1iZXppZXIoLjc3LCAwLCAuMTc1LCAxKSBib3RoIGRyYXdDaGVjaywgLjNzIGxpbmVhciAuOXMgYm90aCBmYWRlT3V0O1xuICAgIGFuaW1hdGlvbjogMXMgY3ViaWMtYmV6aWVyKC43NywgMCwgLjE3NSwgMSkgYm90aCBkcmF3Q2hlY2ssIC4zcyBsaW5lYXIgLjlzIGJvdGggZmFkZU91dDtcbiAgfVxuXG4gIC5zdWNjZXNzLWNoZWNrIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzNnB4LCAzNnB4O1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgfVxuXG4gIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGN1YmljLWJlemllciguNzcsIDAsIC4xNzUsIDEpIGJvdGggZHJhd0NpcmNsZSwgLjNzIGxpbmVhciAuOXMgYm90aCBmYWRlT3V0O1xuICAgIGFuaW1hdGlvbjogMXMgY3ViaWMtYmV6aWVyKC43NywgMCwgLjE3NSwgMSkgYm90aCBkcmF3Q2lyY2xlLCAuM3MgbGluZWFyIC45cyBib3RoIGZhZGVPdXQ7XG4gIH1cblxuICAuc3VjY2Vzcy1jaXJjbGUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE1MXB4LCAxNTFweDtcbiAgICBzdHJva2U6ICNmZmY7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNjYWxlQW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZHJhd0NoZWNrIHtcbiAgICAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMzZweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGRyYXdDaXJjbGUge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNTFweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogIzNhNzRjYiAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGVhc2Utb3V0IGJvdGggc2NhbGVBbmltYXRpb247XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1vdXQgYm90aCBzY2FsZUFuaW1hdGlvbjtcbn1cbjpob3N0IC5zdWNjZXNzLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIGxpbmVhciAwLjlzIGJvdGggZmFkZUluO1xuICBhbmltYXRpb246IDAuM3MgbGluZWFyIDAuOXMgYm90aCBmYWRlSW47XG59XG46aG9zdCAuc3VjY2Vzcy1hbmltYXRpb24ge1xuICBmaWxsOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgLnN1Y2Nlc3MtY2hlY2sge1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBib3RoIGRyYXdDaGVjaywgMC4zcyBsaW5lYXIgMC45cyBib3RoIGZhZGVPdXQ7XG4gIGFuaW1hdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBib3RoIGRyYXdDaGVjaywgMC4zcyBsaW5lYXIgMC45cyBib3RoIGZhZGVPdXQ7XG59XG46aG9zdCAuc3VjY2Vzcy1jaGVjayB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDM2cHgsIDM2cHg7XG4gIHN0cm9rZTogI2ZmZjtcbn1cbjpob3N0IC5zdWNjZXNzLWNpcmNsZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpIGJvdGggZHJhd0NpcmNsZSwgMC4zcyBsaW5lYXIgMC45cyBib3RoIGZhZGVPdXQ7XG4gIGFuaW1hdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBib3RoIGRyYXdDaXJjbGUsIDAuM3MgbGluZWFyIDAuOXMgYm90aCBmYWRlT3V0O1xufVxuOmhvc3QgLnN1Y2Nlc3MtY2lyY2xlIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTUxcHgsIDE1MXB4O1xuICBzdHJva2U6ICNmZmY7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBkcmF3Q2hlY2sge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM2cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZHJhd0NpcmNsZSB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTUxcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/success-modal/success-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/success-modal/success-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: SuccessModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModalComponent", function() { return SuccessModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuccessModalComponent = class SuccessModalComponent {
    constructor() { }
    ngOnInit() { }
};
SuccessModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success-modal',
        template: __webpack_require__(/*! raw-loader!./success-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/success-modal/success-modal.component.html"),
        styles: [__webpack_require__(/*! ./success-modal.component.scss */ "./src/app/components/success-modal/success-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SuccessModalComponent);



/***/ }),

/***/ "./src/app/pages/plan-add/plan-add-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/plan-add/plan-add-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PlanAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanAddPageRoutingModule", function() { return PlanAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _plan_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-add.page */ "./src/app/pages/plan-add/plan-add.page.ts");




const routes = [
    {
        path: '',
        component: _plan_add_page__WEBPACK_IMPORTED_MODULE_3__["PlanAddPage"]
    }
];
let PlanAddPageRoutingModule = class PlanAddPageRoutingModule {
};
PlanAddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanAddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/plan-add/plan-add.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/plan-add/plan-add.module.ts ***!
  \***************************************************/
/*! exports provided: PlanAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanAddPageModule", function() { return PlanAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plan_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-add-routing.module */ "./src/app/pages/plan-add/plan-add-routing.module.ts");
/* harmony import */ var _plan_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-add.page */ "./src/app/pages/plan-add/plan-add.page.ts");
/* harmony import */ var _components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/success-modal/success-modal.component */ "./src/app/components/success-modal/success-modal.component.ts");








let PlanAddPageModule = class PlanAddPageModule {
};
PlanAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanAddPageRoutingModule"]
        ],
        declarations: [_plan_add_page__WEBPACK_IMPORTED_MODULE_6__["PlanAddPage"], _components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuccessModalComponent"]],
        entryComponents: [_components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuccessModalComponent"]]
    })
], PlanAddPageModule);



/***/ }),

/***/ "./src/app/pages/plan-add/plan-add.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/plan-add/plan-add.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .active {\n  --background: #dfe7f5 !important;\n}\n:host ion-textarea {\n  background: #dfe7f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWtlbGV3aXMvRGVza3RvcC9maWZ0ZWVuLXByb2plY3QtZS9zcmMvYXBwL3BhZ2VzL3BsYW4tYWRkL3BsYW4tYWRkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhbi1hZGQvcGxhbi1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0NBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW4tYWRkL3BsYW4tYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmFjdGl2ZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZGZlN2Y1ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6ICNkZmU3ZjU7XG4gIH1cbn1cbiIsIjpob3N0IC5hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6ICNkZmU3ZjUgIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNkZmU3ZjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/plan-add/plan-add.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/plan-add/plan-add.page.ts ***!
  \*************************************************/
/*! exports provided: PlanAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanAddPage", function() { return PlanAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/success-modal/success-modal.component */ "./src/app/components/success-modal/success-modal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PlanAddPage = class PlanAddPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.selectCate = 'bicycle';
        this.cateList = ['bicycle', 'walk', 'body', 'american-football'];
    }
    ngOnInit() {
    }
    onCate(cate) {
        this.selectCate = cate;
    }
    onSave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__["SuccessModalComponent"],
            });
            yield modal.present();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(2000).subscribe(r => {
                modal.dismiss().then(() => this.router.navigateByUrl('/tabs/statistics'));
            });
        });
    }
};
PlanAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PlanAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan-add',
        template: __webpack_require__(/*! raw-loader!./plan-add.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/plan-add/plan-add.page.html"),
        styles: [__webpack_require__(/*! ./plan-add.page.scss */ "./src/app/pages/plan-add/plan-add.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], PlanAddPage);



/***/ })

}]);
//# sourceMappingURL=pages-plan-add-plan-add-module-es2015.js.map