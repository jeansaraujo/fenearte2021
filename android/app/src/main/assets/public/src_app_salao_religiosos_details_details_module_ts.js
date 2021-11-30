(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_religiosos_details_details_module_ts"],{

/***/ 98657:
/*!********************************************************************!*\
  !*** ./src/app/salao/religiosos/details/details-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 90106);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 67170:
/*!************************************************************!*\
  !*** ./src/app/salao/religiosos/details/details.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 98657);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 90106);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 90106:
/*!**********************************************************!*\
  !*** ./src/app/salao/religiosos/details/details.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 63156);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 86144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let DetailsPage = class DetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.lista = [
            { "foto": "1", "nome": "ADILSON VITORINO NUNES", "estado": "PE", "peca": "FREI GALVÃO", "tipo": "CERAMICA", "contato": "(81) 98934 3839" },
            { "foto": "3", "nome": "ALEXANDRE EUFRASIO DOS SANTOS", "estado": "SP", "peca": "PRESÉPIO", "tipo": "MADEIRA", "contato": "(11) 2258 6652" },
            { "foto": "4", "nome": "ALEXANDRE EUFRASIO DOS SANTOS", "estado": "SP", "peca": "SÃO FRANCISCO PERIQUITO REI", "tipo": "MADEIRA", "contato": " (11) 2258 6652" },
            { "foto": "5", "nome": "ALCIONE FREITAS MARQUES DE LIMA", "estado": "PE", "peca": "ANJO ARMORIAL", "tipo": "MATERIAIS SINTETICOS", "contato": " (81) 99514 3956" },
            { "foto": "6", "nome": "ALDAYR MATIAS DOS SANTOS SILVA", "estado": "PE", "peca": "SÃO JORGE NORDESTINO", "tipo": "MADEIRA", "contato": "(81) 99708 3865" },
            { "foto": "7", "nome": "ALEXANDRE LOIRENÇO DE ANDRADE", "estado": "PE", "peca": "SANTA CEIA", "tipo": "OUTROS", "contato": "(81) 99903 1852" },
            { "foto": "8", "nome": "ALICE DE OLIVEIRA ALMEIDA", "estado": "SP", "peca": "CASAL DE PRETO VELHO EM PALHA DE MILHO CRIOULO", "tipo": "FIBRAS NATURAIS", "contato": " (15) 99744 7005" },
            { "foto": "9", "nome": "ALICE DE OLIVEIRA ALMEIDA", "estado": "SP", "peca": "NÃNA EM PALHA DE MILHO CRIOULO", "tipo": "FIBRAS NATURAIS", "contato": " (15) 99744 7005" },
            { "foto": "10", "nome": "ALICE DE OLIVEIRA ALMEIDA", "estado": "SP", "peca": "NOSSA SENHORA DE FATIMA EM PALHA DE MILHO", "tipo": "FIBRAS NATURAIS", "contato": " (15) 99744 7005" },
            { "foto": "11", "nome": "CLEONICE OTILIA DA SILVA", "estado": "PE", "peca": "NOSSA SENHORA PROTETORA DAS LOICEIRAS", "tipo": "CERAMICA", "contato": "(81) 99223 5647" },
            { "foto": "12", "nome": "CARINA KARLA LACERDA ALMEIDA", "estado": "PE", "peca": "NOSSA SENHORA DO BOM PARTO", "tipo": "MADEIRA", "contato": " (87) 99159 7173" },
            { "foto": "13", "nome": "CARLOS ALBERTO QUEIROZ DE FRANÇA", "estado": "PE", "peca": "ALTAR DE COSME E DAMIÃO", "tipo": "RESINA", "contato": " (81) 99977 6517" },
            { "foto": "14", "nome": "DELLY FIQUEIREDO", "estado": "PE", "peca": "NOSSA SENHORA DO BREJO", "tipo": "CERAMICA", "contato": "(81) 99980 4902 " },
            { "foto": "15", "nome": "DIEGO CORREIA LIMA DE OLIVEIRA", "estado": "PE", "peca": "PAJÉ CABOCLA", "tipo": "CERAMICA", "contato": "(81) 99196 3139" },
            { "foto": "16", "nome": "EDNEY DO CARMO SILVA", "estado": "MG", "peca": "NOSSA SENHORA COM O MENINO JESUS", "tipo": "MADEIRA", "contato": " (31) 99995 6106" },
            { "foto": "17", "nome": "EDNEY DO CARMO SILVA", "estado": "MG", "peca": "SAGRADO CORAÇÃO DE JESUS COM ATRIBUTOS", "tipo": "MADEIRA", "contato": " (31) 99995 6106" },
            { "foto": "18", "nome": "EDSON SEVERINO RAMOS JUNIOR", "estado": "PE", "peca": "DEUS BRAHMA", "tipo": "CERAMICA", "contato": "(81) 99238 8214" },
            { "foto": "19", "nome": "EDVALDO JOSE DE ANDRADE", "estado": "PE", "peca": "PROCISSÃO ARCANJOS FRANCISCANOS", "tipo": "CERAMICA", "contato": "(81) 99216 4432" },
            { "foto": "20", "nome": "ELIZABETH SANDRA CYRNE FERREIRA", "estado": "PE", "peca": "ÊXODO", "tipo": "PAPELÃO", "contato": "(81) 99669 2552" },
            { "foto": "21", "nome": "ERASMO DE LIMA BELTRÃO", "estado": "PE", "peca": "JESUS E ZAQUEL", "tipo": "MADEIRA", "contato": "(81) 99197 1125" },
            { "foto": "22", "nome": "EDILSON OLIVEIRA", "estado": "PE", "peca": "SANTA LUZIA", "tipo": "CERAMICA", "contato": "(81) 99430 6023" },
            { "foto": "23", "nome": "EDJANE CABRAL DA SILVA", "estado": "PE", "peca": "SAGRADA FAMÍLIA", "tipo": "CERAMICA", "contato": " (81) 99722 1610" },
            { "foto": "24", "nome": "EFIGÊNIA MARIA FREIRE DA SILVA", "estado": "PE", "peca": "NOSSA SENHORA NO ORATÓRIO", "tipo": "CERAMICA", "contato": " (81) 98764 5245" },
            { "foto": "25", "nome": "FERNANDES RODRIGUES DE OLIVEIRA", "estado": "PE", "peca": "SÃO FRANCISCO SANFONEIRO", "tipo": "MADEIRA", "contato": " (81) 98811 8224" },
            { "foto": "26", "nome": "FRANKLIN ALMEIDA FERREIRA", "estado": "CE", "peca": "IRMÃ DULCE", "tipo": "METAIS", "contato": " (85) 98721 7682" },
            { "foto": "27", "nome": "GEISYANE INGRID ALEIXO LOPES", "estado": "PE", "peca": "GANESHA", "tipo": "CERAMICA", "contato": "(81) 99959 3131" },
            { "foto": "28", "nome": "HUMBERTO DIOGENES BOTÃO", "estado": "PE", "peca": "SANTÍSSIMA TRINDADE DO NORDESTE: CORAGEM, LUTA E FÉ", "tipo": "CERAMICA", "contato": "(81) 99630 9507" },
            { "foto": "29", "nome": "HUMBERTO DIOGENES BOTÃO", "estado": "PE", "peca": "IGREJA", "tipo": "CERAMICA", "contato": "(81) 99630 9507" },
            { "foto": "30", "nome": "JAILSON SILVA DO NASCIMENTO", "estado": "PE", "peca": "CASA DE ORAÇÃO", "tipo": "MADEIRA", "contato": "(81) 99503 9572" },
            { "foto": "31", "nome": "JANAINA BARBOSA DE MELO", "estado": "PE", "peca": "SÃO JOSÉ", "tipo": "CERAMICA", "contato": "(81) 99570 2218" },
            { "foto": "32", "nome": "JOSÉ EDVAN FERREIRA DE LIMA", "estado": "PE", "peca": "ORIXÁ CULTURA E RELIGIÃO", "tipo": "MADEIRA", "contato": "(81) 98915 7337" },
            { "foto": "33", "nome": "JOSÉ GALDINO DE SILVA IRMÃO", "estado": "PE", "peca": "SÃO FRANCISCO SERTANEJO", "tipo": "CERAMICA", "contato": "(81) 8902 1811" },
            { "foto": "34", "nome": "JOSÉ HENRIQUE DE FREITAS", "estado": "PE", "peca": "SÚPLICA A PEDRO", "tipo": "MADEIRA", "contato": " (81) 98590 4914" },
            { "foto": "35", "nome": "JOSÉ JUNIOR COSTA", "estado": "PE", "peca": "NOSSA SENHORA DE FÁTIMA", "tipo": "PEDRA", "contato": "(81) 99637 3968" },
            { "foto": "36", "nome": "JOSÉ VITALINO DA SILVA", "estado": "", "peca": "MENINO REI MALUNGUINHO", "tipo": "MADEIRA", "contato": "(81) 98912 7530" },
            { "foto": "37", "nome": "JOÃO CASSIANO GOMES", "estado": "PE", "peca": "EXU, SENHOR DAS ENCRUZILHADAS", "tipo": "PAPELÃO", "contato": "(81) 99982 5728" },
            { "foto": "38", "nome": "JOÃO HENRIQUE LAYMISTONE P. DE SOUZA", "estado": "PE", "peca": "PRETO VELHO", "tipo": "CERAMICA", "contato": " (81) 99975 5034" },
            { "foto": "39", "nome": "LUIS GALDINO DE FREITAS", "estado": "PE", "peca": "NOSSA SENHORA APARECIDA", "tipo": "CERAMICA", "contato": " (81) 99887 0658" },
            { "foto": "40", "nome": "LUIZ CARLOS FERREIRA DA SILVA", "estado": "PE", "peca": "SÃO FRANCISCO PROTETOR", "tipo": "CERAMICA", "contato": " (81) 99309 2270" },
            { "foto": "41", "nome": "LEANDRO JOSÉ DA COSTA", "estado": "PE", "peca": "CRUCIFIXO", "tipo": "PEDRA", "contato": "(81) 99790 7427" },
            { "foto": "42", "nome": "LEANDRO JOSÉ DA COSTA", "estado": "PE", "peca": "PIETA", "tipo": "PEDRA", "contato": "(81) 99790 7427" },
            { "foto": "43", "nome": "LUSINEIDE MARIA DE FREITAS", "estado": "PE", "peca": "MÃOS DO PAI", "tipo": "CERAMICA", "contato": "(81) 99728 4548" },
            { "foto": "44", "nome": "MARIA APARECIDA BESERRA DE MORAES", "estado": "PE", "peca": "JESUS CRISTO - VOCÊS NÃO ESTÃO SOZINHOS", "tipo": "MATERIAL SINTETICO", "contato": "(81) 99786 5746" },
            { "foto": "45", "nome": "MARIA ELDA ALVES SOBRAL", "estado": "PE", "peca": "ANJO DA MORTE - SAMAEL", "tipo": "MADEIRA", "contato": "(87) 98843 6238" },
            { "foto": "46", "nome": "MARIA DAS NEVES CAVALCANTI MOREIRA", "estado": "PB", "peca": "SÃO FRANCISCO", "tipo": "CERAMICA", "contato": "(83) 3235 3048" },
            { "foto": "47", "nome": "MARIA DO SOCORRO DA SILVA", "estado": "PE", "peca": "DIVINO DE LUZ", "tipo": "MADEIRA", "contato": "(81) 99375 9818" },
            { "foto": "48", "nome": "MERY SILVA", "estado": "PE", "peca": "SANTA TEREZINHA", "tipo": "CERAMICA", "contato": "19) 98190 0615" },
            { "foto": "49", "nome": "MOACIR SEVERINO DA SILVA", "estado": "PE", "peca": "SÓ JESUS EM UM SERTÃO", "tipo": "CERAMICA", "contato": "(81) 9170 4863" },
            { "foto": "50", "nome": "PABLO MAYKON DE MELO BATISTA", "estado": "PE", "peca": "SÃO FRANCISCO PROTETOR DA FAUNA E DA FLORA", "tipo": "CERAMICA", "contato": "(81) 99303 9093" },
            { "foto": "51", "nome": "REGILENE DE SOUZA TIBURCIO", "estado": "PE", "peca": "TODAS AS NOSSAS SENHORAS", "tipo": "CERAMICA", "contato": "(81) 99304 4627" },
            { "foto": "52", "nome": "RICARDO JORGE SOARES PESSOA", "estado": "PE", "peca": "XILOGRAVURA FECHADA - XANGÔ", "tipo": "PAPEL", "contato": " (81) 99231 1813" },
            { "foto": "53", "nome": "SANDRA JOSEFA PONTES DE MIRANDA", "estado": "PE", "peca": "MÁSCARAS RAÍZES DE UM POVO", "tipo": "CERAMICA", "contato": "(81) 99934 3342" },
            { "foto": "54", "nome": "SEVERINO ELIAS DA SILVA", "estado": "PE", "peca": "TERREIRO MÃE PRETA E PAI JOÃO", "tipo": "MADEIRA", "contato": " (81) 99698 7612" },
            { "foto": "55", "nome": "SIMONE DE SOUZA", "estado": "PE", "peca": "AUTO DA FÉ", "tipo": "MADEIRA", "contato": " (87) 99937 6854" },
            { "foto": "56", "nome": "SIMONE DE SOUZA", "estado": "PE", "peca": "CABEÇA DE CRISTO", "tipo": "MADEIRA", "contato": " (87) 99937 6854" },
            { "foto": "57", "nome": "SIVONALDO NUNES DE ARAUJO", "estado": "PE", "peca": "PADRE JULIO LANCELLOTTI, TUA FOME É NOSSA FOME", "tipo": "CERAMICA", "contato": " (81) 98977 2772" },
            { "foto": "58", "nome": "CAMILO COSTA DIAS", "estado": "PE", "peca": "MARIA DOS CORAÇÕES INQUIETOS", "tipo": "MADEIRA", "contato": "(81) 99245 0983" },
            { "foto": "59", "nome": "CAMILO COSTA DIAS", "estado": "PE", "peca": "MARIA INTERCESSORA", "tipo": "MADEIRA", "contato": "(81) 99245 0983" },
            { "foto": "60", "nome": "JOSÉ EDVALDO BATISTA", "estado": "PE", "peca": "NOSSA SENHORA APARECIDA", "tipo": "CERAMICA", "contato": "(81) 9302 1753" }
        ];
    }
    ngOnInit() {
        this.item = this.activatedRoute.snapshot.paramMap.get('item');
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].foto == this.item) {
                this.foto = this.lista[i].foto;
                this.autor = this.lista[i].nome;
                this.peca = this.lista[i].peca;
                this.contato = this.lista[i].contato;
                this.estado = this.lista[i].estado;
                this.tipo = this.lista[i].tipo;
            }
        }
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsPage);



/***/ }),

/***/ 86144:
/*!************************************************************!*\
  !*** ./src/app/salao/religiosos/details/details.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 63156:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/religiosos/details/details.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao/religiosos\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n   <ion-content>\n     <div class=\"opcoes\">\n      <h1>\n       Religiosos\n      </h1>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Peça Exposta:\n            <p style=\"text-align: right;\">{{peca}}</p>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n           <img src=\"/assets/imgs/salao/religioso/{{foto}}.jpg\" class=\"card-img-top\" alt=\"...\">\n           <h2>\n             Autor:\n           </h2>\n           <p>\n             <strong>\n                {{autor}}\n             </strong>\n           </p>\n             <h3>\n             Estado:\n           </h3>\n           <p>\n             <strong>\n                {{estado}}\n             </strong>\n           </p>\n          <h3>\n             Tipologia:\n           </h3>\n           <p>\n             <strong>\n                {{tipo}}\n             </strong>\n           </p>\n        </ion-card-content>\n      </ion-card>\n     </div>\n   </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n\n<ion-content>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_religiosos_details_details_module_ts.js.map