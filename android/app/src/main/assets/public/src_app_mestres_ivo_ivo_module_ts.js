(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_ivo_ivo_module_ts"],{

/***/ 95272:
/*!***************************************************!*\
  !*** ./src/app/mestres/ivo/ivo-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IvoPageRoutingModule": () => (/* binding */ IvoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ivo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ivo.page */ 79368);




const routes = [
    {
        path: '',
        component: _ivo_page__WEBPACK_IMPORTED_MODULE_0__.IvoPage
    }
];
let IvoPageRoutingModule = class IvoPageRoutingModule {
};
IvoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IvoPageRoutingModule);



/***/ }),

/***/ 26079:
/*!*******************************************!*\
  !*** ./src/app/mestres/ivo/ivo.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IvoPageModule": () => (/* binding */ IvoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ivo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ivo-routing.module */ 95272);
/* harmony import */ var _ivo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ivo.page */ 79368);







let IvoPageModule = class IvoPageModule {
};
IvoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ivo_routing_module__WEBPACK_IMPORTED_MODULE_0__.IvoPageRoutingModule
        ],
        declarations: [_ivo_page__WEBPACK_IMPORTED_MODULE_1__.IvoPage]
    })
], IvoPageModule);



/***/ }),

/***/ 79368:
/*!*****************************************!*\
  !*** ./src/app/mestres/ivo/ivo.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IvoPage": () => (/* binding */ IvoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_ivo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ivo.page.html */ 84948);
/* harmony import */ var _ivo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ivo.page.scss */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let IvoPage = class IvoPage {
    constructor() { }
    ngOnInit() {
    }
};
IvoPage.ctorParameters = () => [];
IvoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ivo',
        template: _raw_loader_ivo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ivo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IvoPage);



/***/ }),

/***/ 5384:
/*!*******************************************!*\
  !*** ./src/app/mestres/ivo/ivo.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 84948:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/ivo/ivo.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n     Ivo\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/ivo_diodato.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      IVO DIODATO\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n          No contexto da produção artística de Tracunhaém, Ivo se interessou pela produção de peças “diferenciadas”. Explica suas esculturas sem rosto: “A fisionomia está quando você olha, você que dá. Aquilo que é definido não é arte”. Começou a trabalhar aos 10 anos, como ajudante no Ateliê do Mestre Zezinho. Sua função era limpar o lugar, juntando os cacos que ficavam no chão. Desse contato veio à vontade de trabalhar o material. Sua arte, bastante reconhecida, com pés alongados, ganhou inspiração na artista modernista Tarsila do Amaral.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_ivo_ivo_module_ts.js.map