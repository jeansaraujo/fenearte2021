(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_ana_ana_module_ts"],{

/***/ 86931:
/*!*************************************************!*\
  !*** ./src/app/salao/ana/ana-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnaPageRoutingModule": () => (/* binding */ AnaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ana_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ana.page */ 15982);




const routes = [
    {
        path: '',
        component: _ana_page__WEBPACK_IMPORTED_MODULE_0__.AnaPage
    },
    {
        path: 'details/:item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_ana_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 28173)).then(m => m.DetailsPageModule)
    }
];
let AnaPageRoutingModule = class AnaPageRoutingModule {
};
AnaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnaPageRoutingModule);



/***/ }),

/***/ 30294:
/*!*****************************************!*\
  !*** ./src/app/salao/ana/ana.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnaPageModule": () => (/* binding */ AnaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _ana_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ana-routing.module */ 86931);
/* harmony import */ var _ana_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ana.page */ 15982);







let AnaPageModule = class AnaPageModule {
};
AnaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ana_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnaPageRoutingModule
        ],
        declarations: [_ana_page__WEBPACK_IMPORTED_MODULE_1__.AnaPage]
    })
], AnaPageModule);



/***/ }),

/***/ 15982:
/*!***************************************!*\
  !*** ./src/app/salao/ana/ana.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnaPage": () => (/* binding */ AnaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_ana_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ana.page.html */ 73212);
/* harmony import */ var _ana_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ana.page.scss */ 38566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AnaPage = class AnaPage {
    constructor() { }
    ngOnInit() {
    }
};
AnaPage.ctorParameters = () => [];
AnaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ana',
        template: _raw_loader_ana_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ana_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnaPage);



/***/ }),

/***/ 38566:
/*!*****************************************!*\
  !*** ./src/app/salao/ana/ana.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("li {\n  border: 1px solid gray;\n  border-radius: 15px;\n  padding: 10px 20px;\n  width: 80vw;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImFuYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB3aWR0aDogODB2dztcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 73212:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/ana/ana.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n       Salão Ana Holanda\n      </h1>\n      <h2 style=\"text-align: end;\">\n      Peças Expostas\n      </h2>\n      <div class=\"opcoes\">\n       <ul style=\"list-style-type: none;\">\n         <li routerLink =\"/salao/ana/details/1\">FULGA DE NAMORADO</li>\n          <li routerLink =\"/salao/ana/details/2\">BANCO TRIO NORDESTINO</li>\n          <li routerLink =\"/salao/ana/details/3\">VOLANTE BRINCANTE DE RUA</li>\n          <li routerLink =\"/salao/ana/details/4\">REMÉDIO PARA ALMA</li>\n          <li routerLink =\"/salao/ana/details/5\">O AUTO DA COMPADECIDA (ARIANO SUASSUNA)</li>\n          <li routerLink =\"/salao/ana/details/6\">VIDA SERTANEJA</li>\n          <li routerLink =\"/salao/ana/details/7\">GÁRGULA DO SERTÃO</li>\n          <li routerLink =\"/salao/ana/details/8\">CÓLERA DO DRAGÃO</li>\n          <li routerLink =\"/salao/ana/details/9\">COBRA NO MANGUEZAL</li>\n          <li routerLink =\"/salao/ana/details/10\">PAIS, FILHOS E NETOS DE MÃOS DADAS CONSTRUINDO O AMANHÃ</li>\n          <li routerLink =\"/salao/ana/details/11\">SEREIA CABOCLA</li>\n          <li routerLink =\"/salao/ana/details/12\">MAIS UMA VITÍMA</li>\n          <li routerLink =\"/salao/ana/details/13\">REI E RAINHA DO MARACATU</li>\n          <li routerLink =\"/salao/ana/details/14\">MULHER NORDESTINA</li>\n          <li routerLink =\"/salao/ana/details/15\">PANDEMIA II</li>\n          <li routerLink =\"/salao/ana/details/16\">SÃO BENEDITO EM SUA ESSENCIA</li>\n          <li routerLink =\"/salao/ana/details/17 \"> BRINCADEIRA DE CAVALO MARINHO CATIRINA</li>\n          <li routerLink =\"/salao/ana/details/18\">O MAMULENGUEIRO - A ARTE NÃO APAGA, É SEMEADA</li>\n          <li routerLink =\"/salao/ana/details/19\">DOIDIN PRA VÊ</li>\n          <li routerLink =\"/salao/ana/details/20\">OLINDA SIMPLESMENTE LINDA</li>\n          <li routerLink =\"/salao/ana/details/21\">A MULHER NA CANTORIA DE VIOLA</li>\n          <li routerLink =\"/salao/ana/details/22\">OLEIRO</li>\n          <li routerLink =\"/salao/ana/details/23\">REINO ARMORIAL</li>\n          <li routerLink =\"/salao/ana/details/24\">HISTÓRIA DE PESCADOR</li>\n          <li routerLink =\"/salao/ana/details/25\">PATRIMÔNIO EM CHEQUE</li>\n          <li routerLink =\"/salao/ana/details/26\">A ARTE E O PENSAMENTO DO ARTISTA</li>\n          <li routerLink =\"/salao/ana/details/27\">O FORRÓ DE LAMPIÃO E MARIA BONITA</li>\n          <li routerLink =\"/salao/ana/details/28\">CASTELO DOS SONHOS</li>\n          <li routerLink =\"/salao/ana/details/29\">PERSONAGEM DO MAMULENGO DIABO E MORTE</li>\n          <li routerLink =\"/salao/ana/details/30\">GRACILIANO RAMOS E VIDAS SECAS</li>\n          <li routerLink =\"/salao/ana/details/31\">CABOCLO DE LANÇA</li>\n          <li routerLink =\"/salao/ana/details/32\">MULHER DANDO A LUZ</li>\n          <li routerLink =\"/salao/ana/details/33\">PROSOPOPEIA DE BENTO TEIXEIRA</li>\n          <li routerLink =\"/salao/ana/details/34\">ESCOLA</li>\n          <li routerLink =\"/salao/ana/details/35\">O PESCADOR</li>\n          <li routerLink =\"/salao/ana/details/36\">JOGO DE XADREZ CORAL</li>\n          <li routerLink =\"/salao/ana/details/37\">PAMONHADA</li>\n          <li routerLink =\"/salao/ana/details/38\">A GOTA D'AGUA</li>\n          <li routerLink =\"/salao/ana/details/39\">PAU DE SEBO</li>\n          <li routerLink =\"/salao/ana/details/40\">AOS PROFISSIONAIS DE SAÚDE NOSSA GRATIDÃO</li>\n          <li routerLink =\"/salao/ana/details/41\">O CASAMENTO DE ZILDA COM SEU EUZÉBIO DA FINADA JUDITE</li>\n          <li routerLink =\"/salao/ana/details/42\">A NATUREZA PEDE SOCORRO</li>\n          <li routerLink =\"/salao/ana/details/43\">A COLHEITA</li>\n          <li routerLink =\"/salao/ana/details/44\">GOBEKLI TEPE</li>\n          <li routerLink =\"/salao/ana/details/45\">A FLOR DE PARAGALDINO</li>\n          <li routerLink =\"/salao/ana/details/46\">PORQUE ELEITO BÔ OU NO SEU OLHO</li>\n          <li routerLink =\"/salao/ana/details/47\">CASAL DE TEJU PASSEANDO</li>\n          <li routerLink =\"/salao/ana/details/48\">ARIANO CONTA A HISTÓRIA DAS LA URSAS</li>\n          <li routerLink =\"/salao/ana/details/49\">BRINCARIANO</li>\n          <li routerLink =\"/salao/ana/details/50\">ÁGUIA</li>\n          <li routerLink =\"/salao/ana/details/51\">OH! LINDA SITUAÇÃO PRA SE CONSTRUIR UMA VILA</li>\n          <li routerLink =\"/salao/ana/details/52\">AVENTUREIROS</li>\n          <li routerLink =\"/salao/ana/details/53\">AMOR DE MÃE</li>\n          <li routerLink =\"/salao/ana/details/54\">TRAVESSA DO MAR</li>\n          <li routerLink =\"/salao/ana/details/55\">VASO CARAMELO COM GOIABA</li>\n          <li routerLink =\"/salao/ana/details/56\">BICHO DE TREZE CABEÇAS</li>\n          <li routerLink =\"/salao/ana/details/57\">GATO SPHYNX INSPIRADO NA DEUSA BASTET</li>\n          <li routerLink =\"/salao/ana/details/58\">A QUE TE ACOLHE</li>\n          <li routerLink =\"/salao/ana/details/59\">O ANJO BORBOLETA</li>\n          <li routerLink =\"/salao/ana/details/60\">DEUS E O APOCALIPSE</li>\n          <li routerLink =\"/salao/ana/details/61\">EM TUDO ELE SERIA REI</li>\n       </ul>\n      </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_ana_ana_module_ts.js.map