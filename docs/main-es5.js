function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-pane\">\n  <h1 class=\"text-center\">2mn annonces</h1>\n  <div class=\"part-grid\">\n    <div class=\"part\" (click)=\"onNavigate('part-one')\">\n      <h1>Annonces</h1>\n      <div class=\"w3-display-container w3-opacity\">\n        <img src =\"https://2mn.info/img/logo-el-boncoin-m-t.png\" alt=\"logo 2mn annonces\" width=\"100%\">\n        <div class=\"w3-display-middle w3-large w3-orange w3-opacity\"> </div>\n      </div>\n    </div>\n    <!--\n    <div class=\"part\" (click)=\"onNavigate('part-three')\">\n      <h1>Login</h1>\n    </div>\n    -->\n    <div class=\"part\" (click)=\"onNavigate('part-four')\">\n      <h1>Login</h1>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"w3-cotainer w3-card-4\">\n\n  <div class=\"w3-half w3-padding-left w3-padding-right\">\n\n    <div class=\"w3-display-container\" style=\"width:100px\">\n      <a class=\"header-link\" style=\"cursor:pointer\" (click)=\"onBackToParts()\">\n      <img src =\"https://2mn.info/img/logo-el-boncoin-m-t.png\" alt=\"logo 2mn annonces\" style=\"width:100%; object-fit:cover\">\n      <h1 class=\"header-title\">\n          <div class=\"w3-display-middle w3-large\">2mn</div>\n          <div class=\"w3-display-bottommiddle w3-container\"> annonces </div>\n      </h1>\n      </a>\n    </div>\n\n  </div>\n\n  <div class=\"w3-half\">\n    <nav>\n      <ul class=\"header-navigation\">\n        <li class=\"header-navigation-item\" *ngIf=\"part === 1 || (part >= 3 && isAuth)\">\n          <a class=\"header-link\" routerLink=\"/{{ partString }}/all-stuff\" routerLinkActive=\"active\"><i class='fas fa-search w3-large'></i> Rechercher</a>\n        </li>\n        <li class=\"header-navigation-item\" *ngIf=\"part === 1 || (part >= 3 && isAuth)\">\n          <a class=\"header-link\" routerLink=\"/{{ partString }}/new-thing\" routerLinkActive=\"active\"><i class='fas fa-thumbtack w3-large'></i> Déposer</a>\n        </li>\n        <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && isAuth)\">\n          <a class=\"header-link\" style=\"cursor: pointer\" (click)=\"onLogout()\">DECONNEXION</a>\n        </li>\n        <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\n          <a class=\"header-link\" routerLink=\"/{{ partString }}/auth/login\" routerLinkActive=\"active\">CONNEXION</a>\n        </li>\n        <li class=\"header-navigation-item\" *ngIf=\"(part >= 3 && !isAuth)\">\n          <a class=\"header-link\" routerLink=\"/{{ partString }}/auth/signup\" routerLinkActive=\"active\">INSCRIPTION</a>\n        </li>\n      </ul>\n      <ul class=\"header-navigation nav-end\">\n\n      </ul>\n    </nav>\n  </div>\n</header>\n<!--\n<div class=\"hero-image\" *ngIf=\"mode === 'list'\">\n  <h2 class=\"hero-text\">\n    LE MEILLEUR ENDROIT POUR VENDRE VOS OBJETS\n  </h2>\n</div>\n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartFourModifyThingWithUploadModifyThingWithUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\n  <form [formGroup]=\"thingForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Titre</label>\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter image</button>\n    <input type=\"file\" #filePicker (change)=\"onImagePick($event)\">\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\n      <img [src]=\"imagePreview\" alt=\"\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Prix (en €)</label>\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                id=\"description\"\n                cols=\"30\" rows=\"7\"\n                class=\"form-control\"\n                formControlName=\"description\"\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartFourNewThingWithUploadNewThingWithUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\n  <form [formGroup]=\"thingForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Titre</label>\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"filePicker.click()\">Ajouter image</button>\n    <input type=\"file\" #filePicker (change)=\"onImagePick($event)\">\n    <div class=\"image-preview\" *ngIf=\"imagePreview\">\n      <img [src]=\"imagePreview\" alt=\"\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Prix (in €)</label>\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                id=\"description\"\n                cols=\"30\" rows=\"7\"\n                class=\"form-control\"\n                formControlName=\"description\"\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartFourPartFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartOneModifyThingModifyThingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\n  <form [formGroup]=\"thingForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Titre</label>\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Prix (en €)</label>\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                id=\"description\"\n                cols=\"30\" rows=\"7\"\n                class=\"form-control\"\n                formControlName=\"description\"\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">URL de l'image</label>\n      <input type=\"text\" placeholder=\"http://...\" id=\"imageUrl\" formControlName=\"imageUrl\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartOneNewThingNewThingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\" class=\"col-sm-6 offset-sm-3 mt-2\">\n  <form [formGroup]=\"thingForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Titre</label>\n      <input type=\"text\" placeholder=\"Que vendez-vous ?\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Prix (en €)</label>\n      <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"0\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                id=\"description\"\n                cols=\"30\" rows=\"7\"\n                class=\"form-control\"\n                formControlName=\"description\"\n                placeholder=\"Décrivez votre objet (type, qualité, etc.)\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">URL de l'image</label>\n      <input type=\"text\" placeholder=\"http://...\" id=\"imageUrl\" formControlName=\"imageUrl\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"thingForm.invalid\">Valider</button>\n    <p class=\"alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartOnePartOneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartOneSingleThingSingleThingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div *ngIf=\"!loading\">\n  <button class=\"btn btn-link\" (click)=\"onGoBack()\"><< Retour</button>\n  <div class=\"single-thing-pane\">\n    <img [src]=\"thing?.imageUrl\" alt=\"\">\n    <div class=\"single-thing-info\">\n      <h1>{{ thing?.title }}</h1>\n      <h2 class=\"single-thing-price\">{{ thing?.price / 100 | currency:'EUR' }}</h2>\n      <p>{{ thing?.description }}</p>\n      <button class=\"btn btn-success m-1\" (click)=\"onModify()\" [disabled]=\"part >= 3 && userId !== thing?.userId\">Modifier</button>\n      <button class=\"btn btn-danger m-1\" (click)=\"onDelete()\" [disabled]=\"part >= 3 && userId !== thing?.userId\">Supprimer</button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartOneStuffListStuffListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<p class=\"text-center\" *ngIf=\"stuff.length <= 0 && !loading\">Rien à vendre !</p>\n\n<div class=\"stuff-grid\" *ngIf=\"stuff.length >= 0\">\n  <div class=\"thing-pane\"\n       *ngFor=\"let thing of stuff\"\n       [ngClass]=\"{'open': thing._id === chosenId}\"\n       [ngStyle]=\"{'background-image': 'url(' + thing.imageUrl + ')'}\"\n       (click)=\"onProductClicked(thing._id)\">\n    <div class=\"thing-info\">\n      <h3>\n        {{ thing.title }}\n      </h3>\n      <h5>{{ thing.price / 100 | currency:'EUR' }}</h5>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreeAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\n  <form [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Adresse mail</label>\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Mot de passe</label>\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"onLogin()\" [disabled]=\"loginForm.invalid\">Connexion</button>\n  </form>\n  <p>{{ errorMessage }}</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreeAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"loading\"></mat-spinner>\n<div class=\"col-sm-8 offset-sm-2 mt-2\" *ngIf=\"!loading\">\n  <form [formGroup]=\"signupForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Adresse mail</label>\n      <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Mot de passe</label>\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"onSignup()\" [disabled]=\"signupForm.invalid\">Inscription</button>\n  </form>\n  <p>{{ errorMessage }}</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPartThreePartThreeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./part-one/part-one.component */
    "./src/app/part-one/part-one.component.ts");
    /* harmony import */


    var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./part-three/part-three.component */
    "./src/app/part-three/part-three.component.ts");
    /* harmony import */


    var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./part-four/part-four.component */
    "./src/app/part-four/part-four.component.ts");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/default/default.component.ts");
    /* harmony import */


    var _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./part-one/stuff-list/stuff-list.component */
    "./src/app/part-one/stuff-list/stuff-list.component.ts");
    /* harmony import */


    var _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./part-one/new-thing/new-thing.component */
    "./src/app/part-one/new-thing/new-thing.component.ts");
    /* harmony import */


    var _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./part-one/single-thing/single-thing.component */
    "./src/app/part-one/single-thing/single-thing.component.ts");
    /* harmony import */


    var _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./part-one/modify-thing/modify-thing.component */
    "./src/app/part-one/modify-thing/modify-thing.component.ts");
    /* harmony import */


    var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./part-three/auth/login/login.component */
    "./src/app/part-three/auth/login/login.component.ts");
    /* harmony import */


    var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./part-three/auth/signup/signup.component */
    "./src/app/part-three/auth/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./part-four/new-thing-with-upload/new-thing-with-upload.component */
    "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts");
    /* harmony import */


    var _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./part-four/modify-thing-with-upload/modify-thing-with-upload.component */
    "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts");

    var routes = [{
      path: 'part-one',
      component: _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_3__["PartOneComponent"],
      children: [{
        path: 'new-thing',
        component: _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__["NewThingComponent"]
      }, {
        path: 'all-stuff',
        component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"]
      }, {
        path: 'thing/:id',
        component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"]
      }, {
        path: 'modify-thing/:id',
        component: _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__["ModifyThingComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-stuff'
      }, {
        path: '**',
        redirectTo: 'all-stuff'
      }]
    }, {
      path: 'part-three',
      component: _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_4__["PartThreeComponent"],
      children: [{
        path: 'new-thing',
        component: _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_8__["NewThingComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'all-stuff',
        component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'thing/:id',
        component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'modify-thing/:id',
        component: _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_10__["ModifyThingComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'auth/login',
        component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
      }, {
        path: 'auth/signup',
        component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
      }, {
        path: '**',
        redirectTo: 'all-stuff'
      }]
    }, {
      path: 'part-four',
      component: _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_5__["PartFourComponent"],
      children: [{
        path: 'new-thing',
        component: _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_14__["NewThingWithUploadComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'all-stuff',
        component: _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_7__["StuffListComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'thing/:id',
        component: _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_9__["SingleThingComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'modify-thing/:id',
        component: _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_15__["ModifyThingWithUploadComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'auth/login',
        component: _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
      }, {
        path: 'auth/signup',
        component: _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
      }, {
        path: '**',
        redirectTo: 'all-stuff'
      }]
    }, {
      path: 'default',
      component: _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"]
    }, {
      path: '',
      pathMatch: 'full',
      component: _default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./part-one/part-one.component */
    "./src/app/part-one/part-one.component.ts");
    /* harmony import */


    var _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./part-three/part-three.component */
    "./src/app/part-three/part-three.component.ts");
    /* harmony import */


    var _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./part-four/part-four.component */
    "./src/app/part-four/part-four.component.ts");
    /* harmony import */


    var _default_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./default/default.component */
    "./src/app/default/default.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./part-one/stuff-list/stuff-list.component */
    "./src/app/part-one/stuff-list/stuff-list.component.ts");
    /* harmony import */


    var _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./part-one/new-thing/new-thing.component */
    "./src/app/part-one/new-thing/new-thing.component.ts");
    /* harmony import */


    var _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./part-one/single-thing/single-thing.component */
    "./src/app/part-one/single-thing/single-thing.component.ts");
    /* harmony import */


    var _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./part-one/modify-thing/modify-thing.component */
    "./src/app/part-one/modify-thing/modify-thing.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./part-three/auth/login/login.component */
    "./src/app/part-three/auth/login/login.component.ts");
    /* harmony import */


    var _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./part-three/auth/signup/signup.component */
    "./src/app/part-three/auth/signup/signup.component.ts");
    /* harmony import */


    var _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./part-four/new-thing-with-upload/new-thing-with-upload.component */
    "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts");
    /* harmony import */


    var _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./part-four/modify-thing-with-upload/modify-thing-with-upload.component */
    "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./interceptors/auth-interceptor */
    "./src/app/interceptors/auth-interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _part_one_part_one_component__WEBPACK_IMPORTED_MODULE_4__["PartOneComponent"], _part_three_part_three_component__WEBPACK_IMPORTED_MODULE_5__["PartThreeComponent"], _part_four_part_four_component__WEBPACK_IMPORTED_MODULE_6__["PartFourComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _part_one_stuff_list_stuff_list_component__WEBPACK_IMPORTED_MODULE_11__["StuffListComponent"], _part_one_new_thing_new_thing_component__WEBPACK_IMPORTED_MODULE_12__["NewThingComponent"], _part_one_single_thing_single_thing_component__WEBPACK_IMPORTED_MODULE_13__["SingleThingComponent"], _part_one_modify_thing_modify_thing_component__WEBPACK_IMPORTED_MODULE_14__["ModifyThingComponent"], _part_three_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _part_three_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _part_four_new_thing_with_upload_new_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_19__["NewThingWithUploadComponent"], _part_four_modify_thing_with_upload_modify_thing_with_upload_component__WEBPACK_IMPORTED_MODULE_20__["ModifyThingWithUploadComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/default/default.component.scss":
  /*!************************************************!*\
    !*** ./src/app/default/default.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-pane h1 {\n  color: #333333;\n  font-family: \"Raleway\", sans-serif;\n}\n.part-grid {\n  display: flex;\n  justify-content: center;\n}\n.part {\n  border-radius: 10px;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n  height: 200px;\n  width: 200px;\n  margin: 5px;\n  background: #333333;\n  cursor: pointer;\n}\n.part:hover {\n  transform: scale(1.05);\n  box-shadow: 1px 1px 2px black, 0 0 25px #006699, 0 0 5px darkblue;\n}\n.part h1 {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  text-align: center;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQUU7RUFFRSxjQUFBO0VBQ0Esa0NBQUE7QUNDSjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDREY7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RGO0FERUU7RUFDRSxzQkFBQTtFQUNBLGlFQUFBO0FDQUo7QURFRTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaDFcbiAge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG5cbiAgfVxufVxuXG4ucGFydC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3cgOiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggIzAwNjY5OSwgMCAwIDVweCBkYXJrYmx1ZTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cbiIsIi5tYWluLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tcGFuZSBoMSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYXJ0LWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhcnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFydDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCAjMDA2Njk5LCAwIDAgNXB4IGRhcmtibHVlO1xufVxuLnBhcnQgaDEge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/default/default.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/default/default.component.ts ***!
    \**********************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent(router) {
        _classCallCheck(this, DefaultComponent);

        this.router = router;
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNavigate",
        value: function onNavigate(endpoint) {
          this.router.navigate([endpoint]);
        }
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.scss */
      "./src/app/default/default.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --blue: #0065FC;\n  --light-blue: #DEEBFF;\n  --light-grey: #F2F2F2;\n  --grey: #e6e6e6;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  color: white;\n  padding: 0.2rem 2%;\n  color: black;\n  position: fixed;\n  /* Set the navbar to fixed position */\n  z-index: 10;\n  width: 100%;\n  top: 0px;\n}\n\nheader h1 {\n  /* https://fonts.google.com/specimen/Rancho?preview.text=Booki&preview.text_type=custom */\n  font-family: \"Rancho\", cursive;\n  color: red;\n  font-weight: bold;\n  font-size: 36px;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 5%;\n  padding: 0;\n  align-content: space-between;\n}\n\nli {\n  display: inline-block;\n  color: #1a1a1a;\n  padding: 25px;\n}\n\nli a {\n  color: #1a1a1a;\n  font-weight: 600;\n  padding: 25px;\n  font-weight: 400;\n}\n\nli a:hover {\n  text-decoration: none;\n  padding: 25px;\n  border-bottom: solid 3px red;\n  font-weight: 600;\n}\n\n.active {\n  border-bottom: solid 3px red;\n  color: red;\n  padding: 25px;\n}\n\n.hero-image {\n  margin-top: 114px;\n  position: relative;\n  width: 100%;\n  height: 320px;\n  background-size: cover;\n  background: url('38521354191_0f9b6016bc_b.jpg') no-repeat 0 80%;\n  background-size: cover;\n}\n\n.hero-text {\n  font-size: 72px;\n  background: -webkit-linear-gradient(red, red, yellow, green, blue, indigo, violet);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 800;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 40%;\n  text-align: center;\n  -webkit-filter: drop-shadow(2px 2px 3px black);\n          filter: drop-shadow(2px 2px 3px black);\n  font-size: 3rem;\n}\n\n.nav-end {\n  flex-direction: row-reverse;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtFQUNBLHFCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQWlCLHFDQUFBO0VBQ2pCLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0RGOztBREdBO0VBRUUseUZBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUVFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRFNBO0VBQ0UsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0Esa0ZBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFVBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3RcbntcbiAgLS1ibHVlICAgICAgIDogIzAwNjVGQztcbiAgLS1saWdodC1ibHVlIDogI0RFRUJGRjtcblxuICAtLWxpZ2h0LWdyZXk6ICNGMkYyRjI7XG4gIC0tZ3JleSAgICAgICA6ICNlNmU2ZTY7XG59XG5cbmhlYWRlclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjJyZW0gMiU7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTZXQgdGhlIG5hdmJhciB0byBmaXhlZCBwb3NpdGlvbiAqL1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuaGVhZGVyIGgxXG57XG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9SYW5jaG8/cHJldmlldy50ZXh0PUJvb2tpJnByZXZpZXcudGV4dF90eXBlPWN1c3RvbSAqL1xuICBmb250LWZhbWlseTogJ1JhbmNobycsIGN1cnNpdmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbnVsXG57XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgNSU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzFhMWExYTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxubGkgYSB7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuXG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJlZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG5cbiAgfVxufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJlZDtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLmhlcm8taW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAxMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvMzg1MjEzNTQxOTFfMGY5YjYwMTZiY19iLmpwZycpIG5vLXJlcGVhdCAwIDgwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmVkLHJlZCx5ZWxsb3csZ3JlZW4sYmx1ZSxpbmRpZ28sdmlvbGV0KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBmb250LXdlaWdodDogODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAzcHggYmxhY2spO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5uYXYtZW5kIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmbGV4LWdyb3c6IDE7XG59XG4iLCI6cm9vdCB7XG4gIC0tYmx1ZTogIzAwNjVGQztcbiAgLS1saWdodC1ibHVlOiAjREVFQkZGO1xuICAtLWxpZ2h0LWdyZXk6ICNGMkYyRjI7XG4gIC0tZ3JleTogI2U2ZTZlNjtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4ycmVtIDIlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2V0IHRoZSBuYXZiYXIgdG8gZml4ZWQgcG9zaXRpb24gKi9cbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDBweDtcbn1cblxuaGVhZGVyIGgxIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL1JhbmNobz9wcmV2aWV3LnRleHQ9Qm9va2kmcHJldmlldy50ZXh0X3R5cGU9Y3VzdG9tICovXG4gIGZvbnQtZmFtaWx5OiBcIlJhbmNob1wiLCBjdXJzaXZlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgNSU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzFhMWExYTtcbiAgcGFkZGluZzogMjVweDtcbn1cblxubGkgYSB7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxubGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZWQ7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5oZXJvLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMTE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8zODUyMTM1NDE5MV8wZjliNjAxNmJjX2IuanBnXCIpIG5vLXJlcGVhdCAwIDgwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmVkLCByZWQsIHllbGxvdywgZ3JlZW4sIGJsdWUsIGluZGlnbywgdmlvbGV0KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggM3B4IGJsYWNrKTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ubmF2LWVuZCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(state, auth, router) {
        _classCallCheck(this, HeaderComponent);

        this.state = state;
        this.auth = auth;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.modeSub = this.state.mode$.subscribe(function (mode) {
            _this.mode = mode;
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this.part = part;

            switch (part) {
              case 1:
                _this.partString = 'part-one';
                break;

              case 3:
                _this.partString = 'part-three';
                break;

              case 4:
                _this.partString = 'part-four';
                break;

              default:
                break;
            }
          });
          this.isAuthSub = this.auth.isAuth$.subscribe(function (auth) {
            _this.isAuth = auth;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.auth.logout();
          this.router.navigate(['/' + this.partString + '/auth/login']);
        }
      }, {
        key: "onBackToParts",
        value: function onBackToParts() {
          this.router.navigate(['/default']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modeSub.unsubscribe();
          this.partSub.unsubscribe();
          this.isAuthSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/auth-interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth-interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(auth) {
        _classCallCheck(this, AuthInterceptor);

        this.auth = auth;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.auth.token;
          var newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
          });
          return next.handle(newRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/models/Thing.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/Thing.model.ts ***!
    \***************************************/

  /*! exports provided: Thing */

  /***/
  function srcAppModelsThingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Thing", function () {
      return Thing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Thing = function Thing() {
      _classCallCheck(this, Thing);
    };
    /***/

  },

  /***/
  "./src/app/part-four/mime-type.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/part-four/mime-type.validator.ts ***!
    \**************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPartFourMimeTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = '';
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case '89504e47':
              isValid = true;
              break;

            case 'ffd8ffe0':
            case 'ffd8ffe1':
            case 'ffd8ffe2':
            case 'ffd8ffe3':
            case 'ffd8ffe8':
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartFourModifyThingWithUploadModifyThingWithUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=file] {\n  visibility: hidden;\n}\n\n.image-preview img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9wYXJ0LWZvdXIvbW9kaWZ5LXRoaW5nLXdpdGgtdXBsb2FkL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydC1mb3VyL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC9tb2RpZnktdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFydC1mb3VyL21vZGlmeS10aGluZy13aXRoLXVwbG9hZC9tb2RpZnktdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsImlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ModifyThingWithUploadComponent */

  /***/
  function srcAppPartFourModifyThingWithUploadModifyThingWithUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyThingWithUploadComponent", function () {
      return ModifyThingWithUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _mime_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../mime-type.validator */
    "./src/app/part-four/mime-type.validator.ts");
    /* harmony import */


    var _models_Thing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../models/Thing.model */
    "./src/app/models/Thing.model.ts");

    var ModifyThingWithUploadComponent = /*#__PURE__*/function () {
      function ModifyThingWithUploadComponent(state, formBuilder, stuffService, route, router, auth) {
        _classCallCheck(this, ModifyThingWithUploadComponent);

        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.loading = false;
      }

      _createClass(ModifyThingWithUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loading = true;
          this.state.mode$.next('form');
          this.userId = this.auth.userId;
          this.route.params.subscribe(function (params) {
            _this2.stuffService.getThingById(params.id).then(function (thing) {
              _this2.thing = thing;
              _this2.thingForm = _this2.formBuilder.group({
                title: [thing.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                description: [thing.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                price: [thing.price / 100, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                image: [thing.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _mime_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
              });
              _this2.imagePreview = thing.imageUrl;
              _this2.loading = false;
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.loading = true;
          var thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_8__["Thing"]();
          thing._id = this.thing._id;
          thing.title = this.thingForm.get('title').value;
          thing.description = this.thingForm.get('description').value;
          thing.price = this.thingForm.get('price').value * 100;
          thing.imageUrl = '';
          thing.userId = this.userId;
          this.stuffService.modifyThingWithFile(this.thing._id, thing, this.thingForm.get('image').value).then(function () {
            _this3.thingForm.reset();

            _this3.loading = false;

            _this3.router.navigate(['/part-four/all-stuff']);
          }, function (error) {
            _this3.loading = false;
            _this3.errorMessage = error.message;
          });
        }
      }, {
        key: "onImagePick",
        value: function onImagePick(event) {
          var _this4 = this;

          var file = event.target.files[0];
          console.log(file);
          this.thingForm.get('image').patchValue(file);
          this.thingForm.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            if (_this4.thingForm.get('image').valid) {
              _this4.imagePreview = reader.result;
            } else {
              _this4.imagePreview = null;
            }
          };

          reader.readAsDataURL(file);
        }
      }]);

      return ModifyThingWithUploadComponent;
    }();

    ModifyThingWithUploadComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    ModifyThingWithUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modify-thing-with-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modify-thing-with-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modify-thing-with-upload.component.scss */
      "./src/app/part-four/modify-thing-with-upload/modify-thing-with-upload.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], ModifyThingWithUploadComponent);
    /***/
  },

  /***/
  "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartFourNewThingWithUploadNewThingWithUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=file] {\n  visibility: hidden;\n}\n\n.image-preview img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9wYXJ0LWZvdXIvbmV3LXRoaW5nLXdpdGgtdXBsb2FkL25ldy10aGluZy13aXRoLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydC1mb3VyL25ldy10aGluZy13aXRoLXVwbG9hZC9uZXctdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFydC1mb3VyL25ldy10aGluZy13aXRoLXVwbG9hZC9uZXctdGhpbmctd2l0aC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsImlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NewThingWithUploadComponent */

  /***/
  function srcAppPartFourNewThingWithUploadNewThingWithUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewThingWithUploadComponent", function () {
      return NewThingWithUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_Thing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/Thing.model */
    "./src/app/models/Thing.model.ts");
    /* harmony import */


    var _mime_type_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../mime-type.validator */
    "./src/app/part-four/mime-type.validator.ts");

    var NewThingWithUploadComponent = /*#__PURE__*/function () {
      function NewThingWithUploadComponent(state, formBuilder, stuffService, router, auth) {
        _classCallCheck(this, NewThingWithUploadComponent);

        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.router = router;
        this.auth = auth;
        this.loading = false;
      }

      _createClass(NewThingWithUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _mime_type_validator__WEBPACK_IMPORTED_MODULE_8__["mimeType"]]
          });
          this.userId = this.auth.userId;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.loading = true;
          var thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_7__["Thing"]();
          thing.title = this.thingForm.get('title').value;
          thing.description = this.thingForm.get('description').value;
          thing.price = this.thingForm.get('price').value * 100;
          thing.imageUrl = '';
          thing.userId = this.userId;
          this.stuffService.createNewThingWithFile(thing, this.thingForm.get('image').value).then(function () {
            _this5.thingForm.reset();

            _this5.loading = false;

            _this5.router.navigate(['/part-four/all-stuff']);
          }, function (error) {
            _this5.loading = false;
            _this5.errorMessage = error.message;
          });
        }
      }, {
        key: "onImagePick",
        value: function onImagePick(event) {
          var _this6 = this;

          var file = event.target.files[0];
          this.thingForm.get('image').patchValue(file);
          this.thingForm.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            if (_this6.thingForm.get('image').valid) {
              _this6.imagePreview = reader.result;
            } else {
              _this6.imagePreview = null;
            }
          };

          reader.readAsDataURL(file);
        }
      }]);

      return NewThingWithUploadComponent;
    }();

    NewThingWithUploadComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    NewThingWithUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-thing-with-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-thing-with-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-thing-with-upload.component.scss */
      "./src/app/part-four/new-thing-with-upload/new-thing-with-upload.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], NewThingWithUploadComponent);
    /***/
  },

  /***/
  "./src/app/part-four/part-four.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/part-four/part-four.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartFourPartFourComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtZm91ci9wYXJ0LWZvdXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/part-four/part-four.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/part-four/part-four.component.ts ***!
    \**************************************************/

  /*! exports provided: PartFourComponent */

  /***/
  function srcAppPartFourPartFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartFourComponent", function () {
      return PartFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PartFourComponent = /*#__PURE__*/function () {
      function PartFourComponent(state, auth) {
        _classCallCheck(this, PartFourComponent);

        this.state = state;
        this.auth = auth;
      }

      _createClass(PartFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.isAuth$.next(false);
          this.auth.userId = '';
          this.auth.token = '';
          this.state.part$.next(4);
          this.state.part = 4;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return PartFourComponent;
    }();

    PartFourComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PartFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-four',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./part-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-four/part-four.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./part-four.component.scss */
      "./src/app/part-four/part-four.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], PartFourComponent);
    /***/
  },

  /***/
  "./src/app/part-one/modify-thing/modify-thing.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/part-one/modify-thing/modify-thing.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartOneModifyThingModifyThingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL21vZGlmeS10aGluZy9tb2RpZnktdGhpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/part-one/modify-thing/modify-thing.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/part-one/modify-thing/modify-thing.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ModifyThingComponent */

  /***/
  function srcAppPartOneModifyThingModifyThingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyThingComponent", function () {
      return ModifyThingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _models_Thing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/Thing.model */
    "./src/app/models/Thing.model.ts");

    var ModifyThingComponent = /*#__PURE__*/function () {
      function ModifyThingComponent(formBuilder, route, router, state, stuffService) {
        _classCallCheck(this, ModifyThingComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.state = state;
        this.stuffService = stuffService;
        this.loading = false;
      }

      _createClass(ModifyThingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.loading = true;
          this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this7.part = part;
          });
          this.state.mode$.next('form');
          this.route.params.subscribe(function (params) {
            _this7.stuffService.getThingById(params.id).then(function (thing) {
              _this7.thing = thing;

              _this7.thingForm.get('title').setValue(_this7.thing.title);

              _this7.thingForm.get('description').setValue(_this7.thing.description);

              _this7.thingForm.get('price').setValue(_this7.thing.price / 100);

              _this7.thingForm.get('imageUrl').setValue(_this7.thing.imageUrl);

              _this7.loading = false;
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.loading = true;
          var thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_6__["Thing"]();
          thing.title = this.thingForm.get('title').value;
          thing.description = this.thingForm.get('description').value;
          thing.price = this.thingForm.get('price').value * 100;
          thing.imageUrl = this.thingForm.get('imageUrl').value;
          thing._id = new Date().getTime().toString();
          thing.userId = this.thing.userId;
          this.stuffService.modifyThing(this.thing._id, thing).then(function () {
            _this8.thingForm.reset();

            _this8.loading = false;

            switch (_this8.part) {
              case 1:
              case 2:
                _this8.router.navigate(['/part-one/all-stuff']);

                break;

              case 3:
                _this8.router.navigate(['/part-three/all-stuff']);

                break;

              case 4:
                _this8.router.navigate(['/part-four/all-stuff']);

                break;
            }
          }, function (error) {
            _this8.loading = false;
            _this8.errorMessage = error.message;
          });
        }
      }]);

      return ModifyThingComponent;
    }();

    ModifyThingComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"]
      }];
    };

    ModifyThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modify-thing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modify-thing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/modify-thing/modify-thing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modify-thing.component.scss */
      "./src/app/part-one/modify-thing/modify-thing.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"]])], ModifyThingComponent);
    /***/
  },

  /***/
  "./src/app/part-one/new-thing/new-thing.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/part-one/new-thing/new-thing.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartOneNewThingNewThingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL25ldy10aGluZy9uZXctdGhpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/part-one/new-thing/new-thing.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/part-one/new-thing/new-thing.component.ts ***!
    \***********************************************************/

  /*! exports provided: NewThingComponent */

  /***/
  function srcAppPartOneNewThingNewThingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewThingComponent", function () {
      return NewThingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_Thing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/Thing.model */
    "./src/app/models/Thing.model.ts");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NewThingComponent = /*#__PURE__*/function () {
      function NewThingComponent(state, formBuilder, stuffService, router, auth) {
        _classCallCheck(this, NewThingComponent);

        this.state = state;
        this.formBuilder = formBuilder;
        this.stuffService = stuffService;
        this.router = router;
        this.auth = auth;
        this.loading = false;
      }

      _createClass(NewThingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.state.mode$.next('form');
          this.thingForm = this.formBuilder.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this9.part = part;
          });
          this.userId = this.part >= 3 ? this.auth.userId : 'userID40282382';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this.loading = true;
          var thing = new _models_Thing_model__WEBPACK_IMPORTED_MODULE_4__["Thing"]();
          thing.title = this.thingForm.get('title').value;
          thing.description = this.thingForm.get('description').value;
          thing.price = this.thingForm.get('price').value * 100;
          thing.imageUrl = this.thingForm.get('imageUrl').value;
          thing._id = new Date().getTime().toString();
          thing.userId = this.userId;
          this.stuffService.createNewThing(thing).then(function () {
            _this10.thingForm.reset();

            _this10.loading = false;

            switch (_this10.part) {
              case 1:
              case 2:
                _this10.router.navigate(['/part-one/all-stuff']);

                break;

              case 3:
                _this10.router.navigate(['/part-three/all-stuff']);

                break;

              case 4:
                _this10.router.navigate(['/part-four/all-stuff']);

                break;
            }
          })["catch"](function (error) {
            _this10.loading = false;
            _this10.errorMessage = error.message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.partSub.unsubscribe();
        }
      }]);

      return NewThingComponent;
    }();

    NewThingComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    NewThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-thing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-thing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/new-thing/new-thing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-thing.component.scss */
      "./src/app/part-one/new-thing/new-thing.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_5__["StuffService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], NewThingComponent);
    /***/
  },

  /***/
  "./src/app/part-one/part-one.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/part-one/part-one.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartOnePartOneComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL3BhcnQtb25lLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/part-one/part-one.component.ts":
  /*!************************************************!*\
    !*** ./src/app/part-one/part-one.component.ts ***!
    \************************************************/

  /*! exports provided: PartOneComponent */

  /***/
  function srcAppPartOnePartOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartOneComponent", function () {
      return PartOneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");

    var PartOneComponent = /*#__PURE__*/function () {
      function PartOneComponent(state) {
        _classCallCheck(this, PartOneComponent);

        this.state = state;
      }

      _createClass(PartOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.part$.next(1);
          this.state.part = 1;
        }
      }]);

      return PartOneComponent;
    }();

    PartOneComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    PartOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-one',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./part-one.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/part-one.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./part-one.component.scss */
      "./src/app/part-one/part-one.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])], PartOneComponent);
    /***/
  },

  /***/
  "./src/app/part-one/single-thing/single-thing.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/part-one/single-thing/single-thing.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartOneSingleThingSingleThingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".single-thing-pane {\n  position: relative;\n  width: 60%;\n  margin: auto;\n}\n\nimg {\n  position: relative;\n  width: 100%;\n}\n\n.single-thing-info {\n  width: 100%;\n}\n\n.single-thing-price {\n  color: #6eb5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9wYXJ0LW9uZS9zaW5nbGUtdGhpbmcvc2luZ2xlLXRoaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJ0LW9uZS9zaW5nbGUtdGhpbmcvc2luZ2xlLXRoaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0LW9uZS9zaW5nbGUtdGhpbmcvc2luZ2xlLXRoaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS10aGluZy1wYW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGhpbmctaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2xlLXRoaW5nLXByaWNlIHtcbiAgY29sb3I6ICM2ZWI1ZmY7XG59XG4iLCIuc2luZ2xlLXRoaW5nLXBhbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpbmdsZS10aGluZy1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGhpbmctcHJpY2Uge1xuICBjb2xvcjogIzZlYjVmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/part-one/single-thing/single-thing.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/part-one/single-thing/single-thing.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SingleThingComponent */

  /***/
  function srcAppPartOneSingleThingSingleThingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleThingComponent", function () {
      return SingleThingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var SingleThingComponent = /*#__PURE__*/function () {
      function SingleThingComponent(state, router, route, stuffService, auth) {
        _classCallCheck(this, SingleThingComponent);

        this.state = state;
        this.router = router;
        this.route = route;
        this.stuffService = stuffService;
        this.auth = auth;
      }

      _createClass(SingleThingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.loading = true;
          this.state.mode$.next('single-thing');
          this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
          this.route.params.subscribe(function (params) {
            _this11.stuffService.getThingById(params.id).then(function (thing) {
              _this11.loading = false;
              _this11.thing = thing;
            });
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this11.part = part;

            if (part >= 3) {
              _this11.userId = _this11.auth.userId;
            }
          });
        }
      }, {
        key: "onGoBack",
        value: function onGoBack() {
          if (this.part === 1) {
            this.router.navigate(['/part-one/all-stuff']);
          } else if (this.part === 3) {
            this.router.navigate(['/part-three/all-stuff']);
          } else if (this.part === 4) {
            this.router.navigate(['/part-four/all-stuff']);
          }
        }
      }, {
        key: "onModify",
        value: function onModify() {
          switch (this.part) {
            case 1:
            case 2:
              this.router.navigate(['/part-one/modify-thing/' + this.thing._id]);
              break;

            case 3:
              this.router.navigate(['/part-three/modify-thing/' + this.thing._id]);
              break;

            case 4:
              this.router.navigate(['/part-four/modify-thing/' + this.thing._id]);
              break;
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this12 = this;

          this.loading = true;
          this.stuffService.deleteThing(this.thing._id).then(function () {
            _this12.loading = false;

            switch (_this12.part) {
              case 1:
              case 2:
                _this12.router.navigate(['/part-one/all-stuff']);

                break;

              case 3:
                _this12.router.navigate(['/part-three/all-stuff']);

                break;

              case 4:
                _this12.router.navigate(['/part-four/all-stuff']);

                break;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.partSub.unsubscribe();
        }
      }]);

      return SingleThingComponent;
    }();

    SingleThingComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    SingleThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-thing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-thing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/single-thing/single-thing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-thing.component.scss */
      "./src/app/part-one/single-thing/single-thing.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_4__["StuffService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], SingleThingComponent);
    /***/
  },

  /***/
  "./src/app/part-one/stuff-list/stuff-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/part-one/stuff-list/stuff-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartOneStuffListStuffListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stuff-grid {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.thing-pane {\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n  width: 270px;\n  height: 270px;\n  margin: 5px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 1px 1px 3px #333333;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.thing-pane:hover {\n  transform: scale(1.03);\n}\n\n.thing-info {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  padding: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.thing-info h3 {\n  font-weight: 800;\n}\n\n.thing-info h5 {\n  color: white;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvT0MvRFcvUDYvZnJvbnRlbmQvc3JjL2FwcC9wYXJ0LW9uZS9zdHVmZi1saXN0L3N0dWZmLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnQtb25lL3N0dWZmLWxpc3Qvc3R1ZmYtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREFFO0VBQ0Usc0JBQUE7QUNFSjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtb25lL3N0dWZmLWxpc3Qvc3R1ZmYtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVmZi1ncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGhpbmctcGFuZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG59XG5cbi50aGluZy1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBoNSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gIH1cbn1cbiIsIi5zdHVmZi1ncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGhpbmctcGFuZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRoaW5nLXBhbmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4udGhpbmctaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbi50aGluZy1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi50aGluZy1pbmZvIGg1IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/part-one/stuff-list/stuff-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/part-one/stuff-list/stuff-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: StuffListComponent */

  /***/
  function srcAppPartOneStuffListStuffListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StuffListComponent", function () {
      return StuffListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/stuff.service */
    "./src/app/services/stuff.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StuffListComponent = /*#__PURE__*/function () {
      function StuffListComponent(state, stuffService, router) {
        _classCallCheck(this, StuffListComponent);

        this.state = state;
        this.stuffService = stuffService;
        this.router = router;
        this.stuff = [];
      }

      _createClass(StuffListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.loading = true;
          this.state.mode$.next('list');
          this.stuffSub = this.stuffService.stuff$.subscribe(function (stuff) {
            _this13.stuff = stuff;
            _this13.loading = false;
          });
          this.partSub = this.state.part$.subscribe(function (part) {
            _this13.part = part;
          });
          this.stuffService.getStuff();
        }
      }, {
        key: "onProductClicked",
        value: function onProductClicked(id) {
          if (this.part === 1) {
            this.router.navigate(['/part-one/thing/' + id]);
          } else if (this.part === 3) {
            this.router.navigate(['/part-three/thing/' + id]);
          } else if (this.part === 4) {
            this.router.navigate(['/part-four/thing/' + id]);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stuffSub.unsubscribe();
          this.partSub.unsubscribe();
        }
      }]);

      return StuffListComponent;
    }();

    StuffListComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__["StuffService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    StuffListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stuff-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stuff-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-one/stuff-list/stuff-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stuff-list.component.scss */
      "./src/app/part-one/stuff-list/stuff-list.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_stuff_service__WEBPACK_IMPORTED_MODULE_3__["StuffService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], StuffListComponent);
    /***/
  },

  /***/
  "./src/app/part-three/auth/login/login.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/part-three/auth/login/login.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreeAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/part-three/auth/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/part-three/auth/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPartThreeAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/state.service */
    "./src/app/services/state.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, auth, state) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this14 = this;

          this.loading = true;
          var email = this.loginForm.get('email').value;
          var password = this.loginForm.get('password').value;
          this.auth.login(email, password).then(function () {
            _this14.loading = false;

            if (_this14.state.part === 3) {
              _this14.router.navigate(['/part-three/all-stuff']);
            } else if (_this14.state.part === 4) {
              _this14.router.navigate(['/part-four/all-stuff']);
            }
          })["catch"](function (error) {
            _this14.loading = false;
            _this14.errorMessage = error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/part-three/auth/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/part-three/auth/signup/signup.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/part-three/auth/signup/signup.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreeAuthSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/part-three/auth/signup/signup.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/part-three/auth/signup/signup.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPartThreeAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/state.service */
    "./src/app/services/state.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, router, auth, state) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.loading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.state.mode$.next('form');
          this.signupForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          var _this15 = this;

          this.loading = true;
          var email = this.signupForm.get('email').value;
          var password = this.signupForm.get('password').value;
          this.auth.createNewUser(email, password).then(function () {
            _this15.loading = false;

            if (_this15.state.part === 3) {
              _this15.router.navigate(['/part-three/all-stuff']);
            } else if (_this15.state.part === 4) {
              _this15.router.navigate(['/part-four/all-stuff']);
            }
          })["catch"](function (error) {
            _this15.loading = false;
            _this15.errorMessage = error.message;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/auth/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/part-three/auth/signup/signup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/part-three/part-three.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/part-three/part-three.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPartThreePartThreeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnQtdGhyZWUvcGFydC10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/part-three/part-three.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/part-three/part-three.component.ts ***!
    \****************************************************/

  /*! exports provided: PartThreeComponent */

  /***/
  function srcAppPartThreePartThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartThreeComponent", function () {
      return PartThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PartThreeComponent = /*#__PURE__*/function () {
      function PartThreeComponent(state, auth) {
        _classCallCheck(this, PartThreeComponent);

        this.state = state;
        this.auth = auth;
      }

      _createClass(PartThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.isAuth$.next(false);
          this.auth.userId = '';
          this.auth.token = '';
          this.state.part$.next(3);
          this.state.part = 3;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return PartThreeComponent;
    }();

    PartThreeComponent.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PartThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-three',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./part-three.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/part-three/part-three.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./part-three.component.scss */
      "./src/app/part-three/part-three.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], PartThreeComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/services/state.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, state, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.state = state;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this16 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this16.auth.isAuth$.subscribe(function (auth) {
              if (!auth) {
                _this16.state.part$.subscribe(function (part) {
                  if (part === 3) {
                    _this16.router.navigate(['/part-three/auth/login']);
                  } else if (part === 4) {
                    _this16.router.navigate(['/part-four/auth/login']);
                  }
                });
              }

              observer.next(true);
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var url = 'https://mmnopencvtech.herokuapp.com/api/'; //let url = 'http://localhost:5000/api/';

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router, http) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.http = http;
        this.isAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(AuthService, [{
        key: "createNewUser",
        value: function createNewUser(email, password) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.http.post(url + 'auth/signup', {
              email: email,
              password: password
            }).subscribe(function () {
              _this17.login(email, password).then(function () {
                resolve();
              })["catch"](function (error) {
                reject(error);
              });
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.http.post(url + 'auth/login', {
              email: email,
              password: password
            }).subscribe(function (authData) {
              _this18.token = authData.token;
              _this18.userId = authData.userId;

              _this18.isAuth$.next(true);

              resolve();
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isAuth$.next(false);
          this.userId = null;
          this.token = null;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/state.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/state.service.ts ***!
    \*******************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StateService = function StateService() {
      _classCallCheck(this, StateService);

      this.part$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
      this.part = 0;
      this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    };

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], StateService);
    /***/
  },

  /***/
  "./src/app/services/stuff.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/stuff.service.ts ***!
    \*******************************************/

  /*! exports provided: StuffService */

  /***/
  function srcAppServicesStuffServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StuffService", function () {
      return StuffService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); //let url = 'http://localhost:5000/api/';


    var url = 'https://mmnopencvtech.herokuapp.com/api/';

    var StuffService = /*#__PURE__*/function () {
      function StuffService(http) {
        _classCallCheck(this, StuffService);

        this.http = http;
        this.stuff = [{
          _id: '324sdfmoih3',
          title: 'Mon objet',
          description: 'A propos de mon objet',
          imageUrl: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
          price: 4900,
          userId: 'will'
        }, {
          _id: '324sdfmoih4',
          title: 'Un autre objet',
          description: 'A propos de mon autre objet',
          imageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
          price: 2600,
          userId: 'will'
        }];
        this.stuff$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(StuffService, [{
        key: "getStuff",
        value: function getStuff() {
          var _this19 = this;

          this.http.get(url + 'stuff').subscribe(function (stuff) {
            if (stuff) {
              _this19.stuff = stuff;

              _this19.emitStuff();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "emitStuff",
        value: function emitStuff() {
          this.stuff$.next(this.stuff);
        }
      }, {
        key: "getThingById",
        value: function getThingById(id) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            _this20.http.get(url + 'stuff/' + id).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "createNewThing",
        value: function createNewThing(thing) {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            _this21.http.post(url + 'stuff', thing).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "createNewThingWithFile",
        value: function createNewThingWithFile(thing, image) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            var thingData = new FormData();
            thingData.append('thing', JSON.stringify(thing));
            thingData.append('image', image, thing.title);

            _this22.http.post(url + 'stuff', thingData).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "modifyThing",
        value: function modifyThing(id, thing) {
          var _this23 = this;

          return new Promise(function (resolve, reject) {
            _this23.http.put(url + 'stuff/' + id, thing).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "modifyThingWithFile",
        value: function modifyThingWithFile(id, thing, image) {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            var thingData;

            if (typeof image === 'string') {
              thing.imageUrl = image;
              thingData = thing;
            } else {
              thingData = new FormData();
              thingData.append('thing', JSON.stringify(thing));
              thingData.append('image', image, thing.title);
            }

            _this24.http.put(url + 'stuff/' + id, thingData).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteThing",
        value: function deleteThing(id) {
          var _this25 = this;

          return new Promise(function (resolve, reject) {
            _this25.http["delete"](url + 'stuff/' + id).subscribe(function (response) {
              resolve(response);
            }, function (error) {
              reject(error);
            });
          });
        }
      }]);

      return StuffService;
    }();

    StuffService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    StuffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], StuffService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Applications/MAMP/htdocs/OC/DW/P6/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map