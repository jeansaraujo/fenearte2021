(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_programacao_cozinha_cozinha_module_ts"],{

/***/ 51914:
/*!***************************************************************!*\
  !*** ./src/app/programacao/cozinha/cozinha-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CozinhaPageRoutingModule": () => (/* binding */ CozinhaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _cozinha_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cozinha.page */ 413);




const routes = [
    {
        path: '',
        component: _cozinha_page__WEBPACK_IMPORTED_MODULE_0__.CozinhaPage
    }
];
let CozinhaPageRoutingModule = class CozinhaPageRoutingModule {
};
CozinhaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CozinhaPageRoutingModule);



/***/ }),

/***/ 20537:
/*!*******************************************************!*\
  !*** ./src/app/programacao/cozinha/cozinha.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CozinhaPageModule": () => (/* binding */ CozinhaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _cozinha_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cozinha-routing.module */ 51914);
/* harmony import */ var _cozinha_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cozinha.page */ 413);







let CozinhaPageModule = class CozinhaPageModule {
};
CozinhaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cozinha_routing_module__WEBPACK_IMPORTED_MODULE_0__.CozinhaPageRoutingModule
        ],
        declarations: [_cozinha_page__WEBPACK_IMPORTED_MODULE_1__.CozinhaPage]
    })
], CozinhaPageModule);



/***/ }),

/***/ 413:
/*!*****************************************************!*\
  !*** ./src/app/programacao/cozinha/cozinha.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CozinhaPage": () => (/* binding */ CozinhaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_cozinha_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cozinha.page.html */ 55938);
/* harmony import */ var _cozinha_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cozinha.page.scss */ 16133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let CozinhaPage = class CozinhaPage {
    constructor() { }
    ngOnInit() {
    }
};
CozinhaPage.ctorParameters = () => [];
CozinhaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cozinha',
        template: _raw_loader_cozinha_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cozinha_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CozinhaPage);



/***/ }),

/***/ 16133:
/*!*******************************************************!*\
  !*** ./src/app/programacao/cozinha/cozinha.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("td {\n  font-size: small;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvemluaGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvemluaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 55938:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programacao/cozinha/cozinha.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/programacao\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Programação <sup>Arena Gastronômica</sup>\n      </h1>\n      <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px; width: auto;\">\n        <h2 style=\"text-align: right;\"  style=\"border-bottom: 3px solid gray;\">\n          Cozinha - Aula Show\n        </h2>\n        <table class=\"table table-striped w-100\" >\n          <thead class=\"table-dark text-center\">\n            <tr>\n              <td>Dia</td>\n              <td>Hora</td>\n              <td>Quem</td>\n            </tr>\n          </thead>\n          <tbody class=\"font-weight-light text-center\">\n            <tr>\n              <td>10/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Miau Caldas</td>\n            </tr>\n            <tr>\n              <td>11/dez</td>\n              <td>11:30 às 12:30</td>\n              <td>Heleno Junior</td>\n            </tr>\n            <tr>\n              <td>11/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef Madalena Albuquerque</td>\n            </tr>\n            <tr>\n              <td>12/dez</td>\n              <td>11:30 às 12:30</td>\n              <td>Chef Rapha Vasconcelos</td>\n            </tr>\n            <tr>\n              <td>12/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef Lucia Soares</td>\n            </tr>\n            <tr>\n              <td>13/dez</td>\n              <td>11:30 às 12:30</td>\n              <td>Buffet Pizaa Maker Down</td>\n            </tr>\n            <tr>\n              <td>14/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef Pedro Godoy</td>\n            </tr>\n            <tr>\n              <td>15/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef Yuri Machado</td>\n            </tr>\n            <tr>\n              <td>16/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chefs Yanne e Pedro</td>\n            </tr>\n            <tr>\n              <td>17/dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef Tiago das Chagas</td>\n            </tr>\n            <tr>\n              <td>18dez</td>\n              <td>11:00 às 12:30</td>\n              <td>Chef  Cesar Santos</td>\n            </tr>\n            <tr>\n              <td>18dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Chef  Carmem Virgnia</td>\n            </tr>\n            <tr>\n              <td>19dez</td>\n              <td>11:00 às 12:30</td>\n              <td>Chef  Eudes Cardoso</td>\n            </tr>\n             <tr>\n              <td>19dez</td>\n              <td>14:30 às 15:30</td>\n              <td>Adriana Arregui</td>\n            </tr>\n          </tbody>\n          </table>\n      </div>\n\n\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_programacao_cozinha_cozinha_module_ts.js.map