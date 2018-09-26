(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("fusioncharts"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "fusioncharts"], factory);
	else if(typeof exports === 'object')
		exports["DrillDown"] = factory(require("react"), require("fusioncharts"));
	else
		root["DrillDown"] = factory(root["React"], root["FusionCharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _DrillDown = __webpack_require__(1);

	var _DrillDown2 = _interopRequireDefault(_DrillDown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _DrillDown2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ReactFC = __webpack_require__(10);

	var _ReactFC2 = _interopRequireDefault(_ReactFC);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DrillDown = function (_React$Component) {
	  _inherits(DrillDown, _React$Component);

	  _createClass(DrillDown, null, [{
	    key: 'fcRoot',

	    // Resolve FusionCharts
	    value: function fcRoot(core) {
	      for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        modules[_key - 1] = arguments[_key];
	      }

	      _ReactFC2.default.fcRoot.apply(_ReactFC2.default, [core].concat(modules));
	    }
	  }]);

	  function DrillDown(props) {
	    var _this$defButtonStyle;

	    _classCallCheck(this, DrillDown);

	    var _this = _possibleConstructorReturn(this, (DrillDown.__proto__ || Object.getPrototypeOf(DrillDown)).call(this, props));

	    var btnConfig = props.btnConfig,
	        btnStyle = props.btnStyle;

	    _this.finalBtnConfig = Object.assign({}, DrillDown.defaultProps.btnConfig, btnConfig);

	    var _this$finalBtnConfig$ = _this.finalBtnConfig.placement.split('-');

	    var _this$finalBtnConfig$2 = _slicedToArray(_this$finalBtnConfig$, 2);

	    _this.positionV = _this$finalBtnConfig$2[0];
	    _this.positionH = _this$finalBtnConfig$2[1];

	    _this.state = {
	      isBtnVisible: true,
	      selectedChild: -1,
	      isDrilledDown: false
	    };

	    /* Function Bindings */
	    _this.plotClicked = _this.plotClicked.bind(_this);
	    _this.onChildRendered = _this.onChildRendered.bind(_this);
	    _this.toggleParentBtnVisibility = _this.toggleParentBtnVisibility.bind(_this);
	    _this.onBtnClick = _this.onBtnClick.bind(_this);

	    /* Default styles */
	    _this.wrapperStyle = {
	      position: 'relative',
	      display: 'inline-block'
	    };

	    _this.defButtonStyle = (_this$defButtonStyle = {
	      border: '1px solid ' + _this.finalBtnConfig.borderColor,
	      backgroundColor: '' + _this.finalBtnConfig.backgroundColor,
	      color: '' + _this.finalBtnConfig.color,
	      fontFamily: '' + _this.finalBtnConfig.fontFamily,
	      fontSize: '' + _this.finalBtnConfig.fontSize,
	      padding: '' + _this.finalBtnConfig.padding,
	      fontWeight: '' + _this.finalBtnConfig.fontWeight,
	      position: 'absolute'
	    }, _defineProperty(_this$defButtonStyle, _this.positionH, '' + _this.finalBtnConfig.margin), _defineProperty(_this$defButtonStyle, _this.positionV, '' + _this.finalBtnConfig.margin), _defineProperty(_this$defButtonStyle, 'cursor', 'pointer'), _this$defButtonStyle);

	    _this.finBtnStyle = typeof btnStyle === 'undefined' ? _this.defButtonStyle : btnStyle;
	    return _this;
	  }

	  _createClass(DrillDown, [{
	    key: 'determinePlotMapType',
	    value: function determinePlotMapType(plotChildMap) {
	      var isNumberFound = false;
	      var isObjectFound = false;
	      plotChildMap.forEach(function (val) {
	        if (typeof val === 'undefined' || val === null) return;
	        if (typeof val === 'number' && val > -1) isNumberFound = true;
	        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') isObjectFound = true;
	      });
	      if (isNumberFound && isObjectFound) {
	        return 'invalid';
	      }
	      if (isNumberFound) return 'number';
	      if (isObjectFound) return 'object';
	      return 'noop';
	    }
	  }, {
	    key: 'plotClicked',
	    value: function plotClicked(e) {
	      var index = e.data.index;

	      var propChildren = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
	      var childrenLen = propChildren.length;
	      var plotChildMap = this.props.plotChildMap;

	      if (childrenLen === 0) return;
	      var mapType = this.determinePlotMapType(plotChildMap);
	      // Case : Array of numbers
	      if (mapType === 'number') {
	        var childPosition = plotChildMap[index];
	        if (childPosition === null || typeof childPosition === 'undefined' || childPosition >= childrenLen) return;

	        this.setState({
	          selectedChild: childPosition,
	          isDrilledDown: true
	        });
	      }

	      // Case : Array of objects
	      if (mapType === 'object') {
	        for (var i = 0; i < childrenLen; i++) {
	          if (typeof plotChildMap[i] === 'undefined' || plotChildMap[i] === null) continue;
	          var _plotChildMap$i = plotChildMap[i],
	              plotPosition = _plotChildMap$i.plotPosition,
	              _childPosition = _plotChildMap$i.childPosition;

	          if (plotPosition === index && _childPosition && _childPosition > -1) {
	            this.setState({
	              selectedChild: _childPosition,
	              isDrilledDown: true
	            });
	            return;
	          }
	        }
	      }

	      // Case : Heterogeneous
	      if (mapType === 'invalid') {
	        console.log('Invalid heterogeneous data: Please check proptypes for - plotChildMap');
	      }
	    }
	  }, {
	    key: 'cloneReactFCChild',
	    value: function cloneReactFCChild(reactFCElem, customProps) {
	      var rFCElem = _react2.default.cloneElement(reactFCElem, customProps);
	      return rFCElem;
	    }
	  }, {
	    key: 'onChildRendered',
	    value: function onChildRendered() {
	      if (this.props.toggleParentBtnVisibility) {
	        this.props.toggleParentBtnVisibility(false);
	      }
	    }
	  }, {
	    key: 'toggleParentBtnVisibility',
	    value: function toggleParentBtnVisibility(isBtnVisible) {
	      this.setState({ isBtnVisible: isBtnVisible });
	    }
	  }, {
	    key: 'onBtnClick',
	    value: function onBtnClick() {
	      this.setState({
	        isDrilledDown: false
	      });
	      if (this.props.toggleParentBtnVisibility) {
	        this.props.toggleParentBtnVisibility(true);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var component = void 0;
	      var _state = this.state,
	          selectedChild = _state.selectedChild,
	          isBtnVisible = _state.isBtnVisible;
	      var _props = this.props,
	          children = _props.children,
	          width = _props.width,
	          height = _props.height;

	      var clonedElemConfig = {
	        width: width,
	        height: height,
	        onRender: this.onChildRendered,
	        toggleParentBtnVisibility: this.toggleParentBtnVisibility
	      };

	      if (!this.state.isDrilledDown) {
	        component = _react2.default.createElement(_ReactFC2.default, _extends({}, this.props, {
	          'fcEvent-dataplotClick': this.plotClicked
	        }));
	      } else {
	        var propChildren = Array.isArray(children) ? children : [children];
	        component = _react2.default.createElement(
	          'div',
	          { style: this.wrapperStyle },
	          this.cloneReactFCChild(propChildren[selectedChild], clonedElemConfig),
	          isBtnVisible ? _react2.default.createElement(
	            'button',
	            { style: this.finBtnStyle, onClick: this.onBtnClick },
	            this.finalBtnConfig.text
	          ) : null
	        );
	      }

	      return component;
	    }
	  }]);

	  return DrillDown;
	}(_react2.default.Component);

	DrillDown.defaultProps = {
	  plotChildMap: [],
	  btnConfig: {
	    text: 'Back',
	    color: '#000000',
	    backgroundColor: '#F6F6F6',
	    borderColor: '#000000',
	    fontSize: '14px',
	    fontWeight: 'bold',
	    padding: '3px',
	    fontFamily: 'Verdana, sans',
	    placement: 'top-right',
	    margin: '10px'
	  },
	  btnStyle: undefined,
	  dataSource: {},
	  dataFormat: 'json',
	  type: '',
	  height: '',
	  width: ''
	};

	DrillDown.propTypes = {
	  plotChildMap: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
	    plotPosition: _propTypes2.default.number,
	    childPosition: _propTypes2.default.number
	  })), _propTypes2.default.arrayOf(_propTypes2.default.number)]),
	  btnConfig: _propTypes2.default.shape({
	    text: _propTypes2.default.string,
	    color: _propTypes2.default.string,
	    backgroundColor: _propTypes2.default.string,
	    borderColor: _propTypes2.default.string,
	    fontSize: _propTypes2.default.string,
	    fontWeight: _propTypes2.default.string,
	    padding: _propTypes2.default.string,
	    fontFamily: _propTypes2.default.string,
	    placement: _propTypes2.default.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
	    margin: _propTypes2.default.string
	  }),
	  btnStyle: _propTypes2.default.object,
	  dataSource: _propTypes2.default.object,
	  dataFormat: _propTypes2.default.string,
	  type: _propTypes2.default.string,
	  height: _propTypes2.default.string,
	  width: _propTypes2.default.string
	};

	exports.default = DrillDown;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(6);

	var ReactPropTypesSecret = __webpack_require__(7);
	var checkPropTypes = __webpack_require__(8);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(7);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(7);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _fusioncharts = __webpack_require__(11);

	var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

	var _v = __webpack_require__(12);

	var _v2 = _interopRequireDefault(_v);

	var _utils = __webpack_require__(15);

	var utils = _interopRequireWildcard(_utils);

	var _options = __webpack_require__(16);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactFC = function (_React$Component) {
	  _inherits(ReactFC, _React$Component);

	  _createClass(ReactFC, null, [{
	    key: 'fcRoot',
	    value: function fcRoot(core) {
	      for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        modules[_key - 1] = arguments[_key];
	      }

	      modules.forEach(function (m) {
	        if (m.getName || m.name) {
	          core.addDep(m);
	        } else {
	          m(core);
	        }
	      });
	      ReactFC.fusionChartsCore = core;
	    }
	  }]);

	  function ReactFC(props) {
	    _classCallCheck(this, ReactFC);

	    var _this = _possibleConstructorReturn(this, (ReactFC.__proto__ || Object.getPrototypeOf(ReactFC)).call(this, props));

	    _this.containerId = (0, _v2.default)();
	    _this.oldOptions = null;
	    _this.FusionCharts = props.fcLibrary || ReactFC.fusionChartsCore || _fusioncharts2.default;
	    return _this;
	  }

	  _createClass(ReactFC, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderChart();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!this.oldOptions) {
	        return;
	      }
	      this.detectChanges(nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.chartObj.dispose();
	    }
	  }, {
	    key: 'detectChanges',
	    value: function detectChanges(nextProps) {
	      var currentOptions = this.resolveChartOptions(nextProps);
	      var oldOptions = this.oldOptions;

	      var optionsUpdatedNatively = ['width', 'height', 'type', 'dataFormat', 'dataSource', 'events'];

	      this.checkAndUpdateChartDimensions(currentOptions, oldOptions);
	      this.checkAndUpdateChartType(currentOptions, oldOptions);
	      this.checkAndUpdateChartData(currentOptions, oldOptions);
	      this.checkAndUpdateEvents(currentOptions, oldOptions);
	      this.checkAndUpdateRestOptions(_options2.default.filter(function (option) {
	        return optionsUpdatedNatively.indexOf(option) === -1;
	      }), currentOptions, oldOptions);

	      this.oldOptions = currentOptions;
	    }
	  }, {
	    key: 'checkAndUpdateChartDimensions',
	    value: function checkAndUpdateChartDimensions(currentOptions, oldOptions) {
	      var currWidth = currentOptions.width;
	      var currHeight = currentOptions.height;
	      var oldWidth = oldOptions.width;
	      var oldHeight = oldOptions.height;

	      if (String(currWidth) !== String(oldWidth) || String(currHeight) !== String(oldHeight)) {
	        if (!utils.isUndefined(currWidth) && !utils.isUndefined(currHeight)) {
	          this.chartObj.resizeTo(currWidth, currHeight);
	        } else {
	          if (!utils.isUndefined(currWidth)) {
	            this.chartObj.resizeTo({
	              w: currWidth
	            });
	          }
	          if (!utils.isUndefined(currHeight)) {
	            this.chartObj.resizeTo({
	              h: currHeight
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkAndUpdateChartType',
	    value: function checkAndUpdateChartType(currentOptions, oldOptions) {
	      var currType = currentOptions.type;
	      var oldType = oldOptions.type;

	      if (String(currType).toLowerCase() !== String(oldType).toLowerCase()) {
	        if (!utils.isUndefined(currType)) {
	          this.chartObj.chartType(String(currType).toLowerCase());
	        }
	      }
	    }
	  }, {
	    key: 'checkAndUpdateChartData',
	    value: function checkAndUpdateChartData(currentOptions, oldOptions) {
	      var currDataFormat = currentOptions.dataFormat;
	      var currData = currentOptions.dataSource;
	      var oldDataFormat = oldOptions.dataFormat;
	      var oldData = oldOptions.dataSource;

	      if (String(currDataFormat).toLowerCase() !== String(oldDataFormat).toLowerCase()) {
	        if (!utils.isUndefined(currDataFormat) && !utils.isUndefined(currData)) {
	          this.chartObj.setChartData(currData, String(currDataFormat).toLowerCase());
	          // If the chart dataFormat is changed then
	          // animate the chart to show the changes
	          this.chartObj.render();
	        }
	      } else if (!this.isSameChartData(currData, oldData)) {
	        if (!utils.isUndefined(currData)) {
	          this.chartObj.setChartData(currData,
	          // When dataFormat is not given, but data is changed,
	          // then use 'json' as default dataFormat
	          currDataFormat ? String(currDataFormat).toLowerCase() : 'json');
	        }
	      }
	    }
	  }, {
	    key: 'isSameChartData',
	    value: function isSameChartData(currData, oldData) {
	      if (utils.isObject(currData) && utils.isObject(oldData)) {
	        return utils.isSameObjectContent(currData, oldData);
	      }
	      return currData === oldData;
	    }
	  }, {
	    key: 'checkAndUpdateEvents',
	    value: function checkAndUpdateEvents(currentOptions, oldOptions) {
	      var _this2 = this;

	      var currEvents = currentOptions.events;
	      var oldEvents = oldOptions.events;
	      var temp1 = void 0;
	      var temp2 = void 0;

	      if (this.detectChartEventsChange(currEvents, oldEvents)) {
	        if (!utils.isUndefined(currEvents)) {
	          temp1 = Object.assign({}, currEvents);
	          temp2 = utils.isUndefined(oldEvents) ? {} : Object.assign({}, oldEvents);
	          Object.keys(temp2).forEach(function (eventName) {
	            if (temp2[eventName] === temp1[eventName]) {
	              temp1[eventName] = undefined;
	            } else {
	              _this2.chartObj.removeEventListener(eventName, temp2[eventName]);
	            }
	          });
	          Object.keys(temp1).forEach(function (eventName) {
	            if (temp1[eventName]) {
	              _this2.chartObj.addEventListener(eventName, temp1[eventName]);
	            }
	          });
	        }
	      }
	    }
	  }, {
	    key: 'detectChartEventsChange',
	    value: function detectChartEventsChange(currEvents, oldEvents) {
	      if (utils.isObject(currEvents) && utils.isObject(oldEvents)) {
	        return !this.isSameChartEvents(currEvents, oldEvents);
	      }
	      return !(currEvents === oldEvents);
	    }
	  }, {
	    key: 'isSameChartEvents',
	    value: function isSameChartEvents(currEvents, oldEvents) {
	      if (Object.keys(currEvents).length !== Object.keys(oldEvents).length) {
	        return false;
	      }
	      var currEventNames = Object.keys(currEvents);
	      for (var i = 0; i < currEventNames.length; ++i) {
	        var evName = currEventNames[i];
	        if (currEvents[evName] !== oldEvents[evName]) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: 'checkAndUpdateRestOptions',
	    value: function checkAndUpdateRestOptions(restOptions, currentOptions, oldOptions) {
	      var _this3 = this;

	      var optionsUpdated = false;

	      restOptions.forEach(function (optionName) {
	        var currValue = currentOptions[optionName];
	        var oldValue = oldOptions[optionName];

	        if (!_this3.isSameOptionValue(currValue, oldValue)) {
	          if (!utils.isUndefined(currValue)) {
	            if (_this3.chartObj.options && _this3.chartObj.options.hasOwnProperty(optionName)) {
	              _this3.chartObj.options[optionName] = currValue;
	              optionsUpdated = true;
	            }
	          }
	        }
	      });

	      if (optionsUpdated) {
	        this.chartObj.render(); // re-render the chart to reflect the changes
	      }
	    }
	  }, {
	    key: 'isSameOptionValue',
	    value: function isSameOptionValue(currValue, oldValue) {
	      if (utils.isObject(currValue) && utils.isObject(oldValue)) {
	        return utils.isSameObjectContent(currValue, oldValue);
	      }
	      return String(currValue) === String(oldValue);
	    }
	  }, {
	    key: 'renderChart',
	    value: function renderChart() {
	      var _this4 = this;

	      var currentOptions = this.resolveChartOptions(this.props);
	      var events = {};

	      currentOptions.renderAt = this.containerId;

	      Object.keys(this.props).forEach(function (value) {
	        var event = value.match(/^fcEvent-.*/i);
	        if (event && typeof _this4.props[value] === 'function') {
	          var eventName = value.replace(/^fcEvent-/i, '');
	          events[eventName] = _this4.props[value];
	        }
	      });

	      if (Object.keys(events).length > 0) {
	        if (currentOptions.events === undefined) {
	          currentOptions.events = events;
	        } else {
	          currentOptions.events = Object.assign(currentOptions.events, events);
	        }
	      }

	      this.chartObj = new this.FusionCharts(currentOptions);
	      this.chartObj.render();
	      this.oldOptions = currentOptions;

	      if (this.props.onRender && typeof this.props.onRender === 'function') {
	        this.props.onRender(this.chartObj);
	      }
	    }
	  }, {
	    key: 'resolveChartOptions',
	    value: function resolveChartOptions(props) {
	      var chartConfig = props.chartConfig ? props.chartConfig : {};
	      var inlineOptions = _options2.default.reduce(function (options, optionName) {
	        options[optionName] = props[optionName];
	        return options;
	      }, {});
	      Object.assign(inlineOptions, chartConfig);

	      if (utils.isObject(inlineOptions.dataSource)) {
	        inlineOptions.dataSource = utils.deepCopyOf(inlineOptions.dataSource);
	      }
	      if (utils.isObject(inlineOptions.link)) {
	        inlineOptions.link = utils.deepCopyOf(inlineOptions.link);
	      }
	      if (utils.isObject(inlineOptions.events)) {
	        inlineOptions.events = Object.assign({}, inlineOptions.events);
	      }
	      return inlineOptions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: this.props.className, id: this.containerId });
	    }
	  }]);

	  return ReactFC;
	}(_react2.default.Component);

	exports.default = ReactFC;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(13);
	var bytesToUuid = __webpack_require__(14);

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options === 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid(rnds);
	}

	module.exports = v4;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection

	// getRandomValues needs to be invoked in a context where "this" is a Crypto
	// implementation. Also, find the complete implementation of crypto on IE11.
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

	if (getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);

	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
	  return ([bth[buf[i++]], bth[buf[i++]], 
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]]]).join('');
	}

	module.exports = bytesToUuid;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.isObject = isObject;
	exports.isCallable = isCallable;
	exports.isSameObjectContent = isSameObjectContent;
	exports.isUndefined = isUndefined;
	exports.deepCopyOf = deepCopyOf;
	function isObject(value) {
	  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}

	function isCallable(value) {
	  return typeof value === 'function';
	}

	function isSameObjectContent(obj1, obj2) {
	  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
	    return false;
	  }
	  var keys = Object.keys(obj1);

	  for (var i = 0; i < keys.length; i += 1) {
	    var key = keys[i];
	    if (isObject(obj1[key]) && isObject(obj2[key])) {
	      if (!isSameObjectContent(obj1[key], obj2[key])) {
	        return false;
	      }
	    } else if (obj1[key] !== obj2[key]) {
	      return false;
	    }
	  }
	  return true;
	}

	function isUndefined(value) {
	  // eslint-disable-next-line no-void
	  var UNDEFINED = void 0;
	  return value === UNDEFINED;
	}

	function deepCopyOf(obj) {
	  return JSON.parse(JSON.stringify(obj));
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['type', 'id', 'width', 'height', 'dataFormat', 'dataSource', 'events', 'link', 'showDataLoadingMessage', 'showChartLoadingMessage', 'baseChartMessageFont', 'baseChartMessageFontSize', 'baseChartMessageColor', 'dataLoadStartMessage', 'dataLoadErrorMessage', 'dataInvalidMessage', 'dataEmptyMessage', 'typeNotSupportedMessage', 'loadMessage', 'renderErrorMessage', 'containerBackgroundColor', 'containerBackgroundOpacity', 'containerClassName', 'baseChartMessageImageHAlign', 'baseChartMessageImageVAlign', 'baseChartMessageImageAlpha', 'baseChartMessageImageScale', 'typeNotSupportedMessageImageHAalign', 'typeNotSupportedMessageImageVAlign', 'typeNotSupportedMessageImageAlpha', 'typeNotSupportedMessageImageScale', 'dataLoadErrorMessageImageHAlign', 'dataLoadErrorMessageImageVAlign', 'dataLoadErrorMessageImageAlpha', 'dataLoadErrorMessageImageScale', 'dataLoadStartMessageImageHAlign', 'dataLoadStartMessageImageVAlign', 'dataLoadStartMessageImageAlpha', 'dataLoadStartMessageImageScale', 'dataInvalidMessageImageHAlign', 'dataInvalidMessageImageVAlign', 'dataInvalidMessageImageAlpha', 'dataInvalidMessageImageScale', 'dataEmptyMessageImageHAlign', 'dataEmptyMessageImageVAlign', 'dataEmptyMessageImageAlpha', 'dataEmptyMessageImageScale', 'renderErrorMessageImageHAlign', 'renderErrorMessageImageVAlign', 'renderErrorMessageImageAlpha', 'renderErrorMessageImageScale', 'loadMessageImageHAlign', 'loadMessageImageVAlign', 'loadMessageImageAlpha', 'loadMessageImageScale'];

/***/ })
/******/ ])
});
;