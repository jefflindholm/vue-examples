/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _appComponent = __webpack_require__(3);

	var _appComponent2 = _interopRequireDefault(_appComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	    el: '#app',
	    components: {
	        'app-component': _appComponent2.default
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.1.4
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */


	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		isServerRendering: isServerRendering,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            process.env.NODE_ENV !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initMethods(vm);
	  initData(vm);
	  initComputed(vm);
	  initWatch(vm);
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        if (isReservedProp[key]) {
	          warn(
	            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	            vm
	          );
	        }
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      } else {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          if (!last.isCloned) {
	            last.text += c.text;
	          }
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
	      return new VNode(
	        tag, data, normalizeChildren(children, childNs),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      return scopedSlotFn(props || {}) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}

	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var add = function (event, fn, once) {
	    once ? vm.$once(event, fn) : vm.$on(event, fn);
	  };
	  var remove$$1 = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$3 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$3);

	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});

	Vue$3.version = '2.1.4';

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = function (tag, attr) {
	  return (
	    (attr === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'option')) ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtml'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isPreTag = function (tag) { return tag === 'pre'; };

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function childNodes (node) {
	  return node.childNodes
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref) {
	    if (parent) {
	      nodeOps.insertBefore(parent, elm, ref);
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }

	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (
	    vnode.elm._v_add = function (event, handler, once, capture) {
	      if (once) {
	        var oldHandler = handler;
	        handler = function (ev) {
	          remove(event, handler, capture);
	          arguments.length === 1
	            ? oldHandler(ev)
	            : oldHandler.apply(null, arguments);
	        };
	      }
	      vnode.elm.addEventListener(event, handler, capture);
	    }
	  );
	  var remove = vnode.elm._v_remove || (
	    vnode.elm._v_remove = function (event, handler, capture) {
	      vnode.elm.removeEventListener(event, handler, capture);
	    }
	  );
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.context === vnode.context &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);

	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var decoder;

	function decode (html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent
	}

	/*  */

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  if (isSFC && stack.length === 1) {
	    // top-level template that has no pre-processor
	    if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	      return false
	    } else {
	      return true
	    }
	  }
	  return false
	};

	var reCache = {};

	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;

	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}

	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }

	      var text = (void 0), rest$1 = (void 0), next = (void 0);
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }

	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }

	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }

	    if (html === last && options.chars) {
	      options.chars(html);
	      break
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }

	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }

	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}

	/*  */

	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x2f: inRegex = true; break          // /
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }

	  return expression
	}

	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});

	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}

	/*  */

	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}

	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}

	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}

	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}

	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;

	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */

	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;

	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }

	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }

	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}

	function next () {
	  return str.charCodeAt(++index$1)
	}

	function eof () {
	  return index$1 >= len
	}

	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}

	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}

	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}

	/*  */

	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(decode);

	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }

	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        process.env.NODE_ENV !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }

	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);

	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;

	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }

	      function checkRootConstraints (el) {
	        if (process.env.NODE_ENV !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if (process.env.NODE_ENV !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            "Component template should contain exactly one root element:" +
	            "\n\n" + template + "\n\n" +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },

	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if (process.env.NODE_ENV !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	          currentParent.tag === 'textarea' &&
	          currentParent.attrsMap.placeholder === text) {
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}

	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}

	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}

	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}

	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}

	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      process.env.NODE_ENV !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}

	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}

	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn$1(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}

	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}

	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if (process.env.NODE_ENV !== 'production' && el.key) {
	      warn$1(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}

	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}

	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if (process.env.NODE_ENV !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      if (process.env.NODE_ENV !== 'production') {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}

	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}

	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}

	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}

	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}

	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}

	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}

	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}

	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}

	function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}

	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}

	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}

	/*  */

	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}

	function genKeyFilter (keys) {
	  return ("if(" + (keys.map(genFilterCode).join('&&')) + ")return;")
	}

	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var alias = keyCodes[key];
	  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
	}

	/*  */

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};

	/*  */

	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;

	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}

	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);

	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}

	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      process.env.NODE_ENV !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}

	function genIf (el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice())
	}

	function genIfConditions (conditions) {
	  if (!conditions.length) {
	    return '_e()'
	  }

	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }

	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return el.once ? genOnce(el) : genElement(el)
	  }
	}

	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}

	function genData (el) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }

	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}

	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}

	function genInlineTemplate (el) {
	  var ast = el.children[0];
	  if (process.env.NODE_ENV !== 'production' && (
	    el.children.length > 1 || ast.type !== 1
	  )) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}

	function genScopedSlots (slots) {
	  return ("scopedSlots:{" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "}")
	}

	function genScopedSlot (key, el) {
	  return key + ":function(" + (String(el.attrsMap.scope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? genChildren(el) || 'void 0'
	      : genElement(el)) + "}"
	}

	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + (el.attrs ? ((children ? '' : ',null') + ",{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}") : '') + ")")
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}

	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}

	/*  */

	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}

	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if (process.env.NODE_ENV !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}

	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};

	/*  */

	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }

	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}

	function genData$2 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}

	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};

	var modules$1 = [
	  klass$1,
	  style$1
	];

	/*  */

	var warn$3;

	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  if (process.env.NODE_ENV !== 'production') {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}

	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if (process.env.NODE_ENV !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}

	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if (process.env.NODE_ENV !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }

	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';

	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;
	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if (process.env.NODE_ENV !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	}

	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    el.children.some(checkOptionWarning);
	  }

	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');

	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}

	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}

	/*  */

	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}

	/*  */

	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}

	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};

	/*  */

	var cache = Object.create(null);

	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};

	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}

	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}

	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});

	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }

	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}

	Vue$3.compile = compileToFunctions;

	module.exports = Vue$3;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _pusherJs = __webpack_require__(4);

	var _pusherJs2 = _interopRequireDefault(_pusherJs);

	var _template = __webpack_require__(5);

	var _template2 = _interopRequireDefault(_template);

	var _subscription = __webpack_require__(6);

	var _subscription2 = _interopRequireDefault(_subscription);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppComponent = _vue2.default.extend({
	    template: _template2.default,
	    components: {
	        'subscription-component': _subscription2.default
	    },
	    created: function created() {
	        this.pusher = new _pusherJs2.default('YOUR_PUSHERKEY');
	    },
	    data: function data() {
	        return {
	            newSearchTerm: '',
	            channels: []
	        };
	    },

	    methods: {
	        newSubscription: function newSubscription() {
	            this.channels.push({
	                term: this.newSearchTerm,
	                active: true
	            });
	            this.newSearchTerm = '';
	        },
	        toggleSearch: function toggleSearch(channel) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.channels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var ch = _step.value;

	                    if (ch.term === channel.term) {
	                        ch.active = !ch.active;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        },
	        clearSearch: function clearSearch(channel) {
	            this.channels = this.channels.filter(function (ch) {
	                return ch.term !== channel.term;
	            });
	        }
	    }
	});

	exports.default = AppComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Pusher JavaScript Library v4.0.0
	 * http://pusher.com/
	 *
	 * Copyright 2016, Pusher
	 * Released under the MIT licence.
	 */

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Pusher"] = factory();
		else
			root["Pusher"] = factory();
	})(this, function() {
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
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var pusher_1 = __webpack_require__(1);
		module.exports = pusher_1["default"];


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var timeline_1 = __webpack_require__(38);
		var level_1 = __webpack_require__(39);
		var StrategyBuilder = __webpack_require__(40);
		var timers_1 = __webpack_require__(12);
		var defaults_1 = __webpack_require__(5);
		var DefaultConfig = __webpack_require__(62);
		var logger_1 = __webpack_require__(8);
		var factory_1 = __webpack_require__(42);
		var Pusher = (function () {
		    function Pusher(app_key, options) {
		        var _this = this;
		        checkAppKey(app_key);
		        options = options || {};
		        this.key = app_key;
		        this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
		        this.channels = factory_1["default"].createChannels();
		        this.global_emitter = new dispatcher_1["default"]();
		        this.sessionID = Math.floor(Math.random() * 1000000000);
		        this.timeline = new timeline_1["default"](this.key, this.sessionID, {
		            cluster: this.config.cluster,
		            features: Pusher.getClientFeatures(),
		            params: this.config.timelineParams || {},
		            limit: 50,
		            level: level_1["default"].INFO,
		            version: defaults_1["default"].VERSION
		        });
		        if (!this.config.disableStats) {
		            this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
		                host: this.config.statsHost,
		                path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
		            });
		        }
		        var getStrategy = function (options) {
		            var config = Collections.extend({}, _this.config, options);
		            return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
		        };
		        this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
		            timeline: this.timeline,
		            activityTimeout: this.config.activity_timeout,
		            pongTimeout: this.config.pong_timeout,
		            unavailableTimeout: this.config.unavailable_timeout
		        }, this.config, { encrypted: this.isEncrypted() }));
		        this.connection.bind('connected', function () {
		            _this.subscribeAll();
		            if (_this.timelineSender) {
		                _this.timelineSender.send(_this.connection.isEncrypted());
		            }
		        });
		        this.connection.bind('message', function (params) {
		            var internal = (params.event.indexOf('pusher_internal:') === 0);
		            if (params.channel) {
		                var channel = _this.channel(params.channel);
		                if (channel) {
		                    channel.handleEvent(params.event, params.data);
		                }
		            }
		            if (!internal) {
		                _this.global_emitter.emit(params.event, params.data);
		            }
		        });
		        this.connection.bind('connecting', function () {
		            _this.channels.disconnect();
		        });
		        this.connection.bind('disconnected', function () {
		            _this.channels.disconnect();
		        });
		        this.connection.bind('error', function (err) {
		            logger_1["default"].warn('Error', err);
		        });
		        Pusher.instances.push(this);
		        this.timeline.info({ instances: Pusher.instances.length });
		        if (Pusher.isReady) {
		            this.connect();
		        }
		    }
		    Pusher.ready = function () {
		        Pusher.isReady = true;
		        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
		            Pusher.instances[i].connect();
		        }
		    };
		    Pusher.log = function (message) {
		        if (Pusher.logToConsole && (window).console && (window).console.log) {
		            (window).console.log(message);
		        }
		    };
		    Pusher.getClientFeatures = function () {
		        return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
		    };
		    Pusher.prototype.channel = function (name) {
		        return this.channels.find(name);
		    };
		    Pusher.prototype.allChannels = function () {
		        return this.channels.all();
		    };
		    Pusher.prototype.connect = function () {
		        this.connection.connect();
		        if (this.timelineSender) {
		            if (!this.timelineSenderTimer) {
		                var encrypted = this.connection.isEncrypted();
		                var timelineSender = this.timelineSender;
		                this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
		                    timelineSender.send(encrypted);
		                });
		            }
		        }
		    };
		    Pusher.prototype.disconnect = function () {
		        this.connection.disconnect();
		        if (this.timelineSenderTimer) {
		            this.timelineSenderTimer.ensureAborted();
		            this.timelineSenderTimer = null;
		        }
		    };
		    Pusher.prototype.bind = function (event_name, callback, context) {
		        this.global_emitter.bind(event_name, callback, context);
		        return this;
		    };
		    Pusher.prototype.unbind = function (event_name, callback, context) {
		        this.global_emitter.unbind(event_name, callback, context);
		        return this;
		    };
		    Pusher.prototype.bind_global = function (callback) {
		        this.global_emitter.bind_global(callback);
		        return this;
		    };
		    Pusher.prototype.unbind_global = function (callback) {
		        this.global_emitter.unbind_global(callback);
		        return this;
		    };
		    Pusher.prototype.unbind_all = function (callback) {
		        this.global_emitter.unbind_all();
		        return this;
		    };
		    Pusher.prototype.subscribeAll = function () {
		        var channelName;
		        for (channelName in this.channels.channels) {
		            if (this.channels.channels.hasOwnProperty(channelName)) {
		                this.subscribe(channelName);
		            }
		        }
		    };
		    Pusher.prototype.subscribe = function (channel_name) {
		        var channel = this.channels.add(channel_name, this);
		        if (channel.subscriptionPending && channel.subscriptionCancelled) {
		            channel.reinstateSubscription();
		        }
		        else if (!channel.subscriptionPending && this.connection.state === "connected") {
		            channel.subscribe();
		        }
		        return channel;
		    };
		    Pusher.prototype.unsubscribe = function (channel_name) {
		        var channel = this.channels.find(channel_name);
		        if (channel && channel.subscriptionPending) {
		            channel.cancelSubscription();
		        }
		        else {
		            channel = this.channels.remove(channel_name);
		            if (channel && this.connection.state === "connected") {
		                channel.unsubscribe();
		            }
		        }
		    };
		    Pusher.prototype.send_event = function (event_name, data, channel) {
		        return this.connection.send_event(event_name, data, channel);
		    };
		    Pusher.prototype.isEncrypted = function () {
		        if (runtime_1["default"].getProtocol() === "https:") {
		            return true;
		        }
		        else {
		            return Boolean(this.config.encrypted);
		        }
		    };
		    Pusher.instances = [];
		    Pusher.isReady = false;
		    Pusher.logToConsole = false;
		    Pusher.Runtime = runtime_1["default"];
		    Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
		    Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
		    Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
		    return Pusher;
		}());
		exports.__esModule = true;
		exports["default"] = Pusher;
		function checkAppKey(key) {
		    if (key === null || key === undefined) {
		        throw "You must pass your app key when you instantiate Pusher.";
		    }
		}
		runtime_1["default"].setup(Pusher);


	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var dependencies_1 = __webpack_require__(3);
		var xhr_auth_1 = __webpack_require__(7);
		var jsonp_auth_1 = __webpack_require__(14);
		var script_request_1 = __webpack_require__(15);
		var jsonp_request_1 = __webpack_require__(16);
		var script_receiver_factory_1 = __webpack_require__(4);
		var jsonp_timeline_1 = __webpack_require__(17);
		var transports_1 = __webpack_require__(18);
		var net_info_1 = __webpack_require__(25);
		var default_strategy_1 = __webpack_require__(26);
		var transport_connection_initializer_1 = __webpack_require__(27);
		var http_1 = __webpack_require__(28);
		var Runtime = {
		    nextAuthCallbackID: 1,
		    auth_callbacks: {},
		    ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
		    DependenciesReceivers: dependencies_1.DependenciesReceivers,
		    getDefaultStrategy: default_strategy_1["default"],
		    Transports: transports_1["default"],
		    transportConnectionInitializer: transport_connection_initializer_1["default"],
		    HTTPFactory: http_1["default"],
		    TimelineTransport: jsonp_timeline_1["default"],
		    getXHRAPI: function () {
		        return window.XMLHttpRequest;
		    },
		    getWebSocketAPI: function () {
		        return window.WebSocket || window.MozWebSocket;
		    },
		    setup: function (PusherClass) {
		        var _this = this;
		        window.Pusher = PusherClass;
		        var initializeOnDocumentBody = function () {
		            _this.onDocumentBody(PusherClass.ready);
		        };
		        if (!window.JSON) {
		            dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
		        }
		        else {
		            initializeOnDocumentBody();
		        }
		    },
		    getDocument: function () {
		        return document;
		    },
		    getProtocol: function () {
		        return this.getDocument().location.protocol;
		    },
		    getAuthorizers: function () {
		        return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
		    },
		    onDocumentBody: function (callback) {
		        var _this = this;
		        if (document.body) {
		            callback();
		        }
		        else {
		            setTimeout(function () {
		                _this.onDocumentBody(callback);
		            }, 0);
		        }
		    },
		    createJSONPRequest: function (url, data) {
		        return new jsonp_request_1["default"](url, data);
		    },
		    createScriptRequest: function (src) {
		        return new script_request_1["default"](src);
		    },
		    getLocalStorage: function () {
		        try {
		            return window.localStorage;
		        }
		        catch (e) {
		            return undefined;
		        }
		    },
		    createXHR: function () {
		        if (this.getXHRAPI()) {
		            return this.createXMLHttpRequest();
		        }
		        else {
		            return this.createMicrosoftXHR();
		        }
		    },
		    createXMLHttpRequest: function () {
		        var Constructor = this.getXHRAPI();
		        return new Constructor();
		    },
		    createMicrosoftXHR: function () {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		    },
		    getNetwork: function () {
		        return net_info_1.Network;
		    },
		    createWebSocket: function (url) {
		        var Constructor = this.getWebSocketAPI();
		        return new Constructor(url);
		    },
		    createSocketRequest: function (method, url) {
		        if (this.isXHRSupported()) {
		            return this.HTTPFactory.createXHR(method, url);
		        }
		        else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
		            return this.HTTPFactory.createXDR(method, url);
		        }
		        else {
		            throw "Cross-origin HTTP requests are not supported";
		        }
		    },
		    isXHRSupported: function () {
		        var Constructor = this.getXHRAPI();
		        return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
		    },
		    isXDRSupported: function (encrypted) {
		        var protocol = encrypted ? "https:" : "http:";
		        var documentProtocol = this.getProtocol();
		        return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
		    },
		    addUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("unload", listener, false);
		        }
		        else if (window.attachEvent !== undefined) {
		            window.attachEvent("onunload", listener);
		        }
		    },
		    removeUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.removeEventListener("unload", listener, false);
		        }
		        else if (window.detachEvent !== undefined) {
		            window.detachEvent("onunload", listener);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Runtime;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var defaults_1 = __webpack_require__(5);
		var dependency_loader_1 = __webpack_require__(6);
		exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
		exports.Dependencies = new dependency_loader_1["default"]({
		    cdn_http: defaults_1["default"].cdn_http,
		    cdn_https: defaults_1["default"].cdn_https,
		    version: defaults_1["default"].VERSION,
		    suffix: defaults_1["default"].dependency_suffix,
		    receivers: exports.DependenciesReceivers
		});


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";
		var ScriptReceiverFactory = (function () {
		    function ScriptReceiverFactory(prefix, name) {
		        this.lastId = 0;
		        this.prefix = prefix;
		        this.name = name;
		    }
		    ScriptReceiverFactory.prototype.create = function (callback) {
		        this.lastId++;
		        var number = this.lastId;
		        var id = this.prefix + number;
		        var name = this.name + "[" + number + "]";
		        var called = false;
		        var callbackWrapper = function () {
		            if (!called) {
		                callback.apply(null, arguments);
		                called = true;
		            }
		        };
		        this[number] = callbackWrapper;
		        return { number: number, id: id, name: name, callback: callbackWrapper };
		    };
		    ScriptReceiverFactory.prototype.remove = function (receiver) {
		        delete this[receiver.number];
		    };
		    return ScriptReceiverFactory;
		}());
		exports.ScriptReceiverFactory = ScriptReceiverFactory;
		exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		"use strict";
		var Defaults = {
		    VERSION: "4.0.0",
		    PROTOCOL: 7,
		    host: 'ws.pusherapp.com',
		    ws_port: 80,
		    wss_port: 443,
		    sockjs_host: 'sockjs.pusher.com',
		    sockjs_http_port: 80,
		    sockjs_https_port: 443,
		    sockjs_path: "/pusher",
		    stats_host: 'stats.pusher.com',
		    channel_auth_endpoint: '/pusher/auth',
		    channel_auth_transport: 'ajax',
		    activity_timeout: 120000,
		    pong_timeout: 30000,
		    unavailable_timeout: 10000,
		    cdn_http: 'http://js.pusher.com',
		    cdn_https: 'https://js.pusher.com',
		    dependency_suffix: ''
		};
		exports.__esModule = true;
		exports["default"] = Defaults;


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var runtime_1 = __webpack_require__(2);
		var DependencyLoader = (function () {
		    function DependencyLoader(options) {
		        this.options = options;
		        this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
		        this.loading = {};
		    }
		    DependencyLoader.prototype.load = function (name, options, callback) {
		        var self = this;
		        if (self.loading[name] && self.loading[name].length > 0) {
		            self.loading[name].push(callback);
		        }
		        else {
		            self.loading[name] = [callback];
		            var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
		            var receiver = self.receivers.create(function (error) {
		                self.receivers.remove(receiver);
		                if (self.loading[name]) {
		                    var callbacks = self.loading[name];
		                    delete self.loading[name];
		                    var successCallback = function (wasSuccessful) {
		                        if (!wasSuccessful) {
		                            request.cleanup();
		                        }
		                    };
		                    for (var i = 0; i < callbacks.length; i++) {
		                        callbacks[i](error, successCallback);
		                    }
		                }
		            });
		            request.send(receiver);
		        }
		    };
		    DependencyLoader.prototype.getRoot = function (options) {
		        var cdn;
		        var protocol = runtime_1["default"].getDocument().location.protocol;
		        if ((options && options.encrypted) || protocol === "https:") {
		            cdn = this.options.cdn_https;
		        }
		        else {
		            cdn = this.options.cdn_http;
		        }
		        return cdn.replace(/\/*$/, "") + "/" + this.options.version;
		    };
		    DependencyLoader.prototype.getPath = function (name, options) {
		        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
		    };
		    ;
		    return DependencyLoader;
		}());
		exports.__esModule = true;
		exports["default"] = DependencyLoader;


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var ajax = function (context, socketId, callback) {
		    var self = this, xhr;
		    xhr = runtime_1["default"].createXHR();
		    xhr.open("POST", self.options.authEndpoint, true);
		    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		    for (var headerName in this.authOptions.headers) {
		        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
		    }
		    xhr.onreadystatechange = function () {
		        if (xhr.readyState === 4) {
		            if (xhr.status === 200) {
		                var data, parsed = false;
		                try {
		                    data = JSON.parse(xhr.responseText);
		                    parsed = true;
		                }
		                catch (e) {
		                    callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
		                }
		                if (parsed) {
		                    callback(false, data);
		                }
		            }
		            else {
		                logger_1["default"].warn("Couldn't get auth info from your webapp", xhr.status);
		                callback(true, xhr.status);
		            }
		        }
		    };
		    xhr.send(this.composeQuery(socketId));
		    return xhr;
		};
		exports.__esModule = true;
		exports["default"] = ajax;


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var collections_1 = __webpack_require__(9);
		var pusher_1 = __webpack_require__(1);
		var Logger = {
		    debug: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        if (!pusher_1["default"].log) {
		            return;
		        }
		        pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
		    },
		    warn: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        var message = collections_1.stringify.apply(this, arguments);
		        if ((window).console) {
		            if ((window).console.warn) {
		                (window).console.warn(message);
		            }
		            else if ((window).console.log) {
		                (window).console.log(message);
		            }
		        }
		        if (pusher_1["default"].log) {
		            pusher_1["default"].log(message);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Logger;


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var base64_1 = __webpack_require__(10);
		var util_1 = __webpack_require__(11);
		function extend(target) {
		    var sources = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        sources[_i - 1] = arguments[_i];
		    }
		    for (var i = 0; i < sources.length; i++) {
		        var extensions = sources[i];
		        for (var property in extensions) {
		            if (extensions[property] && extensions[property].constructor &&
		                extensions[property].constructor === Object) {
		                target[property] = extend(target[property] || {}, extensions[property]);
		            }
		            else {
		                target[property] = extensions[property];
		            }
		        }
		    }
		    return target;
		}
		exports.extend = extend;
		function stringify() {
		    var m = ["Pusher"];
		    for (var i = 0; i < arguments.length; i++) {
		        if (typeof arguments[i] === "string") {
		            m.push(arguments[i]);
		        }
		        else {
		            m.push(safeJSONStringify(arguments[i]));
		        }
		    }
		    return m.join(" : ");
		}
		exports.stringify = stringify;
		function arrayIndexOf(array, item) {
		    var nativeIndexOf = Array.prototype.indexOf;
		    if (array === null) {
		        return -1;
		    }
		    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
		        return array.indexOf(item);
		    }
		    for (var i = 0, l = array.length; i < l; i++) {
		        if (array[i] === item) {
		            return i;
		        }
		    }
		    return -1;
		}
		exports.arrayIndexOf = arrayIndexOf;
		function objectApply(object, f) {
		    for (var key in object) {
		        if (Object.prototype.hasOwnProperty.call(object, key)) {
		            f(object[key], key, object);
		        }
		    }
		}
		exports.objectApply = objectApply;
		function keys(object) {
		    var keys = [];
		    objectApply(object, function (_, key) {
		        keys.push(key);
		    });
		    return keys;
		}
		exports.keys = keys;
		function values(object) {
		    var values = [];
		    objectApply(object, function (value) {
		        values.push(value);
		    });
		    return values;
		}
		exports.values = values;
		function apply(array, f, context) {
		    for (var i = 0; i < array.length; i++) {
		        f.call(context || (window), array[i], i, array);
		    }
		}
		exports.apply = apply;
		function map(array, f) {
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        result.push(f(array[i], i, array, result));
		    }
		    return result;
		}
		exports.map = map;
		function mapObject(object, f) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        result[key] = f(value);
		    });
		    return result;
		}
		exports.mapObject = mapObject;
		function filter(array, test) {
		    test = test || function (value) { return !!value; };
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array, result)) {
		            result.push(array[i]);
		        }
		    }
		    return result;
		}
		exports.filter = filter;
		function filterObject(object, test) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        if ((test && test(value, key, object, result)) || Boolean(value)) {
		            result[key] = value;
		        }
		    });
		    return result;
		}
		exports.filterObject = filterObject;
		function flatten(object) {
		    var result = [];
		    objectApply(object, function (value, key) {
		        result.push([key, value]);
		    });
		    return result;
		}
		exports.flatten = flatten;
		function any(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array)) {
		            return true;
		        }
		    }
		    return false;
		}
		exports.any = any;
		function all(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (!test(array[i], i, array)) {
		            return false;
		        }
		    }
		    return true;
		}
		exports.all = all;
		function encodeParamsObject(data) {
		    return mapObject(data, function (value) {
		        if (typeof value === "object") {
		            value = safeJSONStringify(value);
		        }
		        return encodeURIComponent(base64_1["default"](value.toString()));
		    });
		}
		exports.encodeParamsObject = encodeParamsObject;
		function buildQueryString(data) {
		    var params = filterObject(data, function (value) {
		        return value !== undefined;
		    });
		    var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
		    return query;
		}
		exports.buildQueryString = buildQueryString;
		function decycleObject(object) {
		    var objects = [], paths = [];
		    return (function derez(value, path) {
		        var i, name, nu;
		        switch (typeof value) {
		            case 'object':
		                if (!value) {
		                    return null;
		                }
		                for (i = 0; i < objects.length; i += 1) {
		                    if (objects[i] === value) {
		                        return { $ref: paths[i] };
		                    }
		                }
		                objects.push(value);
		                paths.push(path);
		                if (Object.prototype.toString.apply(value) === '[object Array]') {
		                    nu = [];
		                    for (i = 0; i < value.length; i += 1) {
		                        nu[i] = derez(value[i], path + '[' + i + ']');
		                    }
		                }
		                else {
		                    nu = {};
		                    for (name in value) {
		                        if (Object.prototype.hasOwnProperty.call(value, name)) {
		                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
		                        }
		                    }
		                }
		                return nu;
		            case 'number':
		            case 'string':
		            case 'boolean':
		                return value;
		        }
		    }(object, '$'));
		}
		exports.decycleObject = decycleObject;
		function safeJSONStringify(source) {
		    try {
		        return JSON.stringify(source);
		    }
		    catch (e) {
		        return JSON.stringify(decycleObject(source));
		    }
		}
		exports.safeJSONStringify = safeJSONStringify;


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		function encode(s) {
		    return btoa(utob(s));
		}
		exports.__esModule = true;
		exports["default"] = encode;
		var fromCharCode = String.fromCharCode;
		var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		var b64tab = {};
		for (var i = 0, l = b64chars.length; i < l; i++) {
		    b64tab[b64chars.charAt(i)] = i;
		}
		var cb_utob = function (c) {
		    var cc = c.charCodeAt(0);
		    return cc < 0x80 ? c
		        : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
		            fromCharCode(0x80 | (cc & 0x3f))
		            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
		                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
		                fromCharCode(0x80 | (cc & 0x3f));
		};
		var utob = function (u) {
		    return u.replace(/[^\x00-\x7F]/g, cb_utob);
		};
		var cb_encode = function (ccc) {
		    var padlen = [0, 2, 1][ccc.length % 3];
		    var ord = ccc.charCodeAt(0) << 16
		        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
		        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
		    var chars = [
		        b64chars.charAt(ord >>> 18),
		        b64chars.charAt((ord >>> 12) & 63),
		        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
		        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
		    ];
		    return chars.join('');
		};
		var btoa = (window).btoa || function (b) {
		    return b.replace(/[\s\S]{1,3}/g, cb_encode);
		};


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var timers_1 = __webpack_require__(12);
		var Util = {
		    now: function () {
		        if (Date.now) {
		            return Date.now();
		        }
		        else {
		            return new Date().valueOf();
		        }
		    },
		    defer: function (callback) {
		        return new timers_1.OneOffTimer(0, callback);
		    },
		    method: function (name) {
		        var args = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            args[_i - 1] = arguments[_i];
		        }
		        var boundArguments = Array.prototype.slice.call(arguments, 1);
		        return function (object) {
		            return object[name].apply(object, boundArguments.concat(arguments));
		        };
		    }
		};
		exports.__esModule = true;
		exports["default"] = Util;


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var abstract_timer_1 = __webpack_require__(13);
		function clearTimeout(timer) {
		    (window).clearTimeout(timer);
		}
		function clearInterval(timer) {
		    (window).clearInterval(timer);
		}
		var OneOffTimer = (function (_super) {
		    __extends(OneOffTimer, _super);
		    function OneOffTimer(delay, callback) {
		        _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
		            callback();
		            return null;
		        });
		    }
		    return OneOffTimer;
		}(abstract_timer_1["default"]));
		exports.OneOffTimer = OneOffTimer;
		var PeriodicTimer = (function (_super) {
		    __extends(PeriodicTimer, _super);
		    function PeriodicTimer(delay, callback) {
		        _super.call(this, setInterval, clearInterval, delay, function (timer) {
		            callback();
		            return timer;
		        });
		    }
		    return PeriodicTimer;
		}(abstract_timer_1["default"]));
		exports.PeriodicTimer = PeriodicTimer;


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		"use strict";
		var Timer = (function () {
		    function Timer(set, clear, delay, callback) {
		        var _this = this;
		        this.clear = clear;
		        this.timer = set(function () {
		            if (_this.timer) {
		                _this.timer = callback(_this.timer);
		            }
		        }, delay);
		    }
		    Timer.prototype.isRunning = function () {
		        return this.timer !== null;
		    };
		    Timer.prototype.ensureAborted = function () {
		        if (this.timer) {
		            this.clear(this.timer);
		            this.timer = null;
		        }
		    };
		    return Timer;
		}());
		exports.__esModule = true;
		exports["default"] = Timer;


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var logger_1 = __webpack_require__(8);
		var jsonp = function (context, socketId, callback) {
		    if (this.authOptions.headers !== undefined) {
		        logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
		    }
		    var callbackName = context.nextAuthCallbackID.toString();
		    context.nextAuthCallbackID++;
		    var document = context.getDocument();
		    var script = document.createElement("script");
		    context.auth_callbacks[callbackName] = function (data) {
		        callback(false, data);
		    };
		    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
		    script.src = this.options.authEndpoint +
		        '?callback=' +
		        encodeURIComponent(callback_name) +
		        '&' +
		        this.composeQuery(socketId);
		    var head = document.getElementsByTagName("head")[0] || document.documentElement;
		    head.insertBefore(script, head.firstChild);
		};
		exports.__esModule = true;
		exports["default"] = jsonp;


	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		"use strict";
		var ScriptRequest = (function () {
		    function ScriptRequest(src) {
		        this.src = src;
		    }
		    ScriptRequest.prototype.send = function (receiver) {
		        var self = this;
		        var errorString = "Error loading " + self.src;
		        self.script = document.createElement("script");
		        self.script.id = receiver.id;
		        self.script.src = self.src;
		        self.script.type = "text/javascript";
		        self.script.charset = "UTF-8";
		        if (self.script.addEventListener) {
		            self.script.onerror = function () {
		                receiver.callback(errorString);
		            };
		            self.script.onload = function () {
		                receiver.callback(null);
		            };
		        }
		        else {
		            self.script.onreadystatechange = function () {
		                if (self.script.readyState === 'loaded' ||
		                    self.script.readyState === 'complete') {
		                    receiver.callback(null);
		                }
		            };
		        }
		        if (self.script.async === undefined && document.attachEvent &&
		            /opera/i.test(navigator.userAgent)) {
		            self.errorScript = document.createElement("script");
		            self.errorScript.id = receiver.id + "_error";
		            self.errorScript.text = receiver.name + "('" + errorString + "');";
		            self.script.async = self.errorScript.async = false;
		        }
		        else {
		            self.script.async = true;
		        }
		        var head = document.getElementsByTagName('head')[0];
		        head.insertBefore(self.script, head.firstChild);
		        if (self.errorScript) {
		            head.insertBefore(self.errorScript, self.script.nextSibling);
		        }
		    };
		    ScriptRequest.prototype.cleanup = function () {
		        if (this.script) {
		            this.script.onload = this.script.onerror = null;
		            this.script.onreadystatechange = null;
		        }
		        if (this.script && this.script.parentNode) {
		            this.script.parentNode.removeChild(this.script);
		        }
		        if (this.errorScript && this.errorScript.parentNode) {
		            this.errorScript.parentNode.removeChild(this.errorScript);
		        }
		        this.script = null;
		        this.errorScript = null;
		    };
		    return ScriptRequest;
		}());
		exports.__esModule = true;
		exports["default"] = ScriptRequest;


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var JSONPRequest = (function () {
		    function JSONPRequest(url, data) {
		        this.url = url;
		        this.data = data;
		    }
		    JSONPRequest.prototype.send = function (receiver) {
		        if (this.request) {
		            return;
		        }
		        var query = Collections.buildQueryString(this.data);
		        var url = this.url + "/" + receiver.number + "?" + query;
		        this.request = runtime_1["default"].createScriptRequest(url);
		        this.request.send(receiver);
		    };
		    JSONPRequest.prototype.cleanup = function () {
		        if (this.request) {
		            this.request.cleanup();
		        }
		    };
		    return JSONPRequest;
		}());
		exports.__esModule = true;
		exports["default"] = JSONPRequest;


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var script_receiver_factory_1 = __webpack_require__(4);
		var getAgent = function (sender, encrypted) {
		    return function (data, callback) {
		        var scheme = "http" + (encrypted ? "s" : "") + "://";
		        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
		        var request = runtime_1["default"].createJSONPRequest(url, data);
		        var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
		            script_receiver_factory_1.ScriptReceivers.remove(receiver);
		            request.cleanup();
		            if (result && result.host) {
		                sender.host = result.host;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        request.send(receiver);
		    };
		};
		var jsonp = {
		    name: 'jsonp',
		    getAgent: getAgent
		};
		exports.__esModule = true;
		exports["default"] = jsonp;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var transports_1 = __webpack_require__(19);
		var transport_1 = __webpack_require__(21);
		var URLSchemes = __webpack_require__(20);
		var runtime_1 = __webpack_require__(2);
		var dependencies_1 = __webpack_require__(3);
		var Collections = __webpack_require__(9);
		var SockJSTransport = new transport_1["default"]({
		    file: "sockjs",
		    urls: URLSchemes.sockjs,
		    handlesActivityChecks: true,
		    supportsPing: false,
		    isSupported: function () {
		        return true;
		    },
		    isInitialized: function () {
		        return window.SockJS !== undefined;
		    },
		    getSocket: function (url, options) {
		        return new window.SockJS(url, null, {
		            js_path: dependencies_1.Dependencies.getPath("sockjs", {
		                encrypted: options.encrypted
		            }),
		            ignore_null_origin: options.ignoreNullOrigin
		        });
		    },
		    beforeOpen: function (socket, path) {
		        socket.send(JSON.stringify({
		            path: path
		        }));
		    }
		});
		var xdrConfiguration = {
		    isSupported: function (environment) {
		        var yes = runtime_1["default"].isXDRSupported(environment.encrypted);
		        return yes;
		    }
		};
		var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
		var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
		transports_1["default"].xdr_streaming = XDRStreamingTransport;
		transports_1["default"].xdr_polling = XDRPollingTransport;
		transports_1["default"].sockjs = SockJSTransport;
		exports.__esModule = true;
		exports["default"] = transports_1["default"];


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var URLSchemes = __webpack_require__(20);
		var transport_1 = __webpack_require__(21);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var WSTransport = new transport_1["default"]({
		    urls: URLSchemes.ws,
		    handlesActivityChecks: false,
		    supportsPing: false,
		    isInitialized: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    isSupported: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    getSocket: function (url) {
		        return runtime_1["default"].createWebSocket(url);
		    }
		});
		var httpConfiguration = {
		    urls: URLSchemes.http,
		    handlesActivityChecks: false,
		    supportsPing: true,
		    isInitialized: function () {
		        return true;
		    }
		};
		exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
		    }
		}, httpConfiguration);
		exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createPollingSocket(url);
		    }
		}, httpConfiguration);
		var xhrConfiguration = {
		    isSupported: function () {
		        return runtime_1["default"].isXHRSupported();
		    }
		};
		var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
		var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
		var Transports = {
		    ws: WSTransport,
		    xhr_streaming: XHRStreamingTransport,
		    xhr_polling: XHRPollingTransport
		};
		exports.__esModule = true;
		exports["default"] = Transports;


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var defaults_1 = __webpack_require__(5);
		function getGenericURL(baseScheme, params, path) {
		    var scheme = baseScheme + (params.encrypted ? "s" : "");
		    var host = params.encrypted ? params.hostEncrypted : params.hostUnencrypted;
		    return scheme + "://" + host + path;
		}
		function getGenericPath(key, queryString) {
		    var path = "/app/" + key;
		    var query = "?protocol=" + defaults_1["default"].PROTOCOL +
		        "&client=js" +
		        "&version=" + defaults_1["default"].VERSION +
		        (queryString ? ("&" + queryString) : "");
		    return path + query;
		}
		exports.ws = {
		    getInitial: function (key, params) {
		        return getGenericURL("ws", params, getGenericPath(key, "flash=false"));
		    }
		};
		exports.http = {
		    getInitial: function (key, params) {
		        var path = (params.httpPath || "/pusher") + getGenericPath(key);
		        return getGenericURL("http", params, path);
		    }
		};
		exports.sockjs = {
		    getInitial: function (key, params) {
		        return getGenericURL("http", params, params.httpPath || "/pusher");
		    },
		    getPath: function (key, params) {
		        return getGenericPath(key);
		    }
		};


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var transport_connection_1 = __webpack_require__(22);
		var Transport = (function () {
		    function Transport(hooks) {
		        this.hooks = hooks;
		    }
		    Transport.prototype.isSupported = function (environment) {
		        return this.hooks.isSupported(environment);
		    };
		    Transport.prototype.createConnection = function (name, priority, key, options) {
		        return new transport_connection_1["default"](this.hooks, name, priority, key, options);
		    };
		    return Transport;
		}());
		exports.__esModule = true;
		exports["default"] = Transport;


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var TransportConnection = (function (_super) {
		    __extends(TransportConnection, _super);
		    function TransportConnection(hooks, name, priority, key, options) {
		        _super.call(this);
		        this.initialize = runtime_1["default"].transportConnectionInitializer;
		        this.hooks = hooks;
		        this.name = name;
		        this.priority = priority;
		        this.key = key;
		        this.options = options;
		        this.state = "new";
		        this.timeline = options.timeline;
		        this.activityTimeout = options.activityTimeout;
		        this.id = this.timeline.generateUniqueID();
		    }
		    TransportConnection.prototype.handlesActivityChecks = function () {
		        return Boolean(this.hooks.handlesActivityChecks);
		    };
		    TransportConnection.prototype.supportsPing = function () {
		        return Boolean(this.hooks.supportsPing);
		    };
		    TransportConnection.prototype.connect = function () {
		        var _this = this;
		        if (this.socket || this.state !== "initialized") {
		            return false;
		        }
		        var url = this.hooks.urls.getInitial(this.key, this.options);
		        try {
		            this.socket = this.hooks.getSocket(url, this.options);
		        }
		        catch (e) {
		            util_1["default"].defer(function () {
		                _this.onError(e);
		                _this.changeState("closed");
		            });
		            return false;
		        }
		        this.bindListeners();
		        logger_1["default"].debug("Connecting", { transport: this.name, url: url });
		        this.changeState("connecting");
		        return true;
		    };
		    TransportConnection.prototype.close = function () {
		        if (this.socket) {
		            this.socket.close();
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.send = function (data) {
		        var _this = this;
		        if (this.state === "open") {
		            util_1["default"].defer(function () {
		                if (_this.socket) {
		                    _this.socket.send(data);
		                }
		            });
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.ping = function () {
		        if (this.state === "open" && this.supportsPing()) {
		            this.socket.ping();
		        }
		    };
		    TransportConnection.prototype.onOpen = function () {
		        if (this.hooks.beforeOpen) {
		            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
		        }
		        this.changeState("open");
		        this.socket.onopen = undefined;
		    };
		    TransportConnection.prototype.onError = function (error) {
		        this.emit("error", { type: 'WebSocketError', error: error });
		        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
		    };
		    TransportConnection.prototype.onClose = function (closeEvent) {
		        if (closeEvent) {
		            this.changeState("closed", {
		                code: closeEvent.code,
		                reason: closeEvent.reason,
		                wasClean: closeEvent.wasClean
		            });
		        }
		        else {
		            this.changeState("closed");
		        }
		        this.unbindListeners();
		        this.socket = undefined;
		    };
		    TransportConnection.prototype.onMessage = function (message) {
		        this.emit("message", message);
		    };
		    TransportConnection.prototype.onActivity = function () {
		        this.emit("activity");
		    };
		    TransportConnection.prototype.bindListeners = function () {
		        var _this = this;
		        this.socket.onopen = function () {
		            _this.onOpen();
		        };
		        this.socket.onerror = function (error) {
		            _this.onError(error);
		        };
		        this.socket.onclose = function (closeEvent) {
		            _this.onClose(closeEvent);
		        };
		        this.socket.onmessage = function (message) {
		            _this.onMessage(message);
		        };
		        if (this.supportsPing()) {
		            this.socket.onactivity = function () { _this.onActivity(); };
		        }
		    };
		    TransportConnection.prototype.unbindListeners = function () {
		        if (this.socket) {
		            this.socket.onopen = undefined;
		            this.socket.onerror = undefined;
		            this.socket.onclose = undefined;
		            this.socket.onmessage = undefined;
		            if (this.supportsPing()) {
		                this.socket.onactivity = undefined;
		            }
		        }
		    };
		    TransportConnection.prototype.changeState = function (state, params) {
		        this.state = state;
		        this.timeline.info(this.buildTimelineMessage({
		            state: state,
		            params: params
		        }));
		        this.emit(state, params);
		    };
		    TransportConnection.prototype.buildTimelineMessage = function (message) {
		        return Collections.extend({ cid: this.id }, message);
		    };
		    return TransportConnection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = TransportConnection;


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var callback_registry_1 = __webpack_require__(24);
		var Dispatcher = (function () {
		    function Dispatcher(failThrough) {
		        this.callbacks = new callback_registry_1["default"]();
		        this.global_callbacks = [];
		        this.failThrough = failThrough;
		    }
		    Dispatcher.prototype.bind = function (eventName, callback, context) {
		        this.callbacks.add(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.bind_global = function (callback) {
		        this.global_callbacks.push(callback);
		        return this;
		    };
		    Dispatcher.prototype.unbind = function (eventName, callback, context) {
		        this.callbacks.remove(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.unbind_global = function (callback) {
		        if (!callback) {
		            this.global_callbacks = [];
		            return this;
		        }
		        this.global_callbacks = Collections.filter(this.global_callbacks || [], function (c) { return c !== callback; });
		        return this;
		    };
		    Dispatcher.prototype.unbind_all = function () {
		        this.unbind();
		        this.unbind_global();
		        return this;
		    };
		    Dispatcher.prototype.emit = function (eventName, data) {
		        var i;
		        for (i = 0; i < this.global_callbacks.length; i++) {
		            this.global_callbacks[i](eventName, data);
		        }
		        var callbacks = this.callbacks.get(eventName);
		        if (callbacks && callbacks.length > 0) {
		            for (i = 0; i < callbacks.length; i++) {
		                callbacks[i].fn.call(callbacks[i].context || (window), data);
		            }
		        }
		        else if (this.failThrough) {
		            this.failThrough(eventName, data);
		        }
		        return this;
		    };
		    return Dispatcher;
		}());
		exports.__esModule = true;
		exports["default"] = Dispatcher;


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var CallbackRegistry = (function () {
		    function CallbackRegistry() {
		        this._callbacks = {};
		    }
		    CallbackRegistry.prototype.get = function (name) {
		        return this._callbacks[prefix(name)];
		    };
		    CallbackRegistry.prototype.add = function (name, callback, context) {
		        var prefixedEventName = prefix(name);
		        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
		        this._callbacks[prefixedEventName].push({
		            fn: callback,
		            context: context
		        });
		    };
		    CallbackRegistry.prototype.remove = function (name, callback, context) {
		        if (!name && !callback && !context) {
		            this._callbacks = {};
		            return;
		        }
		        var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
		        if (callback || context) {
		            this.removeCallback(names, callback, context);
		        }
		        else {
		            this.removeAllCallbacks(names);
		        }
		    };
		    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
		        Collections.apply(names, function (name) {
		            this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
		                return (callback && callback !== binding.fn) ||
		                    (context && context !== binding.context);
		            });
		            if (this._callbacks[name].length === 0) {
		                delete this._callbacks[name];
		            }
		        }, this);
		    };
		    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
		        Collections.apply(names, function (name) {
		            delete this._callbacks[name];
		        }, this);
		    };
		    return CallbackRegistry;
		}());
		exports.__esModule = true;
		exports["default"] = CallbackRegistry;
		function prefix(name) {
		    return "_" + name;
		}


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var NetInfo = (function (_super) {
		    __extends(NetInfo, _super);
		    function NetInfo() {
		        _super.call(this);
		        var self = this;
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("online", function () {
		                self.emit('online');
		            }, false);
		            window.addEventListener("offline", function () {
		                self.emit('offline');
		            }, false);
		        }
		    }
		    NetInfo.prototype.isOnline = function () {
		        if (window.navigator.onLine === undefined) {
		            return true;
		        }
		        else {
		            return window.navigator.onLine;
		        }
		    };
		    return NetInfo;
		}(dispatcher_1["default"]));
		exports.NetInfo = NetInfo;
		exports.Network = new NetInfo();


	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		"use strict";
		var getDefaultStrategy = function (config) {
		    var wsStrategy;
		    if (config.encrypted) {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":http_fallback_loop"]]
		        ];
		    }
		    else {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":wss_loop"]],
		            [":delayed", 5000, [":http_fallback_loop"]]
		        ];
		    }
		    return [
		        [":def", "ws_options", {
		                hostUnencrypted: config.wsHost + ":" + config.wsPort,
		                hostEncrypted: config.wsHost + ":" + config.wssPort
		            }],
		        [":def", "wss_options", [":extend", ":ws_options", {
		                    encrypted: true
		                }]],
		        [":def", "sockjs_options", {
		                hostUnencrypted: config.httpHost + ":" + config.httpPort,
		                hostEncrypted: config.httpHost + ":" + config.httpsPort,
		                httpPath: config.httpPath
		            }],
		        [":def", "timeouts", {
		                loop: true,
		                timeout: 15000,
		                timeoutLimit: 60000
		            }],
		        [":def", "ws_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def", "streaming_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
		        [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
		        [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
		        [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
		        [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
		        [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
		        [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
		        [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
		        [":def", "streaming_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_streaming"],
		                    ":xhr_streaming",
		                    ":xdr_streaming"
		                ]
		            ]],
		        [":def", "polling_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_polling"],
		                    ":xhr_polling",
		                    ":xdr_polling"
		                ]
		            ]],
		        [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
		                    ":best_connected_ever",
		                    ":streaming_loop",
		                    [":delayed", 4000, [":polling_loop"]]
		                ], [
		                    ":polling_loop"
		                ]]],
		        [":def", "http_fallback_loop",
		            [":if", [":is_supported", ":http_loop"], [
		                    ":http_loop"
		                ], [
		                    ":sockjs_loop"
		                ]]
		        ],
		        [":def", "strategy",
		            [":cached", 1800000,
		                [":first_connected",
		                    [":if", [":is_supported", ":ws"],
		                        wsStrategy,
		                        ":http_fallback_loop"
		                    ]
		                ]
		            ]
		        ]
		    ];
		};
		exports.__esModule = true;
		exports["default"] = getDefaultStrategy;


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var dependencies_1 = __webpack_require__(3);
		function default_1() {
		    var self = this;
		    self.timeline.info(self.buildTimelineMessage({
		        transport: self.name + (self.options.encrypted ? "s" : "")
		    }));
		    if (self.hooks.isInitialized()) {
		        self.changeState("initialized");
		    }
		    else if (self.hooks.file) {
		        self.changeState("initializing");
		        dependencies_1.Dependencies.load(self.hooks.file, { encrypted: self.options.encrypted }, function (error, callback) {
		            if (self.hooks.isInitialized()) {
		                self.changeState("initialized");
		                callback(true);
		            }
		            else {
		                if (error) {
		                    self.onError(error);
		                }
		                self.onClose();
		                callback(false);
		            }
		        });
		    }
		    else {
		        self.onClose();
		    }
		}
		exports.__esModule = true;
		exports["default"] = default_1;


	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var http_xdomain_request_1 = __webpack_require__(29);
		var http_1 = __webpack_require__(31);
		http_1["default"].createXDR = function (method, url) {
		    return this.createRequest(http_xdomain_request_1["default"], method, url);
		};
		exports.__esModule = true;
		exports["default"] = http_1["default"];


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Errors = __webpack_require__(30);
		var hooks = {
		    getRequest: function (socket) {
		        var xdr = new window.XDomainRequest();
		        xdr.ontimeout = function () {
		            socket.emit("error", new Errors.RequestTimedOut());
		            socket.close();
		        };
		        xdr.onerror = function (e) {
		            socket.emit("error", e);
		            socket.close();
		        };
		        xdr.onprogress = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		        };
		        xdr.onload = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		            socket.emit("finished", 200);
		            socket.close();
		        };
		        return xdr;
		    },
		    abortRequest: function (xdr) {
		        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
		        xdr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var BadEventName = (function (_super) {
		    __extends(BadEventName, _super);
		    function BadEventName() {
		        _super.apply(this, arguments);
		    }
		    return BadEventName;
		}(Error));
		exports.BadEventName = BadEventName;
		var RequestTimedOut = (function (_super) {
		    __extends(RequestTimedOut, _super);
		    function RequestTimedOut() {
		        _super.apply(this, arguments);
		    }
		    return RequestTimedOut;
		}(Error));
		exports.RequestTimedOut = RequestTimedOut;
		var TransportPriorityTooLow = (function (_super) {
		    __extends(TransportPriorityTooLow, _super);
		    function TransportPriorityTooLow() {
		        _super.apply(this, arguments);
		    }
		    return TransportPriorityTooLow;
		}(Error));
		exports.TransportPriorityTooLow = TransportPriorityTooLow;
		var TransportClosed = (function (_super) {
		    __extends(TransportClosed, _super);
		    function TransportClosed() {
		        _super.apply(this, arguments);
		    }
		    return TransportClosed;
		}(Error));
		exports.TransportClosed = TransportClosed;
		var UnsupportedTransport = (function (_super) {
		    __extends(UnsupportedTransport, _super);
		    function UnsupportedTransport() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedTransport;
		}(Error));
		exports.UnsupportedTransport = UnsupportedTransport;
		var UnsupportedStrategy = (function (_super) {
		    __extends(UnsupportedStrategy, _super);
		    function UnsupportedStrategy() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedStrategy;
		}(Error));
		exports.UnsupportedStrategy = UnsupportedStrategy;


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var http_request_1 = __webpack_require__(32);
		var http_socket_1 = __webpack_require__(33);
		var http_streaming_socket_1 = __webpack_require__(35);
		var http_polling_socket_1 = __webpack_require__(36);
		var http_xhr_request_1 = __webpack_require__(37);
		var HTTP = {
		    createStreamingSocket: function (url) {
		        return this.createSocket(http_streaming_socket_1["default"], url);
		    },
		    createPollingSocket: function (url) {
		        return this.createSocket(http_polling_socket_1["default"], url);
		    },
		    createSocket: function (hooks, url) {
		        return new http_socket_1["default"](hooks, url);
		    },
		    createXHR: function (method, url) {
		        return this.createRequest(http_xhr_request_1["default"], method, url);
		    },
		    createRequest: function (hooks, method, url) {
		        return new http_request_1["default"](hooks, method, url);
		    }
		};
		exports.__esModule = true;
		exports["default"] = HTTP;


	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var runtime_1 = __webpack_require__(2);
		var dispatcher_1 = __webpack_require__(23);
		var MAX_BUFFER_LENGTH = 256 * 1024;
		var HTTPRequest = (function (_super) {
		    __extends(HTTPRequest, _super);
		    function HTTPRequest(hooks, method, url) {
		        _super.call(this);
		        this.hooks = hooks;
		        this.method = method;
		        this.url = url;
		    }
		    HTTPRequest.prototype.start = function (payload) {
		        var _this = this;
		        this.position = 0;
		        this.xhr = this.hooks.getRequest(this);
		        this.unloader = function () {
		            _this.close();
		        };
		        runtime_1["default"].addUnloadListener(this.unloader);
		        this.xhr.open(this.method, this.url, true);
		        if (this.xhr.setRequestHeader) {
		            this.xhr.setRequestHeader("Content-Type", "application/json");
		        }
		        this.xhr.send(payload);
		    };
		    HTTPRequest.prototype.close = function () {
		        if (this.unloader) {
		            runtime_1["default"].removeUnloadListener(this.unloader);
		            this.unloader = null;
		        }
		        if (this.xhr) {
		            this.hooks.abortRequest(this.xhr);
		            this.xhr = null;
		        }
		    };
		    HTTPRequest.prototype.onChunk = function (status, data) {
		        while (true) {
		            var chunk = this.advanceBuffer(data);
		            if (chunk) {
		                this.emit("chunk", { status: status, data: chunk });
		            }
		            else {
		                break;
		            }
		        }
		        if (this.isBufferTooLong(data)) {
		            this.emit("buffer_too_long");
		        }
		    };
		    HTTPRequest.prototype.advanceBuffer = function (buffer) {
		        var unreadData = buffer.slice(this.position);
		        var endOfLinePosition = unreadData.indexOf("\n");
		        if (endOfLinePosition !== -1) {
		            this.position += endOfLinePosition + 1;
		            return unreadData.slice(0, endOfLinePosition);
		        }
		        else {
		            return null;
		        }
		    };
		    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
		        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
		    };
		    return HTTPRequest;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = HTTPRequest;


	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var state_1 = __webpack_require__(34);
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var autoIncrement = 1;
		var HTTPSocket = (function () {
		    function HTTPSocket(hooks, url) {
		        this.hooks = hooks;
		        this.session = randomNumber(1000) + "/" + randomString(8);
		        this.location = getLocation(url);
		        this.readyState = state_1["default"].CONNECTING;
		        this.openStream();
		    }
		    HTTPSocket.prototype.send = function (payload) {
		        return this.sendRaw(JSON.stringify([payload]));
		    };
		    HTTPSocket.prototype.ping = function () {
		        this.hooks.sendHeartbeat(this);
		    };
		    HTTPSocket.prototype.close = function (code, reason) {
		        this.onClose(code, reason, true);
		    };
		    HTTPSocket.prototype.sendRaw = function (payload) {
		        if (this.readyState === state_1["default"].OPEN) {
		            try {
		                runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
		                return true;
		            }
		            catch (e) {
		                return false;
		            }
		        }
		        else {
		            return false;
		        }
		    };
		    HTTPSocket.prototype.reconnect = function () {
		        this.closeStream();
		        this.openStream();
		    };
		    ;
		    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
		        this.closeStream();
		        this.readyState = state_1["default"].CLOSED;
		        if (this.onclose) {
		            this.onclose({
		                code: code,
		                reason: reason,
		                wasClean: wasClean
		            });
		        }
		    };
		    HTTPSocket.prototype.onChunk = function (chunk) {
		        if (chunk.status !== 200) {
		            return;
		        }
		        if (this.readyState === state_1["default"].OPEN) {
		            this.onActivity();
		        }
		        var payload;
		        var type = chunk.data.slice(0, 1);
		        switch (type) {
		            case 'o':
		                payload = JSON.parse(chunk.data.slice(1) || '{}');
		                this.onOpen(payload);
		                break;
		            case 'a':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                for (var i = 0; i < payload.length; i++) {
		                    this.onEvent(payload[i]);
		                }
		                break;
		            case 'm':
		                payload = JSON.parse(chunk.data.slice(1) || 'null');
		                this.onEvent(payload);
		                break;
		            case 'h':
		                this.hooks.onHeartbeat(this);
		                break;
		            case 'c':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                this.onClose(payload[0], payload[1], true);
		                break;
		        }
		    };
		    HTTPSocket.prototype.onOpen = function (options) {
		        if (this.readyState === state_1["default"].CONNECTING) {
		            if (options && options.hostname) {
		                this.location.base = replaceHost(this.location.base, options.hostname);
		            }
		            this.readyState = state_1["default"].OPEN;
		            if (this.onopen) {
		                this.onopen();
		            }
		        }
		        else {
		            this.onClose(1006, "Server lost session", true);
		        }
		    };
		    HTTPSocket.prototype.onEvent = function (event) {
		        if (this.readyState === state_1["default"].OPEN && this.onmessage) {
		            this.onmessage({ data: event });
		        }
		    };
		    HTTPSocket.prototype.onActivity = function () {
		        if (this.onactivity) {
		            this.onactivity();
		        }
		    };
		    HTTPSocket.prototype.onError = function (error) {
		        if (this.onerror) {
		            this.onerror(error);
		        }
		    };
		    HTTPSocket.prototype.openStream = function () {
		        var _this = this;
		        this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
		        this.stream.bind("chunk", function (chunk) {
		            _this.onChunk(chunk);
		        });
		        this.stream.bind("finished", function (status) {
		            _this.hooks.onFinished(_this, status);
		        });
		        this.stream.bind("buffer_too_long", function () {
		            _this.reconnect();
		        });
		        try {
		            this.stream.start();
		        }
		        catch (error) {
		            util_1["default"].defer(function () {
		                _this.onError(error);
		                _this.onClose(1006, "Could not start streaming", false);
		            });
		        }
		    };
		    HTTPSocket.prototype.closeStream = function () {
		        if (this.stream) {
		            this.stream.unbind_all();
		            this.stream.close();
		            this.stream = null;
		        }
		    };
		    return HTTPSocket;
		}());
		function getLocation(url) {
		    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
		    return {
		        base: parts[1],
		        queryString: parts[2]
		    };
		}
		function getSendURL(url, session) {
		    return url.base + "/" + session + "/xhr_send";
		}
		function getUniqueURL(url) {
		    var separator = (url.indexOf('?') === -1) ? "?" : "&";
		    return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
		}
		function replaceHost(url, hostname) {
		    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
		    return urlParts[1] + hostname + urlParts[3];
		}
		function randomNumber(max) {
		    return Math.floor(Math.random() * max);
		}
		function randomString(length) {
		    var result = [];
		    for (var i = 0; i < length; i++) {
		        result.push(randomNumber(32).toString(32));
		    }
		    return result.join('');
		}
		exports.__esModule = true;
		exports["default"] = HTTPSocket;


	/***/ },
	/* 34 */
	/***/ function(module, exports) {

		"use strict";
		var State;
		(function (State) {
		    State[State["CONNECTING"] = 0] = "CONNECTING";
		    State[State["OPEN"] = 1] = "OPEN";
		    State[State["CLOSED"] = 3] = "CLOSED";
		})(State || (State = {}));
		exports.__esModule = true;
		exports["default"] = State;


	/***/ },
	/* 35 */
	/***/ function(module, exports) {

		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr_streaming" + url.queryString;
		    },
		    onHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr" + url.queryString;
		    },
		    onHeartbeat: function () {
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        if (status === 200) {
		            socket.reconnect();
		        }
		        else {
		            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var hooks = {
		    getRequest: function (socket) {
		        var Constructor = runtime_1["default"].getXHRAPI();
		        var xhr = new Constructor();
		        xhr.onreadystatechange = xhr.onprogress = function () {
		            switch (xhr.readyState) {
		                case 3:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    break;
		                case 4:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    socket.emit("finished", xhr.status);
		                    socket.close();
		                    break;
		            }
		        };
		        return xhr;
		    },
		    abortRequest: function (xhr) {
		        xhr.onreadystatechange = null;
		        xhr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var level_1 = __webpack_require__(39);
		var Timeline = (function () {
		    function Timeline(key, session, options) {
		        this.key = key;
		        this.session = session;
		        this.events = [];
		        this.options = options || {};
		        this.sent = 0;
		        this.uniqueID = 0;
		    }
		    Timeline.prototype.log = function (level, event) {
		        if (level <= this.options.level) {
		            this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
		            if (this.options.limit && this.events.length > this.options.limit) {
		                this.events.shift();
		            }
		        }
		    };
		    Timeline.prototype.error = function (event) {
		        this.log(level_1["default"].ERROR, event);
		    };
		    Timeline.prototype.info = function (event) {
		        this.log(level_1["default"].INFO, event);
		    };
		    Timeline.prototype.debug = function (event) {
		        this.log(level_1["default"].DEBUG, event);
		    };
		    Timeline.prototype.isEmpty = function () {
		        return this.events.length === 0;
		    };
		    Timeline.prototype.send = function (sendfn, callback) {
		        var _this = this;
		        var data = Collections.extend({
		            session: this.session,
		            bundle: this.sent + 1,
		            key: this.key,
		            lib: "js",
		            version: this.options.version,
		            cluster: this.options.cluster,
		            features: this.options.features,
		            timeline: this.events
		        }, this.options.params);
		        this.events = [];
		        sendfn(data, function (error, result) {
		            if (!error) {
		                _this.sent++;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        return true;
		    };
		    Timeline.prototype.generateUniqueID = function () {
		        this.uniqueID++;
		        return this.uniqueID;
		    };
		    return Timeline;
		}());
		exports.__esModule = true;
		exports["default"] = Timeline;


	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		"use strict";
		var TimelineLevel;
		(function (TimelineLevel) {
		    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
		    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
		    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
		})(TimelineLevel || (TimelineLevel = {}));
		exports.__esModule = true;
		exports["default"] = TimelineLevel;


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var transport_manager_1 = __webpack_require__(41);
		var Errors = __webpack_require__(30);
		var transport_strategy_1 = __webpack_require__(55);
		var sequential_strategy_1 = __webpack_require__(56);
		var best_connected_ever_strategy_1 = __webpack_require__(57);
		var cached_strategy_1 = __webpack_require__(58);
		var delayed_strategy_1 = __webpack_require__(59);
		var if_strategy_1 = __webpack_require__(60);
		var first_connected_strategy_1 = __webpack_require__(61);
		var runtime_1 = __webpack_require__(2);
		var Transports = runtime_1["default"].Transports;
		exports.build = function (scheme, options) {
		    var context = Collections.extend({}, globalContext, options);
		    return evaluate(scheme, context)[1].strategy;
		};
		var UnsupportedStrategy = {
		    isSupported: function () {
		        return false;
		    },
		    connect: function (_, callback) {
		        var deferred = util_1["default"].defer(function () {
		            callback(new Errors.UnsupportedStrategy());
		        });
		        return {
		            abort: function () {
		                deferred.ensureAborted();
		            },
		            forceMinPriority: function () { }
		        };
		    }
		};
		function returnWithOriginalContext(f) {
		    return function (context) {
		        return [f.apply(this, arguments), context];
		    };
		}
		var globalContext = {
		    extend: function (context, first, second) {
		        return [Collections.extend({}, first, second), context];
		    },
		    def: function (context, name, value) {
		        if (context[name] !== undefined) {
		            throw "Redefining symbol " + name;
		        }
		        context[name] = value;
		        return [undefined, context];
		    },
		    def_transport: function (context, name, type, priority, options, manager) {
		        var transportClass = Transports[type];
		        if (!transportClass) {
		            throw new Errors.UnsupportedTransport(type);
		        }
		        var enabled = (!context.enabledTransports ||
		            Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
		            (!context.disabledTransports ||
		                Collections.arrayIndexOf(context.disabledTransports, name) === -1);
		        var transport;
		        if (enabled) {
		            transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
		                key: context.key,
		                encrypted: context.encrypted,
		                timeline: context.timeline,
		                ignoreNullOrigin: context.ignoreNullOrigin
		            }, options));
		        }
		        else {
		            transport = UnsupportedStrategy;
		        }
		        var newContext = context.def(context, name, transport)[1];
		        newContext.Transports = context.Transports || {};
		        newContext.Transports[name] = transport;
		        return [undefined, newContext];
		    },
		    transport_manager: returnWithOriginalContext(function (_, options) {
		        return new transport_manager_1["default"](options);
		    }),
		    sequential: returnWithOriginalContext(function (_, options) {
		        var strategies = Array.prototype.slice.call(arguments, 2);
		        return new sequential_strategy_1["default"](strategies, options);
		    }),
		    cached: returnWithOriginalContext(function (context, ttl, strategy) {
		        return new cached_strategy_1["default"](strategy, context.Transports, {
		            ttl: ttl,
		            timeline: context.timeline,
		            encrypted: context.encrypted
		        });
		    }),
		    first_connected: returnWithOriginalContext(function (_, strategy) {
		        return new first_connected_strategy_1["default"](strategy);
		    }),
		    best_connected_ever: returnWithOriginalContext(function () {
		        var strategies = Array.prototype.slice.call(arguments, 1);
		        return new best_connected_ever_strategy_1["default"](strategies);
		    }),
		    delayed: returnWithOriginalContext(function (_, delay, strategy) {
		        return new delayed_strategy_1["default"](strategy, { delay: delay });
		    }),
		    "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
		        return new if_strategy_1["default"](test, trueBranch, falseBranch);
		    }),
		    is_supported: returnWithOriginalContext(function (_, strategy) {
		        return function () {
		            return strategy.isSupported();
		        };
		    })
		};
		function isSymbol(expression) {
		    return (typeof expression === "string") && expression.charAt(0) === ":";
		}
		function getSymbolValue(expression, context) {
		    return context[expression.slice(1)];
		}
		function evaluateListOfExpressions(expressions, context) {
		    if (expressions.length === 0) {
		        return [[], context];
		    }
		    var head = evaluate(expressions[0], context);
		    var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
		    return [[head[0]].concat(tail[0]), tail[1]];
		}
		function evaluateString(expression, context) {
		    if (!isSymbol(expression)) {
		        return [expression, context];
		    }
		    var value = getSymbolValue(expression, context);
		    if (value === undefined) {
		        throw "Undefined symbol " + expression;
		    }
		    return [value, context];
		}
		function evaluateArray(expression, context) {
		    if (isSymbol(expression[0])) {
		        var f = getSymbolValue(expression[0], context);
		        if (expression.length > 1) {
		            if (typeof f !== "function") {
		                throw "Calling non-function " + expression[0];
		            }
		            var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
		                return evaluate(arg, Collections.extend({}, context))[0];
		            }));
		            return f.apply(this, args);
		        }
		        else {
		            return [f, context];
		        }
		    }
		    else {
		        return evaluateListOfExpressions(expression, context);
		    }
		}
		function evaluate(expression, context) {
		    if (typeof expression === "string") {
		        return evaluateString(expression, context);
		    }
		    else if (typeof expression === "object") {
		        if (expression instanceof Array && expression.length > 0) {
		            return evaluateArray(expression, context);
		        }
		    }
		    return [expression, context];
		}


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var factory_1 = __webpack_require__(42);
		var TransportManager = (function () {
		    function TransportManager(options) {
		        this.options = options || {};
		        this.livesLeft = this.options.lives || Infinity;
		    }
		    TransportManager.prototype.getAssistant = function (transport) {
		        return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
		            minPingDelay: this.options.minPingDelay,
		            maxPingDelay: this.options.maxPingDelay
		        });
		    };
		    TransportManager.prototype.isAlive = function () {
		        return this.livesLeft > 0;
		    };
		    TransportManager.prototype.reportDeath = function () {
		        this.livesLeft -= 1;
		    };
		    return TransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = TransportManager;


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var assistant_to_the_transport_manager_1 = __webpack_require__(43);
		var handshake_1 = __webpack_require__(44);
		var pusher_authorizer_1 = __webpack_require__(47);
		var timeline_sender_1 = __webpack_require__(48);
		var presence_channel_1 = __webpack_require__(49);
		var private_channel_1 = __webpack_require__(50);
		var channel_1 = __webpack_require__(51);
		var connection_manager_1 = __webpack_require__(53);
		var channels_1 = __webpack_require__(54);
		var Factory = {
		    createChannels: function () {
		        return new channels_1["default"]();
		    },
		    createConnectionManager: function (key, options) {
		        return new connection_manager_1["default"](key, options);
		    },
		    createChannel: function (name, pusher) {
		        return new channel_1["default"](name, pusher);
		    },
		    createPrivateChannel: function (name, pusher) {
		        return new private_channel_1["default"](name, pusher);
		    },
		    createPresenceChannel: function (name, pusher) {
		        return new presence_channel_1["default"](name, pusher);
		    },
		    createTimelineSender: function (timeline, options) {
		        return new timeline_sender_1["default"](timeline, options);
		    },
		    createAuthorizer: function (channel, options) {
		        return new pusher_authorizer_1["default"](channel, options);
		    },
		    createHandshake: function (transport, callback) {
		        return new handshake_1["default"](transport, callback);
		    },
		    createAssistantToTheTransportManager: function (manager, transport, options) {
		        return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
		    }
		};
		exports.__esModule = true;
		exports["default"] = Factory;


	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var AssistantToTheTransportManager = (function () {
		    function AssistantToTheTransportManager(manager, transport, options) {
		        this.manager = manager;
		        this.transport = transport;
		        this.minPingDelay = options.minPingDelay;
		        this.maxPingDelay = options.maxPingDelay;
		        this.pingDelay = undefined;
		    }
		    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
		        var _this = this;
		        options = Collections.extend({}, options, {
		            activityTimeout: this.pingDelay
		        });
		        var connection = this.transport.createConnection(name, priority, key, options);
		        var openTimestamp = null;
		        var onOpen = function () {
		            connection.unbind("open", onOpen);
		            connection.bind("closed", onClosed);
		            openTimestamp = util_1["default"].now();
		        };
		        var onClosed = function (closeEvent) {
		            connection.unbind("closed", onClosed);
		            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
		                _this.manager.reportDeath();
		            }
		            else if (!closeEvent.wasClean && openTimestamp) {
		                var lifespan = util_1["default"].now() - openTimestamp;
		                if (lifespan < 2 * _this.maxPingDelay) {
		                    _this.manager.reportDeath();
		                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
		                }
		            }
		        };
		        connection.bind("open", onOpen);
		        return connection;
		    };
		    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
		        return this.manager.isAlive() && this.transport.isSupported(environment);
		    };
		    return AssistantToTheTransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = AssistantToTheTransportManager;


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var Protocol = __webpack_require__(45);
		var connection_1 = __webpack_require__(46);
		var Handshake = (function () {
		    function Handshake(transport, callback) {
		        this.transport = transport;
		        this.callback = callback;
		        this.bindListeners();
		    }
		    Handshake.prototype.close = function () {
		        this.unbindListeners();
		        this.transport.close();
		    };
		    Handshake.prototype.bindListeners = function () {
		        var _this = this;
		        this.onMessage = function (m) {
		            _this.unbindListeners();
		            var result;
		            try {
		                result = Protocol.processHandshake(m);
		            }
		            catch (e) {
		                _this.finish("error", { error: e });
		                _this.transport.close();
		                return;
		            }
		            if (result.action === "connected") {
		                _this.finish("connected", {
		                    connection: new connection_1["default"](result.id, _this.transport),
		                    activityTimeout: result.activityTimeout
		                });
		            }
		            else {
		                _this.finish(result.action, { error: result.error });
		                _this.transport.close();
		            }
		        };
		        this.onClosed = function (closeEvent) {
		            _this.unbindListeners();
		            var action = Protocol.getCloseAction(closeEvent) || "backoff";
		            var error = Protocol.getCloseError(closeEvent);
		            _this.finish(action, { error: error });
		        };
		        this.transport.bind("message", this.onMessage);
		        this.transport.bind("closed", this.onClosed);
		    };
		    Handshake.prototype.unbindListeners = function () {
		        this.transport.unbind("message", this.onMessage);
		        this.transport.unbind("closed", this.onClosed);
		    };
		    Handshake.prototype.finish = function (action, params) {
		        this.callback(Collections.extend({ transport: this.transport, action: action }, params));
		    };
		    return Handshake;
		}());
		exports.__esModule = true;
		exports["default"] = Handshake;


	/***/ },
	/* 45 */
	/***/ function(module, exports) {

		"use strict";
		exports.decodeMessage = function (message) {
		    try {
		        var params = JSON.parse(message.data);
		        if (typeof params.data === 'string') {
		            try {
		                params.data = JSON.parse(params.data);
		            }
		            catch (e) {
		                if (!(e instanceof SyntaxError)) {
		                    throw e;
		                }
		            }
		        }
		        return params;
		    }
		    catch (e) {
		        throw { type: 'MessageParseError', error: e, data: message.data };
		    }
		};
		exports.encodeMessage = function (message) {
		    return JSON.stringify(message);
		};
		exports.processHandshake = function (message) {
		    message = exports.decodeMessage(message);
		    if (message.event === "pusher:connection_established") {
		        if (!message.data.activity_timeout) {
		            throw "No activity timeout specified in handshake";
		        }
		        return {
		            action: "connected",
		            id: message.data.socket_id,
		            activityTimeout: message.data.activity_timeout * 1000
		        };
		    }
		    else if (message.event === "pusher:error") {
		        return {
		            action: this.getCloseAction(message.data),
		            error: this.getCloseError(message.data)
		        };
		    }
		    else {
		        throw "Invalid handshake";
		    }
		};
		exports.getCloseAction = function (closeEvent) {
		    if (closeEvent.code < 4000) {
		        if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
		            return "backoff";
		        }
		        else {
		            return null;
		        }
		    }
		    else if (closeEvent.code === 4000) {
		        return "ssl_only";
		    }
		    else if (closeEvent.code < 4100) {
		        return "refused";
		    }
		    else if (closeEvent.code < 4200) {
		        return "backoff";
		    }
		    else if (closeEvent.code < 4300) {
		        return "retry";
		    }
		    else {
		        return "refused";
		    }
		};
		exports.getCloseError = function (closeEvent) {
		    if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
		        return {
		            type: 'PusherError',
		            data: {
		                code: closeEvent.code,
		                message: closeEvent.reason || closeEvent.message
		            }
		        };
		    }
		    else {
		        return null;
		    }
		};


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var Protocol = __webpack_require__(45);
		var logger_1 = __webpack_require__(8);
		var Connection = (function (_super) {
		    __extends(Connection, _super);
		    function Connection(id, transport) {
		        _super.call(this);
		        this.id = id;
		        this.transport = transport;
		        this.activityTimeout = transport.activityTimeout;
		        this.bindListeners();
		    }
		    Connection.prototype.handlesActivityChecks = function () {
		        return this.transport.handlesActivityChecks();
		    };
		    Connection.prototype.send = function (data) {
		        return this.transport.send(data);
		    };
		    Connection.prototype.send_event = function (name, data, channel) {
		        var message = { event: name, data: data };
		        if (channel) {
		            message.channel = channel;
		        }
		        logger_1["default"].debug('Event sent', message);
		        return this.send(Protocol.encodeMessage(message));
		    };
		    Connection.prototype.ping = function () {
		        if (this.transport.supportsPing()) {
		            this.transport.ping();
		        }
		        else {
		            this.send_event('pusher:ping', {});
		        }
		    };
		    Connection.prototype.close = function () {
		        this.transport.close();
		    };
		    Connection.prototype.bindListeners = function () {
		        var _this = this;
		        var listeners = {
		            message: function (m) {
		                var message;
		                try {
		                    message = Protocol.decodeMessage(m);
		                }
		                catch (e) {
		                    _this.emit('error', {
		                        type: 'MessageParseError',
		                        error: e,
		                        data: m.data
		                    });
		                }
		                if (message !== undefined) {
		                    logger_1["default"].debug('Event recd', message);
		                    switch (message.event) {
		                        case 'pusher:error':
		                            _this.emit('error', { type: 'PusherError', data: message.data });
		                            break;
		                        case 'pusher:ping':
		                            _this.emit("ping");
		                            break;
		                        case 'pusher:pong':
		                            _this.emit("pong");
		                            break;
		                    }
		                    _this.emit('message', message);
		                }
		            },
		            activity: function () {
		                _this.emit("activity");
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function (closeEvent) {
		                unbindListeners();
		                if (closeEvent && closeEvent.code) {
		                    _this.handleCloseEvent(closeEvent);
		                }
		                _this.transport = null;
		                _this.emit("closed");
		            }
		        };
		        var unbindListeners = function () {
		            Collections.objectApply(listeners, function (listener, event) {
		                _this.transport.unbind(event, listener);
		            });
		        };
		        Collections.objectApply(listeners, function (listener, event) {
		            _this.transport.bind(event, listener);
		        });
		    };
		    Connection.prototype.handleCloseEvent = function (closeEvent) {
		        var action = Protocol.getCloseAction(closeEvent);
		        var error = Protocol.getCloseError(closeEvent);
		        if (error) {
		            this.emit('error', error);
		        }
		        if (action) {
		            this.emit(action);
		        }
		    };
		    return Connection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Connection;


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var Authorizer = (function () {
		    function Authorizer(channel, options) {
		        this.channel = channel;
		        var authTransport = options.authTransport;
		        if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
		            throw "'" + authTransport + "' is not a recognized auth transport";
		        }
		        this.type = authTransport;
		        this.options = options;
		        this.authOptions = (options || {}).auth || {};
		    }
		    Authorizer.prototype.composeQuery = function (socketId) {
		        var query = 'socket_id=' + encodeURIComponent(socketId) +
		            '&channel_name=' + encodeURIComponent(this.channel.name);
		        for (var i in this.authOptions.params) {
		            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
		        }
		        return query;
		    };
		    Authorizer.prototype.authorize = function (socketId, callback) {
		        Authorizer.authorizers = Authorizer.authorizers || runtime_1["default"].getAuthorizers();
		        return Authorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
		    };
		    return Authorizer;
		}());
		exports.__esModule = true;
		exports["default"] = Authorizer;


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var TimelineSender = (function () {
		    function TimelineSender(timeline, options) {
		        this.timeline = timeline;
		        this.options = options || {};
		    }
		    TimelineSender.prototype.send = function (encrypted, callback) {
		        if (this.timeline.isEmpty()) {
		            return;
		        }
		        this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, encrypted), callback);
		    };
		    return TimelineSender;
		}());
		exports.__esModule = true;
		exports["default"] = TimelineSender;


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var private_channel_1 = __webpack_require__(50);
		var logger_1 = __webpack_require__(8);
		var members_1 = __webpack_require__(52);
		var PresenceChannel = (function (_super) {
		    __extends(PresenceChannel, _super);
		    function PresenceChannel(name, pusher) {
		        _super.call(this, name, pusher);
		        this.members = new members_1["default"]();
		    }
		    PresenceChannel.prototype.authorize = function (socketId, callback) {
		        var _this = this;
		        _super.prototype.authorize.call(this, socketId, function (error, authData) {
		            if (!error) {
		                if (authData.channel_data === undefined) {
		                    logger_1["default"].warn("Invalid auth response for channel '" +
		                        _this.name +
		                        "', expected 'channel_data' field");
		                    callback("Invalid auth response");
		                    return;
		                }
		                var channelData = JSON.parse(authData.channel_data);
		                _this.members.setMyID(channelData.user_id);
		            }
		            callback(error, authData);
		        });
		    };
		    PresenceChannel.prototype.handleEvent = function (event, data) {
		        switch (event) {
		            case "pusher_internal:subscription_succeeded":
		                this.subscriptionPending = false;
		                this.subscribed = true;
		                if (this.subscriptionCancelled) {
		                    this.pusher.unsubscribe(this.name);
		                }
		                else {
		                    this.members.onSubscription(data);
		                    this.emit("pusher:subscription_succeeded", this.members);
		                }
		                break;
		            case "pusher_internal:member_added":
		                var addedMember = this.members.addMember(data);
		                this.emit('pusher:member_added', addedMember);
		                break;
		            case "pusher_internal:member_removed":
		                var removedMember = this.members.removeMember(data);
		                if (removedMember) {
		                    this.emit('pusher:member_removed', removedMember);
		                }
		                break;
		            default:
		                private_channel_1["default"].prototype.handleEvent.call(this, event, data);
		        }
		    };
		    PresenceChannel.prototype.disconnect = function () {
		        this.members.reset();
		        _super.prototype.disconnect.call(this);
		    };
		    return PresenceChannel;
		}(private_channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PresenceChannel;


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var factory_1 = __webpack_require__(42);
		var channel_1 = __webpack_require__(51);
		var PrivateChannel = (function (_super) {
		    __extends(PrivateChannel, _super);
		    function PrivateChannel() {
		        _super.apply(this, arguments);
		    }
		    PrivateChannel.prototype.authorize = function (socketId, callback) {
		        var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
		        return authorizer.authorize(socketId, callback);
		    };
		    return PrivateChannel;
		}(channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PrivateChannel;


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var Errors = __webpack_require__(30);
		var logger_1 = __webpack_require__(8);
		var Channel = (function (_super) {
		    __extends(Channel, _super);
		    function Channel(name, pusher) {
		        _super.call(this, function (event, data) {
		            logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
		        });
		        this.name = name;
		        this.pusher = pusher;
		        this.subscribed = false;
		        this.subscriptionPending = false;
		        this.subscriptionCancelled = false;
		    }
		    Channel.prototype.authorize = function (socketId, callback) {
		        return callback(false, {});
		    };
		    Channel.prototype.trigger = function (event, data) {
		        if (event.indexOf("client-") !== 0) {
		            throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
		        }
		        return this.pusher.send_event(event, data, this.name);
		    };
		    Channel.prototype.disconnect = function () {
		        this.subscribed = false;
		    };
		    Channel.prototype.handleEvent = function (event, data) {
		        if (event.indexOf("pusher_internal:") === 0) {
		            if (event === "pusher_internal:subscription_succeeded") {
		                this.subscriptionPending = false;
		                this.subscribed = true;
		                if (this.subscriptionCancelled) {
		                    this.pusher.unsubscribe(this.name);
		                }
		                else {
		                    this.emit("pusher:subscription_succeeded", data);
		                }
		            }
		        }
		        else {
		            this.emit(event, data);
		        }
		    };
		    Channel.prototype.subscribe = function () {
		        var _this = this;
		        if (this.subscribed) {
		            return;
		        }
		        this.subscriptionPending = true;
		        this.subscriptionCancelled = false;
		        this.authorize(this.pusher.connection.socket_id, function (error, data) {
		            if (error) {
		                _this.handleEvent('pusher:subscription_error', data);
		            }
		            else {
		                _this.pusher.send_event('pusher:subscribe', {
		                    auth: data.auth,
		                    channel_data: data.channel_data,
		                    channel: _this.name
		                });
		            }
		        });
		    };
		    Channel.prototype.unsubscribe = function () {
		        this.subscribed = false;
		        this.pusher.send_event('pusher:unsubscribe', {
		            channel: this.name
		        });
		    };
		    Channel.prototype.cancelSubscription = function () {
		        this.subscriptionCancelled = true;
		    };
		    Channel.prototype.reinstateSubscription = function () {
		        this.subscriptionCancelled = false;
		    };
		    return Channel;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Channel;


	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var Members = (function () {
		    function Members() {
		        this.reset();
		    }
		    Members.prototype.get = function (id) {
		        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
		            return {
		                id: id,
		                info: this.members[id]
		            };
		        }
		        else {
		            return null;
		        }
		    };
		    Members.prototype.each = function (callback) {
		        var _this = this;
		        Collections.objectApply(this.members, function (member, id) {
		            callback(_this.get(id));
		        });
		    };
		    Members.prototype.setMyID = function (id) {
		        this.myID = id;
		    };
		    Members.prototype.onSubscription = function (subscriptionData) {
		        this.members = subscriptionData.presence.hash;
		        this.count = subscriptionData.presence.count;
		        this.me = this.get(this.myID);
		    };
		    Members.prototype.addMember = function (memberData) {
		        if (this.get(memberData.user_id) === null) {
		            this.count++;
		        }
		        this.members[memberData.user_id] = memberData.user_info;
		        return this.get(memberData.user_id);
		    };
		    Members.prototype.removeMember = function (memberData) {
		        var member = this.get(memberData.user_id);
		        if (member) {
		            delete this.members[memberData.user_id];
		            this.count--;
		        }
		        return member;
		    };
		    Members.prototype.reset = function () {
		        this.members = {};
		        this.count = 0;
		        this.myID = null;
		        this.me = null;
		    };
		    return Members;
		}());
		exports.__esModule = true;
		exports["default"] = Members;


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var timers_1 = __webpack_require__(12);
		var logger_1 = __webpack_require__(8);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var ConnectionManager = (function (_super) {
		    __extends(ConnectionManager, _super);
		    function ConnectionManager(key, options) {
		        var _this = this;
		        _super.call(this);
		        this.key = key;
		        this.options = options || {};
		        this.state = "initialized";
		        this.connection = null;
		        this.encrypted = !!options.encrypted;
		        this.timeline = this.options.timeline;
		        this.connectionCallbacks = this.buildConnectionCallbacks();
		        this.errorCallbacks = this.buildErrorCallbacks();
		        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
		        var Network = runtime_1["default"].getNetwork();
		        Network.bind("online", function () {
		            _this.timeline.info({ netinfo: "online" });
		            if (_this.state === "connecting" || _this.state === "unavailable") {
		                _this.retryIn(0);
		            }
		        });
		        Network.bind("offline", function () {
		            _this.timeline.info({ netinfo: "offline" });
		            if (_this.connection) {
		                _this.sendActivityCheck();
		            }
		        });
		        this.updateStrategy();
		    }
		    ConnectionManager.prototype.connect = function () {
		        if (this.connection || this.runner) {
		            return;
		        }
		        if (!this.strategy.isSupported()) {
		            this.updateState("failed");
		            return;
		        }
		        this.updateState("connecting");
		        this.startConnecting();
		        this.setUnavailableTimer();
		    };
		    ;
		    ConnectionManager.prototype.send = function (data) {
		        if (this.connection) {
		            return this.connection.send(data);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.send_event = function (name, data, channel) {
		        if (this.connection) {
		            return this.connection.send_event(name, data, channel);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnect = function () {
		        this.disconnectInternally();
		        this.updateState("disconnected");
		    };
		    ;
		    ConnectionManager.prototype.isEncrypted = function () {
		        return this.encrypted;
		    };
		    ;
		    ConnectionManager.prototype.startConnecting = function () {
		        var _this = this;
		        var callback = function (error, handshake) {
		            if (error) {
		                _this.runner = _this.strategy.connect(0, callback);
		            }
		            else {
		                if (handshake.action === "error") {
		                    _this.emit("error", { type: "HandshakeError", error: handshake.error });
		                    _this.timeline.error({ handshakeError: handshake.error });
		                }
		                else {
		                    _this.abortConnecting();
		                    _this.handshakeCallbacks[handshake.action](handshake);
		                }
		            }
		        };
		        this.runner = this.strategy.connect(0, callback);
		    };
		    ;
		    ConnectionManager.prototype.abortConnecting = function () {
		        if (this.runner) {
		            this.runner.abort();
		            this.runner = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnectInternally = function () {
		        this.abortConnecting();
		        this.clearRetryTimer();
		        this.clearUnavailableTimer();
		        if (this.connection) {
		            var connection = this.abandonConnection();
		            connection.close();
		        }
		    };
		    ;
		    ConnectionManager.prototype.updateStrategy = function () {
		        this.strategy = this.options.getStrategy({
		            key: this.key,
		            timeline: this.timeline,
		            encrypted: this.encrypted
		        });
		    };
		    ;
		    ConnectionManager.prototype.retryIn = function (delay) {
		        var _this = this;
		        this.timeline.info({ action: "retry", delay: delay });
		        if (delay > 0) {
		            this.emit("connecting_in", Math.round(delay / 1000));
		        }
		        this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
		            _this.disconnectInternally();
		            _this.connect();
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearRetryTimer = function () {
		        if (this.retryTimer) {
		            this.retryTimer.ensureAborted();
		            this.retryTimer = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.setUnavailableTimer = function () {
		        var _this = this;
		        this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
		            _this.updateState("unavailable");
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearUnavailableTimer = function () {
		        if (this.unavailableTimer) {
		            this.unavailableTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.sendActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        this.connection.ping();
		        this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
		            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
		            _this.retryIn(0);
		        });
		    };
		    ;
		    ConnectionManager.prototype.resetActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        if (!this.connection.handlesActivityChecks()) {
		            this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
		                _this.sendActivityCheck();
		            });
		        }
		    };
		    ;
		    ConnectionManager.prototype.stopActivityCheck = function () {
		        if (this.activityTimer) {
		            this.activityTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.buildConnectionCallbacks = function () {
		        var _this = this;
		        return {
		            message: function (message) {
		                _this.resetActivityCheck();
		                _this.emit('message', message);
		            },
		            ping: function () {
		                _this.send_event('pusher:pong', {});
		            },
		            activity: function () {
		                _this.resetActivityCheck();
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function () {
		                _this.abandonConnection();
		                if (_this.shouldRetry()) {
		                    _this.retryIn(1000);
		                }
		            }
		        };
		    };
		    ;
		    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
		        var _this = this;
		        return Collections.extend({}, errorCallbacks, {
		            connected: function (handshake) {
		                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
		                _this.clearUnavailableTimer();
		                _this.setConnection(handshake.connection);
		                _this.socket_id = _this.connection.id;
		                _this.updateState("connected", { socket_id: _this.socket_id });
		            }
		        });
		    };
		    ;
		    ConnectionManager.prototype.buildErrorCallbacks = function () {
		        var _this = this;
		        var withErrorEmitted = function (callback) {
		            return function (result) {
		                if (result.error) {
		                    _this.emit("error", { type: "WebSocketError", error: result.error });
		                }
		                callback(result);
		            };
		        };
		        return {
		            ssl_only: withErrorEmitted(function () {
		                _this.encrypted = true;
		                _this.updateStrategy();
		                _this.retryIn(0);
		            }),
		            refused: withErrorEmitted(function () {
		                _this.disconnect();
		            }),
		            backoff: withErrorEmitted(function () {
		                _this.retryIn(1000);
		            }),
		            retry: withErrorEmitted(function () {
		                _this.retryIn(0);
		            })
		        };
		    };
		    ;
		    ConnectionManager.prototype.setConnection = function (connection) {
		        this.connection = connection;
		        for (var event in this.connectionCallbacks) {
		            this.connection.bind(event, this.connectionCallbacks[event]);
		        }
		        this.resetActivityCheck();
		    };
		    ;
		    ConnectionManager.prototype.abandonConnection = function () {
		        if (!this.connection) {
		            return;
		        }
		        this.stopActivityCheck();
		        for (var event in this.connectionCallbacks) {
		            this.connection.unbind(event, this.connectionCallbacks[event]);
		        }
		        var connection = this.connection;
		        this.connection = null;
		        return connection;
		    };
		    ConnectionManager.prototype.updateState = function (newState, data) {
		        var previousState = this.state;
		        this.state = newState;
		        if (previousState !== newState) {
		            var newStateDescription = newState;
		            if (newStateDescription === "connected") {
		                newStateDescription += " with new socket ID " + data.socket_id;
		            }
		            logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
		            this.timeline.info({ state: newState, params: data });
		            this.emit('state_change', { previous: previousState, current: newState });
		            this.emit(newState, data);
		        }
		    };
		    ConnectionManager.prototype.shouldRetry = function () {
		        return this.state === "connecting" || this.state === "connected";
		    };
		    return ConnectionManager;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = ConnectionManager;


	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var factory_1 = __webpack_require__(42);
		var Channels = (function () {
		    function Channels() {
		        this.channels = {};
		    }
		    Channels.prototype.add = function (name, pusher) {
		        if (!this.channels[name]) {
		            this.channels[name] = createChannel(name, pusher);
		        }
		        return this.channels[name];
		    };
		    Channels.prototype.all = function () {
		        return Collections.values(this.channels);
		    };
		    Channels.prototype.find = function (name) {
		        return this.channels[name];
		    };
		    Channels.prototype.remove = function (name) {
		        var channel = this.channels[name];
		        delete this.channels[name];
		        return channel;
		    };
		    Channels.prototype.disconnect = function () {
		        Collections.objectApply(this.channels, function (channel) {
		            channel.disconnect();
		        });
		    };
		    return Channels;
		}());
		exports.__esModule = true;
		exports["default"] = Channels;
		function createChannel(name, pusher) {
		    if (name.indexOf('private-') === 0) {
		        return factory_1["default"].createPrivateChannel(name, pusher);
		    }
		    else if (name.indexOf('presence-') === 0) {
		        return factory_1["default"].createPresenceChannel(name, pusher);
		    }
		    else {
		        return factory_1["default"].createChannel(name, pusher);
		    }
		}


	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var factory_1 = __webpack_require__(42);
		var util_1 = __webpack_require__(11);
		var Errors = __webpack_require__(30);
		var Collections = __webpack_require__(9);
		var TransportStrategy = (function () {
		    function TransportStrategy(name, priority, transport, options) {
		        this.name = name;
		        this.priority = priority;
		        this.transport = transport;
		        this.options = options || {};
		    }
		    TransportStrategy.prototype.isSupported = function () {
		        return this.transport.isSupported({
		            encrypted: this.options.encrypted
		        });
		    };
		    TransportStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        if (!this.isSupported()) {
		            return failAttempt(new Errors.UnsupportedStrategy(), callback);
		        }
		        else if (this.priority < minPriority) {
		            return failAttempt(new Errors.TransportPriorityTooLow(), callback);
		        }
		        var connected = false;
		        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
		        var handshake = null;
		        var onInitialized = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.connect();
		        };
		        var onOpen = function () {
		            handshake = factory_1["default"].createHandshake(transport, function (result) {
		                connected = true;
		                unbindListeners();
		                callback(null, result);
		            });
		        };
		        var onError = function (error) {
		            unbindListeners();
		            callback(error);
		        };
		        var onClosed = function () {
		            unbindListeners();
		            var serializedTransport;
		            serializedTransport = Collections.safeJSONStringify(transport);
		            callback(new Errors.TransportClosed(serializedTransport));
		        };
		        var unbindListeners = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.unbind("open", onOpen);
		            transport.unbind("error", onError);
		            transport.unbind("closed", onClosed);
		        };
		        transport.bind("initialized", onInitialized);
		        transport.bind("open", onOpen);
		        transport.bind("error", onError);
		        transport.bind("closed", onClosed);
		        transport.initialize();
		        return {
		            abort: function () {
		                if (connected) {
		                    return;
		                }
		                unbindListeners();
		                if (handshake) {
		                    handshake.close();
		                }
		                else {
		                    transport.close();
		                }
		            },
		            forceMinPriority: function (p) {
		                if (connected) {
		                    return;
		                }
		                if (_this.priority < p) {
		                    if (handshake) {
		                        handshake.close();
		                    }
		                    else {
		                        transport.close();
		                    }
		                }
		            }
		        };
		    };
		    return TransportStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = TransportStrategy;
		function failAttempt(error, callback) {
		    util_1["default"].defer(function () {
		        callback(error);
		    });
		    return {
		        abort: function () { },
		        forceMinPriority: function () { }
		    };
		}


	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var timers_1 = __webpack_require__(12);
		var SequentialStrategy = (function () {
		    function SequentialStrategy(strategies, options) {
		        this.strategies = strategies;
		        this.loop = Boolean(options.loop);
		        this.failFast = Boolean(options.failFast);
		        this.timeout = options.timeout;
		        this.timeoutLimit = options.timeoutLimit;
		    }
		    SequentialStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    SequentialStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        var strategies = this.strategies;
		        var current = 0;
		        var timeout = this.timeout;
		        var runner = null;
		        var tryNextStrategy = function (error, handshake) {
		            if (handshake) {
		                callback(null, handshake);
		            }
		            else {
		                current = current + 1;
		                if (_this.loop) {
		                    current = current % strategies.length;
		                }
		                if (current < strategies.length) {
		                    if (timeout) {
		                        timeout = timeout * 2;
		                        if (_this.timeoutLimit) {
		                            timeout = Math.min(timeout, _this.timeoutLimit);
		                        }
		                    }
		                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
		                }
		                else {
		                    callback(true);
		                }
		            }
		        };
		        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
		        var timer = null;
		        var runner = null;
		        if (options.timeout > 0) {
		            timer = new timers_1.OneOffTimer(options.timeout, function () {
		                runner.abort();
		                callback(true);
		            });
		        }
		        runner = strategy.connect(minPriority, function (error, handshake) {
		            if (error && timer && timer.isRunning() && !options.failFast) {
		                return;
		            }
		            if (timer) {
		                timer.ensureAborted();
		            }
		            callback(error, handshake);
		        });
		        return {
		            abort: function () {
		                if (timer) {
		                    timer.ensureAborted();
		                }
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                runner.forceMinPriority(p);
		            }
		        };
		    };
		    return SequentialStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = SequentialStrategy;


	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var BestConnectedEverStrategy = (function () {
		    function BestConnectedEverStrategy(strategies) {
		        this.strategies = strategies;
		    }
		    BestConnectedEverStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
		        return connect(this.strategies, minPriority, function (i, runners) {
		            return function (error, handshake) {
		                runners[i].error = error;
		                if (error) {
		                    if (allRunnersFailed(runners)) {
		                        callback(true);
		                    }
		                    return;
		                }
		                Collections.apply(runners, function (runner) {
		                    runner.forceMinPriority(handshake.transport.priority);
		                });
		                callback(null, handshake);
		            };
		        });
		    };
		    return BestConnectedEverStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = BestConnectedEverStrategy;
		function connect(strategies, minPriority, callbackBuilder) {
		    var runners = Collections.map(strategies, function (strategy, i, _, rs) {
		        return strategy.connect(minPriority, callbackBuilder(i, rs));
		    });
		    return {
		        abort: function () {
		            Collections.apply(runners, abortRunner);
		        },
		        forceMinPriority: function (p) {
		            Collections.apply(runners, function (runner) {
		                runner.forceMinPriority(p);
		            });
		        }
		    };
		}
		function allRunnersFailed(runners) {
		    return Collections.all(runners, function (runner) {
		        return Boolean(runner.error);
		    });
		}
		function abortRunner(runner) {
		    if (!runner.error && !runner.aborted) {
		        runner.abort();
		        runner.aborted = true;
		    }
		}


	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var sequential_strategy_1 = __webpack_require__(56);
		var Collections = __webpack_require__(9);
		var CachedStrategy = (function () {
		    function CachedStrategy(strategy, transports, options) {
		        this.strategy = strategy;
		        this.transports = transports;
		        this.ttl = options.ttl || 1800 * 1000;
		        this.encrypted = options.encrypted;
		        this.timeline = options.timeline;
		    }
		    CachedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    CachedStrategy.prototype.connect = function (minPriority, callback) {
		        var encrypted = this.encrypted;
		        var info = fetchTransportCache(encrypted);
		        var strategies = [this.strategy];
		        if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
		            var transport = this.transports[info.transport];
		            if (transport) {
		                this.timeline.info({
		                    cached: true,
		                    transport: info.transport,
		                    latency: info.latency
		                });
		                strategies.push(new sequential_strategy_1["default"]([transport], {
		                    timeout: info.latency * 2 + 1000,
		                    failFast: true
		                }));
		            }
		        }
		        var startTimestamp = util_1["default"].now();
		        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
		            if (error) {
		                flushTransportCache(encrypted);
		                if (strategies.length > 0) {
		                    startTimestamp = util_1["default"].now();
		                    runner = strategies.pop().connect(minPriority, cb);
		                }
		                else {
		                    callback(error);
		                }
		            }
		            else {
		                storeTransportCache(encrypted, handshake.transport.name, util_1["default"].now() - startTimestamp);
		                callback(null, handshake);
		            }
		        });
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return CachedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = CachedStrategy;
		function getTransportCacheKey(encrypted) {
		    return "pusherTransport" + (encrypted ? "Encrypted" : "Unencrypted");
		}
		function fetchTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            var serializedCache = storage[getTransportCacheKey(encrypted)];
		            if (serializedCache) {
		                return JSON.parse(serializedCache);
		            }
		        }
		        catch (e) {
		            flushTransportCache(encrypted);
		        }
		    }
		    return null;
		}
		function storeTransportCache(encrypted, transport, latency) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            storage[getTransportCacheKey(encrypted)] = Collections.safeJSONStringify({
		                timestamp: util_1["default"].now(),
		                transport: transport,
		                latency: latency
		            });
		        }
		        catch (e) {
		        }
		    }
		}
		function flushTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            delete storage[getTransportCacheKey(encrypted)];
		        }
		        catch (e) {
		        }
		    }
		}


	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var timers_1 = __webpack_require__(12);
		var DelayedStrategy = (function () {
		    function DelayedStrategy(strategy, _a) {
		        var number = _a.delay;
		        this.strategy = strategy;
		        this.options = { delay: number };
		    }
		    DelayedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    DelayedStrategy.prototype.connect = function (minPriority, callback) {
		        var strategy = this.strategy;
		        var runner;
		        var timer = new timers_1.OneOffTimer(this.options.delay, function () {
		            runner = strategy.connect(minPriority, callback);
		        });
		        return {
		            abort: function () {
		                timer.ensureAborted();
		                if (runner) {
		                    runner.abort();
		                }
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return DelayedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = DelayedStrategy;


	/***/ },
	/* 60 */
	/***/ function(module, exports) {

		"use strict";
		var IfStrategy = (function () {
		    function IfStrategy(test, trueBranch, falseBranch) {
		        this.test = test;
		        this.trueBranch = trueBranch;
		        this.falseBranch = falseBranch;
		    }
		    IfStrategy.prototype.isSupported = function () {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.isSupported();
		    };
		    IfStrategy.prototype.connect = function (minPriority, callback) {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.connect(minPriority, callback);
		    };
		    return IfStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = IfStrategy;


	/***/ },
	/* 61 */
	/***/ function(module, exports) {

		"use strict";
		var FirstConnectedStrategy = (function () {
		    function FirstConnectedStrategy(strategy) {
		        this.strategy = strategy;
		    }
		    FirstConnectedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
		        var runner = this.strategy.connect(minPriority, function (error, handshake) {
		            if (handshake) {
		                runner.abort();
		            }
		            callback(error, handshake);
		        });
		        return runner;
		    };
		    return FirstConnectedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = FirstConnectedStrategy;


	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var defaults_1 = __webpack_require__(5);
		exports.getGlobalConfig = function () {
		    return {
		        wsHost: defaults_1["default"].host,
		        wsPort: defaults_1["default"].ws_port,
		        wssPort: defaults_1["default"].wss_port,
		        httpHost: defaults_1["default"].sockjs_host,
		        httpPort: defaults_1["default"].sockjs_http_port,
		        httpsPort: defaults_1["default"].sockjs_https_port,
		        httpPath: defaults_1["default"].sockjs_path,
		        statsHost: defaults_1["default"].stats_host,
		        authEndpoint: defaults_1["default"].channel_auth_endpoint,
		        authTransport: defaults_1["default"].channel_auth_transport,
		        activity_timeout: defaults_1["default"].activity_timeout,
		        pong_timeout: defaults_1["default"].pong_timeout,
		        unavailable_timeout: defaults_1["default"].unavailable_timeout
		    };
		};
		exports.getClusterConfig = function (clusterName) {
		    return {
		        wsHost: "ws-" + clusterName + ".pusher.com",
		        httpHost: "sockjs-" + clusterName + ".pusher.com"
		    };
		};


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <div id=\"search-form\">\n        <form v-on:submit.prevent=\"newSubscription\">\n            <input class=\"swish-input\" v-model=\"newSearchTerm\" placeholder=\"Enter your search term now\" />\n            <button class=\"bright-blue-hover btn-white\">Search</button>\n        </form>\n    </div>\n\n    <div class=\"container tweets-container\">\n        <div id=\"channels-list\">\n            <div class=\"channel\" v-for=\"channel in channels\">\n                <h3>\n                    <img class=\"twitter-icon\" src=\"img/twitter.png\" width=\"30\" /> Tweets for {{ channel.term }}\n                </h3>\n                <div id=\"subscription-controls\">\n                    <button v-on:click.prevent=\"toggleSearch(channel)\">\n          {{channel.active ? 'Stop' : 'Restart'}} Stream\n        </button>\n                    <button v-on:click.prevent=\"clearSearch(channel)\">\n          Remove Results\n        </button>\n                </div>\n                <subscription-component :channel=\"channel\" :pusher=\"pusher\"></subscription-component>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _template = __webpack_require__(7);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubscriptionComponent = _vue2.default.extend({
	    template: _template2.default,
	    props: ['channel', 'pusher'],
	    created: function created() {
	        this.subscribeToChannel();
	    },
	    data: function data() {
	        return {
	            tweets: []
	        };
	    },

	    watch: {
	        'channel.active': function channelActive() {
	            if (!this.channel.active && this.subscribed) {
	                this.unsubscribe();
	            } else if (this.channel.active && !this.subscribed) {
	                this.subscribeToChannel();
	            }
	        }
	    },
	    methods: {
	        subscribeToChannel: function subscribeToChannel() {
	            var _this = this;

	            this.pusherChannel = this.pusher.subscribe(btoa(this.channel.term));
	            this.pusherChannel.bind('new_tweet', function (data) {
	                _this.newTweet(data); // Don't worry, we haven't defined this func yet!
	            });
	            this.subscribed = true;
	        },
	        newTweet: function newTweet(data) {
	            var _this2 = this;

	            this.tweets.push(data);
	            this.$nextTick(function () {
	                var listItem = document.querySelector('.channel-' + _this2.channel.term);
	                listItem.scrollTop = listItem.scrollHeight;
	            });
	        },
	        unsubscribe: function unsubscribe() {
	            this.pusherChannel.unsubscribe(btoa(this.channel.term));
	            this.pusherChannel && this.pusherChannel.unbind();
	            this.subscribed = false;
	        },
	        beforeDestroy: function beforeDestroy() {
	            this.unsubscribe();
	        }
	    }
	});

	exports.default = SubscriptionComponent;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <ul class=\"channel-results channel-{{channel.term}}\">\n    <li v-for=\"result in tweets\">\n      <p class=\"white\">{{ result.tweet.text }}</p>\n    </li>\n  </ul>\n</div>\n"

/***/ }
/******/ ]);