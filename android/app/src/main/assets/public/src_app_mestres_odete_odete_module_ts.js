(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_odete_odete_module_ts"],{

/***/ 84877:
/*!*******************************************************!*\
  !*** ./src/app/mestres/odete/odete-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdetePageRoutingModule": () => (/* binding */ OdetePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _odete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odete.page */ 83786);




const routes = [
    {
        path: '',
        component: _odete_page__WEBPACK_IMPORTED_MODULE_0__.OdetePage
    }
];
let OdetePageRoutingModule = class OdetePageRoutingModule {
};
OdetePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OdetePageRoutingModule);



/***/ }),

/***/ 38677:
/*!***********************************************!*\
  !*** ./src/app/mestres/odete/odete.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdetePageModule": () => (/* binding */ OdetePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _odete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odete-routing.module */ 84877);
/* harmony import */ var _odete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odete.page */ 83786);







let OdetePageModule = class OdetePageModule {
};
OdetePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _odete_routing_module__WEBPACK_IMPORTED_MODULE_0__.OdetePageRoutingModule
        ],
        declarations: [_odete_page__WEBPACK_IMPORTED_MODULE_1__.OdetePage]
    })
], OdetePageModule);



/***/ }),

/***/ 83786:
/*!*********************************************!*\
  !*** ./src/app/mestres/odete/odete.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdetePage": () => (/* binding */ OdetePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_odete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./odete.page.html */ 17109);
/* harmony import */ var _odete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odete.page.scss */ 57871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let OdetePage = class OdetePage {
    constructor() { }
    ngOnInit() {
    }
};
OdetePage.ctorParameters = () => [];
OdetePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-odete',
        template: _raw_loader_odete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_odete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OdetePage);



/***/ }),

/***/ 57871:
/*!***********************************************!*\
  !*** ./src/app/mestres/odete/odete.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9kZXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6Im9kZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMSwgMTMpO1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjMwLCAyMCk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIC5iYWNrLXNwbGFzaCB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxuICAuaW1nLWhlYWRlciB7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 17109:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/odete/odete.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Dona Odete\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/odete.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      ODETE CAVALCANTE MACIEL\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Odete Primo, também conhecida como Dona Odete, trabalha há mais de 70 anos com fios e tecidos. E é uma das especialistas na confecção da renda renascença. Nascida em Poção, casou-se em 1955 e depois se mudou para Pesqueira, onde exerce seu ofício de rendeira e multiplicadora desta técnica tão especial. Faz de qualquer peça uma obra de arte.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_odete_odete_module_ts.js.map