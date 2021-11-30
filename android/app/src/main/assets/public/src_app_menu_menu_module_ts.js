(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 61020:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 72713);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 7056:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 61020);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 72713);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 72713:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 21755);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 59289);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 38544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);





let MenuPage = class MenuPage {
    constructor(iab) {
        this.iab = iab;
        this.options = {
            location: 'no',
            hidden: 'no',
            zoom: 'yes',
            hideurlbar: 'yes',
            fullscreen: 'yes',
        };
    }
    goMapa() {
        //,"hideurlbar:'yes'"
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html', '_self', this.options);
        //browser.executeScript();
        //browser.insertCSS();
        //browser.on('loadstop').subscribe(event => {
        //    browser.insertCSS({ code: "body{color: red;" });
        //});
        // browser.close();
        // alert("Ajustar o InAppBrowser >> https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html");
    }
    goGMaps() {
        const browser = this.iab.create('https://goo.gl/maps/VWkDNpfDo1AedsccA', '_blank', this.options);
    }
    goMestres() {
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mestres/index.html', '_self', this.options);
    }
    goInstaFenearte() {
        const browser = this.iab.create('https://www.instagram.com/fenearte', '_blank', this.options);
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 59289:
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-app {\n  --ion-background-color: rgb(255, 201, 13);\n  font-family: SpaceGrotesk;\n}\n\nion-header {\n  --ion-background-color: rgb(254, 230, 20);\n}\n\nion-header .back-splash {\n  width: 2em;\n}\n\nion-header .img-header {\n  width: 3em;\n  align-items: center;\n  max-width: 100%;\n  margin-left: 20px;\n}\n\nion-header .txt-header {\n  width: 12em;\n}\n\nion-content {\n  --ion-background-color: rgb(255, 201, 13);\n}\n\nion-content .txt-menu {\n  padding-top: 0.3em;\n  text-align: center;\n  font-size: 0.7em;\n}\n\nion-content .txt-option {\n  font-size: 0.7em;\n}\n\nion-content .col-menu {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nion-content col-expositor {\n  background-color: white !important;\n}\n\nion-footer {\n  height: 15vh;\n  background-image: url(/assets/imgs/footer.svg);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UseUNBQUE7QUFFRjs7QUFERTtFQUNFLFVBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0UsV0FBQTtBQUdKOztBQUFBO0VBQ0UseUNBQUE7QUFHRjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSxrQ0FBQTtBQUlKOztBQURBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6Im1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWFwcCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAxLCAxMyk7XHJcbiAgZm9udC1mYW1pbHk6IFNwYWNlR3JvdGVzaztcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMzAsIDIwKTtcclxuICAuYmFjay1zcGxhc2gge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICB9XHJcbiAgLmltZy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgLnR4dC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDEsIDEzKTtcclxuICAudHh0LW1lbnUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9XHJcbiAgLnR4dC1vcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9XHJcbiAgLmNvbC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgY29sLWV4cG9zaXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 21755:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <ion-back-button >\r\n        <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\">\r\n      </ion-back-button>\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content style=\"display: flex; flex-direction: column; justify-content: center;\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justity-items-center\" style=\"margin-top: 20px;\">\r\n        <ion-col size=\"12\" class=\"col-menu\" style=\"background-color: white; border-radius: 15px; border:2px solid black;\">\r\n            <img class=\"img-menu\" src=\"assets/imgs/menu/btn-ache-expositor.svg\"  style=\"margin-bottom: 10px; margin-top:10px;\" (click)=\"goMapa()\">\r\n            <p class=\"txt-menu\" (click)=\"goMapa()\" style=\"text-align: center; font-size: 1em; margin-bottom: 0px;; \">ACHE O EXPOSITOR</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justity-items-center\" style=\"padding-top: 15px;\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-fenearte.svg\" routerLink=\"/fenearte\">\r\n          <p class=\"txt-menu\" routerLink=\"/fenearte\">FENEARTE</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-mestres.svg\" routerLink=\"/mestres\">\r\n          <p class=\"txt-menu\" routerLink=\"/mestres\">MESTRES</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-programacao.svg\" routerLink=\"/programacao\">\r\n          <p class=\"txt-menu\" routerLink=\"/programacao\">PROGRAMAÇÃO</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-ingressos.svg\" routerLink=\"/ingressos\">\r\n          <p class=\"txt-menu\" routerLink=\"/ingressos\">INGRESSOS</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-expositores.svg\" routerLink=\"/expositores\">\r\n          <p class=\"txt-menu\" routerLink=\"/expositores\">EXPOSITORES</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-salao.svg\" routerLink=\"/salao\">\r\n          <p class=\"txt-menu\" routerLink=\"/salao\">SALÕES E ESPAÇOS</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-janete-costa.svg\" routerLink=\"/janete\">\r\n          <p class=\"txt-menu\" routerLink=\"/janete\">ESPAÇO JANETE COSTA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-muhne.svg\" routerLink=\"/mapa\">\r\n          <p class=\"txt-menu\" routerLink=\"/programacao\">MAPA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-como-chegar.svg\" (click)=\" goGMaps()\">\r\n          <p class=\"txt-menu\" (click)=\"goGMaps()\">COMO CHEGAR</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-translado.svg\" routerLink=\"/traslado\">\r\n          <p class=\"txt-menu\" routerLink=\"/traslado\">TRANSLADO</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-gastronomia.svg\" routerLink=\"/gastronomia\">\r\n          <p class=\"txt-menu\" routerLink=\"/gastronomia\">GASTRONOMIA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-voce-fenearte.svg\" (click)=\" goInstaFenearte()\">\r\n          <p class=\"txt-menu\"  routerLink=\"/vcnafenearte\">VOCÊ NA FENEARTE</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <!--\r\n    <p class=\"txt-footer\">\r\n      Não sei,<br>\r\n      só sei que foi assim!\r\n    </p>\r\n    -->\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map