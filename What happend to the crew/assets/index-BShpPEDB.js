(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function sg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ph = { exports: {} },
  Gi = {},
  gh = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gs = Symbol.for("react.element"),
  ig = Symbol.for("react.portal"),
  og = Symbol.for("react.fragment"),
  ag = Symbol.for("react.strict_mode"),
  lg = Symbol.for("react.profiler"),
  cg = Symbol.for("react.provider"),
  ug = Symbol.for("react.context"),
  dg = Symbol.for("react.forward_ref"),
  hg = Symbol.for("react.suspense"),
  fg = Symbol.for("react.memo"),
  mg = Symbol.for("react.lazy"),
  Bc = Symbol.iterator;
function pg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bc && e[Bc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vh = Object.assign,
  wh = {};
function dr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = wh),
    (this.updater = n || yh));
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xh() {}
xh.prototype = dr.prototype;
function dl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = wh),
    (this.updater = n || yh));
}
var hl = (dl.prototype = new xh());
hl.constructor = dl;
vh(hl, dr.prototype);
hl.isPureReactComponent = !0;
var Vc = Array.isArray,
  bh = Object.prototype.hasOwnProperty,
  fl = { current: null },
  Sh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eh(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bh.call(t, r) && !Sh.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: gs,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: fl.current,
  };
}
function gg(e, t) {
  return {
    $$typeof: gs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ml(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gs;
}
function yg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wc = /\/+/g;
function fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yg("" + e.key)
    : t.toString(36);
}
function Zs(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gs:
          case ig:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + fo(o, 0) : r),
      Vc(s)
        ? ((n = ""),
          e != null && (n = e.replace(Wc, "$&/") + "/"),
          Zs(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (ml(s) &&
            (s = gg(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Wc, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Vc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + fo(i, a);
      o += Zs(i, t, n, l, s);
    }
  else if (((l = pg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + fo(i, a++)), (o += Zs(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Rs(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Zs(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function vg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  qs = { transition: null },
  wg = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: qs,
    ReactCurrentOwner: fl,
  };
function Th() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Rs,
  forEach: function (e, t, n) {
    Rs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Rs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ml(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
$.Component = dr;
$.Fragment = og;
$.Profiler = lg;
$.PureComponent = dl;
$.StrictMode = ag;
$.Suspense = hg;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg;
$.act = Th;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = vh({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = fl.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      bh.call(t, l) &&
        !Sh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: gs, type: e.type, key: s, ref: i, props: r, _owner: o };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: ug,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cg, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Eh;
$.createFactory = function (e) {
  var t = Eh.bind(null, e);
  return ((t.type = e), t);
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: dg, render: e };
};
$.isValidElement = ml;
$.lazy = function (e) {
  return { $$typeof: mg, _payload: { _status: -1, _result: e }, _init: vg };
};
$.memo = function (e, t) {
  return { $$typeof: fg, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = qs.transition;
  qs.transition = {};
  try {
    e();
  } finally {
    qs.transition = t;
  }
};
$.unstable_act = Th;
$.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Pe.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
$.useId = function () {
  return Pe.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Pe.current.useRef(e);
};
$.useState = function (e) {
  return Pe.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Pe.current.useTransition();
};
$.version = "18.3.1";
gh.exports = $;
var A = gh.exports;
const ea = sg(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xg = A,
  bg = Symbol.for("react.element"),
  Sg = Symbol.for("react.fragment"),
  Eg = Object.prototype.hasOwnProperty,
  Tg = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Eg.call(t, r) && !Ag.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: bg,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Tg.current,
  };
}
Gi.Fragment = Sg;
Gi.jsx = Ah;
Gi.jsxs = Ah;
ph.exports = Gi;
var u = ph.exports,
  ta = {},
  kh = { exports: {} },
  $e = {},
  Ih = { exports: {} },
  Ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, F) {
    var _ = k.length;
    k.push(F);
    e: for (; 0 < _; ) {
      var J = (_ - 1) >>> 1,
        D = k[J];
      if (0 < s(D, F)) ((k[J] = F), (k[_] = D), (_ = J));
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var F = k[0],
      _ = k.pop();
    if (_ !== F) {
      k[0] = _;
      e: for (var J = 0, D = k.length, L = D >>> 1; J < L; ) {
        var B = 2 * (J + 1) - 1,
          K = k[B],
          b = B + 1,
          G = k[b];
        if (0 > s(K, _))
          b < D && 0 > s(G, K)
            ? ((k[J] = G), (k[b] = _), (J = b))
            : ((k[J] = K), (k[B] = _), (J = B));
        else if (b < D && 0 > s(G, _)) ((k[J] = G), (k[b] = _), (J = b));
        else break e;
      }
    }
    return F;
  }
  function s(k, F) {
    var _ = k.sortIndex - F.sortIndex;
    return _ !== 0 ? _ : k.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    h = null,
    f = 3,
    w = !1,
    y = !1,
    g = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(k) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= k)
        (r(c), (F.sortIndex = F.expirationTime), t(l, F));
      else break;
      F = n(c);
    }
  }
  function S(k) {
    if (((g = !1), v(k), !y))
      if (n(l) !== null) ((y = !0), U(E));
      else {
        var F = n(c);
        F !== null && P(S, F.startTime - k);
      }
  }
  function E(k, F) {
    ((y = !1), g && ((g = !1), p(x), (x = -1)), (w = !0));
    var _ = f;
    try {
      for (
        v(F), h = n(l);
        h !== null && (!(h.expirationTime > F) || (k && !j()));
      ) {
        var J = h.callback;
        if (typeof J == "function") {
          ((h.callback = null), (f = h.priorityLevel));
          var D = J(h.expirationTime <= F);
          ((F = e.unstable_now()),
            typeof D == "function" ? (h.callback = D) : h === n(l) && r(l),
            v(F));
        } else r(l);
        h = n(l);
      }
      if (h !== null) var L = !0;
      else {
        var B = n(c);
        (B !== null && P(S, B.startTime - F), (L = !1));
      }
      return L;
    } finally {
      ((h = null), (f = _), (w = !1));
    }
  }
  var I = !1,
    C = null,
    x = -1,
    O = 5,
    M = -1;
  function j() {
    return !(e.unstable_now() - M < O);
  }
  function Z() {
    if (C !== null) {
      var k = e.unstable_now();
      M = k;
      var F = !0;
      try {
        F = C(!0, k);
      } finally {
        F ? ne() : ((I = !1), (C = null));
      }
    } else I = !1;
  }
  var ne;
  if (typeof m == "function")
    ne = function () {
      m(Z);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      R = H.port2;
    ((H.port1.onmessage = Z),
      (ne = function () {
        R.postMessage(null);
      }));
  } else
    ne = function () {
      T(Z, 0);
    };
  function U(k) {
    ((C = k), I || ((I = !0), ne()));
  }
  function P(k, F) {
    x = T(function () {
      k(e.unstable_now());
    }, F);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), U(E));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = f;
      }
      var _ = f;
      f = F;
      try {
        return k();
      } finally {
        f = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, F) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var _ = f;
      f = k;
      try {
        return F();
      } finally {
        f = _;
      }
    }),
    (e.unstable_scheduleCallback = function (k, F, _) {
      var J = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? J + _ : J))
          : (_ = J),
        k)
      ) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return (
        (D = _ + D),
        (k = {
          id: d++,
          callback: F,
          priorityLevel: k,
          startTime: _,
          expirationTime: D,
          sortIndex: -1,
        }),
        _ > J
          ? ((k.sortIndex = _),
            t(c, k),
            n(l) === null &&
              k === n(c) &&
              (g ? (p(x), (x = -1)) : (g = !0), P(S, _ - J)))
          : ((k.sortIndex = D), t(l, k), y || w || ((y = !0), U(E))),
        k
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (k) {
      var F = f;
      return function () {
        var _ = f;
        f = F;
        try {
          return k.apply(this, arguments);
        } finally {
          f = _;
        }
      };
    }));
})(Ch);
Ih.exports = Ch;
var kg = Ih.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = A,
  Ke = kg;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Rh = new Set(),
  Jr = {};
function An(e, t) {
  (tr(e, t), tr(e + "Capture", t));
}
function tr(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) Rh.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  na = Object.prototype.hasOwnProperty,
  Cg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hc = {},
  _c = {};
function Rg(e) {
  return na.call(_c, e)
    ? !0
    : na.call(Hc, e)
      ? !1
      : Cg.test(e)
        ? (_c[e] = !0)
        : ((Hc[e] = !0), !1);
}
function Ng(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lg(e, t, n, r) {
  if (t === null || typeof t > "u" || Ng(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pl = /[\-:]([a-z])/g;
function gl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, gl);
    Ae[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, gl);
    Ae[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pl, gl);
  Ae[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yl(e, t, n, r) {
  var s = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lg(t, n, s, r) && (n = null),
    r || s === null
      ? Rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ns = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  vl = Symbol.for("react.strict_mode"),
  ra = Symbol.for("react.profiler"),
  Nh = Symbol.for("react.provider"),
  Lh = Symbol.for("react.context"),
  wl = Symbol.for("react.forward_ref"),
  sa = Symbol.for("react.suspense"),
  ia = Symbol.for("react.suspense_list"),
  xl = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  Dh = Symbol.for("react.offscreen"),
  Gc = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gc && e[Gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  mo;
function Cr(e) {
  if (mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mo = (t && t[1]) || "";
    }
  return (
    `
` +
    mo +
    e
  );
}
var po = !1;
function go(e, t) {
  if (!e || po) return "";
  po = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((po = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function Dg(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = go(e.type, !1)), e);
    case 11:
      return ((e = go(e.type.render, !1)), e);
    case 1:
      return ((e = go(e.type, !0)), e);
    default:
      return "";
  }
}
function oa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Ln:
      return "Portal";
    case ra:
      return "Profiler";
    case vl:
      return "StrictMode";
    case sa:
      return "Suspense";
    case ia:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lh:
        return (e.displayName || "Context") + ".Consumer";
      case Nh:
        return (e._context.displayName || "Context") + ".Provider";
      case wl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xl:
        return (
          (t = e.displayName || null),
          t !== null ? t : oa(e.type) || "Memo"
        );
      case Bt:
        ((t = e._payload), (e = e._init));
        try {
          return oa(e(t));
        } catch {}
    }
  return null;
}
function Og(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oa(t);
    case 8:
      return t === vl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Oh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mg(e) {
  var t = Oh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ls(e) {
  e._valueTracker || (e._valueTracker = Mg(e));
}
function Mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Oh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function di(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function aa(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Ph(e, t) {
  ((t = t.checked), t != null && yl(e, "checked", t, !1));
}
function la(e, t) {
  Ph(e, t);
  var n = Xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ca(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ca(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Yc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ca(e, t, n) {
  (t !== "number" || di(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Xt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function jh(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Jc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function da(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ds,
  Uh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ds = Ds || document.createElement("div"),
          Ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ds.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function (e) {
  Pg.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]));
  });
});
function Bh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Vh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Bh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var jg = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ha(e, t) {
  if (t) {
    if (jg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function fa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ma = null;
function bl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pa = null,
  Zn = null,
  qn = null;
function $c(e) {
  if ((e = ws(e))) {
    if (typeof pa != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = $i(t)), pa(e.stateNode, e.type, t));
  }
}
function Wh(e) {
  Zn ? (qn ? qn.push(e) : (qn = [e])) : (Zn = e);
}
function Hh() {
  if (Zn) {
    var e = Zn,
      t = qn;
    if (((qn = Zn = null), $c(e), t)) for (e = 0; e < t.length; e++) $c(t[e]);
  }
}
function _h(e, t) {
  return e(t);
}
function Gh() {}
var yo = !1;
function zh(e, t, n) {
  if (yo) return e(t, n);
  yo = !0;
  try {
    return _h(e, t, n);
  } finally {
    ((yo = !1), (Zn !== null || qn !== null) && (Gh(), Hh()));
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var ga = !1;
if (Nt)
  try {
    var vr = {};
    (Object.defineProperty(vr, "passive", {
      get: function () {
        ga = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr));
  } catch {
    ga = !1;
  }
function Fg(e, t, n, r, s, i, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var jr = !1,
  hi = null,
  fi = !1,
  ya = null,
  Ug = {
    onError: function (e) {
      ((jr = !0), (hi = e));
    },
  };
function Bg(e, t, n, r, s, i, o, a, l) {
  ((jr = !1), (hi = null), Fg.apply(Ug, arguments));
}
function Vg(e, t, n, r, s, i, o, a, l) {
  if ((Bg.apply(this, arguments), jr)) {
    if (jr) {
      var c = hi;
      ((jr = !1), (hi = null));
    } else throw Error(N(198));
    fi || ((fi = !0), (ya = c));
  }
}
function kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zc(e) {
  if (kn(e) !== e) throw Error(N(188));
}
function Wg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (Zc(s), e);
        if (i === r) return (Zc(s), t);
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Kh(e) {
  return ((e = Wg(e)), e !== null ? Jh(e) : null);
}
function Jh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $h = Ke.unstable_scheduleCallback,
  qc = Ke.unstable_cancelCallback,
  Hg = Ke.unstable_shouldYield,
  _g = Ke.unstable_requestPaint,
  pe = Ke.unstable_now,
  Gg = Ke.unstable_getCurrentPriorityLevel,
  Sl = Ke.unstable_ImmediatePriority,
  Zh = Ke.unstable_UserBlockingPriority,
  mi = Ke.unstable_NormalPriority,
  zg = Ke.unstable_LowPriority,
  qh = Ke.unstable_IdlePriority,
  zi = null,
  vt = null;
function Yg(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : $g,
  Kg = Math.log,
  Jg = Math.LN2;
function $g(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Kg(e) / Jg) | 0)) | 0);
}
var Os = 64,
  Ms = 4194304;
function Nr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function pi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = Nr(a)) : ((i &= o), i !== 0 && (r = Nr(i)));
  } else ((o = n & ~s), o !== 0 ? (r = Nr(o)) : i !== 0 && (r = Nr(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - ht(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Zg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - ht(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = Zg(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function va(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qh() {
  var e = Os;
  return ((Os <<= 1), !(Os & 4194240) && (Os = 64), e);
}
function vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n));
}
function Qg(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - ht(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function El(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var ee = 0;
function Xh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ef,
  Tl,
  tf,
  nf,
  rf,
  wa = !1,
  Ps = [],
  zt = null,
  Yt = null,
  Kt = null,
  qr = new Map(),
  Qr = new Map(),
  Wt = [],
  Xg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Qc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function wr(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ws(t)), t !== null && Tl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function ey(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((zt = wr(zt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Yt = wr(Yt, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Kt = wr(Kt, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (qr.set(i, wr(qr.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Qr.set(i, wr(Qr.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function sf(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yh(n)), t !== null)) {
          ((e.blockedOn = t),
            rf(e.priority, function () {
              tf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ma = r), n.target.dispatchEvent(r), (ma = null));
    } else return ((t = ws(n)), t !== null && Tl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Xc(e, t, n) {
  Qs(e) && n.delete(t);
}
function ty() {
  ((wa = !1),
    zt !== null && Qs(zt) && (zt = null),
    Yt !== null && Qs(Yt) && (Yt = null),
    Kt !== null && Qs(Kt) && (Kt = null),
    qr.forEach(Xc),
    Qr.forEach(Xc));
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wa ||
      ((wa = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, ty)));
}
function Xr(e) {
  function t(s) {
    return xr(s, e);
  }
  if (0 < Ps.length) {
    xr(Ps[0], e);
    for (var n = 1; n < Ps.length; n++) {
      var r = Ps[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && xr(zt, e),
      Yt !== null && xr(Yt, e),
      Kt !== null && xr(Kt, e),
      qr.forEach(t),
      Qr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    ((r = Wt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    (sf(n), n.blockedOn === null && Wt.shift());
}
var Qn = Pt.ReactCurrentBatchConfig,
  gi = !0;
function ny(e, t, n, r) {
  var s = ee,
    i = Qn.transition;
  Qn.transition = null;
  try {
    ((ee = 1), Al(e, t, n, r));
  } finally {
    ((ee = s), (Qn.transition = i));
  }
}
function ry(e, t, n, r) {
  var s = ee,
    i = Qn.transition;
  Qn.transition = null;
  try {
    ((ee = 4), Al(e, t, n, r));
  } finally {
    ((ee = s), (Qn.transition = i));
  }
}
function Al(e, t, n, r) {
  if (gi) {
    var s = xa(e, t, n, r);
    if (s === null) (Co(e, t, r, yi, n), Qc(e, r));
    else if (ey(s, e, t, n, r)) r.stopPropagation();
    else if ((Qc(e, r), t & 4 && -1 < Xg.indexOf(e))) {
      for (; s !== null; ) {
        var i = ws(s);
        if (
          (i !== null && ef(i),
          (i = xa(e, t, n, r)),
          i === null && Co(e, t, r, yi, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Co(e, t, r, null, n);
  }
}
var yi = null;
function xa(e, t, n, r) {
  if (((yi = null), (e = bl(r)), (e = fn(e)), e !== null))
    if (((t = kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((yi = e), null);
}
function of(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gg()) {
        case Sl:
          return 1;
        case Zh:
          return 4;
        case mi:
        case zg:
          return 16;
        case qh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  kl = null,
  Xs = null;
function af() {
  if (Xs) return Xs;
  var e,
    t = kl,
    n = t.length,
    r,
    s = "value" in _t ? _t.value : _t.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (Xs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function js() {
  return !0;
}
function eu() {
  return !1;
}
function Ze(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? js
        : eu),
      (this.isPropagationStopped = eu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = js));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = js));
      },
      persist: function () {},
      isPersistent: js,
    }),
    t
  );
}
var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Il = Ze(hr),
  vs = ue({}, hr, { view: 0, detail: 0 }),
  sy = Ze(vs),
  wo,
  xo,
  br,
  Yi = ue({}, vs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== br &&
            (br && e.type === "mousemove"
              ? ((wo = e.screenX - br.screenX), (xo = e.screenY - br.screenY))
              : (xo = wo = 0),
            (br = e)),
          wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xo;
    },
  }),
  tu = Ze(Yi),
  iy = ue({}, Yi, { dataTransfer: 0 }),
  oy = Ze(iy),
  ay = ue({}, vs, { relatedTarget: 0 }),
  bo = Ze(ay),
  ly = ue({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cy = Ze(ly),
  uy = ue({}, hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dy = Ze(uy),
  hy = ue({}, hr, { data: 0 }),
  nu = Ze(hy),
  fy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  my = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  py = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = py[e]) ? !!t[e] : !1;
}
function Cl() {
  return gy;
}
var yy = ue({}, vs, {
    key: function (e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ei(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? my[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cl,
    charCode: function (e) {
      return e.type === "keypress" ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ei(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  vy = Ze(yy),
  wy = ue({}, Yi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ru = Ze(wy),
  xy = ue({}, vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cl,
  }),
  by = Ze(xy),
  Sy = ue({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = Ze(Sy),
  Ty = ue({}, Yi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ay = Ze(Ty),
  ky = [9, 13, 27, 32],
  Rl = Nt && "CompositionEvent" in window,
  Fr = null;
Nt && "documentMode" in document && (Fr = document.documentMode);
var Iy = Nt && "TextEvent" in window && !Fr,
  lf = Nt && (!Rl || (Fr && 8 < Fr && 11 >= Fr)),
  su = " ",
  iu = !1;
function cf(e, t) {
  switch (e) {
    case "keyup":
      return ky.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function uf(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var On = !1;
function Cy(e, t) {
  switch (e) {
    case "compositionend":
      return uf(t);
    case "keypress":
      return t.which !== 32 ? null : ((iu = !0), su);
    case "textInput":
      return ((e = t.data), e === su && iu ? null : e);
    default:
      return null;
  }
}
function Ry(e, t) {
  if (On)
    return e === "compositionend" || (!Rl && cf(e, t))
      ? ((e = af()), (Xs = kl = _t = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ny = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ny[e.type] : t === "textarea";
}
function df(e, t, n, r) {
  (Wh(r),
    (t = vi(t, "onChange")),
    0 < t.length &&
      ((n = new Il("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ur = null,
  es = null;
function Ly(e) {
  Sf(e, 0);
}
function Ki(e) {
  var t = jn(e);
  if (Mh(t)) return e;
}
function Dy(e, t) {
  if (e === "change") return t;
}
var hf = !1;
if (Nt) {
  var So;
  if (Nt) {
    var Eo = "oninput" in document;
    if (!Eo) {
      var au = document.createElement("div");
      (au.setAttribute("oninput", "return;"),
        (Eo = typeof au.oninput == "function"));
    }
    So = Eo;
  } else So = !1;
  hf = So && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  Ur && (Ur.detachEvent("onpropertychange", ff), (es = Ur = null));
}
function ff(e) {
  if (e.propertyName === "value" && Ki(es)) {
    var t = [];
    (df(t, es, e, bl(e)), zh(Ly, t));
  }
}
function Oy(e, t, n) {
  e === "focusin"
    ? (lu(), (Ur = t), (es = n), Ur.attachEvent("onpropertychange", ff))
    : e === "focusout" && lu();
}
function My(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ki(es);
}
function Py(e, t) {
  if (e === "click") return Ki(t);
}
function jy(e, t) {
  if (e === "input" || e === "change") return Ki(t);
}
function Fy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : Fy;
function ts(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!na.call(t, s) || !mt(e[s], t[s])) return !1;
  }
  return !0;
}
function cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cu(n);
  }
}
function mf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? mf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function pf() {
  for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = di(e.document);
  }
  return t;
}
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Uy(e) {
  var t = pf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Nl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = uu(n, i)));
        var o = uu(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var By = Nt && "documentMode" in document && 11 >= document.documentMode,
  Mn = null,
  ba = null,
  Br = null,
  Sa = !1;
function du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sa ||
    Mn == null ||
    Mn !== di(r) ||
    ((r = Mn),
    "selectionStart" in r && Nl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Br && ts(Br, r)) ||
      ((Br = r),
      (r = vi(ba, "onSelect")),
      0 < r.length &&
        ((t = new Il("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function Fs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: Fs("Animation", "AnimationEnd"),
    animationiteration: Fs("Animation", "AnimationIteration"),
    animationstart: Fs("Animation", "AnimationStart"),
    transitionend: Fs("Transition", "TransitionEnd"),
  },
  To = {},
  gf = {};
Nt &&
  ((gf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function Ji(e) {
  if (To[e]) return To[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gf) return (To[e] = t[n]);
  return e;
}
var yf = Ji("animationend"),
  vf = Ji("animationiteration"),
  wf = Ji("animationstart"),
  xf = Ji("transitionend"),
  bf = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function rn(e, t) {
  (bf.set(e, t), An(t, [e]));
}
for (var Ao = 0; Ao < hu.length; Ao++) {
  var ko = hu[Ao],
    Vy = ko.toLowerCase(),
    Wy = ko[0].toUpperCase() + ko.slice(1);
  rn(Vy, "on" + Wy);
}
rn(yf, "onAnimationEnd");
rn(vf, "onAnimationIteration");
rn(wf, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(xf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function fu(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Vg(r, t, void 0, e), (e.currentTarget = null));
}
function Sf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (fu(s, a, c), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (fu(s, a, c), (i = l));
        }
    }
  }
  if (fi) throw ((e = ya), (fi = !1), (ya = null), e);
}
function re(e, t) {
  var n = t[Ia];
  n === void 0 && (n = t[Ia] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ef(t, e, 2, !1), n.add(r));
}
function Io(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ef(n, e, r, t));
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[Us]) {
    ((e[Us] = !0),
      Rh.forEach(function (n) {
        n !== "selectionchange" && (Hy.has(n) || Io(n, !1, e), Io(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || ((t[Us] = !0), Io("selectionchange", !1, t));
  }
}
function Ef(e, t, n, r) {
  switch (of(t)) {
    case 1:
      var s = ny;
      break;
    case 4:
      s = ry;
      break;
    default:
      s = Al;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !ga ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Co(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = fn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  zh(function () {
    var c = i,
      d = bl(n),
      h = [];
    e: {
      var f = bf.get(e);
      if (f !== void 0) {
        var w = Il,
          y = e;
        switch (e) {
          case "keypress":
            if (ei(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = vy;
            break;
          case "focusin":
            ((y = "focus"), (w = bo));
            break;
          case "focusout":
            ((y = "blur"), (w = bo));
            break;
          case "beforeblur":
          case "afterblur":
            w = bo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = oy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = by;
            break;
          case yf:
          case vf:
          case wf:
            w = cy;
            break;
          case xf:
            w = Ey;
            break;
          case "scroll":
            w = sy;
            break;
          case "wheel":
            w = Ay;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = dy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ru;
        }
        var g = (t & 4) !== 0,
          T = !g && e === "scroll",
          p = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = c, v; m !== null; ) {
          v = m;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              p !== null && ((S = Zr(m, p)), S != null && g.push(rs(m, S, v)))),
            T)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new w(f, y, null, n, d)), h.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ma &&
            (y = n.relatedTarget || n.fromElement) &&
            (fn(y) || y[Lt]))
        )
          break e;
        if (
          (w || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = c),
              (y = y ? fn(y) : null),
              y !== null &&
                ((T = kn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = c)),
          w !== y)
        ) {
          if (
            ((g = tu),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ru),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (T = w == null ? f : jn(w)),
            (v = y == null ? f : jn(y)),
            (f = new g(S, m + "leave", w, n, d)),
            (f.target = T),
            (f.relatedTarget = v),
            (S = null),
            fn(d) === c &&
              ((g = new g(p, m + "enter", y, n, d)),
              (g.target = v),
              (g.relatedTarget = T),
              (S = g)),
            (T = S),
            w && y)
          )
            t: {
              for (g = w, p = y, m = 0, v = g; v; v = Rn(v)) m++;
              for (v = 0, S = p; S; S = Rn(S)) v++;
              for (; 0 < m - v; ) ((g = Rn(g)), m--);
              for (; 0 < v - m; ) ((p = Rn(p)), v--);
              for (; m--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                ((g = Rn(g)), (p = Rn(p)));
              }
              g = null;
            }
          else g = null;
          (w !== null && mu(h, f, w, g, !1),
            y !== null && T !== null && mu(h, T, y, g, !0));
        }
      }
      e: {
        if (
          ((f = c ? jn(c) : window),
          (w = f.nodeName && f.nodeName.toLowerCase()),
          w === "select" || (w === "input" && f.type === "file"))
        )
          var E = Dy;
        else if (ou(f))
          if (hf) E = jy;
          else {
            E = My;
            var I = Oy;
          }
        else
          (w = f.nodeName) &&
            w.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = Py);
        if (E && (E = E(e, c))) {
          df(h, E, n, d);
          break e;
        }
        (I && I(e, f, c),
          e === "focusout" &&
            (I = f._wrapperState) &&
            I.controlled &&
            f.type === "number" &&
            ca(f, "number", f.value));
      }
      switch (((I = c ? jn(c) : window), e)) {
        case "focusin":
          (ou(I) || I.contentEditable === "true") &&
            ((Mn = I), (ba = c), (Br = null));
          break;
        case "focusout":
          Br = ba = Mn = null;
          break;
        case "mousedown":
          Sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Sa = !1), du(h, n, d));
          break;
        case "selectionchange":
          if (By) break;
        case "keydown":
        case "keyup":
          du(h, n, d);
      }
      var C;
      if (Rl)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        On
          ? cf(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      (x &&
        (lf &&
          n.locale !== "ko" &&
          (On || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && On && (C = af())
            : ((_t = d),
              (kl = "value" in _t ? _t.value : _t.textContent),
              (On = !0))),
        (I = vi(c, x)),
        0 < I.length &&
          ((x = new nu(x, e, null, n, d)),
          h.push({ event: x, listeners: I }),
          C ? (x.data = C) : ((C = uf(n)), C !== null && (x.data = C)))),
        (C = Iy ? Cy(e, n) : Ry(e, n)) &&
          ((c = vi(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new nu("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: c }),
            (d.data = C))));
    }
    Sf(h, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Zr(e, n)),
      i != null && r.unshift(rs(e, i, s)),
      (i = Zr(e, t)),
      i != null && r.push(rs(e, i, s))),
      (e = e.return));
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mu(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((l = Zr(n, i)), l != null && o.unshift(rs(n, l, a)))
        : s || ((l = Zr(n, i)), l != null && o.push(rs(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _y = /\r\n?/g,
  Gy = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _y,
      `
`,
    )
    .replace(Gy, "");
}
function Bs(e, t, n) {
  if (((t = pu(t)), pu(e) !== t && n)) throw Error(N(425));
}
function wi() {}
var Ea = null,
  Ta = null;
function Aa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ka = typeof setTimeout == "function" ? setTimeout : void 0,
  zy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gu = typeof Promise == "function" ? Promise : void 0,
  Yy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gu < "u"
        ? function (e) {
            return gu.resolve(null).then(e).catch(Ky);
          }
        : ka;
function Ky(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ro(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Xr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Xr(t);
}
function Jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function yu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + fr,
  ss = "__reactProps$" + fr,
  Lt = "__reactContainer$" + fr,
  Ia = "__reactEvents$" + fr,
  Jy = "__reactListeners$" + fr,
  $y = "__reactHandles$" + fr;
function fn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = yu(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = yu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ws(e) {
  return (
    (e = e[yt] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function $i(e) {
  return e[ss] || null;
}
var Ca = [],
  Fn = -1;
function sn(e) {
  return { current: e };
}
function se(e) {
  0 > Fn || ((e.current = Ca[Fn]), (Ca[Fn] = null), Fn--);
}
function te(e, t) {
  (Fn++, (Ca[Fn] = e.current), (e.current = t));
}
var en = {},
  Le = sn(en),
  Ve = sn(!1),
  xn = en;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function We(e) {
  return ((e = e.childContextTypes), e != null);
}
function xi() {
  (se(Ve), se(Le));
}
function vu(e, t, n) {
  if (Le.current !== en) throw Error(N(168));
  (te(Le, t), te(Ve, n));
}
function Tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(N(108, Og(e) || "Unknown", s));
  return ue({}, n, r);
}
function bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (xn = Le.current),
    te(Le, e),
    te(Ve, Ve.current),
    !0
  );
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = Tf(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Ve),
      se(Le),
      te(Le, e))
    : se(Ve),
    te(Ve, n));
}
var Et = null,
  Zi = !1,
  No = !1;
function Af(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Zy(e) {
  ((Zi = !0), Af(e));
}
function on() {
  if (!No && Et !== null) {
    No = !0;
    var e = 0,
      t = ee;
    try {
      var n = Et;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Et = null), (Zi = !1));
    } catch (s) {
      throw (Et !== null && (Et = Et.slice(e + 1)), $h(Sl, on), s);
    } finally {
      ((ee = t), (No = !1));
    }
  }
  return null;
}
var Un = [],
  Bn = 0,
  Si = null,
  Ei = 0,
  tt = [],
  nt = 0,
  bn = null,
  Tt = 1,
  At = "";
function cn(e, t) {
  ((Un[Bn++] = Ei), (Un[Bn++] = Si), (Si = e), (Ei = t));
}
function kf(e, t, n) {
  ((tt[nt++] = Tt), (tt[nt++] = At), (tt[nt++] = bn), (bn = e));
  var r = Tt;
  e = At;
  var s = 32 - ht(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - ht(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Tt = (1 << (32 - ht(t) + s)) | (n << s) | r),
      (At = i + e));
  } else ((Tt = (1 << i) | (n << s) | r), (At = e));
}
function Ll(e) {
  e.return !== null && (cn(e, 1), kf(e, 1, 0));
}
function Dl(e) {
  for (; e === Si; )
    ((Si = Un[--Bn]), (Un[Bn] = null), (Ei = Un[--Bn]), (Un[Bn] = null));
  for (; e === bn; )
    ((bn = tt[--nt]),
      (tt[nt] = null),
      (At = tt[--nt]),
      (tt[nt] = null),
      (Tt = tt[--nt]),
      (tt[nt] = null));
}
var ze = null,
  Ge = null,
  oe = !1,
  dt = null;
function If(e, t) {
  var n = rt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ge = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bn !== null ? { id: Tt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ra(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Na(e) {
  if (oe) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (Ra(e)) throw Error(N(418));
        t = Jt(n.nextSibling);
        var r = ze;
        t && xu(e, t)
          ? If(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (ze = e));
      }
    } else {
      if (Ra(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (oe = !1), (ze = e));
    }
  }
}
function bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Vs(e) {
  if (e !== ze) return !1;
  if (!oe) return (bu(e), (oe = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Aa(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Ra(e)) throw (Cf(), Error(N(418)));
    for (; t; ) (If(e, t), (t = Jt(t.nextSibling)));
  }
  if ((bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = ze ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cf() {
  for (var e = Ge; e; ) e = Jt(e.nextSibling);
}
function rr() {
  ((Ge = ze = null), (oe = !1));
}
function Ol(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var qy = Pt.ReactCurrentBatchConfig;
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ws(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Su(e) {
  var t = e._init;
  return t(e._payload);
}
function Rf(e) {
  function t(p, m) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [m]), (p.flags |= 16)) : v.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) (t(p, m), (m = m.sibling));
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function s(p, m) {
    return ((p = Qt(p, m)), (p.index = 0), (p.sibling = null), p);
  }
  function i(p, m, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((p.flags |= 2), m) : v)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, m, v, S) {
    return m === null || m.tag !== 6
      ? ((m = Fo(v, p.mode, S)), (m.return = p), m)
      : ((m = s(m, v)), (m.return = p), m);
  }
  function l(p, m, v, S) {
    var E = v.type;
    return E === Dn
      ? d(p, m, v.props.children, S, v.key)
      : m !== null &&
          (m.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Bt &&
              Su(E) === m.type))
        ? ((S = s(m, v.props)), (S.ref = Sr(p, m, v)), (S.return = p), S)
        : ((S = ai(v.type, v.key, v.props, null, p.mode, S)),
          (S.ref = Sr(p, m, v)),
          (S.return = p),
          S);
  }
  function c(p, m, v, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Uo(v, p.mode, S)), (m.return = p), m)
      : ((m = s(m, v.children || [])), (m.return = p), m);
  }
  function d(p, m, v, S, E) {
    return m === null || m.tag !== 7
      ? ((m = vn(v, p.mode, S, E)), (m.return = p), m)
      : ((m = s(m, v)), (m.return = p), m);
  }
  function h(p, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = Fo("" + m, p.mode, v)), (m.return = p), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ns:
          return (
            (v = ai(m.type, m.key, m.props, null, p.mode, v)),
            (v.ref = Sr(p, null, m)),
            (v.return = p),
            v
          );
        case Ln:
          return ((m = Uo(m, p.mode, v)), (m.return = p), m);
        case Bt:
          var S = m._init;
          return h(p, S(m._payload), v);
      }
      if (Rr(m) || yr(m))
        return ((m = vn(m, p.mode, v, null)), (m.return = p), m);
      Ws(p, m);
    }
    return null;
  }
  function f(p, m, v, S) {
    var E = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : a(p, m, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ns:
          return v.key === E ? l(p, m, v, S) : null;
        case Ln:
          return v.key === E ? c(p, m, v, S) : null;
        case Bt:
          return ((E = v._init), f(p, m, E(v._payload), S));
      }
      if (Rr(v) || yr(v)) return E !== null ? null : d(p, m, v, S, null);
      Ws(p, v);
    }
    return null;
  }
  function w(p, m, v, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((p = p.get(v) || null), a(m, p, "" + S, E));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ns:
          return (
            (p = p.get(S.key === null ? v : S.key) || null),
            l(m, p, S, E)
          );
        case Ln:
          return (
            (p = p.get(S.key === null ? v : S.key) || null),
            c(m, p, S, E)
          );
        case Bt:
          var I = S._init;
          return w(p, m, v, I(S._payload), E);
      }
      if (Rr(S) || yr(S)) return ((p = p.get(v) || null), d(m, p, S, E, null));
      Ws(m, S);
    }
    return null;
  }
  function y(p, m, v, S) {
    for (
      var E = null, I = null, C = m, x = (m = 0), O = null;
      C !== null && x < v.length;
      x++
    ) {
      C.index > x ? ((O = C), (C = null)) : (O = C.sibling);
      var M = f(p, C, v[x], S);
      if (M === null) {
        C === null && (C = O);
        break;
      }
      (e && C && M.alternate === null && t(p, C),
        (m = i(M, m, x)),
        I === null ? (E = M) : (I.sibling = M),
        (I = M),
        (C = O));
    }
    if (x === v.length) return (n(p, C), oe && cn(p, x), E);
    if (C === null) {
      for (; x < v.length; x++)
        ((C = h(p, v[x], S)),
          C !== null &&
            ((m = i(C, m, x)),
            I === null ? (E = C) : (I.sibling = C),
            (I = C)));
      return (oe && cn(p, x), E);
    }
    for (C = r(p, C); x < v.length; x++)
      ((O = w(C, p, x, v[x], S)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? x : O.key),
          (m = i(O, m, x)),
          I === null ? (E = O) : (I.sibling = O),
          (I = O)));
    return (
      e &&
        C.forEach(function (j) {
          return t(p, j);
        }),
      oe && cn(p, x),
      E
    );
  }
  function g(p, m, v, S) {
    var E = yr(v);
    if (typeof E != "function") throw Error(N(150));
    if (((v = E.call(v)), v == null)) throw Error(N(151));
    for (
      var I = (E = null), C = m, x = (m = 0), O = null, M = v.next();
      C !== null && !M.done;
      x++, M = v.next()
    ) {
      C.index > x ? ((O = C), (C = null)) : (O = C.sibling);
      var j = f(p, C, M.value, S);
      if (j === null) {
        C === null && (C = O);
        break;
      }
      (e && C && j.alternate === null && t(p, C),
        (m = i(j, m, x)),
        I === null ? (E = j) : (I.sibling = j),
        (I = j),
        (C = O));
    }
    if (M.done) return (n(p, C), oe && cn(p, x), E);
    if (C === null) {
      for (; !M.done; x++, M = v.next())
        ((M = h(p, M.value, S)),
          M !== null &&
            ((m = i(M, m, x)),
            I === null ? (E = M) : (I.sibling = M),
            (I = M)));
      return (oe && cn(p, x), E);
    }
    for (C = r(p, C); !M.done; x++, M = v.next())
      ((M = w(C, p, x, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? x : M.key),
          (m = i(M, m, x)),
          I === null ? (E = M) : (I.sibling = M),
          (I = M)));
    return (
      e &&
        C.forEach(function (Z) {
          return t(p, Z);
        }),
      oe && cn(p, x),
      E
    );
  }
  function T(p, m, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Dn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ns:
          e: {
            for (var E = v.key, I = m; I !== null; ) {
              if (I.key === E) {
                if (((E = v.type), E === Dn)) {
                  if (I.tag === 7) {
                    (n(p, I.sibling),
                      (m = s(I, v.props.children)),
                      (m.return = p),
                      (p = m));
                    break e;
                  }
                } else if (
                  I.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Bt &&
                    Su(E) === I.type)
                ) {
                  (n(p, I.sibling),
                    (m = s(I, v.props)),
                    (m.ref = Sr(p, I, v)),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, I);
                break;
              } else t(p, I);
              I = I.sibling;
            }
            v.type === Dn
              ? ((m = vn(v.props.children, p.mode, S, v.key)),
                (m.return = p),
                (p = m))
              : ((S = ai(v.type, v.key, v.props, null, p.mode, S)),
                (S.ref = Sr(p, m, v)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case Ln:
          e: {
            for (I = v.key; m !== null; ) {
              if (m.key === I)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  (n(p, m.sibling),
                    (m = s(m, v.children || [])),
                    (m.return = p),
                    (p = m));
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            ((m = Uo(v, p.mode, S)), (m.return = p), (p = m));
          }
          return o(p);
        case Bt:
          return ((I = v._init), T(p, m, I(v._payload), S));
      }
      if (Rr(v)) return y(p, m, v, S);
      if (yr(v)) return g(p, m, v, S);
      Ws(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = s(m, v)), (m.return = p), (p = m))
          : (n(p, m), (m = Fo(v, p.mode, S)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return T;
}
var sr = Rf(!0),
  Nf = Rf(!1),
  Ti = sn(null),
  Ai = null,
  Vn = null,
  Ml = null;
function Pl() {
  Ml = Vn = Ai = null;
}
function jl(e) {
  var t = Ti.current;
  (se(Ti), (e._currentValue = t));
}
function La(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xn(e, t) {
  ((Ai = e),
    (Ml = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null)));
}
function it(e) {
  var t = e._currentValue;
  if (Ml !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (Ai === null) throw Error(N(308));
      ((Vn = e), (Ai.dependencies = { lanes: 0, firstContext: e }));
    } else Vn = Vn.next = e;
  return t;
}
var mn = null;
function Fl(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Lf(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Fl(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Ul(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Df(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Fl(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function ti(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
  }
}
function Eu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ki(e, t, n, r) {
  var s = e.updateQueue;
  Vt = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), o === null ? (i = c) : (o.next = c), (o = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var h = s.baseState;
    ((o = 0), (d = c = l = null), (a = i));
    do {
      var f = a.lane,
        w = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((f = t), (w = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                h = y.call(w, h, f);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (f = typeof y == "function" ? y.call(w, h, f) : y),
                f == null)
              )
                break e;
              h = ue({}, h, f);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        ((w = {
          eventTime: w,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = w), (l = h)) : (d = d.next = w),
          (o |= f));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = h),
      (s.baseState = l),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((En |= o), (e.lanes = o), (e.memoizedState = h));
  }
}
function Tu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(N(191, s));
        s.call(r);
      }
    }
}
var xs = {},
  wt = sn(xs),
  is = sn(xs),
  os = sn(xs);
function pn(e) {
  if (e === xs) throw Error(N(174));
  return e;
}
function Bl(e, t) {
  switch ((te(os, t), te(is, e), te(wt, xs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : da(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = da(t, e)));
  }
  (se(wt), te(wt, t));
}
function ir() {
  (se(wt), se(is), se(os));
}
function Of(e) {
  pn(os.current);
  var t = pn(wt.current),
    n = da(t, e.type);
  t !== n && (te(is, e), te(wt, n));
}
function Vl(e) {
  is.current === e && (se(wt), se(is));
}
var ae = sn(0);
function Ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Lo = [];
function Wl() {
  for (var e = 0; e < Lo.length; e++)
    Lo[e]._workInProgressVersionPrimary = null;
  Lo.length = 0;
}
var ni = Pt.ReactCurrentDispatcher,
  Do = Pt.ReactCurrentBatchConfig,
  Sn = 0,
  ce = null,
  ye = null,
  xe = null,
  Ci = !1,
  Vr = !1,
  as = 0,
  Qy = 0;
function ke() {
  throw Error(N(321));
}
function Hl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1;
  return !0;
}
function _l(e, t, n, r, s, i) {
  if (
    ((Sn = i),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? nv : rv),
    (e = n(r, s)),
    Vr)
  ) {
    i = 0;
    do {
      if (((Vr = !1), (as = 0), 25 <= i)) throw Error(N(301));
      ((i += 1),
        (xe = ye = null),
        (t.updateQueue = null),
        (ni.current = sv),
        (e = n(r, s)));
    } while (Vr);
  }
  if (
    ((ni.current = Ri),
    (t = ye !== null && ye.next !== null),
    (Sn = 0),
    (xe = ye = ce = null),
    (Ci = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Gl() {
  var e = as !== 0;
  return ((as = 0), e);
}
function gt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e), xe);
}
function ot() {
  if (ye === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = xe === null ? ce.memoizedState : xe.next;
  if (t !== null) ((xe = t), (ye = e));
  else {
    if (e === null) throw Error(N(310));
    ((ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e));
  }
  return xe;
}
function ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oo(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ye,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      c = i;
    do {
      var d = c.lane;
      if ((Sn & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var h = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (ce.lanes |= d),
          (En |= d));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (l === null ? (o = r) : (l.next = a),
      mt(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ce.lanes |= i), (En |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mo(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (mt(i, t.memoizedState) || (Be = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Mf() {}
function Pf(e, t) {
  var n = ce,
    r = ot(),
    s = t(),
    i = !mt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Be = !0)),
    (r = r.queue),
    zl(Uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, Ff.bind(null, n, r, s, t), void 0, null),
      be === null)
    )
      throw Error(N(349));
    Sn & 30 || jf(n, t, s);
  }
  return s;
}
function jf(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ff(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Bf(t) && Vf(e));
}
function Uf(e, t, n) {
  return n(function () {
    Bf(t) && Vf(e);
  });
}
function Bf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Vf(e) {
  var t = Dt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Au(e) {
  var t = gt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ls,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tv.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wf() {
  return ot().memoizedState;
}
function ri(e, t, n, r) {
  var s = gt();
  ((ce.flags |= e),
    (s.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r)));
}
function qi(e, t, n, r) {
  var s = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ye !== null) {
    var o = ye.memoizedState;
    if (((i = o.destroy), r !== null && Hl(r, o.deps))) {
      s.memoizedState = cs(t, n, i, r);
      return;
    }
  }
  ((ce.flags |= e), (s.memoizedState = cs(1 | t, n, i, r)));
}
function ku(e, t) {
  return ri(8390656, 8, e, t);
}
function zl(e, t) {
  return qi(2048, 8, e, t);
}
function Hf(e, t) {
  return qi(4, 2, e, t);
}
function _f(e, t) {
  return qi(4, 4, e, t);
}
function Gf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function zf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    qi(4, 4, Gf.bind(null, t, e), n)
  );
}
function Yl() {}
function Yf(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kf(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jf(e, t, n) {
  return Sn & 21
    ? (mt(n, t) || ((n = Qh()), (ce.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Xy(e, t) {
  var n = ee;
  ((ee = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Do.transition;
  Do.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ee = n), (Do.transition = r));
  }
}
function $f() {
  return ot().memoizedState;
}
function ev(e, t, n) {
  var r = qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zf(e))
  )
    qf(t, n);
  else if (((n = Lf(e, t, n, r)), n !== null)) {
    var s = Me();
    (ft(n, e, r, s), Qf(n, t, r));
  }
}
function tv(e, t, n) {
  var r = qt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zf(e)) qf(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), mt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Fl(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Lf(e, t, s, r)),
      n !== null && ((s = Me()), ft(n, e, r, s), Qf(n, t, r)));
  }
}
function Zf(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function qf(e, t) {
  Vr = Ci = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Qf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
  }
}
var Ri = {
    readContext: it,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  nv = {
    readContext: it,
    useCallback: function (e, t) {
      return ((gt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: it,
    useEffect: ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ri(4194308, 4, Gf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = gt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ev.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Au,
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      return (gt().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        t = e[0];
      return ((e = Xy.bind(null, e[1])), (gt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        s = gt();
      if (oe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(N(349));
        Sn & 30 || jf(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        ku(Uf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cs(9, Ff.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gt(),
        t = be.identifierPrefix;
      if (oe) {
        var n = At,
          r = Tt;
        ((n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = as++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Qy++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rv = {
    readContext: it,
    useCallback: Yf,
    useContext: it,
    useEffect: zl,
    useImperativeHandle: zf,
    useInsertionEffect: Hf,
    useLayoutEffect: _f,
    useMemo: Kf,
    useReducer: Oo,
    useRef: Wf,
    useState: function () {
      return Oo(ls);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = ot();
      return Jf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Oo(ls)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Mf,
    useSyncExternalStore: Pf,
    useId: $f,
    unstable_isNewReconciler: !1,
  },
  sv = {
    readContext: it,
    useCallback: Yf,
    useContext: it,
    useEffect: zl,
    useImperativeHandle: zf,
    useInsertionEffect: Hf,
    useLayoutEffect: _f,
    useMemo: Kf,
    useReducer: Mo,
    useRef: Wf,
    useState: function () {
      return Mo(ls);
    },
    useDebugValue: Yl,
    useDeferredValue: function (e) {
      var t = ot();
      return ye === null ? (t.memoizedState = e) : Jf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Mo(ls)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Mf,
    useSyncExternalStore: Pf,
    useId: $f,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    ((t = ue({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Da(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Qi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      s = qt(e),
      i = It(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, s)),
      t !== null && (ft(t, e, s, r), ti(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      s = qt(e),
      i = It(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, s)),
      t !== null && (ft(t, e, s, r), ti(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = qt(e),
      s = It(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = $t(e, s, r)),
      t !== null && (ft(t, e, r, n), ti(t, e, r)));
  },
};
function Iu(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ts(n, r) || !ts(s, i)
        : !0
  );
}
function Xf(e, t, n) {
  var r = !1,
    s = en,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((s = We(t) ? xn : Le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? nr(e, s) : en)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qi.enqueueReplaceState(t, t.state, null));
}
function Oa(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Ul(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = it(i))
    : ((i = We(t) ? xn : Le.current), (s.context = nr(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Da(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Qi.enqueueReplaceState(s, s.state, null),
      ki(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function or(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Dg(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Po(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iv = typeof WeakMap == "function" ? WeakMap : Map;
function em(e, t, n) {
  ((n = It(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Li || ((Li = !0), (Ga = r)), Ma(e, t));
    }),
    n
  );
}
function tm(e, t, n) {
  ((n = It(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Ma(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ma(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iv();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = wv.bind(null, e, t, n)), t.then(e, e));
}
function Nu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ov = Pt.ReactCurrentOwner,
  Be = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Nf(t, null, n, r) : sr(t, e.child, n, r);
}
function Du(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Xn(t, s),
    (r = _l(e, t, n, r, i, s)),
    (n = Gl()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Ot(e, t, s))
      : (oe && n && Ll(t), (t.flags |= 1), Oe(e, t, r, s), t.child)
  );
}
function Ou(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ec(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nm(e, t, i, r, s))
      : ((e = ai(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ts), n(o, r) && e.ref === t.ref)
    )
      return Ot(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nm(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ts(i, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Be = !0);
      else return ((t.lanes = e.lanes), Ot(e, t, s));
  }
  return Pa(e, t, n, r, s);
}
function rm(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Hn, _e),
        (_e |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Hn, _e),
          (_e |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        te(Hn, _e),
        (_e |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Hn, _e),
      (_e |= r));
  return (Oe(e, t, s, n), t.child);
}
function sm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pa(e, t, n, r, s) {
  var i = We(n) ? xn : Le.current;
  return (
    (i = nr(t, i)),
    Xn(t, s),
    (n = _l(e, t, n, r, i, s)),
    (r = Gl()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Ot(e, t, s))
      : (oe && r && Ll(t), (t.flags |= 1), Oe(e, t, n, s), t.child)
  );
}
function Mu(e, t, n, r, s) {
  if (We(n)) {
    var i = !0;
    bi(t);
  } else i = !1;
  if ((Xn(t, s), t.stateNode === null))
    (si(e, t), Xf(t, n, r), Oa(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = We(n) ? xn : Le.current), (c = nr(t, c)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Cu(t, o, r, c)),
      (Vt = !1));
    var f = t.memoizedState;
    ((o.state = f),
      ki(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || Ve.current || Vt
        ? (typeof d == "function" && (Da(t, n, d, r), (l = t.memoizedState)),
          (a = Vt || Iu(t, n, a, r, f, l, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Df(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = c),
      (h = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = it(l))
        : ((l = We(n) ? xn : Le.current), (l = nr(t, l))));
    var w = n.getDerivedStateFromProps;
    ((d =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || f !== l) && Cu(t, o, r, l)),
      (Vt = !1),
      (f = t.memoizedState),
      (o.state = f),
      ki(t, r, o, s));
    var y = t.memoizedState;
    a !== h || f !== y || Ve.current || Vt
      ? (typeof w == "function" && (Da(t, n, w, r), (y = t.memoizedState)),
        (c = Vt || Iu(t, n, c, r, f, y, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ja(e, t, n, r, i, s);
}
function ja(e, t, n, r, s, i) {
  sm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && wu(t, n, !1), Ot(e, t, i));
  ((r = t.stateNode), (ov.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sr(t, e.child, null, i)), (t.child = sr(t, null, a, i)))
      : Oe(e, t, a, i),
    (t.memoizedState = r.state),
    s && wu(t, n, !0),
    t.child
  );
}
function im(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(e, t.context, !1),
    Bl(e, t.containerInfo));
}
function Pu(e, t, n, r, s) {
  return (rr(), Ol(s), (t.flags |= 256), Oe(e, t, n, r), t.child);
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ua(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function om(e, t, n) {
  var r = t.pendingProps,
    s = ae.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    te(ae, s & 1),
    e === null)
  )
    return (
      Na(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = to(o, r, 0, null)),
              (e = vn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ua(n)),
              (t.memoizedState = Fa),
              e)
            : Kl(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return av(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Qt(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = Qt(a, i)) : ((i = vn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ua(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kl(e, t) {
  return (
    (t = to({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hs(e, t, n, r) {
  return (
    r !== null && Ol(r),
    sr(t, e.child, null, n),
    (e = Kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function av(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Po(Error(N(422)))), Hs(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = to({ mode: "visible", children: r.children }, s, 0, null)),
          (i = vn(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && sr(t, e.child, null, o),
          (t.child.memoizedState = Ua(o)),
          (t.memoizedState = Fa),
          i);
  if (!(t.mode & 1)) return Hs(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(N(419))),
      (r = Po(i, r, void 0)),
      Hs(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Be || a)) {
    if (((r = be), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Dt(e, s), ft(r, e, s, -1)));
    }
    return (Xl(), (r = Po(Error(N(421)))), Hs(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xv.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ge = Jt(s.nextSibling)),
      (ze = t),
      (oe = !0),
      (dt = null),
      e !== null &&
        ((tt[nt++] = Tt),
        (tt[nt++] = At),
        (tt[nt++] = bn),
        (Tt = e.id),
        (At = e.overflow),
        (bn = t)),
      (t = Kl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), La(e.return, t, n));
}
function jo(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function am(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = ae.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ju(e, n, t);
        else if (e.tag === 19) ju(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((te(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ii(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          jo(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Ii(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        jo(t, !0, n, null, i);
        break;
      case "together":
        jo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function si(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Qt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function lv(e, t, n) {
  switch (t.tag) {
    case 3:
      (im(t), rr());
      break;
    case 5:
      Of(t);
      break;
    case 1:
      We(t.type) && bi(t);
      break;
    case 4:
      Bl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (te(Ti, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? om(e, t, n)
            : (te(ae, ae.current & 1),
              (e = Ot(e, t, n)),
              e !== null ? e.sibling : null);
      te(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return am(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        te(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), rm(e, t, n));
  }
  return Ot(e, t, n);
}
var lm, Ba, cm, um;
lm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ba = function () {};
cm = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), pn(wt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = aa(e, s)), (r = aa(e, r)), (i = []));
        break;
      case "select":
        ((s = ue({}, s, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = ua(e, s)), (r = ua(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = wi);
    }
    ha(n, r);
    var o;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Jr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Jr.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && re("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
um = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function cv(e, t, n) {
  var r = t.pendingProps;
  switch ((Dl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ie(t), null);
    case 1:
      return (We(t.type) && xi(), Ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        se(Ve),
        se(Le),
        Wl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (Ka(dt), (dt = null)))),
        Ba(e, t),
        Ie(t),
        null
      );
    case 5:
      Vl(t);
      var s = pn(os.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (cm(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (Ie(t), null);
        }
        if (((e = pn(wt.current)), Vs(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[ss] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (re("cancel", r), re("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Lr.length; s++) re(Lr[s], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (re("error", r), re("load", r));
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              (zc(r, i), re("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                re("invalid", r));
              break;
            case "textarea":
              (Kc(r, i), re("invalid", r));
          }
          (ha(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Jr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              (Ls(r), Yc(r, i, !0));
              break;
            case "textarea":
              (Ls(r), Jc(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = wi);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[yt] = t),
            (e[ss] = r),
            lm(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = fa(n, r)), n)) {
              case "dialog":
                (re("cancel", e), re("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (re("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Lr.length; s++) re(Lr[s], e);
                s = r;
                break;
              case "source":
                (re("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (re("error", e), re("load", e), (s = r));
                break;
              case "details":
                (re("toggle", e), (s = r));
                break;
              case "input":
                (zc(e, r), (s = aa(e, r)), re("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ue({}, r, { value: void 0 })),
                  re("invalid", e));
                break;
              case "textarea":
                (Kc(e, r), (s = ua(e, r)), re("invalid", e));
                break;
              default:
                s = r;
            }
            (ha(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Vh(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Uh(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && $r(e, l)
                        : typeof l == "number" && $r(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Jr.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && re("scroll", e)
                          : l != null && yl(e, i, l, o));
              }
            switch (n) {
              case "input":
                (Ls(e), Yc(e, r, !1));
                break;
              case "textarea":
                (Ls(e), Jc(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? $n(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = wi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ie(t), null);
    case 6:
      if (e && t.stateNode != null) um(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = pn(os.current)), pn(wt.current), Vs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (i = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r));
      }
      return (Ie(t), null);
    case 13:
      if (
        (se(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ge !== null && t.mode & 1 && !(t.flags & 128))
          (Cf(), rr(), (t.flags |= 98560), (i = !1));
        else if (((i = Vs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[yt] = t;
          } else
            (rr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ie(t), (i = !1));
        } else (dt !== null && (Ka(dt), (dt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : Xl())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        ir(),
        Ba(e, t),
        e === null && ns(t.stateNode.containerInfo),
        Ie(t),
        null
      );
    case 10:
      return (jl(t.type._context), Ie(t), null);
    case 17:
      return (We(t.type) && xi(), Ie(t), null);
    case 19:
      if ((se(ae), (i = t.memoizedState), i === null)) return (Ie(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Er(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ii(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Er(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (te(ae, (ae.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > ar &&
            ((t.flags |= 128), (r = !0), Er(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ii(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !oe)
            )
              return (Ie(t), null);
          } else
            2 * pe() - i.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          te(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        Ql(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function uv(e, t) {
  switch ((Dl(t), t.tag)) {
    case 1:
      return (
        We(t.type) && xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        se(Ve),
        se(Le),
        Wl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Vl(t), null);
    case 13:
      if (
        (se(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        rr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (se(ae), null);
    case 4:
      return (ir(), null);
    case 10:
      return (jl(t.type._context), null);
    case 22:
    case 23:
      return (Ql(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var _s = !1,
  Re = !1,
  dv = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Va(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Fu = !1;
function hv(e, t) {
  if (((Ea = gi), (e = pf()), Nl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (s !== 0 && h.nodeType !== 3) || (a = o + s),
                h !== i || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;
            )
              ((f = h), (h = w));
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++c === s && (a = o),
                f === i && ++d === r && (l = o),
                (w = h.nextSibling) !== null)
              )
                break;
              ((h = f), (f = h.parentNode));
            }
            h = w;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ta = { focusedElem: e, selectionRange: n }, gi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (V = e));
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    T = y.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : ct(t.type, g),
                      T,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          fe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (V = e));
          break;
        }
        V = t.return;
      }
  return ((y = Fu), (Fu = !1), y);
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Va(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Xi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function dm(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), dm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[ss], delete t[Ia], delete t[Jy], delete t[$y])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function hm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ha(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wi)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ha(e, t, n), e = e.sibling; e !== null; )
      (Ha(e, t, n), (e = e.sibling));
}
function _a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_a(e, t, n), e = e.sibling; e !== null; )
      (_a(e, t, n), (e = e.sibling));
}
var Se = null,
  ut = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) (fm(e, t, n), (n = n.sibling));
}
function fm(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Wn(n, t);
    case 6:
      var r = Se,
        s = ut;
      ((Se = null),
        jt(e, t, n),
        (Se = r),
        (ut = s),
        Se !== null &&
          (ut
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode)));
      break;
    case 18:
      Se !== null &&
        (ut
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ro(e.parentNode, n)
              : e.nodeType === 1 && Ro(e, n),
            Xr(e))
          : Ro(Se, n.stateNode));
      break;
    case 4:
      ((r = Se),
        (s = ut),
        (Se = n.stateNode.containerInfo),
        (ut = !0),
        jt(e, t, n),
        (Se = r),
        (ut = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Va(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          fe(n, t, a);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), jt(e, t, n), (Re = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new dv()),
      t.forEach(function (r) {
        var s = bv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Se = a.stateNode), (ut = !1));
              break e;
            case 3:
              ((Se = a.stateNode.containerInfo), (ut = !0));
              break e;
            case 4:
              ((Se = a.stateNode.containerInfo), (ut = !0));
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(N(160));
        (fm(i, o, s), (Se = null), (ut = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (c) {
        fe(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (mm(t, e), (t = t.sibling));
}
function mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), pt(e), r & 4)) {
        try {
          (Wr(3, e, e.return), Xi(3, e));
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          Wr(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      (at(t, e), pt(e), r & 512 && n !== null && Wn(n, n.return));
      break;
    case 5:
      if (
        (at(t, e),
        pt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          $r(s, "");
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && Ph(s, i),
              fa(a, o));
            var c = fa(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                h = l[o + 1];
              d === "style"
                ? Vh(s, h)
                : d === "dangerouslySetInnerHTML"
                  ? Uh(s, h)
                  : d === "children"
                    ? $r(s, h)
                    : yl(s, d, h, c);
            }
            switch (a) {
              case "input":
                la(s, i);
                break;
              case "textarea":
                jh(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? $n(s, !!i.multiple, w, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $n(s, !!i.multiple, i.defaultValue, !0)
                      : $n(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[ss] = i;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((at(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (g) {
          fe(e, e.return, g);
        }
      break;
    case 4:
      (at(t, e), pt(e));
      break;
    case 13:
      (at(t, e),
        pt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Zl = pe())),
        r & 4 && Bu(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (c = Re) || d), at(t, e), (Re = c)) : at(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (V = e, d = e.child; d !== null; ) {
            for (h = V = d; V !== null; ) {
              switch (((f = V), (w = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wr(4, f, f.return);
                  break;
                case 1:
                  Wn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (g) {
                      fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Wn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Wu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = f), (V = w)) : Wu(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                ((s = h.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Bh("display", o))));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (g) {
                fe(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (d === h && (d = null), (h = h.return));
          }
          (d === h && (d = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (at(t, e), pt(e), r & 4 && Bu(e));
      break;
    case 21:
      break;
    default:
      (at(t, e), pt(e));
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && ($r(s, ""), (r.flags &= -33));
          var i = Uu(e);
          _a(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Uu(e);
          Ha(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      fe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fv(e, t, n) {
  ((V = e), pm(e));
}
function pm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var s = V,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || _s;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Re;
        a = _s;
        var c = Re;
        if (((_s = o), (Re = l) && !c))
          for (V = s; V !== null; )
            ((o = V),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Hu(s)
                : l !== null
                  ? ((l.return = o), (V = l))
                  : Hu(s));
        for (; i !== null; ) ((V = i), pm(i), (i = i.sibling));
        ((V = s), (_s = a), (Re = c));
      }
      Vu(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : Vu(e);
  }
}
function Vu(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Xi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Tu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Tu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Xr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Re || (t.flags & 512 && Wa(t));
      } catch (f) {
        fe(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Wu(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Hu(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xi(4, t);
          } catch (l) {
            fe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              fe(t, s, l);
            }
          }
          var i = t.return;
          try {
            Wa(t);
          } catch (l) {
            fe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Wa(t);
          } catch (l) {
            fe(t, o, l);
          }
      }
    } catch (l) {
      fe(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (V = a));
      break;
    }
    V = t.return;
  }
}
var mv = Math.ceil,
  Ni = Pt.ReactCurrentDispatcher,
  Jl = Pt.ReactCurrentOwner,
  st = Pt.ReactCurrentBatchConfig,
  q = 0,
  be = null,
  ge = null,
  Te = 0,
  _e = 0,
  Hn = sn(0),
  ve = 0,
  us = null,
  En = 0,
  eo = 0,
  $l = 0,
  Hr = null,
  Ue = null,
  Zl = 0,
  ar = 1 / 0,
  St = null,
  Li = !1,
  Ga = null,
  Zt = null,
  Gs = !1,
  Gt = null,
  Di = 0,
  _r = 0,
  za = null,
  ii = -1,
  oi = 0;
function Me() {
  return q & 6 ? pe() : ii !== -1 ? ii : (ii = pe());
}
function qt(e) {
  return e.mode & 1
    ? q & 2 && Te !== 0
      ? Te & -Te
      : qy.transition !== null
        ? (oi === 0 && (oi = Qh()), oi)
        : ((e = ee),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : of(e.type))),
          e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (za = null), Error(N(185)));
  (ys(e, n, r),
    (!(q & 2) || e !== be) &&
      (e === be && (!(q & 2) && (eo |= n), ve === 4 && Ht(e, Te)),
      He(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((ar = pe() + 500), Zi && on())));
}
function He(e, t) {
  var n = e.callbackNode;
  qg(e, t);
  var r = pi(e, e === be ? Te : 0);
  if (r === 0)
    (n !== null && qc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qc(n), t === 1))
      (e.tag === 0 ? Zy(_u.bind(null, e)) : Af(_u.bind(null, e)),
        Yy(function () {
          !(q & 6) && on();
        }),
        (n = null));
    else {
      switch (Xh(r)) {
        case 1:
          n = Sl;
          break;
        case 4:
          n = Zh;
          break;
        case 16:
          n = mi;
          break;
        case 536870912:
          n = qh;
          break;
        default:
          n = mi;
      }
      n = Em(n, gm.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function gm(e, t) {
  if (((ii = -1), (oi = 0), q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = pi(e, e === be ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oi(e, r);
  else {
    t = r;
    var s = q;
    q |= 2;
    var i = vm();
    (be !== e || Te !== t) && ((St = null), (ar = pe() + 500), yn(e, t));
    do
      try {
        yv();
        break;
      } catch (a) {
        ym(e, a);
      }
    while (!0);
    (Pl(),
      (Ni.current = i),
      (q = s),
      ge !== null ? (t = 0) : ((be = null), (Te = 0), (t = ve)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = va(e)), s !== 0 && ((r = s), (t = Ya(e, s)))), t === 1)
    )
      throw ((n = us), yn(e, 0), Ht(e, r), He(e, pe()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !pv(s) &&
          ((t = Oi(e, r)),
          t === 2 && ((i = va(e)), i !== 0 && ((r = i), (t = Ya(e, i)))),
          t === 1))
      )
        throw ((n = us), yn(e, 0), Ht(e, r), He(e, pe()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          un(e, Ue, St);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = Zl + 500 - pe()), 10 < t))
          ) {
            if (pi(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Me(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = ka(un.bind(null, e, Ue, St), t);
            break;
          }
          un(e, Ue, St);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - ht(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ka(un.bind(null, e, Ue, St), r);
            break;
          }
          un(e, Ue, St);
          break;
        case 5:
          un(e, Ue, St);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (He(e, pe()), e.callbackNode === n ? gm.bind(null, e) : null);
}
function Ya(e, t) {
  var n = Hr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = Oi(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Ka(t)),
    e
  );
}
function Ka(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function pv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!mt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~$l,
      t &= ~eo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - ht(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function _u(e) {
  if (q & 6) throw Error(N(327));
  er();
  var t = pi(e, 0);
  if (!(t & 1)) return (He(e, pe()), null);
  var n = Oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = va(e);
    r !== 0 && ((t = r), (n = Ya(e, r)));
  }
  if (n === 1) throw ((n = us), yn(e, 0), Ht(e, t), He(e, pe()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Ue, St),
    He(e, pe()),
    null
  );
}
function ql(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    ((q = n), q === 0 && ((ar = pe() + 500), Zi && on()));
  }
}
function Tn(e) {
  Gt !== null && Gt.tag === 0 && !(q & 6) && er();
  var t = q;
  q |= 1;
  var n = st.transition,
    r = ee;
  try {
    if (((st.transition = null), (ee = 1), e)) return e();
  } finally {
    ((ee = r), (st.transition = n), (q = t), !(q & 6) && on());
  }
}
function Ql() {
  ((_e = Hn.current), se(Hn));
}
function yn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), zy(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((Dl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xi());
          break;
        case 3:
          (ir(), se(Ve), se(Le), Wl());
          break;
        case 5:
          Vl(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          se(ae);
          break;
        case 19:
          se(ae);
          break;
        case 10:
          jl(r.type._context);
          break;
        case 22:
        case 23:
          Ql();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ge = e = Qt(e.current, null)),
    (Te = _e = t),
    (ve = 0),
    (us = null),
    ($l = eo = En = 0),
    (Ue = Hr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function ym(e, t) {
  do {
    var n = ge;
    try {
      if ((Pl(), (ni.current = Ri), Ci)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Ci = !1;
      }
      if (
        ((Sn = 0),
        (xe = ye = ce = null),
        (Vr = !1),
        (as = 0),
        (Jl.current = null),
        n === null || n.return === null)
      ) {
        ((ve = 1), (us = t), (ge = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = Nu(o);
          if (w !== null) {
            ((w.flags &= -257),
              Lu(w, o, a, i, t),
              w.mode & 1 && Ru(i, c, t),
              (t = w),
              (l = c));
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Ru(i, c, t), Xl());
              break e;
            }
            l = Error(N(426));
          }
        } else if (oe && a.mode & 1) {
          var T = Nu(o);
          if (T !== null) {
            (!(T.flags & 65536) && (T.flags |= 256),
              Lu(T, o, a, i, t),
              Ol(or(l, a)));
            break e;
          }
        }
        ((i = l = or(l, a)),
          ve !== 4 && (ve = 2),
          Hr === null ? (Hr = [i]) : Hr.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var p = em(i, l, t);
              Eu(i, p);
              break e;
            case 1:
              a = l;
              var m = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(v))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var S = tm(i, a, t);
                Eu(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      xm(n);
    } catch (E) {
      ((t = E), ge === n && n !== null && (ge = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function vm() {
  var e = Ni.current;
  return ((Ni.current = Ri), e === null ? Ri : e);
}
function Xl() {
  ((ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    be === null || (!(En & 268435455) && !(eo & 268435455)) || Ht(be, Te));
}
function Oi(e, t) {
  var n = q;
  q |= 2;
  var r = vm();
  (be !== e || Te !== t) && ((St = null), yn(e, t));
  do
    try {
      gv();
      break;
    } catch (s) {
      ym(e, s);
    }
  while (!0);
  if ((Pl(), (q = n), (Ni.current = r), ge !== null)) throw Error(N(261));
  return ((be = null), (Te = 0), ve);
}
function gv() {
  for (; ge !== null; ) wm(ge);
}
function yv() {
  for (; ge !== null && !Hg(); ) wm(ge);
}
function wm(e) {
  var t = Sm(e.alternate, e, _e);
  ((e.memoizedProps = e.pendingProps),
    t === null ? xm(e) : (ge = t),
    (Jl.current = null));
}
function xm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uv(n, t)), n !== null)) {
        ((n.flags &= 32767), (ge = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ve = 6), (ge = null));
        return;
      }
    } else if (((n = cv(n, t, _e)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function un(e, t, n) {
  var r = ee,
    s = st.transition;
  try {
    ((st.transition = null), (ee = 1), vv(e, t, n, r));
  } finally {
    ((st.transition = s), (ee = r));
  }
  return null;
}
function vv(e, t, n, r) {
  do er();
  while (Gt !== null);
  if (q & 6) throw Error(N(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Qg(e, i),
    e === be && ((ge = be = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gs ||
      ((Gs = !0),
      Em(mi, function () {
        return (er(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = st.transition), (st.transition = null));
    var o = ee;
    ee = 1;
    var a = q;
    ((q |= 4),
      (Jl.current = null),
      hv(e, n),
      mm(n, e),
      Uy(Ta),
      (gi = !!Ea),
      (Ta = Ea = null),
      (e.current = n),
      fv(n),
      _g(),
      (q = a),
      (ee = o),
      (st.transition = i));
  } else e.current = n;
  if (
    (Gs && ((Gs = !1), (Gt = e), (Di = s)),
    (i = e.pendingLanes),
    i === 0 && (Zt = null),
    Yg(n.stateNode),
    He(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Li) throw ((Li = !1), (e = Ga), (Ga = null), e);
  return (
    Di & 1 && e.tag !== 0 && er(),
    (i = e.pendingLanes),
    i & 1 ? (e === za ? _r++ : ((_r = 0), (za = e))) : (_r = 0),
    on(),
    null
  );
}
function er() {
  if (Gt !== null) {
    var e = Xh(Di),
      t = st.transition,
      n = ee;
    try {
      if (((st.transition = null), (ee = 16 > e ? 16 : e), Gt === null))
        var r = !1;
      else {
        if (((e = Gt), (Gt = null), (Di = 0), q & 6)) throw Error(N(331));
        var s = q;
        for (q |= 4, V = e.current; V !== null; ) {
          var i = V,
            o = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (V = c; V !== null; ) {
                  var d = V;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) ((h.return = d), (V = h));
                  else
                    for (; V !== null; ) {
                      d = V;
                      var f = d.sibling,
                        w = d.return;
                      if ((dm(d), d === c)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = w), (V = f));
                        break;
                      }
                      V = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var T = g.sibling;
                    ((g.sibling = null), (g = T));
                  } while (g !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (V = o));
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                ((p.return = i.return), (V = p));
                break e;
              }
              V = i.return;
            }
        }
        var m = e.current;
        for (V = m; V !== null; ) {
          o = V;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) ((v.return = o), (V = v));
          else
            e: for (o = m; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, a);
                  }
                } catch (E) {
                  fe(a, a.return, E);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (V = S));
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((q = s), on(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ee = n), (st.transition = t));
    }
  }
  return !1;
}
function Gu(e, t, n) {
  ((t = or(n, t)),
    (t = em(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = Me()),
    e !== null && (ys(e, 1, t), He(e, t)));
}
function fe(e, t, n) {
  if (e.tag === 3) Gu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          ((e = or(n, e)),
            (e = tm(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = Me()),
            t !== null && (ys(t, 1, e), He(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function wv(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Te & n) === n &&
      (ve === 4 || (ve === 3 && (Te & 130023424) === Te && 500 > pe() - Zl)
        ? yn(e, 0)
        : ($l |= n)),
    He(e, t));
}
function bm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ms), (Ms <<= 1), !(Ms & 130023424) && (Ms = 4194304))
      : (t = 1));
  var n = Me();
  ((e = Dt(e, t)), e !== null && (ys(e, t, n), He(e, n)));
}
function xv(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), bm(e, n));
}
function bv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (r !== null && r.delete(t), bm(e, n));
}
var Sm;
Sm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Be = !1), lv(e, t, n));
      Be = !!(e.flags & 131072);
    }
  else ((Be = !1), oe && t.flags & 1048576 && kf(t, Ei, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (si(e, t), (e = t.pendingProps));
      var s = nr(t, Le.current);
      (Xn(t, n), (s = _l(null, t, r, e, s, n)));
      var i = Gl();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), bi(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ul(t),
            (s.updater = Qi),
            (t.stateNode = s),
            (s._reactInternals = t),
            Oa(t, r, e, n),
            (t = ja(null, t, r, !0, i, n)))
          : ((t.tag = 0), oe && i && Ll(t), Oe(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (si(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Ev(r)),
          (e = ct(r, e)),
          s)
        ) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = Mu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Ou(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Pa(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Mu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((im(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Df(e, t),
          ki(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = or(Error(N(423)), t)), (t = Pu(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = or(Error(N(424)), t)), (t = Pu(e, t, r, n, s)));
            break e;
          } else
            for (
              Ge = Jt(t.stateNode.containerInfo.firstChild),
                ze = t,
                oe = !0,
                dt = null,
                n = Nf(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((rr(), r === s)) {
            t = Ot(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Of(t),
        e === null && Na(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Aa(r, s) ? (o = null) : i !== null && Aa(r, i) && (t.flags |= 32),
        sm(e, t),
        Oe(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Na(t), null);
    case 13:
      return om(e, t, n);
    case 4:
      return (
        Bl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Du(e, t, r, s, n)
      );
    case 7:
      return (Oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          te(Ti, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (mt(i.value, o)) {
            if (i.children === s.children && !Ve.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = It(-1, n & -n)), (l.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      La(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  La(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Oe(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Xn(t, n),
        (s = it(s)),
        (r = r(s)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = ct(r, t.pendingProps)),
        (s = ct(r.type, s)),
        Ou(e, t, r, s, n)
      );
    case 15:
      return nm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        si(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), bi(t)) : (e = !1),
        Xn(t, n),
        Xf(t, r, s),
        Oa(t, r, s, n),
        ja(null, t, r, !0, e, n)
      );
    case 19:
      return am(e, t, n);
    case 22:
      return rm(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Em(e, t) {
  return $h(e, t);
}
function Sv(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function rt(e, t, n, r) {
  return new Sv(e, t, n, r);
}
function ec(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Ev(e) {
  if (typeof e == "function") return ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wl)) return 11;
    if (e === xl) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ai(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ec(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dn:
        return vn(n.children, s, i, t);
      case vl:
        ((o = 8), (s |= 8));
        break;
      case ra:
        return (
          (e = rt(12, n, t, s | 2)),
          (e.elementType = ra),
          (e.lanes = i),
          e
        );
      case sa:
        return ((e = rt(13, n, t, s)), (e.elementType = sa), (e.lanes = i), e);
      case ia:
        return ((e = rt(19, n, t, s)), (e.elementType = ia), (e.lanes = i), e);
      case Dh:
        return to(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nh:
              o = 10;
              break e;
            case Lh:
              o = 9;
              break e;
            case wl:
              o = 11;
              break e;
            case xl:
              o = 14;
              break e;
            case Bt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function vn(e, t, n, r) {
  return ((e = rt(7, e, r, t)), (e.lanes = n), e);
}
function to(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Dh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return ((e = rt(6, e, null, t)), (e.lanes = n), e);
}
function Uo(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tv(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vo(0)),
    (this.expirationTimes = vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function tc(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new Tv(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ul(i),
    e
  );
}
function Av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tm(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Tf(e, n, t);
  }
  return t;
}
function Am(e, t, n, r, s, i, o, a, l) {
  return (
    (e = tc(n, r, !0, e, s, i, o, a, l)),
    (e.context = Tm(null)),
    (n = e.current),
    (r = Me()),
    (s = qt(n)),
    (i = It(r, s)),
    (i.callback = t ?? null),
    $t(n, i, s),
    (e.current.lanes = s),
    ys(e, s, r),
    He(e, r),
    e
  );
}
function no(e, t, n, r) {
  var s = t.current,
    i = Me(),
    o = qt(s);
  return (
    (n = Tm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(s, t, o)),
    e !== null && (ft(e, s, o, i), ti(e, s, o)),
    o
  );
}
function Mi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nc(e, t) {
  (zu(e, t), (e = e.alternate) && zu(e, t));
}
function kv() {
  return null;
}
var km =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function rc(e) {
  this._internalRoot = e;
}
ro.prototype.render = rc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  no(e, t, null, null);
};
ro.prototype.unmount = rc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Tn(function () {
      no(null, e, null, null);
    }),
      (t[Lt] = null));
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    (Wt.splice(n, 0, e), n === 0 && sf(e));
  }
};
function sc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function so(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function Iv(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Mi(o);
        i.call(c);
      };
    }
    var o = Am(t, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = o),
      (e[Lt] = o.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Mi(l);
      a.call(c);
    };
  }
  var l = tc(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = l),
    (e[Lt] = l.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      no(t, l, n, r);
    }),
    l
  );
}
function io(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Mi(o);
        a.call(l);
      };
    }
    no(t, o, e, s);
  } else o = Iv(n, t, e, s, r);
  return Mi(o);
}
ef = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nr(t.pendingLanes);
        n !== 0 &&
          (El(t, n | 1), He(t, pe()), !(q & 6) && ((ar = pe() + 500), on()));
      }
      break;
    case 13:
      (Tn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var s = Me();
          ft(r, e, 1, s);
        }
      }),
        nc(e, 1));
  }
};
Tl = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Me();
      ft(t, e, 134217728, n);
    }
    nc(e, 134217728);
  }
};
tf = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Me();
      ft(n, e, t, r);
    }
    nc(e, t);
  }
};
nf = function () {
  return ee;
};
rf = function (e, t) {
  var n = ee;
  try {
    return ((ee = e), t());
  } finally {
    ee = n;
  }
};
pa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((la(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = $i(r);
            if (!s) throw Error(N(90));
            (Mh(r), la(r, s));
          }
        }
      }
      break;
    case "textarea":
      jh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && $n(e, !!n.multiple, t, !1));
  }
};
_h = ql;
Gh = Tn;
var Cv = { usingClientEntryPoint: !1, Events: [ws, jn, $i, Wh, Hh, ql] },
  Tr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Kh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || kv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zs.isDisabled && zs.supportsFiber)
    try {
      ((zi = zs.inject(Rv)), (vt = zs));
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cv;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sc(t)) throw Error(N(200));
  return Av(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!sc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    s = km;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = tc(e, 1, !1, null, null, n, !1, r, s)),
    (e[Lt] = t.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    new rc(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = Kh(t)), (e = e === null ? null : e.stateNode), e);
};
$e.flushSync = function (e) {
  return Tn(e);
};
$e.hydrate = function (e, t, n) {
  if (!so(t)) throw Error(N(200));
  return io(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!sc(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = km;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Am(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Lt] = t.current),
    ns(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new ro(t);
};
$e.render = function (e, t, n) {
  if (!so(t)) throw Error(N(200));
  return io(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!so(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Tn(function () {
        io(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Lt] = null));
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = ql;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!so(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return io(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function Im() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im);
    } catch (e) {
      console.error(e);
    }
}
(Im(), (kh.exports = $e));
var Nv = kh.exports,
  Ku = Nv;
((ta.createRoot = Ku.createRoot), (ta.hydrateRoot = Ku.hydrateRoot));
const ic = A.createContext({});
function oc(e) {
  const t = A.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const oo = A.createContext(null),
  ac = A.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class Lv extends A.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Dv({ children: e, isPresent: t }) {
  const n = A.useId(),
    r = A.useRef(null),
    s = A.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = A.useContext(ac);
  return (
    A.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: c } = s.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    u.jsx(Lv, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: A.cloneElement(e, { ref: r }),
    })
  );
}
const Ov = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = oc(Mv),
    l = A.useId(),
    c = A.useCallback(
      (h) => {
        a.set(h, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r],
    ),
    d = A.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: c,
        register: (h) => (a.set(h, !1), () => a.delete(h)),
      }),
      i ? [Math.random(), c] : [n, c],
    );
  return (
    A.useMemo(() => {
      a.forEach((h, f) => a.set(f, !1));
    }, [n]),
    A.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = u.jsx(Dv, { isPresent: n, children: e })),
    u.jsx(oo.Provider, { value: d, children: e })
  );
};
function Mv() {
  return new Map();
}
function Cm(e = !0) {
  const t = A.useContext(oo);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = A.useId();
  A.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = A.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ys = (e) => e.key || "";
function Ju(e) {
  const t = [];
  return (
    A.Children.forEach(e, (n) => {
      A.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const lc = typeof window < "u",
  Rm = lc ? A.useLayoutEffect : A.useEffect,
  Nm = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = Cm(o),
      c = A.useMemo(() => Ju(e), [e]),
      d = o && !a ? [] : c.map(Ys),
      h = A.useRef(!0),
      f = A.useRef(c),
      w = oc(() => new Map()),
      [y, g] = A.useState(c),
      [T, p] = A.useState(c);
    Rm(() => {
      ((h.current = !1), (f.current = c));
      for (let S = 0; S < T.length; S++) {
        const E = Ys(T[S]);
        d.includes(E) ? w.delete(E) : w.get(E) !== !0 && w.set(E, !1);
      }
    }, [T, d.length, d.join("-")]);
    const m = [];
    if (c !== y) {
      let S = [...c];
      for (let E = 0; E < T.length; E++) {
        const I = T[E],
          C = Ys(I);
        d.includes(C) || (S.splice(E, 0, I), m.push(I));
      }
      (i === "wait" && m.length && (S = m), p(Ju(S)), g(c));
      return;
    }
    const { forceRender: v } = A.useContext(ic);
    return u.jsx(u.Fragment, {
      children: T.map((S) => {
        const E = Ys(S),
          I = o && !a ? !1 : c === T || d.includes(E),
          C = () => {
            if (w.has(E)) w.set(E, !0);
            else return;
            let x = !0;
            (w.forEach((O) => {
              O || (x = !1);
            }),
              x &&
                (v == null || v(),
                p(f.current),
                o && (l == null || l()),
                r && r()));
          };
        return u.jsx(
          Ov,
          {
            isPresent: I,
            initial: !h.current || n ? void 0 : !1,
            custom: I ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: I ? void 0 : C,
            children: S,
          },
          E,
        );
      }),
    });
  },
  Ye = (e) => e;
let Lm = Ye;
function cc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const lr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ct = (e) => e * 1e3,
  Rt = (e) => e / 1e3,
  Pv = { useManualTiming: !1 };
function jv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (i.has(c) && (l.schedule(c), e()), c(o));
  }
  const l = {
    schedule: (c, d = !1, h = !1) => {
      const w = h && r ? t : n;
      return (d && i.add(c), w.has(c) || w.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), i.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        s = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), l.process(c)));
    },
  };
  return l;
}
const Ks = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Fv = 40;
function Dm(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Ks.reduce((p, m) => ((p[m] = jv(i)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: d,
      render: h,
      postRender: f,
    } = o,
    w = () => {
      const p = performance.now();
      ((n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(p - s.timestamp, Fv), 1)),
        (s.timestamp = p),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        c.process(s),
        d.process(s),
        h.process(s),
        f.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(w)));
    },
    y = () => {
      ((n = !0), (r = !0), s.isProcessing || e(w));
    };
  return {
    schedule: Ks.reduce((p, m) => {
      const v = o[m];
      return (
        (p[m] = (S, E = !1, I = !1) => (n || y(), v.schedule(S, E, I))),
        p
      );
    }, {}),
    cancel: (p) => {
      for (let m = 0; m < Ks.length; m++) o[Ks[m]].cancel(p);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: ie,
    cancel: tn,
    state: Ee,
    steps: Bo,
  } = Dm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0),
  Om = A.createContext({ strict: !1 }),
  $u = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  cr = {};
for (const e in $u) cr[e] = { isEnabled: (t) => $u[e].some((n) => !!t[n]) };
function Uv(e) {
  for (const t in e) cr[t] = { ...cr[t], ...e[t] };
}
const Bv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Pi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Bv.has(e)
  );
}
let Mm = (e) => !Pi(e);
function Vv(e) {
  e && (Mm = (t) => (t.startsWith("on") ? !Pi(t) : e(t)));
}
try {
  Vv(require("@emotion/is-prop-valid").default);
} catch {}
function Wv(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Mm(s) ||
        (n === !0 && Pi(s)) ||
        (!t && !Pi(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Hv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const ao = A.createContext({});
function ds(e) {
  return typeof e == "string" || Array.isArray(e);
}
function lo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const uc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  dc = ["initial", ...uc];
function co(e) {
  return lo(e.animate) || dc.some((t) => ds(e[t]));
}
function Pm(e) {
  return !!(co(e) || e.variants);
}
function _v(e, t) {
  if (co(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ds(n) ? n : void 0,
      animate: ds(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Gv(e) {
  const { initial: t, animate: n } = _v(e, A.useContext(ao));
  return A.useMemo(() => ({ initial: t, animate: n }), [Zu(t), Zu(n)]);
}
function Zu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zv = Symbol.for("motionComponentSymbol");
function _n(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Yv(e, t, n) {
  return A.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : _n(n) && (n.current = r)));
    },
    [t],
  );
}
const hc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Kv = "framerAppearId",
  jm = "data-" + hc(Kv),
  { schedule: fc } = Dm(queueMicrotask, !1),
  Fm = A.createContext({});
function Jv(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = A.useContext(ao),
    l = A.useContext(Om),
    c = A.useContext(oo),
    d = A.useContext(ac).reducedMotion,
    h = A.useRef(null);
  ((r = r || l.renderer),
    !h.current &&
      r &&
      (h.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const f = h.current,
    w = A.useContext(Fm);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    $v(h.current, n, s, w);
  const y = A.useRef(!1);
  A.useInsertionEffect(() => {
    f && y.current && f.update(n, c);
  });
  const g = n[jm],
    T = A.useRef(
      !!g &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, g)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, g)),
    );
  return (
    Rm(() => {
      f &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        fc.render(f.render),
        T.current && f.animationState && f.animationState.animateChanges());
    }),
    A.useEffect(() => {
      f &&
        (!T.current && f.animationState && f.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, g);
          }),
          (T.current = !1)));
    }),
    f
  );
}
function $v(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Um(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && _n(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function Um(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Um(e.parent);
}
function Zv({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && Uv(e);
  function a(c, d) {
    let h;
    const f = { ...A.useContext(ac), ...c, layoutId: qv(c) },
      { isStatic: w } = f,
      y = Gv(c),
      g = r(c, w);
    if (!w && lc) {
      Qv();
      const T = Xv(f);
      ((h = T.MeasureLayout),
        (y.visualElement = Jv(s, g, f, t, T.ProjectionNode)));
    }
    return u.jsxs(ao.Provider, {
      value: y,
      children: [
        h && y.visualElement
          ? u.jsx(h, { visualElement: y.visualElement, ...f })
          : null,
        n(s, c, Yv(g, y.visualElement, d), g, w, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = A.forwardRef(a);
  return ((l[zv] = s), l);
}
function qv({ layoutId: e }) {
  const t = A.useContext(ic).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Qv(e, t) {
  A.useContext(Om).strict;
}
function Xv(e) {
  const { drag: t, layout: n } = cr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const e0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function mc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(e0.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function qu(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function pc(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = qu(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = qu(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Ja = (e) => Array.isArray(e),
  t0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  n0 = (e) => (Ja(e) ? e[e.length - 1] || 0 : e),
  Ne = (e) => !!(e && e.getVelocity);
function li(e) {
  const t = Ne(e) ? e.get() : e;
  return t0(t) ? t.toValue() : t;
}
function r0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i,
) {
  const o = { latestValues: s0(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Bm = (e) => (t, n) => {
  const r = A.useContext(ao),
    s = A.useContext(oo),
    i = () => r0(e, t, r, s);
  return n ? i() : oc(i);
};
function s0(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = li(i[f]);
  let { initial: o, animate: a } = e;
  const l = co(e),
    c = Pm(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const h = d ? a : o;
  if (h && typeof h != "boolean" && !lo(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let w = 0; w < f.length; w++) {
      const y = pc(e, f[w]);
      if (y) {
        const { transitionEnd: g, transition: T, ...p } = y;
        for (const m in p) {
          let v = p[m];
          if (Array.isArray(v)) {
            const S = d ? v.length - 1 : 0;
            v = v[S];
          }
          v !== null && (s[m] = v);
        }
        for (const m in g) s[m] = g[m];
      }
    }
  }
  return s;
}
const mr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  In = new Set(mr),
  Vm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Wm = Vm("--"),
  i0 = Vm("var(--"),
  gc = (e) => (i0(e) ? o0.test(e.split("/*")[0].trim()) : !1),
  o0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Hm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Mt = (e, t, n) => (n > t ? t : n < e ? e : n),
  pr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  hs = { ...pr, transform: (e) => Mt(0, 1, e) },
  Js = { ...pr, default: 1 },
  bs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ut = bs("deg"),
  xt = bs("%"),
  z = bs("px"),
  a0 = bs("vh"),
  l0 = bs("vw"),
  Qu = {
    ...xt,
    parse: (e) => xt.parse(e) / 100,
    transform: (e) => xt.transform(e * 100),
  },
  c0 = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    radius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    backgroundPositionX: z,
    backgroundPositionY: z,
  },
  u0 = {
    rotate: Ut,
    rotateX: Ut,
    rotateY: Ut,
    rotateZ: Ut,
    scale: Js,
    scaleX: Js,
    scaleY: Js,
    scaleZ: Js,
    skew: Ut,
    skewX: Ut,
    skewY: Ut,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: hs,
    originX: Qu,
    originY: Qu,
    originZ: z,
  },
  Xu = { ...pr, transform: Math.round },
  yc = {
    ...c0,
    ...u0,
    zIndex: Xu,
    size: z,
    fillOpacity: hs,
    strokeOpacity: hs,
    numOctaves: Xu,
  },
  d0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  h0 = mr.length;
function f0(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < h0; i++) {
    const o = mr[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = Hm(a, yc[o]);
      if (!l) {
        s = !1;
        const d = d0[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function vc(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (In.has(l)) {
      o = !0;
      continue;
    } else if (Wm(l)) {
      s[l] = c;
      continue;
    } else {
      const d = Hm(c, yc[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = f0(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
const m0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  p0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function g0(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? m0 : p0;
  e[i.offset] = z.transform(-r);
  const o = z.transform(t),
    a = z.transform(n);
  e[i.array] = `${o} ${a}`;
}
function ed(e, t, n) {
  return typeof e == "string" ? e : z.transform(t + n * e);
}
function y0(e, t, n) {
  const r = ed(t, e.x, e.width),
    s = ed(n, e.y, e.height);
  return `${r} ${s}`;
}
function wc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  d,
  h,
) {
  if ((vc(e, c, h), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: w, dimensions: y } = e;
  (f.transform && (y && (w.transform = f.transform), delete f.transform),
    y &&
      (s !== void 0 || i !== void 0 || w.transform) &&
      (w.transformOrigin = y0(
        y,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && g0(f, o, a, l, !1));
}
const xc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  _m = () => ({ ...xc(), attrs: {} }),
  bc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Gm(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const zm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ym(e, t, n, r) {
  Gm(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(zm.has(s) ? s : hc(s), t.attrs[s]);
}
const ji = {};
function v0(e) {
  Object.assign(ji, e);
}
function Km(e, { layout: t, layoutId: n }) {
  return (
    In.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ji[e] || e === "opacity"))
  );
}
function Sc(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Ne(s[o]) ||
      (t.style && Ne(t.style[o])) ||
      Km(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function Jm(e, t, n) {
  const r = Sc(e, t, n);
  for (const s in e)
    if (Ne(e[s]) || Ne(t[s])) {
      const i =
        mr.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function w0(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const td = ["x", "y", "width", "height", "cx", "cy", "r"],
  x0 = {
    useVisualState: Bm({
      scrapeMotionValuesFromProps: Jm,
      createRenderState: _m,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (In.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < td.length; a++) {
            const l = td[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          ie.read(() => {
            (w0(n, r),
              ie.render(() => {
                (wc(r, s, bc(n.tagName), e.transformTemplate), Ym(n, r));
              }));
          });
      },
    }),
  },
  b0 = {
    useVisualState: Bm({
      scrapeMotionValuesFromProps: Sc,
      createRenderState: xc,
    }),
  };
function $m(e, t, n) {
  for (const r in t) !Ne(t[r]) && !Km(r, n) && (e[r] = t[r]);
}
function S0({ transformTemplate: e }, t) {
  return A.useMemo(() => {
    const n = xc();
    return (vc(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function E0(e, t) {
  const n = e.style || {},
    r = {};
  return ($m(r, n, e), Object.assign(r, S0(e, t)), r);
}
function T0(e, t) {
  const n = {},
    r = E0(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function A0(e, t, n, r) {
  const s = A.useMemo(() => {
    const i = _m();
    return (
      wc(i, t, bc(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    ($m(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
function k0(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (mc(n) ? A0 : T0)(r, i, o, n),
      c = Wv(r, typeof n == "string", e),
      d = n !== A.Fragment ? { ...c, ...l, ref: s } : {},
      { children: h } = r,
      f = A.useMemo(() => (Ne(h) ? h.get() : h), [h]);
    return A.createElement(n, { ...d, children: f });
  };
}
function I0(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(mc(r) ? x0 : b0),
      preloadedFeatures: e,
      useRender: k0(s),
      createVisualElement: t,
      Component: r,
    };
    return Zv(o);
  };
}
function Zm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function uo(e, t, n) {
  const r = e.getProps();
  return pc(r, t, n !== void 0 ? n : r.custom, e);
}
const C0 = cc(() => window.ScrollTimeline !== void 0);
class R0 {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) => {
      if (C0() && s.attachTimeline) return s.attachTimeline(t);
      if (typeof n == "function") return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        (s && s(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class N0 extends R0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Ec(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const $a = 2e4;
function qm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < $a; ) ((t += n), (r = e.next(t)));
  return t >= $a ? 1 / 0 : t;
}
function Tc(e) {
  return typeof e == "function";
}
function nd(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Ac = (e) => Array.isArray(e) && typeof e[0] == "number",
  L0 = { linearEasing: void 0 };
function D0(e, t) {
  const n = cc(e);
  return () => {
    var r;
    return (r = L0[t]) !== null && r !== void 0 ? r : n();
  };
}
const Fi = D0(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Qm = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(lr(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Xm(e) {
  return !!(
    (typeof e == "function" && Fi()) ||
    !e ||
    (typeof e == "string" && (e in Za || Fi())) ||
    Ac(e) ||
    (Array.isArray(e) && e.every(Xm))
  );
}
const Dr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Za = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Dr([0, 0.65, 0.55, 1]),
    circOut: Dr([0.55, 0, 1, 0.45]),
    backIn: Dr([0.31, 0.01, 0.66, -0.59]),
    backOut: Dr([0.33, 1.53, 0.69, 0.99]),
  };
function ep(e, t) {
  if (e)
    return typeof e == "function" && Fi()
      ? Qm(e, t)
      : Ac(e)
        ? Dr(e)
        : Array.isArray(e)
          ? e.map((n) => ep(n, t) || Za.easeOut)
          : Za[e];
}
const lt = { x: !1, y: !1 };
function tp() {
  return lt.x || lt.y;
}
function O0(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function np(e, t) {
  const n = O0(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function rd(e) {
  return (t) => {
    t.pointerType === "touch" || tp() || e(t);
  };
}
function M0(e, t, n = {}) {
  const [r, s, i] = np(e, n),
    o = rd((a) => {
      const { target: l } = a,
        c = t(a);
      if (typeof c != "function" || !l) return;
      const d = rd((h) => {
        (c(h), l.removeEventListener("pointerleave", d));
      });
      l.addEventListener("pointerleave", d, s);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
const rp = (e, t) => (t ? (e === t ? !0 : rp(e, t.parentElement)) : !1),
  kc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  P0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function j0(e) {
  return P0.has(e.tagName) || e.tabIndex !== -1;
}
const Or = new WeakSet();
function sd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Vo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const F0 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = sd(() => {
    if (Or.has(n)) return;
    Vo(n, "down");
    const s = sd(() => {
        Vo(n, "up");
      }),
      i = () => Vo(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function id(e) {
  return kc(e) && !tp();
}
function U0(e, t, n = {}) {
  const [r, s, i] = np(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!id(a) || Or.has(l)) return;
      Or.add(l);
      const c = t(a),
        d = (w, y) => {
          (window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            !(!id(w) || !Or.has(l)) &&
              (Or.delete(l), typeof c == "function" && c(w, { success: y })));
        },
        h = (w) => {
          d(w, n.useGlobalTarget || rp(l, w.target));
        },
        f = (w) => {
          d(w, !1);
        };
      (window.addEventListener("pointerup", h, s),
        window.addEventListener("pointercancel", f, s));
    };
  return (
    r.forEach((a) => {
      (!j0(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (c) => F0(c, s), s));
    }),
    i
  );
}
function B0(e) {
  return e === "x" || e === "y"
    ? lt[e]
      ? null
      : ((lt[e] = !0),
        () => {
          lt[e] = !1;
        })
    : lt.x || lt.y
      ? null
      : ((lt.x = lt.y = !0),
        () => {
          lt.x = lt.y = !1;
        });
}
const sp = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...mr,
]);
let ci;
function V0() {
  ci = void 0;
}
const bt = {
  now: () => (
    ci === void 0 &&
      bt.set(
        Ee.isProcessing || Pv.useManualTiming
          ? Ee.timestamp
          : performance.now(),
      ),
    ci
  ),
  set: (e) => {
    ((ci = e), queueMicrotask(V0));
  },
};
function Ic(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Cc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Rc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Ic(this.subscriptions, t), () => Cc(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ip(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const od = 30,
  W0 = (e) => !isNaN(parseFloat(e));
class H0 {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = bt.now();
        (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = bt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = W0(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Rc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = bt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > od
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, od);
    return ip(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function fs(e, t) {
  return new H0(e, t);
}
function _0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fs(n));
}
function G0(e, t) {
  const n = uo(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = n0(i[o]);
    _0(e, o, a);
  }
}
function z0(e) {
  return !!(Ne(e) && e.add);
}
function qa(e, t) {
  const n = e.getValue("willChange");
  if (z0(n)) return n.add(t);
}
function op(e) {
  return e.props[jm];
}
const ap = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Y0 = 1e-7,
  K0 = 12;
function J0(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = ap(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > Y0 && ++a < K0);
  return o;
}
function Ss(e, t, n, r) {
  if (e === t && n === r) return Ye;
  const s = (i) => J0(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : ap(s(i), t, r));
}
const lp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  cp = (e) => (t) => 1 - e(1 - t),
  up = Ss(0.33, 1.53, 0.69, 0.99),
  Nc = cp(up),
  dp = lp(Nc),
  hp = (e) =>
    (e *= 2) < 1 ? 0.5 * Nc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Lc = (e) => 1 - Math.sin(Math.acos(e)),
  fp = cp(Lc),
  mp = lp(Lc),
  pp = (e) => /^0[^.\s]+$/u.test(e);
function $0(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || pp(e)
      : !0;
}
const Gr = (e) => Math.round(e * 1e5) / 1e5,
  Dc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Z0(e) {
  return e == null;
}
const q0 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Oc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && q0.test(n) && n.startsWith(e)) ||
      (t && !Z0(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  gp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(Dc);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Q0 = (e) => Mt(0, 255, e),
  Wo = { ...pr, transform: (e) => Math.round(Q0(e)) },
  gn = {
    test: Oc("rgb", "red"),
    parse: gp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Wo.transform(e) +
      ", " +
      Wo.transform(t) +
      ", " +
      Wo.transform(n) +
      ", " +
      Gr(hs.transform(r)) +
      ")",
  };
function X0(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Qa = { test: Oc("#"), parse: X0, transform: gn.transform },
  Gn = {
    test: Oc("hsl", "hue"),
    parse: gp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      xt.transform(Gr(t)) +
      ", " +
      xt.transform(Gr(n)) +
      ", " +
      Gr(hs.transform(r)) +
      ")",
  },
  Ce = {
    test: (e) => gn.test(e) || Qa.test(e) || Gn.test(e),
    parse: (e) =>
      gn.test(e) ? gn.parse(e) : Gn.test(e) ? Gn.parse(e) : Qa.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? gn.transform(e)
          : Gn.transform(e),
  },
  ew =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tw(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Dc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ew)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const yp = "number",
  vp = "color",
  nw = "var",
  rw = "var(",
  ad = "${}",
  sw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      sw,
      (l) => (
        Ce.test(l)
          ? (r.color.push(i), s.push(vp), n.push(Ce.parse(l)))
          : l.startsWith(rw)
            ? (r.var.push(i), s.push(nw), n.push(l))
            : (r.number.push(i), s.push(yp), n.push(parseFloat(l))),
        ++i,
        ad
      ),
    )
    .split(ad);
  return { values: n, split: a, indexes: r, types: s };
}
function wp(e) {
  return ms(e).values;
}
function xp(e) {
  const { split: t, types: n } = ms(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === yp
          ? (i += Gr(s[o]))
          : a === vp
            ? (i += Ce.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const iw = (e) => (typeof e == "number" ? 0 : e);
function ow(e) {
  const t = wp(e);
  return xp(e)(t.map(iw));
}
const nn = {
    test: tw,
    parse: wp,
    createTransformer: xp,
    getAnimatableNone: ow,
  },
  aw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function lw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Dc) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = aw.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const cw = /\b([a-z-]*)\(.*?\)/gu,
  Xa = {
    ...nn,
    getAnimatableNone: (e) => {
      const t = e.match(cw);
      return t ? t.map(lw).join(" ") : e;
    },
  },
  uw = {
    ...yc,
    color: Ce,
    backgroundColor: Ce,
    outlineColor: Ce,
    fill: Ce,
    stroke: Ce,
    borderColor: Ce,
    borderTopColor: Ce,
    borderRightColor: Ce,
    borderBottomColor: Ce,
    borderLeftColor: Ce,
    filter: Xa,
    WebkitFilter: Xa,
  },
  Mc = (e) => uw[e];
function bp(e, t) {
  let n = Mc(e);
  return (
    n !== Xa && (n = nn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const dw = new Set(["auto", "none", "0"]);
function hw(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    (typeof i == "string" && !dw.has(i) && ms(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = bp(n, s);
}
const ld = (e) => e === pr || e === z,
  cd = (e, t) => parseFloat(e.split(", ")[t]),
  ud =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return cd(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? cd(i[1], e) : 0;
      }
    },
  fw = new Set(["x", "y", "z"]),
  mw = mr.filter((e) => !fw.has(e));
function pw(e) {
  const t = [];
  return (
    mw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ur = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ud(4, 13),
  y: ud(5, 14),
};
ur.translateX = ur.x;
ur.translateY = ur.y;
const wn = new Set();
let el = !1,
  tl = !1;
function Sp() {
  if (tl) {
    const e = Array.from(wn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = pw(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((tl = !1), (el = !1), wn.forEach((e) => e.complete()), wn.clear());
}
function Ep() {
  wn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (tl = !0));
  });
}
function gw() {
  (Ep(), Sp());
}
class Pc {
  constructor(t, n, r, s, i, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (wn.add(this),
          el || ((el = !0), ie.read(Ep), ie.resolveKeyframes(Sp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      wn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), wn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Tp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  yw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function vw(e) {
  const t = yw.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function Ap(e, t, n = 1) {
  const [r, s] = vw(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Tp(o) ? parseFloat(o) : o;
  }
  return gc(s) ? Ap(s, t, n + 1) : s;
}
const kp = (e) => (t) => t.test(e),
  ww = { test: (e) => e === "auto", parse: (e) => e },
  Ip = [pr, z, xt, Ut, l0, a0, ww],
  dd = (e) => Ip.find(kp(e));
class Cp extends Pc {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), gc(c))) {
        const d = Ap(c, n.current);
        (d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !sp.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = dd(s),
      a = dd(i);
    if (o !== a)
      if (ld(o) && ld(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) $0(t[s]) && r.push(s);
    r.length && hw(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ur[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    ((s[o] = ur[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes());
  }
}
const hd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (nn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function xw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function bw(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = hd(s, t),
    a = hd(i, t);
  return !o || !a ? !1 : xw(e) || ((n === "spring" || Tc(n)) && r);
}
const Sw = (e) => e !== null;
function ho(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Sw),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const Ew = 40;
class Rp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = bt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Ew
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && gw(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = bt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !bw(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        (l && l(ho(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const le = (e, t, n) => e + (t - e) * n;
function Ho(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Tw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((s = Ho(l, a, e + 1 / 3)), (i = Ho(l, a, e)), (o = Ho(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ui(e, t) {
  return (n) => (n > 0 ? t : e);
}
const _o = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  Aw = [Qa, gn, Gn],
  kw = (e) => Aw.find((t) => t.test(e));
function fd(e) {
  const t = kw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Gn && (n = Tw(n)), n);
}
const md = (e, t) => {
    const n = fd(e),
      r = fd(t);
    if (!n || !r) return Ui(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = _o(n.red, r.red, i)),
      (s.green = _o(n.green, r.green, i)),
      (s.blue = _o(n.blue, r.blue, i)),
      (s.alpha = le(n.alpha, r.alpha, i)),
      gn.transform(s)
    );
  },
  Iw = (e, t) => (n) => t(e(n)),
  Es = (...e) => e.reduce(Iw),
  nl = new Set(["none", "hidden"]);
function Cw(e, t) {
  return nl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Rw(e, t) {
  return (n) => le(e, t, n);
}
function jc(e) {
  return typeof e == "number"
    ? Rw
    : typeof e == "string"
      ? gc(e)
        ? Ui
        : Ce.test(e)
          ? md
          : Dw
      : Array.isArray(e)
        ? Np
        : typeof e == "object"
          ? Ce.test(e)
            ? md
            : Nw
          : Ui;
}
function Np(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => jc(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Nw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = jc(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Lw(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[i] = l), s[o]++);
  }
  return r;
}
const Dw = (e, t) => {
  const n = nn.createTransformer(t),
    r = ms(e),
    s = ms(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (nl.has(e) && !s.values.length) || (nl.has(t) && !r.values.length)
      ? Cw(e, t)
      : Es(Np(Lw(r, s), s.values), n)
    : Ui(e, t);
};
function Lp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? le(e, t, n)
    : jc(e)(e, t);
}
const Ow = 5;
function Dp(e, t, n) {
  const r = Math.max(t - Ow, 0);
  return ip(n - e(r), t - r);
}
const he = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Go = 0.001;
function Mw({
  duration: e = he.duration,
  bounce: t = he.bounce,
  velocity: n = he.velocity,
  mass: r = he.mass,
}) {
  let s,
    i,
    o = 1 - t;
  ((o = Mt(he.minDamping, he.maxDamping, o)),
    (e = Mt(he.minDuration, he.maxDuration, Rt(e))),
    o < 1
      ? ((s = (c) => {
          const d = c * o,
            h = d * e,
            f = d - n,
            w = rl(c, o),
            y = Math.exp(-h);
          return Go - (f / w) * y;
        }),
        (i = (c) => {
          const h = c * o * e,
            f = h * n + n,
            w = Math.pow(o, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-h),
            g = rl(Math.pow(c, 2), o);
          return ((-s(c) + Go > 0 ? -1 : 1) * ((f - w) * y)) / g;
        }))
      : ((s = (c) => {
          const d = Math.exp(-c * e),
            h = (c - n) * e + 1;
          return -Go + d * h;
        }),
        (i = (c) => {
          const d = Math.exp(-c * e),
            h = (n - c) * (e * e);
          return d * h;
        })));
  const a = 5 / e,
    l = jw(s, i, a);
  if (((e = Ct(e)), isNaN(l)))
    return { stiffness: he.stiffness, damping: he.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const Pw = 12;
function jw(e, t, n) {
  let r = n;
  for (let s = 1; s < Pw; s++) r = r - e(r) / t(r);
  return r;
}
function rl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Fw = ["duration", "bounce"],
  Uw = ["stiffness", "damping", "mass"];
function pd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Bw(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!pd(e, Uw) && pd(e, Fw))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: he.mass, stiffness: s, damping: i };
    } else {
      const n = Mw(e);
      ((t = { ...t, ...n, mass: he.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Op(e = he.visualDuration, t = he.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: c,
      mass: d,
      duration: h,
      velocity: f,
      isResolvedFromDuration: w,
    } = Bw({ ...n, velocity: -Rt(n.velocity || 0) }),
    y = f || 0,
    g = c / (2 * Math.sqrt(l * d)),
    T = o - i,
    p = Rt(Math.sqrt(l / d)),
    m = Math.abs(T) < 5;
  (r || (r = m ? he.restSpeed.granular : he.restSpeed.default),
    s || (s = m ? he.restDelta.granular : he.restDelta.default));
  let v;
  if (g < 1) {
    const E = rl(p, g);
    v = (I) => {
      const C = Math.exp(-g * p * I);
      return (
        o - C * (((y + g * p * T) / E) * Math.sin(E * I) + T * Math.cos(E * I))
      );
    };
  } else if (g === 1) v = (E) => o - Math.exp(-p * E) * (T + (y + p * T) * E);
  else {
    const E = p * Math.sqrt(g * g - 1);
    v = (I) => {
      const C = Math.exp(-g * p * I),
        x = Math.min(E * I, 300);
      return (
        o - (C * ((y + g * p * T) * Math.sinh(x) + E * T * Math.cosh(x))) / E
      );
    };
  }
  const S = {
    calculatedDuration: (w && h) || null,
    next: (E) => {
      const I = v(E);
      if (w) a.done = E >= h;
      else {
        let C = 0;
        g < 1 && (C = E === 0 ? Ct(y) : Dp(v, E, I));
        const x = Math.abs(C) <= r,
          O = Math.abs(o - I) <= s;
        a.done = x && O;
      }
      return ((a.value = a.done ? o : I), a);
    },
    toString: () => {
      const E = Math.min(qm(S), $a),
        I = Qm((C) => S.next(E * C).value, E, 30);
      return E + "ms " + I;
    },
  };
  return S;
}
function gd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const h = e[0],
    f = { done: !1, value: h },
    w = (x) => (a !== void 0 && x < a) || (l !== void 0 && x > l),
    y = (x) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - x) < Math.abs(l - x)
          ? a
          : l;
  let g = n * t;
  const T = h + g,
    p = o === void 0 ? T : o(T);
  p !== T && (g = p - h);
  const m = (x) => -g * Math.exp(-x / r),
    v = (x) => p + m(x),
    S = (x) => {
      const O = m(x),
        M = v(x);
      ((f.done = Math.abs(O) <= c), (f.value = f.done ? p : M));
    };
  let E, I;
  const C = (x) => {
    w(f.value) &&
      ((E = x),
      (I = Op({
        keyframes: [f.value, y(f.value)],
        velocity: Dp(v, x, f.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (x) => {
        let O = !1;
        return (
          !I && E === void 0 && ((O = !0), S(x), C(x)),
          E !== void 0 && x >= E ? I.next(x - E) : (!O && S(x), f)
        );
      },
    }
  );
}
const Vw = Ss(0.42, 0, 1, 1),
  Ww = Ss(0, 0, 0.58, 1),
  Mp = Ss(0.42, 0, 0.58, 1),
  Hw = (e) => Array.isArray(e) && typeof e[0] != "number",
  _w = {
    linear: Ye,
    easeIn: Vw,
    easeInOut: Mp,
    easeOut: Ww,
    circIn: Lc,
    circInOut: mp,
    circOut: fp,
    backIn: Nc,
    backInOut: dp,
    backOut: up,
    anticipate: hp,
  },
  yd = (e) => {
    if (Ac(e)) {
      Lm(e.length === 4);
      const [t, n, r, s] = e;
      return Ss(t, n, r, s);
    } else if (typeof e == "string") return _w[e];
    return e;
  };
function Gw(e, t, n) {
  const r = [],
    s = n || Lp,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ye : t;
      a = Es(l, a);
    }
    r.push(a);
  }
  return r;
}
function zw(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((Lm(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Gw(t, r, s),
    l = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let h = 0;
      if (l > 1) for (; h < e.length - 2 && !(d < e[h + 1]); h++);
      const f = lr(e[h], e[h + 1], d);
      return a[h](f);
    };
  return n ? (d) => c(Mt(e[0], e[i - 1], d)) : c;
}
function Yw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = lr(0, t, r);
    e.push(le(n, 1, s));
  }
}
function Kw(e) {
  const t = [0];
  return (Yw(t, e.length - 1), t);
}
function Jw(e, t) {
  return e.map((n) => n * t);
}
function $w(e, t) {
  return e.map(() => t || Mp).splice(0, e.length - 1);
}
function Bi({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = Hw(r) ? r.map(yd) : yd(r),
    i = { done: !1, value: t[0] },
    o = Jw(n && n.length === t.length ? n : Kw(t), e),
    a = zw(o, t, { ease: Array.isArray(s) ? s : $w(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const Zw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ie.update(t, !0),
      stop: () => tn(t),
      now: () => (Ee.isProcessing ? Ee.timestamp : bt.now()),
    };
  },
  qw = { decay: gd, inertia: gd, tween: Bi, keyframes: Bi, spring: Op },
  Qw = (e) => e / 100;
class Fc extends Rp {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || Pc,
      a = (l, c) => this.onKeyframesResolved(l, c);
    ((this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Tc(n) ? n : qw[n] || Bi;
    let l, c;
    a !== Bi &&
      typeof t[0] != "number" &&
      ((l = Es(Qw, Lp(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = qm(d)));
    const { calculatedDuration: h } = d,
      f = h + s,
      w = f * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: w,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: x } = this.options;
      return { done: !0, value: x[x.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: h,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: w,
      repeatType: y,
      repeatDelay: g,
      onUpdate: T,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > d;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let v = this.currentTime,
      S = i;
    if (w) {
      const x = Math.min(this.currentTime, d) / h;
      let O = Math.floor(x),
        M = x % 1;
      (!M && x >= 1 && (M = 1),
        M === 1 && O--,
        (O = Math.min(O, w + 1)),
        !!(O % 2) &&
          (y === "reverse"
            ? ((M = 1 - M), g && (M -= g / h))
            : y === "mirror" && (S = o)),
        (v = Mt(0, 1, M) * h));
    }
    const E = m ? { done: !1, value: l[0] } : S.next(v);
    a && (E.value = a(E.value));
    let { done: I } = E;
    !m &&
      c !== null &&
      (I = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && I));
    return (
      C && s !== void 0 && (E.value = ho(l, this.options, s)),
      T && T(E.value),
      C && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Rt(t.calculatedDuration) : 0;
  }
  get time() {
    return Rt(this.currentTime);
  }
  set time(t) {
    ((t = Ct(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = Rt(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Zw, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((i) => this.tick(i))), n && n());
    const s = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = s)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const Xw = new Set(["opacity", "clipPath", "filter", "transform"]);
function ex(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = ep(a, s);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const tx = cc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Vi = 10,
  nx = 2e4;
function rx(e) {
  return Tc(e.type) || e.type === "spring" || !Xm(e.ease);
}
function sx(e, t) {
  const n = new Fc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < nx; ) ((r = n.sample(i)), s.push(r.value), (i += Vi));
  return { times: void 0, keyframes: s, duration: i - Vi, ease: "linear" };
}
const Pp = { anticipate: hp, backInOut: dp, circInOut: mp };
function ix(e) {
  return e in Pp;
}
class vd extends Rp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    ((this.resolver = new Cp(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && Fi() && ix(i) && (i = Pp[i]), rx(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: f,
          motionValue: w,
          element: y,
          ...g
        } = this.options,
        T = sx(t, g);
      ((t = T.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = T.duration),
        (s = T.times),
        (i = T.ease),
        (o = "keyframes"));
    }
    const d = ex(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (nd(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: h } = this.options;
            (a.set(ho(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Rt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Rt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Ct(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ye;
      const { animation: r } = n;
      nd(r, t);
    }
    return Ye;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: d,
          onComplete: h,
          element: f,
          ...w
        } = this.options,
        y = new Fc({
          ...w,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        g = Ct(this.time);
      c.setWithVelocity(y.sample(g - Vi).value, y.sample(g).value, Vi);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return (
      tx() &&
      r &&
      Xw.has(r) &&
      !l &&
      !c &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const ox = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ax = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  lx = { type: "keyframes", duration: 0.8 },
  cx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ux = (e, { keyframes: t }) =>
    t.length > 2
      ? lx
      : In.has(e)
        ? e.startsWith("scale")
          ? ax(t[1])
          : ox
        : cx;
function dx({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Uc =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Ec(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Ct(l);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    (dx(a) || (d = { ...d, ...ux(e, d) }),
      d.duration && (d.duration = Ct(d.duration)),
      d.repeatDelay && (d.repeatDelay = Ct(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let h = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (h = !0)),
      h && !i && t.get() !== void 0)
    ) {
      const f = ho(d.keyframes, a);
      if (f !== void 0)
        return (
          ie.update(() => {
            (d.onUpdate(f), d.onComplete());
          }),
          new N0([])
        );
    }
    return !i && vd.supports(d) ? new vd(d) : new Fc(d);
  };
function hx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function jp(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const h in l) {
    const f = e.getValue(
        h,
        (i = e.latestValues[h]) !== null && i !== void 0 ? i : null,
      ),
      w = l[h];
    if (w === void 0 || (d && hx(d, h))) continue;
    const y = { delay: n, ...Ec(o || {}, h) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const p = op(e);
      if (p) {
        const m = window.MotionHandoffAnimation(p, h, ie);
        m !== null && ((y.startTime = m), (g = !0));
      }
    }
    (qa(e, h),
      f.start(
        Uc(h, f, w, e.shouldReduceMotion && sp.has(h) ? { type: !1 } : y, e, g),
      ));
    const T = f.animation;
    T && c.push(T);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ie.update(() => {
          a && G0(e, a);
        });
      }),
    c
  );
}
function sl(e, t, n = {}) {
  var r;
  const s = uo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(jp(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = i;
            return fx(e, t, d + c, h, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => d());
  } else return Promise.all([o(), a(n.delay)]);
}
function fx(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(mx)
      .forEach((c, d) => {
        (c.notify("AnimationStart", t),
          o.push(
            sl(c, t, { ...i, delay: n + l(d) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function mx(e, t) {
  return e.sortNodePosition(t);
}
function px(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => sl(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = sl(e, t, n);
  else {
    const s = typeof t == "function" ? uo(e, t, n.custom) : t;
    r = Promise.all(jp(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const gx = dc.length;
function Fp(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Fp(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < gx; n++) {
    const r = dc[n],
      s = e.props[r];
    (ds(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const yx = [...uc].reverse(),
  vx = uc.length;
function wx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => px(e, n, r)));
}
function xx(e) {
  let t = wx(e),
    n = wd(),
    r = !0;
  const s = (l) => (c, d) => {
    var h;
    const f = uo(
      e,
      d,
      l === "exit"
        ? (h = e.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0,
    );
    if (f) {
      const { transition: w, transitionEnd: y, ...g } = f;
      c = { ...c, ...g, ...y };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      d = Fp(e.parent) || {},
      h = [],
      f = new Set();
    let w = {},
      y = 1 / 0;
    for (let T = 0; T < vx; T++) {
      const p = yx[T],
        m = n[p],
        v = c[p] !== void 0 ? c[p] : d[p],
        S = ds(v),
        E = p === l ? m.isActive : null;
      E === !1 && (y = T);
      let I = v === d[p] && v !== c[p] && S;
      if (
        (I && r && e.manuallyAnimateOnMount && (I = !1),
        (m.protectedKeys = { ...w }),
        (!m.isActive && E === null) ||
          (!v && !m.prevProp) ||
          lo(v) ||
          typeof v == "boolean")
      )
        continue;
      const C = bx(m.prevProp, v);
      let x = C || (p === l && m.isActive && !I && S) || (T > y && S),
        O = !1;
      const M = Array.isArray(v) ? v : [v];
      let j = M.reduce(s(p), {});
      E === !1 && (j = {});
      const { prevResolvedValues: Z = {} } = m,
        ne = { ...Z, ...j },
        H = (P) => {
          ((x = !0),
            f.has(P) && ((O = !0), f.delete(P)),
            (m.needsAnimating[P] = !0));
          const k = e.getValue(P);
          k && (k.liveStyle = !1);
        };
      for (const P in ne) {
        const k = j[P],
          F = Z[P];
        if (w.hasOwnProperty(P)) continue;
        let _ = !1;
        (Ja(k) && Ja(F) ? (_ = !Zm(k, F)) : (_ = k !== F),
          _
            ? k != null
              ? H(P)
              : f.add(P)
            : k !== void 0 && f.has(P)
              ? H(P)
              : (m.protectedKeys[P] = !0));
      }
      ((m.prevProp = v),
        (m.prevResolvedValues = j),
        m.isActive && (w = { ...w, ...j }),
        r && e.blockInitialAnimation && (x = !1),
        x &&
          (!(I && C) || O) &&
          h.push(...M.map((P) => ({ animation: P, options: { type: p } }))));
    }
    if (f.size) {
      const T = {};
      (f.forEach((p) => {
        const m = e.getBaseTarget(p),
          v = e.getValue(p);
        (v && (v.liveStyle = !0), (T[p] = m ?? null));
      }),
        h.push({ animation: T }));
    }
    let g = !!h.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var d;
    if (n[l].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((f) => {
        var w;
        return (w = f.animationState) === null || w === void 0
          ? void 0
          : w.setActive(l, c);
      }),
      (n[l].isActive = c));
    const h = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      ((n = wd()), (r = !0));
    },
  };
}
function bx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Zm(t, e) : !1;
}
function ln(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function wd() {
  return {
    animate: ln(!0),
    whileInView: ln(),
    whileHover: ln(),
    whileTap: ln(),
    whileDrag: ln(),
    whileFocus: ln(),
    exit: ln(),
  };
}
class an {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class Sx extends an {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = xx(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    lo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let Ex = 0;
class Tx extends an {
  constructor() {
    (super(...arguments), (this.id = Ex++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Ax = { animation: { Feature: Sx }, exit: { Feature: Tx } };
function ps(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Ts(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const kx = (e) => (t) => kc(t) && e(t, Ts(t));
function zr(e, t, n, r) {
  return ps(e, t, kx(n), r);
}
const xd = (e, t) => Math.abs(e - t);
function Ix(e, t) {
  const n = xd(e.x, t.x),
    r = xd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Up {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Yo(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          w = Ix(h.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !w) return;
        const { point: y } = h,
          { timestamp: g } = Ee;
        this.history.push({ ...y, timestamp: g });
        const { onStart: T, onMove: p } = this.handlers;
        (f ||
          (T && T(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, f) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = zo(f, this.transformPagePoint)),
          ie.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, f) => {
        this.end();
        const { onEnd: w, onSessionEnd: y, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = Yo(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : zo(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(h, T), y && y(h, T));
      }),
      !kc(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window));
    const o = Ts(t),
      a = zo(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Ee;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    (d && d(t, Yo(a, this.history)),
      (this.removeListeners = Es(
        zr(this.contextWindow, "pointermove", this.handlePointerMove),
        zr(this.contextWindow, "pointerup", this.handlePointerUp),
        zr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), tn(this.updatePoint));
  }
}
function zo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yo({ point: e }, t) {
  return {
    point: e,
    delta: bd(e, Bp(t)),
    offset: bd(e, Cx(t)),
    velocity: Rx(t, 0.1),
  };
}
function Cx(e) {
  return e[0];
}
function Bp(e) {
  return e[e.length - 1];
}
function Rx(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = Bp(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Ct(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Rt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const Vp = 1e-4,
  Nx = 1 - Vp,
  Lx = 1 + Vp,
  Wp = 0.01,
  Dx = 0 - Wp,
  Ox = 0 + Wp;
function Je(e) {
  return e.max - e.min;
}
function Mx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Sd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = le(t.min, t.max, e.origin)),
    (e.scale = Je(n) / Je(t)),
    (e.translate = le(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Nx && e.scale <= Lx) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Dx && e.translate <= Ox) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Yr(e, t, n, r) {
  (Sd(e.x, t.x, n.x, r ? r.originX : void 0),
    Sd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Ed(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Je(t)));
}
function Px(e, t, n) {
  (Ed(e.x, t.x, n.x), Ed(e.y, t.y, n.y));
}
function Td(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Je(t)));
}
function Kr(e, t, n) {
  (Td(e.x, t.x, n.x), Td(e.y, t.y, n.y));
}
function jx(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? le(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ad(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Fx(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: Ad(e.x, n, s), y: Ad(e.y, t, r) };
}
function kd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Ux(e, t) {
  return { x: kd(e.x, t.x), y: kd(e.y, t.y) };
}
function Bx(e, t) {
  let n = 0.5;
  const r = Je(e),
    s = Je(t);
  return (
    s > r
      ? (n = lr(t.min, t.max - r, e.min))
      : r > s && (n = lr(e.min, e.max - s, t.min)),
    Mt(0, 1, n)
  );
}
function Vx(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const il = 0.35;
function Wx(e = il) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = il),
    { x: Id(e, "left", "right"), y: Id(e, "top", "bottom") }
  );
}
function Id(e, t, n) {
  return { min: Cd(e, t), max: Cd(e, n) };
}
function Cd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Rd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zn = () => ({ x: Rd(), y: Rd() }),
  Nd = () => ({ min: 0, max: 0 }),
  me = () => ({ x: Nd(), y: Nd() });
function et(e) {
  return [e("x"), e("y")];
}
function Hp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Hx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function _x(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ko(e) {
  return e === void 0 || e === 1;
}
function ol({ scale: e, scaleX: t, scaleY: n }) {
  return !Ko(e) || !Ko(t) || !Ko(n);
}
function dn(e) {
  return (
    ol(e) ||
    _p(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function _p(e) {
  return Ld(e.x) || Ld(e.y);
}
function Ld(e) {
  return e && e !== "0%";
}
function Wi(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Dd(e, t, n, r, s) {
  return (s !== void 0 && (e = Wi(e, s, r)), Wi(e, n, r) + t);
}
function al(e, t = 0, n = 1, r, s) {
  ((e.min = Dd(e.min, t, n, r, s)), (e.max = Dd(e.max, t, n, r, s)));
}
function Gp(e, { x: t, y: n }) {
  (al(e.x, t.translate, t.scale, t.originPoint),
    al(e.y, n.translate, n.scale, n.originPoint));
}
const Od = 0.999999999999,
  Md = 1.0000000000001;
function Gx(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Kn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Gp(e, o)),
      r && dn(i.latestValues) && Kn(e, i.latestValues));
  }
  (t.x < Md && t.x > Od && (t.x = 1), t.y < Md && t.y > Od && (t.y = 1));
}
function Yn(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Pd(e, t, n, r, s = 0.5) {
  const i = le(e.min, e.max, s);
  al(e, t, n, i, r);
}
function Kn(e, t) {
  (Pd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function zp(e, t) {
  return Hp(_x(e.getBoundingClientRect(), t));
}
function zx(e, t, n) {
  const r = zp(e, n),
    { scroll: s } = t;
  return (s && (Yn(r.x, s.offset.x), Yn(r.y, s.offset.y)), r);
}
const Yp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Yx = new WeakMap();
class Kx {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = me()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: h } = this.getProps();
        (h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ts(d).point));
      },
      i = (d, h) => {
        const { drag: f, dragPropagation: w, onDragStart: y } = this.getProps();
        if (
          f &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = B0(f)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          et((T) => {
            let p = this.getAxisMotionValue(T).get() || 0;
            if (xt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const v = m.layout.layoutBox[T];
                v && (p = Je(v) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[T] = p;
          }),
          y && ie.postRender(() => y(d, h)),
          qa(this.visualElement, "transform"));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      o = (d, h) => {
        const {
          dragPropagation: f,
          dragDirectionLock: w,
          onDirectionLock: y,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: T } = h;
        if (w && this.currentDirection === null) {
          ((this.currentDirection = Jx(T)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, T),
          this.updateAxis("y", h.point, T),
          this.visualElement.render(),
          g && g(d, h));
      },
      a = (d, h) => this.stop(d, h),
      l = () =>
        et((d) => {
          var h;
          return (
            this.getAnimationState(d) === "paused" &&
            ((h = this.getAxisMotionValue(d).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Up(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Yp(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && ie.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !$s(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = jx(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    (n && _n(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = Fx(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Wx(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        et((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Vx(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_n(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = zx(r, s.root, this.visualElement.getTransformPagePoint());
    let o = Ux(s.layout.layoutBox, i);
    if (n) {
      const a = n(Hx(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Hp(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = et((d) => {
        if (!$s(d, n, this.currentDirection)) return;
        let h = (l && l[d]) || {};
        o && (h = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          w = s ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: f,
            bounceDamping: w,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...h,
          };
        return this.startAxisValueAnimation(d, y);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      qa(this.visualElement, t),
      r.start(Uc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    et((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    et((n) => {
      const { drag: r } = this.getProps();
      if (!$s(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - le(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!_n(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Bx({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      et((o) => {
        if (!$s(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(le(l, c, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Yx.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = zr(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        _n(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      ie.read(r));
    const o = ps(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (et((d) => {
              const h = this.getAxisMotionValue(d);
              h &&
                ((this.originPoint[d] += l[d].translate),
                h.set(h.get() + l[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = il,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function $s(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Jx(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class $x extends an {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ye),
      (this.removeListeners = Ye),
      (this.controls = new Kx(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ye));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const jd = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class Zx extends an {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ye));
  }
  onPointerDown(t) {
    this.session = new Up(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yp(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: jd(t),
      onStart: jd(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && ie.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = zr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Fd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ar = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (z.test(e)) e = parseFloat(e);
        else return e;
      const n = Fd(e, t.target.x),
        r = Fd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  qx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = nn.parse(e);
      if (s.length > 5) return r;
      const i = nn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const c = le(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
class Qx extends A.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (v0(Xx),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ui.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              ie.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      fc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Kp(e) {
  const [t, n] = Cm(),
    r = A.useContext(ic);
  return u.jsx(Qx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(Fm),
    isPresent: t,
    safeToRemove: n,
  });
}
const Xx = {
  borderRadius: {
    ...Ar,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Ar,
  borderTopRightRadius: Ar,
  borderBottomLeftRadius: Ar,
  borderBottomRightRadius: Ar,
  boxShadow: qx,
};
function eb(e, t, n) {
  const r = Ne(e) ? e : fs(e);
  return (r.start(Uc("", r, t, n)), r.animation);
}
function tb(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const nb = (e, t) => e.depth - t.depth;
class rb {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Ic(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Cc(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(nb),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function sb(e, t) {
  const n = bt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (tn(r), e(i - t));
    };
  return (ie.read(r, !0), () => tn(r));
}
const Jp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ib = Jp.length,
  Ud = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bd = (e) => typeof e == "number" || z.test(e);
function ob(e, t, n, r, s, i) {
  s
    ? ((e.opacity = le(0, n.opacity !== void 0 ? n.opacity : 1, ab(r))),
      (e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, lb(r))))
    : i &&
      (e.opacity = le(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < ib; o++) {
    const a = `border${Jp[o]}Radius`;
    let l = Vd(t, a),
      c = Vd(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Bd(l) === Bd(c)
        ? ((e[a] = Math.max(le(Ud(l), Ud(c), r), 0)),
          (xt.test(c) || xt.test(l)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Vd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ab = $p(0, 0.5, fp),
  lb = $p(0.5, 0.95, Ye);
function $p(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(lr(e, t, r)));
}
function Wd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Xe(e, t) {
  (Wd(e.x, t.x), Wd(e.y, t.y));
}
function Hd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function _d(e, t, n, r, s) {
  return (
    (e -= t),
    (e = Wi(e, 1 / n, r)),
    s !== void 0 && (e = Wi(e, 1 / s, r)),
    e
  );
}
function cb(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (xt.test(t) &&
      ((t = parseFloat(t)), (t = le(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = le(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = _d(e.min, t, n, a, s)),
    (e.max = _d(e.max, t, n, a, s)));
}
function Gd(e, t, [n, r, s], i, o) {
  cb(e, t[n], t[r], t[s], t.scale, i, o);
}
const ub = ["x", "scaleX", "originX"],
  db = ["y", "scaleY", "originY"];
function zd(e, t, n, r) {
  (Gd(e.x, t, ub, n ? n.x : void 0, r ? r.x : void 0),
    Gd(e.y, t, db, n ? n.y : void 0, r ? r.y : void 0));
}
function Yd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zp(e) {
  return Yd(e.x) && Yd(e.y);
}
function Kd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function hb(e, t) {
  return Kd(e.x, t.x) && Kd(e.y, t.y);
}
function Jd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function qp(e, t) {
  return Jd(e.x, t.x) && Jd(e.y, t.y);
}
function $d(e) {
  return Je(e.x) / Je(e.y);
}
function Zd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class fb {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Ic(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Cc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mb(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: h,
      rotateY: f,
      skewX: w,
      skewY: y,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      h && (r += `rotateX(${h}deg) `),
      f && (r += `rotateY(${f}deg) `),
      w && (r += `skewX(${w}deg) `),
      y && (r += `skewY(${y}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Mr = typeof window < "u" && window.MotionDebug !== void 0,
  Jo = ["", "X", "Y", "Z"],
  pb = { visibility: "hidden" },
  qd = 1e3;
let gb = 0;
function $o(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Qp(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = op(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Qp(r);
}
function Xp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = gb++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Mr &&
              (hn.totalNodes =
                hn.resolvedTargetDeltas =
                hn.recalculatedProjection =
                  0),
            this.nodes.forEach(wb),
            this.nodes.forEach(Tb),
            this.nodes.forEach(Ab),
            this.nodes.forEach(xb),
            Mr && window.MotionDebug.record(hn));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new rb());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Rc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = tb(o)), (this.instance = o));
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            h && h(),
            (h = sb(f, 250)),
            ui.hasAnimatedSinceResize &&
              ((ui.hasAnimatedSinceResize = !1), this.nodes.forEach(Xd)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: w,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const g =
                  this.options.transition || d.getDefaultTransition() || Nb,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } =
                  d.getProps(),
                m = !this.targetLayout || !qp(this.targetLayout, y) || w,
                v = !f && w;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (f && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, v));
                const S = { ...Ec(g, "layout"), onPlay: T, onComplete: p };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S));
              } else
                (f || Xd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(kb),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Qp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        ((h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Qd));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Sb),
        (this.isUpdating = !1),
        this.nodes.forEach(Eb),
        this.nodes.forEach(yb),
        this.nodes.forEach(vb),
        this.clearAllSnapshots());
      const a = bt.now();
      ((Ee.delta = Mt(0, 1e3 / 60, a - Ee.timestamp)),
        (Ee.timestamp = a),
        (Ee.isProcessing = !0),
        Bo.update.process(Ee),
        Bo.preRender.process(Ee),
        Bo.render.process(Ee),
        (Ee.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), fc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(bb), this.sharedNodes.forEach(Ib));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Zp(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (a || dn(this.latestValues) || d) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Lb(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return me();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Db)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Yn(l.x, d.offset.x), Yn(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = me();
      if (
        (Xe(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: h, options: f } = d;
        d !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && Xe(l, o), Yn(l.x, h.offset.x), Yn(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = me();
      Xe(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Kn(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          dn(d.latestValues) && Kn(l, d.latestValues));
      }
      return (dn(this.latestValues) && Kn(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = me();
      Xe(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !dn(c.latestValues)) continue;
        ol(c.latestValues) && c.updateSnapshot();
        const d = me(),
          h = c.measurePageBox();
        (Xe(d, h),
          zd(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d));
      }
      return (dn(this.latestValues) && zd(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const w = this.getClosestProjectingParent();
          w && w.layout && this.animationProgress !== 1
            ? ((this.relativeParent = w),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = me()),
              (this.relativeTargetOrigin = me()),
              Kr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                w.layout.layoutBox,
              ),
              Xe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = me()), (this.targetWithTransforms = me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Px(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Xe(this.target, this.layout.layoutBox),
                  Gp(this.target, this.targetDelta))
                : Xe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const w = this.getClosestProjectingParent();
            w &&
            !!w.resumingFrom == !!this.resumingFrom &&
            !w.options.layoutScroll &&
            w.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = w),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = me()),
                (this.relativeTargetOrigin = me()),
                Kr(this.relativeTargetOrigin, this.target, w.target),
                Xe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mr && hn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ol(this.parent.latestValues) ||
          _p(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ee.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || h))
      )
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        w = this.treeScale.y;
      (Gx(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = me())));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Yr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== w ||
          !Zd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Zd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Mr && hn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = zn()),
        (this.projectionDelta = zn()),
        (this.projectionDeltaWithTransform = zn()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        h = zn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = me(),
        w = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = w !== y,
        T = this.getStack(),
        p = !T || T.members.length <= 1,
        m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(Rb));
      this.animationProgress = 0;
      let v;
      ((this.mixTargetDelta = (S) => {
        const E = S / 1e3;
        (eh(h.x, o.x, E),
          eh(h.y, o.y, E),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Kr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Cb(this.relativeTarget, this.relativeTargetOrigin, f, E),
            v && hb(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = me()),
            Xe(v, this.relativeTarget)),
          g &&
            ((this.animationValues = d), ob(d, c, this.latestValues, E, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          ((ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = eb(0, qd, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qd),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          eg(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || me();
          const h = Je(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + h));
          const f = Je(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + f));
        }
        (Xe(a, l),
          Kn(a, d),
          Yr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new fb()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && $o("z", o, c, this.animationValues);
      for (let d = 0; d < Jo.length; d++)
        ($o(`rotate${Jo[d]}`, o, c, this.animationValues),
          $o(`skew${Jo[d]}`, o, c, this.animationValues));
      o.render();
      for (const d in c)
        (o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return pb;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = li(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = li(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !dn(this.latestValues) &&
            ((g.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = h.animationValues || h.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = mb(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        d && (c.transform = d(f, c.transform)));
      const { x: w, y } = this.projectionDelta;
      ((c.transformOrigin = `${w.origin * 100}% ${y.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
              h === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (c.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const g in ji) {
        if (f[g] === void 0) continue;
        const { correct: T, applyTo: p } = ji[g],
          m = c.transform === "none" ? f[g] : T(f[g], h);
        if (p) {
          const v = p.length;
          for (let S = 0; S < v; S++) c[p[S]] = m;
        } else c[g] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            h === this
              ? li(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Qd),
        this.root.sharedNodes.clear());
    }
  };
}
function yb(e) {
  e.updateLayout();
}
function vb(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? et((h) => {
          const f = o ? n.measuredBox[h] : n.layoutBox[h],
            w = Je(f);
          ((f.min = r[h].min), (f.max = f.min + w));
        })
      : eg(i, n.layoutBox, r) &&
        et((h) => {
          const f = o ? n.measuredBox[h] : n.layoutBox[h],
            w = Je(r[h]);
          ((f.max = f.min + w),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + w)));
        });
    const a = zn();
    Yr(a, r, n.layoutBox);
    const l = zn();
    o ? Yr(l, e.applyTransform(s, !0), n.measuredBox) : Yr(l, r, n.layoutBox);
    const c = !Zp(a);
    let d = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: w } = h;
        if (f && w) {
          const y = me();
          Kr(y, n.layoutBox, f.layoutBox);
          const g = me();
          (Kr(g, r, w.layoutBox),
            qp(y, g) || (d = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = h)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function wb(e) {
  (Mr && hn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function xb(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function bb(e) {
  e.clearSnapshot();
}
function Qd(e) {
  e.clearMeasurements();
}
function Sb(e) {
  e.isLayoutDirty = !1;
}
function Eb(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Xd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Tb(e) {
  e.resolveTargetDelta();
}
function Ab(e) {
  e.calcProjection();
}
function kb(e) {
  e.resetSkewAndRotation();
}
function Ib(e) {
  e.removeLeadSnapshot();
}
function eh(e, t, n) {
  ((e.translate = le(t.translate, 0, n)),
    (e.scale = le(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function th(e, t, n, r) {
  ((e.min = le(t.min, n.min, r)), (e.max = le(t.max, n.max, r)));
}
function Cb(e, t, n, r) {
  (th(e.x, t.x, n.x, r), th(e.y, t.y, n.y, r));
}
function Rb(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Nb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  nh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  rh = nh("applewebkit/") && !nh("chrome/") ? Math.round : Ye;
function sh(e) {
  ((e.min = rh(e.min)), (e.max = rh(e.max)));
}
function Lb(e) {
  (sh(e.x), sh(e.y));
}
function eg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Mx($d(t), $d(n), 0.2))
  );
}
function Db(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Ob = Xp({
    attachResizeListener: (e, t) => ps(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Zo = { current: void 0 },
  tg = Xp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Zo.current) {
        const e = new Ob({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Zo.current = e));
      }
      return Zo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Mb = {
    pan: { Feature: Zx },
    drag: { Feature: $x, ProjectionNode: tg, MeasureLayout: Kp },
  };
function ih(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && ie.postRender(() => i(t, Ts(t)));
}
class Pb extends an {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = M0(
        t,
        (n) => (ih(this.node, n, "Start"), (r) => ih(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class jb extends an {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Es(
      ps(this.node.current, "focus", () => this.onFocus()),
      ps(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function oh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && ie.postRender(() => i(t, Ts(t)));
}
class Fb extends an {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = U0(
        t,
        (n) => (
          oh(this.node, n, "Start"),
          (r, { success: s }) => oh(this.node, r, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const ll = new WeakMap(),
  qo = new WeakMap(),
  Ub = (e) => {
    const t = ll.get(e.target);
    t && t(e);
  },
  Bb = (e) => {
    e.forEach(Ub);
  };
function Vb({ root: e, ...t }) {
  const n = e || document;
  qo.has(n) || qo.set(n, {});
  const r = qo.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(Bb, { root: e, ...t })),
    r[s]
  );
}
function Wb(e, t, n) {
  const r = Vb(t);
  return (
    ll.set(e, n),
    r.observe(e),
    () => {
      (ll.delete(e), r.unobserve(e));
    }
  );
}
const Hb = { some: 0, all: 1 };
class _b extends an {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : Hb[s],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: d, onViewportLeave: h } = this.node.getProps(),
          f = c ? d : h;
        f && f(l);
      };
    return Wb(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Gb(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Gb({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const zb = {
    inView: { Feature: _b },
    tap: { Feature: Fb },
    focus: { Feature: jb },
    hover: { Feature: Pb },
  },
  Yb = { layout: { ProjectionNode: tg, MeasureLayout: Kp } },
  cl = { current: null },
  ng = { current: !1 };
function Kb() {
  if (((ng.current = !0), !!lc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (cl.current = e.matches);
      (e.addListener(t), t());
    } else cl.current = !1;
}
const Jb = [...Ip, Ce, nn],
  $b = (e) => Jb.find(kp(e)),
  ah = new WeakMap();
function Zb(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Ne(s)) e.addValue(r, s);
    else if (Ne(i)) e.addValue(r, fs(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, fs(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const lh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class qb {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Pc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const w = bt.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), ie.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: c, onUpdate: d } = o;
    ((this.onUpdate = d),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = co(n)),
      (this.isVariantNode = Pm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const w in f) {
      const y = f[w];
      l[w] !== void 0 && Ne(y) && y.set(l[w], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      ah.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      ng.current || Kb(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : cl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (ah.delete(this.current),
      this.projection && this.projection.unmount(),
      tn(this.notifyUpdate),
      tn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = In.has(t),
      s = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && ie.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in cr) {
      const n = cr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : me();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < lh.length; r++) {
      const s = lh[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = Zb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = fs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (Tp(s) || pp(s))
          ? (s = parseFloat(s))
          : !$b(s) && nn.test(n) && (s = bp(t, n)),
        this.setBaseTarget(t, Ne(s) ? s.get() : s)),
      Ne(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = pc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ne(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Rc()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class rg extends qb {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Cp));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ne(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Qb(e) {
  return window.getComputedStyle(e);
}
class Xb extends rg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Gm));
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Mc(n);
      return (r && r.default) || 0;
    } else {
      const r = Qb(t),
        s = (Wm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return zp(t, n);
  }
  build(t, n, r) {
    vc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sc(t, n, r);
  }
}
class eS extends rg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = me));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Mc(n);
      return (r && r.default) || 0;
    }
    return ((n = zm.has(n) ? n : hc(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Jm(t, n, r);
  }
  build(t, n, r) {
    wc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Ym(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = bc(t.tagName)), super.mount(t));
  }
}
const tS = (e, t) =>
    mc(e) ? new eS(t) : new Xb(t, { allowProjection: e !== A.Fragment }),
  nS = I0({ ...Ax, ...zb, ...Mb, ...Yb }, tS),
  de = Hv(nS),
  rS = ({ onComplete: e, manifestationRoles: t }) => (
    A.useEffect(() => {
      const n = setTimeout(() => {
        e();
      }, 2e4);
      return () => clearTimeout(n);
    }, [e]),
    u.jsx("div", {
      className:
        "fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden",
      children: u.jsxs(de.div, {
        initial: { y: "100vh" },
        animate: { y: "-100vh" },
        transition: { duration: 15, ease: "linear" },
        className: "text-center space-y-8",
        children: [
          u.jsx("h1", {
            className: "text-4xl font-bold text-green-500 font-mono mb-12",
            children: "WHAT HAPPENED TO THE CREW? 驻站人员发生了什么？",
          }),
          u.jsxs("div", {
            className: "space-y-2",
            children: [
              u.jsx("p", {
                className:
                  "text-green-700 font-mono text-sm uppercase tracking-widest",
                children: "制作人（Created By）",
              }),
              u.jsx("p", {
                className: "text-green-400 font-mono text-xl",
                children: "Bushmonkey",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-2",
            children: [
              u.jsx("p", {
                className:
                  "text-green-700 font-mono text-sm uppercase tracking-widest",
                children: "测试者（Testing by）",
              }),
              u.jsx("p", {
                className: "text-green-400 font-mono text-xl",
                children: "Alan Pritchard",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "space-y-2",
            children: [
              u.jsx("p", {
                className:
                  "text-green-700 font-mono text-sm uppercase tracking-widest",
                children: "特别鸣谢（Special Thanks）",
              }),
              u.jsx("p", {
                className: "text-green-400 font-mono text-xl",
                children: "The Crew",
              }),
              u.jsx("p", {
                className: "text-green-400 font-mono text-xl",
                children: "你，调查员（You, The Investigator）",
              }),
              u.jsx("p", {
                className: "text-red-400 font-mono text-xl animate-pulse",
                children:
                  t && t[0] ? `${t[0].firstName} ${t[0].lastName}`.trim() : "N",
              }),
            ],
          }),
          u.jsx("div", {
            className: "pt-12",
            children: u.jsx("p", {
              className: "text-green-600 font-mono text-sm italic",
              children: "感谢游玩Thank you for playing.",
            }),
          }),
        ],
      }),
    })
  ),
  sS = "1.31.1",
  Qo = ({ children: e, notification: t, shutdown: n, corruptionEffect: r }) =>
    u.jsxs("div", {
      className: `min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 relative overflow-hidden selection:bg-green-900 selection:text-green-100 ${n ? "crt-shutdown" : ""} ${r ? "crt-corruption" : ""}`,
      children: [
        r &&
          u.jsx("div", {
            className:
              "corruption-overlay fixed inset-0 z-[100] pointer-events-none",
          }),
        u.jsx("div", {
          className:
            "pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20",
        }),
        u.jsx("div", {
          className:
            "pointer-events-none fixed inset-0 z-40 shadow-[0_0_100px_rgba(0,255,0,0.1)_inset]",
        }),
        u.jsx("div", {
          className:
            "relative z-10 max-w-4xl mx-auto border border-green-800 bg-black/90 shadow-[0_0_20px_rgba(0,255,0,0.1)] rounded-sm h-[80vh] flex flex-col",
          children: e,
        }),
        u.jsx(de.div, {
          initial: { y: -100, opacity: 0 },
          animate: { y: t ? 20 : -100, opacity: t ? 1 : 0 },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          className:
            "fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none",
          children: u.jsxs("div", {
            className: `${(t == null ? void 0 : t.type) === "corrupted" ? "bg-red-900/90 border-red-500 text-red-100" : "bg-green-900/90 border-green-500 text-green-100"} border px-6 py-3 rounded shadow-[0_0_20px_rgba(0,255,0,0.3)] font-bold tracking-widest flex items-center`,
            children: [
              u.jsx("span", {
                className: `w-3 h-3 ${(t == null ? void 0 : t.type) === "corrupted" ? "bg-red-500" : "bg-green-400"} rounded-full animate-pulse mr-3`,
              }),
              (t == null ? void 0 : t.text) || t,
            ],
          }),
        }),
        u.jsxs("div", {
          className:
            "fixed bottom-2 right-4 z-50 text-xs text-green-900 font-mono pointer-events-none opacity-50",
          children: ["v", sS],
        }),
      ],
    }),
  iS = ({
    onCommand: e,
    onScroll: t,
    disabled: n,
    history: r,
    onAddToHistory: s,
    awaitingPassword: i,
  }) => {
    const [o, a] = A.useState(""),
      [l, c] = A.useState(!1),
      [d, h] = A.useState(-1),
      f = A.useRef(null),
      w = (g) => {
        (g.preventDefault(),
          !n &&
            o.trim() &&
            (e(o.trim())
              ? (s && s(o.trim()), h(-1), a(""), c(!1))
              : (c(!0), setTimeout(() => c(!1), 500))));
      },
      y = (g) => {
        if (!n) {
          if (g.key === "ArrowUp") {
            if ((g.preventDefault(), r.length > 0)) {
              const T = Math.min(d + 1, r.length - 1);
              (h(T), a(r[T]));
            }
          } else if (g.key === "ArrowDown") {
            if ((g.preventDefault(), d > -1)) {
              const T = d - 1;
              (h(T), a(T === -1 ? "" : r[T]));
            }
          } else
            ["PageUp", "PageDown"].includes(g.key) &&
              (g.preventDefault(), t(g.key));
          l && c(!1);
        }
      };
    return (
      A.useEffect(() => {
        var g;
        n || (g = f.current) == null || g.focus();
      }, [n]),
      u.jsxs("form", {
        onSubmit: w,
        className:
          "flex items-center p-4 border-t border-green-900 bg-black/50",
        children: [
          u.jsx("span", {
            className: `mr-2 ${l ? "text-red-500" : "text-green-400"}`,
            children: ">",
          }),
          u.jsx("input", {
            ref: f,
            type: "text",
            value: o,
            onChange: (g) => a(g.target.value),
            onKeyDown: y,
            disabled: n,
            className: `flex-1 bg-transparent border-none outline-none font-mono text-lg transition-colors duration-200 ${l ? "text-red-500 placeholder-red-800" : i ? "text-green-500 placeholder-green-400/50" : "text-green-500 placeholder-green-800"} ${n ? "opacity-50 cursor-not-allowed" : ""}`,
            placeholder: n
              ? "TERMINAL LOCKED终端已锁定"
              : l
                ? "COMMAND ERROR命令错误"
                : i
                  ? "enter password输入密码"
                  : "Type command输入命令...",
            autoFocus: !n,
            spellCheck: "false",
            autoComplete: "off",
          }),
        ],
      })
    );
  },
  Jn = [
    {
      id: "S",
      titleChinese: "指挥官",
      title: "Commander",
      firstName: "Sebastian",
      lastName: "Cross",
      roleChinese: "骑士",
      role: "Knight",
    },
    {
      id: "R",
      titleChinese: "工程师",
      title: "Engineer",
      firstName: "Robert",
      lastName: "Ryan",
      roleChinese: "侍从",
      role: "Squire",
    },
    {
      id: "E",
      titleChinese: "医生",
      title: "Doctor",
      firstName: "Elizabeth",
      lastName: "Darcy",
      roleChinese: "女巫",
      role: "Witch",
    },
    {
      id: "Z",
      titleChinese: "通讯官",
      title: "Comms",
      firstName: "Zackary",
      lastName: "Jackson",
      roleChinese: "圣骑士",
      role: "Paladin",
    },
    {
      id: "J",
      titleChinese: "天体物理学家",
      title: "Astrophysicist",
      firstName: "Jacqueline",
      lastName: "Dupont",
      roleChinese: "恶魔猎手",
      role: "Demonhunter",
    },
    {
      id: "I",
      titleChinese: "技术员",
      title: "Technician",
      firstName: "Isaac",
      lastName: "Kozov",
      roleChinese: "铁匠",
      role: "Blacksmith",
    },
    {
      id: "A",
      titleChinese: "飞行员",
      title: "Pilot",
      firstName: "Alex",
      lastName: "Rogan",
      roleChinese: "混沌引擎",
      role: "Chaosengine",
    },
    {
      id: "L",
      titleChinese: "厨师",
      title: "Chef",
      firstName: "Leonard",
      lastName: "McCoy",
      roleChinese: " 屠夫",
      role: "Butcher",
    },
    {
      id: "B",
      titleChinese: "安保官",
      title: "Security",
      firstName: "Barry",
      lastName: "Vance",
      roleChinese: " 野蛮人",
      role: "Barbarian",
    },
    {
      id: "C",
      titleChinese: "少尉",
      title: "Ensign",
      firstName: "Carl",
      lastName: "Holden",
      roleChinese: "愚者",
      role: "Fool",
    },
    {
      id: "D",
      titleChinese: "科学家",
      title: "Scientist",
      firstName: "Dana",
      lastName: "Rogan",
      roleChinese: "祭品",
      role: "Sacrifice",
    },
    {
      id: "M",
      titleChinese: "生物学家",
      title: "Biologist",
      firstName: "Michael",
      lastName: "Grimm",
      roleChinese: "术士",
      role: "Warlock",
    },
  ],
  Fe = {
    root: {
      id: "root",
      name: "ROOT",
      files: [],
      folders: ["documents", "games", "system", "personal.ck"],
    },
    documents: {
      id: "documents",
      name: "文档（DOCUMENTS）",
      parent: "root",
      files: [
        "CHORES-ROTA",
        "POKER-NIGHT",
        "RECREATION-SCHEDULE",
        "GALLEY-MENU",
        "MAINTENANCE-LOG",
        "DUTY-ROSTER",
        "SAFETY-GUIDELINES",
      ],
      folders: ["scans", "research", "manuals", "reports"],
    },
    scans: {
      id: "scans",
      name: "扫描数据（SCANS）",
      parent: "documents",
      files: ["WEATHER-PATTERNS", "CHEMICAL-MAKEUP", "SIGNAL-ANALYSIS"],
      folders: [],
    },
    research: {
      id: "research",
      name: "研究资料（RESEARCH）",
      parent: "documents",
      files: [
        "BRYOPHYTA-ANALYSIS",
        "BACTERIA-ANALYSIS",
        "GASTROPOD-SECRETION-ANALYSIS",
      ],
      folders: [],
    },
    games: {
      id: "games",
      name: "游戏（GAMES）",
      parent: "root",
      files: ["word.exe", "asteroids.exe"],
      folders: [],
    },
    system: {
      id: "system",
      name: "系统（SYSTEM）",
      parent: "root",
      files: [],
      folders: ["core.ck", "logs"],
    },
    "personal.ck": {
      id: "personal.ck",
      name: "个人（PERSONAL）",
      parent: "root",
      locked: !0,
      files: [],
      folders: ["emails", "journals", "photos"],
    },
    "core.ck": {
      id: "core.ck",
      name: "核心（CORE）",
      parent: "system",
      locked: !0,
      files: ["map.exe", "monitor.exe", "bifrost.exe"],
      folders: ["archive", "security"],
    },
    archive: {
      id: "archive",
      name: "档案库（ARCHIVE）",
      parent: "core.ck",
      locked: !1,
      files: ["1007-LOG-JD", "1008-LOG-JD"],
      folders: [],
    },
    emails: {
      id: "emails",
      name: "邮件（EMAILS）",
      parent: "personal.ck",
      files: [
        "arogan",
        "cross",
        "darcy",
        "drogan",
        "dupont",
        "grimm",
        "holden",
        "jackson",
        "kozov",
        "mccoy",
        "ryan",
        "vance",
      ],
      folders: [],
    },
    journals: {
      id: "journals",
      name: "日记（JOURNALS）",
      parent: "personal.ck",
      files: ["jd-journal-10"],
      folders: [],
    },
    manuals: {
      id: "manuals",
      name: "操作手册（MANUALS）",
      parent: "documents",
      files: ["STATION-MANUAL", "ROVER-MANUAL", "SUIT-PROTOCOLS"],
      folders: [],
    },
    reports: {
      id: "reports",
      name: "报告（REPORTS）",
      parent: "documents",
      files: ["INCIDENT-REPORT-101", "SUPPLY-REQUEST"],
      folders: [],
    },
    logs: {
      id: "logs",
      name: "日志（LOGS）",
      parent: "system",
      files: ["SYSTEM-BOOT-LOG", "ERROR-LOG-LATEST"],
      folders: [],
    },
    photos: {
      id: "photos",
      name: "照片（PHOTOS）",
      parent: "personal.ck",
      files: ["rover-outing.jpg", "south-cave.jpg", "antigrav-yoga.jpg"],
      folders: [],
    },
    security: {
      id: "security",
      name: "安保（SECURITY）",
      parent: "core.ck",
      locked: !0,
      files: ["CAMERA-FEEDS"],
      folders: [],
    },
  },
  ch = [
    "ABYSS",
    "AGONY",
    "ALARM",
    "ALIEN",
    "ANGER",
    "ANGST",
    "AWFUL",
    "BEAST",
    "BLACK",
    "BLADE",
    "BLEED",
    "BLIND",
    "BONES",
    "BOMBS",
    "BREAK",
    "BURNT",
    "CAGES",
    "CHAOS",
    "CHOKE",
    "CLAWS",
    "CRASH",
    "CREEP",
    "CRUEL",
    "CURSE",
    "DECAY",
    "DEMON",
    "DEVIL",
    "DIRTY",
    "DREAD",
    "DYING",
    "ENEMY",
    "ERROR",
    "EVILS",
    "FEARS",
    "FEVER",
    "FIEND",
    "FIGHT",
    "FILTH",
    "FLAME",
    "FLESH",
    "FORCE",
    "GHOST",
    "GHOUL",
    "GIANT",
    "GLOOM",
    "GRAVE",
    "GRIEF",
    "GRIMY",
    "GROSS",
    "GUILT",
    "HATES",
    "HAUNT",
    "HAVOC",
    "HELLS",
    "HUMAN",
    "HURTS",
    "KNIFE",
    "LEAVE",
    "LIMBO",
    "LURKS",
    "MADLY",
    "MAGIC",
    "MANIC",
    "METAL",
    "MIGHT",
    "NASTY",
    "NERVE",
    "NOISE",
    "OMENS",
    "OUTER",
    "PAINS",
    "PANIC",
    "PERIL",
    "POWER",
    "PRAYS",
    "PROWL",
    "PULSE",
    "QUAKE",
    "QUIET",
    "RABID",
    "BLOOD",
    "RAGES",
    "RAPID",
    "RAZOR",
    "REACT",
    "ROBOT",
    "ROUGH",
    "RUINS",
    "SCARE",
    "SCARS",
    "SCARY",
    "SHADE",
    "SHAKE",
    "SHAME",
    "SHARP",
    "SHOCK",
    "SHOOT",
    "SHOUT",
    "SICKS",
    "SIREN",
    "SLAIN",
    "SLAVE",
    "SLEEP",
    "SLIME",
    "SMASH",
    "SMOKE",
    "SNAKE",
    "SNARL",
    "SOUND",
    "SPACE",
    "SPELL",
    "SPIKE",
    "SPINE",
    "SPOIL",
    "STALK",
    "STARE",
    "STEAL",
    "STING",
    "STORM",
    "STRIP",
    "STUCK",
    "SWARM",
    "TAINT",
    "TEETH",
    "THIEF",
    "THORN",
    "TOMBS",
    "TOXIC",
    "TRACK",
    "TRAPS",
    "TRIAL",
    "TRICK",
    "TROLL",
    "UGLY",
    "UNDER",
    "UPSET",
    "VAPOR",
    "VENOM",
    "VILES",
    "VIRAL",
    "VIRUS",
    "VOIDS",
    "WASTE",
    "WATCH",
    "WEIRD",
    "WHINE",
    "WITCH",
    "WORRY",
    "WORSE",
    "WORST",
    "WOUND",
    "WRATH",
    "WRECK",
    "WRONG",
  ],
  Nn = 5,
  Xo = 6,
  kr = 5,
  oS = "XZYQM",
  aS = ({ onExit: e, onWin: t }) => {
    const [n, r] = A.useState(1),
      [s, i] = A.useState(""),
      [o, a] = A.useState([]),
      [l, c] = A.useState(""),
      [d, h] = A.useState("playing"),
      [f, w] = A.useState(""),
      y = A.useRef(null);
    A.useEffect(() => {
      g(1);
    }, []);
    const g = (v) => {
        if ((r(v), a([]), c(""), h("playing"), w(""), v === kr)) i(oS);
        else {
          const S = ch[Math.floor(Math.random() * ch.length)];
          i(S);
        }
        setTimeout(() => {
          y.current && y.current.focus();
        }, 100);
      },
      T = (v) => {
        if (d !== "playing") {
          v.key === "Enter" &&
            (d === "won"
              ? n < kr
                ? g(n + 1)
                : (t && t(),
                    setTimeout(
                      () => {
                        try {
                          e();
                        } catch (ke) {
                          console.error("Wordle exit error:", ke);
                        }
                      },
                      80,
                    ))
              : d === "lost" && g(1));
          return;
        }
        if (v.key === "Enter") {
          if (l.length !== Nn) {
            w("Word too short");
            return;
          }
          const S = [...o, l];
          (a(S),
            c(""),
            w(""),
            l === s
              ? (h("won"),
                w(
                  n === kr
                    ? "系统已解锁。恭喜"
                    : "访问已授予。等级" +
                        (n + 1) +
                        " 已解锁。按回车键。",
                ))
              : S.length >= Xo &&
                (h("lost"),
                w(
                  n === kr
                    ? "访问被拒绝。系统正在重置……请按回车键。"
                    : `访问被拒绝。密码为 ${s}。系统正在重置……请按回车键。`,
                )));
        } else
          v.key === "Backspace"
            ? (c((S) => S.slice(0, -1)), w(""))
            : /^[a-zA-Z]$/.test(v.key)
              ? l.length < Nn && (c((S) => (S + v.key).toUpperCase()), w(""))
              : v.key === "Escape" && e();
      },
      p = () => {
        y.current && y.current.focus();
      },
      m = (v) => {
        const S = Array(Nn).fill("absent"),
          E = s.split(""),
          I = v.split("");
        return (
          I.forEach((C, x) => {
            C === E[x] && ((S[x] = "correct"), (E[x] = null));
          }),
          I.forEach((C, x) => {
            if (S[x] !== "correct") {
              const O = E.indexOf(C);
              O !== -1 && ((S[x] = "present"), (E[O] = null));
            }
          }),
          S
        );
      };
    return u.jsxs("div", {
      className:
        "flex flex-col items-center justify-center h-full font-mono text-green-500 p-4",
      onClick: p,
      children: [
        u.jsxs("h1", {
          className: "text-2xl mb-4 font-bold border-b border-green-500 pb-2",
          children: ["安全覆写： 等级 ", n, "/", kr],
        }),
        u.jsxs("div", {
          className: "mb-4 text-sm text-green-400",
          children: ["猜测密码 (", Nn, " 个字母)"],
        }),
        u.jsxs("div", {
          className: "grid gap-2 mb-6",
          children: [
            o.map((v, S) => {
              const E = m(v);
              return u.jsx(
                "div",
                {
                  className: "flex gap-2",
                  children: v.split("").map((I, C) => {
                    const x = E[C];
                    let O = "bg-black",
                      M = "text-green-500",
                      j = "border-green-800";
                    return (
                      x === "correct"
                        ? ((O = "bg-green-600"),
                          (M = "text-black"),
                          (j = "border-green-600"))
                        : x === "present" &&
                          ((O = "bg-yellow-600"),
                          (M = "text-black"),
                          (j = "border-yellow-600")),
                      u.jsx(
                        "div",
                        {
                          className: `w-10 h-10 border ${j} ${O} ${M} flex items-center justify-center font-bold text-xl`,
                          children: I,
                        },
                        C,
                      )
                    );
                  }),
                },
                S,
              );
            }),
            d === "playing" &&
              o.length < Xo &&
              u.jsx("div", {
                className: "flex gap-2",
                children: [...Array(Nn)].map((v, S) =>
                  u.jsx(
                    "div",
                    {
                      className: `w-10 h-10 border border-green-500 flex items-center justify-center font-bold text-xl ${S === l.length ? "animate-pulse bg-green-900/30" : ""}`,
                      children: l[S] || "",
                    },
                    S,
                  ),
                ),
              }),
            [
              ...Array(
                Math.max(0, Xo - 1 - o.length - (d === "playing" ? 0 : -1)),
              ),
            ].map((v, S) =>
              u.jsx(
                "div",
                {
                  className: "flex gap-2 opacity-30",
                  children: [...Array(Nn)].map((E, I) =>
                    u.jsx(
                      "div",
                      { className: "w-10 h-10 border border-green-900" },
                      I,
                    ),
                  ),
                },
                `empty-${S}`,
              ),
            ),
          ],
        }),
        u.jsx("div", {
          className: "h-8 text-center font-bold text-yellow-400 animate-pulse",
          children: f,
        }),
        u.jsx("div", {
          className: "mt-8 text-xs text-green-700",
          children: "[ESC] 键中止",
        }),
        u.jsx("input", {
          ref: y,
          type: "text",
          className: "opacity-0 absolute top-0 left-0 h-0 w-0",
          onKeyDown: T,
          onBlur: p,
          autoFocus: !0,
        }),
      ],
    });
  },
  lS = ({ onExit: e, powerLevels: t, onPowerUpdate: n }) => {
    const [r, s] = A.useState("overview");
    A.useEffect(() => {
      const o = (a) => {
        a.key === "Escape" && e();
      };
      return (
        window.addEventListener("keydown", o),
        () => window.removeEventListener("keydown", o)
      );
    }, [e]);
    const i = (o) =>
      u.jsx("div", {
        className:
          "flex items-end h-32 space-x-1 mt-4 bg-black/50 p-2 border border-green-900/30",
        children: [...Array(20)].map((a, l) =>
          u.jsx(
            de.div,
            {
              className: `w-2 ${o}`,
              animate: {
                height: [
                  `${Math.random() * 80 + 10}%`,
                  `${Math.random() * 80 + 10}%`,
                  `${Math.random() * 80 + 10}%`,
                ],
              },
              transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatType: "reverse",
                delay: l * 0.1,
              },
            },
            l,
          ),
        ),
      });
    return u.jsxs("div", {
      className: "h-full flex flex-col p-4 font-mono text-green-500 relative",
      children: [
        u.jsxs("div", {
          className:
            "flex justify-between items-center border-b border-green-800 pb-2 mb-4",
          children: [
            u.jsx("h1", {
              className: "text-xl font-bold tracking-widest",
              children: "空间站监控系统 v4.2",
            }),
            u.jsx("div", {
              className: "text-xs animate-pulse",
              children: "实时反馈",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex space-x-4 mb-6",
          children: [
            u.jsx("button", {
              onClick: () => s("overview"),
              className: `px-4 py-1 border ${r === "overview" ? "bg-green-900/50 border-green-500 text-white" : "border-green-800 hover:border-green-600"} transition-colors`,
              children: "OVERVIEW概览",
            }),
            u.jsx("button", {
              onClick: () => s("engine"),
              className: `px-4 py-1 border ${r === "engine" ? "bg-green-900/50 border-green-500 text-white" : "border-green-800 hover:border-green-600"} transition-colors`,
              children: "ENGINE引擎",
            }),
            u.jsx("button", {
              onClick: () => s("power"),
              className: `px-4 py-1 border ${r === "power" ? "bg-green-900/50 border-green-500 text-white" : "border-green-800 hover:border-green-600"} transition-colors`,
              children: "POWER电力",
            }),
            u.jsx("button", {
              onClick: () => s("life_support"),
              className: `px-4 py-1 border ${r === "life_support" ? "bg-green-900/50 border-green-500 text-white" : "border-green-800 hover:border-green-600"} transition-colors`,
              children: "LIFE SUPPORT生命支持",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex-1 overflow-y-auto",
          children: [
            r === "overview" &&
              u.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  u.jsxs("div", {
                    className: "border border-green-900/50 p-4",
                    children: [
                      u.jsx("h2", {
                        className: "text-lg font-bold mb-2",
                        children: "SYSTEM STATUS系统状态",
                      }),
                      u.jsxs("ul", {
                        className: "space-y-2 text-sm",
                        children: [
                          u.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("span", { children: "MAIN CORE主核心:" }),
                              " ",
                              u.jsx("span", {
                                className: "text-green-300",
                                children: "ONLINE在线",
                              }),
                            ],
                          }),
                          u.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("span", {
                                children: "LIFE SUPPORT SYSTEMS生命支持系统:",
                              }),
                              " ",
                              u.jsx("span", {
                                className: "text-yellow-500 animate-pulse",
                                children: "WARNING警告",
                              }),
                            ],
                          }),
                          u.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("span", { children: "COMM通讯:" }),
                              " ",
                              u.jsx("span", {
                                className: "text-red-500",
                                children: "OFFLINE离线",
                              }),
                            ],
                          }),
                          u.jsxs("li", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("span", {
                                children: "HULL INTEGRITY外壳完整性:",
                              }),
                              " ",
                              u.jsx("span", {
                                className: "text-green-300",
                                children: "88%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "border border-green-900/50 p-4",
                    children: [
                      u.jsx("h2", {
                        className: "text-lg font-bold mb-2",
                        children: "ACTIVE ALERTS活动警报",
                      }),
                      u.jsxs("div", {
                        className: "text-red-500 text-sm animate-pulse",
                        children: [
                          "！在第七区（SECTOR 7）检测到未识别信号",
                          u.jsx("br", {}),
                          "！检测到生物危害异常（BIO-HAZARD ANOMALIES）",
                          u.jsx("br", {}),
                          "！医疗舱（MEDBAY）出现电力波动",
                          u.jsx("br", {}),
                          "！舰桥（BRIDGE）起火",
                          u.jsx("br", {}),
                          "！研究实验室（RESEARCH LAB）起火",
                          u.jsx("br", {}),
                          "！维修间（MAINTENANCE）外壳裂开",
                          u.jsx("br", {}),
                          "！货舱（CARGO BAY）外壳裂开",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            r === "engine" &&
              u.jsxs("div", {
                className: "border border-green-900/50 p-4",
                children: [
                  u.jsx("h2", {
                    className: "text-lg font-bold mb-2",
                    children: "ENGINE DIAGNOSTICS引擎诊断",
                  }),
                  u.jsxs("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h3", {
                            className: "text-sm mb-2",
                            children: "FLUCTATION LEVELS波动水平",
                          }),
                          i("bg-orange-500"),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("h3", {
                            className: "text-sm mb-2",
                            children: "FUEL FLOW燃料流量",
                          }),
                          i("bg-blue-500"),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "mt-4 text-xs",
                    children: [
                      u.jsx("p", {
                        children: "核心温度：4500K (标准值NOMINAL)",
                      }),
                      u.jsx("p", {
                        children: "反物质收容状态：稳定",
                      }),
                    ],
                  }),
                ],
              }),
            r === "power" &&
              u.jsxs("div", {
                className: "border border-green-900/50 p-4",
                children: [
                  u.jsx("h2", {
                    className: "text-lg font-bold mb-4",
                    children: "POWER DISTRIBUTION电力分配",
                  }),
                  u.jsx("div", {
                    className: "space-y-6 p-4",
                    children: [
                      { id: "engines", label: "ENGINES引擎" },
                      { id: "lifeSupport", label: "LIFE SUPPORT生命支持" },
                      { id: "relay", label: "REMOTE RELAY远程继电" },
                    ].map((o) => {
                      const a = (t && t[o.id]) || 0,
                        l = Object.values(
                          t || { engines: 2, lifeSupport: 1, relay: 0 },
                        ).reduce((d, h) => d + h, 0),
                        c = 3;
                      return u.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between border-b border-green-900/30 pb-4",
                          children: [
                            u.jsx("div", {
                              className: "w-1/3 font-bold",
                              children: o.label,
                            }),
                            u.jsxs("div", {
                              className: "flex items-center space-x-4",
                              children: [
                                u.jsx("button", {
                                  onClick: () => n && n(o.id, -1),
                                  disabled: a <= 0,
                                  className: `w-8 h-8 flex items-center justify-center border ${a <= 0 ? "border-green-900/30 text-green-900/30" : "border-green-500 hover:bg-green-900/50 text-green-500"}`,
                                  children: "-",
                                }),
                                u.jsx("div", {
                                  className: "flex space-x-1",
                                  children: [...Array(3)].map((d, h) =>
                                    u.jsx(
                                      "div",
                                      {
                                        className: `w-6 h-8 border border-green-900/50 ${h < a ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-green-900/10"}`,
                                      },
                                      h,
                                    ),
                                  ),
                                }),
                                u.jsx("button", {
                                  onClick: () => n && n(o.id, 1),
                                  disabled: l >= c,
                                  className: `w-8 h-8 flex items-center justify-center border ${l >= c ? "border-green-900/30 text-green-900/30" : "border-green-500 hover:bg-green-900/50 text-green-500"}`,
                                  children: "+",
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      );
                    }),
                  }),
                  u.jsxs("div", {
                    className: "mt-4 text-xs text-center text-green-600",
                    children: [
                      "总电力输出：:3 UNITS (标准值NOMINAL)",
                      u.jsx("br", {}),
                      "按需重新分配电力",
                    ],
                  }),
                ],
              }),
            r === "life_support" &&
              u.jsxs("div", {
                className: "border border-green-900/50 p-4",
                children: [
                  u.jsx("h2", {
                    className: "text-lg font-bold mb-2",
                    children: "LIFE SUPPORT SYSTEMS生命支持系统",
                  }),
                  u.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h3", {
                            className: "text-sm mb-2",
                            children: "OXYGEN LEVELS氧气水平",
                          }),
                          i("bg-cyan-400"),
                          u.jsx("div", {
                            className: "text-right text-xs mt-1",
                            children: "98.4%",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("h3", {
                            className: "text-sm mb-2",
                            children: "CO2 SCRUBBERS CO2洗涤器",
                          }),
                          i("bg-purple-400"),
                          u.jsx("div", {
                            className: "text-right text-xs mt-1",
                            children: "OPERATIONAL运行中",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "mt-4 border-t border-green-900 pt-2",
                    children: [
                      u.jsx("h3", {
                        className: "text-sm mb-2 text-red-500",
                        children: "ANOMALY DETECTED异常检测",
                      }),
                      u.jsx("p", {
                        className: "text-xs",
                        children:
                          "空气过滤装置4号中发现未知生物污染物。氧气使用量异常偏低。·SC - 未检测到生命迹象。·BV - 未检测到生命迹象。·ED - 未检测到生命迹象。·DR - 未检测到生命迹象。·JD - 未检测到生命迹象。·MG - 未检测到生命迹象。·RR - 未检测到生命迹象。·CH - 未检测到生命迹象。·IK - 未检测到生命迹象。·ZJ - 未检测到生命迹象。隔离协议已启动（QUARANTINE PROTOCOLS INITIATED）。",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        u.jsxs("div", {
          className:
            "mt-4 pt-2 border-t border-green-800 text-xs flex justify-between",
          children: [
            u.jsx("span", { children: "TERMINAL ID: 884-XJ" }),
            u.jsx("span", {
              className: "animate-pulse",
              children: "按 ESC 键退出",
            }),
          ],
        }),
      ],
    });
  },
  cS = ({ onExit: e, onLeaderboardTop: t }) => {
    const n = A.useRef(null),
      [r, s] = A.useState(!1),
      [i, o] = A.useState(0),
      [a, l] = A.useState(3),
      [c, d] = A.useState(""),
      [h, f] = A.useState(!1),
      [w, y] = A.useState([
        { name: "YOU.S", score: 99999 },
        { name: "HOULD", score: 88888 },
        { name: "NT.BE", score: 77777 },
        { name: ".HERE", score: 66666 },
        { name: ".LEAV", score: 55555 },
        { name: "E.NOW", score: 44444 },
        { name: ".BEFO", score: 33333 },
        { name: "RE.IT", score: 22222 },
        { name: "S.TOO", score: 11111 },
        { name: ".LATE", score: 0 },
      ]),
      g = A.useRef({
        ship: {
          x: 0,
          y: 0,
          a: 0,
          v: { x: 0, y: 0 },
          r: 10,
          thrusting: !1,
          rotating: 0,
          dead: !1,
          invulnerable: 0,
        },
        asteroids: [],
        bullets: [],
        particles: [],
        lastTime: 0,
      }),
      T = (x) => {
        ((g.current.ship.x = x.width / 2),
          (g.current.ship.y = x.height / 2),
          (g.current.ship.v = { x: 0, y: 0 }),
          (g.current.ship.a = 0),
          (g.current.ship.dead = !1),
          (g.current.ship.invulnerable = 3));
      },
      p = (x) => {
        (o(0),
          l(3),
          s(!1),
          f(!1),
          d(""),
          (g.current.asteroids = []),
          (g.current.bullets = []),
          T(x));
        for (let O = 0; O < 5; O++) m(x.width, x.height);
      };
    (A.useEffect(() => {
      const x = n.current;
      if (
        ((x.width = x.clientWidth),
        (x.height = x.clientHeight),
        T(x),
        g.current.asteroids.length === 0)
      )
        for (let O = 0; O < 5; O++) m(x.width, x.height);
    }, []),
      A.useEffect(() => {
        const x = n.current,
          O = x.getContext("2d");
        let M;
        const j = (H) => {
            if ((H.key === "Escape" && (H.preventDefault(), e()), r)) {
              const R = w.some((P) => i > P.score),
                U = h || !R;
              H.key === " " && U && (H.preventDefault(), p(x));
              return;
            }
            if (!(g.current.ship.dead && a <= 0))
              switch (
                (["ArrowUp", "ArrowLeft", "ArrowRight", " "].includes(H.key) &&
                  H.preventDefault(),
                H.key)
              ) {
                case "ArrowUp":
                  g.current.ship.thrusting = !0;
                  break;
                case "ArrowLeft":
                  g.current.ship.rotating = -1;
                  break;
                case "ArrowRight":
                  g.current.ship.rotating = 1;
                  break;
                case " ":
                  v();
                  break;
              }
          },
          Z = (H) => {
            if (!(g.current.ship.dead && a <= 0))
              switch (H.key) {
                case "ArrowUp":
                  g.current.ship.thrusting = !1;
                  break;
                case "ArrowLeft":
                case "ArrowRight":
                  g.current.ship.rotating = 0;
                  break;
              }
          };
        (window.addEventListener("keydown", j),
          window.addEventListener("keyup", Z));
        const ne = (H) => {
          const R = (H - g.current.lastTime) / 1e3;
          ((g.current.lastTime = H),
            r || S(R, x.width, x.height),
            E(O, x.width, x.height),
            (M = requestAnimationFrame(ne)));
        };
        return (
          (M = requestAnimationFrame(ne)),
          () => {
            (window.removeEventListener("keydown", j),
              window.removeEventListener("keyup", Z),
              cancelAnimationFrame(M));
          }
        );
      }, [e, r, a, h, i, w]));
    const m = (x, O, M, j, Z = 3) => {
        const ne = Z === 3 ? 1 : Z === 2 ? 2 : 4,
          H = 100,
          R = {
            x: M !== void 0 ? M : Math.random() * x,
            y: j !== void 0 ? j : Math.random() * O,
            v: {
              x: ((Math.random() - 0.5) * H * ne) / Z,
              y: ((Math.random() - 0.5) * H * ne) / Z,
            },
            size: Z,
            r: Z * 10,
            vertices: [],
          },
          U = Math.floor(Math.random() * 5) + 7;
        for (let P = 0; P < U; P++) {
          const k = (P / U) * Math.PI * 2,
            F = R.r * (0.8 + Math.random() * 0.4);
          R.vertices.push({ x: Math.cos(k) * F, y: Math.sin(k) * F });
        }
        g.current.asteroids.push(R);
      },
      v = () => {
        const { ship: x } = g.current;
        x.dead ||
          g.current.bullets.push({
            x: x.x + Math.cos(x.a) * x.r,
            y: x.y + Math.sin(x.a) * x.r,
            v: { x: Math.cos(x.a) * 300, y: Math.sin(x.a) * 300 },
            life: 1.5,
          });
      },
      S = (x, O, M) => {
        const { ship: j, asteroids: Z, bullets: ne } = g.current;
        (j.invulnerable > 0 && (j.invulnerable -= x),
          j.dead ||
            (j.rotating && (j.a += j.rotating * 4 * x),
            j.thrusting &&
              ((j.v.x += Math.cos(j.a) * 200 * x),
              (j.v.y += Math.sin(j.a) * 200 * x)),
            (j.v.x *= 0.99),
            (j.v.y *= 0.99),
            (j.x += j.v.x * x),
            (j.y += j.v.y * x),
            j.x < 0 && (j.x += O),
            j.x > O && (j.x -= O),
            j.y < 0 && (j.y += M),
            j.y > M && (j.y -= M)));
        for (let H = ne.length - 1; H >= 0; H--) {
          const R = ne[H];
          if (
            ((R.x += R.v.x * x),
            (R.y += R.v.y * x),
            (R.life -= x),
            R.x < 0 && (R.x += O),
            R.x > O && (R.x -= O),
            R.y < 0 && (R.y += M),
            R.y > M && (R.y -= M),
            R.life <= 0)
          ) {
            ne.splice(H, 1);
            continue;
          }
          for (let U = Z.length - 1; U >= 0; U--) {
            const P = Z[U],
              k = R.x - P.x,
              F = R.y - P.y;
            if (Math.sqrt(k * k + F * F) < P.r) {
              (ne.splice(H, 1),
                Z.splice(U, 1),
                o((J) => J + (4 - P.size) * 100),
                P.size > 1 &&
                  (m(O, M, P.x, P.y, P.size - 1),
                  m(O, M, P.x, P.y, P.size - 1)));
              break;
            }
          }
        }
        for (const H of Z)
          if (
            ((H.x += H.v.x * x),
            (H.y += H.v.y * x),
            H.x < 0 && (H.x += O),
            H.x > O && (H.x -= O),
            H.y < 0 && (H.y += M),
            H.y > M && (H.y -= M),
            !j.dead && j.invulnerable <= 0)
          ) {
            const R = j.x - H.x,
              U = j.y - H.y;
            Math.sqrt(R * R + U * U) < H.r + j.r &&
              ((j.dead = !0),
              l((k) => {
                const F = k - 1;
                return (
                  F > 0
                    ? setTimeout(() => T({ width: O, height: M }), 1e3)
                    : s(!0),
                  F
                );
              }));
          }
        if (Z.length === 0)
          for (let H = 0; H < 5 + Math.floor(i / 1e3); H++) m(O, M);
      },
      E = (x, O, M) => {
        ((x.fillStyle = "black"),
          x.fillRect(0, 0, O, M),
          (x.strokeStyle = "#4ade80"),
          (x.lineWidth = 2));
        const { ship: j, asteroids: Z, bullets: ne } = g.current;
        j.dead ||
          (x.save(),
          x.translate(j.x, j.y),
          x.rotate(j.a),
          (j.invulnerable <= 0 || Math.floor(Date.now() / 100) % 2 === 0) &&
            (x.beginPath(),
            x.moveTo(10, 0),
            x.lineTo(-10, 7),
            x.lineTo(-10, -7),
            x.closePath(),
            x.stroke(),
            j.thrusting &&
              (x.beginPath(), x.moveTo(-10, 0), x.lineTo(-18, 0), x.stroke())),
          x.restore());
        for (const H of Z) {
          (x.save(),
            x.translate(H.x, H.y),
            x.beginPath(),
            x.moveTo(H.vertices[0].x, H.vertices[0].y));
          for (let R = 1; R < H.vertices.length; R++)
            x.lineTo(H.vertices[R].x, H.vertices[R].y);
          (x.closePath(), x.stroke(), x.restore());
        }
        x.fillStyle = "#4ade80";
        for (const H of ne) x.fillRect(H.x - 1, H.y - 1, 2, 2);
        ((x.font = "20px monospace"),
          (x.fillStyle = "#4ade80"),
          x.fillText(`SCORE: ${i}`, 20, 30),
          x.fillText(`LIVES: ${a}`, O - 120, 30));
      },
      I = (x) => {
        if ((x.preventDefault(), !c)) return;
        const O = { name: c.toUpperCase().slice(0, 5), score: i },
          M = [...w, O].sort((j, Z) => Z.score - j.score).slice(0, 10);
        (M[0].name === O.name && M[0].score === O.score && t && t(),
          y(M),
          f(!0));
      },
      C = w.some((x) => i > x.score);
    return u.jsxs("div", {
      className: "w-full h-full relative",
      children: [
        u.jsx("canvas", { ref: n, className: "w-full h-full block" }),
        r &&
          u.jsxs("div", {
            className:
              "absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-green-500 font-mono z-10",
            children: [
              u.jsx("h1", {
                className: "text-4xl font-bold mb-8 text-red-500 animate-pulse",
                children: "GAME OVER",
              }),
              u.jsxs("div", {
                className: "border border-green-800 p-8 bg-black",
                children: [
                  u.jsx("h2", {
                    className:
                      "text-xl mb-4 border-b border-green-800 pb-2 text-center",
                    children: "HIGH SCORES",
                  }),
                  u.jsx("div", {
                    className: "space-y-2 font-mono mb-4",
                    children: w.map((x, O) =>
                      u.jsxs(
                        "div",
                        {
                          className: "flex justify-between w-64",
                          children: [
                            u.jsxs("span", {
                              className: "text-green-400",
                              children: [O + 1, ". ", x.name],
                            }),
                            u.jsx("span", {
                              className: "text-green-600",
                              children: x.score,
                            }),
                          ],
                        },
                        O,
                      ),
                    ),
                  }),
                  C &&
                    !h &&
                    u.jsxs("form", {
                      onSubmit: I,
                      className:
                        "flex flex-col items-center mt-4 border-t border-green-900 pt-4",
                      children: [
                        u.jsx("label", {
                          className: "mb-2 text-sm",
                          children: "ENTER NAME (MAX 5):",
                        }),
                        u.jsxs("div", {
                          className: "flex",
                          children: [
                            u.jsx("input", {
                              type: "text",
                              maxLength: 5,
                              value: c,
                              onChange: (x) => d(x.target.value.toUpperCase()),
                              className:
                                "bg-green-900/20 border border-green-500 text-green-100 px-2 py-1 w-24 text-center outline-none focus:bg-green-900/40",
                              autoFocus: !0,
                            }),
                            u.jsx("button", {
                              type: "submit",
                              className:
                                "ml-2 px-3 py-1 bg-green-800 text-black font-bold hover:bg-green-600",
                              children: "OK",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (h || !C) &&
                    u.jsx("div", {
                      className:
                        "mt-4 text-center border-t border-green-900 pt-4 animate-pulse text-green-400",
                      children: "PRESS SPACE TO PLAY AGAIN",
                    }),
                ],
              }),
              u.jsx("div", {
                className: "mt-8 text-sm animate-pulse",
                children: "PRESS ESC TO EXIT",
              }),
            ],
          }),
      ],
    });
  },
  uS = ({ onExit: e }) => {
    const [t, n] = A.useState({ x: 20, y: 45 }),
      [r, s] = A.useState(!1),
      [i, o] = A.useState({ x: 0, y: 0 }),
      [a, l] = A.useState(0),
      c = A.useRef(null),
      d = (y) => {
        (s(!0), o({ x: y.clientX, y: y.clientY }));
      },
      h = (y) => {
        if (!r) return;
        const g = y.clientX - i.x,
          T = y.clientY - i.y;
        (n((p) => ({
          x: Math.max(-90, Math.min(90, p.x - T * 0.5)),
          y: p.y + g * 0.5,
        })),
          o({ x: y.clientX, y: y.clientY }));
      },
      f = () => {
        s(!1);
      };
    A.useEffect(() => {
      const y = (g) => {
        g.key === "ArrowUp"
          ? l((T) => Math.min(T + 1, 3))
          : g.key === "ArrowDown" && l((T) => Math.max(T - 1, 0));
      };
      return (
        window.addEventListener("mouseup", f),
        window.addEventListener("keydown", y),
        () => {
          (window.removeEventListener("mouseup", f),
            window.removeEventListener("keydown", y));
        }
      );
    }, []);
    const w = [
      {
        level: "TOP FLOOR",
        z: 150,
        rooms: [
          {
            name: "BRIDGE",
            x: 0,
            y: -20,
            w: 100,
            h: 60,
            color: "border-green-400",
          },
          {
            name: "LIFT",
            x: 0,
            y: 40,
            w: 30,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS DOWN",
            x: -40,
            y: 40,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
        ],
      },
      {
        level: "1ST FLOOR",
        z: 50,
        rooms: [
          {
            name: "RESEARCH LAB",
            x: -80,
            y: 0,
            w: 70,
            h: 80,
            color: "border-green-400",
          },
          {
            name: "HYDROPONICS",
            x: 0,
            y: 0,
            w: 70,
            h: 80,
            color: "border-green-400",
          },
          {
            name: "MEDICAL BAY",
            x: 80,
            y: 0,
            w: 70,
            h: 80,
            color: "border-green-400",
          },
          {
            name: "LIFT",
            x: 0,
            y: 60,
            w: 30,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS UP",
            x: -40,
            y: 60,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS DOWN",
            x: 40,
            y: 60,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
        ],
      },
      {
        level: "GROUND FLOOR",
        z: -50,
        rooms: [
          {
            name: "KITCHEN",
            x: -60,
            y: -40,
            w: 60,
            h: 50,
            color: "border-green-400",
          },
          {
            name: "GALLEY",
            x: 5,
            y: 20,
            w: 190,
            h: 50,
            color: "border-green-400",
          },
          {
            name: "CREW QUARTERS",
            x: 40,
            y: -40,
            w: 120,
            h: 50,
            color: "border-green-400",
          },
          {
            name: "LIFT",
            x: 0,
            y: 80,
            w: 30,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS UP",
            x: -40,
            y: 80,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS DOWN",
            x: 40,
            y: 80,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
        ],
      },
      {
        level: "BASEMENT",
        z: -150,
        rooms: [
          {
            name: "ENGINE ROOM",
            x: 0,
            y: -50,
            w: 100,
            h: 60,
            color: "border-green-400",
          },
          {
            name: "MAINTENANCE",
            x: -60,
            y: 20,
            w: 80,
            h: 60,
            color: "border-green-400",
          },
          {
            name: "CARGO BAY",
            x: 60,
            y: 20,
            w: 100,
            h: 60,
            color: "border-green-400",
          },
          {
            name: "LIFT",
            x: 0,
            y: 80,
            w: 30,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "STAIRS UP",
            x: -40,
            y: 80,
            w: 40,
            h: 30,
            color: "border-green-600",
          },
          {
            name: "RAMP/EXIT",
            x: 140,
            y: 20,
            w: 40,
            h: 60,
            color: "border-green-600",
          },
        ],
      },
    ];
    return u.jsxs("div", {
      className:
        "flex flex-col h-full bg-black text-green-500 font-mono overflow-hidden relative",
      children: [
        u.jsxs("div", {
          className:
            "flex justify-between items-center p-4 border-b border-green-800 z-10 bg-black",
          children: [
            u.jsx("h1", {
              className: "text-2xl font-bold tracking-widest",
              children: "STATION MAP 3D",
            }),
            u.jsxs("div", {
              className: "flex space-x-4",
              children: [
                u.jsxs("div", {
                  className:
                    "text-xs text-green-600 flex flex-col justify-center",
                  children: [
                    u.jsx("span", { children: "拖拽可旋转" }),
                    u.jsx("span", { children: "上/下键：切换层数" }),
                  ],
                }),
                u.jsx("button", {
                  onClick: e,
                  className:
                    "px-4 py-2 border border-green-600 hover:bg-green-900/50 transition-colors",
                  children: "[EXIT退出]",
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          ref: c,
          className:
            "flex-1 relative cursor-move overflow-hidden perspective-1000",
          onMouseDown: d,
          onMouseMove: h,
          style: { perspective: "1000px" },
          children: u.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-0 h-0 transform-style-3d",
            style: {
              transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)`,
              transformStyle: "preserve-3d",
            },
            children: w.map((y, g) => {
              if (g < a) return null;
              const T = Math.max(0.1, 1 - (g - a) * 0.8),
                p = 150 - (g - a) * 100;
              return u.jsxs(
                "div",
                {
                  className:
                    "absolute transform-style-3d transition-all duration-500 ease-in-out",
                  style: {
                    transform: `translateZ(${p}px) translate(-50%, -50%)`,
                    width: "0",
                    height: "0",
                    opacity: T,
                  },
                  children: [
                    u.jsx("div", {
                      className:
                        "absolute text-green-300 text-xs font-bold whitespace-nowrap",
                      style: {
                        transform: `translate(120px, -100px) rotateY(${-t.y}deg) rotateX(${-t.x}deg)`,
                        textShadow: "0 0 5px rgba(0, 255, 0, 0.5)",
                      },
                      children: y.level,
                    }),
                    u.jsx("div", {
                      className:
                        "absolute border border-green-900/30 bg-green-900/5",
                      style: {
                        width: "400px",
                        height: "400px",
                        transform: "translate(-200px, -200px)",
                      },
                    }),
                    y.rooms.map((m, v) =>
                      u.jsx(
                        "div",
                        {
                          className: `absolute border ${m.color} bg-green-900/20 flex items-center justify-center text-center hover:bg-green-500/20 transition-colors`,
                          style: {
                            left: `${m.x}px`,
                            top: `${m.y}px`,
                            width: `${m.w}px`,
                            height: `${m.h}px`,
                            transform: "translate(-50%, -50%)",
                          },
                          children: u.jsx("span", {
                            className:
                              "text-[8px] md:text-[10px] leading-tight pointer-events-none select-none",
                            style: {
                              transform: `rotateY(${-t.y}deg) rotateX(${-t.x}deg)`,
                            },
                            children: m.name,
                          }),
                        },
                        v,
                      ),
                    ),
                    g < w.length - 1 &&
                      g >= a &&
                      u.jsx(u.Fragment, {
                        children: u.jsx("div", {
                          className: "absolute bg-green-800/50 w-0.5",
                          style: {
                            height: "100px",
                            transform: "translateY(-50%) rotateX(90deg)",
                            top: "0",
                            left: "0",
                          },
                        }),
                      }),
                  ],
                },
                g,
              );
            }),
          }),
        }),
      ],
    });
  },
  dS = ({ onExit: e }) => {
    const [t, n] = A.useState("idle"),
      [r, s] = A.useState([]),
      [i, o] = A.useState([]);
    (A.useRef(null),
      A.useEffect(() => {
        t === "approach"
          ? (a(" 启动接近向量（VECTOR）..."),
            setTimeout(() => a("目标锁定：量子异常（QUANTUM ANOMALY）"), 1500))
          : t === "breach"
            ? (a(" 检测到收容失效。外壳完整性下降。"),
              a("警告: 前方为非欧几里得几何（NON-EUCLIDEAN GEOMETRY）"))
            : t === "transit"
              ? (a("进入滑流（SLIPSTREAM）..."),
                a("临时位移（TEMPORAL DISPLACEMENT）即将发生。"))
              : t === "arrival" &&
                (a("退出滑流（EXITING SLIPSTREAM）"),
                a("位置确认：第九区（SECTOR 9）[UNKNOWN未知]"));
      }, [t]));
    const a = (c) => {
      s((d) => [...d, `[${new Date().toLocaleTimeString()}] ${c}`]);
    };
    A.useEffect(() => {
      if (t !== "transit") return;
      const c = setInterval(() => {
        o((d) => {
          const h = [
            ...d,
            Math.sin(Date.now() / 200) * 50 + Math.random() * 20,
          ];
          return (h.length > 50 && h.shift(), h);
        });
      }, 50);
      return () => clearInterval(c);
    }, [t]);
    const l = () => {
      (n("approach"),
        s([]),
        setTimeout(() => n("breach"), 3e3),
        setTimeout(() => n("transit"), 5e3),
        setTimeout(() => n("arrival"), 15e3),
        setTimeout(() => n("complete"), 18e3));
    };
    return u.jsxs("div", {
      className:
        "h-full flex flex-col bg-black text-green-500 font-mono p-4 overflow-hidden relative",
      children: [
        u.jsxs("div", {
          className:
            "flex justify-between items-center border-b border-green-800 pb-2 mb-4",
          children: [
            u.jsx("h1", {
              className: "text-xl font-bold",
              children: "BIFROST SIMULATION彩虹桥模拟系统 v1.0",
            }),
            u.jsx("button", {
              onClick: e,
              className: "hover:bg-green-900 px-2 py-1",
              children: "[EXIT退出]",
            }),
          ],
        }),
        u.jsxs("div", {
          className:
            "flex-1 relative border border-green-900 bg-black/50 overflow-hidden",
          children: [
            u.jsx("div", {
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage:
                  "linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              },
            }),
            u.jsxs("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: [
                u.jsxs(de.div, {
                  className: "absolute",
                  animate: {
                    scale: t === "transit" ? [1, 1.5, 1] : 1,
                    rotate: 360,
                    opacity: t === "idle" ? 0.5 : 1,
                  },
                  transition: { duration: 10, repeat: 1 / 0, ease: "linear" },
                  children: [
                    u.jsx("div", {
                      className:
                        "w-64 h-64 border-4 border-dashed border-purple-500 rounded-full opacity-50 blur-sm",
                    }),
                    u.jsx("div", {
                      className:
                        "absolute inset-0 w-48 h-48 border-2 border-purple-300 rounded-full m-auto animate-ping",
                    }),
                  ],
                }),
                u.jsx(Nm, {
                  children:
                    t !== "transit" &&
                    t !== "arrival" &&
                    t !== "complete" &&
                    u.jsxs(de.div, {
                      className: "absolute z-10",
                      initial: { x: -300, y: 0 },
                      animate:
                        t === "approach"
                          ? { x: -100 }
                          : t === "breach"
                            ? { x: 0, scale: 0, opacity: 0 }
                            : { x: -300 },
                      transition: { duration: t === "approach" ? 3 : 2 },
                      children: [
                        u.jsxs("svg", {
                          width: "60",
                          height: "40",
                          viewBox: "0 0 60 40",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            u.jsx("rect", {
                              x: "10",
                              y: "10",
                              width: "40",
                              height: "20",
                            }),
                            u.jsx("circle", { cx: "15", cy: "35", r: "5" }),
                            u.jsx("circle", { cx: "45", cy: "35", r: "5" }),
                            u.jsx("line", {
                              x1: "30",
                              y1: "10",
                              x2: "30",
                              y2: "0",
                            }),
                            u.jsx("circle", {
                              cx: "30",
                              cy: "0",
                              r: "2",
                              fill: "currentColor",
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "text-xs text-center mt-1",
                          children: "ROVER-1漫游车1号",
                        }),
                      ],
                    }),
                }),
                (t === "arrival" || t === "complete") &&
                  u.jsxs(de.div, {
                    className: "absolute z-10",
                    initial: { x: 0, scale: 0, opacity: 0 },
                    animate: { x: 200, scale: 1, opacity: 1 },
                    transition: { duration: 3 },
                    children: [
                      u.jsxs("svg", {
                        width: "60",
                        height: "40",
                        viewBox: "0 0 60 40",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          u.jsx("rect", {
                            x: "10",
                            y: "10",
                            width: "40",
                            height: "20",
                          }),
                          u.jsx("circle", { cx: "15", cy: "35", r: "5" }),
                          u.jsx("circle", { cx: "45", cy: "35", r: "5" }),
                          u.jsx("line", {
                            x1: "30",
                            y1: "10",
                            x2: "30",
                            y2: "0",
                          }),
                          u.jsx("circle", {
                            cx: "30",
                            cy: "0",
                            r: "2",
                            fill: "currentColor",
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "text-xs text-center mt-1",
                        children: "ROVER-1漫游车1号",
                      }),
                    ],
                  }),
                t === "transit" &&
                  u.jsx(de.div, {
                    className:
                      "absolute inset-0 bg-black flex items-center justify-center z-20",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    children: u.jsxs("div", {
                      className: "w-full h-full relative overflow-hidden",
                      children: [
                        [...Array(20)].map((c, d) =>
                          u.jsx(
                            de.div,
                            {
                              className: "absolute h-px bg-green-500 w-full",
                              style: { top: `${Math.random() * 100}%` },
                              animate: { x: [-1e3, 1e3] },
                              transition: {
                                duration: 0.2,
                                repeat: 1 / 0,
                                delay: Math.random(),
                              },
                            },
                            d,
                          ),
                        ),
                        u.jsxs("div", {
                          className:
                            "absolute bottom-10 left-10 right-10 h-32 border border-green-800 bg-black/80 p-2",
                          children: [
                            u.jsx("div", {
                              className: "text-xs mb-1",
                              children: "QUANTUM FLUX VARIANCE量子流变化",
                            }),
                            u.jsx("div", {
                              className: "flex items-end h-full space-x-1",
                              children: i.map((c, d) =>
                                u.jsx(
                                  "div",
                                  {
                                    className: "w-1 bg-green-500",
                                    style: { height: `${50 + c}%` },
                                  },
                                  d,
                                ),
                              ),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
                          children: [
                            u.jsx("h2", {
                              className:
                                "text-2xl font-bold animate-pulse text-red-500",
                              children: "正在穿越...",
                            }),
                            u.jsx("p", {
                              className: "text-sm mt-2",
                              children: "请勿关闭电源",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "h-48 flex mt-4 space-x-4",
          children: [
            u.jsxs("div", {
              className:
                "w-1/3 border border-green-800 p-4 flex flex-col justify-center items-center space-y-4",
              children: [
                u.jsxs("div", {
                  className: "text-sm",
                  children: [
                    "状态: ",
                    u.jsx("span", {
                      className: "font-bold uppercase",
                      children: t,
                    }),
                  ],
                }),
                t === "idle" &&
                  u.jsx("button", {
                    onClick: l,
                    className:
                      "bg-green-900/50 hover:bg-green-800 px-6 py-2 border border-green-500 rounded",
                    children: "INITIATE SIMULATION启动模拟",
                  }),
                t === "complete" &&
                  u.jsx("button", {
                    onClick: l,
                    className:
                      "bg-green-900/50 hover:bg-green-800 px-6 py-2 border border-green-500 rounded",
                    children: "REPLAY重来",
                  }),
              ],
            }),
            u.jsxs("div", {
              className:
                "flex-1 border border-green-800 p-2 font-mono text-xs overflow-y-auto bg-black/30",
              children: [
                r.map((c, d) =>
                  u.jsx("div", { className: "mb-1", children: c }, d),
                ),
                u.jsx("div", {
                  ref: (c) =>
                    c == null
                      ? void 0
                      : c.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                          inline: "nearest",
                        }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Hi = (e, t, n, r) =>
    e
      ? e
          .split(
            /((?:<b>.*?<\/b>)|(?:<i>.*?<\/i>)|(?:<devil>.*?<\/devil>)|(?:&[A-Z0-9]+)|(?:file:[a-zA-Z0-9-]+))/g,
          )
          .map((i, o) => {
            if (i.startsWith("<b>") && i.endsWith("</b>"))
              return u.jsx(
                "span",
                {
                  className: "font-bold text-green-100",
                  children: i.slice(3, -4),
                },
                o,
              );
            if (i.startsWith("<i>") && i.endsWith("</i>"))
              return u.jsx(
                "span",
                {
                  className: "italic text-green-200",
                  children: i.slice(3, -4),
                },
                o,
              );
            if (i.startsWith("<devil>") && i.endsWith("</devil>"))
              return u.jsx(
                "span",
                {
                  className: "text-red-600 font-bold animate-pulse",
                  children: i.slice(7, -8),
                },
                o,
              );
            if (i.startsWith("&")) {
              const a = i.slice(1);
              if (a === "0" && n && n[0]) {
                const c = n[0];
                return u.jsxs(
                  "span",
                  {
                    className: "font-bold text-blue-300",
                    children: [c.role, " ", c.firstName, " ", c.lastName],
                  },
                  o,
                );
              }
              const l = t[a];
              return l
                ? u.jsxs(
                    "span",
                    {
                      className: "font-bold text-blue-300",
                      children: [l.title, " ", l.firstName, " ", l.lastName],
                    },
                    o,
                  )
                : u.jsx(
                    "span",
                    { className: "font-bold text-blue-300", children: i },
                    o,
                  );
            }
            if (i.startsWith("file:")) {
              const a = i.slice(5);
              return u.jsx(
                "button",
                {
                  onClick: () => r && r(a),
                  className:
                    "font-bold text-yellow-400 hover:underline hover:text-yellow-200 cursor-pointer",
                  children: a,
                },
                o,
              );
            }
            return i;
          })
      : null,
  hS = (e, t, n, r) => {
    const s = e.split(`
`),
      // 第17607行
      i = s.find(
        (h) =>
          h.startsWith("USER:") ||
          h.startsWith("用户：") ||
          h.startsWith("用户:"),
      ),
      o = i ? i.replace(/^(USER:|用户：|用户:)/, "").trim() : "Unknown",
      a = s.findIndex((h) => h.trim().startsWith("过去一周发送的邮件摘要")),
      c = s.slice(s.indexOf(i) + 1, a).filter((h) => h.trim() !== "").join(`
`),
      d = [];
    if (a !== -1)
      for (let h = a + 1; h < s.length; h++) {
        const f = s[h].trim();
        if (f.startsWith("-")) {
          const w = f.substring(1);
          const colonIdx = w.search(/[：:]/);
          if (colonIdx !== -1) {
            const y = w.substring(0, colonIdx).trim(),
              g = w.substring(colonIdx + 1).trim();
            d.push({ subject: y, body: g });
          }
        }
      }
    return u.jsxs("div", {
      className: "space-y-6 font-mono",
      children: [
        u.jsxs("div", {
          className: "border-b border-green-800 pb-4",
          children: [
            u.jsx("h2", {
              className: "text-xl text-green-400 font-bold mb-2",
              children: "邮件存档摘要（EMAIL ARCHIVE SUMMARY）",
            }),
            u.jsxs("div", {
              className: "flex items-center space-x-2 text-green-300",
              children: [
                u.jsx("span", {
                  className: "text-green-600 uppercase tracking-widest text-xs",
                  children: "用户:",
                }),
                u.jsx("span", { className: "font-bold", children: o }),
              ],
            }),
          ],
        }),
        c &&
          u.jsx("div", {
            className: "text-green-300/80 italic text-sm",
            children: c,
          }),
        u.jsxs("div", {
          className: "mt-6",
          children: [
            u.jsx("h3", {
              className:
                "text-green-500 font-bold mb-4 uppercase text-sm tracking-wider border-b border-green-900/50 pb-2",
              children: "过去一周（7天）发送的邮件信息",
            }),
            u.jsx("div", {
              className:
                "overflow-hidden border border-green-900 rounded bg-green-900/10",
              children: u.jsxs("table", {
                className: "w-full text-left text-sm",
                children: [
                  u.jsx("thead", {
                    className: "bg-green-900/30 text-green-400",
                    children: u.jsxs("tr", {
                      children: [
                        u.jsx("th", {
                          className: "p-3 border-b border-green-800 w-1/3",
                          children: "主题",
                        }),
                        u.jsx("th", {
                          className: "p-3 border-b border-green-800",
                          children: "内容摘要",
                        }),
                      ],
                    }),
                  }),
                  u.jsx("tbody", {
                    className: "divide-y divide-green-900/50",
                    children: d.map((h, f) =>
                      u.jsxs(
                        "tr",
                        {
                          className: "hover:bg-green-900/20 transition-colors",
                          children: [
                            u.jsx("td", {
                              className:
                                "p-3 text-green-300 font-bold align-top",
                              children: Hi(h.subject, t, n, r),
                            }),
                            u.jsx("td", {
                              className: "p-3 text-green-300/80 align-top",
                              children: Hi(h.body, t, n, r),
                            }),
                          ],
                        },
                        f,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  fS = ({
    screen: e,
    foundFiles: t,
    discoveredCrew: n,
    currentFile: r,
    onFileClick: s,
    onFolderClick: i,
    onFolderUp: o,
    onBack: a,
    scrollRef: l,
    gameState: c,
    files: d,
    onWordleWin: h,
    onDeletePlayerNote: f,
    onTurnOff: w,
    onPowerUpdate: y,
    onAsteroidsTop: g,
  }) => {
    var ne, H;
    const {
        manifestationRoles: T,
        devilMode: p,
        devil2Mode: m,
        monitorPower: v,
      } = c,
      [S, E] = ea.useState("all");
    ea.useEffect(() => {
      l.current && (l.current.scrollTop = 0);
    }, [e, r, l]);
    const I = (R) => {
        if (!R) return { body: "", notes: [] };
        const U = R.split(`
`),
          P = [],
          k = [];
        let F = null;
        for (let _ = 0; _ < U.length; _++) {
          const J = U[_];
          if (J.trim().startsWith("@note:")) {
            const D = J.trim().substring(6).trim();
            F ? F.push(D) : ((F = [D]), k.push(F));
          } else if (J.trim().startsWith("@devil:"))
            if (p) {
              const D = J.trim().substring(7).trim();
              ((F = null), P.push(`<devil>${D}</devil>`));
            } else _ + 1 < U.length && U[_ + 1].trim() === "" && _++;
          else if (J.trim().startsWith("@devil2:"))
            if (m) {
              const D = J.trim().substring(8).trim();
              ((F = null), P.push(`<devil>${D}</devil>`));
            } else _ + 1 < U.length && U[_ + 1].trim() === "" && _++;
          else ((F = null), P.push(J));
        }
        return {
          body: P.join(`
`),
          notes: k,
        };
      },
      { body: C, notes: x } = r ? I(r.content) : { body: "", notes: [] },
      O = (R) => {
        if ((r == null ? void 0 : r.id) !== "manifest") return R;
        let U = R,
          P = 0;
        return (
          Jn.forEach((k) => {
            const F = n[k.id];
            if (
              F &&
              F.title.toLowerCase() === k.title.toLowerCase() &&
              F.firstName.toLowerCase() === k.firstName.toLowerCase() &&
              F.lastName.toLowerCase() === k.lastName.toLowerCase()
            ) {
              P++;
              const J = new RegExp(`^.*${k.title.toUpperCase()}[：:].*$`, "m");
              U = U.replace(
                J,
                `（${k.titleChinese}）${k.title.toUpperCase()}: ${k.firstName.toUpperCase()} ${k.lastName.toUpperCase()}`,
              );
            }
          }),
          `Identified（已识别）: ${P}/12

${U}`
        );
      },
      M = (R) => {
        if ((r == null ? void 0 : r.id) !== "MANIFESTATION") return R;
        let U = R,
          P = 0;
        return (
          Jn.forEach((k) => {
            if (T ? T[k.id] : null) {
              P++;
              const _ = new RegExp(`^.*${k.role.toUpperCase()}[：:].*$`, "m");
              U = U.replace(
                _,
                `（${k.roleChinese}）${k.role.toUpperCase()}: ${k.firstName.toUpperCase()} ${k.lastName.toUpperCase()}`,
              );
            }
          }),
          `Manifested（已显现）: ${P}/12

${U}`
        );
      };
    let j = C;
    (r == null ? void 0 : r.id) === "manifest"
      ? (j = O(C))
      : (r == null ? void 0 : r.id) === "MANIFESTATION" && (j = M(C));
    const Z = (r == null ? void 0 : r.theme) === "danger";
    return u.jsx("div", {
      className: `flex-1 flex flex-col overflow-hidden relative font-mono text-lg leading-relaxed ${Z && e === "file" ? "text-red-500" : ""}`,
      children: u.jsxs(Nm, {
        mode: "wait",
        children: [
          e === "help" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsx("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: "SYSTEM HELP 系统帮助",
                    }),
                  }),
                  u.jsxs("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2 space-y-4",
                    children: [
                      u.jsx("p", { children: "可用命令:" }),
                      u.jsxs("ul", {
                        className:
                          "list-disc list-inside space-y-2 text-green-300",
                        children: [
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "help",
                              }),
                              ": 显示此帮助界面。",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "list",
                              }),
                              ": 显示已发送的文件。",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "inbox",
                              }),
                              c.inbox &&
                                (() => {
                                  const R = c.inbox.filter((U) => {
                                    var P;
                                    return !(
                                      (P = c.readInboxFiles) != null &&
                                      P.includes(U)
                                    );
                                  }).length;
                                  return R > 0
                                    ? u.jsxs("span", {
                                        className:
                                          "text-green-500 font-bold ml-1",
                                        children: ["(", R, ")"],
                                      })
                                    : null;
                                })(),
                              ": 显示已接收的消息。",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "[filename]",
                              }),
                              "：直接输入[文件名]打开一个特定文件。",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "save",
                              }),
                              ": 存档游戏（使用“save [filename]'进行下载）。",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "load",
                              }),
                              ": 从文件加载游戏。",
                            ],
                          }),
                          t.includes("02-CA-I-J") &&
                            u.jsxs("li", {
                              children: [
                                u.jsx("span", {
                                  className: "text-white font-bold",
                                  children:
                                    "name [id] [title] [firstname] [lastname]",
                                }),
                                ": 记录驻站人员信息。",
                              ],
                            }),
                          t.includes("08-MA-A-Z") &&
                            u.jsxs("li", {
                              children: [
                                u.jsx("span", {
                                  className: "text-white font-bold",
                                  children: "find [id or timestamp]",
                                }),
                                ": 查找特定驻站人员或时间戳的相关文件。",
                              ],
                            }),
                          ((ne = c.readInboxFiles) == null
                            ? void 0
                            : ne.includes("protocol-lazarus")) &&
                            u.jsxs("li", {
                              children: [
                                u.jsx("span", {
                                  className: "text-white font-bold",
                                  children: "dir",
                                }),
                                ": 在主机（mainframe）中导航。使用 dir /help 获取更多信息。",
                              ],
                            }),
                          t.includes("04-CA-B-C-E-I-J-R-S") &&
                            u.jsxs("li", {
                              children: [
                                u.jsx("span", {
                                  className: "text-white font-bold",
                                  children: "note [text]",
                                }),
                                ": “保存笔记。输入 'note' 可查看已保存的笔记。",
                              ],
                            }),
                          t.includes("01-GA-B-C-Z") &&
                            u.jsxs("li", {
                              children: [
                                u.jsx("span", {
                                  className: "text-white font-bold",
                                  children: "label [filename] [text]",
                                }),
                                ": 给文件添加标签。",
                              ],
                            }),
                        ],
                      }),
                      u.jsx("p", {
                        className: "mt-8 text-green-600 italic",
                        children: "提示：留意文件内容中的线索。",
                      }),
                    ],
                  }),
                ],
              },
              "help",
            ),
          e === "playerNotes" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsx("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: "NOTES",
                    }),
                  }),
                  u.jsx("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2",
                    children:
                      c.playerNotes.length === 0
                        ? u.jsx("p", {
                            className: "text-green-600 italic",
                            children:
                              "No notes yet. Use 'note [text]' to save a note.",
                          })
                        : u.jsx("div", {
                            className: "space-y-3",
                            children: c.playerNotes.map((R) =>
                              u.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-start gap-3 p-3 border border-green-900 rounded bg-black/30 hover:bg-black/50 transition-colors",
                                  children: [
                                    u.jsx("button", {
                                      onClick: () => f(R.id),
                                      className:
                                        "text-red-500 hover:text-red-400 text-xl flex-shrink-0 transition-colors",
                                      title: "Delete note",
                                      children: "🗑️",
                                    }),
                                    u.jsx("div", {
                                      className: "flex-1",
                                      children: u.jsx("p", {
                                        className: "text-green-300",
                                        children: R.text,
                                      }),
                                    }),
                                  ],
                                },
                                R.id,
                              ),
                            ),
                          }),
                  }),
                ],
              },
              "playerNotes",
            ),
          e === "list" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsxs("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: [
                      u.jsx("h1", {
                        className:
                          "text-2xl font-bold text-green-400 mb-4 border-b border-green-800 pb-2",
                        children: "DISCOVERED FILES 已发现的文件",
                      }),
                      u.jsx("div", {
                        className: "flex gap-2 mb-4",
                        children: [
                          { id: "all", label: "ALL FILES所有文件", type: null },
                          { id: "logs", label: "LOGS日志", type: "text" },
                          {
                            id: "feeds",
                            label: "FEEDS监控画面",
                            type: "audio",
                          },
                          {
                            id: "documents",
                            label: "DOCUMENTS主机文档",
                            type: "mainframe",
                          },
                        ].map((R) =>
                          u.jsx(
                            "button",
                            {
                              onClick: () => E(R.id),
                              className: `px-4 py-2 text-sm font-mono transition-colors border ${S === R.id ? "bg-green-600 text-black border-green-600" : "bg-transparent text-green-600 border-green-800 hover:border-green-600"}`,
                              children: R.label,
                            },
                            R.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2",
                    children: u.jsx("div", {
                      className: "grid gap-2",
                      children: (() => {
                        let R = null;
                        return (
                          S === "logs"
                            ? (R = "text")
                            : S === "feeds"
                              ? (R = "audio")
                              : S === "documents" && (R = "mainframe"),
                          [...t].sort().map((U) => {
                            const P = d ? d[U] : null;
                            if (
                              (P && P.type === "inbox") ||
                              (R && (P == null ? void 0 : P.type) !== R)
                            )
                              return null;
                            let k = null;
                            if (P && P.links) {
                              const _ = P.links.filter(
                                (J) => !t.includes(J),
                              ).length;
                              k = u.jsxs("span", {
                                className: "text-green-500 text-sm font-bold",
                                children: ["(", _, ")"],
                              });
                            }
                            const F =
                              (P && P.hasDevilContent && p) ||
                              (P && P.hasDevil2Content && m);
                            return u.jsxs(
                              "button",
                              {
                                onClick: () => s(U),
                                className:
                                  "text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center justify-between",
                                children: [
                                  u.jsxs("div", {
                                    className:
                                      "flex items-center flex-1 min-w-0",
                                    children: [
                                      u.jsx("span", {
                                        className: `w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${F ? "border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black" : "border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,
                                        children: "F",
                                      }),
                                      u.jsx("span", {
                                        className: "truncate",
                                        children: U,
                                      }),
                                      c.fileLabels &&
                                        c.fileLabels[U] &&
                                        u.jsx("span", {
                                          className:
                                            "ml-4 text-green-700 italic text-sm truncate flex-1 text-right",
                                          children: c.fileLabels[U],
                                        }),
                                    ],
                                  }),
                                  k,
                                ],
                              },
                              U,
                            );
                          })
                        );
                      })(),
                    }),
                  }),
                ],
              },
              "list",
            ),
          e === "inbox" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsx("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: "INBOX 收件箱",
                    }),
                  }),
                  u.jsx("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2",
                    children: u.jsx("div", {
                      className: "grid gap-2",
                      children:
                        c.inbox && c.inbox.length > 0
                          ? c.inbox.map((R) => {
                              const U = d ? d[R] : null,
                                P =
                                  (U && U.hasDevilContent && p) ||
                                  (U && U.hasDevil2Content && m),
                                k = R === "MANIFESTATION";
                              return u.jsxs(
                                "button",
                                {
                                  onClick: () => s(R),
                                  className: `text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center ${k ? "text-red-500 hover:text-red-400 hover:border-red-700" : ""}`,
                                  children: [
                                    u.jsx("span", {
                                      className: `w-4 h-4 mr-3 border ${k || P ? "border-red-600 text-red-500 group-hover:bg-red-600" : "border-green-600 group-hover:bg-green-600"} flex items-center justify-center text-xs group-hover:text-black transition-colors`,
                                      children: "M",
                                    }),
                                    R,
                                  ],
                                },
                                R,
                              );
                            })
                          : u.jsx("p", {
                              className: "text-green-600 italic",
                              children: "Inbox is empty.",
                            }),
                    }),
                  }),
                ],
              },
              "inbox",
            ),
          e === "search" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsxs("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: [
                        "SEARCH RESULTS: ID ",
                        c == null ? void 0 : c.searchQuery,
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2",
                    children: u.jsx("div", {
                      className: "grid gap-2",
                      children:
                        ((H = c == null ? void 0 : c.searchResults) == null
                          ? void 0
                          : H.length) > 0
                          ? c.searchResults.sort().map((R) => {
                              const U = d ? d[R] : null,
                                P =
                                  (U && U.hasDevilContent && p) ||
                                  (U && U.hasDevil2Content && m);
                              let k = null;
                              if (U && U.links) {
                                const F = U.links.filter(
                                  (_) => !t.includes(_),
                                ).length;
                                k = u.jsxs("span", {
                                  className: "text-green-500 text-sm font-bold",
                                  children: ["(", F, ")"],
                                });
                              }
                              return u.jsxs(
                                "button",
                                {
                                  onClick: () => s(R),
                                  className:
                                    "text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center justify-between",
                                  children: [
                                    u.jsxs("div", {
                                      className:
                                        "flex items-center flex-1 min-w-0",
                                      children: [
                                        u.jsx("span", {
                                          className: `w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${P ? "border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black" : "border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,
                                          children: "F",
                                        }),
                                        u.jsx("span", {
                                          className: "truncate",
                                          children: R,
                                        }),
                                        c.fileLabels &&
                                          c.fileLabels[R] &&
                                          u.jsx("span", {
                                            className:
                                              "ml-4 text-green-700 italic text-sm truncate flex-1 text-right",
                                            children: c.fileLabels[R],
                                          }),
                                      ],
                                    }),
                                    k,
                                  ],
                                },
                                R,
                              );
                            })
                          : u.jsx("p", {
                              className: "text-green-600 italic",
                              children: "No files found matching this ID.",
                            }),
                    }),
                  }),
                ],
              },
              "search",
            ),
          e === "dir-help" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsx("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: "DIRECTORY HELP",
                    }),
                  }),
                  u.jsxs("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2 space-y-4",
                    children: [
                      u.jsxs("p", {
                        children: [
                          "The ",
                          u.jsx("span", {
                            className: "text-white font-bold",
                            children: "dir",
                          }),
                          " command allows you to navigate the station's mainframe.",
                        ],
                      }),
                      u.jsxs("ul", {
                        className:
                          "list-disc list-inside space-y-2 text-green-300",
                        children: [
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "dir [folder]",
                              }),
                              ": Open a specific folder (e.g., ",
                              u.jsx("span", {
                                className: "italic",
                                children: "dir logs",
                              }),
                              ").",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "dir ..",
                              }),
                              ": Go back to the parent folder.",
                            ],
                          }),
                          u.jsxs("li", {
                            children: [
                              u.jsx("span", {
                                className: "text-white font-bold",
                                children: "dir /admin",
                              }),
                              ": Access restricted system functions.",
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "mt-6 p-4 border border-red-900/50 bg-red-900/10 rounded",
                        children: [
                          u.jsx("h2", {
                            className: "text-red-400 font-bold mb-2",
                            children: "LOCKED FOLDERS",
                          }),
                          u.jsxs("p", {
                            className: "text-red-300 text-sm",
                            children: [
                              "Folders ending in ",
                              u.jsx("span", {
                                className: "font-bold",
                                children: ".ck",
                              }),
                              " are encrypted and cannot be accessed with your current clearance level. You may be able to unlock them later as you discover more about the station.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              "dir-help",
            ),
          e === "dir" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsxs("h1", {
                      className:
                        "text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",
                      children: [
                        "DIRECTORY 目录: ",
                        c.currentPath.map((R) => Fe[R].name).join("/"),
                      ],
                    }),
                  }),
                  u.jsxs("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2",
                    children: [
                      u.jsxs("div", {
                        className: "grid gap-2",
                        children: [
                          c.currentPath.length > 1 &&
                            u.jsxs("button", {
                              onClick: () => o && o(),
                              className:
                                "text-left px-4 py-2 border border-transparent flex items-center w-full text-green-300 hover:bg-green-900/30 hover:border-green-700 transition-colors group",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "w-4 h-4 mr-3 border border-green-600 flex items-center justify-center text-xs group-hover:bg-green-600 group-hover:text-black transition-colors",
                                  children: "^",
                                }),
                                "[..] 返回上一级",
                              ],
                            }),
                          Fe[
                            c.currentPath[c.currentPath.length - 1]
                          ].folders.map((R) => {
                            const U = Fe[R],
                              P = U.locked && !c.adminUnlocked;
                            return u.jsxs(
                              "button",
                              {
                                onClick: () => !P && i && i(R),
                                className: `text-left px-4 py-2 border border-transparent flex items-center w-full ${P ? "text-red-500 cursor-not-allowed" : "text-green-300 hover:bg-green-900/30 hover:border-green-700 transition-colors group"}`,
                                children: [
                                  u.jsx("span", {
                                    className: `w-4 h-4 mr-3 border ${P ? "border-red-500" : "border-green-600"} flex items-center justify-center text-xs ${!P && "group-hover:bg-green-600 group-hover:text-black transition-colors"}`,
                                    children: "D",
                                  }),
                                  U.name,
                                  " ",
                                  P &&
                                    u.jsx("span", {
                                      className: "ml-2 text-xs",
                                      children: "[LOCKED]",
                                    }),
                                ],
                              },
                              R,
                            );
                          }),
                          Fe[c.currentPath[c.currentPath.length - 1]].files.map(
                            (R) => {
                              const U = d ? d[R] : null,
                                P =
                                  (U && U.hasDevilContent && p) ||
                                  (U && U.hasDevil2Content && m);
                              return u.jsxs(
                                "button",
                                {
                                  onClick: () => s(R),
                                  className:
                                    "text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center",
                                  children: [
                                    u.jsx("span", {
                                      className: `w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${P ? "border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black" : "border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,
                                      children: "F",
                                    }),
                                    u.jsx("span", {
                                      className: "truncate",
                                      children: R,
                                    }),
                                    c.fileLabels &&
                                      c.fileLabels[R] &&
                                      u.jsx("span", {
                                        className:
                                          "ml-4 text-green-700 italic text-sm truncate flex-1 text-right",
                                        children: c.fileLabels[R],
                                      }),
                                  ],
                                },
                                R,
                              );
                            },
                          ),
                          Fe[c.currentPath[c.currentPath.length - 1]].folders
                            .length === 0 &&
                            Fe[c.currentPath[c.currentPath.length - 1]].files
                              .length === 0 &&
                            u.jsx("p", {
                              className: "text-green-600 italic",
                              children: "Directory is empty.",
                            }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "mt-8 text-sm text-green-600 border-t border-green-900 pt-4",
                        children: [
                          u.jsxs("p", {
                            children: [
                              "输入 ",
                              u.jsx("span", {
                                className: "text-green-400 font-bold",
                                children: "dir [folder]",
                              }),
                              " 进行导航/查找。",
                            ],
                          }),
                          u.jsxs("p", {
                            children: [
                              "输入 ",
                              u.jsx("span", {
                                className: "text-green-400 font-bold",
                                children: "dir ..",
                              }),
                              " 返回上一级。",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              "dir",
            ),
          e === "wordle" &&
            u.jsx(
              de.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "h-full p-6",
                children: u.jsx(aS, { onExit: () => a(), onWin: h }),
              },
              "wordle",
            ),
          e === "monitor" &&
            u.jsx(
              de.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "h-full p-6",
                children: u.jsx(lS, {
                  onExit: () => a(),
                  powerLevels: c.monitorPower,
                  onPowerUpdate: y,
                }),
              },
              "monitor",
            ),
          e === "asteroids" &&
            u.jsx(
              de.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "h-full p-6",
                children: u.jsx(cS, { onExit: () => a(), onLeaderboardTop: g }),
              },
              "asteroids",
            ),
          e === "map" &&
            u.jsx(
              de.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "h-full p-6",
                children: u.jsx(uS, { onExit: () => a() }),
              },
              "map",
            ),
          e === "bifrost" &&
            u.jsx(
              de.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "h-full p-6",
                children: u.jsx(dS, { onExit: () => a() }),
              },
              "bifrost",
            ),
          e === "crew" &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsxs("div", {
                      className:
                        "flex justify-between items-center mb-6 border-b border-green-800 pb-2",
                      children: [
                        u.jsx("h1", {
                          className: "text-2xl font-bold text-green-400",
                          children: "NAME LIST",
                        }),
                        u.jsx("button", {
                          onClick: a,
                          className:
                            "text-sm border border-green-800 px-3 py-1 hover:bg-green-900/50 transition-colors",
                          children: "[BACK]",
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    ref: l,
                    className: "flex-1 overflow-y-auto p-6 pt-2 space-y-2",
                    children: Object.entries(n)
                      .sort(([R], [U]) => parseInt(R) - parseInt(U))
                      .map(([R, U]) =>
                        u.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center space-x-4 p-2 border border-green-900/50 bg-green-900/10 rounded",
                            children: [
                              u.jsx("span", {
                                className: "text-green-500 font-bold w-8",
                                children: R,
                              }),
                              u.jsxs("span", {
                                className: "text-blue-300 font-bold",
                                children: [
                                  U.title,
                                  " ",
                                  U.firstName,
                                  " ",
                                  U.lastName,
                                ],
                              }),
                            ],
                          },
                          R,
                        ),
                      ),
                  }),
                ],
              },
              "crew",
            ),
          e === "file" &&
            r &&
            u.jsxs(
              de.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "flex flex-col h-full relative",
                children: [
                  u.jsx("div", {
                    className: "flex-none p-6 pb-2 bg-black z-10",
                    children: u.jsxs("div", {
                      className:
                        "flex justify-between items-center mb-6 border-b border-green-800 pb-2",
                      children: [
                        u.jsx("h1", {
                          className: `text-2xl font-bold ${Z ? "text-red-500" : "text-green-400"}`,
                          children: r.id,
                        }),
                        u.jsx("button", {
                          onClick: a,
                          className:
                            "text-sm border border-green-800 px-3 py-1 hover:bg-green-900/50 transition-colors",
                          children: "[BACK返回]",
                        }),
                      ],
                    }),
                  }),
                  u.jsxs("div", {
                    ref: l,
                    className: `flex-1 overflow-y-auto p-6 pt-2 ${Z ? "text-red-500" : ""}`,
                    children: [
                      (c == null ? void 0 : c.newDiscovery) &&
                        (r == null ? void 0 : r.type) !== "inbox" &&
                        u.jsxs("div", {
                          className:
                            "mb-6 p-3 border border-green-500 bg-green-900/30 text-green-300 text-center animate-pulse",
                          children: [
                            u.jsx("span", {
                              className: "font-bold",
                              children: "发现新文件。",
                            }),
                            "添加到索引列表LIST中。",
                          ],
                        }),
                      r.style === "email"
                        ? hS(r.content, n, T, s)
                        : u.jsx("pre", {
                            className: `whitespace-pre-wrap font-mono mb-8 ${Z ? "text-red-500" : "text-green-300"}`,
                            children: Hi(j, n, T, s),
                          }),
                      x.length > 0 &&
                        u.jsx("div", {
                          className:
                            "mt-8 border-t border-green-800 pt-4 space-y-4",
                          children: x.map((R, U) =>
                            u.jsxs(
                              "div",
                              {
                                className:
                                  "bg-green-900/20 border border-green-700 p-4 rounded text-sm text-green-200 italic",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "font-bold text-green-400 not-italic block mb-1",
                                    children: "INVESTIGATOR NOTE:",
                                  }),
                                  R.map((P, k) =>
                                    u.jsx(
                                      "div",
                                      {
                                        className: k > 0 ? "mt-1" : "",
                                        children: Hi(P, n, T, s),
                                      },
                                      k,
                                    ),
                                  ),
                                ],
                              },
                              U,
                            ),
                          ),
                        }),
                    ],
                  }),
                ],
              },
              "file",
            ),
          e === "file" &&
            r &&
            r.id === "TRUE-ENDING" &&
            u.jsx("div", {
              className:
                "absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none",
              children: u.jsx("button", {
                onClick: w,
                className:
                  "pointer-events-auto px-6 py-3 border border-red-500 bg-black text-red-500 hover:bg-red-900/30 hover:text-red-400 transition-colors font-bold tracking-widest animate-pulse",
                children: "TURN OFF TERMINAL关闭终端",
              }),
            }),
        ],
      }),
    });
  },
  ul = {
    readme: {
      id: "readme",
      content: `发件人：<b>司令部</b>
收件人：调查员 <i>[已隐去]</i>

欢迎你，<i>[已隐去]</i>，

你已被选中牵头调查废弃空间站 “尼福尔海姆”。

站内人员全部失踪，传感器全部失灵，只剩一台终端还在运转。
你已获得该终端的远程访问权限。

你的任务是在这些数字废墟中翻找线索。
找出日志，把零散的信息拼凑成完整的时间线。
查清楚站上 12 个人 到底经历了什么。

使用 <b>'list'</b> 可以查看当前能找到的文件。
请仔细阅读。文件里藏着能够解锁系统更深层内容的钥匙（文件名、代码或日期）。

输入文件名即可打开文件。

我们在搜寻信号时，截获了一段发送失败的信息，解密后内容如下：file:1009-TR-ZJ

另外，目前还恢复出了一段监控录像的文字记录：file:09-DU-B-J

接下来就靠你了，请务必查清这里发生的一切。


@devil:
@devil: 你本不该碰它。`,
      type: "inbox",
      hasDevilContent: !0,
      links: ["09-DU-B-J", "1009-TR-ZJ"],
    },
    "protocol-lazarus": {
      id: "protocol-lazarus",
      content: `拉撒路协议（PROTOCOL LAZARUS）已启动

主题：收容失效（containment breach）

如果你正在阅读这段文字，说明空间站已经沦陷。样本已逃脱。
@devil:
@devil: 我们不是逃脱了。我们是抵达了。

拉撒路协议（Protocol Lazarus）是最后的手段。它向任何拥有权限的幸存人员授予空间站主机（mainframe）的完全访问权限。

你已通过重建驻站人员名册（manifest）证明了你的身份。

访问已授予。

命令 'dir' 现已可用。使用它来浏览系统目录。`,
      type: "inbox",
      hasDevilContent: !0,
    },
    manifest: {
      id: "manifest",
      content: `（指挥官）COMMANDER：&*@A£$%AN )&*^*
（工程师）ENGINEER：RO3ER! RYAN
（天体物理学家）ASTROPHYSICIST：!@#$!@_INE DUPONT
（医生）DOCTOR：#@!7*B!T# @ARC_
（安保官）SECURITY：%^+*( )^*%? 
（科学家）SCIENTIST：^-*( *OG(*
（生物学家）BIOLOGIST：&*%@)-£ _£*^M
（通讯官）COMMS：!@#$!@Y )*C^%ON
（飞行员）PILOT：^L*_ $@*A(
（技术员）TECHNICIAN：_S*_C K_Z_V
（厨师）CHEF：!@#$!R$ M(C^%
（少尉）ENSIGN：C!@# £O(%$)`,
      type: "inbox",
      links: "06-DU-M",
    },
    MANIFESTATION: {
      id: "MANIFESTATION",
      content: `（屠夫）BUTCHER：666 666
（混沌引擎）CHAOSENGINE：666 666
（恶魔猎手）DEMONHUNTER：666 666
（野蛮人）BARBARIAN：666 666
（术士）WARLOCK：666 666
（女巫）WITCH：666 666
（祭品）SACRIFICE：666 666
（圣骑士）PALADIN：666 666
（骑士）KNIGHT：666 666
（愚者）FOOL：666 666
（侍从）SQUIRE：666 666
（铁匠）BLACKSMITH：666 666
@devil2: 死灵法师（NECROMANCER）：0
@devil2: 召唤者（SUMMONER）：你`,
      type: "inbox",
      theme: "danger",
      hasDevil2Content: !0,
    },
    SALVATION: {
      id: "救赎（SALVATION）",
      content: `发件人：未知来源
收件人：调查员（INVESTIGATOR）[已隐去]

你正站在悬崖边缘，调查员。前方的道路通向野兽的腹地，一个由阴影和被遗忘的恐怖构成的迷宫。现在已无法回头。你真的准备好面对你将遭遇的一切了吗？

你现在可以使用命令 dir /admin 来访问被锁定的文件。

此功能受密码保护。密钥的第二部分是 DEMON。
你已知道第一部分。

祝你好运。

@devil:
@devil: 在你将去之处，没有运气可言。`,
      type: "inbox",
      hasDevilContent: !0,
    },
    "1009-TR-ZJ": {
      id: "1009-TR-ZJ",
      content: `主题：异常探测
日期：10月9日

我们探测到一个来自第七区（Sector 7）的信号。
该信号似乎是人工的。
解密密钥片段：“ALPHA-...”
@devil:
@devil: 是你把我们叫来的。然后你又想关上盖子。

@note: 元数据中提及了一些日志，其中一份已损坏：
@note: file:????-LOG-SC
@note: file:1010-LOG-SC
@note: file:1010-LOG-RR
`,
      type: "text",
      hasDevilContent: !0,
      links: ["1010-LOG-SC", "1010-LOG-RR", "1009-LOG-SC"],
    },
    CONCLUSION: {
      id: "CONCLUSION",
      content: `任务状态：失败

空间站的驻站人员已全军覆没。

那个“异常”并非信号，而是一场入侵。那些极具危险性且具有寄生性的外星样本已突破空间站。

你已拼凑出这场悲剧的碎片，但故事似乎仍有漏洞。

伦尼（Lenny）和亚历克斯（Alex）到底发生了什么？货舱（cargo bay）为何爆炸？杰姬（Jackie）究竟在做什么？
@devil:
@devil: 我很享受将伦纳德（Leonard）撕碎的过程。我品味着每一滴眼泪，每一次血肉的撕裂。

我不该这么做，这超出了协议范围，但有太多未解之谜。

完成驻站人员名册（manifest），你将获得主机（mainframe）的访问权限。

请谨慎行事。
@devil:
@devil:
@devil: 太迟了。

祝你好运。`,
      type: "inbox",
      hasDevilContent: !0,
    },
    "1009-LOG-IK": {
      id: "1009-LOG-IK",
      content: `日志条目
用户：技术员（TECHNICIAN）科兹洛夫（KOZLOV）

日期：10月9日

漫游车已返回空间站。然而，由于它采集的岩石样本散发出一些异常频率，&S已下令将其留在外部过夜作为隔离措施。我已设置好警戒线和监控设备。

<i>给自己备注：记得向人力资源部反映我名字的拼写错误。因为这个错误，我至今仍未收到薪水。</i>
`,
      type: "text",
    },
    "1009-LOG-JD": {
      id: "1009-LOG-JD",
      content: `日志条目
用户：杜邦博士（Dr. DUPONT）

日期：10月9日

^&%@) )@*!!e)( _$) 彩虹桥（Bifröst） $I@@*(@_ar!) the o^her s1de (*)re!* 
(&$te_ I Q@)_ ()&h)*)-e)) (&a()^r*) (&t()@* tita*ium b*& ^@!i*(^^ 

`,
      type: "text",
    },
    "1010-LOG-JD": {
      id: "1010-LOG-JD",
      content: `日志条目
用户：杜邦博士（Dr. DUPONT）

日期：10月10日

^&%@) )@*!!e)( _$) received（接收到） $I@@*(@_ar!) energy（能量） (*)re!* 
(&$te_ I Q@)_ ()&h)*)-e)) (&a()^r*) (&t()@* caution（谨慎） b*& ^@!i*(^^ 

@devil: 恶魔猎手（demon hunter）不想让你知道真相。还是说她害怕真相？

`,
      type: "text",
      hasDevilContent: !0,
    },
    "1009-LOG-LM": {
      id: "1009-LOG-LM",
      content: `日志条目
用户：厨师（CHEF）伦纳德·麦考伊（LEONARD MCCOY）

日期：10月9日

口粮库存盘点完成。所有食物储备均已清点，且数量处于预期范围内。为了庆祝漫游车返回，我为全体驻站人员准备了一顿特别的晚餐。希望牛排能及时解冻。`,
      type: "text",
    },
    "01-GR-99": {
      id: "01-GR-99",
      content: `@ &M 的住处（quarters）一片狼藉。文件、吃了一半的营养糊包装袋，以及被丢弃的设备散落在每一个表面上。一颗奇怪的黑曜石球体静静地放在由书籍堆成的临时祭坛上，发出低沉而有节奏的嗡鸣声。
        

@ 当你注视着它时，这个球体随着内部的光芒脉动，越来越亮，直到伴随着一声清脆的裂响，它猛然裂开。

@devil: 我要来了。'`,
      type: "audio",
      hasDevilContent: !0,
    },
    "02-GR-0": {
      id: "02-GR-0",
      content: `@ 那颗深色的球体如今已经裂开，释放出一缕纤细、缥缈的雾气。
        

@ 它盘旋扭动，寻找着逃离的出口，最终钻进了通风口（air vent）。
        

@ 随着一声轻微的嘶响，那团雾气渗入通风管道（vent），消失在空间站的通风系统之中，似乎正朝着 <b>地表（surface）</b> 前进。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "1010-LOG-LM": {
      id: "1010-LOG-LM",
      content: `日志条目
用户：厨师（CHEF）伦纳德·麦考伊（LEONARD MCCOY）
 
日期：10月10日 

口粮库存检查。所有食物……我的头像一颗超新星爆炸……像一块红热的、辛辣的、辣椒……牛排。他们看我的眼神很奇怪。她看我的眼神很奇怪。还有另一个。他们知道。达娜（Dana）、杰姬（Jackie）和那个医生（doc），他们的眼睛……太愤怒了。在审判我。我……不是人类。蜥蜴人（Lizard people），他们取代了她们。女人，尾巴，鳞片（scale）。
覆盖着鳞片（covered in scales）
    覆盖着鳞片
            覆盖着鳞片
                    覆盖着鳞片
                            覆盖着鳞片
                                    覆盖着鳞片
                                            覆盖着鳞片
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered


  @devil:夜色中的鳞片，爬行类的寒光，


  @devil:恶魔的触碰，一场骇人的噩梦。


  @devil:蜥蜴（Lizards） 潜行，毒蛇般的凝视，


  @devil:在末日降临之时，诅咒你的灵魂。
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove


  @devil:听屠夫（butcher）的话，他说出了真相。`,
      type: "text",
      hasDevilContent: !0,
    },
    "1009-LOG-BV": {
      id: "1009-LOG-BV",
      content: `日志条目
用户：安保官（SECURITY OFFICER）巴里·万斯 （BARRY VANCE）

日期：10月9日

正在审查空间站的安全协议。只要房间处于无人状态，就可以访问实时监控画面，这在威胁检测与响应方面具有显著优势。然而，在确保空间站安全与侵犯驻站人员隐私之间始终存在灰色地带。这是一个持续的伦理难题。我们应该在哪里划定界限？`,
      type: "text",
    },
    "1010-LOG-BV": {
      id: "1010-LOG-BV",
      content: `日志条目
用户：安保官（SECURITY OFFICER）巴里·万斯 （BARRY VANCE）

日期：10月10日

我昨天的担忧正在被证实。今天早上，我试图访问 &M 住处（quarters）的实时监控(live feed)，但无法连接。然而，我确切地知道 &M 当时在研究实验室（research lab）里。这意味着有其他人进入了 &M 的房间，而系统将其记录为占用状态。这正是这些协议存在的必要原因；为了识别未经授权的存在并维持安全。`,
      type: "text",
    },
    "1009-LOG-ZJ": {
      id: "1009-LOG-ZJ",
      content: `日志条目
用户：通讯官（COMMS OFFICER）扎卡里·杰克逊（ZACKARY JACKSON）

日期：10月9日

这套通讯系统太古老了！真不敢相信我们还在用这个老古董。我试图将关于这一发现的传输（transmission）发送给中央指挥部，但信号一直在中断。我晚点再试试，但我不抱太大希望。`,
      type: "text",
    },
    "1010-LOG-ZJ": {
      id: "1010-LOG-ZJ",
      content: `日志条目
用户：通讯官（COMMS OFFICER）扎卡里·杰克逊（ZACKARY JACKSON）

日期：10月10日

向中央指挥部发送传输没有成功（No luck）。信号持续中断。作为预防措施，我正在将传输尝试记录（transmission attempts）和相关的公开日志条目上传到主机（mainframe）。`,
      type: "text",
    },
    "1009-LOG-AR": {
      id: "1009-LOG-AR",
      content: `日志条目
用户：飞行员（PILOT）亚历克斯·罗根（ALEX ROGAN）

日期：10月9日

又是如常的一天/当一天和尚撞一天钟（Another day, another dollar）。或者，在太空中，又是新的一天，又是一……什么也没有。每个人都在忙着处理那个该死的信号和那些“样本”，不管它们是什么。

说真的，是我的错觉吗，还是最近这些字谜真的变的很阴暗？“FLESH（血肉）”和“CURSE（诅咒）”可不是什么令人振奋的答案。我无聊透了。


  @devil: "ABYSS", "AGONY", "ALARM", "ALIEN", "ANGER", "ANGST", "AWFUL", "BEAST", "BLACK", "BLADE",
  @devil: "BLEED", "BLIND", "BONES", "BOMBS", "BREAK", "BURNT", "CAGES", "CHAOS", "CHOKE", "CLAWS",
  @devil: "CREEP", "CRUEL", "CURSE", "DECAY", "DEMON", "DEVIL", "DIRTY", "DREAD", "DYING", "ENEMY",
  @devil: "ERROR", "EVILS", "FEARS", "FEVER", "FIEND", "FIGHT", "FILTH", "FLAME", "FLESH", "FORCE",
  @devil: "GHOST", "GHOUL", "GIANT", "GLOOM", "GRAVE", "GRIEF", "GRIMY", "GROSS", "GUILT", "HATES",
  @devil: "HAUNT", "HAVOC", "HELLS", "HUMAN", "HURTS", "KNIFE", "LEAVE", "LIMBO", "LURKS", "MADLY",
  @devil: "MAGIC", "MANIC", "METAL", "MIGHT", "NASTY", "NERVE", "NOISE", "OMENS", "OUTER", "PAINS",
  @devil: "PANIC", "PERIL", "POWER", "PRAY", "PROWL", "PULSE", "QUAKE", "QUIET", "RABID", "BLOOD",
  @devil: "RAGES", "RAPID", "RAZOR", "REACT", "ROBOT", "ROUGH", "RUINS", "SCARE", "SCARS", "SCARY",
  @devil: "SHADE", "SHAKE", "SHAME", "SHARP", "SHOCK", "SHOOT", "SHOUT", "SICKS", "SIREN", "SLAIN",
  @devil: "SLAVE", "SLEEP", "SLIME", "SMASH", "SMOKE", "SNAKE", "SNARL", "SOUND", "SPACE", "SPELL",
  @devil: "SPIKE", "SPINE", "SPOIL", "STALK", "STARE", "STEAL", "STING", "STORM", "STRIP", "STUCK",
  @devil: "SWARM", "TAINT", "TEETH", "THIEF", "THORN", "TOMBS", "TOXIC", "TRACK", "TRAPS", "TRIAL",
  @devil: "TRICK", "TROLL", "UGLY", "UNDER", "UPSET", "VAPOR", "VENOM", "VILES", "VIRAL", "VIRUS",
  @devil: "VOIDS", "WASTE", "WATCH", "WEIRD", "WHINE", "WITCH", "WORRY", "WORSE", "WORST", "WOUND",
  @devil: "WRATH", "WRECK", "WRONG"

`,
      type: "text",
      hasDevilContent: !0,
    },
    "1010-LOG-AR": {
      id: "1010-LOG-AR",
      content: `日志条目
用户：飞行员（PILOT）亚历克斯·罗根（ALEX ROGAN）

日期：10月10日


&D 和 &M 行为古怪。总是待在一起，窃窃私语。还有 &D，她为什么非得穿成那样去上班？那是研究实验室（research lab），不是时装秀。而且他们总是最早进去，最晚出来。他们到底在里面干什么？`,
      type: "text",
    },
    "1009-LOG-ED": {
      id: "1009-LOG-ED",
      content: `日志条目
用户：伊丽莎白·达西医生（DR. ELIZABETH DARCY）

日期：10月9日

我收到了几位女性驻站人员关于 &L 和 &C 行为的投诉。这正成为一个严重问题，我认为 &S 需要介入，以防事态进一步升级。`,
      type: "text",
    },
    "1010-LOG-ED": {
      id: "1010-LOG-ED",
      content: `日志条目
用户：伊丽莎白·达西医生（DR. ELIZABETH DARCY）

日期：10月10日

今天我观察到 &M 的情感和行为存在令人担忧的不稳定性。他的情绪变化迅速，且与外部刺激不成比例。虽然我不是精神科医生，但鉴于其紊乱状态的突发性和严重性，我注意到他可能处于精神病？（thought disorder）的前驱期。进一步的观察和专业医学评估势在必行。


@devil: 祭品（sacrifice）唤醒了术士（warlock）。`,
      type: "text",
      hasDevilContent: !0,
    },
    "1009-LOG-MG": {
      id: "1009-LOG-MG",
      content: `日志条目
用户：迈克尔·格里姆博士（DR. MICHAEL GRIMM）

日期：10月9日

其中的含义！哦，这辉煌、令人心醉神迷的意义！我们做到了！我们真的、毫无疑问地做到了！这不仅仅是一个信号；这是来自宇宙的交响乐，是一个低语的承诺，承诺着超越我们最疯狂梦想的无数奇迹！想想看，我们正站在回答人类最古老问题的悬崖边上，正站在打破我们宇宙孤独幻觉的边缘！这一发现不仅仅关乎科学；它更是一场精神觉醒，是对生命本身无限潜力的证明！宇宙生机勃勃，充满活力，而我们终于，终于开始倾听了！`,
      type: "text",
    },
    "1010-LOG-MG": {
      id: "1010-LOG-MG",
      content: `日志条目
用户：迈克尔·格里姆博士（DR. MICHAEL GRIMM）

日期：10月10日

又是新的一天，又是一篇日志条目。协议规定我必须记录我的观察，但我发现自己越来越……沉默寡言。有些敏感事宜，我不愿记录在这些日志中，尤其是在当前氛围下。对于谁可能在阅读，再怎么小心也不为过。`,
      type: "text",
    },
    "1009-LOG-CH": {
      id: "1009-LOG-CH",
      content: `日志条目
用户：卡尔·霍尔登（CARL HOLDEN）

日期：10月9日

好了，现在是我对这个空间站上女士们的专家评估时间。


&J？ 绝对的10分。她身上有那种俏皮的火花，总是能和你开玩笑，而且毫无疑问懂得如何欣赏男人。


&D？ 强劲的8分。毫无疑问，很有女人味，但有点过于严肃了。不过，我还是喜欢她戴眼镜的科学家范儿，我敢打赌她在床上一定非常棒。

至于 &E？ 5分。够漂亮，但她有种“鸡妈妈”的感觉，而且穿得好像对乐趣过敏一样。不是我的菜。
`,
      type: "text",
    },
    "1010-LOG-CH": {
      id: "1010-LOG-CH",
      content: `日志条目
用户：卡尔·霍尔登（CARL HOLDEN）

日期：10月10日


&J 还在痴迷于那些该死的石头。我发誓，她花在石头上的时间比花在真人身上的还多。她和那些泥土到底有什么毛病？她是个天体什么学家，又不是地质学家。而且我做了那个钛制容器来保护她的小玩意儿，也没有得到一句像样的感谢。我得想办法让她放松点，让她开口说话。也许喝几杯，施展一点魅力……她就会把她藏着的一切都说出来。`,
      type: "text",
    },
    "12-BR-99": {
      id: "12-BR-99",
      content:
        "@ 浓烈刺鼻的烟雾弥漫在空气中，令人窒息。鲜血滴落在金属地板上的有节奏的滴答声在房间中回荡。可以看到并听到蠕动着的、凝胶状的蛞蝓（slugs），它们黏滑的身体在扭动时发出湿漉漉的、令人作呕的声音。",
      type: "audio",
    },
    "WEATHER-PATTERNS": {
      id: "天气模式（WEATHER-PATTERNS）",
      content: `执行报告：天气模式 - 行星地表

本报告详细描述了在该行星地表观测到的极端气象条件。该行星绕其恒星的公转周期极短，导致季节异常短暂且多变。

冬季以严重的冰雪天气为特征，气温频繁骤降至-50°C。这一时期的特点是广泛的冰层形成和极端寒冷。

夏季则形成鲜明对比，气温飙升至100°C以上。这个季节由一系列危险现象主导，包括：
- 酸雨（Acid Rain）：频繁且具有腐蚀性的降水事件。
- 沙尘暴（Dust Storms）：广泛且强烈的大气尘埃浓度，严重影响能见度和空气质量。
- 飓风（Hurricanes）：强大的气旋风暴，风速高，具有破坏潜力。
- 强风（Violent Winds）：持续且极端的风型，能够造成重大的结构损坏和侵蚀。

这些条件要求任何地表作业都必须具备坚固的基础设施和专门的防护措施。`,
      type: "mainframe",
    },
    "SIGNAL-ANALYSIS": {
      id: "信号分析（SIGNAL-ANALYSIS）",
      content: `初步分析：未识别光谱波（UNIDENTIFIED SPECTRUM WAVES）
作者：工程师（ENGINEER）罗伯特·瑞安（Robert Ryan）

对漫游车探测到的异常光谱波的初步分析表明，其模式极不寻常。该数据既不符合已知的自然现象，也不具备人工信号或随机噪音的特征。相反，波模式复杂且自组织的结构强烈表明，存在一个具有智能、以能量为本的实体。

进一步调查揭示了一个令人不安的关联：当漫游车穿越 <b> 彩虹桥（Bifrost） </b> 时，该实体的光谱特征似乎发生了融合或“交叉”。这表明两者之间存在直接的相互作用，可能是同化或整合，而不仅仅是探测。这一发现的含义深远，需要立即进行高层级审查。`,
      type: "mainframe",
    },
    "BACTERIA-ANALYSIS": {
      id: "细菌分析（BACTERIA-ANALYSIS）",
      content: `科学论文：细菌分析（BACTERIA-ANALYSIS）
作者：达娜·罗根博士（DR. DANA ROGAN）

标题：开普勒-186f（Kepler-186f）酸雨水坑中的嗜极微生物：生存机制研究
Extremophilic Microorganisms in Acid Rain Puddles on Kepler-186f: A Study of Survival Mechanisms

摘要：本文研究了在开普勒-186f（Kepler-186f）地表（surface）由腐蚀性酸雨形成的短暂水坑中发现的细菌的微生物多样性及生存策略。尽管在《执行报告：天气模式》中详述了极端pH值和波动的环境条件，初步分析仍揭示了一个丰富的嗜极细菌（extremophilic bacteria）群落。本研究旨在识别使这些微生物能在如此恶劣环境中繁衍生息的关键生理和遗传适应机制，为理解行星类似物中生命的韧性提供见解。

引言：开普勒-186f（Kepler-186f）的地表（surface）为生命提供了一个独特且充满挑战的环境，其特征是频繁且高度腐蚀性的酸雨降水。这些事件创造了具有极端pH值的短暂水坑，对大多数陆地生命形式构成重大生物危害。然而，观测表明在这些酸性溶液中存在微生物活动。本文旨在描述栖息于这些水坑中的细菌群落，并阐明它们用于生存的机制。

方法论：酸雨水坑水样是在降水事件（precipitation events）后立即从不同地表位置采集的。pH值在现场测量，样品在受控条件下运输，以便立即进行培养和基因测序。利用16S rRNA基因测序来识别细菌分类群。进一步分析包括用于形态表征的显微镜检查和用于评估代谢途径的生化测定。`,
      type: "mainframe",
    },
    "CHEMICAL-MAKEUP": {
      id: "化学成分(CHEMICAL-MAKEUP)",
      content: `科学论文：化学成分(CHEMICAL-MAKEUP)
作者：达娜·罗根博士（DR. DANA ROGAN）

标题：开普勒-186f的大气成分：气态和颗粒物的光谱分析
Atmospheric Composition of Kepler-186f: A Spectroscopic Analysis of Gaseous and Particulate Matter

摘要：本研究利用先进的地基和轨道光谱数据，对开普勒-186f（Kepler-186f）的大气成分进行了全面分析。我们的发现揭示了一种复杂的大气环境，其特征是二氧化硫（SO₂）、二氧化碳（CO₂）和氮气（N₂）浓度较高，以及显著水平的悬浮颗粒物。此外，还检测到微量的甲烷（CH₄）和水蒸气（H₂O），主要存在于局部区域。SO₂ 和 CO₂ 强吸收线的存在与该行星地表观测到的极端天气模式和酸性降水相关，表明这是一个高度反应性和动态的大气系统。本研究为理解系外行星大气的地球化学（geochemsitry）和天体生物学（astrobiological）的潜力提供了关键数据。

引言：开普勒-186f（Kepler-186f）的大气在调节其极端地表条件（包括剧烈的温度波动和腐蚀性酸雨）方面发挥着关键作用。先前的报告已记录了这些大气现象的宏观效应，但对底层化学成分的详细理解仍然不清楚（elusive）。本文旨在表征开普勒-186f（Kepler-186f）大气中的主要气体种类和颗粒物，为未来的气候和宜居性模型奠定基础。

方法：大气数据通过轨道遥感与地基望远镜光谱相结合，在12个月的时间内收集。轨道仪器提供了宽谱吸收和发射数据，而配备高分辨率光谱仪的地基望远镜则专注于特定波长范围以识别分子特征。数据使用成熟的辐射传输模型进行处理，以推断已识别气体的柱密度和混合比。颗粒物分析涉及散射模型和高空大气探测器的直接采样。

结果与讨论：光谱分析证实了二氧化硫（SO2）和二氧化碳（CO2）作为主要大气成分的普遍存在，其浓度随季节变化而显著变化。通过残余大气压计算和探测器样品的质谱分析推断出氮气（N2），表明它是主要成分。在疑似有地表下（subsurface）地热活动的区域观测到甲烷（CH4）的局部增强，而水蒸气（H2O）则是短暂检测到的，通常与极端温度变化后的大气混合事件相关。主要由硫酸盐气溶胶和硅酸盐尘埃组成的颗粒物表现出较高的光学厚度，显著影响行星反照率并促成观测到的沙尘暴。SO2水平与酸雨事件之间的强相关性强化了大气成分与地表地球化学之间的化学联系。

结论： 开普勒-186f（Kepler-186f）的大气是一个高度活跃的化学环境，以硫和碳化合物为主，深刻影响着其地表条件。对其气态和颗粒物组成的详细描述为理解极端系外行星大气动力学提供了重要见解，并作为天体生物学研究的关键数据集。未来的研究将侧重于大气反应的动力学模型以及在这种独特环境中化学合成途径的潜力。`,
      type: "mainframe",
    },
    "GASTROPOD-SECRETION-ANALYSIS": {
      id: "腹足类分泌物分析（GASTROPOD-SECRETION-ANALYSIS）",
      content: `科学论文：腹足类分泌物分析（GASTROPOD-SECRETION-ANALYSIS）
作者：迈克尔·格里姆博士（DR. MICKEL GRIMM）

标题：未识别的类腹足动物分泌物：地球化学分析与生物学意义
Unidentified Gastropod-like Secretion: Geochemical Analysis and Biological Implications

摘要：本文对在尼福尔海姆（Niflheim）研究前哨站更南端的地下环境中发现的一种异常生物分泌物进行了初步分析。该物质类似腹足动物粘液，表现出极强的酸性pH值，并具有将硅酸盐岩石染成鲜艳深紫色的独特性质。光谱学和遗传学分析迄今未能将其起源与任何已知的陆地或先前编目的极端嗜好性腹足动物物种联系起来，这表明存在一种新的生物来源或前所未有的适应性。这一发现对开普勒-186f（Kepler-186f）的生物多样性提出了重要问题，并为天体生物学（astrobiological）研究提供了新途径。

引言：南部地下区域的勘探调查发现了一种奇特的生物分泌物。这种粘稠物质，虽然表面类似于腹足动物产生的粘液，却呈现出几个极不寻常的特征，值得立即进行彻底调查。它的存在对于当前关于开普勒-186f（Kepler-186f）本土生命形式的假设提出了挑战。

方法：从各种岩石表面收集分泌物样本并汇集进行分析。使用专用探针测量pH值。进行地球化学测定以确定元素组成。采用光谱技术（紫外-可见光、傅里叶变换红外光谱、拉曼光谱）来表征有机分子结构。尝试培养潜在的来源生物，并对从粘液中提取的遗传物质进行16S rRNA和宏基因组测序。还对被分泌物染色的岩石样本进行了化学变化分析。

结果与讨论：该分泌物始终呈现极端酸性pH值，平均为1.2，远超已知生物分泌物的典型范围。其最显著的物理特性是其强大的染色能力，能使暴露的硅酸盐岩石表面呈现稳定的深紫色。初步地球化学分析表明其含有复杂的有机酸和新型金属有机化合物基质。光谱数据显示了独特的发色团（chromophores），负责产生紫色色素，与已知的生物色素不同。关键的是，广泛的基因测序未能在任何已建立的生物数据库中找到匹配项，包括之前开普勒-186f（Kepler-186f）考察队汇编的数据库。这表明要么是一个高度分化的进化谱系，要么是一个全新的生命界。缺乏相关的宏观生物进一步使来源的识别复杂化。

结论：这种未识别的类腹足动物分泌物代表了一个深刻的生物学异常现象。其极端酸性、独特的染色特性和无法识别的生物起源强调了进一步调查的必要性。这一发现对于理解极端微生物生物学的极限以及系外行星上新型生化途径的潜力具有重要意义。`,
      type: "mainframe",
    },
    "BRYOPHYTA-ANALYSIS": {
      id: "苔藓植物分析（BRYOPHYTA-ANALYSIS）",
      content: `科学论文：苔藓植物分析（BRYOPHYTA-ANALYSIS）
作者：迈克尔·格里姆博士（DR. MICHAEL GRIMM）

标题：内生苔藓（Endolithic Bryophyta）：开普勒-186f（Kepler-186f）地下环境中极端苔藓的研究
Endolithic Bryophyta: A Study of Extremophilic Mosses in Subterranean Environments of Kepler-186f

摘要：本文详细介绍了在开普勒-186f（Kepler-186f）上 尼福尔海姆（Niflheim） 研究前哨站以南的洞穴地下极端环境中发现的一种新型苔藓植物（Bryophyta）物种，并进行了初步分析。这些内生苔藓（endolithic mosses）表现出对弱光、高矿物质含量和波动大气条件的显著适应性，暗示着独特的代谢途径和细胞结构。初步光谱分析揭示了不寻常的叶绿素变体以及潜在的化学合成能力。由于不同光波长的原因，这里的植物生命呈现出不同的色彩。这一发现挑战了现有植物极端环境适应性的范式，并为天体植物学（astrobotany）以及在地外环境中寻找生命提供了深远的意义

引言：尼福尔海姆（Niflheim） 研究前哨站以南的地下洞穴系统长期以来被认为具有地质学意义，但在生物学上被认为是惰性的（inert）。然而，最近的勘探任务发现了一个繁荣生态系统，其中以一种此前未被编目的苔藓植物（Bryophyta）物种为主。本文介绍了从收集的样本中获得的初步发现，重点关注了它们对这种极端栖息地的生化适应性。

方法：从洞穴系统内不同深度和位置收集苔藓植物（Bryophyta）样本，确保涵盖具有代表性的环境条件横截面。采用显微镜检查、扫描电子显微镜（SEM）和透射电子显微镜（TEM）进行形态学和超微结构分析。使用色素提取和高效液相色谱法（HPLC）来鉴定叶绿素和类胡萝卜素谱。进行光谱分析（傅里叶变换红外光谱FTIR、拉曼光谱）以评估分子组成和潜在的代谢标记。在每个采样点记录环境参数，包括光照强度、温度、湿度和基质矿物成分。

结果与讨论：该苔藓植物表现出（Bryophyta）紧凑的垫状（cushion-like）生长习性，这是耐胁迫物种的典型特征。超微结构分析揭示了即使在光照最少的区域，细胞壁也有异常增厚和高密度的质体（plastids）。HPLC数据表明存在新型叶绿素形式，与已知的陆地叶绿素a和b不同，暗示其在弱光谱光照下具有增强的光子捕获能力或替代的能量获取机制。光谱数据进一步支持了化学合成活性的假设，显示出硫和铁氧化途径的迹象。这些苔藓对基质中重金属浓度的耐受性显著，远超通常对陆地苔藓植物有毒的水平。

结论：在尼福尔海姆（Niflheim）以南洞穴中发现的石内苔藓植物（Bryophyta）代表了一项重要的生物学发现。其对极端地下条件的独特适应性，包括新型光合色素和潜在的化学合成能力，为了解植物生命的极限提供了宝贵的见解。需要进一步研究以充分阐明其代谢途径、遗传构成以及在生物修复或作为地外生命模型方面的潜在应用。这一发现强调了即使在最恶劣的环境中也可能存在巨大、未被探索的生物多样性。`,
      type: "mainframe",
    },
    "1009-LOG-DR": {
      id: "1009-LOG-DR",
      content: `日志条目
用户：达娜·罗根博士（DR. DANA ROGAN）

日期：10月9日

对光谱波的分析（spectrum waves）持续产生着迷人却又令人困惑的结果。
外星信号展现出非赫兹特征，暗示了一种远超我们当前理解范围的通信形式。
将此与上次漫游车入侵的数据（特别是在该地点附近的异常能量读数）相关联，强化了局部时空扭曲的假设。

这些会是初生的量子传送门（quantum portals）吗？如果是，其影响将是惊人的。我们必须极其谨慎地进行，但发现的潜力是巨大的。`,
      type: "text",
    },
    "1010-LOG-DR": {
      id: "1010-LOG-DR",
      content: `日志条目
用户：达娜·罗根博士（DR. DANA ROGAN）

日期：10月10日

我对&M越来越担心了。自从我分享了关于非赫兹信号和量子传送门（quantum portals）潜力的最新发现后，据我所知，他就没离开过研究室（research room）。他的奉献精神令人钦佩，但这种强度感觉……不太健康。`,
      type: "text",
    },
    "1010-LOG-IK": {
      id: "1010-LOG-IK",
      content: `日志条目
用户：技术员（TECHNICIAN）科兹洛夫（KOZLOV）

日期：10月10日

今天早上我检查了漫游车的位置，发现了从车旁延伸出去的新鲜脚印。这非常反常。昨晚没有人获准出舱。

我怀疑有人试图干扰我们的发现。老实说，我敢打赌是&M。自从信号事件以来，他的行为一直鬼鬼祟祟的。


@devil: 术士（Warlock）察觉到我们了。铁匠（Blacksmith）本该听从他的警告。`,
      type: "text",
      hasDevilContent: !0,
    },
    "1009-LOG-SC": {
      id: "1009-LOG-SC",
      content: `日志条目
用户：指挥官（COMMANDER）克罗斯（CROSS）

日期：10月9日

今早我们向地表发射了一辆漫游车，它接收到了一个奇怪的信号。这个信号与我们以往遇到的任何东西都不一样。我们……[传输中断]。
@note: 日志虽然突然中断了，但与此同时，我们成功获取了空间站内监控视频的转录文本。视频画质不太理想，但音频是清晰的。这些转录文本已经是我们能拿到的最好版本了。它们遵循一种奇怪的命名规则，例如：file:01-BR-R-S
 `,
      type: "text",
      links: ["01-BR-R-S"],
    },
    "01-KI-L": {
      id: "01-KI-L",
      content: `@ 锅碗瓢盆的碰撞声。有节奏的研磨声。


&L: <i>(轻声哼唱)</i> 再来一点……完美。


@ &L 小心地将一种白色粉末包进听起来像是铝箔纸的东西里，然后一口气吸了进去。


&L: 麦考伊先生（Mr. McCoy），这将是一个美好的轮班。


@devil: 我同意，屠夫（Butcher）。我们合作得很好。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "01-RO-A-D": {
      id: "01-RO-A-D",
      content: `&A: 我只是觉得自己很没用，达娜（Dana）。大家都指望你，首席科学官（chief science officer），来破解这个信号。而我呢？我只是个飞行员。我在这里有什么用？


&D: 亚历克斯（Alex），别这么说。你不是没用。我们各有各的职责。而现在，我的职责是分析这些数据。你的职责是……嗯，做好你自己。


&A: "做好我自己"？这到底是什么意思？就是坐在这里，看着你大显身手，而我就算需要撤离，也只是被降级去开一辆“空中出租车”？


&D: 意思是你在维持空间站的运转，你在保护我们的安全。意思是你是我的丈夫，我需要你的支持，而不是你的自怨自艾。我们是一个团队，亚历克斯（Alex）。一直都是。


&A: 你要去哪儿？我们还没谈完。


&D: 亚历克斯（Alex），我得走了，迈克尔（Michael）会在 <b>研究实验室（research lab）</b> 等我。


&A: 哦，我明白了。我明白他是怎么看你的。我明白这里每个男人是怎么看你的。


&D: 你这话是什么意思？你不信任我吗？我是你的妻子，亚历克斯（Alex）！我爱的是你这个人。


&A: 我回去睡觉了。你爱干嘛干嘛去吧。


&D: 亚历克斯（Alex），你真是不可理喻！我不知道你到底想让我怎么样。我必须走了。`,
      type: "audio",
      links: ["02-RE-D-M", "02-RO-A"],
    },
    "01-CA-I-M": {
      id: "01-CA-I-M",
      content: `&I: 好了，漫游车已安全停入舱位。只需运行诊断程序。


@ 艾萨克（Isaac）眼角余光瞥见一个模糊的影子在移动。


&I: Dr.格里姆（Dr. Grimm）？是你吗？


@ 影子迅速窜开，消失在空间站更黑暗的角落里。他们似乎从漫游车上带走了什么东西。


&I: ……Dr.格里姆（Dr. Grimm）？……迈克尔（Michael）？`,
      type: "audio",
      links: ["1009-LOG-MG", "1010-LOG-MG"],
    },
    "01-BR-R-S": {
      id: "01-BR-R-S",
      content: `@ 静电噪音噼啪作响，随后略微清晰。


&S: 那么你觉得这个信号是怎么回事，鲍比（Bobby）？


&R: 指挥官（Commander），恕我直言，我倾向于认为这是漫游车又一次故障。我们以前也遇到过类似的幽灵读数。


&S: 这不是幽灵，鲍比（Bobby）。这是……连贯的。有结构的。不是随机噪音。


&R: 或者这是一种新形式的大气干扰，指挥官（Commander）。自从上次太阳耀斑以来，漫游车的数据完整性就一直时好时坏。


&S: 你不觉得对于一个反馈回路来说，这太精确了吗？


&R: 这个模式确实不寻常，但可能是传感器阵列内部复杂的反馈回路。


&S: 不管怎样，样本今早就要卸下来了。它们也许能告诉我们更多信息。Dr.杜邦（Dr. Dupont）很快就会检查它们。


&R: 那些博士们都活在自己的世界里。万一我们只是在看自己想看的东西呢？


&S: 我们不是在"看自己想看的东西"，工程师（Engineer）。我们是在探测一种现象。我希望你你也这么看待它。


&R: 是，指挥官（Commander）。我会重新校准二级传感器。但我的初步判断不变。


&S: 扫描完成后告诉我一声，我们好仔细看看。我去找Dr.达西（Dr. Darcy）。


@ 一人离开房间。


@ 一声轻微的咔哒声，随后静电干扰声再次响起，越来越大，直至寂静。



@note: 这段音频似乎来自舰桥（bridge）。
@note: 当天晚些时候，我找到了空间站另一区域的一段音频文件：file:03-ME-E-R-S `,
      type: "audio",
      links: ["02-BR-R", "03-ME-E-R-S"],
    },
    "01-GA-B-C-Z": {
      id: "01-GA-B-C-Z",
      content: `@ 餐具碰撞声和模糊的交谈声。


&Z: 哎，今天的口粮包比平时还难吃。


&B: 我真希望我们还有那些冻干草莓，那才是最好吃的。


&Z: 哦，兄弟，别提了。


&C: 你刚才在上面干嘛呢？去了那么久。


&Z: 我就是联系不上外界，克罗斯（Cross）还一直催我向指挥中心报告样本的事。


&C: 那些石头真让我烦透了。他们都表现得像是什么重大发现。不就是些石头嘛。


&B: 这不好说。你得承认它们被带回来时的样子，那种脉动什么的……确实挺怪的。杰姬（Jackie）认为那条裂隙对它们产生了某种影响。


&C: 她这么说了？杰姬（Jackie）还觉得怎么样？她有没有提到我？


&B，试图转移话题：至少这里总算安静了一会儿。


@ 背景中可以听到&D在喊叫。


&C: 安静？我在这儿都能听见罗根（Rogan）老婆的喊声！


&C，点了一支烟：我倒希望达娜（Dana）也能抱怨抱怨我。她挺好看的，那个姑娘。


&Z，恼怒地环顾四周： 有人看见迈克尔（Michael）了吗？自从那个信号出现以来，他就更把自己关在那个<b>研究实验室（research lab）</b>里了。他一直有点怪，跟他的植物说话，但现在他简直像个隐士。


&C，吸了一口烟：是啊，他大概在试着解码外星食谱什么的吧。嘿，伦尼（Lenny）在里面弄那个牛排怎么这么久？我饿死了。


&Z: 大概是在努力让它变得能吃吧。


&B: 你知道吗，我办公室里有瓶相当不错的老世界威士忌。我们晚点应该叫上杰姬（Jackie），可能会很有趣。


&C: 这个主意我赞成！看看能不能把她灌醉，让她放松一点。


&B: 别那样说她，杰姬（Jackie）人挺好的。


&C: 好吧，罗密欧（Romeo），我道歉。就这么定了！别等他在里面做什么吃的了。


&Z: 我留在这儿。迈克尔（Michael）总得什么时候出来找吃的。我真的需要和他谈谈。晚点见，伙计们。


@ 可以听到&B和&C离开房间的声音。另一个人进来，在桌旁与&Z坐在了一起。

@note: 你可以使用命令 label [文件名] [文本] 来给文件添加标签。标签的前75个字符将在列表视图中显示在文件旁边。这应该能帮助你整理思路。
`,
      type: "audio",
      links: ["01-KI-L", "01-RO-A-D", "02-GA-L-Z", "02-SE-B-C"],
    },
    "02-GA-L-Z": {
      id: "02-GA-L-Z",
      content: `@ 餐具碰撞声继续，但谈话声已经减弱。


&Z: <i>(自言自语)</i> 还是不见迈克尔（Michael）的影子。他真的把自己关在实验室里了。希望他没事。


@ 脚步声接近，一个盘子哐当一声被放下。


&L: 你的牛排，扎克（Zack）。花了点时间，但总算做好了。


&Z: 谢了，伦尼（Lenny）。看起来……能吃。你要回厨房（kitchen）了吗？


&L: 是啊，还有准备工作要做。慢用。


@ &L走开了。&Z叹了口气，开始吃。


&Z: <i>(喃喃自语)</i> 这味道太淡了。太淡了。现在要是能来根大麻烟就好了。吃完这个我就去拿我的存货。需要点东西放松一下。


@ 咀嚼声。`,
      type: "audio",
      links: ["03-SE-Z"],
    },
    "02-RE-D-M": {
      id: "02-RE-D-M",
      content: `&M在实验室里，正在研究什么东西。&D进来并坐下。


&M: 达娜（Dana）！你来得正好。你不会相信我发现了什么。听了你昨天说的关于波形的事，我一夜没睡。


&M:  我知道我不该这么做，但我……借了一个样本。我今天早上从漫游车上偷的。艾萨克（Isaac）看见了我，但天很黑，我觉得他不知道是我。


&M: <i>(清了清嗓子)</i> 看。它的矿物结构正在经历某种细胞层面的转变，可以说是一种原生质转化，就像处于胚胎发育的早期阶段。


&M: 我想说的是，它……正在变成一个蛋。


@ &M转过身来，自她进房间后第一次看向&D。


&M: 达娜（Dana）？怎么了？出什么事了？


&D: <i>(强忍泪水，艰难开口)</i> 迈克尔（Michael）……我……我就是受不了……他就是不明白！他从来不听！


&M: 又是你丈夫吗？别让他拖垮你。我见过他整天喝酒。我知道他在这里很无聊，但他确实表现出抑郁的迹象。我很担心他。


&D: <i>(试图转移话题)</i> 你说“偷”是什么意思？


&M: <i>(叹了口气，然后语气变得急切)</i> 达娜（Dana），听我说。我们送过裂隙的那些岩石样本……它们……是活的。而且我不确定我们当初该不该把它们带回空间站。我需要做更多检测，但如果已经太晚了呢？如果我们带回来了什么危险的东西呢？


&M: 我们需要立刻把这个东西隔离起来，但我不确定指挥官（Commander）会不会听。他已经觉得我疯了。还有杰姬（Jackie）。她从哪儿弄来的那些石头。它们不是这个星球上的。我还看见她跟卡尔（Carl）在聊一个什么特殊的盒子……这里还有别的事在发生，我得查清楚是什么。目前这件事只能我们俩知道，好吗？


&M: <i>(停顿，然后叹了口气)</i> 看看你。我觉得你现在也帮不上忙。要不你回去找亚历克斯（Alex），看看能不能把问题解决了？我继续在这里研究。


@ &D点点头，走出了房间。`,
      type: "audio",
      links: ["03-RO-A-D", "03-RE-M"],
    },
    "02-BR-R": {
      id: "02-BR-R",
      content: `@ &R正在听音乐，假装在空中打鼓。


&R: 我喜欢这首歌。


@ &R把音乐开得很大声，从椅子上站起来，开始在房间里跳来跳去。


@ 计算机处理的轻微嗡鸣声，然后是一声提示音。


&R: <i>(气喘吁吁)</i> 终于，分析完成了。这……这真是出乎意料。我得立刻给塞布（Seb）看这个。

@devil:
@devil: 我们必须阻止他，你明白的。那份分析报告不该被人类看到。
@devil:

@ 脚步声匆忙远去。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "01-ME-E-J": {
      id: "01-ME-E-J",
      content: `@ 医疗舱无菌的嗡鸣声。


&J: 谢谢你了，莉比（Libby）。这几个星期……挺难熬的。


&E: 没事的，杰姬（Jackie）。在这地方待久了，谁都会有点憋得慌。情绪低落是正常的。


&J: “低落”说得太轻了。而且那些男人看你的眼神……只会让事情更糟。好像我们就是块肉似的。


&E同情地叹了口气：可不是嘛。他们都是一群发情的猪，不是吗？尤其是当他们以为没人注意的时候。


&J: 没错！真让人受不了。有时候我真想尖叫。


&E: 我们会挺过去的。按处方服用这些药，如果需要倾诉，随时回来找我。或者只是来骂骂那些猪。


@ 一声微弱的轻笑。


&J: 谢谢，莉比（Libby）。我真的很感激。我最好回去工作了，艾萨克（Isaac）在等我。


@ 药瓶被盖上的声音。

@devil:
@devil: 我很感激那些药丸削弱了她的感知。否则，这位恶魔猎手（demon hunter）会难对付得多。

@note: 这段音频日志发生在<b>医疗舱（medical bay）</b>，Dr.达西（Dr. Darcy）和另一名船员之间。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "02-CA-I-J": {
      id: "02-CA-I-J",
      content: `@ <b>货舱（cargo bay）</b>内传来机械有节奏的哐当声。


&I: 你总算来了，杰姬（Jackie）！终于。这些样本可不会自己卸下来，我等了好久了。漫游车刚把它们送上来。

@ 一声疲惫的叹息。


&J: 对不起，艾萨克（Isaac）。Dr.达西（Dr. Darcy）耽搁了我一会儿。你知道她那人的。


&I: 耽搁了你，还是你们在闲聊？听着，我理解，但我们有日程安排。而且这些石头……可不轻。我们动起来吧。


&J: 对。我们……赶紧把这事做完。


@ 箱子被挪动的沉重闷响。


@ 背景中还能听到 &B 和 &C 笑着进入货舱（cargo bay）的声音。

@note: 我给你的终端添加了一条新命令：<b>name</b>。
@note: 你可以用它来完善驻站人员名册，格式为： name [ID] [头衔] [名] [姓]
@note: 你也可以不带参数输入 <b>name</b> 来查看你已经发现的名字列表。
`,
      type: "audio",
      links: ["03-CA-B-C-I-J"],
    },
    "02-RO-A": {
      id: "02-RO-A",
      content: `@ &A 坐在床上，手里拿着一瓶不知名的酒。


&A: <i>(自言自语，低沉而威胁的语气)</i> 迈克尔（Michael）……总是碍事。总是那个“天才”。但不会太久了。我知道万斯（Vance）把他的应急配枪放在军械库哪里。实验室里来一个小小的“意外”……没人会怀疑我。尤其是现在还有这些外星怪事发生的时候。他们会忙着找怪物，没空找凶手。

@devil:
@devil: 只需一点低语，就足以让混沌（chaos）转向对我们有利的方向。
@devil:

@ &A 喝了一大口酒。
`,
      type: "audio",
      hasDevilContent: !0,
      links: ["04-SE-A"],
    },
    "02-ME-E-S": {
      id: "02-ME-E-S",
      content: `@ 空间站生命维持系统轻柔而私密的嗡鸣。


@ 可以听到 &J 在外面乘升降梯下到 <b>货舱（cargo bay）</b>。


&S: 莉比（Libby）……你确定吗？如果有人发现……


@ 一只手轻柔地拂过衣料。


&E: 塞巴斯蒂安（Sebastian），就我们俩。是的，我确定。这种……这种隔绝，会让你看清什么才是真正重要的。我刚才还跟杰姬（Jackie）这么说来着。


&S: 你很重要。比这外面的任何东西都重要。


@ 一声轻柔的轻笑。


&E: 你也是，指挥官（Commander）。总是这么严肃，哪怕是在完全不计后果的时候。


@ 一阵停顿，衣物窸窣声，表明两人靠得很近。


&S: 像这样……

@devil:
@devil: 女巫（witch）用爱的承诺将骑士（knight）引诱到她的床上，这削弱了他，刚刚好。那份温柔钝化了他的剑锋。
@note: 看起来，结合这份记录和某条日志，我们就已有足够线索推断出这个时间谁在 <b>货舱（cargo bay）</b>。
@note: 我就说这么多。我相信你知道该怎么做。
`,
      type: "audio",
      hasDevilContent: !0,
      links: ["02-CA-I-J", "01-ME-E-J"],
    },
    "02-SE-B-C": {
      id: "02-SE-B-C",
      content: `@ 抽屉吱呀一声打开。


&B: 好了，卡尔（Carl），任务完成。一瓶好酒，说到做到。看看我在这个暗格里还找到了什么……


@ 一声低沉的口哨。


&C: 巴里（Barry），你真是个天才！这些东西肯定能让气氛热闹起来。杰克逊（Jackson）不会介意我们借用一下他的存货吧？


&B: 不，他不会介意的。再说了，他上周打牌还欠我的呢。


&C: 带路吧，我的朋友。今晚将会是传奇之夜。


@  玻璃杯碰撞声和抽屉关闭声。脚步声远去。
`,
      type: "audio",
    },
    "03-SE-Z": {
      id: "03-SE-Z",
      content: `@ &Z 在 <b>安保室（security office）</b> 的一个暗格里翻找。


&Z: <i>(咕哝)</i> 在哪儿呢？明明就在这儿的！巴里（Barry）……你这个偷东西的王八蛋！


@ 一声震耳欲聋的爆炸撼动了空间站。


&Z: 那是什么鬼动静？我敢打赌是迈克尔（Michael）干了什么。就算不是他干的，他也会知道是谁干的。


@ &Z 站起身，走上楼梯，朝 <b>研究实验室（research lab）</b> 走去。
`,
      type: "audio",
      links: ["04-RE-Z"],
    },
    "03-KI-L": {
      id: "03-KI-L",
      content: `@ &L 正自顾自地哼着歌。


&L： 啊，难得的安静时刻。是时候稍微……放松一下了。


@ 打火机咔哒一声，随后是轻柔的吸气与呼气声。


&L 满足地叹了口气： 就是这个感觉。正是我需要的。


@ 一声震耳欲聋的爆炸撼动了空间站。


&L： 那是什么鬼动静？！


@ &L 抽完烟，把烟头扔掉。


&L： 我不能一个人待在这儿……药效上来了。那爆炸快把我吓死了。


&L： <i>(惊慌地)</i> 要是不小心点，这会让我的“旅程”变得很糟糕。大家都会在哪儿？


@ &L 走向电梯。


@devil: 去找那只小兔子吧，我的朋友。派对开始了。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["04-BR-D-L"],
    },
    "03-RO-A-D": {
      id: "03-RO-A-D",
      content: `&D： <i>(抽泣)</i> 亚历克斯（Alex），我很抱歉。我……我之前不该把你一个人留在这里。我应该留下来，把我们的谈话说完。


&A： 我也很抱歉，宝贝。我只是觉得自己太没用了，而你却那么……那么完美。我很难控制住自己的嫉妒心。


@ 一声震耳欲聋的爆炸撼动了空间站。


&D： <i>(惊慌地)</i> 那是什么？！


@ &D 转身看向窗外。


&D： 亚历克斯（Alex），外面这是什么？


@ &D 打开窗户想看得更清楚些。


&A： 什么，你看到什么了？

@devil:
@devil: 我看见你了，我亲爱的祭品（sacrifice）。我很快就来找你。
@devil:

&D： 没什么……我……我发誓我刚才看到风在行走……不，没什么，只是那声爆炸吓到我了。


&A： 爆炸是从 <b>货舱（cargo bay）</b> 传来的。我们得去 <b>舰桥（bridge）</b>，那里会安全些。快走，达娜（Dana）！现在！我马上就跟上你！


&D： 为什么？你要去哪儿？


&A： 别担心。我回头再解释。我还有些别的事要先处理，但我会尽快到 <b>舰桥（bridge）</b> 和你会合。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["04-SE-A", "04-BR-D-L"],
    },
    "03-CA-B-C-I-J": {
      id: "03-CA-B-C-I-J",
      content: `@ &B 和 &C 走进货舱（cargo bay），他们的笑声回荡着。


&C： 杰姬（Jackie），亲爱的，是在努力工作，还是几乎没在工作？


&J 恼怒地哼了一声： 霍尔登（Holden），别闹了。我正在卸这些样本。


&B： 哦，得了吧，杰姬（Jackie）。找点乐子又不会怎样。我们这儿有一瓶好威士忌和两个杯子。


&I 沮丧地叹了口气： 你们两个能不能把这……不管是什么……带到别处去？我们得按计划行事。


&C： 艾萨克（Isaac），你总是扫兴。放轻松点！


&J： 说真的，卡尔（Carl），我需要集中注意力。

@devil:
@devil: 而这就是我登场的地方。刚好推过那层面纱（veil）。足以造成裂隙，却又不至于打破屏障。
@devil:

@ 突然，一声震耳欲聋的爆炸撼动了货舱（cargo bay）`,
      type: "audio",
      hasDevilContent: !0,
      links: ["04-CA-B-C-E-I-J-R-S"],
    },
    "03-RE-M": {
      id: "03-RE-M",
      content: `&M 独自一人，正在查看数据。


&M： 不……不，这不对劲。能量特征……时间点……它们来自旧世界。我不敢相信她会这么做。一定是她。


@ &M 思考了片刻，凝视着那块曾经是普通石头、如今却却变成一个发光球体的东西。


&M： 我看到她还带了别的东西进来。当时我没多想，但现在……她一定把它放在自己房间里了，一定是这样。


@ 一声爆炸撼动了空间站。


&M： 那是什么？是从货舱（cargo bay）传来的。哦不，别是那些样本。我得把它们弄出去！


@ &M 跑出实验室，跌跌撞撞地快速冲下楼梯。

@devil: 术士（Warlock）是一个强大的对手。他很聪明，而且知道要对我们保持不信任。要是他能设法让其他人都支持他的事业就好了，但他实在太古怪了，没有人相信他。可怜的家伙。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["04-SU-M"],
    },
    "03-ME-E-R-S": {
      id: "03-ME-E-R-S",
      content: `@ 一扇门突然嘶的一声打开。
        

&R：  指挥官（Commander）克罗斯（Cross）？Dr.达西（Dr. Darcy）？抱歉，我没意识到……我是说，长官，关于异常现象的初步扫描结果出来了。


&S： <i>(快速清了清嗓子，声音中带着明显的距离感)</i> 啊，鲍比（Bobby）。好的。进来吧。Dr.达西（Dr. Darcy）和我刚才只是在……审核一些医疗方案。是吧，医生？


&E： <i>(声音略显紧绷，但保持镇定)</i> 是的，指挥官（Commander）。非常关键的方案。


&R： <i>(犹豫的语气)</i> 当然。抱歉。长官，这是扫描结果。


@ 下方传来一声爆炸，撼动了空间站。


&S： 鲍比（Bobby），怎么回事？


&R： <i>(惊慌的语气)</i> 我……我不知道。感觉像是……从货舱（cargo bay）传来的。


&S： 我们快下去看看。


&E： 我跟你们一起去，以防有人员伤亡。


@ 门打开又关上的声音。所有人都跑出了房间。

@note: 看来命名规则是时间、地点和音频中人物的组合。`,
      type: "audio",
      links: ["02-ME-E-S", "04-CA-B-C-E-I-J-R-S"],
    },
    "04-SE-A": {
      id: "04-SE-A",
      content: `@ 安保室（security office）空无一人，唯一的声音是远处警报器的哀鸣。&A悄悄溜进来，扫视着房间。
        

&A：所有人都去货舱（cargo bay）了。完美。那么，他会把配枪放在哪儿呢？


@ 亚历克斯（Alex）翻找储物柜时发出的金属碰撞声。


&A得意地叹了口气：找到了。正是我需要的。


@ 武器被取出并插入枪套的声音。脚步声迅速远去。


@ 透过安保监控，可以看到&M正在<b>地表（surface）</b>拖着什么沉重的东西。`,
      type: "audio",
      links: ["04-SU-M"],
    },
    "03-SU-0": {
      id: "03-SU-0",
      content: `@ 一种低沉、共振的嗡鸣声充斥在空气中。能量噼啪作响，凝聚成一个闪烁的、近乎人形的轮廓。它脉动着空灵的光芒，每过一秒都变得更加清晰。


@ 突然，一声爆炸撼动了空间站。


@ 能量剧烈闪烁，随即迅速消散，带着一声微弱的嗖的一声流向维修舱口（maintenance hatch）。


@ 远处传来脚步声接近的声音。


@ 我们看到&M 从货舱（cargo bay）的出口坡道跳下，落到<b>地表（surface）</b>上，跨过刚刚昏迷的&B、&C、&J和&I的身体，惊慌失措地拖着身后的样本，试图不被抓住。`,
      type: "audio",
      links: ["03-RE-M"],
    },
    "03-MA-99": {
      id: "03-MA-99",
      content: `@ 深沉的寂静笼罩着空气。


@ 突然，维修舱（maintenance bay）的外门开始发出一种诡异、脉动的光芒。裂隙如蜘蛛网般在加固的金属表面蔓延开来，伴随着在巨大压力下发出的低沉的呻吟声。`,
      type: "audio",
      links: [],
    },
    "04-MA-0": {
      id: "04-MA-0",
      content:
        "@ 随着一声震耳欲聋的轰鸣，门向内爆炸开来，弹片撕裂房间。一股闪烁的、空灵的能量洪流涌入房间，然后凝聚并迅速冲向驻站人员的住处（crew quarters）。",
      type: "audio",
      links: [],
    },
    "04-SU-M": {
      id: "04-SU-M",
      content: `@ &M在空间站外，穿着真空服，费力地拖着一个沉重的金属箱。


&M发出吃力的咕哝声，被头盔模糊了：快到了……就差一点。这……这太危险了。
 

&M：我得把它们带离这里，藏起来不让杰姬（Jackie）发现。


@devil: 我承认爆炸有点过火了，吸引了太多注意，但我们总得做点什么来阻止他，并分散团队中其他人的注意力。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "04-RE-Z": {
      id: "04-RE-Z",
      content: `@ 研究实验室空无一人。&Z走了进来，寻找&M。


&Z：迈克尔（Michael）？他在哪儿？他应该在这里。


@ &Z发现桌上有一个发光的球体。


&Z：这是什么？有意思。如果这是从漫游车上来的，迈克尔（Michael）不该拥有它。我就……暂时借用一下。等我找到他，他可得好好解释解释。


@ 球体被放入口袋的声音。脚步声远去。`,
      type: "audio",
    },
    "04-BR-D-L": {
      id: "04-BR-D-L",
      content: `@ 舰桥（bridge）光线昏暗，应急灯投下长长的影子。仍能听到远处警报器的哀鸣。


&D: 人都去哪儿了？刚才那爆炸是怎么回事？有人吗？


@ 脚步声靠近，沉重而刻意。


&L: 这是什么？你为什么穿着达娜（Dana）的皮？


@ &L 双眼布满血丝。他看起来神志不清。


@ &D 后退了一步。


&L:  伦尼（Lenny）？你在说什么？你怎么了？你吓到我了。


&L: 还回来。那不是你的东西，甚至不合你的身。太松了。你需要鳞片。


&D: 离我远点，伦尼（Lenny），亚历克斯（Alex）会揍扁你的。


&L: 我说还给我！


@ &L 冲向 &D，扼住了她的喉咙。


&D: 放开我！


@ 扭打随之发生，夹杂着闷哼和喘息。一道金属的寒光闪过。


@devil: 只需要一个完美的献祭（sacrifice），就能彻底打破我们两个世界之间的面纱（veil）。


&L 突然倒吸一口冷气，随即陷入恐慌：不！你干了什么？！


@ &D 倒在地上，腹部流血。她大口喘气，喉咙里发出窒息的呜咽。


@ 惊慌失措的脚步声，跑远了。


&L: 天啊，天啊，我不是故意的，这是个意外！


@ 一声沉重的闷响，&D 瘫倒在地，随后一片死寂，只有远处的警报声还在响。`,
      type: "audio",
      links: ["05-BR-D"],
    },
    "04-CA-B-C-E-I-J-R-S": {
      id: "04-CA-B-C-E-I-J-R-S",
      content: `@ 空气中弥漫着浓烟和烧焦金属的刺鼻气味。货舱（cargo bay）一片狼藉。


&S: 鲍比（Bobby），报告情况！


&R: 长官，漫游车……完全毁了。还有那些样本……都不见了。


&E: 多人受伤，指挥官（Commander）。杰姬（Jackie）、艾萨克（Isaac）、巴里（Barry）、卡尔（Carl）……都没有反应。有些烧伤，但没有明显的脑震荡。


&S: 医生，你和我把他们送到医疗舱（medical bay）。鲍比（Bobby），封锁这个区域。我要一份完整的损害评估，并搜索那些样本。还有，查明爆炸原因。


&R: 是，长官。


&E: 明白，指挥官。


@ 可以听到 &Z 和 &A 在货舱外询问发生了什么的声音。


&S: 你们两个都退后，我们来处理……杰克逊（Officer Jackson），你能帮忙抬巴里（Barry）吗？罗根飞行员（Pilot Rogan），你抬卡尔（Carl）。莉兹（Lizzy）和我来抬艾萨克（Isaac）和杰姬（Jackie）。


@ 应急协议启动的声音，远处隐约传来警报声。


@ 我们能听到货舱（cargo bay）里还有两个人。其中一个肯定是 &R，但另一个身份不明。


@note: 需要记住的信息很多。你可以使用 note 命令来做笔记。直接输入 note 会显示你已经记下的笔记。`,
      type: "audio",
      links: ["05-CA-M-R", "05-ME-A-B-C-E-I-J-S-Z"],
    },
    "05-BR-D": {
      id: "05-BR-D",
      content: `@ 一阵微弱的、汩汩的声音，接着是轻轻的一声闷响。舰桥（bridge）上的空气冰冷，应急灯投下诡异的长影。


&D 虚弱地喘息着：不……不，这不可能……


@ &D 在地板上爬行，拼命试图挪向控制台。


&D 哽咽着抽泣：对讲机……必须够到……


&D <i>(她的声音几乎细不可闻，逐渐消失)：</i> 救……命……谁来……


@ 最后一阵颤抖的呼吸，然后归于寂静。`,
      type: "audio",
      links: ["04-BR-D-L"],
    },
    "05-EN-L": {
      id: "05-EN-L",
      content: `@ &L 在引擎室（engine room）里来回踱步，双眼布满血丝。


&L: 天啊，天啊，我干了什么？她……她一直在尖叫！我不是故意的……


@devil: 没关系，屠夫（Butcher）。你做得很好。我为你感到骄傲。


@ 某个金属物品被掉落、然后迅速藏起来的哐当声。


&L: 不能让任何人知道。任何人。就……把它收起来。藏好。


&L: 我得离开这儿。回 <b>厨房（kitchen）</b>。表现得正常点。就……表现得正常点。


@ 脚步声跑远，逐渐消失在远处。`,
      type: "audio",
      links: ["04-BR-D-L"],
    },
    "05-CA-M-R": {
      id: "05-CA-M-R",
      content: `@ 扭曲残骸发出的金属呻吟。&R 正在仔细地翻找碎片。


&R 低声吹了个口哨：哇，这是什么？


&R: 它……它像是一个纯粹的能量球。在脉动。


@devil: 碰我，侍从（Squire）。再靠近点。


@ 身后传来脚步声靠近的声音。


&M: 离那东西远点，鲍比（Bobby）！


@ 突然，一道明亮的闪光照亮了房间，紧接着是一声灼热刺耳的高频尖叫。


@ &M 惊恐地看着 &R 瘫倒在地，身体剧烈抽搐。


@ 震惊了一分钟后，&M 终于恢复了镇定，走向尸体。


@ &M 费力地在鲍比（Bobby）焦黑的遗骸中翻找，发出用力的闷哼。


&M: 啊，找到了。扫描数据。


@ 脉动的能量球开始平静下来，收缩，然后伴随着湿滑的声响，变成了一个 grotesque、蛞蝓般的外星生物。


&M: 肮脏的东西。


@ 一声沉重而果断的跺脚声，接着是湿漉漉的碎裂声。


@devil: 侍从（squire）必须除掉，他对骑士（knight）来说太有价值了。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "05-ME-A-B-C-E-I-J-S-Z": {
      id: "05-ME-A-B-C-E-I-J-S-Z",
      content: `@ 医疗舱（medical bay）内弥漫着无菌而寂静的氛围，只有生命维持设备发出有节奏的哔哔声。空气中隐约飘散着消毒剂的气味。


&S: 医生（Doctor），汇报情况。


&E: 指挥官（Commander），杰姬（Jackie）、艾萨克（Isaac）、卡尔（Carl）、巴里（Barry）都情况稳定。有一些严重的烧伤，但他们的生命体征都还平稳。


&Z 声音颤抖：指挥官（Commander）……Dr.达西（Dr. Darcy）……这说不通啊。我大概两小时前还和卡尔（Carl）、巴里（Barry）在 <b>餐厅（galley）</b>。他们说正要回 <b>安保室（security office）</b>。他们怎么会在这里，在 <b>货舱（cargo bay）</b>……变成这样？


&S: 我们会查清楚的，扎克（Zack）。跟我去 <b>舰桥（bridge）</b>，我们试着联系中央指挥部，告诉他们这里的情况。


&E: 他说得对，扎克（Zack）。这里交给我。


&Z: 好吧。那你呢，亚历克斯（Alex）？你当时在哪里？你安静得有点反常。


&A: 你什么意思？你在暗示什么？


&Z: 抱歉，亚历克斯（Alex）。我没别的意思。


&A: 我和我妻子在我们的舱室（cabin）里，不过这跟你没关系。


&S: 那达娜（Dana）现在在哪儿？


&A: 我来货舱（cargo bay）的时候，她去舰桥（bridge）了。


&S: 哦，好的，我上去之后再跟她说。


&A: 谢谢。我去找找伦尼（Lenny）和迈克尔（Michael），告诉他们发生了什么。


&Z: 我最后一次看到伦尼（Lenny）的时候，他正在 <b>厨房（kitchen）</b>和 <b>餐厅（galley）</b>那边忙活。我之前在 <b>餐厅（galley）</b>等迈克尔（Michael），但他一直没出现。


@ &A 朝一个方向离开，&Z 和 &S 朝另一个方向离开。&E 回去照看伤员。


@note: 你会注意到文件列表中的文件名旁有一个括号内的数字。这表示有多少个你尚未发现、但可以从线索中推断出的文件。如果你追踪每位船员在空间站内的行动轨迹，你应该能从这里获得足够的信息，将一切拼凑起来。`,
      type: "audio",
      links: [
        "02-GA-L-Z",
        "01-GA-B-C-Z",
        "04-BR-D-L",
        "06-KI-A-L",
        "06-BR-D-S-Z",
        "05-BR-D",
        "06-ME-B-C-E-I-J",
      ],
    },
    "06-BR-D-S-Z": {
      id: "06-BR-D-S-Z",
      content: `@ 舰桥（bridge）仍然灯光昏暗，警报声现在成了遥远而哀伤的嗡鸣。&S 和 &Z 走了进来，脚步声在寂静中回响。


&S: 达娜（Dana）！天啊……


&Z: 指挥官（Commander），她……她几乎没呼吸了。


&D 发出微弱、含混的声音：指挥官（Commander）……他……他跑了…… <b>引擎室（engine room）</b>……


&S: 谁，达娜（Dana）？谁跑了？


&D 发出最后一阵颤抖的呼吸：引擎……室……（engine... room...）


&Z: 这一定是迈克尔（Michael）干的。达娜（Dana）一直和他一起工作。他最近行为太古怪了……


&Z: 这个混蛋。我要杀了他。


&S: 扎克（Zack），你不能确定。别做傻事。


&Z 跑出 <b>舰桥（bridge）</b>，指挥官留在原地抱着达娜（Dana），束手无策。


&S: 通讯官（Comms Officer）杰克逊（Jackson），停下，这是命令！


@ &D 的手无力地垂下。寂静再次降临，只有远处的警报声和指挥官沉重的啜泣声将其打破。


@ 接着，远处传来一声枪响。


@note: 我终于设法访问到了空间站的人员名册（manifest），但它被清空了。我不知道发生了什么，但我会将我所能获取的信息分享给你：我已将文件：MANIFEST 添加到收件箱。`,
      type: "audio",
      links: ["07-BR-S", "07-EN-Z", "05-BR-D"],
      triggers: ["manifest"],
    },
    "06-RE-0": {
      id: "06-RE-0",
      content: `@  那个模糊的身影进入了 <b>研究实验室（research lab）</b>，目光带着一种强烈而凶猛的热切，扫过研究笔记、罐中的样本和试管。


&0  发出一声充满古老力量的喉咙低吼。


@ 随着一声震耳欲聋的轰鸣，&0 化作一团旋转的炽热雾气，将实验室吞没在地狱之火中。火焰的噼啪声中，夹杂着有毒化学品爆炸的噗嗤声和嘶嘶声。


@ 炽热的雾气冲向一个通风口，随着嗖的一声消失。消防喷淋头立即启动，浇向火焰，实验室的重型安全门随着最后一声砰的一声滑动关闭。`,
      type: "audio",
    },
    "07-SU-0": {
      id: "07-SU-0",
      content: `@ 一个灼热的火球似乎从 <b>研究实验室（research lab）</b>坠落到地表（surface）上，迅速消散，同时传来有人说话的回音。


@ 透过被毁的维修舱（maintenance bay）门，可以看到 &M 正艰难地为昏迷不醒、枪伤流血的 &L 穿上环境防护服（environmental suit）。


@ 我们能从这里听到 &M 的声音。


&M: 那股能量……它需要一个容器。如果我能把它弄进麦考伊先生（Mr. McCoy）体内，我或许能阻止这场入侵。他本来就因枪伤在流血，看起来之前也没干好事……用一条命拯救无数生命。这是个很小的代价。


&M: 我能下得了手吗？我不知道……但我必须这么做。`,
      type: "audio",
    },
    "07-RE-99": {
      id: "07-RE-99",
      content: `@ 研究实验室（research lab）被火焰吞没。空气中充斥着火焰的噼啪声和呼啸声，吞噬着所经之处的一切。

@ 消防喷淋头嘶嘶作响，绝望地试图扑灭大火。水流倾泻而下，与烟雾和蒸汽混合，但火焰仍在肆虐。`,
      type: "audio",
    },
    "08-RE-99": {
      id: "08-RE-99",
      content: `@ 研究实验室（research lab）被火焰吞没。空气中充斥着火焰的噼啪声和呼啸声，吞噬着所经之处的一切。

@ 消防喷淋头嘶嘶作响，绝望地试图扑灭大火。水流倾泻而下，与烟雾和蒸汽混合，但火焰仍在肆虐。`,
      type: "audio",
    },
    "09-MA-Z": {
      id: "09-MA-Z",
      content: `@ &Z 躺在自己不断扩大的血泊中，艰难地试图理解腹部那灼烧般的剧痛。他难以置信地睁大双眼，看着猩红的血迹在他的衬衫上蔓延开来。


@ 他勉强撑起身，背靠着一堵冰冷的墙，低头看向腹部那个豁开的、参差不齐的洞。一阵战栗传遍全身。


@ 他的目光随后落在自己右手上，那只手因球体的力量而完全烧焦扭曲。一声无奈而绝望的苦笑从他唇间溢出。


@ 一声虚弱、沙哑的低语。


&Z: 唉，妈的。


@ 他的头无力地歪向一边，身体瘫软地倒在地上。血泊继续扩大，成为这一切最终结局的残酷见证。`,
      type: "audio",
      links: ["08-MA-A-Z"],
    },
    "09-RE-99": {
      id: "09-RE-99",
      content: `@ 研究实验室（research lab）被火焰吞没。空气中充斥着火焰的噼啪声和呼啸声，吞噬着所经之处的一切。

@ 消防喷淋头嘶嘶作响，绝望地试图扑灭大火。水流倾泻而下，与烟雾和蒸汽混合，但火焰仍在肆虐。`,
      type: "audio",
    },
    "10-RE-99": {
      id: "10-RE-99",
      content:
        "@ 研究实验室（research lab）里仍然弥漫着烟雾，但大火的呼啸声已经减弱为噼啪声。洒水器仍在不停地扑灭火焰，空气过滤系统嗡嗡地运转起来，开始慢慢清除浓重的雾气。",
      type: "audio",
    },
    "11-RE-99": {
      id: "11-RE-99",
      content:
        "@ 研究实验室（research lab）里仍然弥漫着烟雾，但大火的呼啸声已经减弱为噼啪声。洒水器仍在不停地扑灭火焰，空气过滤系统嗡嗡地运转起来，开始慢慢清除浓重的雾气。",
      type: "audio",
    },
    "12-RE-99": {
      id: "12-RE-99",
      content:
        "@ 研究实验室（research lab）里仍然弥漫着烟雾，但大火的呼啸声已经减弱为啪啪声。洒水器仍在不停地扑灭火焰，空气过滤系统嗡嗡地运转起来，开始慢慢清除浓重的雾气。",
      type: "audio",
    },
    "13-RE-99": {
      id: "13-RE-99",
      content:
        "@ 火势终于得到控制,，留下了一片完全被毁灭的场景。研究实验室（research lab）已成为废墟，焦黑的墙壁、扭曲的金属和被水浸透的设备随处可见。一切都毁了，证明了这场大火的威力。",
      type: "audio",
    },
    "06-KI-A-L": {
      id: "06-KI-A-L",
      content: `@ 亚历克斯（Alex）走进厨房（kitchen），四处张望。


&A: 伦尼（Lenny）？你在吗？


@ 一扇门猛地打开，&L 跌跌撞撞地进来，气喘吁吁，浑身是血。


@ &A 惊恐地倒吸一口凉气。


&A: 伦尼（Lenny）！发生什么事了？爆炸……你受伤了吗？


&L 喘着粗气：爆炸？不……不，我不是故意的……那是个意外！


&A: 你在说什么？什么意外？


&L: 不……没什么。我只是……只是想帮忙。


&A: 什么……你做了什么？这是谁的血？


&L: 不是我的错。是她攻击我。你得相信我。


&A: 伦尼（Lenny）……别，别过来。


@ 一声枪响。


@ 脚步声逐渐远去，有人朝 <b>维护室（maintenance room）</b> 走去，一具身体倒在地上。


@devil: 屠夫（Butcher）和混沌（Chaos）。我本希望能更多地去利用他们，但他们太不稳定，根本无法合作。他们把我服侍得很好，我会想念他们的。`,
      type: "audio",
      links: ["07-MA-A", "04-BR-D-L", "07-KI-L-M"],
    },
    "05-DU-0": {
      id: "05-DU-0",
      content: `@ &J 的住处（quarters）门滑开，露出了 &0。


@ 一系列怪异的声音从 &0 身上发出。


@ &0 扫描着环境，寻找着什么。当它接近 &J 的书桌时，抽屉里的一个装置开始发出柔和、有节奏的脉动声。


@ 响亮、共鸣的吟诵声充斥着空气，在墙壁间回荡。


@ 装置停止了脉动，一切重归寂静。


@ &0 转身，脚步声远去，朝 <b>研究实验室（research lab）</b> 走去。`,
      type: "audio",
      links: ["06-RE-0"],
      theme: "danger",
    },
    "06-DU-M": {
      id: "06-DU-M",
      content: `@ &J 的住处（quarters）门伴随着轻微的嘶嘶声滑开。&M 走了进来，动作迅速而目的明确，目光扫视着房间。


&M: 所以，这就是你藏秘密的地方，杰姬（Jackie）。


@ 抽屉被拉开、物品被扔到一边的声音。&M 翻找着衣物、个人物品，最后是一个暗格。


@ 一声急促的吸气声。


&M: 找到了。我们这儿有什么？


&M <i>(他的声音充满冰冷的确定)</i> 我就知道。一直以来，都是你。这一切都是因为你。但现在……现在我知道怎么阻止它了。


@ 一个设备被启动的声音，从中开始传出柔和而有节奏的脉冲声。&M 将装置装进口袋，迅速离开了房间。


@devil: 要是他知道我刚在他之前已经来过这里，并且诅咒了他手中的圣物（holy object）就好了。`,
      type: "audio",
    },
    "06-ME-B-C-E-I-J": {
      id: "06-ME-B-C-E-I-J",
      content: `@ 监控仪有节奏的哔哔声充满了医疗舱（medical bay）。&E 有条不紊地在病床间移动，检查生命体征，调整点滴。


&E: 放松点，杰姬（Jackie）。就快好了。


@ 一声轻微的呻吟，然后是虚弱的咳嗽。


&J: 伊丽莎白（Elizabeth），发……发生了什么？我的头……一切都模模糊糊的。


&E: 你在医疗舱（medical bay）。货舱（cargo bay）发生了事故。你、艾萨克（Isaac）、巴里（Barry）和霍尔登（Holden）都在爆炸中受伤了。你们都有烧伤，但情况稳定。


&J: 爆炸？哦，天哪……艾萨克（Isaac）？他……？


&E: 他们都活着，杰姬（Jackie）。昏迷了，但情况稳定。你是第一个醒来的。现在好好休息。你的身体需要恢复。


&J: 样本……漫游车……一切都发生得太快了。


&E: 现在别担心那些。专心恢复。剩下的我们会想办法。


@ 远处传来一声枪响的回音。


@ &B 在枪声中动了动。


&J: 那是什么声音？

`,
      type: "audio",
    },
    "07-EN-Z": {
      id: "07-EN-Z",
      content: `@ 引擎室（engine room）中充满有节奏的嗡鸣声。&Z 走了进来，环顾四周。


&Z：迈克尔（Michael）！我知道你在这儿！出来，你这混蛋！你想 要回这个吗？


@ &Z 从口袋里掏出那颗球体。一阵柔和、有节奏的脉动声开始响起。


@ 球体越来越亮，变得赤红滚烫。


@ 一声急促的倒吸冷气，然后是痛苦的尖叫。


&Z：该死！


@ 金属物体哐当一声掉在地上的声音，接着是慌乱逃跑的脚步声。


@ 一声惊恐的叫喊，逐渐消失在远处。


&Z：我的手！操！


`,
      type: "audio",
    },
    "07-BR-S": {
      id: "07-BR-S",
      content: `@ 指挥官（Commander）沉重的抽泣声逐渐平息，取而代之的是深沉而颤抖的呼吸。他轻轻合上了 &D 的双眼。


&S：我会找到是谁干的，达娜（Dana）。他们会付出代价。


@ 布料摩擦的沙沙声，&S 用毯子裹住 &D 的遗体，然后是一声用力的闷哼，他小心地将她抱起。他抱着她走出舰桥（bridge），脚步声回荡着。


@ 电梯下降的声音。`,
      type: "audio",
    },
    "07-KI-L-M": {
      id: "07-KI-L-M",
      content: `@ &M 走进厨房（kitchen），目光扫视着现场。他看到 &L 瘫靠在柜台边，身侧有一处流血的伤口。


&M：<i>（低沉，近乎满意的语气）</i> 伦尼（Lenny）。还活着。这再好不过了。


@ &M 举起一件钝器，狠狠砸向 &L 的头部。&L 呻吟一声，然后瘫软下去。


&M：<i>（用力的闷哼声）</i> 来吧，你得跟我走。


@ 身体被拖过地板的声音，随着 &M 将 &L 拖出厨房（kitchen）而逐渐消失。`,
      type: "audio",
    },
    "07-MA-A": {
      id: "07-MA-A",
      content: `@ &A 低沉压抑的抽泣声在维修舱（maintenance bay）里回荡。


&A：<i>（哽咽的低语）</i> 伦尼（Lenny）……我不是故意的……


@ &A 的呼吸变得急促而粗重。他突然感到一阵冰冷的穿堂风。他的目光猛地转向舱门，透过它，他看到维修舱（maintenance bay）的外层门：从铰链上撕裂，扭曲的金属向外翻卷，通向异星地表。这是空间站外壳上一个巨大而暴力的伤口。他的大脑竭力想要理解这不可能的破坏景象。


@ 然后，他身后通往 <b>引擎室（engine room）</b> 走廊的门突然被撞开。有人踉跄着冲了进来，尖叫着“我的手！”。`,
      type: "audio",
      links: ["08-MA-A-Z", "07-EN-Z"],
    },
    "08-CA-0": {
      id: "08-CA-0",
      content: `@ 从货舱（cargo bay）的阴影中，&0 观察着，其目光锁定在远处 &M 在地表（surface）挣扎的身影上。


&0 发出一连串咔哒声和轻柔的吱吱声，几乎像是一道命令。


@ 多个生物窸窣爬行的声音从异星地表（surface）传来，越来越响。


@ 远处一声爆炸震撼了地表（surface），随之而来的是 &M 微弱而绝望的尖叫。


@ &0 随即冲出货舱（cargo bay），朝爆炸源奔去。`,
      type: "audio",
      links: ["08-SU-L-M"],
    },
    "08-SU-L-M": {
      id: "08-SU-L-M",
      content: `@ 外星地表（surface）的凛冽狂风抽打着&M，他正在一路返回样本所在的位置。


@ 一股诡异的能量在他身后盘旋。感觉它在尾随他。


&M：快到了。麦考伊（McCoy），你怎么这么沉？你可真不省心。

@devil:
@devil: 术士（Warlock）在这儿。抓住他，姑娘们！
@devil:

@ 多足疾行的声音，迅速变得响亮。空气中充斥着吱吱声和嘶嘶声。


&M：什么……？！从我身上滚开！


@ &M疯狂挣扎，对抗着一群生物，他的闷哼和喊叫间杂着布料撕裂声以及湿漉漉、吧唧吧唧的声响。一声沉重的闷响，他身后有什么重物掉落在地上。


&M：不！不能这样！如果我倒下，你也得跟我一起！！


@ 一阵手忙脚乱的声音，一声尖锐的鸣响，接着是震耳欲聋的爆炸。一些生物发出几声尖叫，部分被烧焦。


@ 吱吱作响的虫群继续前进，现在带着新的目标涌向货舱入口，它们窸窣的脚步声逐渐消失在空间站内。


@ &L开始苏醒，发出呻吟。

@devil:
@devil: 屠夫（Butcher）。现在只剩你和我了。是时候完全打开传送门（portal）了。`,
      type: "audio",
      links: ["07-KI-L-M"],
      hasDevilContent: !0,
    },
    "09-SU-0-L": {
      id: "09-SU-0-L",
      content: `@ &0接近昏迷的&L。一阵低沉、喉咙发出的吟诵从身影中传出，他们周围的地面开始蠕动。


@ 先前被忽视的吱吱作响的蛞蝓群（slugs），现在以令人不安的同步性转向&L。它们的动作变得流畅、有目的性。


@ &0抬起一只手，蛞蝓们（slugs）蜂拥而上，用滑腻、扭动的躯体浪潮吞没了&L。


@ 一声令人毛骨悚然的纯粹痛苦的尖叫，被生物群所掩盖。


&L：把它们弄走！它们在……吃我！


@ &L的尖叫很快变成了咯咯声和肉体湿漉漉的撕裂声。


@ &0转身，发出一声微弱、满足的哼鸣，然后溜进一扇开着的窗户，留下蛞蝓们（slugs）继续它们可怕的盛宴。`,
      type: "audio",
    },
    "08-MA-A-Z": {
      id: "08-MA-A-Z",
      content: `&Z：@ 一声慌乱、充满痛苦的呼喊。亚历克斯（Alex）！我的手！救救我！求你了！

@devil:
@devil: 开枪
@devil:

@ &A剧烈地退缩，倒吸一口气。一声尖锐的枪响撕裂空气。


@ &Z瘫倒在地，鲜血在他身下蔓延。


&A：不……不，别再来了……


@ 金属枪械撞击地面的哐当声。慌乱的脚步声沉重地远去，消失在远方。


@ 远处电梯上升驶向<b>舰桥（bridge）</b>的嗡嗡声在背景中隐约可闻。


@ 突然，空间站外也传来一声巨大的爆炸声。

@devil:
@devil: 我需要救救混沌（Chaos）并转移他的注意力。
@devil:

@note: 我添加了一个find命令，方便筛选文件。只需输入FIND 加上驻站人员 ID、位置或时间戳，它就会显示你目前为该ID 找到的所有文件。`,
      type: "audio",
      links: ["09-BR-A", "09-MA-Z"],
      hasDevilContent: !0,
    },
    "07-ME-B-C-E-I-J": {
      id: "07-ME-B-C-E-I-J",
      content: `&B：呃……我的头。到底发生了什么？刚才那是什么？枪声？


&E：巴里（Barry），你醒了。别着急。你在货舱（cargo bay）的爆炸中被波及了。你有些烧伤，但情况稳定。杰姬（Jackie）也刚刚醒来。


&J声音虚弱：很高兴看到你没事，巴里（Barry）。


&B：爆炸？货舱（cargo bay）？现在又是枪声？我知道我听到了什么。情况不妙。这真的很糟。我们需要确保空间站安全。我得去<b>安保室（security office）</b>。


&E：巴里（Barry），以你现在的状况，哪儿也不能去。


&B，挣扎着起身，面露痛苦：我不在乎我的状况，医生。如果空间站上有威胁，我需要武装起来。我们都需要。我去拿步枪。

@devil:
@devil: 跟上他。我需要女巫（witch）落单。
@devil:

&J：等等！我和你一起去。


@ &B挣扎着下床的声音，然后是缓慢而坚定的脚步声逐渐远去。`,
      type: "audio",
      links: ["08-SE-B-J", "08-ME-C-E-I-S"],
      hasDevilContent: !0,
    },
    "08-ME-C-E-I-S": {
      id: "08-ME-C-E-I-S",
      content: `@ 医疗舱（medical bay）很安静，只有监护仪轻柔的哔哔声。&E检查着正在恢复的病人。


&E：艾萨克（Isaac），卡尔（Carl），你们都醒了。放松点。你们在货舱（cargo bay）的爆炸中受伤了。


&I虚弱地呻吟：Dr.达西（Dr. Darcy）？发生了什么？我的头……一切都模模糊糊的。


&C声音沙哑：货舱（cargo bay）……我记得一道闪光……然后就什么都不知道了。


&I：我在爆炸发生前看到了迈克尔（Michael）。他行为怪异，在货舱（cargo bay）入口附近踱步。他看起来……焦躁不安。


&E：迈克尔（Michael）？你确定吗，艾萨克（Isaac）？

@devil:
@devil: 来吧，铁匠（Blacksmith），你能感觉到它。告诉他就是这样。
@devil:

&I：是的，肯定是他。他只是奇怪地看了我一眼，就匆匆赶回<b>研究实验室（research lab）</b>，然后杰奎琳（Jacqueline）进来了，我当时没多想。但现在，我真的认为他和这事有关。


@ 医疗舱（medical bay）的门随着轻柔的嘶嘶声滑开。&S走了进来，脸色阴沉，抱着&D毫无生气的身体。


&S声音哽咽：Dr.达西（Dr. Darcy）……


@ &S轻轻地将&D的身体放在一张空床上。她的眼睛睁着，空洞地凝视着。


&S：她走了。被刺死的。扎克（Zack）和我在舰桥（bridge）上发现了她。没人看见任何事。没有目击者。


&E：被刺死的？但是……被谁？那声枪响和这有关吗？


&S：枪响？什么枪响？不……不，她不是中枪。


&E：杰姬（Jackie）和巴里（Barry）去拿武器了。希望他们没事。


&I：迈克尔（Michael）！一定是迈克尔（Michael）！他行为怪异，他炸了货舱（cargo bay）是他干的！他杀了她！

@devil:
@devil: 对。对。术士（Warlock）。抓住他。
@devil:

&S：艾萨克（Isaac），等等！我们还不确定。扎克（Zack）也这么想，跑去了引擎室（engine room），但我之后再没见过他。小心点。


&I：我们会找到他的！卡尔（Carl），你跟我一起吗？！


&C：好！我们走！


@ &I挣扎着下床，拔掉静脉注射管，&C迅速跟上，两人冲出医疗舱（medical bay）。


@ 他们离开房间时，一声巨大的爆炸声从空间站外的<b>地表（surface）</b>传来。


&S：那到底是什么？这个空间站到底发生了什么？`,
      type: "audio",
      hasDevilContent: !0,
      links: ["09-EN-C-I", "09-ME-E-S", "08-SU-L-M", "01-CA-I-M"],
    },
    "08-SE-B-J": {
      id: "08-SE-B-J",
      content: `@ &J 和 &B 在军械库里。&B 正疯狂地翻找武器柜。


&B: 该死，该死，该死！它去哪儿了？！


&J: 怎么了，巴里（Barry）？你丢了什么东西吗？


&B: 我的脉冲手枪！不见了！我清楚地记得上次演习后把它锁在这里了！


&J: 你确定吗？也许你只是放错地方了？


&B: 不，杰姬（Jackie）。这不是我的作风。有人拿走了它。


@ 突然，警报声大作，附近监视器上闪过一条表面警报。&B 冲过去，难以置信地瞪大了眼睛。


&B: 这到底是怎么回事？！杰姬（Jackie），你看！


@ 监视器显示着空间站外部模糊的图像。&M 清晰可见，正费力地拖拽着一个看起来像尸体的大型物体。他在外面，在 <b>地表（surface）</b>上，正把它拖离空间站。


&J:  迈克尔（Michael）？他……他在外面！他在干什么？那是尸体吗？！看起来像伦尼（Lenny）！


&B: 那个狗娘养的……他干了什么。他完全疯了！我的枪很可能也是他拿的！我们必须阻止他！


&J: 我房间里有点东西。我把它藏起来了，不让迈克尔（Michael）找到。那正是他要找的东西。


&B: 什么？什么东西？你到底在搞什么鬼？


&J: 现在没时间解释了，我们去拿，路上我再告诉你。


@ &B 慌乱地抓起几把步枪，甩到肩上。


@ 他们离开时，可以听到空间站外传来一声巨大的爆炸。`,
      type: "audio",
      links: ["08-SU-L-M", "04-SE-A", "07-KI-L-M"],
    },
    "09-EN-C-I": {
      id: "09-EN-C-I",
      content: `@ &I 和 &C 冲进引擎室（engine room），目光扫视着寻找迈克尔（Michael）。


&I: 迈克尔（Michael）！你在哪儿？你对达娜（Dana）做了什么？


&C: 在那儿！地板上！


@ &C 指向控制台附近一个闪闪发光的物体。&I 冲过去，捡起一把沾满血的刀。


&I: 一把刀！他来过这里！这一定是他用的凶器。


@ 突然，一阵低沉的嗡嗡声充满了房间。两人抬起头。一块天花板面板开始剧烈发光，然后裂开。一个发着红光的金属小物体直接掉落在 &I 身上。


@ &I 发出一声令人毛骨悚然的痛苦尖叫，瞬间被一道刺眼的光芒和一团烟雾吞没。他的身体抽搐着，然后倒了下去，烧焦了，失去了生命。


&C: <i>(一声惊恐的尖叫)</i> 艾萨克（ISAAC）！


@ 卡尔（Carl）踉跄后退，脸色因恐惧而苍白。他转身，拼命地逃离 <b>引擎室（engine room）</b>，惊慌的脚步声朝着 <b>舰桥（bridge）</b>方向逐渐消失。

@devil:
@devil: 跑吧，愚者（Fool），但你躲不了的。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["05-EN-L", "07-EN-Z", "10-BR-B-C-J"],
    },
    "09-BR-A": {
      id: "09-BR-A",
      content: `@ &A 在 <b>舰桥（bridge）</b>上，双手颤抖，盯着地板上的血迹。


&A: 伦尼（Lenny）……扎克（Zack）……我做了什么？我杀了他们。我把他们两个都杀了。这血……到处都是。这不仅仅是他们的血，对吗？这不对劲。这完全不对劲。达娜（Dana）……爆炸后我就没见过她。哦，天哪，求求不要。千万别是她的血。我必须找到她。我必须知道。


@ &A 支撑着站起来，双腿不稳，踉跄着走向 <b>医疗舱（medical bay）</b>。`,
      type: "audio",
      links: ["10-ME-A-E"],
    },
    "02-BI-99": {
      id: "02-BI-99",
      content: `@ 一阵静电噪音，然后是 &J 的声音。


&J: 我是杰姬（Jackie）。瓦纳海姆（Vanaheim），能听到吗（Do you copy）？


@ 一个微弱的声音，因静电而失真。


[无线电中未知的声音]: 收到，杰姬（Jackie）。请讲。


&J: 好消息。样本已安全获取。我现在正前往货舱（cargo bay）的途中，准备开始检查。预计在两小时后提交我的完整报告。保持彩虹桥（Bifrost）稳定。


[无线电中未知的声音]: 明白。彩虹桥（Bifrost）保持稳定（holding steady）。祝你好运，杰姬（Jackie）。


@ 又是一阵静电噪音，然后归于寂静。`,
      type: "audio",
    },
    "04-BI-99": {
      id: "04-BI-99",
      content: `@ 一阵静电噪音，然后是一个微弱、失真的声音。


[无线电中未知的声音]: 杰姬（Jackie）？这里是瓦纳海姆（Vanaheim）。能听到吗（Do you copy）？这比我们预期的时间要长。一切还好吗？


@ 更多的静电噪音，然后归于寂静。`,
      type: "audio",
    },
    "09-ME-E-S": {
      id: "09-ME-E-S",
      content: `@ &E 将一只安慰的手放在 &S 的肩上。他正茫然地盯着 &D 的尸体。


&E：塞巴斯蒂安（Sebastian），我知道这很难。但我们需要你。驻站人员都需要你。

@devil:
@devil: 这是你的错。都是你的错。你很软弱。你是个懦夫。你不是什么骑士（Knight）。
@devil:

&S：<i>（他的声音嘶哑，充满绝望）</i> 我怎么能领导他们，莉兹（Lizzy）？我怎么能告诉亚历克斯（Alex）他的妻子死了？这是我的责任……所有这一切。我本该阻止这一切的。


&E：你不能为此责怪自己，塞巴斯蒂安（Sebastian）。我们身处未知领域。我们会一起渡过难关的。我……我爱你。


@ &S 摇摇头，然后他的眼睛微微睁大。


&S： 鲍比（Bobby）！爆炸后我让他留下进行调查。从那以后我就没收到他的消息。


&E：哦不……


@ &S 站起来，新的决心使他的面容变得坚毅。


&S：我必须找到他。我不能再失去任何人了。


&E：去吧，塞巴斯蒂安（Sebastian）。我会留在这里。我会开始检查达娜（Dana），看看能否找到发生了什么事的线索。小心点。


&S：我会的。


@ 一阵热烈的亲吻声，随后脚步声逐渐消失在远处。

@devil:
@devil: 现在只剩你和我了，女巫（Witch）。你是我的了。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["10-CA-S", "10-ME-A-E"],
    },
    "09-DU-B-J": {
      id: "09-DU-B-J",
      content: `@ &J 床头灯柔和的光芒照亮了她的房间。&B 倚在门框上，脸上带着戏谑的笑容。

@devil:
@devil: 让他进来。沉溺于罪恶吧。
@devil:

&J：怎么，警官（Officer），欣赏风景呢？


@ &B 轻笑一声，从门框上起身，走近了一步。


&B：一直都是，杰姬（Jackie）。尤其是和你有关的时候。


&J：你和你的小跟班霍尔登（Holden）总是太自以为是了。


&B：得了吧。总该有点时间来点……消遣的。尤其是在经历了今天这样的一天之后。


@ &J 茫然地盯着他。


&J：我不敢相信在发生了这一切之后，你脑子里想的竟然是这个。


@ &B 伸出手，温柔地将她的一缕头发别到耳后。


&B：你知道吗，即使在全站恐慌之后，你收拾一下仍然很漂亮。


&J：<i>（她的脸颊微微泛红）</i> 我们不是来干这个的。我们是来找迈克尔（Michael）并阻止他的。

@devil:
@devil: 你有时间。去罪恶吧。
@devil:

@ &J 不情愿地将 &B 从身边推开。


&B：我知道，我知道。只是你总有办法把我玩弄于股掌之间。


@ 东西掉落地板的声音，以及在房间内四处查看的声音。


&J：它在哪儿？巴里（Barry），它在哪儿？


&B：什么？它不在那儿？……该死，这可不太妙。


&J：不，巴里（Barry）。这很不妙。一点也不妙。有人来过我的房间。


&B：我们回舰桥（bridge）吧。我们可以在那里和其他人重新汇合，商量下一步行动。

@devil:
@devil: 她很坚强。我就是无法击垮她。不过没关系。我击垮了她周围的每一个人。`,
      type: "audio",
      links: ["06-DU-M"],
      hasDevilContent: !0,
    },
    "10-RO-0": {
      id: "10-RO-0",
      content: `@ 一个模糊的身影，如薄雾一般，从房间的窗户渗入，凝聚成人形。
        


@ 它悄无声息地滑出房间，进入走廊，其形态几乎难以辨认，它登上楼梯，消失在楼上的黑暗中。`,
      type: "audio",
    },
    "10-CA-S": {
      id: "10-CA-S",
      content: `@ &S 抵达货舱（cargo bay），呼唤着 &R。


&S：鲍比（Bobby）你在这儿吗？


@ 一阵令人不寒而栗的寂静回答了他。他扫视着昏暗的货舱（cargo bay），目光落在一个可怕的景象上。&R 毫无生气的身体摊在地板上，周围是一层粘稠、闪烁的痕迹。


&S：鲍比（Bobby）！不！


@ 突然，奇怪的声响从货舱（cargo bay）远端传来。&S 转身看到空间站外壳上有一个巨大的洞，一群怪异的、蛞蝓般的外星生物正从破洞渗入空间站。它们粘滑的身体扭动着、搏动着，众多眼睛紧盯着他。


&S 惊恐地喊道：这……是什么？！


@ 他试图转身逃跑，但这些生物太快了。它们蜂拥而上，在一波扭动的肉潮中将他淹没。他的尖叫被蛞蝓吞噬他的声音打断，它们酸性的身体溶解着他的血肉。最后的声音是一阵咕噜声，然后是寂静。

@devil:
@devil: 我对骑士（knight）抱有更高期望，但他那沉重的负罪感以及对女巫（witch）的心软，最终导致了他的覆灭。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "10-ME-A-E": {
      id: "10-ME-A-E",
      content: `@ &E 检查着 &D 的尸体，眉头紧锁，全神贯注。她仔细探查着伤口。


&E：达娜（Dana），我很抱歉。你本应得到更好的结局。


&E：你还记得我们刚到这个空间站的时候吗？你那么想融入大家，想和其他人一样，但你远比那要优秀得多。


&E：我永远不会忘记我们的反重力瑜伽课。我会想念你的。


@ &E 安静下来，轻轻抚摸着伤口。


&E 恍然大悟地倒吸一口气：一把厨房刀……我知道是谁干的了！亚历克斯（Alex）！他去厨房（kitchen）了！我必须警告他！


@ &E 冲出医疗舱，跑下楼梯，朝 <b>厨房（kitchen）</b> 奔去。


@ 几分钟后，&A 跌跌撞撞地走进房间。


&A：医生（Doc）？莉兹（Lizzy）？！你在哪儿？！我需要帮助。扎克（Zack）他……他中枪了。


@ 他的目光落在医疗床上，呼吸瞬间哽住。&D 毫无生气的身体躺在那里，静止而苍白。一声哽咽的啜泣从他唇边溢出。


&A 用破碎的低语说道：达娜（Dana）……不……连你也……


&A：我无法相信……最终，我还是没能保护你免受迈克尔（Michael）的伤害。


@ 一个阴影身影出现在医疗舱（medical bay）外，其形态在昏暗的光线下模糊不清。


&A：什么……你是谁？


@ 一道强光吞没了医疗舱，随后是身体倒地的声音。寂静降临，只有空间站系统微弱的嗡鸣声打破沉寂。`,
      type: "audio",
      links: ["11-KI-E"],
    },
    "12-HY-0-A": {
      id: "12-HY-0-A",
      content: `@ 水培舱（hydroponics bay）内，一股诡异的能量开始盘旋，空气中充满了微弱的嗡鸣。
        

@ 能量脉动着，从周围的植物汲取生命。它们枯萎、变得脆弱，生机勃勃的绿色褪为病态的棕黄。
        

@ 随着植物衰败，盘旋的能量凝聚，慢慢形成了两个模糊的人形。
        

@ 人影以惊人的速度突然冲向通风口（air vent），不可思议地挤过狭窄的开口。
        

@ 呼啸的风声宣告了它们的逃脱，被带往下方的地表（surface）。`,
      type: "audio",
      links: [],
    },
    "13-SU-0-A": {
      id: "13-SU-0-A",
      content: `@ 两个模糊的身影走近 &L 毫无生气的尸体，它们的形态如烟雾般摇曳。
        
        
@ 它们开始一场令人毛骨悚然的仪式，双手深深地挖进 &L 尸体的内脏，并将他的血液涂抹在四周。
        
        
@ 两个人形都把嘴巴张得难以置信地大，内部闪烁着黑暗、脉动的能量。
        
        
@ 一种怪异的声音从它们体内发出，强度不断攀升。一道刺眼的白光爆发，吞噬了整个场景。
        
        
@ 当光芒消退，视频信号稳定下来时，可以看见远处有三个模糊的身影，正无声地滑向货舱（cargo bay）。`,
      type: "audio",
      links: [],
    },
    "14-CA-0-A-L": {
      id: "14-CA-0-A-L",
      content: `@ 三个模糊的身影滑进货舱（cargo bay），它们的形态依然如烟雾般摇曳。
        
        
@ 剩余的蛞蝓状外星生物（slug-like aliens），仿佛被无形的力量牵引，扭动着涌向它们，用脉动的血肉浪潮将人形吞没。空气中充满令人作呕的吮吸声，随着蛞蝓们（slugs）被迅速吞噬，它们的形态溶解进那些模糊的身影中。


@ 人形开始固化，体积增大，轮廓变得清晰。其中两个显现出来，如今呈现出更具实体、更为怪诞的形态，赤裸、扭曲，仿佛是 &A 和 &L 的畸形模仿，他们的眼睛发着一种不自然的光芒。第三个人形保持模糊的形态，但散发着巨大而邪恶的力量。`,
      type: "audio",
      links: [],
    },
    "01-BI-99": {
      id: "01-BI-99",
      content: `@ 一种宁静的沉寂笼罩着彩虹桥（Bifrost），空气静止而平静。


@ 突然，那道诡异的裂隙在短暂的一秒钟内发出耀眼的、脉动的红色光芒，一股强大的原始能量猛烈地从其深处猛烈迸发。`,
      type: "audio",
    },
    "17-BI-0-A-L": {
      id: "17-BI-0-A-L",
      content: `@ &0，如今已完全成形，散发着邪恶气息，正无声地滑向彩虹桥（Bifrost），&A 和 &L 紧随其后。
        
        
@ 它们抵达了那道笼罩着不祥红光的脉动裂隙，毫不犹豫地穿过了其闪烁的屏障。
        
        
@ 紧随其后，一支怪诞的蛞蝓状外星生物（slug-like aliens）大军开始从黑暗中涌出，无情地冲过裂隙，进入彩虹桥（Bifrost），它们黏滑的躯体在诡异的光芒中闪烁。`,
      type: "audio",
      links: [],
    },
    "03-SH-99": {
      id: "03-SH-99",
      content:
        "@ 黑暗的隧道突然被一道炫目的闪光吞没，紧接着是一声震耳欲聋的爆炸轰鸣，震动了上方货舱（cargo bay）的整个地基。",
      type: "audio",
    },
    "04-SH-99": {
      id: "04-SH-99",
      content: `@ 浓密刺鼻的烟雾开始涌入黑暗的隧道。

@ 上方，在货舱（cargo bay）里，可以听到惊慌的叫喊声，&S 正在向驻站人员下达命令。`,
      type: "audio",
    },
    "05-SH-99": {
      id: "05-SH-99",
      content: `@ 黑暗的隧道此刻充满了浓密刺鼻的烟雾，令人难以视物和呼吸。

@ 突然，一声令人毛骨悚然的尖叫从上方货舱（cargo bay）传来，无疑是&R 的声音，随后是一声令人作呕的咕噜声，接着一片死寂。`,
      type: "audio",
    },
    "15-SH-0-A-L": {
      id: "15-SH-0-A-L",
      content: `@ 我们看到&A和&L的扭曲版本，以及那个模糊的第三个人影，在听到&J进入货舱（cargo bay）后，正接近漫游车下方的隧道入口。
        
        
@ 他们迅速闪到漫游车下，进入隧道。一阵令人不安的嗡鸣从车底传来。


@ 突然，一道明亮的闪光从漫游车下爆发，随之而来的是燃料和塑料燃烧的刺鼻气味。漫游车的引擎噼啪作响后熄火，浓烟从其底盘滚滚而出，使其完全报废。


@那些人影依然隐藏着，观看着&J徒劳地尝试启动引擎。`,
      type: "audio",
      links: [],
    },
    "16-CA-0-A-J-L": {
      id: "16-CA-0-A-J-L",
      content: `@ 蛞蝓状的外星生物（slug-like aliens） 蜂拥覆盖了&J，它们酸性的身体开始溶解她的血肉。


@ 突然，这些蛞蝓生物（slugs）退缩了，停止了攻击。它们从她身上扭动着离开，留下她残缺流血的身体。


&J 躺在血迹斑斑的漫游车座位上，内脏外露，血流如注。


@ 她抬起头，视线模糊，看到三个模糊的身影正在靠近。其中两个开始实体化，呈现出&A和&L扭曲、怪诞的形态。


&J：亚历克斯（Alex）？……伦尼（Lenny）？……天啊，你对他们做了什么。


@ 第三个依然模糊的身影滑向&J，俯下身。它的形态短暂地凝聚。它在她的耳边低语了什么，旁人无法听清。


@ 一声心碎的呜咽从&J的唇间逸出，泪水与脸上的鲜血混合。


@ 三个身影转身，无声地离开，留下&J在货舱（cargo bay）中流血至死。`,
      type: "audio",
      links: [],
      triggers: ["TRUE-ENDING"],
    },
    "TRUE-ENDING": {
      id: "TRUE-ENDING",
      content: `发件人：未知来源
收件人：调查员[已隐去]

我们……我们简直不敢相信你所发现的一切。这超出了我们以往遇到的任何情况。

我们试图联系距离尼福尔海姆（Niflheim）数光年之外的研究站瓦纳海姆（Vanaheim），但他们没有回应。一支救援队正在前往那里的途中。

你做得很好，调查员。你可以安心休息了，因为你已给予驻站人员们安宁。

我们找到了事件发生前几天的一些日志。看起来里面没发生太多事，但我想你可能愿意看看他们更快乐的时光。file:00-GA-B-C-I-J-M-R-Z

我们一刻也不相信视频画面里的是厨师（chef）和飞行员（pilot）。那只是光线造成的错觉。所有人都已遇难。这将被写入我们的报告。

@devil:
@devil: 他们赞扬你，但在内心深处，你并不满足，对吗？你觉得你辜负了他们，他们终究是你的驻站人员。尽管你在事发很久之后才抵达，但愧疚感依然折磨着你。这是个沉重的负担，不是吗？如果你想真正理解，真正找到安宁……我将在尼福尔海姆（Niflheim）等你。加入我吧，召唤者（Summoner）。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "00-GA-B-C-I-J-M-R-Z": {
      id: "00-GA-B-C-I-J-M-R-Z",
      content: `@ 驻站人员休息室（crew lounge）里充满了舒适的放松氛围。&R、&Z、&J、&B、&C和&M懒散地躺在不同的沙发上，一包吃了一半的薯片被遗忘在桌上。


&Z：我发誓，迈克尔（Michael）对待那次虚拟自然漫步比对待他的实际工作还认真。那玩意儿的“气味视觉（smell-o-vision）”简直……不对劲。


&R：是啊，那些像素化的树看起来像90年代电子游戏里的东西。不过，他对自己的“沉浸式体验”还挺自豪的。


&M：嗯，我觉得它很有教育意义，做得也很好。我从小就喜欢这个模拟程序。正是它让我对生物学产生了兴趣。


&R：从小？天哪，难怪！那东西太古老了。它至少有50年历史了。


&B 凑近 &J，眼中闪过一丝戏谑的光芒。


&B：你知道吗，作为一名天体物理学家（astrophysicist），你放松起来倒是出人意料地擅长。


@ &J 眨了眨眼。


&J：只有在有好伙伴（good company）的时候才这样，巴里（Barry）。


&C 正在对 &R 和 &Z 窃窃私语，他们俩正努力憋着笑。


&C：……所以舰长（captain）说，“我还真不知道那玩意儿也能‘挤’！”


&Z：@ 嗤笑一声。我去，也太逗了！


&C：我就是随口一说，自从达西医生（Dr. Darcy）几小时前在指挥官（Commander）的住处（quarters）‘咨询’过后，我就再没见过她了。真想知道那是哪种‘医疗紧急情况’。


@ 门滑开了，&I 大步走进来，满身油污，但看起来得意洋洋。


&I：漫游车现在像小猫一样咕噜咕噜叫了！当你取得进展时，谁还需要淋浴呢，对吧？


&I 径直走向 &J，张开双臂。


&I：过来，杰姬（Jackie），你看上去需要一个拥抱！


@ &J 嬉笑着尖叫，试图躲开他。


&J：艾萨克（Isaac）！离我远点，你真恶心！


@ &C 大笑着抓住 &J 的手臂，把她拉向 &I。


&C：来吧，杰姬（Jackie），给这家伙一点感谢！


@ 休息室里爆发出阵阵笑声，这是空间站上难得的轻松时刻。`,
      type: "audio",
      links: [],
    },
    "00-CR-E-S": {
      id: "00-CR-E-S",
      content: `&S 躺在床上，床头灯柔和的光芒在房间里投下长长的影子。&E 依偎着他，头靠在他的胸前，脸上带着满足的神情。
        


&S：你能听到外面那些人吗？他们真像孩子。


@ &E 幸福地微笑着。


&E：这种感觉真好，我希望它永远不要结束。`,
      type: "audio",
      links: [],
    },
    "00-RO-A": {
      id: "00-RO-A",
      content:
        "@ &A 不雅地摊躺在自己的床上，一声响亮的鼾声从他唇间逸出。在他身边，一个空的空间站廉价朗姆酒瓶子在昏暗的灯光下黯淡地闪着微光，见证了他近日的醉生梦死。",
      type: "audio",
      links: [],
    },
    "00-RE-D": {
      id: "00-RE-D",
      content: `@ &D 正在实验室（lab）里埋头工作，审阅报告，检查试管，并对当地动物群进行实验。餐厅（galley）传来的噪音飘了进来，打扰了她的注意力。
        

@ 她叹了口气，戴上耳机，实验室里立刻充满了她最爱的重金属乐队震耳欲聋的声音，淹没了所有干扰。`,
      type: "audio",
      links: [],
    },
    "00-KI-L": {
      id: "00-KI-L",
      content: `@ &L 正在给他的巧克力蛋糕做最后的修饰。这个蛋糕没有用巧克力、没有用面粉、也没有用鸡蛋，卖相却意外不错。


@ 他试探性地尝了一口，做了个鬼脸。味道糟透了。他叹了口气，把烈酒浇在蛋糕上，打算上菜时把它点燃。


&L：这样至少能掩盖气味。`,
      type: "audio",
      links: [],
    },
    "11-ME-0-A": {
      id: "11-ME-0-A",
      content: `@ &0 在医疗舱（medical bay）的中央，他那不自然的形态诡异地滑向 &A。

@devil:
@devil: 看看你，我的小混沌引擎（Chaos Engine）。还活着，但也只剩一口气了。我们很快就会合为一体。


@ 这个奇怪的形体低头凝视着 &A，后者无力地躺在医疗舱（medical bay）的地板上。


@ &0 的嘴咧得很大，张开到不可思议的程度，一种可怕的、令人灵魂战栗的声音从里面传出来。


@ &A 发出了一声撕心裂肺的、纯粹恐惧的尖叫。


@ 安保摄像头的信号永久中断了。


@note: 那个身影的形态不断变化，但有一瞬间看起来有点像 &L，但这不可能。一定是光线造成的错觉（a trick of the light）。`,
      type: "audio",
      hasDevilContent: !0,
    },
    "10-HY-99": {
      id: "10-HY-99",
      content: `@ 一只蛞蝓状的外星生物无意间滑入了水培舱（hydroponics bay）。它停了下来，众多的眼睛似乎被这片茂盛、生机勃勃的植物所吸引。       
        
@ 它缓缓地朝一个种着茂盛蕨类植物的大花盆滑去。伴随着一声轻柔、湿漉的声响，它开始钻入肥沃的土壤，消失在表面(surface)之下。
        
@note: 如果我没有亲眼见过它们把人撕碎，我发誓会相信它是无害的，甚至有点可爱。`,
      type: "audio",
      links: [],
    },
    "13-HY-99": {
      id: "13-HY-99",
      content: `@ 水培舱（hydroponics bay）是一片荒凉腐朽的景象。曾经繁茂的植物在变成了脆弱的空壳，生机勃勃的绿色被病态的棕褐色取代。
        
@ 从一株枯萎的蕨类植物的土壤中，那只曾钻入花盆的蛞蝓状外星生物慢慢出现，它黏滑的身体闪闪发光。        

@ 它停顿了一下，似乎在审视这片毁灭，然后朝着入口滑行而去。       

@ 当这只蛞蝓（slug）消失在门外时，舱内最后几片枯萎的叶子也化为细灰，被一股无形的气流卷走。`,
      type: "audio",
      links: [],
    },
    "14-HY-99": {
      id: "14-HY-99",
      content: `@  水培舱（hydroponics bay）仍然是一片荒凉腐朽的景象。
        
        
@ 枯萎的植物像骷髅般的手指一样伸向昏暗的天花板，一种诡异的寂静沉重地弥漫在空气中，只有即将失效的生命支持系统发出的微弱嗡嗡声打破这片沉寂。`,
      type: "audio",
      links: [],
    },
    "15-HY-99": {
      id: "15-HY-99",
      content: `@ 水培舱（hydroponics bay）仍然是一片荒凉腐朽的景象。
        
        
@ 枯萎的植物像骷髅般的手指一样伸向昏暗的天花板，一种诡异的寂静沉重地弥漫在空气中，只有即将失效的生命支持系统发出的微弱嗡嗡声打破这片沉寂。`,
      type: "audio",
      links: [],
    },
    "16-HY-99": {
      id: "16-HY-99",
      content: `@ 水培舱（hydroponics bay）仍然是一片荒凉腐朽的景象。
        
        
@ 枯萎的植物像骷髅般的手指一样伸向昏暗的天花板，一种诡异的寂静沉重地弥漫在空气中，只有即将失效的生命支持系统发出的微弱嗡嗡声打破这片沉寂。`,
      type: "audio",
      links: [],
    },
    "17-HY-99": {
      id: "17-HY-99",
      content: `@ 水培舱（hydroponics bay）仍然是一片荒凉腐朽的景象。
        
        
@ 枯萎的植物像骷髅般的手指一样伸向昏暗的天花板，一种诡异的寂静沉重地弥漫在空气中，只有即将失效的生命支持系统发出的微弱嗡嗡声打破这片沉寂。`,
      type: "audio",
      links: [],
    },
    "12-ME-99": {
      id: "12-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "13-ME-99": {
      id: "13-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "14-ME-99": {
      id: "14-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "15-ME-99": {
      id: "15-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "16-ME-99": {
      id: "16-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "17-ME-99": {
      id: "17-ME-99",
      content:
        "@ 视频画面是一片混乱的静态雪花。在那起奇怪事件发生后， <b>医疗舱（medical bay）</b> 的所有视觉联系都已中断。",
      type: "audio",
    },
    "10-BR-B-C-J": {
      id: "10-BR-B-C-J",
      content: `@ &J、&B 和 &C 抵达舰桥（bridge）。&C 明显惊魂未定，双眼圆睁，满是惊恐。


&C: @ 一声哽咽的抽泣。艾萨克（Isaac）……他死了！还有血……到处都是血！到底发生了什么？！


&B: 冷静点，卡尔（Carl）。深呼吸。我们来了。


&J: @ 轻声说道。给，拿着这个。它能帮你镇定一下。我们会一起搞清楚的。


@ &C 接过递来的大麻烟卷，双手颤抖着点燃。他深吸一口，又吸了一口，缓缓吐出一团烟雾。


&C: @ 声音依然颤抖，但平静了些。谢了，杰姬（Jackie）。达娜（Dana）……达娜（Dana）被迈克尔（Michael）杀了。艾萨克（Isaac）说他行为反常，然后……然后艾萨克（Isaac）……


&B: ：我们也看到迈克尔（Michael）了，霍尔登（Holden）。他在外面，在地表（surface），试图带着样本逃跑。


&J: 他肯定是在混乱中拿走了它们。他还拿走了别的东西。很重要的东西。


&C: 你在说什么，杰姬（Jackie）？


&J: @ 她的声音压低成耳语。这次整个任务……不只是一次科研考察。我们被派到这里是为了找到裂缝里的那个东西，研究它。而我有一个设备。一个用来储存我们找到的任何东西的收容单元（containment unit）。但迈克尔（Michael）……他把它偷走了。东西在他手上。


&C: 他拿走了收容单元（containment unit）？那个狗娘养的……我们必须阻止他！


&J: 我们会阻止他的。但首先，我们得等。其他人迟早都会找到这里来。我们需要重新集结。把烟卷递给我。`,
      type: "audio",
      links: ["11-BR-B-C-J"],
    },
    "11-BR-B-C-J": {
      id: "11-BR-B-C-J",
      content: `@ 三人沉默地坐了一会儿，只有空间站系统的微弱嗡鸣和大麻烟卷偶尔的噼啪声。突然，一阵奇怪的、湿漉漉的声音从舰桥（bridge）外的走廊传来。


&B: 那是什么声音？


&J: 不知道……听起来像是……有东西在动。


@ &B 迅速从背上取下他从安保室（security room）带来的三把脉冲步枪，递给 &J 和 &C 各一把。


&B: 准备战斗。


@ 湿漉漉的声音越来越响，越来越近。一只grotesque、蛞蝓状的生物蠕动到舰桥（bridge）入口处，它众多的眼睛紧盯着他们。接着是另一只，又一只。整整一群。


&C: @ 一声惊恐的尖叫。我的天啊！


@ 三人开火，脉冲步枪喷射出能量束。蛞蝓状的生物在酸液四溅中爆炸，但更多的还是涌了上来，将他们淹没。&C，仍然处于亢奋和混乱状态，第一个被虫群包围，他的尖叫在生物将他吞噬时戛然而止。


&B: 卡尔（Carl）！


@ &B 将 &J 推向紧急出口（emergency exit）。


&B: 走！快离开这儿！我来挡住它们！


&J: 不！巴里（Barry）！


@ &B 将她推出门外，猛地关上门，将自己与快速逼近的虫群封在里面。&J 听到他最后几声绝望的枪响，然后是一片寂静。泪水滑过她的脸庞，她转身逃离，脚步声在通往餐厅（galley）的走廊里回响。

@devil:
@devil: 别担心，恶魔猎手（Demonhunter）。等我处理完你的朋友们，下一个就轮到你了。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["12-GA-E-J"],
    },
    "11-KI-E": {
      id: "11-KI-E",
      content: `@ &E冲进厨房（kitchen），惊恐地瞪大了眼睛。鲜血溅满了地板、料理台，甚至天花板。墙上有一个明显的弹孔。没有&A的踪影。


&E: @ 惊恐的低语。我的天啊……这里发生了什么？亚历克斯（Alex）？你在哪儿？

@devil:
@devil:对。怪亚历克斯（Alex）吧。他对妻子很糟糕。你检查她的时候看到了那些瘀伤。她总是会敷衍过去，但你知道的。
@devil:

&E: 我能看到这里搏斗的痕迹，有人中枪了，看起来有具尸体被从这里拖了出去。


&E: 亚历克斯（Alex）！亚历克斯（Alex）！你在哪儿？


@ &E检查现场时慌乱的脚步声。血迹拖出了厨房（kitchen），朝餐厅（galley）方向延伸。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["06-KI-A-L", "12-GA-E-J", "07-KI-L-M"],
    },
    "12-GA-E-J": {
      id: "12-GA-E-J",
      content: `@ &J跌跌撞撞地进入餐厅（galley），浑身沾满了粘液、鲜血和汗水，撞上了&E。


&J: @ 气喘吁吁，语无伦次。蛞蝓（Slugs）！一大群（Swarm）！巴里（Barry）……卡尔（Carl）……他们没了！


&E: 杰姬（Jackie）！你在说什么？蛞蝓（Slugs）？有个杀人犯在逃！伦尼（Lenny）……不。亚历克斯（Alex）……他杀了达娜（Dana）！

@devil:
@devil: 对。亚历克斯（Alex）。他就是凶手。播下不信任的种子。迈克尔（Michael）、亚历克斯（Alex）和伦尼（Lenny）。你永远无法确定。
@devil:

&J: @ 疯狂地摇头：不！是迈克尔（Michael）！他拿走了收容单元（containment unit）！他正试图带着样本逃跑！


&E: 但爆炸前亚历克斯（Alex）在哪里？他为什么要丢下妻子让她独自去舰桥（bridge），自己却来货舱（cargo bay）？而且凶器是把厨房刀。这是一起激情犯罪。迈克尔（Michael）杀了达娜（Dana）能有什么好处？


&J: 这些都无关紧要了。你看到克罗斯（Cross）或伦纳德（Leonard）了吗？其他人都死了，莉兹（Lizzy）。就剩我们了。


&E: 我在厨房（kitchen）看到了血。我以为是伦尼（Lenny）……但现在我不那么确定了。他为什么要那样？亚历克斯（Alex）更有……哦天哪，巴斯蒂安（Sebastian）。他还没从……回来……你觉得他也……？我们需要发消息！我们需要帮助！


&J: 通讯器在舰桥（bridge）！那里被占领了！没办法过去！


&E: 等等……备用漫游车！如果我们能到维修舱（maintenance），用逃生舱口（escape hatch），我们就能到外面，从那里去货舱（cargo bay）！


&J: 对！这是我们唯一的机会！快走！

@devil:
@devil: 对。直接到我们这儿来吧，我的爱人们。`,
      type: "audio",
      hasDevilContent: !0,
      links: ["13-MA-E-J"],
    },
    "13-MA-E-J": {
      id: "13-MA-E-J",
      content: `@ &E和&J跌跌撞撞地冲进维修舱（maintenance bay），看到&Z毫无生气的尸体，惊恐地瞪大了眼睛。


&J: @ 惊恐的低语。扎克（Zack）？哦，我的天……发生了什么？


&E: @ 声音颤抖：我完全不明白这一切……先是达娜（Dana），现在是扎克（Zack）……


@ &E发现地板上有一把丢弃的枪，枪管还是温的。她捡起枪，困惑地皱起眉头。


&E: @ 声音颤抖。我完全不明白……先是达娜（Dana）被刺死，现在扎克（Zack）被枪杀……


&J: 外舱门怎么了？看起来像是从外面炸开的！


@ 一系列令人不安的撞击声和湿漉漉的拖拽声从舰桥（bridge）方向传来，越来越响。


&J: @ 惊恐地睁大眼睛。你听到了吗？它们来了！那些那些蛞蝓（slugs）！我们不能待在这里！


&E: 你说得对！漫游车！我们需要去货舱（cargo bay）！穿上防护服，现在！


@ &E和&J慌乱地穿上环境防护服（environmental suits），动作因恐惧而笨拙。她们冲进减压舱（decompression chamber），当外舱门被炸开，露出荒凉的外星地表时，空气的嘶嘶声显得多余。`,
      type: "audio",
      links: ["14-SU-E-J", "08-MA-A-Z", "07-MA-A", "09-MA-Z"],
    },
    "14-SU-E-J": {
      id: "14-SU-E-J",
      content: `@ &J和&E跌跌撞撞地踏上荒凉的外星地表（surface），目光扫过岩石地形。&J倒吸一口凉气，她发现了一个熟悉的身影。&L毫无生气的尸体瘫在地上，腹部被划开，鲜血和内脏流出，在他周围排列成一个粗糙的五芒星。


@ 更远处，一堆 grotesque、蛞蝓状的生物在一堆似乎是&M的残骸中扭动，他的身体被肢解并烧焦。它们周围的地面因最近的爆炸而焦黑。


&E: @ &E突然发出一声惊恐的尖叫。几只看似休眠的蛞蝓毫无预兆地苏醒，扑到她身上，它们酸性的身体撕裂了她的防护服。&J甚至还没来得及举起武器，&E的尖叫就戛然而止，她的身体在攻击中倒下。


@ &J，脸上交织着恐惧和悲痛，朝扭动的虫群绝望地开了几枪，但无济于事。泪水滑过她的脸庞，她转身冲刺，沉重的脚步声回荡在外星地貌上，朝着远处的货舱（cargo bay）奔去。`,
      type: "audio",
      links: ["15-CA-J"],
    },
    "15-CA-J": {
      id: "15-CA-J",
      content: `@ &J跌跌撞撞地冲进货舱（cargo bay），喘着粗气，身体发出痛苦的抗议。她瘫倒在一堆板条箱旁，泪水仍在流淌，强迫自己做了几次颤抖的深呼吸，试图让狂跳的心脏平静下来。一分钟后，她撑起身子，爬向备用漫游车，希望能逃脱。她猛地拉开车门爬进去，手忙脚乱地摆弄着控制装置。


&J: @ 绝望的低语。快点，快点！启动！


@ 漫游车噼啪作响，然后熄火了。快速检查后，发现电线烧焦和发动机缸体破裂。货舱（cargo bay）爆炸的火焰一定损坏了它。


&J: 不！不，不，不！


@ 一阵熟悉的湿滑声从货舱（cargo bay）入口传来。&J猛地抬起头。更多的蛞蝓（slugs）。整整一群，蠕动着进来，它们众多的眼睛紧盯着她。她抓起脉冲步枪，双手颤抖，做好了准备。


&J: 想要我？那就来吧！


@ &J开火了，能量束撕裂了那些 grotesque 的生物。蛞蝓（slugs）在酸液四溅中爆炸，但她每消灭一只，就会出现两只。她以绝望催生的凶猛战斗着，在虫群淹没她时发出反抗的尖叫。她的射击变得稀疏，尖叫变成了窒息的喘息，然后……寂静。唯一的声音是蛞蝓（slugs）湿滑的蠕动声，以及空间站系统微弱的嗡鸣。

@devil:
@devil: 但那不是结局，对吧，恶魔猎手（Demonhunter）？我不能让你在没见到我之前死去。不能让你最终都不明白，一直以来你所面对的到底是什么。
@devil:

@note: 看来&J已经迎来了她的结局。结论（CONCLUSION）现已发送至您的收件箱。`,
      type: "audio",
      triggers: ["CONCLUSION"],
      links: [],
      hasDevilContent: !0,
    },
    "1010-LOG-SC": {
      id: "1010-LOG-SC",
      content: `日志条目
用户：指挥官（COMMANDER）克罗斯（CROSS）

日期：10月10日

昨天的报告写到一半就被打断了。

正如我之前所说，漫游车当时正在执行例行的岩石采集勘测任务，突然接收到一个从开普勒-186f（Kepler-186f）地表发出的奇怪的、重复的信号。

这个信号与我以往遇到的任何东西都不一样——既不是自然的，也不完全像任何已知的人造传输。

分析仍在进行中，但初步扫描显示其具有复杂的、结构化的模式。

&R 正在进一步调查该信号。&I 将负责卸下漫游车上的物资，&J 将检查采集到的样本。

 `,
      type: "text",
      links: ["02-CA-I-J"],
    },
    "1009-LOG-RR": {
      id: "1009-LOG-RR",
      content: `日志条目
用户：工程师（ENGINEER）瑞安（RYAN）

日期：10月9日


漫游车正在返回途中。我知道我干这行时间还不长，但我仍然不明白他们当初为什么要把那些岩石放在漫游车上。现在他们又要求我们隔离那些样本？这完全说不通。还有，那个钛制盒子（titanium box）里到底装的是什么？`,
      type: "text",
    },
    "1010-LOG-RR": {
      id: "1010-LOG-RR",
      content: `日志条目
用户：工程师（ENGINEER）瑞安（RYAN）

日期：10月10日


&S 让我将这个信号与我们手头关于开普勒-186f（Kepler-186f）的数据进行比对。
到目前为止，我找不到任何匹配的东西。

就好像它不是来自这里。那些波形……让我毛骨悚然。

更糟的是，&M 对这个发现兴奋不已，他坚信我们找到了外星生命存在的证据。


 `,
      type: "text",
      links: ["01-CA-I-M"],
    },
    "CAMERA-FEEDS": {
      id: "CAMERA-FEEDS",
      content: `安保摄像头 &99 系统协议：

人体实体检测（Human entity detection）通过多模态传感器阵列实现，包括可见光谱分析、红外热特征、声学模式识别以及细微的大气压力变化。这种综合方法确保了精确的存在检测，同时最大限度地减少了侵入性监控。隐私协议（Privacy protocols）规定，对于活跃的驻站人员区域，不存储详细的生物识别数据。

空置（empty）房间监控与节能：
&99 系统持续监控房间占用情况，以识别并记录经常空置的区域。
统计数据：
- 引擎室（engine room）：平均占用率15%（主要在换班期间）。
- 维修舱（maintenance bay）：平均占用率22%（维修时零星使用）。
- 货舱（cargo bay）：平均占用率10%（仅在装卸操作期间）。

针对这些低占用区域的推荐节能措施包括：
1. 自动减少暖通空调（HVAC）运行（例如，调整空调设定点以节省电力）。
2. 未检测到人员存在时，关闭非必要照明。
3. 临时降低非关键环境传感器（non-critical environmental sensors）的优先级或灵敏度，以节省处理能力。
预计这些措施将使这些指定区域的能耗降低18%。`,
      type: "mainframe",
      links: [],
    },
    "CHORES-ROTA": {
      id: "杂务轮值表（CHORES-ROTA）",
      content: `餐厅清洁轮值表（GALLEY CLEANING ROTA）

餐厅（Galley）是我们的主要午餐室、娱乐中心以及通用公共区域。保持其清洁对于驻站人员的士气和卫生至关重要。

每周轮值：
- 第1周：伦尼（Lenny）
- 第2周：亚历克斯（Alex）
- 第3周：扎克（Zack）
- 第4周：艾萨克（Isaac）
- 第5周：鲍比（Bobby）
- 第6周：卡尔（Carl）

请确保在您被分配的那一周结束前彻底清洁餐厅（galley）。职责包括清洗餐具、擦拭台面、扫地/拖地以及清空垃圾桶。`,
      type: "mainframe",
      links: [],
    },
    "POKER-NIGHT": {
      id: "扑克之夜（POKER-NIGHT）",
      content: `扑克之夜（POKER NIGHT）
致相关人士：

我写这封信是为了表达我对最近几次扑克之夜的极度不满。噪音水平已经变得无法接受，持续干扰了未参与活动的驻站人员的睡眠。这是一个小型空间站，餐厅（galley）就在卧室旁边。缺乏适当的休息会影响每个人的工作效率和安全。

此外，我观察到一个令人不安的模式：扎克（Zack）持续输掉他工资中的相当大一部分。他年轻，而且坦白说，相当天真。虽然我理解这是友善的游戏，但目前的情况已接近剥削。我希望这些游戏在进行时，能对同僚们多一些体谅，无论是噪音方面还是公平性方面。

此致，
伊丽莎白·达西医生（Dr. Elizabeth Darcy）

`,
      type: "mainframe",
      links: [],
    },
    "1007-LOG-JD": {
      id: "1007-LOG-JD",
      content: `日志条目
用户：杜邦博士（Dr. DUPONT）

日期：10月8日

我们又将一个样本送过了裂隙（breach）。这次我们用钛合金外壳覆盖了传感器，因为我们知道这种外壳能够承受穿越过程。但这确实会削弱传感器的能力，我们只能通过有限的电磁频谱波段进行观察。

我目前的假设是，连接 尼福尔海姆（Niflheim） 和 瓦纳海姆（Vanaheim） 的 彩虹桥（Bifrost） 是通过一个高维流形到达另一侧的。我还没有和任何人分享这些发现。它蕴含的意义太多，我需要先仔细思考并进行实验，以便能明确证明它。

`,
      type: "mainframe",
      links: [],
    },
    "1008-LOG-JD": {
      id: "1008-LOG-JD",
      content: `日志条目
用户：杜邦博士（Dr. DUPONT）

日期：10月8日

有人在阅读我的日志。我不知道是谁，但我发现防篡改锁被激活了。我将开始加密后续日志，同时将敏感日志归档（archive）放到主机（mainframe）核心（core）深处，空间站上没有人能访问那里。直接删除日志会留下痕迹并引起怀疑。`,
      type: "mainframe",
      links: [],
    },
    cross: {
      id: "cross",
      content: `
用户：指挥官克罗斯（Commander Cross）

这是指挥官克罗斯（Commander Cross）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 尼福尔海姆空间站（Station Niflheim） - 任务第三季度（Q3）报告：关于尼福尔海姆空间站（Station Niflheim）任务第三季度的详细报告。
- 供应链延误 - 紧急：关于影响供应链中断的关键更新。
- 个人近况 - 开普勒-186f（Kepler-186f）上的生活：关于在开普勒-186f（Kepler-186f）上的日常生活和经历个人记述。
- 休假申请 - 返回地球：请求个人休假以返回地球的正式申请。
- 异常报告 - 第7区（Sector 7）：关于在第7区（Sector 7）检测到异常活动的初步报告。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    darcy: {
      id: "darcy",
      content: `
用户：伊丽莎白·达西医生（Dr. Elizabeth Darcy）

这是伊丽莎白·达西医生（Dr. Elizabeth Darcy）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 医疗日志 - 患者 X-5：某特定患者的详细医疗记录。
- 紧急 - 物资申请 - 异源生物制剂（Xenobiotics）：特殊生物物资的申请。
- 个人 - 地球怎么样？我想念下雨天：一条询问地球近况的个人消息。
- 报告 - 空间站健康指标 - 第三季度（Q3）：关于空间站健康和运行指标的季度报告。
- 回复 - 异常报告 - 后续跟进：关于对某项异常进行进一步调查的回复。
- 邀请 - 反重力瑜伽课程：一项休闲活动的邀请。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    arogan: {
      id: "arogan",
      content: `
用户： 飞行员罗根（Pilot Rogan）

这是飞行员罗根（Pilot Rogan）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 调岗申请 - 现役：请求重新分配到更活跃的战斗区域。
- 投诉 - Starflix订阅费上涨：对Starflix流媒体服务近期涨价的不满（grievance）。
- 咨询 - 巡逻路线 - 第4区（Sector 4）：质疑当前巡逻任务的必要性和频率。
- 个人 - 在空间站感到无聊：表达因缺乏飞行员活动而感到沮丧的个人消息。
- 跟进 - 调岗申请状态：查询先前提交的调岗申请的进展。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    drogan: {
      id: "drogan",
      content: `
用户：罗根博士（Dr. Rogan）

这是罗根博士（Dr. Rogan）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 转发 - 殖民地（Colony）物资申请 - 水培区（Hydroponics）：一份关于水培舱（hydroponics bay）所需物资的转发申请。
- 个人 - 妈妈，你还好吗？：一条问候家人的个人消息。
- 报告 - 大气化学成分：一份详细分析空间站内空气化学物质的科学报告。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    dupont: {
      id: "dupont",
      content: `
用户：杜邦博士（Dr. Dupont）

这是杜邦博士（Dr. Dupont）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 机密 - 量子传送门（Quantum Portal）激活序列：高度机密的操作程序，用于激活将两个相距数光年的世界连接在一起的实验性量子传送门（quantum portal）。
- 转发 - 引力异常读数 - 转发的数据日志，显示在第七区（Sector 7）中不寻常的引力波动和红移（redshift）异常。
- 个人 - 给你的旧世界新闻：来自地球同事的个人消息，讨论时事并表达对太空的向往。
- 机密 - 瓦尔哈拉项目（Project Valhalla）进展：关于高度敏感的瓦尔哈拉项目（Project Valhalla）的状态报告，详细说明研究里程碑和后续步骤。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    grimm: {
      id: "grimm",
      content: `
用户：格里姆博士（Dr. Grimm）

这是格里姆博士（Dr. Grimm）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 研究更新 - 开普勒-186f（Kepler-186f）的外星植物群（Xenobiotic Flora）：一份详细说明外星植物生命发现的报告。
- 转发 - 样本分析申请 - 第3区（Sector 3）：一份关于生物样本分析的转发申请。
- 报告 - 生物危害收容协议审查：一份关于关于处理危险生物材料的程序审查。
- 邀请 - 研究甲板（模拟）自然漫步：一项模拟休闲活动的邀请。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    holden: {
      id: "holden",
      content: `
用户：少尉霍尔登（Ensign Holden）

这是少尉霍尔登（Ensign Holden）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 回复 - 食堂（Mess Hall）食物 - 这破玩意是什么？：一份关于食堂（mess hall）食物质量的投诉。
- 转发 - 最佳太空笑话 第3卷：一份转发的太空主题笑话合集。
- 个人 - 你还欠我杯啤酒呢，伙计！：一条关于债务的个人提醒。
- 主题 - 发现了一条去货舱（cargo bay）的新<b>捷径（shortcut）</b>...别告诉任何人：一条关于新发现的<b>捷径（shortcut）</b>的信息。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    jackson: {
      id: "jackson",
      content: `
用户：通讯专家杰克逊（Comms Specialist Jackson）

这是通讯专家杰克逊（Comms Specialist Jackson）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 通讯阵列状态报告 - 第四季度（Q4）：一份关于第四季度通讯阵列性能的全面报告。
- 回复 - 第4区（Sector 4）中继器的信号间歇性问题：回复关于影响第4区（Sector 4）中继器的信号间歇性问题。
- 回复 - 最佳太空笑话 第3卷：回复霍尔登（Holden）转发的太空主题笑话集。
- 转发 - 最新银河新闻摘要：转发一份来自银河系各地近期新闻和事件的汇编。
- 紧急 - 远程扫描中检测到异常：关于远程扫描中检测到异常检测的关键警报。
- 主题 - 通讯控制台静电干扰的快速修复：详细说明通讯控制台静电干扰解决方案的消息。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    kozov: {
      id: "kozov",
      content: `
用户：技术员科兹洛夫（Technician Kozlov）

这是技术员科兹洛夫（Technician Kozlov）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 转发 - 维护计划更新 - 第5区（Sector 5）：转发关于第5区（Sector 5）维护计划的更新。
- 报告 - 人力资源部 - 姓名更正：一份请求修正其姓名在名册（manifest）中拼写错误的报告。这导致他无法顺利结算工资。
- 个人 - 回复 - 老兄，你还欠我杯啤酒呢！：关于一笔未清债务的个人回复。
- 备件申请 - 附清单：一份备件申请，附有所需物品清单。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    ryan: {
      id: "ryan",
      content: `
用户：工程师瑞安（Engineer Ryan）

这是工程师瑞安（Engineer Ryan）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 主题 - 新型生命支持稳定器示意图：关于生命支持稳定器的新示意图。
- 转发 - 地球天气报告：转发一份地球天气报告查询。
- 回复 - 引擎燃料管（Engine fuel lines）故障 - 我的看法：一份关于引擎燃料管（Engine fuel lines）故障的回复，附有个人看法。
- 个人 - 空间站周末计划？：一条询问空间站周末计划的个人消息。
- 请求 - 请为工程部（Engineering）提供更多咖啡！：为工程部Engineering（据称只有他一人）申请额外咖啡供应的请求。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    vance: {
      id: "vance",
      content: `
用户：安保官万斯（Security Officer Vance）

这是安保官万斯（Security Officer Vance）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：：
- 安全警报 - 未经授权的访问尝试 - 研究实验室（Research Lab）：一份警报，详细说明了一次试图未授权访问研究实验室（research laboratory）的尝试。
- 报告 - 外围扫描异常 - 紧急：关于在例行外围扫描期间检测到异常检测的紧急报告。
- 转发 - 新安全协议 - 立即阅读：转发的关于更新后安全程序的信息，需要立即关注。
- 个人 - 下次扑克之夜是什么时候？：一条询问下次扑克游戏时间安排的个人消息。
- 主题 - 增援请求：为加强安全而请求增派人员或资源的正式申请。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    mccoy: {
      id: "mccoy",
      content: `
用户：厨师麦考伊（Chef McCoy）

这是厨师麦考伊（Chef McCoy）在事件发生前最后一周发送的邮件详情。

过去一周发送的邮件摘要：
- 帮我搞点货：一份秘密请求，要求在下次补给投放期间将违禁毒品（contraband drugs）带上空间站。`,
      type: "mainframe",
      style: "email",
      links: [],
    },
    "MAINTENANCE-LOG": {
      id: "维护日志（MAINTENANCE-LOG）",
      content: `维护日志（MAINTENANCEE LOG）
日期：10月9日
单元：生命支持系统（Life Support System）
状态：大气洗涤器检测到微小波动。压差在可接受参数范围内。过滤器更换已安排在下个周期。
备注：少尉霍尔登（Ensign Holden）报告称水培舱（hydroponics bay）附近有“奇怪的气味”。经检查，未发现异常。可能只是藻类的味道。`,
      type: "mainframe",
      links: [],
    },
    "GALLEY-MENU": {
      id: "餐厅菜单（GALLEY-MENU）",
      content: `餐厅菜单（GALLEY MENU） - 10月7日当周

周一：复水炖牛肉（Rehydrated Beef Stroganoff）、合成蔬菜（Synthetic Greens）
周二：蛋白糊惊喜（Protein Paste Surprise）、营养块（Nutrient Blocks）
周三：“主厨特供”（神秘肉类）、加工土豆替代品（Processed Potato Substitute）
周四：藻类肉饼（Algae Patties）、维生素强化肉汁（Vitamin-fortified Gravy）
周五：回收披萨（Recycled Pizza）（配料来自之前餐食的剩余）

备注：由于供应链中断，目前无法供应新鲜农产品。感谢您的理解。`,
      type: "mainframe",
      links: [],
    },
    "RECREATION-SCHEDULE": {
      id: "娱乐活动安排（RECREATION-SCHEDULE）",
      content: `娱乐活动安排（RECREATION SCHEDULE）
10月7日当周

周一：反重力瑜伽Zero-G Yoga（货舱Cargo Bay，19:00）- 指导员：达西医生（Dr. Darcy）
周二：桌游之夜（餐厅Galley，20:00）- 主题：《宇宙征服（Cosmic Conquest）》
周三：电影之夜（餐厅Galley，21:00）- 放映：《火星救援（The Martian）》
周四：扑克之夜（餐厅Galley，20:00）- 组织者：少尉霍尔登（Ensign Holden）（纯属娱乐，禁止高额赌注！）
周五：虚拟现实模拟（水培舱Hydroponics Bay，17:00）- 新增场景！

名额有限的活动请提前报名。`,
      type: "mainframe",
      links: [],
    },
    "jd-journal-10": {
      id: "jd-journal-10",
      content: `日记条目 - 杰姬·杜邦（JOURNAL ENTRY - JACKIE DUPONT）
日期：10月8日

我使用自动驾驶漫游车穿越 <b>彩虹桥（Bifrost）</b> 进行的实验，产生了一些有趣却又令人不安的结果。

首先，附着在漫游车上的任何有机物质，即使是微量，在通过 <b>彩虹桥（Bifrost）</b> 时都会被完全湮灭。它只是在另一端不复存在。这限制了任何载人任务的可能性。

其次，在漫游车进入裂隙和重新出现在另一端之间，存在可测量的时间延迟。这不是瞬时的，这表明其穿越了一个时间行为不同的维度，或者可能经历了一个复杂的重组过程。

最有趣的是，每次成功穿越后，漫游车返回时，其金属表面都会附着一种未知能量的残留物。我们的标准传感器可以探测到它，但无法识别其性质或来源。它会随时间缓慢消散。

今天，我收到了从地球运来的专用设备。一批独特的晶体岩石，据推测能吸收这种未知能量，以及一台便携式能量捕获装置。明天，10月9日，我将进行首次测试：将岩石暴露于最近返回的漫游车，然后尝试用手持设备提取能量。这可能就是我们一直等待的突破。

@note: 为什么这里只有这一篇日志记录？其余部分在哪里？这是&J在紧急情况下故意留下的最终线索吗？为了让某人，任何人，能够理解这里进行的测试的真正本质是什么？`,
      type: "mainframe",
      links: [],
    },
    "DUTY-ROSTER": {
      id: "值班表（DUTY-ROSTER）",
      content: `值班表（DUTY ROSTER） - 第42周

指挥（COMMAND）： 克罗斯（Cross）
科学（SCIENCE）： 罗根D（Rogan D）、杜邦（Dupont）、格里姆（Grimm）
工程（ENGINEERING）： 瑞安（Ryan）、科兹洛夫（Kozlov）
医疗（MEDICAL）： 达西（Darcy）
支援（SUPPORT）： 麦考伊（McCoy）、杰克逊（Jackson）、万斯（Vance）、霍尔登（Holden）
一般勤务（GENERAL DUTIES）： 麦考伊（McCoy）、罗根A（Rogan A）

备注：由于正在进行的异常调查，所有班次均为双倍时长，直至另行通知。`,
      type: "mainframe",
    },
    "SAFETY-GUIDELINES": {
      id: "空间站安全指南（SAFETY-GUIDELINES）",
      content: `空间站安全指南（STATION SAFETY GUIDELINES）

1. 在加压区域以外，务必穿戴真空服（vac-suit）。
2. 发现任何结构异常，请立即报告工程部门（Engineering）。
3. 未经授权，不得接近裂口。
4. 若发生收容失效（containment breach），封锁该区域（sector）并等待安保人员（Security）处理。
5. 健康评估（mandatory）现改为每周一次。`,
      type: "mainframe",
    },
    "STATION-MANUAL": {
      id: "空间站手册（STATION-MANUAL）",
      content: `尼福尔海姆（NIFLHEIM）空间站操作手册

第一节：生命维持
尼福尔海姆空间站（Niflheim Station）的生命维持系统（Life Support System, LSS）是一个为长期居住设计的闭环环境控制系统。它持续监测并调节所有可居住模块内的大气成分、温度、湿度和压力。
关键组件包括：

    - 大气处理器（Atmospheric Processors）： 去除二氧化碳（CO₂），过滤颗粒物，并补充氧气（O₂）。
    - 水回收装置（Water Reclamation Units）： 回收废水，用于可饮用和非饮用用途。
    - 热控系统（Thermal Control Systems）： 维持最佳内部温度。
    - 应急空气洗涤器（Emergency Air Scrubbers）： 在大气污染事件时激活。

    所有生命维持系统（LSS）功能均由空间站的AI集中管理，主控制台提供手动覆盖（manual overrides）功能。定期维护检查必须按规定时间表强制执行。


第二节：电力系统
空间站由地热核心抽能供电。地震活动期间出现波动属正常现象。

第三节：紧急协议
发生紧急情况时，所有人员须遵守以下协议：
    1. 通用警报（General Alarm）：通用警报启动后，立即前往位于维护室（maintenace room）的最近指定安全区。
    2. 失压（Decompression）：如果失压警报响起，立即穿上真空服（vac-suit）。若无可用服装，寻找密封舱室并启动紧急加压。
    3. 火灾（Fire）：启动本地灭火系统。若火势未受控，撤离该区域（sector）并密封舱壁。向指挥部门（Command）报告。
    4. 医疗紧急情况（Medical Emergency）：立即通过通讯器？（comms）联系医疗舱。提供位置和紧急情况性质。若受过培训且环境安全，请施以急救。
    5. 收容失效（Containment Breach）：遵循“安全指南（SAFETY-GUIDELINES）”协议第4条。切勿与漫游车可能带回的任何东西接触。记住，我们仍不完全理解在彩虹桥（Bifrost）中会发生什么。
    6. 通讯故障（Communication Failure）：尝试通过备用（auxiliary）频道与指挥部门（Command）重新建立联系。若失败，按当前任务预先批准的应急计划执行。我们已知晓向中央指挥部发送长距离信息的问题，并已被告知下一班穿梭机将送来新型波发射器。`,
      type: "mainframe",
    },
    "ROVER-MANUAL": {
      id: "漫游车手册（ROVER-MANUAL）",
      content: `漫游车 MK-IV 操作说明

1. 出发前确保电池电量高于80%。
2. 检查胎压和胎面完整性。地表岩石极其锋利。
3. 在崎岖地形上行驶时，速度不得超过 20 公里/小时。
4. 每次任务结束后，漫游车必须返回空间站。
5. 裂隙（breach）并非为生命体设计，穿越期间漫游车应保持自动驾驶。任何试图穿越裂隙（breach）的行为都可能导致重伤甚至死亡。
6. 若通讯中断，立即返回基地。在磁暴期间，自动返回（auto-return）协议不可靠。`,
      type: "mainframe",
    },
    "SUIT-PROTOCOLS": {
      id: "舱外活动服协议（SUIT-PROTOCOLS）",
      content: `舱外活动服协议（EVA SUIT PROTOCOLS）

- 每15分钟检查一次氧气（O₂）水平。
- 监控服装内 抬头显示器（HUD）的完整性。
- 若听到嘶嘶声，立即修补。
- 除非在确认的安全区（green zone），否则切勿摘下头盔。
- 该服装可抵抗酸雨长达30分钟。若雨势加剧，请寻找庇护所。
- 我们的服装数量有限，请像对待自己的孩子一样爱护它们。`,
      type: "mainframe",
    },
    "INCIDENT-REPORT-101": {
      id: "事件报告 #101（INCIDENT-REPORT-101）",
      content: `事件报告 #101
日期：10月1日
报告官员：巴里·万斯（Barry Vance）

主题：午餐时间骚乱

描述：驻站人员霍尔登（Holden）和驻站人员杰克逊（Jackson）就最后一包冻干草莓发生激烈争吵。厨师麦考伊（Chef McCoy）阻止了肢体冲突。双方均受到口头警告。士气低落。`,
      type: "mainframe",
    },
    "SUPPLY-REQUEST": {
      id: "物资申请单（SUPPLY-REQUEST）",
      content: `物资申请单（SUPPLY REQUEST FORM）
申请人：厨师麦考伊（Chef McCoy）

物品清单：
- 真正的咖啡（紧急）
- 新鲜蔬菜（任何种类，拜托了）
- 巧克力
- 威士忌（用于医疗目的）
- 更多草莓（参见事故报告 #101）

`,
      type: "mainframe",
    },
    "SYSTEM-BOOT-LOG": {
      id: "系统启动日志（SYSTEM-BOOT-LOG）",
      content: `系统启动序列（SYSTEM BOOT SEQUENCE）

内核：4.19.0-12-generic

[OK] 挂载文件系统...
[OK] 启动网络服务...
[OK] 初始化安全协议...
[OK] 加载用户配置文件...
[ERROR] 第七区（Sector 7）传感器阵列无响应。
[WARNING] 检测到远程访问
[OK] 远程访问已授权
[OK] 系统就绪。`,
      type: "mainframe",
    },
    "ERROR-LOG-LATEST": {
      id: "最新错误日志（ERROR-LOG-LATEST）",
      content: `最新错误日志（ERROR LOG LATEST）
        
[ERR] 10-09 03:15: 检测到研究实验室（Research Lab）发生未授权访问尝试。
[ERR] 10-09 09:30: 日志文件中检测到异常。数据损坏。
[ERR] 10-10 08:22: 检测到维护室（maintenance room）外壳破损。
[ERR] 10-10 09:45: 货舱（cargo bay）电源故障。
[ERR] 10-08 10:02: 与漫游车1号连接丢失。
[ERR] 10-10 12:10: 研究实验室（research lab）检测到发生火灾。
[ERR] 10-10 18:59: 严重系统故障。主电源离线。备用发电机已启动。`,
      type: "mainframe",
    },
    "rover-outing.jpg": {
      id: "rover-outing.jpg",
      content: `[图像文件：rover-outing.jpg]

@ 一张数码照片，显示杰奎琳·杜邦（Jacqueline Dupont）和艾萨克·科兹洛夫（Isaac Kozlov）站在行星地表（surface）的漫游车旁。他们竖起大拇指，但他们的脸被头盔的反光面罩遮住了。


@ 他们身后的景观是一片荒凉、多石的荒地，上方是苍白而异样的天空。远处可见一道异常的裂缝。


@ 那就是他们所说的裂隙（breach）吗？它会带他们进入 彩虹桥（Bifrost）吗？`,
      type: "mainframe",
    },
    "south-cave.jpg": {
      id: "south-cave.jpg",
      content: `[图像文件：south-cave.jpg]

@ 一张在洞穴内拍摄的弱光照片。生物发光苔藓附着在墙壁上，投射出诡异的绿光。中央，一大片黑色的液体池反射着光线。


@ 池中充满了一种奇特的生物发光液体，散发着柔和的绿光。洞穴墙壁上排列着奇异的生物发光植物，也散发着柔和的绿光。空气中弥漫着一种奇特的甜味。`,
      type: "mainframe",
    },
    "antigrav-yoga.jpg": {
      id: "antigrav-yoga.jpg",
      content: `[图像文件：antigrav-yoga.jpg]

@ 一张抓拍照片：达西医生（Dr. Darcy）和罗根博士（Dr. Rogan）在货舱（cargo bay）的反重力模块中悬浮在半空，尝试在零重力下完成一个复杂的瑜伽姿势。两人都在大笑。


@ 这是在空间站冷峻的工业环境中捕捉到的、罕见的轻松时刻。`,
      type: "mainframe",
    },
  },
  Ir = { foundFiles: ["09-DU-B-J", "1009-TR-ZJ"], files: ul },
  uh = (e) => {
    const t = e.toLowerCase(),
      n = Object.keys(ul).find((r) => r.toLowerCase() === t);
    return ul[n];
  },
  _i = "SPACE_ANOMALY_CORE_KEY",
  dh = (e) => {
    try {
      const t = JSON.stringify(e),
        n = encodeURIComponent(t);
      let r = "";
      for (let s = 0; s < n.length; s++) {
        const i = n.charCodeAt(s) ^ _i.charCodeAt(s % _i.length);
        r += i.toString(16).padStart(2, "0");
      }
      return r;
    } catch (t) {
      return (console.error("Encryption failed", t), null);
    }
  },
  hh = (e) => {
    try {
      try {
        const r = JSON.parse(e);
        if (r && typeof r == "object") return r;
      } catch {}
      let t = "";
      for (let r = 0; r < e.length; r += 2) {
        const s = e.substr(r, 2),
          i = parseInt(s, 16) ^ _i.charCodeAt((r / 2) % _i.length);
        t += String.fromCharCode(i);
      }
      const n = decodeURIComponent(t);
      return JSON.parse(n);
    } catch (t) {
      return (console.error("Decryption failed", t), null);
    }
  },
  kt = () => window.steam !== void 0,
  mS = async (e) => {
    if (kt())
      try {
        return await window.steam.activateAchievement(e);
      } catch (t) {
        return (console.error("Steam achievement error:", t), !1);
      }
    return !1;
  },
  pS = async () => {
    if (kt())
      try {
        return await window.steam.getName();
      } catch (e) {
        return (console.error("Steam name error:", e), null);
      }
    return null;
  },
  fh = async (e, t) => {
    if (kt())
      try {
        return await window.steam.saveFile(e, t);
      } catch (n) {
        return (console.error("Steam save error:", n), !1);
      }
    return !1;
  },
  gS = async (e) => {
    if (kt())
      try {
        return await window.steam.loadFile(e);
      } catch (t) {
        return (console.error("Steam load error:", t), null);
      }
    return null;
  },
  yS = async (e) => {
    if (kt())
      try {
        return await window.steam.activateOverlay(e);
      } catch (t) {
        return (console.error("Steam overlay error:", t), !1);
      }
    return !1;
  };
function vS() {
  var J;
  const [e, t] = A.useState(!0),
    [n, r] = A.useState(""),
    [s, i] = A.useState(!1),
    [o, a] = A.useState(!1),
    [l, c] = A.useState(!1),
    [d, h] = A.useState(!1),
    f = A.useRef(null),
    w = A.useRef(null),
    [y, g] = A.useState({
      screen: "help",
      foundFiles: Ir.foundFiles,
      inbox: ["readme"],
      readInboxFiles: [],
      discoveredCrew: {},
      searchResults: [],
      searchQuery: null,
      currentFile: null,
      newDiscovery: !1,
      history: [],
      currentPath: ["root"],
      adminUnlocked: !1,
      awaitingAdminPassword: !1,
      manifestationRoles: {},
      devilMode: !1,
      devil2Mode: !1,
      playerNotes: [],
      fileLabels: {},
      monitorPower: { engines: 2, lifeSupport: 1, relay: 0 },
    }),
    [T, p] = A.useState(null),
    [m, v] = A.useState(!1),
    [S, E] = A.useState([]),
    I = A.useRef(y.inbox.length);
  A.useEffect(() => {
    var D, L;
    (L = (D = y.currentFile) == null ? void 0 : D.id) != null &&
      L.endsWith("-99") &&
      C("ACH_SECURITY");
  }, [(J = y.currentFile) == null ? void 0 : J.id]);
  const C = (D) => {
      kt() && mS(D);
    },
    x = (D) => {
      E((L) => [D, ...L].slice(0, 10));
    };
  A.useEffect(() => {
    if (y.inbox.length > I.current) {
      const D = y.inbox[y.inbox.length - 1];
      (p(
        D === "MANIFESTATION"
          ? { text: "C0RRUPT3D D4TA R3C3IV3D IN 666BOX", type: "corrupted" }
          : { text: "收件箱中收到新消息", type: "normal" },
      ),
        setTimeout(() => p(null), 3e3));
    }
    I.current = y.inbox.length;
  }, [y.inbox]);
  const O = (D) => {
    try {
      const L = dh(D);
      return (
        localStorage.setItem("spaceAnomalySave", L),
        kt() && fh("save.json", L),
        !0
      );
    } catch (L) {
      return (console.error("Save failed", L), !1);
    }
  };
  if (
    (A.useEffect(() => {
      var D;
      if (y.newDiscovery) {
        (O(y), y.foundFiles.length > 2 && C("ACH_FIRST_FILE"));
        const L = Object.keys(Ir.files).length;
        (y.foundFiles.length >= L && C("ACH_COMPLETIONIST"),
          ((D = y.currentFile) == null ? void 0 : D.id) === "02-CA-I-J" &&
            C("ACH_ON_YOUR_WAY"));
      }
    }, [y.newDiscovery, y.foundFiles]),
    A.useEffect(() => {
      const D = "WHAT HAPPENED TO THE CREW?";
      let L = 0;
      const B = setInterval(() => {
          L <= D.length
            ? (r(D.substring(0, L)), L++)
            : (clearInterval(B), i(!0));
        }, 100),
        K = () => {
          (t(!1),
            a(!0),
            window.removeEventListener("keydown", K),
            window.removeEventListener("click", K));
        };
      return (
        window.addEventListener("keydown", K),
        window.addEventListener("click", K),
        () => {
          (clearInterval(B),
            window.removeEventListener("keydown", K),
            window.removeEventListener("click", K));
        }
      );
    }, []),
    A.useEffect(() => {
      if (o) {
        const D = setTimeout(() => {
          (a(!1),
            (async () => {
              const K = await pS();
              K && console.log("Steam User:", K);
            })(),
            (async () => {
              let K = null;
              if (
                (kt() && (K = await gS("save.json")),
                K || (K = localStorage.getItem("spaceAnomalySave")),
                K)
              )
                try {
                  let b = hh(K);
                  if (!b && K)
                    try {
                      b = JSON.parse(K);
                    } catch (G) {
                      console.error("Failed to parse legacy save", G);
                    }
                  b &&
                    ((b = mh(b)),
                    b.readInboxFiles || (b.readInboxFiles = []),
                    b.currentPath
                      ? b.currentPath.every((W) => Fe[W]) ||
                        (console.warn(
                          "Invalid path detected in save, resetting to root",
                        ),
                        (b.currentPath = ["root"]))
                      : (b.currentPath = ["root"]),
                    b.adminUnlocked === void 0 && (b.adminUnlocked = !1),
                    b.manifestationRoles || (b.manifestationRoles = {}),
                    b.devilMode === void 0 && (b.devilMode = !1),
                    b.devilMode === void 0 && (b.devilMode = !1),
                    b.devil2Mode === void 0 && (b.devil2Mode = !1),
                    b.fileLabels || (b.fileLabels = {}),
                    (b.awaitingAdminPassword = !1),
                    b.adminUnlocked && (b.devilMode = !0),
                    b.manifestationRoles &&
                      Jn.every((W) => b.manifestationRoles[W.id]) &&
                      (b.devil2Mode = !0),
                    b.inbox && (I.current = b.inbox.length),
                    g(b),
                    b.screen === "intro" ? t(!0) : t(!1));
                } catch (b) {
                  console.error("Failed to load save", b);
                }
            })(),
            a(!1));
        }, 2e3);
        return () => clearTimeout(D);
      }
    }, [o]),
    e)
  )
    return u.jsx(Qo, {
      corruptionEffect: !1,
      children: u.jsxs("div", {
        className: "flex flex-col items-center justify-center h-full bg-black",
        children: [
          u.jsxs("div", {
            className: "text-center mb-4",
            children: [
              u.jsxs("h1", {
                className:
                  "text-green-500 font-mono text-xl md:text-3xl tracking-widest px-4",
                children: [
                  n, // 英文打字 "WHAT HAPPENED TO THE CREW?"
                  u.jsx("span", { className: "animate-pulse", children: "_" }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-green-600 font-mono text-sm md:text-lg tracking-widest mt-2",
                children: "驻站人员发生了什么？", // 中文标题静态显示
              }),
            ],
          }),
          s &&
            u.jsxs("div", {
              className: "text-center",
              children: [
                u.jsx("p", {
                  className:
                    "text-green-700 font-mono text-xs md:text-sm tracking-widest opacity-80",
                  children: "游戏制作 by Bushmonkey",
                }),
                u.jsx("p", {
                  className:
                    "text-green-700 font-mono text-xs tracking-widest opacity-60 mt-1",
                  children: "源代码提供 by （我并不知道的大师）/可蘿嵐",
                }),
                u.jsx("p", {
                  className:
                    "text-green-700 font-mono text-xs tracking-widest opacity-60 mt-1",
                  children: "翻译 by DEEPSEEK/明日太远",
                }),
              ],
            }),
        ],
      }),
    });
  if (o)
    return u.jsx(Qo, {
      corruptionEffect: !1,
      children: u.jsx("div", {
        className:
          "flex items-center justify-center h-full text-green-500 font-mono animate-pulse",
        children: "系统初始化...",
      }),
    });
  const M = (D) => {
      if (f.current) {
        const { scrollTop: L, clientHeight: B } = f.current,
          K = 50;
        switch (D) {
          case "ArrowUp":
            f.current.scrollTop = Math.max(0, L - K);
            break;
          case "ArrowDown":
            f.current.scrollTop = L + K;
            break;
          case "PageUp":
            f.current.scrollTop = Math.max(0, L - B);
            break;
          case "PageDown":
            f.current.scrollTop = L + B;
            break;
        }
      }
    },
    j = (D) => {
      var B, K;
      const L = D.toLowerCase().trim();
      if (y.awaitingAdminPassword)
        return L === "alpha-demon"
          ? (g((b) => ({
              ...b,
              awaitingAdminPassword: !1,
              adminUnlocked: !0,
              inbox: b.inbox
                .filter((G) => G !== "manifest")
                .concat(["MANIFESTATION"]),
              devilMode: !0,
            })),
            v(!0),
            setTimeout(() => v(!1), 200),
            p({ text: "C0RRUPT3D D4TA R3C3IV3D IN 666BOX", type: "corrupted" }),
            setTimeout(() => p(null), 3e3),
            C("ACH_ADMIN_UNLOCK"),
            !0)
          : (g((b) => ({ ...b, awaitingAdminPassword: !1 })), !1);
      if (L === "help")
        return (
          g((b) => ({
            ...b,
            history: [
              ...b.history,
              { screen: b.screen, currentFile: b.currentFile },
            ],
            screen: "help",
            newDiscovery: !1,
          })),
          !0
        );
      if (L === "list")
        return (
          g((b) => ({
            ...b,
            history: [
              ...b.history,
              { screen: b.screen, currentFile: b.currentFile },
            ],
            screen: "list",
            newDiscovery: !1,
          })),
          !0
        );
      if (L === "inbox")
        return (
          g((b) => ({
            ...b,
            history: [
              ...b.history,
              { screen: b.screen, currentFile: b.currentFile },
            ],
            screen: "inbox",
            newDiscovery: !1,
          })),
          !0
        );
      if (L === "clear save")
        return (
          localStorage.removeItem("spaceAnomalySave"),
          kt() && fh("save.json", ""),
          window.location.reload(),
          !0
        );
      if (L === "note")
        return (
          g((b) => ({
            ...b,
            history: [
              ...b.history,
              { screen: b.screen, currentFile: b.currentFile },
            ],
            screen: "playerNotes",
            newDiscovery: !1,
          })),
          !0
        );
      if (L.startsWith("note ")) {
        const b = L.substring(5).trim();
        return b
          ? (g((G) => ({
              ...G,
              playerNotes: [
                ...G.playerNotes,
                { id: Date.now(), text: b, timestamp: Date.now() },
              ],
            })),
            !0)
          : !1;
      } else if (L.startsWith("label ")) {
        const b = L.substring(6).trim().split(" ");
        if (b.length >= 2) {
          const G = b[0],
            W = b.slice(1).join(" ").substring(0, 75);
          let Q = null;
          const Y = y.foundFiles.find(
            (X) => X.toLowerCase() === G.toLowerCase(),
          );
          if (Y) Q = Y;
          else if (y.screen === "dir") {
            const X = y.currentPath[y.currentPath.length - 1],
              qe = Fe[X];
            if (qe) {
              const Qe = qe.files.find(
                (we) => we.toLowerCase() === G.toLowerCase(),
              );
              Qe && (Q = Qe);
            }
          }
          if (Q)
            return (
              g((X) => ({ ...X, fileLabels: { ...X.fileLabels, [Q]: W } })),
              !0
            );
        }
        return !1;
      } else {
        if (L === "name")
          return (
            g((b) => ({
              ...b,
              history: [
                ...b.history,
                { screen: b.screen, currentFile: b.currentFile },
              ],
              screen: "crew",
              newDiscovery: !1,
            })),
            !0
          );
        if (L.startsWith("name ")) {
          const b = L.substring(5).trim().split(/\s+/);
          if (b.length >= 4) {
            const G = b[0].toUpperCase(),
              W = b[1].toLowerCase();
            (b[2].toLowerCase(), b.slice(3).join(" ").toLowerCase());
            const Q = Jn.find((Y) => Y.id === G);
            if (Q) {
              const Y = y.inbox.includes("MANIFESTATION"),
                X = b[1].charAt(0).toUpperCase() + b[1].slice(1),
                qe = b[2].charAt(0).toUpperCase() + b[2].slice(1),
                Qe = b
                  .slice(3)
                  .map((De) => De.charAt(0).toUpperCase() + De.slice(1))
                  .join(" ");
              let we = !1;
              return (
                Q.role && W === Q.role.toLowerCase() && (we = !0),
                g((De) => {
                  const Cn = {};
                  if (Y) {
                    if (we) {
                      const gr = {
                        ...De.manifestationRoles,
                        [G]: { role: X, firstName: qe, lastName: Qe },
                      };
                      ((Cn.manifestationRoles = gr),
                        Jn.every((ks) => gr[ks.id]) &&
                          ((Cn.devil2Mode = !0),
                          C("ACH_MANIFESTATION_COMPLETE")));
                    }
                  } else if (!we) {
                    const gr = {
                      ...De.discoveredCrew,
                      [G]: { title: X, firstName: qe, lastName: Qe },
                    };
                    Cn.discoveredCrew = gr;
                    let As = [...De.inbox],
                      ks = De.newDiscovery;
                    (Jn.every((Is) => {
                      const Cs = gr[Is.id];
                      return Cs
                        ? Cs.title.toLowerCase() === Is.title.toLowerCase() &&
                            Cs.firstName.toLowerCase() ===
                              Is.firstName.toLowerCase() &&
                            Cs.lastName.toLowerCase() ===
                              Is.lastName.toLowerCase()
                        : !1;
                    }) &&
                      (As.includes("protocol-lazarus") ||
                        (As.push("protocol-lazarus"),
                        (ks = !0),
                        C("ACH_PROTOCOL_LAZARUS"))),
                      (Cn.inbox = As),
                      (Cn.newDiscovery = ks));
                  }
                  return { ...De, ...Cn };
                }),
                !0
              );
            } else if (G === "0" && y.inbox.includes("MANIFESTATION")) {
              const X = b[1].charAt(0).toUpperCase() + b[1].slice(1),
                qe = b[2].charAt(0).toUpperCase() + b[2].slice(1),
                Qe = b
                  .slice(3)
                  .map((we) => we.charAt(0).toUpperCase() + we.slice(1))
                  .join(" ");
              if (W === "necromancer")
                return (
                  g((we) => {
                    const De = {
                      ...we.manifestationRoles,
                      [G]: { role: X, firstName: qe, lastName: Qe },
                    };
                    return { ...we, manifestationRoles: De };
                  }),
                  !0
                );
            }
          }
          return !1;
        } else {
          if (L === "save") return O(y);
          if (L.startsWith("save ")) {
            const b = L.substring(5).trim();
            if (b)
              try {
                const G =
                    "data:text/plain;charset=utf-8," +
                    encodeURIComponent(dh(y)),
                  W = document.createElement("a");
                return (
                  W.setAttribute("href", G),
                  W.setAttribute(
                    "download",
                    b.endsWith(".json") ? b : b + ".json",
                  ),
                  document.body.appendChild(W),
                  W.click(),
                  W.remove(),
                  !0
                );
              } catch (G) {
                return (console.error("Export failed", G), !1);
              }
            return !1;
          } else {
            if (L === "load") return (w.current && w.current.click(), !0);
            if (L.startsWith("find ")) {
              const b = L.substring(5).trim().split(" ");
              if (b.length >= 1) {
                const G = b[0].toUpperCase();
                let W = [];
                if (/^\d{2}$/.test(G))
                  W = y.foundFiles.filter((Q) => Q.startsWith(`${G}-`));
                else {
                  const Q = new RegExp(`-${G}(?:-|$)`);
                  W = y.foundFiles.filter((Y) => Q.test(Y));
                }
                return (
                  g((Q) => ({
                    ...Q,
                    history: [
                      ...Q.history,
                      { screen: Q.screen, currentFile: Q.currentFile },
                    ],
                    searchResults: W,
                    searchQuery: G,
                    screen: "search",
                  })),
                  !0
                );
              }
              return !1;
            } else if (L.startsWith("steam ")) {
              const b = L.split(" "),
                G = b[1],
                W = b[2];
              return (G === "overlay" && W && yS(W), !0);
            } else {
              if (L === "dir")
                return (B = y.readInboxFiles) != null &&
                  B.includes("protocol-lazarus")
                  ? (g((b) => ({
                      ...b,
                      history: [
                        ...b.history,
                        { screen: b.screen, currentFile: b.currentFile },
                      ],
                      screen: "dir",
                      currentPath: ["root"],
                      newDiscovery: !1,
                    })),
                    !0)
                  : !1;
              if (L.startsWith("dir ")) {
                if (
                  !(
                    (K = y.readInboxFiles) != null &&
                    K.includes("protocol-lazarus")
                  )
                )
                  return !1;
                const b = L.substring(4).trim();
                if (b === "..")
                  return (
                    g((G) => {
                      if (G.currentPath.length > 1) {
                        const W = [...G.currentPath];
                        return (
                          W.pop(),
                          { ...G, currentPath: W, screen: "dir" }
                        );
                      }
                      return G;
                    }),
                    !0
                  );
                if (b === "/admin")
                  return y.adminUnlocked
                    ? !1
                    : (g((G) => ({ ...G, awaitingAdminPassword: !0 })), !0);
                if (b === "/help")
                  return (
                    g((G) => ({
                      ...G,
                      history: [
                        ...G.history,
                        { screen: G.screen, currentFile: G.currentFile },
                      ],
                      screen: "dir-help",
                      newDiscovery: !1,
                    })),
                    !0
                  );
                {
                  const G = y.currentPath[y.currentPath.length - 1],
                    Q = Fe[G].folders.find(
                      (Y) => Fe[Y].name.toLowerCase() === b.toLowerCase(),
                    );
                  return Q
                    ? Fe[Q].locked && !y.adminUnlocked
                      ? !1
                      : (g((X) => ({
                          ...X,
                          currentPath: [...X.currentPath, Q],
                          screen: "dir",
                        })),
                        !0)
                    : !1;
                }
              } else if (L.endsWith(".exe")) {
                const b = y.currentPath[y.currentPath.length - 1],
                  G = Fe[b];
                if (G && G.files.includes(L)) {
                  if (L === "word.exe")
                    return (
                      g((W) => ({
                        ...W,
                        history: [
                          ...W.history,
                          { screen: W.screen, currentFile: W.currentFile },
                        ],
                        screen: "wordle",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                  if (L === "monitor.exe")
                    return (
                      g((W) => ({
                        ...W,
                        history: [
                          ...W.history,
                          {
                            screen: W.screen,
                            currentFile: W.currentFile,
                            currentPath: W.currentPath,
                          },
                        ],
                        screen: "monitor",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                  if (L === "asteroids.exe")
                    return (
                      g((W) => ({
                        ...W,
                        history: [
                          ...W.history,
                          {
                            screen: W.screen,
                            currentFile: W.currentFile,
                            currentPath: W.currentPath,
                          },
                        ],
                        screen: "asteroids",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                  if (L === "map.exe")
                    return (
                      g((W) => ({
                        ...W,
                        history: [
                          ...W.history,
                          {
                            screen: W.screen,
                            currentFile: W.currentFile,
                            currentPath: W.currentPath,
                          },
                        ],
                        screen: "map",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                  if (L === "bifrost.exe")
                    return (
                      g((W) => ({
                        ...W,
                        history: [
                          ...W.history,
                          {
                            screen: W.screen,
                            currentFile: W.currentFile,
                            currentPath: W.currentPath,
                          },
                        ],
                        screen: "bifrost",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                }
                return !1;
              } else {
                const b = uh(L);
                if (b) {
                  if (b.type === "inbox" && !y.inbox.includes(b.id)) return !1;
                  if (
                    b.id.includes("-BI-") &&
                    !(y.monitorPower && y.monitorPower.relay >= 3)
                  )
                    return (
                      g((X) => ({
                        ...X,
                        currentFile: {
                          id: b.id,
                          content:
                            "@ 远程继电站（remote relay）已离线（offline）。你只能看到静态干扰",
                          type: "text",
                        },
                        history: [
                          ...X.history,
                          { screen: X.screen, currentFile: X.currentFile },
                        ],
                        screen: "file",
                        newDiscovery: !1,
                      })),
                      !0
                    );
                  if (b.type === "mainframe") {
                    const Y = y.currentPath[y.currentPath.length - 1],
                      X = Fe[Y];
                    if (!(X && X.files.includes(b.id))) return !1;
                  }
                  let G = [...y.inbox],
                    W = !1;
                  const Q = (Y) => {
                    typeof Y == "string"
                      ? G.includes(Y) || (G.push(Y), (W = !0))
                      : Array.isArray(Y) &&
                        Y.forEach((X) => {
                          G.includes(X) || (G.push(X), (W = !0));
                        });
                  };
                  return (
                    b.triggers && Q(b.triggers),
                    b.trigger && Q(b.trigger),
                    y.foundFiles.includes(b.id)
                      ? g((Y) => ({
                          ...Y,
                          inbox: W ? G : Y.inbox,
                          readInboxFiles:
                            b.type === "inbox" &&
                            !Y.readInboxFiles.includes(b.id)
                              ? [...Y.readInboxFiles, b.id]
                              : Y.readInboxFiles,
                          currentFile: b,
                          history: [
                            ...Y.history,
                            { screen: Y.screen, currentFile: Y.currentFile },
                          ],
                          screen: "file",
                          newDiscovery: !1,
                        }))
                      : g((Y) => ({
                          ...Y,
                          foundFiles: [...Y.foundFiles, b.id],
                          inbox: W ? G : Y.inbox,
                          readInboxFiles:
                            b.type === "inbox" &&
                            !Y.readInboxFiles.includes(b.id)
                              ? [...Y.readInboxFiles, b.id]
                              : Y.readInboxFiles,
                          currentFile: b,
                          history: [
                            ...Y.history,
                            { screen: Y.screen, currentFile: Y.currentFile },
                          ],
                          screen: "file",
                          newDiscovery: !0,
                        })),
                    !y.foundFiles.includes(b.id) &&
                      b.type === "inbox" &&
                      g((Y) => ({
                        ...Y,
                        readInboxFiles: Y.readInboxFiles.includes(b.id)
                          ? Y.readInboxFiles
                          : [...Y.readInboxFiles, b.id],
                      })),
                    !0
                  );
                } else {
                  if (/^(0[1-9]|1[0-7])-BI-99$/i.test(L)) {
                    const Y = L.substring(0, 6).toUpperCase();
                    if (!Object.keys(Ir.files).some((qe) => qe.startsWith(Y))) {
                      const Qe =
                        y.monitorPower && y.monitorPower.relay >= 3
                          ? `@ 正在连接彩虹桥星际中继站（Bifrost Interstellar Relay）... 
@ 连接已建立。 
@ 视觉画面已激活。尼福尔海姆（Niflheim）和瓦纳海姆（Vanaheim）之间的裂隙旋转着难以言喻的色彩，无视着周围黑色的虚空。一座光之桥延伸进入未知。`
                          : "@ 远程继电站（remote relay）已离线（offline）。你只能看到静态干扰";
                      return (
                        g((we) => ({
                          ...we,
                          currentFile: {
                            id: L.toUpperCase(),
                            content: Qe,
                            type: "text",
                          },
                          history: [
                            ...we.history,
                            { screen: we.screen, currentFile: we.currentFile },
                          ],
                          screen: "file",
                          newDiscovery: !1,
                        })),
                        !0
                      );
                    }
                  }
                  const W =
                      /^(0[1-9]|1[0-7])-(BR|ME|CA|KI|GA|EN|SE|RE|CR|RY|DA|JA|DU|KO|RO|MC|VA|HO|GR|MA|SU|HY|SH)-99$/i,
                    Q = L.match(W);
                  if (Q) {
                    const Y = L.substring(0, 6).toUpperCase(),
                      X = Q[2].toUpperCase();
                    if (!Object.keys(Ir.files).some((Qe) => Qe.startsWith(Y))) {
                      const we =
                        {
                          SU: "@ 行星地表（surface）上一切都非常静止，风轻柔地吹动着空气中的尘埃。",
                          HY: "@ 水培舱（hydroponics bay）里很安静。各种各样的植物，以及水流过土壤滋养根系时发出的滴答声，营造出一种平静而舒适的氛围。",
                          KO: "@ The room is possibly empty, but it's hard to tell as  piles of worn clothes, half-eaten rations, and a sprawling array of engine parts and tools fill every available surface.",
                          SH: "@ 货舱（cargo bay）下方的一条黑暗隧道。这条狭窄的通道陡峭地向下延伸，消失在阴影中，四周粗糙的墙壁仿佛从各个方向压迫过来。空气寒冷而沉重，弥漫着泥土和金属的气味。",
                        }[X] || "@ 房间是空的。没有可报告的内容。";
                      return (
                        g((De) => ({
                          ...De,
                          currentFile: {
                            id: L.toUpperCase(),
                            content: we,
                            type: "text",
                          },
                          history: [
                            ...De.history,
                            { screen: De.screen, currentFile: De.currentFile },
                          ],
                          screen: "file",
                          newDiscovery: !1,
                        })),
                        !0
                      );
                    }
                  }
                  return !1;
                }
              }
            }
          }
        }
      }
    },
    Z = (D) => {
      if (D.endsWith(".exe")) {
        if (D === "word.exe") {
          (g((B) => ({
            ...B,
            history: [
              ...B.history,
              { screen: B.screen, currentFile: B.currentFile },
            ],
            screen: "wordle",
            newDiscovery: !1,
          })),
            x("word.exe"));
          return;
        } else if (D === "monitor.exe") {
          (g((B) => ({
            ...B,
            history: [
              ...B.history,
              {
                screen: B.screen,
                currentFile: B.currentFile,
                currentPath: B.currentPath,
              },
            ],
            screen: "monitor",
            newDiscovery: !1,
          })),
            x("monitor.exe"));
          return;
        } else if (D === "asteroids.exe") {
          (g((B) => ({
            ...B,
            history: [
              ...B.history,
              {
                screen: B.screen,
                currentFile: B.currentFile,
                currentPath: B.currentPath,
              },
            ],
            screen: "asteroids",
            newDiscovery: !1,
          })),
            x("asteroids.exe"));
          return;
        } else if (D === "map.exe") {
          (g((B) => ({
            ...B,
            history: [
              ...B.history,
              {
                screen: B.screen,
                currentFile: B.currentFile,
                currentPath: B.currentPath,
              },
            ],
            screen: "map",
            newDiscovery: !1,
          })),
            x("map.exe"));
          return;
        } else if (D === "bifrost.exe") {
          (g((B) => ({
            ...B,
            history: [
              ...B.history,
              {
                screen: B.screen,
                currentFile: B.currentFile,
                currentPath: B.currentPath,
              },
            ],
            screen: "bifrost",
            newDiscovery: !1,
          })),
            x("bifrost.exe"));
          return;
        }
      }
      x(D);
      const L = uh(D);
      if (L) {
        const B = !y.foundFiles.includes(L.id);
        g((K) => ({
          ...K,
          currentFile: L,
          history: [
            ...K.history,
            { screen: K.screen, currentFile: K.currentFile },
          ],
          screen: "file",
          newDiscovery: B,
          foundFiles: B ? [...K.foundFiles, L.id] : K.foundFiles,
          readInboxFiles:
            L.type === "inbox" && !K.readInboxFiles.includes(L.id)
              ? [...K.readInboxFiles, L.id]
              : K.readInboxFiles,
        }));
      }
    },
    ne = (D) => {
      const L = D.target.files[0];
      if (L) {
        const B = new FileReader();
        ((B.onload = (K) => {
          try {
            let b = hh(K.target.result);
            if (!b && K.target.result)
              try {
                b = JSON.parse(K.target.result);
              } catch {}
            b && b.screen && b.foundFiles
              ? ((b = mh(b)),
                b.readInboxFiles || (b.readInboxFiles = []),
                b.currentPath || (b.currentPath = ["root"]),
                b.inbox && (I.current = b.inbox.length),
                g(b),
                w.current && (w.current.value = ""))
              : console.error("Invalid save file format");
          } catch (b) {
            console.error("Error parsing save file", b);
          }
        }),
          B.readAsText(L));
      }
    },
    H = () => {
      g((D) => {
        if (D.history && D.history.length > 0) {
          const L = [...D.history],
            B = L.pop();
          const validScreens = [
            "help", "dir", "inbox", "list", "file", "search",
            "playerNotes", "wordle", "monitor", "asteroids",
            "map", "bifrost", "crew", "dir-help",
          ];
          return {
            ...D,
            screen: B && B.screen && validScreens.includes(B.screen) ? B.screen : "help",
            currentFile: B && B.currentFile || null,
            history: L,
          };
        } else return { ...D, screen: "help" };
      });
    },
    R = () => {
      try {
        g((D) =>
          D.inbox.includes("SALVATION")
            ? D
            : { ...D, inbox: [...D.inbox, "SALVATION"], newDiscovery: !0 },
        );
      } catch (ke) {
        console.error("Wordle onWin error:", ke);
      }
    },
    U = () => {
      C("ACH_ARCADE_PLAYER");
    },
    P = (D) => {
      g((L) => ({
        ...L,
        playerNotes: L.playerNotes.filter((B) => B.id !== D),
      }));
    },
    k = (D, L) => {
      g((B) => {
        const K = B.monitorPower || { engines: 2, lifeSupport: 1, relay: 0 },
          b = K[D] + L;
        return b < 0 ||
          b > 3 ||
          Object.keys(K).reduce((W, Q) => (Q !== D ? W + K[Q] : W), 0) + b > 3
          ? B
          : { ...B, monitorPower: { ...K, [D]: b } };
      });
    },
    F = () => {
      (c(!0),
        C("ACH_THE_END"),
        setTimeout(() => {
          h(!0);
        }, 1e3));
    },
    _ = () => {
      (h(!1), c(!1), t(!0), r(""), i(!1));
    };
  return d
    ? u.jsx(rS, { onComplete: _, manifestationRoles: y.manifestationRoles })
    : u.jsxs(Qo, {
        notification: T,
        shutdown: l,
        corruptionEffect: m,
        children: [
          u.jsx(fS, {
            screen: y.screen,
            foundFiles: y.foundFiles,
            discoveredCrew: y.discoveredCrew,
            currentFile: y.currentFile,
            onFileClick: Z,
            onFolderClick: (D) => {
              (Fe[D].locked && !y.adminUnlocked) ||
                g((B) => ({
                  ...B,
                  history: [
                    ...B.history,
                    {
                      screen: B.screen,
                      currentFile: B.currentFile,
                      currentPath: B.currentPath,
                    },
                  ],
                  currentPath: [...B.currentPath, D],
                  screen: "dir",
                }));
            },
            onFolderUp: () => {
              g((D) => {
                if (D.currentPath.length > 1) {
                  const L = [...D.currentPath];
                  return (
                    L.pop(),
                    {
                      ...D,
                      history: [
                        ...D.history,
                        {
                          screen: D.screen,
                          currentFile: D.currentFile,
                          currentPath: D.currentPath,
                        },
                      ],
                      currentPath: L,
                      screen: "dir",
                    }
                  );
                }
                return D;
              });
            },
            onBack: H,
            scrollRef: f,
            gameState: y,
            files: Ir.files,
            onWordleWin: R,
            onDeletePlayerNote: P,
            onTurnOff: F,
            onPowerUpdate: k,
            onAsteroidsTop: U,
          }),
          u.jsx(iS, {
            onCommand: j,
            onScroll: M,
            disabled: y.screen === "asteroids" || y.screen === "wordle",
            history: S,
            onAddToHistory: x,
            awaitingPassword: y.awaitingAdminPassword,
          }),
          u.jsx("input", {
            type: "file",
            ref: w,
            onChange: ne,
            accept: ".json",
            style: { display: "none" },
          }),
        ],
      });
}
const Ft = (e) => {
    if (!e) return e;
    const t = {
      1: "S",
      2: "R",
      3: "E",
      4: "Z",
      5: "J",
      6: "I",
      7: "A",
      8: "L",
      9: "B",
      10: "C",
      11: "D",
      12: "M",
    };
    if (t[e.toString()]) return t[e.toString()];
    const n = /^(\d{2}-[A-Z]{2,})-(.*)$/,
      r = e.match(n);
    if (r) {
      const s = r[1],
        a = r[2]
          .split("-")
          .filter((c) => c)
          .map((c) => {
            if (t[c]) return t[c];
            const d = parseInt(c, 10).toString();
            return t[d] ? t[d] : c;
          });
      a.sort((c, d) => (c === "0" ? -1 : d === "0" ? 1 : c.localeCompare(d)));
      const l = [...new Set(a)];
      return `${s}-${l.join("-")}`;
    }
    return e === "1009-LOG-JH"
      ? "1009-LOG-CH"
      : e === "1010-LOG-JH"
        ? "1010-LOG-CH"
        : e;
  },
  mh = (e) => {
    const t = { ...e };
    if (
      (t.inbox
        ? (t.inbox.includes("readme") || t.inbox.push("readme"),
          (t.inbox = t.inbox
            .filter((n) => n !== "00-readme" && n !== "readme")
            .map(Ft)),
          t.inbox.includes("readme") || t.inbox.unshift("readme"),
          (t.inbox = [...new Set(t.inbox)]))
        : (t.inbox = ["readme"]),
      t.foundFiles &&
        ((t.foundFiles = t.foundFiles
          .filter((n) => n !== "00-readme" && n !== "readme")
          .map(Ft)),
        (t.foundFiles = [...new Set(t.foundFiles)])),
      t.readInboxFiles &&
        ((t.readInboxFiles = t.readInboxFiles.map(Ft)),
        (t.readInboxFiles = [...new Set(t.readInboxFiles)])),
      t.history &&
        (t.history = t.history.map((n) => ({
          ...n,
          currentFile: n.currentFile
            ? { ...n.currentFile, id: Ft(n.currentFile.id) }
            : null,
        }))),
      t.currentFile &&
        (t.currentFile = { ...t.currentFile, id: Ft(t.currentFile.id) }),
      t.discoveredCrew)
    ) {
      const n = {};
      (Object.keys(t.discoveredCrew).forEach((r) => {
        const s = Ft(r);
        ((n[s] = t.discoveredCrew[r]),
          n[s].firstName === "James" && (n[s].firstName = "Carl"));
      }),
        (t.discoveredCrew = n));
    }
    if (t.manifestationRoles) {
      const n = {};
      (Object.keys(t.manifestationRoles).forEach((r) => {
        const s = Ft(r);
        ((n[s] = t.manifestationRoles[r]),
          n[s].firstName === "James" && (n[s].firstName = "Carl"));
      }),
        (t.manifestationRoles = n));
    }
    if (t.fileLabels) {
      const n = {};
      (Object.keys(t.fileLabels).forEach((r) => {
        const s = Ft(r);
        n[s] = t.fileLabels[r];
      }),
        (t.fileLabels = n));
    }
    return (
      t.monitorPower ||
        (t.monitorPower = { engines: 2, lifeSupport: 1, relay: 0 }),
      t
    );
  };
ta.createRoot(document.getElementById("root")).render(
  u.jsx(ea.StrictMode, { children: u.jsx(vS, {}) }),
);
