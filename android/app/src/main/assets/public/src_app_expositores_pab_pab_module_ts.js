(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_expositores_pab_pab_module_ts"],{

/***/ 24855:
/*!*******************************************************!*\
  !*** ./src/app/expositores/pab/pab-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabPageRoutingModule": () => (/* binding */ PabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _pab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pab.page */ 71362);




const routes = [
    {
        path: '',
        component: _pab_page__WEBPACK_IMPORTED_MODULE_0__.PabPage
    }
];
let PabPageRoutingModule = class PabPageRoutingModule {
};
PabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PabPageRoutingModule);



/***/ }),

/***/ 40561:
/*!***********************************************!*\
  !*** ./src/app/expositores/pab/pab.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabPageModule": () => (/* binding */ PabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _pab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pab-routing.module */ 24855);
/* harmony import */ var _pab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pab.page */ 71362);







let PabPageModule = class PabPageModule {
};
PabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pab_routing_module__WEBPACK_IMPORTED_MODULE_0__.PabPageRoutingModule
        ],
        declarations: [_pab_page__WEBPACK_IMPORTED_MODULE_1__.PabPage]
    })
], PabPageModule);



/***/ }),

/***/ 71362:
/*!*********************************************!*\
  !*** ./src/app/expositores/pab/pab.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabPage": () => (/* binding */ PabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_pab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pab.page.html */ 84045);
/* harmony import */ var _pab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pab.page.scss */ 27930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PabPage = class PabPage {
    constructor() { }
    ngOnInit() {
    }
};
PabPage.ctorParameters = () => [];
PabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pab',
        template: _raw_loader_pab_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pab_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PabPage);



/***/ }),

/***/ 27930:
/*!***********************************************!*\
  !*** ./src/app/expositores/pab/pab.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 84045:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expositores/pab/pab.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/expositores\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n    <div class=\"opcoes\">\n     <h1>\n      PAB\n    </h1>\n    <ul>\n      <li>Acre </li>\n      <li>Alagoas</li>\n      <li>Amapá</li>\n      <li>Amazonas</li>\n      <li>Bahia</li>\n      <li>Ceará</li>\n      <li>Espírito Santo</li>\n      <li>Goiás</li>\n      <li>Maranhão</li>\n      <li>Mato Grosso</li>\n      <li>Mato Grosso do Sul</li>\n      <li>Minas Gerais</li>\n      <li>Pará</li>\n      <li>Paraíba</li>\n      <li>Paraná</li>\n      <li>Pernambuco</li>\n      <li>Piauí</li>\n      <li>Rio de Janeiro</li>\n      <li>Rio Grande do Norte</li>\n      <li>Rio Grande do Sul</li>\n      <li>Rondônia</li>\n      <li>Santa Catarina</li>\n      <li>São Paulo</li>\n      <li>Sergipe</li>\n      <li>Tocantins</li>\n      <li>Distrito Federal</li>\n    </ul>\n    </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_pab_pab_module_ts.js.map