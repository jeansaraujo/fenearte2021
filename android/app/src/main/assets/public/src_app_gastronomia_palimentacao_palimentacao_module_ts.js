(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_gastronomia_palimentacao_palimentacao_module_ts"],{

/***/ 13780:
/*!*************************************************************************!*\
  !*** ./src/app/gastronomia/palimentacao/palimentacao-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalimentacaoPageRoutingModule": () => (/* binding */ PalimentacaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _palimentacao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palimentacao.page */ 94030);




const routes = [
    {
        path: '',
        component: _palimentacao_page__WEBPACK_IMPORTED_MODULE_0__.PalimentacaoPage
    },
    {
        path: 'dararipe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_dararipe_dararipe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dararipe/dararipe.module */ 90091)).then(m => m.DararipePageModule)
    },
    {
        path: 'mburger',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_mburger_mburger_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mburger/mburger.module */ 79731)).then(m => m.MburgerPageModule)
    },
    {
        path: 'ebarnabe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_ebarnabe_ebarnabe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ebarnabe/ebarnabe.module */ 84784)).then(m => m.EbarnabePageModule)
    },
    {
        path: 'frisabor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_frisabor_frisabor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frisabor/frisabor.module */ 87811)).then(m => m.FrisaborPageModule)
    },
    {
        path: 'frutetto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_frutetto_frutetto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frutetto/frutetto.module */ 69044)).then(m => m.FrutettoPageModule)
    },
    {
        path: 'mdelas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_mdelas_mdelas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mdelas/mdelas.module */ 74268)).then(m => m.MdelasPageModule)
    },
    {
        path: 'bobdog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_bobdog_bobdog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bobdog/bobdog.module */ 14114)).then(m => m.BobdogPageModule)
    },
    {
        path: 'abahia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_abahia_abahia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./abahia/abahia.module */ 19848)).then(m => m.AbahiaPageModule)
    },
    {
        path: 'quintal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_quintal_quintal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quintal/quintal.module */ 3624)).then(m => m.QuintalPageModule)
    },
    {
        path: 'cpe',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_cpe_cpe_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cpe/cpe.module */ 67498)).then(m => m.CpePageModule)
    },
    {
        path: 'rpasteis',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_rpasteis_rpasteis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rpasteis/rpasteis.module */ 70372)).then(m => m.RpasteisPageModule)
    },
    {
        path: 'cbonde',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_cbonde_cbonde_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cbonde/cbonde.module */ 74486)).then(m => m.CbondePageModule)
    },
    {
        path: 'dmacaxeira',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_dmacaxeira_dmacaxeira_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dmacaxeira/dmacaxeira.module */ 72231)).then(m => m.DmacaxeiraPageModule)
    },
    {
        path: 'rcoxinha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_gastronomia_palimentacao_rcoxinha_rcoxinha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rcoxinha/rcoxinha.module */ 72666)).then(m => m.RcoxinhaPageModule)
    }
];
let PalimentacaoPageRoutingModule = class PalimentacaoPageRoutingModule {
};
PalimentacaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PalimentacaoPageRoutingModule);



/***/ }),

/***/ 72720:
/*!*****************************************************************!*\
  !*** ./src/app/gastronomia/palimentacao/palimentacao.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalimentacaoPageModule": () => (/* binding */ PalimentacaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _palimentacao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palimentacao-routing.module */ 13780);
/* harmony import */ var _palimentacao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palimentacao.page */ 94030);







let PalimentacaoPageModule = class PalimentacaoPageModule {
};
PalimentacaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _palimentacao_routing_module__WEBPACK_IMPORTED_MODULE_0__.PalimentacaoPageRoutingModule
        ],
        declarations: [_palimentacao_page__WEBPACK_IMPORTED_MODULE_1__.PalimentacaoPage]
    })
], PalimentacaoPageModule);



/***/ }),

/***/ 94030:
/*!***************************************************************!*\
  !*** ./src/app/gastronomia/palimentacao/palimentacao.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalimentacaoPage": () => (/* binding */ PalimentacaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_palimentacao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./palimentacao.page.html */ 38752);
/* harmony import */ var _palimentacao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palimentacao.page.scss */ 71110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PalimentacaoPage = class PalimentacaoPage {
    constructor() { }
    ngOnInit() {
    }
};
PalimentacaoPage.ctorParameters = () => [];
PalimentacaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-palimentacao',
        template: _raw_loader_palimentacao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_palimentacao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PalimentacaoPage);



/***/ }),

/***/ 71110:
/*!*****************************************************************!*\
  !*** ./src/app/gastronomia/palimentacao/palimentacao.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("li {\n  border: 1px solid gray;\n  border-radius: 15px;\n  padding: 10px 20px;\n  width: 80vw;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbGltZW50YWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InBhbGltZW50YWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB3aWR0aDogODB2dztcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 38752:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gastronomia/palimentacao/palimentacao.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/gastronomia\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Praça de Alimentação\n      </h1>\n      <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px; width: auto;\">\n        <h2 style=\"text-align: right;\"  style=\"border-bottom: 3px solid gray;\">\n          Cardápio\n        </h2>\n          <ul style=\"list-style-type: none;\">\n            <li routerLink=\"dararipe\">Delícias do Sertão Região Araripe PE </li>\n            <li routerLink=\"mburger\">MY BURGER</li>\n            <li routerLink=\"ebarnabe\">Empadinhas Barnabé</li>\n            <li routerLink=\"frisabor\">Frisabor</li>\n            <li routerLink=\"frutetto\">Frutetto Cozinha Artesanal Natural</li>\n            <li routerLink=\"mdelas\">Massa Delas Cone Pizza</li>\n            <li routerLink=\"bobdog\">Bob Dog – Dogueria Artesanal</li>\n            <li routerLink=\"abahia\">Acarajé da Bahia</li>\n            <li routerLink=\"quintal\">Quintal 122 </li>\n            <li routerLink=\"cpe\">Casa Pernambucana</li>\n            <li routerLink=\"rpasteis\">República dos Pastéis</li>\n            <li>Café do Bonde</li>\n            <li>Divina Macaxeira</li>\n            <li routerLink=\"rcoxinha\">Rei das Coxinhas de Gravatá</li>\n          </ul>\n      </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_gastronomia_palimentacao_palimentacao_module_ts.js.map