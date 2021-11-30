(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_msertania_msertania_module_ts"],{

/***/ 27747:
/*!***************************************************************!*\
  !*** ./src/app/mestres/msertania/msertania-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsertaniaPageRoutingModule": () => (/* binding */ MsertaniaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _msertania_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msertania.page */ 39615);




const routes = [
    {
        path: '',
        component: _msertania_page__WEBPACK_IMPORTED_MODULE_0__.MsertaniaPage
    }
];
let MsertaniaPageRoutingModule = class MsertaniaPageRoutingModule {
};
MsertaniaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MsertaniaPageRoutingModule);



/***/ }),

/***/ 60101:
/*!*******************************************************!*\
  !*** ./src/app/mestres/msertania/msertania.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsertaniaPageModule": () => (/* binding */ MsertaniaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _msertania_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msertania-routing.module */ 27747);
/* harmony import */ var _msertania_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msertania.page */ 39615);







let MsertaniaPageModule = class MsertaniaPageModule {
};
MsertaniaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _msertania_routing_module__WEBPACK_IMPORTED_MODULE_0__.MsertaniaPageRoutingModule
        ],
        declarations: [_msertania_page__WEBPACK_IMPORTED_MODULE_1__.MsertaniaPage]
    })
], MsertaniaPageModule);



/***/ }),

/***/ 39615:
/*!*****************************************************!*\
  !*** ./src/app/mestres/msertania/msertania.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsertaniaPage": () => (/* binding */ MsertaniaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_msertania_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./msertania.page.html */ 22698);
/* harmony import */ var _msertania_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msertania.page.scss */ 22501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let MsertaniaPage = class MsertaniaPage {
    constructor() { }
    ngOnInit() {
    }
};
MsertaniaPage.ctorParameters = () => [];
MsertaniaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-msertania',
        template: _raw_loader_msertania_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_msertania_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MsertaniaPage);



/***/ }),

/***/ 22501:
/*!*******************************************************!*\
  !*** ./src/app/mestres/msertania/msertania.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZXJ0YW5pYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLFVBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0UsNkJBQUE7QUFHRjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFJSjs7QUFEQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFJRiIsImZpbGUiOiJtc2VydGFuaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAxLCAxMyk7XHJcbiAgZm9udC1mYW1pbHk6IFNwYWNlR3JvdGVzaztcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMzAsIDIwKTtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgLmJhY2stc3BsYXNoIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgfVxyXG4gIC5pbWctaGVhZGVyIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxuICAudHh0LWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 22698:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/msertania/msertania.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n     Marcos de Sertânia\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/marcos_de_sertania.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      MARCUS PAULO LAU DA COSTA\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Esculturas de homens magros com seus cães magros. É fácil identificar o estilo de Marcos de Sertânia. Segundo ele, as figuras não são só para mostrar o sofrimento do homem do sertão mas também para dar leveza à peça. Os animais, segundo ele, são emblemas do mundo rural. São símbolos da estranha mistura de aridez e afeto. Ele diz que se sente artista quando consegue comover alguém com seu trabalho.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_msertania_msertania_module_ts.js.map