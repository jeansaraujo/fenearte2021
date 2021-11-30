(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_malmeida_malmeida_module_ts"],{

/***/ 10216:
/*!*************************************************************!*\
  !*** ./src/app/mestres/malmeida/malmeida-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalmeidaPageRoutingModule": () => (/* binding */ MalmeidaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _malmeida_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./malmeida.page */ 25132);




const routes = [
    {
        path: '',
        component: _malmeida_page__WEBPACK_IMPORTED_MODULE_0__.MalmeidaPage
    }
];
let MalmeidaPageRoutingModule = class MalmeidaPageRoutingModule {
};
MalmeidaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MalmeidaPageRoutingModule);



/***/ }),

/***/ 67824:
/*!*****************************************************!*\
  !*** ./src/app/mestres/malmeida/malmeida.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalmeidaPageModule": () => (/* binding */ MalmeidaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _malmeida_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./malmeida-routing.module */ 10216);
/* harmony import */ var _malmeida_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./malmeida.page */ 25132);







let MalmeidaPageModule = class MalmeidaPageModule {
};
MalmeidaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _malmeida_routing_module__WEBPACK_IMPORTED_MODULE_0__.MalmeidaPageRoutingModule
        ],
        declarations: [_malmeida_page__WEBPACK_IMPORTED_MODULE_1__.MalmeidaPage]
    })
], MalmeidaPageModule);



/***/ }),

/***/ 25132:
/*!***************************************************!*\
  !*** ./src/app/mestres/malmeida/malmeida.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalmeidaPage": () => (/* binding */ MalmeidaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_malmeida_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./malmeida.page.html */ 58541);
/* harmony import */ var _malmeida_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./malmeida.page.scss */ 69058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let MalmeidaPage = class MalmeidaPage {
    constructor() { }
    ngOnInit() {
    }
};
MalmeidaPage.ctorParameters = () => [];
MalmeidaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-malmeida',
        template: _raw_loader_malmeida_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_malmeida_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MalmeidaPage);



/***/ }),

/***/ 69058:
/*!*****************************************************!*\
  !*** ./src/app/mestres/malmeida/malmeida.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\n.txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbG1laWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7QUFHRjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFJSjs7QUFEQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFJRiIsImZpbGUiOiJtYWxtZWlkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWhlYWRlciB7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW46IDAuNWVtO1xyXG59XHJcbi50eHQtaGVhZGVyIHtcclxuICB3aWR0aDogMTJlbTtcclxuICBtYXJnaW46IDAuNWVtO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 58541:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/malmeida/malmeida.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n     Marcos Roberto\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/marcos_de_sertania.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n     MARCOS ROBERTO DE ALMEIDA\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Nascido em Ibimirim, Marcos descobriu a arte sacra aos 11 anos. Sobrinho e discípulo da artesã pioneira Zefinha Paulo de Sousa, ele cresceu se dedicando à arte. Com o tempo, criou estilo próprio. Além de esculpir a madeira, utiliza a técnica de pintura barroca com o uso de folhas de ouro e olhos de vidro. Atualmente, Marcos já conquistou o reconhecimento como um dos melhores escultores de arte sacra do Estado.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_malmeida_malmeida_module_ts.js.map