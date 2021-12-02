(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_janete_janete_module_ts"],{

/***/ 77810:
/*!*************************************************!*\
  !*** ./src/app/janete/janete-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JanetePageRoutingModule": () => (/* binding */ JanetePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _janete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./janete.page */ 96456);




const routes = [
    {
        path: '',
        component: _janete_page__WEBPACK_IMPORTED_MODULE_0__.JanetePage
    }
];
let JanetePageRoutingModule = class JanetePageRoutingModule {
};
JanetePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JanetePageRoutingModule);



/***/ }),

/***/ 45254:
/*!*****************************************!*\
  !*** ./src/app/janete/janete.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JanetePageModule": () => (/* binding */ JanetePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _janete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./janete-routing.module */ 77810);
/* harmony import */ var _janete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./janete.page */ 96456);







let JanetePageModule = class JanetePageModule {
};
JanetePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _janete_routing_module__WEBPACK_IMPORTED_MODULE_0__.JanetePageRoutingModule
        ],
        declarations: [_janete_page__WEBPACK_IMPORTED_MODULE_1__.JanetePage]
    })
], JanetePageModule);



/***/ }),

/***/ 96456:
/*!***************************************!*\
  !*** ./src/app/janete/janete.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JanetePage": () => (/* binding */ JanetePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_janete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./janete.page.html */ 45688);
/* harmony import */ var _janete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./janete.page.scss */ 47260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let JanetePage = class JanetePage {
    constructor() { }
    ngOnInit() {
    }
};
JanetePage.ctorParameters = () => [];
JanetePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-janete',
        template: _raw_loader_janete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_janete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JanetePage);



/***/ }),

/***/ 47260:
/*!*****************************************!*\
  !*** ./src/app/janete/janete.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYW5ldGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 45688:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/janete/janete.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n     <h1>\r\n      Janete Costa\r\n     </h1>\r\n\r\n     <p>\r\n      Celebrando a união entre o artesanato e o design, o espaço Janete Costa traz ambientes contemporâneos desenvolvidos para apresentar aos visitantes as diversas possibilidades de como inserir peças artesanais na decoração. No espaço de X m², produzido pelas arquitetas Bete Paes e Roberta Borsói, é possível conhecer e comprar peças de diversos artesãos de todo o País.\r\n     </p>\r\n     <p>\r\n      Além disso, é nesse espaço que também acontecem bate-papos com grandes nomes da arquitetura e da arte.\r\n     </p>\r\n     <p>\r\n     Durante a edição deste ano, os bate-papos serão online.\r\n     </p>\r\n     <p>\r\n     Eles podem ser assistidos no nosso site www.fenearte.pe.gov.br\r\n     </p>\r\n    <dl style=\"margin: 15px;\">\r\n      <dt>Por Nina Sargaço</dt>\r\n      <dd>Origem das rendas do Nordeste e a importância de sua conservação </dd>\r\n      <dt>Por Regina Galvão</dt>\r\n      <dd> Design X Artesanato</dd>\r\n    </dl>\r\n  </ion-content>\r\n  <ion-footer>\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_janete_janete_module_ts.js.map