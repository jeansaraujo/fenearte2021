(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_reciclados_reciclados_module_ts"],{

/***/ 55179:
/*!***************************************************************!*\
  !*** ./src/app/salao/reciclados/reciclados-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecicladosPageRoutingModule": () => (/* binding */ RecicladosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _reciclados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reciclados.page */ 79855);




const routes = [
    {
        path: '',
        component: _reciclados_page__WEBPACK_IMPORTED_MODULE_0__.RecicladosPage
    },
    {
        path: 'details/:item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_reciclados_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 22703)).then(m => m.DetailsPageModule)
    }
];
let RecicladosPageRoutingModule = class RecicladosPageRoutingModule {
};
RecicladosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecicladosPageRoutingModule);



/***/ }),

/***/ 26824:
/*!*******************************************************!*\
  !*** ./src/app/salao/reciclados/reciclados.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecicladosPageModule": () => (/* binding */ RecicladosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _reciclados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reciclados-routing.module */ 55179);
/* harmony import */ var _reciclados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reciclados.page */ 79855);







let RecicladosPageModule = class RecicladosPageModule {
};
RecicladosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reciclados_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecicladosPageRoutingModule
        ],
        declarations: [_reciclados_page__WEBPACK_IMPORTED_MODULE_1__.RecicladosPage]
    })
], RecicladosPageModule);



/***/ }),

/***/ 79855:
/*!*****************************************************!*\
  !*** ./src/app/salao/reciclados/reciclados.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecicladosPage": () => (/* binding */ RecicladosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_reciclados_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reciclados.page.html */ 69699);
/* harmony import */ var _reciclados_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reciclados.page.scss */ 12370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let RecicladosPage = class RecicladosPage {
    constructor() { }
    ngOnInit() {
    }
};
RecicladosPage.ctorParameters = () => [];
RecicladosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reciclados',
        template: _raw_loader_reciclados_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reciclados_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecicladosPage);



/***/ }),

/***/ 12370:
/*!*******************************************************!*\
  !*** ./src/app/salao/reciclados/reciclados.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("li {\n  border: 1px solid gray;\n  border-radius: 15px;\n  padding: 10px 20px;\n  width: 80vw;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2ljbGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJyZWNpY2xhZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 69699:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/reciclados/reciclados.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n       Reciclados\n      </h1>\n      <h2 style=\"text-align: end;\">\n      Peças Expostas\n      </h2>\n      <div class=\"opcoes\">\n       <ul style=\"list-style-type: none;\">\n          <li routerLink =\"/salao/reciclados/details/1\">MENTE ARMORIAL</li>\n          <li routerLink =\"/salao/reciclados/details/2\">HOMEM CALANGO AZUL</li>\n          <li routerLink =\"/salao/reciclados/details/3\">PÁSSARO LAMPIÃO</li>\n          <li routerLink =\"/salao/reciclados/details/4\">CAVALGANDO</li>\n          <li routerLink =\"/salao/reciclados/details/5\">PORTA VELAS: SANTA DE ROCA ARMORIAL</li>\n          <li routerLink =\"/salao/reciclados/details/6\">VIAGEM AO UNIVERSO LÚDICO DAS BRINCADEIRAS TRADICIONAIS</li>\n          <li routerLink =\"/salao/reciclados/details/7\">INFÂNCIA EM TEMPOS DE COVID</li>\n          <li routerLink =\"/salao/reciclados/details/8\">SANTA CEIA</li>\n          <li routerLink =\"/salao/reciclados/details/9\">OXALÁ</li>\n          <li routerLink =\"/salao/reciclados/details/10\">ANASTÁCIA</li>\n          <li routerLink =\"/salao/reciclados/details/11\">O PAVÃO</li>\n          <li routerLink =\"/salao/reciclados/details/12\">MENOS PROJÉTEIS E MAS FLORES</li>\n          <li routerLink =\"/salao/reciclados/details/13\">PEIXE</li>\n          <li routerLink =\"/salao/reciclados/details/14\">O BOI NA NOITE ESTRELADA</li>\n          <li routerLink =\"/salao/reciclados/details/15\">JOGO DA VELHA - FREVO X CABOCLINHO</li>\n          <li routerLink =\"/salao/reciclados/details/16\">SOMOS UM - 50X97X8</li>\n          <li routerLink =\"/salao/reciclados/details/17\">BRENNAND</li>\n          <li routerLink =\"/salao/reciclados/details/18\">LOUVADA SEJA A VIDA</li>\n          <li routerLink =\"/salao/reciclados/details/19\">CONSTELAR</li>\n          <li routerLink =\"/salao/reciclados/details/20\">O DOMÍNIO</li>\n          <li routerLink =\"/salao/reciclados/details/21\">ORATÓRIO DOS ANJOS</li>\n          <li routerLink =\"/salao/reciclados/details/22\">\"ANELÃO - ESTRELAR</li>\n          <li routerLink =\"/salao/reciclados/details/23\">\"BRINCO PAPAGAIO DO FUTURO</li>\n          <li routerLink =\"/salao/reciclados/details/24\">\"CONJUNTO DE COLAR E BRINCO DIA DE SOL</li>\n          <li routerLink =\"/salao/reciclados/details/25\">CAMINHÃO ENGARRAFADO</li>\n          <li routerLink =\"/salao/reciclados/details/26\">CHEVROLET GIGANTE (CARICATURA)</li>\n          <li routerLink =\"/salao/reciclados/details/27\">DO MANGUE AO ARMORIAL - A FUGA</li>\n          <li routerLink =\"/salao/reciclados/details/28\">EMPODERAMENTO</li>\n          <li routerLink =\"/salao/reciclados/details/29\">NOSSA SRA MÃE DA CULTURA PERNAMBUCANA</li>\n          <li routerLink =\"/salao/reciclados/details/30\">SERENATA PRA ROSINHA</li>\n          <li routerLink =\"/salao/reciclados/details/31\">GUERREIRO DO INVISIVEL</li>\n          <li routerLink =\"/salao/reciclados/details/32\">CANGAÇO O REI E A RAINHA</li>\n          <li routerLink =\"/salao/reciclados/details/33\">O MANGUE CLAMA</li>\n          <li routerLink =\"/salao/reciclados/details/34\">PORCO - ESPINHO</li>\n          <li routerLink =\"/salao/reciclados/details/35\">PASTORIL ESTRELA DE BELÉM</li>\n          <li routerLink =\"/salao/reciclados/details/36\">RETIRANTES</li>\n          <li routerLink =\"/salao/reciclados/details/37\">GALO DA MADRUGADA</li>\n          <li routerLink =\"/salao/reciclados/details/38\">CABOCLO DE LANÇA</li>\n          <li routerLink =\"/salao/reciclados/details/39\">CONSCIÊNCIA </li>\n          <li routerLink =\"/salao/reciclados/details/40\">FRAGMENTOS</li>\n          <li routerLink =\"/salao/reciclados/details/41\">EU CÉLULA NO MUNDO</li>\n          <li routerLink =\"/salao/reciclados/details/42\">BALEIOTA BLUE</li>\n          <li routerLink =\"/salao/reciclados/details/43\">LUMINÁRIA CHEESE</li>\n          <li routerLink =\"/salao/reciclados/details/44\">CIRANDA DE CABOCLO</li>\n          <li routerLink =\"/salao/reciclados/details/45\">DOM QUIXOTE BRASILEIRO ARMORIAL</li>\n          <li routerLink =\"/salao/reciclados/details/46\">BEIJA - FLOR</li>\n          <li routerLink =\"/salao/reciclados/details/47\">ZABÉ DA LOCA, GUARDIÃ DOS ECOS DAS SERRAS</li>\n          <li routerLink =\"/salao/reciclados/details/48\">LIA, A GUARDIÃ DAS ONDAS</li>\n          <li routerLink =\"/salao/reciclados/details/49\">MADAME SATÃ, GUARDIÃ DOS PALCOS DOS GUETOS</li>\n          <li routerLink =\"/salao/reciclados/details/50\">LEMBRANÇAS DE ALEGRIAS DO CARNAVAL</li>\n          <li routerLink =\"/salao/reciclados/details/51\">ANJO MACHÊ</li>\n          <li routerLink =\"/salao/reciclados/details/52\">SANTINHA MACHÊ</li>\n          <li routerLink =\"/salao/reciclados/details/53\">AGLOMERÔ</li>\n          <li routerLink =\"/salao/reciclados/details/54\">FUGINDO DA COVID-19 PARA OUTRO PLANETA</li>\n          <li routerLink =\"/salao/reciclados/details/55\">MACUCA DO JOSÉ</li>\n          <li routerLink =\"/salao/reciclados/details/56\">ANIMAIS A BORDO</li>\n          <li routerLink =\"/salao/reciclados/details/57\">A CURA</li>\n       </ul>\n      </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_reciclados_reciclados_module_ts.js.map