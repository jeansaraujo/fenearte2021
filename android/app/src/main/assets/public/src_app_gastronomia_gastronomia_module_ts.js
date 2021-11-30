(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_gastronomia_gastronomia_module_ts"],{

/***/ 94085:
/*!***********************************************************!*\
  !*** ./src/app/gastronomia/gastronomia-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GastronomiaPageRoutingModule": () => (/* binding */ GastronomiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _gastronomia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastronomia.page */ 79050);




const routes = [
    {
        path: '',
        component: _gastronomia_page__WEBPACK_IMPORTED_MODULE_0__.GastronomiaPage
    },
    {
        path: 'palimentacao',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_palimentacao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./palimentacao/palimentacao.module */ 72720)).then(m => m.PalimentacaoPageModule)
    },
    {
        path: 'cfenearte',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_cfenearte_cfenearte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cfenearte/cfenearte.module */ 96583)).then(m => m.CfeneartePageModule)
    }
];
let GastronomiaPageRoutingModule = class GastronomiaPageRoutingModule {
};
GastronomiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GastronomiaPageRoutingModule);



/***/ }),

/***/ 68518:
/*!***************************************************!*\
  !*** ./src/app/gastronomia/gastronomia.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GastronomiaPageModule": () => (/* binding */ GastronomiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _gastronomia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastronomia-routing.module */ 94085);
/* harmony import */ var _gastronomia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gastronomia.page */ 79050);







let GastronomiaPageModule = class GastronomiaPageModule {
};
GastronomiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gastronomia_routing_module__WEBPACK_IMPORTED_MODULE_0__.GastronomiaPageRoutingModule
        ],
        declarations: [_gastronomia_page__WEBPACK_IMPORTED_MODULE_1__.GastronomiaPage]
    })
], GastronomiaPageModule);



/***/ }),

/***/ 79050:
/*!*************************************************!*\
  !*** ./src/app/gastronomia/gastronomia.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GastronomiaPage": () => (/* binding */ GastronomiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_gastronomia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gastronomia.page.html */ 45584);
/* harmony import */ var _gastronomia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gastronomia.page.scss */ 88846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let GastronomiaPage = class GastronomiaPage {
    constructor() { }
    ngOnInit() {
    }
};
GastronomiaPage.ctorParameters = () => [];
GastronomiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gastronomia',
        template: _raw_loader_gastronomia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gastronomia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GastronomiaPage);



/***/ }),

/***/ 88846:
/*!***************************************************!*\
  !*** ./src/app/gastronomia/gastronomia.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYXN0cm9ub21pYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 45584:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gastronomia/gastronomia.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Gastronomia\n      </h1>\n      <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px; width: auto;\">\n              <ion-button color=\"dark\" routerLink=\"palimentacao\">\n                Praça de Alimentação\n              </ion-button>\n              <ion-button color=\"dark\"  routerLink=\"cfenearte\">\n                Cozinha Fenearte\n              </ion-button>\n            </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_gastronomia_gastronomia_module_ts.js.map