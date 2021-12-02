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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 21755);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 59289);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 38544);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ 76136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);






let MenuPage = class MenuPage {
    constructor(iab, document) {
        this.iab = iab;
        this.document = document;
        this.optBrowser = {
            location: 'no',
            hidden: 'no',
            zoom: 'yes',
            hideurlbar: 'yes',
            fullscreen: 'yes',
        };
        this.optGMaps = {
            location: 'yes',
            hidden: 'no',
            zoom: 'yes',
            hideurlbar: 'yes',
            fullscreen: 'yes',
        };
        this.optDocument = {
            title: 'Mapa Fenearte'
        };
    }
    goMapaPDF() {
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/doc/index.html', '_blank', this.optBrowser);
    }
    goMapa() {
        //,"hideurlbar:'yes'"
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html', '_self', this.optBrowser);
        //browser.executeScript();
        //browser.insertCSS();
        //browser.on('loadstop').subscribe(event => {
        //    browser.insertCSS({ code: "body{color: red;" });
        //});
        // browser.close();
        // alert("Ajustar o InAppBrowser >> https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html");
    }
    goDocument() {
        const document = this.document.viewDocument('assets/doc/mapa.pdf', 'application/pdf', this.optDocument);
    }
    goMaps() {
        const browser = this.iab.create('https://goo.gl/maps/VWkDNpfDo1AedsccA', '_blank', this.optGMaps);
    }
    goMestres() {
        const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mestres/index.html', '_self', this.optBrowser);
    }
    goInstaFenearte() {
        const browser = this.iab.create('https://www.instagram.com/fenearte', '_blank', this.optBrowser);
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__.DocumentViewer }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: rgb(255, 201, 13);\n}\nion-content .txt-menu {\n  padding-top: 0.3em;\n  text-align: center;\n  font-size: 0.7em;\n}\nion-content .txt-option {\n  font-size: 0.7em;\n}\nion-content .col-menu {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nion-content col-expositor {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBRTtFQUNFLGtDQUFBO0FBRUoiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAxLCAxMyk7XHJcbiAgLnR4dC1tZW51IHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgfVxyXG4gIC50eHQtb3B0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgfVxyXG4gIC5jb2wtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIGNvbC1leHBvc2l0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <ion-back-button >\r\n        <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\">\r\n      </ion-back-button>\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img style=\"margin-left: 35px;\" class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content style=\"display: flex; flex-direction: column; justify-content: center;\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justity-items-center\" style=\"margin-top: 20px;\">\r\n        <ion-col size=\"12\" class=\"col-menu\" style=\"background-color: white; border-radius: 15px; border:2px solid black;\">\r\n            <img class=\"img-menu\" src=\"assets/imgs/menu/btn-ache-expositor.svg\"  style=\"margin-bottom: 10px; margin-top:10px;\" (click)=\"goMapa()\">\r\n            <p class=\"txt-menu\" (click)=\"goMapa()\" style=\"text-align: center; font-size: 1em; margin-bottom: 0px;; \">ACHE O EXPOSITOR</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justity-items-center\" style=\"padding-top: 15px;\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-fenearte.svg\" routerLink=\"/fenearte\">\r\n          <p class=\"txt-menu\" routerLink=\"/fenearte\">FENEARTE</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-mestres.svg\" routerLink=\"/mestres\">\r\n          <p class=\"txt-menu\" routerLink=\"/mestres\">MESTRES</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-programacao.svg\" routerLink=\"/programacao\">\r\n          <p class=\"txt-menu\" routerLink=\"/programacao\">PROGRAMAÇÃO</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-ingressos.svg\" routerLink=\"/ingressos\">\r\n          <p class=\"txt-menu\" routerLink=\"/ingressos\">INGRESSOS</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-expositores.svg\" routerLink=\"/expositores\">\r\n          <p class=\"txt-menu\" routerLink=\"/expositores\">EXPOSITORES</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-salao.svg\" routerLink=\"/salao\">\r\n          <p class=\"txt-menu\" routerLink=\"/salao\">SALÕES E ESPAÇOS</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-janete-costa.svg\" routerLink=\"/janete\">\r\n          <p class=\"txt-menu\" routerLink=\"/janete\">ESPAÇO JANETE COSTA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-como-chegar.svg\" (click)=\"goMapaPDF()\">\r\n          <p class=\"txt-menu\" (click)=\"goMapaPDF()\">MAPA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <a href=\"https://goo.gl/maps/VWkDNpfDo1AedsccA\">\r\n            <img class=\"img-menu\" src=\"assets/imgs/menu/btn-como-chegar.svg\" >\r\n          </a>\r\n          <p class=\"txt-menu\" (click)=\"goGMaps()\">COMO CHEGAR</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-translado.svg\" routerLink=\"/traslado\">\r\n          <p class=\"txt-menu\" routerLink=\"/traslado\">TRANSLADO</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-gastronomia.svg\" routerLink=\"/gastronomia\">\r\n          <p class=\"txt-menu\" routerLink=\"/gastronomia\">GASTRONOMIA</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"col-menu\">\r\n          <img class=\"img-menu\" src=\"assets/imgs/menu/btn-voce-fenearte.svg\" (click)=\" goInstaFenearte()\">\r\n          <p class=\"txt-menu\"  routerLink=\"/vcnafenearte\">VOCÊ NA FENEARTE</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <!--\r\n    <p class=\"txt-footer\">\r\n      Não sei,<br>\r\n      só sei que foi assim!\r\n    </p>\r\n    -->\r\n  </ion-footer>\r\n</ion-app>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map