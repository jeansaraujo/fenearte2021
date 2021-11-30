(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_salao_module_ts"],{

/***/ 79643:
/*!***********************************************!*\
  !*** ./src/app/salao/salao-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaoPageRoutingModule": () => (/* binding */ SalaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _salao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salao.page */ 91244);




const routes = [
    {
        path: '',
        component: _salao_page__WEBPACK_IMPORTED_MODULE_0__.SalaoPage
    },
    {
        path: 'ana',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_ana_ana_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ana/ana.module */ 30294)).then(m => m.AnaPageModule)
    },
    {
        path: 'reciclados',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_reciclados_reciclados_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reciclados/reciclados.module */ 26824)).then(m => m.RecicladosPageModule)
    },
    {
        path: 'religiosos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_religiosos_religiosos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./religiosos/religiosos.module */ 54416)).then(m => m.ReligiososPageModule)
    }
];
let SalaoPageRoutingModule = class SalaoPageRoutingModule {
};
SalaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalaoPageRoutingModule);



/***/ }),

/***/ 56632:
/*!***************************************!*\
  !*** ./src/app/salao/salao.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaoPageModule": () => (/* binding */ SalaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _salao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salao-routing.module */ 79643);
/* harmony import */ var _salao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salao.page */ 91244);







let SalaoPageModule = class SalaoPageModule {
};
SalaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _salao_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalaoPageRoutingModule
        ],
        declarations: [_salao_page__WEBPACK_IMPORTED_MODULE_1__.SalaoPage]
    })
], SalaoPageModule);



/***/ }),

/***/ 91244:
/*!*************************************!*\
  !*** ./src/app/salao/salao.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaoPage": () => (/* binding */ SalaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_salao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./salao.page.html */ 28401);
/* harmony import */ var _salao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salao.page.scss */ 74963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let SalaoPage = class SalaoPage {
    constructor() { }
    ngOnInit() {
    }
};
SalaoPage.ctorParameters = () => [];
SalaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-salao',
        template: _raw_loader_salao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_salao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SalaoPage);



/***/ }),

/***/ 74963:
/*!***************************************!*\
  !*** ./src/app/salao/salao.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ul {\n  margin-top: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nli {\n  text-align: center;\n}\n\nion-item {\n  border: 1px solid gray;\n  font-size: larger;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoic2FsYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIG1hcmdpbi10b3A6IDMwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5saSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 28401:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/salao.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Salões e Galerias\n      </h1>\n      <div class=\"opcoes\">\n        <ul style=\"list-style-type: none;\">\n          <li>\n            <ion-item slot=\"start\" routerLink=\"/salao/ana\">\n              <ion-text  routerLink=\"/salao/ana\">\n                Ana Holanda\n              </ion-text>\n              <ion-badge color=\"media\" routerLink=\"/salao/ana\"> Entre</ion-badge>\n            </ion-item>\n          </li>\n          <li>\n            <ion-item slot=\"start\" routerLink=\"/salao/reciclados\">\n              <ion-text  routerLink=\"/salao/reciclados\">\n                Galeria de Reciclados\n              </ion-text>\n              <ion-badge color=\"media\" routerLink=\"/salao/reciclados\"> Entre </ion-badge>\n            </ion-item>\n          </li>\n          <li>\n            <ion-item slot=\"start\" routerLink=\"/salao/religiosos\">\n              <ion-text  routerLink=\"/salao/religiosos\">\n              Religioso\n              </ion-text>\n              <ion-badge color=\"media\" routerLink=\"/salao/religiosos\"> Entre</ion-badge>\n            </ion-item>\n          </li>\n        </ul>\n      </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_salao_module_ts.js.map