(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_josa_josa_module_ts"],{

/***/ 274:
/*!*****************************************************!*\
  !*** ./src/app/mestres/josa/josa-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPageRoutingModule": () => (/* binding */ JosaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _josa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./josa.page */ 36614);




const routes = [
    {
        path: '',
        component: _josa_page__WEBPACK_IMPORTED_MODULE_0__.JosaPage
    }
];
let JosaPageRoutingModule = class JosaPageRoutingModule {
};
JosaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JosaPageRoutingModule);



/***/ }),

/***/ 9489:
/*!*********************************************!*\
  !*** ./src/app/mestres/josa/josa.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPageModule": () => (/* binding */ JosaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _josa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./josa-routing.module */ 274);
/* harmony import */ var _josa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./josa.page */ 36614);







let JosaPageModule = class JosaPageModule {
};
JosaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _josa_routing_module__WEBPACK_IMPORTED_MODULE_0__.JosaPageRoutingModule
        ],
        declarations: [_josa_page__WEBPACK_IMPORTED_MODULE_1__.JosaPage]
    })
], JosaPageModule);



/***/ }),

/***/ 36614:
/*!*******************************************!*\
  !*** ./src/app/mestres/josa/josa.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPage": () => (/* binding */ JosaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_josa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./josa.page.html */ 10830);
/* harmony import */ var _josa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./josa.page.scss */ 80159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let JosaPage = class JosaPage {
    constructor() { }
    ngOnInit() {
    }
};
JosaPage.ctorParameters = () => [];
JosaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-josa',
        template: _raw_loader_josa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_josa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JosaPage);



/***/ }),

/***/ 80159:
/*!*********************************************!*\
  !*** ./src/app/mestres/josa/josa.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3NhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 10830:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/josa/josa.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Josa\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/josa.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      JOSEILSON DE PAULO LIRA\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Joseilson de Paulo Lira entrou para o universo artístico aos dezoito, pintando as paisagens de Olinda no Alto da Sé. Hoje, como escultor, mantém em seu ateliê a produção de esculturas de madeira policromadas e naturais, representando a fauna diversificada e a cultura pernambucana. Araras, corujas, peixes, girafas e os bonecos gigantes do carnaval, diferenciais no trabalho do Mestre Josa, estão espalhados em várias partes do mundo.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_josa_josa_module_ts.js.map