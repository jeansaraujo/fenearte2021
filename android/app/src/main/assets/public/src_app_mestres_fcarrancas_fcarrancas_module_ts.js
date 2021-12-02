(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_fcarrancas_fcarrancas_module_ts"],{

/***/ 96672:
/*!*****************************************************************!*\
  !*** ./src/app/mestres/fcarrancas/fcarrancas-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcarrancasPageRoutingModule": () => (/* binding */ FcarrancasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _fcarrancas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcarrancas.page */ 5225);




const routes = [
    {
        path: '',
        component: _fcarrancas_page__WEBPACK_IMPORTED_MODULE_0__.FcarrancasPage
    }
];
let FcarrancasPageRoutingModule = class FcarrancasPageRoutingModule {
};
FcarrancasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FcarrancasPageRoutingModule);



/***/ }),

/***/ 44355:
/*!*********************************************************!*\
  !*** ./src/app/mestres/fcarrancas/fcarrancas.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcarrancasPageModule": () => (/* binding */ FcarrancasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _fcarrancas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcarrancas-routing.module */ 96672);
/* harmony import */ var _fcarrancas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcarrancas.page */ 5225);







let FcarrancasPageModule = class FcarrancasPageModule {
};
FcarrancasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fcarrancas_routing_module__WEBPACK_IMPORTED_MODULE_0__.FcarrancasPageRoutingModule
        ],
        declarations: [_fcarrancas_page__WEBPACK_IMPORTED_MODULE_1__.FcarrancasPage]
    })
], FcarrancasPageModule);



/***/ }),

/***/ 5225:
/*!*******************************************************!*\
  !*** ./src/app/mestres/fcarrancas/fcarrancas.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FcarrancasPage": () => (/* binding */ FcarrancasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_fcarrancas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fcarrancas.page.html */ 33752);
/* harmony import */ var _fcarrancas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcarrancas.page.scss */ 91619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let FcarrancasPage = class FcarrancasPage {
    constructor() { }
    ngOnInit() {
    }
};
FcarrancasPage.ctorParameters = () => [];
FcarrancasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fcarrancas',
        template: _raw_loader_fcarrancas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fcarrancas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FcarrancasPage);



/***/ }),

/***/ 91619:
/*!*********************************************************!*\
  !*** ./src/app/mestres/fcarrancas/fcarrancas.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmY2FycmFuY2FzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 33752:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/fcarrancas/fcarrancas.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n     Família Ana das Carrancas\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/filha_de_ana_das_carrancas.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      Família Ana das Carrancas\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n        Ana Leopoldina Santos nasceu em 1923 e aos 07 anos de idade fazia panelas para ajudar no sustento da família. Mais velha, ao ver os barcos às margens do Rio São Francisco, teve a inspiração de fazer as carrancas com o barro do próprio rio. Ana faleceu em 2008 na cidade de Petrolina, que adotou como lar. Hoje, suas filhas maria Aparecida e ângela Aparecida de Lima conservam a tradição. E as peças com esse legado continuam sendo bastante procuradas.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_fcarrancas_fcarrancas_module_ts.js.map