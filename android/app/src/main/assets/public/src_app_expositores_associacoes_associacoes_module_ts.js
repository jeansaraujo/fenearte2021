(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_expositores_associacoes_associacoes_module_ts"],{

/***/ 72825:
/*!***********************************************************************!*\
  !*** ./src/app/expositores/associacoes/associacoes-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociacoesPageRoutingModule": () => (/* binding */ AssociacoesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _associacoes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associacoes.page */ 35890);




const routes = [
    {
        path: '',
        component: _associacoes_page__WEBPACK_IMPORTED_MODULE_0__.AssociacoesPage
    }
];
let AssociacoesPageRoutingModule = class AssociacoesPageRoutingModule {
};
AssociacoesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssociacoesPageRoutingModule);



/***/ }),

/***/ 33657:
/*!***************************************************************!*\
  !*** ./src/app/expositores/associacoes/associacoes.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociacoesPageModule": () => (/* binding */ AssociacoesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _associacoes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./associacoes-routing.module */ 72825);
/* harmony import */ var _associacoes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associacoes.page */ 35890);







let AssociacoesPageModule = class AssociacoesPageModule {
};
AssociacoesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _associacoes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssociacoesPageRoutingModule
        ],
        declarations: [_associacoes_page__WEBPACK_IMPORTED_MODULE_1__.AssociacoesPage]
    })
], AssociacoesPageModule);



/***/ }),

/***/ 35890:
/*!*************************************************************!*\
  !*** ./src/app/expositores/associacoes/associacoes.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssociacoesPage": () => (/* binding */ AssociacoesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_associacoes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./associacoes.page.html */ 94446);
/* harmony import */ var _associacoes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associacoes.page.scss */ 77120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AssociacoesPage = class AssociacoesPage {
    constructor() { }
    ngOnInit() {
    }
};
AssociacoesPage.ctorParameters = () => [];
AssociacoesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-associacoes',
        template: _raw_loader_associacoes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_associacoes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssociacoesPage);



/***/ }),

/***/ 77120:
/*!***************************************************************!*\
  !*** ./src/app/expositores/associacoes/associacoes.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWFjb2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6ImFzc29jaWFjb2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMSwgMTMpO1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjMwLCAyMCk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIC5iYWNrLXNwbGFzaCB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxuICAuaW1nLWhlYWRlciB7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 94446:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expositores/associacoes/associacoes.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/expositores\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n    <div class=\"opcoes\">\n     <h1>\n      Associações <sup><small>Estandes</small></sup>\n    </h1>\n    <ul>\n      <li>379 - ASSOCIAÇÃO DOS ARTESÃOS DE BEZERROS</li>\n      <li>380 - ASSOCIAÇÃO DAS MULHERES AMIGAS ARTESÃS (AMAA)</li>\n      <li>389 - ASSOCIAÇÃO CAFE COM ARTE – PETROLANDIA</li>\n      <li>390- ANA BORDADOS</li>\n      <li>391-ASSOCIAÇÃO DE MULHERES DE SANTANA DE CAMARAGIBE</li>\n      <li>392 -ASSOCIAÇÃO DOS TRABALHADORES RURAIS DO ASSENTAMENTO</li>\n      <li>393 -ASSOCIAÇÃO DOS ARTESÕES E ARTESÃS DE NAZARÉ DA MATA-PE</li>\n      <li>395- ASSOCIAÇÃO ARTES CURADO / REDE SOLAR</li>\n      <li>396 - ARTE DE SERTANIA</li>\n      <li>397 - ASSOCIAÇÃO DOS ARTESÃO ESCULTORES DE BREJO DA MADRE DE DEUS</li>\n      <li>398 -MODA MANGUE</li>\n      <li>399 - ASAS DE SÃO JOSÉ DA COROA GRANDE</li>\n      <li>400 -ASSOCIAÇÃO DOS ARTESÃOS DE CAMARAGIBE – CAMARARTE</li>\n      <li>401 – ASSOCIAPE</li>\n      <li>402 -ASSOCIAÇÃO DAS MULHERES DE TRACUNHAEM</li>\n      <li>403 -ASTALC- ASSOC. DAS TAPECEIRAS DE LAGOA DO CARRO</li>\n      <li>404 -AMAM – MACAPARANA</li>\n      <li>405 -GRAPA-PE</li>\n      <li>406 - CLUBE DE MÃES GERALDA FARIAS</li>\n      <li>407 - COOPERTEXTIL CARAIBEIRAS</li>\n      <li>408 - PROJETO MINHA CIDADE MINHA IMAGEM – ASSUVAM</li>\n      <li>409 - Estande 409</li>\n      <li>410 - FUNDAÇÃO MIGUEL MENDONÇA</li>\n      <li>411 -GOIANA-AUAG</li>\n      <li>412 - STR- SALGADINHO-PE</li>\n      <li>413 - ARIA SOCIAL - CASA DE MARIA</li>\n      <li>414 – SINDARPE</li>\n      <li>415 - ASSOCIAÇÃO DOS ARTESÃOS DO VALE DO CAPIBARIBE</li>\n      <li>416 - TARECO E MARIOLA</li>\n      <li>417 - ASSOCIAÇÃO DOS ARTESÃOS DE GRAVATÁ</li>\n      <li>418 -RENDEIRAS DA GRAÇA</li>\n      <li>419 - CASA DA MULHER DO NORDESTE</li>\n      <li>420 - ARTECUPIRA</li>\n      <li>422 -  PORTO SOCIAL</li>\n      <li>423 - MULHERES ARTESÃS DA VILA CRUANGI</li>\n      <li>424 - Estande 424 </li>\n      <li>425 - Estande 425</li>\n      <li>426 - Estande 426</li>\n      <li>427 - Estande 427</li>\n      <li>428 - ABS SURUBIM</li>\n      <li>429 - JOSIANE BORDADOS</li>\n      <li>430 - REDARTESAN – PE</li>\n      <li>431 - FACARPE - FEDERAÇÃO ARTESÃOS</li>\n    </ul>\n    </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_associacoes_associacoes_module_ts.js.map