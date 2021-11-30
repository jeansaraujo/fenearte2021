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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLFVBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0UsNkJBQUE7QUFHRjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFJSjs7QUFEQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFJRiIsImZpbGUiOiJiYWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAxLCAxMyk7XHJcbiAgZm9udC1mYW1pbHk6IFNwYWNlR3JvdGVzaztcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMzAsIDIwKTtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgLmJhY2stc3BsYXNoIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgfVxyXG4gIC5pbWctaGVhZGVyIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxuICAudHh0LWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */");

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