(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_religiosos_religiosos_module_ts"],{

/***/ 27784:
/*!***************************************************************!*\
  !*** ./src/app/salao/religiosos/religiosos-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligiososPageRoutingModule": () => (/* binding */ ReligiososPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _religiosos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./religiosos.page */ 99048);




const routes = [
    {
        path: '',
        component: _religiosos_page__WEBPACK_IMPORTED_MODULE_0__.ReligiososPage
    },
    {
        path: 'details/:item',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salao_religiosos_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 67170)).then(m => m.DetailsPageModule)
    }
];
let ReligiososPageRoutingModule = class ReligiososPageRoutingModule {
};
ReligiososPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReligiososPageRoutingModule);



/***/ }),

/***/ 54416:
/*!*******************************************************!*\
  !*** ./src/app/salao/religiosos/religiosos.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligiososPageModule": () => (/* binding */ ReligiososPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _religiosos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./religiosos-routing.module */ 27784);
/* harmony import */ var _religiosos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./religiosos.page */ 99048);







let ReligiososPageModule = class ReligiososPageModule {
};
ReligiososPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _religiosos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReligiososPageRoutingModule
        ],
        declarations: [_religiosos_page__WEBPACK_IMPORTED_MODULE_1__.ReligiososPage]
    })
], ReligiososPageModule);



/***/ }),

/***/ 99048:
/*!*****************************************************!*\
  !*** ./src/app/salao/religiosos/religiosos.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReligiososPage": () => (/* binding */ ReligiososPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_religiosos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./religiosos.page.html */ 13949);
/* harmony import */ var _religiosos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./religiosos.page.scss */ 88132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ReligiososPage = class ReligiososPage {
    constructor() { }
    ngOnInit() {
    }
};
ReligiososPage.ctorParameters = () => [];
ReligiososPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-religiosos',
        template: _raw_loader_religiosos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_religiosos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReligiososPage);



/***/ }),

/***/ 88132:
/*!*******************************************************!*\
  !*** ./src/app/salao/religiosos/religiosos.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("li {\n  border: 1px solid gray;\n  border-radius: 15px;\n  padding: 10px 20px;\n  width: 80vw;\n  margin: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGlnaW9zb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJyZWxpZ2lvc29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 13949:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/religiosos/religiosos.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n       Religiosos\n      </h1>\n      <h2 style=\"text-align: end;\">\n      Peças Expostas\n      </h2>\n      <div class=\"opcoes\">\n       <ul style=\"list-style-type: none;\">\n          <li routerLink =\"/salao/religiosos/details/1\">FREI GALVÃO</li>\n          <li routerLink =\"/salao/religiosos/details/3\">PRESÉPIO</li>\n          <li routerLink =\"/salao/religiosos/details/4\">SÃO FRANCISCO PERIQUITO REI</li>\n          <li routerLink =\"/salao/religiosos/details/5\">ANJO ARMORIAL</li>\n          <li routerLink =\"/salao/religiosos/details/6\">SÃO JORGE NORDESTINO</li>\n          <li routerLink =\"/salao/religiosos/details/7\">SANTA CEIA</li>\n          <li routerLink =\"/salao/religiosos/details/8\">CASAL DE PRETO VELHO EM PALHA DE MILHO CRIOULO</li>\n          <li routerLink =\"/salao/religiosos/details/9\">NÃNA EM PALHA DE MILHO CRIOULO</li>\n          <li routerLink =\"/salao/religiosos/details/10\">NOSSA SENHORA DE FATIMA EM PALHA DE MILHO</li>\n          <li routerLink =\"/salao/religiosos/details/11\">NOSSA SENHORA PROTETORA DAS LOICEIRAS</li>\n          <li routerLink =\"/salao/religiosos/details/12\">NOSSA SENHORA DO BOM PARTO</li>\n          <li routerLink =\"/salao/religiosos/details/13\">ALTAR DE COSME E DAMIÃO</li>\n          <li routerLink =\"/salao/religiosos/details/14\">NOSSA SENHORA DO BREJO</li>\n          <li routerLink =\"/salao/religiosos/details/15\">PAJÉ CABOCLA</li>\n          <li routerLink =\"/salao/religiosos/details/16\">NOSSA SENHORA COM O MENINO JESUS</li>\n          <li routerLink =\"/salao/religiosos/details/17\">SAGRADO CORAÇÃO DE JESUS COM ATRIBUTOS</li>\n          <li routerLink =\"/salao/religiosos/details/18\">DEUS BRAHMA</li>\n          <li routerLink =\"/salao/religiosos/details/19\">PROCISSÃO ARCANJOS FRANCISCANOS</li>\n          <li routerLink =\"/salao/religiosos/details/20\">ÊXODO</li>\n          <li routerLink =\"/salao/religiosos/details/21\">JESUS E ZAQUEL</li>\n          <li routerLink =\"/salao/religiosos/details/22\">SANTA LUZIA</li>\n          <li routerLink =\"/salao/religiosos/details/23\">SAGRADA FAMÍLIA</li>\n          <li routerLink =\"/salao/religiosos/details/24\">NOSSA SENHORA NO ORATÓRIO</li>\n          <li routerLink =\"/salao/religiosos/details/25\">SÃO FRANCISCO SANFONEIRO</li>\n          <li routerLink =\"/salao/religiosos/details/26\">IRMÃ DULCE</li>\n          <li routerLink =\"/salao/religiosos/details/27\">GANESHA</li>\n          <li routerLink =\"/salao/religiosos/details/28\">SANTÍSSIMA TRINDADE DO NORDESTE: CORAGEM, LUTA E FÉ</li>\n          <li routerLink =\"/salao/religiosos/details/29\">IGREJA</li>\n          <li routerLink =\"/salao/religiosos/details/30\">CASA DE ORAÇÃO</li>\n          <li routerLink =\"/salao/religiosos/details/31\">SÃO JOSÉ</li>\n          <li routerLink =\"/salao/religiosos/details/32\">ORIXÁ CULTURA E RELIGIÃO</li>\n          <li routerLink =\"/salao/religiosos/details/33\">SÃO FRANCISCO SERTANEJO</li>\n          <li routerLink =\"/salao/religiosos/details/34\">SÚPLICA A PEDRO</li>\n          <li routerLink =\"/salao/religiosos/details/35\">NOSSA SENHORA DE FÁTIMA</li>\n          <li routerLink =\"/salao/religiosos/details/36\">MENINO REI MALUNGUINHO</li>\n          <li routerLink =\"/salao/religiosos/details/37\">EXU, SENHOR DAS ENCRUZILHADAS</li>\n          <li routerLink =\"/salao/religiosos/details/38\">PRETO VELHO</li>\n          <li routerLink =\"/salao/religiosos/details/39\">NOSSA SENHORA APARECIDA</li>\n          <li routerLink =\"/salao/religiosos/details/40\">SÃO FRANCISCO PROTETOR</li>\n          <li routerLink =\"/salao/religiosos/details/41\">CRUCIFIXO</li>\n          <li routerLink =\"/salao/religiosos/details/42\">PIETA</li>\n          <li routerLink =\"/salao/religiosos/details/43\">MÃOS DO PAI</li>\n          <li routerLink =\"/salao/religiosos/details/44\">JESUS CRISTO - VOCÊS NÃO ESTÃO SOZINHOS</li>\n          <li routerLink =\"/salao/religiosos/details/45\">ANJO DA MORTE - SAMAEL</li>\n          <li routerLink =\"/salao/religiosos/details/46\">SÃO FRANCISCO</li>\n          <li routerLink =\"/salao/religiosos/details/47\">DIVINO DE LUZ</li>\n          <li routerLink =\"/salao/religiosos/details/48\">SANTA TEREZINHA</li>\n          <li routerLink =\"/salao/religiosos/details/49\">SÓ JESUS EM UM SERTÃO</li>\n          <li routerLink =\"/salao/religiosos/details/50\">SÃO FRANCISCO PROTETOR DA FAUNA E DA FLORA</li>\n          <li routerLink =\"/salao/religiosos/details/51\">TODAS AS NOSSAS SENHORAS</li>\n          <li routerLink =\"/salao/religiosos/details/52\">XILOGRAVURA FECHADA - XANGÔ</li>\n          <li routerLink =\"/salao/religiosos/details/53\">MÁSCARAS RAÍZES DE UM POVO</li>\n          <li routerLink =\"/salao/religiosos/details/54\">TERREIRO MÃE PRETA E PAI JOÃO</li>\n          <li routerLink =\"/salao/religiosos/details/55\">AUTO DA FÉ</li>\n          <li routerLink =\"/salao/religiosos/details/56\">CABEÇA DE CRISTO</li>\n          <li routerLink =\"/salao/religiosos/details/57\">PADRE JULIO LANCELLOTTI, TUA FOME É NOSSA FOME</li>\n          <li routerLink =\"/salao/religiosos/details/58\">MARIA DOS CORAÇÕES INQUIETOS</li>\n          <li routerLink =\"/salao/religiosos/details/59\">MARIA INTERCESSORA</li>\n          <li routerLink =\"/salao/religiosos/details/60\">NOSSA SENHORA APARECIDA</li>\n       </ul>\n      </div>\n  </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_religiosos_religiosos_module_ts.js.map