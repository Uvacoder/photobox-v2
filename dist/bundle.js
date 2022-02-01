/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Application.tsx":
/*!*****************************!*\
  !*** ./src/Application.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Application)
/* harmony export */ });
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ "./node_modules/materialize-css/dist/css/materialize.min.css");
/* harmony import */ var _components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination/Pagination */ "./src/components/pagination/Pagination.tsx");
/* harmony import */ var _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar/Toolbar */ "./src/components/toolbar/Toolbar.ts");
/* harmony import */ var _components_viewport_Viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/viewport/Viewport */ "./src/components/viewport/Viewport.ts");
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var _SimpleCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SimpleCommand */ "./src/SimpleCommand.ts");
/* harmony import */ var _commands_Invoker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/Invoker */ "./src/commands/Invoker.ts");
/* harmony import */ var _commands_TileZoomInCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/TileZoomInCommand */ "./src/commands/TileZoomInCommand.ts");
/* harmony import */ var _commands_TileZoomOutCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/TileZoomOutCommand */ "./src/commands/TileZoomOutCommand.ts");
/* harmony import */ var _commands_ChangeAspectCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commands/ChangeAspectCommand */ "./src/commands/ChangeAspectCommand.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/// <reference path="./typings/cropper.d.ts" />

/** @jsx element */











var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);

    var _a, _b, _c;

    this.container = document.getElementById('root');
    var toolbarContainer = document.createElement('div');
    toolbarContainer.className = "toolbar";
    (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(toolbarContainer);
    var toolbar = new _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.addElement(toolbar);
    toolbar.setOnStart(new _SimpleCommand__WEBPACK_IMPORTED_MODULE_4__["default"]('hello'));
    var viewportContainer = document.createElement('div');
    viewportContainer.className = "viewport";
    (_b = this.container) === null || _b === void 0 ? void 0 : _b.appendChild(viewportContainer);
    this.viewport = new _components_viewport_Viewport__WEBPACK_IMPORTED_MODULE_3__["default"](viewportContainer);
    this.viewport.renderImages(0, 3);
    this.addElement(this.viewport);
    setTimeout(function () {// this.viewport.renderImages(1, 3);

      /*viewport.addImage({
          url: './1 gBQxShAkxBp_YPb14CN0Nw.jpeg'
      })*/
      //this.viewport.zoomIn();
    }, 2000);
    var paginationContainer = document.createElement('div');
    paginationContainer.className = "pagination";
    (_c = this.container) === null || _c === void 0 ? void 0 : _c.appendChild(paginationContainer);
    var pagination = new _components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.addElement(pagination);
    Application.INVOKER = new _commands_Invoker__WEBPACK_IMPORTED_MODULE_5__["default"]();
    Application.INVOKER.register('1', new _commands_TileZoomInCommand__WEBPACK_IMPORTED_MODULE_6__["default"](this));
    Application.INVOKER.register('2', new _commands_TileZoomOutCommand__WEBPACK_IMPORTED_MODULE_7__["default"](this));
    Application.INVOKER.register('13x18', new _commands_ChangeAspectCommand__WEBPACK_IMPORTED_MODULE_8__["default"](this, 13 / 18));
    Application.INVOKER.register('9x9', new _commands_ChangeAspectCommand__WEBPACK_IMPORTED_MODULE_8__["default"](this, 9 / 9));
    Application.INVOKER.register('9x13', new _commands_ChangeAspectCommand__WEBPACK_IMPORTED_MODULE_8__["default"](this, 9 / 13));
  }

  _createClass(Application, [{
    key: "getViewPort",
    value: function getViewPort() {
      return this.viewport;
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      var _a;

      var el = document.createElement('div');
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(el);
      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_9__.render)(function () {
        return element.getJSXElement();
      }, el);
    }
  }]);

  return Application;
}();


new Application();
var container = document.getElementById('root');
var zoomIn = document.getElementById('zoomIn') || new HTMLElement();
var zoomOut = document.getElementById('zoomOut') || new HTMLElement();
var formats = document.getElementById('formats') || new HTMLElement();
var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');
var f4 = document.getElementById('f4');
var f5 = document.getElementById('f5');

zoomIn.onclick = function () {
  /* croppers.forEach(cropper => {
       let container = cropper.container;
       container.style.width = '400px';
       container.style.height = '400px';
       console.log(cropper);
       cropper.resize();
       cropper.setAspectRatio(2 / 4);
       // cropper.zoom(2);
       // window.dispatchEvent(new Event('resize'));
   });*/
};

zoomOut.onclick = function () {
  /* croppers.forEach(cropper => {
       let container = cropper.container;
       container.style.width = '300px';
       container.style.height = '300px';
       console.log(cropper);
       cropper.resize();
       cropper.setAspectRatio(4 / 3);
       // cropper.zoom(2);
       // window.dispatchEvent(new Event('resize'));
   });*/
};

/***/ }),

/***/ "./src/components/image-tile/ImageTile.tsx":
/*!*************************************************!*\
  !*** ./src/components/image-tile/ImageTile.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageTile": () => (/* binding */ ImageTile)
/* harmony export */ });
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseView */ "./src/BaseView.ts");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smartcrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smartcrop */ "./node_modules/smartcrop/smartcrop.js");
/* harmony import */ var smartcrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smartcrop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/components/image-tile/view.tsx");
/* harmony import */ var dont_crop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dont-crop */ "./node_modules/dont-crop/dist/mjs/lib.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ImageTile = /*#__PURE__*/function (_BaseView) {
  _inherits(ImageTile, _BaseView);

  var _super = _createSuper(ImageTile);

  function ImageTile(src, container) {
    var _this;

    _classCallCheck(this, ImageTile);

    _this = _super.call(this, container);
    _this.src = "";
    _this.cropper = null;
    _this.cropData = null;

    _this.init(_view__WEBPACK_IMPORTED_MODULE_3__["default"].template({
      src: src,
      onClick: _this.onClick
    }));

    _this.src = src;
    _this.image = _this.getImage();

    _this.image.onload = function () {
      _this.initCropper();
    };

    return _this;
  }

  _createClass(ImageTile, [{
    key: "setAspectRatio",
    value: function setAspectRatio(aspect) {
      var _a;

      (_a = this.cropper) === null || _a === void 0 ? void 0 : _a.setAspectRatio(aspect);
      this.update();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      console.log('click');
    }
  }, {
    key: "initCropper",
    value: function initCropper() {
      var that = this;

      if (!this.image) {
        return;
      }

      _view__WEBPACK_IMPORTED_MODULE_3__["default"].updateState({
        loaded: false
      });
      var cropper = new (cropperjs__WEBPACK_IMPORTED_MODULE_1___default())(this.image, {
        aspectRatio: 16 / 16,
        viewMode: 2,
        scalable: false,
        checkCrossOrigin: false,
        autoCropArea: 1,
        crop: function crop(event) {
          console.log(event.detail);
          that.cropData = event.detail;
        },
        ready: function ready() {
          smartcrop__WEBPACK_IMPORTED_MODULE_2___default().crop(this, {
            width: 100,
            height: 100
          }).then(function (result) {
            cropper.setData(result.topCrop);
            /*   cropper.setData({
                   x: 0, y: 0, width: 500, height: 500
               })*/
          });
          _view__WEBPACK_IMPORTED_MODULE_3__["default"].updateState({
            loaded: true
          });
          console.log((0,dont_crop__WEBPACK_IMPORTED_MODULE_4__.fitGradient)(this));
          that.getContainer().style.background = (0,dont_crop__WEBPACK_IMPORTED_MODULE_4__.fitGradient)(that.getImage());
          console.log(that.getImage());
        }
      });
      this.cropper = cropper;
    }
  }, {
    key: "update",
    value: function update() {
      var _a, _b; // @ts-ignore


      (_a = this.cropper) === null || _a === void 0 ? void 0 : _a.resize();
      (_b = this.cropper) === null || _b === void 0 ? void 0 : _b.setData(this.cropData);
    }
  }, {
    key: "setSrc",
    value: function setSrc(src) {
      var _a;

      this.src = src;
      console.log(this.getImage()); //this.getElement().getImage();

      console.log(src);
      (_a = this.cropper) === null || _a === void 0 ? void 0 : _a.replace(src);
      this.getImage().src = src;
    }
  }, {
    key: "getImage",
    value: function getImage() {
      return this.getPlainDomElement().children[0];
    }
  }]);

  return ImageTile;
}(_BaseView__WEBPACK_IMPORTED_MODULE_0__.BaseView);

/***/ }),

/***/ "./src/components/image-tile/view.tsx":
/*!********************************************!*\
  !*** ./src/components/image-tile/view.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");
/* harmony import */ var eventing_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventing-bus */ "./node_modules/eventing-bus/index.js");
/* harmony import */ var eventing_bus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eventing_bus__WEBPACK_IMPORTED_MODULE_1__);








const _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<div class="image-container"><img alt=""></div>`, 3),
      _tmpl$2 = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>`, 16);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // @ts-ignore


var STATE_UPDATE = "STATE_UPDATE";

var _createSignal = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(false),
    _createSignal2 = _slicedToArray(_createSignal, 2),
    loaded = _createSignal2[0],
    setLoaded = _createSignal2[1];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateState: function updateState(state) {
    //EventBus.publish(STATE_UPDATE, state);
    setLoaded(state.loaded);
  },
  template: function template(props) {
    eventing_bus__WEBPACK_IMPORTED_MODULE_1___default().on(STATE_UPDATE, function (state) {
      setCount(10);
      setLoaded(state.loaded);
    });

    var _createSignal3 = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)(0),
        _createSignal4 = _slicedToArray(_createSignal3, 2),
        count = _createSignal4[0],
        setCount = _createSignal4[1];

    (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
      console.log("The count is now", count());
    });

    var _createSignal5 = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createSignal)([{
      id: 'J---aiyznGQ',
      name: 'Keyboard Cat'
    }, {
      id: 'z_AbfPXTKms',
      name: 'Maru'
    }, {
      id: 'OUtn3pvWmpg',
      name: 'Henri The Existential Cat'
    }]),
        _createSignal6 = _slicedToArray(_createSignal5, 2),
        cats = _createSignal6[0],
        setCats = _createSignal6[1]; // setInterval(() => setCount(count() + 1), 1000);


    return function () {
      var _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild;

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.addEventListener)(_el$, "click", props.onClick, true);

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$, function () {
        var _c$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.memo)(function () {
          return !!!loaded();
        }, true);

        return function () {
          return _c$() && _tmpl$2.cloneNode(true);
        };
      }(), null);

      (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createRenderEffect)(function (_p$) {
        var _v$ = props.src,
            _v$2 = loaded() ? "block" : "none";

        _v$ !== _p$._v$ && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$2, "src", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && _el$2.style.setProperty("display", _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined
      });

      return _el$;
    }();
  }
});

(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.delegateEvents)(["click"]);

/***/ }),

/***/ "./src/components/pagination/Pagination.tsx":
/*!**************************************************!*\
  !*** ./src/components/pagination/Pagination.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseView */ "./src/BaseView.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/components/pagination/view.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // @ts-ignore
//import pagination from 'pagination';

var Pagination = /*#__PURE__*/function (_BaseView) {
  _inherits(Pagination, _BaseView);

  var _super = _createSuper(Pagination);

  function Pagination(container) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, container);

    _this.init(_view__WEBPACK_IMPORTED_MODULE_1__["default"].template()); //var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 200, totalResult: 10020});
    //console.log(paginator.render());


    return _this;
  }

  return _createClass(Pagination);
}(_BaseView__WEBPACK_IMPORTED_MODULE_0__.BaseView);



/***/ }),

/***/ "./src/components/pagination/view.tsx":
/*!********************************************!*\
  !*** ./src/components/pagination/view.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");


const _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<ul class="pagination"><li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li><li class="active"><a href="#!">1</a></li><li class="waves-effect"><a href="#!">2</a></li><li class="waves-effect"><a href="#!">3</a></li><li class="waves-effect"><a href="#!">4</a></li><li class="waves-effect"><a href="#!">5</a></li><li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li></ul>`, 34);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: function template() {
    var _createSignal = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.createSignal)(1),
        _createSignal2 = _slicedToArray(_createSignal, 2),
        currentPage = _createSignal2[0],
        setCurrentPage = _createSignal2[1];

    var pages = 100;
    return _tmpl$.cloneNode(true);
  }
});

/***/ }),

/***/ "./src/components/toolbar/view.tsx":
/*!*****************************************!*\
  !*** ./src/components/toolbar/view.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");




const _tmpl$ = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<nav><div class="nav-wrapper"><a href="#" class="brand-logo"></a><ul id="nav-mobile" class="right hide-on-med-and-down"><li><a href="#">+</a></li><li><a href="#">-</a></li><li><a href="#">9x13</a></li><li><a href="#">9x9</a></li><li><a href="#">13x18</a></li><li><a href="collapsible.html">JavaScript</a></li><li><a class="dropdown-trigger btn" href="#" data-target="dropdown1">Drop Me!</a><ul id="dropdown1" class="dropdown-content"><li><a href="#!">one</a></li><li><a href="#!">two</a></li><li class="divider" tabindex="-1"></li><li><a href="#!">three</a></li><li><a href="#!"><i class="material-icons">view_module</i>four</a></li><li><a href="#!"><i class="material-icons">cloud</i>five</a></li></ul></li></ul></div></nav>`, 64);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  subscribe: function subscribe(callback) {},
  template: function template(props) {
    var _createSignal = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.createSignal)("logo"),
        _createSignal2 = _slicedToArray(_createSignal, 2),
        text = _createSignal2[0],
        setText = _createSignal2[1];

    var dispatch = function dispatch(action) {
      props.click(action); //subscribe();
    };

    return function () {
      var _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$4.firstChild,
          _el$6 = _el$5.firstChild,
          _el$7 = _el$5.nextSibling,
          _el$8 = _el$7.firstChild,
          _el$9 = _el$7.nextSibling,
          _el$10 = _el$9.firstChild,
          _el$11 = _el$9.nextSibling,
          _el$12 = _el$11.firstChild,
          _el$13 = _el$11.nextSibling,
          _el$14 = _el$13.firstChild;

      _el$3.$$click = function () {
        dispatch({
          type: 'zoomOut'
        });
        setText('new text');
      };

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$3, text);

      _el$6.$$click = function () {
        return dispatch({
          type: 'zoomIn'
        });
      };

      _el$8.$$click = function () {
        return dispatch({
          type: 'zoomOut'
        });
      };

      _el$10.$$click = function () {
        return dispatch({
          type: '9x13'
        });
      };

      _el$12.$$click = function () {
        return dispatch({
          type: '9x9'
        });
      };

      _el$14.$$click = function () {
        return dispatch({
          type: '13x18'
        });
      };

      return _el$;
    }();
  }
});

(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.delegateEvents)(["click"]);

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/***/ (function(module) {

/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed

      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/materialize-css/dist/css/materialize.min.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/materialize-css/dist/css/materialize.min.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * Materialize v1.0.0-rc.2 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:rgba(0,0,0,0) !important}.transparent-text{color:rgba(0,0,0,0) !important}/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}button,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default)>li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.clearfix{clear:both}.z-depth-0{-webkit-box-shadow:none !important;box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-small,.btn-floating,.dropdown-content,.collapsible,.sidenav{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-small:hover,.btn-floating:hover{-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{-webkit-box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}.z-depth-4{-webkit-box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2);box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)}.z-depth-5,.modal{-webkit-box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}.hoverable{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s}.hoverable:hover{-webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 1201px){.hide-on-extra-large-only{display:none !important}}@media only screen and (min-width: 1201px){.show-on-extra-large{display:block !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table;border-collapse:collapse;border-spacing:0}table.striped tr{border-bottom:none}table.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,0.5)}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{-webkit-transition:background-color .25s ease;transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:rgba(242,242,242,0.5)}table.centered thead tr th,table.centered tbody tr td{text-align:center}tr{border-bottom:1px solid rgba(0,0,0,0.12)}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\00a0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,0.12)}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;-webkit-transition:.25s;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;-webkit-transition:width .3s linear;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;-webkit-box-sizing:border-box;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-left:auto}.sidenav span.badge{margin-top:calc(24px - 11px)}table span.badge{display:inline-block;float:none;margin-left:auto}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';-moz-font-feature-settings:'liga';font-feature-settings:'liga'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.col .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width: 1201px){.row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.sidenav-trigger{display:none}}nav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .sidenav-trigger i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{-webkit-transition:background-color .3s;transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{-webkit-transition:background-color .3s;transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;-webkit-box-shadow:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);-webkit-transition:color .3s;transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}a{text-decoration:none}html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:2.3733333333rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.9466666667rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}h5{font-size:1.64rem;line-height:110%;margin:1.0933333333rem 0 .656rem 0}h6{font-size:1.15rem;line-height:110%;margin:.7666666667rem 0 .46rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.scale-transition{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}.scale-transition.scale-out{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s !important;transition:-webkit-transform .2s !important;transition:transform .2s !important;transition:transform .2s, -webkit-transform .2s !important}.scale-transition.scale-in{-webkit-transform:scale(1);transform:scale(1)}.card-panel{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.card.horizontal .card-stacked .card-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);position:relative;padding:16px 24px}.card .card-action:last-child{border-radius:0 0 2px 2px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;-webkit-transition:color .3s ease;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:default}.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs.tabs-fixed-width .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;-webkit-transition:color .28s ease, background-color .28s ease;transition:color .28s ease, background-color .28s ease}.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,0.2);outline:none}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.4);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;visibility:hidden}.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-small:disabled,.btn-flat:disabled,.btn[disabled],.btn-large[disabled],.btn-small[disabled],.btn-floating[disabled],.btn-large[disabled],.btn-small[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;-webkit-box-shadow:none;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat{font-size:14px;outline:0}.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-small:focus,.btn-floating:focus{background-color:#1d7d74}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;-webkit-transition:background-color .2s ease-out;transition:background-color .2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover,.btn-small:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px 0}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;-webkit-transition:none;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.btn-flat{-webkit-box-shadow:none;box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{-webkit-box-shadow:none;box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,0.1)}.btn-flat.disabled,.btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b2b2 !important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;-webkit-transform-origin:0 0;transform-origin:0 0}.dropdown-content:focus{outline:0}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}.dropdown-content li:hover,.dropdown-content li.active{background-color:#eee}.dropdown-content li:focus{outline:none}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px;-webkit-transform:none;transform:none}.dropdown-trigger{cursor:pointer}/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);-webkit-transition:all 0.7s ease-out;transition:all 0.7s ease-out;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{-webkit-transition:none !important;transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}.modal:focus{outline:none}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header:focus{outline:0}.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}.keyboard-focused .collapsible-header:focus{background-color:#eee}.collapsible-body{display:none;border-bottom:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;padding:2rem}.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;-webkit-box-shadow:none;box-shadow:none}.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;-webkit-box-shadow:none;box-shadow:none}.collapsible.popout>li{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;-webkit-transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip:focus{outline:none;background-color:#26a69a;color:#fff}.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;-webkit-box-shadow:none;box-shadow:none;margin:0 0 8px 0;min-height:45px;outline:none;-webkit-transition:all .3s;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;-webkit-box-shadow:none !important;box-shadow:none !important}.chips .autocomplete-content{margin-top:0;margin-bottom:0}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;-webkit-transition:opacity .4s;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}::-ms-input-placeholder{color:#d1d1d1}::placeholder{color:#d1d1d1}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transition:border .3s, -webkit-box-shadow .3s;transition:border .3s, -webkit-box-shadow .3s;transition:box-shadow .3s, border .3s;transition:box-shadow .3s, border .3s, -webkit-box-shadow .3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly=\"readonly\"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly=\"readonly\"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly=\"readonly\"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly=\"readonly\"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly=\"readonly\"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly=\"readonly\"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly=\"readonly\"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.42)}input:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]):focus.valid ~ label,input[type=text]:not(.browser-default):focus.valid ~ label,input[type=password]:not(.browser-default):focus.valid ~ label,input[type=email]:not(.browser-default):focus.valid ~ label,input[type=url]:not(.browser-default):focus.valid ~ label,input[type=time]:not(.browser-default):focus.valid ~ label,input[type=date]:not(.browser-default):focus.valid ~ label,input[type=datetime]:not(.browser-default):focus.valid ~ label,input[type=datetime-local]:not(.browser-default):focus.valid ~ label,input[type=tel]:not(.browser-default):focus.valid ~ label,input[type=number]:not(.browser-default):focus.valid ~ label,input[type=search]:not(.browser-default):focus.valid ~ label,textarea.materialize-textarea:focus.valid ~ label{color:#4CAF50}input:not([type]):focus.invalid ~ label,input[type=text]:not(.browser-default):focus.invalid ~ label,input[type=password]:not(.browser-default):focus.invalid ~ label,input[type=email]:not(.browser-default):focus.invalid ~ label,input[type=url]:not(.browser-default):focus.invalid ~ label,input[type=time]:not(.browser-default):focus.invalid ~ label,input[type=date]:not(.browser-default):focus.invalid ~ label,input[type=datetime]:not(.browser-default):focus.invalid ~ label,input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,input[type=tel]:not(.browser-default):focus.invalid ~ label,input[type=number]:not(.browser-default):focus.invalid ~ label,input[type=search]:not(.browser-default):focus.invalid ~ label,textarea.materialize-textarea:focus.invalid ~ label{color:#F44336}input:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}input.valid:not([type]),input.valid:not([type]):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;-webkit-box-shadow:0 1px 0 0 #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus{border-bottom:1px solid #F44336;-webkit-box-shadow:0 1px 0 0 #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).valid ~ .helper-text[data-success],input:not([type]):focus.valid ~ .helper-text[data-success],input:not([type]).invalid ~ .helper-text[data-error],input:not([type]):focus.invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],textarea.materialize-textarea.valid ~ .helper-text[data-success],textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],textarea.materialize-textarea.invalid ~ .helper-text[data-error],textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],.select-wrapper.valid .helper-text[data-success],.select-wrapper.invalid ~ .helper-text[data-error]{color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}input:not([type]).valid ~ .helper-text:after,input:not([type]):focus.valid ~ .helper-text:after,input[type=text]:not(.browser-default).valid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=password]:not(.browser-default).valid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=email]:not(.browser-default).valid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=url]:not(.browser-default).valid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=time]:not(.browser-default).valid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=date]:not(.browser-default).valid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=tel]:not(.browser-default).valid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=number]:not(.browser-default).valid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=search]:not(.browser-default).valid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,textarea.materialize-textarea.valid ~ .helper-text:after,textarea.materialize-textarea:focus.valid ~ .helper-text:after,.select-wrapper.valid ~ .helper-text:after{content:attr(data-success);color:#4CAF50}input:not([type]).invalid ~ .helper-text:after,input:not([type]):focus.invalid ~ .helper-text:after,input[type=text]:not(.browser-default).invalid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=password]:not(.browser-default).invalid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=email]:not(.browser-default).invalid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=url]:not(.browser-default).invalid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=time]:not(.browser-default).invalid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=date]:not(.browser-default).invalid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=number]:not(.browser-default).invalid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=search]:not(.browser-default).invalid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,textarea.materialize-textarea.invalid ~ .helper-text:after,textarea.materialize-textarea:focus.invalid ~ .helper-text:after,.select-wrapper.invalid ~ .helper-text:after{content:attr(data-error);color:#F44336}input:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:\"\";position:absolute;top:100%;left:0;opacity:0;-webkit-transition:.2s opacity ease-out, .2s color ease-out;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;-webkit-transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:transform .2s ease-out, color .2s ease-out;transition:transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;-webkit-transform:translateY(12px);transform:translateY(12px)}.input-field>label:not(.label-icon).active{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field>input[type]:-webkit-autofill:not(.browser-default)+label,.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,0.54)}.input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;-webkit-transition:color .2s;transition:color .2s;top:.5rem}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .helper-text,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;-webkit-transition:.3s background-color;transition:.3s background-color}.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;-webkit-box-shadow:none;box-shadow:none}.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;-webkit-box-shadow:none;box-shadow:none;color:#444}.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons{color:#444}.input-field input[type=search]+.label-icon{-webkit-transform:none;transform:none;left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;-webkit-transition:.3s color;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;-webkit-box-sizing:border-box;box-sizing:border-box}.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}.character-counter{min-height:18px}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;opacity:0;pointer-events:none}[type=\"radio\"]:not(:checked)+span,[type=\"radio\"]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-transition:.28s ease;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"radio\"]+span:before,[type=\"radio\"]+span:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;-webkit-transition:.28s ease;transition:.28s ease}[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after,[type=\"radio\"]:checked+span:before,[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border-radius:50%}[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after{border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+span:after{-webkit-transform:scale(0);transform:scale(0)}[type=\"radio\"]:checked+span:before{border:2px solid transparent}[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border:2px solid #26a69a}[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:after{background-color:#26a69a}[type=\"radio\"]:checked+span:after{-webkit-transform:scale(1.02);transform:scale(1.02)}[type=\"radio\"].with-gap:checked+span:after{-webkit-transform:scale(0.5);transform:scale(0.5)}[type=\"radio\"].tabbed:focus+span:before{-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type=\"radio\"].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,0.42)}[type=\"radio\"].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:not(:checked)+span:before,[type=\"radio\"]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled+span{color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:checked+span:after{background-color:rgba(0,0,0,0.42);border-color:#949494}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;opacity:0;pointer-events:none}[type=\"checkbox\"]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"checkbox\"]+span:not(.lever):before,[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;-webkit-transition:.2s;transition:.2s}[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{border:0;-webkit-transform:scale(0);transform:scale(0)}[type=\"checkbox\"]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,0.42)}[type=\"checkbox\"].tabbed:focus+span:not(.lever):after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}[type=\"checkbox\"]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}[type=\"checkbox\"].filled-in+span:not(.lever):after{border-radius:2px}[type=\"checkbox\"].filled-in+span:not(.lever):before,[type=\"checkbox\"].filled-in+span:not(.lever):after{content:'';left:0;position:absolute;-webkit-transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=\"checkbox\"].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}.switch label .lever{content:\"\";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;-webkit-transition:background 0.3s ease;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:before,.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;-webkit-transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease}.switch label .lever:before{background-color:rgba(38,166,154,0.15)}.switch label .lever:after{background-color:#F1F1F1;-webkit-box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(38,166,154,0.15)}input[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,0.87)}.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}select:disabled{color:rgba(0,0,0,0.42)}.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}.select-wrapper.disabled .caret{fill:rgba(0,0,0,0.42)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.file-field input[type=file]::-webkit-file-upload-button{display:none}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0}.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 10px rgba(38,166,154,0.26);box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-moz-focus-inner{border:0}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s}.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.sidenav .collapsible{margin:0}.sidenav li{float:none;line-height:48px}.sidenav li.active{background-color:rgba(0,0,0,0.05)}.sidenav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.sidenav li>a:hover{background-color:rgba(0,0,0,0.05)}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating{margin:10px 15px}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-floating{color:#fff}.sidenav li>a.btn-flat{color:#343434}.sidenav li>a.btn:hover,.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn-large:hover{background-color:#2bbbad}.sidenav li>a.btn-floating:hover{background-color:#26a69a}.sidenav li>a>i,.sidenav li>a>[class^=\"mdi-\"],.sidenav li>a li>a>[class*=\"mdi-\"],.sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.sidenav .divider{margin:8px 0 0 0}.sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.sidenav .subheader:hover{background-color:transparent}.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}.sidenav .user-view>a{height:auto;padding:0}.sidenav .user-view>a:hover{background-color:transparent}.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.sidenav .user-view .circle,.sidenav .user-view .name,.sidenav .user-view .email{display:block}.sidenav .user-view .circle{height:64px;width:64px}.sidenav .user-view .name,.sidenav .user-view .email{font-size:14px;line-height:24px}.sidenav .user-view .name{margin-top:16px;font-weight:500}.sidenav .user-view .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.drag-target.right-aligned{right:0}.sidenav.sidenav-fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.sidenav.sidenav-fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}.sidenav .collapsible-body{padding:0}.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;display:none}.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item>img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;-webkit-transition:visibility 0s .3s;transition:visibility 0s .3s}.tap-target-wrapper.open{visibility:visible;-webkit-transition:visibility 0s;transition:visibility 0s}.tap-target-wrapper.open .tap-target{-webkit-transform:scale(1);transform:scale(1);opacity:.95;-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-wrapper.open .tap-target-wave::before{-webkit-transform:scale(1);transform:scale(1)}.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;-webkit-transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s}.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;-webkit-box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-content{position:relative;display:table-cell}.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}.tap-target-wave::before,.tap-target-wave::after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}.tap-target-wave::before{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}.tap-target-wave::after{visibility:hidden;-webkit-transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s;transition:opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;z-index:-1}.tap-target-origin{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:10002;position:absolute !important}.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}.pulse{overflow:visible;position:relative}.pulse::before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}@-webkit-keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}.datepicker-modal{max-width:325px;min-width:300px;max-height:none}.datepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.datepicker-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:280px;margin:0 auto}.datepicker-controls .selects-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}.datepicker-controls .select-wrapper input:focus{border-bottom:none}.datepicker-controls .select-wrapper .caret{display:none}.datepicker-controls .select-year input{width:50px}.datepicker-controls .select-month input{width:70px}.month-prev,.month-next{margin-top:4px;cursor:pointer;background-color:transparent;border:none}.datepicker-date-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;color:#fff;padding:20px 22px;font-weight:500}.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:rgba(255,255,255,0.7)}.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}.datepicker-calendar-container{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.datepicker-table{width:280px;font-size:1rem;margin:0 auto}.datepicker-table thead{border-bottom:none}.datepicker-table th{padding:10px 5px;text-align:center}.datepicker-table tr{border:none}.datepicker-table abbr{text-decoration:none;color:#999}.datepicker-table td{border-radius:50%;padding:0}.datepicker-table td.is-today{color:#26a69a}.datepicker-table td.is-selected{background-color:#26a69a;color:#fff}.datepicker-table td.is-outside-current-month,.datepicker-table td.is-disabled{color:rgba(0,0,0,0.3);pointer-events:none}.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}.datepicker-day-button:focus{background-color:rgba(43,161,150,0.25)}.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.datepicker-cancel,.datepicker-clear,.datepicker-today,.datepicker-done{color:#26a69a;padding:0 1rem}.datepicker-clear{color:#F44336}@media only screen and (min-width: 601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.datepicker-date-display{-webkit-box-flex:0;-webkit-flex:0 1 270px;-ms-flex:0 1 270px;flex:0 1 270px}.datepicker-controls,.datepicker-table,.datepicker-footer{width:320px}.datepicker-day-button{line-height:44px}}.timepicker-modal{max-width:325px;max-height:none}.timepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.text-primary{color:#fff}.timepicker-digital-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;padding:10px;font-weight:300}.timepicker-text-container{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-span-hours,.timepicker-span-minutes,.timepicker-span-am-pm div{cursor:pointer}.timepicker-span-hours{margin-right:3px}.timepicker-span-minutes{margin-left:3px}.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}.timepicker-analog-display{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}.timepicker-minutes{visibility:hidden}.timepicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(38,166,154,0.25)}.timepicker-dial{-webkit-transition:opacity 350ms, -webkit-transform 350ms;transition:opacity 350ms, -webkit-transform 350ms;transition:transform 350ms, opacity 350ms;transition:transform 350ms, opacity 350ms, -webkit-transform 350ms}.timepicker-dial-out{opacity:0}.timepicker-dial-out.timepicker-hours{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.timepicker-dial-out.timepicker-minutes{-webkit-transform:scale(0.8, 0.8);transform:scale(0.8, 0.8)}.timepicker-canvas{-webkit-transition:opacity 175ms;transition:opacity 175ms}.timepicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}.timepicker-canvas-out{opacity:0.25}.timepicker-canvas-bearing{stroke:none;fill:#26a69a}.timepicker-canvas-bg{stroke:none;fill:#26a69a}.timepicker-footer{margin:0 auto;padding:5px 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.timepicker-clear{color:#F44336}.timepicker-close{color:#26a69a}.timepicker-clear,.timepicker-close{padding:0 20px}@media only screen and (min-width: 601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\n", "",{"version":3,"sources":["webpack://./node_modules/materialize-css/dist/css/materialize.min.css"],"names":[],"mappings":"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","sourcesContent":["/*!\r\n * Materialize v1.0.0-rc.2 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:rgba(0,0,0,0) !important}.transparent-text{color:rgba(0,0,0,0) !important}/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}button,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default)>li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.clearfix{clear:both}.z-depth-0{-webkit-box-shadow:none !important;box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-small,.btn-floating,.dropdown-content,.collapsible,.sidenav{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-small:hover,.btn-floating:hover{-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{-webkit-box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}.z-depth-4{-webkit-box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2);box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)}.z-depth-5,.modal{-webkit-box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}.hoverable{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s}.hoverable:hover{-webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 1201px){.hide-on-extra-large-only{display:none !important}}@media only screen and (min-width: 1201px){.show-on-extra-large{display:block !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table;border-collapse:collapse;border-spacing:0}table.striped tr{border-bottom:none}table.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,0.5)}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{-webkit-transition:background-color .25s ease;transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:rgba(242,242,242,0.5)}table.centered thead tr th,table.centered tbody tr td{text-align:center}tr{border-bottom:1px solid rgba(0,0,0,0.12)}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\00a0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,0.12)}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;-webkit-transition:.25s;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;-webkit-transition:width .3s linear;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;-webkit-box-sizing:border-box;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-left:auto}.sidenav span.badge{margin-top:calc(24px - 11px)}table span.badge{display:inline-block;float:none;margin-left:auto}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';-moz-font-feature-settings:'liga';font-feature-settings:'liga'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.col .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width: 1201px){.row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.sidenav-trigger{display:none}}nav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .sidenav-trigger i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{-webkit-transition:background-color .3s;transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{-webkit-transition:background-color .3s;transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;-webkit-box-shadow:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);-webkit-transition:color .3s;transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}a{text-decoration:none}html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:2.3733333333rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.9466666667rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}h5{font-size:1.64rem;line-height:110%;margin:1.0933333333rem 0 .656rem 0}h6{font-size:1.15rem;line-height:110%;margin:.7666666667rem 0 .46rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.scale-transition{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}.scale-transition.scale-out{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s !important;transition:-webkit-transform .2s !important;transition:transform .2s !important;transition:transform .2s, -webkit-transform .2s !important}.scale-transition.scale-in{-webkit-transform:scale(1);transform:scale(1)}.card-panel{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.card.horizontal .card-stacked .card-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);position:relative;padding:16px 24px}.card .card-action:last-child{border-radius:0 0 2px 2px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;-webkit-transition:color .3s ease;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:default}.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs.tabs-fixed-width .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;-webkit-transition:color .28s ease, background-color .28s ease;transition:color .28s ease, background-color .28s ease}.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,0.2);outline:none}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.4);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;visibility:hidden}.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-small:disabled,.btn-flat:disabled,.btn[disabled],.btn-large[disabled],.btn-small[disabled],.btn-floating[disabled],.btn-large[disabled],.btn-small[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;-webkit-box-shadow:none;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat{font-size:14px;outline:0}.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-small:focus,.btn-floating:focus{background-color:#1d7d74}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;-webkit-transition:background-color .2s ease-out;transition:background-color .2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover,.btn-small:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px 0}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;-webkit-transition:none;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.btn-flat{-webkit-box-shadow:none;box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{-webkit-box-shadow:none;box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,0.1)}.btn-flat.disabled,.btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b2b2 !important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;-webkit-transform-origin:0 0;transform-origin:0 0}.dropdown-content:focus{outline:0}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}.dropdown-content li:hover,.dropdown-content li.active{background-color:#eee}.dropdown-content li:focus{outline:none}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px;-webkit-transform:none;transform:none}.dropdown-trigger{cursor:pointer}/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);-webkit-transition:all 0.7s ease-out;transition:all 0.7s ease-out;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{-webkit-transition:none !important;transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}.modal:focus{outline:none}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header:focus{outline:0}.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}.keyboard-focused .collapsible-header:focus{background-color:#eee}.collapsible-body{display:none;border-bottom:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;padding:2rem}.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;-webkit-box-shadow:none;box-shadow:none}.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;-webkit-box-shadow:none;box-shadow:none}.collapsible.popout>li{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;-webkit-transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip:focus{outline:none;background-color:#26a69a;color:#fff}.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;-webkit-box-shadow:none;box-shadow:none;margin:0 0 8px 0;min-height:45px;outline:none;-webkit-transition:all .3s;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;-webkit-box-shadow:none !important;box-shadow:none !important}.chips .autocomplete-content{margin-top:0;margin-bottom:0}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;-webkit-transition:opacity .4s;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}::-ms-input-placeholder{color:#d1d1d1}::placeholder{color:#d1d1d1}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transition:border .3s, -webkit-box-shadow .3s;transition:border .3s, -webkit-box-shadow .3s;transition:box-shadow .3s, border .3s;transition:box-shadow .3s, border .3s, -webkit-box-shadow .3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly=\"readonly\"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly=\"readonly\"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly=\"readonly\"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly=\"readonly\"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly=\"readonly\"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly=\"readonly\"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly=\"readonly\"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly=\"readonly\"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.42)}input:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]):focus.valid ~ label,input[type=text]:not(.browser-default):focus.valid ~ label,input[type=password]:not(.browser-default):focus.valid ~ label,input[type=email]:not(.browser-default):focus.valid ~ label,input[type=url]:not(.browser-default):focus.valid ~ label,input[type=time]:not(.browser-default):focus.valid ~ label,input[type=date]:not(.browser-default):focus.valid ~ label,input[type=datetime]:not(.browser-default):focus.valid ~ label,input[type=datetime-local]:not(.browser-default):focus.valid ~ label,input[type=tel]:not(.browser-default):focus.valid ~ label,input[type=number]:not(.browser-default):focus.valid ~ label,input[type=search]:not(.browser-default):focus.valid ~ label,textarea.materialize-textarea:focus.valid ~ label{color:#4CAF50}input:not([type]):focus.invalid ~ label,input[type=text]:not(.browser-default):focus.invalid ~ label,input[type=password]:not(.browser-default):focus.invalid ~ label,input[type=email]:not(.browser-default):focus.invalid ~ label,input[type=url]:not(.browser-default):focus.invalid ~ label,input[type=time]:not(.browser-default):focus.invalid ~ label,input[type=date]:not(.browser-default):focus.invalid ~ label,input[type=datetime]:not(.browser-default):focus.invalid ~ label,input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,input[type=tel]:not(.browser-default):focus.invalid ~ label,input[type=number]:not(.browser-default):focus.invalid ~ label,input[type=search]:not(.browser-default):focus.invalid ~ label,textarea.materialize-textarea:focus.invalid ~ label{color:#F44336}input:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}input.valid:not([type]),input.valid:not([type]):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;-webkit-box-shadow:0 1px 0 0 #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus{border-bottom:1px solid #F44336;-webkit-box-shadow:0 1px 0 0 #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).valid ~ .helper-text[data-success],input:not([type]):focus.valid ~ .helper-text[data-success],input:not([type]).invalid ~ .helper-text[data-error],input:not([type]):focus.invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],textarea.materialize-textarea.valid ~ .helper-text[data-success],textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],textarea.materialize-textarea.invalid ~ .helper-text[data-error],textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],.select-wrapper.valid .helper-text[data-success],.select-wrapper.invalid ~ .helper-text[data-error]{color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}input:not([type]).valid ~ .helper-text:after,input:not([type]):focus.valid ~ .helper-text:after,input[type=text]:not(.browser-default).valid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=password]:not(.browser-default).valid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=email]:not(.browser-default).valid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=url]:not(.browser-default).valid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=time]:not(.browser-default).valid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=date]:not(.browser-default).valid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=tel]:not(.browser-default).valid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=number]:not(.browser-default).valid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=search]:not(.browser-default).valid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,textarea.materialize-textarea.valid ~ .helper-text:after,textarea.materialize-textarea:focus.valid ~ .helper-text:after,.select-wrapper.valid ~ .helper-text:after{content:attr(data-success);color:#4CAF50}input:not([type]).invalid ~ .helper-text:after,input:not([type]):focus.invalid ~ .helper-text:after,input[type=text]:not(.browser-default).invalid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=password]:not(.browser-default).invalid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=email]:not(.browser-default).invalid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=url]:not(.browser-default).invalid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=time]:not(.browser-default).invalid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=date]:not(.browser-default).invalid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=number]:not(.browser-default).invalid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=search]:not(.browser-default).invalid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,textarea.materialize-textarea.invalid ~ .helper-text:after,textarea.materialize-textarea:focus.invalid ~ .helper-text:after,.select-wrapper.invalid ~ .helper-text:after{content:attr(data-error);color:#F44336}input:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:\"\";position:absolute;top:100%;left:0;opacity:0;-webkit-transition:.2s opacity ease-out, .2s color ease-out;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;-webkit-transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:transform .2s ease-out, color .2s ease-out;transition:transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;-webkit-transform:translateY(12px);transform:translateY(12px)}.input-field>label:not(.label-icon).active{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field>input[type]:-webkit-autofill:not(.browser-default)+label,.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,0.54)}.input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;-webkit-transition:color .2s;transition:color .2s;top:.5rem}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .helper-text,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;-webkit-transition:.3s background-color;transition:.3s background-color}.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;-webkit-box-shadow:none;box-shadow:none}.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;-webkit-box-shadow:none;box-shadow:none;color:#444}.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons{color:#444}.input-field input[type=search]+.label-icon{-webkit-transform:none;transform:none;left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;-webkit-transition:.3s color;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;-webkit-box-sizing:border-box;box-sizing:border-box}.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}.character-counter{min-height:18px}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;opacity:0;pointer-events:none}[type=\"radio\"]:not(:checked)+span,[type=\"radio\"]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-transition:.28s ease;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"radio\"]+span:before,[type=\"radio\"]+span:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;-webkit-transition:.28s ease;transition:.28s ease}[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after,[type=\"radio\"]:checked+span:before,[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border-radius:50%}[type=\"radio\"]:not(:checked)+span:before,[type=\"radio\"]:not(:checked)+span:after{border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+span:after{-webkit-transform:scale(0);transform:scale(0)}[type=\"radio\"]:checked+span:before{border:2px solid transparent}[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:before,[type=\"radio\"].with-gap:checked+span:after{border:2px solid #26a69a}[type=\"radio\"]:checked+span:after,[type=\"radio\"].with-gap:checked+span:after{background-color:#26a69a}[type=\"radio\"]:checked+span:after{-webkit-transform:scale(1.02);transform:scale(1.02)}[type=\"radio\"].with-gap:checked+span:after{-webkit-transform:scale(0.5);transform:scale(0.5)}[type=\"radio\"].tabbed:focus+span:before{-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type=\"radio\"].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,0.42)}[type=\"radio\"].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:not(:checked)+span:before,[type=\"radio\"]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled+span{color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,0.42)}[type=\"radio\"]:disabled:checked+span:after{background-color:rgba(0,0,0,0.42);border-color:#949494}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;opacity:0;pointer-events:none}[type=\"checkbox\"]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"checkbox\"]+span:not(.lever):before,[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;-webkit-transition:.2s;transition:.2s}[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after{border:0;-webkit-transform:scale(0);transform:scale(0)}[type=\"checkbox\"]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,0.42)}[type=\"checkbox\"].tabbed:focus+span:not(.lever):after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}[type=\"checkbox\"]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}[type=\"checkbox\"].filled-in+span:not(.lever):after{border-radius:2px}[type=\"checkbox\"].filled-in+span:not(.lever):before,[type=\"checkbox\"].filled-in+span:not(.lever):after{content:'';left:0;position:absolute;-webkit-transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=\"checkbox\"].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}.switch label .lever{content:\"\";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;-webkit-transition:background 0.3s ease;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:before,.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;-webkit-transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease}.switch label .lever:before{background-color:rgba(38,166,154,0.15)}.switch label .lever:after{background-color:#F1F1F1;-webkit-box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(38,166,154,0.15)}input[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,0.87)}.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}select:disabled{color:rgba(0,0,0,0.42)}.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}.select-wrapper.disabled .caret{fill:rgba(0,0,0,0.42)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.file-field input[type=file]::-webkit-file-upload-button{display:none}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0}.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 10px rgba(38,166,154,0.26);box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-moz-focus-inner{border:0}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s}.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.sidenav .collapsible{margin:0}.sidenav li{float:none;line-height:48px}.sidenav li.active{background-color:rgba(0,0,0,0.05)}.sidenav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.sidenav li>a:hover{background-color:rgba(0,0,0,0.05)}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating{margin:10px 15px}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-floating{color:#fff}.sidenav li>a.btn-flat{color:#343434}.sidenav li>a.btn:hover,.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn-large:hover{background-color:#2bbbad}.sidenav li>a.btn-floating:hover{background-color:#26a69a}.sidenav li>a>i,.sidenav li>a>[class^=\"mdi-\"],.sidenav li>a li>a>[class*=\"mdi-\"],.sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.sidenav .divider{margin:8px 0 0 0}.sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.sidenav .subheader:hover{background-color:transparent}.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}.sidenav .user-view>a{height:auto;padding:0}.sidenav .user-view>a:hover{background-color:transparent}.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.sidenav .user-view .circle,.sidenav .user-view .name,.sidenav .user-view .email{display:block}.sidenav .user-view .circle{height:64px;width:64px}.sidenav .user-view .name,.sidenav .user-view .email{font-size:14px;line-height:24px}.sidenav .user-view .name{margin-top:16px;font-weight:500}.sidenav .user-view .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.drag-target.right-aligned{right:0}.sidenav.sidenav-fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.sidenav.sidenav-fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}.sidenav .collapsible-body{padding:0}.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;display:none}.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item>img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;-webkit-transition:visibility 0s .3s;transition:visibility 0s .3s}.tap-target-wrapper.open{visibility:visible;-webkit-transition:visibility 0s;transition:visibility 0s}.tap-target-wrapper.open .tap-target{-webkit-transform:scale(1);transform:scale(1);opacity:.95;-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-wrapper.open .tap-target-wave::before{-webkit-transform:scale(1);transform:scale(1)}.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;-webkit-transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s}.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;-webkit-box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-content{position:relative;display:table-cell}.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}.tap-target-wave::before,.tap-target-wave::after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}.tap-target-wave::before{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}.tap-target-wave::after{visibility:hidden;-webkit-transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s;transition:opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;z-index:-1}.tap-target-origin{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:10002;position:absolute !important}.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}.pulse{overflow:visible;position:relative}.pulse::before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}@-webkit-keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}.datepicker-modal{max-width:325px;min-width:300px;max-height:none}.datepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.datepicker-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:280px;margin:0 auto}.datepicker-controls .selects-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}.datepicker-controls .select-wrapper input:focus{border-bottom:none}.datepicker-controls .select-wrapper .caret{display:none}.datepicker-controls .select-year input{width:50px}.datepicker-controls .select-month input{width:70px}.month-prev,.month-next{margin-top:4px;cursor:pointer;background-color:transparent;border:none}.datepicker-date-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;color:#fff;padding:20px 22px;font-weight:500}.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:rgba(255,255,255,0.7)}.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}.datepicker-calendar-container{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.datepicker-table{width:280px;font-size:1rem;margin:0 auto}.datepicker-table thead{border-bottom:none}.datepicker-table th{padding:10px 5px;text-align:center}.datepicker-table tr{border:none}.datepicker-table abbr{text-decoration:none;color:#999}.datepicker-table td{border-radius:50%;padding:0}.datepicker-table td.is-today{color:#26a69a}.datepicker-table td.is-selected{background-color:#26a69a;color:#fff}.datepicker-table td.is-outside-current-month,.datepicker-table td.is-disabled{color:rgba(0,0,0,0.3);pointer-events:none}.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}.datepicker-day-button:focus{background-color:rgba(43,161,150,0.25)}.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.datepicker-cancel,.datepicker-clear,.datepicker-today,.datepicker-done{color:#26a69a;padding:0 1rem}.datepicker-clear{color:#F44336}@media only screen and (min-width: 601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.datepicker-date-display{-webkit-box-flex:0;-webkit-flex:0 1 270px;-ms-flex:0 1 270px;flex:0 1 270px}.datepicker-controls,.datepicker-table,.datepicker-footer{width:320px}.datepicker-day-button{line-height:44px}}.timepicker-modal{max-width:325px;max-height:none}.timepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.text-primary{color:#fff}.timepicker-digital-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;padding:10px;font-weight:300}.timepicker-text-container{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-span-hours,.timepicker-span-minutes,.timepicker-span-am-pm div{cursor:pointer}.timepicker-span-hours{margin-right:3px}.timepicker-span-minutes{margin-left:3px}.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}.timepicker-analog-display{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}.timepicker-minutes{visibility:hidden}.timepicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(38,166,154,0.25)}.timepicker-dial{-webkit-transition:opacity 350ms, -webkit-transform 350ms;transition:opacity 350ms, -webkit-transform 350ms;transition:transform 350ms, opacity 350ms;transition:transform 350ms, opacity 350ms, -webkit-transform 350ms}.timepicker-dial-out{opacity:0}.timepicker-dial-out.timepicker-hours{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.timepicker-dial-out.timepicker-minutes{-webkit-transform:scale(0.8, 0.8);transform:scale(0.8, 0.8)}.timepicker-canvas{-webkit-transition:opacity 175ms;transition:opacity 175ms}.timepicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}.timepicker-canvas-out{opacity:0.25}.timepicker-canvas-bearing{stroke:none;fill:#26a69a}.timepicker-canvas-bg{stroke:none;fill:#26a69a}.timepicker-footer{margin:0 auto;padding:5px 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.timepicker-clear{color:#F44336}.timepicker-close{color:#26a69a}.timepicker-clear,.timepicker-close{padding:0 20px}@media only screen and (min-width: 601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/eventing-bus/index.js":
/*!********************************************!*\
  !*** ./node_modules/eventing-bus/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventStream = __webpack_require__(/*! ./lib/event_stream */ "./node_modules/eventing-bus/lib/event_stream.js");
module.exports = new EventStream();


/***/ }),

/***/ "./node_modules/eventing-bus/lib/event_stream.js":
/*!*******************************************************!*\
  !*** ./node_modules/eventing-bus/lib/event_stream.js ***!
  \*******************************************************/
/***/ ((module) => {

var slice = [].slice;

function EventStream() {
  if (!(this instanceof EventStream)) {
    return new EventStream();
  }

  this.nextSubscriptionIndex = 0;
  this.callbacks = {};
}

EventStream.prototype.unregisterCallback = function unregisterCallback(callback) {
  var that = this
  Object.keys(this.callbacks).forEach(function(key) {
    that.callbacks[key] = that.callbacks[key].filter(function(c) {
      return c.subscription !== callback;
    })
  })
}

EventStream.prototype.unregisterAllCallbacks = function unregisterAllCallbacks() {
  this.callbacks = {};
};

EventStream.prototype.unregisterCallbacksForEvent = function unregisterCallbacksForEvent(event) {
  if(this.callbacks[event]) {
    this.callbacks[event] = []
  }
}

EventStream.prototype.on = function on(event, callback) {
  if (!this.callbacks[event]) {
    this.callbacks[event] = [];
  }

  this.callbacks[event].push({ 
    subscription: callback, 
    index: this.nextSubscriptionIndex
  });

  var currentIndex = this.nextSubscriptionIndex;
  var that = this;
  this.nextSubscriptionIndex += 1;

  return function() {      
    that.callbacks[event] = that.callbacks[event].filter(function(callback) {
      return callback.index !== currentIndex;
    });
  };
};

EventStream.prototype.publish = function publish() {
  var event = arguments[0];
  var args = arguments.length >= 2 ? slice.call(arguments, 1) : [];
  if (this.callbacks && this.callbacks[event]) {
    this.callbacks[event].forEach(function(callback) {
      callback.subscription.apply(null, args);
    });
  }
};

module.exports = EventStream;


/***/ }),

/***/ "./node_modules/smartcrop/smartcrop.js":
/*!*********************************************!*\
  !*** ./node_modules/smartcrop/smartcrop.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * smartcrop.js
 * A javascript library implementing content aware image cropping
 *
 * Copyright (C) 2018 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {
  'use strict';

  var smartcrop = {};
  // Promise implementation to use
  function NoPromises() {
    throw new Error('No native promises and smartcrop.Promise not set.');
  }

  smartcrop.Promise = typeof Promise !== 'undefined' ? Promise : NoPromises;

  smartcrop.DEFAULTS = {
    width: 0,
    height: 0,
    aspect: 0,
    cropWidth: 0,
    cropHeight: 0,
    detailWeight: 0.2,
    skinColor: [0.78, 0.57, 0.44],
    skinBias: 0.01,
    skinBrightnessMin: 0.2,
    skinBrightnessMax: 1.0,
    skinThreshold: 0.8,
    skinWeight: 1.8,
    saturationBrightnessMin: 0.05,
    saturationBrightnessMax: 0.9,
    saturationThreshold: 0.4,
    saturationBias: 0.2,
    saturationWeight: 0.1,
    // Step * minscale rounded down to the next power of two should be good
    scoreDownSample: 8,
    step: 8,
    scaleStep: 0.1,
    minScale: 1.0,
    maxScale: 1.0,
    edgeRadius: 0.4,
    edgeWeight: -20.0,
    outsideImportance: -0.5,
    boostWeight: 100.0,
    ruleOfThirds: true,
    prescale: true,
    imageOperations: null,
    canvasFactory: defaultCanvasFactory,
    // Factory: defaultFactories,
    debug: false
  };

  smartcrop.crop = function(inputImage, options_, callback) {
    var options = extend({}, smartcrop.DEFAULTS, options_);

    if (options.aspect) {
      options.width = options.aspect;
      options.height = 1;
    }

    if (options.imageOperations === null) {
      options.imageOperations = canvasImageOperations(options.canvasFactory);
    }

    var iop = options.imageOperations;

    var scale = 1;
    var prescale = 1;

    // open the image
    return iop
      .open(inputImage, options.input)
      .then(function(image) {
        // calculate desired crop dimensions based on the image size
        if (options.width && options.height) {
          scale = min(
            image.width / options.width,
            image.height / options.height
          );
          options.cropWidth = ~~(options.width * scale);
          options.cropHeight = ~~(options.height * scale);
          // Img = 100x100, width = 95x95, scale = 100/95, 1/scale > min
          // don't set minscale smaller than 1/scale
          // -> don't pick crops that need upscaling
          options.minScale = min(
            options.maxScale,
            max(1 / scale, options.minScale)
          );

          // prescale if possible
          if (options.prescale !== false) {
            prescale = min(max(256 / image.width, 256 / image.height), 1);
            if (prescale < 1) {
              image = iop.resample(
                image,
                image.width * prescale,
                image.height * prescale
              );
              options.cropWidth = ~~(options.cropWidth * prescale);
              options.cropHeight = ~~(options.cropHeight * prescale);
              if (options.boost) {
                options.boost = options.boost.map(function(boost) {
                  return {
                    x: ~~(boost.x * prescale),
                    y: ~~(boost.y * prescale),
                    width: ~~(boost.width * prescale),
                    height: ~~(boost.height * prescale),
                    weight: boost.weight
                  };
                });
              }
            } else {
              prescale = 1;
            }
          }
        }
        return image;
      })
      .then(function(image) {
        return iop.getData(image).then(function(data) {
          var result = analyse(options, data);

          var crops = result.crops || [result.topCrop];
          for (var i = 0, iLen = crops.length; i < iLen; i++) {
            var crop = crops[i];
            crop.x = ~~(crop.x / prescale);
            crop.y = ~~(crop.y / prescale);
            crop.width = ~~(crop.width / prescale);
            crop.height = ~~(crop.height / prescale);
          }
          if (callback) callback(result);
          return result;
        });
      });
  };

  // Check if all the dependencies are there
  // todo:
  smartcrop.isAvailable = function(options) {
    if (!smartcrop.Promise) return false;

    var canvasFactory = options ? options.canvasFactory : defaultCanvasFactory;

    if (canvasFactory === defaultCanvasFactory) {
      var c = document.createElement('canvas');
      if (!c.getContext('2d')) {
        return false;
      }
    }

    return true;
  };

  function edgeDetect(i, o) {
    var id = i.data;
    var od = o.data;
    var w = i.width;
    var h = i.height;

    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var p = (y * w + x) * 4;
        var lightness;

        if (x === 0 || x >= w - 1 || y === 0 || y >= h - 1) {
          lightness = sample(id, p);
        } else {
          lightness =
            sample(id, p) * 4 -
            sample(id, p - w * 4) -
            sample(id, p - 4) -
            sample(id, p + 4) -
            sample(id, p + w * 4);
        }

        od[p + 1] = lightness;
      }
    }
  }

  function skinDetect(options, i, o) {
    var id = i.data;
    var od = o.data;
    var w = i.width;
    var h = i.height;

    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var p = (y * w + x) * 4;
        var lightness = cie(id[p], id[p + 1], id[p + 2]) / 255;
        var skin = skinColor(options, id[p], id[p + 1], id[p + 2]);
        var isSkinColor = skin > options.skinThreshold;
        var isSkinBrightness =
          lightness >= options.skinBrightnessMin &&
          lightness <= options.skinBrightnessMax;
        if (isSkinColor && isSkinBrightness) {
          od[p] =
            (skin - options.skinThreshold) *
            (255 / (1 - options.skinThreshold));
        } else {
          od[p] = 0;
        }
      }
    }
  }

  function saturationDetect(options, i, o) {
    var id = i.data;
    var od = o.data;
    var w = i.width;
    var h = i.height;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var p = (y * w + x) * 4;

        var lightness = cie(id[p], id[p + 1], id[p + 2]) / 255;
        var sat = saturation(id[p], id[p + 1], id[p + 2]);

        var acceptableSaturation = sat > options.saturationThreshold;
        var acceptableLightness =
          lightness >= options.saturationBrightnessMin &&
          lightness <= options.saturationBrightnessMax;
        if (acceptableLightness && acceptableSaturation) {
          od[p + 2] =
            (sat - options.saturationThreshold) *
            (255 / (1 - options.saturationThreshold));
        } else {
          od[p + 2] = 0;
        }
      }
    }
  }

  function applyBoosts(options, output) {
    if (!options.boost) return;
    var od = output.data;
    for (var i = 0; i < output.width; i += 4) {
      od[i + 3] = 0;
    }
    for (i = 0; i < options.boost.length; i++) {
      applyBoost(options.boost[i], options, output);
    }
  }

  function applyBoost(boost, options, output) {
    var od = output.data;
    var w = output.width;
    var x0 = ~~boost.x;
    var x1 = ~~(boost.x + boost.width);
    var y0 = ~~boost.y;
    var y1 = ~~(boost.y + boost.height);
    var weight = boost.weight * 255;
    for (var y = y0; y < y1; y++) {
      for (var x = x0; x < x1; x++) {
        var i = (y * w + x) * 4;
        od[i + 3] += weight;
      }
    }
  }

  function generateCrops(options, width, height) {
    var results = [];
    var minDimension = min(width, height);
    var cropWidth = options.cropWidth || minDimension;
    var cropHeight = options.cropHeight || minDimension;
    for (
      var scale = options.maxScale;
      scale >= options.minScale;
      scale -= options.scaleStep
    ) {
      for (var y = 0; y + cropHeight * scale <= height; y += options.step) {
        for (var x = 0; x + cropWidth * scale <= width; x += options.step) {
          results.push({
            x: x,
            y: y,
            width: cropWidth * scale,
            height: cropHeight * scale
          });
        }
      }
    }
    return results;
  }

  function score(options, output, crop) {
    var result = {
      detail: 0,
      saturation: 0,
      skin: 0,
      boost: 0,
      total: 0
    };

    var od = output.data;
    var downSample = options.scoreDownSample;
    var invDownSample = 1 / downSample;
    var outputHeightDownSample = output.height * downSample;
    var outputWidthDownSample = output.width * downSample;
    var outputWidth = output.width;

    for (var y = 0; y < outputHeightDownSample; y += downSample) {
      for (var x = 0; x < outputWidthDownSample; x += downSample) {
        var p =
          (~~(y * invDownSample) * outputWidth + ~~(x * invDownSample)) * 4;
        var i = importance(options, crop, x, y);
        var detail = od[p + 1] / 255;

        result.skin += (od[p] / 255) * (detail + options.skinBias) * i;
        result.detail += detail * i;
        result.saturation +=
          (od[p + 2] / 255) * (detail + options.saturationBias) * i;
        result.boost += (od[p + 3] / 255) * i;
      }
    }

    result.total =
      (result.detail * options.detailWeight +
        result.skin * options.skinWeight +
        result.saturation * options.saturationWeight +
        result.boost * options.boostWeight) /
      (crop.width * crop.height);
    return result;
  }

  function importance(options, crop, x, y) {
    if (
      crop.x > x ||
      x >= crop.x + crop.width ||
      crop.y > y ||
      y >= crop.y + crop.height
    ) {
      return options.outsideImportance;
    }
    x = (x - crop.x) / crop.width;
    y = (y - crop.y) / crop.height;
    var px = abs(0.5 - x) * 2;
    var py = abs(0.5 - y) * 2;
    // Distance from edge
    var dx = Math.max(px - 1.0 + options.edgeRadius, 0);
    var dy = Math.max(py - 1.0 + options.edgeRadius, 0);
    var d = (dx * dx + dy * dy) * options.edgeWeight;
    var s = 1.41 - sqrt(px * px + py * py);
    if (options.ruleOfThirds) {
      s += Math.max(0, s + d + 0.5) * 1.2 * (thirds(px) + thirds(py));
    }
    return s + d;
  }
  smartcrop.importance = importance;

  function skinColor(options, r, g, b) {
    var mag = sqrt(r * r + g * g + b * b);
    var rd = r / mag - options.skinColor[0];
    var gd = g / mag - options.skinColor[1];
    var bd = b / mag - options.skinColor[2];
    var d = sqrt(rd * rd + gd * gd + bd * bd);
    return 1 - d;
  }

  function analyse(options, input) {
    var result = {};
    var output = new ImgData(input.width, input.height);

    edgeDetect(input, output);
    skinDetect(options, input, output);
    saturationDetect(options, input, output);
    applyBoosts(options, output);

    var scoreOutput = downSample(output, options.scoreDownSample);

    var topScore = -Infinity;
    var topCrop = null;
    var crops = generateCrops(options, input.width, input.height);

    for (var i = 0, iLen = crops.length; i < iLen; i++) {
      var crop = crops[i];
      crop.score = score(options, scoreOutput, crop);
      if (crop.score.total > topScore) {
        topCrop = crop;
        topScore = crop.score.total;
      }
    }

    result.topCrop = topCrop;

    if (options.debug && topCrop) {
      result.crops = crops;
      result.debugOutput = output;
      result.debugOptions = options;
      // Create a copy which will not be adjusted by the post scaling of smartcrop.crop
      result.debugTopCrop = extend({}, result.topCrop);
    }
    return result;
  }

  function ImgData(width, height, data) {
    this.width = width;
    this.height = height;
    if (data) {
      this.data = new Uint8ClampedArray(data);
    } else {
      this.data = new Uint8ClampedArray(width * height * 4);
    }
  }
  smartcrop.ImgData = ImgData;

  function downSample(input, factor) {
    var idata = input.data;
    var iwidth = input.width;
    var width = Math.floor(input.width / factor);
    var height = Math.floor(input.height / factor);
    var output = new ImgData(width, height);
    var data = output.data;
    var ifactor2 = 1 / (factor * factor);
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var i = (y * width + x) * 4;

        var r = 0;
        var g = 0;
        var b = 0;
        var a = 0;

        var mr = 0;
        var mg = 0;

        for (var v = 0; v < factor; v++) {
          for (var u = 0; u < factor; u++) {
            var j = ((y * factor + v) * iwidth + (x * factor + u)) * 4;
            r += idata[j];
            g += idata[j + 1];
            b += idata[j + 2];
            a += idata[j + 3];
            mr = Math.max(mr, idata[j]);
            mg = Math.max(mg, idata[j + 1]);
            // unused
            // mb = Math.max(mb, idata[j + 2]);
          }
        }
        // this is some funky magic to preserve detail a bit more for
        // skin (r) and detail (g). Saturation (b) does not get this boost.
        data[i] = r * ifactor2 * 0.5 + mr * 0.5;
        data[i + 1] = g * ifactor2 * 0.7 + mg * 0.3;
        data[i + 2] = b * ifactor2;
        data[i + 3] = a * ifactor2;
      }
    }
    return output;
  }
  smartcrop._downSample = downSample;

  function defaultCanvasFactory(w, h) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }

  function canvasImageOperations(canvasFactory) {
    return {
      // Takes imageInput as argument
      // returns an object which has at least
      // {width: n, height: n}
      open: function(image) {
        // Work around images scaled in css by drawing them onto a canvas
        var w = image.naturalWidth || image.width;
        var h = image.naturalHeight || image.height;
        var c = canvasFactory(w, h);
        var ctx = c.getContext('2d');
        if (
          image.naturalWidth &&
          (image.naturalWidth != image.width ||
            image.naturalHeight != image.height)
        ) {
          c.width = image.naturalWidth;
          c.height = image.naturalHeight;
        } else {
          c.width = image.width;
          c.height = image.height;
        }
        ctx.drawImage(image, 0, 0);
        return smartcrop.Promise.resolve(c);
      },
      // Takes an image (as returned by open), and changes it's size by resampling
      resample: function(image, width, height) {
        return Promise.resolve(image).then(function(image) {
          var c = canvasFactory(~~width, ~~height);
          var ctx = c.getContext('2d');

          ctx.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            c.width,
            c.height
          );
          return smartcrop.Promise.resolve(c);
        });
      },
      getData: function(image) {
        return Promise.resolve(image).then(function(c) {
          var ctx = c.getContext('2d');
          var id = ctx.getImageData(0, 0, c.width, c.height);
          return new ImgData(c.width, c.height, id.data);
        });
      }
    };
  }
  smartcrop._canvasImageOperations = canvasImageOperations;

  // Aliases and helpers
  var min = Math.min;
  var max = Math.max;
  var abs = Math.abs;
  var sqrt = Math.sqrt;

  function extend(o) {
    for (var i = 1, iLen = arguments.length; i < iLen; i++) {
      var arg = arguments[i];
      if (arg) {
        for (var name in arg) {
          o[name] = arg[name];
        }
      }
    }
    return o;
  }

  // Gets value in the range of [0, 1] where 0 is the center of the pictures
  // returns weight of rule of thirds [0, 1]
  function thirds(x) {
    x = (((x - 1 / 3 + 1.0) % 2.0) * 0.5 - 0.5) * 16;
    return Math.max(1.0 - x * x, 0.0);
  }

  function cie(r, g, b) {
    return 0.5126 * b + 0.7152 * g + 0.0722 * r;
  }
  function sample(id, p) {
    return cie(id[p], id[p + 1], id[p + 2]);
  }
  function saturation(r, g, b) {
    var maximum = max(r / 255, g / 255, b / 255);
    var minimum = min(r / 255, g / 255, b / 255);

    if (maximum === minimum) {
      return 0;
    }

    var l = (maximum + minimum) / 2;
    var d = maximum - minimum;

    return l > 0.5 ? d / (2 - maximum - minimum) : d / (maximum + minimum);
  }

  // Amd
  if (true)
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return smartcrop;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // Common js
  if (true) exports.smartcrop = smartcrop;
  else {}
  // Nodejs
  if (true) {
    module.exports = smartcrop;
  }
})();


/***/ }),

/***/ "./node_modules/materialize-css/dist/css/materialize.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/materialize-css/dist/css/materialize.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js!./materialize.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/materialize-css/dist/css/materialize.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/BaseView.ts":
/*!*************************!*\
  !*** ./src/BaseView.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseView": () => (/* binding */ BaseView)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");

class BaseView {
    constructor(container) {
        this.element = null;
        if (container) {
            this.container = container;
        }
        else {
            this.container = document.createElement("div");
        }
        // super();
        //this.element = element;
        //solidRender(() => this.element as any, container);
    }
    init(element) {
        this.element = element;
        if (this.container) {
            (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.render)(() => this.element, this.container || document.body);
        }
    }
    createElement(tagName) {
    }
    getContainer() {
        return this.container;
    }
    getJSXElement() {
        return this.element;
    }
    getPlainDomElement() {
        return this.element;
    }
}


/***/ }),

/***/ "./src/SimpleCommand.ts":
/*!******************************!*\
  !*** ./src/SimpleCommand.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleCommand)
/* harmony export */ });
class SimpleCommand {
    constructor(payload) {
        this.payload = payload;
    }
    execute() {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}


/***/ }),

/***/ "./src/commands/ChangeAspectCommand.ts":
/*!*********************************************!*\
  !*** ./src/commands/ChangeAspectCommand.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeAspectCommand)
/* harmony export */ });
class ChangeAspectCommand {
    constructor(app, aspect) {
        this.app = app;
        this.aspect = aspect;
    }
    execute() {
        this.app.getViewPort().setAspectRatio(this.aspect);
    }
}


/***/ }),

/***/ "./src/commands/Invoker.ts":
/*!*********************************!*\
  !*** ./src/commands/Invoker.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invoker)
/* harmony export */ });
class Invoker {
    constructor() {
        this.commands = {};
    }
    register(commandName, command) {
        // Register commands in the Invoker
        if (this.commands[commandName]) {
            console.log(`Command '${commandName}' has been registered earlier. This action will replace old one.`);
        }
        this.commands[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}


/***/ }),

/***/ "./src/commands/TileZoomInCommand.ts":
/*!*******************************************!*\
  !*** ./src/commands/TileZoomInCommand.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TileZoomInCommand)
/* harmony export */ });
class TileZoomInCommand {
    constructor(app) {
        this.app = app;
    }
    execute() {
        this.app.getViewPort().zoomIn();
    }
}


/***/ }),

/***/ "./src/commands/TileZoomOutCommand.ts":
/*!********************************************!*\
  !*** ./src/commands/TileZoomOutCommand.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TileZoomInCommand)
/* harmony export */ });
class TileZoomInCommand {
    constructor(app) {
        this.app = app;
    }
    execute() {
        this.app.getViewPort().zoomOut();
    }
}


/***/ }),

/***/ "./src/components/toolbar/Toolbar.ts":
/*!*******************************************!*\
  !*** ./src/components/toolbar/Toolbar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseView */ "./src/BaseView.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/components/toolbar/view.tsx");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Application */ "./src/Application.tsx");



class Toolbar extends _BaseView__WEBPACK_IMPORTED_MODULE_0__.BaseView {
    constructor(container) {
        super(container);
        const jsx = _view__WEBPACK_IMPORTED_MODULE_1__["default"].template({
            click: (action) => {
                console.log(action);
                switch (action.type) {
                    case 'zoomIn':
                        _Application__WEBPACK_IMPORTED_MODULE_2__["default"].INVOKER.execute('1');
                        break;
                    case 'zoomOut':
                        _Application__WEBPACK_IMPORTED_MODULE_2__["default"].INVOKER.execute('2');
                        break;
                    case '9x13':
                        _Application__WEBPACK_IMPORTED_MODULE_2__["default"].INVOKER.execute('9x13');
                        break;
                    case '9x9':
                        _Application__WEBPACK_IMPORTED_MODULE_2__["default"].INVOKER.execute('9x9');
                        break;
                    case '13x18':
                        _Application__WEBPACK_IMPORTED_MODULE_2__["default"].INVOKER.execute('13x18');
                        break;
                }
            }
        });
        this.init(jsx);
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(() => {
            console.log('got event');
        });
    }
    setOnStart(command) {
        this.zoomIn = command;
    }
}


/***/ }),

/***/ "./src/components/viewport/Viewport.ts":
/*!*********************************************!*\
  !*** ./src/components/viewport/Viewport.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Viewport)
/* harmony export */ });
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseView */ "./src/BaseView.ts");
/* harmony import */ var _image_tile_ImageTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-tile/ImageTile */ "./src/components/image-tile/ImageTile.tsx");


class Viewport extends _BaseView__WEBPACK_IMPORTED_MODULE_0__.BaseView {
    constructor(container) {
        super(container);
        this.croppers = [];
    }
    addImage(image) {
        const container = this.getContainer();
        let imgContainer = document.createElement('div');
        imgContainer.className = 'image-tile';
        container.insertBefore(imgContainer, container.firstChild);
        const imageTile = new _image_tile_ImageTile__WEBPACK_IMPORTED_MODULE_1__.ImageTile(image.url, imgContainer);
        this.croppers.push(imageTile);
    }
    setAspectRatio(aspect) {
        this.croppers.forEach(cropper => {
            cropper.setAspectRatio(aspect);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
        });
    }
    zoomIn() {
        this.croppers.forEach(cropper => {
            let container = cropper.getPlainDomElement();
            let image = cropper.getImage();
            image.style.display = 'none';
            container.style.width = '400px';
            container.style.height = '400px';
            cropper.update();
            //cropper.setAspectRatio(2 / 4);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
        });
    }
    zoomOut() {
        this.croppers.forEach(cropper => {
            let container = cropper.getPlainDomElement();
            container.style.width = '300px';
            container.style.height = '300px';
            cropper.update();
            //cropper.setAspectRatio(2 / 4);
            // cropper.zoom(2);
            // window.dispatchEvent(new Event('resize'));
        });
    }
    renderImages(start, finish) {
        const container = this.getContainer();
        container.innerHTML = "";
        let images2 = [
            {
                url: './1.jpg'
            },
            {
                url: './1 gBQxShAkxBp_YPb14CN0Nw.jpeg'
            },
            {
                url: './glossy_10x15ebb90f7646c43797e8a00f0ac1f4a233.jpeg'
            },
        ];
        for (let i = 1; i <= 21; i++) {
            this.addImage({
                url: `./img/${i}.jpg`
            });
        }
        setTimeout(() => {
            this.croppers.forEach(cropper => {
                console.log(cropper);
                cropper.setAspectRatio(3 / 4);
            });
            images2.slice(start, finish).forEach(image => {
                this.addImage(image);
            });
        }, 5000);
    }
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/clusterHistogram.js":
/*!*************************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/clusterHistogram.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clusterHistogram": () => (/* binding */ clusterHistogram)
/* harmony export */ });
function clusterHistogram(pixels, size, clusters) {
    const scaleAndClamp = (t) => (Math.max(0, Math.min(0.999, t)) * size) | 0;
    const cubeSize = size * size * size;
    const lcube = new Float64Array(cubeSize);
    const acube = new Float64Array(cubeSize);
    const bcube = new Float64Array(cubeSize);
    const ccube = new Float64Array(cubeSize);
    const lstep = 100 / size;
    for (let i = 0; i < pixels.length; i += 3) {
        const l = pixels[i];
        let a = pixels[i + 1];
        let b = pixels[i + 2];
        if (l < lstep || l > 100 - lstep) {
            a = 0;
            b = 0;
        }
        const x = scaleAndClamp(l / 100);
        const y = scaleAndClamp((a + 100) / 200);
        const z = scaleAndClamp((b + 100) / 200);
        const j = x + y * size + z * size * size;
        lcube[j] += l;
        acube[j] += a;
        bcube[j] += b;
        ccube[j]++;
    }
    return Array.from(lcube.keys())
        .filter((i) => ccube[i])
        .sort((i, j) => ccube[j] - ccube[i])
        .slice(0, clusters)
        .map((i) => ({
        x: lcube[i] / ccube[i],
        y: acube[i] / ccube[i],
        z: bcube[i] / ccube[i],
        count: ccube[i],
    }));
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/fitGradient.js":
/*!********************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/fitGradient.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fitGradient": () => (/* binding */ fitGradient)
/* harmony export */ });
/* harmony import */ var _linearRegression_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linearRegression.js */ "./node_modules/dont-crop/dist/mjs/linearRegression.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/dont-crop/dist/mjs/util.js");


// this function operates on the color values without gamma correction
// the reason for this is that css linear gradients interpolate
// the values without gamma correction as well so for now we'll just match it.
// In the future it might be worth interpolating the linear values and outputting
// a few more stops to approximate linear interpolation.
function fitGradient(image) {
    const w = image.width;
    const h = image.height;
    const d = image.data;
    const colors = [[], [], []];
    const y = [];
    for (let iy = 0; iy < h; iy++) {
        for (let ix = 0; ix < w; ix++) {
            const i = (iy * w + ix) * 4;
            // sadly this is a reasonable bit quicker in it's unrolled form
            colors[0].push((d[i]));
            colors[1].push((d[i + 1]));
            colors[2].push((d[i + 2]));
            y.push(iy / h);
        }
    }
    const regression = [
        (0,_linearRegression_js__WEBPACK_IMPORTED_MODULE_0__.linearRegression)(y, colors[0]),
        (0,_linearRegression_js__WEBPACK_IMPORTED_MODULE_0__.linearRegression)(y, colors[1]),
        (0,_linearRegression_js__WEBPACK_IMPORTED_MODULE_0__.linearRegression)(y, colors[2]),
    ];
    const start = sampleColor(regression, 0);
    const end = sampleColor(regression, 1);
    return [start, end];
}
function sampleColor(regression, t) {
    return regression
        .map((r) => ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(r.intercept + r.slope * t, 0, 255)) | 0);
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/format.js":
/*!***************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/format.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexString": () => (/* binding */ hexString),
/* harmony export */   "hexColorString": () => (/* binding */ hexColorString),
/* harmony export */   "linearGradient": () => (/* binding */ linearGradient)
/* harmony export */ });
function hexString(n) {
    return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
}
function hexColorString(color) {
    return `#${color.map(hexString).join('')}`;
}
function linearGradient(stops) {
    return `linear-gradient(${stops.join(',')})`;
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/getImageData.js":
/*!*********************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/getImageData.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageData": () => (/* binding */ getImageData)
/* harmony export */ });
// this file is only covered by the end to end browser tests
let canvasEl;
function getCanvas() {
    if (!canvasEl)
        canvasEl = document.createElement('canvas');
    return canvasEl;
}
function getImageData(image, maxDimension) {
    const canvas = getCanvas();
    const width = image instanceof HTMLImageElement ? image.naturalWidth : +image.width;
    const height = image instanceof HTMLImageElement ? image.naturalHeight : +image.height;
    const scale = maxDimension
        ? Math.min(maxDimension / Math.max(width, height), 1.0)
        : 1;
    const outputWidth = (width * scale) | 0;
    const outputHeight = (height * scale) | 0;
    canvas.width = outputWidth;
    canvas.height = outputHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('getContext failed');
    ctx.imageSmoothingQuality = 'low';
    ctx.drawImage(image, 0, 0, outputWidth, outputHeight);
    return ctx.getImageData(0, 0, outputWidth, outputHeight);
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/getPalette.js":
/*!*******************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/getPalette.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPalette": () => (/* binding */ getPalette)
/* harmony export */ });
/* harmony import */ var _clusterHistogram_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clusterHistogram.js */ "./node_modules/dont-crop/dist/mjs/clusterHistogram.js");
/* harmony import */ var _greedyClusterMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greedyClusterMerge.js */ "./node_modules/dont-crop/dist/mjs/greedyClusterMerge.js");
/* harmony import */ var _kmeans_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kmeans.js */ "./node_modules/dont-crop/dist/mjs/kmeans.js");
/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab.js */ "./node_modules/dont-crop/dist/mjs/lab.js");




function getPalette(imageData, numberOfColors) {
    const labData = (0,_lab_js__WEBPACK_IMPORTED_MODULE_3__.srgbToLabArray)(imageData.data);
    const k = Math.max(32, numberOfColors);
    const initialClusters = (0,_clusterHistogram_js__WEBPACK_IMPORTED_MODULE_0__.clusterHistogram)(labData, 6, k);
    const clusters = (0,_kmeans_js__WEBPACK_IMPORTED_MODULE_2__.kmeans)(labData, initialClusters, 8).filter((c) => c.count > 0);
    return (0,_greedyClusterMerge_js__WEBPACK_IMPORTED_MODULE_1__.greedyClusterMerge)(clusters, numberOfColors)
        .map((cluster) => {
        const srgb = (0,_lab_js__WEBPACK_IMPORTED_MODULE_3__.labToSrgb)({ l: cluster.x, a: cluster.y, b: cluster.z });
        return [
            srgb.r * 255,
            srgb.g * 255,
            srgb.b * 255,
        ];
    });
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/greedyClusterMerge.js":
/*!***************************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/greedyClusterMerge.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "greedyClusterMerge": () => (/* binding */ greedyClusterMerge)
/* harmony export */ });
const distanceHueScale = 1.5;
const countImportance = 8;
const chromaImportance = 2;
const distanceThreshold = 1500;
function greedyClusterMerge(clusters, keep) {
    const distances = [];
    for (let ai = 0; ai < clusters.length; ai++) {
        const a = clusters[ai];
        for (let bi = ai + 1; bi < clusters.length; bi++) {
            const b = clusters[bi];
            distances.push({
                ai,
                bi,
                distance: distance(a, b),
            });
        }
    }
    distances.sort((a, b) => b.distance - a.distance);
    const remainingClusters = clusters;
    for (let removed = 0; removed < (clusters.length - keep);) {
        const next = distances.pop();
        if (!next)
            break; // should not be possible unless keep is negative
        // eslint-disable-next-line prefer-const
        let { ai, bi } = next;
        if (next.distance > distanceThreshold)
            break;
        let a = remainingClusters[ai];
        let b = remainingClusters[bi];
        if (!a || !b)
            continue;
        if (importance(b) > importance(a)) {
            [a, b] = [b, a];
            bi = ai;
        }
        a.count += b.count;
        remainingClusters[bi] = undefined;
        removed++;
    }
    const clustersLeft = remainingClusters.filter((c) => !!c);
    return clustersLeft
        .sort((a, b) => importance(b) - importance(a))
        .slice(0, keep);
}
function importance(cluster) {
    const chroma = Math.sqrt(squared(cluster.y) + squared(cluster.z));
    // the larger the cluster the more important it is
    return (Math.log(cluster.count) * countImportance
        // the more saturated the color the more important it is
        + chroma * chromaImportance
        // also make brighter colors a bit more important
        + cluster.x);
}
const squared = (x) => x * x;
function distance(a, b) {
    const aScale = Math.min(a.x, 0.25) / 0.25;
    const bScale = Math.min(b.x, 0.25) / 0.25;
    const hue = (squared(a.y * aScale - b.y * bScale) + squared(a.z * aScale - b.z * bScale));
    return squared(a.x - b.x)
        + hue * distanceHueScale;
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/kmeans.js":
/*!***************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/kmeans.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kmeans": () => (/* binding */ kmeans)
/* harmony export */ });
// import mcgRandom from './mcgRandom.js';
const channels = 3;
// sadly this is about twice as fast as x ** 2.
const squared = (x) => x * x;
// function selectClusterAtRandom(image: ImageData, random: () => number): Cluster {
//   const i = ((random() * image.width * image.height) | 0) * channels;
//   const { data } = image;
//   return {
//     x: data[i],
//     y: data[i + 1],
//     z: data[i + 2],
//     count: 0,
//   };
// }
// This function also operates without doing any gamma correction.
// I haven't evaluated the effect of this on the output.
// I could imagine that operating on the linear values would perform
// worse than the naive implementation here because the gamma encoding
// loosely correlates with the human perception.
// So the euclidian distance between the gamma encoded values might
// more closely match the perceived distance between the colors.
// Or it's just an excuse to save a few cycles. ¯\_(ツ)_/¯
function kmeans(data, initialClusters, iterations) {
    // const { data } = image;
    const clusters = [];
    const nextClusters = [];
    // (histogramColors(image, k)).forEach(([r, g, b]) => {
    //   const { l: x, a: y, b: z } = srgbToLab({ r: r / 255, g: g / 255, b: b / 255 });
    //   clusters.push({
    //     x, y, z, count: 0,
    //   });
    //   nextClusters.push({
    //     x: 0, y: 0, z: 0, count: 0,
    //   });
    // });
    initialClusters.forEach((point) => {
        nextClusters.push({ ...point, count: 1 });
        clusters.push({
            x: 0, y: 0, z: 0, count: 0,
        });
    });
    for (let i = 0; i < iterations; i++) {
        clusters.forEach((cluster, j) => {
            // move next clusters to current clusters
            const nextCluster = nextClusters[j];
            const count = Math.max(nextCluster.count, 1);
            cluster.x = nextCluster.x / count;
            cluster.y = nextCluster.y / count;
            cluster.z = nextCluster.z / count;
            cluster.count = nextCluster.count;
            // reset next clusters
            nextCluster.x = 0;
            nextCluster.y = 0;
            nextCluster.z = 0;
            nextCluster.count = 0;
        });
        for (let p = 0; p < data.length; p += 3) {
            const x = data[p];
            const y = data[p + 1];
            const z = data[p + 2];
            let closestClusterDistance = Infinity;
            let closestCluster = clusters[0];
            // find the closest cluster
            for (let ci = 0; ci < clusters.length; ci++) {
                // since this is just used in a comparison the sqrt is not needed
                const cluster = clusters[ci];
                const distance = squared(x - cluster.x)
                    + squared(y - cluster.y)
                    + squared(z - cluster.z);
                if (distance < closestClusterDistance) {
                    closestClusterDistance = distance;
                    closestCluster = nextClusters[ci];
                }
            }
            // add pixel to the closest cluster
            closestCluster.count += 1;
            closestCluster.x += x;
            closestCluster.y += y;
            closestCluster.z += z;
        }
    }
    return clusters;
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/lab.js":
/*!************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/lab.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "srgbToLab": () => (/* binding */ srgbToLab),
/* harmony export */   "fInverse": () => (/* binding */ fInverse),
/* harmony export */   "labToSrgb": () => (/* binding */ labToSrgb),
/* harmony export */   "srgbToLabArray": () => (/* binding */ srgbToLabArray)
/* harmony export */ });
const delta = 6 / 29;
const threeDeltaSquared = 3 * delta ** 2;
// turns out Math.cbrt is almost 3x faster than ** (1/3).
const f = (t) => (t > delta ** 3 ? Math.cbrt(t) : t / threeDeltaSquared + (4 / 29));
const gamma = 2.4;
const toLinear = (srgb) => (srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** gamma);
const toGamma = (linear) => (linear < 0.0031308 ? 12.92 * linear : 1.055 * linear ** (1 / gamma) - 0.055);
// constants for D65
const xn = 95.0489;
const yn = 100;
const zn = 108.884;
function srgbToLab({ r, g, b }) {
    const rl = toLinear(r) * 100;
    const gl = toLinear(g) * 100;
    const bl = toLinear(b) * 100;
    // via https://en.wikipedia.org/wiki/SRGB
    const x = 0.4124 * rl + 0.3576 * gl + 0.1805 * bl;
    const y = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
    const z = 0.0193 * rl + 0.1192 * gl + 0.9505 * bl;
    // https://en.wikipedia.org/wiki/CIELAB_color_space#From_CIEXYZ_to_CIELAB
    const fy = f(y / yn);
    return {
        l: 116 * fy - 16,
        a: 500 * (f(x / xn) - fy),
        b: 200 * (fy - f(z / zn)),
    };
}
// t*t*t is ~10x faster than t ** 3
const fInverse = (t) => (t > delta ? t * t * t : threeDeltaSquared * (t - 4 / 29));
function labToSrgb({ l, a, b }) {
    const lPlus16Over116 = (l + 16) / 116;
    const x = xn * fInverse(lPlus16Over116 + a / 500);
    const y = yn * fInverse(lPlus16Over116);
    const z = zn * fInverse(lPlus16Over116 - b / 200);
    const rl = 3.2406 * x + -1.5372 * y + -0.4986 * z;
    const gl = -0.9689 * x + 1.8758 * y + 0.0415 * z;
    const bl = 0.0557 * x + -0.2040 * y + 1.0570 * z;
    return {
        r: toGamma(rl / 100),
        g: toGamma(gl / 100),
        b: toGamma(bl / 100),
    };
}
// Float64Arrays are used to avoid conversions back to double or
// wrapping all arithmetic in fround.
function srgbToLabArray(data) {
    const result = new Float64Array(((data.length / 4) * 3) | 0);
    for (let i = 0, ri = 0; i < data.length; i += 4, ri += 3) {
        const rgb = { r: data[i] / 255, g: data[i + 1] / 255, b: data[i + 2] / 255 };
        const { l, a, b } = srgbToLab(rgb);
        result[ri] = l;
        result[ri + 1] = a;
        result[ri + 2] = b;
    }
    return result;
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/lib.js":
/*!************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/lib.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageData": () => (/* reexport safe */ _getImageData_js__WEBPACK_IMPORTED_MODULE_1__.getImageData),
/* harmony export */   "getPalette": () => (/* binding */ getPalette),
/* harmony export */   "getPaletteFromImageData": () => (/* binding */ getPaletteFromImageData),
/* harmony export */   "fitGradient": () => (/* binding */ fitGradient),
/* harmony export */   "fitGradientToImageData": () => (/* binding */ fitGradientToImageData)
/* harmony export */ });
/* harmony import */ var _fitGradient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitGradient.js */ "./node_modules/dont-crop/dist/mjs/fitGradient.js");
/* harmony import */ var _getImageData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getImageData.js */ "./node_modules/dont-crop/dist/mjs/getImageData.js");
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format.js */ "./node_modules/dont-crop/dist/mjs/format.js");
/* harmony import */ var _getPalette_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPalette.js */ "./node_modules/dont-crop/dist/mjs/getPalette.js");





/**
 * Extract representative colors from an image.
 * @remarks because of it's dependency on `<canvas>`
 * this function only works in the browser.
 *  * In nodejs use `getPaletteFromImageData` directly instead.
 * @param image the image to extract the palette from.
 *  Must be loaded/complete.
 * @param numberOfColors upper limit on the number of colors to be returned
 * @param fast if true the image will be downscaled to 64x64, 128x128 otherwise.
 * The precise sizes used may change in the future.
 * @returns representative colors of the image ordered by importance (size of the cluster)
 */
// integration tested only
function getPalette(image, numberOfColors = 4, fast = false) {
    const imageData = (0,_getImageData_js__WEBPACK_IMPORTED_MODULE_1__.getImageData)(image, fast ? 64 : 128);
    return getPaletteFromImageData(imageData, numberOfColors);
}
/**
 * Extract representative colors from image data.
 * @param imageData image data to extract the colors from
 * @param numberOfColors upper limit on the number of colors to be returned
 * @returns representative colors of the image ordered by importance (size of the cluster)
 *
 */
function getPaletteFromImageData(imageData, numberOfColors = 4) {
    return (0,_getPalette_js__WEBPACK_IMPORTED_MODULE_3__.getPalette)(imageData, numberOfColors)
        .map(_format_js__WEBPACK_IMPORTED_MODULE_2__.hexColorString);
}
/**
 * Fits a linear gradient to an image
 * @remarks because of it's dependency on `<canvas>`
 * this function only works in the browser.
 * In nodejs use `fitGradientToImageData` directly instead.
 * @param image the image to fit the gradient to
 *  Will be scaled down to at most 32x32.
 *  Must be loaded/complete.
 * @returns a string that can be used as a css gradient
 */
// integration tested only
function fitGradient(image) {
    const imageData = (0,_getImageData_js__WEBPACK_IMPORTED_MODULE_1__.getImageData)(image, 32);
    return fitGradientToImageData(imageData);
}
/**
 * Fits a linear gradient to image data
 * @param imageData the image data to fit the gradient to.
 * @returns a string that can be used as a css gradient.
 */
function fitGradientToImageData(imageData) {
    const colors = (0,_fitGradient_js__WEBPACK_IMPORTED_MODULE_0__.fitGradient)(imageData)
        .map(_format_js__WEBPACK_IMPORTED_MODULE_2__.hexColorString);
    return (0,_format_js__WEBPACK_IMPORTED_MODULE_2__.linearGradient)(colors);
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/linearRegression.js":
/*!*************************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/linearRegression.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linearRegression": () => (/* binding */ linearRegression),
/* harmony export */   "mean": () => (/* binding */ mean)
/* harmony export */ });
function linearRegression(x, y) {
    const xMean = mean(x);
    const yMean = mean(y);
    const covarianceXY = x.reduce((sum, xi, i) => sum + (xi - xMean) * (y[i] - yMean), 0);
    const varianceX = x.reduce((sum, xi) => sum + (xi - xMean) * (xi - xMean), 0);
    const varianceY = y.reduce((sum, yi) => sum + (yi - yMean) * (yi - yMean), 0);
    const slope = covarianceXY / varianceX;
    const intercept = yMean - slope * xMean;
    const rSquared = covarianceXY ** 2 / (varianceX * varianceY);
    return {
        slope,
        intercept,
        rSquared,
    };
}
function mean(x) {
    return x.reduce((a, b) => a + b, 0) / x.length;
}


/***/ }),

/***/ "./node_modules/dont-crop/dist/mjs/util.js":
/*!*************************************************!*\
  !*** ./node_modules/dont-crop/dist/mjs/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const clamp = (x, min, max) => Math.max(min, Math.min(max, x));


/***/ }),

/***/ "./node_modules/solid-js/dist/dev.js":
/*!*******************************************!*\
  !*** ./node_modules/solid-js/dist/dev.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$DEVCOMP": () => (/* binding */ $DEVCOMP),
/* harmony export */   "$PROXY": () => (/* binding */ $PROXY),
/* harmony export */   "DEV": () => (/* binding */ DEV),
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary),
/* harmony export */   "For": () => (/* binding */ For),
/* harmony export */   "Index": () => (/* binding */ Index),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Show": () => (/* binding */ Show),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "SuspenseList": () => (/* binding */ SuspenseList),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "batch": () => (/* binding */ batch),
/* harmony export */   "cancelCallback": () => (/* binding */ cancelCallback),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createComputed": () => (/* binding */ createComputed),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createDeferred": () => (/* binding */ createDeferred),
/* harmony export */   "createEffect": () => (/* binding */ createEffect),
/* harmony export */   "createMemo": () => (/* binding */ createMemo),
/* harmony export */   "createReaction": () => (/* binding */ createReaction),
/* harmony export */   "createRenderEffect": () => (/* binding */ createRenderEffect),
/* harmony export */   "createResource": () => (/* binding */ createResource),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSignal": () => (/* binding */ createSignal),
/* harmony export */   "createUniqueId": () => (/* binding */ createUniqueId),
/* harmony export */   "enableExternalSource": () => (/* binding */ enableExternalSource),
/* harmony export */   "enableHydration": () => (/* binding */ enableHydration),
/* harmony export */   "enableScheduling": () => (/* binding */ enableScheduling),
/* harmony export */   "equalFn": () => (/* binding */ equalFn),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "getListener": () => (/* binding */ getListener),
/* harmony export */   "getOwner": () => (/* binding */ getOwner),
/* harmony export */   "indexArray": () => (/* binding */ indexArray),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "mapArray": () => (/* binding */ mapArray),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "onCleanup": () => (/* binding */ onCleanup),
/* harmony export */   "onError": () => (/* binding */ onError),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "refetchResources": () => (/* binding */ refetchResources),
/* harmony export */   "requestCallback": () => (/* binding */ requestCallback),
/* harmony export */   "resetErrorBoundaries": () => (/* binding */ resetErrorBoundaries),
/* harmony export */   "runWithOwner": () => (/* binding */ runWithOwner),
/* harmony export */   "sharedConfig": () => (/* binding */ sharedConfig),
/* harmony export */   "splitProps": () => (/* binding */ splitProps),
/* harmony export */   "startTransition": () => (/* binding */ startTransition),
/* harmony export */   "untrack": () => (/* binding */ untrack),
/* harmony export */   "useContext": () => (/* binding */ useContext),
/* harmony export */   "useTransition": () => (/* binding */ useTransition)
/* harmony export */ });
let taskIdCounter = 1,
    isCallbackScheduled = false,
    isPerformingWork = false,
    taskQueue = [],
    currentTask = null,
    shouldYieldToHost = null,
    yieldInterval = 5,
    deadline = 0,
    maxYieldInterval = 300,
    scheduleCallback = null,
    scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
  const channel = new MessageChannel(),
        port = channel.port2;
  scheduleCallback = () => port.postMessage(null);
  channel.port1.onmessage = () => {
    if (scheduledCallback !== null) {
      const currentTime = performance.now();
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;
      try {
        const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
        if (!hasMoreWork) {
          scheduledCallback = null;
        } else port.postMessage(null);
      } catch (error) {
        port.postMessage(null);
        throw error;
      }
    }
  };
  if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    const scheduling = navigator.scheduling;
    shouldYieldToHost = () => {
      const currentTime = performance.now();
      if (currentTime >= deadline) {
        if (scheduling.isInputPending()) {
          return true;
        }
        return currentTime >= maxYieldInterval;
      } else {
        return false;
      }
    };
  } else {
    shouldYieldToHost = () => performance.now() >= deadline;
  }
}
function enqueue(taskQueue, task) {
  function findIndex() {
    let m = 0;
    let n = taskQueue.length - 1;
    while (m <= n) {
      const k = n + m >> 1;
      const cmp = task.expirationTime - taskQueue[k].expirationTime;
      if (cmp > 0) m = k + 1;else if (cmp < 0) n = k - 1;else return k;
    }
    return m;
  }
  taskQueue.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
  if (!scheduleCallback) setupScheduler();
  let startTime = performance.now(),
      timeout = maxSigned31BitInt;
  if (options && options.timeout) timeout = options.timeout;
  const newTask = {
    id: taskIdCounter++,
    fn,
    startTime,
    expirationTime: startTime + timeout
  };
  enqueue(taskQueue, newTask);
  if (!isCallbackScheduled && !isPerformingWork) {
    isCallbackScheduled = true;
    scheduledCallback = flushWork;
    scheduleCallback();
  }
  return newTask;
}
function cancelCallback(task) {
  task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
  isCallbackScheduled = false;
  isPerformingWork = true;
  try {
    return workLoop(hasTimeRemaining, initialTime);
  } finally {
    currentTask = null;
    isPerformingWork = false;
  }
}
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  currentTask = taskQueue[0] || null;
  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      break;
    }
    const callback = currentTask.fn;
    if (callback !== null) {
      currentTask.fn = null;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      callback(didUserCallbackTimeout);
      currentTime = performance.now();
      if (currentTask === taskQueue[0]) {
        taskQueue.shift();
      }
    } else taskQueue.shift();
    currentTask = taskQueue[0] || null;
  }
  return currentTask !== null;
}

const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return { ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}.`,
    count: 0
  };
}

const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $DEVCOMP = Symbol("solid-dev-component");
const signalOptions = {
  equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const [transPending, setTransPending] = /*@__PURE__*/createSignal(false);
var Owner = null;
let Transition = null;
let Scheduler = null;
let ExternalSourceFactory = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
let rootCount = 0;
function createRoot(fn, detachedOwner) {
  detachedOwner && (Owner = detachedOwner);
  const listener = Listener,
        owner = Owner,
        root = fn.length === 0 && !"_SOLID_DEV_" ? 0 : {
    owned: null,
    cleanups: null,
    context: null,
    owner
  };
  if (owner) root.name = `${owner.name}-r${rootCount++}`;
  Owner = root;
  Listener = null;
  try {
    return runUpdates(() => fn(() => cleanNode(root)), true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: options.equals || undefined
  };
  if (!options.internal) s.name = registerGraph(options.name || hashValue(value), s);
  const setter = value => {
    if (typeof value === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.pending !== NOTPENDING ? s.pending : s.tValue);else value = value(s.pending !== NOTPENDING ? s.pending : s.value);
    }
    return writeSignal(s, value);
  };
  return [readSignal.bind(s), setter];
}
function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE, options );
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE, options );
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE, options ),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  Effects ? Effects.push(c) : queueMicrotask(() => updateComputation(c));
}
function createReaction(onInvalidate, options) {
  let fn;
  const c = createComputation(() => {
    fn ? fn() : untrack(onInvalidate);
    fn = undefined;
  }, undefined, false, 0, options ),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  return tracking => {
    fn = tracking;
    updateComputation(c);
  };
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0, options );
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else updateComputation(c);
  return readSignal.bind(c);
}
function createResource(source, fetcher, options) {
  if (arguments.length === 2) {
    if (typeof fetcher === "object") {
      options = fetcher;
      fetcher = source;
      source = true;
    }
  } else if (arguments.length === 1) {
    fetcher = source;
    source = true;
  }
  options || (options = {});
  if (options.globalRefetch !== false) {
    Resources || (Resources = new Set());
    Resources.add(load);
    Owner && onCleanup(() => Resources.delete(load));
  }
  const contexts = new Set(),
        [s, set] = createSignal(options.initialValue),
        [track, trigger] = createSignal(undefined, {
    equals: false
  }),
        [loading, setLoading] = createSignal(false),
        [error, setError] = createSignal();
  let err = undefined,
      pr = null,
      initP = null,
      id = null,
      loadedUnderTransition = false,
      dynamic = typeof source === "function";
  if (sharedConfig.context) {
    id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
    if (sharedConfig.load) initP = sharedConfig.load(id);
  }
  function loadEnd(p, v, e, key) {
    if (pr === p) {
      pr = null;
      if (initP && p === initP && options.onHydrated) options.onHydrated(key, {
        value: v
      });
      initP = null;
      setError(err = e);
      if (Transition && p && loadedUnderTransition) {
        Transition.promises.delete(p);
        loadedUnderTransition = false;
        runUpdates(() => {
          Transition.running = true;
          if (!Transition.promises.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
          completeLoad(v);
        }, false);
      } else completeLoad(v);
    }
    return v;
  }
  function completeLoad(v) {
    batch(() => {
      set(() => v);
      setLoading(false);
      for (const c of contexts.keys()) c.decrement();
      contexts.clear();
    });
  }
  function read() {
    const c = SuspenseContext && lookup(Owner, SuspenseContext.id),
          v = s();
    if (err) throw err;
    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();
        if (pr) {
          if (c.resolved && Transition) Transition.promises.add(pr);else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }
    return v;
  }
  function load(refetching = true) {
    setError(err = undefined);
    const lookup = dynamic ? source() : source;
    loadedUnderTransition = Transition && Transition.running;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(s));
      return;
    }
    if (Transition && pr) Transition.promises.delete(pr);
    const p = initP || untrack(() => fetcher(lookup, {
      value: s(),
      refetching
    }));
    if (typeof p !== "object" || !("then" in p)) {
      loadEnd(pr, p);
      return p;
    }
    pr = p;
    batch(() => {
      setLoading(true);
      trigger();
    });
    return p.then(v => loadEnd(p, v, undefined, lookup), e => loadEnd(p, e, e));
  }
  Object.defineProperties(read, {
    loading: {
      get() {
        return loading();
      }
    },
    error: {
      get() {
        return error();
      }
    }
  });
  if (dynamic) createComputed(() => load(false));else load(false);
  return [read, {
    refetch: load,
    mutate: set
  }];
}
let Resources;
function refetchResources(info) {
  return Resources && Promise.all([...Resources].map(fn => fn(info)));
}
function createDeferred(source, options) {
  let t,
      timeout = options ? options.timeoutMs : undefined;
  const node = createComputation(() => {
    if (!t || !t.fn) t = requestCallback(() => setDeferred(() => node.value), timeout !== undefined ? {
      timeout
    } : undefined);
    return source();
  }, undefined, true);
  const [deferred, setDeferred] = createSignal(node.value, options);
  updateComputation(node);
  setDeferred(() => node.value);
  return deferred;
}
function createSelector(source, fn = equalFn, options) {
  const subs = new Map();
  const node = createComputation(p => {
    const v = source();
    for (const key of subs.keys()) if (fn(key, v) !== (p !== undefined && fn(key, p))) {
      const l = subs.get(key);
      for (const c of l.values()) {
        c.state = STALE;
        if (c.pure) Updates.push(c);else Effects.push(c);
      }
    }
    return v;
  }, undefined, true, STALE, options );
  updateComputation(node);
  return key => {
    let listener;
    if (listener = Listener) {
      let l;
      if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
      onCleanup(() => {
        l.size > 1 ? l.delete(listener) : subs.delete(key);
      });
    }
    return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
  };
}
function batch(fn) {
  if (Pending) return fn();
  let result;
  const q = Pending = [];
  try {
    result = fn();
  } finally {
    Pending = null;
  }
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}
function untrack(fn) {
  let result,
      listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}
function on(deps, fn,
options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return prevValue => {
    let input;
    if (isArray) {
      input = [];
      for (let i = 0; i < deps.length; i++) input.push(deps[i]());
    } else input = deps();
    if (defer) {
      defer = false;
      return undefined;
    }
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) console.warn("cleanups created outside a `createRoot` or `render` will never be run");else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function onError(fn) {
  ERROR || (ERROR = Symbol("error"));
  if (Owner === null) console.warn("error handlers created outside a `createRoot` or `render` will never be run");else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}
function getListener() {
  return Listener;
}
function getOwner() {
  return Owner;
}
function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;
  try {
    return runUpdates(fn, true);
  } finally {
    Owner = prev;
  }
}
function enableScheduling(scheduler = requestCallback) {
  Scheduler = scheduler;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: new Set(),
        effects: [],
        promises: new Set(),
        disposed: new Set(),
        queue: new Set(),
        running: true
      });
      t.done || (t.done = new Promise(res => t.resolve = res));
      t.running = true;
    }
    batch(fn);
    return t ? t.done : undefined;
  });
}
function useTransition() {
  return [transPending, startTransition];
}
function resumeEffects(e) {
  Effects.push.apply(Effects, e);
  e.length = 0;
}
function devComponent(Comp, props) {
  const c = createComputation(() => untrack(() => {
    Object.assign(Comp, {
      [$DEVCOMP]: true
    });
    return Comp(props);
  }), undefined, true);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.state = 0;
  c.componentName = Comp.name;
  updateComputation(c);
  return c.tValue !== undefined ? c.tValue : c.value;
}
function hashValue(v) {
  const s = new Set();
  return `s${typeof v === "string" ? hash(v) : hash(JSON.stringify(v, (k, v) => {
    if (typeof v === "object" && v != null) {
      if (s.has(v)) return;
      s.add(v);
      const keys = Object.keys(v);
      const desc = Object.getOwnPropertyDescriptors(v);
      const newDesc = keys.reduce((memo, key) => {
        const value = desc[key];
        if (!value.get) memo[key] = value;
        return memo;
      }, {});
      v = Object.create({}, newDesc);
    }
    if (typeof v === "bigint") {
      return `${v.toString()}n`;
    }
    return v;
  }) || "")}`;
}
function registerGraph(name, value) {
  let tryName = name;
  if (Owner) {
    let i = 0;
    Owner.sourceMap || (Owner.sourceMap = {});
    while (Owner.sourceMap[tryName]) tryName = `${name}-${++i}`;
    Owner.sourceMap[tryName] = value;
  }
  return tryName;
}
function serializeGraph(owner) {
  owner || (owner = Owner);
  if (!owner) return {};
  return { ...serializeValues(owner.sourceMap),
    ...(owner.owned ? serializeChildren(owner) : {})
  };
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return lookup(Owner, context.id) || context.defaultValue;
}
function children(fn) {
  const children = createMemo(fn);
  return createMemo(() => resolveChildren(children()));
}
let SuspenseContext;
function getSuspenseContext() {
  return SuspenseContext || (SuspenseContext = createContext({}));
}
function enableExternalSource(factory) {
  if (ExternalSourceFactory) {
    const oldFactory = ExternalSourceFactory;
    ExternalSourceFactory = (fn, trigger) => {
      const oldSource = oldFactory(fn, trigger);
      const source = factory(x => oldSource.track(x), trigger);
      return {
        track: x => source.track(x),
        dispose() {
          source.dispose();
          oldSource.dispose();
        }
      };
    };
  } else {
    ExternalSourceFactory = factory;
  }
}
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
    const updates = Updates;
    Updates = null;
    !runningTransition && this.state === STALE || runningTransition && this.tState === STALE ? updateComputation(this) : lookDownstream(this);
    Updates = updates;
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  if (node.comparator) {
    if (Transition && Transition.running && Transition.sources.has(node)) {
      if (node.comparator(node.tValue, value)) return value;
    } else if (node.comparator(node.value, value)) return value;
  }
  if (Pending) {
    if (node.pending === NOTPENDING) Pending.push(node);
    node.pending = value;
    return value;
  }
  let TransitionRunning = false;
  if (Transition) {
    TransitionRunning = Transition.running;
    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
      Transition.sources.add(node);
      node.tValue = value;
    }
    if (!TransitionRunning) node.value = value;
  } else node.value = value;
  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o)) continue;
        if (o.pure) Updates.push(o);else Effects.push(o);
        if (o.observers && (TransitionRunning && !o.tState || !TransitionRunning && !o.state)) markUpstream(o);
        if (TransitionRunning) o.tState = STALE;else o.state = STALE;
      }
      if (Updates.length > 10e5) {
        Updates = [];
        if (true) throw new Error("Potential Infinite Loop Detected.");
        throw new Error();
      }
    }, false);
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
        listener = Listener,
        time = ExecCount;
  Listener = Owner = node;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        runComputation(node, node.tValue, time);
      }, false);
    });
  }
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) console.warn("computations created outside a `createRoot` or `render` will never be disposed");else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }
    c.name = options && options.name || `${Owner.name || "c"}-${(Owner.owned || Owner.tOwned).length}`;
  }
  if (ExternalSourceFactory) {
    const [track, trigger] = createSignal(undefined, {
      equals: false
    });
    const ordinary = ExternalSourceFactory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
    c.fn = x => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if (!runningTransition && node.state !== STALE) return node.state = 0;
  if (runningTransition && node.tState !== STALE) return node.tState = 0;
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (!runningTransition && node.state || runningTransition && node.tState) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node,
          prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) {
      updateComputation(node);
    } else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
      const updates = Updates;
      Updates = null;
      lookDownstream(node, ancestors[0]);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    completeUpdates(wait);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition && Transition.running) {
    if (Transition.promises.size || Transition.queue.size) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
    const sources = Transition.sources;
    res = Transition.resolve;
    Effects.forEach(e => {
      "tState" in e && (e.state = e.tState);
      delete e.tState;
    });
    Transition = null;
    batch(() => {
      sources.forEach(v => {
        v.value = v.tValue;
        if (v.owned) {
          for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
        }
        if (v.tOwned) v.owned = v.tOwned;
        delete v.tValue;
        delete v.tOwned;
        v.tState = 0;
      });
      setTransPending(false);
    });
  }
  if (Effects.length) batch(() => {
    runEffects(Effects);
    Effects = null;
  });else {
    Effects = null;
    globalThis._$afterUpdate && globalThis._$afterUpdate();
  }
  if (res) res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
          if (!tasks.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i,
      userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }
  const resume = queue.length;
  for (i = 0; i < userLength; i++) runTop(queue[i]);
  for (i = resume; i < queue.length; i++) runTop(queue[i]);
}
function lookDownstream(node, ignore) {
  node.state = 0;
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
        if (source !== ignore) runTop(source);
      } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING) lookDownstream(source, ignore);
    }
  }
}
function markUpstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!runningTransition && !o.state || runningTransition && !o.tState) {
      if (runningTransition) o.tState = PENDING;else o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markUpstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
            index = node.sourceSlots.pop(),
            obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
              s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = 0; i < node.tOwned.length; i++) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;else node.state = 0;
  node.context = null;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function handleError(err) {
  const fns = ERROR && lookup(Owner, ERROR);
  if (!fns) throw err;
  fns.forEach(f => f(err));
}
function lookup(owner, key) {
  return owner && (owner.context && owner.context[key] !== undefined ? owner.context[key] : owner.owner && lookup(owner.owner, key));
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    let res;
    createComputed(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }));
    return res;
  };
}
function hash(s) {
  for (var i = 0, h = 9; i < s.length;) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return `${h ^ h >>> 9}`;
}
function serializeValues(sources = {}) {
  const k = Object.keys(sources);
  const result = {};
  for (let i = 0; i < k.length; i++) {
    const key = k[i];
    result[key] = sources[key].value;
  }
  return result;
}
function serializeChildren(root) {
  const result = {};
  for (let i = 0, len = root.owned.length; i < len; i++) {
    const node = root.owned[i];
    result[node.componentName ? `${node.componentName}:${node.name}` : node.name] = { ...serializeValues(node.sourceMap),
      ...(node.owned ? serializeChildren(node) : {})
    };
  }
  return result;
}

function getSymbol() {
  const SymbolCopy = Symbol;
  return SymbolCopy.observable || "@@observable";
}
function observable(input) {
  const $$observable = getSymbol();
  return {
    subscribe(observer) {
      if (!(observer instanceof Object) || observer == null) {
        throw new TypeError("Expected the observer to be an object.");
      }
      const handler = "next" in observer ? observer.next : observer;
      let complete = false;
      createComputed(() => {
        if (complete) return;
        const v = input();
        untrack(() => handler(v));
      });
      return {
        unsubscribe() {
          complete = true;
        }
      };
    },
    [$$observable]() {
      return this;
    }
  };
}
function from(producer) {
  const [s, set] = createSignal(undefined, {
    equals: false
  });
  if ("subscribe" in producer) {
    const unsub = producer.subscribe(v => set(() => v));
    onCleanup(() => "unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
  } else {
    const clean = producer(set);
    onCleanup(clean);
  }
  return s;
}

const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [],
        i,
        j;
    return untrack(() => {
      let newLen = newItems.length,
          newIndices,
          newIndicesNext,
          temp,
          tempdisposers,
          tempIndexes,
          start,
          end,
          newEnd,
          item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      }
      else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === undefined ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== undefined && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function indexArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      signals = [],
      len = 0,
      i;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [];
    return untrack(() => {
      if (newItems.length === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
        return mapped;
      }
      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }
      for (i = 0; i < newItems.length; i++) {
        if (i < items.length && items[i] !== newItems[i]) {
          signals[i](() => newItems[i]);
        } else if (i >= items.length) {
          mapped[i] = createRoot(mapper);
        }
      }
      for (; i < items.length; i++) {
        disposers[i]();
      }
      len = signals.length = disposers.length = newItems.length;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });
    function mapper(disposer) {
      disposers[i] = disposer;
      const [s, set] = createSignal(newItems[i]);
      signals[i] = set;
      return mapFn(s, i);
    }
  };
}

let hydrationEnabled = false;
function enableHydration() {
  hydrationEnabled = true;
}
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = devComponent(Comp, props) ;
      setHydrateContext(c);
      return r;
    }
  }
  return devComponent(Comp, props);
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return typeof s === "function" ? s() : s;
}
function mergeProps(...sources) {
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = resolveSource(sources[i])[property];
        if (v !== undefined) return v;
      }
    },
    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in resolveSource(sources[i])) return true;
      }
      return false;
    },
    keys() {
      const keys = [];
      for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
      return [...new Set(keys)];
    }
  }, propTraps);
}
function splitProps(props, ...keys) {
  const blocked = new Set(keys.flat());
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const res = keys.map(k => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
        get() {
          return props[key];
        },
        set() {
          return true;
        }
      });
    }
    return clone;
  });
  res.push(new Proxy({
    get(property) {
      return blocked.has(property) ? undefined : props[property];
    },
    has(property) {
      return blocked.has(property) ? false : property in props;
    },
    keys() {
      return Object.keys(props).filter(k => !blocked.has(k));
    }
  }, propTraps));
  return res;
}
function lazy(fn) {
  let comp;
  let p;
  const wrap = props => {
    const ctx = sharedConfig.context;
    if (ctx) {
      const [s, set] = createSignal();
      (p || (p = fn())).then(mod => {
        setHydrateContext(ctx);
        set(() => mod.default);
        setHydrateContext();
      });
      comp = s;
    } else if (!comp) {
      const [s] = createResource(() => (p || (p = fn())).then(mod => mod.default), {
        globalRefetch: false
      });
      comp = s;
    } else {
      const c = comp();
      if (c) return c(props);
    }
    let Comp;
    return createMemo(() => (Comp = comp()) && untrack(() => {
      Object.assign(Comp, {
        [$DEVCOMP]: true
      });
      if (!ctx) return Comp(props);
      const c = sharedConfig.context;
      setHydrateContext(ctx);
      const r = Comp(props);
      setHydrateContext(c);
      return r;
    }));
  };
  wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), p);
  return wrap;
}
let counter = 0;
function createUniqueId() {
  const ctx = sharedConfig.context;
  return ctx ? `${ctx.id}${ctx.count++}` : `cl:${counter++}`;
}

function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Show(props) {
  let strictEqual = false;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => strictEqual ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      return (strictEqual = typeof child === "function" && child.length > 0) ? untrack(() => child(c)) : child;
    }
    return props.fallback;
  });
}
function Switch(props) {
  let strictEqual = false;
  const conditions = children(() => props.children),
        evalConditions = createMemo(() => {
    let conds = conditions();
    if (!Array.isArray(conds)) conds = [conds];
    for (let i = 0; i < conds.length; i++) {
      const c = conds[i].when;
      if (c) return [i, c, conds[i]];
    }
    return [-1];
  }, undefined, {
    equals: (a, b) => a[0] === b[0] && (strictEqual ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2]
  });
  return createMemo(() => {
    const [index, when, cond] = evalConditions();
    if (index < 0) return props.fallback;
    const c = cond.children;
    return (strictEqual = typeof c === "function" && c.length > 0) ? untrack(() => c(when)) : c;
  });
}
function Match(props) {
  return props;
}
let Errors;
function resetErrorBoundaries() {
  Errors && [...Errors].forEach(fn => fn());
}
function ErrorBoundary(props) {
  let err = undefined;
  if (sharedConfig.context && sharedConfig.load) {
    err = sharedConfig.load(sharedConfig.context.id + sharedConfig.context.count);
  }
  const [errored, setErrored] = createSignal(err);
  Errors || (Errors = new Set());
  Errors.add(setErrored);
  onCleanup(() => Errors.delete(setErrored));
  let e;
  return createMemo(() => {
    if ((e = errored()) != null) {
      const f = props.fallback;
      return typeof f === "function" && f.length ? untrack(() => f(e, () => setErrored(null))) : f;
    }
    onError(setErrored);
    return props.children;
  });
}

const SuspenseListContext = createContext();
function SuspenseList(props) {
  let index = 0,
      suspenseSetter,
      showContent,
      showFallback;
  const listContext = useContext(SuspenseListContext);
  if (listContext) {
    const [inFallback, setFallback] = createSignal(false);
    suspenseSetter = setFallback;
    [showContent, showFallback] = listContext.register(inFallback);
  }
  const registry = [],
        comp = createComponent(SuspenseListContext.Provider, {
    value: {
      register: inFallback => {
        const [showingContent, showContent] = createSignal(false),
              [showingFallback, showFallback] = createSignal(false);
        registry[index++] = {
          inFallback,
          showContent,
          showFallback
        };
        return [showingContent, showingFallback];
      }
    },
    get children() {
      return props.children;
    }
  });
  createComputed(() => {
    const reveal = props.revealOrder,
          tail = props.tail,
          visibleContent = showContent ? showContent() : true,
          visibleFallback = showFallback ? showFallback() : true,
          reverse = reveal === "backwards";
    if (reveal === "together") {
      const all = registry.every(i => !i.inFallback());
      suspenseSetter && suspenseSetter(!all);
      registry.forEach(i => {
        i.showContent(all && visibleContent);
        i.showFallback(visibleFallback);
      });
      return;
    }
    let stop = false;
    for (let i = 0, len = registry.length; i < len; i++) {
      const n = reverse ? len - i - 1 : i,
            s = registry[n].inFallback();
      if (!stop && !s) {
        registry[n].showContent(visibleContent);
        registry[n].showFallback(visibleFallback);
      } else {
        const next = !stop;
        if (next && suspenseSetter) suspenseSetter(true);
        if (!tail || next && tail === "collapsed") {
          registry[n].showFallback(visibleFallback);
        } else registry[n].showFallback(false);
        stop = true;
        registry[n].showContent(next);
      }
    }
    if (!stop && suspenseSetter) suspenseSetter(false);
  });
  return comp;
}
function Suspense(props) {
  let counter = 0,
      showContent,
      showFallback,
      ctx,
      p,
      flicker,
      error;
  const [inFallback, setFallback] = createSignal(false),
        SuspenseContext = getSuspenseContext(),
        store = {
    increment: () => {
      if (++counter === 1) setFallback(true);
    },
    decrement: () => {
      if (--counter === 0) setFallback(false);
    },
    inFallback,
    effects: [],
    resolved: false
  },
        owner = getOwner();
  if (sharedConfig.context) {
    const key = sharedConfig.context.id + sharedConfig.context.count;
    p = sharedConfig.load(key);
    if (p) {
      if (typeof p !== "object" || !("then" in p)) p = Promise.resolve(p);
      const [s, set] = createSignal(undefined, {
        equals: false
      });
      flicker = s;
      p.then(err => {
        if (error = err) return set();
        sharedConfig.gather(key);
        setHydrateContext(ctx);
        set();
        setHydrateContext();
      });
    }
  }
  const listContext = useContext(SuspenseListContext);
  if (listContext) [showContent, showFallback] = listContext.register(store.inFallback);
  let dispose;
  onCleanup(() => dispose && dispose());
  return createComponent(SuspenseContext.Provider, {
    value: store,
    get children() {
      return createMemo(() => {
        if (error) throw error;
        ctx = sharedConfig.context;
        if (flicker) {
          flicker();
          return flicker = undefined;
        }
        if (ctx && p === undefined) setHydrateContext();
        const rendered = untrack(() => props.children);
        return createMemo(() => {
          const inFallback = store.inFallback(),
                visibleContent = showContent ? showContent() : true,
                visibleFallback = showFallback ? showFallback() : true;
          dispose && dispose();
          if ((!inFallback || p !== undefined) && visibleContent) {
            store.resolved = true;
            ctx = p = undefined;
            resumeEffects(store.effects);
            return rendered;
          }
          if (!visibleFallback) return;
          return createRoot(disposer => {
            dispose = disposer;
            if (ctx) {
              setHydrateContext({
                id: ctx.id + "f",
                count: 0
              });
              ctx = undefined;
            }
            return props.fallback;
          }, owner);
        });
      });
    }
  });
}

let DEV;
{
  DEV = {
    writeSignal,
    serializeGraph,
    registerGraph,
    hashValue
  };
}
if (globalThis) {
  if (!globalThis.Solid$$) globalThis.Solid$$ = true;else console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior.");
}




/***/ }),

/***/ "./node_modules/solid-js/web/dist/dev.js":
/*!***********************************************!*\
  !*** ./node_modules/solid-js/web/dist/dev.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   "For": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.For),
/* harmony export */   "Index": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Index),
/* harmony export */   "Match": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Match),
/* harmony export */   "Show": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Show),
/* harmony export */   "Suspense": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "SuspenseList": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.SuspenseList),
/* harmony export */   "Switch": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "createComponent": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createComponent),
/* harmony export */   "effect": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect),
/* harmony export */   "getOwner": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.getOwner),
/* harmony export */   "mergeProps": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "Aliases": () => (/* binding */ Aliases),
/* harmony export */   "Assets": () => (/* binding */ Assets),
/* harmony export */   "ChildProperties": () => (/* binding */ ChildProperties),
/* harmony export */   "DelegatedEvents": () => (/* binding */ DelegatedEvents),
/* harmony export */   "Dynamic": () => (/* binding */ Dynamic),
/* harmony export */   "HydrationScript": () => (/* binding */ Assets),
/* harmony export */   "NoHydration": () => (/* binding */ NoHydration),
/* harmony export */   "Portal": () => (/* binding */ Portal),
/* harmony export */   "PropAliases": () => (/* binding */ PropAliases),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "SVGElements": () => (/* binding */ SVGElements),
/* harmony export */   "SVGNamespace": () => (/* binding */ SVGNamespace),
/* harmony export */   "addEventListener": () => (/* binding */ addEventListener),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "classList": () => (/* binding */ classList),
/* harmony export */   "clearDelegatedEvents": () => (/* binding */ clearDelegatedEvents),
/* harmony export */   "delegateEvents": () => (/* binding */ delegateEvents),
/* harmony export */   "dynamicProperty": () => (/* binding */ dynamicProperty),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "generateHydrationScript": () => (/* binding */ generateHydrationScript),
/* harmony export */   "getHydrationKey": () => (/* binding */ getHydrationKey),
/* harmony export */   "getNextElement": () => (/* binding */ getNextElement),
/* harmony export */   "getNextMarker": () => (/* binding */ getNextMarker),
/* harmony export */   "getNextMatch": () => (/* binding */ getNextMatch),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isServer": () => (/* binding */ isServer),
/* harmony export */   "memo": () => (/* binding */ memo),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderToStream": () => (/* binding */ renderToStream),
/* harmony export */   "renderToString": () => (/* binding */ renderToString),
/* harmony export */   "renderToStringAsync": () => (/* binding */ renderToStringAsync),
/* harmony export */   "resolveSSRNode": () => (/* binding */ resolveSSRNode),
/* harmony export */   "runHydrationEvents": () => (/* binding */ runHydrationEvents),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "setAttributeNS": () => (/* binding */ setAttributeNS),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "ssr": () => (/* binding */ ssr),
/* harmony export */   "ssrBoolean": () => (/* binding */ ssrBoolean),
/* harmony export */   "ssrClassList": () => (/* binding */ ssrClassList),
/* harmony export */   "ssrHydrationKey": () => (/* binding */ ssrHydrationKey),
/* harmony export */   "ssrSpread": () => (/* binding */ ssrSpread),
/* harmony export */   "ssrStyle": () => (/* binding */ ssrStyle),
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");



const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};
const PropAliases = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
const DelegatedEvents = new Set(["beforeinput", "click", "dblclick", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGElements = new Set([
"altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
"set", "stop",
"svg", "switch", "symbol", "text", "textPath",
"tref", "tspan", "use", "view", "vkern"]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};

function memo(fn, equals) {
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(fn, undefined, !equals ? {
    equals
  } : undefined);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
              sequence = 1,
              t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}

const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init) {
  let disposer;
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => {
    disposer = dispose;
    element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
  });
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  if (check && t.innerHTML.split("<").length - 1 !== check) throw `The browser resolved template HTML does not match JSX input:\n${t.innerHTML}\n\n${html}. Is your HTML properly formed?`;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}
function delegateEvents(eventNames, document = window.document) {
  const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}
function clearDelegatedEvents(document = window.document) {
  if (document[$$EVENTS]) {
    for (let name of document[$$EVENTS].keys()) document.removeEventListener(name, eventHandler);
    delete document[$$EVENTS];
  }
}
function setAttribute(node, name, value) {
  if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    node.addEventListener(name, e => handler[0](handler[1], e));
  } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}),
        prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev = {}) {
  const nodeStyle = node.style;
  if (value == null || typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (prev = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}
function dynamicProperty(props, key) {
  const src = props[key];
  Object.defineProperty(props, key, {
    get() {
      return src();
    },
    enumerable: true
  });
  return props;
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}) {
  for (const prop in prevProps) {
    if (!(prop in props)) {
      if (prop === "children") continue;
      assignProp(node, prop, null, prevProps[prop], isSVG);
    }
  }
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG);
  }
}
function hydrate$1(code, element, options = {}) {
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed = globalThis._$HY.completed;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events = globalThis._$HY.events;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.load = globalThis._$HY.load;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.gather = root => gatherHydratable(element, root);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry = new Map();
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = {
    id: options.renderId || "",
    count: 0
  };
  gatherHydratable(element, options.renderId);
  const dispose = render(code, element, [...element.childNodes]);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = null;
  return dispose;
}
function getNextElement(template) {
  let node, key;
  if (!solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context || !(node = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.get(key = getHydrationKey()))) {
    return template.cloneNode(true);
  }
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed.add(node);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry["delete"](key);
  return node;
}
function getNextMatch(el, nodeName) {
  while (el && el.localName !== nodeName) el = el.nextSibling;
  return el;
}
function getNextMarker(start) {
  let end = start,
      count = 0,
      current = [];
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#") count++;else if (v === "/") {
          if (count === 0) return [end, current];
          count--;
        }
      }
      current.push(end);
      end = end.nextSibling;
    }
  }
  return [end, current];
}
function runHydrationEvents() {
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events && !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued) {
    queueMicrotask(() => {
      const {
        completed,
        events
      } = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig;
      events.queued = false;
      while (events.length) {
        const [el, e] = events[0];
        if (!completed.has(el)) return;
        eventHandler(e);
        events.shift();
      }
    });
    solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued = true;
  }
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG) {
  let isCE, isProp, isChildProp;
  if (prop === "style") return style(node, value, prev);
  if (prop === "classList") return classList(node, value, prev);
  if (value === prev) return prev;
  if (prop === "ref") {
    value(node);
  } else if (prop.slice(0, 3) === "on:") {
    node.addEventListener(prop.slice(3), value);
  } else if (prop.slice(0, 10) === "oncapture:") {
    node.addEventListener(prop.slice(10), value, true);
  } else if (prop.slice(0, 2) === "on") {
    const name = prop.slice(2).toLowerCase();
    const delegate = DelegatedEvents.has(name);
    addEventListener(node, name, value, delegate);
    delegate && delegateEvents([name]);
  } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
    if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[PropAliases[prop] || prop] = value;
  } else {
    const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
    if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
  }
  return value;
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  while (node !== null) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== undefined ? handler(data, e) : handler(e);
      if (e.cancelBubble) return;
    }
    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  if (!skipChildren && "children" in props) {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => assign(node, props, isSVG, true, prevProps));
  return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && !current) current = [...parent.childNodes];
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
        multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    if (normalizeIncomingArray(array, value, unwrapArray)) {
      (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && current && current.length) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentNode) return current = array;
      }
      return current;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else if (current == null || current === "") {
        appendNodes(parent, array);
      } else {
        reconcileArrays(parent, multi && current || [parent.firstChild], array);
      }
    }
    current = array;
  } else if (value instanceof Node) {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current = value.parentNode ? multi ? [value] : value : current;
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else console.warn(`Unrecognized value. Skipped inserting`, value);
  return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
        t;
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) ; else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else normalized.push(document.createTextNode(item.toString()));
  }
  return dynamic;
}
function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
function gatherHydratable(element, root) {
  const templates = element.querySelectorAll(`*[data-hk]`);
  for (let i = 0; i < templates.length; i++) {
    const node = templates[i];
    const key = node.getAttribute("data-hk");
    if (!root || key.startsWith(root)) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.set(key, node);
  }
}
function getHydrationKey() {
  const hydrate = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context;
  return `${hydrate.id}${hydrate.count++}`;
}
function Assets() {
  return;
}
function NoHydration(props) {
  return solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? undefined : props.children;
}

function renderToString(fn, options) {}
function renderToStringAsync(fn, options) {}
function renderToStream(fn, options) {}
function ssr(template, ...nodes) {}
function resolveSSRNode(node) {}
function ssrClassList(value) {}
function ssrStyle(value) {}
function ssrSpread(accessor) {}
function ssrBoolean(key, value) {}
function ssrHydrationKey() {}
function escape(html) {}
function generateHydrationScript() {}

const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
const hydrate = (...args) => {
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.enableHydration)();
  return hydrate$1(...args);
};
function Portal(props) {
  const {
    useShadow
  } = props,
        marker = document.createTextNode(""),
        mount = props.mount || document.body;
  function renderPortal() {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
      const [s, set] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);
      queueMicrotask(() => set(true));
      return () => s() && props.children;
    } else return () => props.children;
  }
  if (mount instanceof HTMLHeadElement) {
    const [clean, setClean] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);
    const cleanup = () => setClean(true);
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => insert(mount, () => !clean() ? renderPortal()() : dispose(), null));
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => {
      if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) queueMicrotask(cleanup);else cleanup();
    });
  } else {
    const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
          renderRoot = useShadow && container.attachShadow ? container.attachShadow({
      mode: "open"
    }) : container;
    Object.defineProperty(container, "host", {
      get() {
        return marker.parentNode;
      }
    });
    insert(renderRoot, renderPortal());
    mount.appendChild(container);
    props.ref && props.ref(container);
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => mount.removeChild(container));
  }
  return marker;
}
function Dynamic(props) {
  const [p, others] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.splitProps)(props, ["component"]);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(() => {
    const component = p.component;
    switch (typeof component) {
      case "function":
        Object.assign(component, {
          [solid_js__WEBPACK_IMPORTED_MODULE_0__.$DEVCOMP]: true
        });
        return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(() => component(others));
      case "string":
        const isSvg = SVGElements.has(component);
        const el = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? getNextElement() : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;
    }
  });
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Application.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map