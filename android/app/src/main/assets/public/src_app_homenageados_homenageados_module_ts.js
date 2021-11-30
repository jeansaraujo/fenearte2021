(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_homenageados_homenageados_module_ts"],{

/***/ 36204:
/*!*************************************************************!*\
  !*** ./src/app/homenageados/homenageados-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomenageadosPageRoutingModule": () => (/* binding */ HomenageadosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _homenageados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homenageados.page */ 98426);




const routes = [
    {
        path: '',
        component: _homenageados_page__WEBPACK_IMPORTED_MODULE_0__.HomenageadosPage
    }
];
let HomenageadosPageRoutingModule = class HomenageadosPageRoutingModule {
};
HomenageadosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomenageadosPageRoutingModule);



/***/ }),

/***/ 14429:
/*!*****************************************************!*\
  !*** ./src/app/homenageados/homenageados.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomenageadosPageModule": () => (/* binding */ HomenageadosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _homenageados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homenageados-routing.module */ 36204);
/* harmony import */ var _homenageados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homenageados.page */ 98426);







let HomenageadosPageModule = class HomenageadosPageModule {
};
HomenageadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homenageados_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomenageadosPageRoutingModule
        ],
        declarations: [_homenageados_page__WEBPACK_IMPORTED_MODULE_1__.HomenageadosPage]
    })
], HomenageadosPageModule);



/***/ }),

/***/ 98426:
/*!***************************************************!*\
  !*** ./src/app/homenageados/homenageados.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomenageadosPage": () => (/* binding */ HomenageadosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_homenageados_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./homenageados.page.html */ 87956);
/* harmony import */ var _homenageados_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homenageados.page.scss */ 28936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let HomenageadosPage = class HomenageadosPage {
    constructor() { }
    ngOnInit() {
    }
};
HomenageadosPage.ctorParameters = () => [];
HomenageadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-homenageados',
        template: _raw_loader_homenageados_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_homenageados_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomenageadosPage);



/***/ }),

/***/ 28936:
/*!*****************************************************!*\
  !*** ./src/app/homenageados/homenageados.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color:rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254,230,20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-content ul {\n  font-style: italic;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVuYWdlYWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLFVBQUE7QUFHUjs7QUFESTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBR1I7O0FBREk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUdSOztBQUFBO0VBQ0ksNkJBQUE7QUFHSjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFGSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFJUjs7QUFEQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFJRiIsImZpbGUiOiJob21lbmFnZWFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjAxLCAxMyk7XHJcbiAgICBmb250LWZhbWlseTogU3BhY2VHcm90ZXNrO1xyXG59XHJcbmlvbi1oZWFkZXIgeyAgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LDIzMCwyMCk7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAuYmFjay1zcGxhc2h7XHJcbiAgICAgICAgd2lkdGg6IDJlbTtcclxuICAgIH1cclxuICAgIC5pbWctaGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiAzZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIH1cclxuICAgIC50eHQtaGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB9ICAgIFxyXG59XHJcbmlvbi1jb250ZW50eyAgICBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFhpbG9zYTtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxufVxyXG5pb24tZm9vdGVyeyAgICBcclxuICBoZWlnaHQ6IDE1dmg7ICBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgICBcclxufSAgIl19 */");

/***/ }),

/***/ 87956:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homenageados/homenageados.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n     <h1>\r\n      Homenageados\r\n     </h1>\r\n\r\n\r\n  </ion-content>\r\n  <ion-footer>\r\n  </ion-footer>\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_homenageados_homenageados_module_ts.js.map