(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_traslado_traslado_module_ts"],{

/***/ 22844:
/*!*****************************************************!*\
  !*** ./src/app/traslado/traslado-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrasladoPageRoutingModule": () => (/* binding */ TrasladoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _traslado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traslado.page */ 71038);




const routes = [
    {
        path: '',
        component: _traslado_page__WEBPACK_IMPORTED_MODULE_0__.TrasladoPage
    }
];
let TrasladoPageRoutingModule = class TrasladoPageRoutingModule {
};
TrasladoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrasladoPageRoutingModule);



/***/ }),

/***/ 35767:
/*!*********************************************!*\
  !*** ./src/app/traslado/traslado.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrasladoPageModule": () => (/* binding */ TrasladoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _traslado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traslado-routing.module */ 22844);
/* harmony import */ var _traslado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traslado.page */ 71038);







let TrasladoPageModule = class TrasladoPageModule {
};
TrasladoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _traslado_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrasladoPageRoutingModule
        ],
        declarations: [_traslado_page__WEBPACK_IMPORTED_MODULE_1__.TrasladoPage]
    })
], TrasladoPageModule);



/***/ }),

/***/ 71038:
/*!*******************************************!*\
  !*** ./src/app/traslado/traslado.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrasladoPage": () => (/* binding */ TrasladoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_traslado_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./traslado.page.html */ 96408);
/* harmony import */ var _traslado_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traslado.page.scss */ 54559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let TrasladoPage = class TrasladoPage {
    constructor() { }
    ngOnInit() {
    }
};
TrasladoPage.ctorParameters = () => [];
TrasladoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-traslado',
        template: _raw_loader_traslado_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_traslado_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrasladoPage);



/***/ }),

/***/ 54559:
/*!*********************************************!*\
  !*** ./src/app/traslado/traslado.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color:rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254,230,20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXNsYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVDQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0ksVUFBQTtBQUdSOztBQURJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFHUjs7QUFESTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBR1I7O0FBQUE7RUFDSSw2QkFBQTtBQUdKOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJUjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlSOztBQUZJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtBQUlSOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InRyYXNsYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDIwMSwgMTMpO1xyXG4gICAgZm9udC1mYW1pbHk6IFNwYWNlR3JvdGVzaztcclxufVxyXG5pb24taGVhZGVyIHsgIFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwyMzAsMjApO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgLmJhY2stc3BsYXNoe1xyXG4gICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICB9XHJcbiAgICAuaW1nLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB9XHJcbiAgICAudHh0LWhlYWRlcntcclxuICAgICAgICB3aWR0aDogMTJlbTtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgfSAgICBcclxufVxyXG5pb24tY29udGVudHsgICAgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbn1cclxuaW9uLWZvb3RlcnsgICAgXHJcbiAgaGVpZ2h0OiAxNXZoOyAgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgICBcclxufSAgIl19 */");

/***/ }),

/***/ 96408:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/traslado/traslado.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n     <h1>\r\n      Traslado\r\n     </h1>\r\n\r\n     <p>\r\n      Para quem quer aproveitar melhor a feira, o expresso Fenearte está disponível gratuitamente com saídas do Shopping Tacaruna e Shopping Riomar.\r\n     </p>\r\n     <p>\r\n      Confira os horários de Saídas:\r\n     </p>\r\n     <ul>\r\n       <li>\r\n         Expresso Tacaruna - A cada 15 minutos\r\n       </li>\r\n       <li>\r\n         Expresso Riomar - A cada 30 minutos\r\n       </li>\r\n     </ul>\r\n\r\n     <h1>\r\n      Estacionamento:\r\n     </h1>\r\n     <p>\r\n      Valor de estacionamento no Centro de Convenções: <strong>R$10,00</strong> <sup>(válido para o dia inteiro)</sup>\r\n     </p>\r\n\r\n  </ion-content>\r\n  <ion-footer>\r\n\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_traslado_traslado_module_ts.js.map