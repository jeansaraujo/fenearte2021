(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_programacao_programacao_module_ts"],{

/***/ 13726:
/*!***********************************************************!*\
  !*** ./src/app/programacao/programacao-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacaoPageRoutingModule": () => (/* binding */ ProgramacaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _programacao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programacao.page */ 34573);




const routes = [
    {
        path: '',
        component: _programacao_page__WEBPACK_IMPORTED_MODULE_0__.ProgramacaoPage
    },
    {
        path: 'passarela',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_programacao_passarela_passarela_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./passarela/passarela.module */ 44793)).then(m => m.PassarelaPageModule)
    },
    {
        path: 'oficinas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_programacao_oficinas_oficinas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./oficinas/oficinas.module */ 55111)).then(m => m.OficinasPageModule)
    },
    {
        path: 'cozinha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_programacao_cozinha_cozinha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cozinha/cozinha.module */ 20537)).then(m => m.CozinhaPageModule)
    }
];
let ProgramacaoPageRoutingModule = class ProgramacaoPageRoutingModule {
};
ProgramacaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProgramacaoPageRoutingModule);



/***/ }),

/***/ 63112:
/*!***************************************************!*\
  !*** ./src/app/programacao/programacao.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacaoPageModule": () => (/* binding */ ProgramacaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _programacao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programacao-routing.module */ 13726);
/* harmony import */ var _programacao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programacao.page */ 34573);







let ProgramacaoPageModule = class ProgramacaoPageModule {
};
ProgramacaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _programacao_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgramacaoPageRoutingModule
        ],
        declarations: [_programacao_page__WEBPACK_IMPORTED_MODULE_1__.ProgramacaoPage]
    })
], ProgramacaoPageModule);



/***/ }),

/***/ 34573:
/*!*************************************************!*\
  !*** ./src/app/programacao/programacao.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacaoPage": () => (/* binding */ ProgramacaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_programacao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./programacao.page.html */ 36579);
/* harmony import */ var _programacao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programacao.page.scss */ 22161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ProgramacaoPage = class ProgramacaoPage {
    constructor() { }
    ngOnInit() {
    }
};
ProgramacaoPage.ctorParameters = () => [];
ProgramacaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-programacao',
        template: _raw_loader_programacao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_programacao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgramacaoPage);



/***/ }),

/***/ 22161:
/*!***************************************************!*\
  !*** ./src/app/programacao/programacao.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-top: 15px;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1hY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwcm9ncmFtYWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 36579:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programacao/programacao.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Programação\n      </h1>\n      <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px; width: auto;\">\n        <ion-button color=\"dark\" routerLink=\"passarela\">\n          Passarela\n        </ion-button>\n        <ion-button color=\"dark\"  routerLink=\"oficinas\">\n          Oficinas\n        </ion-button>\n        <ion-button color=\"dark\" routerLink=\"cozinha\">\n         Cozinha\n        </ion-button>\n      </div>\n\n\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_programacao_programacao_module_ts.js.map