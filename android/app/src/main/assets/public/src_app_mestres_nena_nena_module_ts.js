(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_nena_nena_module_ts"],{

/***/ 88872:
/*!*****************************************************!*\
  !*** ./src/app/mestres/nena/nena-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NenaPageRoutingModule": () => (/* binding */ NenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _nena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nena.page */ 65549);




const routes = [
    {
        path: '',
        component: _nena_page__WEBPACK_IMPORTED_MODULE_0__.NenaPage
    }
];
let NenaPageRoutingModule = class NenaPageRoutingModule {
};
NenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NenaPageRoutingModule);



/***/ }),

/***/ 93466:
/*!*********************************************!*\
  !*** ./src/app/mestres/nena/nena.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NenaPageModule": () => (/* binding */ NenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _nena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nena-routing.module */ 88872);
/* harmony import */ var _nena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nena.page */ 65549);







let NenaPageModule = class NenaPageModule {
};
NenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nena_routing_module__WEBPACK_IMPORTED_MODULE_0__.NenaPageRoutingModule
        ],
        declarations: [_nena_page__WEBPACK_IMPORTED_MODULE_1__.NenaPage]
    })
], NenaPageModule);



/***/ }),

/***/ 65549:
/*!*******************************************!*\
  !*** ./src/app/mestres/nena/nena.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NenaPage": () => (/* binding */ NenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_nena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nena.page.html */ 77549);
/* harmony import */ var _nena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nena.page.scss */ 47836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let NenaPage = class NenaPage {
    constructor() { }
    ngOnInit() {
    }
};
NenaPage.ctorParameters = () => [];
NenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nena',
        template: _raw_loader_nena_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nena_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NenaPage);



/***/ }),

/***/ 47836:
/*!*********************************************!*\
  !*** ./src/app/mestres/nena/nena.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZW5hLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 77549:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/nena/nena.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Nena\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/nena.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n        SEVERINO ANTÔNIO DE LIMA\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Severino Antônio de Lima nasceu no Cabo, em 1964. É herdeiro e zelador da tradicional produção cerâmica do Cabo de Santo Agostinho. Iniciado na cerâmica pelo mestre Celé, fundador da cerâmica no Mauriti, desde garoto vivenciou a realidade do ofício, suas formas de fazer, dificuldades e encantamentos. Suas peças, utilitárias e decorativas, fazem a interlocução entre a cerâmica tradicional e a linguagem contemporânea e primam pela qualidade na produção e acabamento e valorizam a cerâmica vermelha, característica do município.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_nena_nena_module_ts.js.map