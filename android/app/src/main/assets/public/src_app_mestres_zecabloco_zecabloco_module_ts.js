(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_zecabloco_zecabloco_module_ts"],{

/***/ 74517:
/*!***************************************************************!*\
  !*** ./src/app/mestres/zecabloco/zecabloco-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZecablocoPageRoutingModule": () => (/* binding */ ZecablocoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _zecabloco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zecabloco.page */ 23453);




const routes = [
    {
        path: '',
        component: _zecabloco_page__WEBPACK_IMPORTED_MODULE_0__.ZecablocoPage
    }
];
let ZecablocoPageRoutingModule = class ZecablocoPageRoutingModule {
};
ZecablocoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ZecablocoPageRoutingModule);



/***/ }),

/***/ 63157:
/*!*******************************************************!*\
  !*** ./src/app/mestres/zecabloco/zecabloco.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZecablocoPageModule": () => (/* binding */ ZecablocoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _zecabloco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zecabloco-routing.module */ 74517);
/* harmony import */ var _zecabloco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zecabloco.page */ 23453);







let ZecablocoPageModule = class ZecablocoPageModule {
};
ZecablocoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _zecabloco_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZecablocoPageRoutingModule
        ],
        declarations: [_zecabloco_page__WEBPACK_IMPORTED_MODULE_1__.ZecablocoPage]
    })
], ZecablocoPageModule);



/***/ }),

/***/ 23453:
/*!*****************************************************!*\
  !*** ./src/app/mestres/zecabloco/zecabloco.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZecablocoPage": () => (/* binding */ ZecablocoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_zecabloco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./zecabloco.page.html */ 67499);
/* harmony import */ var _zecabloco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zecabloco.page.scss */ 17856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ZecablocoPage = class ZecablocoPage {
    constructor() { }
    ngOnInit() {
    }
};
ZecablocoPage.ctorParameters = () => [];
ZecablocoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-zecabloco',
        template: _raw_loader_zecabloco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_zecabloco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ZecablocoPage);



/***/ }),

/***/ 17856:
/*!*******************************************************!*\
  !*** ./src/app/mestres/zecabloco/zecabloco.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6ZWNhYmxvY28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 67499:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/zecabloco/zecabloco.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Família Zé do Cabloco\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/familia_ze_caboclo.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      Família Zé Cabloco\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n        Severino Vitalino se dedica a dar continuidade à arte figurativa que projetou seu pai, o Mestre Vitalino, nascido Vitalino Pereira da silva. Um dos maiores artesãos do Brasil. Ele é um dos quatro filhos que, junto aos netos e outros familiares, dedica-se a levar o trabalho do Mestre de Caruaru para o Mundo. É comum encontrar Seu Severino sentado no chão da sala da casa que pertencia ao seu pai, hoje Museu Mestre Vitalino, com as mãos no barro. Criando e encantando turistas de várias nacionalidades.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_zecabloco_zecabloco_module_ts.js.map