function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

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


    __webpack_exports__["default"] = "<div id=\"app\">\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <a href=\"#\" class=\"navbar-brand\">Agenda Viajes</a>\r\n    <ul class=\"navbar-nav mr-auto\" routerLinkActive=\"active\">\r\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\r\n        <a href=\"/home\" class=\"nav-link\" routerLink=\"home\">Inicio </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showAdminBoard\">\r\n        <a href=\"/admin\" class=\"nav-link\" routerLink=\"admin\">Reporte de Usuarios</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showModeratorBoard\">\r\n        <a href=\"/mod\" class=\"nav-link\" routerLink=\"mod\">Moderator Board</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href=\"/user\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"user\">Reporte de Viajes</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\r\n      <li class=\"nav-item\">\r\n        <a href=\"/register\" class=\"nav-link\" routerLink=\"register\">Registrarse</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href=\"/login\" class=\"nav-link\" routerLink=\"login\">Iniciar Sesion</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\r\n      <li class=\"nav-item\">\r\n        <a href=\"/profile\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href class=\"nav-link\" (click)=\"logout()\">Cerrar Sesion</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardAdminBoardAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <header class=\"jumbotron\">\r\n    <div class=\"row mx-md-n2\">\r\n    <button type=\"button\" class=\"btn btn-secondary btn-lg col px-xs-3\" (click)=\"reporteUsuarios($event)\">Generar Reporte de Usuarios</button>\r\n    <button type=\"button\" class=\"btn btn-secondary btn-lg col px-xs-3\"  (click)=\"reporteZonas($event)\">Generar Reporte Zonas mas Visitadas</button>\r\n    </div>\r\n  </header>\r\n\r\n  <table class=\"table table-bordered\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <ng-container *ngFor =\"let item of content[0] | keyvalue\">\r\n          <ng-container *ngIf=\"item.key == 'id'; then first; else (item.key == 'cantidad' && second) || (item.key != 1 && third)\"></ng-container>\r\n           <ng-template #first></ng-template>\r\n           <ng-template #second><th scope=\"col\">cantidad de viajes</th></ng-template>\r\n           <ng-template #third><th scope=\"col\">{{item.key}}</th></ng-template>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor =\"let items of content\">\r\n        <tr>\r\n            <ng-container *ngFor =\"let item of items | keyvalue\">\r\n              <ng-container *ngIf=\"item.key == 'id'; then first; else (item.key == 'type' && second) || (item.key != 1 && third)\"></ng-container>\r\n               <ng-template #first></ng-template>\r\n               <ng-template #second></ng-template>\r\n               <ng-template #third><td>{{item.value}}</td></ng-template>\r\n            </ng-container>\r\n        </tr>\r\n      </ng-container>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardModeratorBoardModeratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <header class=\"jumbotron\">\r\n    <p>{{ content }}</p>\r\n  </header>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardUserBoardUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <header class=\"jumbotron\">\r\n    <!-- <div *ngFor=\"let player of allPlayers\">\r\n    {{player.firstName}}\r\n  </div> -->\r\n  <!-- <p>{{ content | json }}</p> -->\r\n  <div class=\"text-center\">\r\n    <h4>Generar reporte</h4>\r\n\r\n  </div>\r\n  <form class=\"form-inline\"   #myForm=\"ngForm\" style=\"margin-top:40px\">\r\n    <label for=\"example-date-input\">Fecha desde: </label>\r\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"desde\" name=\"fechadesde\" id=\"example-date-input\">\r\n    <label for=\"example-date-input\">Fecha hasta: </label>\r\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"hasta\" name=\"fechahasta\" id=\"example-date-input\">\r\n    <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Region: </label>\r\n    <select class=\"custom-select \"  [(ngModel)]=\"region\" name=\"region\"  id=\"inlineFormCustomSelect\">\r\n      <ng-container *ngFor =\"let region of regiones\">\r\n        <option value=\"{{region.nombre}}\" [value]=\"region.nombre\">{{region.nombre}}</option>\r\n      </ng-container>\r\n    </select>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"generarReporte($event)\">Generar</button>\r\n  </form>\r\n\r\n</header>\r\n\r\n\r\n\r\n<ng-container *ngFor =\"let viaje of viajes\">\r\n  <div class=\"card m-5 pb-5\">\r\n    <div class=\"container\">\r\n      <div class=\"text-center\">\r\n        <h4>Viaje</h4>\r\n\r\n      </div>\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <ng-container *ngFor =\"let table of viaje_tables\">\r\n            <th scope=\"col\">{{table.nombre}}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{viaje.nombre}}</td>\r\n          <td>{{viaje.ciudad_destino}}</td>\r\n          <td>{{viaje.ciudad_origen}}</td>\r\n          <td>{{viaje.fecha_inicio}}</td>\r\n          <td>{{viaje.fecha_fin}}</td>\r\n          <td>{{viaje.descripcion}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h5>Planes del Viaje:</h5>\r\n    <ng-container *ngFor =\"let plan of viaje.planes\">\r\n      <div class=\"text-center\">\r\n        <h6>Plan de {{plan.type}}</h6>\r\n\r\n      </div>\r\n\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <ng-container *ngFor =\"let item of plan | keyvalue\">\r\n              <ng-container *ngIf=\"item.key == 'id_plan'; then first; else (item.key == 'type' && second) || (item.key != 1 && third)\"></ng-container>\r\n              <ng-template #first></ng-template>\r\n              <ng-template #second></ng-template>\r\n              <ng-template #third><th scope=\"col\">{{item.key}}</th></ng-template>\r\n            </ng-container>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <ng-container *ngFor =\"let item of plan | keyvalue\">\r\n              <ng-container *ngIf=\"item.key == 'id_plan'; then first; else (item.key == 'type' && second) || (item.key != 1 && third)\"></ng-container>\r\n              <ng-template #first></ng-template>\r\n              <ng-template #second></ng-template>\r\n              <ng-template #third><td>{{item.value}}</td></ng-template>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n\r\n      </ng-container>\r\n    </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <!-- <header class=\"jumbotron\">\r\n  <p>{{ content }}</p>\r\n</header> -->\r\n<h1 class=\"display-4 text-center\">Viajes del Usuario</h1>\r\n<div class=\"text-right\">\r\n  <a href=\"#\" [routerLink]=\"['/viaje/create']\" class=\"btn btn-outline-success\">Agregar Viaje</a>\r\n</div>\r\n<table class=\"table\">\r\n  <thead class=\"thead-dark\">\r\n    <tr>\r\n      <ng-container *ngFor =\"let table of tables\">\r\n        <th scope=\"col\">{{table.nombre}}</th>\r\n      </ng-container>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor =\"let viaje of content\">\r\n      <tr>\r\n        <td>{{viaje.nombre}}</td>\r\n        <td>{{viaje.ciudad_origen}}</td>\r\n        <td>{{viaje.ciudad_destino}}</td>\r\n        <td>{{viaje.fecha_inicio}}</td>\r\n        <td>{{viaje.fecha_fin}}</td>\r\n        <td>{{viaje.descripcion}}</td>\r\n        <!-- <td><button type=\"button\" class=\"btn btn-outline-dark\">Ver Mas</button></td> -->\r\n        <td>\r\n          <a href=\"#\" [routerLink]=\"['/viaje/', viaje.id_viaje, 'ver']\" class=\"btn btn-outline-info\">Ver</a>\r\n          <a href=\"#\" [routerLink]=\"['/viaje/', viaje.id_viaje, 'editar']\" class=\"btn btn-outline-primary\">Editar</a>\r\n          <button type=\"button\" (click)=\"deleteViaje(viaje.id_viaje)\" class=\"btn btn-outline-danger\">Eliminar</button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </tbody>\r\n</table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\r\n  <div class=\"card card-container\">\r\n    <img\r\n      id=\"profile-img\"\r\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\r\n      class=\"profile-img-card\"\r\n    />\r\n    <form\r\n      *ngIf=\"!isLoggedIn\"\r\n      name=\"form\"\r\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n      #f=\"ngForm\"\r\n      novalidate\r\n    >\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Nombre de Usuario</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"username\"\r\n          [(ngModel)]=\"form.username\"\r\n          required\r\n          #username=\"ngModel\"\r\n        />\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          role=\"alert\"\r\n          *ngIf=\"f.submitted && username.invalid\"\r\n        >\r\n          Nombre de usuario es requerido!\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Contraseña</label>\r\n        <input\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          name=\"password\"\r\n          [(ngModel)]=\"form.password\"\r\n          required\r\n          minlength=\"4\"\r\n          #password=\"ngModel\"\r\n        />\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          role=\"alert\"\r\n          *ngIf=\"f.submitted && password.invalid\"\r\n        >\r\n          <div *ngIf=\"password.errors.required\">Contraseña es requerida</div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            La contraseña debe contener mas de 4 caracteres\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary btn-block\">\r\n          Iniciar Sesion\r\n        </button>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          role=\"alert\"\r\n          *ngIf=\"f.submitted && isLoginFailed\"\r\n        >\r\n          Fallo el inicio de sesion: {{ errorMessage }}\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\r\n      Usted ha iniciado sesion exitosamente!\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\r\n  <header class=\"jumbotron\">\r\n    <h3>\r\n      <strong>{{ currentUser.username }}</strong>\r\n    </h3>\r\n  </header>\r\n  <p>\r\n    <strong>Token:</strong>\r\n    {{ currentUser.token.substring(0, 20) }} ...\r\n    {{ currentUser.token.substr(currentUser.token.length - 20) }}\r\n  </p>\r\n  <strong>Roles:</strong>\r\n  <ul>\r\n    <li *ngFor=\"let role of currentUser.roles\">\r\n      {{ role }}\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #loggedOut>\r\n  Please login.\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\r\n  <div class=\"card card-container\">\r\n    <img\r\n      id=\"profile-img\"\r\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\r\n      class=\"profile-img-card\"\r\n    />\r\n    <form\r\n      *ngIf=\"!isSuccessful\"\r\n      name=\"form\"\r\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n      #f=\"ngForm\"\r\n      novalidate\r\n    >\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"firstname\">Nombre</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"firstname\"\r\n        [(ngModel)]=\"form.firstname\"\r\n        required\r\n        firstname\r\n        #firstname=\"ngModel\"\r\n      />\r\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && firstname.invalid\">\r\n        <div *ngIf=\"email.errors.required\">Nombre es requerido</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lastname\">Apellido</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        name=\"lastname\"\r\n        [(ngModel)]=\"form.lastname\"\r\n        required\r\n        lastname\r\n        #lastname=\"ngModel\"\r\n      />\r\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && lastname.invalid\">\r\n        <div *ngIf=\"email.errors.required\">Apellido es requerido</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"dni\">DNI</label>\r\n      <input\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        name=\"dni\"\r\n        [(ngModel)]=\"form.dni\"\r\n        required\r\n        minlength=\"7\"\r\n        maxlength=\"8\"\r\n        dni\r\n        #dni=\"ngModel\"\r\n      />\r\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && dni.invalid\">\r\n        <div *ngIf=\"email.errors.required\">dni es requerido</div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Nombre de Usuario</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"username\"\r\n          [(ngModel)]=\"form.username\"\r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"20\"\r\n          #username=\"ngModel\"\r\n        />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n          <div *ngIf=\"username.errors.required\">Nombre de Usuario es requerido</div>\r\n          <div *ngIf=\"username.errors.minlength\">\r\n            Username must be at least 3 characters\r\n          </div>\r\n          <div *ngIf=\"username.errors.maxlength\">\r\n            Username must be at most 20 characters\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          name=\"email\"\r\n          [(ngModel)]=\"form.email\"\r\n          required\r\n          email\r\n          #email=\"ngModel\"\r\n        />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n          <div *ngIf=\"email.errors.required\">Email es requerido</div>\r\n          <div *ngIf=\"email.errors.email\">\r\n            Email must be a valid email address\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Contraseña</label>\r\n        <input\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          name=\"password\"\r\n          [(ngModel)]=\"form.password\"\r\n          required\r\n          minlength=\"4\"\r\n          #password=\"ngModel\"\r\n        />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n          <div *ngIf=\"password.errors.required\">Contraseña es requerida</div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            La contraseña debe tener mas de 4 caracteres\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary btn-block\">Registrarse</button>\r\n      </div>\r\n\r\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n        Error al registrarse, revise los campos!<br />{{ errorMessage }}\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n      Usted se ha registrado exitosamente! Debe iniciar sesion\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/create/create.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/create/create.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViajeCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n\n    <div class=\"form-group\">\n      <label for=\"titulo\">Titulo</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"titulo\"\n        [(ngModel)]=\"form.titulo\"\n        required\n        titulo\n        #titulo=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && titulo.invalid\">\n        <div *ngIf=\"email.errors.required\">Titulo es requerido</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ciudad_origen\">Ciudad Origen</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"ciudad_origen\"\n        [(ngModel)]=\"form.ciudad_origen\"\n        required\n        ciudad_origen\n        #ciudad_origen=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && ciudad_origen.invalid\">\n        <div *ngIf=\"email.errors.required\">Ciudad de origen es requerido</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ciudad_destino\">Ciudad Destino</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"ciudad_destino\"\n        [(ngModel)]=\"form.ciudad_destino\"\n        required\n        ciudad_destino\n        #ciudad_destino=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && ciudad_destino.invalid\">\n        <div *ngIf=\"email.errors.required\">Ciudad de destino es requerido</div>\n      </div>\n    </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"fecha_inicio\">Fecha de Inicio</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_inicio\"\n          [(ngModel)]=\"form.fecha_inicio\"\n          required\n          fecha_inicio\n          #fecha_inicio=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_inicio.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de inicio es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fecha_fin\">Fecha de Fin</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_fin\"\n          [(ngModel)]=\"form.fecha_fin\"\n          required\n          fecha_fin\n          #fecha_fin=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_fin.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de fin es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descripcion\">Descripcion</label>\n        <input\n          type=\"<textarea\"\n          class=\"form-control\"\n          name=\"descripcion\"\n          [(ngModel)]=\"form.descripcion\"\n          required\n          descripcion\n          #descripcion=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && descripcion.invalid\">\n          <div *ngIf=\"email.errors.required\">Descripcion es requerido</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Agregar Viaje</button>\n      </div>\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Error al agregar el viaje, revise los campos!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      El viaje se ha agregado a la agenda.\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/plan/createplan/createplan.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/plan/createplan/createplan.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViajePlanCreateplanCreateplanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\n  <h3>Elegir tipo de plan a crear</h3>\n  <select class=\"custom-select \"  [(ngModel)]=\"tipoForm\"   (change)=\"selectForm($event)\" name=\"tipoForm\"  id=\"inlineFormCustomSelect\">\n    <!-- <ng-container *ngFor =\"let f of tipoForm\"> -->\n    <option value=\"elegir\" [ngValue]=\"elegir\">Elegir tipo de plan..</option>\n      <option value=\"transporte\" [ngValue]=\"transporte\">Transporte</option>\n      <option value=\"alojamiento\" [ngValue]=\"alojamiento\">Alojamiento</option>\n    <!-- </ng-container> -->\n  </select>\n  <div class=\"card card-container\"  *ngIf=viewTransporte>\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"formTransporte\"\n      (ngSubmit)=\"onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n\n    <div class=\"form-group\">\n      <label for=\"tipo_transporte\">Tipo de Transporte *</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"tipo_transporte\"\n        [(ngModel)]=\"formTransporte.tipo_transporte\"\n        required\n        tipo_transporte\n        #tipo_transporte=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && tipo_transporte.invalid\">\n        <div *ngIf=\"email.errors.required\">Tipo de transporte es requerido</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ciudad_origen\">Ciudad Origen *</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"ciudad_origen\"\n        [(ngModel)]=\"formTransporte.ciudad_origen\"\n        required\n        ciudad_origen\n        #ciudad_origen=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && ciudad_origen.invalid\">\n        <div *ngIf=\"email.errors.required\">Ciudad de origen es requerido</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ciudad_destino\">Ciudad Destino *</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"ciudad_destino\"\n        [(ngModel)]=\"formTransporte.ciudad_destino\"\n        required\n        ciudad_destino\n        #ciudad_destino=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && ciudad_destino.invalid\">\n        <div *ngIf=\"email.errors.required\">Ciudad de destino es requerido</div>\n      </div>\n    </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"fecha_inicio\">Fecha de Inicio *</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_inicio\"\n          [(ngModel)]=\"formTransporte.fecha_inicio\"\n          required\n          fecha_inicio\n          #fecha_inicio=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_inicio.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de inicio es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fecha_fin\">Fecha de Fin *</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_fin\"\n          [(ngModel)]=\"formTransporte.fecha_fin\"\n          required\n          fecha_fin\n          #fecha_fin=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_fin.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de fin es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"detalle\">Detalle *</label>\n        <input\n          type=\"<textarea\"\n          class=\"form-control\"\n          name=\"detalle\"\n          [(ngModel)]=\"formTransporte.descripcion\"\n          required\n          detalle\n          #detalle=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && detalle.invalid\">\n          <div *ngIf=\"email.errors.required\">El detalle es requerido</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"terminal_salida\">Terminal de Salida</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"terminal_salida\"\n          [(ngModel)]=\"formTransporte.terminal_salida\"\n          terminal_salida\n          #terminal_salida=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"terminal_llegada\">Terminal de Llegada</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"terminal_llegada\"\n          [(ngModel)]=\"formTransporte.terminal_llegada\"\n          terminal_llegada\n          #terminal_llegada=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"cod_reserva\">Codigo de Reserva</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"cod_reserva\"\n          [(ngModel)]=\"formTransporte.cod_reserva\"\n          cod_reserva\n          #cod_reserva=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"nro_asiento\">Numero de Asiento</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"nro_asiento\"\n          [(ngModel)]=\"formTransporte.nro_asiento\"\n          nro_asiento\n          #nro_asiento=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"nro_viaje\">Numero de Viaje</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"nro_viaje\"\n          [(ngModel)]=\"formTransporte.nro_viaje\"\n          nro_viaje\n          #nro_viaje=\"ngModel\"\n        />\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Agregar Plan</button>\n      </div>\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Error al agregar el viaje, revise los campos!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      El viaje se ha agregado a la agenda.\n    </div>\n  </div>\n\n\n  <div class=\"card card-container\"  *ngIf=viewAlojamiento>\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"formAlojamiento\"\n      (ngSubmit)=\"onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n\n    <div class=\"form-group\">\n      <label for=\"detalle\">Detalle *</label>\n      <input\n        type=\"<textarea\"\n        class=\"form-control\"\n        name=\"detalle\"\n        [(ngModel)]=\"formAlojamiento.descripcion\"\n        required\n        detalle\n        #detalle=\"ngModel\"\n      />\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && detalle.invalid\">\n        <div *ngIf=\"email.errors.required\">El detalle es requerido</div>\n      </div>\n    </div>\n\n\n\n      <div class=\"form-group\">\n        <label for=\"fecha_inicio\">Fecha de Inicio *</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_inicio\"\n          [(ngModel)]=\"formAlojamiento.fecha_inicio\"\n          required\n          fecha_inicio\n          #fecha_inicio=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_inicio.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de inicio es requerida</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fecha_fin\">Fecha de Fin *</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          name=\"fecha_fin\"\n          [(ngModel)]=\"formAlojamiento.fecha_fin\"\n          required\n          fecha_fin\n          #fecha_fin=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && fecha_fin.invalid\">\n          <div *ngIf=\"username.errors.required\">Fecha de fin es requerida</div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"tipo_alojamiento\">Tipo Alojamiento *</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"tipo_alojamiento\"\n          [(ngModel)]=\"formAlojamiento.tipo_alojamiento\"\n          tipo_alojamiento\n          #tipo_alojamiento=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"direccion\">Direccion *</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"direccion\"\n          [(ngModel)]=\"formAlojamiento.direccion\"\n          direccion\n          #direccion=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"localidad\">Localidad *</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"localidad\"\n          [(ngModel)]=\"formAlojamiento.localidad\"\n          localidad\n          #localidad=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"cod_reserva\">Codigo de Reserva</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"cod_reserva\"\n          [(ngModel)]=\"formAlojamiento.cod_reserva\"\n          cod_reserva\n          #cod_reserva=\"ngModel\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"numero_habitacion\">Numero de Habitacion</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"numero_habitacion\"\n          [(ngModel)]=\"formAlojamiento.numero_habitacion\"\n          numero_habitacion\n          #numero_habitacion=\"ngModel\"\n        />\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Agregar Plan</button>\n      </div>\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Error al agregar el viaje, revise los campos!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      El viaje se ha agregado a la agenda.\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/view/view.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/view/view.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViajeViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"text-center\">\r\n    <h4>Viaje</h4>\r\n  </div>\r\n\r\n\r\n    <!-- <a href=\"#\" routerLink=\"/home/\" class=\"btn btn-primary\">Back</a> -->\r\n    <div class=\"text-right\">\r\n      <a href=\"#\" [routerLink]=\"['/plan/',viaje.id_viaje,'create']\" class=\"btn btn-outline-success\">Agregar Plan</a>\r\n    </div>\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <ng-container *ngFor =\"let table of viaje_tables\">\r\n            <th scope=\"col\">{{table.nombre}}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr>\r\n            <td>{{viaje.nombre}}</td>\r\n            <td>{{viaje.ciudad_origen}}</td>\r\n            <td>{{viaje.ciudad_destino}}</td>\r\n            <td>{{viaje.fecha_inicio}}</td>\r\n            <td>{{viaje.fecha_fin}}</td>\r\n            <td>{{viaje.descripcion}}</td>\r\n            </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <ng-container *ngFor =\"let plan of viaje.planes\">\r\n      <div class=\"text-center\">\r\n        <h4>Plan de {{plan.type}}</h4>\r\n\r\n      </div>\r\n\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <ng-container *ngFor =\"let item of plan | keyvalue\">\r\n            <ng-container *ngIf=\"item.key == 'id_plan'; then first; else (item.key == 'type' && second) || (item.key != 1 && third)\"></ng-container>\r\n             <ng-template #first></ng-template>\r\n             <ng-template #second></ng-template>\r\n             <ng-template #third><th scope=\"col\">{{item.key}}</th></ng-template>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr>\r\n              <ng-container *ngFor =\"let item of plan | keyvalue\">\r\n                <ng-container *ngIf=\"item.key == 'id_plan'; then first; else (item.key == 'type' && second) || (item.key != 1 && third)\"></ng-container>\r\n                 <ng-template #first></ng-template>\r\n                 <ng-template #second></ng-template>\r\n                 <ng-template #third><td>{{item.value}}</td></ng-template>\r\n              </ng-container>\r\n      </tbody>\r\n    </table>\r\n\r\n    </ng-container>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor, authInterceptorProviders */

  /***/
  function srcApp_helpersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
    // const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(token, router) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          var authReq = req;
          var token = this.token.getToken();

          if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({
              headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            }); // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
          }

          return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) {
            if (err.status === 403) {
              _this.handleAuthError();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
            }

            throw err;
          }));
        }
      }, {
        key: "handleAuthError",
        value: function handleAuthError() {
          this.token.signOut();
          this.router.navigateByUrl('login');
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AUTH_API = 'http://localhost:8081/usuarios/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          var formData = new FormData();
          formData.append('username', credentials.username);
          formData.append('password', credentials.password);
          return this.http.post(AUTH_API + 'login', formData);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(AUTH_API + 'register', {
            nombre: user.firstname,
            apellido: user.lastname,
            dni: user.dni,
            direccion: "null",
            nombre_usuario: user.username,
            email: user.email,
            password: user.password
          }, httpOptions);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/_services/token-storage.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/_services/token-storage.service.ts ***!
    \****************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcApp_servicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService =
    /*#__PURE__*/
    function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var data = JSON.parse(sessionStorage.getItem("auth-user"));

          if (data) {
            var token = data['token'].replace("Bearer", "");
            return token;
          }

          return sessionStorage.getItem("auth-user");
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem("auth-user"));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenStorageService);
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = 'http://localhost:8080/viajes/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getViajes",
        value: function getViajes() {
          return this.http.get(API_URL, {
            responseType: 'json'
          });
        }
      }, {
        key: "getViaje",
        value: function getViaje(id) {
          return this.http.get(API_URL + id, {
            responseType: 'json'
          });
        }
      }, {
        key: "getZonasGeograficas",
        value: function getZonasGeograficas() {
          return this.http.get(API_URL + 'zonasGeograficas', {
            responseType: 'json'
          });
        }
      }, {
        key: "getViajesZonasGeograficas",
        value: function getViajesZonasGeograficas(zona) {
          return this.http.get(API_URL + 'porDestino?zonaGeograficaDestino=' + zona, {
            responseType: 'json'
          });
        }
      }, {
        key: "getViajesRangoFechas",
        value: function getViajesRangoFechas(desde, hasta) {
          return this.http.get(API_URL + 'porFechas?fechaInicio=' + desde + '&fechaFin=' + hasta, {
            responseType: 'json'
          });
        }
      }, {
        key: "getReporteUsuarios",
        value: function getReporteUsuarios() {
          return this.http.get(API_URL + 'usuariosFavoritos', {
            responseType: 'json'
          });
        }
      }, {
        key: "getReporteZonas",
        value: function getReporteZonas() {
          return this.http.get(API_URL + 'zonasMasVisitadas', {
            responseType: 'json'
          });
        } // VIAJES SERVICIOS

      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete(API_URL + id, {
            responseType: 'text'
          });
        }
      }, {
        key: "saveViaje",
        value: function saveViaje(viaje, user) {
          return this.http.post(API_URL, {
            nombre: viaje.titulo,
            ciudad_origen: viaje.ciudad_origen,
            ciudad_destino: viaje.ciudad_destino,
            fecha_inicio: viaje.fecha_inicio,
            fecha_fin: viaje.fecha_fin,
            descripcion: viaje.descripcion,
            usuario: {
              id_usuario: user.id
            }
          }, httpOptions);
        }
      }, {
        key: "savePlanTransporte",
        value: function savePlanTransporte(plan, id) {
          return this.http.post(API_URL + id + '/plan', {
            type: "Transporte",
            tipo_plan: plan.descripcion,
            fecha_inicio: plan.fecha_inicio,
            fecha_fin: plan.fecha_fin,
            ciudad_origen: plan.ciudad_origen,
            ciudad_destino: plan.ciudad_destino,
            tipo_transporte: plan.tipo_transporte,
            terminal_salida: plan.terminal_salida,
            terminal_llegada: plan.terminal_llegada,
            codigo_reserva: plan.cod_reserva,
            nro_asiento: plan.nro_asiento,
            nro_viaje: plan.nro_viaje
          }, httpOptions);
        }
      }, {
        key: "savePlanAlojamiento",
        value: function savePlanAlojamiento(plan, id) {
          return this.http.post(API_URL + id + '/plan', {
            type: "Alojamiento",
            tipo_plan: plan.descripcion,
            fecha_inicio: plan.fecha_inicio,
            fecha_fin: plan.fecha_fin,
            tipo_alojamiento: plan.tipo_alojamiento,
            direccion: plan.direccion,
            localidad: plan.localidad,
            numero_habitacion: plan.numero_habitacion,
            codigo_reserva: plan.cod_reserva
          }, httpOptions);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
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


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./board-user/board-user.component */
    "./src/app/board-user/board-user.component.ts");
    /* harmony import */


    var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./board-moderator/board-moderator.component */
    "./src/app/board-moderator/board-moderator.component.ts");
    /* harmony import */


    var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./board-admin/board-admin.component */
    "./src/app/board-admin/board-admin.component.ts");
    /* harmony import */


    var _viaje_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./viaje/create/create.component */
    "./src/app/viaje/create/create.component.ts");
    /* harmony import */


    var _viaje_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./viaje/view/view.component */
    "./src/app/viaje/view/view.component.ts");
    /* harmony import */


    var _viaje_plan_createplan_createplan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./viaje/plan/createplan/createplan.component */
    "./src/app/viaje/plan/createplan/createplan.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    }, {
      path: 'user',
      component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__["BoardUserComponent"]
    }, {
      path: 'mod',
      component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__["BoardModeratorComponent"]
    }, {
      path: 'admin',
      component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"]
    }, {
      path: 'viaje/create',
      component: _viaje_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"]
    }, {
      path: 'viaje/:viajeId/ver',
      component: _viaje_view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"]
    }, {
      path: 'plan/:viajeId/create',
      component: _viaje_plan_createplan_createplan_component__WEBPACK_IMPORTED_MODULE_12__["CreateplanComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "[hidden] {\r\n  display: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
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
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(tokenStorageService, router) {
        _classCallCheck(this, AppComponent);

        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = !!this.tokenStorageService.getToken();

          if (this.tokenExpired(this.tokenStorageService.getToken())) {
            console.log("expiro");
            this.isLoggedIn = false;
            this.tokenStorageService.signOut();
            this.router.navigate(['login']);
          }

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          window.location.reload();
        }
      }, {
        key: "tokenExpired",
        value: function tokenExpired(token) {
          var expiry = JSON.parse(atob(token.split('.')[1])).exp;
          return Math.floor(new Date().getTime() / 1000) >= expiry;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./board-admin/board-admin.component */
    "./src/app/board-admin/board-admin.component.ts");
    /* harmony import */


    var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./board-user/board-user.component */
    "./src/app/board-user/board-user.component.ts");
    /* harmony import */


    var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./board-moderator/board-moderator.component */
    "./src/app/board-moderator/board-moderator.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./_helpers/auth.interceptor */
    "./src/app/_helpers/auth.interceptor.ts");
    /* harmony import */


    var _viaje_create_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./viaje/create/create.component */
    "./src/app/viaje/create/create.component.ts");
    /* harmony import */


    var _viaje_view_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./viaje/view/view.component */
    "./src/app/viaje/view/view.component.ts");
    /* harmony import */


    var _filtro_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./filtro.pipe */
    "./src/app/filtro.pipe.ts");
    /* harmony import */


    var _viaje_plan_createplan_createplan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./viaje/plan/createplan/createplan.component */
    "./src/app/viaje/plan/createplan/createplan.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__["BoardAdminComponent"], _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"], _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__["BoardModeratorComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _viaje_create_create_component__WEBPACK_IMPORTED_MODULE_15__["CreateComponent"], _viaje_view_view_component__WEBPACK_IMPORTED_MODULE_16__["ViewComponent"], _filtro_pipe__WEBPACK_IMPORTED_MODULE_17__["FiltroPipe"], _viaje_plan_createplan_createplan_component__WEBPACK_IMPORTED_MODULE_18__["CreateplanComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["authInterceptorProviders"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/board-admin/board-admin.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/board-admin/board-admin.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardAdminBoardAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/board-admin/board-admin.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/board-admin/board-admin.component.ts ***!
    \******************************************************/

  /*! exports provided: BoardAdminComponent */

  /***/
  function srcAppBoardAdminBoardAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function () {
      return BoardAdminComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var BoardAdminComponent =
    /*#__PURE__*/
    function () {
      function BoardAdminComponent(userService) {
        _classCallCheck(this, BoardAdminComponent);

        this.userService = userService;
        this.content = '';
      }

      _createClass(BoardAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reporteUsuarios",
        value: function reporteUsuarios(event) {
          var _this2 = this;

          this.userService.getReporteUsuarios().subscribe(function (data) {
            console.log(data);
            _this2.content = data;
          }, function (err) {
            _this2.content = JSON.parse(err.error).message;
          });
        }
      }, {
        key: "reporteZonas",
        value: function reporteZonas(event) {
          var _this3 = this;

          this.userService.getReporteZonas().subscribe(function (data) {
            console.log(data);
            _this3.content = data;
          }, function (err) {
            _this3.content = JSON.parse(err.error).message;
          });
        }
      }]);

      return BoardAdminComponent;
    }();

    BoardAdminComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board-admin.component.css */
      "./src/app/board-admin/board-admin.component.css")).default]
    })], BoardAdminComponent);
    /***/
  },

  /***/
  "./src/app/board-moderator/board-moderator.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/board-moderator/board-moderator.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardModeratorBoardModeratorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/board-moderator/board-moderator.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/board-moderator/board-moderator.component.ts ***!
    \**************************************************************/

  /*! exports provided: BoardModeratorComponent */

  /***/
  function srcAppBoardModeratorBoardModeratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function () {
      return BoardModeratorComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var BoardModeratorComponent =
    /*#__PURE__*/
    function () {
      function BoardModeratorComponent(userService) {
        _classCallCheck(this, BoardModeratorComponent);

        this.userService = userService;
      }

      _createClass(BoardModeratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.userService.getModeratorBoard().subscribe(
          //   data => {
          //     this.content = data;
          //   },
          //   err => {
          //     this.content = JSON.parse(err.error).message;
          //   }
          // );
        }
      }]);

      return BoardModeratorComponent;
    }();

    BoardModeratorComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-moderator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board-moderator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board-moderator.component.css */
      "./src/app/board-moderator/board-moderator.component.css")).default]
    })], BoardModeratorComponent);
    /***/
  },

  /***/
  "./src/app/board-user/board-user.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/board-user/board-user.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardUserBoardUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/board-user/board-user.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/board-user/board-user.component.ts ***!
    \****************************************************/

  /*! exports provided: BoardUserComponent */

  /***/
  function srcAppBoardUserBoardUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function () {
      return BoardUserComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var BoardUserComponent =
    /*#__PURE__*/
    function () {
      // region: any;
      function BoardUserComponent(userService) {
        _classCallCheck(this, BoardUserComponent);

        this.userService = userService;
        this.viajes = '';
        this.regiones = [];
        this.viaje_tables = [{
          "nombre": "Titulo"
        }, {
          "nombre": "Destino"
        }, {
          "nombre": "Origen"
        }, {
          "nombre": "Fecha Inicio"
        }, {
          "nombre": "Fecha Fin"
        }, {
          "nombre": "Descripcion"
        }];
        this.region = 'Elegir..';
        this.estado = 'null';
      }

      _createClass(BoardUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          // this.userService.getViajes().subscribe(
          //   data => {
          //     this.viajes = data;
          //     console.log(data);
          //
          //   },
          //   err => {
          //     this.viajes = JSON.parse(err.error).message;
          //   }
          //   );
          this.userService.getZonasGeograficas().subscribe(function (data) {
            _this4.regiones = data;

            _this4.regiones.push({
              "nombre": "Elegir.."
            });

            console.log(_this4.regiones);
          }, function (err) {
            _this4.regiones = JSON.parse(err.error).message;
          });
        }
      }, {
        key: "generarReporte",
        value: function generarReporte() {
          var _this5 = this;

          console.log(this.region);

          if (this.region != "Elegir..") {
            this.userService.getViajesZonasGeograficas(this.region).subscribe(function (data) {
              _this5.viajes = data;
            }, function (err) {
              _this5.regiones = JSON.parse(err.error).message;
            });
          }

          if (this.hasta && this.desde) {
            console.log(this.hasta + '' + this.desde);
            this.userService.getViajesRangoFechas(this.desde, this.hasta).subscribe(function (data) {
              console.log(data);
              _this5.viajes = data;
            }, function (err) {
              _this5.regiones = JSON.parse(err.error).message;
            });
          }
        }
      }]);

      return BoardUserComponent;
    }();

    BoardUserComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board-user.component.css */
      "./src/app/board-user/board-user.component.css")).default]
    })], BoardUserComponent);
    /***/
  },

  /***/
  "./src/app/filtro.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/filtro.pipe.ts ***!
    \********************************/

  /*! exports provided: FiltroPipe */

  /***/
  function srcAppFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
      return FiltroPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FiltroPipe =
    /*#__PURE__*/
    function () {
      function FiltroPipe() {
        _classCallCheck(this, FiltroPipe);
      }

      _createClass(FiltroPipe, [{
        key: "transform",
        value: function transform(value, desde, hasta, estado, region) {
          if (!desde || !hasta) {
            return value;
          } else {
            var startDate = new Date(desde);
            var endDate = new Date(hasta);
            return value.filter(function (plan) {
              return new Date(plan["Fecha Inicio"]) >= startDate && new Date(plan["Fecha Fin"]) <= endDate;
            });
          }
        }
      }]);

      return FiltroPipe;
    }();

    FiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filtro'
    })], FiltroPipe);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.tables = [{
          "nombre": "Titulo"
        }, {
          "nombre": "Destino"
        }, {
          "nombre": "Origen"
        }, {
          "nombre": "Fecha Inicio"
        }, {
          "nombre": "Fecha Fin"
        }, {
          "nombre": "Descripcion"
        }, {
          "nombre": "Accion"
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.userService.getViajes().subscribe(function (data) {
            _this6.content = data;

            _this6.vie(data);
          }, function (err) {
            _this6.content = JSON.parse(err.error).message;
          });
        }
      }, {
        key: "deleteViaje",
        value: function deleteViaje(id) {
          this.userService.delete(id).subscribe(function (res) {
            if (res) {
              window.location.reload();
            }
          });
        }
      }, {
        key: "vie",
        value: function vie(data) {
          console.log(data);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, tokenStorage, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            console.log(this.tokenStorage.getToken());
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          this.authService.login(this.form).subscribe(function (data) {
            _this7.tokenStorage.saveToken(data.token);

            _this7.tokenStorage.saveUser(data);

            _this7.isLoginFailed = false;
            _this7.isLoggedIn = true;
            _this7.roles = ["ROLE_USER"];

            _this7.router.navigate(['home']);
          }, function (err) {
            _this7.errorMessage = err.error.message;
            _this7.isLoginFailed = true;
          });
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          window.location.reload();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(token) {
        _classCallCheck(this, ProfileComponent);

        this.token = token;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.token.getUser();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authService) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            _this8.isSuccessful = true;
            _this8.isSignUpFailed = false;
          }, function (err) {
            _this8.errorMessage = err.error.message;
            _this8.isSignUpFailed = true;
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/viaje/create/create.component.css":
  /*!***************************************************!*\
    !*** ./src/app/viaje/create/create.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViajeCreateCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFHZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWFqZS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWctY2FyZCB7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/viaje/create/create.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/viaje/create/create.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppViajeCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");

    var CreateComponent =
    /*#__PURE__*/
    function () {
      function CreateComponent(userService, tokenStorageService) {
        _classCallCheck(this, CreateComponent);

        this.userService = userService;
        this.tokenStorageService = tokenStorageService;
        this.form = {};
        this.errorMessage = '';
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.userService.saveViaje(this.form, this.tokenStorageService.getUser()).subscribe(function (data) {
            if (data) {
              window.location.reload();
            }
          }, function (err) {
            _this9.errorMessage = err.error.message;
          });
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }];
    };

    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/create/create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create.component.css */
      "./src/app/viaje/create/create.component.css")).default]
    })], CreateComponent);
    /***/
  },

  /***/
  "./src/app/viaje/plan/createplan/createplan.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/viaje/plan/createplan/createplan.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViajePlanCreateplanCreateplanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n[hidden] {\r\n   display: none;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamUvcGxhbi9jcmVhdGVwbGFuL2NyZWF0ZXBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCOztBQUVDO0dBQ0UsYUFBYTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlhamUvcGxhbi9jcmVhdGVwbGFuL2NyZWF0ZXBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiBbaGlkZGVuXSB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/viaje/plan/createplan/createplan.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/viaje/plan/createplan/createplan.component.ts ***!
    \***************************************************************/

  /*! exports provided: CreateplanComponent */

  /***/
  function srcAppViajePlanCreateplanCreateplanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateplanComponent", function () {
      return CreateplanComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CreateplanComponent =
    /*#__PURE__*/
    function () {
      function CreateplanComponent(userService, route, router) {
        _classCallCheck(this, CreateplanComponent);

        this.userService = userService;
        this.route = route;
        this.router = router;
        this.formTransporte = {};
        this.formAlojamiento = {};
        this.errorMessage = '';
      }

      _createClass(CreateplanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.params['viajeId'];
          console.log(this.id);
        }
      }, {
        key: "selectForm",
        value: function selectForm() {
          if (this.tipoForm === "alojamiento") {
            this.viewTransporte = false;
            this.viewAlojamiento = true;
          } else if (this.tipoForm == "transporte") {
            this.viewAlojamiento = false;
            this.viewTransporte = true;
          } else {
            this.viewTransporte = false;
            this.viewAlojamiento = false;
          }

          console.log(this.tipoForm);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          if (this.tipoForm == "transporte") {
            this.userService.savePlanTransporte(this.formTransporte, this.id).subscribe(function (data) {
              if (data) {
                window.location.reload();
              }
            }, function (err) {
              console.log(err.error.message);
              _this10.errorMessage = err.error.message;
            });
          } else {
            this.userService.savePlanAlojamiento(this.formAlojamiento, this.id).subscribe(function (data) {
              if (data) {
                window.location.reload();
              }
            }, function (err) {
              console.log(err.error.message);
              _this10.errorMessage = err.error.message;
            });
          }
        }
      }]);

      return CreateplanComponent;
    }();

    CreateplanComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CreateplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createplan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createplan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/plan/createplan/createplan.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createplan.component.css */
      "./src/app/viaje/plan/createplan/createplan.component.css")).default]
    })], CreateplanComponent);
    /***/
  },

  /***/
  "./src/app/viaje/view/view.component.css":
  /*!***********************************************!*\
    !*** ./src/app/viaje/view/view.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppViajeViewViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/viaje/view/view.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/viaje/view/view.component.ts ***!
    \**********************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppViajeViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewComponent =
    /*#__PURE__*/
    function () {
      function ViewComponent(userService, route, router) {
        _classCallCheck(this, ViewComponent);

        this.userService = userService;
        this.route = route;
        this.router = router;
        this.viaje_tables = [{
          "nombre": "Titulo"
        }, {
          "nombre": "Destino"
        }, {
          "nombre": "Origen"
        }, {
          "nombre": "Fecha Inicio"
        }, {
          "nombre": "Fecha Fin"
        }, {
          "nombre": "Descripcion"
        }];
        this.transporte_tables = [{
          "nombre": "Nombre"
        }, {
          "nombre": "Transporte"
        }, {
          "nombre": "Fecha Inicio"
        }, {
          "nombre": "Fecha Fin"
        }, {
          "nombre": "Ciudad Origen"
        }, {
          "nombre": "Ciudad Destino"
        }, {
          "nombre": "Terminal Salida"
        }, {
          "nombre": "Terminal Llegada"
        }, {
          "nombre": "Nro Asiento"
        }, {
          "nombre": "Nro Viaje"
        }, {
          "nombre": "Codigo Reserva"
        }];
        this.alojamiento_tables = [{
          "nombre": ""
        }, {
          "nombre": "Destino"
        }, {
          "nombre": "Origen"
        }, {
          "nombre": "Fecha Inicio"
        }, {
          "nombre": "Fecha Fin"
        }, {
          "nombre": "Descripcion"
        }];
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.id = this.route.snapshot.params['viajeId'];
          console.log(this.id);
          this.userService.getViaje(this.id).subscribe(function (data) {
            _this11.viaje = data; // console.log(Object.keys(this.viaje.planes[0]));
          });
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/viaje/view/view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view.component.css */
      "./src/app/viaje/view/view.component.css")).default]
    })], ViewComponent);
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
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\Users\Mateo\Documents\workspace-spring-tool-suite-4-4.8.0.RELEASE\AgendaViajes\front-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map