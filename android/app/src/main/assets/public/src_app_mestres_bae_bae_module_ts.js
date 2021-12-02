(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_bae_bae_module_ts"],{

/***/ 27372:
/*!***************************************************!*\
  !*** ./src/app/mestres/bae/bae-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaePageRoutingModule": () => (/* binding */ BaePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _bae_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bae.page */ 53355);




const routes = [
    {
        path: '',
        component: _bae_page__WEBPACK_IMPORTED_MODULE_0__.BaePage
    }
];
let BaePageRoutingModule = class BaePageRoutingModule {
};
BaePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BaePageRoutingModule);



/***/ }),

/***/ 22166:
/*!*******************************************!*\
  !*** ./src/app/mestres/bae/bae.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaePageModule": () => (/* binding */ BaePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _bae_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bae-routing.module */ 27372);
/* harmony import */ var _bae_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bae.page */ 53355);







let BaePageModule = class BaePageModule {
};
BaePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bae_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaePageRoutingModule
        ],
        declarations: [_bae_page__WEBPACK_IMPORTED_MODULE_1__.BaePage]
    })
], BaePageModule);



/***/ }),

/***/ 53355:
/*!*****************************************!*\
  !*** ./src/app/mestres/bae/bae.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaePage": () => (/* binding */ BaePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_bae_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bae.page.html */ 68208);
/* harmony import */ var _bae_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bae.page.scss */ 55855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let BaePage = class BaePage {
    constructor() { }
    ngOnInit() {
    }
};
BaePage.ctorParameters = () => [];
BaePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bae',
        template: _raw_loader_bae_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bae_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BaePage);



/***/ }),

/***/ 55855:
/*!*******************************************!*\
  !*** ./src/app/mestres/bae/bae.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 68208:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/bae/bae.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n    Mano de Baé\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/mano_de_bae.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n         EVILÁSIO LEÃO MACHADO\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n        Natural de Tracunhaém, terra do artesanato em barro, Mano de Baé é filho de Maria Luiz de França, dona de casa e Manoel Leão Machado, o Seu Baé, Mestre artesão conhecido da Zona da Mata Norte, de quem herdou o apelido e o talento. Trabalhar com o pai o inspirou na modelagem de casais abraçados, se beijando, dançando, entre outros. Mas ganhou seu próprio estilo em traços achatados e quadriculados além da diversidade sexual e seres mitológicos marinhos, as famosas sereias.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_bae_bae_module_ts.js.map