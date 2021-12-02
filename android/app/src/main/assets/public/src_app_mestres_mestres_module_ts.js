(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_mestres_module_ts"],{

/***/ 50132:
/*!***************************************************!*\
  !*** ./src/app/mestres/mestres-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MestresPageRoutingModule": () => (/* binding */ MestresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _mestres_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mestres.page */ 22668);




const routes = [
    {
        path: '',
        component: _mestres_page__WEBPACK_IMPORTED_MODULE_0__.MestresPage
    },
    {
        path: 'abias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_abias_abias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./abias/abias.module */ 9251)).then(m => m.AbiasPageModule)
    },
    {
        path: 'bezinho',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_bezinho_bezinho_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bezinho/bezinho.module */ 82935)).then(m => m.BezinhoPageModule)
    },
    {
        path: 'banjos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_banjos_banjos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./banjos/banjos.module */ 16421)).then(m => m.BanjosPageModule)
    },
    {
        path: 'bitinho',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_bitinho_bitinho_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bitinho/bitinho.module */ 11128)).then(m => m.BitinhoPageModule)
    },
    {
        path: 'cabral',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_cabral_cabral_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cabral/cabral.module */ 81313)).then(m => m.CabralPageModule)
    },
    {
        path: 'carlosb',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_carlosb_carlosb_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./carlosb/carlosb.module */ 16786)).then(m => m.CarlosbPageModule)
    },
    {
        path: 'ccriolas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_ccriolas_ccriolas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ccriolas/ccriolas.module */ 46296)).then(m => m.CcriolasPageModule)
    },
    {
        path: 'chico',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_chico_chico_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chico/chico.module */ 96988)).then(m => m.ChicoPageModule)
    },
    {
        path: 'cida',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_cida_cida_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cida/cida.module */ 69056)).then(m => m.CidaPageModule)
    },
    {
        path: 'cunha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_cunha_cunha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cunha/cunha.module */ 97427)).then(m => m.CunhaPageModule)
    },
    {
        path: 'damiana',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_damiana_damiana_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./damiana/damiana.module */ 165)).then(m => m.DamianaPageModule)
    },
    {
        path: 'odete',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_odete_odete_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./odete/odete.module */ 38677)).then(m => m.OdetePageModule)
    },
    {
        path: 'dido',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_dido_dido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dido/dido.module */ 10519)).then(m => m.DidoPageModule)
    },
    {
        path: 'davit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_davit_davit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./davit/davit.module */ 49716)).then(m => m.DavitPageModule)
    },
    {
        path: 'erasmo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_erasmo_erasmo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erasmo/erasmo.module */ 24834)).then(m => m.ErasmoPageModule)
    },
    {
        path: 'fcarrancas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fcarrancas_fcarrancas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fcarrancas/fcarrancas.module */ 44355)).then(m => m.FcarrancasPageModule)
    },
    {
        path: 'fnuca',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fnuca_fnuca_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fnuca/fnuca.module */ 68862)).then(m => m.FnucaPageModule)
    },
    {
        path: 'fvitalino',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fvitalino_fvitalino_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fvitalino/fvitalino.module */ 11196)).then(m => m.FvitalinoPageModule)
    },
    {
        path: 'zecabloco',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zecabloco_zecabloco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zecabloco/zecabloco.module */ 63157)).then(m => m.ZecablocoPageModule)
    },
    {
        path: 'zezinho',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zezinho_zezinho_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zezinho/zezinho.module */ 93825)).then(m => m.ZezinhoPageModule)
    },
    {
        path: 'fmanuel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fmanuel_fmanuel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fmanuel/fmanuel.module */ 56401)).then(m => m.FmanuelPageModule)
    },
    {
        path: 'felias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_felias_felias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./felias/felias.module */ 6385)).then(m => m.FeliasPageModule)
    },
    {
        path: 'fida',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fida_fida_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fida/fida.module */ 32583)).then(m => m.FidaPageModule)
    },
    {
        path: 'gilson',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_gilson_gilson_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gilson/gilson.module */ 92859)).then(m => m.GilsonPageModule)
    },
    {
        path: 'ivo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_ivo_ivo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ivo/ivo.module */ 26079)).then(m => m.IvoPageModule)
    },
    {
        path: 'josa',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_josa_josa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./josa/josa.module */ 9489)).then(m => m.JosaPageModule)
    },
    {
        path: 'joaquim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_joaquim_joaquim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./joaquim/joaquim.module */ 77895)).then(m => m.JoaquimPageModule)
    },
    {
        path: 'jborges',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_jborges_jborges_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./jborges/jborges.module */ 20520)).then(m => m.JborgesPageModule)
    },
    {
        path: 'nena',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_nena_nena_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nena/nena.module */ 93466)).then(m => m.NenaPageModule)
    },
    {
        path: 'nilson',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_nilson_nilson_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nilson/nilson.module */ 92748)).then(m => m.NilsonPageModule)
    },
    {
        path: 'lula',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_lula_lula_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lula/lula.module */ 44502)).then(m => m.LulaPageModule)
    },
    {
        path: 'lantonio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_lantonio_lantonio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lantonio/lantonio.module */ 95606)).then(m => m.LantonioPageModule)
    },
    {
        path: 'lbenicio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_lbenicio_lbenicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lbenicio/lbenicio.module */ 50260)).then(m => m.LbenicioPageModule)
    },
    {
        path: 'lgaldino',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_lgaldino_lgaldino_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lgaldino/lgaldino.module */ 64692)).then(m => m.LgaldinoPageModule)
    },
    {
        path: 'bae',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_bae_bae_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bae/bae.module */ 22166)).then(m => m.BaePageModule)
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 51792)).then(m => m.DetailsPageModule)
    },
    {
        path: 'msertania',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_msertania_msertania_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./msertania/msertania.module */ 60101)).then(m => m.MsertaniaPageModule)
    },
    {
        path: 'malmeida',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_malmeida_malmeida_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./malmeida/malmeida.module */ 67824)).then(m => m.MalmeidaPageModule)
    },
    {
        path: 'msiqueira',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_msiqueira_msiqueira_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./msiqueira/msiqueira.module */ 40551)).then(m => m.MsiqueiraPageModule)
    },
    {
        path: 'mazinho',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_mazinho_mazinho_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mazinho/mazinho.module */ 25450)).then(m => m.MazinhoPageModule)
    },
    {
        path: 'mfirmino',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_mfirmino_mfirmino_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mfirmino/mfirmino.module */ 99179)).then(m => m.MfirminoPageModule)
    },
    {
        path: 'miro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_miro_miro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./miro/miro.module */ 48976)).then(m => m.MiroPageModule)
    },
    {
        path: 'neguinha',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_neguinha_neguinha_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./neguinha/neguinha.module */ 67335)).then(m => m.NeguinhaPageModule)
    },
    {
        path: 'nado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_nado_nado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nado/nado.module */ 10879)).then(m => m.NadoPageModule)
    },
    {
        path: 'nido',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_nido_nido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nido/nido.module */ 40655)).then(m => m.NidoPageModule)
    },
    {
        path: 'nicola',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_nicola_nicola_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nicola/nicola.module */ 11091)).then(m => m.NicolaPageModule)
    },
    {
        path: 'pbode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_pbode_pbode_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pbode/pbode.module */ 68300)).then(m => m.PbodePageModule)
    },
    {
        path: 'pintor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_pintor_pintor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pintor/pintor.module */ 62933)).then(m => m.PintorPageModule)
    },
    {
        path: 'rsanteiro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_rsanteiro_rsanteiro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rsanteiro/rsanteiro.module */ 72570)).then(m => m.RsanteiroPageModule)
    },
    {
        path: 'rvital',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_rvital_rvital_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rvital/rvital.module */ 64885)).then(m => m.RvitalPageModule)
    },
    {
        path: 'rosalvo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_rosalvo_rosalvo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rosalvo/rosalvo.module */ 84073)).then(m => m.RosalvoPageModule)
    },
    {
        path: 'espindola',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_espindola_espindola_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./espindola/espindola.module */ 51314)).then(m => m.EspindolaPageModule)
    },
    {
        path: 'talagoana',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_talagoana_talagoana_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./talagoana/talagoana.module */ 65944)).then(m => m.TalagoanaPageModule)
    },
    {
        path: 'ttimbi',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_ttimbi_ttimbi_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ttimbi/ttimbi.module */ 83511)).then(m => m.TtimbiPageModule)
    },
    {
        path: 'tamorim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_tamorim_tamorim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tamorim/tamorim.module */ 82637)).then(m => m.TamorimPageModule)
    },
    {
        path: 'zealves',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zealves_zealves_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zealves/zealves.module */ 92972)).then(m => m.ZealvesPageModule)
    },
    {
        path: 'zedomestre',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zedomestre_zedomestre_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zedomestre/zedomestre.module */ 21713)).then(m => m.ZedomestrePageModule)
    },
    {
        path: 'zelopes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zelopes_zelopes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zelopes/zelopes.module */ 7470)).then(m => m.ZelopesPageModule)
    },
    {
        path: 'wporto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_wporto_wporto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wporto/wporto.module */ 45511)).then(m => m.WportoPageModule)
    },
    {
        path: 'zuza',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_zuza_zuza_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./zuza/zuza.module */ 26029)).then(m => m.ZuzaPageModule)
    },
    {
        path: 'mamelia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_mamelia_mamelia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mamelia/mamelia.module */ 34757)).then(m => m.MameliaPageModule)
    },
    {
        path: 'fbatista',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_fbatista_fbatista_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fbatista/fbatista.module */ 18969)).then(m => m.FbatistaPageModule)
    },
    {
        path: 'snenem',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_snenem_snenem_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./snenem/snenem.module */ 44441)).then(m => m.SnenemPageModule)
    },
    {
        path: 'vbrito',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mestres_vbrito_vbrito_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vbrito/vbrito.module */ 31443)).then(m => m.VbritoPageModule)
    }
];
let MestresPageRoutingModule = class MestresPageRoutingModule {
};
MestresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MestresPageRoutingModule);



/***/ }),

/***/ 20717:
/*!*******************************************!*\
  !*** ./src/app/mestres/mestres.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MestresPageModule": () => (/* binding */ MestresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _mestres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mestres-routing.module */ 50132);
/* harmony import */ var _mestres_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mestres.page */ 22668);







let MestresPageModule = class MestresPageModule {
};
MestresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mestres_routing_module__WEBPACK_IMPORTED_MODULE_0__.MestresPageRoutingModule
        ],
        declarations: [_mestres_page__WEBPACK_IMPORTED_MODULE_1__.MestresPage]
    })
], MestresPageModule);



/***/ }),

/***/ 22668:
/*!*****************************************!*\
  !*** ./src/app/mestres/mestres.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MestresPage": () => (/* binding */ MestresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_mestres_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mestres.page.html */ 14156);
/* harmony import */ var _mestres_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mestres.page.scss */ 87942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let MestresPage = class MestresPage {
    constructor() {
    }
    ngOnInit() {
    }
};
MestresPage.ctorParameters = () => [];
MestresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mestres',
        template: _raw_loader_mestres_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mestres_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MestresPage);



/***/ }),

/***/ 87942:
/*!*******************************************!*\
  !*** ./src/app/mestres/mestres.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".nome {\n  font-size: 0.8em;\n  font-style: italic;\n}\n\n.apelido {\n  font-weight: bolder;\n  border-bottom: 2px solid #fee614;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3RyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoibWVzdHJlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9tZSB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLmFwZWxpZG8ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTQsIDIzMCwgMjApO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 14156:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/mestres.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1> Alamenda dos Mestres </h1>\r\n          <ul>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/abias\">\r\n                    Abias\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/abias\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/bezinho\">\r\n                    Bezinho Kambiwá\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/bezinho\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/bitinho\">\r\n                    Bitinho\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/bitinho\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/cabral\">\r\n                   Cabral\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/cabral\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/cabralb\">\r\n                 Carlos B.\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/cabralb\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/ccriolas\">\r\n                 Conceição das Criolas\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/ccriolas\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/chico\">\r\n                 Chico Santeiro\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/chico\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/cida\">\r\n                 Cida Lima\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/cida\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/cunha\">\r\n                  Cunha\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/cunha\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/odete\">\r\n                  Dona Odete\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/odete\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/dido\">\r\n                  Dido\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/dido\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/dido\">\r\n                  Dido\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/dido\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/davit\">\r\n                  Davi Teixeira\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/davit\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/erasmo\">\r\n                  Erasmo\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/erasmo\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fcarrancas\">\r\n                  Família Ana das Carrancas\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fcarrancas\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fnuca\">\r\n                  Família Nuca\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fnuca\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n            <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fvitalino\">\r\n                  Família Vitalino\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fvitalino\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/zezinho\">\r\n                  Família Zezinho de Tracunhaém\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/zezinho\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fmanuel\">\r\n                  Família Manuel Eudócio\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fmanuel\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fmanuel\">\r\n                  Família Manuel Eudócio\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fmanuel\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/felias\">\r\n                  Família Elias\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/felias\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fernandes\">\r\n                 Fernandes Rodrigues\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fernandes\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fida\">\r\n                 Fida\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fida\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/gilson\">\r\n                Gilson\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/gilson\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/ivo\">\r\n                    Ivo\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/ivo\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/josa\">\r\n                  Josa\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/josa\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/joaquim\">\r\n                  Joaquim\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/joaquim\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/nilson\">\r\n                 Nilson\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/nilson\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/lantonio\">\r\n                  Luiz Antônio\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/lantonio\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/lbenicio\">\r\n                  Luiz Benício\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/lbenicio\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/lgaldino\">\r\n                  Luiz Galdino\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/lgaldino\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/bae\">\r\n                  Mano de Baé\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/lgaldino\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/msertania\">\r\n                 Marcos de Sertânia\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/msertania\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/malmeida\">\r\n                 Marcos Roberto\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/malmeida\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/msiqueira\">\r\n                 Marcos Siqueira\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/msiqueira\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/mazinho\">\r\n                 Mazinho\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/mazinho\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/mamelia\">\r\n                 Maria Amélia\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/mamelia\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/mfirmino\">\r\n                 Maria Lúcia Firmino\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/mfirmino\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/miro\">\r\n                 Miro\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/miro\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/neguinha\">\r\n                 Neguinha\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/neguinha\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/nido\">\r\n                 Nido\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/nido\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/nado\">\r\n                 Nado\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/nado\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/nicola\">\r\n                 Nicola\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/nicola\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/pbode\">\r\n                 Paulo do Bode\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/pbode\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/pintor\">\r\n                Pintor\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/pintor\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/rsanteiro\">\r\n                Roque Santeiro\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/rsanteiro\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/rvital\">\r\n                Roberto Vital\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/rvital\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/rosalvo\">\r\n                Rosalvo\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/rosalvo\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/espindola\">\r\n                Seu João Espíndola\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/espindola\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/talagoana\">\r\n                Tapeçaria Alagoana\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/talagoana\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/ttimbi\">\r\n                Tapeçaria Timbi\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/ttimbi\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/tamorim\">\r\n                Tiago Amorim\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/tamorim\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/zealves\">\r\n                Zé Alves\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/zealves\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/zedomestre\">\r\n                Zé do Mestre\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/zedomestre\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/zelopes\">\r\n                Zé Lopes\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/zelopes\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/wporto\">\r\n                Wagner Porto\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/wporto\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/zuza\">\r\n                Zuza\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/zuza\">Bio</ion-badge>\r\n              </ion-item>\r\n            </li>\r\n          </ul>\r\n          <h1> Mestres PAB </h1>\r\n          <ul>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/fbatista\">\r\n                    Família Batista\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/fbatista\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n            <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/snenen\">\r\n                   Seu Neném\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/snenen\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n             <li>\r\n              <ion-item slot=\"start\">\r\n                  <ion-text color=\"dark\" class=\"fs-6 m-2\" routerLink=\"/mestres/vbrito\">\r\n                    Vera Brito\r\n                </ion-text>\r\n                <ion-badge color=\"medium\" routerLink=\"/mestres/vtrito\">Bio </ion-badge>\r\n              </ion-item>\r\n            </li>\r\n          </ul>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  <ion-footer>\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_mestres_module_ts.js.map