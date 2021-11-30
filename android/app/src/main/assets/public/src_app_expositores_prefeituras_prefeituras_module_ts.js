(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_expositores_prefeituras_prefeituras_module_ts"],{

/***/ 95989:
/*!***********************************************************************!*\
  !*** ./src/app/expositores/prefeituras/prefeituras-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefeiturasPageRoutingModule": () => (/* binding */ PrefeiturasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _prefeituras_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefeituras.page */ 53265);




const routes = [
    {
        path: '',
        component: _prefeituras_page__WEBPACK_IMPORTED_MODULE_0__.PrefeiturasPage
    }
];
let PrefeiturasPageRoutingModule = class PrefeiturasPageRoutingModule {
};
PrefeiturasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrefeiturasPageRoutingModule);



/***/ }),

/***/ 10122:
/*!***************************************************************!*\
  !*** ./src/app/expositores/prefeituras/prefeituras.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefeiturasPageModule": () => (/* binding */ PrefeiturasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _prefeituras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefeituras-routing.module */ 95989);
/* harmony import */ var _prefeituras_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefeituras.page */ 53265);







let PrefeiturasPageModule = class PrefeiturasPageModule {
};
PrefeiturasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prefeituras_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrefeiturasPageRoutingModule
        ],
        declarations: [_prefeituras_page__WEBPACK_IMPORTED_MODULE_1__.PrefeiturasPage]
    })
], PrefeiturasPageModule);



/***/ }),

/***/ 53265:
/*!*************************************************************!*\
  !*** ./src/app/expositores/prefeituras/prefeituras.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefeiturasPage": () => (/* binding */ PrefeiturasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_prefeituras_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prefeituras.page.html */ 17583);
/* harmony import */ var _prefeituras_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefeituras.page.scss */ 49453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PrefeiturasPage = class PrefeiturasPage {
    constructor() { }
    ngOnInit() {
    }
};
PrefeiturasPage.ctorParameters = () => [];
PrefeiturasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prefeituras',
        template: _raw_loader_prefeituras_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prefeituras_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrefeiturasPage);



/***/ }),

/***/ 49453:
/*!***************************************************************!*\
  !*** ./src/app/expositores/prefeituras/prefeituras.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlaXR1cmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InByZWZlaXR1cmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMSwgMTMpO1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjMwLCAyMCk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIC5iYWNrLXNwbGFzaCB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxuICAuaW1nLWhlYWRlciB7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 17583:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expositores/prefeituras/prefeituras.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/expositores\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n    <div class=\"opcoes\">\n     <h1>\n      Prefeituras <sup><small>Estandes</small></sup>\n    </h1>\n    <ul style=\"list-style-type:none;\">\n      <li>313 - Estande 313</li>\n      <li>314 - Carpina </li>\n      <li>315 | 316 - Secretaria da Mulher do Recife</li>\n      <li>317 - Gravatá</li>\n      <li>318 - Fernando de Noronha </li>\n      <li>319 - Pombos</li>\n      <li>320 - Arcoverde</li>\n      <li>321 - Lagoa Grande </li>\n      <li>322 - Estande 322</li>\n      <li>323 - Moreno</li>\n      <li>324 - Vitória de Santo Antão </li>\n      <li>325 - Bom Conselho </li>\n      <li>326 - Camocim de São Félix </li>\n      <li>327 - Santa Cruz da Baixa Verde</li>\n      <li>328 - Venturosa</li>\n      <li>329 - Nazaré da Mata</li>\n      <li>330 - Sertânia</li>\n      <li>331 - Macaparana</li>\n      <li>332 | 333 - Tracunhaém</li>\n      <li>334 - Lagoa do Carro</li>\n      <li>335 - Tacaratu </li>\n      <li>336 - Glória do Goitá </li>\n      <li>337 - Jatobá </li>\n      <li>339 - Estande 339 </li>\n      <li>340 - Estande 340 </li>\n      <li>341 - Cortês </li>\n      <li>342 - Poção </li>\n      <li>343 - Estande 343 </li>\n      <li>344 - Itapissuma </li>\n      <li>345 - Estande 345 </li>\n      <li>346 - Tuparetama</li>\n      <li>347 - Tacaimbó </li>\n      <li>348 - Olinda </li>\n      <li>349 - Ipojuca </li>\n      <li>351 - Estande 351</li>\n      <li>352 - Itambé</li>\n      <li>353 - Cabo de Santo Agostinho </li>\n      <li>354 - Paudalho</li>\n      <li>355 - Altinho </li>\n      <li>356 - Feira Nova </li>\n      <li>357 - Jataúba </li>\n      <li>358 - Limoeiro </li>\n      <li>359 - Chã de Alegria </li>\n      <li>360 - Agrestina </li>\n      <li>361 - Araçoiaba </li>\n      <li>362 - Lajedo </li>\n      <li>363 - Estande 363</li>\n      <li>364 - Cupira</li>\n      <li>365 - Goiana </li>\n      <li>366 - Estande 366</li>\n      <li>367 - Jaboatão dos Guararapes </li>\n      <li>368 - Brejo da Madre de Deus </li>\n      <li>369 - Pesqueira </li>\n      <li>370 - Orobó </li>\n      <li>371 - Paulista </li>\n      <li>372 - Bezerros </li>\n      <li>373 - Caruaru </li>\n      <li>374 - Bonito</li>\n      <li>375 - Salgadinho </li>\n      <li>376 - São Lourenço da Mata</li>\n      <li>377 - Afogados da Ingazeira</li>\n      <li>378 - Ilha de Itamaracá </li>\n      <li>381 - São Bento do Una </li>\n      <li>382 - Ibimirim </li>\n      <li>383 - Ibarajuba </li>\n      <li>384 - Estande 384 </li>\n      <li>385 - Timbaúba </li>\n      <li>386 - Passira </li>\n      <li>387 - Estande 387 </li>\n      <li>388 - Igarassu</li>\n    </ul>\n    </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_prefeituras_prefeituras_module_ts.js.map