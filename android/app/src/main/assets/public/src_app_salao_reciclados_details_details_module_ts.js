(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_salao_reciclados_details_details_module_ts"],{

/***/ 46073:
/*!********************************************************************!*\
  !*** ./src/app/salao/reciclados/details/details-routing.module.ts ***!
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
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 95135);




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

/***/ 22703:
/*!************************************************************!*\
  !*** ./src/app/salao/reciclados/details/details.module.ts ***!
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 46073);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 95135);







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

/***/ 95135:
/*!**********************************************************!*\
  !*** ./src/app/salao/reciclados/details/details.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 72177);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 55200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);





let DetailsPage = class DetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.listarecicla = [
            { "foto": "1", "nome": "ANDRÉ LUIZ MENEZES DO NASCIMENTO", "estado": "PE", "peca": "MENTE ARMORIAL", "classificacao": "ARTE RECICLADA", "contato": "(81) 99982 5433" },
            { "foto": "2", "nome": "ANDRÉ LUIZ MENEZES DO NASCIMENTO", "estado": "PE", "peca": "HOMEM CALANGO AZUL", "classificacao": "ARTE RECICLADA", "contato": " (81) 99982 5433" },
            { "foto": "3", "nome": "ANDRÉ LUIZ MENEZES DO NASCIMENTO", "estado": "PE", "peca": "PÁSSARO LAMPIÃO", "classificacao": "ARTE RECICLADA", "contato": " (81) 99982 5433" },
            { "foto": "4", "nome": "ANTONIO CARLOS LAURENTINO RIBEIRO", "estado": "PE", "peca": "CAVALGANDO", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 99109 2827" },
            { "foto": "5", "nome": "ALCIONE FREITAS MARQUES DE LIMA", "estado": "PE", "peca": "PORTA VELAS: SANTA DE ROCA ARMORIAL", "classificacao": "DESIGN RECICLADO", "contato": "(81) 98321 4009" },
            { "foto": "6", "nome": "ALCIONE FREITAS MARQUES DE LIMA", "estado": "PE", "peca": "VIAGEM AO UNIVERSO LÚDICO DAS BRINCADEIRAS TRADICIONAIS", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98321 4009" },
            { "foto": "7", "nome": "ALCIONE FREITAS MARQUES DE LIMA", "estado": "PE", "peca": "INFÂNCIA EM TEMPOS DE COVID", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98321 4009" },
            { "foto": "8", "nome": "ANA NADIEGE SPINELLI LARANJEIRAS", "estado": "PE", "peca": "SANTA CEIA", "classificacao": "DESIGN RECICLADO", "contato": "(81) 99112 0361" },
            { "foto": "9", "nome": "ANDRÉ LUIZ DE MELO FREITAS", "estado": "PE", "peca": "OXALÁ", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 99997 8069" },
            { "foto": "10", "nome": "ANDRÉ LUIZ DE MELO FREITAS", "estado": "PE", "peca": "ANASTÁCIA", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 99997 8069" },
            { "foto": "11", "nome": "ELIU DAMASCENO CORREA SILVA", "estado": "PE", "peca": "O PAVÃO", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 98851 5154" },
            { "foto": "12", "nome": "ELIU DAMASCENO CORREA SILVA", "estado": "PE", "peca": "MENOS PROJÉTEIS E MAS FLORES", "classificacao": "ARTE RECICLADA", "contato": " (81) 98851 5154" },
            { "foto": "13", "nome": "EDMILSON DE SÁ BARRETO", "estado": "PE", "peca": "PEIXE", "classificacao": "ARTE RECICLADA", "contato": "(81) 98321 4009" },
            { "foto": "14", "nome": "EFIGÊNIA MARIA FREIRE DA SILVA", "estado": "PE", "peca": "O BOI NA NOITE ESTRELADA", "classificacao": "ARTE RECICLADA", "contato": "(81) 98859 5463 " },
            { "foto": "15", "nome": "EFIGÊNIA MARIA FREIRE DA SILVA", "estado": "PE", "peca": "JOGO DA VELHA - FREVO X CABOCLINHO", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98859 5463 " },
            { "foto": "16", "nome": "ELIZABETH SANDRA CYRNE FERREIRA", "estado": "PE", "peca": "SOMOS UM - 50X97X8", "classificacao": "ARTE RECICLADA", "contato": "(81) 99669 2552" },
            { "foto": "17", "nome": "EMANUEL IZAQUI CORREA SILVA", "estado": "PE", "peca": "BRENNAND", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98851 5154" },
            { "foto": "18", "nome": "HILDA DOS SANTOS BRANDÃO", "estado": "PE", "peca": "LOUVADA SEJA A VIDA", "classificacao": "ARTESANATO RECICLADO", "contato": "  (81) 98539 7282" },
            { "foto": "19", "nome": "HILDA DOS SANTOS BRANDÃO", "estado": "PE", "peca": "CONSTELAR", "classificacao": "ARTESANATO RECICLADO", "contato": "  (81) 98539 7282" },
            { "foto": "20", "nome": "HILDA DOS SANTOS BRANDÃO", "estado": "PE", "peca": "O DOMÍNIO", "classificacao": "ARTESANATO RECICLADO", "contato": "  (81) 98539 7282" },
            { "foto": "21", "nome": "IVONE GONÇALVES MENDES", "estado": "PE", "peca": "ORATÓRIO DOS ANJOS", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 3429 1583" },
            { "foto": "22", "nome": "JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR", "estado": "PE", "peca": "ANELÃO ESTRELAR", "classificacao": "ARTE RECICLADA", "contato": "(81) 99926 6304" },
            { "foto": "23", "nome": "JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR", "estado": "PE", "peca": "BRINCO PAPAGAIO DO FUTURO", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 99926 6304" },
            { "foto": "24", "nome": "JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR", "estado": "PE", "peca": "CONJUNTO DE COLAR E BRINCO DIA DE SOL", "classificacao": "DESIGN RECICLADO", "contato": "(81) 99926 6304" },
            { "foto": "25", "nome": "JORGE PEREIRA DE LIMA", "estado": "PE", "peca": "CAMINHÃO ENGARRAFADO", "classificacao": "ARTE RECICLADA", "contato": " (81) 98668 7970" },
            { "foto": "26", "nome": "JORGE PEREIRA DE LIMA", "estado": "PE", "peca": "CHEVROLET GIGANTE (CARICATURA)", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 98668 7970" },
            { "foto": "27", "nome": "JORGE ROBERTO DA SILVA WANDERLEY", "estado": "PE", "peca": "DO MANGUE AO ARMORIAL - A FUGA", "classificacao": "ARTE RECICLADA", "contato": "(81) 98362 5368" },
            { "foto": "28", "nome": "JOÃO CASSIANO GOMES ", "estado": "PE", "peca": "EMPODERAMENTO", "classificacao": "ARTE RECICLADA", "contato": "(81) 99982 5728" },
            { "foto": "29", "nome": "JÚLIO MARQUES DA ROCHA NETO", "estado": "PE", "peca": "NOSSA SRA MÃE DA CULTURA PERNAMBUCANA", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98461 2495" },
            { "foto": "30", "nome": "JÚLIO MARQUES DA ROCHA NETO", "estado": "PE", "peca": "SERENATA PRA ROSINHA", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98461 2495" },
            { "foto": "31", "nome": "LUIZ CARLOS MELO DOS SANTOS", "estado": "PE", "peca": "GUERREIRO DO INVISIVEL", "classificacao": "DESIGN RECICLADO", "contato": "(81) 99798 4890" },
            { "foto": "32", "nome": "LUIZ CARLOS MELO DOS SANTOS", "estado": "PE", "peca": "CANGAÇO O REI E A RAINHA", "classificacao": "ARTE RECICLADA", "contato": "(81) 99798 4890" },
            { "foto": "33", "nome": "MARCOS ALBERTO CORREA SILVA", "estado": "PE", "peca": "O MANGUE CLAMA", "classificacao": "ARTE RECICLADA", "contato": "(81) 98763 5415" },
            { "foto": "34", "nome": "MARIA DO SOCORRO DA SILVA", "estado": "PE", "peca": "PORCO - ESPINHO", "classificacao": "ARTESANATO RECICLADO", "contato": " (81) 99375 9818" },
            { "foto": "35", "nome": "MILTON PEREIRA DE ARAUJO", "estado": "PE", "peca": "PASTORIL ESTRELA DE BELÉM", "classificacao": "ARTESANATO RECICLADO", "contato": "(81) 98738 3222" },
            { "foto": "36", "nome": "PAULO ROBERTO CARNEIRO COSTA", "estado": "PE", "peca": "RETIRANTES", "classificacao": "ARTE RECICLADA", "contato": " (81) 99548 4593" },
            { "foto": "37", "nome": "PAULO ROBERTO CARNEIRO COSTA", "estado": "PE", "peca": "GALO DA MADRUGADA", "classificacao": "ARTE RECICLADA", "contato": " (81) 99548 4593" },
            { "foto": "38", "nome": "PAULO ROBERTO CARNEIRO COSTA", "estado": "PE", "peca": "CABOCLO DE LANÇA", "classificacao": "ARTE RECICLADA", "contato": " (81) 99548 4593" },
            { "foto": "39", "nome": "ROSIANE SILVA SANTOS ", "estado": "AL", "peca": "CONSCIÊNCIA ", "classificacao": "ARTE RECICLADA", "contato": "(82) 99838 6272" },
            { "foto": "40", "nome": "ROSIANE SILVA SANTOS ", "estado": "AL", "peca": "FRAGMENTOS", "classificacao": "ARTE RECICLADA", "contato": "(82) 99838 6272" },
            { "foto": "41", "nome": "ROSIANE SILVA SANTOS ", "estado": "AL", "peca": "EU CÉLULA NO MUNDO", "classificacao": "ARTE RECICLADA", "contato": "(82) 99838 6272" },
            { "foto": "42", "nome": "SIMONE ALVES SIMONEK", "estado": "PE", "peca": "BALEIOTA BLUE", "classificacao": "ARTE RECICLADA", "contato": "(81) 99929 5634" },
            { "foto": "43", "nome": "SIMONE ALVES SIMONEK", "estado": "PE", "peca": "LUMINÁRIA CHEESE", "classificacao": "DESIGN RECICLADO", "contato": "(81) 99929 5634" },
            { "foto": "44", "nome": "SÓCRATES JOSE OSEAS DA SILVA MESQUITA", "estado": "PE", "peca": "CIRANDA DE CABOCLO", "classificacao": "ARTE RECICLADA", "contato": " (81) 9292 4913" },
            { "foto": "45", "nome": "VICENTE DA SILVA", "estado": "PE", "peca": "DOM QUIXOTE BRASILEIRO ARMORIAL", "classificacao": "ARTE RECICLADA", "contato": "(81) 98725 2920" },
            { "foto": "46", "nome": "WALDIR DE SANTANA FALCÃO", "estado": "PE", "peca": "BEIJA - FLOR", "classificacao": "ARTE RECICLADA", "contato": "(81) 98886 6622" },
            { "foto": "47", "nome": "WALTER BATISTA DA MATA JUNIOR", "estado": "PE", "peca": "ZABÉ DA LOCA, GUARDIÃ DOS ECOS DAS SERRAS", "classificacao": "ARTE RECICLADA", "contato": " (81) 99500 2034" },
            { "foto": "48", "nome": "WALTER BATISTA DA MATA JUNIOR", "estado": "PE", "peca": "LIA, A GUARDIÃ DAS ONDAS", "classificacao": "ARTE RECICLADA", "contato": " (81) 99500 2034" },
            { "foto": "49", "nome": "WALTER BATISTA DA MATA JUNIOR", "estado": "PE", "peca": "MADAME SATÃ, GUARDIÃ DOS PALCOS DOS GUETOS", "classificacao": "ARTE RECICLADA", "contato": " (81) 99500 2034" },
            { "foto": "50", "nome": "WLADIMIR GOMES DE LIMA", "estado": "PE", "peca": "LEMBRANÇAS DE ALEGRIAS DO CARNAVAL", "classificacao": "ARTE RECICLADA", "contato": " (81) 98813 6941" },
            { "foto": "51", "nome": "WLADIMIR GOMES DE LIMA", "estado": "PE", "peca": "ANJO MACHÊ", "classificacao": "ARTE RECICLADA", "contato": " (81) 98813 6941" },
            { "foto": "52", "nome": "WLADIMIR GOMES DE LIMA", "estado": "PE", "peca": "SANTINHA MACHÊ", "classificacao": "ARTE RECICLADA", "contato": " (81) 98813 6941" },
            { "foto": "53", "nome": "CINTIA VIANA RODRIGUES", "estado": "PE", "peca": "AGLOMERÔ", "classificacao": "ARTE RECICLADA", "contato": "81) 98912 7530" },
            { "foto": "54", "nome": "MAURO ROBERTO FIRMINO DOS SANTOS", "estado": "PE", "peca": "FUGINDO DA COVID-19 PARA OUTRO PLANETA", "classificacao": "ARTE RECICLADA", "contato": " (87) 99919 0748" },
            { "foto": "55", "nome": "MAURO ROBERTO FIRMINO DOS SANTOS", "estado": "PE", "peca": "MACUCA DO JOSÉ", "classificacao": "ARTE RECICLADA", "contato": " (87) 99919 0748" },
            { "foto": "56", "nome": "MAURO ROBERTO FIRMINO DOS SANTOS", "estado": "PE", "peca": "ANIMAIS A BORDO", "classificacao": "ARTESANATO RECICLADO", "contato": " (87) 99919 0748" },
            { "foto": "57", "nome": "VANESSA GOMES DOS SANTOS", "estado": "PE", "peca": "A CURA", "classificacao": "ARTE RECICLADA", "contato": " (81) 99208 0616" }
        ];
    }
    ngOnInit() {
        this.itemrecicla = this.activatedRoute.snapshot.paramMap.get('itemrecicla');
        for (let x of this.listarecicla) {
            if (x.foto == this.itemrecicla) {
                this.foto = x.foto;
                this.autor = x.nome;
                this.peca = x.peca;
                this.contato = x.contato;
                this.estado = x.estado;
                this.classificacao = x.classificacao;
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

/***/ 55200:
/*!************************************************************!*\
  !*** ./src/app/salao/reciclados/details/details.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 72177:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salao/reciclados/details/details.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/salao/reciclados\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n   <ion-content>\n     <div class=\"opcoes\">\n      <h1>\n       Reciclados\n      </h1>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Peça Exposta:\n            <p style=\"text-align: right;\">{{peca}}</p>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n           <img src=\"/assets/imgs/salao/reciclado/{{foto}}.jpg\" class=\"card-img-top\" alt=\"...\">\n           <h2>\n             Autor:\n           </h2>\n           <p>\n             <strong>\n                {{autor}}\n             </strong>\n           </p>\n             <h3>\n             Estado:\n           </h3>\n           <p>\n             <strong>\n                {{estado}}\n             </strong>\n           </p>\n          <h3>\n             Tipologia:\n           </h3>\n           <p>\n             <strong>\n                {{classificacao}}\n             </strong>\n           </p>\n        </ion-card-content>\n      </ion-card>\n     </div>\n   </ion-content>\n  <ion-footer>\n\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_salao_reciclados_details_details_module_ts.js.map