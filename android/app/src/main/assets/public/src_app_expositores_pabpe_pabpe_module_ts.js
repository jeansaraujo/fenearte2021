(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_expositores_pabpe_pabpe_module_ts"],{

/***/ 29325:
/*!***********************************************************!*\
  !*** ./src/app/expositores/pabpe/pabpe-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabpePageRoutingModule": () => (/* binding */ PabpePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _pabpe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pabpe.page */ 19339);




const routes = [
    {
        path: '',
        component: _pabpe_page__WEBPACK_IMPORTED_MODULE_0__.PabpePage
    }
];
let PabpePageRoutingModule = class PabpePageRoutingModule {
};
PabpePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PabpePageRoutingModule);



/***/ }),

/***/ 73053:
/*!***************************************************!*\
  !*** ./src/app/expositores/pabpe/pabpe.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabpePageModule": () => (/* binding */ PabpePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _pabpe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pabpe-routing.module */ 29325);
/* harmony import */ var _pabpe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pabpe.page */ 19339);







let PabpePageModule = class PabpePageModule {
};
PabpePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pabpe_routing_module__WEBPACK_IMPORTED_MODULE_0__.PabpePageRoutingModule
        ],
        declarations: [_pabpe_page__WEBPACK_IMPORTED_MODULE_1__.PabpePage]
    })
], PabpePageModule);



/***/ }),

/***/ 19339:
/*!*************************************************!*\
  !*** ./src/app/expositores/pabpe/pabpe.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PabpePage": () => (/* binding */ PabpePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_pabpe_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pabpe.page.html */ 40048);
/* harmony import */ var _pabpe_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pabpe.page.scss */ 19924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PabpePage = class PabpePage {
    constructor() { }
    ngOnInit() {
    }
};
PabpePage.ctorParameters = () => [];
PabpePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pabpe',
        template: _raw_loader_pabpe_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pabpe_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PabpePage);



/***/ }),

/***/ 19924:
/*!***************************************************!*\
  !*** ./src/app/expositores/pabpe/pabpe.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: auto;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhYnBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InBhYnBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMSwgMTMpO1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjMwLCAyMCk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIC5iYWNrLXNwbGFzaCB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxuICAuaW1nLWhlYWRlciB7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 40048:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expositores/pabpe/pabpe.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/expositores\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n    <div class=\"opcoes\">\n     <h1>\n      PAB Pernambuco\n      <sup ><small>(ESTANDE)</small></sup>\n      </h1>\n      <ul>\n        <li>Albino Junior Esculturas no palito de fosforo </li>\n        <li>Ateliê Arte Manufatura 56</li>\n        <li>Célia Rendas - Poção</li>\n        <li>Almir Cultura</li>\n        <li>Ana Falcão</li>\n        <li>Gzaicaner Ceramista</li>\n        <li>Andréa Maria da Silva</li>\n        <li>Antonio Lisboa</li>\n        <li>Bárbara Karennyne - Amigurumi Design</li>\n        <li>CinViana</li>\n        <li>Mestre Fábio Ramos</li>\n        <li>Ivo das Talhas</li>\n        <li>Mestre Edilson Xilogravuras</li>\n        <li>Emerson da Silva Melo</li>\n        <li>Laila Multiart</li>\n        <li>Tuz Terracota - Alto do Moura</li>\n        <li>Maria de Fátima  - Aguas Belas</li>\n        <li>Três Marias</li>\n        <li>Hilda Bordados</li>\n        <li>Maria José  - Pesqueira</li>\n        <li>Henrique Freitas</li>\n        <li>Luiz Carlos Ferreira da Silva</li>\n        <li>Miniencanto Trummer</li>\n        <li>Marcelo&Artes</li>\n        <li>Carmelita Rendas - Alagoinha</li>\n        <li>Maria de Lourdes de Farias Pereira</li>\n        <li>Mão que se divertem</li>\n        <li>Marines Bonequeira</li>\n        <li>Mauro Artesão</li>\n        <li>Paulo Todahora</li>\n        <li>Rabecas Valério Bizunga</li>\n        <li>Mestre Wandecok</li>\n      </ul>\n    </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_pabpe_pabpe_module_ts.js.map