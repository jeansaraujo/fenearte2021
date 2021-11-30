(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mestres_josa_josa_module_ts"],{

/***/ 274:
/*!*****************************************************!*\
  !*** ./src/app/mestres/josa/josa-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPageRoutingModule": () => (/* binding */ JosaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _josa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./josa.page */ 36614);




const routes = [
    {
        path: '',
        component: _josa_page__WEBPACK_IMPORTED_MODULE_0__.JosaPage
    }
];
let JosaPageRoutingModule = class JosaPageRoutingModule {
};
JosaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JosaPageRoutingModule);



/***/ }),

/***/ 9489:
/*!*********************************************!*\
  !*** ./src/app/mestres/josa/josa.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPageModule": () => (/* binding */ JosaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _josa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./josa-routing.module */ 274);
/* harmony import */ var _josa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./josa.page */ 36614);







let JosaPageModule = class JosaPageModule {
};
JosaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _josa_routing_module__WEBPACK_IMPORTED_MODULE_0__.JosaPageRoutingModule
        ],
        declarations: [_josa_page__WEBPACK_IMPORTED_MODULE_1__.JosaPage]
    })
], JosaPageModule);



/***/ }),

/***/ 36614:
/*!*******************************************!*\
  !*** ./src/app/mestres/josa/josa.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JosaPage": () => (/* binding */ JosaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_josa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./josa.page.html */ 10830);
/* harmony import */ var _josa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./josa.page.scss */ 80159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let JosaPage = class JosaPage {
    constructor() { }
    ngOnInit() {
    }
};
JosaPage.ctorParameters = () => [];
JosaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-josa',
        template: _raw_loader_josa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_josa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JosaPage);



/***/ }),

/***/ 80159:
/*!*********************************************!*\
  !*** ./src/app/mestres/josa/josa.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0FBRUY7O0FBREU7RUFDRSxVQUFBO0FBR0o7O0FBREU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNFLDZCQUFBO0FBR0Y7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0FBSUo7O0FBREE7RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBSUYiLCJmaWxlIjoiam9zYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXBwIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDEsIDEzKTtcclxuICBmb250LWZhbWlseTogU3BhY2VHcm90ZXNrO1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIzMCwgMjApO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICAuYmFjay1zcGxhc2gge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICB9XHJcbiAgLmltZy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgfVxyXG4gIC50eHQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgdWwge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 10830:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mestres/josa/josa.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header>\n    <ion-item>\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/mestres\">\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\n    </ion-item>\n  </ion-header>\n  <ion-content>\n     <h1>\n      Josa\n     </h1>\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"assets/imgs/mestres/josa.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <p class=\"fs-6\" style=\"text-align: right; font-style: italic;\">\n      JOSEILSON DE PAULO LIRA\n      </p>\n      <p class=\"card-text\" style=\"text-align: justify;\">\n         Joseilson de Paulo Lira entrou para o universo artístico aos dezoito, pintando as paisagens de Olinda no Alto da Sé. Hoje, como escultor, mantém em seu ateliê a produção de esculturas de madeira policromadas e naturais, representando a fauna diversificada e a cultura pernambucana. Araras, corujas, peixes, girafas e os bonecos gigantes do carnaval, diferenciais no trabalho do Mestre Josa, estão espalhados em várias partes do mundo.\n      </p>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center\">\n      <ion-icon class=\"fs-1 \" routerLink=\"/mestres\" name=\"arrow-back-circle-outline\"></ion-icon>\n    </div>\n  </div>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n</ion-app>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mestres_josa_josa_module_ts.js.map