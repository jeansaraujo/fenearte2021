(self["webpackChunkfenearte2021"] = self["webpackChunkfenearte2021"] || []).push([["src_app_mapa_mapa_module_ts"],{

/***/ 81006:
/*!*********************************************!*\
  !*** ./src/app/mapa/mapa-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 47948);




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapaPageRoutingModule);



/***/ }),

/***/ 25646:
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-routing.module */ 81006);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page */ 47948);







let MapaPageModule = class MapaPageModule {
};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapaPageRoutingModule
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_1__.MapaPage]
    })
], MapaPageModule);



/***/ }),

/***/ 47948:
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mapa.page.html */ 89450);
/* harmony import */ var _mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.scss */ 43490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ 76136);





let MapaPage = class MapaPage {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
    }
    //const options: DocumentViewerOptions = {
    //  title: 'My PDF'
    //}
    openPDF() {
        //  this.document.viewDocument('assets/myFile.pdf', 'application/pdf');
    }
};
MapaPage.ctorParameters = () => [
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__.DocumentViewer }
];
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mapa',
        template: _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapaPage);

;


/***/ }),

/***/ 43490:
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 89450:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mapa/mapa.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-header>\r\n    <ion-item>\r\n      <img class=\"back-splash\"src=\"assets/imgs/caret-back-outline.svg\" routerLink=\"/menu\">\r\n      <img class=\"img-header\"src=\"assets/imgs/desenho-ariano-mini.svg\">\r\n      <img class=\"txt-header\" src=\"assets/imgs/nome-fenearte.svg\">\r\n    </ion-item>\r\n  </ion-header>\r\n  <ion-content>\r\n      <ion-row>\r\n        <ion-col size=\"12\" id=\"myMaps\">\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n  </ion-content>\r\n  <ion-footer>\r\n\r\n  </ion-footer>\r\n</ion-app>\r\n\r\n <script src=\"assets/mapa/js/jquery.min.js\"></script>\r\n <script src=\"assets/mapa/js/jquery.wayfinding.js\"></script>\r\n<script>\r\n      function queryObj() {\r\n          var result = {}, keyValuePairs = location.search.slice(1).split(\"&\");\r\n          keyValuePairs.forEach(function(keyValuePair) {\r\n              keyValuePair = keyValuePair.split('=');\r\n              result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';\r\n          });\r\n          return result;\r\n      }\r\n      var myParam = queryObj();\r\n      $(document).ready(function () {\r\n        'use strict';\r\n        $('#myMaps').wayfinding({\r\n          'maps': [\r\n            {'path': 'assets/mapa/fenearte_final.svg', 'id': 'floor1'}\r\n          ],\r\n          'path': {\r\n            width: 10,\r\n            color: 'green',\r\n            radius: 8,\r\n            speed: 4\r\n          },\r\n          'startpoint': function () {\r\n            return myParam.beginSelect;\r\n          },\r\n          'endpoint': function() {\r\n            return myParam.endselect;\r\n          },\r\n          'defaultMap': 'floor1',\r\n          'showLocation': true\r\n        }, function(){\r\n          console.log('callback reached');\r\n        });\r\n\r\n        $('#myMaps').wayfinding('startpoint', myParam.beginSelect.toString());\r\n        $('#myMaps').wayfinding('routeTo', myParam.endSelect.toString());\r\n\r\n        //make the floor buttons clickable\r\n        $('#controls button').click(function () {\r\n          $('#myMaps').wayfinding('currentMap', $(this).prop('id'));\r\n        });\r\n\r\n        $('#controls #beginSelect').change(function () {\r\n          $('#myMaps').wayfinding('startpoint', $(this).val());\r\n          if ($('#endSelect').val() !== '') {\r\n            $('#myMaps').wayfinding('routeTo', $('#endSelect').val());\r\n          }\r\n        });\r\n\r\n        $('#controls #endSelect').change(function () {\r\n          $('#myMaps').wayfinding('routeTo', $(this).val());\r\n        });\r\n\r\n        $('#controls #accessible').change(function () {\r\n          if ($('#accessible:checked').val() !== undefined) {\r\n            $('#myMaps').wayfinding('accessibleRoute', true);\r\n          } else {\r\n            $('#myMaps').wayfinding('accessibleRoute', false);\r\n          }\r\n          if ($('#endSelect').val() !== '') {\r\n            $('#myMaps').wayfinding('routeTo', $('#endSelect').val());\r\n          }\r\n        });\r\n\r\n        $('#myMaps').on('wayfinding:roomClicked', function(e, r) {\r\n          $('#endSelect option[value=\"' + r.roomId + '\"]').attr('selected', true);\r\n        });\r\n\r\n      });\r\n    </script>\r\n\r\n        <!-- Placed at the end of the document so the pages load faster -->\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\r\n\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\r\n\r\n    <link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">\r\n    <script src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.js\"></script>\r\n\r\n     <script>\r\n      // Example starter JavaScript for disabling form submissions if there are invalid fields\r\n      (function() {\r\n        'use strict';\r\n\r\n        window.addEventListener('load', function() {\r\n          // Fetch all the forms we want to apply custom Bootstrap validation styles to\r\n          var forms = document.getElementsByClassName('needs-validation');\r\n\r\n          // Loop over them and prevent submission\r\n          var validation = Array.prototype.filter.call(forms, function(form) {\r\n            form.addEventListener('submit', function(event) {\r\n              if (form.checkValidity() === false) {\r\n                event.preventDefault();\r\n                event.stopPropagation();\r\n              }\r\n              form.classList.add('was-validated');\r\n            }, false);\r\n          });\r\n        }, false);\r\n      })();\r\n\r\n\r\n      $('#beginSelect option[value=\"' + myParam.endSelect + '\"]').attr('selected', true);\r\n      $('#beginSelect').trigger(\"change\");\r\n    </script>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mapa_mapa_module_ts.js.map