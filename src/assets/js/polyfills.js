/**
 * Cross-Browser Polyfills & Feature Detection
 * Ensures compatibility across Chrome, Firefox, and Safari
 */

/* ============================================
   Feature Detection Utilities
   ============================================ */

const BrowserSupport = {
  // Detect specific browsers
  isChrome:
    navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1,
  isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
  isSafari:
    navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1,
  isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,

  // Feature detection (better than browser detection)
  supports: {
    grid: CSS.supports('display', 'grid'),
    flexbox: CSS.supports('display', 'flex'),
    sticky: CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky'),
    backdropFilter:
      CSS.supports('backdrop-filter', 'blur(10px)') ||
      CSS.supports('-webkit-backdrop-filter', 'blur(10px)'),
    objectFit: CSS.supports('object-fit', 'cover'),
    customProperties: CSS.supports('--test', '0'),
    intersectionObserver: 'IntersectionObserver' in window,
    fetch: 'fetch' in window,
    promises: 'Promise' in window,
    localStorage: (function () {
      try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    })(),
  },

  // Log browser and support info
  logSupport() {
    // Development-only logging removed for production
  },
};

/* ============================================
   Promise Polyfill (for older browsers)
   ============================================ */

if (!BrowserSupport.supports.promises) {
  console.warn('Promise not supported - consider loading a polyfill from polyfill.io');
}

/* ============================================
   Fetch API Polyfill Wrapper
   ============================================ */

if (!BrowserSupport.supports.fetch) {
  console.warn('Fetch API not supported - using XMLHttpRequest fallback');

  window.fetch = function (url, options = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method || 'GET', url);

      // Set headers
      if (options.headers) {
        Object.keys(options.headers).forEach((key) => {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      xhr.onload = () => {
        resolve({
          ok: xhr.status >= 200 && xhr.status < 300,
          status: xhr.status,
          statusText: xhr.statusText,
          json: () => Promise.resolve(JSON.parse(xhr.responseText)),
          text: () => Promise.resolve(xhr.responseText),
        });
      };

      xhr.onerror = () => reject(new Error('Network request failed'));
      xhr.send(options.body || null);
    });
  };
}

/* ============================================
   Object.assign Polyfill (for IE11)
   ============================================ */

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, ...sources) {
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      const to = Object(target);
      sources.forEach((source) => {
        if (source !== null && source !== undefined) {
          for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key];
            }
          }
        }
      });
      return to;
    },
    writable: true,
    configurable: true,
  });
}

/* ============================================
   Array Methods Polyfills
   ============================================ */

// Array.from
if (!Array.from) {
  Array.from = (function () {
    const toStr = Object.prototype.toString;
    const isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    const toInteger = function (value) {
      const number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    const maxSafeInteger = Math.pow(2, 53) - 1;
    const toLength = function (value) {
      const len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike) {
      const C = this;
      const items = Object(arrayLike);
      if (arrayLike === null || arrayLike === undefined) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      let T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      const len = toLength(items.length);
      const A = isCallable(C) ? Object(new C(len)) : new Array(len);
      let k = 0;
      let kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  })();
}

// Array.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function (predicate) {
      if (this === null || this === undefined) {
        throw new TypeError('"this" is null or not defined');
      }
      const o = Object(this);
      const len = o.length >>> 0;
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      const thisArg = arguments[1];
      let k = 0;
      while (k < len) {
        const kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        k++;
      }
      return undefined;
    },
    configurable: true,
    writable: true,
  });
}

/* ============================================
   IntersectionObserver Polyfill Detection
   ============================================ */

if (!BrowserSupport.supports.intersectionObserver) {
  console.warn(
    'IntersectionObserver not supported - animations may not work. Consider loading polyfill from polyfill.io',
  );
}

/* ============================================
   LocalStorage Safe Wrapper
   Safari private mode blocks localStorage
   ============================================ */

const SafeStorage = {
  _fallbackStorage: {},

  setItem(key, value) {
    try {
      if (BrowserSupport.supports.localStorage) {
        localStorage.setItem(key, value);
      } else {
        this._fallbackStorage[key] = value;
      }
    } catch (e) {
      console.warn('Storage failed, using memory fallback:', e);
      this._fallbackStorage[key] = value;
    }
  },

  getItem(key) {
    try {
      if (BrowserSupport.supports.localStorage) {
        return localStorage.getItem(key);
      } else {
        return this._fallbackStorage[key] || null;
      }
    } catch (e) {
      console.warn('Storage retrieval failed:', e);
      return this._fallbackStorage[key] || null;
    }
  },

  removeItem(key) {
    try {
      if (BrowserSupport.supports.localStorage) {
        localStorage.removeItem(key);
      } else {
        delete this._fallbackStorage[key];
      }
    } catch (e) {
      console.warn('Storage removal failed:', e);
      delete this._fallbackStorage[key];
    }
  },
};

/* ============================================
   Custom Element.closest() Polyfill
   ============================================ */

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    let el = this;
    do {
      if (Element.prototype.matches.call(el, s)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/* ============================================
   requestAnimationFrame Polyfill
   ============================================ */

(function () {
  let lastTime = 0;
  const vendors = ['webkit', 'moz'];
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      const currTime = new Date().getTime();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

/* ============================================
   Smooth Scroll Polyfill for Safari/IE
   ============================================ */

const SmoothScroll = {
  scrollTo(element, duration = 500) {
    // Use native smooth scroll if supported
    if ('scrollBehavior' in document.documentElement.style) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Fallback smooth scroll
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return (c / 2) * t * t + b;
      }
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  },
};

/* ============================================
   CSS Custom Properties Fallback
   ============================================ */

if (!BrowserSupport.supports.customProperties) {
  console.warn('CSS Custom Properties not supported - using hardcoded fallbacks');
  // In production, you'd use a PostCSS plugin to convert custom properties
}

/* ============================================
   Export for use in other modules
   ============================================ */

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BrowserSupport, SafeStorage, SmoothScroll };
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    BrowserSupport.logSupport();
  });
} else {
  BrowserSupport.logSupport();
}
