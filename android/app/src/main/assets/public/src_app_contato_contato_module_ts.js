(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_contato_contato_module_ts"],{

/***/ 13277:
/*!***************************************************!*\
  !*** ./src/app/contato/contato-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPageRoutingModule": () => (/* binding */ ContatoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato.page */ 16012);




const routes = [
    {
        path: '',
        component: _contato_page__WEBPACK_IMPORTED_MODULE_0__.ContatoPage
    }
];
let ContatoPageRoutingModule = class ContatoPageRoutingModule {
};
ContatoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContatoPageRoutingModule);



/***/ }),

/***/ 93918:
/*!*******************************************!*\
  !*** ./src/app/contato/contato.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPageModule": () => (/* binding */ ContatoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _contato_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contato-routing.module */ 13277);
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.page */ 16012);







let ContatoPageModule = class ContatoPageModule {
};
ContatoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contato_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContatoPageRoutingModule
        ],
        declarations: [_contato_page__WEBPACK_IMPORTED_MODULE_1__.ContatoPage]
    })
], ContatoPageModule);



/***/ }),

/***/ 16012:
/*!*****************************************!*\
  !*** ./src/app/contato/contato.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoPage": () => (/* binding */ ContatoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contato.page.html */ 25721);
/* harmony import */ var _contato_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.page.scss */ 28494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ContatoPage = class ContatoPage {
    constructor() { }
    ngOnInit() {
    }
};
ContatoPage.ctorParameters = () => [];
ContatoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contato',
        template: _raw_loader_contato_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contato_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContatoPage);



/***/ }),

/***/ 28494:
/*!*******************************************!*\
  !*** ./src/app/contato/contato.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color:rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254,230,20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksdUNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxVQUFBO0FBR1I7O0FBREk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFHUjs7QUFBQTtFQUNJLDZCQUFBO0FBR0o7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSVI7O0FBRkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFGSTtFQUNJLGtCQUFBO0FBSVI7O0FBREE7RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBSUYiLCJmaWxlIjoiY29udGF0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXBwe1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMDEsIDEzKTtcclxuICAgIGZvbnQtZmFtaWx5OiBTcGFjZUdyb3Rlc2s7XHJcbn1cclxuaW9uLWhlYWRlciB7ICBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsMjMwLDIwKTtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIC5iYWNrLXNwbGFzaHtcclxuICAgICAgICB3aWR0aDogMmVtO1xyXG4gICAgfVxyXG4gICAgLmltZy1oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDNlbTtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgfVxyXG4gICAgLnR4dC1oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIH0gICAgXHJcbn1cclxuaW9uLWNvbnRlbnR7ICAgIFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXJ7ICAgIFxyXG4gIGhlaWdodDogMTV2aDsgIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgIFxyXG59ICAiXX0= */");

/***/ }),

/***/ 25721:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n      <h1>\r\n      Contato\r\n     </h1>\r\n     <p>\r\n      Para dúvidas ou sugestões, entre em contato com a gente.\r\n      81 3181-3454\r\n\r\n      <strong>\r\n        e-mail\r\n      </strong>\r\n        <a href=\"mailto:fenearte@centrodeartesanato.pe.gov.br\">fenearte@centrodeartesanato.pe.gov.br</a>\r\n\r\n      Atendimento de segunda a sexta-feira das 8h às 17h\r\n     </p>\r\n\r\n  </ion-content>\r\n  <ion-footer>\r\n\r\n  </ion-footer>\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_contato_contato_module_ts.js.map