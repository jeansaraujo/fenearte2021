(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_ana_details_details_module_ts"],{

/***/ 4430:
/*!*************************************************************!*\
  !*** ./src/app/salao/ana/details/details-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 71177);




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

/***/ 28173:
/*!*****************************************************!*\
  !*** ./src/app/salao/ana/details/details.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 4430);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 71177);







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

/***/ 71177:
/*!***************************************************!*\
  !*** ./src/app/salao/ana/details/details.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 88990);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 10399);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);





let DetailsPage = class DetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.lista = [
            { "foto": "1", "nome": "ADILSON VITORINO NUNES", "estado": "PE", "peca": "FULGA DE NAMORADO", "tipo": "CERÂMICA", "contato": "(81) 98934 3839" },
            { "foto": "2", "nome": "ALDEMIR ELIAS DO NASCIMENTO", "estado": "PE", "peca": "BANCO TRIO NORDESTINO", "tipo": "MADEIRA", "contato": "(81) 98859 9957" },
            { "foto": "3", "nome": "ALMIR BARBOSA DOS SANTOS", "estado": "PE", "peca": "VOLANTE BRINCANTE DE RUA", "tipo": "MADEIRA", "contato": "(81) 9548 0792" },
            { "foto": "4", "nome": "AMANDA PAES RODRIGUES PEREIRA", "estado": "PE", "peca": "REMÉDIO PARA ALMA", "tipo": "CERÂMICA", "contato": "(81) 99611 8583" },
            { "foto": "5", "nome": "AMANDA PAES RODRIGUES PEREIRA", "estado": "PE", "peca": "O AUTO DA COMPADECIDA (ARIANO SUASSUNA)", "tipo": "CERÂMICA", "contato": "(81) 99611 8583" },
            { "foto": "6", "nome": "CARLOS FERNANDO BARBOSA DE BARROS", "estado": "PE", "peca": "VIDA SERTANEJA", "tipo": "MADEIRA", "contato": "(87) 3841 2481" },
            { "foto": "7", "nome": "DAMIÃO FÁBIO RAMOS DA SILVA", "estado": "PE", "peca": "GORGULA DO SERTÃO", "tipo": "MADEIRA", "contato": "(87) 99198 3920" },
            { "foto": "8", "nome": "DAMIÃO FÁBIO RAMOS DA SILVA", "estado": "PE", "peca": "COLERA DO DRAGÃO", "tipo": "MADEIRA", "contato": "(87) 99198 3920" },
            { "foto": "9", "nome": "ERASMO DE LIMA BELTRÃO", "estado": "PE ", "peca": "COBRA NO MANGUEZAL", "tipo": "MADEIRA", "contato": "(81) 99197 1125" },
            { "foto": "10", "nome": "ERASMO DE LIMA BELTRÃO", "estado": "PE ", "peca": "PAIS, FILHOS E NETOS DE MÃOS DADAS CONSTRUINDO O AMANHÃ", "tipo": "MADEIRA", "contato": "(81) 99197 1125" },
            { "foto": "11", "nome": "EVILASIO LEÃO MACHADO", "estado": "PE", "peca": "SEREIA CABOCLA", "tipo": "CERÂMICA", "contato": "81 99870 7401" },
            { "foto": "12", "nome": "EDILSON OLIVEIRA", "estado": "PE", "peca": "MAIS UMA VITIMA", "tipo": "CERÂMICA", "contato": "(81) 99430 6023" },
            { "foto": "13", "nome": "EDJANE CABRAL DA SILVA", "estado": "PE", "peca": "REI E RAINHA DO MARACATU", "tipo": "CERÂMICA", "contato": "(81) 99722 1610" },
            { "foto": "14", "nome": "EDNEIDE RODRIGUES SILVA", "estado": "PE", "peca": "MULHER NORDESTINA", "tipo": "CERÂMICA", "contato": "(81) 99738 7912" },
            { "foto": "15", "nome": "EDUARDO FAUSTINO DOS SANTOS", "estado": "AL", "peca": "PANDEMIA II", "tipo": "CERÂMICA", "contato": "(82) 9971 4029" },
            { "foto": "16", "nome": "EDVALDO JOSÉ DE ANDRADE JÚNIOR", "estado": "PE", "peca": "SÃO BENEDITO EM SUA ESSENCIA", "tipo": "CERÂMICA", "contato": "(81) 9209 0604" },
            { "foto": "17", "nome": "EDVALDO MANOEL NUNES", "estado": "PE", "peca": "BRINCADEIRA DE CAVALO MARINHO CATIRINA", "tipo": "CERÂMICA", "contato": "(81) 9458 2987" },
            { "foto": "18", "nome": "EDVALDO MANOEL NUNES", "estado": "PE", "peca": "O MAMULENGUEIRO - A ARTE NÃO APAGA, SEMEADA", "tipo": "CERÂMICA", "contato": "(81) 9458 2987" },
            { "foto": "19", "nome": "EFIGÉNIA MARIA FREIRE DA SILVA", "estado": "PE", "peca": "DOIDIN PRA VÓ", "tipo": "CERÂMICA", "contato": "(81) 98764 5245" },
            { "foto": "20", "nome": "EVALDO FRANCISCO EZEQUIEL", "estado": "PE", "peca": "OLINDA SIMPLESMENTE LINDA", "tipo": "MADEIRA", "contato": "(81) 99504 0361" },
            { "foto": "21", "nome": "GEISYANE INGRID ALEIXO LOPES", "estado": "PE", "peca": "A MULHER NA CANTORIA DE VIOLA", "tipo": "CERÂMICA", "contato": "(81) 99868 2440" },
            { "foto": "22", "nome": "HUMBERTO DIOGENES BOTÃO", "estado": "PE", "peca": "OLEIRO", "tipo": "CERÂMICA", "contato": "(81) 99630 9507" },
            { "foto": "23", "nome": "HUMBERTO DIOGENES BOTÃO", "estado": "PE", "peca": "REINO ARMORIAL", "tipo": "CERÂMICA", "contato": "(81) 99630 9507" },
            { "foto": "24", "nome": "IVO DIODATO DA SILVA", "estado": "PE", "peca": "HISTÓRIA DE PESCADOR", "tipo": "CERÂMICA", "contato": "81 99428 2379" },
            { "foto": "25", "nome": "ISABELA VIDA MORENO", "estado": "PE", "peca": "PATRIMÓNIO EM CHEQUE", "tipo": "CERÂMICA", "contato": "(11) 95790 0010" },
            { "foto": "26", "nome": "JAILSON SILVA DO NASCIMENTO", "estado": "PE", "peca": "A ARTE E O PENSAMENTO DO ARTISTA", "tipo": "MADEIRA", "contato": "(81) 99503 9572" },
            { "foto": "27", "nome": "JANAINA BARBOSA DE MELO", "estado": "PE", "peca": "O FORRO DE LAMPIÃO E MARIA BONITA", "tipo": "CERÂMICA", "contato": "(81) 99570 2218" },
            { "foto": "28", "nome": "JOSEMAR GONÇALVES MARINHO", "estado": "PE", "peca": "CASTELO DOS SÃONHOS", "tipo": "MADEIRA", "contato": "(81) 9509 8469" },
            { "foto": "29", "nome": "JOSÉ EDVAN FERREIRA DE LIMA - MESTRE BILA", "estado": "PE", "peca": "PERSÃONAGEM DO MAMULENGO DIABO E MORTE", "tipo": "MADEIRA", "contato": "(81) 98915 7337" },
            { "foto": "30", "nome": "JOSÉ GALDINO DA SILVA IRMÃO", "estado": "PE", "peca": "GRACILIANO RAMOS E VIDAS SECAS", "tipo": "CERÂMICA", "contato": "(81) 98902 1811" },
            { "foto": "31", "nome": "JOSÉ JÚNIOR COSTA", "estado": "PE", "peca": "CABOCLO DE LANOA", "tipo": "PEDRA", "contato": "(81) 99637 3968" },
            { "foto": "32", "nome": "JOSÉ VITALINO DA SILVA", "estado": "PE", "peca": "MULHER DANDO A LUZ", "tipo": "MADEIRA", "contato": "(81) 98912 7530" },
            { "foto": "33", "nome": "KATIA ROSANA RODRIGUES SILVA", "estado": "PE", "peca": "PROSÃOPOPEIA DE BENTO TEIXEIRA", "tipo": "CERÂMICA", "contato": "(81) 99632 9305" },
            { "foto": "34", "nome": "LUIS GALDINO DE FREITAS", "estado": "PE", "peca": "ESCOLA", "tipo": "CERÂMICA", "contato": "(81) 99887 0658" },
            { "foto": "35", "nome": "LUIZ CARLOS FERREIRA DA SILVA", "estado": "PE", "peca": "O PESCADOR", "tipo": "CERÂMICA", "contato": "(81) 99309 2270" },
            { "foto": "36", "nome": "LUCIVANIA SILVA DE FREITAS", "estado": "PE", "peca": "JOGO DE XADREZ CORAL", "tipo": "CERÂMICA", "contato": "(81) 99782 3353" },
            { "foto": "37", "nome": "LUIZ CARLOS RODRIGUES", "estado": "PE", "peca": "PAMONHADA", "tipo": "CERÂMICA", "contato": "(81) 9969 4629" },
            { "foto": "38", "nome": "LUIZ CARLOS DA SILVA", "estado": "PE", "peca": "A GOTA D'AGUA", "tipo": "MADEIRA", "contato": "(87) 99654 6658" },
            { "foto": "39", "nome": "MARIA DO SOCORRO RODRIGUES DA SILVA", "estado": "PE", "peca": "PAU DE SEBO", "tipo": "CERÂMICA", "contato": "(81) 9835 09290" },
            { "foto": "40", "nome": "MARIA APARECIDA BESERRA DE MORAES", "estado": "PE", "peca": "AOS PROFISSIONAIS DE SAÚDE NOSSA GRATIDÃO", "tipo": "RESINA", "contato": "(81) 99786 5746" },
            { "foto": "41", "nome": "MILTON PEREIRA DE ARAUJO", "estado": "PE", "peca": "O CASAMENTO DE ZILDA COM SEU EUZEBIO DA FINADA JUDITE", "tipo": "RESINA", "contato": "(81) 98738 3222" },
            { "foto": "42", "nome": "MOACIR SEVERINO DA SILVA", "estado": "PE", "peca": "A NATUREZA PEDE SÃOCORRO", "tipo": "CERÂMICA", "contato": "(81) 9170 4863" },
            { "foto": "43", "nome": "MOIZES VITAL DA SILVA", "estado": "PE", "peca": "A COLHEITA", "tipo": "MADEIRA", "contato": "(81) 98364 3879" },
            { "foto": "44", "nome": "PAULO ANDRE MOREIRA CALUETE", "estado": "PE", "peca": "GOBEKLI TEPE", "tipo": "CERÂMICA", "contato": "(81) 99661 0458" },
            { "foto": "45", "nome": "PRESCILIANA NOBRE FONTES", "estado": "PE", "peca": "A FLOR DE PARAGALDINO", "tipo": "CERÂMICA", "contato": "(81) 99868 2440" },
            { "foto": "46", "nome": "PRESCILIANA NOBRE FONTES", "estado": "PE", "peca": "PORQUE ELEITO B� OU NO SEU OLHO", "tipo": "CERÂMICA", "contato": "(81) 99868 2440" },
            { "foto": "47", "nome": "REGINALDO SOUZA DA SILVA", "estado": "PE", "peca": "CASAL DE TEJU PASSEANDO", "tipo": "MADEIRA", "contato": "(81) 98638 3482" },
            { "foto": "48", "nome": "SIVONALDO NUNES DE ARAUJO", "estado": "PE", "peca": "ARIANO CONTA A HISTÓRIA DAS LA URSAS", "tipo": "CERÂMICA", "contato": "(81) 98977 2772" },
            { "foto": "49", "nome": "SIVONALDO NUNES DE ARAUJO", "estado": "PE", "peca": "BRINCARIANO", "tipo": "CERÂMICA", "contato": "(81) 98977 2772" },
            { "foto": "50", "nome": "SANDORVAL PEREIRA DE LIMA", "estado": "PE", "peca": "ÁGUIA", "tipo": "MADEIRA", "contato": "(87) 99679 5347" },
            { "foto": "51", "nome": "SIDNEY BATISTA DOMINGOS JÚNIOR", "estado": "PE", "peca": "OH! LINDA SITUAÇÃO PRA SE CONSTRUIR UMA VILA", "tipo": "MADEIRA", "contato": "(81) 99679 9484" },
            { "foto": "52", "nome": "SIMONE DE SOUZA", "estado": "PE", "peca": "AVENTUREIROS", "tipo": "MADEIRA", "contato": "(87) 9920 8471" },
            { "foto": "53", "nome": "SIMONE DE SOUZA", "estado": "PE", "peca": "AMOR DE MÃE", "tipo": "MADEIRA", "contato": "(87) 9920 8471" },
            { "foto": "54", "nome": "SOLANGE DE PAULA LOPES SANTOS", "estado": "PE", "peca": "TRAVESSA DO MAR", "tipo": "CERÂMICA", "contato": "(81) 98806 7222" },
            { "foto": "55", "nome": "SUZANA CARNEIRO DA CUNHA WANDERLEY", "estado": "PE", "peca": "VASÃO CARAMELO COM GOIABA", "tipo": "CERÂMICA", "contato": "(81) 99739 7736" },
            { "foto": "56", "nome": "SÉRGIO RICARDO DE OLIVEIRA BANDEIRA", "estado": "PE", "peca": "BICHO DE TREZE CABEÇAS", "tipo": "CERÂMICA", "contato": "(81) 98553 9834" },
            { "foto": "57", "nome": "WORSILEY GOUVEIA DA SILVA E SILVA", "estado": "PE", "peca": "GATO SPHYNX INSPIRADO NA DEUSA BASTET", "tipo": "CERÂMICA", "contato": "(81) 99773 8506" },
            { "foto": "58", "nome": "FREDSON ADJAIR LIMA PEREIRA", "estado": "PE", "peca": "A QUE TE ACOLHE", "tipo": "MADEIRA", "contato": "(87) 99206 4137" },
            { "foto": "59", "nome": "RAFAEL COSTA PEREIRA RATINHO", "estado": "PE", "peca": "O ANJO BORBOLETA", "tipo": "CERÂMICA", "contato": "81) 99791 5616" },
            { "foto": "60", "nome": "RAFAEL COSTA PEREIRA RATINHO", "estado": "PE", "peca": "DEUS E O APOCALIPSE", "tipo": "CERÂMICA", "contato": "81) 99791 5616" },
            { "foto": "61", "nome": "EMERSÃO CAETANO DA SILVA", "estado": "PE", "peca": "EM TUDO ELE SERIA REI", "tipo": "CERÂMICA", "contato": "(81) 99411 7979" }
        ];
    }
    ngOnInit() {
        this.itemana = this.activatedRoute.snapshot.paramMap.get('itemana');
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].foto == this.itemana) {
                this.foto = this.lista[i].foto;
                this.autor = this.lista[i].nome;
                this.peca = this.lista[i].peca;
                this.contato = this.lista[i].contato;
                this.estado = this.lista[i].estado;
                this.tipo = this.lista[i].tipo;
            }
            // more statements
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

/***/ 10399:
/*!*****************************************************!*\
  !*** ./src/app/salao/ana/details/details.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 88990:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/ana/details/details.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao/ana\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n   <ion-content>\n     <div class=\"opcoes\">\n      <h1>\n       Salão Ana Holanda\n      </h1>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Peça Exposta:\n            <p style=\"text-align: right;\">{{peca}}</p>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n           <img src=\"/assets/imgs/salao/ana/{{foto}}.jpg\" class=\"card-img-top\" alt=\"...\">\n           <h2>\n             Autor:\n           </h2>\n           <p>\n             <strong>\n                {{autor}}\n             </strong>\n           </p>\n             <h3>\n             Estado:\n           </h3>\n           <p>\n             <strong>\n                {{estado}}\n             </strong>\n           </p>\n          <h3>\n             Tipologia:\n           </h3>\n           <p>\n             <strong>\n                {{tipo}}\n             </strong>\n           </p>\n        </ion-card-content>\n      </ion-card>\n     </div>\n   </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_ana_details_details_module_ts.js.map