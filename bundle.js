/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstracts/CustomElement.js":
/*!****************************************!*\
  !*** ./src/abstracts/CustomElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CustomElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CustomElement, _HTMLElement);

  var _super = _createSuper(CustomElement);

  function CustomElement() {
    _classCallCheck(this, CustomElement);

    return _super.apply(this, arguments);
  }

  _createClass(CustomElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.setEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.insertAdjacentHTML('beforeend', this.template());
    }
  }, {
    key: "template",
    value: function template() {}
  }, {
    key: "setEvent",
    value: function setEvent() {}
  }, {
    key: "show",
    value: function show() {
      this.removeAttribute('hidden');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setAttribute('hidden', true);
    }
  }]);

  return CustomElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomElement);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "MONEY": () => (/* binding */ MONEY),
/* harmony export */   "PRODUCT": () => (/* binding */ PRODUCT),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE)
/* harmony export */ });
var BASE_URL = ''; // javascript-vendingmachine

var COIN = {
  DEFAULT_COUNT: 0
};
var MONEY = {
  DEFAULT: 0,
  MAX: 100000
};
var PRODUCT = {
  NAME: {
    MAX_LENGTH: 10
  },
  PRICE: {
    MIN: 100,
    MAX: 10000
  },
  QUANTITY: {
    MIN: 1,
    MAX: 20
  }
};
var CONFIRM_MESSAGE = {
  DELETE: '선택한 상품을 정말 삭제하시겠습니까? 한번 삭제한 상품은 복구할 수 없습니다.'
};
var ERROR_MESSAGE = {
  IS_BLANK_PRODUCT_NAME: '공백으로만 이루어진 상품명이 입력되었습니다! 상품명을 입력해 주세요!',
  IS_OVER_MAX_PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC774 \uCD5C\uB300 \uAE38\uC774\uC778 ".concat(PRODUCT.NAME.MAX_LENGTH, "\uC790\uB97C \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.NAME.MAX_LENGTH, "\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  IS_ALREADY_EXIST_PRODUCT_WHEN_ADD: '이미 존재하는 상품입니다! 가격 또는 수량을 수정하고 싶으시다면 수정 버튼을 클릭해 주세요!',
  IS_ALREADY_EXIST_PRODUCT_WHEN_MODIFY: '이미 존재하는 상품입니다! 다른 상품명을 입력해 주세요!',
  IS_NOT_INTEGER_PRICE: '가격에 정수가 입력되지 않았습니다! 정수를 입력해 주세요!',
  IS_UNDER_MIN_PRICE: "\uAC00\uACA9\uC774 \uCD5C\uC18C \uAC00\uACA9\uC778 ".concat(PRODUCT.PRICE.MIN, "\uC6D0 \uBBF8\uB9CC\uC73C\uB85C \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.PRICE.MIN, "\uC6D0 \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  IS_OVER_MAX_PRICE: "\uAC00\uACA9\uC774 \uCD5C\uB300 \uAC00\uACA9\uC778 ".concat(PRODUCT.PRICE.MAX.toLocaleString(), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.PRICE.MAX.toLocaleString(), "\uC6D0 \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  PRICE_CANNOT_DIVIDED_BY_TEN: '가격에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
  IS_NOT_INTEGER_QUANTITY: '수량에 정수가 입력되지 않았습니다! 정수를 입력해 주세요!',
  IS_UNDER_MIN_QUANTITY: "\uC218\uB7C9\uC774 \uCD5C\uC18C \uC218\uB7C9\uC778 ".concat(PRODUCT.QUANTITY.MIN, "\uAC1C \uBBF8\uB9CC\uC73C\uB85C \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.QUANTITY.MIN, "\uAC1C \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  IS_OVER_MAX_QUANTITY: "\uC218\uB7C9\uC774 \uCD5C\uB300 \uC218\uB7C9\uC778 ".concat(PRODUCT.QUANTITY.MAX, "\uAC1C\uB97C \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.QUANTITY.MAX, "\uAC1C \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  MONEY_CANNOT_DIVIDED_BY_TEN: '금액에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
  IS_OVER_MAX_MONEY: "\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC774 \uCD5C\uB300 \uBCF4\uC720 \uAC00\uB2A5 \uAE08\uC561\uC778 ".concat(MONEY.MAX.toLocaleString(), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC600\uC2B5\uB2C8\uB2E4! \uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC744 \uD655\uC778\uD55C \uD6C4 \uC785\uB825\uD574 \uC8FC\uC138\uC694!")
};

/***/ }),

/***/ "./src/elements/AdministratorMenu.js":
/*!*******************************************!*\
  !*** ./src/elements/AdministratorMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
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




var AdministratorMenu = /*#__PURE__*/function (_CustomElement) {
  _inherits(AdministratorMenu, _CustomElement);

  var _super = _createSuper(AdministratorMenu);

  function AdministratorMenu() {
    _classCallCheck(this, AdministratorMenu);

    return _super.apply(this, arguments);
  }

  _createClass(AdministratorMenu, [{
    key: "template",
    value: function template() {
      return "\n      <nav>\n        <button class=\"nav__product-manage-button clicked\" route=\"".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/\">\uC0C1\uD488 \uAD00\uB9AC</button>\n        <button class=\"nav__coin-charge-button\" route=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/coin-charge/\">\uC794\uB3C8 \uCDA9\uC804</button>\n        <button class=\"nav__product-purchase-button\">\uC0C1\uD488 \uAD6C\uB9E4</button>\n      </nav>\n    ");
    }
  }]);

  return AdministratorMenu;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('administrator-menu', AdministratorMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdministratorMenu);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinChargeContainer.js":
/*!********************************************************!*\
  !*** ./src/elements/CoinCharge/CoinChargeContainer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _CoinChargeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoinChargeForm */ "./src/elements/CoinCharge/CoinChargeForm.js");
/* harmony import */ var _CoinCurrentSituation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoinCurrentSituation */ "./src/elements/CoinCharge/CoinCurrentSituation.js");
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





var CoinChargeContainer = /*#__PURE__*/function (_CustomElement) {
  _inherits(CoinChargeContainer, _CustomElement);

  var _super = _createSuper(CoinChargeContainer);

  function CoinChargeContainer() {
    _classCallCheck(this, CoinChargeContainer);

    return _super.apply(this, arguments);
  }

  _createClass(CoinChargeContainer, [{
    key: "template",
    value: function template() {
      return "\n      <coin-charge-form></coin-charge-form>\n      <coin-current-situation></coin-current-situation>\n    ";
    }
  }]);

  return CoinChargeContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('coin-charge-container', CoinChargeContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinChargeContainer);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinChargeForm.js":
/*!***************************************************!*\
  !*** ./src/elements/CoinCharge/CoinChargeForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CoinChargeForm = /*#__PURE__*/function (_CustomElement) {
  _inherits(CoinChargeForm, _CustomElement);

  var _super = _createSuper(CoinChargeForm);

  function CoinChargeForm() {
    var _this;

    _classCallCheck(this, CoinChargeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleCoinChargeFormSubmit", function (event) {
      event.preventDefault();
      var $coinInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#coin-input');
      var coinInputValue = $coinInput.valueAsNumber;

      try {
        (0,_validators__WEBPACK_IMPORTED_MODULE_4__.checkCoinValidation)(coinInputValue);
      } catch (error) {
        alert(error.message);
        return;
      }

      _this.initCoinInput($coinInput);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_1__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.COIN_ACTION.COIN_CHARGE, coinInputValue));
    });

    return _this;
  }

  _createClass(CoinChargeForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(CoinChargeForm.prototype), "connectedCallback", this).call(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <form class=\"coin-charge-form\">\n        <label class=\"coin-charge-label\" for=\"coin-input\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <input type=\"number\" id=\"coin-input\" placeholder=\"\uAE08\uC561\" required>\n        <button class=\"coin-charge-button\">\uCDA9\uC804</button>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.coin-charge-form').addEventListener('submit', this.handleCoinChargeFormSubmit);
    }
  }, {
    key: "initCoinInput",
    value: function initCoinInput($coinInput) {
      $coinInput.value = '';
      $coinInput.focus();
    }
  }]);

  return CoinChargeForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('coin-charge-form', CoinChargeForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinChargeForm);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinCurrentSituation.js":
/*!*********************************************************!*\
  !*** ./src/elements/CoinCharge/CoinCurrentSituation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CoinCurrentSituation = /*#__PURE__*/function (_CustomElement) {
  _inherits(CoinCurrentSituation, _CustomElement);

  var _super = _createSuper(CoinCurrentSituation);

  function CoinCurrentSituation() {
    _classCallCheck(this, CoinCurrentSituation);

    return _super.apply(this, arguments);
  }

  _createClass(CoinCurrentSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(CoinCurrentSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span class=\"money\">0</span>\uC6D0</p>\n      <h2>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h2>\n      <table class=\"coin-current-situation\">\n        <thead>\n          <tr>\n            <th>\uB3D9\uC804</th>\n            <th>\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>500\uC6D0</td>\n            <td class=\"coin-500-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>100\uC6D0</td>\n            <td class=\"coin-100-count-td\">0\uAC1C</td>\n          </tr>\n          </tr>\n          <tr>\n            <td>50\uC6D0</td>\n            <td class=\"coin-50-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>10\uC6D0</td>\n            <td class=\"coin-10-count-td\">0\uAC1C</td>\n          </tr>\n        </tbody>\n      </table>\n    ";
    }
  }, {
    key: "rerender",
    value: function rerender(newCoinsCount) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.money').textContent = newCoinsCount.sum;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.coin-500-count-td').textContent = "".concat(newCoinsCount[500], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.coin-100-count-td').textContent = "".concat(newCoinsCount[100], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.coin-50-count-td').textContent = "".concat(newCoinsCount[50], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.coin-10-count-td').textContent = "".concat(newCoinsCount[10], "\uAC1C");
    }
  }]);

  return CoinCurrentSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_1__["default"]);

customElements.define('coin-current-situation', CoinCurrentSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinCurrentSituation);

/***/ }),

/***/ "./src/elements/ProductManage/ProductAddForm.js":
/*!******************************************************!*\
  !*** ./src/elements/ProductManage/ProductAddForm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ProductAddForm = /*#__PURE__*/function (_CustomElement) {
  _inherits(ProductAddForm, _CustomElement);

  var _super = _createSuper(ProductAddForm);

  function ProductAddForm() {
    var _this;

    _classCallCheck(this, ProductAddForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleProductAddFormSubmit", function (event) {
      event.preventDefault();
      var $productNameInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-name-input');
      var $productPriceInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-price-input');
      var $productQuantityInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-quantity-input');
      var newProduct = {
        name: $productNameInput.value.trim(),
        price: $productPriceInput.valueAsNumber,
        quantity: $productQuantityInput.valueAsNumber
      };

      try {
        (0,_validators__WEBPACK_IMPORTED_MODULE_4__.checkProductAddValidation)(newProduct);
      } catch (error) {
        alert(error.message);
        return;
      }

      _this.initProductInputs($productNameInput, $productPriceInput, $productQuantityInput);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_1__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.ADD, newProduct));
    });

    return _this;
  }

  _createClass(ProductAddForm, [{
    key: "template",
    value: function template() {
      return "\n      <form class=\"product-add-form\">\n        <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div class=\"product-input-container\">\n          <input class=\"product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" maxlength=\"10\" required>\n          <input type=\"number\" class=\"product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required>\n          <input type=\"number\" class=\"product-quantity-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required>\n          <button class=\"product-add-button\">\uCD94\uAC00</button>\n        </div>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('product-add-form').addEventListener('submit', this.handleProductAddFormSubmit);
    }
  }, {
    key: "initProductInputs",
    value: function initProductInputs($productNameInput, $productPriceInput, $productQuantityInput) {
      $productNameInput.value = '';
      $productPriceInput.value = '';
      $productQuantityInput.value = '';
      $productNameInput.focus();
    }
  }]);

  return ProductAddForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('product-add-form', ProductAddForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductAddForm);

/***/ }),

/***/ "./src/elements/ProductManage/ProductCurrentSituation.js":
/*!***************************************************************!*\
  !*** ./src/elements/ProductManage/ProductCurrentSituation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductCurrentSituation = /*#__PURE__*/function (_CustomElement) {
  _inherits(ProductCurrentSituation, _CustomElement);

  var _super = _createSuper(ProductCurrentSituation);

  function ProductCurrentSituation() {
    var _this;

    _classCallCheck(this, ProductCurrentSituation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleProductModifyButtonClick", function ($tbodyRow) {
      _this.makeProductInfoModifiable($tbodyRow);

      _this.setEventForProductModify($tbodyRow);
    });

    _defineProperty(_assertThisInitialized(_this), "handleProductModifyEnter", function (event, $tbodyRow) {
      if (event.key !== 'Enter') return;

      try {
        _this.modifyProduct($tbodyRow);
      } catch (error) {
        alert(error.message);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleProductModifyConfirmButtonClick", function ($tbodyRow) {
      try {
        _this.modifyProduct($tbodyRow);
      } catch (error) {
        alert(error.message);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleProductDeleteButtonClick", function (productName) {
      if (!window.confirm(_constants__WEBPACK_IMPORTED_MODULE_5__.CONFIRM_MESSAGE.DELETE)) return;
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_1__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.DELETE, productName));
    });

    return _this;
  }

  _createClass(ProductCurrentSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ProductCurrentSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uC0C1\uD488 \uD604\uD669</h2>\n      <div class=\"product-current-situation-container\">\n        <table class=\"product-current-situation\">\n          <thead>\n            <tr>\n              <th>\uC0C1\uD488\uBA85</th>\n              <th>\uAC00\uACA9</th>\n              <th>\uC218\uB7C9</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n    ";
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var type = _ref.type,
          detail = _ref.detail;

      switch (type) {
        case _domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.ADD:
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('tbody', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-current-situation')).insertAdjacentHTML('beforeend', this.tableBodyRowTemplate(detail));
          this.setEventAfterRerender(detail.name);
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.MODIFY:
          {
            var oldProductName = detail.oldProductName,
                newProductInfo = detail.newProductInfo;
            var $tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)("[data-product-name=\"".concat(oldProductName, "\"]"));
            $tbodyRow.dataset.productName = newProductInfo.name;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-name-td', $tbodyRow).textContent = newProductInfo.name;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-price-td', $tbodyRow).textContent = newProductInfo.price;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-quantity-td', $tbodyRow).textContent = newProductInfo.quantity;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-manage-buttons-td', $tbodyRow).replaceChildren();
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-manage-buttons-td', $tbodyRow).insertAdjacentHTML('beforeend', "<button class=\"table__product-modify-button\">\uC218\uC815</button>\n            <button class=\"table__product-delete-button\">\uC0AD\uC81C</button>");
            this.setEventAfterRerender(newProductInfo.name);
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.DELETE:
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)("[data-product-name=\"".concat(detail, "\"]")).remove();
      }
    }
  }, {
    key: "tableBodyRowTemplate",
    value: function tableBodyRowTemplate(_ref2) {
      var name = _ref2.name,
          price = _ref2.price,
          quantity = _ref2.quantity;
      return " \n      <tr data-product-name=\"".concat(name, "\">\n        <td class=\"product-name-td\">").concat(name, "</td> \n        <td class=\"product-price-td\">").concat(price, "</td>\n        <td class=\"product-quantity-td\">").concat(quantity, "</td>\n        <td class=\"product-manage-buttons-td\">\n          <button class=\"table__product-modify-button\">\uC218\uC815</button>\n          <button class=\"table__product-delete-button\">\uC0AD\uC81C</button>\n        </td>\n      </tr>\n    ");
    }
  }, {
    key: "setEventAfterRerender",
    value: function setEventAfterRerender(productName) {
      var _this2 = this;

      var $tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)("[data-product-name=\"".concat(productName, "\"]"));
      $tbodyRow.scrollIntoView();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.table__product-modify-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductModifyButtonClick($tbodyRow);
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.table__product-delete-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductDeleteButtonClick(productName);
      });
    }
  }, {
    key: "makeProductInfoModifiable",
    value: function makeProductInfoModifiable($tbodyRow) {
      var $productNameTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-name-td', $tbodyRow);
      var oldProductName = $productNameTd.textContent;
      $productNameTd.replaceChildren();
      $productNameTd.insertAdjacentHTML('beforeend', "<input class=\"product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" value=\"".concat(oldProductName, "\" maxlength=\"10\" required>"));
      var $productPriceTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-price-td', $tbodyRow);
      var oldProductPrice = $productPriceTd.textContent;
      $productPriceTd.replaceChildren();
      $productPriceTd.insertAdjacentHTML('beforeend', "<input type=\"number\" class=\"product-price-input\" placeholder=\"\uAC00\uACA9\" value=\"".concat(oldProductPrice, "\" min=\"100\" max=\"10000\" required>"));
      var $productQuantityTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-quantity-td', $tbodyRow);
      var oldProductQuantity = $productQuantityTd.textContent;
      $productQuantityTd.replaceChildren();
      $productQuantityTd.insertAdjacentHTML('beforeend', "<input type=\"number\" class=\"product-quantity-input\" placeholder=\"\uC218\uB7C9\" value=\"".concat(oldProductQuantity, "\" min=\"1\" max=\"20\" required>"));
      var $productManageButtonsTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-manage-buttons-td', $tbodyRow);
      $productManageButtonsTd.replaceChildren();
      $productManageButtonsTd.insertAdjacentHTML('beforeend', "<button class=\"table__product-modify-confirm-button\">\uD655\uC778</button>");
    }
  }, {
    key: "setEventForProductModify",
    value: function setEventForProductModify($tbodyRow) {
      var _this3 = this;

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$$)('input', $tbodyRow).forEach(function (input) {
        return input.addEventListener('keydown', function (event) {
          return _this3.handleProductModifyEnter(event, $tbodyRow);
        });
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.table__product-modify-confirm-button', $tbodyRow).addEventListener('click', function () {
        return _this3.handleProductModifyConfirmButtonClick($tbodyRow);
      });
    }
  }, {
    key: "modifyProduct",
    value: function modifyProduct($tbodyRow) {
      var oldProductName = $tbodyRow.dataset.productName;
      var newProductInfo = {
        name: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-name-input', $tbodyRow).value,
        price: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-price-input', $tbodyRow).valueAsNumber,
        quantity: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-quantity-input', $tbodyRow).valueAsNumber
      };

      if (oldProductName !== newProductInfo.name) {
        (0,_validators__WEBPACK_IMPORTED_MODULE_4__.checkDuplicateProductWhenModify)(newProductInfo);
      }

      (0,_validators__WEBPACK_IMPORTED_MODULE_4__.checkProductValidation)(newProductInfo);
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_1__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.MODIFY, {
        oldProductName: oldProductName,
        newProductInfo: newProductInfo
      }));
    }
  }]);

  return ProductCurrentSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_2__["default"]);

customElements.define('product-current-situation', ProductCurrentSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCurrentSituation);

/***/ }),

/***/ "./src/elements/ProductManage/ProductManageContainer.js":
/*!**************************************************************!*\
  !*** ./src/elements/ProductManage/ProductManageContainer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _ProductAddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAddForm */ "./src/elements/ProductManage/ProductAddForm.js");
/* harmony import */ var _ProductCurrentSituation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCurrentSituation */ "./src/elements/ProductManage/ProductCurrentSituation.js");
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





var ProductManageContainer = /*#__PURE__*/function (_CustomElement) {
  _inherits(ProductManageContainer, _CustomElement);

  var _super = _createSuper(ProductManageContainer);

  function ProductManageContainer() {
    _classCallCheck(this, ProductManageContainer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductManageContainer, [{
    key: "template",
    value: function template() {
      return "\n      <product-add-form></product-add-form>\n      <product-current-situation></product-current-situation>\n    ";
    }
  }]);

  return ProductManageContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('product-manage-container', ProductManageContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductManageContainer);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


var $productManageButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.nav__product-manage-button');
var $productManageContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('product-manage-container');
var $productNameInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.product-name-input');
var $coinChargeButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.nav__coin-charge-button');
var $coinChargeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('coin-charge-container');
var $coinInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#coin-input');

var renderProductManageContainer = function renderProductManageContainer() {
  $productManageContainer.show();
  $coinChargeContainer.hide();
  $productManageButton.classList.add('clicked');
  $coinChargeButton.classList.remove('clicked');
  $productNameInput.focus();
};

var handleProductManageButtonClick = function handleProductManageButtonClick(event) {
  var route = event.target.getAttribute('route');
  window.history.pushState({}, null, route);
  renderProductManageContainer();
};

var renderCoinChargeContainer = function renderCoinChargeContainer() {
  $productManageContainer.hide();
  $coinChargeContainer.show();
  $productManageButton.classList.remove('clicked');
  $coinChargeButton.classList.add('clicked');
  $coinInput.focus();
};

var handleCoinChargeButtonClick = function handleCoinChargeButtonClick(event) {
  var route = event.target.getAttribute('route');
  window.history.pushState({}, null, route);
  renderCoinChargeContainer();
};

var renderTargetContainer = function renderTargetContainer(path) {
  if (path === "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, "/")) {
    renderProductManageContainer();
    return;
  }

  renderCoinChargeContainer();
};

renderTargetContainer(window.location.pathname);
$productManageButton.addEventListener('click', handleProductManageButtonClick);
$coinChargeButton.addEventListener('click', handleCoinChargeButtonClick);
window.addEventListener('popstate', function () {
  renderTargetContainer(window.location.pathname);
});

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$)
/* harmony export */ });
var $ = function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
};
var $$ = function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
};

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pickNumberInList = function pickNumberInList(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pickNumberInList);

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProductValidation": () => (/* binding */ checkProductValidation),
/* harmony export */   "checkProductAddValidation": () => (/* binding */ checkProductAddValidation),
/* harmony export */   "checkDuplicateProductWhenModify": () => (/* binding */ checkDuplicateProductWhenModify),
/* harmony export */   "checkCoinValidation": () => (/* binding */ checkCoinValidation)
/* harmony export */ });
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




var isBlank = function isBlank(value) {
  return value === '';
};

var isNotInteger = function isNotInteger(number) {
  return !Number.isInteger(number);
};

var cannotDividedByTen = function cannotDividedByTen(number) {
  return number % 10;
};

var isOverMaxProductNameLength = function isOverMaxProductNameLength(name) {
  return name.length > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.NAME.MAX_LENGTH;
};

var isAlreadyExistProduct = function isAlreadyExistProduct(name) {
  var _ProductStoreInstance;

  var products = (_ProductStoreInstance = _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].products) !== null && _ProductStoreInstance !== void 0 ? _ProductStoreInstance : [];
  var existProductNames = products.map(function (product) {
    return product.name;
  });
  return existProductNames.includes(name);
};

var isUnderMinPrice = function isUnderMinPrice(price) {
  return price < _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.PRICE.MIN;
};

var isOverMaxPrice = function isOverMaxPrice(price) {
  return price > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.PRICE.MAX;
};

var isUnderMinQuantity = function isUnderMinQuantity(quantity) {
  return quantity < _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.QUANTITY.MIN;
};

var isOverMaxQuantity = function isOverMaxQuantity(quantity) {
  return quantity > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.QUANTITY.MAX;
};

var isOverMaxMoney = function isOverMaxMoney(inputMoney) {
  var currentMoney = _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__["default"].money;
  return currentMoney + inputMoney > _constants__WEBPACK_IMPORTED_MODULE_2__.MONEY.MAX;
};

var checkProductValidation = function checkProductValidation(_ref) {
  var name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity;

  if (isBlank(name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_BLANK_PRODUCT_NAME);
  }

  if (isOverMaxProductNameLength(name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_MAX_PRODUCT_NAME_LENGTH);
  }

  if (isNotInteger(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_NOT_INTEGER_PRICE);
  }

  if (isUnderMinPrice(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_UNDER_MIN_PRICE);
  }

  if (isOverMaxPrice(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_MAX_PRICE);
  }

  if (cannotDividedByTen(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.PRICE_CANNOT_DIVIDED_BY_TEN);
  }

  if (isNotInteger(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_NOT_INTEGER_QUANTITY);
  }

  if (isUnderMinQuantity(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_UNDER_MIN_QUANTITY);
  }

  if (isOverMaxQuantity(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_MAX_QUANTITY);
  }
};
var checkProductAddValidation = function checkProductAddValidation(product) {
  if (isAlreadyExistProduct(product.name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_ALREADY_EXIST_PRODUCT_WHEN_ADD);
  }

  checkProductValidation(product);
};
var checkDuplicateProductWhenModify = function checkDuplicateProductWhenModify(product) {
  if (isAlreadyExistProduct(product.name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_ALREADY_EXIST_PRODUCT_WHEN_MODIFY);
  }
};
var checkCoinValidation = function checkCoinValidation(coinInputValue) {
  if (isOverMaxMoney(coinInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_MAX_MONEY);
  }

  if (cannotDividedByTen(coinInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.MONEY_CANNOT_DIVIDED_BY_TEN);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--gray-500);\n  font-size: 16px;\n}\n\n#app {\n  width: 600px;\n  height: 675px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\nh1 {\n  text-align: center;\n  margin: 44px 0 32px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button {\n  width: 117px;\n  height: 36px;\n}\n\n.clicked {\n  background: var(--cyan-light);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-light);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,kBAAkB;AACpB","sourcesContent":["body {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--gray-500);\n  font-size: 16px;\n}\n\n#app {\n  width: 600px;\n  height: 675px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\nh1 {\n  text-align: center;\n  margin: 44px 0 32px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button {\n  width: 117px;\n  height: 36px;\n}\n\n.clicked {\n  background: var(--cyan-light);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-light);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/container.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".product-input-container {\n  margin-top: 4px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.product-add-button,\n.coin-charge-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.product-add-button:hover,\n.coin-charge-button:hover {\n  background: var(--cyan-dark);\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  overflow-y: auto;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button {\n  width: 100px;\n  height: 32px;\n}\n\n.coin-charge-label {\n  display: block;\n  margin-bottom: 4px;\n}\n\n#coin-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation {\n  width: 238px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;;EAEE,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd","sourcesContent":[".product-input-container {\n  margin-top: 4px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.product-add-button,\n.coin-charge-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.product-add-button:hover,\n.coin-charge-button:hover {\n  background: var(--cyan-dark);\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  overflow-y: auto;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button {\n  width: 100px;\n  height: 32px;\n}\n\n.coin-charge-label {\n  display: block;\n  margin-bottom: 4px;\n}\n\n#coin-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation {\n  width: 238px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput,\nbutton {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;AACf","sourcesContent":["@import './root.css';\n@import './app.css';\n@import './container.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput,\nbutton {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-light: rgba(0, 188, 212, 0.16);\n\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n}\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,eAAe;EACf,qCAAqC;;EAErC,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,6BAA6B;EAC7B,uBAAuB;EACvB,uBAAuB;AACzB","sourcesContent":[":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-light: rgba(0, 188, 212, 0.16);\n\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/domains/actions.ts":
/*!********************************!*\
  !*** ./src/domains/actions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAction": () => (/* binding */ createAction),
/* harmony export */   "PRODUCT_ACTION": () => (/* binding */ PRODUCT_ACTION),
/* harmony export */   "COIN_ACTION": () => (/* binding */ COIN_ACTION)
/* harmony export */ });
const createAction = (type, detail) => ({
    type,
    detail,
});
const PRODUCT_ACTION = {
    ADD: 'product-add',
    MODIFY: 'product-modify',
    DELETE: 'product-delete',
};
const COIN_ACTION = {
    COIN_CHARGE: 'coin-charge',
};


/***/ }),

/***/ "./src/domains/stores/CoinStore.ts":
/*!*****************************************!*\
  !*** ./src/domains/stores/CoinStore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/random */ "./src/utils/random.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CoinStore_coinsCount, _CoinStore_subscribers;


class CoinStore {
    constructor() {
        _CoinStore_coinsCount.set(this, {
            500: _constants__WEBPACK_IMPORTED_MODULE_0__.COIN.DEFAULT_COUNT,
            100: _constants__WEBPACK_IMPORTED_MODULE_0__.COIN.DEFAULT_COUNT,
            50: _constants__WEBPACK_IMPORTED_MODULE_0__.COIN.DEFAULT_COUNT,
            10: _constants__WEBPACK_IMPORTED_MODULE_0__.COIN.DEFAULT_COUNT,
            sum: _constants__WEBPACK_IMPORTED_MODULE_0__.MONEY.DEFAULT,
        });
        _CoinStore_subscribers.set(this, []);
    }
    subscribe(element) {
        __classPrivateFieldGet(this, _CoinStore_subscribers, "f").push(element);
    }
    dispatch(action) {
        this.updateCoinsCount(action);
        this.notifySubscribers();
    }
    updateCoinsCount(action) {
        const { detail } = action;
        __classPrivateFieldSet(this, _CoinStore_coinsCount, this.generateRandomCoins(__classPrivateFieldGet(this, _CoinStore_coinsCount, "f"), detail), "f");
    }
    generateRandomCoins(oldCoinsCount, detail) {
        const newCoinsCount = oldCoinsCount;
        let coinList = [500, 100, 50, 10];
        let money = detail; // 들어온 돈
        while (money) {
            const randomCoin = (0,_utils_random__WEBPACK_IMPORTED_MODULE_1__["default"])(coinList);
            if (money < randomCoin) {
                coinList = this.generateNewCoinList(coinList, money);
                continue;
            }
            newCoinsCount[randomCoin] += 1;
            newCoinsCount.sum += randomCoin;
            money -= randomCoin;
        }
        return newCoinsCount;
    }
    generateNewCoinList(coinList, money) {
        return coinList.filter((coin) => coin <= money);
    }
    notifySubscribers() {
        __classPrivateFieldGet(this, _CoinStore_subscribers, "f").forEach((subscriber) => {
            subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_coinsCount, "f"));
        });
    }
    get coinsCount() {
        return __classPrivateFieldGet(this, _CoinStore_coinsCount, "f");
    }
}
_CoinStore_coinsCount = new WeakMap(), _CoinStore_subscribers = new WeakMap();
const CoinStoreInstance = new CoinStore();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinStoreInstance);


/***/ }),

/***/ "./src/domains/stores/ProductStore.ts":
/*!********************************************!*\
  !*** ./src/domains/stores/ProductStore.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/domains/actions.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ProductStore_products, _ProductStore_subscribers;

class ProductStore {
    constructor() {
        _ProductStore_products.set(this, []);
        _ProductStore_subscribers.set(this, []);
    }
    subscribe(element) {
        __classPrivateFieldGet(this, _ProductStore_subscribers, "f").push(element);
    }
    dispatch(action) {
        this.updateProducts(action);
        this.notifySubscribers(action);
    }
    updateProducts(action) {
        const newProducts = this.generateNewProducts(__classPrivateFieldGet(this, _ProductStore_products, "f"), action);
        __classPrivateFieldSet(this, _ProductStore_products, newProducts, "f");
    }
    generateNewProducts(oldProducts, { type, detail }) {
        const newProducts = [...oldProducts];
        switch (type) {
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.ADD: {
                newProducts.push(detail);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.MODIFY: {
                const { oldProductName, newProductInfo } = detail;
                const productIndex = this.findProductIndex(oldProductName);
                newProducts[productIndex] = newProductInfo;
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.DELETE: {
                const productIndex = this.findProductIndex(detail);
                newProducts.splice(productIndex, 1);
                break;
            }
        }
        return newProducts;
    }
    findProductIndex(productName) {
        return __classPrivateFieldGet(this, _ProductStore_products, "f").findIndex((product) => product.name === productName);
    }
    notifySubscribers(action) {
        __classPrivateFieldGet(this, _ProductStore_subscribers, "f").forEach((subscriber) => {
            subscriber.rerender(action);
        });
    }
    get products() {
        return __classPrivateFieldGet(this, _ProductStore_products, "f");
    }
}
_ProductStore_products = new WeakMap(), _ProductStore_subscribers = new WeakMap();
const ProductStoreInstance = new ProductStore();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductStoreInstance);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_AdministratorMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/AdministratorMenu */ "./src/elements/AdministratorMenu.js");
/* harmony import */ var _elements_ProductManage_ProductManageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/ProductManage/ProductManageContainer */ "./src/elements/ProductManage/ProductManageContainer.js");
/* harmony import */ var _elements_CoinCharge_CoinChargeContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/CoinCharge/CoinChargeContainer */ "./src/elements/CoinCharge/CoinChargeContainer.js");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router.js");






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map