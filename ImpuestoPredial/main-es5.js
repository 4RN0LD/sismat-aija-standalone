function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"all-wrap\" fullscreen>\r\n    <mat-sidenav #sidenav style=\"width: 300px\">\r\n\r\n        <div class=\"mx-5 mb-3\">\r\n            <img src=\"assets/sismat.png\" class=\"w-100\">\r\n        </div>\r\n\r\n        <!-- <div *ngFor=\"let m of menus\">\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"{{m.url}}\" style=\"cursor: pointer\">\r\n                <mat-icon>{{m.icono}}</mat-icon>\r\n                <span>{{m.nombre}}</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div> -->\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/mantenimiento\" style=\"cursor: pointer\">\r\n                <mat-icon>sync_alt</mat-icon>\r\n                <span>Mantenimiento</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/procedimiento\" style=\"cursor: pointer\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>Procedimientos</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/predio\" style=\"cursor: pointer\">\r\n                <mat-icon>home_work</mat-icon>\r\n                <span>Predios</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/pago\" style=\"cursor: pointer\">\r\n                <mat-icon>attach_money</mat-icon>\r\n                <span>Pagos</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/reportes\" style=\"cursor: pointer\">\r\n                <mat-icon>show_chart</mat-icon>\r\n                <span>Reportes</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/usuarios\" style=\"cursor: pointer\">\r\n                <mat-icon>account_circle</mat-icon>\r\n                <span>Usuarios</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n        <!-- <div>\r\n            <button mat-menu-item (click)=\"sidenav.toggle()\" routerLink=\"/periodo\" style=\"cursor: pointer\">\r\n                <mat-icon>show_chart</mat-icon>\r\n                <span>Estadisticas</span>\r\n            </button>\r\n            <mat-divider></mat-divider>\r\n        </div> -->\r\n    </mat-sidenav>\r\n\r\n    <div class=\"page-wrap\">\r\n        <header role=\"banner\">\r\n            <mat-toolbar color=\"primary\" class=\"mat-elevation-z8 position-fixed\" style=\"background-color: #3aaaa1;\">\r\n                <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                    <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n                    <mat-icon *ngIf=\"sidenav.opened\">close</mat-icon>\r\n                </button>\r\n\r\n                <h1 class=\"app-name\">SISMAT</h1>\r\n\r\n                <span class=\"spacer\"></span>\r\n\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n\r\n                <mat-menu #menu=\"matMenu\">\r\n                    <button mat-menu-item routerLink=\"/perfil\">\r\n                        <mat-icon>account_box</mat-icon>\r\n                        <span>Mi Perfil</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"sidenav.opened = false\" (click)=\"authService.logout()\">\r\n                        <mat-icon>exit_to_app</mat-icon>\r\n                        <span>Cerrar Sesión</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </mat-toolbar>\r\n        </header>\r\n\r\n        <main class=\"content container-fluid\">\r\n            <router-outlet class=\"mt-5\"></router-outlet>\r\n        </main>\r\n\r\n        <footer class=\"mx-auto\">\r\n            SISTEMA MUNICIPAL DE ADMINISTRACION TRIBUTARIA | Grupo Arcos - 2021\r\n        </footer>\r\n\r\n    </div>\r\n\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/construccion/construccion.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesConstruccionConstruccionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table table-bordered table-sm\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Nivel</th>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Antiguedad (en años)</th>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Clasificaci&oacute;n</th>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Material Estructural</th>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Conservaci&oacute;n</th>\r\n            <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Area construida</th>\r\n            <th class=\"text-center border-secondary align-middle\" colspan=\"7\">CATEGORIAS</th>\r\n            <!-- <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Valor Uniario</th> -->\r\n            <!-- <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Incremento</th> -->\r\n            <!-- <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Depreciaci&oacute;n</th> -->\r\n            <!-- <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Total unitario</th> -->\r\n            <!-- <th class=\"text-center border-secondary align-middle\" rowspan=\"2\">Valor del nivel</th> -->\r\n        </tr>\r\n        <tr style=\"font-size:xx-small;\">\r\n            <th class=\"text-center border-secondary align-middle\">Muros y Columnas</th>\r\n            <th class=\"text-center border-secondary align-middle\">Techos</th>\r\n            <th class=\"text-center border-secondary align-middle\">Pisos</th>\r\n            <th class=\"text-center border-secondary align-middle\">Puertas y ventanas</th>\r\n            <th class=\"text-center border-secondary align-middle\">Revestim.</th>\r\n            <th class=\"text-center border-secondary align-middle\">Baños</th>\r\n            <th class=\"text-center border-secondary align-middle\">Instalac. electricas y sanitarias</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let construccion of construcciones; let i = index\">\r\n            <td class=\"p-0 text-right align-middle bg-white\">\r\n                <input matInput placeholder=\"{{i+1}}\" type=\"number\" class=\"pr-1 text-right\" step=\"1\"\r\n                    [(ngModel)]=\"construccion.nivel\">\r\n            </td>\r\n            <td class=\"p-0 text-right align-middle bg-white\">\r\n                <input matInput placeholder=\"5\" [(ngModel)]=\"construccion.antiguedad\" type=\"number\"\r\n                    class=\"pr-1 text-right\" step=\"1\">\r\n            </td>\r\n            <td>\r\n                <mat-select\r\n                    [(ngModel)]=\"construccion.estadoConservacion.materialEstructural.antiguedad.clasificacion.id\">\r\n                    <mat-option matTooltip=\"Casa Habitacion y Departamento para vivienda\" matTooltipPosition=\"right\"\r\n                        [value]=\"1\">Casa Habitacion y Departamento para vivienda</mat-option>\r\n                    <mat-option\r\n                        matTooltip=\"Tienda, Deposito, Centros de Recreaci&oacute;n o esparcimiento, clubes sociales o instituciones\"\r\n                        matTooltipPosition=\"right\" [value]=\"2\">Tienda, Deposito, Centros de Recreaci&oacute;n o\r\n                        esparcimiento,\r\n                        clubes sociales o instituciones</mat-option>\r\n                    <mat-option matTooltip=\"Edificios, Oficinas\" matTooltipPosition=\"right\" [value]=\"3\">Edificios,\r\n                        Oficinas</mat-option>\r\n                    <mat-option matTooltip=\"Clinicas, hospitales, industrias, colegios\" matTooltipPosition=\"right\"\r\n                        [value]=\"4\">Clinicas, hospitales, industrias, colegios</mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.estadoConservacion.materialEstructural.material\">\r\n                    <mat-option value=\"LADRILLO\">Ladrillo</mat-option>\r\n                    <mat-option value=\"ADOBE\">Adobe</mat-option>\r\n                    <mat-option value=\"CONCRETO\">Concreto</mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.estadoConservacion.estado\">\r\n                    <mat-option value=\"MUY BUENO\">Muy bueno</mat-option>\r\n                    <mat-option value=\"BUENO\">Bueno</mat-option>\r\n                    <mat-option value=\"REGULAR\">Regular</mat-option>\r\n                    <mat-option value=\"MALO\">Malo</mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td class=\"p-0 text-right align-middle bg-white\">\r\n                <input matInput placeholder=\"5\" type=\"number\" [(ngModel)]=\"construccion.areaConstruida\"\r\n                    class=\"pr-1 text-right\" step=\"1\">\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.murcol\" placeholder=\"A\">\r\n                    <mat-option *ngFor=\"let valor of murcolValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.techo\" placeholder=\"A\">\r\n                    <mat-option *ngFor=\"let valor of techoValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.piso\" placeholder=\"A\" style=\"min-width: 30px;\">\r\n                    <mat-option *ngFor=\"let valor of pisoValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.puertventa\" placeholder=\"A\">\r\n                    <mat-option *ngFor=\"let valor of puertventaValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.revestimiento\" placeholder=\"A\">\r\n                    <mat-option *ngFor=\"let valor of revestimientoValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.banio\" placeholder=\"A\" style=\"min-width: 30px;\">\r\n                    <mat-option *ngFor=\"let valor of banioValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(value)]=\"construccion.instelecsanit\" placeholder=\"A\">\r\n                    <mat-option *ngFor=\"let valor of instelecsanitValues\" [value]=\"valor.etiqueta\"\r\n                        [matTooltip]=\"valor.descripcion\">\r\n                        {{valor.etiqueta}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <button mat-icon-button (click)=\"remove(construccion)\" color=\"warn\">\r\n                    <mat-icon>highlight_off</mat-icon>\r\n                </button>\r\n            </td>\r\n            <!-- <td class=\"pr-1 text-right\">{{ valoresUnit[i].toFixed(2) }}</td> -->\r\n            <!-- <td class=\"pr-1 text-right\">{{ incrementos[i] }}</td> -->\r\n            <!-- <td class=\"pr-1 text-right\">{{ (valoresUnit[i] * porcDepreciaciones[i]).toFixed(2) }}</td> -->\r\n            <!-- <td class=\"pr-1 text-right\">{{ (valoresUnit[i] - valoresUnit[i] * porcDepreciaciones[i]).toFixed(2) }}</td> -->\r\n            <!-- <td class=\"pr-1 text-right\">{{ ((valoresUnit[i] - valoresUnit[i] * -->\r\n            <!-- porcDepreciaciones[i])*areas[i]).toFixed(2) }}</td> -->\r\n        </tr>\r\n    </tbody>\r\n    <!-- <tfoot>\r\n        <tr>\r\n            <th colspan=\"17\" class=\"text-right\">VALOR TOTAL DE LA CONSTRUCCION</th>\r\n            <th>0.00</th>\r\n        </tr>\r\n    </tfoot> -->\r\n</table>\r\n<div class=\"mb-1 float-left ml-1\">\r\n    <button mat-fab (click)=\"agregar()\" class=\"bg-primary\" matTooltip=\"Agregar construcci&oacute;n\">\r\n        <mat-icon>add</mat-icon>\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron mt-5 mx-3 mat-elevation-z2\">\r\n    <h1 class=\"display-4\">Bienvenido al SISMAT</h1>\r\n    <p class=\"lead\">Modulo de Impuesto Predial</p>\r\n    <hr class=\"my-4\">\r\n    <p>El Sistema Municipal de Administración Tributaria, fue desarrollado con la finalidad de mejorar el servicio de atención al usuario dentro del contexto de Modernizacion de la Gestión del Estado y Plan de Incentivos a la Mejora de la Recaudacion Tributaria.</p>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/instalacion/instalacion.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesInstalacionInstalacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"table table-bordered table-sm\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"text-center border-secondary align-middle\">Descripcion General</th>\r\n            <th class=\"text-center border-secondary align-middle\">Descripcion del componente</th>\r\n            <th class=\"text-center border-secondary align-middle\">Cantidad</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let instalacionPredio of instalacionesPredio; let i = index\">\r\n            <td>\r\n                <mat-select (selectionChange)=\"filtrarEspecifico(i, $event)\">\r\n                    <mat-option *ngFor=\"let general of generales[i]\" [matTooltip]=\"general\" matTooltipPosition=\"right\" [value]=\"general\">{{general}}</mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td>\r\n                <mat-select [(ngModel)]=\"instalacionPredio.instalacion\">\r\n                    <mat-option *ngFor=\"let especifica of especificas[i]\" [matTooltip]=\"especifica.descripcionEspecifica\" matTooltipPosition=\"right\" [value]=\"especifica\">{{especifica.descripcionEspecifica}}</mat-option>\r\n                </mat-select>\r\n            </td>\r\n            <td class=\"p-0 text-right align-middle bg-white\">\r\n                <div class=\"input-group\">\r\n                    <input type=\"number\" class=\"form-control pr-1 text-right\" step=\"1\" [(ngModel)]=\"instalacionPredio.unidades\">\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon2\">{{instalacionPredio.instalacion?.unidadMedida}}</span>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n\r\n            <td>\r\n                <button mat-icon-button (click)=\"remove(instalacionPredio)\" color=\"warn\">\r\n                  <mat-icon>highlight_off</mat-icon>\r\n              </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<div class=\"mb-1 float-left ml-1\">\r\n    <button mat-fab (click)=\"agregar()\" class=\"bg-primary\" matTooltip=\"Agregar construcci&oacute;n\">\r\n      <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMantenimientoBottomSheetMensajeBottomSheetMensajeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-5 mb-5\">\r\n    <h1 class=\"display-4\">Mantenimiento del sistema</h1>\r\n    <hr class=\"my-4\">\r\n    <p>En esta ventana usted podra realizar el ingreso de información necesaria para el calculo del impuesto\r\n        predial por\r\n        periodo, si no tiene conocimientos de como realizar esta accion puede revisar el video tutorial o\r\n        verificar el\r\n        manual de usuario.</p>\r\n    <p><b>NOTA:</b> Antes de registrar algun predio es necesario que este registrado al menos la informacion de un periodo\r\n    </p>\r\n    <div class=\"pr-5\">\r\n        <mat-slide-toggle class=\"float-right\" style=\"color: #3aaaa1;\" color=\"primary\" [(ngModel)]=\"mensajeMantenimiento\">\r\n            <h5>No volver a mostrar este mensaje</h5>\r\n        </mat-slide-toggle>\r\n        <button mat-button class=\"text-white\" style=\"background-color: #3aaaa1;\" (click)=\"close()\">Entendido</button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/cpu/cpu.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMantenimientoCpuCpuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mt-5\">\r\n    <h4>Seleccione Periodo</h4>\r\n    <mat-form-field>\r\n        <mat-label>Periodo</mat-label>\r\n        <mat-select [(ngModel)]=\"seleccionado\">\r\n            <mat-option *ngFor=\"let periodo of periodos\" [value]=\"periodo.id\">\r\n                {{ periodo.anio }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" class=\"mx-3\" (click)=\"elegir(seleccionado)\">Cargar formulario</button>\r\n\r\n    <div class=\"mat-elevation-z8 table-responsive w-100\">\r\n        <table class=\"table table-bordered table-hover table-sm\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\" class=\"text-center border-secondary align-middle\" colspan=\"2\" rowspan=\"2\">TIPO DE CALZADA Y ANCHO DE VIAS\r\n                    </th>\r\n                    <th colspan=\"8\" class=\"text-center border-secondary\">\r\n                        VALOR EN SOLES POR M2 SEGUN LA INFRAESTRUCTURA DE CALLES\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th *ngFor=\"let servicio of servicios\" class=\"text-center border-secondary\">\r\n                        {{ servicio.descripcion }}\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"valoresTerreno\">\r\n                <ng-container *ngFor=\"let calzada of calzadas; index as i\">\r\n                    <tr *ngFor=\"let medida of medidas; index as j\">\r\n                        <th *ngIf=\"j == 0\" class=\"align-middle border-secondary\" style=\"max-width: 35px;\" rowspan=\"3\">\r\n                            <div class=\"vertical\">\r\n                                {{ calzada.descripcion }}\r\n                            </div>\r\n                        </th>\r\n                        <td class=\"text-right border-secondary\" style=\"min-width: 120px;\">{{ medida.intervalo }}</td>\r\n\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[0 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[1 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[2 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[3 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[4 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[5 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[6 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                        <td class=\"p-0 text-right align-middle bg-white\">\r\n                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                                [(ngModel)]=\"valoresTerreno[7 + (8*j) + (24*i)].valor\">\r\n                        </td>\r\n                    </tr>\r\n                </ng-container>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <button matRipple *ngIf=\"valoresTerreno\" (click)=\"guardar()\" class=\"btn btn-lg btn-outline-success my-3 mat-elevation-z8\"> Guardar Datos\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/mantenimiento.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMantenimientoMantenimientoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper class=\"pt-4\" #stepper>\r\n    <!-- <mat-step [stepControl]=\"firstFormGroup\"> -->\r\n\r\n    <!-- </mat-step> -->\r\n    <mat-step>\r\n        <ng-template matStepLabel>Registro del Periodo</ng-template>\r\n        <div class=\"mat-elevation-z3 mt-5\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"w-100\">\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"anio\">\r\n                    <th mat-header-cell *matHeaderCellDef> AÑO </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.anio}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"uit\">\r\n                    <th mat-header-cell *matHeaderCellDef> UIT </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.uit}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"acciones\">\r\n                    <th mat-header-cell *matHeaderCellDef> ACCIONES </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <button mat-icon-button color=\"primary\" matTooltip=\"Editar\" matTooltipPosition=\"above\"\r\n                            (click)=\"openDialog(element)\">\r\n                            <mat-icon>ballot</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button color=\"accent\" matTooltip=\"Eliminar\" matTooltipPosition=\"above\" (click)=\"eliminar(element)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n        <div class=\"my-4 float-right\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-left\">\r\n            <button mat-fab color=\"primary\" matTooltip=\"Iniciar Nuevo Periodo\" matTooltipPosition=\"left\"\r\n                (click)=\"openDialog()\">\r\n                <mat-icon>create</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Cuadro de valores de Edificación</ng-template>\r\n\r\n        <div class=\"mt-5\">\r\n            <h4>Seleccione Periodo</h4>\r\n            <mat-form-field>\r\n                <mat-label>Periodo</mat-label>\r\n                <mat-select [(ngModel)]=\"seleccionado\">\r\n                    <mat-option *ngFor=\"let periodo of periodos\" [value]=\"periodo.id\">\r\n                        {{ periodo.anio }}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" class=\"mx-3\" (click)=\"cargarValores(seleccionado)\">Cargar\r\n                formulario</button>\r\n        </div>\r\n        <div class=\"table-responsive w-100\" *ngIf=\"valoresUnitarios\">\r\n            <table class=\"table table-bordered table-hover table-sm\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\" colspan=\"8\">VALORES POR PARTIDAS EN SOLES POR METRO CUADRADO DE AREA\r\n                            TECHADA</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\"></td>\r\n                        <th class=\"text-center\" colspan=\"2\">ESTRUCTURAS</th>\r\n                        <th class=\"text-center\" colspan=\"4\">ACABADOS</th>\r\n                        <th class=\"text-center\" rowspan=\"2\">INSTALACIONES ELÉCTRICAS Y SANITARIAS</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th class=\"text-center\">MUROS Y COLUMNAS</th>\r\n                        <th class=\"text-center\">TECHOS</th>\r\n                        <th class=\"text-center\">PISOS</th>\r\n                        <th class=\"text-center\">PUERTAS Y VENTANAS</th>\r\n                        <th class=\"text-center\">REVESTIMIENTOS</th>\r\n                        <th class=\"text-center\">BAÑOS</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"unitariosEdificacion\">\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[0].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[0].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[1].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[2].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[3].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[4].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[5].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[6].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[0].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[1].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[2].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[3].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[4].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[5].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[6].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[7].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[7].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[8].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[9].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[10].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[11].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[12].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[13].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[7].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[8].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[9].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[10].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[11].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[12].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[13].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[14].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[14].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[15].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[16].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[17].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[18].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[19].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[20].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[14].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[15].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[16].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[17].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[18].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[19].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[20].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[21].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[21].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[22].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[23].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[24].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[25].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[26].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[27].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[21].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[22].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[23].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[24].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[25].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[26].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[27].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[28].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[28].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[29].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[30].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[31].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[32].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[33].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[34].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[28].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[29].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[30].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[31].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[32].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[33].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[34].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[35].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[35].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[36].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[37].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[38].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[39].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[40].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[41].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[35].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[36].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[37].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[38].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[39].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[40].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[41].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[42].etiqueta}}</td>\r\n                        <td>{{unitariosEdificacion[42].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[43].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[44].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[45].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[46].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[47].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[48].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[42].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[43].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[44].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[45].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[46].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[47].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[48].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[49].etiqueta}}</td>\r\n                        <td></td>\r\n                        <td>{{unitariosEdificacion[49].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[50].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[51].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[52].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[53].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[54].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[49].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[50].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[51].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[52].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[53].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[54].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td rowspan=\"2\">{{unitariosEdificacion[55].etiqueta}}</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>{{unitariosEdificacion[55].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[56].descripcion}}</td>\r\n                        <td>{{unitariosEdificacion[57].descripcion}}</td>\r\n                        <td></td>\r\n                        <td>{{unitariosEdificacion[58].descripcion}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[55].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[56].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[57].valor\" type=\"number\" step=\"0.1\"></td>\r\n                        <td></td>\r\n                        <td><input [(ngModel)]=\"valoresUnitarios[58].valor\" type=\"number\" step=\"0.1\"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <button matRipple *ngIf=\"valoresUnitarios\" (click)=\"grabar()\" class=\"btn btn-lg btn-outline-success my-3 mat-elevation-z8\">\r\n            Guardar Datos\r\n        </button>\r\n\r\n        <div class=\"my-4 float-right ml-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Registro del Aranceles</ng-template>\r\n\r\n        <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n            <mat-grid-tile>\r\n                <div routerLink=\"/mantenimiento/cpu\" class=\"w-75 h-75 d-flex align-items-center bg-primary text-white\"\r\n                    [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\" matRipple\r\n                    (mouseover)=\"isActive = !isActive\" (mouseout)=\"isActive = !isActive\">\r\n                    <h5 class=\"mx-auto\">Centro Poblado Urbano</h5>\r\n                </div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <div routerLink=\"/mantenimiento/rustico\" matRipple\r\n                    class=\"w-75 h-75 d-flex align-items-center bg-success text-white\"\r\n                    [class.mat-elevation-z2]=\"!isActive1\" [class.mat-elevation-z8]=\"isActive1\"\r\n                    (mouseover)=\"isActive1 = !isActive1\" (mouseout)=\"isActive1 = !isActive1\">\r\n                    <h5 class=\"mx-auto\">Rustico</h5>\r\n                </div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <div routerLink=\"/mantenimiento/urbano\" class=\"w-75 h-75 d-flex align-items-center bg-info text-white\"\r\n                    [class.mat-elevation-z2]=\"!isActive2\" [class.mat-elevation-z8]=\"isActive2\" matRipple\r\n                    (mouseover)=\"isActive2 = !isActive2\" (mouseout)=\"isActive2 = !isActive2\">\r\n                    <h5 class=\"mx-auto\">Urbano</h5>\r\n                </div>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n\r\n        <div class=\"my-4 float-right ml-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n</mat-horizontal-stepper>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/rustico/rustico.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMantenimientoRusticoRusticoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mt-5\">\r\n    <h4>Seleccione Periodo</h4>\r\n    <mat-form-field>\r\n        <mat-label>Periodo</mat-label>\r\n        <mat-select [(ngModel)]=\"seleccionado\">\r\n            <mat-option *ngFor=\"let periodo of periodos\" [value]=\"periodo.id\">\r\n                {{ periodo.anio }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" class=\"mx-3\" (click)=\"elegir(seleccionado)\">Cargar formulario</button>\r\n\r\n    <div class=\"mat-elevation-z8 table-responsive w-100\">\r\n        <table class=\"table table-bordered table-hover table-sm\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\" class=\"text-center border-secondary align-middle\" colspan=\"2\" rowspan=\"2\">GRUPO DE\r\n                        TIERRAS\r\n                    </th>\r\n                    <th colspan=\"3\" class=\"text-center border-secondary\">\r\n                        VALORES POR CATEGORIA EN SOLES POR HECTAREA\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th *ngFor=\"let calidad of calidades\" class=\"text-center border-secondary\">\r\n                        {{ calidad.nivel }}\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"valoresTerreno\">\r\n                <ng-container *ngFor=\"let tierra of tierras; index as i\">\r\n                    <tr *ngFor=\"let altitud of altitudes; index as j\">\r\n                        <ng-container *ngIf=\"i<3; else eriazo\">\r\n                            <th *ngIf=\"j == 0\" class=\"align-middle border-secondary\" style=\"max-width: 35px;\" rowspan=\"4\">\r\n                                <div class=\"vertical\">\r\n                                    {{ tierra.descripcion }}\r\n                                </div>\r\n                            </th>\r\n                        </ng-container>\r\n                        <ng-template #eriazo>\r\n                            <th *ngIf=\"j == 0\" class=\"align-middle border-secondary\" colspan=\"2\">\r\n                                <div [class.text-center] = \"true\">\r\n                                    {{ tierra.descripcion }}\r\n                                </div>\r\n                            </th>\r\n                        </ng-template>\r\n\r\n                        <ng-container *ngIf=\"tierra.id != 3 || altitud.id != 1\">\r\n                            <ng-container *ngIf=\"tierra.id == 3; else segundo\">\r\n                                <td class=\"text-right border-secondary\" style=\"min-width: 185px;\">\r\n                                    {{ altitud.intervalo }}\r\n                                </td>\r\n                                <td class=\"p-0 text-right align-middle bg-white\">\r\n                                    <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                        step=\"0.01\" [(ngModel)]=\"valoresTerreno[0 + (3*(j-1)) + (12*i)].valor\">\r\n                                </td>\r\n                                <td class=\"p-0 text-right align-middle bg-white\">\r\n                                    <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                        step=\"0.01\" [(ngModel)]=\"valoresTerreno[1 + (3*(j-1)) + (12*i)].valor\">\r\n                                </td>\r\n                                <td class=\"p-0 text-right align-middle bg-white\">\r\n                                    <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                        step=\"0.01\" [(ngModel)]=\"valoresTerreno[2 + (3*(j-1)) + (12*i)].valor\">\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-template #segundo>\r\n                                <ng-container *ngIf=\"tierra.id == 4; else normal\">\r\n                                    <ng-container *ngIf=\"j == 0\">\r\n                                        <td class=\"p-0 text-right align-middle bg-white\" colspan=\"3\">\r\n                                            <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                                step=\"0.01\" [(ngModel)]=\"valoresTerreno[33].valor\">\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <ng-template #normal>\r\n                                    <td class=\"text-right border-secondary\" style=\"min-width: 185px;\">\r\n                                        {{ altitud.intervalo }}\r\n                                    </td>\r\n                                    <td class=\"p-0 text-right align-middle bg-white\">\r\n                                        <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                            step=\"0.01\" [(ngModel)]=\"valoresTerreno[0 + (3*j) + (12*i)].valor\">\r\n                                    </td>\r\n                                    <td class=\"p-0 text-right align-middle bg-white\">\r\n                                        <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                            step=\"0.01\" [(ngModel)]=\"valoresTerreno[1 + (3*j) + (12*i)].valor\">\r\n                                    </td>\r\n                                    <td class=\"p-0 text-right align-middle bg-white\">\r\n                                        <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\"\r\n                                            step=\"0.01\" [(ngModel)]=\"valoresTerreno[2 + (3*j) + (12*i)].valor\">\r\n                                    </td>\r\n                                </ng-template>\r\n                            </ng-template>\r\n                        </ng-container>\r\n                    </tr>\r\n                </ng-container>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <button matRipple *ngIf=\"valoresTerreno\" (click)=\"guardar()\"\r\n        class=\"btn btn-lg btn-outline-success my-3 mat-elevation-z8\"> Guardar Datos\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/urbano/urbano.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMantenimientoUrbanoUrbanoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <google-map [center] = \"position\"\r\n        (mapClick)=\"setMarker($event)\" [zoom] = \"16\">\r\n    <map-marker\r\n    [position]=\"markerPosition\"\r\n    [options]=\"markerOptions\"\r\n    [label] = \"label\"\r\n    [title] = \"title\">\r\n    </map-marker>\r\n</google-map> -->\r\n\r\n<div class=\"mt-5\">\r\n    <h4>Seleccione Periodo</h4>\r\n    <mat-form-field>\r\n        <mat-label>Periodo</mat-label>\r\n        <mat-select [(ngModel)]=\"seleccionado\">\r\n            <mat-option *ngFor=\"let periodo of periodos\" [value]=\"periodo.id\">\r\n                {{ periodo.anio }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" class=\"mx-3\" (click)=\"elegir(seleccionado)\">Cargar formulario</button>\r\n\r\n    <div class=\"mat-elevation-z8 table-responsive w-100\">\r\n        <table class=\"table table-bordered table-hover table-sm\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center border-secondary\">\r\n                        VIA\r\n                    </th>\r\n                    <th class=\"text-center border-secondary\">\r\n                        N° CUADRA\r\n                    </th>\r\n                    <th class=\"text-center border-secondary\">\r\n                        ARANCEL (S/.)\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"valores\">\r\n                <tr *ngFor=\"let valor of valores; index as j\">\r\n                    <td class=\"p-0 text-center align-middle bg-white\">\r\n                        {{valor.via.nombreVia}}\r\n                    </td>\r\n                    <td class=\"p-0 text-center align-middle bg-white\">\r\n                        {{valor.via.cuadra}}\r\n                    </td>\r\n                    <td class=\"p-0 text-right align-middle bg-white\">\r\n                        <input matInput placeholder=\"50.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.01\"\r\n                            [(ngModel)]=\"valor.valor\">\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <button matRipple *ngIf=\"valores\" (click)=\"guardar()\"\r\n        class=\"btn btn-lg btn-outline-success my-3 mat-elevation-z8\"> Guardar Datos\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago/pago-dialog/pago-dialog.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPagoPagoDialogPagoDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n        <mat-card-header>\r\n            <mat-card-title style=\"color: #666;\">Registro de ingresos</mat-card-title>\r\n            <mat-card-subtitle style=\"color: #666;\">Seleccione el tipo de documento del contribuyente\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-divider>\r\n        </mat-divider>\r\n        <mat-card-content class=\"p-4\">\r\n            <div class=\"form-group\">\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-label>Tipo de documento</mat-label>\r\n                    <mat-select [(ngModel)]=\"tipoSelected\" [disabled]=\"!enabled\">\r\n                        <mat-option *ngFor=\"let tipo of tipoDocumentos\" [value]=\"tipo\">\r\n                            {{ tipo.documento }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <ng-container *ngIf=\"tipoSelected\">\r\n                    <mat-form-field class=\"col-md-2\">\r\n                        <mat-label>{{tipoSelected.documento}}</mat-label>\r\n                        <input matInput type=\"text\" placeholder=\"{{tipoSelected.ejemplo}}\"\r\n                            [(ngModel)]=\"contribuyente.documento\"\r\n                            (blur)=\"findConstribuyente(tipoSelected.documento,contribuyente.documento)\"\r\n                            [maxlength]=\"tipoSelected.length\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-md-7\">\r\n                        <mat-label>{{tipoSelected.meta.nombre}}</mat-label>\r\n                        <input matInput type=\"text\" placeholder=\"{{tipoSelected.meta.placeholder}}\"\r\n                            [(ngModel)]=\"contribuyente.nombre\">\r\n                    </mat-form-field>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"tipoSelected && tipoSelected.documento == 'RUC'\">\r\n                <mat-card-header>\r\n                    <mat-card-subtitle style=\"color: #666;\">Representante legal</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-label>Tipo de documento</mat-label>\r\n                    <mat-select [(ngModel)]=\"tipoSelectedRepresentante\" [compareWith]=\"compare\">\r\n                        <mat-option *ngFor=\"let tipo of tipoDocumentosRepresentante\" [value]=\"tipo\">\r\n                            {{ tipo.documento }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <ng-container *ngIf=\"tipoSelectedRepresentante\">\r\n                    <mat-form-field class=\"col-md-3\">\r\n                        <mat-label>{{tipoSelectedRepresentante.documento}}</mat-label>\r\n                        <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.ejemplo}}\"\r\n                            (blur)=\"findRepresentante(tipoSelectedRepresentante.documento,contribuyente.representante.documento)\"\r\n                            [(ngModel)]=\"contribuyente.representante.documento\"\r\n                            [maxlength]=\"tipoSelectedRepresentante.length\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-md-6\">\r\n                        <mat-label>{{tipoSelectedRepresentante.meta.nombre}}</mat-label>\r\n                        <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.meta.placeholder}}\"\r\n                            [(ngModel)]=\"contribuyente.representante.nombres\">\r\n                    </mat-form-field>\r\n                </ng-container>\r\n            </div>\r\n            <mat-tab-group>\r\n                <mat-tab label=\"Pago de Servicios\">\r\n                    <table class=\"table table-bordered table-sm\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"text-center border-secondary align-middle\">Item</th>\r\n                                <th class=\"text-center border-secondary align-middle\">Concepto</th>\r\n                                <th class=\"text-center border-secondary align-middle\">Precio (S/.)</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let elemento of recibo.ingreso.detalle; let i = index\">\r\n                                <td class=\"p-0 text-center align-middle bg-white\">\r\n                                    {{i+1}}\r\n                                </td>\r\n                                <td class=\"p-0 text-left align-middle bg-white col-md-8\">\r\n                                    <input matInput placeholder=\"Copia simple\" [matAutocomplete]=\"auto\"\r\n                                        [formControl]=\"procedimientosCtrl[i]\" [(ngModel)]=\"elemento.concepto\" required>\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let procedimiento of procedimientosFiltrados[i] | async\"\r\n                                            [value]=\"procedimiento.procedimiento\">\r\n                                            <span>{{procedimiento.procedimiento}}</span>\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </td>\r\n                                <td class=\"p-0 text-right align-middle bg-white col-md-2\">\r\n                                    <input matInput placeholder=\"5.00\" type=\"number\" class=\"pr-1 text-right\" step=\"0.10\"\r\n                                        [(ngModel)]=\"elemento.precio\" [formControl]=\"preciosCtrl[i]\"\r\n                                        (focus)=\"validarPrecio(elemento)\">\r\n                                </td>\r\n                                <td class=\"col-md-1\">\r\n                                    <button mat-icon-button (click)=\"remove(elemento)\" color=\"warn\">\r\n                                        <mat-icon>highlight_off</mat-icon>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"2\">TOTAL</td>\r\n                                <td class=\"p-0 text-right align-right bg-white\">S/.{{total.toFixed(2)}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"mb-1 float-left ml-1\">\r\n                        <button mat-fab (click)=\"agregar()\" class=\"bg-primary\" matTooltip=\"Agregar servicio\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Impuesto Predial\" isActive=\"true\">\r\n                    <mat-table [dataSource]=\"dataSource\" matSort>\r\n                        <ng-container matColumnDef=\"select\">\r\n                            <th mat-header-cell *matHeaderCellDef>\r\n                                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                                    [aria-label]=\"checkboxLabel()\">\r\n                                </mat-checkbox>\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let row\">\r\n                                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"selected($event,row)\"\r\n                                    [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\r\n                                </mat-checkbox>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> N° </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.impuesto.id}} </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"periodo\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Periodo </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.periodo.anio}} </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"anual\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Anual </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> S/.{{row.impuesto.impuestoAnual?.toFixed(2)}} </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"trimestral\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Trimestral </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> S/.{{row.impuesto.cuotaTrimestral?.toFixed(2)}}</mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"diferencia\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> A cuenta </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\">\r\n                                S/.{{row.impuesto.diferencia.toFixed(2)}}\r\n                            </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"pagado\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Pagado </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\">\r\n                                S/.{{row.impuesto.montoPagado.toFixed(2)}}\r\n                            </mat-cell>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"estado\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\">\r\n                                <mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\r\n                                    <mat-chip selected [color]=\"row.impuesto.printable ? 'primary' : 'warn'\">\r\n                                        {{row.estado}}\r\n                                    </mat-chip>\r\n                                </mat-chip-list>\r\n                            </mat-cell>\r\n                        </ng-container>\r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <button matRipple (click)=\"save(tipoSelected, tipoSelectedRepresentante)\"\r\n        class=\"btn btn-lg btn-outline-success my-3 mat-elevation-z8\">\r\n        <mat-icon class=\"align-middle\">price_check</mat-icon>Registrar pago\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago/pago.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPagoPagoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"mat-elevation-z6 mt-4\" style=\"width: 100%;\">\r\n    <mat-card-header>\r\n        <mat-card-title>Pagos</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <!-- <mat-form-field appearance=\"outline\" style=\"width: 700px;\">\r\n        <mat-label>Buscar</mat-label>\r\n        <input #buscart matInput type=\"text\" [(ngModel)]=\"filter\">\r\n        <button mat-icon-button matSuffix (click)=\"buscar(buscart.value)\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-md-3\">\r\n        <mat-label>filtrar por</mat-label>\r\n        <mat-select [(ngModel)]=\"filterBy\">\r\n            <mat-option value=\"personas\">Personas</mat-option>\r\n            <mat-option value=\"empresas\">Empresas</mat-option>\r\n            <mat-option value=\"direccion\">Direcci&oacute;n del predio</mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n    <mat-card-content>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> N° </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"creacion\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Creado el </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.createdAt}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"total\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Total </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> S/.{{row.total.toFixed(2)}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"estado\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\r\n                        <mat-chip selected [color]=\"row.estado == 'ANULADO' ? 'warn' : 'primary'\">\r\n                            {{row.estado}}\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button color=\"accent\" (click)=\"print(row)\">\r\n                        <mat-icon>print</mat-icon>\r\n                    </button>\r\n                    <!-- <button mat-icon-button color=\"primary\" (click)=\"openDialog(row)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button> -->\r\n                    <button mat-icon-button color=\"warn\" (click)=\"eliminar(row)\">\r\n                        <mat-icon>remove_circle</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=mostrarMas($event)></mat-paginator>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-fab color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>post_add</mat-icon>\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPeriodoPeriodoDialogoPeriodoDialogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-1\">\r\n    <mat-form-field class=\"m-1\">\r\n        <input matInput placeholder=\"Año\" type=\"number\" [(ngModel)]=\"periodo.anio\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"m-1\">\r\n        <input matInput placeholder=\"Valor de la UIT\" type=\"number\" [(ngModel)]=\"periodo.uit\" required>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" (click)=\"operar()\" class=\"mx-1\">Aceptar</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"cancelar()\" class=\"mx-1\">Cancelar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periodo/periodo.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPeriodoPeriodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field>\r\n    <mat-label>A&ntilde;o de declaraci&oacute;n</mat-label>\r\n    <mat-select [(ngModel)]=\"seleccionado\" (blur)=\"emisor.emit(seleccionado)\" required>\r\n        <mat-option *ngFor=\"let periodo of periodos\" [value]=\"periodo\">\r\n            {{ periodo.anio }}\r\n        </mat-option>\r\n    </mat-select>\r\n\r\n</mat-form-field>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-cpu/predio-cpu.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPredioPredioCpuPredioCpuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Contribuyentes</ng-template>\r\n        <div class=\"container\">\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title style=\"color: #666;\">Propietarios</mat-card-title>\r\n                    <mat-card-subtitle style=\"color: #666;\">Seleccione el tipo de documento del propietario\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelected\" [disabled]=\"!enabled\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentos\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelected\">\r\n                            <mat-form-field class=\"col-md-2\">\r\n                                <mat-label>{{tipoSelected.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.ejemplo}}\" [(ngModel)]=\"contribuyente.documento\" (blur)=\"findConstribuyente(tipoSelected.documento,contribuyente.documento)\" [maxlength]=\"tipoSelected.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-7\">\r\n                                <mat-label>{{tipoSelected.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.meta.placeholder}}\" [(ngModel)]=\"contribuyente.nombre\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"tipoSelected && tipoSelected.documento == 'RUC'\">\r\n                        <mat-card-header>\r\n                            <mat-card-subtitle style=\"color: #666;\">Representante legal</mat-card-subtitle>\r\n                        </mat-card-header>\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelectedRepresentante\" [compareWith]=\"compare\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentosRepresentante\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelectedRepresentante\">\r\n                            <mat-form-field class=\"col-md-3\">\r\n                                <mat-label>{{tipoSelectedRepresentante.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.ejemplo}}\" (blur)=\"findRepresentante(tipoSelectedRepresentante.documento,contribuyente.representante.documento)\" [(ngModel)]=\"contribuyente.representante.documento\" [maxlength]=\"tipoSelectedRepresentante.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-6\">\r\n                                <mat-label>{{tipoSelectedRepresentante.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.meta.placeholder}}\" [(ngModel)]=\"contribuyente.representante.nombres\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"my-4\">\r\n                        <button mat-fab color=\"primary\" matTooltip=\"Agregar propietario\" matTooltipPosition=\"left\" (click)=\"agregar(tipoSelected, tipoSelectedRepresentante)\" [disabled]=\"!tipoSelected\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-footer class=\"p-4\">\r\n                    <mat-chip-list #chipList class=\"mat-chip-list-stacked\" [disabled]=\"!enabled\">\r\n                        <mat-chip *ngFor=\"let propietario of propietariosDetail\" color=\"primary\" [selectable]=\"selectable\" (removed)=\"removePropietario(propietario)\" class=\"col-md-10\">\r\n                            {{ propietario.persona == null ? propietario.empresa.razonSocial : propietario.persona.nombres }}\r\n                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                </mat-card-footer>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Condici&oacute;n</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.condicion\" required>\r\n                                <mat-option value=\"Propietario único\">Propietario único</mat-option>\r\n                                <mat-option value=\"Sociedad conyugal\">Sociedad conyugal</mat-option>\r\n                                <mat-option value=\"Poseedor\">Poseedor</mat-option>\r\n                                <mat-option value=\"Sucesión indivisa\">Sucesión indivisa</mat-option>\r\n                                <mat-option value=\"Condominio\">Condominio</mat-option>\r\n                                <mat-option value=\"Otros\">Otros</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Condicion del Contribuyente</mat-label>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.beneficioTributario\">\r\n                                <mat-option></mat-option>\r\n                                <mat-option value=\"Exoneración\">Exoneración</mat-option>\r\n                                <mat-option value=\"Inafectación\">Inafectación</mat-option>\r\n                                <mat-option value=\"Deducción\">Deducción</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Beneficio tributario</mat-label>\r\n                        </mat-form-field>\r\n                        <div class=\"row\" *ngIf=\"predio.beneficioTributario == 'Exoner'\">\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Indique Resolución</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"Resolución N° 001\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Desde</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickerde\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickerde\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickerde></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Hasta</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickera\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickera\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickera></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Domicilio Fiscal</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <mat-form-field class=\"col-md-10\">\r\n                        <mat-label>Direcci&oacute;n</mat-label>\r\n                        <input matInput type=\"text\" placeholder='Ejemplo: Carretera Pna. Norte Km 27, Condominio \"Ciudad Verde\"' [(ngModel)]=\"predio.domicilioFiscal\" required>\r\n                    </mat-form-field>\r\n                    <!-- <mat-form-field class=\"col-md-2\">\r\n                        <mat-label>Piso/Departamento</mat-label>\r\n                        <input matInput type=\"text\" placeholder='P-103'>\r\n                    </mat-form-field> -->\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <div class=\"my-4 float-right ml-1\">\r\n                <button mat-fab class=\"bg-success\" matStepperNext>\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Informaci&oacute;n del Predio</ng-template>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <app-periodo class=\"col-md-12\" (emisor)=\"recibirPeriodo($event)\" [periodo]=\"periodo\"></app-periodo>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"enabled\">\r\n                <mat-form-field class=\"col-md-10\">\r\n                    <mat-label>Ubicaci&oacute;n del Predio</mat-label>\r\n                    <input matInput type=\"text\" placeholder='Ejemplo: Carretera Pna. Norte Km 27, Condominio \"Ciudad Verde\"' [(ngModel)]=\"predio.ubicacion.descripcion\" required>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-2\">\r\n                    <mat-label>N&uacute;mero</mat-label>\r\n                    <input matInput type=\"text\" placeholder='105' [(ngModel)]=\"predio.ubicacion.numero\" pattern=\"(S/N|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9])\" required>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.estado\" required>\r\n                        <mat-option value=\"TERRENO SIN CONSTRUIR\">TERRENO SIN CONSTRUIR</mat-option>\r\n                        <mat-option value=\"EDIFICACIÓN TERMINADA\">EDIFICACIÓN TERMINADA </mat-option>\r\n                        <mat-option value=\"EN CONSTRUCCIÓN\">EN CONSTRUCCI&Oacute;N</mat-option>\r\n                        <mat-option value=\"EN RUINAS\">EN RUINAS</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Estado</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.tipo\" required>\r\n                        <mat-option value=\"PREDIO INDEPENDIENTE\">PREDIO INDEPENDIENTE</mat-option>\r\n                        <mat-option value=\"DEPARTAMENTO\">DEPARTAMENTO</mat-option>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CERCO PERIMETRICO\">CERCO PERIMETRICO</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Tipo</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.uso\" required>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CASA HABITACI&Oacute;N\">CASA HABITACI&Oacute;N</mat-option>\r\n                        <mat-option value=\"INDUSTRIA\">INDUSTRIA</mat-option>\r\n                        <mat-option value=\"SERVICIO\">SERVICIO</mat-option>\r\n                        <mat-option value=\"COMERCIO\">COMERCIO</mat-option>\r\n                        <mat-option value=\"AGRICOLA\">AGRICOLA</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Uso</mat-label>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-select [(ngModel)]=\"terrenoCpu.calzada\" required>\r\n                        <mat-option *ngFor=\"let calzada of calzadas\" [value]=\"calzada\">\r\n                            {{calzada.descripcion}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Tipo de Calzada</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-select [(ngModel)]=\"terrenoCpu.medida\" required>\r\n                        <mat-option *ngFor=\"let medida of medidas\" [value]=\"medida\">\r\n                            {{medida.intervalo}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Ancho de vias</mat-label>\r\n                </mat-form-field>\r\n                <div class=\"col-md-4\">\r\n                    <label class=\"w-100\">Servicios Basicos: </label>\r\n                    <mat-checkbox class=\"mx-2\" [(ngModel)]=\"conAgua\">Con Agua</mat-checkbox>\r\n                    <mat-checkbox class=\"mx-2\" [(ngModel)]=\"conDesague\">Con Desague</mat-checkbox>\r\n                    <mat-checkbox class=\"mx-2\" [(ngModel)]=\"conLuz\">Con Luz</mat-checkbox>\r\n                </div>\r\n                <mat-form-field class=\"col-md-2\" required>\r\n                    <mat-label>Area (M2)</mat-label>\r\n                    <input matInput type=\"number\" placeholder='120' [(ngModel)]=\"terrenoCpu.area\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div class=\"my-4 float-right ml-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Calculo de Autoavaluo</ng-template>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-construccion [construcciones]=\"predio.construcciones\" [periodo]=\"periodo\" (construccionesChange)=\"predio.construcciones = $event\">\r\n            </app-construccion>\r\n        </div>\r\n        <hr>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-instalacion [instalacionesPredio]=\"predio.instalacionesPredio\" (instalacionesChange)=\"predio.instalacionesPredio = $event\">\r\n            </app-instalacion>\r\n        </div>\r\n        <button matRipple (click)=\"save()\" class=\"btn btn-lg btn-outline-primary my-3 mat-elevation-z8\"> Registrar\r\n            Predio\r\n        </button>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n</mat-horizontal-stepper>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-rustico/predio-rustico.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPredioPredioRusticoPredioRusticoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Contribuyentes</ng-template>\r\n        <div class=\"container\">\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title style=\"color: #666;\">Propietarios</mat-card-title>\r\n                    <mat-card-subtitle style=\"color: #666;\">Seleccione el tipo de documento del propietario\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelected\" [disabled]=\"!enabled\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentos\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelected\">\r\n                            <mat-form-field class=\"col-md-2\">\r\n                                <mat-label>{{tipoSelected.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.ejemplo}}\" [(ngModel)]=\"contribuyente.documento\" (blur)=\"findConstribuyente(tipoSelected.documento,contribuyente.documento)\" [maxlength]=\"tipoSelected.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-7\">\r\n                                <mat-label>{{tipoSelected.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.meta.placeholder}}\" [(ngModel)]=\"contribuyente.nombre\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"tipoSelected && tipoSelected.documento == 'RUC'\">\r\n                        <mat-card-header>\r\n                            <mat-card-subtitle style=\"color: #666;\">Representante legal</mat-card-subtitle>\r\n                        </mat-card-header>\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelectedRepresentante\" [compareWith]=\"compare\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentosRepresentante\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelectedRepresentante\">\r\n                            <mat-form-field class=\"col-md-3\">\r\n                                <mat-label>{{tipoSelectedRepresentante.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.ejemplo}}\" (blur)=\"findRepresentante(tipoSelectedRepresentante.documento,contribuyente.representante.documento)\" [(ngModel)]=\"contribuyente.representante.documento\" [maxlength]=\"tipoSelectedRepresentante.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-6\">\r\n                                <mat-label>{{tipoSelectedRepresentante.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.meta.placeholder}}\" [(ngModel)]=\"contribuyente.representante.nombres\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"my-4\">\r\n                        <button mat-fab color=\"primary\" matTooltip=\"Agregar propietario\" matTooltipPosition=\"left\" (click)=\"agregar(tipoSelected, tipoSelectedRepresentante)\" [disabled]=\"!tipoSelected\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-footer class=\"p-4\">\r\n                    <mat-chip-list #chipList class=\"mat-chip-list-stacked\" [disabled]=\"!enabled\">\r\n                        <mat-chip *ngFor=\"let propietario of propietariosDetail\" color=\"primary\" [selectable]=\"selectable\" (removed)=\"removePropietario(propietario)\" class=\"col-md-10\">\r\n                            {{ propietario.persona == null ? propietario.empresa.razonSocial : propietario.persona.nombres }}\r\n                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                </mat-card-footer>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Condici&oacute;n</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.condicion\" required>\r\n                                <mat-option value=\"Propietario único\">Propietario único</mat-option>\r\n                                <mat-option value=\"Sociedad conyugal\">Sociedad conyugal</mat-option>\r\n                                <mat-option value=\"Poseedor\">Poseedor</mat-option>\r\n                                <mat-option value=\"Sucesión indivisa\">Sucesión indivisa</mat-option>\r\n                                <mat-option value=\"Condominio\">Condominio</mat-option>\r\n                                <mat-option value=\"Otros\">Otros</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Condicion del Contribuyente</mat-label>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.beneficioTributario\">\r\n                                <mat-option></mat-option>\r\n                                <mat-option value=\"Exoneración\">Exoneración</mat-option>\r\n                                <mat-option value=\"Inafectación\">Inafectación</mat-option>\r\n                                <mat-option value=\"Deducción\">Deducción</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Beneficio tributario</mat-label>\r\n                        </mat-form-field>\r\n                        <div class=\"row\" *ngIf=\"predio.beneficioTributario == 'Exoner'\">\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Indique Resolución</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"Resolución N° 001\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Desde</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickerde\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickerde\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickerde></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Hasta</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickera\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickera\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickera></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Domicilio Fiscal</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <mat-form-field class=\"col-md-10\">\r\n                        <mat-label>Direcci&oacute;n</mat-label>\r\n                        <input matInput type=\"text\" placeholder='Ejemplo: Carretera Pna. Norte Km 27, Condominio \"Ciudad Verde\"' [(ngModel)]=\"predio.domicilioFiscal\" required>\r\n                    </mat-form-field>\r\n                    <!-- <mat-form-field class=\"col-md-2\">\r\n                        <mat-label>Piso/Departamento</mat-label>\r\n                        <input matInput type=\"text\" placeholder='P-103'>\r\n                    </mat-form-field> -->\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <div class=\"my-4 float-right ml-1\">\r\n                <button mat-fab class=\"bg-success\" matStepperNext>\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Informaci&oacute;n del Predio</ng-template>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <app-periodo class=\"col-md-12\" (emisor)=\"recibirPeriodo($event)\" [periodo]=\"periodo\"></app-periodo>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"enabled\">\r\n                <mat-form-field class=\"col-md-10\">\r\n                    <mat-label>Ubicaci&oacute;n del Predio</mat-label>\r\n                    <input matInput type=\"text\" placeholder='Ejemplo: Carretera Pna. Norte Km 27, Condominio \"Ciudad Verde\"' [(ngModel)]=\"predio.ubicacion.descripcion\" required>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-2\">\r\n                    <mat-label>N&uacute;mero</mat-label>\r\n                    <input matInput type=\"text\" placeholder='105' [(ngModel)]=\"predio.ubicacion.numero\" pattern=\"(S/N|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9])\" required>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.estado\" required>\r\n                        <mat-option value=\"TERRENO SIN CONSTRUIR\">TERRENO SIN CONSTRUIR</mat-option>\r\n                        <mat-option value=\"EDIFICACIÓN TERMINADA\">EDIFICACIÓN TERMINADA </mat-option>\r\n                        <mat-option value=\"EN CONSTRUCCIÓN\">EN CONSTRUCCI&Oacute;N</mat-option>\r\n                        <mat-option value=\"EN RUINAS\">EN RUINAS</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Estado</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.tipo\" required>\r\n                        <mat-option value=\"PREDIO INDEPENDIENTE\">PREDIO INDEPENDIENTE</mat-option>\r\n                        <mat-option value=\"DEPARTAMENTO\">DEPARTAMENTO</mat-option>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CERCO PERIMETRICO\">CERCO PERIMETRICO</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Tipo</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.uso\" required>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CASA HABITACI&Oacute;N\">CASA HABITACI&Oacute;N</mat-option>\r\n                        <mat-option value=\"INDUSTRIA\">INDUSTRIA</mat-option>\r\n                        <mat-option value=\"SERVICIO\">SERVICIO</mat-option>\r\n                        <mat-option value=\"COMERCIO\">COMERCIO</mat-option>\r\n                        <mat-option value=\"AGRICOLA\">AGRICOLA</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Uso</mat-label>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-select [(ngModel)]=\"terrenoRustico.grupoTierra\" required>\r\n                        <mat-option *ngFor=\"let grupoTierra of grupoTierras\" [value]=\"grupoTierra\">\r\n                            {{grupoTierra.descripcion}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Aptitud de Tierra</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-select [(ngModel)]=\"terrenoRustico.calidad\" required>\r\n                        <mat-option *ngFor=\"let calidad of calidades\" [value]=\"calidad\">\r\n                            {{calidad.nivel}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Calidad</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-3\">\r\n                    <mat-select [(ngModel)]=\"terrenoRustico.altitud\" required>\r\n                        <mat-option *ngFor=\"let altitud of altitudes\" [value]=\"altitud\">\r\n                            {{altitud.intervalo}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Altura</mat-label>\r\n                </mat-form-field>\r\n                <div class=\"col-md-4\">\r\n                    <!-- <label class=\"w-100\">Riego con lluvia: </label> -->\r\n                    <mat-checkbox class=\"mx-2\" [(ngModel)]=\"terrenoRustico.riegoLluvia\">Riego con lluvia</mat-checkbox>\r\n                </div>\r\n                <mat-form-field class=\"col-md-2\" required>\r\n                    <mat-label>Area (HA)</mat-label>\r\n                    <input matInput type=\"number\" placeholder='120' [(ngModel)]=\"terrenoRustico.area\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div class=\"my-4 float-right ml-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Calculo de Autoavaluo</ng-template>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-construccion [construcciones]=\"predio.construcciones\" [periodo]=\"periodo\" (construccionesChange)=\"predio.construcciones = $event\">\r\n            </app-construccion>\r\n        </div>\r\n        <hr>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-instalacion [instalacionesPredio]=\"predio.instalacionesPredio\" (instalacionesChange)=\"predio.instalacionesPredio = $event\">\r\n            </app-instalacion>\r\n        </div>\r\n        <button matRipple (click)=\"save()\" class=\"btn btn-lg btn-outline-primary my-3 mat-elevation-z8\"> Registrar\r\n            Predio\r\n        </button>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n</mat-horizontal-stepper>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-urbano/predio-urbano.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPredioPredioUrbanoPredioUrbanoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Contribuyentes</ng-template>\r\n        <div class=\"container\">\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title style=\"color: #666;\">Propietarios</mat-card-title>\r\n                    <mat-card-subtitle style=\"color: #666;\">Seleccione el tipo de documento del propietario\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelected\" [disabled]=\"!enabled\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentos\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelected\">\r\n                            <mat-form-field class=\"col-md-2\">\r\n                                <mat-label>{{tipoSelected.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.ejemplo}}\" [(ngModel)]=\"contribuyente.documento\" (blur)=\"findConstribuyente(tipoSelected.documento,contribuyente.documento)\" [maxlength]=\"tipoSelected.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-7\">\r\n                                <mat-label>{{tipoSelected.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelected.meta.placeholder}}\" [(ngModel)]=\"contribuyente.nombre\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"tipoSelected && tipoSelected.documento == 'RUC'\">\r\n                        <mat-card-header>\r\n                            <mat-card-subtitle style=\"color: #666;\">Representante legal</mat-card-subtitle>\r\n                        </mat-card-header>\r\n                        <mat-form-field class=\"col-md-3\">\r\n                            <mat-label>Tipo de documento</mat-label>\r\n                            <mat-select [(ngModel)]=\"tipoSelectedRepresentante\" [compareWith]=\"compare\">\r\n                                <mat-option *ngFor=\"let tipo of tipoDocumentosRepresentante\" [value]=\"tipo\">\r\n                                    {{ tipo.documento }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"tipoSelectedRepresentante\">\r\n                            <mat-form-field class=\"col-md-3\">\r\n                                <mat-label>{{tipoSelectedRepresentante.documento}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.ejemplo}}\" (blur)=\"findRepresentante(tipoSelectedRepresentante.documento,contribuyente.representante.documento)\" [(ngModel)]=\"contribuyente.representante.documento\" [maxlength]=\"tipoSelectedRepresentante.length\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-6\">\r\n                                <mat-label>{{tipoSelectedRepresentante.meta.nombre}}</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"{{tipoSelectedRepresentante.meta.placeholder}}\" [(ngModel)]=\"contribuyente.representante.nombres\">\r\n                            </mat-form-field>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"my-4\">\r\n                        <button mat-fab color=\"primary\" matTooltip=\"Agregar propietario\" matTooltipPosition=\"left\" (click)=\"agregar(tipoSelected, tipoSelectedRepresentante)\" [disabled]=\"!tipoSelected\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </mat-card-content>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-footer class=\"p-4\">\r\n                    <mat-chip-list #chipList class=\"mat-chip-list-stacked\" [disabled]=\"!enabled\">\r\n                        <mat-chip *ngFor=\"let propietario of propietariosDetail\" color=\"primary\" [selectable]=\"selectable\" (removed)=\"removePropietario(propietario)\" class=\"col-md-10\">\r\n                            {{ propietario.persona == null ? propietario.empresa.razonSocial : propietario.persona.nombres }}\r\n                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                </mat-card-footer>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Condici&oacute;n</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.condicion\" required>\r\n                                <mat-option value=\"Propietario único\">Propietario único</mat-option>\r\n                                <mat-option value=\"Sociedad conyugal\">Sociedad conyugal</mat-option>\r\n                                <mat-option value=\"Poseedor\">Poseedor</mat-option>\r\n                                <mat-option value=\"Sucesión indivisa\">Sucesión indivisa</mat-option>\r\n                                <mat-option value=\"Condominio\">Condominio</mat-option>\r\n                                <mat-option value=\"Otros\">Otros</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Condicion del Contribuyente</mat-label>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-md-4\">\r\n                            <mat-select [(value)]=\"predio.beneficioTributario\">\r\n                                <mat-option></mat-option>\r\n                                <mat-option value=\"Exoneración\">Exoneración</mat-option>\r\n                                <mat-option value=\"Inafectación\">Inafectación</mat-option>\r\n                                <mat-option value=\"Deducción\">Deducción</mat-option>\r\n                            </mat-select>\r\n                            <mat-label>Beneficio tributario</mat-label>\r\n                        </mat-form-field>\r\n                        <div class=\"row\" *ngIf=\"predio.beneficioTributario == 'Exoner'\">\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Indique Resolución</mat-label>\r\n                                <input matInput type=\"text\" placeholder=\"Resolución N° 001\">\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Desde</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickerde\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickerde\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickerde></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-md-4\">\r\n                                <mat-label>Hasta</mat-label>\r\n                                <input matInput [matDatepicker]=\"pickera\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"pickera\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #pickera></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z4 col-md-12 mt-2\">\r\n                <mat-card-header>\r\n                    <mat-card-title>Domicilio Fiscal</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-divider>\r\n                </mat-divider>\r\n                <mat-card-content class=\"p-4\">\r\n                    <mat-form-field class=\"col-md-10\">\r\n                        <mat-label>Direcci&oacute;n</mat-label>\r\n                        <input matInput type=\"text\" placeholder='Ejemplo: Carretera Pna. Norte Km 27, Condominio \"Ciudad Verde\"' [(ngModel)]=\"predio.domicilioFiscal\" required>\r\n                    </mat-form-field>\r\n                    <!-- <mat-form-field class=\"col-md-2\">\r\n                        <mat-label>Piso/Departamento</mat-label>\r\n                        <input matInput type=\"text\" placeholder='P-103'>\r\n                    </mat-form-field> -->\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <div class=\"my-4 float-right ml-1\">\r\n                <button mat-fab class=\"bg-success\" matStepperNext>\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Informaci&oacute;n del Predio</ng-template>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <app-periodo class=\"col-md-12\" (emisor)=\"recibirPeriodo($event)\" [periodo]=\"periodo\"></app-periodo>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"enabled\">\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Ubicaci&oacute;n del Predio</mat-label>\r\n                    <input matInput placeholder=\"Ejemplo: Jr. Grau\" [matAutocomplete]=\"auto\" [formControl]=\"viasCtrl\" [(ngModel)]=\"terrenoUrbano.via.nombreVia\" required>\r\n                    <mat-error *ngIf=\"viasCtrl.invalid\">{{viasCtrl.errors?.validatorVia?.value}}</mat-error>\r\n                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let via of filteredVias | async\" [value]=\"via\">\r\n                            <span>{{via}}</span>\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"terrenoUrbano.via\" (focus)=\"updateVias()\" [disabled]=\"viasCtrl.invalid\" required>\r\n                        <mat-option *ngFor=\"let via of viasNew\" [value]=\"via\">Cuadra {{via.cuadra}}</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Cuadra</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-2\">\r\n                    <mat-label>N&uacute;mero</mat-label>\r\n                    <input matInput type=\"text\" placeholder='105' [(ngModel)]=\"predio.ubicacion.numero\" pattern=\"(S/N|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9])\" required [disabled]=\"viasCtrl.invalid\">\r\n                    <mat-error>Ingrese un n&uacute;mero valido</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <google-map [center]=\"position\" (mapClick)=\"setMarker($event)\" [zoom]=\"16\">\r\n                    <map-marker [position]=\"markerPosition\" [options]=\"markerOptions\" [label]=\"label\" [title]=\"title\">\r\n                    </map-marker>\r\n                </google-map>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.estado\" required>\r\n                        <mat-option value=\"TERRENO SIN CONSTRUIR\">TERRENO SIN CONSTRUIR</mat-option>\r\n                        <mat-option value=\"EDIFICACIÓN TERMINADA\">EDIFICACIÓN TERMINADA </mat-option>\r\n                        <mat-option value=\"EN CONSTRUCCIÓN\">EN CONSTRUCCI&Oacute;N</mat-option>\r\n                        <mat-option value=\"EN RUINAS\">EN RUINAS</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Estado</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.tipo\" required>\r\n                        <mat-option value=\"PREDIO INDEPENDIENTE\">PREDIO INDEPENDIENTE</mat-option>\r\n                        <mat-option value=\"DEPARTAMENTO\">DEPARTAMENTO</mat-option>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CERCO PERIMETRICO\">CERCO PERIMETRICO</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Tipo</mat-label>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-4\">\r\n                    <mat-select [(value)]=\"predio.uso\" required>\r\n                        <mat-option value=\"OTROS\">OTROS</mat-option>\r\n                        <mat-option value=\"CASA HABITACI&Oacute;N\">CASA HABITACI&Oacute;N</mat-option>\r\n                        <mat-option value=\"INDUSTRIA\">INDUSTRIA</mat-option>\r\n                        <mat-option value=\"SERVICIO\">SERVICIO</mat-option>\r\n                        <mat-option value=\"COMERCIO\">COMERCIO</mat-option>\r\n                        <mat-option value=\"AGRICOLA\">AGRICOLA</mat-option>\r\n                    </mat-select>\r\n                    <mat-label>Uso</mat-label>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-4\" required>\r\n                    <mat-label>Area (M2)</mat-label>\r\n                    <input matInput type=\"number\" placeholder='120' [(ngModel)]=\"terrenoUrbano.area\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div class=\"my-4 float-right ml-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperNext>\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Calculo de Autoavaluo</ng-template>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-construccion [construcciones]=\"predio.construcciones\" [periodo]=\"periodo\" (construccionesChange)=\"predio.construcciones = $event\">\r\n            </app-construccion>\r\n        </div>\r\n        <hr>\r\n        <div class=\"mat-elevation-z8 table-responsive\">\r\n            <app-instalacion [instalacionesPredio]=\"predio.instalacionesPredio\" (instalacionesChange)=\"predio.instalacionesPredio = $event\">\r\n            </app-instalacion>\r\n        </div>\r\n        <button matRipple (click)=\"save()\" class=\"btn btn-lg btn-outline-primary my-3 mat-elevation-z8\"> Registrar\r\n            Predio\r\n        </button>\r\n        <div class=\"my-4 float-right mr-1\">\r\n            <button mat-fab class=\"bg-success\" matStepperPrevious>\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-step>\r\n</mat-horizontal-stepper>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPredioPredioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"mat-elevation-z6 mt-4\" style=\"width: 100%;\">\r\n    <mat-card-header>\r\n        <mat-card-title>Predios</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-form-field appearance=\"outline\" style=\"width: 700px;\">\r\n        <mat-label>Buscar</mat-label>\r\n        <input #buscart matInput type=\"text\" [(ngModel)]=\"filter\">\r\n        <button mat-icon-button matSuffix (click)=\"buscar(buscart.value)\">\r\n            <!-- [disabled]=\"!buscarEnable\" -->\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-md-3\">\r\n        <mat-label>filtrar por</mat-label>\r\n        <mat-select [(ngModel)]=\"filterBy\">\r\n            <mat-option value=\"personas\">Personas</mat-option>\r\n            <mat-option value=\"empresas\">Empresas</mat-option>\r\n            <mat-option value=\"direccion\">Direcci&oacute;n del predio</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <mat-card-content>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> N° </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"ubicacion\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Direcci&oacute;n </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.ubicacion.descripcion}} {{row.ubicacion.numero}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"tipo\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Anexo </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.tipoPredio}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"autoavaluo\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Autoavaluo </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> S/.{{row.autoavaluo.toFixed(2)}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"periodo\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Periodo </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.periodo.anio}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"estado\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\r\n                        <mat-chip selected [color]=\"row.printable ? 'primary' : 'warn'\">\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"abstract(row)\">\r\n                        <mat-icon>list_alt</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" (click)=\"print(row)\">\r\n                        <mat-icon>print</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" (click)=\"eliminar(row)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"upgradePredio(row)\" matTooltip=\"Extender a otro periodo\">\r\n                        <mat-icon>launch</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [length]=\"cantidad\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=mostrarMas($event)></mat-paginator>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n    <mat-grid-tile>\r\n        <!-- <div routerLink=\"/predio/cpu\" class=\"w-75 h-75 d-flex align-items-center bg-primary text-white\"\r\n            [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\" matRipple\r\n            (mouseover)=\"isActive = !isActive\" (mouseout)=\"isActive = !isActive\">\r\n            <h5 class=\"mx-auto\">Centro Poblado Urbano</h5>\r\n        </div> -->\r\n        <div (click)=\"openDialogCPU()\" class=\"w-75 h-75 d-flex align-items-center bg-primary text-white\" [class.mat-elevation-z2]=\"!isActive\" [class.mat-elevation-z8]=\"isActive\" matRipple (mouseover)=\"isActive = !isActive\" (mouseout)=\"isActive = !isActive\">\r\n            <h5 class=\"mx-auto\">Centro Poblado Urbano</h5>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div (click)=\"openDialogRustico()\" matRipple class=\"w-75 h-75 d-flex align-items-center bg-success text-white\" [class.mat-elevation-z2]=\"!isActive1\" [class.mat-elevation-z8]=\"isActive1\" (mouseover)=\"isActive1 = !isActive1\" (mouseout)=\"isActive1 = !isActive1\">\r\n            <h5 class=\"mx-auto\">Rustico</h5>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div (click)=\"openDialogUrbano()\" class=\"w-75 h-75 d-flex align-items-center bg-info text-white\" [class.mat-elevation-z2]=\"!isActive2\" [class.mat-elevation-z8]=\"isActive2\" matRipple (mouseover)=\"isActive2 = !isActive2\" (mouseout)=\"isActive2 = !isActive2\">\r\n            <h5 class=\"mx-auto\">Urbano</h5>\r\n        </div>\r\n    </mat-grid-tile>\r\n</mat-grid-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesProcedimientoProcedimientoDialogProcedimientoDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-1\">\r\n    <mat-form-field class=\"m-1\">\r\n        <textarea matInput placeholder=\"procedimiento\" [(ngModel)]=\"tasa.procedimiento\" required></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"m-1\">\r\n        <input matInput placeholder=\"tarifa\" type=\"number\" [(ngModel)]=\"tasa.precio\" required>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" (click)=\"operar()\" class=\"mx-1\">Aceptar</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"cancelar()\" class=\"mx-1\">Cancelar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/procedimiento/procedimiento.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesProcedimientoProcedimientoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"mat-elevation-z6 mt-4\" style=\"width: 100%;\">\r\n    <mat-card-header>\r\n        <mat-card-title>Procedimientos</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <!-- <mat-form-field appearance=\"outline\" style=\"width: 700px;\">\r\n        <mat-label>Buscar</mat-label>\r\n        <input #buscart matInput type=\"text\" [(ngModel)]=\"filter\">\r\n        <button mat-icon-button matSuffix (click)=\"buscar(buscart.value)\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-md-3\">\r\n        <mat-label>filtrar por</mat-label>\r\n        <mat-select [(ngModel)]=\"filterBy\">\r\n            <mat-option value=\"personas\">Personas</mat-option>\r\n            <mat-option value=\"empresas\">Empresas</mat-option>\r\n            <mat-option value=\"direccion\">Direcci&oacute;n del predio</mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n    <mat-card-content>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> N° </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"procedimiento\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Procedimiento </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.procedimiento}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"precio\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Tarifa </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> S/.{{row.precio.toFixed(2)}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"openDialog(row)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" (click)=\"eliminar(row)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n            (page)=mostrarMas($event)></mat-paginator>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-fab color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>post_add</mat-icon>\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reportes/caja/caja.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesReportesCajaCajaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-content>\r\n    <mat-form-field>\r\n        <input matInput [matDatepicker]=\"from\" [(ngModel)]=\"desde\" placeholder=\"Desde\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"from\"></mat-datepicker-toggle>\r\n        <mat-datepicker #from></mat-datepicker>\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field>\r\n        <input matInput [matDatepicker]=\"to\" [(ngModel)]=\"hasta\" placeholder=\"Hasta\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"to\"></mat-datepicker-toggle>\r\n        <mat-datepicker #to></mat-datepicker>\r\n    </mat-form-field>\r\n</div>\r\n<mat-divider>\r\n</mat-divider>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button color=\"primary\" class=\"m-2\" (click)=\"generarReporte()\"> Generar Reporte </button>\r\n    <button mat-raised-button color=\"warn\" class=\"m-2\" (click)=\"dialogRef.close()\">cerrar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reportes/reportes.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesReportesReportesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\r\n    <h1 class=\"display-4 text-center\">ESTADISTICAS Y REPORTES</h1>\r\n    <div class=\"row\">\r\n        <canvas id=\"ingresoChart\" class=\"col-md-6\" height=\"150\"></canvas>\r\n        <canvas id=\"ingresoChartBar\" class=\"col-md-6\" height=\"150\"></canvas>\r\n    </div>\r\n    <button matRipple class=\"btn btn-lg btn-outline-primary my-3 mat-elevation-z8 btn-block\" (click)=\"openReportCaja()\">\r\n        <mat-icon>request_quote</mat-icon>\r\n        GENERAR REPORTE DE INGRESOS\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/login/login.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-login mat-elevation-z8\">\r\n    <img src=\"assets/logo.png\"class=\"my-3 mx-5 w-50\">\r\n    <mat-form-field appearance=\"fill\" class=\"input\">\r\n        <mat-label>Usuario</mat-label>\r\n        <input matInput placeholder=\"fulanito\" [(ngModel)]=\"usuario.nombre\">\r\n        <mat-icon matSuffix>person</mat-icon>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"fill\" class=\"input\">\r\n        <mat-label>Password</mat-label>\r\n        <input matInput [type]=\"hide ? 'text' : 'password'\" [(ngModel)]=\"usuario.contrasenia\">\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\">\r\n            <mat-icon>{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    <div style=\"text-align: center; margin-top: 30px;\" class=\"my-3\">\r\n        <button mat-flat-button color=\"primary\" (click)=\"login()\" class=\"btn-login\">Iniciar Sessi&oacute;n</button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/perfil/perfil.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioPerfilPerfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\r\n    <div class=\"title\">\r\n        <h1 class=\"display-3 text-center\">PERFIL</h1>\r\n        <h2 class=\"display-4\">Añade información sobre ti</h2>\r\n    </div>\r\n    <h3>Información básica:</h3><br>\r\n    <mat-form-field appearance=\"fill\" class=\"col-md-7\">\r\n        <mat-label>E-Mail</mat-label>\r\n        <input matInput [value]=\"user?.correo\" readonly=\"true\">\r\n    </mat-form-field><br>\r\n    <mat-form-field appearance=\"fill\" class=\"col-md-7\">\r\n        <mat-label>Nombres</mat-label>\r\n        <input matInput [value]=\"user?.persona.nombres\" readonly=\"true\">\r\n    </mat-form-field><br>\r\n    <mat-form-field appearance=\"fill\" class=\"col-md-5\">\r\n        <mat-label>{{ enabledPassword ? 'Contraseña actual' : 'Contraseña' }}</mat-label>\r\n        <input matInput type=\"password\" [readonly]=\"!enabledPassword\" [(ngModel)]=\"user.contrasenia\">\r\n    </mat-form-field>\r\n    <br *ngIf=\"enabledPassword\">\r\n    <mat-form-field *ngIf=\"enabledPassword\" appearance=\"fill\" class=\"col-md-5\">\r\n        <mat-label>Nueva contraseña</mat-label>\r\n        <input type=\"password\" matInput [(ngModel)]=\"newPass0\" [disabled]=\"!enabledPassword\">\r\n    </mat-form-field>\r\n    <br *ngIf=\"enabledPassword\">\r\n    <mat-form-field *ngIf=\"enabledPassword\" appearance=\"fill\" class=\"col-md-5\">\r\n        <mat-label>Confirmar contraseña</mat-label>\r\n        <input type=\"password\" matInput [(ngModel)]=\"newPass1\" [disabled]=\"!enabledPassword\">\r\n    </mat-form-field>\r\n    <button *ngIf=\"enabledPassword\" mat-flat-button color=\"primary\" (click)=\"grabar()\" class=\"mx-2\">Guardar</button>\r\n    <button mat-flat-button [color]=\"enabledPassword ? 'warn' : 'accent'\" (click)=\"enabledPassword = !enabledPassword\"\r\n        class=\"mx-2\">{{ enabledPassword ? 'Cancelar' : 'Cambiar contraseña' }}</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioUsuarioDialogUsuarioDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <mat-form-field class=\"col-md-3\">\r\n        <mat-label>DNI</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"12345678\" [(ngModel)]=\"usuario.persona.documento\"\r\n            (blur)=\"findConstribuyente('dni',usuario.persona.documento)\" [maxlength]=\"8\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-md-8\">\r\n        <mat-label>Nombres</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"RODRIGUEZ ARTEAGA FRANCISCO ROBERTO\"\r\n            [(ngModel)]=\"usuario.persona.nombres\">\r\n    </mat-form-field>\r\n</div>\r\n<div class=\"row\">\r\n    <mat-form-field class=\"col-md-9\">\r\n        <mat-label>Roles</mat-label>\r\n        <mat-select [(ngModel)]=\"usuario.roles\" multiple>\r\n            <mat-option *ngFor=\"let rol of roles\" [value]=\"rol\">{{rol.rol}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</div>\r\n<div class=\"row\">\r\n    <mat-form-field class=\"col-md-9\">\r\n        <mat-label>Correo</mat-label>\r\n        <input matInput type=\"email\" placeholder=\"fulanito@gmail.com\" [(ngModel)]=\"usuario.correo\">\r\n    </mat-form-field>\r\n</div>\r\n<div class=\"row\">\r\n    <mat-form-field class=\"col-md-9\">\r\n        <mat-label>Usuario</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"GLAPADULA\" [(ngModel)]=\"usuario.nombre\">\r\n    </mat-form-field>\r\n</div>\r\n<div class=\"row\">\r\n    <mat-form-field class=\"col-md-9\">\r\n        <mat-label>Contraseña</mat-label>\r\n        <input matInput type=\"password\" placeholder=\"***********\" color=\"primary\" [(ngModel)]=\"usuario.contrasenia\">\r\n    </mat-form-field>\r\n</div>\r\n<button mat-raised-button color=\"primary\" (click)=\"guardar()\">Guardar</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario/usuario.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesUsuarioUsuarioUsuarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"mat-elevation-z6 mt-4\" style=\"width: 100%;\">\r\n    <mat-card-header>\r\n        <mat-card-title>Usuarios</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-content>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> N° </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"creacion\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Creado el </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.fechaCreacion}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"modificacion\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Modificado el </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.fechaModificacion}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"nombre\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombres </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.persona.nombres}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"usuario\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Usuario </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.nombre}}</mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"openDialog(row)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-fab color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>post_add</mat-icon>\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/_controller/app-date-adapter.ts": function srcApp_controllerAppDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function () {
      return AppDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function () {
      return APP_DATE_FORMATS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppDateAdapter = /*#__PURE__*/function (_angular_material__WE) {
      _inherits(AppDateAdapter, _angular_material__WE);

      var _super = _createSuper(AppDateAdapter);

      function AppDateAdapter() {
        _classCallCheck(this, AppDateAdapter);

        return _super.apply(this, arguments);
      }

      _createClass(AppDateAdapter, [{
        key: "format",
        value: function format(date, displayFormat) {
          if (displayFormat === 'input') {
            var day = date.getDate().toString();
            day = +day < 10 ? '0' + day : day;
            var month = (date.getMonth() + 1).toString();
            month = +month < 10 ? '0' + month : month;
            var year = date.getFullYear();
            return "".concat(day, "/").concat(month, "/").concat(year);
          }

          return date.toDateString();
        }
      }]);

      return AppDateAdapter;
    }(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]);

    var APP_DATE_FORMATS = {
      parse: {
        dateInput: {
          month: 'short',
          year: 'numeric',
          day: 'numeric'
        }
      },
      display: {
        dateInput: 'input',
        monthYearLabel: {
          year: 'numeric',
          month: 'numeric'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/_controller/cookies.service.ts": function srcApp_controllerCookiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiesService", function () {
      return CookiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CookiesService = /*#__PURE__*/function () {
      function CookiesService() {
        _classCallCheck(this, CookiesService);
      }

      _createClass(CookiesService, [{
        key: "getCookie",
        value: function getCookie(name) {
          var cook = 'false';
          var c = document.cookie.split(';');
          c.forEach(function (element) {
            if (element.split('=')[0] == name) {
              cook = element.split('=')[1];
            }
          });
          return cook;
        }
      }]);

      return CookiesService;
    }();

    CookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CookiesService);
    /***/
  },

  /***/
  "./src/app/_controller/reports.service.ts": function srcApp_controllerReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
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


    var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! pdfmake-wrapper */
    "./node_modules/pdfmake-wrapper/index.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var ReportsService = /*#__PURE__*/function () {
      function ReportsService() {
        _classCallCheck(this, ReportsService);

        pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default.a);
      }

      _createClass(ReportsService, [{
        key: "openReporteCaja",
        value: function openReporteCaja(from, to, ingresos) {
          var _this = this;

          var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"]();
          var data = [];
          var tableLayout = {
            hLineWidth: function hLineWidth(i, node) {
              if (i === 0 || i === node.table.body.length) {
                return 0;
              }

              return i === 1 ? 2 : 1;
            },
            vLineWidth: function vLineWidth(i) {
              return 1;
            },
            vLineColor: function vLineColor() {
              return "#fff";
            },
            hLineColor: function hLineColor() {
              return "#fff";
            },
            paddingLeft: function paddingLeft(i) {
              return i === 0 ? 2 : 4;
            },
            paddingRight: function paddingRight(i, node) {
              return i === node.table.widths.length - 1 ? 0 : 4;
            },
            fillColor: function fillColor(i) {
              if (i === 0) {
                return "#ed7d31";
              }

              return i % 2 == 0 ? "#f8cbad" : "#fce4d6";
            }
          };
          pdf.pageMargins([40, 20, 40, 50]);
          pdf.watermark(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("SISMAT").opacity(0.2).end);
          var headers = ["Recibo N°", "Fecha y Hora de Emisión", "Concepto", "Importe", "Monto Afecto"];
          data.push(headers.map(function (header) {
            return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](header).color("#fff").fontSize(9).bold().end;
          }));
          ingresos.forEach(function (ingreso) {
            return data.push([_this.padLeft(ingreso.id.toString(), 11), moment__WEBPACK_IMPORTED_MODULE_4__(ingreso.createdAt).format("DD/MM/YYYY HH:mm:ss"), ingreso.detalle.map(function (detalle) {
              return detalle.concepto;
            }).toString(), "S/.".concat(ingreso.total.toFixed(2)), "S/.".concat(ingreso.montoAfecto.toFixed(2))].map(function (el) {
              return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](el).color("#000").fontSize(9).end;
            }));
          });
          var table = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"](data).widths([70, 100, 178, 68, 68]).layout(tableLayout).color("#555").end;
          pdf.footer(function (currentPage, pageCount) {
            return [{
              text: "p\xE1gina ".concat(currentPage.toString(), " de ").concat(pageCount),
              alignment: 'right',
              margin: [40, 0]
            }];
          }); //Encavezado

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("MUNICIPALIDAD PROVINCIAL DE AIJA").bold().fontSize(15).color("#000").alignment("center").end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("REPORTE DE CAJA").fontSize(16).color("#000").alignment("center").end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(moment__WEBPACK_IMPORTED_MODULE_4__(from).format("DD/MM/YYYY"), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_4__(to).format("DD/MM/YYYY"))).fontSize(14).color("#000").alignment("center").end);
          pdf.add(pdf.ln());
          pdf.add(table);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL:       S/.".concat(ingresos.map(function (ingreso) {
            return ingreso.montoAfecto;
          }).reduce(function (sum, element) {
            return sum + element;
          }, 0).toFixed(2))).bold().fontSize(10).color("#000").alignment("right").end);
          new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Img"]("assets/logo.png").fit([80, 80]).alignment("left").opacity(0.8).absolutePosition(30, 10).build().then(function (img) {
            pdf.header(img);
            pdf.create().open();
          });
        }
      }, {
        key: "openReporteCPU",
        value: function openReporteCPU(autoavaluoCpu) {
          var documentCPU = {
            abbreviation: "PCPU",
            type: "PREDIO CENTRO\nPOBLADO URBANO",
            period: autoavaluoCpu.terrenoCPU.predio.periodo.anio,
            contribuyentes: autoavaluoCpu.propietariosDetail,
            predio: {
              condicion: autoavaluoCpu.terrenoCPU.predio.condicion.toUpperCase(),
              estado: autoavaluoCpu.terrenoCPU.predio.estado.toUpperCase(),
              tipo: autoavaluoCpu.terrenoCPU.predio.tipo.toUpperCase(),
              uso: autoavaluoCpu.terrenoCPU.predio.uso.toUpperCase(),
              ubicacion: "".concat(autoavaluoCpu.terrenoCPU.predio.ubicacion.descripcion.toUpperCase(), " ").concat(autoavaluoCpu.terrenoCPU.predio.ubicacion.numero)
            },
            construccion: {
              data: autoavaluoCpu.terrenoCPU.predio.construcciones,
              total: "S /.".concat(autoavaluoCpu.terrenoCPU.predio.totalConstruccion.toFixed(2))
            },
            instalacion: {
              data: autoavaluoCpu.terrenoCPU.predio.instalacionesPredio,
              total: "S /.".concat(autoavaluoCpu.terrenoCPU.predio.totalInstalaciones)
            },
            terreno: {
              calzada: autoavaluoCpu.terrenoCPU.calzada.descripcion.toUpperCase(),
              ancho: autoavaluoCpu.terrenoCPU.medida.intervalo.toUpperCase(),
              area: autoavaluoCpu.terrenoCPU.area,
              arancel: "S /.".concat(autoavaluoCpu.terrenoCPU.arancel.toFixed(2)),
              servicios: autoavaluoCpu.terrenoCPU.servicioBasico.descripcion.toUpperCase(),
              total: "S /.".concat(autoavaluoCpu.terrenoCPU.valorTotal.toFixed(2))
            },
            total: "S /.".concat(autoavaluoCpu.terrenoCPU.predio.autoavaluo.toFixed(2))
          };
          this.generarReporte(documentCPU);
        }
      }, {
        key: "openReporteUrbano",
        value: function openReporteUrbano(autoavaluoUrbano) {
          var documentRustico = {
            abbreviation: "PU",
            type: "PREDIO URBANO",
            period: autoavaluoUrbano.terrenoUrbano.predio.periodo.anio,
            contribuyentes: autoavaluoUrbano.propietariosDetail,
            predio: {
              condicion: autoavaluoUrbano.terrenoUrbano.predio.condicion.toUpperCase(),
              estado: autoavaluoUrbano.terrenoUrbano.predio.estado.toUpperCase(),
              tipo: autoavaluoUrbano.terrenoUrbano.predio.tipo.toUpperCase(),
              uso: autoavaluoUrbano.terrenoUrbano.predio.uso.toUpperCase(),
              ubicacion: "".concat(autoavaluoUrbano.terrenoUrbano.predio.ubicacion.descripcion.toUpperCase(), " ").concat(autoavaluoUrbano.terrenoUrbano.predio.ubicacion.numero)
            },
            construccion: {
              data: autoavaluoUrbano.terrenoUrbano.predio.construcciones,
              total: "S /.".concat(autoavaluoUrbano.terrenoUrbano.predio.totalConstruccion.toFixed(2))
            },
            instalacion: {
              data: autoavaluoUrbano.terrenoUrbano.predio.instalacionesPredio,
              total: "S /.".concat(autoavaluoUrbano.terrenoUrbano.predio.totalInstalaciones)
            },
            terreno: {
              cuadra: autoavaluoUrbano.terrenoUrbano.via.cuadra,
              area: autoavaluoUrbano.terrenoUrbano.area,
              arancel: "S /.".concat(autoavaluoUrbano.terrenoUrbano.arancel.toFixed(2)),
              total: "S /.".concat(autoavaluoUrbano.terrenoUrbano.valorTotal.toFixed(2))
            },
            total: "S /.".concat(autoavaluoUrbano.terrenoUrbano.predio.autoavaluo.toFixed(2))
          };
          this.generarReporte(documentRustico);
        }
      }, {
        key: "openReporteRustico",
        value: function openReporteRustico(autoavaluoRustico) {
          var documentRustico = {
            abbreviation: "PR",
            type: "PREDIO RUSTICO",
            period: autoavaluoRustico.terrenoRustico.predio.periodo.anio,
            contribuyentes: autoavaluoRustico.propietariosDetail,
            predio: {
              condicion: autoavaluoRustico.terrenoRustico.predio.condicion.toUpperCase(),
              estado: autoavaluoRustico.terrenoRustico.predio.estado.toUpperCase(),
              tipo: autoavaluoRustico.terrenoRustico.predio.tipo.toUpperCase(),
              uso: autoavaluoRustico.terrenoRustico.predio.uso.toUpperCase(),
              ubicacion: "".concat(autoavaluoRustico.terrenoRustico.predio.ubicacion.descripcion.toUpperCase(), " ").concat(autoavaluoRustico.terrenoRustico.predio.ubicacion.numero)
            },
            construccion: {
              data: autoavaluoRustico.terrenoRustico.predio.construcciones,
              total: "S /.".concat(autoavaluoRustico.terrenoRustico.predio.totalConstruccion.toFixed(2))
            },
            instalacion: {
              data: autoavaluoRustico.terrenoRustico.predio.instalacionesPredio,
              total: "S /.".concat(autoavaluoRustico.terrenoRustico.predio.totalInstalaciones)
            },
            terreno: {
              aptitud: autoavaluoRustico.terrenoRustico.grupoTierra.descripcion.toUpperCase(),
              altitud: autoavaluoRustico.terrenoRustico.altitud.intervalo.toUpperCase(),
              area: autoavaluoRustico.terrenoRustico.area,
              arancel: "S /.".concat(autoavaluoRustico.terrenoRustico.arancel.toFixed(2)),
              calidad: autoavaluoRustico.terrenoRustico.calidad.nivel.toUpperCase(),
              total: "S /.".concat(autoavaluoRustico.terrenoRustico.valorTotal.toFixed(2)),
              riego: autoavaluoRustico.terrenoRustico.riegoLluvia
            },
            total: "S /.".concat(autoavaluoRustico.terrenoRustico.predio.autoavaluo.toFixed(2))
          };
          this.generarReporte(documentRustico);
        }
      }, {
        key: "generarReporte",
        value: function generarReporte(document, orientacion) {
          var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"]();
          var data = [];
          var data2 = [];
          var tableLayout = {
            hLineWidth: function hLineWidth(i, node) {
              if (i === 0 || i === node.table.body.length) {
                return 0;
              }

              return i === 1 ? 2 : 1;
            },
            vLineWidth: function vLineWidth(i) {
              return 1;
            },
            vLineColor: function vLineColor() {
              return "#fff";
            },
            hLineColor: function hLineColor() {
              return "#fff";
            },
            paddingLeft: function paddingLeft(i) {
              return i === 0 ? 2 : 4;
            },
            paddingRight: function paddingRight(i, node) {
              return i === node.table.widths.length - 1 ? 0 : 4;
            },
            fillColor: function fillColor(i) {
              if (i === 0) {
                return "#ed7d31";
              }

              return i % 2 == 0 ? "#f8cbad" : "#fce4d6";
            }
          };
          pdf.pageMargins([30, 20, 30, 50]);
          pdf.watermark(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("SISMAT").opacity(0.2).end);
          var headers = ["Niv", "años de Antig.", "Clasificación", "Material Estructural", "Estado Conser-vación", "Categorías", "Valor Unitario", "Incr.", "Depr.", "Valor por M2", "Area", "Valor de la construcción"];
          var headers2 = ["Instalacion Fija o Permanente", "UM", "Cantidad", "Valor Unitario", "Importe"];
          data.push(headers.map(function (header) {
            return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](header).color("#fff").fontSize(9).bold().end;
          }));
          data2.push(headers2.map(function (header) {
            return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](header).color("#fff").fontSize(9).bold().end;
          }));
          document.construccion.data.forEach(function (row) {
            return data.push([row.nivel, row.antiguedad, row.estadoConservacion.materialEstructural.antiguedad.clasificacion.nombre, row.estadoConservacion.materialEstructural.material, row.estadoConservacion.estado, row.categorias, row.importeUnitario.toFixed(2), row.incremento.toFixed(2), row.depreciacion.toFixed(2), row.totalUnitario.toFixed(2), row.areaConstruida, row.valorConstruccion.toFixed(2)].map(function (el) {
              return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](el).color("#000").fontSize(9).end;
            }));
          });
          document.instalacion.data.forEach(function (row) {
            return data2.push([row.instalacion.descripcionEspecifica, row.instalacion.unidadMedida, row.unidades, row.valorUnitario.toFixed(2), row.valorTotal.toFixed(2)].map(function (el) {
              return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](el).color('#000').fontSize(9).end;
            }));
          });
          var table = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"](data).widths([5, 24, 80, 47, 35, 44, 40, 25, 25, 35, 20, 57]).layout(tableLayout).color("#555").end;
          var table2 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"](data2).widths([365, 20, 37, 35, 42]).layout(tableLayout).color("#555").end;
          pdf.footer(function (currentPage, pageCount) {
            return [{
              text: "p\xE1gina ".concat(currentPage.toString(), " de ").concat(pageCount),
              alignment: 'right',
              margin: [40, 0]
            }];
          }); //Encavezado

          if (document.abbreviation == "PCPU") {
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](document.abbreviation).bold().fontSize(30).color("#000").absolutePosition(110, 44).end);
          } else {
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](document.abbreviation).bold().fontSize(50).color("#000").absolutePosition(110, 29).end);
          }

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](document.type).bold().fontSize(6).color("#000").absolutePosition(120, 79).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("MUNICIPALIDAD PROVINCIAL DE AIJA").bold().fontSize(15).color("#000").alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("PERIODO: ".concat(document.period)).bold().fontSize(14).color("#000").alignment("center").end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("DECLARACION TRIBUTARIA").fontSize(16).color("#000").alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("IMPUESTO PREDIAL").bold().fontSize(12).color("#000").alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("D.S. N° 156-2004-EF").bold().fontSize(8).color("#000").alignment("center").end);
          pdf.add(pdf.ln()); //Fin encavezado
          //Inicio Contribuyente

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONTRIBUYENTE").bold().fontSize(13).color("#666").alignment("left").end);
          var items = [];
          document.contribuyentes.forEach(function (contribuyente) {
            var item;

            if (contribuyente.persona) {
              item = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(contribuyente.persona.tipoDocumento, ": ").concat(contribuyente.persona.documento, "      APELLIDOS Y NOMBRES: ").concat(contribuyente.persona.nombres)).fontSize(10).color("#000").alignment("left").end).end; // pdf.add(pdf.ln());

              items.push(item);
            } else {
              item = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RUC: ".concat(contribuyente.empresa.ruc, "                    RAZON SOCIAL: ").concat(contribuyente.empresa.razonSocial)).fontSize(10).color("#000").alignment("left").end).end;
              var item2;
              item2 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ul"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("REPRESENTANTE LEGAL").fontSize(10).bold().color("#444").alignment("left").end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(contribuyente.empresa.representante.tipoDocumento, ": ").concat(contribuyente.empresa.representante.documento, "      APELLIDOS Y NOMBRES: ").concat(contribuyente.empresa.representante.nombres)).fontSize(10).color("#000").alignment("left").end]).type("none").end).end;
              items.push(item);
              items.push(item2);
            }

            var space;
            space = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("\n").end).end;
            items.push(space);
          });
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ul"](items).type("none").end); //Fin Contribuyente
          //Inicio Predio

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("DATOS DEL PREDIO").bold().fontSize(13).color("#666").alignment("left").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ol"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONDICION: ".concat(document.predio.condicion.toUpperCase())).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ESTADO: ".concat(document.predio.estado.toUpperCase())).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TIPO: ".concat(document.predio.tipo.toUpperCase())).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("USO: ".concat(document.predio.uso.toUpperCase())).fontSize(10).end]).end);
          pdf.add(pdf.ln());
          var cuadra = "";

          if (document.abbreviation == "PU") {
            cuadra = "- CUADRA ".concat(document.terreno.cuadra);
          }

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("UBICACION: ".concat(document.predio.ubicacion, " ").concat(cuadra)).fontSize(10).end);
          pdf.add(pdf.ln()); //Fin Predio
          //Inicio Contruccion

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONSTRUCCION").bold().fontSize(13).color("#666").alignment("left").end); //Fin Contruccion

          pdf.add(pdf.ln());
          pdf.add(table);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL CONSTRUCCION: ".concat(document.construccion.total)).bold().fontSize(10).color("#000").alignment("right").end);
          pdf.add(pdf.ln()); //Inicio instalaciones

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("INSTALACIONES FIJAS Y PERMANENTES").bold().fontSize(13).color("#666").alignment("left").end); //Fin instalaciones

          pdf.add(pdf.ln());
          pdf.add(table2);

          if (orientacion == "h") {
            pdf.pageOrientation("landscape");
          }

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL INSTALACIONES FIJAS Y PERMANENTES: ".concat(document.instalacion.total)).bold().fontSize(10).color("#000").alignment("right").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TERRENO").bold().fontSize(13).color("#666").alignment("left").end);

          if (document.abbreviation == "PCPU") {
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ol"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TIPO DE CALZADA: ".concat(document.terreno.calzada)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ANCHO DE VIAS: ".concat(document.terreno.ancho)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("AREA DEL TERRENO: ".concat(document.terreno.area, " M2")).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ARANCEL: ".concat(document.terreno.arancel)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("SERVICIOS BASICOS: ".concat(document.terreno.servicios)).fontSize(10).end]).end);
          }

          if (document.abbreviation == "PU") {
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ol"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("AREA DEL TERRENO: ".concat(document.terreno.area, " M2")).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ARANCEL: ".concat(document.terreno.arancel)).fontSize(10).end]).end);
          }

          if (document.abbreviation == "PR") {
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ol"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("APTITUD: ".concat(document.terreno.aptitud)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CALIDAD: ".concat(document.terreno.calidad)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ALTITUD: ".concat(document.terreno.altitud)).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("AREA DEL TERRENO: ".concat(document.terreno.area, " He")).fontSize(10).end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("ARANCEL: ".concat(document.terreno.arancel)).fontSize(10).end, document.terreno.riego ? new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RIEGO: LLUVIA").fontSize(10).end : undefined]).end);
          }

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL TERRENO: ".concat(document.terreno.total)).bold().fontSize(10).color("#000").alignment("right").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL: ".concat(document.total)).bold().fontSize(10).color("#000").alignment("right").end);
          new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Img"]("assets/logo.png").fit([80, 80]).alignment("left").opacity(0.8).absolutePosition(15, 10).build().then(function (img) {
            pdf.header(img);
            pdf.create().open();
          });
        }
      }, {
        key: "openReporteLiquidacion",
        value: function openReporteLiquidacion(impuesto, tamanio) {
          var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"]();
          pdf.pageSize(tamanio);

          if (tamanio === 'A5') {
            pdf.pageOrientation('landscape');
          }

          if (tamanio === 'A4') {
            pdf.pageOrientation('portrait');
          }

          var data = [];
          var tableLayout = {
            hLineWidth: function hLineWidth(i, node) {
              if (i === 0 || i === node.table.body.length) {
                return 0;
              }

              return i === 1 ? 2 : 1;
            },
            vLineWidth: function vLineWidth(i) {
              return 1;
            },
            vLineColor: function vLineColor() {
              return "#fff";
            },
            hLineColor: function hLineColor() {
              return "#fff";
            },
            paddingLeft: function paddingLeft(i) {
              return i === 0 ? 2 : 4;
            },
            paddingRight: function paddingRight(i, node) {
              return i === node.table.widths.length - 1 ? 0 : 4;
            },
            fillColor: function fillColor(i) {
              if (i === 0) {
                return "#ed7d31";
              }

              return i % 2 == 0 ? "#f8cbad" : "#fce4d6";
            }
          };
          pdf.pageMargins([30, 20, 30, 50]);
          pdf.watermark(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("SISMAT").opacity(0.2).end);
          var headers = ["UBICACION DEL PREDIO", "ESTADO", "TIPO", "USO", "AUTOAVALUO AFECTO"];
          data.push(headers.map(function (header) {
            return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](header).color("#fff").fontSize(9).bold().end;
          }));
          impuesto.impuesto.predios.forEach(function (predio) {
            return data.push(["".concat(predio.ubicacion.descripcion, " ").concat(predio.ubicacion.numero), predio.estado, predio.tipo, predio.uso, predio.autoavaluo.toFixed(2)].map(function (el) {
              return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](el).color("#000").fontSize(9).end;
            }));
          });
          var table = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"](data).widths([140, 108, 108, 80, 63]).layout(tableLayout).color("#555").end;
          pdf.footer(function (currentPage, pageCount) {
            return [{
              text: "p\xE1gina ".concat(currentPage.toString(), " de ").concat(pageCount),
              alignment: 'right',
              margin: [40, 0]
            }, {
              text: "".concat(moment__WEBPACK_IMPORTED_MODULE_4__().lang("es").format('LLLL')),
              alignment: 'left',
              margin: [40, -12]
            }];
          }); //Encavezado

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("HR").bold().fontSize(50).color("#000").absolutePosition(110, 20).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("HOJA RESUMEN").bold().fontSize(6).color("#000").absolutePosition(120, 70).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("PERIODO: ".concat(impuesto.impuesto.predios[0].periodo.anio)).bold().fontSize(14).color("#000").alignment("center").end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("DECLARACION TRIBUTARIA").fontSize(16).color("#000").alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("IMPUESTO PREDIAL").bold().fontSize(12).color("#000").alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("D.S. N° 156-2004-EF").bold().fontSize(8).color("#000").alignment("center").end);
          pdf.add(pdf.ln()); //Fin encavezado
          //Inicio Contribuyente

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONTRIBUYENTE").bold().fontSize(13).color("#666").alignment("left").end);
          var items = [];
          impuesto.propietariosDetail.forEach(function (contribuyente) {
            var item;

            if (contribuyente.persona) {
              item = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(contribuyente.persona.tipoDocumento, ": ").concat(contribuyente.persona.documento, "      APELLIDOS Y NOMBRES: ").concat(contribuyente.persona.nombres.toUpperCase())).fontSize(10).color("#000").alignment("left").end).end; // pdf.add(pdf.ln());

              items.push(item);
            } else {
              item = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RUC: ".concat(contribuyente.empresa.ruc, "                    RAZON SOCIAL: ").concat(contribuyente.empresa.razonSocial)).fontSize(10).color("#000").alignment("left").end).end;
              var item2;
              item2 = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ul"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("REPRESENTANTE LEGAL").fontSize(10).bold().color("#444").alignment("left").end, new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(contribuyente.empresa.representante.tipoDocumento, ": ").concat(contribuyente.empresa.representante.documento, "      APELLIDOS Y NOMBRES: ").concat(contribuyente.empresa.representante.nombres)).fontSize(10).color("#000").alignment("left").end]).type("none").end).end;
              items.push(item);
              items.push(item2);
            }

            var space;
            space = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Item"](new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("\n").end).end;
            items.push(space);
          });
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ul"](items).type("none").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("DOMICILIO FISCAL").bold().fontSize(12).color("#666").alignment("left").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Ul"]([new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("DIRECCION: ".concat(impuesto.impuesto.predios[0].domicilioFiscal)).fontSize(9).end]).end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RELACION DE PREDIOS DECLARADOS").bold().fontSize(12).color("#666").alignment("left").end);
          pdf.add(table);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("BASE IMPONIBLE: S /.".concat(impuesto.impuesto.baseImponible.toFixed(2))).bold().fontSize(9).color("#000").alignment("right").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("IMPUESTO ANUAL: S /.".concat(impuesto.impuesto.impuestoAnual.toFixed(2))).bold().fontSize(9).color("#000").alignment("right").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CUOTA TRIMESTRAL: S /.".concat(Math.ceil(impuesto.impuesto.cuotaTrimestral * 100) / 100)).bold().fontSize(9).color("#000").alignment("right").end);
          new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Img"]("assets/logo.png").fit([80, 80]).alignment("left").opacity(0.8).absolutePosition(15, 10).build().then(function (img) {
            pdf.header(img);
            pdf.create().open();
          });
        }
      }, {
        key: "openRecibo",
        value: function openRecibo(recibo) {
          var pdf = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["PdfMakeWrapper"]();
          var data = [];
          var tableLayout = {
            hLineWidth: function hLineWidth(i, node) {
              if (i === 1 || i === node.table.widths.length + 1) {
                return 1;
              }

              return 0;
            },
            vLineWidth: function vLineWidth(i) {
              return 1;
            },
            vLineColor: function vLineColor() {
              return "#fff";
            },
            hLineColor: function hLineColor() {
              return "#000";
            },
            paddingLeft: function paddingLeft(i) {
              return 2;
            },
            paddingRight: function paddingRight(i, node) {
              return 2;
            }
          };

          if (recibo.ingreso.estado == "ANULADO") {
            pdf.watermark(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](recibo.ingreso.estado).fontSize(50).opacity(0.5).end);
          }

          pdf.pageSize({
            width: 143,
            height: 'auto'
          }); //Tamaño necesario para impresora termica de 58mm de ancho

          pdf.pageMargins([10, 5, 15, 10]);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("Municipalidad Provincial de Aija").alignment("center").fontSize(9).bold().end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("Plaza de Armas S/N").alignment("center").fontSize(8).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RUC: 20191017201").alignment("center").fontSize(8).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RECIBO DE INGRESO").alignment("center").fontSize(8).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("N\xFAmero: ".concat(this.padLeft(recibo.ingreso.id.toString(), 11))).alignment("center").fontSize(8).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("------------------------------------------").fontSize(10).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("FECHA DE EMISION: ".concat(moment__WEBPACK_IMPORTED_MODULE_4__(recibo.ingreso.createdAt).format("DD/MM/YYYY"))).fontSize(7).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("HORA DE EMISION: ".concat(moment__WEBPACK_IMPORTED_MODULE_4__(recibo.ingreso.createdAt).format("H:mm:ss"), " ")).fontSize(7).end);
          var documento = "";

          if (recibo.propietarioDetail.persona) {
            documento = recibo.propietarioDetail.persona.documento;
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONTRIBUYENTE: ".concat(recibo.propietarioDetail.persona.nombres.toUpperCase(), " ")).fontSize(7).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(recibo.propietarioDetail.persona.tipoDocumento.toUpperCase(), ": ").concat(recibo.propietarioDetail.persona.documento.toUpperCase(), " ")).fontSize(7).end);
          } else if (recibo.propietarioDetail.empresa) {
            documento = recibo.propietarioDetail.empresa.ruc;
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("CONTRIBUYENTE: ".concat(recibo.propietarioDetail.empresa.razonSocial.toUpperCase(), " ")).fontSize(7).end);
            pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("RUC: ".concat(recibo.propietarioDetail.empresa.ruc, " ")).fontSize(7).end);
          }

          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("------------------------------------------").fontSize(10).end);
          pdf.add(pdf.ln);
          var headers = ["Servicio", "Impor"];
          data.push(headers.map(function (header) {
            return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](header).bold().fontSize(8).end;
          }));
          recibo.ingreso.detalle.forEach(function (detalle) {
            data.push([detalle.concepto, detalle.precio.toFixed(2)].map(function (el) {
              return new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"](el).fontSize(7).end;
            }));
          });
          var table = new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Table"](data).widths([83, 23]).layout(tableLayout).end;
          pdf.add(table);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("TOTAL: S /.".concat(recibo.ingreso.total.toFixed(2), " ")).alignment("right").fontSize(7).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("SON: ").fontSize(7).end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("".concat(this.numeroALetras(recibo.ingreso.total), " CON ").concat(recibo.ingreso.total.toFixed(2).substr(recibo.ingreso.total.toFixed(2).length - 2), " /100 SOLES")).fontSize(7).end);
          pdf.add(pdf.ln());
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["QR"]("20166558051|".concat(this.padLeft(recibo.ingreso.id.toString(), 11), "|").concat(recibo.ingreso.total.toFixed(2), "|").concat(recibo.ingreso.createdAt, "|").concat(documento)).fit(80).alignment("center").end);
          pdf.add(new pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_2__["Txt"]("Representacion Impresa desde el Sistema Municipal de Administracion tributaria").alignment("center").fontSize(5).end);
          pdf.add(pdf.ln());
          pdf.create().print();
        }
      }, {
        key: "padLeft",
        value: function padLeft(value, length) {
          return value.toString().length < length ? this.padLeft("0".concat(value), length) : value;
        }
      }, {
        key: "numeroALetras",
        value: function numeroALetras(n) {
          var num = parseInt(n * 100 + '');
          var centavos = num % 100;
          var numero = parseInt(n + '');
          var respuesta = '';

          if (numero > 999) {
            if ((numero + '').length > 6) {
              var residuo = parseInt(numero + '') % 1000000;
              var x = parseInt(numero / 1000000 + '');

              if (x == 1) {
                respuesta = ' UN MILLON ' + this.numeroALetras(residuo);
              } else {
                respuesta = this.numeroALetras(x) + ' MILLONES ' + this.numeroALetras(residuo);
              }
            } else if ((numero + '').length > 3) {
              var _residuo = parseInt(numero + '') % 1000;

              var _x = parseInt(numero / 1000 + '');

              if (_x == 1) {
                respuesta = ' MIL' + this.numeroALetras(_residuo);
              } else {
                respuesta = this.numeroALetras(_x) + ' MIL ' + this.numeroALetras(_residuo);
              }
            }
          } else {
            if (numero == 100) {
              respuesta = 'CIEN';
            } else if (numero > 100) {
              var cen = parseInt(numero / 100 + '');
              var dec = numero % 100;
              respuesta = ' ' + this.centenas_nal(cen) + ' ' + this.numeroALetras(dec);
            } else {
              var _dec = numero % 100;

              if (_dec < 20) {
                respuesta = ' ' + this.unidades_nal(_dec);
              } else {
                var unis = _dec % 10;
                var ddec = parseInt(_dec / 10 + '');

                if (unis != 0) {
                  respuesta = ' ' + this.decenas_nal(ddec) + ' Y ' + this.unidades_nal(unis);
                } else {
                  respuesta = ' ' + this.decenas_nal(ddec);
                }
              }
            }
          }

          return respuesta;
        } ///////////////////////////

      }, {
        key: "unidades_nal",
        value: function unidades_nal(n) {
          if (n + '' == '0') {
            return 'CERO';
          }

          if (n + '' == '1') {
            return 'UNO';
          }

          if (n + '' == '2') {
            return 'DOS';
          }

          if (n + '' == '3') {
            return 'TRES';
          }

          if (n + '' == '4') {
            return 'CUATRO';
          }

          if (n + '' == '5') {
            return 'CINCO';
          }

          if (n + '' == '6') {
            return 'SEIS';
          }

          if (n + '' == '7') {
            return 'SIETE';
          }

          if (n + '' == '8') {
            return 'OCHO';
          }

          if (n + '' == '9') {
            return 'NUEVE';
          }

          if (n + '' == '10') {
            return 'DIEZ';
          }

          if (n + '' == '11') {
            return 'ONCE';
          }

          if (n + '' == '12') {
            return 'DOCE';
          }

          if (n + '' == '13') {
            return 'TRECE';
          }

          if (n + '' == '14') {
            return 'CATORCE';
          }

          if (n + '' == '15') {
            return 'QUINCE';
          }

          if (n + '' == '16') {
            return 'DIECISEIS';
          }

          if (n + '' == '17') {
            return 'DIECISIETE';
          }

          if (n + '' == '18') {
            return 'DIECIOCHO';
          }

          if (n + '' == '19') {
            return 'DIECINUEVE';
          }

          return '';
        }
      }, {
        key: "decenas_nal",
        value: function decenas_nal(n) {
          if (n + '' == '1') {
            return 'DIEZ';
          }

          if (n + '' == '2') {
            return 'VEINTE';
          }

          if (n + '' == '3') {
            return 'TREINTA';
          }

          if (n + '' == '4') {
            return 'CUARENTA';
          }

          if (n + '' == '5') {
            return 'CINCUENTA';
          }

          if (n + '' == '6') {
            return 'SESENTA';
          }

          if (n + '' == '7') {
            return 'SETENTA';
          }

          if (n + '' == '8') {
            return 'OCHENTA';
          }

          if (n + '' == '9') {
            return 'NOVENTA';
          }

          return '';
        }
      }, {
        key: "centenas_nal",
        value: function centenas_nal(n) {
          if (n + '' == '1') {
            return 'CIENTO';
          }

          if (n + '' == '2') {
            return 'DOCIENTOS';
          }

          if (n + '' == '3') {
            return 'TRECIENTOS';
          }

          if (n + '' == '4') {
            return 'CUATROCIENTOS';
          }

          if (n + '' == '5') {
            return 'QUINIENTOS';
          }

          if (n + '' == '6') {
            return 'SEISCIENTOSD';
          }

          if (n + '' == '7') {
            return 'SETECIENTOS';
          }

          if (n + '' == '8') {
            return 'OCHOCIENTOS';
          }

          if (n + '' == '9') {
            return 'NOVECIENTOS';
          }

          return '';
        }
      }]);

      return ReportsService;
    }();

    ReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportsService);
    /***/
  },

  /***/
  "./src/app/_directives/validator-via.directive.ts": function srcApp_directivesValidatorViaDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validatorViaName", function () {
      return validatorViaName;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function validatorViaName(vias) {
      return function (control) {
        return vias.filter(function (via) {
          return via == control.value;
        }).length == 0 ? {
          validatorVia: {
            value: "Digite una via valida"
          }
        } : null;
      };
    } // export function validatorViaNumber(vias: Via[]): ValidatorFn {
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     control.value.substring()
    //     // return vias.filter(via => via == control.value).length == 0 ? { validatorVia: { value: "Digite un número valido" } } : null;
    //   };
    // }

    /***/

  },

  /***/
  "./src/app/_model/antiguedad.ts": function srcApp_modelAntiguedadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Antiguedad", function () {
      return Antiguedad;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Antiguedad = function Antiguedad() {
      _classCallCheck(this, Antiguedad);
    };
    /***/

  },

  /***/
  "./src/app/_model/clasificacion.ts": function srcApp_modelClasificacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clasificacion", function () {
      return Clasificacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Clasificacion = function Clasificacion() {
      _classCallCheck(this, Clasificacion);
    };
    /***/

  },

  /***/
  "./src/app/_model/construccion.ts": function srcApp_modelConstruccionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Construccion", function () {
      return Construccion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Construccion = function Construccion() {
      _classCallCheck(this, Construccion);
    };
    /***/

  },

  /***/
  "./src/app/_model/detalle-ingreso.ts": function srcApp_modelDetalleIngresoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleIngreso", function () {
      return DetalleIngreso;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DetalleIngreso = function DetalleIngreso() {
      _classCallCheck(this, DetalleIngreso);
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/autoavaluo-cpu.ts": function srcApp_modelDtoAutoavaluoCpuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoCpu", function () {
      return AutoavaluoCpu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AutoavaluoCpu = function AutoavaluoCpu() {
      _classCallCheck(this, AutoavaluoCpu);
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/autoavaluo-rustico.ts": function srcApp_modelDtoAutoavaluoRusticoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoRustico", function () {
      return AutoavaluoRustico;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AutoavaluoRustico = function AutoavaluoRustico() {
      _classCallCheck(this, AutoavaluoRustico);
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/autoavaluo-urbano.ts": function srcApp_modelDtoAutoavaluoUrbanoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoUrbano", function () {
      return AutoavaluoUrbano;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AutoavaluoUrbano = function AutoavaluoUrbano() {
      _classCallCheck(this, AutoavaluoUrbano);
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/contribuyente.ts": function srcApp_modelDtoContribuyenteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contribuyente", function () {
      return Contribuyente;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _persona__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../persona */
    "./src/app/_model/persona.ts");

    var Contribuyente = function Contribuyente() {
      _classCallCheck(this, Contribuyente);

      this.representante = new _persona__WEBPACK_IMPORTED_MODULE_1__["Persona"]();
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/propietario-detail.ts": function srcApp_modelDtoPropietarioDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropietarioDetail", function () {
      return PropietarioDetail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PropietarioDetail = function PropietarioDetail() {
      _classCallCheck(this, PropietarioDetail);
    };
    /***/

  },

  /***/
  "./src/app/_model/dto/recibo.ts": function srcApp_modelDtoReciboTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recibo", function () {
      return Recibo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Recibo = function Recibo() {
      _classCallCheck(this, Recibo);
    };
    /***/

  },

  /***/
  "./src/app/_model/empresa.ts": function srcApp_modelEmpresaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Empresa", function () {
      return Empresa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Empresa = function Empresa() {
      _classCallCheck(this, Empresa);
    };
    /***/

  },

  /***/
  "./src/app/_model/estado-conservacion.ts": function srcApp_modelEstadoConservacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoConservacion", function () {
      return EstadoConservacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EstadoConservacion = function EstadoConservacion() {
      _classCallCheck(this, EstadoConservacion);
    };
    /***/

  },

  /***/
  "./src/app/_model/ingreso.ts": function srcApp_modelIngresoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingreso", function () {
      return Ingreso;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Ingreso = function Ingreso() {
      _classCallCheck(this, Ingreso);
    };
    /***/

  },

  /***/
  "./src/app/_model/inst-fija-perman.ts": function srcApp_modelInstFijaPermanTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstFijaPerman", function () {
      return InstFijaPerman;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var InstFijaPerman = function InstFijaPerman() {
      _classCallCheck(this, InstFijaPerman);
    };
    /***/

  },

  /***/
  "./src/app/_model/instalacion-predio.ts": function srcApp_modelInstalacionPredioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstalacionPredio", function () {
      return InstalacionPredio;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var InstalacionPredio = function InstalacionPredio() {
      _classCallCheck(this, InstalacionPredio);
    };
    /***/

  },

  /***/
  "./src/app/_model/material-estructural.ts": function srcApp_modelMaterialEstructuralTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialEstructural", function () {
      return MaterialEstructural;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MaterialEstructural = function MaterialEstructural() {
      _classCallCheck(this, MaterialEstructural);
    };
    /***/

  },

  /***/
  "./src/app/_model/periodo.ts": function srcApp_modelPeriodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Periodo", function () {
      return Periodo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Periodo = function Periodo() {
      _classCallCheck(this, Periodo);
    };
    /***/

  },

  /***/
  "./src/app/_model/persona.ts": function srcApp_modelPersonaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Persona", function () {
      return Persona;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Persona = function Persona() {
      _classCallCheck(this, Persona);
    };
    /***/

  },

  /***/
  "./src/app/_model/predio.ts": function srcApp_modelPredioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Predio", function () {
      return Predio;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Predio = function Predio() {
      _classCallCheck(this, Predio);
    };
    /***/

  },

  /***/
  "./src/app/_model/propietario.ts": function srcApp_modelPropietarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Propietario", function () {
      return Propietario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Propietario = function Propietario() {
      _classCallCheck(this, Propietario);
    };
    /***/

  },

  /***/
  "./src/app/_model/tasa.ts": function srcApp_modelTasaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tasa", function () {
      return Tasa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tasa = function Tasa() {
      _classCallCheck(this, Tasa);
    };
    /***/

  },

  /***/
  "./src/app/_model/terreno-cpu.ts": function srcApp_modelTerrenoCpuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerrenoCpu", function () {
      return TerrenoCpu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TerrenoCpu = function TerrenoCpu() {
      _classCallCheck(this, TerrenoCpu);
    };
    /***/

  },

  /***/
  "./src/app/_model/terreno-rustico.ts": function srcApp_modelTerrenoRusticoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerrenoRustico", function () {
      return TerrenoRustico;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TerrenoRustico = function TerrenoRustico() {
      _classCallCheck(this, TerrenoRustico);
    };
    /***/

  },

  /***/
  "./src/app/_model/terreno-urbano.ts": function srcApp_modelTerrenoUrbanoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerrenoUrbano", function () {
      return TerrenoUrbano;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TerrenoUrbano = function TerrenoUrbano() {
      _classCallCheck(this, TerrenoUrbano);
    };
    /***/

  },

  /***/
  "./src/app/_model/ubicacion.ts": function srcApp_modelUbicacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ubicacion", function () {
      return Ubicacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Ubicacion = function Ubicacion() {
      _classCallCheck(this, Ubicacion);
    };
    /***/

  },

  /***/
  "./src/app/_model/usuario.ts": function srcApp_modelUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario() {
      _classCallCheck(this, Usuario);
    };
    /***/

  },

  /***/
  "./src/app/_model/valor-categoria-dto.ts": function srcApp_modelValorCategoriaDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorCategoriaDTO", function () {
      return ValorCategoriaDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValorCategoriaDTO = function ValorCategoriaDTO() {
      _classCallCheck(this, ValorCategoriaDTO);
    };
    /***/

  },

  /***/
  "./src/app/_model/valor-terreno-rustico.ts": function srcApp_modelValorTerrenoRusticoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoRustico", function () {
      return ValorTerrenoRustico;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValorTerrenoRustico = function ValorTerrenoRustico() {
      _classCallCheck(this, ValorTerrenoRustico);
    };
    /***/

  },

  /***/
  "./src/app/_model/valor-terreno-urbano.ts": function srcApp_modelValorTerrenoUrbanoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoUrbano", function () {
      return ValorTerrenoUrbano;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValorTerrenoUrbano = function ValorTerrenoUrbano() {
      _classCallCheck(this, ValorTerrenoUrbano);
    };
    /***/

  },

  /***/
  "./src/app/_model/valor-unit-edificacion.ts": function srcApp_modelValorUnitEdificacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorUnitEdificacion", function () {
      return ValorUnitEdificacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValorUnitEdificacion = function ValorUnitEdificacion() {
      _classCallCheck(this, ValorUnitEdificacion);
    };
    /***/

  },

  /***/
  "./src/app/_model/valorTerrenoCP.ts": function srcApp_modelValorTerrenoCPTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoCP", function () {
      return ValorTerrenoCP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ValorTerrenoCP = function ValorTerrenoCP() {
      _classCallCheck(this, ValorTerrenoCP);
    };
    /***/

  },

  /***/
  "./src/app/_model/via.ts": function srcApp_modelViaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Via", function () {
      return Via;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Via = function Via() {
      _classCallCheck(this, Via);
    };
    /***/

  },

  /***/
  "./src/app/_service/altitud.service.ts": function srcApp_serviceAltitudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltitudService", function () {
      return AltitudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AltitudService = /*#__PURE__*/function () {
      function AltitudService(http, authService) {
        _classCallCheck(this, AltitudService);

        this.http = http;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HOST, "/altitudes");
      }

      _createClass(AltitudService, [{
        key: "listar",
        value: function listar() {
          return this.http.get(this.url, {
            headers: this.authService.headers
          });
        }
      }]);

      return AltitudService;
    }();

    AltitudService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AltitudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], AltitudService);
    /***/
  },

  /***/
  "./src/app/_service/auth.service.ts": function srcApp_serviceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _model_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../_model/usuario */
    "./src/app/_model/usuario.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HOST, "/oauth/token");
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(usuario) {
          var credenciales = btoa("sismatFront:123456");
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + credenciales
          });
          var params = new URLSearchParams();
          params.set('grant_type', 'password');
          params.set('username', usuario.nombre);
          params.set('password', usuario.contrasenia);
          return this.http.post(this.url, params.toString(), {
            headers: httpHeaders
          });
        }
      }, {
        key: "guardarToken",
        value: function guardarToken(access_token) {
          this._token = access_token;
          sessionStorage.setItem('token', access_token);
        }
      }, {
        key: "guardarUsuario",
        value: function guardarUsuario(access_token) {
          var payload = this.obtenerDatosToken(access_token);
          this._usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
          this._usuario.nombre = payload.user_name;
          sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
        }
      }, {
        key: "usuario",
        get: function get() {
          if (this._usuario != null) {
            return this._usuario;
          } else if (sessionStorage.getItem('usuario') != null) {
            this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
            return this._usuario;
          }

          return new _model_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        }
      }, {
        key: "token",
        get: function get() {
          if (this._token != null) {
            return this._token;
          } else if (sessionStorage.getItem('token') != null) {
            this._token = sessionStorage.getItem('token');
            return this._token;
          }

          return null;
        }
      }, {
        key: "obtenerDatosToken",
        value: function obtenerDatosToken(access_token) {
          if (access_token != null) {
            return JSON.parse(atob(access_token.split(".")[1]));
          }

          return null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var payload = this.obtenerDatosToken(this.token);

          if (payload != null && payload.user_name && payload.user_name.length > 0) {
            return true;
          }

          return false;
        }
      }, {
        key: "logout",
        value: function logout() {
          this._token = null;
          this._usuario = null;
          sessionStorage.clear();
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('usuario');
          window.location.reload();
        }
      }, {
        key: "headers",
        get: function get() {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          var token = this.token;

          if (token != null) {
            return httpHeaders.append('Authorization', "Bearer ".concat(this.token));
          }

          return httpHeaders;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/_service/autoavaluo-cpu.service.ts": function srcApp_serviceAutoavaluoCpuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoCpuService", function () {
      return AutoavaluoCpuService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AutoavaluoCpuService = /*#__PURE__*/function () {
      function AutoavaluoCpuService(http, exception, authService) {
        _classCallCheck(this, AutoavaluoCpuService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/autoavaluo/cpu");
      }

      _createClass(AutoavaluoCpuService, [{
        key: "crear",
        value: function crear(autoavaluoCpu) {
          var _this2 = this;

          return this.http.post(this.url, autoavaluoCpu, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this2.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "getByPredioId",
        value: function getByPredioId(id) {
          var _this3 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this3.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteByPredioId",
        value: function deleteByPredioId(id) {
          var _this4 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this4.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return AutoavaluoCpuService;
    }();

    AutoavaluoCpuService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AutoavaluoCpuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], AutoavaluoCpuService);
    /***/
  },

  /***/
  "./src/app/_service/autoavaluo-rustico.service.ts": function srcApp_serviceAutoavaluoRusticoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoRusticoService", function () {
      return AutoavaluoRusticoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AutoavaluoRusticoService = /*#__PURE__*/function () {
      function AutoavaluoRusticoService(http, exception, authService) {
        _classCallCheck(this, AutoavaluoRusticoService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/autoavaluo/rustico");
      }

      _createClass(AutoavaluoRusticoService, [{
        key: "crear",
        value: function crear(autoavaluoRustico) {
          var _this5 = this;

          return this.http.post(this.url, autoavaluoRustico, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this5.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "getByPredioId",
        value: function getByPredioId(id) {
          var _this6 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this6.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteByPredioId",
        value: function deleteByPredioId(id) {
          var _this7 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this7.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return AutoavaluoRusticoService;
    }();

    AutoavaluoRusticoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_3__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AutoavaluoRusticoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], AutoavaluoRusticoService);
    /***/
  },

  /***/
  "./src/app/_service/autoavaluo-urbano.service.ts": function srcApp_serviceAutoavaluoUrbanoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoavaluoUrbanoService", function () {
      return AutoavaluoUrbanoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AutoavaluoUrbanoService = /*#__PURE__*/function () {
      function AutoavaluoUrbanoService(http, exception, authService) {
        _classCallCheck(this, AutoavaluoUrbanoService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/autoavaluo/urbano");
      }

      _createClass(AutoavaluoUrbanoService, [{
        key: "crear",
        value: function crear(autoavaluoUrbano) {
          var _this8 = this;

          return this.http.post(this.url, autoavaluoUrbano, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this8.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "getByPredioId",
        value: function getByPredioId(id) {
          var _this9 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this9.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteByPredioId",
        value: function deleteByPredioId(id) {
          var _this10 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this10.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return AutoavaluoUrbanoService;
    }();

    AutoavaluoUrbanoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AutoavaluoUrbanoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], AutoavaluoUrbanoService);
    /***/
  },

  /***/
  "./src/app/_service/calidad.service.ts": function srcApp_serviceCalidadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalidadService", function () {
      return CalidadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CalidadService = /*#__PURE__*/function () {
      function CalidadService(http, authService, exception) {
        _classCallCheck(this, CalidadService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/calidades");
      }

      _createClass(CalidadService, [{
        key: "listar",
        value: function listar() {
          var _this11 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this11.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return CalidadService;
    }();

    CalidadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    CalidadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], CalidadService);
    /***/
  },

  /***/
  "./src/app/_service/calzada.service.ts": function srcApp_serviceCalzadaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalzadaService", function () {
      return CalzadaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CalzadaService = /*#__PURE__*/function () {
      function CalzadaService(http, authService, exception) {
        _classCallCheck(this, CalzadaService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/calzadas");
      }

      _createClass(CalzadaService, [{
        key: "listar",
        value: function listar() {
          var _this12 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this12.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return CalzadaService;
    }();

    CalzadaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    CalzadaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], CalzadaService);
    /***/
  },

  /***/
  "./src/app/_service/construccion.service.ts": function srcApp_serviceConstruccionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConstruccionService", function () {
      return ConstruccionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ConstruccionService = /*#__PURE__*/function () {
      function ConstruccionService(http, authService, exception) {
        _classCallCheck(this, ConstruccionService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/periodos");
      }

      _createClass(ConstruccionService, [{
        key: "listar",
        value: function listar() {
          var _this13 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this13.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ConstruccionService;
    }();

    ConstruccionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ConstruccionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], ConstruccionService);
    /***/
  },

  /***/
  "./src/app/_service/empresa.service.ts": function srcApp_serviceEmpresaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaService", function () {
      return EmpresaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EmpresaService = /*#__PURE__*/function () {
      function EmpresaService(http, authService, exception) {
        _classCallCheck(this, EmpresaService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/empresas");
      }

      _createClass(EmpresaService, [{
        key: "consultaSunat",
        value: function consultaSunat(ruc) {
          var _this14 = this;

          return this.http.get("/ruc/".concat(ruc), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this14.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "findByRuc",
        value: function findByRuc(ruc) {
          var _this15 = this;

          return this.http.get("".concat(this.url, "/ruc/").concat(ruc), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this15.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return EmpresaService;
    }();

    EmpresaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_6__["ExceptionService"]
      }];
    };

    EmpresaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], EmpresaService);
    /***/
  },

  /***/
  "./src/app/_service/exception.service.ts": function srcApp_serviceExceptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExceptionService", function () {
      return ExceptionService;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var ExceptionService = /*#__PURE__*/function () {
      function ExceptionService(router) {
        _classCallCheck(this, ExceptionService);

        this.router = router;
      }

      _createClass(ExceptionService, [{
        key: "catchValidation",
        value: function catchValidation(e) {
          if (e.status == 400) {
            var errores = "<ul>";
            e.error.forEach(function (element) {
              errores += "<li>".concat(element.detalles, "</li>");
            });
            errores += '</ul>';
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Ocurrio un error',
              html: errores,
              icon: 'error'
            });
          }

          if (e.status == 500) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Ocurrio un error", "Error en el sistema, por favor comuniquese con informatica", "error");
          }

          if (e.status == 401) {
            this.router.navigate(['/login']);
          }

          if (e.status == 403) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Acceso denegado", "Usted no tiene acceso a este recurso!", "error");
          }
        }
      }]);

      return ExceptionService;
    }();

    ExceptionService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ExceptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExceptionService);
    /***/
  },

  /***/
  "./src/app/_service/geocode.service.ts": function srcApp_serviceGeocodeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocodeService", function () {
      return GeocodeService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var GeocodeService = /*#__PURE__*/function () {
      function GeocodeService(http) {
        _classCallCheck(this, GeocodeService);

        this.http = http;
        this.url = "https://maps.googleapis.com/maps/api/geocode/json?key=".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_KEY);
      }

      _createClass(GeocodeService, [{
        key: "getCoordenadas",
        value: function getCoordenadas(address) {
          return this.http.get("".concat(this.url, "&address=").concat(address));
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          return this.http.get("".concat(this.url, "&latlng=").concat(lat, ",").concat(lng));
        }
      }]);

      return GeocodeService;
    }();

    GeocodeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    GeocodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], GeocodeService);
    /***/
  },

  /***/
  "./src/app/_service/grupo-tierra.service.ts": function srcApp_serviceGrupoTierraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrupoTierraService", function () {
      return GrupoTierraService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GrupoTierraService = /*#__PURE__*/function () {
      function GrupoTierraService(http, authService, exception) {
        _classCallCheck(this, GrupoTierraService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/grupotierras");
      }

      _createClass(GrupoTierraService, [{
        key: "listar",
        value: function listar() {
          var _this16 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this16.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return GrupoTierraService;
    }();

    GrupoTierraService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    GrupoTierraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], GrupoTierraService);
    /***/
  },

  /***/
  "./src/app/_service/impuesto-detail.service.ts": function srcApp_serviceImpuestoDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpuestoDetailService", function () {
      return ImpuestoDetailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ImpuestoDetailService = /*#__PURE__*/function () {
      function ImpuestoDetailService(http, authService, exception) {
        _classCallCheck(this, ImpuestoDetailService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].HOST, "/impuestos");
        this.impuestosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ImpuestoDetailService, [{
        key: "listarPorId",
        value: function listarPorId(id) {
          var _this17 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this17.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
          }));
        }
      }, {
        key: "getByPredioId",
        value: function getByPredioId(id) {
          var _this18 = this;

          return this.http.get("".concat(this.url, "/predio/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this18.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPorPropietarioId",
        value: function listarPorPropietarioId(id) {
          var _this19 = this;

          return this.http.get("".concat(this.url, "/propietarios/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this19.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(e);
          }));
        }
      }]);

      return ImpuestoDetailService;
    }();

    ImpuestoDetailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ImpuestoDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], ImpuestoDetailService);
    /***/
  },

  /***/
  "./src/app/_service/ingreso.service.ts": function srcApp_serviceIngresoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresoService", function () {
      return IngresoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IngresoService = /*#__PURE__*/function () {
      function IngresoService(http, exception, authService) {
        _classCallCheck(this, IngresoService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/ingresos");
        this.ingresosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(IngresoService, [{
        key: "listarPorFechas",
        value: function listarPorFechas(from, to) {
          var _this20 = this;

          return this.http.get("".concat(this.url, "?from=").concat(from, "&to=").concat(to), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this20.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPageable",
        value: function listarPageable(page, size, from, to, propietarioName) {
          var _this21 = this;

          var route = "";

          if (from && to) {
            route += "&from=".concat(from, "&to=").concat(to);
          }

          if (propietarioName) {
            route += "&propietarioName=".concat(propietarioName);
          }

          return this.http.get("".concat(this.url, "/pageable?page=").concat(page, "&size=").concat(size).concat(route), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this21.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }]);

      return IngresoService;
    }();

    IngresoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_5__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    IngresoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
      providedIn: 'root'
    })], IngresoService);
    /***/
  },

  /***/
  "./src/app/_service/instalacion.service.ts": function srcApp_serviceInstalacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstalacionService", function () {
      return InstalacionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");

    var InstalacionService = /*#__PURE__*/function () {
      function InstalacionService(http, authService, exception) {
        _classCallCheck(this, InstalacionService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HOST, "/instalaciones-fijas");
      }

      _createClass(InstalacionService, [{
        key: "listar",
        value: function listar() {
          var _this22 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this22.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }]);

      return InstalacionService;
    }();

    InstalacionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_7__["ExceptionService"]
      }];
    };

    InstalacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], InstalacionService);
    /***/
  },

  /***/
  "./src/app/_service/medida.service.ts": function srcApp_serviceMedidaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedidaService", function () {
      return MedidaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MedidaService = /*#__PURE__*/function () {
      function MedidaService(http, authService, exception) {
        _classCallCheck(this, MedidaService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/medidas");
      }

      _createClass(MedidaService, [{
        key: "listar",
        value: function listar() {
          var _this23 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this23.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return MedidaService;
    }();

    MedidaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    MedidaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], MedidaService);
    /***/
  },

  /***/
  "./src/app/_service/periodo.service.ts": function srcApp_servicePeriodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodoService", function () {
      return PeriodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PeriodoService = /*#__PURE__*/function () {
      function PeriodoService(http, exception, authService) {
        _classCallCheck(this, PeriodoService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.periodosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HOST, "/periodos");
      }

      _createClass(PeriodoService, [{
        key: "listar",
        value: function listar() {
          var _this24 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this24.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPageable",
        value: function listarPageable(p, s) {
          var _this25 = this;

          return this.http.get("".concat(this.url, "/pageable?page=").concat(p, "&size=").concat(s), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this25.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPorId",
        value: function listarPorId(id) {
          var _this26 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this26.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }, {
        key: "crear",
        value: function crear(periodo) {
          var _this27 = this;

          return this.http.post(this.url, periodo, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this27.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }, {
        key: "modificar",
        value: function modificar(periodo) {
          var _this28 = this;

          return this.http.put(this.url, periodo, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this28.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }, {
        key: "eliminar",
        value: function eliminar(id) {
          var _this29 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            _this29.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
          }));
        }
      }]);

      return PeriodoService;
    }();

    PeriodoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    PeriodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], PeriodoService);
    /***/
  },

  /***/
  "./src/app/_service/persona.service.ts": function srcApp_servicePersonaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonaService", function () {
      return PersonaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PersonaService = /*#__PURE__*/function () {
      function PersonaService(http, authService, exception) {
        _classCallCheck(this, PersonaService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/personas");
      }

      _createClass(PersonaService, [{
        key: "consultarReniec",
        value: function consultarReniec(dni) {
          var _this30 = this;

          return this.http.get("/dni/".concat(dni), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this30.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "findByTipoAndDocumento",
        value: function findByTipoAndDocumento(tipo, documento) {
          var _this31 = this;

          return this.http.get("".concat(this.url, "/").concat(tipo, "/").concat(documento), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this31.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return PersonaService;
    }();

    PersonaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }];
    };

    PersonaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], PersonaService);
    /***/
  },

  /***/
  "./src/app/_service/porcentaje-depreciacion.service.ts": function srcApp_servicePorcentajeDepreciacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PorcentajeDepreciacionService", function () {
      return PorcentajeDepreciacionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PorcentajeDepreciacionService = /*#__PURE__*/function () {
      function PorcentajeDepreciacionService(http, authService, exception) {
        _classCallCheck(this, PorcentajeDepreciacionService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/depreciaciones");
      }

      _createClass(PorcentajeDepreciacionService, [{
        key: "getPorcentaje",
        value: function getPorcentaje(idClasificacion, antiguedad, material, estado) {
          var _this32 = this;

          var intervalo;

          if (antiguedad <= 5) {
            intervalo = "<=5";
          }

          if (antiguedad > 5 && antiguedad <= 10) {
            intervalo = "<=10 , >5";
          }

          if (antiguedad > 10 && antiguedad <= 15) {
            intervalo = "<=15 , >10";
          }

          if (antiguedad > 15 && antiguedad <= 20) {
            intervalo = "<=20 , >15";
          }

          if (antiguedad > 20 && antiguedad <= 25) {
            intervalo = "<=25 , >20";
          }

          if (antiguedad > 25 && antiguedad <= 30) {
            intervalo = "<=30 , >25";
          }

          if (antiguedad > 30 && antiguedad <= 35) {
            intervalo = "<=35 , >30";
          }

          if (antiguedad > 35 && antiguedad <= 40) {
            intervalo = "<=40 , >35";
          }

          if (antiguedad > 40 && antiguedad <= 45) {
            intervalo = "<=45 , >40";
          }

          if (antiguedad > 45 && antiguedad <= 50) {
            intervalo = "<=50 , >45";
          }

          if (antiguedad > 50) {
            intervalo = ">50";
          }

          return this.http.get("".concat(this.url, "/").concat(idClasificacion, "?intervalo=").concat(intervalo, "&material=").concat(material, "&estado=").concat(estado), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this32.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return PorcentajeDepreciacionService;
    }();

    PorcentajeDepreciacionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    PorcentajeDepreciacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], PorcentajeDepreciacionService);
    /***/
  },

  /***/
  "./src/app/_service/predio.service.ts": function srcApp_servicePredioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredioService", function () {
      return PredioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PredioService = /*#__PURE__*/function () {
      function PredioService(http, exception, authService) {
        _classCallCheck(this, PredioService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.prediosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/predios");
      }

      _createClass(PredioService, [{
        key: "listarPageable",
        value: function listarPageable(page, size, filterBy, filter) {
          var _this33 = this;

          var route = "/pageable?page=".concat(page, "&size=").concat(size);

          if (filterBy) {
            route += "&filterBy=".concat(filterBy, "&filter=").concat(filter);
          }

          return this.http.get("".concat(this.url).concat(route), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this33.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteById",
        value: function deleteById(predioId) {
          var _this34 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(predioId), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this34.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return PredioService;
    }();

    PredioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    PredioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], PredioService);
    /***/
  },

  /***/
  "./src/app/_service/recibo.service.ts": function srcApp_serviceReciboServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReciboService", function () {
      return ReciboService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ReciboService = /*#__PURE__*/function () {
      function ReciboService(http, exception, authService) {
        _classCallCheck(this, ReciboService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/recibos");
      }

      _createClass(ReciboService, [{
        key: "crear",
        value: function crear(recibo) {
          var _this35 = this;

          return this.http.post(this.url, recibo, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this35.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this36 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this36.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteById",
        value: function deleteById(id) {
          var _this37 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this37.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }]);

      return ReciboService;
    }();

    ReciboService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_6__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    ReciboService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], ReciboService);
    /***/
  },

  /***/
  "./src/app/_service/servicio-basico.service.ts": function srcApp_serviceServicioBasicoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicioBasicoService", function () {
      return ServicioBasicoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ServicioBasicoService = /*#__PURE__*/function () {
      function ServicioBasicoService(http, authService, exception) {
        _classCallCheck(this, ServicioBasicoService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/serviciosBasicos");
      }

      _createClass(ServicioBasicoService, [{
        key: "listar",
        value: function listar() {
          var _this38 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this38.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ServicioBasicoService;
    }();

    ServicioBasicoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }];
    };

    ServicioBasicoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], ServicioBasicoService);
    /***/
  },

  /***/
  "./src/app/_service/tasa.service.ts": function srcApp_serviceTasaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasaService", function () {
      return TasaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TasaService = /*#__PURE__*/function () {
      function TasaService(http, exception, authService) {
        _classCallCheck(this, TasaService);

        this.http = http;
        this.exception = exception;
        this.authService = authService;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/tasas");
        this.tasasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(TasaService, [{
        key: "crear",
        value: function crear(tasa) {
          var _this39 = this;

          return this.http.post(this.url, tasa, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this39.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "modificar",
        value: function modificar(tasa) {
          var _this40 = this;

          return this.http.put(this.url, tasa, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this40.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this41 = this;

          return this.http.get("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this41.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "listar",
        value: function listar() {
          var _this42 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this42.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "deleteById",
        value: function deleteById(id) {
          var _this43 = this;

          return this.http["delete"]("".concat(this.url, "/").concat(id), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this43.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPageable",
        value: function listarPageable(page, size) {
          var _this44 = this;

          return this.http.get("".concat(this.url, "/pageable?page=").concat(page, "&size=").concat(size), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this44.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }]);

      return TasaService;
    }();

    TasaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_6__["ExceptionService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    TasaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], TasaService);
    /***/
  },

  /***/
  "./src/app/_service/unit-edificacion.service.ts": function srcApp_serviceUnitEdificacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitEdificacionService", function () {
      return UnitEdificacionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UnitEdificacionService = /*#__PURE__*/function () {
      function UnitEdificacionService(http, authService, exception) {
        _classCallCheck(this, UnitEdificacionService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HOST, "/unitarios");
      }

      _createClass(UnitEdificacionService, [{
        key: "listar",
        value: function listar() {
          var _this45 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this45.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return UnitEdificacionService;
    }();

    UnitEdificacionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    UnitEdificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], UnitEdificacionService);
    /***/
  },

  /***/
  "./src/app/_service/usuario.service.ts": function srcApp_serviceUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(http, authService, router, exception) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.authService = authService;
        this.router = router;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/usuarios");
        this.usuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }

      _createClass(UsuarioService, [{
        key: "listar",
        value: function listar() {
          var _this46 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this46.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(e);
          }));
        }
      }, {
        key: "modificar",
        value: function modificar(usuario) {
          var _this47 = this;

          return this.http.put("".concat(this.url, "/perfil"), usuario, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this47.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(e);
          }));
        }
      }, {
        key: "modificarUsuario",
        value: function modificarUsuario(usuario) {
          var _this48 = this;

          return this.http.put(this.url, usuario, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this48.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(e);
          }));
        }
      }, {
        key: "grabarUsuario",
        value: function grabarUsuario(usuario) {
          var _this49 = this;

          return this.http.post(this.url, usuario, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this49.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(e);
          }));
        }
      }, {
        key: "listarPorUsername",
        value: function listarPorUsername(usuario) {
          var _this50 = this;

          return this.http.get("".concat(this.url, "/").concat(usuario), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this50.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(e);
          }));
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  },

  /***/
  "./src/app/_service/valor-categoria-dto.service.ts": function srcApp_serviceValorCategoriaDtoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorCategoriaDtoService", function () {
      return ValorCategoriaDtoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ValorCategoriaDtoService = /*#__PURE__*/function () {
      function ValorCategoriaDtoService(http, authService, exception) {
        _classCallCheck(this, ValorCategoriaDtoService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/valorescategoria");
      }

      _createClass(ValorCategoriaDtoService, [{
        key: "listarValores",
        value: function listarValores(categoria, idPeriodo) {
          var _this51 = this;

          return this.http.get("".concat(this.url, "/").concat(categoria, "/").concat(idPeriodo), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this51.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ValorCategoriaDtoService;
    }();

    ValorCategoriaDtoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ValorCategoriaDtoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], ValorCategoriaDtoService);
    /***/
  },

  /***/
  "./src/app/_service/valor-terreno-cp.service.ts": function srcApp_serviceValorTerrenoCpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoCpService", function () {
      return ValorTerrenoCpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ValorTerrenoCpService = /*#__PURE__*/function () {
      function ValorTerrenoCpService(http, authService, exception) {
        _classCallCheck(this, ValorTerrenoCpService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/valorterrenocp");
      }

      _createClass(ValorTerrenoCpService, [{
        key: "listar",
        value: function listar(anio) {
          var _this52 = this;

          return this.http.get("".concat(this.url, "/periodo/").concat(anio), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this52.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "grabar",
        value: function grabar(valoresTerrenoCP) {
          var _this53 = this;

          return this.http.post(this.url, valoresTerrenoCP, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this53.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ValorTerrenoCpService;
    }();

    ValorTerrenoCpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ValorTerrenoCpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], ValorTerrenoCpService);
    /***/
  },

  /***/
  "./src/app/_service/valor-terreno-rustico.service.ts": function srcApp_serviceValorTerrenoRusticoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoRusticoService", function () {
      return ValorTerrenoRusticoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ValorTerrenoRusticoService = /*#__PURE__*/function () {
      function ValorTerrenoRusticoService(http, authService, exception) {
        _classCallCheck(this, ValorTerrenoRusticoService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].HOST, "/valoresrustico");
      }

      _createClass(ValorTerrenoRusticoService, [{
        key: "listar",
        value: function listar(anio) {
          var _this54 = this;

          return this.http.get("".concat(this.url, "/periodo/").concat(anio), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this54.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "grabar",
        value: function grabar(valoresTerrenoRustico) {
          var _this55 = this;

          return this.http.post(this.url, valoresTerrenoRustico, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
            _this55.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ValorTerrenoRusticoService;
    }();

    ValorTerrenoRusticoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionService"]
      }];
    };

    ValorTerrenoRusticoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], ValorTerrenoRusticoService);
    /***/
  },

  /***/
  "./src/app/_service/valor-terreno-urbano.service.ts": function srcApp_serviceValorTerrenoUrbanoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorTerrenoUrbanoService", function () {
      return ValorTerrenoUrbanoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ValorTerrenoUrbanoService = /*#__PURE__*/function () {
      function ValorTerrenoUrbanoService(http, authService, exception) {
        _classCallCheck(this, ValorTerrenoUrbanoService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/valores-urbanos");
      }

      _createClass(ValorTerrenoUrbanoService, [{
        key: "listar",
        value: function listar(periodoId) {
          var _this56 = this;

          return this.http.get("".concat(this.url, "/periodo/").concat(periodoId), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this56.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "grabar",
        value: function grabar(valoresTerrenoUrbano) {
          var _this57 = this;

          return this.http.post(this.url, valoresTerrenoUrbano, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this57.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ValorTerrenoUrbanoService;
    }();

    ValorTerrenoUrbanoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ValorTerrenoUrbanoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], ValorTerrenoUrbanoService);
    /***/
  },

  /***/
  "./src/app/_service/valor-unit-edificacion.service.ts": function srcApp_serviceValorUnitEdificacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValorUnitEdificacionService", function () {
      return ValorUnitEdificacionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ValorUnitEdificacionService = /*#__PURE__*/function () {
      function ValorUnitEdificacionService(http, authService, exception) {
        _classCallCheck(this, ValorUnitEdificacionService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].HOST, "/valoresedificacion");
      }

      _createClass(ValorUnitEdificacionService, [{
        key: "listar",
        value: function listar(anio) {
          var _this58 = this;

          return this.http.get("".concat(this.url, "/periodo/").concat(anio), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this58.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "grabar",
        value: function grabar(valoresUnitEdificacion) {
          var _this59 = this;

          return this.http.post(this.url, valoresUnitEdificacion, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this59.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ValorUnitEdificacionService;
    }();

    ValorUnitEdificacionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ValorUnitEdificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
      providedIn: 'root'
    })], ValorUnitEdificacionService);
    /***/
  },

  /***/
  "./src/app/_service/via.service.ts": function srcApp_serviceViaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViaService", function () {
      return ViaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exception.service */
    "./src/app/_service/exception.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ViaService = /*#__PURE__*/function () {
      function ViaService(http, authService, exception) {
        _classCallCheck(this, ViaService);

        this.http = http;
        this.authService = authService;
        this.exception = exception;
        this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].HOST, "/vias");
      }

      _createClass(ViaService, [{
        key: "listar",
        value: function listar() {
          var _this60 = this;

          return this.http.get(this.url, {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this60.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }, {
        key: "listarVias",
        value: function listarVias() {
          var _this61 = this;

          return this.http.get("".concat(this.url, "/unique"), {
            headers: this.authService.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            _this61.exception.catchValidation(e);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(e);
          }));
        }
      }]);

      return ViaService;
    }();

    ViaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]
      }];
    };

    ViaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: 'root'
    })], ViaService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _pages_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/usuario/usuario/usuario.component */
    "./src/app/pages/usuario/usuario/usuario.component.ts");
    /* harmony import */


    var _pages_usuario_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/usuario/perfil/perfil.component */
    "./src/app/pages/usuario/perfil/perfil.component.ts");
    /* harmony import */


    var _pages_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/usuario/login/login.component */
    "./src/app/pages/usuario/login/login.component.ts");
    /* harmony import */


    var _pages_pago_pago_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/pago/pago.component */
    "./src/app/pages/pago/pago.component.ts");
    /* harmony import */


    var _pages_procedimiento_procedimiento_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/procedimiento/procedimiento.component */
    "./src/app/pages/procedimiento/procedimiento.component.ts");
    /* harmony import */


    var _pages_mantenimiento_urbano_urbano_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/mantenimiento/urbano/urbano.component */
    "./src/app/pages/mantenimiento/urbano/urbano.component.ts");
    /* harmony import */


    var _pages_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/reportes/reportes.component */
    "./src/app/pages/reportes/reportes.component.ts");
    /* harmony import */


    var _pages_predio_predio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/predio/predio.component */
    "./src/app/pages/predio/predio.component.ts");
    /* harmony import */


    var _pages_mantenimiento_rustico_rustico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/mantenimiento/rustico/rustico.component */
    "./src/app/pages/mantenimiento/rustico/rustico.component.ts");
    /* harmony import */


    var _pages_mantenimiento_cpu_cpu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/mantenimiento/cpu/cpu.component */
    "./src/app/pages/mantenimiento/cpu/cpu.component.ts");
    /* harmony import */


    var _pages_mantenimiento_mantenimiento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/mantenimiento/mantenimiento.component */
    "./src/app/pages/mantenimiento/mantenimiento.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/periodo/periodo.component */
    "./src/app/pages/periodo/periodo.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'periodo',
      component: _pages_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_13__["PeriodoComponent"]
    }, {
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    }, {
      path: 'mantenimiento',
      component: _pages_mantenimiento_mantenimiento_component__WEBPACK_IMPORTED_MODULE_11__["MantenimientoComponent"]
    }, {
      path: 'mantenimiento/cpu',
      component: _pages_mantenimiento_cpu_cpu_component__WEBPACK_IMPORTED_MODULE_10__["CpuComponent"]
    }, {
      path: 'mantenimiento/rustico',
      component: _pages_mantenimiento_rustico_rustico_component__WEBPACK_IMPORTED_MODULE_9__["RusticoComponent"]
    }, {
      path: 'mantenimiento/urbano',
      component: _pages_mantenimiento_urbano_urbano_component__WEBPACK_IMPORTED_MODULE_6__["UrbanoComponent"]
    }, {
      path: 'predio',
      component: _pages_predio_predio_component__WEBPACK_IMPORTED_MODULE_8__["PredioComponent"]
    }, {
      path: 'procedimiento',
      component: _pages_procedimiento_procedimiento_component__WEBPACK_IMPORTED_MODULE_5__["ProcedimientoComponent"]
    }, {
      path: 'pago',
      component: _pages_pago_pago_component__WEBPACK_IMPORTED_MODULE_4__["PagoComponent"]
    }, // { path: 'predio/urbano', component: PredioUrbanoComponent },
    // { path: 'predio/cpu', component: PredioCpuComponent },
    // { path: 'predio/rustico', component: PredioRusticoComponent },
    {
      path: 'reportes',
      component: _pages_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_7__["ReportesComponent"]
    }, {
      path: 'login',
      component: _pages_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'perfil',
      component: _pages_usuario_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"]
    }, {
      path: 'usuarios',
      component: _pages_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_1__["UsuarioComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 calc(14px * .83)/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 calc(14px * .67)/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transform:scale(0)}@media (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}@media (-ms-high-contrast:active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content._mat-animation-noopable,.ng-animate-disabled .mat-badge-content{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:rgba(0,0,0,.54)}@media (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox .mat-ripple-element{background-color:#000}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip::after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background:rgba(255,255,255,.1)}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]),.mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]),.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list-base .mat-list-item{color:rgba(0,0,0,.87)}.mat-list-base .mat-list-option{color:rgba(0,0,0,.87)}.mat-list-base .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-action-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon-no-color,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}@media (hover:none){.mat-step-header:hover{background:0 0}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.54)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.54);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-horizontal-stepper-header::after,.mat-horizontal-stepper-header::before,.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-header-pagination,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-header-pagination,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-header-pagination,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}/*\n  https://github.com/webpack-contrib/sass-loader/issues/530\n * Actual Sticky Footer Styles\n */.all-wrap {\n  min-height: 100vh;\n}.page-wrap {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}.content {\n  flex: 1;\n}/*\n * Make the Component injected by Router Outlet full height:\n */main {\n  display: flex;\n  flex-direction: column;\n}main > *:not(router-outlet) {\n  flex: 1;\n  display: block;\n}.spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwic3JjL2FwcC9EOlxcUHJvamVjdHNcXEFybm9sZCBOb3JhYnVlbmFcXG5vZGUtcHJvamVjdHNcXGltcHVlc3RvLXByZWRpYWwtZnJvbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixlQUFlLENBQUMsY0FBYyxDQUFDLDhDQUE4QyxDQUFDLG9DQUFvQyxhQUFhLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyx5Q0FBeUMscURBQXFELENBQUMsZUFBZSxDQUFDLHNDQUFzQyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHFEQUFxRCxDQUFDLGVBQWUsQ0FBQyw2Q0FBNkMscURBQXFELENBQUMsZUFBZSxDQUFDLDJCQUEyQixpRUFBaUUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLGlFQUFpRSxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIscURBQXFELENBQUMsc0NBQXNDLHFEQUFxRCxDQUFDLDRDQUE0QyxlQUFlLENBQUMsd0JBQXdCLHFEQUFxRCxDQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsOENBQThDLHFEQUFxRCxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMscURBQXFELENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLDhDQUE4QyxxREFBcUQsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLHFEQUFxRCxDQUFDLDRHQUE0Ryw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG1CQUFtQiw4Q0FBOEMsQ0FBQyxVQUFVLDhDQUE4QyxDQUFDLGdCQUFnQixjQUFjLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxjQUFjLENBQUMscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxVQUFVLGNBQWMsQ0FBQyxlQUFlLENBQUMsK0VBQStFLGNBQWMsQ0FBQyxXQUFXLDhDQUE4QyxDQUFDLGlCQUFpQixjQUFjLENBQUMsZUFBZSxDQUFDLDJCQUEyQixjQUFjLENBQUMsY0FBYyw4Q0FBOEMsQ0FBQyxtQkFBbUIsY0FBYyxDQUFDLHFEQUFxRCxjQUFjLENBQUMsZUFBZSxDQUFDLDhCQUE4QixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQixxREFBcUQsQ0FBQyw0QkFBNEIsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIscURBQXFELENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyw4Q0FBOEMsQ0FBQyx3QkFBd0Isd0JBQXdCLENBQUMsa0VBQWtFLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxnRkFBZ0YsWUFBWSxDQUFDLFdBQVcsQ0FBQyxvR0FBb0csY0FBYyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixjQUFjLENBQUMscUNBQXFDLENBQUMsa0xBQWtMLDJDQUEyQyxDQUFDLGdCQUFnQixDQUFDLHlIQUF5SCwyQ0FBMkMsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsYUFBYSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixhQUFhLENBQUMsMEJBQTBCLGdCQUFnQixDQUFDLGtDQUFrQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsMERBQTBELHFCQUFxQixDQUFDLHdEQUF3RCxpQkFBaUIsQ0FBQyxvUEFBb1AsaUZBQWlGLENBQUMsK0NBQStDLENBQUMsZ0JBQWdCLENBQUMsaUtBQWlLLG1GQUFtRixDQUFDLCtDQUErQyxDQUFDLGdCQUFnQixDQUFDLDBKQUEwSixtRkFBbUYsQ0FBQywrQ0FBK0MsQ0FBQyxnQkFBZ0IsQ0FBQyx3REFBd0QsYUFBYSxDQUFDLDREQUE0RCxhQUFhLENBQUMsb0VBQW9FLG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLGFBQWEsb1BBQW9QLDJDQUEyQyxDQUFDLGlLQUFpSywyQ0FBMkMsQ0FBQywwSkFBMEosMENBQTBDLENBQUMsQ0FBQyxzREFBc0QsdUJBQXVCLENBQUMsc0RBQXNELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxnUEFBZ1AsMENBQTBDLENBQUMsZ0JBQWdCLENBQUMsd0pBQXdKLDBDQUEwQyxDQUFDLGdCQUFnQixDQUFDLHlEQUF5RCxtQkFBbUIsQ0FBQyx5REFBeUQsYUFBYSxDQUFDLGlCQUFpQixDQUFDLHNQQUFzUCwyQ0FBMkMsQ0FBQyxnQkFBZ0IsQ0FBQywySkFBMkosMkNBQTJDLENBQUMsZ0JBQWdCLENBQUMsNENBQTRDLGNBQWMsQ0FBQyxnRUFBZ0Usa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyw4RkFBOEYsY0FBYyxDQUFDLHdCQUF3QixtQkFBbUIsQ0FBQyxlQUFlLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsNERBQTRELDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsOENBQThDLENBQUMsWUFBWSw4Q0FBOEMsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLDBCQUEwQiw4Q0FBOEMsQ0FBQyw2QkFBNkIsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw4Q0FBOEMsOENBQThDLENBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxzQkFBc0IsY0FBYyxDQUFDLHlCQUF5QixjQUFjLENBQUMsZUFBZSxDQUFDLGVBQWUsOENBQThDLENBQUMsNkJBQTZCLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsNkdBQTZHLHFEQUFxRCxDQUFDLFFBQVEsQ0FBQyxhQUFhLDhDQUE4QyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLGNBQWMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsZUFBZSw4Q0FBOEMsQ0FBQyxpQkFBaUIsOENBQThDLENBQUMsOEJBQThCLGNBQWMsQ0FBQyx3Q0FBd0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyx1REFBdUQsY0FBYyxDQUFDLGdDQUFnQyxjQUFjLENBQUMsMENBQTBDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMseURBQXlELGNBQWMsQ0FBQyw4QkFBOEIsOENBQThDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLCtDQUErQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhEQUE4RCxjQUFjLENBQUMsdUNBQXVDLGNBQWMsQ0FBQyxpREFBaUQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxnRUFBZ0UsY0FBYyxDQUFDLHFDQUFxQyw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFlBQVksOENBQThDLENBQUMsY0FBYyxDQUFDLG9CQUFvQixxREFBcUQsQ0FBQyxxQkFBcUIsOENBQThDLENBQUMsY0FBYyxDQUFDLDRCQUE0QixhQUFhLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsOENBQThDLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUNBQWlDLGdCQUFnQixDQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxzREFBc0QsQ0FBQyxrQkFBa0IsQ0FBQyxrQ0FBa0Msb0JBQW9CLFlBQVksQ0FBQyxDQUFDLHFCQUFxQixRQUFRLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsbURBQW1ELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsY0FBYyxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLDRCQUE0QixZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsaURBQWlELENBQUMsU0FBUyxDQUFDLG1EQUFtRCxTQUFTLENBQUMsNkNBQTZDLG1EQUFtRCxVQUFVLENBQUMsQ0FBQywyQkFBMkIsMEJBQTBCLENBQUMsaUdBQWlHLFNBQVMsQ0FBQyw2Q0FBNkMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLHdCQUF3QixjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGlEQUF5QyxJQUFJLENBQUMsQ0FBOUMseUNBQXlDLElBQUksQ0FBQyxDQUFDLCtDQUF1QyxJQUFJLENBQUMsQ0FBNUMsdUNBQXVDLElBQUksQ0FBQyxDQUFDLG9EQUFvRCxvREFBMkMsQ0FBM0MsNENBQTRDLENBQUMsMERBQTBELGtEQUF5QyxDQUF6QywwQ0FBMEMsQ0FBQywrQkFBK0IsV0FBVyxDQUFDLHlDQUF5QyxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxvQkFBb0IsK0JBQStCLENBQUMsWUFBWSxxQkFBcUIsQ0FBQyx3RkFBd0YsMEJBQTBCLENBQUMsNkVBQTZFLDBCQUEwQixDQUFDLHVCQUF1QiwwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQywrREFBK0QsYUFBYSxDQUFDLDZEQUE2RCxhQUFhLENBQUMsb0JBQW9CLHFCQUFxQixDQUFDLDJDQUEyQyxxQkFBcUIsQ0FBQyxxQkFBcUIscUJBQXFCLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyw4QkFBOEIsYUFBYSxDQUFDLDBGQUEwRixrQkFBa0IsQ0FBQyx3SkFBd0osa0JBQWtCLENBQUMsb0ZBQW9GLGtCQUFrQixDQUFDLDBIQUEwSCxrQkFBa0IsQ0FBQyxrQkFBa0IsaUZBQWlGLENBQUMsa0JBQWtCLGdHQUFnRyxDQUFDLGtCQUFrQixnR0FBZ0csQ0FBQyxrQkFBa0IsZ0dBQWdHLENBQUMsa0JBQWtCLGlHQUFpRyxDQUFDLGtCQUFrQixpR0FBaUcsQ0FBQyxrQkFBa0Isa0dBQWtHLENBQUMsa0JBQWtCLHNHQUFzRyxDQUFDLGtCQUFrQixzR0FBc0csQ0FBQyxrQkFBa0Isc0dBQXNHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHdHQUF3RyxDQUFDLG1CQUFtQix3R0FBd0csQ0FBQyxtQkFBbUIsd0dBQXdHLENBQUMsbUJBQW1CLHdHQUF3RyxDQUFDLG1CQUFtQix5R0FBeUcsQ0FBQyxtQkFBbUIseUdBQXlHLENBQUMsbUJBQW1CLHlHQUF5RyxDQUFDLG1CQUFtQix5R0FBeUcsQ0FBQyxtQkFBbUIseUdBQXlHLENBQUMsb0JBQW9CLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixZQUFZLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxzREFBc0QsaUdBQWlHLENBQUMsOEVBQThFLGVBQWUsQ0FBQyx3R0FBd0cscUJBQXFCLENBQUMsbUJBQW1CLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxrQ0FBa0MsbUJBQW1CLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLHFDQUFxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLGlCQUFpQixDQUFDLHFDQUFxQyxZQUFZLENBQUMsdUNBQXVDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsbUZBQW1GLGVBQWUsQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxRQUFRLENBQUMsb0RBQW9ELFdBQVcsQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFNBQVMsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsVUFBVSxDQUFDLGdGQUFnRixVQUFVLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLHFEQUFxRCxTQUFTLENBQUMscURBQXFELFlBQVksQ0FBQyxzREFBc0QsVUFBVSxDQUFDLGdFQUFnRSxTQUFTLENBQUMsV0FBVyxDQUFDLHFEQUFxRCxXQUFXLENBQUMsK0RBQStELFVBQVUsQ0FBQyxVQUFVLENBQUMsd0VBQXdFLFVBQVUsQ0FBQyxrRkFBa0YsU0FBUyxDQUFDLFdBQVcsQ0FBQyx1RUFBdUUsV0FBVyxDQUFDLGlGQUFpRixVQUFVLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxTQUFTLENBQUMsb0RBQW9ELFlBQVksQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxXQUFXLENBQUMsOERBQThELFVBQVUsQ0FBQyxVQUFVLENBQUMsdUVBQXVFLFVBQVUsQ0FBQyxpRkFBaUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxzRUFBc0UsV0FBVyxDQUFDLGdGQUFnRixVQUFVLENBQUMsVUFBVSxDQUFDLDRCQUE0Qix3R0FBd0csQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsaURBQWlELGFBQWEsQ0FBQyxjQUFjLENBQUMscUZBQXFGLGFBQWEsQ0FBQyxrRkFBa0YsYUFBYSxDQUFDLDRFQUE0RSxhQUFhLENBQUMsMGJBQTBiLHFCQUFxQixDQUFDLG1LQUFtSyx3QkFBd0IsQ0FBQyxnS0FBZ0ssd0JBQXdCLENBQUMsMEpBQTBKLHdCQUF3QixDQUFDLDZKQUE2Siw0QkFBNEIsQ0FBQyw2R0FBNkcsVUFBVSxDQUFDLDZCQUE2QixDQUFDLDBCQUEwQixlQUFlLENBQUMsb0NBQW9DLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQywyR0FBMkcsVUFBVSxDQUFDLHVHQUF1RyxVQUFVLENBQUMsK0ZBQStGLFVBQVUsQ0FBQyxvakJBQW9qQixxQkFBcUIsQ0FBQywyR0FBMkcsd0JBQXdCLENBQUMsdUdBQXVHLHdCQUF3QixDQUFDLCtGQUErRix3QkFBd0IsQ0FBQyxvakJBQW9qQixnQ0FBZ0MsQ0FBQywyTEFBMkwscUNBQXFDLENBQUMsdUxBQXVMLHFDQUFxQyxDQUFDLCtLQUErSyxxQ0FBcUMsQ0FBQyxpR0FBaUcsaUZBQWlGLENBQUMsaURBQWlELGdHQUFnRyxDQUFDLHdFQUF3RSxzR0FBc0csQ0FBQywyREFBMkQsaUZBQWlGLENBQUMsbUZBQW1GLGtHQUFrRyxDQUFDLGlJQUFpSSx1R0FBdUcsQ0FBQyx1R0FBdUcsaUZBQWlGLENBQUMsdURBQXVELGdHQUFnRyxDQUFDLGlIQUFpSCxlQUFlLENBQUMsbUJBQW1CLHFCQUFxQixDQUFDLG9EQUFvRCxnQ0FBZ0MsQ0FBQyx1Q0FBdUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLHdFQUF3RSxxQkFBcUIsQ0FBQyxtRkFBbUYscUNBQXFDLENBQUMsNkZBQTZGLGdCQUFnQixDQUFDLHNDQUFzQyxDQUFDLDhHQUE4RyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQywyQkFBMkIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsaUVBQWlFLHFCQUFxQixDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxrRUFBa0UsZUFBZSxDQUFDLHNEQUFzRCx3QkFBd0IsQ0FBQyxpSEFBaUgsZ0NBQWdDLENBQUMsVUFBVSxlQUFlLENBQUMscUJBQXFCLENBQUMsd0NBQXdDLGdHQUFnRyxDQUFDLHNEQUFzRCxpRkFBaUYsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0JBQW9CLDRCQUE0QixDQUFDLHdCQUF3QixZQUFZLENBQUMsNkJBQTZCLHdCQUF3QixDQUFDLDBDQUEwQyw2QkFBNkIscUJBQXFCLENBQUMsQ0FBQyx3QkFBd0Isd0JBQXdCLENBQUMsNEhBQTRILHdCQUF3QixDQUFDLDBIQUEwSCx3QkFBd0IsQ0FBQyxzSEFBc0gsd0JBQXdCLENBQUMsZ0pBQWdKLHdCQUF3QixDQUFDLHNFQUFzRSxvQkFBb0IsQ0FBQywyQ0FBMkMscUJBQXFCLENBQUMsa0NBQWtDLHVCQUF1QixVQUFVLENBQUMsQ0FBQyxrQ0FBa0MseUJBQXlCLGNBQWMsQ0FBQyxDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyxtS0FBbUssa0JBQWtCLENBQUMsaUtBQWlLLGtCQUFrQixDQUFDLDZKQUE2SixrQkFBa0IsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQywyREFBMkQsZ0dBQWdHLENBQUMsMkVBQTJFLFdBQVcsQ0FBQyw4Q0FBOEMsVUFBVSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsMERBQTBELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywyRUFBMkUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUsK0JBQStCLENBQUMsdURBQXVELHdCQUF3QixDQUFDLFVBQVUsQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLFVBQVUsQ0FBQywyRUFBMkUsK0JBQStCLENBQUMseURBQXlELHdCQUF3QixDQUFDLFVBQVUsQ0FBQywwRUFBMEUsVUFBVSxDQUFDLFVBQVUsQ0FBQyw2RUFBNkUsK0JBQStCLENBQUMsV0FBVyxlQUFlLENBQUMsdUpBQXVKLGtCQUFrQixDQUFDLHdGQUF3RixtQ0FBbUMsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLG9CQUFvQixnQ0FBZ0MsQ0FBQywrSEFBK0gscUJBQXFCLENBQUMsMkJBQTJCLHFCQUFxQixDQUFDLDBDQUEwQywwQkFBMEIsQ0FBQyx5QkFBeUIscUJBQXFCLENBQUMsZ0NBQWdDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLDZGQUE2RixxQkFBcUIsQ0FBQyxpV0FBaVcsZ0NBQWdDLENBQUMsMERBQTBELDRCQUE0QixDQUFDLHNGQUFzRiw0QkFBNEIsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxtQ0FBbUMsQ0FBQyxvREFBb0QsK0JBQStCLENBQUMsd0JBQXdCLGlHQUFpRyxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLCtEQUErRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsMkZBQTJGLG9DQUFvQyxDQUFDLHVGQUF1RiwrQkFBK0IsQ0FBQyw2REFBNkQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQyxxRkFBcUYsK0JBQStCLENBQUMsOEJBQThCLGlGQUFpRixDQUFDLDhCQUE4QixhQUFhLENBQUMseUNBQXlDLGFBQWEsQ0FBQyx1Q0FBdUMsYUFBYSxDQUFDLHNCQUFzQix5R0FBeUcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxnQ0FBZ0MsQ0FBQyxzQkFBc0Isa0NBQWtDLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxtREFBbUQsZ0dBQWdHLENBQUMsZ0JBQWdCLGdDQUFnQyxDQUFDLG1TQUFtUywwQkFBMEIsQ0FBQyxvQkFBb0Isb0dBQW9HLGVBQWUsQ0FBQyxDQUFDLGtDQUFrQyxxQkFBcUIsQ0FBQyx3RUFBd0UscUJBQXFCLENBQUMsZ0RBQWdELHFCQUFxQixDQUFDLDBLQUEwSyxhQUFhLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLFVBQVUsb0JBQW9CLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw2REFBNkQsYUFBYSxDQUFDLDJEQUEyRCxhQUFhLENBQUMsNkNBQTZDLGFBQWEsQ0FBQyx1QkFBdUIsZ0NBQWdDLENBQUMsbURBQW1ELHdCQUF3QixDQUFDLDhEQUE4RCx3QkFBd0IsQ0FBQyw0REFBNEQsd0JBQXdCLENBQUMsNkdBQTZHLGFBQWEsQ0FBQyx3SEFBd0gsYUFBYSxDQUFDLHNIQUFzSCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQyxxS0FBcUssYUFBYSxDQUFDLHVJQUF1SSx3QkFBd0IsQ0FBQyxXQUFXLGFBQWEsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsNENBQTRDLHFCQUFxQixDQUFDLDREQUE0RCxnQ0FBZ0MsQ0FBQyxvRkFBb0YsOEZBQThGLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsOERBQThELGdDQUFnQyxDQUFDLHNGQUFzRiw4RkFBOEYsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyxxREFBcUQsZ0NBQWdDLENBQUMsNkVBQTZFLGdDQUFnQyxDQUFDLGtFQUFrRSxnQ0FBZ0MsQ0FBQyw4RUFBOEUscUJBQXFCLENBQUMsMEZBQTBGLDRCQUE0QixDQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxpRUFBaUUscUJBQXFCLENBQUMsNkVBQTZFLGFBQWEsQ0FBQyx3RkFBd0YsYUFBYSxDQUFDLHNGQUFzRixhQUFhLENBQUMsK0dBQStHLGFBQWEsQ0FBQyxpRkFBaUYscUJBQXFCLENBQUMsbUZBQW1GLHFCQUFxQixDQUFDLHNCQUFzQixhQUFhLENBQUMscUJBQXFCLGFBQWEsQ0FBQyxtQkFBbUIsYUFBYSxDQUFDLG9FQUFvRSxxQkFBcUIsQ0FBQyx3SEFBd0gscUJBQXFCLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDLDhDQUFnQyxxQkFBcUIsQ0FBckQscUNBQWdDLHFCQUFxQixDQUFyRCwwQ0FBZ0MscUJBQXFCLENBQXJELGdDQUFnQyxxQkFBcUIsQ0FBQyxxQ0FBcUMscUJBQXFCLENBQUMsOENBQThDLHFCQUFxQixDQUFDLHlDQUF5QyxxQkFBcUIsQ0FBQywrQkFBK0IsbUJBQW1CLENBQUMsd0VBQXdFLG1CQUFtQixDQUFDLDJGQUEyRixhQUFhLENBQUMsOEJBQThCLHFCQUFxQixDQUFDLGdDQUFnQyxxQkFBcUIsQ0FBQyw4QkFBOEIscUJBQXFCLENBQUMsd0JBQXdCLHFCQUFxQixDQUFDLGdNQUFnTSwwQkFBMEIsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLDhDQUE4QyxpR0FBaUcsQ0FBQyxlQUFlLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyx5REFBeUQscUJBQXFCLENBQUMsd0VBQXdFLHFCQUFxQixDQUFDLHVMQUF1TCwwQkFBMEIsQ0FBQyxlQUFlLGVBQWUsQ0FBQyw0REFBNEQscUJBQXFCLENBQUMsa0RBQWtELG9DQUFvQyxDQUFDLHNDQUFzQyxDQUFDLHlDQUF5QyxvQ0FBb0MsQ0FBQyx1TUFBdU0sNEJBQTRCLENBQUMsNkJBQTZCLFlBQVksQ0FBQyx5QkFBeUIsd0JBQXdCLENBQUMsOEJBQThCLHdCQUF3QixDQUFDLDBEQUEwRCxZQUFZLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLDJEQUEyRCx3QkFBd0IsQ0FBQyx3REFBd0QsWUFBWSxDQUFDLG9EQUFvRCx3QkFBd0IsQ0FBQyx5REFBeUQsd0JBQXdCLENBQUMsaURBQWlELGNBQWMsQ0FBQyx1RUFBdUUsY0FBYyxDQUFDLG1FQUFtRSxjQUFjLENBQUMsd0JBQXdCLDRCQUE0QixDQUFDLHdFQUF3RSxvQkFBb0IsQ0FBQywyU0FBMlMsd0JBQXdCLENBQUMsdUVBQXVFLG9CQUFvQixDQUFDLHVTQUF1Uyx3QkFBd0IsQ0FBQyxxRUFBcUUsb0JBQW9CLENBQUMsK1JBQStSLHdCQUF3QixDQUFDLDRJQUE0SSw0QkFBNEIsQ0FBQyx3SUFBd0ksZ0NBQWdDLENBQUMsOERBQThELHFCQUFxQixDQUFDLHNDQUFzQyxxQkFBcUIsQ0FBQyxrQkFBa0IscUJBQXFCLENBQUMsd0JBQXdCLHFCQUFxQixDQUFDLHVDQUF1QyxxQkFBcUIsQ0FBQyxrQkFBa0IscUJBQXFCLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxnREFBZ0QsaUdBQWlHLENBQUMscUVBQXFFLDBCQUEwQixDQUFDLDBEQUEwRCxhQUFhLENBQUMseURBQXlELGFBQWEsQ0FBQyx1REFBdUQsYUFBYSxDQUFDLGlFQUFpRSxhQUFhLENBQUMsa0VBQWtFLHFCQUFxQixDQUFDLHNCQUFzQix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyxrQ0FBa0Msd0dBQXdHLENBQUMsaUJBQWlCLHNDQUFzQyxDQUFDLGdDQUFnQyxxQ0FBcUMsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIscUNBQXFDLENBQUMsaUJBQWlCLENBQUMsMENBQTBDLGdCQUFnQixDQUFDLHNDQUFzQyxDQUFDLHNDQUFzQywrQkFBK0IsQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsb0RBQW9ELHFDQUFxQyxDQUFDLGtEQUFrRCx3QkFBd0IsQ0FBQyxrRUFBa0Usd0JBQXdCLENBQUMsZ0VBQWdFLG9DQUFvQyxDQUFDLDhEQUE4RCx3QkFBd0IsQ0FBQywrREFBK0Qsd0JBQXdCLENBQUMsNkRBQTZELG9DQUFvQyxDQUFDLDJEQUEyRCx3QkFBd0IsQ0FBQyx3REFBd0QscUJBQXFCLENBQUMsd0JBQXdCLGdHQUFnRyxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixnQ0FBZ0MsQ0FBQyw2QkFBNkIsZ0NBQWdDLENBQUMsd0dBQXdHLHdCQUF3QixDQUFDLDBDQUEwQyxVQUFVLENBQUMscUdBQXFHLHdCQUF3QixDQUFDLHlDQUF5QyxVQUFVLENBQUMsK0ZBQStGLHdCQUF3QixDQUFDLHVDQUF1QyxVQUFVLENBQUMsdUJBQXVCLG9DQUFvQyxDQUFDLHlGQUF5RixnQ0FBZ0MsQ0FBQyxxSUFBcUksZ0NBQWdDLENBQUMsd0RBQXdELGdDQUFnQyxDQUFDLDZDQUE2QyxnQ0FBZ0MsQ0FBQyxvSkFBb0osZ0NBQWdDLENBQUMsNEtBQTRLLGdDQUFnQyxDQUFDLDZFQUE2RSw0QkFBNEIsQ0FBQyw0QkFBNEIsQ0FBQyw0S0FBNEssNEJBQTRCLENBQUMsb05BQW9OLDRCQUE0QixDQUFDLGlEQUFpRCwyQkFBMkIsQ0FBQyx5Q0FBeUMsZ0hBQWdILENBQUMscUhBQXFILENBQUMsdUNBQXVDLGlIQUFpSCxDQUFDLGtHQUFrRyxnQ0FBZ0MsQ0FBQyxvQkFBb0IsdUJBQXVCLGNBQWMsQ0FBQyxDQUFDLHFFQUFxRSxxQkFBcUIsQ0FBQyxnQ0FBZ0MsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLCtIQUErSCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsNENBQTRDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQyx1REFBdUQscUJBQXFCLENBQUMsc0RBQXNELGFBQWEsQ0FBQyw4Q0FBOEMscUJBQXFCLENBQUMsbUNBQW1DLGlDQUFpQyxDQUFDLDBHQUEwRyxnQ0FBZ0MsQ0FBQyx1QkFBdUIsYUFBYSxDQUFDLGlDQUFpQyx1Q0FBdUMsQ0FBQywrRkFBK0Ysb0NBQW9DLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLHFCQUFxQixDQUFDLCtEQUErRCxxQkFBcUIsQ0FBQyxtQ0FBbUMsNEJBQTRCLENBQUMsdUVBQXVFLDRCQUE0QixDQUFDLGdHQUFnRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsZ3JCQUFnckIscUNBQXFDLENBQUMsa0ZBQWtGLHdCQUF3QixDQUFDLGdJQUFnSSxxQkFBcUIsQ0FBQyx3cUJBQXdxQixxQ0FBcUMsQ0FBQyxnRkFBZ0Ysd0JBQXdCLENBQUMsNEhBQTRILHFCQUFxQixDQUFDLHdwQkFBd3BCLHFDQUFxQyxDQUFDLDRFQUE0RSx3QkFBd0IsQ0FBQyxvSEFBb0gscUJBQXFCLENBQUMsd3dCQUF3d0IscUNBQXFDLENBQUMsOFZBQThWLHdCQUF3QixDQUFDLHNOQUFzTixVQUFVLENBQUMsMFJBQTBSLDBCQUEwQixDQUFDLG9KQUFvSixpQkFBaUIsQ0FBQyw0TkFBNE4saUNBQWlDLENBQUMsc0hBQXNILHNDQUFzQyxDQUFDLGd3QkFBZ3dCLHFDQUFxQyxDQUFDLHdWQUF3Vix3QkFBd0IsQ0FBQyxrTkFBa04sVUFBVSxDQUFDLHNSQUFzUiwwQkFBMEIsQ0FBQyxrSkFBa0osaUJBQWlCLENBQUMsME5BQTBOLGlDQUFpQyxDQUFDLG9IQUFvSCxzQ0FBc0MsQ0FBQyxndkJBQWd2QixxQ0FBcUMsQ0FBQyw0VUFBNFUsd0JBQXdCLENBQUMsME1BQTBNLFVBQVUsQ0FBQyw4UUFBOFEsMEJBQTBCLENBQUMsOElBQThJLGlCQUFpQixDQUFDLHNOQUFzTixpQ0FBaUMsQ0FBQyxnSEFBZ0gsc0NBQXNDLENBQUMsYUFBYSxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyx5QkFBeUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyw0SEFBNEgsNkJBQTZCLENBQUMsNE1BQTRNLGFBQWEsQ0FBQyxnQ0FBZ0Msd0JBQXdCLENBQUMsYUFBYSw0QkFBNEIsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxxQ0FBcUMscUJBQXFCLENBQUMseUJBQXlCLDBCQUEwQixDQUFDLGtCQUFrQixDQUFDLGtHQUFrRyxDQUFDLDRCQUE0QixhQUFhLENDRXgvN0Q7OztFQUFBLENBSUE7RUFDRSxpQkFBQTtBQ0FGLENER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FGLENER0E7RUFDRSxPQUFBO0FDQUYsQ0RJQTs7RUFBQSxDQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDREYsQ0RFRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FDQUosQ0RJQTtFQUNFLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYmFkZ2UtY29udGVudHtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZTo5cHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjI0cHh9Lm1hdC1oMSwubWF0LWhlYWRsaW5lLC5tYXQtdHlwb2dyYXBoeSBoMXtmb250OjQwMCAyNHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTZweH0ubWF0LWgyLC5tYXQtdGl0bGUsLm1hdC10eXBvZ3JhcGh5IGgye2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6NDAwIDE2cHgvMjhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIC44MykvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIC42NykvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS0yLC5tYXQtYm9keS1zdHJvbmd7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1jYXB0aW9uLC5tYXQtc21hbGx7Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0uMDVlbTttYXJnaW46MCAwIDU2cHh9Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LS4wMmVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotLjAwNWVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1idXR0b24sLm1hdC1mYWIsLm1hdC1mbGF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWJ1dHRvbi10b2dnbGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtY29udGVudCwubWF0LWNhcmQtc3VidGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbHtsaW5lLWhlaWdodDoyNHB4fS5tYXQtY2hpcHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29ue2ZvbnQtc2l6ZToxOHB4fS5tYXQtdGFibGV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtaGVhZGVyLWNlbGx7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2FsZW5kYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjEyNTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29ue2ZvbnQtc2l6ZToxNTAlO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b257aGVpZ2h0OjEuNWVtO3dpZHRoOjEuNWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbntoZWlnaHQ6MS4xMjVlbTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNWVtIDA7Ym9yZGVyLXRvcDouODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7dG9wOi0uODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS43OTE2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNDM3NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxMDJweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM1JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjI4MTI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye21hcmdpbi10b3A6LjU0MTY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjdlbSl9QG1lZGlhIHByaW50ey5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSguNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSguNzUpfX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi4yNWVtIDAgLjc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4wOTM3NWVtO21hcmdpbi10b3A6LS41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjFlbSAwIDFlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjg0Mzc1ZW07bWFyZ2luLXRvcDotLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZ3JpZC10aWxlLWZvb3RlciwubWF0LWdyaWQtdGlsZS1oZWFkZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubWF0LXJhZGlvLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTZweH0ubWF0LW9wdGdyb3VwLWxhYmVse2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zaW1wbGUtc25hY2tiYXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1uZXN0ZWQtdHJlZS1ub2RlLC5tYXQtdHJlZS1ub2Rle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTRweH0ubWF0LXJpcHBsZXtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWR7b3ZlcmZsb3c6dmlzaWJsZX0ubWF0LXJpcHBsZS1lbGVtZW50e3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5LHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoMCwwLC4yLDEpO3RyYW5zZm9ybTpzY2FsZSgwKX1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1yaXBwbGUtZWxlbWVudHtkaXNwbGF5Om5vbmV9fS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O291dGxpbmU6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbi1uYW1lOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0fS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXple3Jlc2l6ZTpub25lfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmd7aGVpZ2h0OmF1dG8haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzoycHggMCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzNmNTFiNX0ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmY0MDgxfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2NvbG9yOiNiMGIwYjB9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMzZjUxYjV9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUsLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e29wYWNpdHk6LjE7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1mYWIubWF0LWFjY2VudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWZhYi5tYXQtd2FybiwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25le2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhIWltcG9ydGFudH1AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OmJsYWNrLW9uLXdoaXRlKXsubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojMDAwIWltcG9ydGFudH19Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtZGlzYWJsZWR7b3BhY2l0eTouNX19QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kOjAgMH19Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVke29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlcntiYWNrZ3JvdW5kOiMwMDB9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LC5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZS1zdGlja3ksW21hdC1mb290ZXItcm93XSxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxtYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbCx0aC5tYXQtaGVhZGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZle2NvbG9yOiMzZjUxYjV9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1kaWFsb2ctY29udGFpbmVye2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGl2aWRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRpdmlkZXItdmVydGljYWx7Ym9yZGVyLXJpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lm1hdC1pY29uLm1hdC1wcmltYXJ5e2NvbG9yOiMzZjUxYjV9Lm1hdC1pY29uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWljb24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyLC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiMzZjUxYjV9Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWxpc3QtaXRlbS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1saXN0LW9wdGlvbjpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1tZW51LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOjAgMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvciwubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LXBhZ2luYXRvcntiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LXBhZ2luYXRvci1pbmNyZW1lbnR7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO2JvcmRlci1yaWdodDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzNmNTFiNX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojZmY0MDgxfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojM2Y1MWI1fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXNlbGVjdC1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kcmF3ZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2h7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKXtib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRle2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntib3gtc2hhZG93OjAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuMil9LmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCguMDAwMWRlZyxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDowIDB9fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3J7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7Ym9yZGVyLWxlZnQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZXtib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNvcnQtaGVhZGVyLWFycm93e2NvbG9yOiM3NTc1NzV9Lm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1ib3R0b206bm9uZX0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcltjbGFzcyo9bWF0LWJhY2tncm91bmQtXXtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDpub25lfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LXdhcm57YmFja2dyb3VuZDojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOmluaGVyaXR9Lm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sdGlwe2JhY2tncm91bmQ6cmdiYSg5Nyw5Nyw5NywuOSl9Lm1hdC10cmVle2JhY2tncm91bmQ6I2ZmZn0ubWF0LW5lc3RlZC10cmVlLW5vZGUsLm1hdC10cmVlLW5vZGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtiYWNrZ3JvdW5kOiMzMjMyMzI7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZjQwODF9IiwiQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7XHJcbiBcclxuLypcclxuICBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3Nhc3MtbG9hZGVyL2lzc3Vlcy81MzBcclxuICogQWN0dWFsIFN0aWNreSBGb290ZXIgU3R5bGVzXHJcbiAqL1xyXG4uYWxsLXdyYXAge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiBcclxuLnBhZ2Utd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiBcclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIFxyXG4gXHJcbi8qXHJcbiAqIE1ha2UgdGhlIENvbXBvbmVudCBpbmplY3RlZCBieSBSb3V0ZXIgT3V0bGV0IGZ1bGwgaGVpZ2h0OlxyXG4gKi9cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gID4gKjpub3Qocm91dGVyLW91dGxldCkge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0iLCJAaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9pbmRpZ28tcGluay5jc3NcIjtcbi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc2Fzcy1sb2FkZXIvaXNzdWVzLzUzMFxuICogQWN0dWFsIFN0aWNreSBGb290ZXIgU3R5bGVzXG4gKi9cbi5hbGwtd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ucGFnZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbn1cblxuLypcbiAqIE1ha2UgdGhlIENvbXBvbmVudCBpbmplY3RlZCBieSBSb3V0ZXIgT3V0bGV0IGZ1bGwgaGVpZ2h0OlxuICovXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gPiAqOm5vdChyb3V0ZXItb3V0bGV0KSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_service/auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent(authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.title = 'ImpuestoPredial';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_controller/app-date-adapter */
    "./src/app/_controller/app-date-adapter.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/periodo/periodo.component */
    "./src/app/pages/periodo/periodo.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_mantenimiento_mantenimiento_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/mantenimiento/mantenimiento.component */
    "./src/app/pages/mantenimiento/mantenimiento.component.ts");
    /* harmony import */


    var _pages_periodo_periodo_dialogo_periodo_dialogo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/periodo/periodo-dialogo/periodo-dialogo.component */
    "./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_mantenimiento_cpu_cpu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/mantenimiento/cpu/cpu.component */
    "./src/app/pages/mantenimiento/cpu/cpu.component.ts");
    /* harmony import */


    var _pages_mantenimiento_bottom_sheet_mensaje_bottom_sheet_mensaje_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component */
    "./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.ts");
    /* harmony import */


    var _pages_mantenimiento_rustico_rustico_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/mantenimiento/rustico/rustico.component */
    "./src/app/pages/mantenimiento/rustico/rustico.component.ts");
    /* harmony import */


    var _pages_predio_predio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/predio/predio.component */
    "./src/app/pages/predio/predio.component.ts");
    /* harmony import */


    var _pages_predio_predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/predio/predio-urbano/predio-urbano.component */
    "./src/app/pages/predio/predio-urbano/predio-urbano.component.ts");
    /* harmony import */


    var _pages_predio_predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/predio/predio-cpu/predio-cpu.component */
    "./src/app/pages/predio/predio-cpu/predio-cpu.component.ts");
    /* harmony import */


    var _pages_predio_predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/predio/predio-rustico/predio-rustico.component */
    "./src/app/pages/predio/predio-rustico/predio-rustico.component.ts");
    /* harmony import */


    var _pages_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/construccion/construccion.component */
    "./src/app/pages/construccion/construccion.component.ts");
    /* harmony import */


    var _pages_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/reportes/reportes.component */
    "./src/app/pages/reportes/reportes.component.ts");
    /* harmony import */


    var _pages_mantenimiento_urbano_urbano_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/mantenimiento/urbano/urbano.component */
    "./src/app/pages/mantenimiento/urbano/urbano.component.ts");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/fesm2015/google-maps.js");
    /* harmony import */


    var _pages_procedimiento_procedimiento_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/procedimiento/procedimiento.component */
    "./src/app/pages/procedimiento/procedimiento.component.ts");
    /* harmony import */


    var _pages_procedimiento_procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component */
    "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.ts");
    /* harmony import */


    var _pages_pago_pago_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/pago/pago.component */
    "./src/app/pages/pago/pago.component.ts");
    /* harmony import */


    var _pages_pago_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/pago/pago-dialog/pago-dialog.component */
    "./src/app/pages/pago/pago-dialog/pago-dialog.component.ts");
    /* harmony import */


    var _pages_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/reportes/caja/caja.component */
    "./src/app/pages/reportes/caja/caja.component.ts");
    /* harmony import */


    var _pages_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/usuario/login/login.component */
    "./src/app/pages/usuario/login/login.component.ts");
    /* harmony import */


    var _pages_usuario_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/usuario/perfil/perfil.component */
    "./src/app/pages/usuario/perfil/perfil.component.ts");
    /* harmony import */


    var _pages_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/usuario/usuario/usuario.component */
    "./src/app/pages/usuario/usuario/usuario.component.ts");
    /* harmony import */


    var _pages_usuario_usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/usuario/usuario-dialog/usuario-dialog.component */
    "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.ts");
    /* harmony import */


    var _pages_instalacion_instalacion_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/instalacion/instalacion.component */
    "./src/app/pages/instalacion/instalacion.component.ts"); // import { ValidatorViaDirective } from './_directives/validator-via.directive';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_periodo_periodo_component__WEBPACK_IMPORTED_MODULE_10__["PeriodoComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _pages_mantenimiento_mantenimiento_component__WEBPACK_IMPORTED_MODULE_12__["MantenimientoComponent"], _pages_periodo_periodo_dialogo_periodo_dialogo_component__WEBPACK_IMPORTED_MODULE_13__["PeriodoDialogoComponent"], _pages_mantenimiento_cpu_cpu_component__WEBPACK_IMPORTED_MODULE_15__["CpuComponent"], _pages_mantenimiento_bottom_sheet_mensaje_bottom_sheet_mensaje_component__WEBPACK_IMPORTED_MODULE_16__["BottomSheetMensajeComponent"], _pages_mantenimiento_rustico_rustico_component__WEBPACK_IMPORTED_MODULE_17__["RusticoComponent"], _pages_predio_predio_component__WEBPACK_IMPORTED_MODULE_18__["PredioComponent"], _pages_predio_predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_19__["PredioUrbanoComponent"], _pages_predio_predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_20__["PredioCpuComponent"], _pages_predio_predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_21__["PredioRusticoComponent"], _pages_construccion_construccion_component__WEBPACK_IMPORTED_MODULE_22__["ConstruccionComponent"], _pages_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_23__["ReportesComponent"], _pages_mantenimiento_urbano_urbano_component__WEBPACK_IMPORTED_MODULE_24__["UrbanoComponent"], _pages_procedimiento_procedimiento_component__WEBPACK_IMPORTED_MODULE_26__["ProcedimientoComponent"], _pages_procedimiento_procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ProcedimientoDialogComponent"], _pages_pago_pago_component__WEBPACK_IMPORTED_MODULE_28__["PagoComponent"], _pages_pago_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_29__["PagoDialogComponent"], _pages_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_30__["CajaComponent"], _pages_usuario_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _pages_usuario_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_32__["PerfilComponent"], _pages_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_33__["UsuarioComponent"], _pages_usuario_usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_34__["UsuarioDialogComponent"], _pages_instalacion_instalacion_component__WEBPACK_IMPORTED_MODULE_35__["InstalacionComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_25__["GoogleMapsModule"]],
      entryComponents: [_pages_periodo_periodo_dialogo_periodo_dialogo_component__WEBPACK_IMPORTED_MODULE_13__["PeriodoDialogoComponent"], _pages_mantenimiento_bottom_sheet_mensaje_bottom_sheet_mensaje_component__WEBPACK_IMPORTED_MODULE_16__["BottomSheetMensajeComponent"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"],
        useValue: 'es-ES'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
        useClass: _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["AppDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"],
        useValue: _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_1__["APP_DATE_FORMATS"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts": function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_usuario_usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../pages/usuario/usuario-dialog/usuario-dialog.component */
    "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.ts");
    /* harmony import */


    var _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../_controller/app-date-adapter */
    "./src/app/_controller/app-date-adapter.ts");
    /* harmony import */


    var _pages_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../pages/reportes/caja/caja.component */
    "./src/app/pages/reportes/caja/caja.component.ts");
    /* harmony import */


    var _pages_pago_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../pages/pago/pago-dialog/pago-dialog.component */
    "./src/app/pages/pago/pago-dialog/pago-dialog.component.ts");
    /* harmony import */


    var _pages_procedimiento_procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component */
    "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.ts");
    /* harmony import */


    var _pages_predio_predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../pages/predio/predio-cpu/predio-cpu.component */
    "./src/app/pages/predio/predio-cpu/predio-cpu.component.ts");
    /* harmony import */


    var _pages_predio_predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../pages/predio/predio-urbano/predio-urbano.component */
    "./src/app/pages/predio/predio-urbano/predio-urbano.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_predio_predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../pages/predio/predio-rustico/predio-rustico.component */
    "./src/app/pages/predio/predio-rustico/predio-rustico.component.ts");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
        useClass: _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_2__["AppDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"],
        useValue: _controller_app_date_adapter__WEBPACK_IMPORTED_MODULE_2__["APP_DATE_FORMATS"]
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"],
        useValue: 'es-ES'
      }],
      entryComponents: [_pages_predio_predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_7__["PredioUrbanoComponent"], _pages_predio_predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_6__["PredioCpuComponent"], _pages_predio_predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_12__["PredioRusticoComponent"], _pages_procedimiento_procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProcedimientoDialogComponent"], _pages_pago_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PagoDialogComponent"], _pages_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_3__["CajaComponent"], _pages_usuario_usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_1__["UsuarioDialogComponent"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/pages/construccion/construccion.component.scss": function srcAppPagesConstruccionConstruccionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n  font-size: 21px;\n}\n\ninput[type=number]:focus {\n  border: 1px solid #337ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3RydWNjaW9uL0Q6XFxQcm9qZWN0c1xcQXJub2xkIE5vcmFidWVuYVxcbm9kZS1wcm9qZWN0c1xcaW1wdWVzdG8tcHJlZGlhbC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGNvbnN0cnVjY2lvblxcY29uc3RydWNjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25zdHJ1Y2Npb24vY29uc3RydWNjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQXFCLDBCQUFBO0VBQTJCLGVBQUE7QUNHaEQ7O0FEREE7RUFFRSx5QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uc3RydWNjaW9uL2NvbnN0cnVjY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHsgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDsgZm9udC1zaXplOiAyMXB4O31cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7IFxyXG4gIC8vIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oIzQyOGJjYSwgNi41JSk7ICBcclxufSIsImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzM3YWI3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/construccion/construccion.component.ts": function srcAppPagesConstruccionConstruccionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConstruccionComponent", function () {
      return ConstruccionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_clasificacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_model/clasificacion */
    "./src/app/_model/clasificacion.ts");
    /* harmony import */


    var _model_antiguedad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_model/antiguedad */
    "./src/app/_model/antiguedad.ts");
    /* harmony import */


    var _model_material_estructural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../_model/material-estructural */
    "./src/app/_model/material-estructural.ts");
    /* harmony import */


    var _model_estado_conservacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../_model/estado-conservacion */
    "./src/app/_model/estado-conservacion.ts");
    /* harmony import */


    var _service_porcentaje_depreciacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../_service/porcentaje-depreciacion.service */
    "./src/app/_service/porcentaje-depreciacion.service.ts");
    /* harmony import */


    var _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../_model/valor-categoria-dto */
    "./src/app/_model/valor-categoria-dto.ts");
    /* harmony import */


    var _service_valor_categoria_dto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../_service/valor-categoria-dto.service */
    "./src/app/_service/valor-categoria-dto.service.ts");
    /* harmony import */


    var _model_construccion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../_model/construccion */
    "./src/app/_model/construccion.ts");
    /* harmony import */


    var _service_construccion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../_service/construccion.service */
    "./src/app/_service/construccion.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConstruccionComponent = /*#__PURE__*/function () {
      function ConstruccionComponent(service, valorCategoriaService, depreciacionService) {
        _classCallCheck(this, ConstruccionComponent);

        this.service = service;
        this.valorCategoriaService = valorCategoriaService;
        this.depreciacionService = depreciacionService;
        this.construccionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.clasificaciones = [];
        this.antiguedades = [];
        this.materiales = [];
        this.conservaciones = [];
        this.porcDepreciaciones = [];
        this.areas = [];
        this.valoresUnit = [];
        this.incrementos = [];
        this.depreciaciones = [];
        this.totalUnits = [];
        this.importes = []; // murcol: ValorCategoriaDTO[] = [];

        this.murcolValues = []; // techo: ValorCategoriaDTO[] = [];

        this.techoValues = []; // piso: ValorCategoriaDTO[] = [];

        this.pisoValues = []; // puertventa: ValorCategoriaDTO[] = [];

        this.puertventaValues = []; // revestimiento: ValorCategoriaDTO[] = [];

        this.revestimientoValues = []; // banio: ValorCategoriaDTO[] = [];

        this.banioValues = []; // instelecsanit: ValorCategoriaDTO[] = [];

        this.instelecsanitValues = [];
      }

      _createClass(ConstruccionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          if (this.periodo) {
            this.valorCategoriaService.listarValores('MUROS Y COLUMNAS', this.periodo.id).subscribe(function (data) {
              _this62.murcolValues = data;
            });
            this.valorCategoriaService.listarValores('TECHOS', this.periodo.id).subscribe(function (data) {
              _this62.techoValues = data;
            });
            this.valorCategoriaService.listarValores('PISOS', this.periodo.id).subscribe(function (data) {
              _this62.pisoValues = data;
            });
            this.valorCategoriaService.listarValores('PUERTAS Y VENTANAS', this.periodo.id).subscribe(function (data) {
              _this62.puertventaValues = data;
            });
            this.valorCategoriaService.listarValores('REVESTIMIENTOS', this.periodo.id).subscribe(function (data) {
              _this62.revestimientoValues = data;
            });
            this.valorCategoriaService.listarValores('BAÑOS', this.periodo.id).subscribe(function (data) {
              _this62.banioValues = data;
            });
            this.valorCategoriaService.listarValores('INSTALACIONES ELÉCTRICAS Y SANITARIAS', this.periodo.id).subscribe(function (data) {
              _this62.instelecsanitValues = data;
            });
          } // this.service.listar().subscribe(data => {
          //   console.log(data);
          // });

        }
      }, {
        key: "porcentajeDepreciacion",
        value: function porcentajeDepreciacion(idClasificacion, antiguedad, material, estado) {
          var _this63 = this;

          this.depreciacionService.getPorcentaje(idClasificacion, antiguedad, material, estado).subscribe(function (data) {
            var porcentaje = data;

            _this63.porcDepreciaciones.push(porcentaje.porcentaje);

            console.log(porcentaje);
          });
        }
      }, {
        key: "agregar",
        value: function agregar() {
          var _this64 = this;

          if (this.murcolValues.length == 0) {
            this.valorCategoriaService.listarValores('MUROS Y COLUMNAS', this.periodo.id).subscribe(function (data) {
              _this64.murcolValues = data;
            });
            this.valorCategoriaService.listarValores('TECHOS', this.periodo.id).subscribe(function (data) {
              _this64.techoValues = data;
            });
            this.valorCategoriaService.listarValores('PISOS', this.periodo.id).subscribe(function (data) {
              _this64.pisoValues = data;
            });
            this.valorCategoriaService.listarValores('PUERTAS Y VENTANAS', this.periodo.id).subscribe(function (data) {
              _this64.puertventaValues = data;
            });
            this.valorCategoriaService.listarValores('REVESTIMIENTOS', this.periodo.id).subscribe(function (data) {
              _this64.revestimientoValues = data;
            });
            this.valorCategoriaService.listarValores('BAÑOS', this.periodo.id).subscribe(function (data) {
              _this64.banioValues = data;
            });
            this.valorCategoriaService.listarValores('INSTALACIONES ELÉCTRICAS Y SANITARIAS', this.periodo.id).subscribe(function (data) {
              _this64.instelecsanitValues = data;
            });
          } else {
            var vu = 0; // this.murcolValues.forEach(element => {
            //   if (element.etiqueta == this.murcol[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.techoValues.forEach(element => {
            //   if (element.etiqueta == this.techo[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.pisoValues.forEach(element => {
            //   if (element.etiqueta == this.piso[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.puertventaValues.forEach(element => {
            //   if (element.etiqueta == this.puertventa[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.revestimientoValues.forEach(element => {
            //   if (element.etiqueta == this.revestimiento[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.banioValues.forEach(element => {
            //   if (element.etiqueta == this.banio[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.instelecsanitValues.forEach(element => {
            //   if (element.etiqueta == this.instelecsanit[this.murcol.length - 1].etiqueta) {
            //     vu += element.valor;
            //   }
            // });
            // this.valoresUnit[this.murcol.length - 1] = vu;
            // this.porcentajeDepreciacion(this.clasificaciones[this.porcDepreciaciones.length], this.antiguedades[this.porcDepreciaciones.length], this.materiales[this.porcDepreciaciones.length], this.conservaciones[this.porcDepreciaciones.length]);
          }

          var construccion = new _model_construccion__WEBPACK_IMPORTED_MODULE_8__["Construccion"]();
          construccion.estadoConservacion = new _model_estado_conservacion__WEBPACK_IMPORTED_MODULE_4__["EstadoConservacion"]();
          construccion.estadoConservacion.materialEstructural = new _model_material_estructural__WEBPACK_IMPORTED_MODULE_3__["MaterialEstructural"]();
          construccion.estadoConservacion.materialEstructural.antiguedad = new _model_antiguedad__WEBPACK_IMPORTED_MODULE_2__["Antiguedad"]();
          construccion.estadoConservacion.materialEstructural.antiguedad.clasificacion = new _model_clasificacion__WEBPACK_IMPORTED_MODULE_1__["Clasificacion"](); // construccion.categorias = this.murcol[this.conservaciones.length].etiqueta

          this.construcciones.push(construccion);
          var categoria0 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria1 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria2 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria3 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria4 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria5 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"]();
          var categoria6 = new _model_valor_categoria_dto__WEBPACK_IMPORTED_MODULE_6__["ValorCategoriaDTO"](); // this.murcol.push(categoria0);
          // this.techo.push(categoria1);
          // this.piso.push(categoria2);
          // this.puertventa.push(categoria3);
          // this.revestimiento.push(categoria4);
          // this.banio.push(categoria5);
          // this.instelecsanit.push(categoria6);

          this.clasificaciones.push(0);
          this.antiguedades.push(0);
          this.materiales.push("");
          this.conservaciones.push("");
          this.areas.push(0);
          this.valoresUnit.push(0);
          this.incrementos.push(0);
          this.depreciaciones.push(0);
          this.totalUnits.push(0);
          this.importes.push(0);
          this.construccionesChange.emit(this.construcciones);
        }
      }, {
        key: "remove",
        value: function remove(construccion) {
          var index = this.construcciones.indexOf(construccion);

          if (index >= 0) {
            this.construcciones.splice(index, 1);
          }
        }
      }]);

      return ConstruccionComponent;
    }();

    ConstruccionComponent.ctorParameters = function () {
      return [{
        type: _service_construccion_service__WEBPACK_IMPORTED_MODULE_9__["ConstruccionService"]
      }, {
        type: _service_valor_categoria_dto_service__WEBPACK_IMPORTED_MODULE_7__["ValorCategoriaDtoService"]
      }, {
        type: _service_porcentaje_depreciacion_service__WEBPACK_IMPORTED_MODULE_5__["PorcentajeDepreciacionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])()], ConstruccionComponent.prototype, "periodo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])()], ConstruccionComponent.prototype, "construccionesChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])()], ConstruccionComponent.prototype, "construcciones", void 0);
    ConstruccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
      selector: 'app-construccion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./construccion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/construccion/construccion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./construccion.component.scss */
      "./src/app/pages/construccion/construccion.component.scss"))["default"]]
    })], ConstruccionComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss": function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts": function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/instalacion/instalacion.component.scss": function srcAppPagesInstalacionInstalacionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n  font-size: 21px;\n}\n\ninput[type=number]:focus {\n  border: 1px solid #337ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGFsYWNpb24vRDpcXFByb2plY3RzXFxBcm5vbGQgTm9yYWJ1ZW5hXFxub2RlLXByb2plY3RzXFxpbXB1ZXN0by1wcmVkaWFsLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGFsYWNpb25cXGluc3RhbGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnN0YWxhY2lvbi9pbnN0YWxhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSx3QkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBRUkseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RhbGFjaW9uL2luc3RhbGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAvLyBib3JkZXItY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7XHJcbiAgICAvLyBmb250LXNpemU6IDIxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oIzQyOGJjYSwgNi41JSk7XHJcbn0iLCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzN2FiNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/instalacion/instalacion.component.ts": function srcAppPagesInstalacionInstalacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstalacionComponent", function () {
      return InstalacionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_inst_fija_perman__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_model/inst-fija-perman */
    "./src/app/_model/inst-fija-perman.ts");
    /* harmony import */


    var _model_instalacion_predio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_model/instalacion-predio */
    "./src/app/_model/instalacion-predio.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_instalacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_service/instalacion.service */
    "./src/app/_service/instalacion.service.ts");

    var InstalacionComponent = /*#__PURE__*/function () {
      function InstalacionComponent(instalacionService) {
        _classCallCheck(this, InstalacionComponent);

        this.instalacionService = instalacionService;
        this.instalacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.instalaciones = [];
        this.generales = [];
        this.especificas = [[]];
      }

      _createClass(InstalacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this65 = this;

          if (!this.instalacionesPredio) {
            this.instalacionesPredio = [];
          } // if (this.periodo) {


          this.instalacionService.listar().subscribe(function (instalaciones) {
            _this65.instalaciones = instalaciones;
            _this65.todasGenerales = instalaciones.map(function (instalacion) {
              return instalacion.descripcionGeneral;
            });
          }); // }
        }
      }, {
        key: "agregar",
        value: function agregar() {
          var _this66 = this;

          var instalacionPredio = new _model_instalacion_predio__WEBPACK_IMPORTED_MODULE_2__["InstalacionPredio"]();
          instalacionPredio.instalacion = new _model_inst_fija_perman__WEBPACK_IMPORTED_MODULE_1__["InstFijaPerman"]();
          instalacionPredio.unidades = 0;
          this.instalacionesPredio.push(instalacionPredio);
          this.instalacionesChange.emit(this.instalacionesPredio);
          this.generales.push(this.todasGenerales.filter(function (general, index) {
            return _this66.todasGenerales.indexOf(general) == index;
          }));
        }
      }, {
        key: "remove",
        value: function remove(instalacionPredio) {
          var index = this.instalacionesPredio.indexOf(instalacionPredio);

          if (index >= 0) {
            this.instalacionesPredio.splice(index, 1);
            this.generales.splice(index, 1);
            this.especificas.splice(index, 1);
          }
        }
      }, {
        key: "filtrarEspecifico",
        value: function filtrarEspecifico(index, general) {
          this.instalacionesPredio[index].instalacion = undefined;
          this.especificas[index] = this.instalaciones.filter(function (instalacion) {
            return instalacion.descripcionGeneral == general.value;
          }); // this.especificas = this.instalaciones.filter(instalacion => instalacion.descripcionGeneral == general);
        }
      }]);

      return InstalacionComponent;
    }();

    InstalacionComponent.ctorParameters = function () {
      return [{
        type: src_app_service_instalacion_service__WEBPACK_IMPORTED_MODULE_4__["InstalacionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], InstalacionComponent.prototype, "instalacionesChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], InstalacionComponent.prototype, "instalacionesPredio", void 0);
    InstalacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-instalacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./instalacion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/instalacion/instalacion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./instalacion.component.scss */
      "./src/app/pages/instalacion/instalacion.component.scss"))["default"]]
    })], InstalacionComponent);
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.scss": function srcAppPagesMantenimientoBottomSheetMensajeBottomSheetMensajeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnRlbmltaWVudG8vYm90dG9tLXNoZWV0LW1lbnNhamUvYm90dG9tLXNoZWV0LW1lbnNhamUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.ts": function srcAppPagesMantenimientoBottomSheetMensajeBottomSheetMensajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomSheetMensajeComponent", function () {
      return BottomSheetMensajeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BottomSheetMensajeComponent = /*#__PURE__*/function () {
      function BottomSheetMensajeComponent(mensaje) {
        _classCallCheck(this, BottomSheetMensajeComponent);

        this.mensaje = mensaje;
        this.mensajeMantenimiento = false;
      }

      _createClass(BottomSheetMensajeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          document.cookie = "mensajeMantenimiento=".concat(this.mensajeMantenimiento, "; expires = Tue, 01 Jan 2030 12:00:00 UTC");
          this.mensaje.dismiss(); // event.preventDefault();
        }
      }]);

      return BottomSheetMensajeComponent;
    }();

    BottomSheetMensajeComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
      }];
    };

    BottomSheetMensajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-bottom-sheet-mensaje',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bottom-sheet-mensaje.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bottom-sheet-mensaje.component.scss */
      "./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.scss"))["default"]]
    })], BottomSheetMensajeComponent);
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/cpu/cpu.component.scss": function srcAppPagesMantenimientoCpuCpuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vertical {\n  transform: rotate(-90deg) translatey(-27px);\n  font-size: small;\n  width: 80px;\n  position: static;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput[type=number]:focus {\n  font-size: 21px;\n  border: 1px solid #337ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFudGVuaW1pZW50by9jcHUvRDpcXFByb2plY3RzXFxBcm5vbGQgTm9yYWJ1ZW5hXFxub2RlLXByb2plY3RzXFxpbXB1ZXN0by1wcmVkaWFsLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbWFudGVuaW1pZW50b1xcY3B1XFxjcHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbnRlbmltaWVudG8vY3B1L2NwdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUFxQiwwQkFBQTtBQ0VyQjs7QURBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFudGVuaW1pZW50by9jcHUvY3B1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yN3B4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yN3B4KTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjdweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZXkoLTI3cHgpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0geyAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkOyB9XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMgeyBcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCM0MjhiY2EsIDYuNSUpOyAgXHJcbn0iLCIudmVydGljYWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjdweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yN3B4KTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yN3B4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yN3B4KTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzM3YWI3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/cpu/cpu.component.ts": function srcAppPagesMantenimientoCpuCpuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CpuComponent", function () {
      return CpuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_valorTerrenoCP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_model/valorTerrenoCP */
    "./src/app/_model/valorTerrenoCP.ts");
    /* harmony import */


    var _service_valor_terreno_cp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/valor-terreno-cp.service */
    "./src/app/_service/valor-terreno-cp.service.ts");
    /* harmony import */


    var _service_calzada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_service/calzada.service */
    "./src/app/_service/calzada.service.ts");
    /* harmony import */


    var _service_medida_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_service/medida.service */
    "./src/app/_service/medida.service.ts");
    /* harmony import */


    var _service_servicio_basico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_service/servicio-basico.service */
    "./src/app/_service/servicio-basico.service.ts");
    /* harmony import */


    var _model_periodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../_model/periodo */
    "./src/app/_model/periodo.ts");
    /* harmony import */


    var _service_periodo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

    var CpuComponent = /*#__PURE__*/function () {
      function CpuComponent(periodoService, servicioService, medidaService, calzadaService, valorTerrenoCpService) {
        _classCallCheck(this, CpuComponent);

        this.periodoService = periodoService;
        this.servicioService = servicioService;
        this.medidaService = medidaService;
        this.calzadaService = calzadaService;
        this.valorTerrenoCpService = valorTerrenoCpService;
      }

      _createClass(CpuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this67 = this;

          this.periodoService.listar().subscribe(function (data) {
            _this67.periodos = data;
          });
          this.servicioService.listar().subscribe(function (data) {
            _this67.servicios = data;
          });
          this.medidaService.listar().subscribe(function (data) {
            _this67.medidas = data;
          });
          this.calzadaService.listar().subscribe(function (data) {
            _this67.calzadas = data;
          });
        }
      }, {
        key: "elegir",
        value: function elegir(periodo_id) {
          var _this68 = this;

          this.valorTerrenoCpService.listar(periodo_id).subscribe(function (data) {
            if (data.length == 0) {
              console.log("No hay datos");
              _this68.valoresTerreno = [];
              var valorTerrenoCP;

              _this68.calzadas.forEach(function (calzada) {
                _this68.medidas.forEach(function (medida) {
                  _this68.servicios.forEach(function (servicio) {
                    valorTerrenoCP = new _model_valorTerrenoCP__WEBPACK_IMPORTED_MODULE_1__["ValorTerrenoCP"]();
                    valorTerrenoCP.calzada = calzada;
                    valorTerrenoCP.medida = medida;
                    valorTerrenoCP.servicioBasico = servicio;
                    valorTerrenoCP.periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_6__["Periodo"]();
                    valorTerrenoCP.periodo.id = periodo_id;
                    valorTerrenoCP.valor = 0;

                    _this68.valoresTerreno.push(valorTerrenoCP);
                  });
                });
              });
            } else {
              _this68.valoresTerreno = data;
            }
          });
        }
      }, {
        key: "guardar",
        value: function guardar() {
          this.valorTerrenoCpService.grabar(this.valoresTerreno).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Muy bien", "Se registraron los valores con exito!", "success");
          });
        }
      }]);

      return CpuComponent;
    }();

    CpuComponent.ctorParameters = function () {
      return [{
        type: _service_periodo_service__WEBPACK_IMPORTED_MODULE_7__["PeriodoService"]
      }, {
        type: _service_servicio_basico_service__WEBPACK_IMPORTED_MODULE_5__["ServicioBasicoService"]
      }, {
        type: _service_medida_service__WEBPACK_IMPORTED_MODULE_4__["MedidaService"]
      }, {
        type: _service_calzada_service__WEBPACK_IMPORTED_MODULE_3__["CalzadaService"]
      }, {
        type: _service_valor_terreno_cp_service__WEBPACK_IMPORTED_MODULE_2__["ValorTerrenoCpService"]
      }];
    };

    CpuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-cpu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cpu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/cpu/cpu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cpu.component.scss */
      "./src/app/pages/mantenimiento/cpu/cpu.component.scss"))["default"]]
    })], CpuComponent);
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/mantenimiento.component.scss": function srcAppPagesMantenimientoMantenimientoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFudGVuaW1pZW50by9EOlxcUHJvamVjdHNcXEFybm9sZCBOb3JhYnVlbmFcXG5vZGUtcHJvamVjdHNcXGltcHVlc3RvLXByZWRpYWwtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtYW50ZW5pbWllbnRvXFxtYW50ZW5pbWllbnRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW50ZW5pbWllbnRvL21hbnRlbmltaWVudG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFBcUIsMEJBQUE7QUNFckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW50ZW5pbWllbnRvL21hbnRlbmltaWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gIG1hcmdpbjogMDsgXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7IC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7IH1cclxuIiwiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/mantenimiento.component.ts": function srcAppPagesMantenimientoMantenimientoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MantenimientoComponent", function () {
      return MantenimientoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _model_valor_unit_edificacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_model/valor-unit-edificacion */
    "./src/app/_model/valor-unit-edificacion.ts");
    /* harmony import */


    var _service_valor_unit_edificacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_service/valor-unit-edificacion.service */
    "./src/app/_service/valor-unit-edificacion.service.ts");
    /* harmony import */


    var _service_unit_edificacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../_service/unit-edificacion.service */
    "./src/app/_service/unit-edificacion.service.ts");
    /* harmony import */


    var _controller_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../_controller/cookies.service */
    "./src/app/_controller/cookies.service.ts");
    /* harmony import */


    var _periodo_periodo_dialogo_periodo_dialogo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../periodo/periodo-dialogo/periodo-dialogo.component */
    "./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.ts");
    /* harmony import */


    var _model_periodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../_model/periodo */
    "./src/app/_model/periodo.ts");
    /* harmony import */


    var _service_periodo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _bottom_sheet_mensaje_bottom_sheet_mensaje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./bottom-sheet-mensaje/bottom-sheet-mensaje.component */
    "./src/app/pages/mantenimiento/bottom-sheet-mensaje/bottom-sheet-mensaje.component.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);

    var MantenimientoComponent = /*#__PURE__*/function () {
      function MantenimientoComponent(unitEdificacionService, dialog, mensaje, valorUnitService, periodoService, cookieService) {
        _classCallCheck(this, MantenimientoComponent);

        this.unitEdificacionService = unitEdificacionService;
        this.dialog = dialog;
        this.mensaje = mensaje;
        this.valorUnitService = valorUnitService;
        this.periodoService = periodoService;
        this.cookieService = cookieService;
        this.displayedColumns = ['id', 'anio', 'uit', 'acciones'];
      }

      _createClass(MantenimientoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this69 = this;

          this.periodoService.listar().subscribe(function (data) {
            _this69.periodoService.periodosSubject.next(data);
          });
          this.periodoService.periodosSubject.subscribe(function (data) {
            _this69.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](data);
            _this69.dataSource.paginator = _this69.paginator;
            _this69.dataSource.sort = _this69.sort;

            _this69.openMensaje();

            _this69.periodos = data;
          });
          this.unitEdificacionService.listar().subscribe(function (data) {
            _this69.unitariosEdificacion = data;
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(periodo) {
          var periodo1 = periodo != null ? periodo : new _model_periodo__WEBPACK_IMPORTED_MODULE_6__["Periodo"]();
          this.dialog.open(_periodo_periodo_dialogo_periodo_dialogo_component__WEBPACK_IMPORTED_MODULE_5__["PeriodoDialogoComponent"], {
            width: '450px',
            data: periodo1
          });
        }
      }, {
        key: "openMensaje",
        value: function openMensaje() {
          var cook = this.cookieService.getCookie('mensajeMantenimiento');

          if (cook == 'false') {
            this.mensaje.open(_bottom_sheet_mensaje_bottom_sheet_mensaje_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetMensajeComponent"]);
          }
        }
      }, {
        key: "cargarValores",
        value: function cargarValores(periodoId) {
          var _this70 = this;

          this.valorUnitService.listar(periodoId).subscribe(function (data) {
            if (data.length == 0) {
              console.log("no hay datos");
              var valorUnitario;
              _this70.valoresUnitarios = [];

              for (var i = 0; i < 59; i++) {
                valorUnitario = new _model_valor_unit_edificacion__WEBPACK_IMPORTED_MODULE_1__["ValorUnitEdificacion"]();
                valorUnitario.periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_6__["Periodo"]();
                valorUnitario.periodo.id = periodoId;
                valorUnitario.unitEdificacion = _this70.unitariosEdificacion[i];
                valorUnitario.valor = 0.00;

                _this70.valoresUnitarios.push(valorUnitario);
              }
            } else {
              _this70.valoresUnitarios = data;
            }
          });
        }
      }, {
        key: "grabar",
        value: function grabar() {
          this.valorUnitService.grabar(this.valoresUnitarios).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire("Muy bien", "Se registraron los valores con exito!", "success");
          });
        }
      }, {
        key: "eliminar",
        value: function eliminar(periodo) {
          var _this71 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            title: "\xBFEsta seguro que desea eliminar el periodo ".concat(periodo.anio, "?"),
            showDenyButton: true,
            confirmButtonText: "Aceptar",
            denyButtonText: "Cancelar",
            icon: "warning"
          }).then(function (result) {
            if (result.isConfirmed) {
              _this71.periodoService.eliminar(periodo.id).subscribe(function () {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire("Se elimino con exito", "", "success");
              });
            }
          });
        }
      }]);

      return MantenimientoComponent;
    }();

    MantenimientoComponent.ctorParameters = function () {
      return [{
        type: _service_unit_edificacion_service__WEBPACK_IMPORTED_MODULE_3__["UnitEdificacionService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"]
      }, {
        type: _service_valor_unit_edificacion_service__WEBPACK_IMPORTED_MODULE_2__["ValorUnitEdificacionService"]
      }, {
        type: _service_periodo_service__WEBPACK_IMPORTED_MODULE_7__["PeriodoService"]
      }, {
        type: _controller_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], {
      "static": true
    })], MantenimientoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSort"], {
      "static": true
    })], MantenimientoComponent.prototype, "sort", void 0);
    MantenimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-mantenimiento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mantenimiento.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/mantenimiento.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mantenimiento.component.scss */
      "./src/app/pages/mantenimiento/mantenimiento.component.scss"))["default"]]
    })], MantenimientoComponent);
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/rustico/rustico.component.scss": function srcAppPagesMantenimientoRusticoRusticoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vertical {\n  transform: rotate(-90deg) translatey(-28px);\n  font-size: small;\n  width: 80px;\n  position: static;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput[type=number]:focus {\n  font-size: 21px;\n  border: 1px solid #337ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFudGVuaW1pZW50by9ydXN0aWNvL0Q6XFxQcm9qZWN0c1xcQXJub2xkIE5vcmFidWVuYVxcbm9kZS1wcm9qZWN0c1xcaW1wdWVzdG8tcHJlZGlhbC1mcm9udC9zcmNcXGFwcFxccGFnZXNcXG1hbnRlbmltaWVudG9cXHJ1c3RpY29cXHJ1c3RpY28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbnRlbmltaWVudG8vcnVzdGljby9ydXN0aWNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQXFCLDBCQUFBO0FDRXJCOztBREFBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW50ZW5pbWllbnRvL3J1c3RpY28vcnVzdGljby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjhweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjhweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZXkoLTI4cHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGV5KC0yOHB4KTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHsgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDsgfVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzIHsgXHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigjNDI4YmNhLCA2LjUlKTsgIFxyXG59IiwiLnZlcnRpY2FsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZXkoLTI4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjhweCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRleSgtMjhweCk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzN2FiNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/rustico/rustico.component.ts": function srcAppPagesMantenimientoRusticoRusticoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RusticoComponent", function () {
      return RusticoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var _model_valor_terreno_rustico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_model/valor-terreno-rustico */
    "./src/app/_model/valor-terreno-rustico.ts");
    /* harmony import */


    var _model_periodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/periodo */
    "./src/app/_model/periodo.ts");
    /* harmony import */


    var _service_valor_terreno_rustico_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_service/valor-terreno-rustico.service */
    "./src/app/_service/valor-terreno-rustico.service.ts");
    /* harmony import */


    var _service_calidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_service/calidad.service */
    "./src/app/_service/calidad.service.ts");
    /* harmony import */


    var _service_altitud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../_service/altitud.service */
    "./src/app/_service/altitud.service.ts");
    /* harmony import */


    var _service_grupo_tierra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_service/grupo-tierra.service */
    "./src/app/_service/grupo-tierra.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

    var RusticoComponent = /*#__PURE__*/function () {
      function RusticoComponent(periodoService, tierraService, altitudService, calidadService, valoresService) {
        _classCallCheck(this, RusticoComponent);

        this.periodoService = periodoService;
        this.tierraService = tierraService;
        this.altitudService = altitudService;
        this.calidadService = calidadService;
        this.valoresService = valoresService;
      }

      _createClass(RusticoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.periodoService.listar().subscribe(function (data) {
            console.log(data);
            _this72.periodos = data;
          });
          this.calidadService.listar().subscribe(function (data) {
            _this72.calidades = data;
            console.log(data);
          });
          this.tierraService.listar().subscribe(function (data) {
            _this72.tierras = data;
            console.log(data);
          });
          this.altitudService.listar().subscribe(function (data) {
            _this72.altitudes = data;
            console.log(data);
          });
        }
      }, {
        key: "elegir",
        value: function elegir(periodo_id) {
          var _this73 = this;

          var flag = false;
          this.valoresService.listar(periodo_id).subscribe(function (data) {
            if (data.length == 0) {
              _this73.valoresTerreno = [];
              var valorTerrenoRustico;

              _this73.tierras.forEach(function (tierra) {
                _this73.altitudes.forEach(function (altitud) {
                  _this73.calidades.forEach(function (calidad) {
                    if (tierra.id == 3 && altitud.id == 1) {
                      return;
                    }

                    if (flag) {
                      return;
                    }

                    if (tierra.id == 4) {
                      valorTerrenoRustico = new _model_valor_terreno_rustico__WEBPACK_IMPORTED_MODULE_2__["ValorTerrenoRustico"]();
                      valorTerrenoRustico.periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_3__["Periodo"]();
                      valorTerrenoRustico.periodo.id = periodo_id;
                      valorTerrenoRustico.grupoTierra = tierra;
                      valorTerrenoRustico.unidadMedida = "HEC";
                      valorTerrenoRustico.valor = 0;

                      _this73.valoresTerreno.push(valorTerrenoRustico);

                      flag = true;
                    } else {
                      valorTerrenoRustico = new _model_valor_terreno_rustico__WEBPACK_IMPORTED_MODULE_2__["ValorTerrenoRustico"]();
                      valorTerrenoRustico.periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_3__["Periodo"]();
                      valorTerrenoRustico.periodo.id = periodo_id;
                      valorTerrenoRustico.grupoTierra = tierra;
                      valorTerrenoRustico.altitud = altitud;
                      valorTerrenoRustico.calidad = calidad;
                      valorTerrenoRustico.unidadMedida = "HEC";
                      valorTerrenoRustico.valor = 0;

                      _this73.valoresTerreno.push(valorTerrenoRustico);
                    }
                  });
                });
              });
            } else {
              _this73.valoresTerreno = data;
            }
          });
        }
      }, {
        key: "guardar",
        value: function guardar() {
          this.valoresService.grabar(this.valoresTerreno).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Muy bien", "Se registraron los valores con exito!", "success");
          });
        }
      }]);

      return RusticoComponent;
    }();

    RusticoComponent.ctorParameters = function () {
      return [{
        type: _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__["PeriodoService"]
      }, {
        type: _service_grupo_tierra_service__WEBPACK_IMPORTED_MODULE_7__["GrupoTierraService"]
      }, {
        type: _service_altitud_service__WEBPACK_IMPORTED_MODULE_6__["AltitudService"]
      }, {
        type: _service_calidad_service__WEBPACK_IMPORTED_MODULE_5__["CalidadService"]
      }, {
        type: _service_valor_terreno_rustico_service__WEBPACK_IMPORTED_MODULE_4__["ValorTerrenoRusticoService"]
      }];
    };

    RusticoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-rustico',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rustico.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/rustico/rustico.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rustico.component.scss */
      "./src/app/pages/mantenimiento/rustico/rustico.component.scss"))["default"]]
    })], RusticoComponent);
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/urbano/urbano.component.scss": function srcAppPagesMantenimientoUrbanoUrbanoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnRlbmltaWVudG8vdXJiYW5vL3VyYmFuby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/mantenimiento/urbano/urbano.component.ts": function srcAppPagesMantenimientoUrbanoUrbanoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrbanoComponent", function () {
      return UrbanoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_valor_terreno_urbano_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/valor-terreno-urbano.service */
    "./src/app/_service/valor-terreno-urbano.service.ts");
    /* harmony import */


    var _service_via_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/via.service */
    "./src/app/_service/via.service.ts");
    /* harmony import */


    var _model_valor_terreno_urbano__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/valor-terreno-urbano */
    "./src/app/_model/valor-terreno-urbano.ts");
    /* harmony import */


    var _model_periodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_model/periodo */
    "./src/app/_model/periodo.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_periodo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var UrbanoComponent = /*#__PURE__*/function () {
      function UrbanoComponent( // public geocodeService: GeocodeService
      periodoService, viaService, valorService) {
        _classCallCheck(this, UrbanoComponent);

        this.periodoService = periodoService;
        this.viaService = viaService;
        this.valorService = valorService;
      }

      _createClass(UrbanoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this74 = this;

          this.periodoService.listar().subscribe(function (data) {
            return _this74.periodoService.periodosSubject.next(data);
          });
          this.periodoService.periodosSubject.subscribe(function (data) {
            return _this74.periodos = data;
          });
        }
      }, {
        key: "elegir",
        value: function elegir(periodoId) {
          var _this75 = this;

          this.valorService.listar(periodoId).subscribe(function (valores) {
            if (valores.length == 0) {
              _this75.viaService.listar().subscribe(function (vias) {
                _this75.valores = vias.map(function (via) {
                  var valor = new _model_valor_terreno_urbano__WEBPACK_IMPORTED_MODULE_3__["ValorTerrenoUrbano"]();
                  var periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_4__["Periodo"]();
                  periodo.id = periodoId;
                  valor.via = via;
                  valor.valor = 0;
                  valor.periodo = periodo;
                  return valor;
                });
              });
            } else {
              _this75.valores = valores;
            }
          });
        }
      }, {
        key: "guardar",
        value: function guardar() {
          this.valorService.grabar(this.valores).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Buen trabajo", "Se registraron los valores con exito", "success");
          });
        }
      }]);

      return UrbanoComponent;
    }();

    UrbanoComponent.ctorParameters = function () {
      return [{
        type: src_app_service_periodo_service__WEBPACK_IMPORTED_MODULE_6__["PeriodoService"]
      }, {
        type: _service_via_service__WEBPACK_IMPORTED_MODULE_2__["ViaService"]
      }, {
        type: _service_valor_terreno_urbano_service__WEBPACK_IMPORTED_MODULE_1__["ValorTerrenoUrbanoService"]
      }];
    };

    UrbanoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-urbano',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./urbano.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mantenimiento/urbano/urbano.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./urbano.component.scss */
      "./src/app/pages/mantenimiento/urbano/urbano.component.scss"))["default"]]
    })], UrbanoComponent);
    /***/
  },

  /***/
  "./src/app/pages/pago/pago-dialog/pago-dialog.component.scss": function srcAppPagesPagoPagoDialogPagoDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ28vcGFnby1kaWFsb2cvcGFnby1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pago/pago-dialog/pago-dialog.component.ts": function srcAppPagesPagoPagoDialogPagoDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagoDialogComponent", function () {
      return PagoDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/impuesto-detail.service */
    "./src/app/_service/impuesto-detail.service.ts");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _service_ingreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_service/ingreso.service */
    "./src/app/_service/ingreso.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_tasa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../_service/tasa.service */
    "./src/app/_service/tasa.service.ts");
    /* harmony import */


    var _model_detalle_ingreso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_model/detalle-ingreso */
    "./src/app/_model/detalle-ingreso.ts");
    /* harmony import */


    var _service_recibo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../_service/recibo.service */
    "./src/app/_service/recibo.service.ts");
    /* harmony import */


    var _model_dto_recibo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../_model/dto/recibo */
    "./src/app/_model/dto/recibo.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../../_model/dto/contribuyente */
    "./src/app/_model/dto/contribuyente.ts");
    /* harmony import */


    var _model_empresa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../_model/empresa */
    "./src/app/_model/empresa.ts");
    /* harmony import */


    var _model_persona__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../../_model/persona */
    "./src/app/_model/persona.ts");
    /* harmony import */


    var _service_empresa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../../_service/empresa.service */
    "./src/app/_service/empresa.service.ts");
    /* harmony import */


    var _service_persona_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../../_service/persona.service */
    "./src/app/_service/persona.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");

    var PagoDialogComponent = /*#__PURE__*/function () {
      function PagoDialogComponent(dialogRef, recibo, reciboService, personaService, empresaService, tasaService, ingresoService, reportService, impuestoDetailService) {
        _classCallCheck(this, PagoDialogComponent);

        this.dialogRef = dialogRef;
        this.recibo = recibo;
        this.reciboService = reciboService;
        this.personaService = personaService;
        this.empresaService = empresaService;
        this.tasaService = tasaService;
        this.ingresoService = ingresoService;
        this.reportService = reportService;
        this.impuestoDetailService = impuestoDetailService;
        this.displayedColumns = ['select', 'periodo', 'anual', 'trimestral', 'diferencia', 'pagado', 'estado'];
        this.enabled = true;
        this.procedimientosCtrl = [];
        this.preciosCtrl = [];
        this.procedimientosFiltrados = [];
        this.total = 0;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__["SelectionModel"](true, []);
        this.personas = [];
        this.empresas = []; // ejemplos

        this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_11__["Contribuyente"]();
        this.tipoDocumentos = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "RUC",
          length: 11,
          ejemplo: "20542596352",
          meta: {
            nombre: "Razon Social",
            placeholder: "GRUPO ARCOS SRL"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
        this.tipoDocumentosRepresentante = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
      }

      _createClass(PagoDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          this.impuestoDetailService.impuestosSubject.subscribe(function (data) {
            _this76.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](data);
          });

          if (this.recibo.ingreso.id) {
            if (this.recibo.propietarioDetail.persona) {
              var persona = this.recibo.propietarioDetail.persona;
              this.tipoSelected = this.tipoDocumentos.filter(function (data) {
                return data.documento == persona.tipoDocumento;
              })[0];
              this.contribuyente.id = persona.id;
              this.contribuyente.tipoDocumento = persona.tipoDocumento;
              this.contribuyente.documento = persona.documento;
              this.contribuyente.nombre = persona.nombres;
              this.impuestoDetailService.listarPorPropietarioId(persona.id).subscribe(function (impuestos) {
                return _this76.impuestoDetailService.impuestosSubject.next(impuestos);
              });
            } else if (this.recibo.propietarioDetail.empresa) {
              var empresa = this.recibo.propietarioDetail.empresa;
              this.tipoSelected = this.tipoDocumentos.filter(function (data) {
                return data.documento == "RUC";
              })[0];
              this.contribuyente.id = empresa.id;
              this.contribuyente.nombre = empresa.razonSocial;
              this.contribuyente.documento = empresa.ruc;
              this.contribuyente.representante = empresa.representante;
              this.impuestoDetailService.listarPorPropietarioId(empresa.id).subscribe(function (impuestos) {
                return _this76.impuestoDetailService.impuestosSubject.next(impuestos);
              });
            }

            this.procedimientosCtrl = this.recibo.ingreso.detalle.map(function (detalle) {
              return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
            });
          }

          this.tasaService.listar().subscribe(function (data) {
            _this76.tasas = data;
            _this76.tasasCopy = data;

            if (_this76.recibo.ingreso.id) {
              _this76.recibo.ingreso.detalle.forEach(function (data, index) {
                _this76.procedimientosFiltrados.push(_this76.procedimientosCtrl[index].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (procedimiento) {
                  if (procedimiento) {
                    return _this76._filterProcedimientos(procedimiento);
                  } else {
                    return _this76.tasasCopy.slice();
                  }
                })));
              });
            }
          });
        }
      }, {
        key: "findConstribuyente",
        value: function findConstribuyente(tipo, documento) {
          var _this77 = this;

          if (tipo == "RUC") {
            this.empresaService.findByRuc(documento).subscribe(function (empresa) {
              if (empresa.id != null) {
                _this77.impuestoDetailService.listarPorPropietarioId(empresa.id).subscribe(function (impuestos) {
                  return _this77.impuestoDetailService.impuestosSubject.next(impuestos);
                });

                _this77.contribuyente.id = empresa.id;
                _this77.contribuyente.nombre = empresa.razonSocial;
                _this77.contribuyente.documento = empresa.ruc;
                _this77.contribuyente.representante = empresa.representante;

                if (empresa.representante.tipoDocumento === "DNI") {
                  _this77.tipoSelectedRepresentante = {
                    documento: "DNI",
                    length: 8,
                    ejemplo: "75896541",
                    meta: {
                      nombre: "Apellidos y Nombres",
                      placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
                    }
                  };
                } else if (empresa.representante.tipoDocumento === "CE") {
                  _this77.tipoSelectedRepresentante = {
                    documento: "CE",
                    length: 20,
                    ejemplo: "001043328",
                    meta: {
                      nombre: "Nombres",
                      placeholder: "GIANLUCA LAPADULA"
                    }
                  };
                }
              }
            });
          } else {
            this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
              if (persona.id != null) {
                _this77.impuestoDetailService.listarPorPropietarioId(persona.id).subscribe(function (impuestos) {
                  return _this77.impuestoDetailService.impuestosSubject.next(impuestos);
                });

                _this77.contribuyente.id = persona.id;
                _this77.contribuyente.tipoDocumento = persona.tipoDocumento;
                _this77.contribuyente.documento = persona.documento;
                _this77.contribuyente.nombre = persona.nombres;
              }
            });
          }

          this.recibo.ingreso.detalle.forEach(function (detalle) {
            if (detalle.impuesto) {
              _this77.remove(detalle);
            }
          });
        }
      }, {
        key: "findRepresentante",
        value: function findRepresentante(tipo, documento) {
          var _this78 = this;

          this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
            if (persona.id != null) {
              _this78.contribuyente.representante.id = persona.id;
              _this78.contribuyente.representante.tipoDocumento = persona.tipoDocumento;
              _this78.contribuyente.representante.documento = persona.documento;
              _this78.contribuyente.representante.nombres = persona.nombres;
            }
          });
        }
      }, {
        key: "compare",
        value: function compare(option1, option2) {
          return option1.documento === option2.documento;
        }
      }, {
        key: "agregar",
        value: function agregar() {
          var _this79 = this;

          var detalle = new _model_detalle_ingreso__WEBPACK_IMPORTED_MODULE_7__["DetalleIngreso"]();
          this.recibo.ingreso.detalle.push(detalle);
          this.procedimientosCtrl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
          this.preciosCtrl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
          this.procedimientosFiltrados.push(this.procedimientosCtrl[this.recibo.ingreso.detalle.length - 1].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (procedimiento) {
            if (procedimiento) {
              return _this79._filterProcedimientos(procedimiento);
            } else {
              return _this79.tasasCopy.slice();
            }
          })));
          this.preciosCtrl[this.recibo.ingreso.detalle.length - 1].valueChanges.subscribe(function (precio) {
            if (precio) {
              _this79.total = _this79.recibo.ingreso.detalle.map(function (ele) {
                return ele.precio;
              }).reduce(function (sum, ele) {
                return sum + ele;
              });
            }
          });
        }
      }, {
        key: "remove",
        value: function remove(detalle) {
          var index = this.recibo.ingreso.detalle.indexOf(detalle);

          if (index >= 0) {
            this.recibo.ingreso.detalle.splice(index, 1);
          }
        }
      }, {
        key: "_filterProcedimientos",
        value: function _filterProcedimientos(value) {
          var filterValue = value.toLowerCase();
          return this.tasasCopy.filter(function (tasa) {
            return tasa.procedimiento.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "validarPrecio",
        value: function validarPrecio(detalle) {
          detalle.tasa = this.tasas.filter(function (tasa) {
            return tasa.procedimiento.toLowerCase() == detalle.concepto.toLowerCase();
          })[0];

          if (detalle.tasa) {
            detalle.precio = detalle.tasa.precio;
          }
        }
      }, {
        key: "save",
        value: function save(tipoDocumento, tipoDocumentoRepresentante) {
          var _this80 = this;

          this.contribuyente.tipoDocumento = tipoDocumento.documento;

          if (this.contribuyente.tipoDocumento == "DNI" || this.contribuyente.tipoDocumento == "CE") {
            var persona = new _model_persona__WEBPACK_IMPORTED_MODULE_13__["Persona"]();
            persona.id = this.contribuyente.id;
            persona.tipoDocumento = this.contribuyente.tipoDocumento;
            persona.documento = this.contribuyente.documento;
            persona.nombres = this.contribuyente.nombre;
            this.recibo.propietarioDetail.persona = persona;
          } else if (this.contribuyente.tipoDocumento == "RUC") {
            var empresa = new _model_empresa__WEBPACK_IMPORTED_MODULE_12__["Empresa"]();
            empresa.id = this.contribuyente.id;
            empresa.razonSocial = this.contribuyente.nombre;
            empresa.ruc = this.contribuyente.documento;
            empresa.representante = this.contribuyente.representante;
            empresa.representante.tipoDocumento = tipoDocumentoRepresentante.documento;
            this.recibo.propietarioDetail.empresa = empresa;
          }

          this.reciboService.crear(this.recibo).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
              title: 'Se registro el pago',
              showDenyButton: true,
              confirmButtonText: "Imprimir comprobante",
              denyButtonText: "Cancelar",
              icon: "success"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this80.reportService.openRecibo(data);
              }
            });

            _this80.ingresoService.listarPageable(0, 10).subscribe(function (data) {
              data.content.forEach(function (element) {
                element.createdAt = moment__WEBPACK_IMPORTED_MODULE_18__(element.createdAt).format("DD/MM/YYYY HH:mm:ss");
              });

              _this80.ingresoService.ingresosSubject.next(data);
            });

            _this80.dialogRef.close();
          });
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = 0;

          if (this.dataSource) {
            numRows = this.dataSource.data.length;
          }

          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this81 = this,
              _this$selection;

          if (this.isAllSelected()) {
            this.selection.clear();
            this.recibo.ingreso.detalle = [];
            return;
          } else {
            this.recibo.ingreso.detalle = this.recibo.ingreso.detalle.filter(function (detalle) {
              return !detalle.impuesto;
            });
            this.dataSource.data.forEach(function (elemento) {
              return _this81.selected({
                checked: true
              }, elemento);
            });
          }

          (_this$selection = this.selection).select.apply(_this$selection, _toConsumableArray(this.dataSource.data));
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'deselect' : 'select', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.position + 1);
        }
      }, {
        key: "selected",
        value: function selected(e, row) {
          var _this82 = this;

          if (e.checked) {
            var detalle = new _model_detalle_ingreso__WEBPACK_IMPORTED_MODULE_7__["DetalleIngreso"]();
            detalle.impuesto = row.impuesto;
            detalle.precio = row.impuesto.diferencia;
            detalle.concepto = "Impuesto Predial a\xF1o ".concat(row.periodo.anio);
            this.recibo.ingreso.detalle.push(detalle);
            this.procedimientosCtrl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
            this.preciosCtrl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]());
            this.procedimientosFiltrados.push(this.procedimientosCtrl[this.recibo.ingreso.detalle.length - 1].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (procedimiento) {
              if (procedimiento) {
                return _this82._filterProcedimientos(procedimiento);
              } else {
                return _this82.tasasCopy.slice();
              }
            })));
            this.preciosCtrl[this.recibo.ingreso.detalle.length - 1].valueChanges.subscribe(function (precio) {
              if (precio) {
                _this82.total = _this82.recibo.ingreso.detalle.map(function (ele) {
                  return ele.precio;
                }).reduce(function (sum, ele) {
                  return sum + ele;
                });
              }
            });
          } else {
            var _detalle = this.recibo.ingreso.detalle.filter(function (detalle) {
              return detalle.impuesto.id == row.impuesto.id;
            })[0];
            var index = this.recibo.ingreso.detalle.indexOf(_detalle);

            if (index >= 0) {
              this.recibo.ingreso.detalle.splice(index, 1);
            }
          }

          console.log(row.impuesto);
          e ? this.selection.toggle(row) : null;
        }
      }]);

      return PagoDialogComponent;
    }();

    PagoDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]
      }, {
        type: _model_dto_recibo__WEBPACK_IMPORTED_MODULE_9__["Recibo"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_16__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_recibo_service__WEBPACK_IMPORTED_MODULE_8__["ReciboService"]
      }, {
        type: _service_persona_service__WEBPACK_IMPORTED_MODULE_15__["PersonaService"]
      }, {
        type: _service_empresa_service__WEBPACK_IMPORTED_MODULE_14__["EmpresaService"]
      }, {
        type: _service_tasa_service__WEBPACK_IMPORTED_MODULE_6__["TasaService"]
      }, {
        type: _service_ingreso_service__WEBPACK_IMPORTED_MODULE_3__["IngresoService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]
      }, {
        type: _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_1__["ImpuestoDetailService"]
      }];
    };

    PagoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["Component"])({
      selector: 'app-pago-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pago-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago/pago-dialog/pago-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pago-dialog.component.scss */
      "./src/app/pages/pago/pago-dialog/pago-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]))], PagoDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/pago/pago.component.scss": function srcAppPagesPagoPagoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ28vcGFnby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/pago/pago.component.ts": function srcAppPagesPagoPagoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagoComponent", function () {
      return PagoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pago-dialog/pago-dialog.component */
    "./src/app/pages/pago/pago-dialog/pago-dialog.component.ts");
    /* harmony import */


    var _service_recibo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../_service/recibo.service */
    "./src/app/_service/recibo.service.ts");
    /* harmony import */


    var _service_ingreso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../_service/ingreso.service */
    "./src/app/_service/ingreso.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _model_ingreso__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../_model/ingreso */
    "./src/app/_model/ingreso.ts");
    /* harmony import */


    var _model_dto_recibo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../_model/dto/recibo */
    "./src/app/_model/dto/recibo.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var src_app_model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/_model/dto/propietario-detail */
    "./src/app/_model/dto/propietario-detail.ts");

    var PagoComponent = /*#__PURE__*/function () {
      function PagoComponent(ingresoService, reciboService, dialog, reportSerice) {
        _classCallCheck(this, PagoComponent);

        this.ingresoService = ingresoService;
        this.reciboService = reciboService;
        this.dialog = dialog;
        this.reportSerice = reportSerice;
        this.displayedColumns = ['creacion', 'total', 'estado', 'acciones'];
      }

      _createClass(PagoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this83 = this;

          this.ingresoService.listarPageable(0, 10).subscribe(function (data) {
            data.content.forEach(function (element) {
              element.createdAt = moment__WEBPACK_IMPORTED_MODULE_12__(element.createdAt).format("DD/MM/YYYY HH:mm:ss");
            });

            _this83.ingresoService.ingresosSubject.next(data);
          });
          this.ingresoService.ingresosSubject.subscribe(function (data) {
            _this83.paginator.length = data.totalElements;
            _this83.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data.content);
            _this83.dataSource.sort = _this83.sort;
            _this83.paginator.pageIndex = data.pageable.number;
            _this83.paginator.pageSize = data.size;
          });
          this.paginator.firstPage();
        }
      }, {
        key: "eliminar",
        value: function eliminar(ingreso) {
          var _this84 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: '¿Esta seguro que desea anular el pago?',
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
            icon: "warning"
          }).then(function (result) {
            if (result.isConfirmed) {
              _this84.reciboService.deleteById(ingreso.id).subscribe(function (p) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire("Se anulo el pago con exito!", "", "success"); // if (this.filter) {
                //   this.predioService.listarPageable(this.paginator.pageIndex, this.paginator.pageSize, this.filterBy, this.filter).subscribe(data => {
                //     this.predioService.prediosSubject.next(data);
                //   });
                // } else {

                _this84.ingresoService.listarPageable(_this84.paginator.pageIndex, _this84.paginator.pageSize).subscribe(function (data) {
                  data.content.forEach(function (element) {
                    element.createdAt = moment__WEBPACK_IMPORTED_MODULE_12__(element.createdAt).format("DD/MM/YYYY HH:mm:ss");
                  });

                  _this84.ingresoService.ingresosSubject.next(data);
                }); // }

              });
            }
          });
        }
      }, {
        key: "mostrarMas",
        value: function mostrarMas(e) {
          var _this85 = this;

          // if (this.filter) {
          //   this.predioService.listarPageable(e.pageIndex, e.pageSize, this.filterBy, this.filter).subscribe(data => {
          //     this.predioService.prediosSubject.next(data);
          //   });
          // } else {
          this.ingresoService.listarPageable(e.pageIndex, e.pageSize).subscribe(function (data) {
            data.content.forEach(function (element) {
              element.createdAt = moment__WEBPACK_IMPORTED_MODULE_12__(element.createdAt).format("DD/MM/YYYY HH:mm:ss");
            });

            _this85.ingresoService.ingresosSubject.next(data);
          }); // }
        }
      }, {
        key: "openDialog",
        value: function openDialog(ingreso) {
          var _this86 = this;

          if (ingreso) {
            this.reciboService.getById(ingreso.id).subscribe(function (recibo) {
              _this86.dialog.open(_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PagoDialogComponent"], {
                width: '800px',
                data: recibo
              });
            });
          } else {
            var recibo = new _model_dto_recibo__WEBPACK_IMPORTED_MODULE_8__["Recibo"]();
            recibo.ingreso = new _model_ingreso__WEBPACK_IMPORTED_MODULE_7__["Ingreso"]();
            recibo.propietarioDetail = new src_app_model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_13__["PropietarioDetail"]();
            recibo.ingreso.detalle = [];
            this.dialog.open(_pago_dialog_pago_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PagoDialogComponent"], {
              width: '800px',
              height: '750px',
              data: recibo
            });
          }
        }
      }, {
        key: "print",
        value: function print(ingreso) {
          var _this87 = this;

          this.reciboService.getById(ingreso.id).subscribe(function (recibo) {
            _this87.reportSerice.openRecibo(recibo);
          });
        }
      }]);

      return PagoComponent;
    }();

    PagoComponent.ctorParameters = function () {
      return [{
        type: _service_ingreso_service__WEBPACK_IMPORTED_MODULE_4__["IngresoService"]
      }, {
        type: _service_recibo_service__WEBPACK_IMPORTED_MODULE_3__["ReciboService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      "static": true
    })], PagoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], {
      "static": true
    })], PagoComponent.prototype, "sort", void 0);
    PagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
      selector: 'app-pago',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pago.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago/pago.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pago.component.scss */
      "./src/app/pages/pago/pago.component.scss"))["default"]]
    })], PagoComponent);
    /***/
  },

  /***/
  "./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.scss": function srcAppPagesPeriodoPeriodoDialogoPeriodoDialogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmlvZG8vcGVyaW9kby1kaWFsb2dvL3BlcmlvZG8tZGlhbG9nby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.ts": function srcAppPagesPeriodoPeriodoDialogoPeriodoDialogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodoDialogoComponent", function () {
      return PeriodoDialogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var _model_periodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_model/periodo */
    "./src/app/_model/periodo.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var PeriodoDialogoComponent = /*#__PURE__*/function () {
      function PeriodoDialogoComponent(dialogRef, data, service) {
        _classCallCheck(this, PeriodoDialogoComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
      }

      _createClass(PeriodoDialogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.periodo = new _model_periodo__WEBPACK_IMPORTED_MODULE_2__["Periodo"]();

          if (this.data.id > 0) {
            this.periodo.id = this.data.id;
            this.periodo.anio = this.data.anio;
            this.periodo.uit = this.data.uit;
          }
        }
      }, {
        key: "operar",
        value: function operar() {
          var _this88 = this;

          this.service.crear(this.periodo).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: 'success',
              title: 'Mensaje',
              text: 'Se registro el periodo con exito!'
            });

            _this88.service.listar().subscribe(function (data) {
              _this88.service.periodosSubject.next(data);

              _this88.dialogRef.close();
            });
          });
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close();
        }
      }]);

      return PeriodoDialogoComponent;
    }();

    PeriodoDialogoComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: _model_periodo__WEBPACK_IMPORTED_MODULE_2__["Periodo"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__["PeriodoService"]
      }];
    };

    PeriodoDialogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-periodo-dialogo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./periodo-dialogo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./periodo-dialogo.component.scss */
      "./src/app/pages/periodo/periodo-dialogo/periodo-dialogo.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], PeriodoDialogoComponent);
    /***/
  },

  /***/
  "./src/app/pages/periodo/periodo.component.scss": function srcAppPagesPeriodoPeriodoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmlvZG8vcGVyaW9kby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/periodo/periodo.component.ts": function srcAppPagesPeriodoPeriodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodoComponent", function () {
      return PeriodoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_service/periodo.service */
    "./src/app/_service/periodo.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PeriodoComponent = /*#__PURE__*/function () {
      function PeriodoComponent(service) {
        _classCallCheck(this, PeriodoComponent);

        this.service = service;
        this.emisor = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(PeriodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this89 = this;

          this.service.listar().subscribe(function (data) {
            _this89.periodos = data;

            if (_this89.periodo) {
              _this89.seleccionado = data.filter(function (element) {
                return element.id == _this89.periodo.id;
              })[0];
            }
          });
          this.service.periodosSubject.subscribe(function (data) {
            console.log("suscripcion");
            console.log(data);
            _this89.periodos = data;
          });
        }
      }]);

      return PeriodoComponent;
    }();

    PeriodoComponent.ctorParameters = function () {
      return [{
        type: _service_periodo_service__WEBPACK_IMPORTED_MODULE_1__["PeriodoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], PeriodoComponent.prototype, "periodo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], PeriodoComponent.prototype, "emisor", void 0);
    PeriodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-periodo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./periodo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periodo/periodo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./periodo.component.scss */
      "./src/app/pages/periodo/periodo.component.scss"))["default"]]
    })], PeriodoComponent);
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-cpu/predio-cpu.component.scss": function srcAppPagesPredioPredioCpuPredioCpuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n  font-size: 21px;\n}\n\ninput[type=number]:focus {\n  border: 1px solid #337ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlZGlvL3ByZWRpby1jcHUvRDpcXFByb2plY3RzXFxBcm5vbGQgTm9yYWJ1ZW5hXFxub2RlLXByb2plY3RzXFxpbXB1ZXN0by1wcmVkaWFsLWZyb250L3NyY1xcYXBwXFxwYWdlc1xccHJlZGlvXFxwcmVkaW8tY3B1XFxwcmVkaW8tY3B1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmVkaW8vcHJlZGlvLWNwdS9wcmVkaW8tY3B1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQXFCLDBCQUFBO0VBQTJCLGVBQUE7QUNHaEQ7O0FEREE7RUFFRSx5QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJlZGlvL3ByZWRpby1jcHUvcHJlZGlvLWNwdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHsgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDsgZm9udC1zaXplOiAyMXB4O31cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7IFxyXG4gIC8vIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oIzQyOGJjYSwgNi41JSk7ICBcclxufSIsImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzM3YWI3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-cpu/predio-cpu.component.ts": function srcAppPagesPredioPredioCpuPredioCpuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredioCpuComponent", function () {
      return PredioCpuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_predio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/predio.service */
    "./src/app/_service/predio.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_service/impuesto-detail.service */
    "./src/app/_service/impuesto-detail.service.ts");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _service_servicio_basico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_service/servicio-basico.service */
    "./src/app/_service/servicio-basico.service.ts");
    /* harmony import */


    var _service_medida_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../_service/medida.service */
    "./src/app/_service/medida.service.ts");
    /* harmony import */


    var _service_calzada_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_service/calzada.service */
    "./src/app/_service/calzada.service.ts");
    /* harmony import */


    var _model_ubicacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../_model/ubicacion */
    "./src/app/_model/ubicacion.ts");
    /* harmony import */


    var _model_predio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../_model/predio */
    "./src/app/_model/predio.ts");
    /* harmony import */


    var _model_terreno_cpu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../_model/terreno-cpu */
    "./src/app/_model/terreno-cpu.ts");
    /* harmony import */


    var _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../../_model/dto/propietario-detail */
    "./src/app/_model/dto/propietario-detail.ts");
    /* harmony import */


    var _model_dto_autoavaluo_cpu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../_model/dto/autoavaluo-cpu */
    "./src/app/_model/dto/autoavaluo-cpu.ts");
    /* harmony import */


    var _service_autoavaluo_cpu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../../_service/autoavaluo-cpu.service */
    "./src/app/_service/autoavaluo-cpu.service.ts");
    /* harmony import */


    var _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../../_model/dto/contribuyente */
    "./src/app/_model/dto/contribuyente.ts");
    /* harmony import */


    var _service_empresa_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../../_service/empresa.service */
    "./src/app/_service/empresa.service.ts");
    /* harmony import */


    var _service_persona_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../../../_service/persona.service */
    "./src/app/_service/persona.service.ts");
    /* harmony import */


    var _model_persona__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../../_model/persona */
    "./src/app/_model/persona.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_model_empresa__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/_model/empresa */
    "./src/app/_model/empresa.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);

    var PredioCpuComponent = /*#__PURE__*/function () {
      function PredioCpuComponent(personaService, empresaService, predioService, autoavaluoCpuService, calzadaService, medidaService, servicioBasicoService, reportService, impuestoDetailService, dialog, autoavaluoCpu) {
        _classCallCheck(this, PredioCpuComponent);

        this.personaService = personaService;
        this.empresaService = empresaService;
        this.predioService = predioService;
        this.autoavaluoCpuService = autoavaluoCpuService;
        this.calzadaService = calzadaService;
        this.medidaService = medidaService;
        this.servicioBasicoService = servicioBasicoService;
        this.reportService = reportService;
        this.impuestoDetailService = impuestoDetailService;
        this.dialog = dialog;
        this.autoavaluoCpu = autoavaluoCpu;
        this.enabled = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["COMMA"]];
        this.personas = [];
        this.empresas = []; // ejemplos

        this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__["Contribuyente"]();
        this.tipoDocumentos = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "RUC",
          length: 11,
          ejemplo: "20542596352",
          meta: {
            nombre: "Razon Social",
            placeholder: "GRUPO ARCOS SRL"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
        this.tipoDocumentosRepresentante = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
      }

      _createClass(PredioCpuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this90 = this;

          this.enabled = this.autoavaluoCpu.impuestoId != 0;
          this.propietariosDetail = this.autoavaluoCpu.propietariosDetail;
          this.predio = this.autoavaluoCpu.terrenoCPU.predio;
          this.terrenoCpu = this.autoavaluoCpu.terrenoCPU;
          this.calzadaService.listar().subscribe(function (calzadas) {
            _this90.calzadas = calzadas;

            if (_this90.terrenoCpu.calzada) {
              _this90.terrenoCpu.calzada = calzadas.filter(function (ele) {
                return ele.id == _this90.terrenoCpu.calzada.id;
              })[0];
            }
          });
          this.medidaService.listar().subscribe(function (medidas) {
            _this90.medidas = medidas;

            if (_this90.terrenoCpu.medida) {
              _this90.terrenoCpu.medida = medidas.filter(function (ele) {
                return ele.id == _this90.terrenoCpu.medida.id;
              })[0];
            }
          });
          this.servicioBasicoService.listar().subscribe(function (serviciosBasicos) {
            return _this90.serviciosBasicos = serviciosBasicos;
          });
          this.predio.ubicacion = this.autoavaluoCpu.terrenoCPU.predio.ubicacion;

          if (this.terrenoCpu.servicioBasico) {
            this.conAgua = this.terrenoCpu.servicioBasico.descripcion.split(" ")[0] == "CON";
            this.conDesague = this.terrenoCpu.servicioBasico.descripcion.split(" ")[2] == "CON";
            this.conLuz = this.terrenoCpu.servicioBasico.descripcion.split(" ")[4] == "CON";
          }

          this.periodo = this.predio.periodo;

          if (this.predio.construcciones.length > 0) {
            this.predio.construcciones.forEach(function (construccion) {
              construccion.murcol = construccion.categorias.charAt(0);
              construccion.techo = construccion.categorias.charAt(1);
              construccion.piso = construccion.categorias.charAt(2);
              construccion.puertventa = construccion.categorias.charAt(3);
              construccion.revestimiento = construccion.categorias.charAt(4);
              construccion.banio = construccion.categorias.charAt(5);
              construccion.instelecsanit = construccion.categorias.charAt(6);
            });
          }
        }
      }, {
        key: "recibirPeriodo",
        value: function recibirPeriodo(periodo) {
          console.log(periodo);
          this.periodo = periodo;
        }
      }, {
        key: "removePropietario",
        value: function removePropietario(contribuyente) {
          var index = this.propietariosDetail.indexOf(contribuyente);

          if (index >= 0) {
            this.propietariosDetail.splice(index, 1);
          }
        }
      }, {
        key: "agregar",
        value: function agregar(tipoDocumento, tipoDocumentoRepresentante) {
          this.contribuyente.tipoDocumento = tipoDocumento.documento;
          var propietarioDetail = new _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_11__["PropietarioDetail"]();

          if (this.contribuyente.tipoDocumento == "DNI" || this.contribuyente.tipoDocumento == "CE") {
            var persona = new _model_persona__WEBPACK_IMPORTED_MODULE_17__["Persona"]();
            persona.id = this.contribuyente.id;
            persona.tipoDocumento = this.contribuyente.tipoDocumento;
            persona.documento = this.contribuyente.documento;
            persona.nombres = this.contribuyente.nombre;
            console.log(persona);
            propietarioDetail.persona = persona;
            this.propietariosDetail.push(propietarioDetail);
          } else if (this.contribuyente.tipoDocumento == "RUC") {
            var empresa = new src_app_model_empresa__WEBPACK_IMPORTED_MODULE_20__["Empresa"]();
            empresa.id = this.contribuyente.id;
            empresa.razonSocial = this.contribuyente.nombre;
            empresa.ruc = this.contribuyente.documento;
            empresa.representante = this.contribuyente.representante;
            empresa.representante.tipoDocumento = tipoDocumentoRepresentante.documento;
            propietarioDetail.empresa = empresa;
            this.propietariosDetail.push(propietarioDetail);
            console.log(empresa);
          }

          this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__["Contribuyente"]();
          this.tipoSelectedRepresentante = undefined;
        }
      }, {
        key: "findConstribuyente",
        value: function findConstribuyente(tipo, documento) {
          var _this91 = this;

          if (tipo == "RUC") {
            this.empresaService.findByRuc(documento).subscribe(function (empresa) {
              if (empresa.id != null) {
                _this91.contribuyente.id = empresa.id;
                _this91.contribuyente.nombre = empresa.razonSocial;
                _this91.contribuyente.documento = empresa.ruc;
                _this91.contribuyente.representante = empresa.representante;

                if (empresa.representante.tipoDocumento === "DNI") {
                  _this91.tipoSelectedRepresentante = {
                    documento: "DNI",
                    length: 8,
                    ejemplo: "75896541",
                    meta: {
                      nombre: "Apellidos y Nombres",
                      placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
                    }
                  };
                } else if (empresa.representante.tipoDocumento === "CE") {
                  _this91.tipoSelectedRepresentante = {
                    documento: "CE",
                    length: 20,
                    ejemplo: "001043328",
                    meta: {
                      nombre: "Nombres",
                      placeholder: "GIANLUCA LAPADULA"
                    }
                  };
                }
              }
            });
          } else {
            this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
              if (persona.id != null) {
                _this91.contribuyente.id = persona.id;
                _this91.contribuyente.tipoDocumento = persona.tipoDocumento;
                _this91.contribuyente.documento = persona.documento;
                _this91.contribuyente.nombre = persona.nombres;
              }
            });
          }
        }
      }, {
        key: "findRepresentante",
        value: function findRepresentante(tipo, documento) {
          var _this92 = this;

          this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
            if (persona.id != null) {
              _this92.contribuyente.representante.id = persona.id;
              _this92.contribuyente.representante.tipoDocumento = persona.tipoDocumento;
              _this92.contribuyente.representante.documento = persona.documento;
              _this92.contribuyente.representante.nombres = persona.nombres;
            }
          });
        }
      }, {
        key: "compare",
        value: function compare(option1, option2) {
          return option1.documento === option2.documento;
        }
      }, {
        key: "findServiciosBasicos",
        value: function findServiciosBasicos() {
          var _this93 = this;

          this.terrenoCpu.servicioBasico = this.serviciosBasicos.filter(function (servicio) {
            var servicios = "".concat(_this93.conAgua ? "CON" : "SIN", " AGUA ").concat(_this93.conDesague ? "CON" : "SIN", " DESAGUE ").concat(_this93.conDesague ? "CON" : "SIN", " LUZ");
            return servicio.descripcion == servicios;
          })[0];
        }
      }, {
        key: "save",
        value: function save() {
          var _this94 = this;

          this.findServiciosBasicos();
          this.predio.construcciones.forEach(function (construccion) {
            construccion.categorias = "".concat(construccion.murcol).concat(construccion.techo).concat(construccion.piso).concat(construccion.puertventa).concat(construccion.revestimiento).concat(construccion.banio).concat(construccion.instelecsanit);
          });
          this.predio.periodo = this.periodo;
          this.terrenoCpu.predio = this.predio;
          this.autoavaluoCpu.propietariosDetail = this.propietariosDetail;
          this.autoavaluoCpu.terrenoCPU = this.terrenoCpu;
          this.autoavaluoCpuService.crear(this.autoavaluoCpu).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_21___default.a.fire({
              title: 'Se registro el autoavaluo',
              showDenyButton: true,
              confirmButtonText: "Mostrar Hoja de Resumen",
              denyButtonText: "Registrar otro",
              icon: "success"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this94.impuestoDetailService.listarPorId(data.impuestoId).subscribe(function (impuesto) {
                  _this94.reportService.openReporteLiquidacion(impuesto, 'A4');
                });
              } else if (result.isDenied) {
                _this94.initialize();
              }

              _this94.reportService.openReporteCPU(data);

              _this94.predioService.listarPageable(0, 10).subscribe(function (data) {
                return _this94.predioService.prediosSubject.next(data);
              });

              _this94.dialog.close();
            });
          });
        }
      }, {
        key: "initialize",
        value: function initialize() {
          this.autoavaluoCpu = new _model_dto_autoavaluo_cpu__WEBPACK_IMPORTED_MODULE_12__["AutoavaluoCpu"]();
          this.propietariosDetail = [];
          this.terrenoCpu = new _model_terreno_cpu__WEBPACK_IMPORTED_MODULE_10__["TerrenoCpu"]();
          this.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_9__["Predio"]();
          this.predio.construcciones = [];
          this.predio.ubicacion = new _model_ubicacion__WEBPACK_IMPORTED_MODULE_8__["Ubicacion"]();
          this.personas = [];
          this.empresas = [];
          this.conAgua = false;
          this.conDesague = false;
          this.conLuz = false;
        }
      }]);

      return PredioCpuComponent;
    }();

    PredioCpuComponent.ctorParameters = function () {
      return [{
        type: _service_persona_service__WEBPACK_IMPORTED_MODULE_16__["PersonaService"]
      }, {
        type: _service_empresa_service__WEBPACK_IMPORTED_MODULE_15__["EmpresaService"]
      }, {
        type: _service_predio_service__WEBPACK_IMPORTED_MODULE_1__["PredioService"]
      }, {
        type: _service_autoavaluo_cpu_service__WEBPACK_IMPORTED_MODULE_13__["AutoavaluoCpuService"]
      }, {
        type: _service_calzada_service__WEBPACK_IMPORTED_MODULE_7__["CalzadaService"]
      }, {
        type: _service_medida_service__WEBPACK_IMPORTED_MODULE_6__["MedidaService"]
      }, {
        type: _service_servicio_basico_service__WEBPACK_IMPORTED_MODULE_5__["ServicioBasicoService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]
      }, {
        type: _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_3__["ImpuestoDetailService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _model_dto_autoavaluo_cpu__WEBPACK_IMPORTED_MODULE_12__["AutoavaluoCpu"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_19__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    PredioCpuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["Component"])({
      selector: 'app-predio-cpu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predio-cpu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-cpu/predio-cpu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predio-cpu.component.scss */
      "./src/app/pages/predio/predio-cpu/predio-cpu.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], PredioCpuComponent);
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-rustico/predio-rustico.component.scss": function srcAppPagesPredioPredioRusticoPredioRusticoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWRpby9wcmVkaW8tcnVzdGljby9wcmVkaW8tcnVzdGljby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-rustico/predio-rustico.component.ts": function srcAppPagesPredioPredioRusticoPredioRusticoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredioRusticoComponent", function () {
      return PredioRusticoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_predio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/predio.service */
    "./src/app/_service/predio.service.ts");
    /* harmony import */


    var _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/impuesto-detail.service */
    "./src/app/_service/impuesto-detail.service.ts");
    /* harmony import */


    var _model_terreno_rustico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/terreno-rustico */
    "./src/app/_model/terreno-rustico.ts");
    /* harmony import */


    var _model_dto_autoavaluo_rustico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_model/dto/autoavaluo-rustico */
    "./src/app/_model/dto/autoavaluo-rustico.ts");
    /* harmony import */


    var _service_autoavaluo_rustico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_service/autoavaluo-rustico.service */
    "./src/app/_service/autoavaluo-rustico.service.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _model_persona__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_model/persona */
    "./src/app/_model/persona.ts");
    /* harmony import */


    var _model_empresa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../_model/empresa */
    "./src/app/_model/empresa.ts");
    /* harmony import */


    var _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../_model/dto/contribuyente */
    "./src/app/_model/dto/contribuyente.ts");
    /* harmony import */


    var _model_ubicacion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../_model/ubicacion */
    "./src/app/_model/ubicacion.ts");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _service_grupo_tierra_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../_service/grupo-tierra.service */
    "./src/app/_service/grupo-tierra.service.ts");
    /* harmony import */


    var _service_altitud_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../../_service/altitud.service */
    "./src/app/_service/altitud.service.ts");
    /* harmony import */


    var _service_calidad_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../../_service/calidad.service */
    "./src/app/_service/calidad.service.ts");
    /* harmony import */


    var _service_empresa_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../../_service/empresa.service */
    "./src/app/_service/empresa.service.ts");
    /* harmony import */


    var _service_persona_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../../../_service/persona.service */
    "./src/app/_service/persona.service.ts");
    /* harmony import */


    var _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../../_model/dto/propietario-detail */
    "./src/app/_model/dto/propietario-detail.ts");
    /* harmony import */


    var _model_predio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../../../_model/predio */
    "./src/app/_model/predio.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var PredioRusticoComponent = /*#__PURE__*/function () {
      function PredioRusticoComponent(personaService, empresaService, predioService, dialog, autoavaluoRustico, autoavaluoRusticoService, calidadService, altitudService, grupoTierraService, reportService, impuestoDetailService) {
        _classCallCheck(this, PredioRusticoComponent);

        this.personaService = personaService;
        this.empresaService = empresaService;
        this.predioService = predioService;
        this.dialog = dialog;
        this.autoavaluoRustico = autoavaluoRustico;
        this.autoavaluoRusticoService = autoavaluoRusticoService;
        this.calidadService = calidadService;
        this.altitudService = altitudService;
        this.grupoTierraService = grupoTierraService;
        this.reportService = reportService;
        this.impuestoDetailService = impuestoDetailService;
        this.enabled = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.personas = [];
        this.empresas = []; // ejemplos

        this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_9__["Contribuyente"]();
        this.tipoDocumentos = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "RUC",
          length: 11,
          ejemplo: "20542596352",
          meta: {
            nombre: "Razon Social",
            placeholder: "GRUPO ARCOS SRL"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
        this.tipoDocumentosRepresentante = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
      }

      _createClass(PredioRusticoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this95 = this;

          this.grupoTierraService.listar().subscribe(function (data) {
            _this95.grupoTierras = data;

            if (_this95.autoavaluoRustico.terrenoRustico.grupoTierra) {
              _this95.autoavaluoRustico.terrenoRustico.grupoTierra = data.filter(function (element) {
                return _this95.autoavaluoRustico.terrenoRustico.grupoTierra.id == element.id;
              })[0];
            }
          });
          this.calidadService.listar().subscribe(function (data) {
            _this95.calidades = data;

            if (_this95.autoavaluoRustico.terrenoRustico.calidad) {
              _this95.autoavaluoRustico.terrenoRustico.calidad = data.filter(function (element) {
                return _this95.autoavaluoRustico.terrenoRustico.calidad.id == element.id;
              })[0];
            }
          });
          this.altitudService.listar().subscribe(function (data) {
            _this95.altitudes = data;

            if (_this95.autoavaluoRustico.terrenoRustico.altitud) {
              _this95.autoavaluoRustico.terrenoRustico.altitud = data.filter(function (element) {
                return _this95.autoavaluoRustico.terrenoRustico.altitud.id == element.id;
              })[0];
            }
          });
          this.propietariosDetail = this.autoavaluoRustico.propietariosDetail;
          this.predio = this.autoavaluoRustico.terrenoRustico.predio;
          this.terrenoRustico = this.autoavaluoRustico.terrenoRustico;
          this.predio.ubicacion = this.autoavaluoRustico.terrenoRustico.predio.ubicacion;
          this.periodo = this.predio.periodo;

          if (this.predio.construcciones.length > 0) {
            this.predio.construcciones.forEach(function (construccion) {
              construccion.murcol = construccion.categorias.charAt(0);
              construccion.techo = construccion.categorias.charAt(1);
              construccion.piso = construccion.categorias.charAt(2);
              construccion.puertventa = construccion.categorias.charAt(3);
              construccion.revestimiento = construccion.categorias.charAt(4);
              construccion.banio = construccion.categorias.charAt(5);
              construccion.instelecsanit = construccion.categorias.charAt(6);
            });
          }
        }
      }, {
        key: "recibirPeriodo",
        value: function recibirPeriodo(periodo) {
          console.log(periodo);
          this.periodo = periodo;
        }
      }, {
        key: "removePropietario",
        value: function removePropietario(contribuyente) {
          var index = this.propietariosDetail.indexOf(contribuyente);

          if (index >= 0) {
            this.propietariosDetail.splice(index, 1);
          }
        }
      }, {
        key: "agregar",
        value: function agregar(tipoDocumento, tipoDocumentoRepresentante) {
          this.contribuyente.tipoDocumento = tipoDocumento.documento;
          var propietarioDetail = new _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_17__["PropietarioDetail"]();

          if (this.contribuyente.tipoDocumento == "DNI" || this.contribuyente.tipoDocumento == "CE") {
            var persona = new _model_persona__WEBPACK_IMPORTED_MODULE_7__["Persona"]();
            persona.id = this.contribuyente.id;
            persona.tipoDocumento = this.contribuyente.tipoDocumento;
            persona.documento = this.contribuyente.documento;
            persona.nombres = this.contribuyente.nombre;
            console.log(persona);
            propietarioDetail.persona = persona;
            this.propietariosDetail.push(propietarioDetail);
          } else if (this.contribuyente.tipoDocumento == "RUC") {
            var empresa = new _model_empresa__WEBPACK_IMPORTED_MODULE_8__["Empresa"]();
            empresa.id = this.contribuyente.id;
            empresa.razonSocial = this.contribuyente.nombre;
            empresa.ruc = this.contribuyente.documento;
            empresa.representante = this.contribuyente.representante;
            empresa.representante.tipoDocumento = tipoDocumentoRepresentante.documento;
            propietarioDetail.empresa = empresa;
            this.propietariosDetail.push(propietarioDetail);
            console.log(empresa);
          } // this.contribuyente.id = undefined;
          // this.contribuyente.documento = undefined;
          // this.contribuyente.nombre = undefined;
          // this.contribuyente.tipoDocumento = undefined;
          // this.contribuyente.representante.id = undefined;
          // this.contribuyente.representante.tipoDocumento = undefined;
          // this.contribuyente.representante.documento = undefined;
          // this.contribuyente.representante.nombres = undefined;
          // this.contribuyente.representante.propietario = undefined;


          this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_9__["Contribuyente"]();
          this.tipoSelectedRepresentante = undefined;
        }
      }, {
        key: "findConstribuyente",
        value: function findConstribuyente(tipo, documento) {
          var _this96 = this;

          if (tipo == "RUC") {
            this.empresaService.findByRuc(documento).subscribe(function (empresa) {
              if (empresa.id != null) {
                _this96.contribuyente.id = empresa.id;
                _this96.contribuyente.nombre = empresa.razonSocial;
                _this96.contribuyente.documento = empresa.ruc;
                _this96.contribuyente.representante = empresa.representante;

                if (empresa.representante.tipoDocumento === "DNI") {
                  _this96.tipoSelectedRepresentante = {
                    documento: "DNI",
                    length: 8,
                    ejemplo: "75896541",
                    meta: {
                      nombre: "Apellidos y Nombres",
                      placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
                    }
                  };
                } else if (empresa.representante.tipoDocumento === "CE") {
                  _this96.tipoSelectedRepresentante = {
                    documento: "CE",
                    length: 20,
                    ejemplo: "001043328",
                    meta: {
                      nombre: "Nombres",
                      placeholder: "GIANLUCA LAPADULA"
                    }
                  };
                }
              }
            });
          } else {
            this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
              if (persona.id != null) {
                _this96.contribuyente.id = persona.id;
                _this96.contribuyente.tipoDocumento = persona.tipoDocumento;
                _this96.contribuyente.documento = persona.documento;
                _this96.contribuyente.nombre = persona.nombres;
              }
            });
          }
        }
      }, {
        key: "findRepresentante",
        value: function findRepresentante(tipo, documento) {
          var _this97 = this;

          this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
            if (persona.id != null) {
              _this97.contribuyente.representante.id = persona.id;
              _this97.contribuyente.representante.tipoDocumento = persona.tipoDocumento;
              _this97.contribuyente.representante.documento = persona.documento;
              _this97.contribuyente.representante.nombres = persona.nombres;
            }
          });
        }
      }, {
        key: "compare",
        value: function compare(option1, option2) {
          return option1.documento === option2.documento;
        }
      }, {
        key: "save",
        value: function save() {
          var _this98 = this;

          this.predio.construcciones.forEach(function (construccion) {
            construccion.categorias = "".concat(construccion.murcol).concat(construccion.techo).concat(construccion.piso).concat(construccion.puertventa).concat(construccion.revestimiento).concat(construccion.banio).concat(construccion.instelecsanit);
          });
          this.predio.periodo = this.periodo;
          this.terrenoRustico.predio = this.predio;
          this.autoavaluoRustico.propietariosDetail = this.propietariosDetail;
          this.autoavaluoRustico.terrenoRustico = this.terrenoRustico;
          this.autoavaluoRusticoService.crear(this.autoavaluoRustico).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
              title: 'Se registro el autoavaluo',
              showDenyButton: true,
              confirmButtonText: "Mostrar Hoja de Resumen",
              denyButtonText: "Registrar otro",
              icon: "success"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this98.impuestoDetailService.listarPorId(data.impuestoId).subscribe(function (impuesto) {
                  _this98.reportService.openReporteLiquidacion(impuesto, 'A4');
                });
              } else if (result.isDenied) {
                _this98.initialize();
              }
            });

            _this98.reportService.openReporteRustico(data);

            _this98.predioService.listarPageable(0, 10).subscribe(function (data) {
              return _this98.predioService.prediosSubject.next(data);
            });

            _this98.dialog.close();
          });
          this.predioService.listarPageable(0, 10).subscribe(function (data) {
            return _this98.predioService.prediosSubject.next(data);
          });
        }
      }, {
        key: "initialize",
        value: function initialize() {
          this.autoavaluoRustico = new _model_dto_autoavaluo_rustico__WEBPACK_IMPORTED_MODULE_4__["AutoavaluoRustico"]();
          this.propietariosDetail = [];
          this.terrenoRustico = new _model_terreno_rustico__WEBPACK_IMPORTED_MODULE_3__["TerrenoRustico"]();
          this.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_18__["Predio"]();
          this.predio.construcciones = [];
          this.predio.ubicacion = new _model_ubicacion__WEBPACK_IMPORTED_MODULE_10__["Ubicacion"]();
          this.personas = [];
          this.empresas = [];
          this.conAgua = false;
          this.conDesague = false;
          this.conLuz = false;
        }
      }]);

      return PredioRusticoComponent;
    }();

    PredioRusticoComponent.ctorParameters = function () {
      return [{
        type: _service_persona_service__WEBPACK_IMPORTED_MODULE_16__["PersonaService"]
      }, {
        type: _service_empresa_service__WEBPACK_IMPORTED_MODULE_15__["EmpresaService"]
      }, {
        type: _service_predio_service__WEBPACK_IMPORTED_MODULE_1__["PredioService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogRef"]
      }, {
        type: _model_dto_autoavaluo_rustico__WEBPACK_IMPORTED_MODULE_4__["AutoavaluoRustico"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_19__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_autoavaluo_rustico_service__WEBPACK_IMPORTED_MODULE_5__["AutoavaluoRusticoService"]
      }, {
        type: _service_calidad_service__WEBPACK_IMPORTED_MODULE_14__["CalidadService"]
      }, {
        type: _service_altitud_service__WEBPACK_IMPORTED_MODULE_13__["AltitudService"]
      }, {
        type: _service_grupo_tierra_service__WEBPACK_IMPORTED_MODULE_12__["GrupoTierraService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"]
      }, {
        type: _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_2__["ImpuestoDetailService"]
      }];
    };

    PredioRusticoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["Component"])({
      selector: 'app-predio-rustico',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predio-rustico.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-rustico/predio-rustico.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predio-rustico.component.scss */
      "./src/app/pages/predio/predio-rustico/predio-rustico.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_21__["MAT_DIALOG_DATA"]))], PredioRusticoComponent);
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-urbano/predio-urbano.component.scss": function srcAppPagesPredioPredioUrbanoPredioUrbanoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWRpby9wcmVkaW8tdXJiYW5vL3ByZWRpby11cmJhbm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/predio/predio-urbano/predio-urbano.component.ts": function srcAppPagesPredioPredioUrbanoPredioUrbanoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredioUrbanoComponent", function () {
      return PredioUrbanoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _service_predio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/predio.service */
    "./src/app/_service/predio.service.ts");
    /* harmony import */


    var _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_service/impuesto-detail.service */
    "./src/app/_service/impuesto-detail.service.ts");
    /* harmony import */


    var _service_geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_service/geocode.service */
    "./src/app/_service/geocode.service.ts");
    /* harmony import */


    var _model_via__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../_model/via */
    "./src/app/_model/via.ts");
    /* harmony import */


    var _service_via_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../_service/via.service */
    "./src/app/_service/via.service.ts");
    /* harmony import */


    var _service_autoavaluo_urbano_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../_service/autoavaluo-urbano.service */
    "./src/app/_service/autoavaluo-urbano.service.ts");
    /* harmony import */


    var _model_terreno_urbano__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../_model/terreno-urbano */
    "./src/app/_model/terreno-urbano.ts");
    /* harmony import */


    var _model_dto_autoavaluo_urbano__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../_model/dto/autoavaluo-urbano */
    "./src/app/_model/dto/autoavaluo-urbano.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _model_persona__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../_model/persona */
    "./src/app/_model/persona.ts");
    /* harmony import */


    var _model_empresa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../../_model/empresa */
    "./src/app/_model/empresa.ts");
    /* harmony import */


    var _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../../_model/dto/contribuyente */
    "./src/app/_model/dto/contribuyente.ts");
    /* harmony import */


    var _model_ubicacion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../../_model/ubicacion */
    "./src/app/_model/ubicacion.ts");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _service_empresa_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../../_service/empresa.service */
    "./src/app/_service/empresa.service.ts");
    /* harmony import */


    var _service_persona_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../../../_service/persona.service */
    "./src/app/_service/persona.service.ts");
    /* harmony import */


    var _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../../../_model/dto/propietario-detail */
    "./src/app/_model/dto/propietario-detail.ts");
    /* harmony import */


    var _model_predio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./../../../_model/predio */
    "./src/app/_model/predio.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_directives_validator_via_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/app/_directives/validator-via.directive */
    "./src/app/_directives/validator-via.directive.ts");

    var PredioUrbanoComponent = /*#__PURE__*/function () {
      function PredioUrbanoComponent(personaService, empresaService, predioService, dialog, autoavaluoUrbano, autoavaluoUrbanoService, reportService, viaService, geocodeService, impuestoDetailService) {
        _classCallCheck(this, PredioUrbanoComponent);

        this.personaService = personaService;
        this.empresaService = empresaService;
        this.predioService = predioService;
        this.dialog = dialog;
        this.autoavaluoUrbano = autoavaluoUrbano;
        this.autoavaluoUrbanoService = autoavaluoUrbanoService;
        this.reportService = reportService;
        this.viaService = viaService;
        this.geocodeService = geocodeService;
        this.impuestoDetailService = impuestoDetailService;
        this.viasCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormControl"]();
        this.enabled = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["COMMA"]];
        this.personas = [];
        this.empresas = []; // ejemplos

        this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__["Contribuyente"]();
        this.tipoDocumentos = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "RUC",
          length: 11,
          ejemplo: "20542596352",
          meta: {
            nombre: "Razon Social",
            placeholder: "GRUPO ARCOS SRL"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
        this.tipoDocumentosRepresentante = [{
          documento: "DNI",
          length: 8,
          ejemplo: "75896541",
          meta: {
            nombre: "Apellidos y Nombres",
            placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
          }
        }, {
          documento: "CE",
          length: 20,
          ejemplo: "001043328",
          meta: {
            nombre: "Nombres",
            placeholder: "GIANLUCA LAPADULA"
          }
        }];
        this.title = "titulo";
        this.position = {
          lat: -9.7811,
          lng: -77.6126
        };
        this.label = {
          color: "red"
        };
        this.markerOptions = {
          draggable: true
        };
      }

      _createClass(PredioUrbanoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this99 = this;

          this.viaService.listarVias().subscribe(function (data) {
            _this99.nombreVias = data;
            _this99.viasCtrl.validator = Object(src_app_directives_validator_via_directive__WEBPACK_IMPORTED_MODULE_24__["validatorViaName"])(_this99.nombreVias);
            _this99.filteredVias = _this99.viasCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["map"])(function (via) {
              return via ? _this99._filterVias(via) : _this99.nombreVias.slice();
            }));
          });
          this.viaService.listar().subscribe(function (data) {
            _this99.vias = data;

            if (_this99.autoavaluoUrbano.terrenoUrbano.via.id) {
              _this99.updateVias();

              _this99.terrenoUrbano.via = _this99.viasNew.filter(function (via) {
                return via.id == _this99.terrenoUrbano.via.id;
              })[0];
            }
          }); //Marcar en el mapa

          if (this.autoavaluoUrbano.terrenoUrbano.predio.ubicacion) {
            this.markerPosition = {
              lat: this.autoavaluoUrbano.terrenoUrbano.predio.ubicacion.latitud,
              lng: this.autoavaluoUrbano.terrenoUrbano.predio.ubicacion.longitud
            };
          } //Fin marcar en el mapa


          this.propietariosDetail = this.autoavaluoUrbano.propietariosDetail;
          this.predio = this.autoavaluoUrbano.terrenoUrbano.predio;
          this.terrenoUrbano = this.autoavaluoUrbano.terrenoUrbano;
          this.predio.ubicacion = this.autoavaluoUrbano.terrenoUrbano.predio.ubicacion;
          this.periodo = this.predio.periodo;

          if (this.predio.construcciones.length > 0) {
            this.predio.construcciones.forEach(function (construccion) {
              construccion.murcol = construccion.categorias.charAt(0);
              construccion.techo = construccion.categorias.charAt(1);
              construccion.piso = construccion.categorias.charAt(2);
              construccion.puertventa = construccion.categorias.charAt(3);
              construccion.revestimiento = construccion.categorias.charAt(4);
              construccion.banio = construccion.categorias.charAt(5);
              construccion.instelecsanit = construccion.categorias.charAt(6);
            });
          }
        }
      }, {
        key: "_filterVias",
        value: function _filterVias(value) {
          var filterValue = value.toLowerCase();
          return this.nombreVias.filter(function (via) {
            return via.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "recibirPeriodo",
        value: function recibirPeriodo(periodo) {
          this.periodo = periodo;
        }
      }, {
        key: "removePropietario",
        value: function removePropietario(contribuyente) {
          var index = this.propietariosDetail.indexOf(contribuyente);

          if (index >= 0) {
            this.propietariosDetail.splice(index, 1);
          }
        }
      }, {
        key: "agregar",
        value: function agregar(tipoDocumento, tipoDocumentoRepresentante) {
          this.contribuyente.tipoDocumento = tipoDocumento.documento;
          var propietarioDetail = new _model_dto_propietario_detail__WEBPACK_IMPORTED_MODULE_19__["PropietarioDetail"]();

          if (this.contribuyente.tipoDocumento == "DNI" || this.contribuyente.tipoDocumento == "CE") {
            var persona = new _model_persona__WEBPACK_IMPORTED_MODULE_12__["Persona"]();
            persona.id = this.contribuyente.id;
            persona.tipoDocumento = this.contribuyente.tipoDocumento;
            persona.documento = this.contribuyente.documento;
            persona.nombres = this.contribuyente.nombre;
            propietarioDetail.persona = persona;
            this.propietariosDetail.push(propietarioDetail);
          } else if (this.contribuyente.tipoDocumento == "RUC") {
            var empresa = new _model_empresa__WEBPACK_IMPORTED_MODULE_13__["Empresa"]();
            empresa.id = this.contribuyente.id;
            empresa.razonSocial = this.contribuyente.nombre;
            empresa.ruc = this.contribuyente.documento;
            empresa.representante = this.contribuyente.representante;
            empresa.representante.tipoDocumento = tipoDocumentoRepresentante.documento;
            propietarioDetail.empresa = empresa;
            this.propietariosDetail.push(propietarioDetail);
          }

          this.contribuyente = new _model_dto_contribuyente__WEBPACK_IMPORTED_MODULE_14__["Contribuyente"]();
          this.tipoSelectedRepresentante = undefined;
        }
      }, {
        key: "findConstribuyente",
        value: function findConstribuyente(tipo, documento) {
          var _this100 = this;

          if (tipo == "RUC") {
            this.empresaService.findByRuc(documento).subscribe(function (empresa) {
              if (empresa.id != null) {
                _this100.contribuyente.id = empresa.id;
                _this100.contribuyente.nombre = empresa.razonSocial;
                _this100.contribuyente.documento = empresa.ruc;
                _this100.contribuyente.representante = empresa.representante;

                if (empresa.representante.tipoDocumento === "DNI") {
                  _this100.tipoSelectedRepresentante = {
                    documento: "DNI",
                    length: 8,
                    ejemplo: "75896541",
                    meta: {
                      nombre: "Apellidos y Nombres",
                      placeholder: "RODRIGUEZ ARTEAGA FRANCISCO ROBERTO"
                    }
                  };
                } else if (empresa.representante.tipoDocumento === "CE") {
                  _this100.tipoSelectedRepresentante = {
                    documento: "CE",
                    length: 20,
                    ejemplo: "001043328",
                    meta: {
                      nombre: "Nombres",
                      placeholder: "GIANLUCA LAPADULA"
                    }
                  };
                }
              }
            });
          } else {
            this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
              if (persona.id != null) {
                _this100.contribuyente.id = persona.id;
                _this100.contribuyente.tipoDocumento = persona.tipoDocumento;
                _this100.contribuyente.documento = persona.documento;
                _this100.contribuyente.nombre = persona.nombres;
              }
            });
          }
        }
      }, {
        key: "findRepresentante",
        value: function findRepresentante(tipo, documento) {
          var _this101 = this;

          this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
            if (persona.id != null) {
              _this101.contribuyente.representante.id = persona.id;
              _this101.contribuyente.representante.tipoDocumento = persona.tipoDocumento;
              _this101.contribuyente.representante.documento = persona.documento;
              _this101.contribuyente.representante.nombres = persona.nombres;
            }
          });
        }
      }, {
        key: "compare",
        value: function compare(option1, option2) {
          return option1.documento === option2.documento;
        }
      }, {
        key: "save",
        value: function save() {
          var _this102 = this;

          this.predio.construcciones.forEach(function (construccion) {
            construccion.categorias = "".concat(construccion.murcol).concat(construccion.techo).concat(construccion.piso).concat(construccion.puertventa).concat(construccion.revestimiento).concat(construccion.banio).concat(construccion.instelecsanit);
          });
          this.predio.periodo = this.periodo;
          this.predio.ubicacion.descripcion = this.terrenoUrbano.via.nombreVia;
          this.terrenoUrbano.predio = this.predio;
          this.autoavaluoUrbano.propietariosDetail = this.propietariosDetail;
          this.autoavaluoUrbano.terrenoUrbano = this.terrenoUrbano;
          this.autoavaluoUrbanoService.crear(this.autoavaluoUrbano).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_21___default.a.fire({
              title: 'Se registro el autoavaluo',
              showDenyButton: true,
              confirmButtonText: "Mostrar Hoja de Resumen",
              denyButtonText: "Registrar otro",
              icon: "success"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this102.impuestoDetailService.listarPorId(data.impuestoId).subscribe(function (impuesto) {
                  _this102.reportService.openReporteLiquidacion(impuesto, 'A4');
                });
              } else if (result.isDenied) {
                _this102.initialize();
              }

              _this102.reportService.openReporteUrbano(data);

              _this102.predioService.listarPageable(0, 10).subscribe(function (data) {
                return _this102.predioService.prediosSubject.next(data);
              });

              _this102.dialog.close();
            });
          });
          this.predioService.listarPageable(0, 10).subscribe(function (data) {
            return _this102.predioService.prediosSubject.next(data);
          });
        }
      }, {
        key: "initialize",
        value: function initialize() {
          this.terrenoUrbano = new _model_terreno_urbano__WEBPACK_IMPORTED_MODULE_8__["TerrenoUrbano"]();
          this.terrenoUrbano.via = new _model_via__WEBPACK_IMPORTED_MODULE_5__["Via"]();
          this.autoavaluoUrbano = new _model_dto_autoavaluo_urbano__WEBPACK_IMPORTED_MODULE_9__["AutoavaluoUrbano"]();
          this.propietariosDetail = [];
          this.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_20__["Predio"]();
          this.predio.construcciones = [];
          this.predio.ubicacion = new _model_ubicacion__WEBPACK_IMPORTED_MODULE_15__["Ubicacion"]();
          this.personas = [];
          this.empresas = [];
        }
      }, {
        key: "updateVias",
        value: function updateVias() {
          var _this103 = this;

          this.viasNew = this.vias.filter(function (via) {
            return via.nombreVia == _this103.terrenoUrbano.via.nombreVia;
          });
        }
      }, {
        key: "setMarker",
        value: function setMarker(event) {
          this.markerPosition = event.latLng.toJSON();
          this.predio.ubicacion.latitud = this.markerPosition.lat;
          this.predio.ubicacion.longitud = this.markerPosition.lng;
          this.geocodeService.getAddress(this.markerPosition.lat, this.markerPosition.lng).subscribe(function (data) {
            return console.log(data);
          });
        }
      }]);

      return PredioUrbanoComponent;
    }();

    PredioUrbanoComponent.ctorParameters = function () {
      return [{
        type: _service_persona_service__WEBPACK_IMPORTED_MODULE_18__["PersonaService"]
      }, {
        type: _service_empresa_service__WEBPACK_IMPORTED_MODULE_17__["EmpresaService"]
      }, {
        type: _service_predio_service__WEBPACK_IMPORTED_MODULE_2__["PredioService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _model_dto_autoavaluo_urbano__WEBPACK_IMPORTED_MODULE_9__["AutoavaluoUrbano"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_autoavaluo_urbano_service__WEBPACK_IMPORTED_MODULE_7__["AutoavaluoUrbanoService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_16__["ReportsService"]
      }, {
        type: _service_via_service__WEBPACK_IMPORTED_MODULE_6__["ViaService"]
      }, {
        type: _service_geocode_service__WEBPACK_IMPORTED_MODULE_4__["GeocodeService"]
      }, {
        type: _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_3__["ImpuestoDetailService"]
      }];
    };

    PredioUrbanoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
      selector: 'app-predio-urbano',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predio-urbano.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio-urbano/predio-urbano.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predio-urbano.component.scss */
      "./src/app/pages/predio/predio-urbano/predio-urbano.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], PredioUrbanoComponent);
    /***/
  },

  /***/
  "./src/app/pages/predio/predio.component.scss": function srcAppPagesPredioPredioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWRpby9wcmVkaW8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/predio/predio.component.ts": function srcAppPagesPredioPredioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredioComponent", function () {
      return PredioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_service/impuesto-detail.service */
    "./src/app/_service/impuesto-detail.service.ts");
    /* harmony import */


    var _predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./predio-urbano/predio-urbano.component */
    "./src/app/pages/predio/predio-urbano/predio-urbano.component.ts");
    /* harmony import */


    var _model_terreno_urbano__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../_model/terreno-urbano */
    "./src/app/_model/terreno-urbano.ts");
    /* harmony import */


    var _predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./predio-rustico/predio-rustico.component */
    "./src/app/pages/predio/predio-rustico/predio-rustico.component.ts");
    /* harmony import */


    var _model_dto_autoavaluo_rustico__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../_model/dto/autoavaluo-rustico */
    "./src/app/_model/dto/autoavaluo-rustico.ts");
    /* harmony import */


    var _predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./predio-cpu/predio-cpu.component */
    "./src/app/pages/predio/predio-cpu/predio-cpu.component.ts");
    /* harmony import */


    var _model_dto_autoavaluo_cpu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../_model/dto/autoavaluo-cpu */
    "./src/app/_model/dto/autoavaluo-cpu.ts");
    /* harmony import */


    var _service_autoavaluo_urbano_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../_service/autoavaluo-urbano.service */
    "./src/app/_service/autoavaluo-urbano.service.ts");
    /* harmony import */


    var _service_autoavaluo_rustico_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../_service/autoavaluo-rustico.service */
    "./src/app/_service/autoavaluo-rustico.service.ts");
    /* harmony import */


    var _service_autoavaluo_cpu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../_service/autoavaluo-cpu.service */
    "./src/app/_service/autoavaluo-cpu.service.ts");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _model_predio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../_model/predio */
    "./src/app/_model/predio.ts");
    /* harmony import */


    var _service_predio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../_service/predio.service */
    "./src/app/_service/predio.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_model_terreno_cpu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/_model/terreno-cpu */
    "./src/app/_model/terreno-cpu.ts");
    /* harmony import */


    var src_app_model_ubicacion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/_model/ubicacion */
    "./src/app/_model/ubicacion.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var src_app_model_terreno_rustico__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/_model/terreno-rustico */
    "./src/app/_model/terreno-rustico.ts");
    /* harmony import */


    var src_app_model_dto_autoavaluo_urbano__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/app/_model/dto/autoavaluo-urbano */
    "./src/app/_model/dto/autoavaluo-urbano.ts");
    /* harmony import */


    var src_app_model_via__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/app/_model/via */
    "./src/app/_model/via.ts");

    var PredioComponent = /*#__PURE__*/function () {
      function PredioComponent(predioService, reportsService, autoavaluoCpuService, autoavaluoRusticoService, autoavaluoUrbanoService, impuestoDetailService, dialog) {
        _classCallCheck(this, PredioComponent);

        this.predioService = predioService;
        this.reportsService = reportsService;
        this.autoavaluoCpuService = autoavaluoCpuService;
        this.autoavaluoRusticoService = autoavaluoRusticoService;
        this.autoavaluoUrbanoService = autoavaluoUrbanoService;
        this.impuestoDetailService = impuestoDetailService;
        this.dialog = dialog;
        this.cantidad = 0;
        this.displayedColumns = ['id', 'ubicacion', 'tipo', 'autoavaluo', 'periodo', 'estado', 'acciones'];
      }

      _createClass(PredioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this104 = this;

          this.filterBy = "personas";
          this.predioService.listarPageable(0, 10).subscribe(function (data) {
            return _this104.predioService.prediosSubject.next(data);
          });
          this.predioService.prediosSubject.subscribe(function (data) {
            _this104.cantidad = data.totalElements;
            _this104.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](data.content);
            _this104.dataSource.sort = _this104.sort;
            _this104.paginator.pageIndex = data.pageable.number;
            _this104.paginator.pageSize = data.size;
          });
          this.paginator.firstPage();
        }
      }, {
        key: "mostrarMas",
        value: function mostrarMas(e) {
          var _this105 = this;

          if (this.filter) {
            this.predioService.listarPageable(e.pageIndex, e.pageSize, this.filterBy, this.filter).subscribe(function (data) {
              _this105.predioService.prediosSubject.next(data);
            });
          } else {
            this.predioService.listarPageable(e.pageIndex, e.pageSize).subscribe(function (data) {
              _this105.predioService.prediosSubject.next(data);
            });
          }
        }
      }, {
        key: "buscar",
        value: function buscar(filter) {
          var _this106 = this;

          this.predioService.listarPageable(this.paginator.pageIndex, this.paginator.pageSize, this.filterBy, filter).subscribe(function (data) {
            return _this106.predioService.prediosSubject.next(data);
          });
        }
      }, {
        key: "print",
        value: function print(predio) {
          var _this107 = this;

          this.impuestoDetailService.getByPredioId(predio.id).subscribe(function (impuesto) {
            if (impuesto.printable === true) {
              if (predio.tipoPredio == "PCPU") {
                var p = _this107.autoavaluoCpuService.getByPredioId(predio.id).subscribe(function (p) {
                  _this107.reportsService.openReporteCPU(p);
                });
              } else if (predio.tipoPredio == "PU") {
                var _p = _this107.autoavaluoUrbanoService.getByPredioId(predio.id).subscribe(function (p) {
                  _this107.reportsService.openReporteUrbano(p);
                });
              } else if (predio.tipoPredio == "PR") {
                var _p2 = _this107.autoavaluoRusticoService.getByPredioId(predio.id).subscribe(function (p) {
                  _this107.reportsService.openReporteRustico(p);
                });
              }
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire("Error", "Impuesto aun no cancelado", "error");
            }
          });
        }
      }, {
        key: "abstract",
        value: function abstract(predio) {
          var _this108 = this;

          this.impuestoDetailService.getByPredioId(predio.id).subscribe(function (impuesto) {
            _this108.impuestoDetailService.listarPorId(impuesto.id).subscribe(function (impuesto) {
              _this108.reportsService.openReporteLiquidacion(impuesto, 'A4');
            });
          });
        }
      }, {
        key: "edit",
        value: function edit(predio) {
          var _this109 = this;

          if (predio.tipoPredio == "PCPU") {
            this.autoavaluoCpuService.getByPredioId(predio.id).subscribe(function (p) {
              _this109.openDialogCPU(p);
            });
          } else if (predio.tipoPredio == "PU") {
            this.autoavaluoUrbanoService.getByPredioId(predio.id).subscribe(function (p) {
              _this109.openDialogUrbano(p);
            });
          } else if (predio.tipoPredio == "PR") {
            this.autoavaluoRusticoService.getByPredioId(predio.id).subscribe(function (p) {
              _this109.openDialogRustico(p);
            });
          }
        }
      }, {
        key: "openDialogUrbano",
        value: function openDialogUrbano(autoavaluoUrbano) {
          if (!autoavaluoUrbano) {
            autoavaluoUrbano = new src_app_model_dto_autoavaluo_urbano__WEBPACK_IMPORTED_MODULE_22__["AutoavaluoUrbano"]();
            autoavaluoUrbano.terrenoUrbano = new _model_terreno_urbano__WEBPACK_IMPORTED_MODULE_3__["TerrenoUrbano"]();
            autoavaluoUrbano.terrenoUrbano.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_14__["Predio"]();
            autoavaluoUrbano.terrenoUrbano.predio.ubicacion = new src_app_model_ubicacion__WEBPACK_IMPORTED_MODULE_19__["Ubicacion"]();
            autoavaluoUrbano.terrenoUrbano.predio.construcciones = [];
            autoavaluoUrbano.terrenoUrbano.predio.instalacionesPredio = [];
            autoavaluoUrbano.propietariosDetail = [];
            autoavaluoUrbano.terrenoUrbano.via = new src_app_model_via__WEBPACK_IMPORTED_MODULE_23__["Via"]();
          }

          console.log(autoavaluoUrbano);
          this.dialog.open(_predio_urbano_predio_urbano_component__WEBPACK_IMPORTED_MODULE_2__["PredioUrbanoComponent"], {
            width: '1000px',
            height: screen.height + 'px',
            data: autoavaluoUrbano
          });
        }
      }, {
        key: "openDialogCPU",
        value: function openDialogCPU(autoavaluoCpu) {
          if (!autoavaluoCpu) {
            autoavaluoCpu = new _model_dto_autoavaluo_cpu__WEBPACK_IMPORTED_MODULE_7__["AutoavaluoCpu"]();
            autoavaluoCpu.terrenoCPU = new src_app_model_terreno_cpu__WEBPACK_IMPORTED_MODULE_18__["TerrenoCpu"]();
            autoavaluoCpu.terrenoCPU.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_14__["Predio"]();
            autoavaluoCpu.terrenoCPU.predio.ubicacion = new src_app_model_ubicacion__WEBPACK_IMPORTED_MODULE_19__["Ubicacion"]();
            autoavaluoCpu.terrenoCPU.predio.construcciones = [];
            autoavaluoCpu.terrenoCPU.predio.instalacionesPredio = [];
            autoavaluoCpu.propietariosDetail = [];
          }

          this.dialog.open(_predio_cpu_predio_cpu_component__WEBPACK_IMPORTED_MODULE_6__["PredioCpuComponent"], {
            width: '1000px',
            height: screen.height + 'px',
            data: autoavaluoCpu
          });
        }
      }, {
        key: "openDialogRustico",
        value: function openDialogRustico(autoavaluoRustico) {
          if (!autoavaluoRustico) {
            autoavaluoRustico = new _model_dto_autoavaluo_rustico__WEBPACK_IMPORTED_MODULE_5__["AutoavaluoRustico"]();
            autoavaluoRustico.terrenoRustico = new src_app_model_terreno_rustico__WEBPACK_IMPORTED_MODULE_21__["TerrenoRustico"]();
            autoavaluoRustico.terrenoRustico.predio = new _model_predio__WEBPACK_IMPORTED_MODULE_14__["Predio"]();
            autoavaluoRustico.terrenoRustico.predio.ubicacion = new src_app_model_ubicacion__WEBPACK_IMPORTED_MODULE_19__["Ubicacion"]();
            autoavaluoRustico.terrenoRustico.predio.construcciones = [];
            autoavaluoRustico.terrenoRustico.predio.instalacionesPredio = [];
            autoavaluoRustico.propietariosDetail = [];
          }

          this.dialog.open(_predio_rustico_predio_rustico_component__WEBPACK_IMPORTED_MODULE_4__["PredioRusticoComponent"], {
            width: '1000px',
            height: screen.height + 'px',
            data: autoavaluoRustico
          });
        } // openDialogUrbano(autoavaluoUrbano?: AutoavaluoUrbano) {
        //   if (!autoavaluoUrbano) {
        //     autoavaluoUrbano = new AutoavaluoUrbano();
        //     autoavaluoUrbano.terrenoCPU = new TerrenoCpu();
        //     autoavaluoUrbano.terrenoCPU.predio = new Predio();
        //     autoavaluoUrbano.terrenoCPU.predio.ubicacion = new Ubicacion();
        //     autoavaluoUrbano.terrenoCPU.predio.construcciones = [];
        //     autoavaluoUrbano.propietariosDetail = [];
        //   }
        //   this.dialog.open(PredioCpuComponent, {
        //     width: '1000px',
        //     height: screen.height + 'px',
        //     data: autoavaluoUrbano
        //   });
        // }

      }, {
        key: "upgradePredio",
        value: function upgradePredio(predio) {
          var _this110 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
            title: 'Extender a otro periodo',
            text: 'Esta opcion generara la declaración tributaria del predio para diferentes periodos ¿Desea continuar?',
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
            icon: "question"
          }).then(function (result) {
            if (result.isConfirmed) {
              if (predio.tipoPredio == "PCPU") {
                _this110.autoavaluoCpuService.getByPredioId(predio.id).subscribe(function (p) {
                  p.terrenoCPU.predio.id = undefined;
                  p.terrenoCPU.id = undefined;
                  p.terrenoCPU.predio.ubicacion.id = undefined;
                  p.impuestoId = 0;
                  p.terrenoCPU.predio.construcciones.forEach(function (construccion) {
                    construccion.id = undefined;
                  });
                  p.terrenoCPU.predio.instalacionesPredio.forEach(function (instalacion) {
                    instalacion.id = undefined;
                  });

                  _this110.openDialogCPU(p);
                });
              } else if (predio.tipoPredio == "PU") {
                _this110.autoavaluoUrbanoService.getByPredioId(predio.id).subscribe(function (p) {
                  p.terrenoUrbano.predio.id = undefined;
                  p.terrenoUrbano.id = undefined;
                  p.terrenoUrbano.predio.ubicacion.id = undefined;
                  p.impuestoId = 0;
                  p.terrenoUrbano.predio.construcciones.forEach(function (construccion) {
                    construccion.id = undefined;
                  });
                  p.terrenoUrbano.predio.instalacionesPredio.forEach(function (instalacion) {
                    instalacion.id = undefined;
                  });

                  _this110.openDialogUrbano(p);
                });
              } else if (predio.tipoPredio == "PR") {
                _this110.autoavaluoRusticoService.getByPredioId(predio.id).subscribe(function (p) {
                  p.terrenoRustico.predio.id = undefined;
                  p.terrenoRustico.id = undefined;
                  p.terrenoRustico.predio.ubicacion.id = undefined;
                  p.impuestoId = 0;
                  p.terrenoRustico.predio.construcciones.forEach(function (construccion) {
                    construccion.id = undefined;
                  });
                  p.terrenoRustico.predio.instalacionesPredio.forEach(function (instalacion) {
                    instalacion.id = undefined;
                  });

                  _this110.openDialogRustico(p);
                });
              }
            }
          });
        }
      }, {
        key: "eliminar",
        value: function eliminar(predio) {
          var _this111 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
            title: '¿Esta seguro que desea eliminar el Predio?',
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
            icon: "warning"
          }).then(function (result) {
            if (result.isConfirmed) {
              if (predio.tipoPredio == "PCPU") {
                _this111.autoavaluoCpuService.deleteByPredioId(predio.id).subscribe(function (p) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire("Se elimino el predio con exito!", "", "success");

                  if (_this111.filter) {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize, _this111.filterBy, _this111.filter).subscribe(function (data) {
                      _this111.predioService.prediosSubject.next(data);
                    });
                  } else {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize).subscribe(function (data) {
                      return _this111.predioService.prediosSubject.next(data);
                    });
                  }
                });
              } else if (predio.tipoPredio == "PU") {
                _this111.autoavaluoUrbanoService.deleteByPredioId(predio.id).subscribe(function (p) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire("Se elimino el predio con exito!", "", "success");

                  if (_this111.filter) {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize, _this111.filterBy, _this111.filter).subscribe(function (data) {
                      _this111.predioService.prediosSubject.next(data);
                    });
                  } else {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize).subscribe(function (data) {
                      return _this111.predioService.prediosSubject.next(data);
                    });
                  }
                });
              } else if (predio.tipoPredio == "PR") {
                _this111.autoavaluoRusticoService.deleteByPredioId(predio.id).subscribe(function (p) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire("Se elimino el predio con exito!", "", "success");

                  if (_this111.filter) {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize, _this111.filterBy, _this111.filter).subscribe(function (data) {
                      _this111.predioService.prediosSubject.next(data);
                    });
                  } else {
                    _this111.predioService.listarPageable(_this111.paginator.pageIndex, _this111.paginator.pageSize).subscribe(function (data) {
                      return _this111.predioService.prediosSubject.next(data);
                    });
                  }
                });
              }
            }
          });
        }
      }]);

      return PredioComponent;
    }();

    PredioComponent.ctorParameters = function () {
      return [{
        type: _service_predio_service__WEBPACK_IMPORTED_MODULE_15__["PredioService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"]
      }, {
        type: _service_autoavaluo_cpu_service__WEBPACK_IMPORTED_MODULE_10__["AutoavaluoCpuService"]
      }, {
        type: _service_autoavaluo_rustico_service__WEBPACK_IMPORTED_MODULE_9__["AutoavaluoRusticoService"]
      }, {
        type: _service_autoavaluo_urbano_service__WEBPACK_IMPORTED_MODULE_8__["AutoavaluoUrbanoService"]
      }, {
        type: _service_impuesto_detail_service__WEBPACK_IMPORTED_MODULE_1__["ImpuestoDetailService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], {
      "static": true
    })], PredioComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSort"], {
      "static": true
    })], PredioComponent.prototype, "sort", void 0);
    PredioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["Component"])({
      selector: 'app-predio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predio/predio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predio.component.scss */
      "./src/app/pages/predio/predio.component.scss"))["default"]]
    })], PredioComponent);
    /***/
  },

  /***/
  "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.scss": function srcAppPagesProcedimientoProcedimientoDialogProcedimientoDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2NlZGltaWVudG8vcHJvY2VkaW1pZW50by1kaWFsb2cvcHJvY2VkaW1pZW50by1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.ts": function srcAppPagesProcedimientoProcedimientoDialogProcedimientoDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcedimientoDialogComponent", function () {
      return ProcedimientoDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_tasa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/tasa.service */
    "./src/app/_service/tasa.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _model_tasa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/tasa */
    "./src/app/_model/tasa.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var ProcedimientoDialogComponent = /*#__PURE__*/function () {
      function ProcedimientoDialogComponent(dialogRef, tasa, service) {
        _classCallCheck(this, ProcedimientoDialogComponent);

        this.dialogRef = dialogRef;
        this.tasa = tasa;
        this.service = service;
      }

      _createClass(ProcedimientoDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "operar",
        value: function operar() {
          var _this112 = this;

          this.service.crear(this.tasa).subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: 'success',
              title: 'Mensaje',
              text: 'Se registro el procedimiento con exito!'
            });

            _this112.service.listarPageable(0, 10).subscribe(function (data) {
              _this112.service.tasasSubject.next(data);

              _this112.dialogRef.close();
            });
          });
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close();
        }
      }]);

      return ProcedimientoDialogComponent;
    }();

    ProcedimientoDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _model_tasa__WEBPACK_IMPORTED_MODULE_3__["Tasa"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_tasa_service__WEBPACK_IMPORTED_MODULE_1__["TasaService"]
      }];
    };

    ProcedimientoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-procedimiento-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./procedimiento-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./procedimiento-dialog.component.scss */
      "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ProcedimientoDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/procedimiento/procedimiento.component.scss": function srcAppPagesProcedimientoProcedimientoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2NlZGltaWVudG8vcHJvY2VkaW1pZW50by5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/procedimiento/procedimiento.component.ts": function srcAppPagesProcedimientoProcedimientoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcedimientoComponent", function () {
      return ProcedimientoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./procedimiento-dialog/procedimiento-dialog.component */
    "./src/app/pages/procedimiento/procedimiento-dialog/procedimiento-dialog.component.ts");
    /* harmony import */


    var _service_tasa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_service/tasa.service */
    "./src/app/_service/tasa.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _model_tasa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../_model/tasa */
    "./src/app/_model/tasa.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

    var ProcedimientoComponent = /*#__PURE__*/function () {
      function ProcedimientoComponent(tasaService, dialog) {
        _classCallCheck(this, ProcedimientoComponent);

        this.tasaService = tasaService;
        this.dialog = dialog;
        this.displayedColumns = ['procedimiento', 'precio', 'acciones'];
      }

      _createClass(ProcedimientoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this113 = this;

          this.tasaService.listarPageable(0, 10).subscribe(function (data) {
            return _this113.tasaService.tasasSubject.next(data);
          });
          this.tasaService.tasasSubject.subscribe(function (data) {
            _this113.paginator.length = data.totalElements;
            _this113.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data.content);
            _this113.dataSource.sort = _this113.sort;
            _this113.paginator.pageIndex = data.pageable.number;
            _this113.paginator.pageSize = data.size;
            console.log(_this113.paginator);
          });
        }
      }, {
        key: "eliminar",
        value: function eliminar(tasa) {
          var _this114 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '¿Esta seguro que desea eliminar el Procedimiento?',
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No",
            icon: "warning"
          }).then(function (result) {
            if (result.isConfirmed) {
              _this114.tasaService.deleteById(tasa.id).subscribe(function (p) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire("Se elimino el Procedimiento con exito!", "", "success"); // if (this.filter) {
                //   this.predioService.listarPageable(this.paginator.pageIndex, this.paginator.pageSize, this.filterBy, this.filter).subscribe(data => {
                //     this.predioService.prediosSubject.next(data);
                //   });
                // } else {

                _this114.tasaService.listarPageable(_this114.paginator.pageIndex, _this114.paginator.pageSize).subscribe(function (data) {
                  return _this114.tasaService.tasasSubject.next(data);
                }); // }

              });
            }
          });
        }
      }, {
        key: "mostrarMas",
        value: function mostrarMas(e) {
          var _this115 = this;

          // if (this.filter) {
          //   this.predioService.listarPageable(e.pageIndex, e.pageSize, this.filterBy, this.filter).subscribe(data => {
          //     this.predioService.prediosSubject.next(data);
          //   });
          // } else {
          this.tasaService.listarPageable(e.pageIndex, e.pageSize).subscribe(function (data) {
            _this115.tasaService.tasasSubject.next(data);
          }); // }
        }
      }, {
        key: "openDialog",
        value: function openDialog(tasa) {
          var tasa1 = tasa != null ? tasa : new _model_tasa__WEBPACK_IMPORTED_MODULE_5__["Tasa"]();
          this.dialog.open(_procedimiento_dialog_procedimiento_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ProcedimientoDialogComponent"], {
            width: '280px',
            data: tasa1
          });
        }
      }]);

      return ProcedimientoComponent;
    }();

    ProcedimientoComponent.ctorParameters = function () {
      return [{
        type: _service_tasa_service__WEBPACK_IMPORTED_MODULE_2__["TasaService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], ProcedimientoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      "static": true
    })], ProcedimientoComponent.prototype, "sort", void 0);
    ProcedimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-procedimiento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./procedimiento.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/procedimiento/procedimiento.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./procedimiento.component.scss */
      "./src/app/pages/procedimiento/procedimiento.component.scss"))["default"]]
    })], ProcedimientoComponent);
    /***/
  },

  /***/
  "./src/app/pages/reportes/caja/caja.component.scss": function srcAppPagesReportesCajaCajaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydGVzL2NhamEvY2FqYS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/reportes/caja/caja.component.ts": function srcAppPagesReportesCajaCajaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CajaComponent", function () {
      return CajaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _controller_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_controller/reports.service */
    "./src/app/_controller/reports.service.ts");
    /* harmony import */


    var _service_ingreso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/ingreso.service */
    "./src/app/_service/ingreso.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var CajaComponent = /*#__PURE__*/function () {
      function CajaComponent(dialogRef, ingresoService, reportService) {
        _classCallCheck(this, CajaComponent);

        this.dialogRef = dialogRef;
        this.ingresoService = ingresoService;
        this.reportService = reportService;
        this.desde = new Date();
        this.hasta = new Date();
      }

      _createClass(CajaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generarReporte",
        value: function generarReporte() {
          var _this116 = this;

          var from = "".concat(moment__WEBPACK_IMPORTED_MODULE_5__(this.desde).format("YYYY-MM-DDT"), "00:00:00.000");
          var to = "".concat(moment__WEBPACK_IMPORTED_MODULE_5__(this.hasta).format("YYYY-MM-DDT"), "23:59:59.000");
          this.ingresoService.listarPorFechas(from, to).subscribe(function (ingresos) {
            return _this116.reportService.openReporteCaja(from, to, ingresos);
          });
        }
      }]);

      return CajaComponent;
    }();

    CajaComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _service_ingreso_service__WEBPACK_IMPORTED_MODULE_2__["IngresoService"]
      }, {
        type: _controller_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]
      }];
    };

    CajaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-caja',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./caja.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reportes/caja/caja.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./caja.component.scss */
      "./src/app/pages/reportes/caja/caja.component.scss"))["default"]]
    })], CajaComponent);
    /***/
  },

  /***/
  "./src/app/pages/reportes/reportes.component.scss": function srcAppPagesReportesReportesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydGVzL3JlcG9ydGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/reportes/reportes.component.ts": function srcAppPagesReportesReportesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportesComponent", function () {
      return ReportesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_ingreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../_service/ingreso.service */
    "./src/app/_service/ingreso.service.ts");
    /* harmony import */


    var _caja_caja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./caja/caja.component */
    "./src/app/pages/reportes/caja/caja.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! pdfmake-wrapper */
    "./node_modules/pdfmake-wrapper/index.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/chart.esm.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var ReportesComponent = /*#__PURE__*/function () {
      function ReportesComponent(dialog, ingresoService) {
        var _chart_js__WEBPACK_IM;

        _classCallCheck(this, ReportesComponent);

        this.dialog = dialog;
        this.ingresoService = ingresoService;

        (_chart_js__WEBPACK_IM = chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]).register.apply(_chart_js__WEBPACK_IM, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_7__["registerables"]));
      }

      _createClass(ReportesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this117 = this;

          var actual = new Date();
          var desde = moment__WEBPACK_IMPORTED_MODULE_8__("".concat(actual.getFullYear(), "/").concat(actual.getMonth() + 1, "/01")).format("YYYY-MM-DDTHH:mm:ss.SSS");
          var hasta = moment__WEBPACK_IMPORTED_MODULE_8__(desde).add(1, 'month').add(-1, 'millisecond').format("YYYY-MM-DDTHH:mm:ss.SSS");
          var days = [];
          var ingresos = [];

          for (var i = 1; i <= parseInt(hasta.substring(8, 10)); i++) {
            days.push(i);
          }

          this.ingresoService.listarPorFechas(desde, hasta).subscribe(function (data) {
            days.forEach(function (dia) {
              ingresos.push(data.filter(function (ingreso) {
                return dia == parseInt(ingreso.createdAt.substring(8, 10));
              }).map(function (ingreso) {
                return ingreso.montoAfecto;
              }).reduce(function (sum, element) {
                return sum + element;
              }, 0));
            });
            _this117.chartIngreso = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('ingresoChart', {
              type: 'line',
              data: {
                labels: days,
                datasets: [{
                  label: "Mes de ".concat(moment__WEBPACK_IMPORTED_MODULE_8__(desde).lang("es").format("MMMM")),
                  data: ingresos,
                  borderColor: "#5bc0de",
                  borderWidth: 3,
                  fill: false
                }]
              }
            });
            _this117.chartIngresoBar = new chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]('ingresoChartBar', {
              type: 'bar',
              data: {
                labels: days,
                datasets: [{
                  label: "Mes de ".concat(moment__WEBPACK_IMPORTED_MODULE_8__(desde).lang("es").format("MMMM")),
                  data: ingresos,
                  borderColor: "#5bc0de",
                  borderWidth: 3
                }]
              }
            });
          });
          pdfmake_wrapper__WEBPACK_IMPORTED_MODULE_5__["PdfMakeWrapper"].setFonts(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a);
        }
      }, {
        key: "openReportCaja",
        value: function openReportCaja() {
          this.dialog.open(_caja_caja_component__WEBPACK_IMPORTED_MODULE_2__["CajaComponent"], {
            width: '400px'
          });
        }
      }]);

      return ReportesComponent;
    }();

    ReportesComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _service_ingreso_service__WEBPACK_IMPORTED_MODULE_1__["IngresoService"]
      }];
    };

    ReportesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-reportes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reportes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reportes/reportes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reportes.component.scss */
      "./src/app/pages/reportes/reportes.component.scss"))["default"]]
    })], ReportesComponent);
    /***/
  },

  /***/
  "./src/app/pages/usuario/login/login.component.scss": function srcAppPagesUsuarioLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 265px;\n  height: 70px;\n}\n\nmat-card-actions {\n  text-align: center;\n}\n\nbutton {\n  margin-bottom: 10px;\n}\n\n.fondo {\n  height: 100%;\n  width: 100%;\n  background-size: 1400px;\n  position: fixed;\n}\n\n.box-login {\n  background-color: white;\n  opacity: 0.8;\n  width: 335px;\n  height: 480px;\n  padding: 30px;\n  margin: auto;\n  margin-top: 60px;\n}\n\n.btn-login {\n  background-color: #d9534f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby9sb2dpbi9EOlxcUHJvamVjdHNcXEFybm9sZCBOb3JhYnVlbmFcXG5vZGUtcHJvamVjdHNcXGltcHVlc3RvLXByZWRpYWwtZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c3VhcmlvXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0kseUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9uZG8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0MDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uYm94LWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgd2lkdGg6IDMzNXB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uYnRuLWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuIiwiLmlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9uZG8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0MDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYm94LWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgd2lkdGg6IDMzNXB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/login/login.component.ts": function srcAppPagesUsuarioLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _model_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/usuario */
    "./src/app/_model/usuario.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(service, router) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.router = router;
        this.usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.service.isAuthenticated()) {
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this118 = this;

          if (this.usuario.nombre == null || this.usuario.contrasenia == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error Login', 'Usuario o Password vacias!', 'error');
            return;
          }

          this.service.login(this.usuario).subscribe(function (res) {
            _this118.service.guardarUsuario(res.access_token);

            _this118.service.guardarToken(res.access_token);

            window.location.reload();
          }, function (error) {
            if (error.status == 400) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error Login', 'Usuario o Clave incorrectas!', 'error');
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/usuario/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/usuario/perfil/perfil.component.scss": function srcAppPagesUsuarioPerfilPerfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 265px;\n  height: 70px;\n}\n\nmat-card-actions {\n  text-align: center;\n}\n\nbutton {\n  margin-bottom: 10px;\n}\n\n.fondo {\n  background-image: url(\"/assets/fondo.jpg\");\n  height: 100%;\n  width: 100%;\n  background-size: 1400px;\n  position: fixed;\n}\n\n.box-login {\n  background-color: white;\n  opacity: 0.8;\n  width: 335px;\n  height: 410px;\n  padding: 30px;\n  margin: auto;\n  margin-top: 60px;\n  border-radius: 20px;\n}\n\n.btn-login {\n  background-color: #d9534f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXN1YXJpby9wZXJmaWwvRDpcXFByb2plY3RzXFxBcm5vbGQgTm9yYWJ1ZW5hXFxub2RlLXByb2plY3RzXFxpbXB1ZXN0by1wcmVkaWFsLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcdXN1YXJpb1xccGVyZmlsXFxwZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0kseUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMjY1cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb25kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ZvbmRvLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmJveC1sb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHdpZHRoOiAzMzVweDtcclxuICAgIGhlaWdodDogNDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4iLCIuaW5wdXQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb25kbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZm9uZG8uanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0MDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYm94LWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgd2lkdGg6IDMzNXB4O1xuICBoZWlnaHQ6IDQxMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/perfil/perfil.component.ts": function srcAppPagesUsuarioPerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../_service/usuario.service */
    "./src/app/_service/usuario.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/auth.service */
    "./src/app/_service/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var PerfilComponent = /*#__PURE__*/function () {
      function PerfilComponent(service, usuarioService) {
        _classCallCheck(this, PerfilComponent);

        this.service = service;
        this.usuarioService = usuarioService;
        this.enabledPassword = false;
        this.newPass0 = "";
        this.newPass1 = "";
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this119 = this;

          this.usuarioService.listarPorUsername(this.service.usuario.nombre).subscribe(function (data) {
            _this119.user = data;
            _this119.user.contrasenia = "";
          });
        }
      }, {
        key: "grabar",
        value: function grabar() {
          var _this120 = this;

          this.service.login(this.user).subscribe(function (res) {
            _this120.user.contrasenia = _this120.newPass0;
          }, function (error) {
            if (error.status == 400) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Error", "Clave incorrecta!", "error");
            }
          }, function () {
            if (_this120.newPass0 == _this120.newPass1) {
              _this120.usuarioService.modificar(_this120.user).subscribe(function () {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Éxito", "Se cambio la contraseña con éxito", "success");
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Error", "Las contraseñas no coinciden", "error");
            }
          });
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
      }];
    };

    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./perfil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/perfil/perfil.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./perfil.component.scss */
      "./src/app/pages/usuario/perfil/perfil.component.scss"))["default"]]
    })], PerfilComponent);
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.scss": function srcAppPagesUsuarioUsuarioDialogUsuarioDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby1kaWFsb2cvdXN1YXJpby1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.ts": function srcAppPagesUsuarioUsuarioDialogUsuarioDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioDialogComponent", function () {
      return UsuarioDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _model_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_model/usuario */
    "./src/app/_model/usuario.ts");
    /* harmony import */


    var _service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_service/usuario.service */
    "./src/app/_service/usuario.service.ts");
    /* harmony import */


    var _service_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../_service/persona.service */
    "./src/app/_service/persona.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_model_propietario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_model/propietario */
    "./src/app/_model/propietario.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

    var UsuarioDialogComponent = /*#__PURE__*/function () {
      function UsuarioDialogComponent(dialogRef, usuario, personaService, usuarioService) {
        _classCallCheck(this, UsuarioDialogComponent);

        this.dialogRef = dialogRef;
        this.usuario = usuario;
        this.personaService = personaService;
        this.usuarioService = usuarioService;
        this.roles = [{
          id: 1,
          nombre: "ROLE_CAJERO",
          rol: "CAJERO"
        }, {
          id: 2,
          nombre: "ROLE_RENTAS",
          rol: "RENTAS"
        }, {
          id: 3,
          nombre: "ROLE_TESORERO",
          rol: "TESORERO"
        }, {
          id: 4,
          nombre: "ROLE_ADMIN",
          rol: "ADMINISTRADOR DE USUARIOS"
        }];
      }

      _createClass(UsuarioDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this121 = this;

          this.usuario.persona.tipoDocumento = "DNI";
          this.usuario.persona.propietario = new src_app_model_propietario__WEBPACK_IMPORTED_MODULE_6__["Propietario"]();
          this.usuario.persona.propietario.tipo = "PERSONA";
          this.usuario.fechaCreacion = undefined;
          this.usuario.fechaModificacion = undefined;
          console.log(this.usuario);

          if (this.usuario.id) {
            this.usuario.roles = this.roles.filter(function (rol) {
              return _this121.usuario.roles.map(function (r) {
                return r.id;
              }).includes(rol.id);
            });
          }
        }
      }, {
        key: "findConstribuyente",
        value: function findConstribuyente(tipo, documento) {
          var _this122 = this;

          this.personaService.findByTipoAndDocumento(tipo, documento).subscribe(function (persona) {
            if (persona.id) {
              _this122.usuario.persona = persona;
            }
          });
        }
      }, {
        key: "guardar",
        value: function guardar() {
          var _this123 = this;

          if (this.usuario.id) {
            this.usuarioService.modificarUsuario(this.usuario).subscribe(function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Modificacion con exito", "", "success");

              _this123.dialogRef.close();

              _this123.usuarioService.listar().subscribe(function (usuarios) {
                return _this123.usuarioService.usuarioSubject.next(usuarios);
              });
            });
          } else {
            this.usuarioService.grabarUsuario(this.usuario).subscribe(function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Registro con exito", "", "success");

              _this123.dialogRef.close();

              _this123.usuarioService.listar().subscribe(function (usuarios) {
                return _this123.usuarioService.usuarioSubject.next(usuarios);
              });
            });
          }
        }
      }]);

      return UsuarioDialogComponent;
    }();

    UsuarioDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _model_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _service_persona_service__WEBPACK_IMPORTED_MODULE_4__["PersonaService"]
      }, {
        type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    UsuarioDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-usuario-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usuario-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usuario-dialog.component.scss */
      "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], UsuarioDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuario/usuario.component.scss": function srcAppPagesUsuarioUsuarioUsuarioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/usuario/usuario/usuario.component.ts": function srcAppPagesUsuarioUsuarioUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function () {
      return UsuarioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../usuario-dialog/usuario-dialog.component */
    "./src/app/pages/usuario/usuario-dialog/usuario-dialog.component.ts");
    /* harmony import */


    var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../_service/usuario.service */
    "./src/app/_service/usuario.service.ts");
    /* harmony import */


    var _model_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../_model/usuario */
    "./src/app/_model/usuario.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_model_persona__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_model/persona */
    "./src/app/_model/persona.ts");

    var UsuarioComponent = /*#__PURE__*/function () {
      function UsuarioComponent(usuarioService, dialog) {
        _classCallCheck(this, UsuarioComponent);

        this.usuarioService = usuarioService;
        this.dialog = dialog;
        this.displayedColumns = ['creacion', 'modificacion', 'nombre', 'usuario', 'acciones'];
      }

      _createClass(UsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this124 = this;

          this.usuarioService.listar().subscribe(function (data) {
            data.forEach(function (element) {
              element.fechaCreacion = moment__WEBPACK_IMPORTED_MODULE_6__(element.fechaCreacion).format("DD/MM/YYYY HH:mm:ss");
              element.fechaModificacion = moment__WEBPACK_IMPORTED_MODULE_6__(element.fechaModificacion).format("DD/MM/YYYY HH:mm:ss");
            });

            _this124.usuarioService.usuarioSubject.next(data);
          });
          this.usuarioService.usuarioSubject.subscribe(function (data) {
            data.forEach(function (element) {
              element.fechaCreacion = moment__WEBPACK_IMPORTED_MODULE_6__(element.fechaCreacion).format("DD/MM/YYYY HH:mm:ss");
              element.fechaModificacion = moment__WEBPACK_IMPORTED_MODULE_6__(element.fechaModificacion).format("DD/MM/YYYY HH:mm:ss");
            });
            _this124.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this124.dataSource.sort = _this124.sort;
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(usuario) {
          if (!usuario) {
            usuario = new _model_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
            usuario.persona = new src_app_model_persona__WEBPACK_IMPORTED_MODULE_7__["Persona"]();
            usuario.roles = [];
          }

          this.dialog.open(_usuario_dialog_usuario_dialog_component__WEBPACK_IMPORTED_MODULE_1__["UsuarioDialogComponent"], {
            width: '600px',
            data: usuario
          });
        }
      }]);

      return UsuarioComponent;
    }();

    UsuarioComponent.ctorParameters = function () {
      return [{
        type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], UsuarioComponent.prototype, "sort", void 0);
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-usuario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usuario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/usuario/usuario.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usuario.component.scss */
      "./src/app/pages/usuario/usuario/usuario.component.scss"))["default"]]
    })], UsuarioComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
      production: false,
      HOST: 'http://159.223.184.17',
      API_KEY: 'AIzaSyAQ5mXwLwhjiu6J85Z7uN7SrCR4Xk_PLnI'
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
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
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
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\Arnold Norabuena\node-projects\impuesto-predial-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map