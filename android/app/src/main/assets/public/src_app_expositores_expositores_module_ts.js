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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_expositores_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./expositores.page.html */ 75566);
/* harmony import */ var _expositores_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expositores.page.scss */ 27500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 38544);





let ExpositoresPage = class ExpositoresPage {
    constructor(iab) {
        this.iab = iab;
        this.optBrowser = {
            location: 'no',
            hidden: 'no',
            zoom: 'yes',
            hideurlbar: 'yes',
            fullscreen: 'yes',
        };
    }
    ngOnInit() {
    }
    goMapa() {
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html', '_self', this.optBrowser);
    }
};
ExpositoresPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
ExpositoresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  padding: 1em;\n  text-align: justify;\n}\n\nul {\n  font-style: italic;\n}\n\n.col-menu {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cG9zaXRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR0YiLCJmaWxlIjoiZXhwb3NpdG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxudWwge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uY29sLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>\r\n          Expositores\r\n          </h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justity-items-center\" style=\"margin-top: 20px;\">\r\n        <ion-col size=\"12\" class=\"col-menu\" style=\"background-color: white; border-radius: 15px; border:2px solid black;\">\r\n            <img class=\"img-menu\" src=\"assets/imgs/menu/btn-ache-expositor.svg\"  style=\"margin-bottom: 10px; margin-top:10px;\" (click)=\"goMapa()\">\r\n            <p class=\"txt-menu\" (click)=\"goMapa()\" style=\"text-align: center; font-size: 1em; margin-bottom: 0px;; \">ACHE O EXPOSITOR</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"opcoes\">\r\n            <ul type=\"circle\">\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/individual\">\r\n                    Individual Pernambuco\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/individual\"> Ver </ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/pabpe\">\r\n                    PAB Pernambuco (ESTANDE PAB PE)\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/pabpe\"> Ver </ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/pab\">\r\n                    PAB\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/pab\"> Ver </ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/prefeituras\">\r\n                    Prefeituras\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/prefeituras\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/associacoes\">\r\n                    Associações\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/associacoes\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text >\r\n                    Loja Mape\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\"> Estandes 561 | 562 | 563 </ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/palimentacao\">\r\n                  Praça de Alimentacao\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/palimentacao\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/estados\">\r\n                  Estados\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/estados\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/internacional\">\r\n                    Internacional\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/internacional\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/indigenas\">\r\n                    Etnias Indígenas\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/indigenas\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/rsolidarias\">\r\n                    Redes Solidárias\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/rsolidarias\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/aartesanal\">\r\n                  Alimentação Artesanal\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/aartesanal\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/fbike\">\r\n                  Food Bike\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/fbike\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n              <li>\r\n                <ion-item slot=\"start\">\r\n                  <ion-text  routerLink=\"/expositores/quiosque\">\r\n                  Quiosques\r\n                  </ion-text>\r\n                  <ion-badge color=\"media\" routerLink=\"/expositores/quiosque\"> Ver</ion-badge>\r\n                </ion-item>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-grid>\r\n  </ion-content>\r\n  <ion-footer>\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_expositores_expositores_module_ts.js.map