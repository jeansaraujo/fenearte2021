(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_comochegar_comochegar_module_ts"],{

/***/ 12056:
/*!*********************************************************!*\
  !*** ./src/app/comochegar/comochegar-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComochegarPageRoutingModule": () => (/* binding */ ComochegarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _comochegar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comochegar.page */ 70780);




const routes = [
    {
        path: '',
        component: _comochegar_page__WEBPACK_IMPORTED_MODULE_0__.ComochegarPage
    }
];
let ComochegarPageRoutingModule = class ComochegarPageRoutingModule {
};
ComochegarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComochegarPageRoutingModule);



/***/ }),

/***/ 79193:
/*!*************************************************!*\
  !*** ./src/app/comochegar/comochegar.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComochegarPageModule": () => (/* binding */ ComochegarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _comochegar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comochegar-routing.module */ 12056);
/* harmony import */ var _comochegar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comochegar.page */ 70780);







let ComochegarPageModule = class ComochegarPageModule {
};
ComochegarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comochegar_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComochegarPageRoutingModule
        ],
        declarations: [_comochegar_page__WEBPACK_IMPORTED_MODULE_1__.ComochegarPage]
    })
], ComochegarPageModule);



/***/ }),

/***/ 70780:
/*!***********************************************!*\
  !*** ./src/app/comochegar/comochegar.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComochegarPage": () => (/* binding */ ComochegarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_comochegar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comochegar.page.html */ 20944);
/* harmony import */ var _comochegar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comochegar.page.scss */ 44530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ComochegarPage = class ComochegarPage {
    constructor() { }
    ngOnInit() {
    }
};
ComochegarPage.ctorParameters = () => [];
ComochegarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comochegar',
        template: _raw_loader_comochegar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comochegar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComochegarPage);



/***/ }),

/***/ 44530:
/*!*************************************************!*\
  !*** ./src/app/comochegar/comochegar.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color:rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254,230,20);\n  height: 15vh;\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  margin: 0.5em;\n}\n\nion-header .txt-header {\n  width: 12em;\n  margin: 0.5em;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-content h1 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 2em;\n}\n\nion-content h2 {\n  text-align: center;\n  font-family: Xilosa;\n  font-size: 1.5em;\n}\n\nion-content p {\n  padding: 1em;\n  text-align: justify;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9jaGVnYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksdUNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxVQUFBO0FBR1I7O0FBREk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFHUjs7QUFBQTtFQUNJLDZCQUFBO0FBR0o7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSVI7O0FBRkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFEQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFJRiIsImZpbGUiOiJjb21vY2hlZ2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hcHB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDIwMSwgMTMpO1xyXG4gICAgZm9udC1mYW1pbHk6IFNwYWNlR3JvdGVzaztcclxufVxyXG5pb24taGVhZGVyIHsgIFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwyMzAsMjApO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgLmJhY2stc3BsYXNoe1xyXG4gICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICB9XHJcbiAgICAuaW1nLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB9XHJcbiAgICAudHh0LWhlYWRlcntcclxuICAgICAgICB3aWR0aDogMTJlbTtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgfSAgICBcclxufVxyXG5pb24tY29udGVudHsgICAgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogWGlsb3NhO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBYaWxvc2E7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbn1cclxuaW9uLWZvb3RlcnsgICAgXHJcbiAgaGVpZ2h0OiAxNXZoOyAgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICAgXHJcbn0gICJdfQ== */");

/***/ }),

/***/ 20944:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comochegar/comochegar.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>      \r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>    \r\n  </ion-header>\r\n  <ion-content>\r\n      <h1>\r\n      Como Chegar\r\n     </h1>\r\n  </ion-content>\r\n  <ion-footer> \r\n       \r\n  </ion-footer>\r\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_comochegar_comochegar_module_ts.js.map