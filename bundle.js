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
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "MONEY": () => (/* binding */ MONEY),
/* harmony export */   "PRODUCT": () => (/* binding */ PRODUCT),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "SNACKBAR": () => (/* binding */ SNACKBAR),
/* harmony export */   "PASSWORD": () => (/* binding */ PASSWORD),
/* harmony export */   "AUTH": () => (/* binding */ AUTH)
/* harmony export */ });
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
    MAX: 10000,
    PURCHASE_INPUT_MAX: 100000
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
  IS_OVER_MAX_MONEY: "\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC774 \uCD5C\uB300 \uBCF4\uC720 \uAC00\uB2A5 \uAE08\uC561\uC778 ".concat(MONEY.MAX.toLocaleString(), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC600\uC2B5\uB2C8\uB2E4! \uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC744 \uD655\uC778\uD55C \uD6C4 \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  IS_UNDER_PRODUCT_MIN_PRICE: "\uCD5C\uC18C \uC0C1\uD488 \uAC00\uACA9\uC778 ".concat(PRODUCT.PRICE.MIN, "\uC6D0 \uBBF8\uB9CC\uC73C\uB85C \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uC0C1\uD488\uC744 \uAD6C\uB9E4\uD558\uACE0 \uC2F6\uC73C\uC2DC\uBA74, ").concat(PRODUCT.PRICE.MIN, "\uC6D0 \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
  IS_OVER_PRODUCT_MAX_PRICE: "\uB3C8\uC740 \uD55C\uBC88\uC5D0 \uCD5C\uB300 ".concat(PRODUCT.PRICE.PURCHASE_INPUT_MAX.toLocaleString(), "\uB9CC\uD07C \uD22C\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.PRICE.PURCHASE_INPUT_MAX.toLocaleString(), "\uC6D0 \uC774\uD558\uB85C \uD22C\uC785\uD574\uC8FC\uC138\uC694!"),
  IS_OVER_MONEY_INPUT: "\uC0C1\uD488\uC758 \uAC00\uACA9\uC774 \uD22C\uC785\uB41C \uB3C8\uBCF4\uB2E4 \uB354 \uBE44\uC309\uB2C8\uB2E4. \uC0C1\uD488\uC744 \uAD6C\uB9E4\uD558\uACE0 \uC2F6\uC73C\uC2DC\uBA74, \uB3C8\uC744 \uB354 \uD22C\uC785\uD574\uC8FC\uC138\uC694.",
  IS_NOT_CORRECTED_PASSWORD: '비밀번호를 잘못 입력했습니다. 비밀번호는 최소 10자리 이상이며, 영어 대문자, 소문자, 숫자 중 최소 2종류를 조합해야합니다.',
  IS_NOT_MATCHED_PASSWORD: '비밀번호가 다릅니다. 비밀번호를 다시 확인하세요.'
};
var SNACKBAR = {
  PRODUCT_MODIFY_SUCCESS: '상품 정보가 정상적으로 수정되었습니다.',
  PRODUCT_DELETE_SUCCESS: '상품 정보가 정상적으로 삭제되었습니다.',
  PRODUCT_ADD_SUCCESS: '상품을 정상적으로 추가했습니다.',
  COIN_CHARGE_SUCCESS: '자판기의 잔돈이 정상적으로 충전되었습니다.',
  PURCHASE_MONEY_INPUT_SUCCESS: '금액이 정상적으로 투입되었습니다. 이제 상품을 구매할 수 있습니다.',
  RETURN_CHANGE_SUCCESS: '잔돈이 정상적으로 반환되었습니다.',
  SIGNUP_SUCCESS: '회원가입이 정상적으로 완료되었습니다.',
  LOGIN_SUCCESS: '로그인이 정상적으로 완료되었습니다.'
};
var PASSWORD = {
  MIN_LENGTH: 10,
  MIN_COMBINATION_COUNT: 2
};
var AUTH = {
  EMAIL_ALREADY_EXISTS: '이미 존재하는 이메일입니다. 이메일을 다시 확인해주세요.',
  CANNOT_FIND_USER: '해당 이메일로 가입된 계정이 없습니다. 이메일을 다시 확인해주세요.',
  INCORRECT_PASSWORD: '잘못된 비밀번호입니다. 비밀번호를 다시 확인해주세요.',
  PASSWORD_IS_TOO_SHORT: '비밀번호가 너무 짧습니다. 비밀번호는 최소 10자리 이상입니다.'
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
      return "\n      <nav>\n        <a href=\"#!product-manage\"><button class=\"nav__product-manage-button clicked\">\uC0C1\uD488 \uAD00\uB9AC</button></a>\n        <a href=\"#!coin-charge\"><button class=\"nav__coin-charge-button\">\uC794\uB3C8 \uCDA9\uC804</button></a>\n        <a href=\"#!product-purchase\"><button class=\"nav__product-purchase-button\">\uC0C1\uD488 \uAD6C\uB9E4</button></a>\n      </nav>\n    ";
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/showSnackbar */ "./src/utils/showSnackbar.js");
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

      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants__WEBPACK_IMPORTED_MODULE_5__.SNACKBAR.COIN_CHARGE_SUCCESS);

      _this.initCoinInput($coinInput);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.COIN_ACTION.COIN_CHARGE, coinInputValue);
    });

    return _this;
  }

  _createClass(CoinChargeForm, [{
    key: "template",
    value: function template() {
      return "\n      <form class=\"coin-charge-form\">\n        <label class=\"coin-charge-label\" for=\"coin-input\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <input type=\"number\" id=\"coin-input\" placeholder=\"\uAE08\uC561\" required>\n        <button class=\"coin-charge-button button\">\uCDA9\uC804</button>\n      </form>\n    ";
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/showSnackbar */ "./src/utils/showSnackbar.js");
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

      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants__WEBPACK_IMPORTED_MODULE_5__.SNACKBAR.PRODUCT_ADD_SUCCESS);

      _this.initProductInputs($productNameInput, $productPriceInput, $productQuantityInput);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.ADD, newProduct);
    });

    return _this;
  }

  _createClass(ProductAddForm, [{
    key: "template",
    value: function template() {
      return "\n      <form class=\"product-add-form\">\n        <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div class=\"product-input-container\">\n          <input class=\"product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" maxlength=\"10\" required>\n          <input type=\"number\" class=\"product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required>\n          <input type=\"number\" class=\"product-quantity-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required>\n          <button class=\"product-add-button button\">\uCD94\uAC00</button>\n        </div>\n      </form>\n    ";
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
/* harmony import */ var _utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/showSnackbar */ "./src/utils/showSnackbar.js");
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

    _defineProperty(_assertThisInitialized(_this), "updateProductQuantity", function ($tbodyRow) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('.product-quantity-td', $tbodyRow).textContent -= 1;
    });

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
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.DELETE, productName);
      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants__WEBPACK_IMPORTED_MODULE_5__.SNACKBAR.PRODUCT_DELETE_SUCCESS);
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
          {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)("[data-product-name=\"".concat(detail, "\"]")).remove();
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.PURCHASE:
          {
            var _$tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)("[data-product-name=\"".concat(detail, "\"]"));

            this.updateProductQuantity(_$tbodyRow);
          }
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
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_ACTION.MODIFY, {
        oldProductName: oldProductName,
        newProductInfo: newProductInfo
      });
      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants__WEBPACK_IMPORTED_MODULE_5__.SNACKBAR.PRODUCT_MODIFY_SUCCESS);
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

/***/ "./src/elements/ProductPurchase/ProductPurchaseContainer.js":
/*!******************************************************************!*\
  !*** ./src/elements/ProductPurchase/ProductPurchaseContainer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _PurchaseMoneyForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseMoneyForm */ "./src/elements/ProductPurchase/PurchaseMoneyForm.js");
/* harmony import */ var _PurchasePossibleProductSituation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchasePossibleProductSituation */ "./src/elements/ProductPurchase/PurchasePossibleProductSituation.js");
/* harmony import */ var _ProductReturnChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReturnChange */ "./src/elements/ProductPurchase/ProductReturnChange.js");
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






var ProductPurchaseContainer = /*#__PURE__*/function (_CustomElement) {
  _inherits(ProductPurchaseContainer, _CustomElement);

  var _super = _createSuper(ProductPurchaseContainer);

  function ProductPurchaseContainer() {
    _classCallCheck(this, ProductPurchaseContainer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductPurchaseContainer, [{
    key: "template",
    value: function template() {
      return "\n      <purchase-money-form></purchase-money-form>\n      <purchase-possible-product-situation></purchase-possible-product-situation>\n      <product-return-change></product-return-change>\n    ";
    }
  }]);

  return ProductPurchaseContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('product-purchase-container', ProductPurchaseContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPurchaseContainer);

/***/ }),

/***/ "./src/elements/ProductPurchase/ProductReturnChange.js":
/*!*************************************************************!*\
  !*** ./src/elements/ProductPurchase/ProductReturnChange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_showSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/showSnackbar */ "./src/utils/showSnackbar.js");
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








var ProductReturnChange = /*#__PURE__*/function (_CustomElement) {
  _inherits(ProductReturnChange, _CustomElement);

  var _super = _createSuper(ProductReturnChange);

  function ProductReturnChange() {
    var _this;

    _classCallCheck(this, ProductReturnChange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleReturnChangeButtonClick", function () {
      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_5__["default"])(_constants__WEBPACK_IMPORTED_MODULE_4__.SNACKBAR.RETURN_CHANGE_SUCCESS);
      var oldCoinsCount = _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_2__["default"].coinsCount;
      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_2__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_3__.COIN_ACTION.RETURN_CHANGE, oldCoinsCount);
    });

    return _this;
  }

  _createClass(ProductReturnChange, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ProductReturnChange.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uC794\uB3C8 \uBC18\uD658</h2>\n      <table class=\"product-return-change-situation\">\n        <thead>\n          <tr>\n            <th>\uB3D9\uC804</th>\n            <th>\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>500\uC6D0</td>\n            <td class=\"change-500-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>100\uC6D0</td>\n            <td class=\"change-100-count-td\">0\uAC1C</td>\n          </tr>\n          </tr>\n          <tr>\n            <td>50\uC6D0</td>\n            <td class=\"change-50-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>10\uC6D0</td>\n            <td class=\"change-10-count-td\">0\uAC1C</td>\n          </tr>\n        </tbody>\n      </table>\n      <button class=\"product-return-change-button\">\uBC18\uD658</button>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.product-return-change-button').addEventListener('click', this.handleReturnChangeButtonClick);
    }
  }, {
    key: "rerender",
    value: function rerender(newCoinsCount, action) {
      if (action.type !== _domains_actions__WEBPACK_IMPORTED_MODULE_3__.COIN_ACTION.RETURN_CHANGE) return;
      var oldCoinsCount = action.detail;
      var returnCoinCount = {
        500: oldCoinsCount[500] - newCoinsCount[500],
        100: oldCoinsCount[100] - newCoinsCount[100],
        50: oldCoinsCount[50] - newCoinsCount[50],
        10: oldCoinsCount[10] - newCoinsCount[10]
      };
      var $productReturnChangeTable = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.product-return-change-situation');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.change-500-count-td', $productReturnChangeTable).textContent = "".concat(returnCoinCount[500], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.change-100-count-td', $productReturnChangeTable).textContent = "".concat(returnCoinCount[100], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.change-50-count-td', $productReturnChangeTable).textContent = "".concat(returnCoinCount[50], "\uAC1C");
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.change-10-count-td', $productReturnChangeTable).textContent = "".concat(returnCoinCount[10], "\uAC1C");
    }
  }]);

  return ProductReturnChange;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('product-return-change', ProductReturnChange);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReturnChange);

/***/ }),

/***/ "./src/elements/ProductPurchase/PurchaseMoneyForm.js":
/*!***********************************************************!*\
  !*** ./src/elements/ProductPurchase/PurchaseMoneyForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/showSnackbar */ "./src/utils/showSnackbar.js");
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









var PurchaseMoneyForm = /*#__PURE__*/function (_CustomElement) {
  _inherits(PurchaseMoneyForm, _CustomElement);

  var _super = _createSuper(PurchaseMoneyForm);

  function PurchaseMoneyForm() {
    var _this;

    _classCallCheck(this, PurchaseMoneyForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handlePurchaseMoneyButtonSubmit", function (event) {
      event.preventDefault();
      var $purchaseMoneyInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-money-input');
      var purchaseMoneyInputValue = $purchaseMoneyInput.valueAsNumber;

      try {
        (0,_validators__WEBPACK_IMPORTED_MODULE_2__.checkPurchaseMoneyValidation)(purchaseMoneyInputValue);
      } catch (error) {
        alert(error.message);
        return;
      }

      (0,_utils_showSnackbar__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants__WEBPACK_IMPORTED_MODULE_5__.SNACKBAR.PURCHASE_MONEY_INPUT_SUCCESS);

      _this.initPurchaseMoneyInput($purchaseMoneyInput);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_3__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_4__.COIN_ACTION.PURCHASE_MONEY_INPUT, purchaseMoneyInputValue);
    });

    return _this;
  }

  _createClass(PurchaseMoneyForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(PurchaseMoneyForm.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <form class=\"purchase-money-form\">\n        <label class=\"purchase-money-label\" for=\"purchase-money-input\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694.</label>\n        <input type=\"number\" id=\"purchase-money-input\" placeholder=\"\uAE08\uC561\" required>\n        <button class=\"purchase-money-button button\">\uD22C\uC785</button>\n      </form>\n      <p>\uD22C\uC785\uD55C \uAE08\uC561: <span class=\"purchase-money\">0</span>\uC6D0</p>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.purchase-money-form').addEventListener('submit', this.handlePurchaseMoneyButtonSubmit);
    }
  }, {
    key: "initPurchaseMoneyInput",
    value: function initPurchaseMoneyInput($purchaseMoneyInput) {
      $purchaseMoneyInput.value = '';
      $purchaseMoneyInput.focus();
    }
  }, {
    key: "rerender",
    value: function rerender(newCoinsCount) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.purchase-money').textContent = newCoinsCount.money_input;
    }
  }]);

  return PurchaseMoneyForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_1__["default"]);

customElements.define('purchase-money-form', PurchaseMoneyForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseMoneyForm);

/***/ }),

/***/ "./src/elements/ProductPurchase/PurchasePossibleProductSituation.js":
/*!**************************************************************************!*\
  !*** ./src/elements/ProductPurchase/PurchasePossibleProductSituation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
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








var PurchasePossibleProductSituation = /*#__PURE__*/function (_CustomElement) {
  _inherits(PurchasePossibleProductSituation, _CustomElement);

  var _super = _createSuper(PurchasePossibleProductSituation);

  function PurchasePossibleProductSituation() {
    var _this;

    _classCallCheck(this, PurchasePossibleProductSituation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "updateProductQuantity", function ($tbodyRow, detail) {
      var $productQuantityTd = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-quantity-td', $tbodyRow);
      $productQuantityTd.textContent -= 1;

      if (Number($productQuantityTd.textContent) === 0) {
        _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.DELETE, detail);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleProductPurchaseButtonClick", function ($tbodyRow) {
      var moneyInput = _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_5__["default"].coinsCount.money_input;
      var productPrice = Number((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-price-td', $tbodyRow).textContent);
      var purchaseProductName = $tbodyRow.dataset.purchaseProductName; // 상품을 살 수 있는지 체크

      try {
        (0,_validators__WEBPACK_IMPORTED_MODULE_4__.checkCanPurchaseValidation)(moneyInput, productPrice);
      } catch (error) {
        alert(error.message);
        return;
      } // 수량 -1에 대한 액션


      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.PURCHASE, purchaseProductName); // 투입한 금액 업데이트에 대한 액션

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_5__["default"].dispatchAction(_domains_actions__WEBPACK_IMPORTED_MODULE_3__.COIN_ACTION.UPDATE_MONEY_INPUT, productPrice);
    });

    return _this;
  }

  _createClass(PurchasePossibleProductSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(PurchasePossibleProductSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669</h2>\n      <div class=\"purchase-possible-product-container\">\n        <table class=\"purchase-possible-product-situation\">\n          <thead>\n            <tr>\n              <th>\uC0C1\uD488\uBA85</th>\n              <th>\uAC00\uACA9</th>\n              <th>\uC218\uB7C9</th>\n              <th>\uAD6C\uB9E4</th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n    ";
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var type = _ref.type,
          detail = _ref.detail;

      switch (type) {
        case _domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.ADD:
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('tbody', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.purchase-possible-product-situation')).insertAdjacentHTML('beforeend', this.tableBodyRowTemplate(detail));
          this.setEventAfterRerender(detail.name);
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.MODIFY:
          {
            var oldProductName = detail.oldProductName,
                newProductInfo = detail.newProductInfo;
            var $tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)("[data-purchase-product-name=\"".concat(oldProductName, "\"]"));
            $tbodyRow.dataset.purchaseProductName = newProductInfo.name;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-name-td', $tbodyRow).textContent = newProductInfo.name;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-price-td', $tbodyRow).textContent = newProductInfo.price;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-quantity-td', $tbodyRow).textContent = newProductInfo.quantity;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-manage-buttons-td', $tbodyRow).replaceChildren();
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.product-manage-buttons-td', $tbodyRow).insertAdjacentHTML('beforeend', "<button class=\"table__product-purchase-button\">\uAD6C\uB9E4</button>");
            this.setEventAfterRerender(newProductInfo.name);
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.DELETE:
          {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)("[data-purchase-product-name=\"".concat(detail, "\"]")).remove();
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ACTION.PURCHASE:
          {
            var _$tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)("[data-purchase-product-name=\"".concat(detail, "\"]"));

            this.updateProductQuantity(_$tbodyRow, detail);
          }
      }
    }
  }, {
    key: "tableBodyRowTemplate",
    value: function tableBodyRowTemplate(_ref2) {
      var name = _ref2.name,
          price = _ref2.price,
          quantity = _ref2.quantity;
      return " \n      <tr data-purchase-product-name=\"".concat(name, "\">\n        <td class=\"product-name-td\">").concat(name, "</td> \n        <td class=\"product-price-td\">").concat(price, "</td>\n        <td class=\"product-quantity-td\">").concat(quantity, "</td>\n        <td class=\"product-manage-buttons-td\">\n          <button class=\"table__product-purchase-button\">\uAD6C\uB9E4</button>\n        </td>\n      </tr>\n    ");
    }
  }, {
    key: "setEventAfterRerender",
    value: function setEventAfterRerender(productName) {
      var _this2 = this;

      var $tbodyRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)("[data-purchase-product-name=\"".concat(productName, "\"]"));
      $tbodyRow.scrollIntoView();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)('.table__product-purchase-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductPurchaseButtonClick($tbodyRow);
      });
    }
  }]);

  return PurchasePossibleProductSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('purchase-possible-product-situation', PurchasePossibleProductSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchasePossibleProductSituation);

/***/ }),

/***/ "./src/elements/UserManager/LoginContainer.js":
/*!****************************************************!*\
  !*** ./src/elements/UserManager/LoginContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.js");
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





var LoginContainer = /*#__PURE__*/function (_CustomElement) {
  _inherits(LoginContainer, _CustomElement);

  var _super = _createSuper(LoginContainer);

  function LoginContainer() {
    var _this;

    _classCallCheck(this, LoginContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleLoginFormSubmit", function (event) {
      event.preventDefault();
      var emailInputValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#email-input').value;
      var passwordInputValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#password-input').value;
      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.login)(emailInputValue, passwordInputValue);
    });

    return _this;
  }

  _createClass(LoginContainer, [{
    key: "template",
    value: function template() {
      return "\n      <h1>\uB85C\uADF8\uC778</h1>\n      <form class=\"login-form\">\n        <label for=\"email-input\">\uC774\uBA54\uC77C</label>\n        <input type=\"email\" id=\"email-input\" class=\"long-input\" placeholder=\"woowacourse@gmail.com\" required>\n        <label class=\"password-input\" for=\"password-input\">\uBE44\uBC00\uBC88\uD638</label>\n        <input type=\"password\" id=\"password-input\" class=\"long-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n        <button class=\"login-confirm-button button\">\uD655\uC778</button>\n      </form>\n      <div class=\"signup-suggest-container\">\n        <span class=\"signup-text\">\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?</span>\n        <a href=\"#!signup\" class=\"signup\">\uD68C\uC6D0\uAC00\uC785</a>    \n      </div>  \n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.login-form').addEventListener('submit', this.handleLoginFormSubmit);
    }
  }]);

  return LoginContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('login-container', LoginContainer);

/***/ }),

/***/ "./src/elements/UserManager/SignupContainer.js":
/*!*****************************************************!*\
  !*** ./src/elements/UserManager/SignupContainer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.js");
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






var SignupContainer = /*#__PURE__*/function (_CustomElement) {
  _inherits(SignupContainer, _CustomElement);

  var _super = _createSuper(SignupContainer);

  function SignupContainer() {
    var _this;

    _classCallCheck(this, SignupContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleSignupFormSubmit", function (event) {
      event.preventDefault();
      var emailInputValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#signup-email-input').value;
      var nameInputValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#signup-name-input').value;
      var passwordInputValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#signup-password-input').value;
      var passwordConfirmValue = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#password-confirm-input').value;
      var newUserInfo = {
        email: emailInputValue,
        name: nameInputValue,
        password: passwordInputValue,
        passwordConfirm: passwordConfirmValue
      };

      try {
        (0,_validators__WEBPACK_IMPORTED_MODULE_2__.checkNewUserInfoValidation)(newUserInfo);
      } catch (error) {
        alert(error.message);
        return;
      }

      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.signup)(emailInputValue, nameInputValue, passwordInputValue);
    });

    return _this;
  }

  _createClass(SignupContainer, [{
    key: "template",
    value: function template() {
      return "\n      <h1>\uD68C\uC6D0 \uAC00\uC785</h1>\n      <form class=\"signup-form\">\n        <label for=\"signup-email-input\">\uC774\uBA54\uC77C</label>\n        <input type=\"email\" id=\"signup-email-input\" class=\"long-input\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n\n        <label for=\"signup-name-input\">\uC774\uB984</label>\n        <input type=\"text\" id=\"signup-name-input\" class=\"long-input\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" minlength=\"2\" maxLength=\"6\" required>\n        \n        <label for=\"signup-password-input\">\uBE44\uBC00\uBC88\uD638</label>\n        <input type=\"password\" id=\"signup-password-input\" class=\"long-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n\n        <label for=\"password-confirm-input\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n        <input type=\"password\" id=\"password-confirm-input\" class=\"long-input\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uD55C\uBC88 \uB354 \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n\n        <button class=\"signup-confirm-button button\">\uD655\uC778</button>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.signup-form').addEventListener('submit', this.handleSignupFormSubmit);
    }
  }]);

  return SignupContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('signup-container', SignupContainer);

/***/ }),

/***/ "./src/elements/UserManager/UserManager.js":
/*!*************************************************!*\
  !*** ./src/elements/UserManager/UserManager.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.js");
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





var UserManager = /*#__PURE__*/function (_CustomElement) {
  _inherits(UserManager, _CustomElement);

  var _super = _createSuper(UserManager);

  function UserManager() {
    var _this;

    _classCallCheck(this, UserManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderLoginManager", function () {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.login-manager').classList.remove('hidden');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.profile-manager').classList.add('hidden');
    });

    _defineProperty(_assertThisInitialized(_this), "handleProfileButtonClick", function () {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.profile-manager-menu').classList.toggle('hidden');
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogoutClick", function () {
      _this.renderLoginManager();

      (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.logout)();
    });

    return _this;
  }

  _createClass(UserManager, [{
    key: "template",
    value: function template() {
      return "\n      <a href=\"#!login\" class=\"login-manager hidden\"><button class=\"login-button\">\uB85C\uADF8\uC778</button></a>\n      <div class=\"profile-manager hidden\">\n        <button class=\"profile-button\"></button>\n        <ul class=\"profile-manager-menu hidden\">\n          <li class=\"info-modify\"><a href=\"#!info-modify\">\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</a></li>\n          <li class=\"logout\">\uB85C\uADF8\uC544\uC6C3</li>\n        </ul>\n      </div>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.profile-button').addEventListener('click', this.handleProfileButtonClick);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('.logout').addEventListener('click', this.handleLogoutClick);
    }
  }]);

  return UserManager;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

customElements.define('user-manager', UserManager);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateUserInfo": () => (/* binding */ updateUserInfo),
/* harmony export */   "renderManagerView": () => (/* binding */ renderManagerView),
/* harmony export */   "renderUserView": () => (/* binding */ renderUserView)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.js");

var $administratorMenu = document.querySelector('administrator-menu');
var $userManagerContainer = document.querySelector('#user-manager-container');
var $userMenuContainer = document.querySelector('#user-menu-container');
var $nav = document.querySelector('nav');
var $productManageContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('product-manage-container');
var $coinChargeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('coin-charge-container');
var $productPurchaseContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('product-purchase-container');
var $loginContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('login-container');
var $signupContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('signup-container');
var $app = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#app');
var routes = [{
  hash: '#!product-manage',
  target: $productManageContainer,
  isLongApp: false
}, {
  hash: '#!coin-charge',
  target: $coinChargeContainer,
  isLongApp: false
}, {
  hash: '#!product-purchase',
  target: $productPurchaseContainer,
  isLongApp: true
}];
var routesAuth = [{
  hash: '#!signup',
  target: $signupContainer,
  isLongApp: false
}, {
  hash: '#!login',
  target: $loginContainer,
  isLongApp: false
}];

var moveToPage = function moveToPage(pageHash) {
  window.location.replace(pageHash);
};

var renderAppHeight = function renderAppHeight(isLongApp) {
  if (isLongApp) {
    $app.classList.remove('short-app');
    $app.classList.add('long-app');
    return;
  }

  $app.classList.add('short-app');
  $app.classList.remove('long-app');
};

var renderAuthContainer = function renderAuthContainer(currentHash) {
  $userManagerContainer.removeAttribute('hidden');
  routesAuth.forEach(function (_ref) {
    var hash = _ref.hash,
        target = _ref.target,
        isLongApp = _ref.isLongApp;

    if (currentHash === hash) {
      target.show();
      renderAppHeight(isLongApp);
      $userMenuContainer.setAttribute('hidden', true);
      return;
    }

    target.hide();
  });
};

var renderTargetContainer = function renderTargetContainer(currentHash) {
  // user-manager-container
  if (currentHash === '#!signup' || currentHash === '#!login') {
    renderAuthContainer(currentHash);
    return;
  } // user-menu-container


  $userManagerContainer.setAttribute('hidden', true);
  $userMenuContainer.removeAttribute('hidden');
  routes.forEach(function (_ref2) {
    var hash = _ref2.hash,
        target = _ref2.target,
        isLongApp = _ref2.isLongApp;
    var $menu = $nav.querySelector("[href='".concat(hash, "']"));

    if (currentHash === hash) {
      target.show();
      $menu.querySelector('button').classList.add('clicked');
      target.querySelector('input').focus();
      renderAppHeight(isLongApp);
      return;
    }

    $app.classList.remove('long-app');
    target.hide();
    $menu.querySelector('button').classList.remove('clicked');
  });
};

var renderUpdatedUserInfo = function renderUpdatedUserInfo(response) {
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.profile-button').textContent = response.name.substring(0, 1);
};

var updateUserInfo = function updateUserInfo() {
  var userAuth = JSON.parse(localStorage.getItem('userAuth'));
  var id = userAuth.id;
  var accessToken = "Bearer ".concat(userAuth.accessToken);
  var url = "http://localhost:3000/600/users/".concat(id);
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    }
  }).then(function (res) {
    if (!res.ok) {
      throw Error('잘못된 접근입니다. 로그인이 되어있는지 확인하세요.');
    }

    return res.json();
  }).then(function (response) {
    return renderUpdatedUserInfo(response);
  })["catch"](function (error) {
    return alert(error);
  });
};
var renderManagerView = function renderManagerView() {
  var currentHash = window.location.hash;

  if (currentHash === '#!product-manage') {
    renderTargetContainer(currentHash);
  }

  if (currentHash !== '#!product-manage') {
    moveToPage('#!product-manage');
  }

  $administratorMenu.show();
  updateUserInfo();

  window.onload = function () {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.login-manager').classList.add('hidden');
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.profile-manager').classList.remove('hidden');
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.profile-manager-menu').classList.add('hidden');
  };
};
var renderUserView = function renderUserView() {
  var currentHash = window.location.hash;

  if (currentHash === '#!product-purchase') {
    renderTargetContainer(currentHash);
  }

  if (currentHash !== '#!product-purchase') {
    moveToPage('#!product-purchase');
  }

  $administratorMenu.hide();
  window.addEventListener('DOMContentLoaded', function () {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.login-manager').classList.remove('hidden');
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.profile-manager').classList.add('hidden');
  });
};

var renderInitContainer = function renderInitContainer() {
  if (JSON.parse(localStorage.getItem('userAuth'))) {
    renderManagerView();
    return;
  }

  renderUserView();
};

window.addEventListener('hashchange', function () {
  var currentHash = window.location.hash;
  renderTargetContainer(currentHash);
});
renderInitContainer();

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./src/router.js");
/* harmony import */ var _showSnackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showSnackbar */ "./src/utils/showSnackbar.js");




var setLoginedUser = function setLoginedUser(userInfo) {
  localStorage.setItem('userAuth', JSON.stringify(userInfo));
};

var signup = function signup(email, name, password) {
  var url = 'http://localhost:3000/signup/';
  var userInfo = {
    email: email,
    name: name,
    password: password
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    if (!res.ok) {
      return res.text().then(function (text) {
        throw new Error(text);
      });
    }

    return res.json();
  }).then(function (response) {
    var userAuth = {
      accessToken: response.accessToken,
      email: response.user.email,
      id: response.user.id
    };
    setLoginedUser(userAuth);
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.renderManagerView)();
    (0,_showSnackbar__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR.SIGNUP_SUCCESS);
  })["catch"](function (error) {
    if (error.message === '"Email already exists"') {
      alert(_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH.EMAIL_ALREADY_EXISTS);
    }
  });
};
var login = function login(email, password) {
  var url = 'http://localhost:3000/login/';
  var userInfo = {
    email: email,
    password: password
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    if (!res.ok) {
      return res.text().then(function (text) {
        throw new Error(text);
      });
    }

    return res.json();
  }).then(function (response) {
    var userAuth = {
      accessToken: response.accessToken,
      id: response.user.id
    };
    setLoginedUser(userAuth);
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.renderManagerView)();
    (0,_showSnackbar__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR.LOGIN_SUCCESS);
  })["catch"](function (error) {
    if (error.message === '"Cannot find user"') {
      alert(_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH.CANNOT_FIND_USER);
    }

    if (error.message === '"Incorrect password"') {
      alert(_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH.INCORRECT_PASSWORD);
    }

    if (error.message === '"Password is too short"') {
      alert(_constants__WEBPACK_IMPORTED_MODULE_0__.AUTH.PASSWORD_IS_TOO_SHORT);
    }
  });
};
var logout = function logout() {
  localStorage.removeItem('userAuth');
  (0,_router__WEBPACK_IMPORTED_MODULE_1__.renderUserView)();
};

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

/***/ "./src/utils/showSnackbar.js":
/*!***********************************!*\
  !*** ./src/utils/showSnackbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");


var showSnackbar = function showSnackbar(message) {
  var $snackbar = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#snackbar');
  $snackbar.textContent = message;
  $snackbar.classList.toggle('show');
  setTimeout(function () {
    $snackbar.classList.toggle('show');
  }, 3000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSnackbar);

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
/* harmony export */   "checkCoinValidation": () => (/* binding */ checkCoinValidation),
/* harmony export */   "checkPurchaseMoneyValidation": () => (/* binding */ checkPurchaseMoneyValidation),
/* harmony export */   "checkCanPurchaseValidation": () => (/* binding */ checkCanPurchaseValidation),
/* harmony export */   "checkNewUserInfoValidation": () => (/* binding */ checkNewUserInfoValidation)
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

var isOverPurchaseInputMaxPrice = function isOverPurchaseInputMaxPrice(price) {
  return price > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.PRICE.PURCHASE_INPUT_MAX;
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

var isProductPriceMoreExpensive = function isProductPriceMoreExpensive(moneyInput, productPrice) {
  return productPrice > moneyInput;
};

var isUnderMinPasswordLength = function isUnderMinPasswordLength(password) {
  return password.length < _constants__WEBPACK_IMPORTED_MODULE_2__.PASSWORD.MIN_LENGTH;
};

var isUnderMinCombinationCount = function isUnderMinCombinationCount(password) {
  var upperCaseCount = 0;
  var lowerCaseCount = 0;
  var numberCount = 0;

  if (password.match(/[A-Z]/g)) {
    upperCaseCount += 1;
  }

  if (password.match(/[a-z]/g)) {
    lowerCaseCount += 1;
  }

  if (password.match(/[0-9]/g)) {
    numberCount += 1;
  }

  return upperCaseCount + lowerCaseCount + numberCount < _constants__WEBPACK_IMPORTED_MODULE_2__.PASSWORD.MIN_COMBINATION_COUNT;
};

var isNotCorrectedPassword = function isNotCorrectedPassword(password) {
  return isUnderMinPasswordLength(password) || isUnderMinCombinationCount(password);
};

var isNotMatchedPassword = function isNotMatchedPassword(password, passwordConfirm) {
  return password !== passwordConfirm;
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
var checkPurchaseMoneyValidation = function checkPurchaseMoneyValidation(purchaseMoneyInputValue) {
  if (isUnderMinPrice(purchaseMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_UNDER_PRODUCT_MIN_PRICE);
  }

  if (isOverPurchaseInputMaxPrice(purchaseMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_PRODUCT_MAX_PRICE);
  }

  if (cannotDividedByTen(purchaseMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.MONEY_CANNOT_DIVIDED_BY_TEN);
  }
};
var checkCanPurchaseValidation = function checkCanPurchaseValidation(moneyInput, productPrice) {
  if (isProductPriceMoreExpensive(moneyInput, productPrice)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_OVER_MONEY_INPUT);
  }
};
var checkNewUserInfoValidation = function checkNewUserInfoValidation(_ref2) {
  var email = _ref2.email,
      name = _ref2.name,
      password = _ref2.password,
      passwordConfirm = _ref2.passwordConfirm;

  if (isNotCorrectedPassword(password)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_NOT_CORRECTED_PASSWORD);
  }

  if (isNotMatchedPassword(password, passwordConfirm)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.IS_NOT_MATCHED_PASSWORD);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: var(--gray-500);\n  margin-top: 32px;\n  font-size: 16px;\n}\n\n#app {\n  position: relative;\n  width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\nuser-manager {\n  position: absolute;\n  top: 12px;\n  right: 11px;\n}\n\n.profile-manager-menu {\n  position: absolute;\n  right: 0;\n  width: 130px;\n  display: block;\n  list-style-type: none;\n  background-color: var(--gray-700);\n  border-radius: 4px;\n}\n.profile-manager-menu a {\n  color: black;\n  text-decoration: none;\n}\n\n.profile-manager-menu li {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.profile-manager-menu li:hover {\n  background-color: var(--gray-800);\n  border-radius: 4px;\n}\n\n.long-app {\n  height: 906px;\n}\n\n.short-app {\n  height: 675px;\n}\n\nh1 {\n  text-align: center;\n  margin: 44px 0 32px;\n  font-size: 34px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button,\n.login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.profile-button {\n  width: 40px;\n  height: 40px;\n  background: var(--cyan-light);\n  border-radius: 50%;\n}\n\n.profile-button:hover {\n  background: var(--cyan-hover);\n}\n\n.clicked {\n  background: var(--cyan-medium);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-medium);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,iCAAiC;EACjC,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;;EAIE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  background: var(--gray-500);\n  margin-top: 32px;\n  font-size: 16px;\n}\n\n#app {\n  position: relative;\n  width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\nuser-manager {\n  position: absolute;\n  top: 12px;\n  right: 11px;\n}\n\n.profile-manager-menu {\n  position: absolute;\n  right: 0;\n  width: 130px;\n  display: block;\n  list-style-type: none;\n  background-color: var(--gray-700);\n  border-radius: 4px;\n}\n.profile-manager-menu a {\n  color: black;\n  text-decoration: none;\n}\n\n.profile-manager-menu li {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.profile-manager-menu li:hover {\n  background-color: var(--gray-800);\n  border-radius: 4px;\n}\n\n.long-app {\n  height: 906px;\n}\n\n.short-app {\n  height: 675px;\n}\n\nh1 {\n  text-align: center;\n  margin: 44px 0 32px;\n  font-size: 34px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button,\n.login-button {\n  width: 117px;\n  height: 36px;\n}\n\n.profile-button {\n  width: 40px;\n  height: 40px;\n  background: var(--cyan-light);\n  border-radius: 50%;\n}\n\n.profile-button:hover {\n  background: var(--cyan-hover);\n}\n\n.clicked {\n  background: var(--cyan-medium);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-medium);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".product-input-container {\n  margin-top: 4px;\n}\n\n#user-manager-container {\n  width: 300px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.button {\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.button:hover {\n  background: var(--cyan-dark);\n}\n\n.product-add-button,\n.coin-charge-button,\n.purchase-money-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n}\n\n.login-confirm-button,\n.signup-confirm-button {\n  width: 300px;\n  height: 36px;\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  overflow-y: auto;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button,\n.product-return-change-button,\n.table__product-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.product-return-change-button {\n  display: block;\n  margin: 16px auto 0;\n}\n\nlabel {\n  display: block;\n  margin: 16px 0 4px;\n}\n\n#coin-input,\n#purchase-money-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation,\n.product-return-change-situation {\n  width: 238px;\n}\n\n.long-input {\n  width: 300px;\n  height: 36px;\n  border-radius: 4px;\n}\n\n.login-form {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.password-label {\n  margin-top: 16px;\n}\n\n.login-confirm-button,\n.signup-confirm-button {\n  margin-top: 30px;\n}\n\n.signup-suggest-container {\n  margin-top: 14px;\n}\n\n.signup {\n  color: var(--blue-text);\n  text-decoration: none;\n}\n\n#snackbar {\n  visibility: hidden;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;;EAEE,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":[".product-input-container {\n  margin-top: 4px;\n}\n\n#user-manager-container {\n  width: 300px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.button {\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.button:hover {\n  background: var(--cyan-dark);\n}\n\n.product-add-button,\n.coin-charge-button,\n.purchase-money-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n}\n\n.login-confirm-button,\n.signup-confirm-button {\n  width: 300px;\n  height: 36px;\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  overflow-y: auto;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button,\n.product-return-change-button,\n.table__product-purchase-button {\n  width: 100px;\n  height: 32px;\n}\n\n.product-return-change-button {\n  display: block;\n  margin: 16px auto 0;\n}\n\nlabel {\n  display: block;\n  margin: 16px 0 4px;\n}\n\n#coin-input,\n#purchase-money-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation,\n.product-return-change-situation {\n  width: 238px;\n}\n\n.long-input {\n  width: 300px;\n  height: 36px;\n  border-radius: 4px;\n}\n\n.login-form {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.password-label {\n  margin-top: 16px;\n}\n\n.login-confirm-button,\n.signup-confirm-button {\n  margin-top: 30px;\n}\n\n.signup-suggest-container {\n  margin-top: 14px;\n}\n\n.signup {\n  color: var(--blue-text);\n  text-decoration: none;\n}\n\n#snackbar {\n  visibility: hidden;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-medium: rgba(0, 188, 212, 0.16);\n  --cyan-light: #d6f4f8;\n  --cyan-hover: rgb(193, 240, 247);\n\n  --gray-800: #dddbdb;\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n\n  --blue-text: #3581d7;\n}\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,eAAe;EACf,sCAAsC;EACtC,qBAAqB;EACrB,gCAAgC;;EAEhC,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,6BAA6B;EAC7B,uBAAuB;EACvB,uBAAuB;;EAEvB,oBAAoB;AACtB","sourcesContent":[":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-medium: rgba(0, 188, 212, 0.16);\n  --cyan-light: #d6f4f8;\n  --cyan-hover: rgb(193, 240, 247);\n\n  --gray-800: #dddbdb;\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n\n  --blue-text: #3581d7;\n}\n"],"sourceRoot":""}]);
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
    PURCHASE: 'product-purchase',
};
const COIN_ACTION = {
    COIN_CHARGE: 'coin-charge',
    PURCHASE_MONEY_INPUT: 'purchase-money-input',
    UPDATE_MONEY_INPUT: 'update-money-input',
    RETURN_CHANGE: 'return-coin-change',
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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/domains/actions.ts");
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
            money_input: _constants__WEBPACK_IMPORTED_MODULE_0__.MONEY.DEFAULT,
        });
        _CoinStore_subscribers.set(this, []);
    }
    subscribe(element) {
        __classPrivateFieldGet(this, _CoinStore_subscribers, "f").push(element);
    }
    dispatchAction(actionType, detail) {
        const action = (0,_actions__WEBPACK_IMPORTED_MODULE_2__.createAction)(actionType, detail);
        switch (actionType) {
            case _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.COIN_CHARGE: {
                this.updateCoinsCount(action);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.PURCHASE_MONEY_INPUT: {
                this.updatePurchaseMoneyInput(action);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.UPDATE_MONEY_INPUT: {
                this.updatePurchaseMoneyInput(action);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.RETURN_CHANGE: {
                this.returnChange();
                break;
            }
        }
        this.notifySubscribers(action);
    }
    returnChange() {
        const coinKind = [500, 100, 50, 10];
        const coinCurrentSituation = [
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f")[500],
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f")[100],
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f")[50],
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f")[10],
        ];
        let moneyInput = __classPrivateFieldGet(this, _CoinStore_coinsCount, "f").money_input;
        let holdingMoneySum = __classPrivateFieldGet(this, _CoinStore_coinsCount, "f").sum;
        coinKind.forEach((coin, idx) => {
            const needCount = Math.floor(moneyInput / coin);
            if (needCount > coinCurrentSituation[idx]) {
                moneyInput -= coin * coinCurrentSituation[idx];
                holdingMoneySum -= coin * coinCurrentSituation[idx];
                coinCurrentSituation[idx] = 0;
            }
            else if (needCount <= coinCurrentSituation[idx]) {
                moneyInput -= coin * needCount;
                holdingMoneySum -= coin * needCount;
                coinCurrentSituation[idx] -= needCount;
            }
        });
        this.updateCoinsCountAfterReturnChange(coinCurrentSituation, holdingMoneySum, moneyInput);
    }
    updateCoinsCountAfterReturnChange(coinCurrentSituation, holdingMoneySum, moneyInput) {
        __classPrivateFieldSet(this, _CoinStore_coinsCount, {
            500: coinCurrentSituation[0],
            100: coinCurrentSituation[1],
            50: coinCurrentSituation[2],
            10: coinCurrentSituation[3],
            sum: holdingMoneySum,
            money_input: moneyInput,
        }, "f");
    }
    updatePurchaseMoneyInput(action) {
        const { type, detail } = action;
        if (type === _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.PURCHASE_MONEY_INPUT) {
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f").money_input += detail;
        }
        if (type === _actions__WEBPACK_IMPORTED_MODULE_2__.COIN_ACTION.UPDATE_MONEY_INPUT) {
            __classPrivateFieldGet(this, _CoinStore_coinsCount, "f").money_input -= detail;
        }
    }
    updateCoinsCount(action) {
        const { detail } = action;
        __classPrivateFieldSet(this, _CoinStore_coinsCount, this.generateRandomCoins(__classPrivateFieldGet(this, _CoinStore_coinsCount, "f"), detail), "f");
    }
    generateRandomCoins(oldCoinsCount, detail) {
        const newCoinsCount = oldCoinsCount;
        let coinList = [500, 100, 50, 10];
        let money = detail;
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
    notifySubscribers(action) {
        __classPrivateFieldGet(this, _CoinStore_subscribers, "f").forEach((subscriber) => {
            subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_coinsCount, "f"), action);
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
    dispatchAction(actionType, detail) {
        const action = (0,_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(actionType, detail);
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
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.PURCHASE: {
                const productIndex = this.findProductIndex(detail);
                newProducts[productIndex].quantity -= 1;
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
/* harmony import */ var _elements_ProductPurchase_ProductPurchaseContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/ProductPurchase/ProductPurchaseContainer */ "./src/elements/ProductPurchase/ProductPurchaseContainer.js");
/* harmony import */ var _elements_UserManager_UserManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/UserManager/UserManager */ "./src/elements/UserManager/UserManager.js");
/* harmony import */ var _elements_UserManager_LoginContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/UserManager/LoginContainer */ "./src/elements/UserManager/LoginContainer.js");
/* harmony import */ var _elements_UserManager_SignupContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/UserManager/SignupContainer */ "./src/elements/UserManager/SignupContainer.js");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ "./src/router.js");










})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map