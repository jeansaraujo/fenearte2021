(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_expositores_expositores_module_ts"],{

/***/ 88999:
/*!***********************************************************!*\
  !*** ./src/app/expositores/expositores-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpositoresPageRoutingModule": () => (/* binding */ ExpositoresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _expositores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expositores.page */ 66115);




const routes = [
    {
        path: '',
        component: _expositores_page__WEBPACK_IMPORTED_MODULE_0__.ExpositoresPage
    },
    {
        path: 'individual',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_individual_individual_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./individual/individual.module */ 79867)).then(m => m.IndividualPageModule)
    },
    {
        path: 'pabpe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_pabpe_pabpe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pabpe/pabpe.module */ 73053)).then(m => m.PabpePageModule)
    },
    {
        path: 'pab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_pab_pab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pab/pab.module */ 40561)).then(m => m.PabPageModule)
    },
    {
        path: 'prefeituras',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_prefeituras_prefeituras_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prefeituras/prefeituras.module */ 10122)).then(m => m.PrefeiturasPageModule)
    },
    {
        path: 'associacoes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_associacoes_associacoes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./associacoes/associacoes.module */ 33657)).then(m => m.AssociacoesPageModule)
    },
    {
        path: 'palimentacao',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_palimentacao_palimentacao_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./palimentacao/palimentacao.module */ 74261)).then(m => m.PalimentacaoPageModule)
    },
    {
        path: 'estados',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_estados_estados_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./estados/estados.module */ 33033)).then(m => m.EstadosPageModule)
    },
    {
        path: 'internacional',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_internacional_internacional_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./internacional/internacional.module */ 51284)).then(m => m.InternacionalPageModule)
    },
    {
        path: 'indigenas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_indigenas_indigenas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indigenas/indigenas.module */ 29379)).then(m => m.IndigenasPageModule)
    },
    {
        path: 'rsolidarias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_rsolidarias_rsolidarias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rsolidarias/rsolidarias.module */ 24554)).then(m => m.RsolidariasPageModule)
    },
    {
        path: 'aartesanal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_aartesanal_aartesanal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aartesanal/aartesanal.module */ 65414)).then(m => m.AartesanalPageModule)
    },
    {
        path: 'fbike',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_fbike_fbike_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fbike/fbike.module */ 27324)).then(m => m.FbikePageModule)
    },
    {
        path: 'quiosque',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expositores_quiosque_quiosque_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quiosque/quiosque.module */ 61635)).then(m => m.QuiosquePageModule)
    }
];
let ExpositoresPageRoutingModule = class ExpositoresPageRoutingModule {
};
ExpositoresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExpositoresPageRoutingModule);



/***/ }),

/***/ 92702:
/*!***************************************************!*\
  !*** ./src/app/expositores/expositores.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpositoresPageModule": () => (/* binding */ ExpositoresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _expositores_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expositores-routing.module */ 88999);
/* harmony import */ var _expositores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expositores.page */ 66115);







let ExpositoresPageModule = class ExpositoresPageModule {
};
ExpositoresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _expositores_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpositoresPageRoutingModule
        ],
        declarations: [_expositores_page__WEBPACK_IMPORTED_MODULE_1__.ExpositoresPage]
    })
], ExpositoresPageModule);



/***/ }),

/***/ 66115:
/*!*************************************************!*\
  !*** ./src/app/expositores/expositores.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpositoresPage": () => (/* binding */ ExpositoresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_expositores_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./expositores.page.html */ 75566);
/* harmony import */ var _expositores_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expositores.page.scss */ 27500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ExpositoresPage = class ExpositoresPage {
    constructor() { }
    ngOnInit() {
    }
};
ExpositoresPage.ctorParameters = () => [];
ExpositoresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-expositores',
        template: _raw_loader_expositores_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_expositores_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExpositoresPage);



/***/ }),

/***/ 27500:
/*!***************************************************!*\
  !*** ./src/app/expositores/expositores.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cG9zaXRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDRSw2QkFBQTtBQUdGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6ImV4cG9zaXRvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHAge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMSwgMTMpO1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjMwLCAyMCk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIC5iYWNrLXNwbGFzaCB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gIH1cclxuICAuaW1nLWhlYWRlciB7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 75566:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expositores/expositores.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n     <h1>\r\n      Expositores\r\n      </h1>\r\n      <div class=\"opcoes\">\r\n        <ul type=\"circle\">\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/individual\">\r\n                Individual Pernambuco\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/individual\"> Ver </ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/pabpe\">\r\n                PAB Pernambuco (ESTANDE PAB PE)\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/pabpe\"> Ver </ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/pab\">\r\n                PAB\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/pab\"> Ver </ion-badge>\r\n            </ion-item>\r\n          </li>\r\n           <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/prefeituras\">\r\n                Prefeituras\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/prefeituras\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/associacoes\">\r\n                Associações\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/associacoes\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text >\r\n                Loja Mape\r\n              </ion-text>\r\n              <ion-badge color=\"media\"> Estandes 561 | 562 | 563 </ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/palimentacao\">\r\n               Praça de Alimentacao\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/palimentacao\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/estados\">\r\n               Estados\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/estados\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/internacional\">\r\n                Internacional\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/internacional\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/indigenas\">\r\n                Etnias Indígenas\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/indigenas\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/rsolidarias\">\r\n                Redes Solidárias\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/rsolidarias\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/aartesanal\">\r\n               Alimentação Artesanal\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/aartesanal\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/fbike\">\r\n               Food Bike\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/fbike\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n          <li>\r\n            <ion-item slot=\"start\">\r\n              <ion-text  routerLink=\"/expositores/quiosque\">\r\n               Quiosques\r\n              </ion-text>\r\n              <ion-badge color=\"media\" routerLink=\"/expositores/quiosque\"> Ver</ion-badge>\r\n            </ion-item>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </ion-content>\r\n  <ion-footer>\r\n\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_expositores_module_ts.js.map