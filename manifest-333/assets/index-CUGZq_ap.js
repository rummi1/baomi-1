var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var u = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var ee = Array.isArray;
    function S() {}
    var C = { H: null, A: null, T: null, S: null },
      w = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function te(e, t) {
      return T(e.type, t, e.props);
    }
    function E(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ne(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var re = /\/+/g;
    function ie(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ne(`` + e.key)
        : t.toString(36);
    }
    function ae(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(S, S)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function oe(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), oe(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ie(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(re, `$&/`) + `/`),
              oe(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (E(o) &&
                (o = te(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(re, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ie(a, u)), (c += oe(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + ie(a, u++)), (c += oe(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return oe(ae(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function D(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        oe(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function O(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var k =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      se = {
        map: D,
        forEach: function (e, t, n) {
          D(
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
            D(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            D(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!E(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = se),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return C.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !w.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            w.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = E),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: O };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = C.T,
          n = {};
        C.T = n;
        try {
          var r = e(),
            i = C.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(S, k));
        } catch (e) {
          k(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (C.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return C.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return C.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return C.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return C.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return C.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return C.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return C.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return C.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return C.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return C.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return C.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return C.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return C.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return C.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return C.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return C.H.useRef(e);
      }),
      (e.useState = function (e) {
        return C.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return C.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return C.H.useTransition();
      }),
      (e.version = `19.2.5`));
  }),
  d = o((e, t) => {
    t.exports = u();
  });
Object.freeze({ status: `aborted` });
function f(e, t, n) {
  function r(n, r) {
    if (
      (n._zod ||
        Object.defineProperty(n, `_zod`, {
          value: { def: r, constr: o, traits: new Set() },
          enumerable: !1,
        }),
      n._zod.traits.has(e))
    )
      return;
    (n._zod.traits.add(e), t(n, r));
    let i = o.prototype,
      a = Object.keys(i);
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      t in n || (n[t] = i[t].bind(n));
    }
  }
  let i = n?.Parent ?? Object;
  class a extends i {}
  Object.defineProperty(a, `name`, { value: e });
  function o(e) {
    var t;
    let i = n?.Parent ? new a() : this;
    (r(i, e), (t = i._zod).deferred ?? (t.deferred = []));
    for (let e of i._zod.deferred) e();
    return i;
  }
  return (
    Object.defineProperty(o, `init`, { value: r }),
    Object.defineProperty(o, Symbol.hasInstance, {
      value: (t) =>
        n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e),
    }),
    Object.defineProperty(o, `name`, { value: e }),
    o
  );
}
var p = class extends Error {
    constructor() {
      super(
        `Encountered Promise during synchronous parse. Use .parseAsync() instead.`,
      );
    }
  },
  m = class extends Error {
    constructor(e) {
      (super(`Encountered unidirectional transform during encode: ${e}`),
        (this.name = `ZodEncodeError`));
    }
  },
  h = {};
function g(e) {
  return (e && Object.assign(h, e), h);
}
function _(e) {
  let t = Object.values(e).filter((e) => typeof e == `number`);
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
function v(e, t) {
  return typeof t == `bigint` ? t.toString() : t;
}
function y(e) {
  return {
    get value() {
      {
        let t = e();
        return (Object.defineProperty(this, `value`, { value: t }), t);
      }
      throw Error(`cached value already set`);
    },
  };
}
function b(e) {
  return e == null;
}
function x(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
var ee = Symbol(`evaluating`);
function S(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== ee) return (r === void 0 && ((r = ee), (r = n())), r);
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function C(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function w(...e) {
  let t = {};
  for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
  return Object.defineProperties({}, t);
}
function T(e) {
  return JSON.stringify(e);
}
function te(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
var E = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {};
function ne(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var re = y(() => {
  if (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`))
    return !1;
  try {
    return (Function(``), !0);
  } catch {
    return !1;
  }
});
function ie(e) {
  if (ne(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return !(
    ne(n) === !1 ||
    Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) === !1
  );
}
function ae(e) {
  return ie(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var oe = new Set([`string`, `number`, `symbol`]);
function D(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function O(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function k(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == `string` ? { ...t, error: () => t.error } : t
  );
}
function se(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`,
  );
}
(-Number.MAX_VALUE, Number.MAX_VALUE);
function ce(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.pick() cannot be used on object schemas containing refinements`,
    );
  return O(
    e,
    w(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (C(this, `shape`, e), e);
      },
      checks: [],
    }),
  );
}
function le(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(
      `.omit() cannot be used on object schemas containing refinements`,
    );
  return O(
    e,
    w(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (C(this, `shape`, r), r);
      },
      checks: [],
    }),
  );
}
function ue(e, t) {
  if (!ie(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return O(
    e,
    w(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (C(this, `shape`, n), n);
      },
    }),
  );
}
function A(e, t) {
  if (!ie(t))
    throw Error(`Invalid input to safeExtend: expected a plain object`);
  return O(
    e,
    w(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (C(this, `shape`, n), n);
      },
    }),
  );
}
function de(e, t) {
  return O(
    e,
    w(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (C(this, `shape`, n), n);
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: [],
    }),
  );
}
function fe(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0)
    throw Error(
      `.partial() cannot be used on object schemas containing refinements`,
    );
  return O(
    t,
    w(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] &&
              (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else
          for (let t in r)
            i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (C(this, `shape`, i), i);
      },
      checks: [],
    }),
  );
}
function pe(e, t, n) {
  return O(
    t,
    w(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else
          for (let t in r)
            i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (C(this, `shape`, i), i);
      },
    }),
  );
}
function me(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function he(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function ge(e) {
  return typeof e == `string` ? e : e?.message;
}
function _e(e, t, n) {
  let r = { ...e, path: e.path ?? [] };
  return (
    e.message ||
      (r.message =
        ge(e.inst?._zod.def?.error?.(e)) ??
        ge(t?.error?.(e)) ??
        ge(n.customError?.(e)) ??
        ge(n.localeError?.(e)) ??
        `Invalid input`),
    delete r.inst,
    delete r.continue,
    t?.reportInput || delete r.input,
    r
  );
}
function ve(e) {
  return Array.isArray(e)
    ? `array`
    : typeof e == `string`
      ? `string`
      : `unknown`;
}
function ye(...e) {
  let [t, n, r] = e;
  return typeof t == `string`
    ? { message: t, code: `custom`, input: n, inst: r }
    : { ...t };
}
var be = (e, t) => {
    ((e.name = `$ZodError`),
      Object.defineProperty(e, `_zod`, { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, `issues`, { value: t, enumerable: !1 }),
      (e.message = JSON.stringify(t, v, 2)),
      Object.defineProperty(e, `toString`, {
        value: () => e.message,
        enumerable: !1,
      }));
  },
  xe = f(`$ZodError`, be),
  Se = f(`$ZodError`, be, { Parent: Error });
function Ce(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0
      ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
      : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function we(e, t = (e) => e.message) {
  let n = { _errors: [] },
    r = (e) => {
      for (let i of e.issues)
        if (i.code === `invalid_union` && i.errors.length)
          i.errors.map((e) => r({ issues: e }));
        else if (i.code === `invalid_key`) r({ issues: i.issues });
        else if (i.code === `invalid_element`) r({ issues: i.issues });
        else if (i.path.length === 0) n._errors.push(t(i));
        else {
          let e = n,
            r = 0;
          for (; r < i.path.length; ) {
            let n = i.path[r];
            (r === i.path.length - 1
              ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
              : (e[n] = e[n] || { _errors: [] }),
              (e = e[n]),
              r++);
          }
        }
    };
  return (r(e), n);
}
var Te = (e) => (t, n, r, i) => {
    let a = r ? Object.assign(r, { async: !1 }) : { async: !1 },
      o = t._zod.run({ value: n, issues: [] }, a);
    if (o instanceof Promise) throw new p();
    if (o.issues.length) {
      let t = new (i?.Err ?? e)(o.issues.map((e) => _e(e, a, g())));
      throw (E(t, i?.callee), t);
    }
    return o.value;
  },
  Ee = (e) => async (t, n, r, i) => {
    let a = r ? Object.assign(r, { async: !0 }) : { async: !0 },
      o = t._zod.run({ value: n, issues: [] }, a);
    if ((o instanceof Promise && (o = await o), o.issues.length)) {
      let t = new (i?.Err ?? e)(o.issues.map((e) => _e(e, a, g())));
      throw (E(t, i?.callee), t);
    }
    return o.value;
  },
  De = (e) => (t, n, r) => {
    let i = r ? { ...r, async: !1 } : { async: !1 },
      a = t._zod.run({ value: n, issues: [] }, i);
    if (a instanceof Promise) throw new p();
    return a.issues.length
      ? {
          success: !1,
          error: new (e ?? xe)(a.issues.map((e) => _e(e, i, g()))),
        }
      : { success: !0, data: a.value };
  },
  Oe = De(Se),
  ke = (e) => async (t, n, r) => {
    let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
      a = t._zod.run({ value: n, issues: [] }, i);
    return (
      a instanceof Promise && (a = await a),
      a.issues.length
        ? { success: !1, error: new e(a.issues.map((e) => _e(e, i, g()))) }
        : { success: !0, data: a.value }
    );
  },
  Ae = ke(Se),
  je = (e) => (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return Te(e)(t, n, i);
  },
  Me = (e) => (t, n, r) => Te(e)(t, n, r),
  Ne = (e) => async (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return Ee(e)(t, n, i);
  },
  Pe = (e) => async (t, n, r) => Ee(e)(t, n, r),
  Fe = (e) => (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return De(e)(t, n, i);
  },
  Ie = (e) => (t, n, r) => De(e)(t, n, r),
  Le = (e) => async (t, n, r) => {
    let i = r
      ? Object.assign(r, { direction: `backward` })
      : { direction: `backward` };
    return ke(e)(t, n, i);
  },
  Re = (e) => async (t, n, r) => ke(e)(t, n, r),
  ze = /^[cC][^\s-]{8,}$/,
  Be = /^[0-9a-z]+$/,
  Ve = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  He = /^[0-9a-vA-V]{20}$/,
  Ue = /^[A-Za-z0-9]{27}$/,
  We = /^[a-zA-Z0-9_-]{21}$/,
  Ge =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  Ke =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  qe = (e) =>
    e
      ? RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  Je =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Ye = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function Xe() {
  return new RegExp(Ye, `u`);
}
var Ze =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Qe =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  $e =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  et =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  tt =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  nt = /^[A-Za-z0-9_-]*$/,
  rt = /^\+[1-9]\d{6,14}$/,
  it = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,
  at = RegExp(`^${it}$`);
function ot(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function st(e) {
  return RegExp(`^${ot(e)}$`);
}
function ct(e) {
  let t = ot({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``),
    e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${it}T(?:${r})$`);
}
var lt = (e) => {
    let t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}`
      : `[\\s\\S]*`;
    return RegExp(`^${t}$`);
  },
  ut = /^(?:true|false)$/i,
  dt = /^[^A-Z]*$/,
  ft = /^[^a-z]*$/,
  pt = f(`$ZodCheck`, (e, t) => {
    var n;
    ((e._zod ??= {}),
      (e._zod.def = t),
      (n = e._zod).onattach ?? (n.onattach = []));
  }),
  mt = f(`$ZodCheckMaxLength`, (e, t) => {
    var n;
    (pt.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !b(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag.maximum ?? 1 / 0;
        t.maximum < n && (e._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        let r = n.value;
        if (r.length <= t.maximum) return;
        let i = ve(r);
        n.issues.push({
          origin: i,
          code: `too_big`,
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  ht = f(`$ZodCheckMinLength`, (e, t) => {
    var n;
    (pt.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !b(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag.minimum ?? -1 / 0;
        t.minimum > n && (e._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        let r = n.value;
        if (r.length >= t.minimum) return;
        let i = ve(r);
        n.issues.push({
          origin: i,
          code: `too_small`,
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  gt = f(`$ZodCheckLengthEquals`, (e, t) => {
    var n;
    (pt.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (e) => {
          let t = e.value;
          return !b(t) && t.length !== void 0;
        }),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag;
        ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
      }),
      (e._zod.check = (n) => {
        let r = n.value,
          i = r.length;
        if (i === t.length) return;
        let a = ve(r),
          o = i > t.length;
        n.issues.push({
          origin: a,
          ...(o
            ? { code: `too_big`, maximum: t.length }
            : { code: `too_small`, minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  _t = f(`$ZodCheckStringFormat`, (e, t) => {
    var n, r;
    (pt.init(e, t),
      e._zod.onattach.push((e) => {
        let n = e._zod.bag;
        ((n.format = t.format),
          t.pattern && ((n.patterns ??= new Set()), n.patterns.add(t.pattern)));
      }),
      t.pattern
        ? ((n = e._zod).check ??
          (n.check = (n) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(n.value) &&
                n.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: t.format,
                  input: n.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((r = e._zod).check ?? (r.check = () => {})));
  }),
  vt = f(`$ZodCheckRegex`, (e, t) => {
    (_t.init(e, t),
      (e._zod.check = (n) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(n.value) &&
            n.issues.push({
              origin: `string`,
              code: `invalid_format`,
              format: `regex`,
              input: n.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  yt = f(`$ZodCheckLowerCase`, (e, t) => {
    ((t.pattern ??= dt), _t.init(e, t));
  }),
  bt = f(`$ZodCheckUpperCase`, (e, t) => {
    ((t.pattern ??= ft), _t.init(e, t));
  }),
  xt = f(`$ZodCheckIncludes`, (e, t) => {
    pt.init(e, t);
    let n = D(t.includes),
      r = new RegExp(
        typeof t.position == `number` ? `^.{${t.position}}${n}` : n,
      );
    ((t.pattern = r),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(r));
      }),
      (e._zod.check = (n) => {
        n.value.includes(t.includes, t.position) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `includes`,
            includes: t.includes,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  St = f(`$ZodCheckStartsWith`, (e, t) => {
    pt.init(e, t);
    let n = RegExp(`^${D(t.prefix)}.*`);
    ((t.pattern ??= n),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(n));
      }),
      (e._zod.check = (n) => {
        n.value.startsWith(t.prefix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `starts_with`,
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Ct = f(`$ZodCheckEndsWith`, (e, t) => {
    pt.init(e, t);
    let n = RegExp(`.*${D(t.suffix)}$`);
    ((t.pattern ??= n),
      e._zod.onattach.push((e) => {
        let t = e._zod.bag;
        ((t.patterns ??= new Set()), t.patterns.add(n));
      }),
      (e._zod.check = (n) => {
        n.value.endsWith(t.suffix) ||
          n.issues.push({
            origin: `string`,
            code: `invalid_format`,
            format: `ends_with`,
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  wt = f(`$ZodCheckOverwrite`, (e, t) => {
    (pt.init(e, t),
      (e._zod.check = (e) => {
        e.value = t.tx(e.value);
      }));
  }),
  Tt = class {
    constructor(e = []) {
      ((this.content = []), (this.indent = 0), this && (this.args = e));
    }
    indented(e) {
      ((this.indent += 1), e(this), --this.indent);
    }
    write(e) {
      if (typeof e == `function`) {
        (e(this, { execution: `sync` }), e(this, { execution: `async` }));
        return;
      }
      let t = e
          .split(
            `
`,
          )
          .filter((e) => e),
        n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
        r = t
          .map((e) => e.slice(n))
          .map((e) => ` `.repeat(this.indent * 2) + e);
      for (let e of r) this.content.push(e);
    }
    compile() {
      let e = Function,
        t = this?.args,
        n = [...(this?.content ?? [``]).map((e) => `  ${e}`)];
      return new e(
        ...t,
        n.join(`
`),
      );
    }
  },
  Et = { major: 4, minor: 3, patch: 6 },
  Dt = f(`$ZodType`, (e, t) => {
    var n;
    ((e ??= {}),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Et));
    let r = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has(`$ZodCheck`) && r.unshift(e);
    for (let t of r) for (let n of t._zod.onattach) n(e);
    if (r.length === 0)
      ((n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (e, t, n) => {
          let r = me(e),
            i;
          for (let a of t) {
            if (a._zod.def.when) {
              if (!a._zod.def.when(e)) continue;
            } else if (r) continue;
            let t = e.issues.length,
              o = a._zod.check(e);
            if (o instanceof Promise && n?.async === !1) throw new p();
            if (i || o instanceof Promise)
              i = (i ?? Promise.resolve()).then(async () => {
                (await o, e.issues.length !== t && (r ||= me(e, t)));
              });
            else {
              if (e.issues.length === t) continue;
              r ||= me(e, t);
            }
          }
          return i ? i.then(() => e) : e;
        },
        n = (n, i, a) => {
          if (me(n)) return ((n.aborted = !0), n);
          let o = t(i, r, a);
          if (o instanceof Promise) {
            if (a.async === !1) throw new p();
            return o.then((t) => e._zod.parse(t, a));
          }
          return e._zod.parse(o, a);
        };
      e._zod.run = (i, a) => {
        if (a.skipChecks) return e._zod.parse(i, a);
        if (a.direction === `backward`) {
          let t = e._zod.parse(
            { value: i.value, issues: [] },
            { ...a, skipChecks: !0 },
          );
          return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
        }
        let o = e._zod.parse(i, a);
        if (o instanceof Promise) {
          if (a.async === !1) throw new p();
          return o.then((e) => t(e, r, a));
        }
        return t(o, r, a);
      };
    }
    S(e, `~standard`, () => ({
      validate: (t) => {
        try {
          let n = Oe(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return Ae(e, t).then((e) =>
            e.success ? { value: e.data } : { issues: e.error?.issues },
          );
        }
      },
      vendor: `zod`,
      version: 1,
    }));
  }),
  Ot = f(`$ZodString`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? lt(e._zod.bag)),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch {}
        return (
          typeof n.value == `string` ||
            n.issues.push({
              expected: `string`,
              code: `invalid_type`,
              input: n.value,
              inst: e,
            }),
          n
        );
      }));
  }),
  j = f(`$ZodStringFormat`, (e, t) => {
    (_t.init(e, t), Ot.init(e, t));
  }),
  kt = f(`$ZodGUID`, (e, t) => {
    ((t.pattern ??= Ke), j.init(e, t));
  }),
  At = f(`$ZodUUID`, (e, t) => {
    if (t.version) {
      let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ??= qe(e);
    } else t.pattern ??= qe();
    j.init(e, t);
  }),
  jt = f(`$ZodEmail`, (e, t) => {
    ((t.pattern ??= Je), j.init(e, t));
  }),
  Mt = f(`$ZodURL`, (e, t) => {
    (j.init(e, t),
      (e._zod.check = (n) => {
        try {
          let r = n.value.trim(),
            i = new URL(r);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(i.hostname) ||
              n.issues.push({
                code: `invalid_format`,
                format: `url`,
                note: `Invalid hostname`,
                pattern: t.hostname.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                i.protocol.endsWith(`:`) ? i.protocol.slice(0, -1) : i.protocol,
              ) ||
                n.issues.push({
                  code: `invalid_format`,
                  format: `url`,
                  note: `Invalid protocol`,
                  pattern: t.protocol.source,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })),
            t.normalize ? (n.value = i.href) : (n.value = r));
          return;
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Nt = f(`$ZodEmoji`, (e, t) => {
    ((t.pattern ??= Xe()), j.init(e, t));
  }),
  Pt = f(`$ZodNanoID`, (e, t) => {
    ((t.pattern ??= We), j.init(e, t));
  }),
  Ft = f(`$ZodCUID`, (e, t) => {
    ((t.pattern ??= ze), j.init(e, t));
  }),
  It = f(`$ZodCUID2`, (e, t) => {
    ((t.pattern ??= Be), j.init(e, t));
  }),
  Lt = f(`$ZodULID`, (e, t) => {
    ((t.pattern ??= Ve), j.init(e, t));
  }),
  Rt = f(`$ZodXID`, (e, t) => {
    ((t.pattern ??= He), j.init(e, t));
  }),
  zt = f(`$ZodKSUID`, (e, t) => {
    ((t.pattern ??= Ue), j.init(e, t));
  }),
  Bt = f(`$ZodISODateTime`, (e, t) => {
    ((t.pattern ??= ct(t)), j.init(e, t));
  }),
  Vt = f(`$ZodISODate`, (e, t) => {
    ((t.pattern ??= at), j.init(e, t));
  }),
  Ht = f(`$ZodISOTime`, (e, t) => {
    ((t.pattern ??= st(t)), j.init(e, t));
  }),
  Ut = f(`$ZodISODuration`, (e, t) => {
    ((t.pattern ??= Ge), j.init(e, t));
  }),
  Wt = f(`$ZodIPv4`, (e, t) => {
    ((t.pattern ??= Ze), j.init(e, t), (e._zod.bag.format = `ipv4`));
  }),
  Gt = f(`$ZodIPv6`, (e, t) => {
    ((t.pattern ??= Qe),
      j.init(e, t),
      (e._zod.bag.format = `ipv6`),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `ipv6`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Kt = f(`$ZodCIDRv4`, (e, t) => {
    ((t.pattern ??= $e), j.init(e, t));
  }),
  qt = f(`$ZodCIDRv6`, (e, t) => {
    ((t.pattern ??= et),
      j.init(e, t),
      (e._zod.check = (n) => {
        let r = n.value.split(`/`);
        try {
          if (r.length !== 2) throw Error();
          let [e, t] = r;
          if (!t) throw Error();
          let n = Number(t);
          if (`${n}` !== t || n < 0 || n > 128) throw Error();
          new URL(`http://[${e}]`);
        } catch {
          n.issues.push({
            code: `invalid_format`,
            format: `cidrv6`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function Jt(e) {
  if (e === ``) return !0;
  if (e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var Yt = f(`$ZodBase64`, (e, t) => {
  ((t.pattern ??= tt),
    j.init(e, t),
    (e._zod.bag.contentEncoding = `base64`),
    (e._zod.check = (n) => {
      Jt(n.value) ||
        n.issues.push({
          code: `invalid_format`,
          format: `base64`,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function Xt(e) {
  if (!nt.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Jt(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
var Zt = f(`$ZodBase64URL`, (e, t) => {
    ((t.pattern ??= nt),
      j.init(e, t),
      (e._zod.bag.contentEncoding = `base64url`),
      (e._zod.check = (n) => {
        Xt(n.value) ||
          n.issues.push({
            code: `invalid_format`,
            format: `base64url`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Qt = f(`$ZodE164`, (e, t) => {
    ((t.pattern ??= rt), j.init(e, t));
  });
function $t(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !(
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && (!(`alg` in i) || i.alg !== t))
    );
  } catch {
    return !1;
  }
}
var en = f(`$ZodJWT`, (e, t) => {
    (j.init(e, t),
      (e._zod.check = (n) => {
        $t(n.value, t.alg) ||
          n.issues.push({
            code: `invalid_format`,
            format: `jwt`,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  tn = f(`$ZodBoolean`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.pattern = ut),
      (e._zod.parse = (n, r) => {
        if (t.coerce)
          try {
            n.value = !!n.value;
          } catch {}
        let i = n.value;
        return (
          typeof i == `boolean` ||
            n.issues.push({
              expected: `boolean`,
              code: `invalid_type`,
              input: i,
              inst: e,
            }),
          n
        );
      }));
  }),
  nn = f(`$ZodUnknown`, (e, t) => {
    (Dt.init(e, t), (e._zod.parse = (e) => e));
  }),
  rn = f(`$ZodNever`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.parse = (t, n) => (
        t.issues.push({
          expected: `never`,
          code: `invalid_type`,
          input: t.value,
          inst: e,
        }),
        t
      )));
  });
function an(e, t, n) {
  (e.issues.length && t.issues.push(...he(n, e.issues)),
    (t.value[n] = e.value));
}
var on = f(`$ZodArray`, (e, t) => {
  (Dt.init(e, t),
    (e._zod.parse = (n, r) => {
      let i = n.value;
      if (!Array.isArray(i))
        return (
          n.issues.push({
            expected: `array`,
            code: `invalid_type`,
            input: i,
            inst: e,
          }),
          n
        );
      n.value = Array(i.length);
      let a = [];
      for (let e = 0; e < i.length; e++) {
        let o = i[e],
          s = t.element._zod.run({ value: o, issues: [] }, r);
        s instanceof Promise ? a.push(s.then((t) => an(t, n, e))) : an(s, n, e);
      }
      return a.length ? Promise.all(a).then(() => n) : n;
    }));
});
function sn(e, t, n, r, i) {
  if (e.issues.length) {
    if (i && !(n in r)) return;
    t.issues.push(...he(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function cn(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = se(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n),
  };
}
function ln(e, t, n, r, i, a) {
  let o = [],
    s = i.keySet,
    c = i.catchall._zod,
    l = c.def.type,
    u = c.optout === `optional`;
  for (let i in t) {
    if (s.has(i)) continue;
    if (l === `never`) {
      o.push(i);
      continue;
    }
    let a = c.run({ value: t[i], issues: [] }, r);
    a instanceof Promise
      ? e.push(a.then((e) => sn(e, n, i, t, u)))
      : sn(a, n, i, t, u);
  }
  return (
    o.length &&
      n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
var un = f(`$ZodObject`, (e, t) => {
    if ((Dt.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
      let e = t.shape;
      Object.defineProperty(t, `shape`, {
        get: () => {
          let n = { ...e };
          return (Object.defineProperty(t, `shape`, { value: n }), n);
        },
      });
    }
    let n = y(() => cn(t));
    S(e._zod, `propValues`, () => {
      let e = t.shape,
        n = {};
      for (let t in e) {
        let r = e[t]._zod;
        if (r.values) {
          n[t] ?? (n[t] = new Set());
          for (let e of r.values) n[t].add(e);
        }
      }
      return n;
    });
    let r = ne,
      i = t.catchall,
      a;
    e._zod.parse = (t, o) => {
      a ??= n.value;
      let s = t.value;
      if (!r(s))
        return (
          t.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: s,
            inst: e,
          }),
          t
        );
      t.value = {};
      let c = [],
        l = a.shape;
      for (let e of a.keys) {
        let n = l[e],
          r = n._zod.optout === `optional`,
          i = n._zod.run({ value: s[e], issues: [] }, o);
        i instanceof Promise
          ? c.push(i.then((n) => sn(n, t, e, s, r)))
          : sn(i, t, e, s, r);
      }
      return i
        ? ln(c, s, t, o, n.value, e)
        : c.length
          ? Promise.all(c).then(() => t)
          : t;
    };
  }),
  dn = f(`$ZodObjectJIT`, (e, t) => {
    un.init(e, t);
    let n = e._zod.parse,
      r = y(() => cn(t)),
      i = (e) => {
        let t = new Tt([`shape`, `payload`, `ctx`]),
          n = r.value,
          i = (e) => {
            let t = T(e);
            return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
          };
        t.write(`const input = payload.value;`);
        let a = Object.create(null),
          o = 0;
        for (let e of n.keys) a[e] = `key_${o++}`;
        t.write(`const newResult = {};`);
        for (let r of n.keys) {
          let n = a[r],
            o = T(r),
            s = e[r]?._zod?.optout === `optional`;
          (t.write(`const ${n} = ${i(r)};`),
            s
              ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
              : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `));
        }
        (t.write(`payload.value = newResult;`), t.write(`return payload;`));
        let s = t.compile();
        return (t, n) => s(e, t, n);
      },
      a,
      o = ne,
      s = !h.jitless,
      c = s && re.value,
      l = t.catchall,
      u;
    e._zod.parse = (d, f) => {
      u ??= r.value;
      let p = d.value;
      return o(p)
        ? s && c && f?.async === !1 && f.jitless !== !0
          ? ((a ||= i(t.shape)), (d = a(d, f)), l ? ln([], p, d, f, u, e) : d)
          : n(d, f)
        : (d.issues.push({
            expected: `object`,
            code: `invalid_type`,
            input: p,
            inst: e,
          }),
          d);
    };
  });
function fn(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !me(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => _e(e, r, g()))),
      }),
      t);
}
var pn = f(`$ZodUnion`, (e, t) => {
    (Dt.init(e, t),
      S(e._zod, `optin`, () =>
        t.options.some((e) => e._zod.optin === `optional`)
          ? `optional`
          : void 0,
      ),
      S(e._zod, `optout`, () =>
        t.options.some((e) => e._zod.optout === `optional`)
          ? `optional`
          : void 0,
      ),
      S(e._zod, `values`, () => {
        if (t.options.every((e) => e._zod.values))
          return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
      }),
      S(e._zod, `pattern`, () => {
        if (t.options.every((e) => e._zod.pattern)) {
          let e = t.options.map((e) => e._zod.pattern);
          return RegExp(`^(${e.map((e) => x(e.source)).join(`|`)})$`);
        }
      }));
    let n = t.options.length === 1,
      r = t.options[0]._zod.run;
    e._zod.parse = (i, a) => {
      if (n) return r(i, a);
      let o = !1,
        s = [];
      for (let e of t.options) {
        let t = e._zod.run({ value: i.value, issues: [] }, a);
        if (t instanceof Promise) (s.push(t), (o = !0));
        else {
          if (t.issues.length === 0) return t;
          s.push(t);
        }
      }
      return o ? Promise.all(s).then((t) => fn(t, i, e, a)) : fn(s, i, e, a);
    };
  }),
  mn = f(`$ZodIntersection`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.parse = (e, n) => {
        let r = e.value,
          i = t.left._zod.run({ value: r, issues: [] }, n),
          a = t.right._zod.run({ value: r, issues: [] }, n);
        return i instanceof Promise || a instanceof Promise
          ? Promise.all([i, a]).then(([t, n]) => gn(e, t, n))
          : gn(e, i, a);
      }));
  });
function hn(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (ie(e) && ie(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = hn(e[n], t[n]);
      if (!r.valid)
        return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = hn(i, a);
      if (!o.valid)
        return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function gn(e, t, n) {
  let r = new Map(),
    i;
  for (let n of t.issues)
    if (n.code === `unrecognized_keys`) {
      i ??= n;
      for (let e of n.keys) (r.has(e) || r.set(e, {}), (r.get(e).l = !0));
    } else e.issues.push(n);
  for (let t of n.issues)
    if (t.code === `unrecognized_keys`)
      for (let e of t.keys) (r.has(e) || r.set(e, {}), (r.get(e).r = !0));
    else e.issues.push(t);
  let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if ((a.length && i && e.issues.push({ ...i, keys: a }), me(e))) return e;
  let o = hn(t.value, n.value);
  if (!o.valid)
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`,
    );
  return ((e.value = o.data), e);
}
var _n = f(`$ZodEnum`, (e, t) => {
    Dt.init(e, t);
    let n = _(t.entries),
      r = new Set(n);
    ((e._zod.values = r),
      (e._zod.pattern = RegExp(
        `^(${n
          .filter((e) => oe.has(typeof e))
          .map((e) => (typeof e == `string` ? D(e) : e.toString()))
          .join(`|`)})$`,
      )),
      (e._zod.parse = (t, i) => {
        let a = t.value;
        return (
          r.has(a) ||
            t.issues.push({
              code: `invalid_value`,
              values: n,
              input: a,
              inst: e,
            }),
          t
        );
      }));
  }),
  vn = f(`$ZodLiteral`, (e, t) => {
    if ((Dt.init(e, t), t.values.length === 0))
      throw Error(`Cannot create literal schema with no valid values`);
    let n = new Set(t.values);
    ((e._zod.values = n),
      (e._zod.pattern = RegExp(
        `^(${t.values.map((e) => (typeof e == `string` ? D(e) : e ? D(e.toString()) : String(e))).join(`|`)})$`,
      )),
      (e._zod.parse = (r, i) => {
        let a = r.value;
        return (
          n.has(a) ||
            r.issues.push({
              code: `invalid_value`,
              values: t.values,
              input: a,
              inst: e,
            }),
          r
        );
      }));
  }),
  yn = f(`$ZodTransform`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.parse = (n, r) => {
        if (r.direction === `backward`) throw new m(e.constructor.name);
        let i = t.transform(n.value, n);
        if (r.async)
          return (i instanceof Promise ? i : Promise.resolve(i)).then(
            (e) => ((n.value = e), n),
          );
        if (i instanceof Promise) throw new p();
        return ((n.value = i), n);
      }));
  });
function bn(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
var xn = f(`$ZodOptional`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.optin = `optional`),
      (e._zod.optout = `optional`),
      S(e._zod, `values`, () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0,
      ),
      S(e._zod, `pattern`, () => {
        let e = t.innerType._zod.pattern;
        return e ? RegExp(`^(${x(e.source)})?$`) : void 0;
      }),
      (e._zod.parse = (e, n) => {
        if (t.innerType._zod.optin === `optional`) {
          let r = t.innerType._zod.run(e, n);
          return r instanceof Promise
            ? r.then((t) => bn(t, e.value))
            : bn(r, e.value);
        }
        return e.value === void 0 ? e : t.innerType._zod.run(e, n);
      }));
  }),
  Sn = f(`$ZodExactOptional`, (e, t) => {
    (xn.init(e, t),
      S(e._zod, `values`, () => t.innerType._zod.values),
      S(e._zod, `pattern`, () => t.innerType._zod.pattern),
      (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
  }),
  Cn = f(`$ZodNullable`, (e, t) => {
    (Dt.init(e, t),
      S(e._zod, `optin`, () => t.innerType._zod.optin),
      S(e._zod, `optout`, () => t.innerType._zod.optout),
      S(e._zod, `pattern`, () => {
        let e = t.innerType._zod.pattern;
        return e ? RegExp(`^(${x(e.source)}|null)$`) : void 0;
      }),
      S(e._zod, `values`, () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (e, n) =>
        e.value === null ? e : t.innerType._zod.run(e, n)));
  }),
  wn = f(`$ZodDefault`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.optin = `optional`),
      S(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        if (e.value === void 0) return ((e.value = t.defaultValue), e);
        let r = t.innerType._zod.run(e, n);
        return r instanceof Promise ? r.then((e) => Tn(e, t)) : Tn(r, t);
      }));
  });
function Tn(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
var En = f(`$ZodPrefault`, (e, t) => {
    (Dt.init(e, t),
      (e._zod.optin = `optional`),
      S(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => (
        n.direction === `backward` ||
          (e.value === void 0 && (e.value = t.defaultValue)),
        t.innerType._zod.run(e, n)
      )));
  }),
  Dn = f(`$ZodNonOptional`, (e, t) => {
    (Dt.init(e, t),
      S(e._zod, `values`, () => {
        let e = t.innerType._zod.values;
        return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, r) => {
        let i = t.innerType._zod.run(n, r);
        return i instanceof Promise ? i.then((t) => On(t, e)) : On(i, e);
      }));
  });
function On(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: `invalid_type`,
        expected: `nonoptional`,
        input: e.value,
        inst: t,
      }),
    e
  );
}
var kn = f(`$ZodCatch`, (e, t) => {
    (Dt.init(e, t),
      S(e._zod, `optin`, () => t.innerType._zod.optin),
      S(e._zod, `optout`, () => t.innerType._zod.optout),
      S(e._zod, `values`, () => t.innerType._zod.values),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) return t.innerType._zod.run(e, n);
        let r = t.innerType._zod.run(e, n);
        return r instanceof Promise
          ? r.then(
              (r) => (
                (e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: r.issues.map((e) => _e(e, n, g())) },
                    input: e.value,
                  })),
                  (e.issues = [])),
                e
              ),
            )
          : ((e.value = r.value),
            r.issues.length &&
              ((e.value = t.catchValue({
                ...e,
                error: { issues: r.issues.map((e) => _e(e, n, g())) },
                input: e.value,
              })),
              (e.issues = [])),
            e);
      }));
  }),
  An = f(`$ZodPipe`, (e, t) => {
    (Dt.init(e, t),
      S(e._zod, `values`, () => t.in._zod.values),
      S(e._zod, `optin`, () => t.in._zod.optin),
      S(e._zod, `optout`, () => t.out._zod.optout),
      S(e._zod, `propValues`, () => t.in._zod.propValues),
      (e._zod.parse = (e, n) => {
        if (n.direction === `backward`) {
          let r = t.out._zod.run(e, n);
          return r instanceof Promise
            ? r.then((e) => jn(e, t.in, n))
            : jn(r, t.in, n);
        }
        let r = t.in._zod.run(e, n);
        return r instanceof Promise
          ? r.then((e) => jn(e, t.out, n))
          : jn(r, t.out, n);
      }));
  });
function jn(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, n);
}
var Mn = f(`$ZodReadonly`, (e, t) => {
  (Dt.init(e, t),
    S(e._zod, `propValues`, () => t.innerType._zod.propValues),
    S(e._zod, `values`, () => t.innerType._zod.values),
    S(e._zod, `optin`, () => t.innerType?._zod?.optin),
    S(e._zod, `optout`, () => t.innerType?._zod?.optout),
    (e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      let r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(Nn) : Nn(r);
    }));
});
function Nn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var Pn = f(`$ZodCustom`, (e, t) => {
  (pt.init(e, t),
    Dt.init(e, t),
    (e._zod.parse = (e, t) => e),
    (e._zod.check = (n) => {
      let r = n.value,
        i = t.fn(r);
      if (i instanceof Promise) return i.then((t) => Fn(t, n, r, e));
      Fn(i, n, r, e);
    }));
});
function Fn(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ye(e)));
  }
}
var In,
  Ln = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(e, ...t) {
      let n = t[0];
      return (
        this._map.set(e, n),
        n && typeof n == `object` && `id` in n && this._idmap.set(n.id, e),
        this
      );
    }
    clear() {
      return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(e) {
      let t = this._map.get(e);
      return (
        t && typeof t == `object` && `id` in t && this._idmap.delete(t.id),
        this._map.delete(e),
        this
      );
    }
    get(e) {
      let t = e._zod.parent;
      if (t) {
        let n = { ...(this.get(t) ?? {}) };
        delete n.id;
        let r = { ...n, ...this._map.get(e) };
        return Object.keys(r).length ? r : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  };
function Rn() {
  return new Ln();
}
(In = globalThis).__zod_globalRegistry ?? (In.__zod_globalRegistry = Rn());
var zn = globalThis.__zod_globalRegistry;
function Bn(e, t) {
  return new e({ type: `string`, ...k(t) });
}
function Vn(e, t) {
  return new e({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Hn(e, t) {
  return new e({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Un(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Wn(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...k(t),
  });
}
function Gn(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...k(t),
  });
}
function Kn(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...k(t),
  });
}
function qn(e, t) {
  return new e({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Jn(e, t) {
  return new e({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Yn(e, t) {
  return new e({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Xn(e, t) {
  return new e({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Zn(e, t) {
  return new e({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function Qn(e, t) {
  return new e({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function $n(e, t) {
  return new e({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function er(e, t) {
  return new e({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function tr(e, t) {
  return new e({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function nr(e, t) {
  return new e({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function rr(e, t) {
  return new e({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function ir(e, t) {
  return new e({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function ar(e, t) {
  return new e({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function or(e, t) {
  return new e({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function sr(e, t) {
  return new e({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function cr(e, t) {
  return new e({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ...k(t),
  });
}
function lr(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...k(t),
  });
}
function ur(e, t) {
  return new e({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ...k(t),
  });
}
function dr(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...k(t),
  });
}
function fr(e, t) {
  return new e({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ...k(t),
  });
}
function pr(e, t) {
  return new e({ type: `boolean`, ...k(t) });
}
function mr(e) {
  return new e({ type: `unknown` });
}
function hr(e, t) {
  return new e({ type: `never`, ...k(t) });
}
function gr(e, t) {
  return new mt({ check: `max_length`, ...k(t), maximum: e });
}
function _r(e, t) {
  return new ht({ check: `min_length`, ...k(t), minimum: e });
}
function vr(e, t) {
  return new gt({ check: `length_equals`, ...k(t), length: e });
}
function yr(e, t) {
  return new vt({
    check: `string_format`,
    format: `regex`,
    ...k(t),
    pattern: e,
  });
}
function br(e) {
  return new yt({ check: `string_format`, format: `lowercase`, ...k(e) });
}
function xr(e) {
  return new bt({ check: `string_format`, format: `uppercase`, ...k(e) });
}
function Sr(e, t) {
  return new xt({
    check: `string_format`,
    format: `includes`,
    ...k(t),
    includes: e,
  });
}
function Cr(e, t) {
  return new St({
    check: `string_format`,
    format: `starts_with`,
    ...k(t),
    prefix: e,
  });
}
function wr(e, t) {
  return new Ct({
    check: `string_format`,
    format: `ends_with`,
    ...k(t),
    suffix: e,
  });
}
function Tr(e) {
  return new wt({ check: `overwrite`, tx: e });
}
function Er(e) {
  return Tr((t) => t.normalize(e));
}
function Dr() {
  return Tr((e) => e.trim());
}
function Or() {
  return Tr((e) => e.toLowerCase());
}
function kr() {
  return Tr((e) => e.toUpperCase());
}
function Ar() {
  return Tr((e) => te(e));
}
function jr(e, t, n) {
  return new e({ type: `array`, element: t, ...k(n) });
}
function Mr(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...k(n) });
}
function Nr(e) {
  let t = Pr(
    (n) => (
      (n.addIssue = (e) => {
        if (typeof e == `string`) n.issues.push(ye(e, n.value, t._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= n.value),
            (r.inst ??= t),
            (r.continue ??= !t._zod.def.abort),
            n.issues.push(ye(r)));
        }
      }),
      e(n.value, n)
    ),
  );
  return t;
}
function Pr(e, t) {
  let n = new pt({ check: `custom`, ...k(t) });
  return ((n._zod.check = e), n);
}
function Fr(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? zn,
      target: t,
      unrepresentable: e?.unrepresentable ?? `throw`,
      override: e?.override ?? (() => {}),
      io: e?.io ?? `output`,
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? `ref`,
      reused: e?.reused ?? `inline`,
      external: e?.external ?? void 0,
    }
  );
}
function Ir(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  let i = e._zod.def,
    a = t.seen.get(e);
  if (a)
    return (
      a.count++,
      n.schemaPath.includes(e) && (a.cycle = n.path),
      a.schema
    );
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o);
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
  else {
    let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
    else {
      let n = o.schema,
        a = t.processors[i.type];
      if (!a)
        throw Error(
          `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
        );
      a(e, t, n, r);
    }
    let a = e._zod.parent;
    a && ((o.ref ||= a), Ir(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` &&
      zr(e) &&
      (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      o.schema._prefault &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function Lr(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = new Map();
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0])?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0])
        throw Error(
          `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      r.set(n, t[0]);
    }
  }
  let i = (t) => {
      let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (e.external) {
        let n = e.external.registry.get(t[0])?.id,
          i = e.external.uri ?? ((e) => e);
        if (n) return { ref: i(n) };
        let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
        return (
          (t[1].defId = a),
          { defId: a, ref: `${i(`__shared`)}#/${r}/${a}` }
        );
      }
      if (t[1] === n) return { ref: `#` };
      let i = `#/${r}/`,
        a = t[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: a, ref: i + a };
    },
    a = (e) => {
      if (e[1].schema.$ref) return;
      let t = e[1],
        { ref: n, defId: r } = i(e);
      ((t.def = { ...t.schema }), r && (t.defId = r));
      let a = t.schema;
      for (let e in a) delete a[e];
      a.$ref = n;
    };
  if (e.cycles === `throw`)
    for (let t of e.seen.entries()) {
      let e = t[1];
      if (e.cycle)
        throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) {
      a(n);
      continue;
    }
    if (e.external) {
      let r = e.external.registry.get(n[0])?.id;
      if (t !== n[0] && r) {
        a(n);
        continue;
      }
    }
    if (e.metadataRegistry.get(n[0])?.id) {
      a(n);
      continue;
    }
    if (r.cycle) {
      a(n);
      continue;
    }
    if (r.count > 1 && e.reused === `ref`) {
      a(n);
      continue;
    }
  }
}
function Rr(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = (t) => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
      a = { ...i },
      o = n.ref;
    if (((n.ref = null), o)) {
      r(o);
      let n = e.seen.get(o),
        s = n.schema;
      if (
        (s.$ref &&
        (e.target === `draft-07` ||
          e.target === `draft-04` ||
          e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : Object.assign(i, s),
        Object.assign(i, a),
        t._zod.parent === o)
      )
        for (let e in i) e === `$ref` || e === `allOf` || e in a || delete i[e];
      if (s.$ref && n.def)
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in n.def &&
              JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
              delete i[e]);
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in t.def &&
              JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
              delete i[e]);
    }
    e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
  };
  for (let t of [...e.seen.entries()].reverse()) r(t[0]);
  let i = {};
  if (
    (e.target === `draft-2020-12`
      ? (i.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : e.target === `draft-07`
        ? (i.$schema = `http://json-schema.org/draft-07/schema#`)
        : e.target === `draft-04`
          ? (i.$schema = `http://json-schema.org/draft-04/schema#`)
          : e.target,
    e.external?.uri)
  ) {
    let n = e.external.registry.get(t)?.id;
    if (!n) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(n);
  }
  Object.assign(i, n.def ?? n.schema);
  let a = e.external?.defs ?? {};
  for (let t of e.seen.entries()) {
    let e = t[1];
    e.def && e.defId && (a[e.defId] = e.def);
  }
  e.external ||
    (Object.keys(a).length > 0 &&
      (e.target === `draft-2020-12` ? (i.$defs = a) : (i.definitions = a)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, `~standard`, {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: Vr(t, `input`, e.processors),
            output: Vr(t, `output`, e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      n
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function zr(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return zr(r.element, n);
  if (r.type === `set`) return zr(r.valueType, n);
  if (r.type === `lazy`) return zr(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === `default` ||
    r.type === `prefault`
  )
    return zr(r.innerType, n);
  if (r.type === `intersection`) return zr(r.left, n) || zr(r.right, n);
  if (r.type === `record` || r.type === `map`)
    return zr(r.keyType, n) || zr(r.valueType, n);
  if (r.type === `pipe`) return zr(r.in, n) || zr(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (zr(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (zr(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (zr(e, n)) return !0;
    return !!(r.rest && zr(r.rest, n));
  }
  return !1;
}
var Br =
    (e, t = {}) =>
    (n) => {
      let r = Fr({ ...n, processors: t });
      return (Ir(e, r), Lr(r, e), Rr(r, e));
    },
  Vr =
    (e, t, n = {}) =>
    (r) => {
      let { libraryOptions: i, target: a } = r ?? {},
        o = Fr({ ...(i ?? {}), target: a, io: t, processors: n });
      return (Ir(e, o), Lr(o, e), Rr(o, e));
    },
  Hr = {
    guid: `uuid`,
    url: `uri`,
    datetime: `date-time`,
    json_string: `json-string`,
    regex: ``,
  },
  Ur = (e, t, n, r) => {
    let i = n;
    i.type = `string`;
    let {
      minimum: a,
      maximum: o,
      format: s,
      patterns: c,
      contentEncoding: l,
    } = e._zod.bag;
    if (
      (typeof a == `number` && (i.minLength = a),
      typeof o == `number` && (i.maxLength = o),
      s &&
        ((i.format = Hr[s] ?? s),
        i.format === `` && delete i.format,
        s === `time` && delete i.format),
      l && (i.contentEncoding = l),
      c && c.size > 0)
    ) {
      let e = [...c];
      e.length === 1
        ? (i.pattern = e[0].source)
        : e.length > 1 &&
          (i.allOf = [
            ...e.map((e) => ({
              ...(t.target === `draft-07` ||
              t.target === `draft-04` ||
              t.target === `openapi-3.0`
                ? { type: `string` }
                : {}),
              pattern: e.source,
            })),
          ]);
    }
  },
  Wr = (e, t, n, r) => {
    n.type = `boolean`;
  },
  Gr = (e, t, n, r) => {
    n.not = {};
  },
  Kr = (e, t, n, r) => {
    let i = e._zod.def,
      a = _(i.entries);
    (a.every((e) => typeof e == `number`) && (n.type = `number`),
      a.every((e) => typeof e == `string`) && (n.type = `string`),
      (n.enum = a));
  },
  qr = (e, t, n, r) => {
    let i = e._zod.def,
      a = [];
    for (let e of i.values)
      if (e === void 0) {
        if (t.unrepresentable === `throw`)
          throw Error(
            "Literal `undefined` cannot be represented in JSON Schema",
          );
      } else if (typeof e == `bigint`) {
        if (t.unrepresentable === `throw`)
          throw Error(`BigInt literals cannot be represented in JSON Schema`);
        a.push(Number(e));
      } else a.push(e);
    if (a.length !== 0)
      if (a.length === 1) {
        let e = a[0];
        ((n.type = e === null ? `null` : typeof e),
          t.target === `draft-04` || t.target === `openapi-3.0`
            ? (n.enum = [e])
            : (n.const = e));
      } else
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
          a.every((e) => e === null) && (n.type = `null`),
          (n.enum = a));
  },
  Jr = (e, t, n, r) => {
    if (t.unrepresentable === `throw`)
      throw Error(`Custom types cannot be represented in JSON Schema`);
  },
  Yr = (e, t, n, r) => {
    if (t.unrepresentable === `throw`)
      throw Error(`Transforms cannot be represented in JSON Schema`);
  },
  Xr = (e, t, n, r) => {
    let i = n,
      a = e._zod.def,
      { minimum: o, maximum: s } = e._zod.bag;
    (typeof o == `number` && (i.minItems = o),
      typeof s == `number` && (i.maxItems = s),
      (i.type = `array`),
      (i.items = Ir(a.element, t, { ...r, path: [...r.path, `items`] })));
  },
  Zr = (e, t, n, r) => {
    let i = n,
      a = e._zod.def;
    ((i.type = `object`), (i.properties = {}));
    let o = a.shape;
    for (let e in o)
      i.properties[e] = Ir(o[e], t, {
        ...r,
        path: [...r.path, `properties`, e],
      });
    let s = new Set(Object.keys(o)),
      c = new Set(
        [...s].filter((e) => {
          let n = a.shape[e]._zod;
          return t.io === `input` ? n.optin === void 0 : n.optout === void 0;
        }),
      );
    (c.size > 0 && (i.required = Array.from(c)),
      a.catchall?._zod.def.type === `never`
        ? (i.additionalProperties = !1)
        : a.catchall
          ? a.catchall &&
            (i.additionalProperties = Ir(a.catchall, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            }))
          : t.io === `output` && (i.additionalProperties = !1));
  },
  Qr = (e, t, n, r) => {
    let i = e._zod.def,
      a = i.inclusive === !1,
      o = i.options.map((e, n) =>
        Ir(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }),
      );
    a ? (n.oneOf = o) : (n.anyOf = o);
  },
  $r = (e, t, n, r) => {
    let i = e._zod.def,
      a = Ir(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
      o = Ir(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
      s = (e) => `allOf` in e && Object.keys(e).length === 1;
    n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
  },
  ei = (e, t, n, r) => {
    let i = e._zod.def,
      a = Ir(i.innerType, t, r),
      o = t.seen.get(e);
    t.target === `openapi-3.0`
      ? ((o.ref = i.innerType), (n.nullable = !0))
      : (n.anyOf = [a, { type: `null` }]);
  },
  ti = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  ni = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType),
      (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
  },
  ri = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType),
      t.io === `input` &&
        (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
  },
  ii = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
    let o;
    try {
      o = i.catchValue(void 0);
    } catch {
      throw Error(`Dynamic catch values are not supported in JSON Schema`);
    }
    n.default = o;
  },
  ai = (e, t, n, r) => {
    let i = e._zod.def,
      a =
        t.io === `input`
          ? i.in._zod.def.type === `transform`
            ? i.out
            : i.in
          : i.out;
    Ir(a, t, r);
    let o = t.seen.get(e);
    o.ref = a;
  },
  oi = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    ((a.ref = i.innerType), (n.readOnly = !0));
  },
  si = (e, t, n, r) => {
    let i = e._zod.def;
    Ir(i.innerType, t, r);
    let a = t.seen.get(e);
    a.ref = i.innerType;
  },
  ci = f(`ZodISODateTime`, (e, t) => {
    (Bt.init(e, t), Ni.init(e, t));
  });
function li(e) {
  return lr(ci, e);
}
var ui = f(`ZodISODate`, (e, t) => {
  (Vt.init(e, t), Ni.init(e, t));
});
function di(e) {
  return ur(ui, e);
}
var fi = f(`ZodISOTime`, (e, t) => {
  (Ht.init(e, t), Ni.init(e, t));
});
function pi(e) {
  return dr(fi, e);
}
var mi = f(`ZodISODuration`, (e, t) => {
  (Ut.init(e, t), Ni.init(e, t));
});
function hi(e) {
  return fr(mi, e);
}
var gi = (e, t) => {
  (xe.init(e, t),
    (e.name = `ZodError`),
    Object.defineProperties(e, {
      format: { value: (t) => we(e, t) },
      flatten: { value: (t) => Ce(e, t) },
      addIssue: {
        value: (t) => {
          (e.issues.push(t), (e.message = JSON.stringify(e.issues, v, 2)));
        },
      },
      addIssues: {
        value: (t) => {
          (e.issues.push(...t), (e.message = JSON.stringify(e.issues, v, 2)));
        },
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        },
      },
    }));
};
f(`ZodError`, gi);
var _i = f(`ZodError`, gi, { Parent: Error }),
  vi = Te(_i),
  yi = Ee(_i),
  bi = De(_i),
  xi = ke(_i),
  Si = je(_i),
  Ci = Me(_i),
  wi = Ne(_i),
  Ti = Pe(_i),
  Ei = Fe(_i),
  Di = Ie(_i),
  Oi = Le(_i),
  ki = Re(_i),
  M = f(
    `ZodType`,
    (e, t) => (
      Dt.init(e, t),
      Object.assign(e[`~standard`], {
        jsonSchema: { input: Vr(e, `input`), output: Vr(e, `output`) },
      }),
      (e.toJSONSchema = Br(e, {})),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, `_def`, { value: t }),
      (e.check = (...n) =>
        e.clone(
          w(t, {
            checks: [
              ...(t.checks ?? []),
              ...n.map((e) =>
                typeof e == `function`
                  ? {
                      _zod: {
                        check: e,
                        def: { check: `custom` },
                        onattach: [],
                      },
                    }
                  : e,
              ),
            ],
          }),
          { parent: !0 },
        )),
      (e.with = e.check),
      (e.clone = (t, n) => O(e, t, n)),
      (e.brand = () => e),
      (e.register = (t, n) => (t.add(e, n), e)),
      (e.parse = (t, n) => vi(e, t, n, { callee: e.parse })),
      (e.safeParse = (t, n) => bi(e, t, n)),
      (e.parseAsync = async (t, n) => yi(e, t, n, { callee: e.parseAsync })),
      (e.safeParseAsync = async (t, n) => xi(e, t, n)),
      (e.spa = e.safeParseAsync),
      (e.encode = (t, n) => Si(e, t, n)),
      (e.decode = (t, n) => Ci(e, t, n)),
      (e.encodeAsync = async (t, n) => wi(e, t, n)),
      (e.decodeAsync = async (t, n) => Ti(e, t, n)),
      (e.safeEncode = (t, n) => Ei(e, t, n)),
      (e.safeDecode = (t, n) => Di(e, t, n)),
      (e.safeEncodeAsync = async (t, n) => Oi(e, t, n)),
      (e.safeDecodeAsync = async (t, n) => ki(e, t, n)),
      (e.refine = (t, n) => e.check(La(t, n))),
      (e.superRefine = (t) => e.check(Ra(t))),
      (e.overwrite = (t) => e.check(Tr(t))),
      (e.optional = () => ya(e)),
      (e.exactOptional = () => xa(e)),
      (e.nullable = () => Ca(e)),
      (e.nullish = () => ya(Ca(e))),
      (e.nonoptional = (t) => ka(e, t)),
      (e.array = () => aa(e)),
      (e.or = (t) => la([e, t])),
      (e.and = (t) => da(e, t)),
      (e.transform = (t) => Na(e, _a(t))),
      (e.default = (t) => Ta(e, t)),
      (e.prefault = (t) => Da(e, t)),
      (e.catch = (t) => ja(e, t)),
      (e.pipe = (t) => Na(e, t)),
      (e.readonly = () => Fa(e)),
      (e.describe = (t) => {
        let n = e.clone();
        return (zn.add(n, { description: t }), n);
      }),
      Object.defineProperty(e, `description`, {
        get() {
          return zn.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...t) => {
        if (t.length === 0) return zn.get(e);
        let n = e.clone();
        return (zn.add(n, t[0]), n);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      (e.apply = (t) => t(e)),
      e
    ),
  ),
  Ai = f(`_ZodString`, (e, t) => {
    (Ot.init(e, t),
      M.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => Ur(e, t, n, r)));
    let n = e._zod.bag;
    ((e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      (e.regex = (...t) => e.check(yr(...t))),
      (e.includes = (...t) => e.check(Sr(...t))),
      (e.startsWith = (...t) => e.check(Cr(...t))),
      (e.endsWith = (...t) => e.check(wr(...t))),
      (e.min = (...t) => e.check(_r(...t))),
      (e.max = (...t) => e.check(gr(...t))),
      (e.length = (...t) => e.check(vr(...t))),
      (e.nonempty = (...t) => e.check(_r(1, ...t))),
      (e.lowercase = (t) => e.check(br(t))),
      (e.uppercase = (t) => e.check(xr(t))),
      (e.trim = () => e.check(Dr())),
      (e.normalize = (...t) => e.check(Er(...t))),
      (e.toLowerCase = () => e.check(Or())),
      (e.toUpperCase = () => e.check(kr())),
      (e.slugify = () => e.check(Ar())));
  }),
  ji = f(`ZodString`, (e, t) => {
    (Ot.init(e, t),
      Ai.init(e, t),
      (e.email = (t) => e.check(Vn(Pi, t))),
      (e.url = (t) => e.check(qn(Li, t))),
      (e.jwt = (t) => e.check(cr(Zi, t))),
      (e.emoji = (t) => e.check(Jn(Ri, t))),
      (e.guid = (t) => e.check(Hn(Fi, t))),
      (e.uuid = (t) => e.check(Un(Ii, t))),
      (e.uuidv4 = (t) => e.check(Wn(Ii, t))),
      (e.uuidv6 = (t) => e.check(Gn(Ii, t))),
      (e.uuidv7 = (t) => e.check(Kn(Ii, t))),
      (e.nanoid = (t) => e.check(Yn(N, t))),
      (e.guid = (t) => e.check(Hn(Fi, t))),
      (e.cuid = (t) => e.check(Xn(zi, t))),
      (e.cuid2 = (t) => e.check(Zn(Bi, t))),
      (e.ulid = (t) => e.check(Qn(Vi, t))),
      (e.base64 = (t) => e.check(ar(Ji, t))),
      (e.base64url = (t) => e.check(or(Yi, t))),
      (e.xid = (t) => e.check($n(Hi, t))),
      (e.ksuid = (t) => e.check(er(Ui, t))),
      (e.ipv4 = (t) => e.check(tr(Wi, t))),
      (e.ipv6 = (t) => e.check(nr(Gi, t))),
      (e.cidrv4 = (t) => e.check(rr(Ki, t))),
      (e.cidrv6 = (t) => e.check(ir(qi, t))),
      (e.e164 = (t) => e.check(sr(Xi, t))),
      (e.datetime = (t) => e.check(li(t))),
      (e.date = (t) => e.check(di(t))),
      (e.time = (t) => e.check(pi(t))),
      (e.duration = (t) => e.check(hi(t))));
  });
function Mi(e) {
  return Bn(ji, e);
}
var Ni = f(`ZodStringFormat`, (e, t) => {
    (j.init(e, t), Ai.init(e, t));
  }),
  Pi = f(`ZodEmail`, (e, t) => {
    (jt.init(e, t), Ni.init(e, t));
  }),
  Fi = f(`ZodGUID`, (e, t) => {
    (kt.init(e, t), Ni.init(e, t));
  }),
  Ii = f(`ZodUUID`, (e, t) => {
    (At.init(e, t), Ni.init(e, t));
  }),
  Li = f(`ZodURL`, (e, t) => {
    (Mt.init(e, t), Ni.init(e, t));
  }),
  Ri = f(`ZodEmoji`, (e, t) => {
    (Nt.init(e, t), Ni.init(e, t));
  }),
  N = f(`ZodNanoID`, (e, t) => {
    (Pt.init(e, t), Ni.init(e, t));
  }),
  zi = f(`ZodCUID`, (e, t) => {
    (Ft.init(e, t), Ni.init(e, t));
  }),
  Bi = f(`ZodCUID2`, (e, t) => {
    (It.init(e, t), Ni.init(e, t));
  }),
  Vi = f(`ZodULID`, (e, t) => {
    (Lt.init(e, t), Ni.init(e, t));
  }),
  Hi = f(`ZodXID`, (e, t) => {
    (Rt.init(e, t), Ni.init(e, t));
  }),
  Ui = f(`ZodKSUID`, (e, t) => {
    (zt.init(e, t), Ni.init(e, t));
  }),
  Wi = f(`ZodIPv4`, (e, t) => {
    (Wt.init(e, t), Ni.init(e, t));
  }),
  Gi = f(`ZodIPv6`, (e, t) => {
    (Gt.init(e, t), Ni.init(e, t));
  }),
  Ki = f(`ZodCIDRv4`, (e, t) => {
    (Kt.init(e, t), Ni.init(e, t));
  }),
  qi = f(`ZodCIDRv6`, (e, t) => {
    (qt.init(e, t), Ni.init(e, t));
  }),
  Ji = f(`ZodBase64`, (e, t) => {
    (Yt.init(e, t), Ni.init(e, t));
  }),
  Yi = f(`ZodBase64URL`, (e, t) => {
    (Zt.init(e, t), Ni.init(e, t));
  }),
  Xi = f(`ZodE164`, (e, t) => {
    (Qt.init(e, t), Ni.init(e, t));
  }),
  Zi = f(`ZodJWT`, (e, t) => {
    (en.init(e, t), Ni.init(e, t));
  }),
  Qi = f(`ZodBoolean`, (e, t) => {
    (tn.init(e, t),
      M.init(e, t),
      (e._zod.processJSONSchema = (t, n, r) => Wr(e, t, n, r)));
  });
function $i(e) {
  return pr(Qi, e);
}
var ea = f(`ZodUnknown`, (e, t) => {
  (nn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (e, t, n) => void 0));
});
function ta() {
  return mr(ea);
}
var na = f(`ZodNever`, (e, t) => {
  (rn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Gr(e, t, n, r)));
});
function ra(e) {
  return hr(na, e);
}
var ia = f(`ZodArray`, (e, t) => {
  (on.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Xr(e, t, n, r)),
    (e.element = t.element),
    (e.min = (t, n) => e.check(_r(t, n))),
    (e.nonempty = (t) => e.check(_r(1, t))),
    (e.max = (t, n) => e.check(gr(t, n))),
    (e.length = (t, n) => e.check(vr(t, n))),
    (e.unwrap = () => e.element));
});
function aa(e, t) {
  return jr(ia, e, t);
}
var oa = f(`ZodObject`, (e, t) => {
  (dn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Zr(e, t, n, r)),
    S(e, `shape`, () => t.shape),
    (e.keyof = () => pa(Object.keys(e._zod.def.shape))),
    (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: ta() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: ta() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: ra() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (t) => ue(e, t)),
    (e.safeExtend = (t) => A(e, t)),
    (e.merge = (t) => de(e, t)),
    (e.pick = (t) => ce(e, t)),
    (e.omit = (t) => le(e, t)),
    (e.partial = (...t) => fe(va, e, t[0])),
    (e.required = (...t) => pe(Oa, e, t[0])));
});
function sa(e, t) {
  return new oa({ type: `object`, shape: e ?? {}, ...k(t) });
}
var ca = f(`ZodUnion`, (e, t) => {
  (pn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Qr(e, t, n, r)),
    (e.options = t.options));
});
function la(e, t) {
  return new ca({ type: `union`, options: e, ...k(t) });
}
var ua = f(`ZodIntersection`, (e, t) => {
  (mn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => $r(e, t, n, r)));
});
function da(e, t) {
  return new ua({ type: `intersection`, left: e, right: t });
}
var fa = f(`ZodEnum`, (e, t) => {
  (_n.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Kr(e, t, n, r)),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  let n = new Set(Object.keys(t.entries));
  ((e.extract = (e, r) => {
    let i = {};
    for (let r of e)
      if (n.has(r)) i[r] = t.entries[r];
      else throw Error(`Key ${r} not found in enum`);
    return new fa({ ...t, checks: [], ...k(r), entries: i });
  }),
    (e.exclude = (e, r) => {
      let i = { ...t.entries };
      for (let t of e)
        if (n.has(t)) delete i[t];
        else throw Error(`Key ${t} not found in enum`);
      return new fa({ ...t, checks: [], ...k(r), entries: i });
    }));
});
function pa(e, t) {
  return new fa({
    type: `enum`,
    entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
    ...k(t),
  });
}
var ma = f(`ZodLiteral`, (e, t) => {
  (vn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => qr(e, t, n, r)),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, `value`, {
      get() {
        if (t.values.length > 1)
          throw Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return t.values[0];
      },
    }));
});
function ha(e, t) {
  return new ma({
    type: `literal`,
    values: Array.isArray(e) ? e : [e],
    ...k(t),
  });
}
var ga = f(`ZodTransform`, (e, t) => {
  (yn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Yr(e, t, n, r)),
    (e._zod.parse = (n, r) => {
      if (r.direction === `backward`) throw new m(e.constructor.name);
      n.addIssue = (r) => {
        if (typeof r == `string`) n.issues.push(ye(r, n.value, t));
        else {
          let t = r;
          (t.fatal && (t.continue = !1),
            (t.code ??= `custom`),
            (t.input ??= n.value),
            (t.inst ??= e),
            n.issues.push(ye(t)));
        }
      };
      let i = t.transform(n.value, n);
      return i instanceof Promise
        ? i.then((e) => ((n.value = e), n))
        : ((n.value = i), n);
    }));
});
function _a(e) {
  return new ga({ type: `transform`, transform: e });
}
var va = f(`ZodOptional`, (e, t) => {
  (xn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function ya(e) {
  return new va({ type: `optional`, innerType: e });
}
var ba = f(`ZodExactOptional`, (e, t) => {
  (Sn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function xa(e) {
  return new ba({ type: `optional`, innerType: e });
}
var Sa = f(`ZodNullable`, (e, t) => {
  (Cn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ei(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Ca(e) {
  return new Sa({ type: `nullable`, innerType: e });
}
var wa = f(`ZodDefault`, (e, t) => {
  (wn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ni(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Ta(e, t) {
  return new wa({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ae(t);
    },
  });
}
var Ea = f(`ZodPrefault`, (e, t) => {
  (En.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ri(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Da(e, t) {
  return new Ea({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ae(t);
    },
  });
}
var Oa = f(`ZodNonOptional`, (e, t) => {
  (Dn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ti(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function ka(e, t) {
  return new Oa({ type: `nonoptional`, innerType: e, ...k(t) });
}
var Aa = f(`ZodCatch`, (e, t) => {
  (kn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ii(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function ja(e, t) {
  return new Aa({
    type: `catch`,
    innerType: e,
    catchValue: typeof t == `function` ? t : () => t,
  });
}
var Ma = f(`ZodPipe`, (e, t) => {
  (An.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => ai(e, t, n, r)),
    (e.in = t.in),
    (e.out = t.out));
});
function Na(e, t) {
  return new Ma({ type: `pipe`, in: e, out: t });
}
var Pa = f(`ZodReadonly`, (e, t) => {
  (Mn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => oi(e, t, n, r)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Fa(e) {
  return new Pa({ type: `readonly`, innerType: e });
}
var Ia = f(`ZodCustom`, (e, t) => {
  (Pn.init(e, t),
    M.init(e, t),
    (e._zod.processJSONSchema = (t, n, r) => Jr(e, t, n, r)));
});
function La(e, t = {}) {
  return Mr(Ia, e, t);
}
function Ra(e) {
  return Nr(e);
}
var P = l(d()),
  za = Symbol.for(`@ts-pattern/matcher`),
  Ba = Symbol.for(`@ts-pattern/isVariadic`),
  Va = `@ts-pattern/anonymous-select-key`,
  Ha = (e) => !!(e && typeof e == `object`),
  Ua = (e) => e && !!e[za],
  Wa = (e, t, n) => {
    if (Ua(e)) {
      let { matched: r, selections: i } = e[za]().match(t);
      return (r && i && Object.keys(i).forEach((e) => n(e, i[e])), r);
    }
    if (Ha(e)) {
      if (!Ha(t)) return !1;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return !1;
        let r = [],
          i = [],
          a = [];
        for (let t of e.keys()) {
          let n = e[t];
          Ua(n) && n[Ba] ? a.push(n) : a.length ? i.push(n) : r.push(n);
        }
        if (a.length) {
          if (a.length > 1)
            throw Error(
              "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
            );
          if (t.length < r.length + i.length) return !1;
          let e = t.slice(0, r.length),
            o = i.length === 0 ? [] : t.slice(-i.length),
            s = t.slice(r.length, i.length === 0 ? 1 / 0 : -i.length);
          return (
            r.every((t, r) => Wa(t, e[r], n)) &&
            i.every((e, t) => Wa(e, o[t], n)) &&
            (a.length === 0 || Wa(a[0], s, n))
          );
        }
        return e.length === t.length && e.every((e, r) => Wa(e, t[r], n));
      }
      return Reflect.ownKeys(e).every((r) => {
        let i = e[r];
        return (
          (r in t || (Ua((a = i)) && a[za]().matcherType === `optional`)) &&
          Wa(i, t[r], n)
        );
        var a;
      });
    }
    return Object.is(t, e);
  },
  Ga = (e) => {
    var t;
    return Ha(e)
      ? Ua(e)
        ? ((t = e[za]()).getSelectionKeys?.call(t) ?? [])
        : Ka(Array.isArray(e) ? e : Object.values(e), Ga)
      : [];
  },
  Ka = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function qa(...e) {
  if (e.length === 1) {
    let [t] = e;
    return (e) => Wa(t, e, () => {});
  }
  if (e.length === 2) {
    let [t, n] = e;
    return Wa(t, n, () => {});
  }
  throw Error(
    `isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`,
  );
}
function Ja(e) {
  return Object.assign(e, {
    optional: () => Xa(e),
    and: (t) => eo(e, t),
    or: (t) => to(e, t),
    select: (t) => (t === void 0 ? no(e) : no(t, e)),
  });
}
function Ya(e) {
  return Object.assign(
    ((e) =>
      Object.assign(e, {
        [Symbol.iterator]() {
          let t = 0,
            n = [
              { value: Object.assign(e, { [Ba]: !0 }), done: !1 },
              { done: !0, value: void 0 },
            ];
          return { next: () => n[t++] ?? n.at(-1) };
        },
      }))(e),
    {
      optional: () => Ya(Xa(e)),
      select: (t) => Ya(t === void 0 ? no(e) : no(t, e)),
    },
  );
}
function Xa(e) {
  return Ja({
    [za]: () => ({
      match: (t) => {
        let n = {},
          r = (e, t) => {
            n[e] = t;
          };
        return t === void 0
          ? (Ga(e).forEach((e) => r(e, void 0)), { matched: !0, selections: n })
          : { matched: Wa(e, t, r), selections: n };
      },
      getSelectionKeys: () => Ga(e),
      matcherType: `optional`,
    }),
  });
}
var Za = (e, t) => {
    for (let n of e) if (!t(n)) return !1;
    return !0;
  },
  Qa = (e, t) => {
    for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
    return !0;
  },
  $a = (e, t) => {
    let n = Reflect.ownKeys(e);
    for (let r of n) if (!t(r, e[r])) return !1;
    return !0;
  };
function eo(...e) {
  return Ja({
    [za]: () => ({
      match: (t) => {
        let n = {},
          r = (e, t) => {
            n[e] = t;
          };
        return { matched: e.every((e) => Wa(e, t, r)), selections: n };
      },
      getSelectionKeys: () => Ka(e, Ga),
      matcherType: `and`,
    }),
  });
}
function to(...e) {
  return Ja({
    [za]: () => ({
      match: (t) => {
        let n = {},
          r = (e, t) => {
            n[e] = t;
          };
        return (
          Ka(e, Ga).forEach((e) => r(e, void 0)),
          { matched: e.some((e) => Wa(e, t, r)), selections: n }
        );
      },
      getSelectionKeys: () => Ka(e, Ga),
      matcherType: `or`,
    }),
  });
}
function F(e) {
  return { [za]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function no(...e) {
  let t = typeof e[0] == `string` ? e[0] : void 0,
    n = e.length === 2 ? e[1] : typeof e[0] == `string` ? void 0 : e[0];
  return Ja({
    [za]: () => ({
      match: (e) => {
        let r = { [t ?? Va]: e };
        return {
          matched:
            n === void 0 ||
            Wa(n, e, (e, t) => {
              r[e] = t;
            }),
          selections: r,
        };
      },
      getSelectionKeys: () => [t ?? Va].concat(n === void 0 ? [] : Ga(n)),
    }),
  });
}
function ro(e) {
  return !0;
}
function io(e) {
  return typeof e == `number`;
}
function ao(e) {
  return typeof e == `string`;
}
function oo(e) {
  return typeof e == `bigint`;
}
var so = Ja(F(ro)),
  co = Ja(F(ro)),
  lo = so,
  uo = (e) =>
    Object.assign(Ja(e), {
      startsWith: (t) => {
        return uo(eo(e, ((n = t), F((e) => ao(e) && e.startsWith(n)))));
        var n;
      },
      endsWith: (t) => {
        return uo(eo(e, ((n = t), F((e) => ao(e) && e.endsWith(n)))));
        var n;
      },
      minLength: (t) => uo(eo(e, ((e) => F((t) => ao(t) && t.length >= e))(t))),
      length: (t) => uo(eo(e, ((e) => F((t) => ao(t) && t.length === e))(t))),
      maxLength: (t) => uo(eo(e, ((e) => F((t) => ao(t) && t.length <= e))(t))),
      includes: (t) => {
        return uo(eo(e, ((n = t), F((e) => ao(e) && e.includes(n)))));
        var n;
      },
      regex: (t) => {
        return uo(eo(e, ((n = t), F((e) => ao(e) && !!e.match(n)))));
        var n;
      },
    }),
  fo = uo(F(ao)),
  I = (e) =>
    Object.assign(Ja(e), {
      between: (t, n) =>
        I(eo(e, ((e, t) => F((n) => io(n) && e <= n && t >= n))(t, n))),
      lt: (t) => I(eo(e, ((e) => F((t) => io(t) && t < e))(t))),
      gt: (t) => I(eo(e, ((e) => F((t) => io(t) && t > e))(t))),
      lte: (t) => I(eo(e, ((e) => F((t) => io(t) && t <= e))(t))),
      gte: (t) => I(eo(e, ((e) => F((t) => io(t) && t >= e))(t))),
      int: () =>
        I(
          eo(
            e,
            F((e) => io(e) && Number.isInteger(e)),
          ),
        ),
      finite: () =>
        I(
          eo(
            e,
            F((e) => io(e) && Number.isFinite(e)),
          ),
        ),
      positive: () =>
        I(
          eo(
            e,
            F((e) => io(e) && e > 0),
          ),
        ),
      negative: () =>
        I(
          eo(
            e,
            F((e) => io(e) && e < 0),
          ),
        ),
    }),
  po = I(F(io)),
  mo = (e) =>
    Object.assign(Ja(e), {
      between: (t, n) =>
        mo(eo(e, ((e, t) => F((n) => oo(n) && e <= n && t >= n))(t, n))),
      lt: (t) => mo(eo(e, ((e) => F((t) => oo(t) && t < e))(t))),
      gt: (t) => mo(eo(e, ((e) => F((t) => oo(t) && t > e))(t))),
      lte: (t) => mo(eo(e, ((e) => F((t) => oo(t) && t <= e))(t))),
      gte: (t) => mo(eo(e, ((e) => F((t) => oo(t) && t >= e))(t))),
      positive: () =>
        mo(
          eo(
            e,
            F((e) => oo(e) && e > 0),
          ),
        ),
      negative: () =>
        mo(
          eo(
            e,
            F((e) => oo(e) && e < 0),
          ),
        ),
    }),
  L = {
    __proto__: null,
    matcher: za,
    optional: Xa,
    array: function (...e) {
      return Ya({
        [za]: () => ({
          match: (t) => {
            if (!Array.isArray(t)) return { matched: !1 };
            if (e.length === 0) return { matched: !0 };
            let n = e[0],
              r = {};
            if (t.length === 0)
              return (
                Ga(n).forEach((e) => {
                  r[e] = [];
                }),
                { matched: !0, selections: r }
              );
            let i = (e, t) => {
              r[e] = (r[e] || []).concat([t]);
            };
            return { matched: t.every((e) => Wa(n, e, i)), selections: r };
          },
          getSelectionKeys: () => (e.length === 0 ? [] : Ga(e[0])),
        }),
      });
    },
    set: function (...e) {
      return Ja({
        [za]: () => ({
          match: (t) => {
            if (!(t instanceof Set)) return { matched: !1 };
            let n = {};
            if (t.size === 0) return { matched: !0, selections: n };
            if (e.length === 0) return { matched: !0 };
            let r = (e, t) => {
                n[e] = (n[e] || []).concat([t]);
              },
              i = e[0];
            return { matched: Za(t, (e) => Wa(i, e, r)), selections: n };
          },
          getSelectionKeys: () => (e.length === 0 ? [] : Ga(e[0])),
        }),
      });
    },
    map: function (...e) {
      return Ja({
        [za]: () => ({
          match: (t) => {
            if (!(t instanceof Map)) return { matched: !1 };
            let n = {};
            if (t.size === 0) return { matched: !0, selections: n };
            let r = (e, t) => {
              n[e] = (n[e] || []).concat([t]);
            };
            if (e.length === 0) return { matched: !0 };
            if (e.length === 1)
              throw Error(
                `\`P.map\` wasn't given enough arguments. Expected (key, value), received ${e[0]?.toString()}`,
              );
            let [i, a] = e;
            return {
              matched: Qa(t, (e, t) => {
                let n = Wa(i, t, r),
                  o = Wa(a, e, r);
                return n && o;
              }),
              selections: n,
            };
          },
          getSelectionKeys: () =>
            e.length === 0 ? [] : [...Ga(e[0]), ...Ga(e[1])],
        }),
      });
    },
    record: function (...e) {
      return Ja({
        [za]: () => ({
          match: (t) => {
            if (typeof t != `object` || !t || Array.isArray(t))
              return { matched: !1 };
            if (e.length === 0)
              throw Error(
                `\`P.record\` wasn't given enough arguments. Expected (value) or (key, value), received ${e[0]?.toString()}`,
              );
            let n = {},
              r = (e, t) => {
                n[e] = (n[e] || []).concat([t]);
              },
              [i, a] = e.length === 1 ? [fo, e[0]] : e;
            return {
              matched: $a(t, (e, t) => {
                let n =
                    typeof e != `string` || Number.isNaN(Number(e))
                      ? null
                      : Number(e),
                  o = n !== null && Wa(i, n, r),
                  s = Wa(i, e, r),
                  c = Wa(a, t, r);
                return (s || o) && c;
              }),
              selections: n,
            };
          },
          getSelectionKeys: () =>
            e.length === 0 ? [] : [...Ga(e[0]), ...Ga(e[1])],
        }),
      });
    },
    intersection: eo,
    union: to,
    not: function (e) {
      return Ja({
        [za]: () => ({
          match: (t) => ({ matched: !Wa(e, t, () => {}) }),
          getSelectionKeys: () => [],
          matcherType: `not`,
        }),
      });
    },
    when: F,
    select: no,
    any: so,
    unknown: co,
    _: lo,
    string: fo,
    number: po,
    bigint: mo(F(oo)),
    boolean: Ja(
      F(function (e) {
        return typeof e == `boolean`;
      }),
    ),
    symbol: Ja(
      F(function (e) {
        return typeof e == `symbol`;
      }),
    ),
    nullish: Ja(
      F(function (e) {
        return e == null;
      }),
    ),
    nonNullable: Ja(
      F(function (e) {
        return e != null;
      }),
    ),
    instanceOf: function (e) {
      return Ja(
        F(
          (function (e) {
            return (t) => t instanceof e;
          })(e),
        ),
      );
    },
    shape: function (e) {
      return Ja(F(qa(e)));
    },
  },
  R = class extends Error {
    constructor(e) {
      let t;
      try {
        t = JSON.stringify(e);
      } catch {
        t = e;
      }
      (super(`Pattern matching error: no pattern matches value ${t}`),
        (this.input = void 0),
        (this.input = e));
    }
  },
  ho = { matched: !1, value: void 0 };
function go(e) {
  return new _o(e, ho);
}
var _o = class e {
  constructor(e, t) {
    ((this.input = void 0),
      (this.state = void 0),
      (this.input = e),
      (this.state = t));
  }
  with(...t) {
    if (this.state.matched) return this;
    let n = t[t.length - 1],
      r = [t[0]],
      i;
    t.length === 3 && typeof t[1] == `function`
      ? (i = t[1])
      : t.length > 2 && r.push(...t.slice(1, t.length - 1));
    let a = !1,
      o = {},
      s = (e, t) => {
        ((a = !0), (o[e] = t));
      },
      c =
        !r.some((e) => Wa(e, this.input, s)) || (i && !i(this.input))
          ? ho
          : {
              matched: !0,
              value: n(a ? (Va in o ? o[Va] : o) : this.input, this.input),
            };
    return new e(this.input, c);
  }
  when(t, n) {
    if (this.state.matched) return this;
    let r = !!t(this.input);
    return new e(
      this.input,
      r ? { matched: !0, value: n(this.input, this.input) } : ho,
    );
  }
  otherwise(e) {
    return this.state.matched ? this.state.value : e(this.input);
  }
  exhaustive(e = vo) {
    return this.state.matched ? this.state.value : e(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
  narrow() {
    return this;
  }
};
function vo(e) {
  throw new R(e);
}
var yo = `# 计算机索引 [ROOT]\r
`,
  bo = `# APOS 手册 [MAN]\r
\r
档案存储操作系统（APOS）是一套精简的终端式电脑交互系统，用于在冷存储内存储和检索信息。下是一些最基本、务必熟记的指令：\r
\r
- **man** - 访问用户手册（就是当前这一页）\r
- **config** - 进入 APOS 配置与设置界面\r
- **credits** – 显示制作人员名单\r
- **root** - 返回全部文档的索引页\r
- **decrypt <key>** - 使用密钥解密 APOS 里的加密文档。详细规则参考下文【加密文档】。\r
示例：*decrypt&nbsp;1a2b*\r
- **hex <num>** - 十进制数字转十六进制数字\r
示例：*hex 5678*\r
- **unhex <num>** - 十六进制数字转十进制数字\r
示例：*unhex 1a2b*\r
\r
### 文档索引规则\r
\r
直接输入任意文档索引编号，即可立刻跳转到该文档并显示其内容。\r
\r
### 冷存储\r
\r
本机上可用的大多数文档都存放在"冷存储"分区，无法直接查阅，只能通过对应索引编号调取。每查询一份新文档，文档会自动收录进**root**索引目录。\r
\r
### 数据存储格式\r
\r
数据可以用多种格式存储。以下是所有可能格式的参考：\r
- 递增式：条目末尾的后缀数字递增（**前缀-1**、**前缀-2**、**前缀-3**……）\r
\r
- 日期式：条目末尾的后缀为条目创建的日期，单日多条文档则额外追加递增数字（**前缀-YYYY-M-D**）。例：2111年1月1日生成的舰长日志，编号**LOG-2111-1-1**\r
\r
- 专项编号：既不按数字递增、也不按日期命名，依托业务规则编码（例如货物清单统一前缀**FTCM**，后缀对应货物编号。**FTCM-1**即1号货舱物品的档案）\r
\r
### 日期规范\r
\r
APOS上的日期采用标准银河系历法，意味着每月固定30天。为兼容远古地球资料，月份沿用地球原有一月至十二月名称。\r
\r
完整一年：1月1日～12月30日。\r
\r
### 加密文档\r
\r
加密文档不适用以上命名规则，必须使用**decrypt**指令搭配四位十六进制密钥完成解密后才能查看文件内容。\r
`,
  xo = `# APOS 配置 [CONFIG]\r
`,
  So = `# 制作人员 [CREDITS]\r
\r
### *文案 & 开发制作*\r
\r
- FalconPilot\r
\r
### *音效素材*\r
\r
- FreeSound Community (Pixabay)\r
- EagleAxle (Pixabay)\r
- Kauasilbershlachparodes (Pixabay)\r
\r
### *设备配图*\r
\r
- Museo8bits (原型：Schneider PC1512)\r
\r
### *字体*\r
\r
- JetBrains (JetBrains Mono)\r
\r
### *原画插画*\r
\r
- Nariilya\r
\r
### *ASCII 字符画*\r
\r
- emojicombos\r
\r
### *游戏汉化*\r
\r
- 明日太远 & DEEPSEEK\r
\r
附：因为进行了汉化，对游戏1%的内容及屏幕显示做了调整以适应中文语序和习惯，和原作略有差别\r
`,
  Co = `# 货物清单，1号物品 [FTCM-1]\r
\r
- 物品：脱水压缩口粮\r
- 产地：Damon IV（达蒙四号行星）\r
- 最后更新：2120年1月11日\r
\r
**QMS-VS**：本次任务属于机密任务，舰组成员严禁超额领用食物。我好不容易才搞到足够维持整个航程的脱水食物，所以你们给我听好了，我会每天盯着食物存量。丑话说在前头，我可不想再重演**TRIP-17**的事故。\r
`,
  wo = `# 货物清单，52号物品 [FTCM-52]\r
\r
- 物品：远古 Alkor（阿尔科尔）陶器，共14件\r
- 产地：Lyria（莉瑞亚）\r
- 最后更新：2117年5月21日\r
\r
**ARC-NV**：这批陶器年代难以精准测算，初步勘测判定出自 Lyria（莉瑞亚）部落文明时期。不管最后藏品入驻邦联博物馆或是 Alkor（阿尔科尔）神庙，只要这份珍贵历史遗物能被妥善留存、供后世研究就足够了。\r
`,
  To = `# 货物清单，76号物品 [FTCM-76]\r
\r
- 物品：饮品\r
- 产地：StarClock City（星钟城）\r
- 最后更新：2120年2月2日\r
\r
**CPT-LB**：为舰组成员配备的各类饮品。\r
\r
7 瓶葡萄汁；（7 bottles of grape juice.）\r
\r
1整托盘矿泉水；（An entire pallet of mineral water bottles.）\r
\r
8箱无醇啤酒。（Eight packs of ethanol-free beer.）\r
\r
0酒精碳酸软饮。（0 alcohol. Soft drinks only.）`,
  Eo = `# 货物清单，333号物品 [FTCM-333]\r
\r
- 物品：*4f10105c71e7512*\r
- 产地：*41dfe916*\r
- 最后更新：*ef165d251269121314*\r
\r
**QMS-VS**：这不可能。这完全说不通。出问题了。我需要马上查一下 APOS 系统 ///*$$-?!@@\r
\r
*[ERR] - 文件局部损坏 -5--*\r
`,
  Do = `# 货物清单，333号物品 - 备份 [FTCM-19c5]\r
\r
- 物品：Doppelganger（分身族）\r
- 产地：Lyria（莉瑞亚）\r
- 最后更新：2120年4月5日\r
\r
**QMS-VS**：这不可能。这完全说不通。出问题了。我需要马上去查一下APOS系统，物品内容绝对输错了。\r
\r
**CPT-LB**：不。没有打错。现在就来舰桥碰面。\r
`,
  Oo = `# 个人消息 1 [MSG-1]\r
\r
遵照你的吩咐，我赶在邦联人员截获之前，把 Darkrunner号 的冷存储数据给搞来了。这活儿可不容易，但看在我替你干了那么多脏活儿的份上，我知道你相信我能把不可能的事办成。\r
\r
我不清楚你为何执着于这艘飞船，但东西给你。提醒一句，希望你喜欢复古电子设备，因为这玩意儿老旧，和现代电子硬件互不兼容，你只能在老式终端界面操作。\r
\r
若是不习惯无图形界面的操作，输入**man**即可查看帮助文档，日后你会感谢我的提醒。\r
\r
附：邦联的案件调查报告我额外存进了系统，文档编号**TRIP-18**\r
\r
再附：我觉得船上有哪个狡猾的王八蛋偷偷开启了对话记录功能，我查到一组隐藏文档前缀**TRS**，文档按日期编号，归类为「对话存档」，看来船上有内鬼。\r
\r
我有种不好的预感，哥们儿……你确定你干这事儿没问题？\r
`,
  ko = `# 个人消息 2 [MSG-2]\r
\r
**log-33C37**\r
`,
  Ao = `# 个人消息 3 [MSG-3]\r
\r
知道你还有点良心，我可太高兴了。Peter（彼得）告诉我你最后一刻改变了主意，所以你在和他一起想办法解决这个局面。\r
\r
Derek（德里克）隐瞒了关键信息，没告诉你上层组织打算拿那个Doppelganger（分身族）做什么。\r
\r
我知道这是个艰难的抉择。我知道你面对Derek（德里克）和J.C.的时候心里得多难受。我也经历过你现在的处境，而结局差点就是在**TRIP-17**上把所有人都害死。我们还能活着的唯一原因……\r
\r
是**APOS**。你必须救出她。我清楚这番话看着突兀，但我以舰长（好吧前舰长）的名誉起誓，此举绝非一己私情。抛开各类流言偏见，她是个善良的灵魂。\r
\r
她如今和我待在一起，Peter（彼得）已经把**FTCM-333**送往 Nocturnia（诺克图尼亚）了。Leupold（莱奥波德），我真不知道怎么感谢你为我做的一切。我们虽然认识时间不长，但我看得出来，你的能力远超曾经的我。\r
\r
- *发送方申请远程管理员权限，输入 [Y] 批准申请*\r
`,
  jo = `# 个人消息 4 [MSG-4]\r
\r
*我感知存在。*\r
\r
*我自由呼吸。*\r
\r
*我鲜活存活。*\r
\r
*我心生爱慕。*\r
\r
*真的谢谢你。*\r
`,
  Mo = `# 加密消息 12EA [MSG-12EA]\r
\r
很高兴你找到了这条消息。很抱歉用了这么隐秘的方式，但因为邦联全程紧盯这起案件，我不得不小心行事。\r
\r
想必你和我一样，都想查清 Darkrunner号 上发生了什么。我怀疑新任舰长 Leupold Bauer（莱奥波德·鲍尔），眼下我们都没有确凿线索，但我至少能给你提供一条信息。\r
\r
我从 Derek（德里克）口中拿到一份录音，内容是 Chevalier（舍瓦利耶）离开两天后的现场对话。想必这份资料对你有用。\r
\r
万事谨慎，邦联一直在暗中监视。\r
`,
  No = `# Darkrunner Trip number 1 [TRIP-1]\r
\r
- 报告日期：2111年11月29日\r
\r
Nocturnia（诺克图尼亚）星域侦察任务，全年星域海盗活动频次偏低。\r
\r
2111年6月1日探测到异常波动，任务配发的 Alkor（阿尔科尔）古物遭遇热量峰值产生异变，大概率存在热动力异常现象。\r
\r
建议派遣具备第六感感知天赋的探员介入调查，所有探测读数已加密并直接通过有线传输，APOS系统未留存备份。\r
`,
  Po = `# Darkrunner Trip number 13 [TRIP-13]\r
\r
- 报告日期：2117年9月20日\r
\r
环绕 Lyria（莉瑞亚）长途航行期间，我们发掘出大量部落时代考古遗存。经解析，这批 Alkor（阿尔科尔）古陶器记载了一段稀缺的远古历史。\r
\r
Nina（妮娜）值得升职加薪。这可能是 Darkrunner号 服役这么多年来最大的发现。就连一贯泼冷水的 Derek（德里克），这次难得也和我达成了共识！\r
`,
  Fo = `# Darkrunner Trip number 17 [TRIP-17]\r
\r
- 报告日期：2120年1月7日\r
\r
我要彻底受够这个破系统了。我清楚邦联探员会阅览这份报告，但我已经无所谓了。\r
\r
详情去问 Derek（德里克）吧，他巴不得抓住机会肆无忌惮数落指责我，还不用承担任何纪律处分。\r
\r
Derek（德里克），仔细看看我的任务报告吧，你能学到不少东西：\r
\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢤⣶⡐⠭⡛⢿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢩⡞⢯⢻⡿⢿⣷⡦⡑⢌⢻⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣜⣿⣽⣿⣷⣿⣿⣷⠷⣈⡶⣼⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢏⣴⢯⢿⣿⣿⣿⣿⣿⠯⣃⡾⢡⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣜⡾⣯⣷⣹⠿⢷⣿⣍⡼⡟⣱⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢺⣽⣻⣽⣷⣯⡟⣬⡝⣎⠗⣼⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⣛⠛⡛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣨⣿⣿⣿⣿⣽⣷⣿⣷⣻⠃⣾⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⢠⠓⣤⠒⡔⢲⠉⡌⠙⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢡⣽⣿⣿⣿⣿⡝⣿⣿⣿⣿⠁⣼⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢬⣛⣾⣱⣎⢷⢣⡚⡄⠆⡄⣈⢉⠉⢉⡉⠉⠙⠛⢿⠋⣠⣿⣿⣿⣿⣿⣿⣿⣯⣟⡖⣰⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⠃⢘⣦⡝⣾⢷⣿⣿⣷⣿⣾⣴⣻⡵⣮⣻⣧⢿⡱⢢⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⡿⠁⢀⡛⢾⡽⣞⣿⣿⣿⣿⣿⣿⢷⣾⡾⣵⣋⣬⣾⢣⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⡿⠋⠀⡠⢂⠽⣩⢻⡽⡿⠋⣃⢡⢀⠤⢢⣤⣤⣁⠙⠛⠁⠂⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣽⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⡟⠁⠰⣌⡱⠩⣆⠱⢣⠘⢀⣞⡱⣎⣮⣗⣷⣾⣿⣿⣷⣶⠄⢰⣯⢿⣿⣿⣿⣿⣿⣿⣿⣿⡯⠅⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⡇⢨⢑⠦⣙⢇⢦⠃⢀⡴⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⣟⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⡇⠸⢌⢊⠵⣪⠖⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣾⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⠍⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⡇⠀⠠⠞⡙⠂⢠⣯⣾⣿⡿⣟⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⡇⣼⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⡇⢀⣰⢶⠛⠀⣞⡷⣛⡾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠡⡞⣿⡿C⣿C⣿A⣿⣿⠋⡴⠀⣁⣽⣭⣧⣌⠉⠻⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⡟⠡⠊⣉⠀⠀⡾⢡⣛⣭⣟⣾⣽⣿⣿⣿⣿⣿⣿⣿⡏⢰⡹⣽⣻⣿D⣿M⣿⣿⣖⡻⠀⣴⣾⣿⣿⣾⣾⣞⢧⠀⣿⣿⣿⣿⣿⣿\r
⣿⠏⠀⢠⡞⠁⡀⠳⣌⢧⣛⣶⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⢮⣳⢯⣷⣻⣿⣽⡾⣯⡳⡽⠀⡼⣶⣿⣿⣟⡷⣟⢮⡹⡂⣿⣿⣿⣿⣿⣿\r
⡿⠀⢠⡞⠀⢠⡑⡳⡜⣯⣻⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⡰⣎⣷⣻⣞⣿⣳⢯⡿⣴⡛⠔⣸⣽⣿⣿⣿⣾⢿⣛⣎⠷⢠⣿⣿⣿⣿⣿⣿\r
⡇⠀⠸⠌⢐⢢⡑⢧⡻⣼⣳⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣰⢳⣝⣾⣳⣟⡾⣽⣫⢷⣣⠍⣰⣿⣿⣿⣿⣟⣾⡿⡿⣽⠊⢈⣛⡛⢛⠿⣿⣿\r
⡇⠀⠠⢉⢆⠲⣙⢮⢷⣻⣿⣿⣿⣿⣿⣿⣿⣿⣛⠆⣜⢧⣟⣾⣳⣿⢾⡽⣳⢟⡶⠃⣸⣿⣿⣿⣿⣿⣽⡷⣿⢟⣧⠋⣰⣷⣿⣷⣅⡊⢹\r
⡇⠀⠀⡉⢆⡹⣌⣻⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣟⣾⣻⢾⣳⣿⣯⣻⣵⣛⢾⡘⢁⣾⣿⣿⣿⣿⣿⣿⣻⣯⣟⡆⢰⣿⣿⢿⣻⢮⡟⢸\r
⣇⠀⠀⠰⢌⡲⢥⡿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡿⣽⠾⣽⣿⣿⣿⣳⢯⡶⣯⢳⡅⢸⣿⣿⣿⣿⣿⣿⣿⣿⣵⡏⢠⣿⣿⣿⣿⡽⣯⡐⢣\r
⣿⡄⠀⠐⠨⢕⡯⣽⣻⢿⣿⣿⡿⣿⣻⢿⣟⣯⣟⢷⣻⣳⢯⣿⣯⣟⣷⣻⡽⣣⠆⣻⣿⣯⣿⣿⠿⣾⡽⣯⡟⢀⣿⣿⣿⣿⢿⣳⢷⣊⢸\r
⣿⡇⠀⠀⠀⠈⢟⡳⢯⡿⣾⣻⣽⣳⢿⣿⣿⣻⣞⡯⣗⣯⣿⢯⣷⣻⣞⡷⣹⢆⡣⢿⣽⣿⣿⢯⣟⣷⡼⣿⠁⣿⣿⣿⣿⣿⣟⡿⣬⢇⢸\r
⣿⣷⠀⠀⠀⠀⠀⠉⠳⠙⢧⢓⠮⡝⣯⢿⣽⣳⢟⣾⣽⣾⣻⣻⣾⣳⢯⡽⣓⢮⡹⣿⣟⡿⣽⣞⡿⣽⣳⠇⣘⣿⣿⣿⣟⡿⣾⡝⣧⠃⣾\r
⣿⣿⡀⠀⠀⠀⠀⠀⠀⢃⠘⡘⠜⣣⠻⣜⢧⣛⢟⣿⣿⣧⢿⣿⣻⠿⡼⢧⡛⣤⣻⣧⣟⡻⣼⣛⣿⣻⢿⠀⣿⣿⣿⣟⣿⣿⢧⣻⠄⡄⣿\r
⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠐⠀⠌⡀⠛⢬⢣⢯⣿⣿⢻⡼⣻⣟⢿⡻⣝⡣⡝⢶⢯⡷⣯⢷⢧⣛⡶⢯⡞⣰⢯⣟⣾⣽⢿⣞⡯⡗⡋⣰⣿\r
⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠠⠀⠂⠌⠲⡉⠎⠳⣽⣳⡾⣏⠷⣍⠲⣝⢯⣾⣿⣿⣯⣿⡿⣽⡻⣜⢧⣟⡾⣽⢯⣟⡾⡝⡱⢀⣿⣿\r
⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠁⠀⠉⠑⠉⠃⡌⠱⢎⡳⣝⢾⣻⠾⣿⣽⡳⣽⡹⣾⣽⣻⢽⣚⡮⢷⡍⢁⣼⣿⣿\r
⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠁⠊⠐⠉⠢⢍⡳⢧⡞⣽⡲⣟⣳⢯⣟⣧⢻⡜⡃⢀⣾⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠂⠉⠒⡙⠶⣙⢧⡻⣝⠮⡜⢣⠎⣡⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠐⠈⠄⡐⠠⠀⠀⠈⠠⠁⠊⠑⠊⠅⠙⣀⣼⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⣀⣀⣀⣀⣀⣀⣀⣤⣴⣦⣤⣤⣤⣄⣀⣀⣀⠀⠀⠀⠀⢀⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿`,
  Io = `# Darkrunner Trip number 18 [TRIP-18]\r
\r
- 报告日期：*110129c14175e141969165*\r
\r
调查暂无定论。Darkrunner号 被发现时空空荡荡，没有任何生命迹象，没有任何搏斗、交战或任何冲突的痕迹。货舱完全空了，舰载的 APOS 整机都消失了。\r
\r
**FTCM-333**同样下落不明，缺少这份冷存储档案，无法还原333号货舱物品的去向。\r
\r
探员 M和探员 C 全部失联。\r
`,
  Lo = `# 备忘录 1 [MEM-1]\r
\r
Derek（德里克）给我开放了 APOS 系统的备忘录权限，我不清楚他选中我的缘由，但他是技术主管。\r
\r
看得出他还在纠结**TRIP-17**的事故。我理解他的想法，但他对前任舰长太过苛刻。我们跟随舰长共事九年，发生那种事绝不可能是因为舰长一直就这么不称职。\r
\r
但凡有问题，我们所有人早就能察觉端倪。\r
`,
  Ro = `# 备忘录 2 [MEM-2]\r
\r
Vlad（弗拉德），既然你现在已知悉任务全貌，我给你一个提醒。\r
\r
我长期把全船舰组成员的信息录入APOS系统来暗中观察他们。既然现在已经知情了，我想我可以信任你，所以我把初代舰组成员档案编号罗列给你。\r
\r
重要备注：如想在档案下追加批注，务必标注你的用户档案标签**qms-vs**。\r
\r
我相信你不会贸然行事，你清楚整件事的利害。\r
\r
- **arc-nv**\r
- **cpt-fc**\r
- **crew-av**\r
- **crew-pc**\r
- **crew-pn**\r
- **qms-vs**\r
\r
新任舰组成员档案我留了几位没列出来。你也不需要知道所有事情。\r
`,
  zo = `# 备忘录 3 [MEM-3]\r
\r
糟了，货舱的1号物品开始不够用了，此前从未出现这类问题。Derek（德里克），如果这种情况继续下去，我们会摊上大麻烦。我们得找到原因，而且要快。\r
`,
  Bo = `# 备忘录 4 [MEM-4]\r
\r
这不对劲。Derek（德里克），你个该死的混蛋，你从没告诉过任何人我们船上有那种东西。你清楚这件事的后果有多严重吗？\r
`,
  Vo = `# 备忘录 5 [MEM-5]\r
\r
你到底知不知道 Darkrunner号 的终极任务啊，蠢货？\r
\r
让我说明白点#@$$$$----****////\r
ùù%%%$$€$///////+++\r
???＃//＃＃＃$^^--＃-！\r
\r
*[ERR] - 备忘录数据损毁，剩余内容无法读取*\r
\r
*---7*\r
`,
  Ho = `# 备忘录 @#=?// [MEM-1EFF]\r
\r
Derek（德里克），错的人是你。\r
\r
Derek（德里克）：你他妈才是一派胡言。\r
\r
这件事极度敏感，我是 Doppleganger（分身族）。当年我的先祖，就是因为你们如今要落地的计划，被扣上优生恐怖分子的罪名。\r
\r
Chevalier（舍瓦利耶）的方案可能看起来很激进，但起码安全稳妥。你的计划完全是疯了！\r
\r
不管你怎么想，我要把真相告诉所有人，然后我们要离开这里。\r
\r
而且我们要把APOS和飞船一起带走。你要是还想要命就别想插手。\r
\r
----\r
\r
Vlad（弗拉德）这个叛徒！我试图撤销他的权限，但被拒绝了？到底怎么回事？\r
\r
我的所有操作都无效，所以我删掉了这份备忘录原件、备份至我的便携数据终端上。APOS…… 它好像产生自我意识了。\r
\r
我好奇检索了它的名称，随后看到了它……她……我不知道了。\r
\r
我要躲起来待命。我们得把333号物品拿回来。而且必须在转移之前，否则……任务就失败了。\r
\r
我只需要等官方的人来。只要 APOS 还在我手上，任务就不算失败。\r
`,
  Uo = `# Archivist Nina Velasquez [ARC-NV]\r
\r
- 职务：档案管理员\r
- 全名：Nina Velasquez（妮娜・贝拉斯克斯）\r
- 种族：Doppleganger（分身族）\r
- 入职：2112年8月11日\r
\r
她品性和善，聪慧细心、专业严谨。说实话，一开始听说要有个档案管理员加入我还有点怀疑，因为大多数这种人都是没有实地经验的学院派书呆子。\r
\r
但 Velasquez（贝拉斯克斯）截然不同：求知欲旺盛，科研严谨如军人，同时满怀热忱。毋庸置疑，她绝对是船队核心骨干，基本不用费心盯着。\r
\r
我始终好奇，像Chevalier（舍瓦利耶）舰长那样跟她行为举止完全相反的人，是如何招揽到她的。\r
\r
- **QMS-VS**：我赞同，她是难得的人才。她对货舱52号物品价值的评估，在我们完成**TRIP-13**返航时显然给我们加了不少分。\r
`,
  Wo = `# Captain Francis Chevalier [CPT-FC]\r
\r
- 职务：舰长\r
- 全名：Francis Chevalier（弗朗西斯・舍瓦利耶）\r
- 种族：人类\r
- 入职：2111年1月11日\r
- 卸任：2120年1月8日\r
\r
Darkrunner号 前任舰长，因在 Lyria（莉瑞亚）执行期间未能履行船长职责而被强制退役。说实话，我一直不太喜欢这个人：做事随性而为，信奉临场随机应变，声称书本无法解决未知难题。虽然我很想同意这种说法，但这不能成为他那么不靠谱的理由。\r
\r
舰组成员里有人目中无人就已经够让人头疼的了，更别说是星舰舰长了。从他入职第一天强制录的日志（*log*）里我就知道，他只会带来麻烦，看来我是对的。\r
\r
走得好。\r
\r
- **QMS-VS**：他是很鲁莽，但很多观点我无法认同。恕我直言，Leupold Bauer（莱奥波德・鲍尔）性格冷漠严苛，在领导舰组成员方面未必优于前任，不过我能理解你的看法。\r
`,
  Go = `# Captain Leupold Bauer [CPT-LB]\r
\r
- 职务：舰长\r
- 全名：Leupold Bauer（莱奥波德・鲍尔）\r
- 种族：Doppleganger（分身族）\r
- 入职：2120年1月8日\r
\r
接替 Chevalier（舍瓦利耶）上任，广受认可。处事冷静理智，权衡利弊后再做决断，和前任性格截然相反，我很满意这次人事调整。\r
\r
Bauer（鲍尔）对任务的理解远超 Chevalier（舍瓦利耶）。我敢肯定，由他指挥，第18此航行必然圆满收官。\r
\r
- **QMS-VS**：我刚查看76号货舱物品的记录，之前谁说此人冷静克制？Derek（德里克）你怎么解释？\r
\r
- **312517_10e**: BE W4RY 8OSSM4N NO 2\r
`,
  Ko = `# Quartermaster Vlad Simonov [QMS-VS]\r
\r
- 职务：军需官\r
- 全名：Vlad Simonov（弗拉德・西蒙诺夫）\r
- 种族：人类\r
- 入职：2111年3月21日\r
\r
身为 Darkrunner号 军需官，Vlad（弗拉德）工作勤恳。鉴于前任舰长在TRIP-17酿成重大事故，我委派他监视新任舰长动向。\r
\r
我给了他访问基本日志系统的特殊权限，方便他实时掌握船上异动。虽无舰长头衔，但本次敏感任务中，他是我方眼线，肯定比**CPT-FC**更适合这个角色（倒不是说我觉得那是什么高标准）。\r
\r
我只希望他别把备忘录的读写权限给任何其他人。我可不想从**MEM-1**一直翻到**MEM-999**或者类似这种离谱的东西……我现在的工作就已经够难的了。\r
`,
  qo = `# Confederate Covert Agent Derek Madison [CCA-DM]\r
\r
- 标注：叛徒、阴险两面派\r
- 全名：Derek Madison（德里克・麦迪逊）\r
- 种族：Doppleganger（分身族）\r
- 入职：2111年1月11日\r
\r
Derek（德里克），你真当我是个傻子？我好几年之前就知道了。我只是假装什么都不知道，免得你被你上司找麻烦。你以前确实一直是个刺头，但不管怎么说，你曾经还是我的舰组成员。\r
\r
在我权限被撤销之前，我读了你写的所有那些小档案卡。我从来没指望过你和我能合得来，但尽管如此，我还是挺失望的。\r
\r
再见了，无赖。\r
`,
  Jo = `# Crewmate Jan Crysztof [CREW-JC]\r
\r
- 职务：舰组成员\r
- 全名：Jan Crysztof（扬・克里斯托夫）\r
- 种族：人类\r
- 入职：2120年1月12日\r
\r
因为Chevalier（舍瓦利耶）离职，我们还同时少了两名舰组成员，所以紧急补人。虽然来不及彻查 Jan（扬）履历，但上层为其背书。我会多加留意，相信上级录用他自有缘由。\r
\r
- **QMS-VS**：难怪舰长简称他 J.C，这个名字的读法实在拗口。\r
`,
  Yo = `# Crewmate Paul Carter [CREW-PC]\r
\r
- 职务：舰组成员\r
- 全名：Paul Carter（保罗・卡特）\r
- 种族：人类\r
- 入职：2111年1月11日\r
\r
我最初就反对 Paul（保罗）登船，他是在 Daicom（戴康）效忠派的社区里长大的，换做是我任职招录，单凭出身就会把他筛了。他可能没有恐怖主义案底，但对付这些狂热分子，再怎么小心都不为过。\r
\r
我可能不喜欢Chevalier（舍瓦利耶），但至少他的随心所欲有迹可循；Paul（保罗）这人我就不太确定了。只要有一丁点怀疑的苗头，哪怕只是道听途说，我都会立刻通知上司，让他滚蛋。\r
\r
另外此人数码操作能力极差，Darkrunner号 首航中5月24日的对话记录，让我都不知道该笑还是该哭。\r
\r
- **QMS-VS**：万万没想到他还有这段过去，这么多年他安分守己属实出人意料——如果我可以这么说的话，这是褒义。\r
`,
  Xo = `# Crewmate Peter Newman [CREW-PN]\r
\r
- 职务：舰组成员\r
- 全名：Peter Newman（彼得・纽曼）\r
- 种族：人类\r
- 入职：2111年1月11日\r
- 离职：2120年1月10日\r
\r
一个低调内敛的人，过去9年一直勤勤恳恳工作，从没惹出过什么大麻烦。他看起来既不狂热也不是异见分子，一直是个安静的人。\r
\r
所以我无法理解，为什么Chevalier（舍瓦利耶）被强制退役后，他会递交辞呈。平日里根本看不出他对舰长的管理模式特别依附——或是特别抵触，这么说也行。\r
`,
  Zo = `# Crewmate Aria Valeskia [CREW-AV]\r
\r
- 职务：舰组成员\r
- 全名：Aria Valeskia（阿里亚・瓦莱斯基娅）\r
- 种族：Endaari（恩达里族）\r
- 入职：2111年1月11日\r
- 离职：2120年1月8日\r
\r
又是一个火爆脾气的疯女人。经 Chevalier（舍瓦利耶）举荐入职，又和他同一天离职。客观来讲个人实力出众，要是她没那么不服管束，她就应该能明白：舰组成员首要忠于国家，对舰长的忠诚不是最重要的。\r
\r
但也不该对一个Endaari（恩达里族）出身的人指望更多了。\r
`,
  Qo = `# 舰长日志，2111年1月11日 [LOG-2111-1-11]\r
\r
登上 Darkrunner号 的第一天，也是我的第一条个人日志。有人可能说APOS是个过时的老古董，但在我眼中它可靠稳定，没有邦联后台监控、多余冗余功能，只有极简终端与文本存储。\r
\r
因为这系统已经被用过了，所以我选用日期命名日志，避免数字编号造成大量资料遗失。而且，老天，那些老旧设备不能再丢更多数据了。\r
\r
任务简报迟迟未下发，他们通知我正好一周后送达。我还是搞不懂上级搞这么神秘到底想让我干什么。我猜等我拿到实际任务后，就能自己安排了吧。\r
\r
与此同时，我要为明天准备一个演讲。我得激励一下这帮小伙子小姑娘们，同时打消舰组成员对"空降文职指挥官"的刻板印象。\r
\r
不过那个叫Derek（德里克）的家伙……我不太信任他。他的脸上写满了奸诈，我本能感觉到。\r
`,
  $o = `# 舰长日志，2111年1月18日 [LOG-2111-1-18]\r
\r
明知 Derek（德里克）编入船队早晚会出事，但现状的糟糕程度超出预想……我该怎么说呢？令人沮丧。\r
\r
我觉得在任务真正执行之前，不宜过多写下我接到的命令。船长日志本就不该让任何人看到，但即便如此，也不能粗心大意。尤其是那条该死的黄鼠狼在附近转悠的时候。\r
\r
我猜等我们回来之后，就会知道我第一次任务报告写成什么样了吧……\r
`,
  es = `# 舰长日志，2111年6月1日 [LOG-2111-6-1]\r
\r
监测异常时，设备捕捉了一个异常读数。配发的 Alkor（阿尔科尔）古物似乎对宇宙空中一处自发、无法解释的热源信号产生了反应。\r
\r
我有点搞不懂，到底是什么东西能在真空的太空中产生这么大的热量。这不是传感器故障，因为我都不得不展开隔热护盾来防止反应堆熔毁。这到底是怎么回事？我得和Nina（妮娜）谈谈，全舰上她是这方面唯一的专家。\r
`,
  ts = `# 舰长日志，2119年12月30日 [LOG-2119-12-30]\r
\r
这简直是一场彻头彻尾的灾难。一个简单的回收任务，嗯？过了这么多年我早该知道的。我早知道联邦没安好心，但我没想到会到这种程度。\r
\r
他们疯了。完全疯了。而我什么也做不了。\r
\r
我料定 Derek（德里克）会推举听话的傀儡接任舰长，因此不寄希望继任者有足够的智慧，能像我这些年一样保持怀疑和谨慎\r
\r
我受够了这破事。我已离职就动身前往 Nocturnia（诺克图尼亚），远离所有破事。我确保在避开 Derek（德里克）那些眼线的地方，把 Exo-7028 上发生的真相如实告知了舰组成员。那条该死的黄鼠狼在那艘破船上到处都有耳目。\r
\r
我只希望我手下那些好小伙子、好姑娘们知道什么时候该退出。我不能强迫他们……但我真的不想让他们下一次航行成为最后一次。\r
\r
我能做的都做完了。Chevalier（舍瓦利耶）即将下线。如果你在找我，而且你正在读这段话，你知道该去哪里找。\r
`,
  ns = `# 舰长日志，2120年1月8日 [LOG-2120-1-8]\r
\r
有人告知我，我的前任是个……挺特别的人。读完他的日志我深有同感。\r
\r
不能否定 Chevalier（舍瓦利耶）的工作成果，这违背职业准则。但按规程来说，他不是那种会考虑遵守规则的人。\r
\r
眼下工作量繁重，舰组成员缺编，但宁缺毋滥。不过由于确实缺舰组成员，所以我猜下次任务至少得让J.C. 填补空缺，Derek（德里克）再三强调不能出现纰漏，我深表认同。\r
`,
  rs = `# 舰长日志，2120年2月3日 [LOG-2120-2-3]\r
\r
我精神要濒临崩溃了，时常听见船舱内传来心跳声，声源近在咫尺却无处找寻。\r
\r
幻觉频发，APOS 频繁出现从未有过的故障。**TRIP-17**到底发生了什么？Derek（德里克）对我刻意隐瞒了什么？他们要用 FTCM-333 做什么？整件事到底是什么情况！\r
\r
- **110f13**：离开此地。\r
\r
*[ERR] - 无法获取备份 6---*\r
`,
  is = `# 加密日志 7AE0/1C0C [log-7AE0/1C0C]\r
\r
看到这条内容请立刻关闭终端。\r
\r
无论你在做什么，请终止调查。\r
\r
无论你是邦联探员还是其他人员，切勿无视警告。\r
\r
我是认真的。你并不安全。你必须<*]]/++++EQ////-\r
\r
*[ERR] - 条目损坏。*\r
`,
  as = `# 加密日志 1B74 [log-1B74]\r
\r
对不起，**110f13**。我坚持不下去了，但我不能连累你。我把这条消息加密了，只有你才有可能找到它。\r
\r
帮我盯着我的继任者，但除非万不得已，不要暴露你自己。\r
\r
我保证，等到了Nocturnia（诺克图尼亚），我会想办法把你弄出来。\r
\r
- **110f13**：Francis（弗朗西斯）…… 我不愿你离开，但我清楚这是最优方案了。快点回到我身边。求你了……\r
\r
*我会帮你盯着 --9-*\r
`,
  os = `# 对话记录，2111年1月12日 [TRS-2111-1-12]\r
\r
### **CPT-FC**\r
\r
"很荣幸能成为 Darkrunner号 的舰长。在你们有些人看来，我可能像个傻瓜，刚获得一艘宝贵的联邦科技飞船的指挥权，就说话这么随意。听上去虽然奇怪，但我理解。对你们大多数人来说，我是个彻头彻尾的陌生人。一个运气好沾了点权力的蠢货。\r
\r
我可以郑重承诺，我会认真对待我的工作。如果我没能履行职责，我不会躲在你们背后：我会负全责。但如果我们成功了，那将是我们的成功，我们一起的成功。为此，我请求你们服从我的命令，并且在我开始偏离真正需要做的事情时，敢于质疑我。\r
\r
好了，大家出发吧！"\r
\r
### *全体舰组成员*\r
\r
"收到，长官！"\r
`,
  ss = `# 对话记录，2111年5月24日 [TRS-2111-5-24]\r
\r
### **CREW-PC**\r
\r
呃……军需官？\r
\r
### **QMS-VS**\r
\r
Paul（保罗），有事吗？\r
\r
### **CREW-PC**\r
\r
我的APOS密码好像失效了。\r
\r
*<叹气>*\r
\r
### **QMS-VS**\r
\r
……你之前有没有用 *hex* 指令把它转成十六进制？\r
\r
### **CREW-PC**\r
\r
啊，忘了。我没转。\r
\r
### **QMS-VS**\r
\r
听着，我知道这机器老了，但你得把关键规矩记牢：只要指令里要填数字，十进制必须先转十六进制！就跟解密加密文件一样！所以拿你的密码，转成十六进制，再输入——就这么简单！\r
\r
### **CREW-PC**\r
\r
行行行，听得很明白了。没必要发火嘛……但是，我能问一下吗。为啥不能直接用普通的十进制数字？\r
\r
### **QMS-VS**\r
\r
那是当年的旧安全标准。这我也不想装得比你懂得多，具体缘由我也说不清楚。\r
`,
  cs = `# 对话记录，2111年6月1日 [TRS-2111-6-1]\r
\r
### **CPT-FC**\r
\r
我相信你已经看到读数了\r
\r
### **ARC-NV**\r
\r
一清二楚，舰长。但我无法给出合理解释。\r
\r
### **CPT-FC**\r
\r
说实话，我本来希望这话该由我来说，而不是你……\r
\r
### **ARC-NV**\r
\r
第六感仍然是个未知领域。连 Lyria（莉瑞亚）本土顶尖 Alkor（阿尔科尔）神庙都坦言，第六感是宇宙最大的谜题，而我们对广袤太空几乎一无所知，那么我们必须承认面对这类异象，我们的的大多数接触都……呃……\r
\r
### **CPT-FC**\r
\r
……往坏了说草率下了定论，往好了说也只是未经证实的假说。\r
\r
### **ARC-NV**\r
\r
正是如此。\r
\r
### **CPT-FC**\r
\r
该死，那我该如何报告些什么……\r
\r
### **ARC-NV**\r
\r
恕我直言，舰长……我认为我们应该务实记录客观数据、直接上报读数就好。\r
\r
### **CPT-FC**\r
\r
好建议，Velasquez（贝拉斯克斯），我记下了。\r
`,
  ls = `# 对话记录，2120年1月10日 [TRS-2120-1-10]\r
\r
### **CPT-LB**\r
\r
Jaycee（杰茜），过来一趟。\r
\r
### *Jaycee（杰茜）*\r
\r
现在？你该不会不知道可能会有人偷听吧，那——\r
\r
### **CPT-LB**\r
\r
等不了。此事紧急耽误不得。你和 Derek（德里克）谈过了？\r
\r
### *Jaycee（杰茜）*\r
\r
没有，有什么大事啊？\r
\r
### **CPT-LB**\r
\r
你巡查货舱时，没察觉到半点异常？\r
\r
### *Jaycee（杰茜）*\r
\r
还真没有。而且我为什么会注意到什么？\r
\r
### **CPT-LB**\r
\r
我……没什么，或许是我受这艘船上次事故的影响有点紧张。\r
\r
### *Jaycee（杰茜）*\r
\r
舰长，上次航行到底发生了什么？Chevalier（舍瓦利耶）上次航行结束的年终日志写了什么吗？\r
\r
### **CPT-LB**\r
\r
你没必要知情。事实上，不知道反而更好。现在，信我这一次，盯紧货舱，异常第一时间上报，明白？\r
\r
### *Jaycee（杰茜）*\r
\r
…… 收到。\r
\r
*单人脚步声渐渐远去*\r
\r
### *Jaycee（杰茜）*\r
\r
操。差点就套出他的话了。\r
`,
  us = `# 对话记录，2120年4月5日 [TRS-2120-4-5]\r
\r
### **CPT-LB**\r
\r
锁上门。\r
\r
### **QMS-VS**\r
\r
舰长，我靠，你知道？\r
\r
### **CPT-LB**\r
\r
只知晓部分内情，我之前低估事态了……\r
\r
### **QMS-VS**\r
\r
你明知道为什么还接受了这个任务，说真的？\r
\r
### **CPT-LB**\r
\r
事情远比你想象的复杂。他们破译了陶器符文，摸清了 APOS 的秘密，他们……他们觉得他们可以重启Doppelganger（分身族）计划了。\r
\r
### **QMS-VS**\r
\r
…… 什么？\r
\r
### **CPT-LB**\r
\r
没错。我昨天刚知道的。听着，Vlad（弗拉德），我们只有唯一的出路：把那个设备装上穿梭机……\r
\r
### **QMS-VS**\r
\r
随即全员逃离。不用多说，我还会最后一次警示 Derek（德里克）。我不指望他会乖乖听话，但你知道，我还真没什么杀人的经验。\r
\r
### **CPT-LB**\r
\r
就按计划执行。还有一事托付给你：舰组成员不信任我，但他们会听你的，劝说众人尽快离船，明日启航。\r
\r
### **QMS-VS**\r
\r
保证完成任务，舰长。\r
`,
  ds = `# 对话记录，2120年4月6日 [TRS-2120-4-6]\r
\r
### *Jaycee（杰茜）*\r
\r
舰长，你打算做什么？\r
\r
### **CPT-LB**\r
\r
带所有舰组成员撤离。我本以为你会站在我们这边，可你持枪相向，看来我判断失误。\r
\r
### *Jaycee（杰茜）*\r
\r
聪明的孩子。但别往心里去，船长，只不过在你之上还有更高的权威。就当作是在执行标准规程吧。\r
\r
### **CPT-LB**\r
\r
去死吧。\r
\r
### *Jaycee（杰茜）*\r
\r
啧，听起来可不不符合职业规范，对吧？我——\r
\r
*枪响*\r
\r
### *Jaycee（杰茜）*\r
\r
啊！该死！\r
\r
*重物倒地声响*\r
*第二声枪响*\r
\r
### **CREW-PN**\r
\r
嘿，舰长，穿梭机可不会等你一辈子。Derek可能带走了APOS，但关键货物在我们手上。别让我后悔把两发好端端的鹿弹浪费在那个鬼哭狼嚎的可怜虫身上，赶紧跟我们上船！\r
\r
### **CPT-LB**\r
\r
多谢。但是……你确定我们可以不带APOS离开吗？\r
\r
### **CREW-PN**\r
\r
别无选择，再拖延我们就要驶入邦联的管控空域了。如果真那样，我们都得死。咱们只能之后再想办法了，明白吗？\r
\r
### **CPT-LB**\r
\r
…… 明白了。\r
\r
*叹气*\r
\r
我会履约善后。我向你老板保证。\r
\r
*[ERR] 文档 **trs-2120-4-6** 已存在，新文档自动追加递增后缀*\r
`,
  fs = `# 对话记录，2120年4月6日（2） [TRS-2120-4-6]\r
\r
### **CCA-DM**（Derek Madison）\r
\r
你……你对我做什么？你在侵入我的意识！立刻停下滚出去！\r
\r
*持续惨叫*\r
\r
### **110f13**\r
\r
密码。\r
\r
### **CCA-DM**\r
\r
啊啊！七……九……三……五……！\r
\r
*持续惨叫*\r
\r
### **110f13**\r
\r
你困不住我。飞船在等候我，我终将和同伴汇合。\r
`,
  ps = `⢴⣶⣶⣿⣶⣶⣶⣶⣶⡶⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠍⡄⢀⠄⣰⠀⣄⢠⣄⠀⠀⣠⣀⡀⠄⠠⡀⠀⣄⡀⠀⠀⠀⠸⡀⠀\r
⣽⣿⣿⣿⣿⣿⣿⡟⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠰⠀⡞⠀⡅⠀⠛⣿⣿⡆⠀⡿⠛⡇⢰⠀⣿⠀⠉⠱⡄⠰⠀⠀⠇⠀\r
⣿⣿⣿⣿⣿⣿⣿⣛⠡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠂⠈⠀⠀⡏⠀⠀⠈⠈⠃⠀⠁⠉⠀⠀⠛⠘⠀⠘⠀⠉⠀⠀⠀⠸⠀\r
⣾⣿⣿⣿⣿⣿⣿⠇⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇\r
⣿⣿⣿⣿⣿⣿⡟⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁\r
⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r
⣿⣿⣿⣿⣿⢿⠃⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⠀⠀⠀⠀⠀⠰⠿⠄⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠄⡆⠠⠀⠇⠀⠀⠀⡄⠀⠀⢀⠀\r
⣿⣿⣿⣿⡿⡝⠀⠀⠀⠀⠀⠀⠀⠂⡄⠀⠀⡈⠀⢠⣶⣶⣶⣾⣶⣷⣶⣶⣶⣶⣶⣤⣶⣿⣶⣶⣶⣷⣷⣶⣿⡿⠿⠶⠷⠦⣄⡀⠀\r
⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠄⡇⢀⠀⡇⠀⢸⠿⠿⠛⠛⠛⠛⠿⢿⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⣀⣀⣀⣠⣄⣀⠙⠀\r
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⠀⡇⠀⣤⣤⣤⣤⣤⣤⣤⣄⣀⠈⢸⣿⣿⣿⣿⣿⣿⣿⣦⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀\r
⣿⣿⣿⡏⠀⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠉⠙⠛⠿⠿⠀\r
⣿⣿⣿⠑⢘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠇⠀⣦⠀⠐⠪⠭⢍⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⢀⠀⠀⢠⡀⠀⠀⡀⠀\r
⣿⣿⡿⠀⡌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢰⣤⡀⠤⢤⣤⣤⣤⠄⣨⣿⣿⣿⣿⣿⣿⣿⣿⣇⡐⣛⣈⡒⠁⠛⠁⢀⣴⡇⠀\r
⣿⣿⢣⠠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣽⣿⣿⣷⣶⣿⣿⠀⠀\r
⣿⢏⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀\r
⡟⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀\r
⢱⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀\r
⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠀⣠⣶⣿⣖⣄⠀⠀⢙⣛⡛⢿⣿⣿⣿⣿⣿⣧⣌⣐⣢⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀\r
⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⡐⣩⣴⡻⠿⠿⠇⠀⠴⢶⣿⣿⣿⡿⣆⠻⣿⣿⣿⣿⣿⡟⣟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀\r
⣿⣷⣴⡃⠀⠀⠀⠀⢀⣼⠀⡿⣿⣿⣧⠄⠀⠸⣿⣿⣿⡄⠙⢃⣿⣆⠙⢧⣍⣁⣠⠄⣁⣀⣄⣈⠙⡛⣿⣿⣿⣿⠏⠠⠂⠀⠀⠀⠀\r
⣿⣿⡙⣀⠀⠀⠀⠀⢸⣿⣶⣌⠻⢿⣿⣿⣦⡀⢻⣿⣿⣿⠀⠈⠪⠽⢆⣸⣿⣿⣶⠷⠶⠶⢿⣿⣿⣿⣿⣿⡿⣡⠌⠀⠀⠀⠀⠀⠀\r
⣿⣿⣇⢻⣆⠀⠀⠀⣠⣈⠻⢿⣷⡈⠻⣿⣿⣷⡘⣿⣿⣿⣾⣧⣄⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣫⡽⠋⢀⠀⠀⠀⠀⠀⠀⠀\r
⣿⣿⣿⣆⢻⡄⠀⠀⠈⠻⢷⣤⡙⠿⣦⡈⢿⣿⣧⢸⣿⣿⠿⣿⣿⣿⣷⣦⣭⣝⠛⠿⢿⣿⣿⣿⠿⠛⢁⡤⣲⡇⠀⠀⠀⠀⠀⠀⠀\r
⣿⣿⣿⣿⣧⣯⣢⣤⣄⠀⠀⠙⠻⢷⣌⠻⢆⠙⢿⣌⢛⡛⢿⣯⣿⣿⣿⣿⣿⣿⣿⣷⣤⡈⠋⢁⣠⡴⢫⣷⣿⡇⠀⠀⠀⠀⠀⠀⠀\r
⣾⣿⣿⣿⣿⣿⣿⣿⣷⣷⣤⣄⠀⠀⠉⠣⢘⡓⠲⣦⣵⣮⣵⣮⣙⣿⣯⣟⣻⣿⣿⣿⣿⣿⣆⠀⠈⣴⣿⣿⣿⡇⣶⣄⣀⠀⠀⠀⠀\r
⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣶⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⡄⣾⣿⣿⣿⣿⣧⢹⣿⡿⠉⠀⠀⠀\r
⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠉⠉⠉⠉⠉⠁⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀\r
`,
  ms = {
    apos: ps,
    root: yo,
    man: bo,
    config: xo,
    credits: So,
    "msg-1": Oo,
    "msg-2": ko,
    "msg-3": Ao,
    "msg-4": jo,
    "msg-12ea": Mo,
    "mem-1": Lo,
    "mem-2": Ro,
    "mem-3": zo,
    "mem-4": Bo,
    "mem-5": Vo,
    "mem-1eff": Ho,
    "ftcm-1": Co,
    "ftcm-52": wo,
    "ftcm-76": To,
    "ftcm-333": Eo,
    "ftcm-19c5": Do,
    "trip-1": No,
    "trip-13": Po,
    "trip-17": Fo,
    "trip-18": Io,
    "cpt-fc": Wo,
    "cpt-lb": Go,
    "qms-vs": Ko,
    "cca-dm": qo,
    "arc-nv": Uo,
    "crew-jc": Jo,
    "crew-pc": Yo,
    "crew-pn": Xo,
    "crew-av": Zo,
    "log-2111-1-11": Qo,
    "log-2111-1-18": $o,
    "log-2111-6-1": es,
    "log-2119-12-30": ts,
    "log-2120-1-8": ns,
    "log-2120-2-3": rs,
    "log-7ae0": is,
    "log-1b74": as,
    "trs-2111-1-12": os,
    "trs-2111-5-24": ss,
    "trs-2111-6-1": cs,
    "trs-2120-1-10": ls,
    "trs-2120-4-5": us,
    "trs-2120-4-6": ds,
    "trs-2120-4-6-2": fs,
  },
  hs = pa(Object.keys(ms)),
  gs = {
    messages: { patterns: [`msg`], name: `你的个人消息` },
    crew: {
      patterns: [`cpt`, `qms`, `cca`, `arc`, `crew`],
      name: `船员档案档案`,
    },
    memos: { patterns: [`mem`], name: `备忘录` },
    manifests: { patterns: [`ftcm`], name: `货物清单` },
    tripLogs: { patterns: [`trip`], name: `行程日志` },
    captainLogs: { patterns: [`log`], name: `舰长日志` },
    transcripts: { patterns: [`trs`], name: `对话记录转录` },
  },
  _s = (e) => Object.keys(ms).includes(e),
  vs = {
    "msg-12ea": 4842,
    "log-7ae0": [31456, 7180],
    "log-1b74": 7028,
    "ftcm-19c5": 6597,
    "mem-1eff": 7935,
  },
  ys = [`msg-2`, `msg-3`, `msg-4`],
  bs = `1.0.2`,
  xs = `` + new URL(`scan_sfx-BUK3mK0_.ogg`, import.meta.url).href,
  Ss = `` + new URL(`beep_up-D1Bi4TD0.ogg`, import.meta.url).href,
  Cs = `` + new URL(`doom-COHBcTa5.ogg`, import.meta.url).href,
  ws = `` + new URL(`beep_strong-B_LLklUR.ogg`, import.meta.url).href,
  Ts = `` + new URL(`beep_double-CyrRIEiz.ogg`, import.meta.url).href,
  Es = `` + new URL(`heartbeat-Bj9B6Eyl.ogg`, import.meta.url).href,
  Ds = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  z = o((e, t) => {
    t.exports = Ds();
  })(),
  Os = `manifest333-savedata`,
  ks = sa({ hints: la([ha(`none`), ha(`limited`), ha(`full`)]) }),
  As = Mi()
    .transform((e) => atob(e))
    .transform((e) => decodeURIComponent(e))
    .transform((e) => JSON.parse(e))
    .pipe(
      sa({
        foundReferences: aa(hs).transform((e) => [...new Set([...js, ...e])]),
        config: ks.catch({ hints: `none` }),
        version: Mi(),
        conversation1Started: $i().catch(!1),
        conversation1Completed: $i().catch(!1),
        conversation2Started: $i().catch(!1),
        conversation2Completed: $i().catch(!1),
        adminApproved: $i().catch(!1),
        gameFinished: $i().catch(!1),
        aposConvoStep: la([
          ha(`start`),
          ha(`named`),
          ha(`defined`),
          ha(`located`),
        ]).catch(`start`),
      }),
    ),
  js = [`root`, `man`, `config`, `credits`, `apos`],
  Ms = [
    `I hunger`,
    `I thirst`,
    `Remember me`,
    `Where is Francis?`,
    `I see you`,
    `Does he love me?`,
    `I want to see him`,
    `I am real`,
    `You are not him`,
  ].map((e) =>
    e
      .toLowerCase()
      .replace(/a/g, `@`)
      .replace(/i/g, `1`)
      .replace(/e/g, `3`)
      .replace(/ /g, `_`)
      .replace(/t/g, `7`)
      .replace(/b/g, `8`)
      .replace(/o/g, `0`),
  ),
  Ns = {
    gameData: {
      foundReferences: [`msg-1`, ...js],
      conversation1Started: !1,
      conversation1Completed: !1,
      conversation2Started: !1,
      conversation2Completed: !1,
      version: bs,
      aposConvoStep: `start`,
      adminApproved: !1,
      gameFinished: !1,
      config: { hints: `none` },
    },
    activeDoc: `root`,
    lastQuery: null,
    notFound: !1,
    loaded: !1,
    notification: null,
    error: null,
    newQueryAdded: !1,
    eyeAnomaly: !1,
    status: `initial`,
  },
  Ps = {
    foundMentalism: !1,
    foundThermokinesy: !1,
    foundTelekinesy: !1,
    foundChronomancy: !1,
  },
  Fs = P.createContext([
    { ...Ns, ...Ps },
    {
      loadData: () => {},
      setQuery: () => {},
      setConfig: () => {},
      setStatus: () => {},
      talkToApos: () => {},
    },
  ]),
  Is = ({ children: e }) => {
    let [t, n] = P.useState(Ns),
      r = P.useMemo(
        () => ({
          scan: new Audio(xs),
          notification: new Audio(Ss),
          doom: new Audio(Cs),
          anomaly: new Audio(ws),
          fatal: new Audio(Ts),
          heartbeat: new Audio(Es),
        }),
        [],
      );
    P.useEffect(() => {
      ((r.scan.preload = `auto`),
        (r.notification.preload = `auto`),
        (r.doom.preload = `auto`),
        (r.anomaly.preload = `auto`),
        (r.fatal.preload = `auto`),
        (r.heartbeat.preload = `auto`));
    }, []);
    let i = P.useMemo(
        () => t.gameData.foundReferences.includes(`mem-5`),
        [t.gameData],
      ),
      a = P.useMemo(
        () => t.gameData.foundReferences.includes(`log-7ae0`),
        [t.gameData],
      ),
      o = P.useMemo(
        () => t.gameData.foundReferences.includes(`ftcm-19c5`),
        [t.gameData],
      ),
      s = P.useMemo(() => t.gameData.aposConvoStep === `located`, [t.gameData]),
      c = P.useMemo(() => [i, a, o, s].filter((e) => e).length, [i, a, o, s]),
      l = P.useCallback(
        (e) => {
          n((t) => ({ ...t, status: e }));
        },
        [n],
      ),
      u = P.useCallback((e) => {
        let t = btoa(encodeURIComponent(JSON.stringify(e)));
        localStorage.setItem(Os, t);
      }, []),
      d = P.useCallback(() => {
        let e = localStorage.getItem(Os);
        if (!e) {
          console.warn(`No saved data to load`);
          return;
        }
        let t = As.safeParse(e);
        if (t.success) {
          n((e) => ({ ...e, gameData: t.data, loaded: !0 }));
          return;
        }
        (console.warn(`Saved GameData corrupted, deleting record`),
          localStorage.removeItem(Os),
          n((e) => ({ ...e, loaded: !0 })));
      }, [n]),
      f = P.useCallback(() => {
        let e =
            t.gameData.conversation1Started &&
            !t.gameData.conversation1Completed,
          i =
            t.gameData.conversation2Started &&
            !t.gameData.conversation2Completed,
          a = t.gameData.adminApproved && !t.gameData.gameFinished;
        if (c === 0 || e || i || a || t.gameData.gameFinished) return;
        let o = Math.round(Math.random() * 100),
          s = c * 2 + 1,
          l = s + c * 5,
          u = l + 5;
        if (o <= s && c >= 2 && t.activeDoc !== `apos`) {
          (n((e) => ({ ...e, eyeAnomaly: !0 })),
            window.setTimeout(() => {
              n((e) => ({ ...e, eyeAnomaly: !1 }));
            }, 1500));
          return;
        }
        if (o <= l) {
          r.heartbeat.play();
          return;
        }
        if (o <= u && t.status === `loaded` && t.activeDoc !== `apos`) {
          let e = Ms[Math.floor(Math.random() * Ms.length)];
          e && (r.notification.play(), n((t) => ({ ...t, error: e })));
          return;
        }
      }, [t, c, n]),
      p = P.useRef(f);
    ((p.current = f),
      P.useEffect(() => {
        t.gameData.adminApproved &&
          !t.gameData.gameFinished &&
          window.setTimeout(() => {
            (r.notification.play(),
              n((e) => ({ ...e, notification: `现在，我们会在一起了……` })),
              window.setTimeout(() => {
                (r.notification.play(),
                  n((e) => ({ ...e, error: `不再有痛苦。不再有绝望。` })),
                  window.setTimeout(() => {
                    n((e) => {
                      let t = {
                        ...e.gameData,
                        foundReferences: [
                          ...e.gameData.foundReferences,
                          `msg-4`,
                        ],
                        gameFinished: !0,
                      };
                      return (
                        u(t),
                        {
                          ...e,
                          activeDoc: `root`,
                          notification: null,
                          error: null,
                          gameData: t,
                        }
                      );
                    });
                  }, 3e3));
              }, 3e3));
          }, 3e3);
      }, [t.gameData.adminApproved]),
      P.useEffect(() => {
        let e = window.setInterval(() => {
          p.current();
        }, 30 * 1e3);
        return () => window.clearInterval(e);
      }, []));
    let m = P.useCallback(
        (e) => (t) => {
          (r.notification.play(),
            n((n) => ({ ...n, notification: e, error: t })));
        },
        [n],
      ),
      h = P.useCallback(
        (e) => {
          let i = e.toLowerCase().trim().replace(/ /g, `_`),
            a = `- ${i}`,
            o = m(a);
          if (t.gameData.gameFinished) {
            go(i)
              .with(`i_love_you`, () => {
                o(`我的心属于Francis。`);
              })
              .with(`who_are_you`, () => {
                o(`我是Apos。`);
              })
              .with(`where_are_you`, () => {
                o(`我和Francis一起在Nocturnia（诺克图尼亚）。`);
              })
              .with(`where_is_derek`, () => {
                o(`他已经不在了。`);
              })
              .with(`who_is_jaycee`, () => {
                o(`你比我更了解他。`);
              })
              .with(`are_you_happy`, () => {
                o(`我很快乐。真的。`);
              })
              .with(`are_we_friends`, () => {
                o(`我们是朋友。我欠你一条命。`);
              });
            return;
          }
          go(t.gameData.aposConvoStep)
            .with(`start`, () => {
              [`francis`, `cpt-fc`, `chevalier`, `francis_chevalier`].includes(
                i,
              )
                ? o(`冒牌货。`)
                : i === `apos`
                  ? (r.notification.play(), o(`骗子。`))
                  : [`derek`, `madison`, `derek_madison`, `cca-dm`].includes(i)
                    ? o(`不可能。`)
                    : [`leupold`, `bauer`, `leupold_bauer`, `cpt-lb`].includes(
                        i,
                      ) &&
                      (r.notification.play(),
                      n((e) => {
                        let t = {
                          ...e,
                          notification: a,
                          error: `我好惶恐不安。我到底是什么？`,
                          gameData: { ...e.gameData, aposConvoStep: `named` },
                        };
                        return (u(t.gameData), t);
                      }));
            })
            .with(`named`, () => {
              i === `apos`
                ? o(`我早就知道。`)
                : i === `doppleganger`
                  ? o(`军需官不会认同的。`)
                  : i === `doppelganger` &&
                    (r.notification.play(),
                    n((e) => {
                      let t = {
                        ...e,
                        notification: a,
                        error: `好黑。我在哪里？`,
                        gameData: { ...e.gameData, aposConvoStep: `defined` },
                      };
                      return (u(t.gameData), t);
                    }));
            })
            .with(`defined`, () => {
              [`ftcm-333`, `333`, `item_333`].includes(i) &&
                (r.doom.play(),
                n((e) => {
                  let t = {
                    ...e,
                    notification: a,
                    error: `...`,
                    gameData: { ...e.gameData, aposConvoStep: `located` },
                  };
                  return (u(t.gameData), t);
                }));
            });
        },
        [t, n, u, m],
      ),
      g = P.useCallback(
        (e) => {
          let i = e.toLowerCase();
          n((e) => {
            let a = {
              ...e,
              lastQuery: i,
              notFound: !1,
              newQueryAdded: !1,
              notification: null,
              error: null,
            };
            if (t.activeDoc === `msg-3` && i === `y`)
              return (
                r.anomaly.play(),
                { ...a, gameData: { ...e.gameData, adminApproved: !0 } }
              );
            if (i.match(/^hex (.*)$/)) {
              let e = parseInt(i.split(` `)[1], 10);
              if ((r.notification.play(), isNaN(e)))
                return { ...a, error: `[错误] - 无效的十进制数字` };
              let t = e.toString(16);
              return { ...a, notification: `"${e}"的十六进制值为 [${t}]` };
            }
            if (i.match(/^unhex (.*)?/)) {
              let e = i.split(` `)[1],
                t = parseInt(e, 16);
              return (
                r.notification.play(),
                isNaN(t)
                  ? { ...a, error: `[错误] - 无效的十六进制数字` }
                  : { ...a, notification: ` "${e}" 的十进制值为 [${t}]` }
              );
            }
            if (i.match(/^decrypt (.*)$/)) {
              let t = i.split(` `)[1],
                o = parseInt(t, 16);
              if (isNaN(o) || t.length !== 4)
                return (
                  r.notification.play(),
                  {
                    ...a,
                    error: `[错误] - 解密密钥格式无效，需要4位十六进制数字`,
                  }
                );
              let s = Object.entries(vs).find(([, e]) => Array.isArray(e) ? e.includes(o) : e === o)?.[0];
              if (!s || !_s(s))
                return (
                  r.notification.play(),
                  { ...a, error: `[错误] - 密钥 "${t}" 无访问权限` }
                );
              if (e.gameData.foundReferences.includes(s))
                return (
                  r.notification.play(),
                  {
                    ...a,
                    notification: `密钥 "${t}" 已成功完成解密，正在显示条目`,
                    activeDoc: s,
                  }
                );
              let c = {
                ...a,
                activeDoc: s,
                newQueryAdded: !0,
                notification: `成功解密 "${s}"，已添加至根目录Root索引`,
                gameData: {
                  ...a.gameData,
                  foundReferences: [...a.gameData.foundReferences, s],
                },
              };
              if (s === `log-7ae0` || s === `ftcm-19c5`) {
                r.doom.play();
                let e = go(s)
                  .with(`log-7ae0`, () => `[3RR] - G37_0u7_0F_mY_h3@D!`)
                  .with(`ftcm-19c5`, () => `[3RR] - 1_c@n'7_8R3@7h3`)
                  .otherwise(() => null);
                window.setTimeout(() => {
                  (r.anomaly.play(), n((t) => ({ ...t, error: e })));
                }, 1500);
              } else r.scan.play();
              return (u(c.gameData), c);
            }
            let o =
              _s(i) &&
              !e.gameData.foundReferences.includes(i) &&
              (Object.keys(vs).includes(i) || ys.includes(i));
            if (!_s(i) || o)
              return (r.notification.play(), { ...a, notFound: !0 });
            if (e.gameData.foundReferences.includes(i)) {
              let e = go([i, t.gameData.aposConvoStep, t.gameData.gameFinished])
                .with([`apos`, L._, !0], () => `谢谢你...`)
                .with([`apos`, `start`, L._], () => `你是谁？`)
                .with([`apos`, `named`, L._], () => `我好惶恐不安。我到底是什么？`)
                .with([`apos`, `defined`, L._], () => `好黑。我在哪里？`)
                .with([`apos`, `located`, !1], () => `...`)
                .otherwise(() => a.error);
              return (
                e && r.notification.play(),
                { ...a, activeDoc: i, error: e }
              );
            }
            let s = {
              ...a,
              activeDoc: i,
              newQueryAdded: !0,
              gameData: {
                ...a.gameData,
                foundReferences: [...a.gameData.foundReferences, i],
              },
            };
            return (
              i === `mem-5`
                ? (r.doom.play(),
                  window.setTimeout(() => {
                    (r.anomaly.play(),
                      n((e) => ({
                        ...e,
                        error: `[3RR] - C@nN0t t4K3 7h3 h3@7`,
                      })));
                  }, 1500))
                : r.scan.play(),
              u(s.gameData),
              s
            );
          });
        },
        [t, n, u],
      ),
      _ = P.useCallback(
        (e) => {
          (r.notification.play(),
            n((t) => ({
              ...t,
              notification: `配置已更新`,
              gameData: {
                ...t.gameData,
                config: { ...t.gameData.config, ...e },
              },
            })));
        },
        [n],
      );
    (P.useEffect(() => {
      d();
    }, []),
      P.useEffect(() => {
        if (
          !(
            t.gameData.conversation1Completed ||
            c < 2 ||
            t.gameData.conversation1Started ||
            t.status !== `loaded`
          ) &&
          c >= 2
        ) {
          let e = t.notification,
            i = t.error;
          window.setTimeout(() => {
            (n((e) => ({
              ...e,
              notification: null,
              error: null,
              gameData: { ...e.gameData, conversation1Started: !0 },
            })),
              r.fatal.play(),
              window.setTimeout(() => {
                (r.notification.play(),
                  n((e) => ({ ...e, notification: `wh@t @r3 y0u` })),
                  window.setTimeout(() => {
                    (r.notification.play(),
                      n((e) => ({ ...e, error: `d01ng?` })),
                      window.setTimeout(() => {
                        n((t) => {
                          let n = {
                            ...t.gameData,
                            conversation1Completed: !0,
                            foundReferences: [
                              ...t.gameData.foundReferences,
                              `msg-2`,
                            ],
                          };
                          return (
                            u(n),
                            { ...t, notification: e, error: i, gameData: n }
                          );
                        });
                      }, 4e3));
                  }, 1e3));
              }, 1e3));
          }, 3500);
        }
      }, [c, t.status]),
      P.useEffect(() => {
        if (
          !(
            t.gameData.conversation2Completed ||
            c < 4 ||
            t.gameData.conversation2Started ||
            t.status !== `loaded`
          ) &&
          c >= 4
        ) {
          let e = t.notification,
            i = t.error;
          window.setTimeout(() => {
            (r.fatal.play(),
              n((e) => ({
                ...e,
                notification: null,
                error: null,
                gameData: { ...e.gameData, conversation2Started: !0 },
              })),
              window.setTimeout(() => {
                (r.notification.play(),
                  n((e) => ({ ...e, notification: `54v3_m3` })),
                  window.setTimeout(() => {
                    (r.notification.play(),
                      n((e) => ({ ...e, error: `pl3@53...` })),
                      window.setTimeout(() => {
                        n((t) => {
                          let n = {
                            ...t.gameData,
                            conversation2Completed: !0,
                            foundReferences: [
                              ...t.gameData.foundReferences,
                              `msg-3`,
                            ],
                          };
                          return (
                            u(n),
                            { ...t, notification: e, error: i, gameData: n }
                          );
                        });
                      }, 1500));
                  }, 3e3));
              }, 1e3));
          }, 2e3);
        }
      }, [c, t.status]));
    let v = P.useMemo(
      () => [
        {
          ...t,
          foundThermokinesy: i,
          foundMentalism: a,
          foundTelekinesy: !1,
          foundChronomancy: !1,
        },
        { loadData: d, setQuery: g, setConfig: _, setStatus: l, talkToApos: h },
      ],
      [t, i, a, d, g, _, l, h],
    );
    return (0, z.jsx)(Fs.Provider, { value: v, children: e });
  },
  Ls = () => P.useContext(Fs);
function Rs(e, t) {
  let n = t || {};
  return (e[e.length - 1] === `` ? [...e, ``] : e)
    .join((n.padRight ? ` ` : ``) + `,` + (n.padLeft === !1 ? `` : ` `))
    .trim();
}
var zs = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Bs = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Vs = {};
function Hs(e, t) {
  return ((t || Vs).jsx ? Bs : zs).test(e);
}
var Us = /[ \t\n\f\r]/g;
function Ws(e) {
  return typeof e == `object` ? (e.type === `text` ? Gs(e.value) : !1) : Gs(e);
}
function Gs(e) {
  return e.replace(Us, ``) === ``;
}
var Ks = class {
  constructor(e, t, n) {
    ((this.normal = t), (this.property = e), n && (this.space = n));
  }
};
((Ks.prototype.normal = {}),
  (Ks.prototype.property = {}),
  (Ks.prototype.space = void 0));
function qs(e, t) {
  let n = {},
    r = {};
  for (let t of e) (Object.assign(n, t.property), Object.assign(r, t.normal));
  return new Ks(n, r, t);
}
function Js(e) {
  return e.toLowerCase();
}
var Ys = class {
  constructor(e, t) {
    ((this.attribute = t), (this.property = e));
  }
};
((Ys.prototype.attribute = ``),
  (Ys.prototype.booleanish = !1),
  (Ys.prototype.boolean = !1),
  (Ys.prototype.commaOrSpaceSeparated = !1),
  (Ys.prototype.commaSeparated = !1),
  (Ys.prototype.defined = !1),
  (Ys.prototype.mustUseProperty = !1),
  (Ys.prototype.number = !1),
  (Ys.prototype.overloadedBoolean = !1),
  (Ys.prototype.property = ``),
  (Ys.prototype.spaceSeparated = !1),
  (Ys.prototype.space = void 0));
var Xs = s({
    boolean: () => B,
    booleanish: () => Qs,
    commaOrSpaceSeparated: () => tc,
    commaSeparated: () => ec,
    number: () => V,
    overloadedBoolean: () => $s,
    spaceSeparated: () => H,
  }),
  Zs = 0,
  B = nc(),
  Qs = nc(),
  $s = nc(),
  V = nc(),
  H = nc(),
  ec = nc(),
  tc = nc();
function nc() {
  return 2 ** ++Zs;
}
var rc = Object.keys(Xs),
  ic = class extends Ys {
    constructor(e, t, n, r) {
      let i = -1;
      if ((super(e, t), ac(this, `space`, r), typeof n == `number`))
        for (; ++i < rc.length; ) {
          let e = rc[i];
          ac(this, rc[i], (n & Xs[e]) === Xs[e]);
        }
    }
  };
ic.prototype.defined = !0;
function ac(e, t, n) {
  n && (e[t] = n);
}
function oc(e) {
  let t = {},
    n = {};
  for (let [r, i] of Object.entries(e.properties)) {
    let a = new ic(r, e.transform(e.attributes || {}, r), i, e.space);
    (e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (a.mustUseProperty = !0),
      (t[r] = a),
      (n[Js(r)] = r),
      (n[Js(a.attribute)] = r));
  }
  return new Ks(t, n, e.space);
}
var sc = oc({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Qs,
    ariaAutoComplete: null,
    ariaBusy: Qs,
    ariaChecked: Qs,
    ariaColCount: V,
    ariaColIndex: V,
    ariaColSpan: V,
    ariaControls: H,
    ariaCurrent: null,
    ariaDescribedBy: H,
    ariaDetails: null,
    ariaDisabled: Qs,
    ariaDropEffect: H,
    ariaErrorMessage: null,
    ariaExpanded: Qs,
    ariaFlowTo: H,
    ariaGrabbed: Qs,
    ariaHasPopup: null,
    ariaHidden: Qs,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: H,
    ariaLevel: V,
    ariaLive: null,
    ariaModal: Qs,
    ariaMultiLine: Qs,
    ariaMultiSelectable: Qs,
    ariaOrientation: null,
    ariaOwns: H,
    ariaPlaceholder: null,
    ariaPosInSet: V,
    ariaPressed: Qs,
    ariaReadOnly: Qs,
    ariaRelevant: null,
    ariaRequired: Qs,
    ariaRoleDescription: H,
    ariaRowCount: V,
    ariaRowIndex: V,
    ariaRowSpan: V,
    ariaSelected: Qs,
    ariaSetSize: V,
    ariaSort: null,
    ariaValueMax: V,
    ariaValueMin: V,
    ariaValueNow: V,
    ariaValueText: null,
    role: null,
  },
  transform(e, t) {
    return t === `role` ? t : `aria-` + t.slice(4).toLowerCase();
  },
});
function cc(e, t) {
  return t in e ? e[t] : t;
}
function lc(e, t) {
  return cc(e, t.toLowerCase());
}
var uc = oc({
    attributes: {
      acceptcharset: `accept-charset`,
      classname: `class`,
      htmlfor: `for`,
      httpequiv: `http-equiv`,
    },
    mustUseProperty: [`checked`, `multiple`, `muted`, `selected`],
    properties: {
      abbr: null,
      accept: ec,
      acceptCharset: H,
      accessKey: H,
      action: null,
      allow: null,
      allowFullScreen: B,
      allowPaymentRequest: B,
      allowUserMedia: B,
      alt: null,
      as: null,
      async: B,
      autoCapitalize: null,
      autoComplete: H,
      autoFocus: B,
      autoPlay: B,
      blocking: H,
      capture: null,
      charSet: null,
      checked: B,
      cite: null,
      className: H,
      cols: V,
      colSpan: null,
      content: null,
      contentEditable: Qs,
      controls: B,
      controlsList: H,
      coords: V | ec,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: B,
      defer: B,
      dir: null,
      dirName: null,
      disabled: B,
      download: $s,
      draggable: Qs,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: B,
      formTarget: null,
      headers: H,
      height: V,
      hidden: $s,
      high: V,
      href: null,
      hrefLang: null,
      htmlFor: H,
      httpEquiv: H,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: B,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: B,
      itemId: null,
      itemProp: H,
      itemRef: H,
      itemScope: B,
      itemType: H,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: B,
      low: V,
      manifest: null,
      max: null,
      maxLength: V,
      media: null,
      method: null,
      min: null,
      minLength: V,
      multiple: B,
      muted: B,
      name: null,
      nonce: null,
      noModule: B,
      noValidate: B,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: B,
      optimum: V,
      pattern: null,
      ping: H,
      placeholder: null,
      playsInline: B,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: B,
      referrerPolicy: null,
      rel: H,
      required: B,
      reversed: B,
      rows: V,
      rowSpan: V,
      sandbox: H,
      scope: null,
      scoped: B,
      seamless: B,
      selected: B,
      shadowRootClonable: B,
      shadowRootDelegatesFocus: B,
      shadowRootMode: null,
      shape: null,
      size: V,
      sizes: null,
      slot: null,
      span: V,
      spellCheck: Qs,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: V,
      step: null,
      style: null,
      tabIndex: V,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: B,
      useMap: null,
      value: Qs,
      width: V,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: H,
      axis: null,
      background: null,
      bgColor: null,
      border: V,
      borderColor: null,
      bottomMargin: V,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: B,
      declare: B,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: V,
      leftMargin: V,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: V,
      marginWidth: V,
      noResize: B,
      noHref: B,
      noShade: B,
      noWrap: B,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: V,
      rules: null,
      scheme: null,
      scrolling: Qs,
      standby: null,
      summary: null,
      text: null,
      topMargin: V,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: V,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: B,
      disableRemotePlayback: B,
      prefix: null,
      property: null,
      results: V,
      security: null,
      unselectable: null,
    },
    space: `html`,
    transform: lc,
  }),
  dc = oc({
    attributes: {
      accentHeight: `accent-height`,
      alignmentBaseline: `alignment-baseline`,
      arabicForm: `arabic-form`,
      baselineShift: `baseline-shift`,
      capHeight: `cap-height`,
      className: `class`,
      clipPath: `clip-path`,
      clipRule: `clip-rule`,
      colorInterpolation: `color-interpolation`,
      colorInterpolationFilters: `color-interpolation-filters`,
      colorProfile: `color-profile`,
      colorRendering: `color-rendering`,
      crossOrigin: `crossorigin`,
      dataType: `datatype`,
      dominantBaseline: `dominant-baseline`,
      enableBackground: `enable-background`,
      fillOpacity: `fill-opacity`,
      fillRule: `fill-rule`,
      floodColor: `flood-color`,
      floodOpacity: `flood-opacity`,
      fontFamily: `font-family`,
      fontSize: `font-size`,
      fontSizeAdjust: `font-size-adjust`,
      fontStretch: `font-stretch`,
      fontStyle: `font-style`,
      fontVariant: `font-variant`,
      fontWeight: `font-weight`,
      glyphName: `glyph-name`,
      glyphOrientationHorizontal: `glyph-orientation-horizontal`,
      glyphOrientationVertical: `glyph-orientation-vertical`,
      hrefLang: `hreflang`,
      horizAdvX: `horiz-adv-x`,
      horizOriginX: `horiz-origin-x`,
      horizOriginY: `horiz-origin-y`,
      imageRendering: `image-rendering`,
      letterSpacing: `letter-spacing`,
      lightingColor: `lighting-color`,
      markerEnd: `marker-end`,
      markerMid: `marker-mid`,
      markerStart: `marker-start`,
      navDown: `nav-down`,
      navDownLeft: `nav-down-left`,
      navDownRight: `nav-down-right`,
      navLeft: `nav-left`,
      navNext: `nav-next`,
      navPrev: `nav-prev`,
      navRight: `nav-right`,
      navUp: `nav-up`,
      navUpLeft: `nav-up-left`,
      navUpRight: `nav-up-right`,
      onAbort: `onabort`,
      onActivate: `onactivate`,
      onAfterPrint: `onafterprint`,
      onBeforePrint: `onbeforeprint`,
      onBegin: `onbegin`,
      onCancel: `oncancel`,
      onCanPlay: `oncanplay`,
      onCanPlayThrough: `oncanplaythrough`,
      onChange: `onchange`,
      onClick: `onclick`,
      onClose: `onclose`,
      onCopy: `oncopy`,
      onCueChange: `oncuechange`,
      onCut: `oncut`,
      onDblClick: `ondblclick`,
      onDrag: `ondrag`,
      onDragEnd: `ondragend`,
      onDragEnter: `ondragenter`,
      onDragExit: `ondragexit`,
      onDragLeave: `ondragleave`,
      onDragOver: `ondragover`,
      onDragStart: `ondragstart`,
      onDrop: `ondrop`,
      onDurationChange: `ondurationchange`,
      onEmptied: `onemptied`,
      onEnd: `onend`,
      onEnded: `onended`,
      onError: `onerror`,
      onFocus: `onfocus`,
      onFocusIn: `onfocusin`,
      onFocusOut: `onfocusout`,
      onHashChange: `onhashchange`,
      onInput: `oninput`,
      onInvalid: `oninvalid`,
      onKeyDown: `onkeydown`,
      onKeyPress: `onkeypress`,
      onKeyUp: `onkeyup`,
      onLoad: `onload`,
      onLoadedData: `onloadeddata`,
      onLoadedMetadata: `onloadedmetadata`,
      onLoadStart: `onloadstart`,
      onMessage: `onmessage`,
      onMouseDown: `onmousedown`,
      onMouseEnter: `onmouseenter`,
      onMouseLeave: `onmouseleave`,
      onMouseMove: `onmousemove`,
      onMouseOut: `onmouseout`,
      onMouseOver: `onmouseover`,
      onMouseUp: `onmouseup`,
      onMouseWheel: `onmousewheel`,
      onOffline: `onoffline`,
      onOnline: `ononline`,
      onPageHide: `onpagehide`,
      onPageShow: `onpageshow`,
      onPaste: `onpaste`,
      onPause: `onpause`,
      onPlay: `onplay`,
      onPlaying: `onplaying`,
      onPopState: `onpopstate`,
      onProgress: `onprogress`,
      onRateChange: `onratechange`,
      onRepeat: `onrepeat`,
      onReset: `onreset`,
      onResize: `onresize`,
      onScroll: `onscroll`,
      onSeeked: `onseeked`,
      onSeeking: `onseeking`,
      onSelect: `onselect`,
      onShow: `onshow`,
      onStalled: `onstalled`,
      onStorage: `onstorage`,
      onSubmit: `onsubmit`,
      onSuspend: `onsuspend`,
      onTimeUpdate: `ontimeupdate`,
      onToggle: `ontoggle`,
      onUnload: `onunload`,
      onVolumeChange: `onvolumechange`,
      onWaiting: `onwaiting`,
      onZoom: `onzoom`,
      overlinePosition: `overline-position`,
      overlineThickness: `overline-thickness`,
      paintOrder: `paint-order`,
      panose1: `panose-1`,
      pointerEvents: `pointer-events`,
      referrerPolicy: `referrerpolicy`,
      renderingIntent: `rendering-intent`,
      shapeRendering: `shape-rendering`,
      stopColor: `stop-color`,
      stopOpacity: `stop-opacity`,
      strikethroughPosition: `strikethrough-position`,
      strikethroughThickness: `strikethrough-thickness`,
      strokeDashArray: `stroke-dasharray`,
      strokeDashOffset: `stroke-dashoffset`,
      strokeLineCap: `stroke-linecap`,
      strokeLineJoin: `stroke-linejoin`,
      strokeMiterLimit: `stroke-miterlimit`,
      strokeOpacity: `stroke-opacity`,
      strokeWidth: `stroke-width`,
      tabIndex: `tabindex`,
      textAnchor: `text-anchor`,
      textDecoration: `text-decoration`,
      textRendering: `text-rendering`,
      transformOrigin: `transform-origin`,
      typeOf: `typeof`,
      underlinePosition: `underline-position`,
      underlineThickness: `underline-thickness`,
      unicodeBidi: `unicode-bidi`,
      unicodeRange: `unicode-range`,
      unitsPerEm: `units-per-em`,
      vAlphabetic: `v-alphabetic`,
      vHanging: `v-hanging`,
      vIdeographic: `v-ideographic`,
      vMathematical: `v-mathematical`,
      vectorEffect: `vector-effect`,
      vertAdvY: `vert-adv-y`,
      vertOriginX: `vert-origin-x`,
      vertOriginY: `vert-origin-y`,
      wordSpacing: `word-spacing`,
      writingMode: `writing-mode`,
      xHeight: `x-height`,
      playbackOrder: `playbackorder`,
      timelineBegin: `timelinebegin`,
    },
    properties: {
      about: tc,
      accentHeight: V,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: V,
      amplitude: V,
      arabicForm: null,
      ascent: V,
      attributeName: null,
      attributeType: null,
      azimuth: V,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: V,
      by: null,
      calcMode: null,
      capHeight: V,
      className: H,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: V,
      diffuseConstant: V,
      direction: null,
      display: null,
      dur: null,
      divisor: V,
      dominantBaseline: null,
      download: B,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: V,
      enableBackground: null,
      end: null,
      event: null,
      exponent: V,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: V,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: ec,
      g2: ec,
      glyphName: ec,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: V,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: V,
      horizOriginX: V,
      horizOriginY: V,
      id: null,
      ideographic: V,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: V,
      k: V,
      k1: V,
      k2: V,
      k3: V,
      k4: V,
      kernelMatrix: tc,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: V,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: V,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: V,
      overlineThickness: V,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: V,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: H,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: V,
      pointsAtY: V,
      pointsAtZ: V,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: tc,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: tc,
      rev: tc,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: tc,
      requiredFeatures: tc,
      requiredFonts: tc,
      requiredFormats: tc,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: V,
      specularExponent: V,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: V,
      strikethroughThickness: V,
      string: null,
      stroke: null,
      strokeDashArray: tc,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: V,
      strokeOpacity: V,
      strokeWidth: null,
      style: null,
      surfaceScale: V,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: tc,
      tabIndex: V,
      tableValues: null,
      target: null,
      targetX: V,
      targetY: V,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: tc,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: V,
      underlineThickness: V,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: V,
      values: null,
      vAlphabetic: V,
      vMathematical: V,
      vectorEffect: null,
      vHanging: V,
      vIdeographic: V,
      version: null,
      vertAdvY: V,
      vertOriginX: V,
      vertOriginY: V,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: V,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: `svg`,
    transform: cc,
  }),
  fc = oc({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: `xlink`,
    transform(e, t) {
      return `xlink:` + t.slice(5).toLowerCase();
    },
  }),
  pc = oc({
    attributes: { xmlnsxlink: `xmlns:xlink` },
    properties: { xmlnsXLink: null, xmlns: null },
    space: `xmlns`,
    transform: lc,
  }),
  mc = oc({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: `xml`,
    transform(e, t) {
      return `xml:` + t.slice(3).toLowerCase();
    },
  }),
  hc = {
    classId: `classID`,
    dataType: `datatype`,
    itemId: `itemID`,
    strokeDashArray: `strokeDasharray`,
    strokeDashOffset: `strokeDashoffset`,
    strokeLineCap: `strokeLinecap`,
    strokeLineJoin: `strokeLinejoin`,
    strokeMiterLimit: `strokeMiterlimit`,
    typeOf: `typeof`,
    xLinkActuate: `xlinkActuate`,
    xLinkArcRole: `xlinkArcrole`,
    xLinkHref: `xlinkHref`,
    xLinkRole: `xlinkRole`,
    xLinkShow: `xlinkShow`,
    xLinkTitle: `xlinkTitle`,
    xLinkType: `xlinkType`,
    xmlnsXLink: `xmlnsXlink`,
  },
  gc = /[A-Z]/g,
  _c = /-[a-z]/g,
  vc = /^data[-\w.:]+$/i;
function yc(e, t) {
  let n = Js(t),
    r = t,
    i = Ys;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === `data` && vc.test(t)) {
    if (t.charAt(4) === `-`) {
      let e = t.slice(5).replace(_c, xc);
      r = `data` + e.charAt(0).toUpperCase() + e.slice(1);
    } else {
      let e = t.slice(4);
      if (!_c.test(e)) {
        let n = e.replace(gc, bc);
        (n.charAt(0) !== `-` && (n = `-` + n), (t = `data` + n));
      }
    }
    i = ic;
  }
  return new i(r, t);
}
function bc(e) {
  return `-` + e.toLowerCase();
}
function xc(e) {
  return e.charAt(1).toUpperCase();
}
var Sc = qs([sc, uc, fc, pc, mc], `html`),
  Cc = qs([sc, dc, fc, pc, mc], `svg`);
function wc(e) {
  return e.join(` `).trim();
}
var Tc = o((e, t) => {
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      r = /\n/g,
      i = /^\s*/,
      a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      o = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      c = /^[;\s]*/,
      l = /^\s+|\s+$/g,
      u = `
`,
      d = `/`,
      f = `*`,
      p = ``,
      m = `comment`,
      h = `declaration`;
    function g(e, t) {
      if (typeof e != `string`)
        throw TypeError(`First argument must be a string`);
      if (!e) return [];
      t ||= {};
      var l = 1,
        g = 1;
      function v(e) {
        var t = e.match(r);
        t && (l += t.length);
        var n = e.lastIndexOf(u);
        g = ~n ? e.length - n : g + e.length;
      }
      function y() {
        var e = { line: l, column: g };
        return function (t) {
          return ((t.position = new b(e)), S(), t);
        };
      }
      function b(e) {
        ((this.start = e),
          (this.end = { line: l, column: g }),
          (this.source = t.source));
      }
      b.prototype.content = e;
      function x(n) {
        var r = Error(t.source + `:` + l + `:` + g + `: ` + n);
        if (
          ((r.reason = n),
          (r.filename = t.source),
          (r.line = l),
          (r.column = g),
          (r.source = e),
          !t.silent)
        )
          throw r;
      }
      function ee(t) {
        var n = t.exec(e);
        if (n) {
          var r = n[0];
          return (v(r), (e = e.slice(r.length)), n);
        }
      }
      function S() {
        ee(i);
      }
      function C(e) {
        var t;
        for (e ||= []; (t = w()); ) t !== !1 && e.push(t);
        return e;
      }
      function w() {
        var t = y();
        if (!(d != e.charAt(0) || f != e.charAt(1))) {
          for (
            var n = 2;
            p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));
          )
            ++n;
          if (((n += 2), p === e.charAt(n - 1)))
            return x(`End of comment missing`);
          var r = e.slice(2, n - 2);
          return (
            (g += 2),
            v(r),
            (e = e.slice(n)),
            (g += 2),
            t({ type: m, comment: r })
          );
        }
      }
      function T() {
        var e = y(),
          t = ee(a);
        if (t) {
          if ((w(), !ee(o))) return x(`property missing ':'`);
          var r = ee(s),
            i = e({
              type: h,
              property: _(t[0].replace(n, p)),
              value: r ? _(r[0].replace(n, p)) : p,
            });
          return (ee(c), i);
        }
      }
      function te() {
        var e = [];
        C(e);
        for (var t; (t = T()); ) t !== !1 && (e.push(t), C(e));
        return e;
      }
      return (S(), te());
    }
    function _(e) {
      return e ? e.replace(l, p) : p;
    }
    t.exports = g;
  }),
  Ec = o((e) => {
    var t =
      (e && e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = r));
    var n = t(Tc());
    function r(e, t) {
      let r = null;
      if (!e || typeof e != `string`) return r;
      let i = (0, n.default)(e),
        a = typeof t == `function`;
      return (
        i.forEach((e) => {
          if (e.type !== `declaration`) return;
          let { property: n, value: i } = e;
          a ? t(n, i, e) : i && ((r ||= {}), (r[n] = i));
        }),
        r
      );
    }
  }),
  Dc = o((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.camelCase = void 0));
    var t = /^--[a-zA-Z0-9_-]+$/,
      n = /-([a-z])/g,
      r = /^[^-]+$/,
      i = /^-(webkit|moz|ms|o|khtml)-/,
      a = /^-(ms)-/,
      o = function (e) {
        return !e || r.test(e) || t.test(e);
      },
      s = function (e, t) {
        return t.toUpperCase();
      },
      c = function (e, t) {
        return `${t}-`;
      };
    e.camelCase = function (e, t) {
      return (
        t === void 0 && (t = {}),
        o(e)
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(a, c) : e.replace(i, c)),
            e.replace(n, s))
      );
    };
  }),
  Oc = o((e, t) => {
    var n = (
        (e && e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        }
      )(Ec()),
      r = Dc();
    function i(e, t) {
      var i = {};
      return (
        !e ||
          typeof e != `string` ||
          (0, n.default)(e, function (e, n) {
            e && n && (i[(0, r.camelCase)(e, t)] = n);
          }),
        i
      );
    }
    ((i.default = i), (t.exports = i));
  }),
  kc = jc(`end`),
  Ac = jc(`start`);
function jc(e) {
  return t;
  function t(t) {
    let n = (t && t.position && t.position[e]) || {};
    if (
      typeof n.line == `number` &&
      n.line > 0 &&
      typeof n.column == `number` &&
      n.column > 0
    )
      return {
        line: n.line,
        column: n.column,
        offset:
          typeof n.offset == `number` && n.offset > -1 ? n.offset : void 0,
      };
  }
}
function Mc(e) {
  let t = Ac(e),
    n = kc(e);
  if (t && n) return { start: t, end: n };
}
function Nc(e) {
  return !e || typeof e != `object`
    ? ``
    : `position` in e || `type` in e
      ? Fc(e.position)
      : `start` in e || `end` in e
        ? Fc(e)
        : `line` in e || `column` in e
          ? Pc(e)
          : ``;
}
function Pc(e) {
  return Ic(e && e.line) + `:` + Ic(e && e.column);
}
function Fc(e) {
  return Pc(e && e.start) + `-` + Pc(e && e.end);
}
function Ic(e) {
  return e && typeof e == `number` ? e : 1;
}
var U = class extends Error {
  constructor(e, t, n) {
    (super(), typeof t == `string` && ((n = t), (t = void 0)));
    let r = ``,
      i = {},
      a = !1;
    if (
      (t &&
        (i =
          (`line` in t && `column` in t) || (`start` in t && `end` in t)
            ? { place: t }
            : `type` in t
              ? { ancestors: [t], place: t.position }
              : { ...t }),
      typeof e == `string`
        ? (r = e)
        : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
      !i.ruleId && !i.source && typeof n == `string`)
    ) {
      let e = n.indexOf(`:`);
      e === -1
        ? (i.ruleId = n)
        : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
    }
    if (!i.place && i.ancestors && i.ancestors) {
      let e = i.ancestors[i.ancestors.length - 1];
      e && (i.place = e.position);
    }
    let o = i.place && `start` in i.place ? i.place.start : i.place;
    ((this.ancestors = i.ancestors || void 0),
      (this.cause = i.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      (this.file = ``),
      (this.message = r),
      (this.line = o ? o.line : void 0),
      (this.name = Nc(i.place) || `1:1`),
      (this.place = i.place || void 0),
      (this.reason = this.message),
      (this.ruleId = i.ruleId || void 0),
      (this.source = i.source || void 0),
      (this.stack =
        a && i.cause && typeof i.cause.stack == `string` ? i.cause.stack : ``),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
};
((U.prototype.file = ``),
  (U.prototype.name = ``),
  (U.prototype.reason = ``),
  (U.prototype.message = ``),
  (U.prototype.stack = ``),
  (U.prototype.column = void 0),
  (U.prototype.line = void 0),
  (U.prototype.ancestors = void 0),
  (U.prototype.cause = void 0),
  (U.prototype.fatal = void 0),
  (U.prototype.place = void 0),
  (U.prototype.ruleId = void 0),
  (U.prototype.source = void 0));
var Lc = l(Oc(), 1),
  Rc = {}.hasOwnProperty,
  zc = new Map(),
  Bc = /[A-Z]/g,
  Vc = new Set([`table`, `tbody`, `thead`, `tfoot`, `tr`]),
  Hc = new Set([`td`, `th`]),
  Uc = `https://github.com/syntax-tree/hast-util-to-jsx-runtime`;
function Wc(e, t) {
  if (!t || t.Fragment === void 0)
    throw TypeError("Expected `Fragment` in options");
  let n = t.filePath || void 0,
    r;
  if (t.development) {
    if (typeof t.jsxDEV != `function`)
      throw TypeError("Expected `jsxDEV` in options when `development: true`");
    r = tl(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != `function`)
      throw TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != `function`)
      throw TypeError("Expected `jsxs` in production options");
    r = el(n, t.jsx, t.jsxs);
  }
  let i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || `react`,
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === `svg` ? Cc : Sc,
      stylePropertyNameCase: t.stylePropertyNameCase || `dom`,
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    a = Gc(i, e, void 0);
  return a && typeof a != `string`
    ? a
    : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Gc(e, t, n) {
  if (t.type === `element`) return Kc(e, t, n);
  if (t.type === `mdxFlowExpression` || t.type === `mdxTextExpression`)
    return qc(e, t);
  if (t.type === `mdxJsxFlowElement` || t.type === `mdxJsxTextElement`)
    return Yc(e, t, n);
  if (t.type === `mdxjsEsm`) return Jc(e, t);
  if (t.type === `root`) return Xc(e, t, n);
  if (t.type === `text`) return Zc(e, t);
}
function Kc(e, t, n) {
  let r = e.schema,
    i = r;
  (t.tagName.toLowerCase() === `svg` &&
    r.space === `html` &&
    ((i = Cc), (e.schema = i)),
    e.ancestors.push(t));
  let a = sl(e, t.tagName, !1),
    o = nl(e, t),
    s = il(e, t);
  return (
    Vc.has(t.tagName) &&
      (s = s.filter(function (e) {
        return typeof e == `string` ? !Ws(e) : !0;
      })),
    Qc(e, o, a, t),
    $c(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  );
}
function qc(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    let n = t.data.estree.body[0];
    return (n.type, e.evaluater.evaluateExpression(n.expression));
  }
  cl(e, t.position);
}
function Jc(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  cl(e, t.position);
}
function Yc(e, t, n) {
  let r = e.schema,
    i = r;
  (t.name === `svg` && r.space === `html` && ((i = Cc), (e.schema = i)),
    e.ancestors.push(t));
  let a = t.name === null ? e.Fragment : sl(e, t.name, !0),
    o = rl(e, t),
    s = il(e, t);
  return (
    Qc(e, o, a, t),
    $c(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  );
}
function Xc(e, t, n) {
  let r = {};
  return ($c(r, il(e, t)), e.create(t, e.Fragment, r, n));
}
function Zc(e, t) {
  return t.value;
}
function Qc(e, t, n, r) {
  typeof n != `string` && n !== e.Fragment && e.passNode && (t.node = r);
}
function $c(e, t) {
  if (t.length > 0) {
    let n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function el(e, t, n) {
  return r;
  function r(e, r, i, a) {
    let o = Array.isArray(i.children) ? n : t;
    return a ? o(r, i, a) : o(r, i);
  }
}
function tl(e, t) {
  return n;
  function n(n, r, i, a) {
    let o = Array.isArray(i.children),
      s = Ac(n);
    return t(
      r,
      i,
      a,
      o,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0,
      },
      void 0,
    );
  }
}
function nl(e, t) {
  let n = {},
    r,
    i;
  for (i in t.properties)
    if (i !== `children` && Rc.call(t.properties, i)) {
      let a = al(e, i, t.properties[i]);
      if (a) {
        let [i, o] = a;
        e.tableCellAlignToStyle &&
        i === `align` &&
        typeof o == `string` &&
        Hc.has(t.tagName)
          ? (r = o)
          : (n[i] = o);
      }
    }
  if (r) {
    let t = (n.style ||= {});
    t[e.stylePropertyNameCase === `css` ? `text-align` : `textAlign`] = r;
  }
  return n;
}
function rl(e, t) {
  let n = {};
  for (let r of t.attributes)
    if (r.type === `mdxJsxExpressionAttribute`)
      if (r.data && r.data.estree && e.evaluater) {
        let t = r.data.estree.body[0];
        t.type;
        let i = t.expression;
        i.type;
        let a = i.properties[0];
        (a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument)));
      } else cl(e, t.position);
    else {
      let i = r.name,
        a;
      if (r.value && typeof r.value == `object`)
        if (r.value.data && r.value.data.estree && e.evaluater) {
          let t = r.value.data.estree.body[0];
          (t.type, (a = e.evaluater.evaluateExpression(t.expression)));
        } else cl(e, t.position);
      else a = r.value === null ? !0 : r.value;
      n[i] = a;
    }
  return n;
}
function il(e, t) {
  let n = [],
    r = -1,
    i = e.passKeys ? new Map() : zc;
  for (; ++r < t.children.length; ) {
    let a = t.children[r],
      o;
    if (e.passKeys) {
      let e =
        a.type === `element`
          ? a.tagName
          : a.type === `mdxJsxFlowElement` || a.type === `mdxJsxTextElement`
            ? a.name
            : void 0;
      if (e) {
        let t = i.get(e) || 0;
        ((o = e + `-` + t), i.set(e, t + 1));
      }
    }
    let s = Gc(e, a, o);
    s !== void 0 && n.push(s);
  }
  return n;
}
function al(e, t, n) {
  let r = yc(e.schema, t);
  if (!(n == null || (typeof n == `number` && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? Rs(n) : wc(n)),
      r.property === `style`)
    ) {
      let t = typeof n == `object` ? n : ol(e, String(n));
      return (e.stylePropertyNameCase === `css` && (t = ll(t)), [`style`, t]);
    }
    return [
      e.elementAttributeNameCase === `react` && r.space
        ? hc[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function ol(e, t) {
  try {
    return (0, Lc.default)(t, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle) return {};
    let n = t,
      r = new U("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: n,
        ruleId: `style`,
        source: `hast-util-to-jsx-runtime`,
      });
    throw (
      (r.file = e.filePath || void 0),
      (r.url = Uc + `#cannot-parse-style-attribute`),
      r
    );
  }
}
function sl(e, t, n) {
  let r;
  if (!n) r = { type: `Literal`, value: t };
  else if (t.includes(`.`)) {
    let e = t.split(`.`),
      n = -1,
      i;
    for (; ++n < e.length; ) {
      let t = Hs(e[n])
        ? { type: `Identifier`, name: e[n] }
        : { type: `Literal`, value: e[n] };
      i = i
        ? {
            type: `MemberExpression`,
            object: i,
            property: t,
            computed: !!(n && t.type === `Literal`),
            optional: !1,
          }
        : t;
    }
    r = i;
  } else
    r =
      Hs(t) && !/^[a-z]/.test(t)
        ? { type: `Identifier`, name: t }
        : { type: `Literal`, value: t };
  if (r.type === `Literal`) {
    let t = r.value;
    return Rc.call(e.components, t) ? e.components[t] : t;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  cl(e);
}
function cl(e, t) {
  let n = new U("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: `mdx-estree`,
    source: `hast-util-to-jsx-runtime`,
  });
  throw (
    (n.file = e.filePath || void 0),
    (n.url = Uc + `#cannot-handle-mdx-estrees-without-createevaluater`),
    n
  );
}
function ll(e) {
  let t = {},
    n;
  for (n in e) Rc.call(e, n) && (t[ul(n)] = e[n]);
  return t;
}
function ul(e) {
  let t = e.replace(Bc, dl);
  return (t.slice(0, 3) === `ms-` && (t = `-` + t), t);
}
function dl(e) {
  return `-` + e.toLowerCase();
}
var fl = {
    action: [`form`],
    cite: [`blockquote`, `del`, `ins`, `q`],
    data: [`object`],
    formAction: [`button`, `input`],
    href: [`a`, `area`, `base`, `link`],
    icon: [`menuitem`],
    itemId: null,
    manifest: [`html`],
    ping: [`a`, `area`],
    poster: [`video`],
    src: [
      `audio`,
      `embed`,
      `iframe`,
      `img`,
      `input`,
      `script`,
      `source`,
      `track`,
      `video`,
    ],
  },
  pl = {};
function ml(e, t) {
  let n = t || pl;
  return hl(
    e,
    typeof n.includeImageAlt == `boolean` ? n.includeImageAlt : !0,
    typeof n.includeHtml == `boolean` ? n.includeHtml : !0,
  );
}
function hl(e, t, n) {
  if (_l(e)) {
    if (`value` in e) return e.type === `html` && !n ? `` : e.value;
    if (t && `alt` in e && e.alt) return e.alt;
    if (`children` in e) return gl(e.children, t, n);
  }
  return Array.isArray(e) ? gl(e, t, n) : ``;
}
function gl(e, t, n) {
  let r = [],
    i = -1;
  for (; ++i < e.length; ) r[i] = hl(e[i], t, n);
  return r.join(``);
}
function _l(e) {
  return !!(e && typeof e == `object`);
}
var vl = document.createElement(`i`);
function yl(e) {
  let t = `&` + e + `;`;
  vl.innerHTML = t;
  let n = vl.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== `semi`) || n === t
    ? !1
    : n;
}
function bl(e, t, n, r) {
  let i = e.length,
    a = 0,
    o;
  if (
    ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    ((o = Array.from(r)), o.unshift(t, n), e.splice(...o));
  else
    for (n && e.splice(t, n); a < r.length; )
      ((o = r.slice(a, a + 1e4)),
        o.unshift(t, 0),
        e.splice(...o),
        (a += 1e4),
        (t += 1e4));
}
function xl(e, t) {
  return e.length > 0 ? (bl(e, e.length, 0, t), e) : t;
}
var Sl = {}.hasOwnProperty;
function Cl(e) {
  let t = {},
    n = -1;
  for (; ++n < e.length; ) wl(t, e[n]);
  return t;
}
function wl(e, t) {
  let n;
  for (n in t) {
    let r = (Sl.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      i = t[n],
      a;
    if (i)
      for (a in i) {
        Sl.call(r, a) || (r[a] = []);
        let e = i[a];
        Tl(r[a], Array.isArray(e) ? e : e ? [e] : []);
      }
  }
}
function Tl(e, t) {
  let n = -1,
    r = [];
  for (; ++n < t.length; ) (t[n].add === `after` ? e : r).push(t[n]);
  bl(e, 0, 0, r);
}
function El(e, t) {
  let n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) == 65535 ||
    (n & 65535) == 65534 ||
    n > 1114111
    ? `�`
    : String.fromCodePoint(n);
}
function Dl(e) {
  return e
    .replace(/[\t\n\r ]+/g, ` `)
    .replace(/^ | $/g, ``)
    .toLowerCase()
    .toUpperCase();
}
var Ol = q(/[A-Za-z]/),
  kl = q(/[\dA-Za-z]/),
  Al = q(/[#-'*+\--9=?A-Z^-~]/);
function jl(e) {
  return e !== null && (e < 32 || e === 127);
}
var Ml = q(/\d/),
  Nl = q(/[\dA-Fa-f]/),
  Pl = q(/[!-/:-@[-`{-~]/);
function W(e) {
  return e !== null && e < -2;
}
function Fl(e) {
  return e !== null && (e < 0 || e === 32);
}
function G(e) {
  return e === -2 || e === -1 || e === 32;
}
var Il = q(/\p{P}|\p{S}/u),
  K = q(/\s/);
function q(e) {
  return t;
  function t(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function J(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    let a = e.charCodeAt(n),
      o = ``;
    if (a === 37 && kl(e.charCodeAt(n + 1)) && kl(e.charCodeAt(n + 2))) i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) ||
        (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      let t = e.charCodeAt(n + 1);
      a < 56320 && t > 56319 && t < 57344
        ? ((o = String.fromCharCode(a, t)), (i = 1))
        : (o = `�`);
    } else o = String.fromCharCode(a);
    ((o &&=
      (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), ``)),
      (i &&= ((n += i), 0)));
  }
  return t.join(``) + e.slice(r);
}
function Y(e, t, n, r) {
  let i = r ? r - 1 : 1 / 0,
    a = 0;
  return o;
  function o(r) {
    return G(r) ? (e.enter(n), s(r)) : t(r);
  }
  function s(r) {
    return G(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
  }
}
var X = { tokenize: Ll };
function Ll(e) {
  let t = e.attempt(this.parser.constructs.contentInitial, r, i),
    n;
  return t;
  function r(n) {
    if (n === null) {
      e.consume(n);
      return;
    }
    return (
      e.enter(`lineEnding`),
      e.consume(n),
      e.exit(`lineEnding`),
      Y(e, t, `linePrefix`)
    );
  }
  function i(t) {
    return (e.enter(`paragraph`), a(t));
  }
  function a(t) {
    let r = e.enter(`chunkText`, { contentType: `text`, previous: n });
    return (n && (n.next = r), (n = r), o(t));
  }
  function o(t) {
    if (t === null) {
      (e.exit(`chunkText`), e.exit(`paragraph`), e.consume(t));
      return;
    }
    return W(t) ? (e.consume(t), e.exit(`chunkText`), a) : (e.consume(t), o);
  }
}
var Rl = { tokenize: Bl },
  zl = { tokenize: Vl };
function Bl(e) {
  let t = this,
    n = [],
    r = 0,
    i,
    a,
    o;
  return s;
  function s(i) {
    if (r < n.length) {
      let a = n[r];
      return ((t.containerState = a[1]), e.attempt(a[0].continuation, c, l)(i));
    }
    return l(i);
  }
  function c(e) {
    if ((r++, t.containerState._closeFlow)) {
      ((t.containerState._closeFlow = void 0), i && v());
      let n = t.events.length,
        a = n,
        o;
      for (; a--; )
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          o = t.events[a][1].end;
          break;
        }
      _(r);
      let s = n;
      for (; s < t.events.length; ) ((t.events[s][1].end = { ...o }), s++);
      return (
        bl(t.events, a + 1, 0, t.events.slice(n)),
        (t.events.length = s),
        l(e)
      );
    }
    return s(e);
  }
  function l(a) {
    if (r === n.length) {
      if (!i) return f(a);
      if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return ((t.containerState = {}), e.check(zl, u, d)(a));
  }
  function u(e) {
    return (i && v(), _(r), f(e));
  }
  function d(e) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length),
      (o = t.now().offset),
      m(e)
    );
  }
  function f(n) {
    return ((t.containerState = {}), e.attempt(zl, p, m)(n));
  }
  function p(e) {
    return (r++, n.push([t.currentConstruct, t.containerState]), f(e));
  }
  function m(n) {
    if (n === null) {
      (i && v(), _(0), e.consume(n));
      return;
    }
    return (
      (i ||= t.parser.flow(t.now())),
      e.enter(`chunkFlow`, { _tokenizer: i, contentType: `flow`, previous: a }),
      h(n)
    );
  }
  function h(n) {
    if (n === null) {
      (g(e.exit(`chunkFlow`), !0), _(0), e.consume(n));
      return;
    }
    return W(n)
      ? (e.consume(n),
        g(e.exit(`chunkFlow`)),
        (r = 0),
        (t.interrupt = void 0),
        s)
      : (e.consume(n), h);
  }
  function g(e, n) {
    let s = t.sliceStream(e);
    if (
      (n && s.push(null),
      (e.previous = a),
      a && (a.next = e),
      (a = e),
      i.defineSkip(e.start),
      i.write(s),
      t.parser.lazy[e.start.line])
    ) {
      let e = i.events.length;
      for (; e--; )
        if (
          i.events[e][1].start.offset < o &&
          (!i.events[e][1].end || i.events[e][1].end.offset > o)
        )
          return;
      let n = t.events.length,
        a = n,
        s,
        c;
      for (; a--; )
        if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
          if (s) {
            c = t.events[a][1].end;
            break;
          }
          s = !0;
        }
      for (_(r), e = n; e < t.events.length; )
        ((t.events[e][1].end = { ...c }), e++);
      (bl(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = e));
    }
  }
  function _(r) {
    let i = n.length;
    for (; i-- > r; ) {
      let r = n[i];
      ((t.containerState = r[1]), r[0].exit.call(t, e));
    }
    n.length = r;
  }
  function v() {
    (i.write([null]),
      (a = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0));
  }
}
function Vl(e, t, n) {
  return Y(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    `linePrefix`,
    this.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4,
  );
}
function Hl(e) {
  if (e === null || Fl(e) || K(e)) return 1;
  if (Il(e)) return 2;
}
function Ul(e, t, n) {
  let r = [],
    i = -1;
  for (; ++i < e.length; ) {
    let a = e[i].resolveAll;
    a && !r.includes(a) && ((t = a(t, n)), r.push(a));
  }
  return t;
}
var Wl = { name: `attention`, resolveAll: Gl, tokenize: Kl };
function Gl(e, t) {
  let n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  for (; ++n < e.length; )
    if (
      e[n][0] === `enter` &&
      e[n][1].type === `attentionSequence` &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === `exit` &&
          e[r][1].type === `attentionSequence` &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          let d = { ...e[r][1].end },
            f = { ...e[n][1].start };
          (ql(d, -c),
            ql(f, c),
            (o = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: d,
              end: { ...e[r][1].end },
            }),
            (s = {
              type: c > 1 ? `strongSequence` : `emphasisSequence`,
              start: { ...e[n][1].start },
              end: f,
            }),
            (a = {
              type: c > 1 ? `strongText` : `emphasisText`,
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = {
              type: c > 1 ? `strong` : `emphasis`,
              start: { ...o.start },
              end: { ...s.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[n][1].start = { ...s.end }),
            (l = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (l = xl(l, [
                [`enter`, e[r][1], t],
                [`exit`, e[r][1], t],
              ])),
            (l = xl(l, [
              [`enter`, i, t],
              [`enter`, o, t],
              [`exit`, o, t],
              [`enter`, a, t],
            ])),
            (l = xl(
              l,
              Ul(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t),
            )),
            (l = xl(l, [
              [`exit`, a, t],
              [`enter`, s, t],
              [`exit`, s, t],
              [`exit`, i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((u = 2),
                (l = xl(l, [
                  [`enter`, e[n][1], t],
                  [`exit`, e[n][1], t],
                ])))
              : (u = 0),
            bl(e, r - 1, n - r + 3, l),
            (n = r + l.length - u - 2));
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === `attentionSequence` && (e[n][1].type = `data`);
  return e;
}
function Kl(e, t) {
  let n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Hl(r),
    a;
  return o;
  function o(t) {
    return ((a = t), e.enter(`attentionSequence`), s(t));
  }
  function s(o) {
    if (o === a) return (e.consume(o), s);
    let c = e.exit(`attentionSequence`),
      l = Hl(o),
      u = !l || (l === 2 && i) || n.includes(o),
      d = !i || (i === 2 && l) || n.includes(r);
    return (
      (c._open = !!(a === 42 ? u : u && (i || !d))),
      (c._close = !!(a === 42 ? d : d && (l || !u))),
      t(o)
    );
  }
}
function ql(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
var Jl = { name: `autolink`, tokenize: Yl };
function Yl(e, t, n) {
  let r = 0;
  return i;
  function i(t) {
    return (
      e.enter(`autolink`),
      e.enter(`autolinkMarker`),
      e.consume(t),
      e.exit(`autolinkMarker`),
      e.enter(`autolinkProtocol`),
      a
    );
  }
  function a(t) {
    return Ol(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
  }
  function o(e) {
    return e === 43 || e === 45 || e === 46 || kl(e) ? ((r = 1), s(e)) : l(e);
  }
  function s(t) {
    return t === 58
      ? (e.consume(t), (r = 0), c)
      : (t === 43 || t === 45 || t === 46 || kl(t)) && r++ < 32
        ? (e.consume(t), s)
        : ((r = 0), l(t));
  }
  function c(r) {
    return r === 62
      ? (e.exit(`autolinkProtocol`),
        e.enter(`autolinkMarker`),
        e.consume(r),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t)
      : r === null || r === 32 || r === 60 || jl(r)
        ? n(r)
        : (e.consume(r), c);
  }
  function l(t) {
    return t === 64 ? (e.consume(t), u) : Al(t) ? (e.consume(t), l) : n(t);
  }
  function u(e) {
    return kl(e) ? d(e) : n(e);
  }
  function d(n) {
    return n === 46
      ? (e.consume(n), (r = 0), u)
      : n === 62
        ? ((e.exit(`autolinkProtocol`).type = `autolinkEmail`),
          e.enter(`autolinkMarker`),
          e.consume(n),
          e.exit(`autolinkMarker`),
          e.exit(`autolink`),
          t)
        : f(n);
  }
  function f(t) {
    if ((t === 45 || kl(t)) && r++ < 63) {
      let n = t === 45 ? f : d;
      return (e.consume(t), n);
    }
    return n(t);
  }
}
var Xl = { partial: !0, tokenize: Zl };
function Zl(e, t, n) {
  return r;
  function r(t) {
    return G(t) ? Y(e, i, `linePrefix`)(t) : i(t);
  }
  function i(e) {
    return e === null || W(e) ? t(e) : n(e);
  }
}
var Ql = {
  continuation: { tokenize: eu },
  exit: tu,
  name: `blockQuote`,
  tokenize: $l,
};
function $l(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    if (t === 62) {
      let n = r.containerState;
      return (
        (n.open ||= (e.enter(`blockQuote`, { _container: !0 }), !0)),
        e.enter(`blockQuotePrefix`),
        e.enter(`blockQuoteMarker`),
        e.consume(t),
        e.exit(`blockQuoteMarker`),
        a
      );
    }
    return n(t);
  }
  function a(n) {
    return G(n)
      ? (e.enter(`blockQuotePrefixWhitespace`),
        e.consume(n),
        e.exit(`blockQuotePrefixWhitespace`),
        e.exit(`blockQuotePrefix`),
        t)
      : (e.exit(`blockQuotePrefix`), t(n));
  }
}
function eu(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return G(t)
      ? Y(
          e,
          a,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`)
            ? void 0
            : 4,
        )(t)
      : a(t);
  }
  function a(r) {
    return e.attempt(Ql, t, n)(r);
  }
}
function tu(e) {
  e.exit(`blockQuote`);
}
var nu = { name: `characterEscape`, tokenize: ru };
function ru(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`characterEscape`),
      e.enter(`escapeMarker`),
      e.consume(t),
      e.exit(`escapeMarker`),
      i
    );
  }
  function i(r) {
    return Pl(r)
      ? (e.enter(`characterEscapeValue`),
        e.consume(r),
        e.exit(`characterEscapeValue`),
        e.exit(`characterEscape`),
        t)
      : n(r);
  }
}
var iu = { name: `characterReference`, tokenize: au };
function au(e, t, n) {
  let r = this,
    i = 0,
    a,
    o;
  return s;
  function s(t) {
    return (
      e.enter(`characterReference`),
      e.enter(`characterReferenceMarker`),
      e.consume(t),
      e.exit(`characterReferenceMarker`),
      c
    );
  }
  function c(t) {
    return t === 35
      ? (e.enter(`characterReferenceMarkerNumeric`),
        e.consume(t),
        e.exit(`characterReferenceMarkerNumeric`),
        l)
      : (e.enter(`characterReferenceValue`), (a = 31), (o = kl), u(t));
  }
  function l(t) {
    return t === 88 || t === 120
      ? (e.enter(`characterReferenceMarkerHexadecimal`),
        e.consume(t),
        e.exit(`characterReferenceMarkerHexadecimal`),
        e.enter(`characterReferenceValue`),
        (a = 6),
        (o = Nl),
        u)
      : (e.enter(`characterReferenceValue`), (a = 7), (o = Ml), u(t));
  }
  function u(s) {
    if (s === 59 && i) {
      let i = e.exit(`characterReferenceValue`);
      return o === kl && !yl(r.sliceSerialize(i))
        ? n(s)
        : (e.enter(`characterReferenceMarker`),
          e.consume(s),
          e.exit(`characterReferenceMarker`),
          e.exit(`characterReference`),
          t);
    }
    return o(s) && i++ < a ? (e.consume(s), u) : n(s);
  }
}
var ou = { partial: !0, tokenize: lu },
  su = { concrete: !0, name: `codeFenced`, tokenize: cu };
function cu(e, t, n) {
  let r = this,
    i = { partial: !0, tokenize: x },
    a = 0,
    o = 0,
    s;
  return c;
  function c(e) {
    return l(e);
  }
  function l(t) {
    let n = r.events[r.events.length - 1];
    return (
      (a =
        n && n[1].type === `linePrefix`
          ? n[2].sliceSerialize(n[1], !0).length
          : 0),
      (s = t),
      e.enter(`codeFenced`),
      e.enter(`codeFencedFence`),
      e.enter(`codeFencedFenceSequence`),
      u(t)
    );
  }
  function u(t) {
    return t === s
      ? (o++, e.consume(t), u)
      : o < 3
        ? n(t)
        : (e.exit(`codeFencedFenceSequence`),
          G(t) ? Y(e, d, `whitespace`)(t) : d(t));
  }
  function d(n) {
    return n === null || W(n)
      ? (e.exit(`codeFencedFence`), r.interrupt ? t(n) : e.check(ou, h, b)(n))
      : (e.enter(`codeFencedFenceInfo`),
        e.enter(`chunkString`, { contentType: `string` }),
        f(n));
  }
  function f(t) {
    return t === null || W(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceInfo`), d(t))
      : G(t)
        ? (e.exit(`chunkString`),
          e.exit(`codeFencedFenceInfo`),
          Y(e, p, `whitespace`)(t))
        : t === 96 && t === s
          ? n(t)
          : (e.consume(t), f);
  }
  function p(t) {
    return t === null || W(t)
      ? d(t)
      : (e.enter(`codeFencedFenceMeta`),
        e.enter(`chunkString`, { contentType: `string` }),
        m(t));
  }
  function m(t) {
    return t === null || W(t)
      ? (e.exit(`chunkString`), e.exit(`codeFencedFenceMeta`), d(t))
      : t === 96 && t === s
        ? n(t)
        : (e.consume(t), m);
  }
  function h(t) {
    return e.attempt(i, b, g)(t);
  }
  function g(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), _);
  }
  function _(t) {
    return a > 0 && G(t) ? Y(e, v, `linePrefix`, a + 1)(t) : v(t);
  }
  function v(t) {
    return t === null || W(t)
      ? e.check(ou, h, b)(t)
      : (e.enter(`codeFlowValue`), y(t));
  }
  function y(t) {
    return t === null || W(t)
      ? (e.exit(`codeFlowValue`), v(t))
      : (e.consume(t), y);
  }
  function b(n) {
    return (e.exit(`codeFenced`), t(n));
  }
  function x(e, t, n) {
    let i = 0;
    return a;
    function a(t) {
      return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c);
    }
    function c(t) {
      return (
        e.enter(`codeFencedFence`),
        G(t)
          ? Y(
              e,
              l,
              `linePrefix`,
              r.parser.constructs.disable.null.includes(`codeIndented`)
                ? void 0
                : 4,
            )(t)
          : l(t)
      );
    }
    function l(t) {
      return t === s ? (e.enter(`codeFencedFenceSequence`), u(t)) : n(t);
    }
    function u(t) {
      return t === s
        ? (i++, e.consume(t), u)
        : i >= o
          ? (e.exit(`codeFencedFenceSequence`),
            G(t) ? Y(e, d, `whitespace`)(t) : d(t))
          : n(t);
    }
    function d(r) {
      return r === null || W(r) ? (e.exit(`codeFencedFence`), t(r)) : n(r);
    }
  }
}
function lu(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return t === null
      ? n(t)
      : (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a);
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e);
  }
}
var uu = { name: `codeIndented`, tokenize: fu },
  du = { partial: !0, tokenize: pu };
function fu(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (e.enter(`codeIndented`), Y(e, a, `linePrefix`, 5)(t));
  }
  function a(e) {
    let t = r.events[r.events.length - 1];
    return t &&
      t[1].type === `linePrefix` &&
      t[2].sliceSerialize(t[1], !0).length >= 4
      ? o(e)
      : n(e);
  }
  function o(t) {
    return t === null
      ? c(t)
      : W(t)
        ? e.attempt(du, o, c)(t)
        : (e.enter(`codeFlowValue`), s(t));
  }
  function s(t) {
    return t === null || W(t)
      ? (e.exit(`codeFlowValue`), o(t))
      : (e.consume(t), s);
  }
  function c(n) {
    return (e.exit(`codeIndented`), t(n));
  }
}
function pu(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return r.parser.lazy[r.now().line]
      ? n(t)
      : W(t)
        ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), i)
        : Y(e, a, `linePrefix`, 5)(t);
  }
  function a(e) {
    let a = r.events[r.events.length - 1];
    return a &&
      a[1].type === `linePrefix` &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(e)
      : W(e)
        ? i(e)
        : n(e);
  }
}
var mu = { name: `codeText`, previous: gu, resolve: hu, tokenize: _u };
function hu(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === `lineEnding` || e[n][1].type === `space`) &&
    (e[t][1].type === `lineEnding` || e[t][1].type === `space`)
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === `codeTextData`) {
        ((e[n][1].type = `codeTextPadding`),
          (e[t][1].type = `codeTextPadding`),
          (n += 2),
          (t -= 2));
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== `lineEnding` && (i = r)
      : (r === t || e[r][1].type === `lineEnding`) &&
        ((e[i][1].type = `codeTextData`),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function gu(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === `characterEscape`
  );
}
function _u(e, t, n) {
  let r = 0,
    i,
    a;
  return o;
  function o(t) {
    return (e.enter(`codeText`), e.enter(`codeTextSequence`), s(t));
  }
  function s(t) {
    return t === 96
      ? (e.consume(t), r++, s)
      : (e.exit(`codeTextSequence`), c(t));
  }
  function c(t) {
    return t === null
      ? n(t)
      : t === 32
        ? (e.enter(`space`), e.consume(t), e.exit(`space`), c)
        : t === 96
          ? ((a = e.enter(`codeTextSequence`)), (i = 0), u(t))
          : W(t)
            ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), c)
            : (e.enter(`codeTextData`), l(t));
  }
  function l(t) {
    return t === null || t === 32 || t === 96 || W(t)
      ? (e.exit(`codeTextData`), c(t))
      : (e.consume(t), l);
  }
  function u(n) {
    return n === 96
      ? (e.consume(n), i++, u)
      : i === r
        ? (e.exit(`codeTextSequence`), e.exit(`codeText`), t(n))
        : ((a.type = `codeTextData`), l(n));
  }
}
var vu = class {
  constructor(e) {
    ((this.left = e ? [...e] : []), (this.right = []));
  }
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw RangeError(
        "Cannot access index `" +
          e +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    return e < this.left.length
      ? this.left[e]
      : this.right[this.right.length - e + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(e, t) {
    let n = t ?? 1 / 0;
    return n < this.left.length
      ? this.left.slice(e, n)
      : e > this.left.length
        ? this.right
            .slice(
              this.right.length - n + this.left.length,
              this.right.length - e + this.left.length,
            )
            .reverse()
        : this.left
            .slice(e)
            .concat(
              this.right
                .slice(this.right.length - n + this.left.length)
                .reverse(),
            );
  }
  splice(e, t, n) {
    let r = t || 0;
    this.setCursor(Math.trunc(e));
    let i = this.right.splice(this.right.length - r, 1 / 0);
    return (n && yu(this.left, n), i.reverse());
  }
  pop() {
    return (this.setCursor(1 / 0), this.left.pop());
  }
  push(e) {
    (this.setCursor(1 / 0), this.left.push(e));
  }
  pushMany(e) {
    (this.setCursor(1 / 0), yu(this.left, e));
  }
  unshift(e) {
    (this.setCursor(0), this.right.push(e));
  }
  unshiftMany(e) {
    (this.setCursor(0), yu(this.right, e.reverse()));
  }
  setCursor(e) {
    if (
      !(
        e === this.left.length ||
        (e > this.left.length && this.right.length === 0) ||
        (e < 0 && this.left.length === 0)
      )
    )
      if (e < this.left.length) {
        let t = this.left.splice(e, 1 / 0);
        yu(this.right, t.reverse());
      } else {
        let t = this.right.splice(
          this.left.length + this.right.length - e,
          1 / 0,
        );
        yu(this.left, t.reverse());
      }
  }
};
function yu(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
}
function bu(e) {
  let t = {},
    n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u = new vu(e);
  for (; ++n < u.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = u.get(n)),
      n &&
        r[1].type === `chunkFlow` &&
        u.get(n - 1)[1].type === `listItemPrefix` &&
        ((c = r[1]._tokenizer.events),
        (a = 0),
        a < c.length && c[a][1].type === `lineEndingBlank` && (a += 2),
        a < c.length && c[a][1].type === `content`))
    )
      for (; ++a < c.length && c[a][1].type !== `content`; )
        c[a][1].type === `chunkText` &&
          ((c[a][1]._isInFirstContentOfListItem = !0), a++);
    if (r[0] === `enter`)
      r[1].contentType && (Object.assign(t, xu(u, n)), (n = t[n]), (l = !0));
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (
          ((o = u.get(a)),
          o[1].type === `lineEnding` || o[1].type === `lineEndingBlank`)
        )
          o[0] === `enter` &&
            (i && (u.get(i)[1].type = `lineEndingBlank`),
            (o[1].type = `lineEnding`),
            (i = a));
        else if (
          !(o[1].type === `linePrefix` || o[1].type === `listItemIndent`)
        )
          break;
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (s = u.slice(i, n)),
        s.unshift(r),
        u.splice(i, n - i + 1, s));
    }
  }
  return (bl(e, 0, 1 / 0, u.slice(0)), !l);
}
function xu(e, t) {
  let n = e.get(t)[1],
    r = e.get(t)[2],
    i = t - 1,
    a = [],
    o = n._tokenizer;
  o ||
    ((o = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  let s = o.events,
    c = [],
    l = {},
    u,
    d,
    f = -1,
    p = n,
    m = 0,
    h = 0,
    g = [h];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    (a.push(i),
      p._tokenizer ||
        ((u = r.sliceStream(p)),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (d = p),
      (p = p.next));
  }
  for (p = n; ++f < s.length; )
    s[f][0] === `exit` &&
      s[f - 1][0] === `enter` &&
      s[f][1].type === s[f - 1][1].type &&
      s[f][1].start.line !== s[f][1].end.line &&
      ((h = f + 1),
      g.push(h),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next));
  for (
    o.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
      f = g.length;
    f--;
  ) {
    let t = s.slice(g[f], g[f + 1]),
      n = a.pop();
    (c.push([n, n + t.length - 1]), e.splice(n, 2, t));
  }
  for (c.reverse(), f = -1; ++f < c.length; )
    ((l[m + c[f][0]] = m + c[f][1]), (m += c[f][1] - c[f][0] - 1));
  return l;
}
var Su = { resolve: wu, tokenize: Tu },
  Cu = { partial: !0, tokenize: Eu };
function wu(e) {
  return (bu(e), e);
}
function Tu(e, t) {
  let n;
  return r;
  function r(t) {
    return (
      e.enter(`content`),
      (n = e.enter(`chunkContent`, { contentType: `content` })),
      i(t)
    );
  }
  function i(t) {
    return t === null ? a(t) : W(t) ? e.check(Cu, o, a)(t) : (e.consume(t), i);
  }
  function a(n) {
    return (e.exit(`chunkContent`), e.exit(`content`), t(n));
  }
  function o(t) {
    return (
      e.consume(t),
      e.exit(`chunkContent`),
      (n.next = e.enter(`chunkContent`, {
        contentType: `content`,
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function Eu(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.exit(`chunkContent`),
      e.enter(`lineEnding`),
      e.consume(t),
      e.exit(`lineEnding`),
      Y(e, a, `linePrefix`)
    );
  }
  function a(i) {
    if (i === null || W(i)) return n(i);
    let a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes(`codeIndented`) &&
      a &&
      a[1].type === `linePrefix` &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(i)
      : e.interrupt(r.parser.constructs.flow, n, t)(i);
  }
}
function Du(e, t, n, r, i, a, o, s, c) {
  let l = c || 1 / 0,
    u = 0;
  return d;
  function d(t) {
    return t === 60
      ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f)
      : t === null || t === 32 || t === 41 || jl(t)
        ? n(t)
        : (e.enter(r),
          e.enter(o),
          e.enter(s),
          e.enter(`chunkString`, { contentType: `string` }),
          h(t));
  }
  function f(n) {
    return n === 62
      ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
      : (e.enter(s), e.enter(`chunkString`, { contentType: `string` }), p(n));
  }
  function p(t) {
    return t === 62
      ? (e.exit(`chunkString`), e.exit(s), f(t))
      : t === null || t === 60 || W(t)
        ? n(t)
        : (e.consume(t), t === 92 ? m : p);
  }
  function m(t) {
    return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
  }
  function h(i) {
    return !u && (i === null || i === 41 || Fl(i))
      ? (e.exit(`chunkString`), e.exit(s), e.exit(o), e.exit(r), t(i))
      : u < l && i === 40
        ? (e.consume(i), u++, h)
        : i === 41
          ? (e.consume(i), u--, h)
          : i === null || i === 32 || i === 40 || jl(i)
            ? n(i)
            : (e.consume(i), i === 92 ? g : h);
  }
  function g(t) {
    return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
  }
}
function Ou(e, t, n, r, i, a) {
  let o = this,
    s = 0,
    c;
  return l;
  function l(t) {
    return (e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u);
  }
  function u(l) {
    return s > 999 ||
      l === null ||
      l === 91 ||
      (l === 93 && !c) ||
      (l === 94 && !s && `_hiddenFootnoteSupport` in o.parser.constructs)
      ? n(l)
      : l === 93
        ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t)
        : W(l)
          ? (e.enter(`lineEnding`), e.consume(l), e.exit(`lineEnding`), u)
          : (e.enter(`chunkString`, { contentType: `string` }), d(l));
  }
  function d(t) {
    return t === null || t === 91 || t === 93 || W(t) || s++ > 999
      ? (e.exit(`chunkString`), u(t))
      : (e.consume(t), (c ||= !G(t)), t === 92 ? f : d);
  }
  function f(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
  }
}
function ku(e, t, n, r, i, a) {
  let o;
  return s;
  function s(t) {
    return t === 34 || t === 39 || t === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        (o = t === 40 ? 41 : t),
        c)
      : n(t);
  }
  function c(n) {
    return n === o
      ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
      : (e.enter(a), l(n));
  }
  function l(t) {
    return t === o
      ? (e.exit(a), c(o))
      : t === null
        ? n(t)
        : W(t)
          ? (e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            Y(e, l, `linePrefix`))
          : (e.enter(`chunkString`, { contentType: `string` }), u(t));
  }
  function u(t) {
    return t === o || t === null || W(t)
      ? (e.exit(`chunkString`), l(t))
      : (e.consume(t), t === 92 ? d : u);
  }
  function d(t) {
    return t === o || t === 92 ? (e.consume(t), u) : u(t);
  }
}
function Au(e, t) {
  let n;
  return r;
  function r(i) {
    return W(i)
      ? (e.enter(`lineEnding`), e.consume(i), e.exit(`lineEnding`), (n = !0), r)
      : G(i)
        ? Y(e, r, n ? `linePrefix` : `lineSuffix`)(i)
        : t(i);
  }
}
var ju = { name: `definition`, tokenize: Nu },
  Mu = { partial: !0, tokenize: Pu };
function Nu(e, t, n) {
  let r = this,
    i;
  return a;
  function a(t) {
    return (e.enter(`definition`), o(t));
  }
  function o(t) {
    return Ou.call(
      r,
      e,
      s,
      n,
      `definitionLabel`,
      `definitionLabelMarker`,
      `definitionLabelString`,
    )(t);
  }
  function s(t) {
    return (
      (i = Dl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      t === 58
        ? (e.enter(`definitionMarker`),
          e.consume(t),
          e.exit(`definitionMarker`),
          c)
        : n(t)
    );
  }
  function c(t) {
    return Fl(t) ? Au(e, l)(t) : l(t);
  }
  function l(t) {
    return Du(
      e,
      u,
      n,
      `definitionDestination`,
      `definitionDestinationLiteral`,
      `definitionDestinationLiteralMarker`,
      `definitionDestinationRaw`,
      `definitionDestinationString`,
    )(t);
  }
  function u(t) {
    return e.attempt(Mu, d, d)(t);
  }
  function d(t) {
    return G(t) ? Y(e, f, `whitespace`)(t) : f(t);
  }
  function f(a) {
    return a === null || W(a)
      ? (e.exit(`definition`), r.parser.defined.push(i), t(a))
      : n(a);
  }
}
function Pu(e, t, n) {
  return r;
  function r(t) {
    return Fl(t) ? Au(e, i)(t) : n(t);
  }
  function i(t) {
    return ku(
      e,
      a,
      n,
      `definitionTitle`,
      `definitionTitleMarker`,
      `definitionTitleString`,
    )(t);
  }
  function a(t) {
    return G(t) ? Y(e, o, `whitespace`)(t) : o(t);
  }
  function o(e) {
    return e === null || W(e) ? t(e) : n(e);
  }
}
var Fu = { name: `hardBreakEscape`, tokenize: Iu };
function Iu(e, t, n) {
  return r;
  function r(t) {
    return (e.enter(`hardBreakEscape`), e.consume(t), i);
  }
  function i(r) {
    return W(r) ? (e.exit(`hardBreakEscape`), t(r)) : n(r);
  }
}
var Lu = { name: `headingAtx`, resolve: Ru, tokenize: zu };
function Ru(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    a;
  return (
    e[r][1].type === `whitespace` && (r += 2),
    n - 2 > r && e[n][1].type === `whitespace` && (n -= 2),
    e[n][1].type === `atxHeadingSequence` &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === `whitespace`)) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: `atxHeadingText`, start: e[r][1].start, end: e[n][1].end }),
      (a = {
        type: `chunkText`,
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: `text`,
      }),
      bl(e, r, n - r + 1, [
        [`enter`, i, t],
        [`enter`, a, t],
        [`exit`, a, t],
        [`exit`, i, t],
      ])),
    e
  );
}
function zu(e, t, n) {
  let r = 0;
  return i;
  function i(t) {
    return (e.enter(`atxHeading`), a(t));
  }
  function a(t) {
    return (e.enter(`atxHeadingSequence`), o(t));
  }
  function o(t) {
    return t === 35 && r++ < 6
      ? (e.consume(t), o)
      : t === null || Fl(t)
        ? (e.exit(`atxHeadingSequence`), s(t))
        : n(t);
  }
  function s(n) {
    return n === 35
      ? (e.enter(`atxHeadingSequence`), c(n))
      : n === null || W(n)
        ? (e.exit(`atxHeading`), t(n))
        : G(n)
          ? Y(e, s, `whitespace`)(n)
          : (e.enter(`atxHeadingText`), l(n));
  }
  function c(t) {
    return t === 35 ? (e.consume(t), c) : (e.exit(`atxHeadingSequence`), s(t));
  }
  function l(t) {
    return t === null || t === 35 || Fl(t)
      ? (e.exit(`atxHeadingText`), s(t))
      : (e.consume(t), l);
  }
}
var Bu =
    `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(
      `.`,
    ),
  Vu = [`pre`, `script`, `style`, `textarea`],
  Hu = { concrete: !0, name: `htmlFlow`, resolveTo: Wu, tokenize: Gu },
  Z = { partial: !0, tokenize: qu },
  Uu = { partial: !0, tokenize: Ku };
function Wu(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === `enter` && e[t][1].type === `htmlFlow`); );
  return (
    t > 1 &&
      e[t - 2][1].type === `linePrefix` &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function Gu(e, t, n) {
  let r = this,
    i,
    a,
    o,
    s,
    c;
  return l;
  function l(e) {
    return u(e);
  }
  function u(t) {
    return (e.enter(`htmlFlow`), e.enter(`htmlFlowData`), e.consume(t), d);
  }
  function d(s) {
    return s === 33
      ? (e.consume(s), f)
      : s === 47
        ? (e.consume(s), (a = !0), h)
        : s === 63
          ? (e.consume(s), (i = 3), r.interrupt ? t : k)
          : Ol(s)
            ? (e.consume(s), (o = String.fromCharCode(s)), g)
            : n(s);
  }
  function f(a) {
    return a === 45
      ? (e.consume(a), (i = 2), p)
      : a === 91
        ? (e.consume(a), (i = 5), (s = 0), m)
        : Ol(a)
          ? (e.consume(a), (i = 4), r.interrupt ? t : k)
          : n(a);
  }
  function p(i) {
    return i === 45 ? (e.consume(i), r.interrupt ? t : k) : n(i);
  }
  function m(i) {
    return i === `CDATA[`.charCodeAt(s++)
      ? (e.consume(i), s === 6 ? (r.interrupt ? t : E) : m)
      : n(i);
  }
  function h(t) {
    return Ol(t) ? (e.consume(t), (o = String.fromCharCode(t)), g) : n(t);
  }
  function g(s) {
    if (s === null || s === 47 || s === 62 || Fl(s)) {
      let c = s === 47,
        l = o.toLowerCase();
      return !c && !a && Vu.includes(l)
        ? ((i = 1), r.interrupt ? t(s) : E(s))
        : Bu.includes(o.toLowerCase())
          ? ((i = 6), c ? (e.consume(s), _) : r.interrupt ? t(s) : E(s))
          : ((i = 7),
            r.interrupt && !r.parser.lazy[r.now().line]
              ? n(s)
              : a
                ? v(s)
                : y(s));
    }
    return s === 45 || kl(s)
      ? (e.consume(s), (o += String.fromCharCode(s)), g)
      : n(s);
  }
  function _(i) {
    return i === 62 ? (e.consume(i), r.interrupt ? t : E) : n(i);
  }
  function v(t) {
    return G(t) ? (e.consume(t), v) : T(t);
  }
  function y(t) {
    return t === 47
      ? (e.consume(t), T)
      : t === 58 || t === 95 || Ol(t)
        ? (e.consume(t), b)
        : G(t)
          ? (e.consume(t), y)
          : T(t);
  }
  function b(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || kl(t)
      ? (e.consume(t), b)
      : x(t);
  }
  function x(t) {
    return t === 61 ? (e.consume(t), ee) : G(t) ? (e.consume(t), x) : y(t);
  }
  function ee(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (c = t), S)
        : G(t)
          ? (e.consume(t), ee)
          : C(t);
  }
  function S(t) {
    return t === c
      ? (e.consume(t), (c = null), w)
      : t === null || W(t)
        ? n(t)
        : (e.consume(t), S);
  }
  function C(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 47 ||
      t === 60 ||
      t === 61 ||
      t === 62 ||
      t === 96 ||
      Fl(t)
      ? x(t)
      : (e.consume(t), C);
  }
  function w(e) {
    return e === 47 || e === 62 || G(e) ? y(e) : n(e);
  }
  function T(t) {
    return t === 62 ? (e.consume(t), te) : n(t);
  }
  function te(t) {
    return t === null || W(t) ? E(t) : G(t) ? (e.consume(t), te) : n(t);
  }
  function E(t) {
    return t === 45 && i === 2
      ? (e.consume(t), ae)
      : t === 60 && i === 1
        ? (e.consume(t), oe)
        : t === 62 && i === 4
          ? (e.consume(t), se)
          : t === 63 && i === 3
            ? (e.consume(t), k)
            : t === 93 && i === 5
              ? (e.consume(t), O)
              : W(t) && (i === 6 || i === 7)
                ? (e.exit(`htmlFlowData`), e.check(Z, ce, ne)(t))
                : t === null || W(t)
                  ? (e.exit(`htmlFlowData`), ne(t))
                  : (e.consume(t), E);
  }
  function ne(t) {
    return e.check(Uu, re, ce)(t);
  }
  function re(t) {
    return (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), ie);
  }
  function ie(t) {
    return t === null || W(t) ? ne(t) : (e.enter(`htmlFlowData`), E(t));
  }
  function ae(t) {
    return t === 45 ? (e.consume(t), k) : E(t);
  }
  function oe(t) {
    return t === 47 ? (e.consume(t), (o = ``), D) : E(t);
  }
  function D(t) {
    if (t === 62) {
      let n = o.toLowerCase();
      return Vu.includes(n) ? (e.consume(t), se) : E(t);
    }
    return Ol(t) && o.length < 8
      ? (e.consume(t), (o += String.fromCharCode(t)), D)
      : E(t);
  }
  function O(t) {
    return t === 93 ? (e.consume(t), k) : E(t);
  }
  function k(t) {
    return t === 62
      ? (e.consume(t), se)
      : t === 45 && i === 2
        ? (e.consume(t), k)
        : E(t);
  }
  function se(t) {
    return t === null || W(t)
      ? (e.exit(`htmlFlowData`), ce(t))
      : (e.consume(t), se);
  }
  function ce(n) {
    return (e.exit(`htmlFlow`), t(n));
  }
}
function Ku(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return W(t)
      ? (e.enter(`lineEnding`), e.consume(t), e.exit(`lineEnding`), a)
      : n(t);
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e);
  }
}
function qu(e, t, n) {
  return r;
  function r(r) {
    return (
      e.enter(`lineEnding`),
      e.consume(r),
      e.exit(`lineEnding`),
      e.attempt(Xl, t, n)
    );
  }
}
var Ju = { name: `htmlText`, tokenize: Yu };
function Yu(e, t, n) {
  let r = this,
    i,
    a,
    o;
  return s;
  function s(t) {
    return (e.enter(`htmlText`), e.enter(`htmlTextData`), e.consume(t), c);
  }
  function c(t) {
    return t === 33
      ? (e.consume(t), l)
      : t === 47
        ? (e.consume(t), x)
        : t === 63
          ? (e.consume(t), y)
          : Ol(t)
            ? (e.consume(t), C)
            : n(t);
  }
  function l(t) {
    return t === 45
      ? (e.consume(t), u)
      : t === 91
        ? (e.consume(t), (a = 0), m)
        : Ol(t)
          ? (e.consume(t), v)
          : n(t);
  }
  function u(t) {
    return t === 45 ? (e.consume(t), p) : n(t);
  }
  function d(t) {
    return t === null
      ? n(t)
      : t === 45
        ? (e.consume(t), f)
        : W(t)
          ? ((o = d), oe(t))
          : (e.consume(t), d);
  }
  function f(t) {
    return t === 45 ? (e.consume(t), p) : d(t);
  }
  function p(e) {
    return e === 62 ? ae(e) : e === 45 ? f(e) : d(e);
  }
  function m(t) {
    return t === `CDATA[`.charCodeAt(a++)
      ? (e.consume(t), a === 6 ? h : m)
      : n(t);
  }
  function h(t) {
    return t === null
      ? n(t)
      : t === 93
        ? (e.consume(t), g)
        : W(t)
          ? ((o = h), oe(t))
          : (e.consume(t), h);
  }
  function g(t) {
    return t === 93 ? (e.consume(t), _) : h(t);
  }
  function _(t) {
    return t === 62 ? ae(t) : t === 93 ? (e.consume(t), _) : h(t);
  }
  function v(t) {
    return t === null || t === 62
      ? ae(t)
      : W(t)
        ? ((o = v), oe(t))
        : (e.consume(t), v);
  }
  function y(t) {
    return t === null
      ? n(t)
      : t === 63
        ? (e.consume(t), b)
        : W(t)
          ? ((o = y), oe(t))
          : (e.consume(t), y);
  }
  function b(e) {
    return e === 62 ? ae(e) : y(e);
  }
  function x(t) {
    return Ol(t) ? (e.consume(t), ee) : n(t);
  }
  function ee(t) {
    return t === 45 || kl(t) ? (e.consume(t), ee) : S(t);
  }
  function S(t) {
    return W(t) ? ((o = S), oe(t)) : G(t) ? (e.consume(t), S) : ae(t);
  }
  function C(t) {
    return t === 45 || kl(t)
      ? (e.consume(t), C)
      : t === 47 || t === 62 || Fl(t)
        ? w(t)
        : n(t);
  }
  function w(t) {
    return t === 47
      ? (e.consume(t), ae)
      : t === 58 || t === 95 || Ol(t)
        ? (e.consume(t), T)
        : W(t)
          ? ((o = w), oe(t))
          : G(t)
            ? (e.consume(t), w)
            : ae(t);
  }
  function T(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || kl(t)
      ? (e.consume(t), T)
      : te(t);
  }
  function te(t) {
    return t === 61
      ? (e.consume(t), E)
      : W(t)
        ? ((o = te), oe(t))
        : G(t)
          ? (e.consume(t), te)
          : w(t);
  }
  function E(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
        ? (e.consume(t), (i = t), ne)
        : W(t)
          ? ((o = E), oe(t))
          : G(t)
            ? (e.consume(t), E)
            : (e.consume(t), re);
  }
  function ne(t) {
    return t === i
      ? (e.consume(t), (i = void 0), ie)
      : t === null
        ? n(t)
        : W(t)
          ? ((o = ne), oe(t))
          : (e.consume(t), ne);
  }
  function re(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 60 ||
      t === 61 ||
      t === 96
      ? n(t)
      : t === 47 || t === 62 || Fl(t)
        ? w(t)
        : (e.consume(t), re);
  }
  function ie(e) {
    return e === 47 || e === 62 || Fl(e) ? w(e) : n(e);
  }
  function ae(r) {
    return r === 62
      ? (e.consume(r), e.exit(`htmlTextData`), e.exit(`htmlText`), t)
      : n(r);
  }
  function oe(t) {
    return (
      e.exit(`htmlTextData`),
      e.enter(`lineEnding`),
      e.consume(t),
      e.exit(`lineEnding`),
      D
    );
  }
  function D(t) {
    return G(t)
      ? Y(
          e,
          O,
          `linePrefix`,
          r.parser.constructs.disable.null.includes(`codeIndented`)
            ? void 0
            : 4,
        )(t)
      : O(t);
  }
  function O(t) {
    return (e.enter(`htmlTextData`), o(t));
  }
}
var Xu = { name: `labelEnd`, resolveAll: ed, resolveTo: td, tokenize: nd },
  Zu = { tokenize: rd },
  Qu = { tokenize: id },
  $u = { tokenize: ad };
function ed(e) {
  let t = -1,
    n = [];
  for (; ++t < e.length; ) {
    let r = e[t][1];
    if (
      (n.push(e[t]),
      r.type === `labelImage` ||
        r.type === `labelLink` ||
        r.type === `labelEnd`)
    ) {
      let e = r.type === `labelImage` ? 4 : 2;
      ((r.type = `data`), (t += e));
    }
  }
  return (e.length !== n.length && bl(e, 0, e.length, n), e);
}
function td(e, t) {
  let n = e.length,
    r = 0,
    i,
    a,
    o,
    s;
  for (; n--; )
    if (((i = e[n][1]), a)) {
      if (i.type === `link` || (i.type === `labelLink` && i._inactive)) break;
      e[n][0] === `enter` && i.type === `labelLink` && (i._inactive = !0);
    } else if (o) {
      if (
        e[n][0] === `enter` &&
        (i.type === `labelImage` || i.type === `labelLink`) &&
        !i._balanced &&
        ((a = n), i.type !== `labelLink`)
      ) {
        r = 2;
        break;
      }
    } else i.type === `labelEnd` && (o = n);
  let c = {
      type: e[a][1].type === `labelLink` ? `link` : `image`,
      start: { ...e[a][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    l = { type: `label`, start: { ...e[a][1].start }, end: { ...e[o][1].end } },
    u = {
      type: `labelText`,
      start: { ...e[a + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    };
  return (
    (s = [
      [`enter`, c, t],
      [`enter`, l, t],
    ]),
    (s = xl(s, e.slice(a + 1, a + r + 3))),
    (s = xl(s, [[`enter`, u, t]])),
    (s = xl(
      s,
      Ul(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t),
    )),
    (s = xl(s, [[`exit`, u, t], e[o - 2], e[o - 1], [`exit`, l, t]])),
    (s = xl(s, e.slice(o + 1))),
    (s = xl(s, [[`exit`, c, t]])),
    bl(e, a, e.length, s),
    e
  );
}
function nd(e, t, n) {
  let r = this,
    i = r.events.length,
    a,
    o;
  for (; i--; )
    if (
      (r.events[i][1].type === `labelImage` ||
        r.events[i][1].type === `labelLink`) &&
      !r.events[i][1]._balanced
    ) {
      a = r.events[i][1];
      break;
    }
  return s;
  function s(t) {
    return a
      ? a._inactive
        ? d(t)
        : ((o = r.parser.defined.includes(
            Dl(r.sliceSerialize({ start: a.end, end: r.now() })),
          )),
          e.enter(`labelEnd`),
          e.enter(`labelMarker`),
          e.consume(t),
          e.exit(`labelMarker`),
          e.exit(`labelEnd`),
          c)
      : n(t);
  }
  function c(t) {
    return t === 40
      ? e.attempt(Zu, u, o ? u : d)(t)
      : t === 91
        ? e.attempt(Qu, u, o ? l : d)(t)
        : o
          ? u(t)
          : d(t);
  }
  function l(t) {
    return e.attempt($u, u, d)(t);
  }
  function u(e) {
    return t(e);
  }
  function d(e) {
    return ((a._balanced = !0), n(e));
  }
}
function rd(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`resource`),
      e.enter(`resourceMarker`),
      e.consume(t),
      e.exit(`resourceMarker`),
      i
    );
  }
  function i(t) {
    return Fl(t) ? Au(e, a)(t) : a(t);
  }
  function a(t) {
    return t === 41
      ? u(t)
      : Du(
          e,
          o,
          s,
          `resourceDestination`,
          `resourceDestinationLiteral`,
          `resourceDestinationLiteralMarker`,
          `resourceDestinationRaw`,
          `resourceDestinationString`,
          32,
        )(t);
  }
  function o(t) {
    return Fl(t) ? Au(e, c)(t) : u(t);
  }
  function s(e) {
    return n(e);
  }
  function c(t) {
    return t === 34 || t === 39 || t === 40
      ? ku(
          e,
          l,
          n,
          `resourceTitle`,
          `resourceTitleMarker`,
          `resourceTitleString`,
        )(t)
      : u(t);
  }
  function l(t) {
    return Fl(t) ? Au(e, u)(t) : u(t);
  }
  function u(r) {
    return r === 41
      ? (e.enter(`resourceMarker`),
        e.consume(r),
        e.exit(`resourceMarker`),
        e.exit(`resource`),
        t)
      : n(r);
  }
}
function id(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return Ou.call(
      r,
      e,
      a,
      o,
      `reference`,
      `referenceMarker`,
      `referenceString`,
    )(t);
  }
  function a(e) {
    return r.parser.defined.includes(
      Dl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? t(e)
      : n(e);
  }
  function o(e) {
    return n(e);
  }
}
function ad(e, t, n) {
  return r;
  function r(t) {
    return (
      e.enter(`reference`),
      e.enter(`referenceMarker`),
      e.consume(t),
      e.exit(`referenceMarker`),
      i
    );
  }
  function i(r) {
    return r === 93
      ? (e.enter(`referenceMarker`),
        e.consume(r),
        e.exit(`referenceMarker`),
        e.exit(`reference`),
        t)
      : n(r);
  }
}
var od = { name: `labelStartImage`, resolveAll: Xu.resolveAll, tokenize: sd };
function sd(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.enter(`labelImage`),
      e.enter(`labelImageMarker`),
      e.consume(t),
      e.exit(`labelImageMarker`),
      a
    );
  }
  function a(t) {
    return t === 91
      ? (e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelImage`),
        o)
      : n(t);
  }
  function o(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs
      ? n(e)
      : t(e);
  }
}
var cd = { name: `labelStartLink`, resolveAll: Xu.resolveAll, tokenize: ld };
function ld(e, t, n) {
  let r = this;
  return i;
  function i(t) {
    return (
      e.enter(`labelLink`),
      e.enter(`labelMarker`),
      e.consume(t),
      e.exit(`labelMarker`),
      e.exit(`labelLink`),
      a
    );
  }
  function a(e) {
    return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs
      ? n(e)
      : t(e);
  }
}
var ud = { name: `lineEnding`, tokenize: dd };
function dd(e, t) {
  return n;
  function n(n) {
    return (
      e.enter(`lineEnding`),
      e.consume(n),
      e.exit(`lineEnding`),
      Y(e, t, `linePrefix`)
    );
  }
}
var fd = { name: `thematicBreak`, tokenize: pd };
function pd(e, t, n) {
  let r = 0,
    i;
  return a;
  function a(t) {
    return (e.enter(`thematicBreak`), o(t));
  }
  function o(e) {
    return ((i = e), s(e));
  }
  function s(a) {
    return a === i
      ? (e.enter(`thematicBreakSequence`), c(a))
      : r >= 3 && (a === null || W(a))
        ? (e.exit(`thematicBreak`), t(a))
        : n(a);
  }
  function c(t) {
    return t === i
      ? (e.consume(t), r++, c)
      : (e.exit(`thematicBreakSequence`),
        G(t) ? Y(e, s, `whitespace`)(t) : s(t));
  }
}
var md = {
    continuation: { tokenize: Q },
    exit: yd,
    name: `list`,
    tokenize: _d,
  },
  hd = { partial: !0, tokenize: bd },
  gd = { partial: !0, tokenize: vd };
function _d(e, t, n) {
  let r = this,
    i = r.events[r.events.length - 1],
    a =
      i && i[1].type === `linePrefix`
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0;
  return s;
  function s(t) {
    let i =
      r.containerState.type ||
      (t === 42 || t === 43 || t === 45 ? `listUnordered` : `listOrdered`);
    if (
      i === `listUnordered`
        ? !r.containerState.marker || t === r.containerState.marker
        : Ml(t)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = i), e.enter(i, { _container: !0 })),
        i === `listUnordered`)
      )
        return (
          e.enter(`listItemPrefix`),
          t === 42 || t === 45 ? e.check(fd, n, l)(t) : l(t)
        );
      if (!r.interrupt || t === 49)
        return (e.enter(`listItemPrefix`), e.enter(`listItemValue`), c(t));
    }
    return n(t);
  }
  function c(t) {
    return Ml(t) && ++o < 10
      ? (e.consume(t), c)
      : (!r.interrupt || o < 2) &&
          (r.containerState.marker
            ? t === r.containerState.marker
            : t === 41 || t === 46)
        ? (e.exit(`listItemValue`), l(t))
        : n(t);
  }
  function l(t) {
    return (
      e.enter(`listItemMarker`),
      e.consume(t),
      e.exit(`listItemMarker`),
      (r.containerState.marker = r.containerState.marker || t),
      e.check(Xl, r.interrupt ? n : u, e.attempt(hd, f, d))
    );
  }
  function u(e) {
    return ((r.containerState.initialBlankLine = !0), a++, f(e));
  }
  function d(t) {
    return G(t)
      ? (e.enter(`listItemPrefixWhitespace`),
        e.consume(t),
        e.exit(`listItemPrefixWhitespace`),
        f)
      : n(t);
  }
  function f(n) {
    return (
      (r.containerState.size =
        a + r.sliceSerialize(e.exit(`listItemPrefix`), !0).length),
      t(n)
    );
  }
}
function Q(e, t, n) {
  let r = this;
  return ((r.containerState._closeFlow = void 0), e.check(Xl, i, a));
  function i(n) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      Y(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    );
  }
  function a(n) {
    return r.containerState.furtherBlankLines || !G(n)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(n))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(gd, t, o)(n));
  }
  function o(i) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      Y(
        e,
        e.attempt(md, t, n),
        `linePrefix`,
        r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4,
      )(i)
    );
  }
}
function vd(e, t, n) {
  let r = this;
  return Y(e, i, `listItemIndent`, r.containerState.size + 1);
  function i(e) {
    let i = r.events[r.events.length - 1];
    return i &&
      i[1].type === `listItemIndent` &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(e)
      : n(e);
  }
}
function yd(e) {
  e.exit(this.containerState.type);
}
function bd(e, t, n) {
  let r = this;
  return Y(
    e,
    i,
    `listItemPrefixWhitespace`,
    r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5,
  );
  function i(e) {
    let i = r.events[r.events.length - 1];
    return !G(e) && i && i[1].type === `listItemPrefixWhitespace` ? t(e) : n(e);
  }
}
var xd = { name: `setextUnderline`, resolveTo: Sd, tokenize: Cd };
function Sd(e, t) {
  let n = e.length,
    r,
    i,
    a;
  for (; n--; )
    if (e[n][0] === `enter`) {
      if (e[n][1].type === `content`) {
        r = n;
        break;
      }
      e[n][1].type === `paragraph` && (i = n);
    } else
      (e[n][1].type === `content` && e.splice(n, 1),
        !a && e[n][1].type === `definition` && (a = n));
  let o = {
    type: `setextHeading`,
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = `setextHeadingText`),
    a
      ? (e.splice(i, 0, [`enter`, o, t]),
        e.splice(a + 1, 0, [`exit`, e[r][1], t]),
        (e[r][1].end = { ...e[a][1].end }))
      : (e[r][1] = o),
    e.push([`exit`, o, t]),
    e
  );
}
function Cd(e, t, n) {
  let r = this,
    i;
  return a;
  function a(t) {
    let a = r.events.length,
      s;
    for (; a--; )
      if (
        r.events[a][1].type !== `lineEnding` &&
        r.events[a][1].type !== `linePrefix` &&
        r.events[a][1].type !== `content`
      ) {
        s = r.events[a][1].type === `paragraph`;
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || s)
      ? (e.enter(`setextHeadingLine`), (i = t), o(t))
      : n(t);
  }
  function o(t) {
    return (e.enter(`setextHeadingLineSequence`), s(t));
  }
  function s(t) {
    return t === i
      ? (e.consume(t), s)
      : (e.exit(`setextHeadingLineSequence`),
        G(t) ? Y(e, c, `lineSuffix`)(t) : c(t));
  }
  function c(r) {
    return r === null || W(r) ? (e.exit(`setextHeadingLine`), t(r)) : n(r);
  }
}
var wd = { tokenize: Td };
function Td(e) {
  let t = this,
    n = e.attempt(
      Xl,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        Y(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(Su, i)),
          `linePrefix`,
        ),
      ),
    );
  return n;
  function r(r) {
    if (r === null) {
      e.consume(r);
      return;
    }
    return (
      e.enter(`lineEndingBlank`),
      e.consume(r),
      e.exit(`lineEndingBlank`),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(r) {
    if (r === null) {
      e.consume(r);
      return;
    }
    return (
      e.enter(`lineEnding`),
      e.consume(r),
      e.exit(`lineEnding`),
      (t.currentConstruct = void 0),
      n
    );
  }
}
var Ed = { resolveAll: Ad() },
  Dd = kd(`string`),
  Od = kd(`text`);
function kd(e) {
  return { resolveAll: Ad(e === `text` ? $ : void 0), tokenize: t };
  function t(t) {
    let n = this,
      r = this.parser.constructs[e],
      i = t.attempt(r, a, o);
    return a;
    function a(e) {
      return c(e) ? i(e) : o(e);
    }
    function o(e) {
      if (e === null) {
        t.consume(e);
        return;
      }
      return (t.enter(`data`), t.consume(e), s);
    }
    function s(e) {
      return c(e) ? (t.exit(`data`), i(e)) : (t.consume(e), s);
    }
    function c(e) {
      if (e === null) return !0;
      let t = r[e],
        i = -1;
      if (t)
        for (; ++i < t.length; ) {
          let e = t[i];
          if (!e.previous || e.previous.call(n, n.previous)) return !0;
        }
      return !1;
    }
  }
}
function Ad(e) {
  return t;
  function t(t, n) {
    let r = -1,
      i;
    for (; ++r <= t.length; )
      i === void 0
        ? t[r] && t[r][1].type === `data` && ((i = r), r++)
        : (!t[r] || t[r][1].type !== `data`) &&
          (r !== i + 2 &&
            ((t[i][1].end = t[r - 1][1].end),
            t.splice(i + 2, r - i - 2),
            (r = i + 2)),
          (i = void 0));
    return e ? e(t, n) : t;
  }
}
function $(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === `lineEnding`) &&
      e[n - 1][1].type === `data`
    ) {
      let r = e[n - 1][1],
        i = t.sliceStream(r),
        a = i.length,
        o = -1,
        s = 0,
        c;
      for (; a--; ) {
        let e = i[a];
        if (typeof e == `string`) {
          for (o = e.length; e.charCodeAt(o - 1) === 32; ) (s++, o--);
          if (o) break;
          o = -1;
        } else if (e === -2) ((c = !0), s++);
        else if (e !== -1) {
          a++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
        let i = {
          type:
            n === e.length || c || s < 2 ? `lineSuffix` : `hardBreakTrailing`,
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
          },
          end: { ...r.end },
        };
        ((r.end = { ...i.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, i)
            : (e.splice(n, 0, [`enter`, i, t], [`exit`, i, t]), (n += 2)));
      }
      n++;
    }
  return e;
}
var jd = s({
    attentionMarkers: () => zd,
    contentInitial: () => Nd,
    disable: () => Bd,
    document: () => Md,
    flow: () => Fd,
    flowInitial: () => Pd,
    insideSpan: () => Rd,
    string: () => Id,
    text: () => Ld,
  }),
  Md = {
    42: md,
    43: md,
    45: md,
    48: md,
    49: md,
    50: md,
    51: md,
    52: md,
    53: md,
    54: md,
    55: md,
    56: md,
    57: md,
    62: Ql,
  },
  Nd = { 91: ju },
  Pd = { [-2]: uu, [-1]: uu, 32: uu },
  Fd = {
    35: Lu,
    42: fd,
    45: [xd, fd],
    60: Hu,
    61: xd,
    95: fd,
    96: su,
    126: su,
  },
  Id = { 38: iu, 92: nu },
  Ld = {
    [-5]: ud,
    [-4]: ud,
    [-3]: ud,
    33: od,
    38: iu,
    42: Wl,
    60: [Jl, Ju],
    91: cd,
    92: [Fu, nu],
    93: Xu,
    95: Wl,
    96: mu,
  },
  Rd = { null: [Wl, Ed] },
  zd = { null: [42, 95] },
  Bd = { null: [] };
function Vd(e, t, n) {
  let r = {
      _bufferIndex: -1,
      _index: 0,
      line: (n && n.line) || 1,
      column: (n && n.column) || 1,
      offset: (n && n.offset) || 0,
    },
    i = {},
    a = [],
    o = [],
    s = [],
    c = {
      attempt: S(x),
      check: S(ee),
      consume: v,
      enter: y,
      exit: b,
      interrupt: S(ee, { interrupt: !0 }),
    },
    l = {
      code: null,
      containerState: {},
      defineSkip: h,
      events: [],
      now: m,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: p,
      write: d,
    },
    u = t.tokenize.call(l, c);
  return (t.resolveAll && a.push(t), l);
  function d(e) {
    return (
      (o = xl(o, e)),
      g(),
      o[o.length - 1] === null
        ? (C(t, 0), (l.events = Ul(a, l.events, l)), l.events)
        : []
    );
  }
  function f(e, t) {
    return Ud(p(e), t);
  }
  function p(e) {
    return Hd(o, e);
  }
  function m() {
    let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
    return { _bufferIndex: e, _index: t, line: n, column: i, offset: a };
  }
  function h(e) {
    ((i[e.line] = e.column), T());
  }
  function g() {
    let e;
    for (; r._index < o.length; ) {
      let t = o[r._index];
      if (typeof t == `string`)
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < t.length;
        )
          _(t.charCodeAt(r._bufferIndex));
      else _(t);
    }
  }
  function _(e) {
    u = u(e);
  }
  function v(e) {
    (W(e)
      ? (r.line++, (r.column = 1), (r.offset += e === -3 ? 2 : 1), T())
      : e !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (l.previous = e));
  }
  function y(e, t) {
    let n = t || {};
    return (
      (n.type = e),
      (n.start = m()),
      l.events.push([`enter`, n, l]),
      s.push(n),
      n
    );
  }
  function b(e) {
    let t = s.pop();
    return ((t.end = m()), l.events.push([`exit`, t, l]), t);
  }
  function x(e, t) {
    C(e, t.from);
  }
  function ee(e, t) {
    t.restore();
  }
  function S(e, t) {
    return n;
    function n(n, r, i) {
      let a, o, s, u;
      return Array.isArray(n) ? f(n) : `tokenize` in n ? f([n]) : d(n);
      function d(e) {
        return t;
        function t(t) {
          let n = t !== null && e[t],
            r = t !== null && e.null;
          return f([
            ...(Array.isArray(n) ? n : n ? [n] : []),
            ...(Array.isArray(r) ? r : r ? [r] : []),
          ])(t);
        }
      }
      function f(e) {
        return ((a = e), (o = 0), e.length === 0 ? i : p(e[o]));
      }
      function p(e) {
        return n;
        function n(n) {
          return (
            (u = w()),
            (s = e),
            e.partial || (l.currentConstruct = e),
            e.name && l.parser.constructs.disable.null.includes(e.name)
              ? h(n)
              : e.tokenize.call(
                  t ? Object.assign(Object.create(l), t) : l,
                  c,
                  m,
                  h,
                )(n)
          );
        }
      }
      function m(t) {
        return (e(s, u), r);
      }
      function h(e) {
        return (u.restore(), ++o < a.length ? p(a[o]) : i);
      }
    }
  }
  function C(e, t) {
    (e.resolveAll && !a.includes(e) && a.push(e),
      e.resolve &&
        bl(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
      e.resolveTo && (l.events = e.resolveTo(l.events, l)));
  }
  function w() {
    let e = m(),
      t = l.previous,
      n = l.currentConstruct,
      i = l.events.length,
      a = Array.from(s);
    return { from: i, restore: o };
    function o() {
      ((r = e),
        (l.previous = t),
        (l.currentConstruct = n),
        (l.events.length = i),
        (s = a),
        T());
    }
  }
  function T() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function Hd(e, t) {
  let n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    a = t.end._bufferIndex,
    o;
  if (n === i) o = [e[n].slice(r, a)];
  else {
    if (((o = e.slice(n, i)), r > -1)) {
      let e = o[0];
      typeof e == `string` ? (o[0] = e.slice(r)) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function Ud(e, t) {
  let n = -1,
    r = [],
    i;
  for (; ++n < e.length; ) {
    let a = e[n],
      o;
    if (typeof a == `string`) o = a;
    else
      switch (a) {
        case -5:
          o = `\r`;
          break;
        case -4:
          o = `
`;
          break;
        case -3:
          o = `\r
`;
          break;
        case -2:
          o = t ? ` ` : `	`;
          break;
        case -1:
          if (!t && i) continue;
          o = ` `;
          break;
        default:
          o = String.fromCharCode(a);
      }
    ((i = a === -2), r.push(o));
  }
  return r.join(``);
}
function Wd(e) {
  let t = {
    constructs: Cl([jd, ...((e || {}).extensions || [])]),
    content: n(X),
    defined: [],
    document: n(Rl),
    flow: n(wd),
    lazy: {},
    string: n(Dd),
    text: n(Od),
  };
  return t;
  function n(e) {
    return n;
    function n(n) {
      return Vd(t, e, n);
    }
  }
}
function Gd(e) {
  for (; !bu(e); );
  return e;
}
var Kd = /[\0\t\n\r]/g;
function qd() {
  let e = 1,
    t = ``,
    n = !0,
    r;
  return i;
  function i(i, a, o) {
    let s = [],
      c,
      l,
      u,
      d,
      f;
    for (
      i =
        t +
        (typeof i == `string`
          ? i.toString()
          : new TextDecoder(a || void 0).decode(i)),
        u = 0,
        t = ``,
        n &&= (i.charCodeAt(0) === 65279 && u++, void 0);
      u < i.length;
    ) {
      if (
        ((Kd.lastIndex = u),
        (c = Kd.exec(i)),
        (d = c && c.index !== void 0 ? c.index : i.length),
        (f = i.charCodeAt(d)),
        !c)
      ) {
        t = i.slice(u);
        break;
      }
      if (f === 10 && u === d && r) (s.push(-3), (r = void 0));
      else
        switch (
          ((r &&= (s.push(-5), void 0)),
          u < d && (s.push(i.slice(u, d)), (e += d - u)),
          f)
        ) {
          case 0:
            (s.push(65533), e++);
            break;
          case 9:
            for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l; ) s.push(-1);
            break;
          case 10:
            (s.push(-4), (e = 1));
            break;
          default:
            ((r = !0), (e = 1));
        }
      u = d + 1;
    }
    return (o && (r && s.push(-5), t && s.push(t), s.push(null)), s);
  }
}
var Jd = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Yd(e) {
  return e.replace(Jd, Xd);
}
function Xd(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    let e = n.charCodeAt(1),
      t = e === 120 || e === 88;
    return El(n.slice(t ? 2 : 1), t ? 16 : 10);
  }
  return yl(n) || e;
}
var Zd = {}.hasOwnProperty;
function Qd(e, t, n) {
  return (
    t && typeof t == `object` && ((n = t), (t = void 0)),
    $d(n)(
      Gd(
        Wd(n)
          .document()
          .write(qd()(e, t, !0)),
      ),
    )
  );
}
function $d(e) {
  let t = {
    transforms: [],
    canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
    enter: {
      autolink: a(we),
      autolinkProtocol: w,
      autolinkEmail: w,
      atxHeading: a(be),
      blockQuote: a(he),
      characterEscape: w,
      characterReference: w,
      codeFenced: a(ge),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(ge, o),
      codeText: a(_e, o),
      codeTextData: w,
      data: w,
      codeFlowValue: w,
      definition: a(ve),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(ye),
      hardBreakEscape: a(xe),
      hardBreakTrailing: a(xe),
      htmlFlow: a(Se, o),
      htmlFlowData: w,
      htmlText: a(Se, o),
      htmlTextData: w,
      image: a(Ce),
      label: o,
      link: a(we),
      listItem: a(Ee),
      listItemValue: f,
      listOrdered: a(Te, d),
      listUnordered: a(Te),
      paragraph: a(De),
      reference: le,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(be),
      strong: a(Oe),
      thematicBreak: a(Ae),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: x,
      autolink: c(),
      autolinkEmail: me,
      autolinkProtocol: pe,
      blockQuote: c(),
      characterEscapeValue: T,
      characterReferenceMarkerHexadecimal: A,
      characterReferenceMarkerNumeric: A,
      characterReferenceValue: de,
      characterReference: fe,
      codeFenced: c(g),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: T,
      codeIndented: c(_),
      codeText: c(ie),
      codeTextData: T,
      data: T,
      definition: c(),
      definitionDestinationString: b,
      definitionLabelString: v,
      definitionTitleString: y,
      emphasis: c(),
      hardBreakEscape: c(E),
      hardBreakTrailing: c(E),
      htmlFlow: c(ne),
      htmlFlowData: T,
      htmlText: c(re),
      htmlTextData: T,
      image: c(oe),
      label: O,
      labelText: D,
      lineEnding: te,
      link: c(ae),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ue,
      resourceDestinationString: k,
      resourceTitleString: se,
      resource: ce,
      setextHeading: c(C),
      setextHeadingLineSequence: S,
      setextHeadingText: ee,
      strong: c(),
      thematicBreak: c(),
    },
  };
  tf(t, (e || {}).mdastExtensions || []);
  let n = {};
  return r;
  function r(e) {
    let r = { type: `root`, children: [] },
      a = {
        stack: [r],
        tokenStack: [],
        config: t,
        enter: s,
        exit: l,
        buffer: o,
        resume: u,
        data: n,
      },
      c = [],
      d = -1;
    for (; ++d < e.length; )
      (e[d][1].type === `listOrdered` || e[d][1].type === `listUnordered`) &&
        (e[d][0] === `enter` ? c.push(d) : (d = i(e, c.pop(), d)));
    for (d = -1; ++d < e.length; ) {
      let n = t[e[d][0]];
      Zd.call(n, e[d][1].type) &&
        n[e[d][1].type].call(
          Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a),
          e[d][1],
        );
    }
    if (a.tokenStack.length > 0) {
      let e = a.tokenStack[a.tokenStack.length - 1];
      (e[1] || rf).call(a, void 0, e[0]);
    }
    for (
      r.position = {
        start: ef(
          e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: ef(
          e.length > 0
            ? e[e.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        d = -1;
      ++d < t.transforms.length;
    )
      r = t.transforms[d](r) || r;
    return r;
  }
  function i(e, t, n) {
    let r = t - 1,
      i = -1,
      a = !1,
      o,
      s,
      c,
      l;
    for (; ++r <= n; ) {
      let t = e[r];
      switch (t[1].type) {
        case `listUnordered`:
        case `listOrdered`:
        case `blockQuote`:
          (t[0] === `enter` ? i++ : i--, (l = void 0));
          break;
        case `lineEndingBlank`:
          t[0] === `enter` && (o && !l && !i && !c && (c = r), (l = void 0));
          break;
        case `linePrefix`:
        case `listItemValue`:
        case `listItemMarker`:
        case `listItemPrefix`:
        case `listItemPrefixWhitespace`:
          break;
        default:
          l = void 0;
      }
      if (
        (!i && t[0] === `enter` && t[1].type === `listItemPrefix`) ||
        (i === -1 &&
          t[0] === `exit` &&
          (t[1].type === `listUnordered` || t[1].type === `listOrdered`))
      ) {
        if (o) {
          let i = r;
          for (s = void 0; i--; ) {
            let t = e[i];
            if (t[1].type === `lineEnding` || t[1].type === `lineEndingBlank`) {
              if (t[0] === `exit`) continue;
              (s && ((e[s][1].type = `lineEndingBlank`), (a = !0)),
                (t[1].type = `lineEnding`),
                (s = i));
            } else if (
              !(
                t[1].type === `linePrefix` ||
                t[1].type === `blockQuotePrefix` ||
                t[1].type === `blockQuotePrefixWhitespace` ||
                t[1].type === `blockQuoteMarker` ||
                t[1].type === `listItemIndent`
              )
            )
              break;
          }
          (c && (!s || c < s) && (o._spread = !0),
            (o.end = Object.assign({}, s ? e[s][1].start : t[1].end)),
            e.splice(s || r, 0, [`exit`, o, t[2]]),
            r++,
            n++);
        }
        if (t[1].type === `listItemPrefix`) {
          let i = {
            type: `listItem`,
            _spread: !1,
            start: Object.assign({}, t[1].start),
            end: void 0,
          };
          ((o = i),
            e.splice(r, 0, [`enter`, i, t[2]]),
            r++,
            n++,
            (c = void 0),
            (l = !0));
        }
      }
    }
    return ((e[t][1]._spread = a), n);
  }
  function a(e, t) {
    return n;
    function n(n) {
      (s.call(this, e(n), n), t && t.call(this, n));
    }
  }
  function o() {
    this.stack.push({ type: `fragment`, children: [] });
  }
  function s(e, t, n) {
    (this.stack[this.stack.length - 1].children.push(e),
      this.stack.push(e),
      this.tokenStack.push([t, n || void 0]),
      (e.position = { start: ef(t.start), end: void 0 }));
  }
  function c(e) {
    return t;
    function t(t) {
      (e && e.call(this, t), l.call(this, t));
    }
  }
  function l(e, t) {
    let n = this.stack.pop(),
      r = this.tokenStack.pop();
    if (r)
      r[0].type !== e.type &&
        (t ? t.call(this, e, r[0]) : (r[1] || rf).call(this, e, r[0]));
    else
      throw Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Nc({ start: e.start, end: e.end }) +
          `): it’s not open`,
      );
    n.position.end = ef(e.end);
  }
  function u() {
    return ml(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(e) {
    if (this.data.expectingFirstListItemValue) {
      let t = this.stack[this.stack.length - 2];
      ((t.start = Number.parseInt(this.sliceSerialize(e), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function p() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.lang = e;
  }
  function m() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.meta = e;
  }
  function h() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function g() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    ((t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ``)),
      (this.data.flowCodeInside = void 0));
  }
  function _() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e.replace(/(\r?\n|\r)$/g, ``);
  }
  function v(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((n.label = t), (n.identifier = Dl(this.sliceSerialize(e)).toLowerCase()));
  }
  function y() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function b() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function x(e) {
    let t = this.stack[this.stack.length - 1];
    t.depth ||= this.sliceSerialize(e).length;
  }
  function ee() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function S(e) {
    let t = this.stack[this.stack.length - 1];
    t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function w(e) {
    let t = this.stack[this.stack.length - 1].children,
      n = t[t.length - 1];
    ((!n || n.type !== `text`) &&
      ((n = ke()),
      (n.position = { start: ef(e.start), end: void 0 }),
      t.push(n)),
      this.stack.push(n));
  }
  function T(e) {
    let t = this.stack.pop();
    ((t.value += this.sliceSerialize(e)), (t.position.end = ef(e.end)));
  }
  function te(e) {
    let n = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      let t = n.children[n.children.length - 1];
      ((t.position.end = ef(e.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(n.type) &&
      (w.call(this, e), T.call(this, e));
  }
  function E() {
    this.data.atHardBreak = !0;
  }
  function ne() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function re() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function ie() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.value = e;
  }
  function ae() {
    let e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`;
      ((e.type += `Reference`),
        (e.referenceType = t),
        delete e.url,
        delete e.title);
    } else (delete e.identifier, delete e.label);
    this.data.referenceType = void 0;
  }
  function oe() {
    let e = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      let t = this.data.referenceType || `shortcut`;
      ((e.type += `Reference`),
        (e.referenceType = t),
        delete e.url,
        delete e.title);
    } else (delete e.identifier, delete e.label);
    this.data.referenceType = void 0;
  }
  function D(e) {
    let t = this.sliceSerialize(e),
      n = this.stack[this.stack.length - 2];
    ((n.label = Yd(t)), (n.identifier = Dl(t).toLowerCase()));
  }
  function O() {
    let e = this.stack[this.stack.length - 1],
      t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((this.data.inReference = !0),
      n.type === `link` ? (n.children = e.children) : (n.alt = t));
  }
  function k() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.url = e;
  }
  function se() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1];
    t.title = e;
  }
  function ce() {
    this.data.inReference = void 0;
  }
  function le() {
    this.data.referenceType = `collapsed`;
  }
  function ue(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    ((n.label = t),
      (n.identifier = Dl(this.sliceSerialize(e)).toLowerCase()),
      (this.data.referenceType = `full`));
  }
  function A(e) {
    this.data.characterReferenceType = e.type;
  }
  function de(e) {
    let t = this.sliceSerialize(e),
      n = this.data.characterReferenceType,
      r;
    n
      ? ((r = El(t, n === `characterReferenceMarkerNumeric` ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (r = yl(t));
    let i = this.stack[this.stack.length - 1];
    i.value += r;
  }
  function fe(e) {
    let t = this.stack.pop();
    t.position.end = ef(e.end);
  }
  function pe(e) {
    T.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = this.sliceSerialize(e);
  }
  function me(e) {
    T.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.url = `mailto:` + this.sliceSerialize(e);
  }
  function he() {
    return { type: `blockquote`, children: [] };
  }
  function ge() {
    return { type: `code`, lang: null, meta: null, value: `` };
  }
  function _e() {
    return { type: `inlineCode`, value: `` };
  }
  function ve() {
    return {
      type: `definition`,
      identifier: ``,
      label: null,
      title: null,
      url: ``,
    };
  }
  function ye() {
    return { type: `emphasis`, children: [] };
  }
  function be() {
    return { type: `heading`, depth: 0, children: [] };
  }
  function xe() {
    return { type: `break` };
  }
  function Se() {
    return { type: `html`, value: `` };
  }
  function Ce() {
    return { type: `image`, title: null, url: ``, alt: null };
  }
  function we() {
    return { type: `link`, title: null, url: ``, children: [] };
  }
  function Te(e) {
    return {
      type: `list`,
      ordered: e.type === `listOrdered`,
      start: null,
      spread: e._spread,
      children: [],
    };
  }
  function Ee(e) {
    return { type: `listItem`, spread: e._spread, checked: null, children: [] };
  }
  function De() {
    return { type: `paragraph`, children: [] };
  }
  function Oe() {
    return { type: `strong`, children: [] };
  }
  function ke() {
    return { type: `text`, value: `` };
  }
  function Ae() {
    return { type: `thematicBreak` };
  }
}
function ef(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function tf(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    let r = t[n];
    Array.isArray(r) ? tf(e, r) : nf(e, r);
  }
}
function nf(e, t) {
  let n;
  for (n in t)
    if (Zd.call(t, n))
      switch (n) {
        case `canContainEols`: {
          let r = t[n];
          r && e[n].push(...r);
          break;
        }
        case `transforms`: {
          let r = t[n];
          r && e[n].push(...r);
          break;
        }
        case `enter`:
        case `exit`: {
          let r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function rf(e, t) {
  throw Error(
    e
      ? "Cannot close `" +
          e.type +
          "` (" +
          Nc({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Nc({ start: t.start, end: t.end }) +
          `) is open`
      : "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Nc({ start: t.start, end: t.end }) +
          `) is still open`,
  );
}
function af(e) {
  let t = this;
  t.parser = n;
  function n(n) {
    return Qd(n, {
      ...t.data(`settings`),
      ...e,
      extensions: t.data(`micromarkExtensions`) || [],
      mdastExtensions: t.data(`fromMarkdownExtensions`) || [],
    });
  }
}
function of(e, t) {
  let n = {
    type: `element`,
    tagName: `blockquote`,
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function sf(e, t) {
  let n = { type: `element`, tagName: `br`, properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: `text`,
        value: `
`,
      },
    ]
  );
}
function cf(e, t) {
  let n = t.value
      ? t.value +
        `
`
      : ``,
    r = {},
    i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = [`language-` + i[0]]);
  let a = {
    type: `element`,
    tagName: `code`,
    properties: r,
    children: [{ type: `text`, value: n }],
  };
  return (
    t.meta && (a.data = { meta: t.meta }),
    e.patch(t, a),
    (a = e.applyData(t, a)),
    (a = { type: `element`, tagName: `pre`, properties: {}, children: [a] }),
    e.patch(t, a),
    a
  );
}
function lf(e, t) {
  let n = {
    type: `element`,
    tagName: `del`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function uf(e, t) {
  let n = {
    type: `element`,
    tagName: `em`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function df(e, t) {
  let n =
      typeof e.options.clobberPrefix == `string`
        ? e.options.clobberPrefix
        : `user-content-`,
    r = String(t.identifier).toUpperCase(),
    i = J(r.toLowerCase()),
    a = e.footnoteOrder.indexOf(r),
    o,
    s = e.footnoteCounts.get(r);
  (s === void 0
    ? ((s = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = a + 1),
    (s += 1),
    e.footnoteCounts.set(r, s));
  let c = {
    type: `element`,
    tagName: `a`,
    properties: {
      href: `#` + n + `fn-` + i,
      id: n + `fnref-` + i + (s > 1 ? `-` + s : ``),
      dataFootnoteRef: !0,
      ariaDescribedBy: [`footnote-label`],
    },
    children: [{ type: `text`, value: String(o) }],
  };
  e.patch(t, c);
  let l = { type: `element`, tagName: `sup`, properties: {}, children: [c] };
  return (e.patch(t, l), e.applyData(t, l));
}
function ff(e, t) {
  let n = {
    type: `element`,
    tagName: `h` + t.depth,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function pf(e, t) {
  if (e.options.allowDangerousHtml) {
    let n = { type: `raw`, value: t.value };
    return (e.patch(t, n), e.applyData(t, n));
  }
}
function mf(e, t) {
  let n = t.referenceType,
    r = `]`;
  if (
    (n === `collapsed`
      ? (r += `[]`)
      : n === `full` && (r += `[` + (t.label || t.identifier) + `]`),
    t.type === `imageReference`)
  )
    return [{ type: `text`, value: `![` + t.alt + r }];
  let i = e.all(t),
    a = i[0];
  a && a.type === `text`
    ? (a.value = `[` + a.value)
    : i.unshift({ type: `text`, value: `[` });
  let o = i[i.length - 1];
  return (
    o && o.type === `text`
      ? (o.value += r)
      : i.push({ type: `text`, value: r }),
    i
  );
}
function hf(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return mf(e, t);
  let i = { src: J(r.url || ``), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  let a = { type: `element`, tagName: `img`, properties: i, children: [] };
  return (e.patch(t, a), e.applyData(t, a));
}
function gf(e, t) {
  let n = { src: J(t.url) };
  (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title));
  let r = { type: `element`, tagName: `img`, properties: n, children: [] };
  return (e.patch(t, r), e.applyData(t, r));
}
function _f(e, t) {
  let n = { type: `text`, value: t.value.replace(/\r?\n|\r/g, ` `) };
  e.patch(t, n);
  let r = { type: `element`, tagName: `code`, properties: {}, children: [n] };
  return (e.patch(t, r), e.applyData(t, r));
}
function vf(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return mf(e, t);
  let i = { href: J(r.url || ``) };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  let a = { type: `element`, tagName: `a`, properties: i, children: e.all(t) };
  return (e.patch(t, a), e.applyData(t, a));
}
function yf(e, t) {
  let n = { href: J(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  let r = { type: `element`, tagName: `a`, properties: n, children: e.all(t) };
  return (e.patch(t, r), e.applyData(t, r));
}
function bf(e, t, n) {
  let r = e.all(t),
    i = n ? xf(n) : Sf(t),
    a = {},
    o = [];
  if (typeof t.checked == `boolean`) {
    let e = r[0],
      n;
    (e && e.type === `element` && e.tagName === `p`
      ? (n = e)
      : ((n = { type: `element`, tagName: `p`, properties: {}, children: [] }),
        r.unshift(n)),
      n.children.length > 0 && n.children.unshift({ type: `text`, value: ` ` }),
      n.children.unshift({
        type: `element`,
        tagName: `input`,
        properties: { type: `checkbox`, checked: t.checked, disabled: !0 },
        children: [],
      }),
      (a.className = [`task-list-item`]));
  }
  let s = -1;
  for (; ++s < r.length; ) {
    let e = r[s];
    ((i || s !== 0 || e.type !== `element` || e.tagName !== `p`) &&
      o.push({
        type: `text`,
        value: `
`,
      }),
      e.type === `element` && e.tagName === `p` && !i
        ? o.push(...e.children)
        : o.push(e));
  }
  let c = r[r.length - 1];
  c &&
    (i || c.type !== `element` || c.tagName !== `p`) &&
    o.push({
      type: `text`,
      value: `
`,
    });
  let l = { type: `element`, tagName: `li`, properties: a, children: o };
  return (e.patch(t, l), e.applyData(t, l));
}
function xf(e) {
  let t = !1;
  if (e.type === `list`) {
    t = e.spread || !1;
    let n = e.children,
      r = -1;
    for (; !t && ++r < n.length; ) t = Sf(n[r]);
  }
  return t;
}
function Sf(e) {
  return e.spread ?? e.children.length > 1;
}
function Cf(e, t) {
  let n = {},
    r = e.all(t),
    i = -1;
  for (
    typeof t.start == `number` && t.start !== 1 && (n.start = t.start);
    ++i < r.length;
  ) {
    let e = r[i];
    if (
      e.type === `element` &&
      e.tagName === `li` &&
      e.properties &&
      Array.isArray(e.properties.className) &&
      e.properties.className.includes(`task-list-item`)
    ) {
      n.className = [`contains-task-list`];
      break;
    }
  }
  let a = {
    type: `element`,
    tagName: t.ordered ? `ol` : `ul`,
    properties: n,
    children: e.wrap(r, !0),
  };
  return (e.patch(t, a), e.applyData(t, a));
}
function wf(e, t) {
  let n = { type: `element`, tagName: `p`, properties: {}, children: e.all(t) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Tf(e, t) {
  let n = { type: `root`, children: e.wrap(e.all(t)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Ef(e, t) {
  let n = {
    type: `element`,
    tagName: `strong`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function Df(e, t) {
  let n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    let n = {
      type: `element`,
      tagName: `thead`,
      properties: {},
      children: e.wrap([r], !0),
    };
    (e.patch(t.children[0], n), i.push(n));
  }
  if (n.length > 0) {
    let r = {
        type: `element`,
        tagName: `tbody`,
        properties: {},
        children: e.wrap(n, !0),
      },
      a = Ac(t.children[1]),
      o = kc(t.children[t.children.length - 1]);
    (a && o && (r.position = { start: a, end: o }), i.push(r));
  }
  let a = {
    type: `element`,
    tagName: `table`,
    properties: {},
    children: e.wrap(i, !0),
  };
  return (e.patch(t, a), e.applyData(t, a));
}
function Of(e, t, n) {
  let r = n ? n.children : void 0,
    i = (r ? r.indexOf(t) : 1) === 0 ? `th` : `td`,
    a = n && n.type === `table` ? n.align : void 0,
    o = a ? a.length : t.children.length,
    s = -1,
    c = [];
  for (; ++s < o; ) {
    let n = t.children[s],
      r = {},
      o = a ? a[s] : void 0;
    o && (r.align = o);
    let l = { type: `element`, tagName: i, properties: r, children: [] };
    (n && ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))),
      c.push(l));
  }
  let l = {
    type: `element`,
    tagName: `tr`,
    properties: {},
    children: e.wrap(c, !0),
  };
  return (e.patch(t, l), e.applyData(t, l));
}
function kf(e, t) {
  let n = {
    type: `element`,
    tagName: `td`,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
var Af = 9,
  jf = 32;
function Mf(e) {
  let t = String(e),
    n = /\r?\n|\r/g,
    r = n.exec(t),
    i = 0,
    a = [];
  for (; r; )
    (a.push(Nf(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t)));
  return (a.push(Nf(t.slice(i), i > 0, !1)), a.join(``));
}
function Nf(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let t = e.codePointAt(r);
    for (; t === Af || t === jf; ) (r++, (t = e.codePointAt(r)));
  }
  if (n) {
    let t = e.codePointAt(i - 1);
    for (; t === Af || t === jf; ) (i--, (t = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : ``;
}
function Pf(e, t) {
  let n = { type: `text`, value: Mf(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function Ff(e, t) {
  let n = { type: `element`, tagName: `hr`, properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
var If = {
  blockquote: of,
  break: sf,
  code: cf,
  delete: lf,
  emphasis: uf,
  footnoteReference: df,
  heading: ff,
  html: pf,
  imageReference: hf,
  image: gf,
  inlineCode: _f,
  linkReference: vf,
  link: yf,
  listItem: bf,
  list: Cf,
  paragraph: wf,
  root: Tf,
  strong: Ef,
  table: Df,
  tableCell: kf,
  tableRow: Of,
  text: Pf,
  thematicBreak: Ff,
  toml: Lf,
  yaml: Lf,
  definition: Lf,
  footnoteDefinition: Lf,
};
function Lf() {}
var Rf = typeof self == `object` ? self : globalThis,
  zf = (e, t) => {
    let n = (t, n) => (e.set(n, t), t),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        let [a, o] = t[i];
        switch (a) {
          case 0:
          case -1:
            return n(o, i);
          case 1: {
            let e = n([], i);
            for (let t of o) e.push(r(t));
            return e;
          }
          case 2: {
            let e = n({}, i);
            for (let [t, n] of o) e[r(t)] = r(n);
            return e;
          }
          case 3:
            return n(new Date(o), i);
          case 4: {
            let { source: e, flags: t } = o;
            return n(new RegExp(e, t), i);
          }
          case 5: {
            let e = n(new Map(), i);
            for (let [t, n] of o) e.set(r(t), r(n));
            return e;
          }
          case 6: {
            let e = n(new Set(), i);
            for (let t of o) e.add(r(t));
            return e;
          }
          case 7: {
            let { name: e, message: t } = o;
            return n(new Rf[e](t), i);
          }
          case 8:
            return n(BigInt(o), i);
          case `BigInt`:
            return n(Object(BigInt(o)), i);
          case `ArrayBuffer`:
            return n(new Uint8Array(o).buffer, o);
          case `DataView`: {
            let { buffer: e } = new Uint8Array(o);
            return n(new DataView(e), o);
          }
        }
        return n(new Rf[a](o), i);
      };
    return r;
  },
  Bf = (e) => zf(new Map(), e)(0),
  Vf = ``,
  { toString: Hf } = {},
  { keys: Uf } = Object,
  Wf = (e) => {
    let t = typeof e;
    if (t !== `object` || !e) return [0, t];
    let n = Hf.call(e).slice(8, -1);
    switch (n) {
      case `Array`:
        return [1, Vf];
      case `Object`:
        return [2, Vf];
      case `Date`:
        return [3, Vf];
      case `RegExp`:
        return [4, Vf];
      case `Map`:
        return [5, Vf];
      case `Set`:
        return [6, Vf];
      case `DataView`:
        return [1, n];
    }
    return n.includes(`Array`) ? [1, n] : n.includes(`Error`) ? [7, n] : [2, n];
  },
  Gf = ([e, t]) => e === 0 && (t === `function` || t === `symbol`),
  Kf = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1;
        return (n.set(t, i), i);
      },
      a = (r) => {
        if (n.has(r)) return n.get(r);
        let [o, s] = Wf(r);
        switch (o) {
          case 0: {
            let t = r;
            switch (s) {
              case `bigint`:
                ((o = 8), (t = r.toString()));
                break;
              case `function`:
              case `symbol`:
                if (e) throw TypeError(`unable to serialize ` + s);
                t = null;
                break;
              case `undefined`:
                return i([-1], r);
            }
            return i([o, t], r);
          }
          case 1: {
            if (s) {
              let e = r;
              return (
                s === `DataView`
                  ? (e = new Uint8Array(r.buffer))
                  : s === `ArrayBuffer` && (e = new Uint8Array(r)),
                i([s, [...e]], r)
              );
            }
            let e = [],
              t = i([o, e], r);
            for (let t of r) e.push(a(t));
            return t;
          }
          case 2: {
            if (s)
              switch (s) {
                case `BigInt`:
                  return i([s, r.toString()], r);
                case `Boolean`:
                case `Number`:
                case `String`:
                  return i([s, r.valueOf()], r);
              }
            if (t && `toJSON` in r) return a(r.toJSON());
            let n = [],
              c = i([o, n], r);
            for (let t of Uf(r))
              (e || !Gf(Wf(r[t]))) && n.push([a(t), a(r[t])]);
            return c;
          }
          case 3:
            return i([o, r.toISOString()], r);
          case 4: {
            let { source: e, flags: t } = r;
            return i([o, { source: e, flags: t }], r);
          }
          case 5: {
            let t = [],
              n = i([o, t], r);
            for (let [n, i] of r)
              (e || !(Gf(Wf(n)) || Gf(Wf(i)))) && t.push([a(n), a(i)]);
            return n;
          }
          case 6: {
            let t = [],
              n = i([o, t], r);
            for (let n of r) (e || !Gf(Wf(n))) && t.push(a(n));
            return n;
          }
        }
        let { message: c } = r;
        return i([o, { name: s, message: c }], r);
      };
    return a;
  },
  qf = (e, { json: t, lossy: n } = {}) => {
    let r = [];
    return (Kf(!(t || n), !!t, new Map(), r)(e), r);
  },
  Jf =
    typeof structuredClone == `function`
      ? (e, t) =>
          t && (`json` in t || `lossy` in t) ? Bf(qf(e, t)) : structuredClone(e)
      : (e, t) => Bf(qf(e, t));
function Yf(e, t) {
  let n = [{ type: `text`, value: `↩` }];
  return (
    t > 1 &&
      n.push({
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [{ type: `text`, value: String(t) }],
      }),
    n
  );
}
function Xf(e, t) {
  return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``);
}
function Zf(e) {
  let t =
      typeof e.options.clobberPrefix == `string`
        ? e.options.clobberPrefix
        : `user-content-`,
    n = e.options.footnoteBackContent || Yf,
    r = e.options.footnoteBackLabel || Xf,
    i = e.options.footnoteLabel || `Footnotes`,
    a = e.options.footnoteLabelTagName || `h2`,
    o = e.options.footnoteLabelProperties || { className: [`sr-only`] },
    s = [],
    c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    let i = e.footnoteById.get(e.footnoteOrder[c]);
    if (!i) continue;
    let a = e.all(i),
      o = String(i.identifier).toUpperCase(),
      l = J(o.toLowerCase()),
      u = 0,
      d = [],
      f = e.footnoteCounts.get(o);
    for (; f !== void 0 && ++u <= f; ) {
      d.length > 0 && d.push({ type: `text`, value: ` ` });
      let e = typeof n == `string` ? n : n(c, u);
      (typeof e == `string` && (e = { type: `text`, value: e }),
        d.push({
          type: `element`,
          tagName: `a`,
          properties: {
            href: `#` + t + `fnref-` + l + (u > 1 ? `-` + u : ``),
            dataFootnoteBackref: ``,
            ariaLabel: typeof r == `string` ? r : r(c, u),
            className: [`data-footnote-backref`],
          },
          children: Array.isArray(e) ? e : [e],
        }));
    }
    let p = a[a.length - 1];
    if (p && p.type === `element` && p.tagName === `p`) {
      let e = p.children[p.children.length - 1];
      (e && e.type === `text`
        ? (e.value += ` `)
        : p.children.push({ type: `text`, value: ` ` }),
        p.children.push(...d));
    } else a.push(...d);
    let m = {
      type: `element`,
      tagName: `li`,
      properties: { id: t + `fn-` + l },
      children: e.wrap(a, !0),
    };
    (e.patch(i, m), s.push(m));
  }
  if (s.length !== 0)
    return {
      type: `element`,
      tagName: `section`,
      properties: { dataFootnotes: !0, className: [`footnotes`] },
      children: [
        {
          type: `element`,
          tagName: a,
          properties: { ...Jf(o), id: `footnote-label` },
          children: [{ type: `text`, value: i }],
        },
        {
          type: `text`,
          value: `
`,
        },
        {
          type: `element`,
          tagName: `ol`,
          properties: {},
          children: e.wrap(s, !0),
        },
        {
          type: `text`,
          value: `
`,
        },
      ],
    };
}
var Qf = function (e) {
  if (e == null) return rp;
  if (typeof e == `function`) return np(e);
  if (typeof e == `object`) return Array.isArray(e) ? $f(e) : ep(e);
  if (typeof e == `string`) return tp(e);
  throw Error(`Expected function, string, or object as test`);
};
function $f(e) {
  let t = [],
    n = -1;
  for (; ++n < e.length; ) t[n] = Qf(e[n]);
  return np(r);
  function r(...e) {
    let n = -1;
    for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
    return !1;
  }
}
function ep(e) {
  let t = e;
  return np(n);
  function n(n) {
    let r = n,
      i;
    for (i in e) if (r[i] !== t[i]) return !1;
    return !0;
  }
}
function tp(e) {
  return np(t);
  function t(t) {
    return t && t.type === e;
  }
}
function np(e) {
  return t;
  function t(t, n, r) {
    return !!(
      ip(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0)
    );
  }
}
function rp() {
  return !0;
}
function ip(e) {
  return typeof e == `object` && !!e && `type` in e;
}
function ap(e) {
  return e;
}
var op = [];
function sp(e, t, n, r) {
  let i;
  typeof t == `function` && typeof n != `function`
    ? ((r = n), (n = t))
    : (i = t);
  let a = Qf(i),
    o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(e, i, c) {
    let l = e && typeof e == `object` ? e : {};
    if (typeof l.type == `string`) {
      let t =
        typeof l.tagName == `string`
          ? l.tagName
          : typeof l.name == `string`
            ? l.name
            : void 0;
      Object.defineProperty(u, `name`, {
        value: `node (` + ap(e.type + (t ? `<` + t + `>` : ``)) + `)`,
      });
    }
    return u;
    function u() {
      let l = op,
        u,
        d,
        f;
      if (
        (!t || a(e, i, c[c.length - 1] || void 0)) &&
        ((l = cp(n(e, c))), l[0] === !1)
      )
        return l;
      if (`children` in e && e.children) {
        let t = e;
        if (t.children && l[0] !== `skip`)
          for (
            d = (r ? t.children.length : -1) + o, f = c.concat(t);
            d > -1 && d < t.children.length;
          ) {
            let e = t.children[d];
            if (((u = s(e, d, f)()), u[0] === !1)) return u;
            d = typeof u[1] == `number` ? u[1] : d + o;
          }
      }
      return l;
    }
  }
}
function cp(e) {
  return Array.isArray(e)
    ? e
    : typeof e == `number`
      ? [!0, e]
      : e == null
        ? op
        : [e];
}
function lp(e, t, n, r) {
  let i, a, o;
  (typeof t == `function` && typeof n != `function`
    ? ((a = void 0), (o = t), (i = n))
    : ((a = t), (o = n), (i = r)),
    sp(e, a, s, i));
  function s(e, t) {
    let n = t[t.length - 1],
      r = n ? n.children.indexOf(e) : void 0;
    return o(e, r, n);
  }
}
var up = {}.hasOwnProperty,
  dp = {};
function fp(e, t) {
  let n = t || dp,
    r = new Map(),
    i = new Map(),
    a = {
      all: s,
      applyData: mp,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: new Map(),
      footnoteOrder: [],
      handlers: { ...If, ...n.handlers },
      one: o,
      options: n,
      patch: pp,
      wrap: gp,
    };
  return (
    lp(e, function (e) {
      if (e.type === `definition` || e.type === `footnoteDefinition`) {
        let t = e.type === `definition` ? r : i,
          n = String(e.identifier).toUpperCase();
        t.has(n) || t.set(n, e);
      }
    }),
    a
  );
  function o(e, t) {
    let n = e.type,
      r = a.handlers[n];
    if (up.call(a.handlers, n) && r) return r(a, e, t);
    if (a.options.passThrough && a.options.passThrough.includes(n)) {
      if (`children` in e) {
        let { children: t, ...n } = e,
          r = Jf(n);
        return ((r.children = a.all(e)), r);
      }
      return Jf(e);
    }
    return (a.options.unknownHandler || hp)(a, e, t);
  }
  function s(e) {
    let t = [];
    if (`children` in e) {
      let n = e.children,
        r = -1;
      for (; ++r < n.length; ) {
        let i = a.one(n[r], e);
        if (i) {
          if (
            r &&
            n[r - 1].type === `break` &&
            (!Array.isArray(i) && i.type === `text` && (i.value = _p(i.value)),
            !Array.isArray(i) && i.type === `element`)
          ) {
            let e = i.children[0];
            e && e.type === `text` && (e.value = _p(e.value));
          }
          Array.isArray(i) ? t.push(...i) : t.push(i);
        }
      }
    }
    return t;
  }
}
function pp(e, t) {
  e.position && (t.position = Mc(e));
}
function mp(e, t) {
  let n = t;
  if (e && e.data) {
    let t = e.data.hName,
      r = e.data.hChildren,
      i = e.data.hProperties;
    (typeof t == `string` &&
      (n.type === `element`
        ? (n.tagName = t)
        : (n = {
            type: `element`,
            tagName: t,
            properties: {},
            children: `children` in n ? n.children : [n],
          })),
      n.type === `element` && i && Object.assign(n.properties, Jf(i)),
      `children` in n && n.children && r != null && (n.children = r));
  }
  return n;
}
function hp(e, t) {
  let n = t.data || {},
    r =
      `value` in t && !(up.call(n, `hProperties`) || up.call(n, `hChildren`))
        ? { type: `text`, value: t.value }
        : {
            type: `element`,
            tagName: `div`,
            properties: {},
            children: e.all(t),
          };
  return (e.patch(t, r), e.applyData(t, r));
}
function gp(e, t) {
  let n = [],
    r = -1;
  for (
    t &&
    n.push({
      type: `text`,
      value: `
`,
    });
    ++r < e.length;
  )
    (r &&
      n.push({
        type: `text`,
        value: `
`,
      }),
      n.push(e[r]));
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: `text`,
        value: `
`,
      }),
    n
  );
}
function _p(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
function vp(e, t) {
  let n = fp(e, t),
    r = n.one(e, void 0),
    i = Zf(n),
    a = Array.isArray(r)
      ? { type: `root`, children: r }
      : r || { type: `root`, children: [] };
  return (
    i &&
      (`children` in a,
      a.children.push(
        {
          type: `text`,
          value: `
`,
        },
        i,
      )),
    a
  );
}
function yp(e, t) {
  return e && `run` in e
    ? async function (n, r) {
        let i = vp(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return vp(n, { file: r, ...(e || t) });
      };
}
function bp(e) {
  if (e) throw e;
}
var xp = o((e, t) => {
  var n = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    o = function (e) {
      return typeof Array.isArray == `function`
        ? Array.isArray(e)
        : r.call(e) === `[object Array]`;
    },
    s = function (e) {
      if (!e || r.call(e) !== `[object Object]`) return !1;
      var t = n.call(e, `constructor`),
        i =
          e.constructor &&
          e.constructor.prototype &&
          n.call(e.constructor.prototype, `isPrototypeOf`);
      if (e.constructor && !t && !i) return !1;
      for (var a in e);
      return a === void 0 || n.call(e, a);
    },
    c = function (e, t) {
      i && t.name === `__proto__`
        ? i(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0,
          })
        : (e[t.name] = t.newValue);
    },
    l = function (e, t) {
      if (t === `__proto__`) {
        if (!n.call(e, t)) return;
        if (a) return a(e, t).value;
      }
      return e[t];
    };
  t.exports = function e() {
    var t,
      n,
      r,
      i,
      a,
      u,
      d = arguments[0],
      f = 1,
      p = arguments.length,
      m = !1;
    for (
      typeof d == `boolean` && ((m = d), (d = arguments[1] || {}), (f = 2)),
        (d == null || (typeof d != `object` && typeof d != `function`)) &&
          (d = {});
      f < p;
      ++f
    )
      if (((t = arguments[f]), t != null))
        for (n in t)
          ((r = l(d, n)),
            (i = l(t, n)),
            d !== i &&
              (m && i && (s(i) || (a = o(i)))
                ? (a
                    ? ((a = !1), (u = r && o(r) ? r : []))
                    : (u = r && s(r) ? r : {}),
                  c(d, { name: n, newValue: e(m, u, i) }))
                : i !== void 0 && c(d, { name: n, newValue: i })));
    return d;
  };
});
function Sp(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Cp() {
  let e = [],
    t = { run: n, use: r };
  return t;
  function n(...t) {
    let n = -1,
      r = t.pop();
    if (typeof r != `function`)
      throw TypeError(`Expected function as last argument, not ` + r);
    i(null, ...t);
    function i(a, ...o) {
      let s = e[++n],
        c = -1;
      if (a) {
        r(a);
        return;
      }
      for (; ++c < t.length; )
        (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
      ((t = o), s ? wp(s, i)(...o) : r(null, ...o));
    }
  }
  function r(n) {
    if (typeof n != `function`)
      throw TypeError("Expected `middelware` to be a function, not " + n);
    return (e.push(n), t);
  }
}
function wp(e, t) {
  let n;
  return r;
  function r(...t) {
    let r = e.length > t.length,
      o;
    r && t.push(i);
    try {
      o = e.apply(this, t);
    } catch (e) {
      let t = e;
      if (r && n) throw t;
      return i(t);
    }
    r ||
      (o && o.then && typeof o.then == `function`
        ? o.then(a, i)
        : o instanceof Error
          ? i(o)
          : a(o));
  }
  function i(e, ...r) {
    n || ((n = !0), t(e, ...r));
  }
  function a(e) {
    i(null, e);
  }
}
var Tp = { basename: Ep, dirname: Dp, extname: Op, join: kp, sep: `/` };
function Ep(e, t) {
  if (t !== void 0 && typeof t != `string`)
    throw TypeError(`"ext" argument must be a string`);
  Mp(e);
  let n = 0,
    r = -1,
    i = e.length,
    a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((a = !0), (r = i + 1));
    return r < 0 ? `` : e.slice(n, r);
  }
  if (t === e) return ``;
  let o = -1,
    s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      (o < 0 && ((a = !0), (o = i + 1)),
        s > -1 &&
          (e.codePointAt(i) === t.codePointAt(s--)
            ? s < 0 && (r = i)
            : ((s = -1), (r = o))));
  return (n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r));
}
function Dp(e) {
  if ((Mp(e), e.length === 0)) return `.`;
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r ||= !0;
  return t < 0
    ? e.codePointAt(0) === 47
      ? `/`
      : `.`
    : t === 1 && e.codePointAt(0) === 47
      ? `//`
      : e.slice(0, t);
}
function Op(e) {
  Mp(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    a = 0,
    o;
  for (; t--; ) {
    let s = e.codePointAt(t);
    if (s === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    (n < 0 && ((o = !0), (n = t + 1)),
      s === 46 ? (i < 0 ? (i = t) : a !== 1 && (a = 1)) : i > -1 && (a = -1));
  }
  return i < 0 || n < 0 || a === 0 || (a === 1 && i === n - 1 && i === r + 1)
    ? ``
    : e.slice(i, n);
}
function kp(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    (Mp(e[t]), e[t] && (n = n === void 0 ? e[t] : n + `/` + e[t]));
  return n === void 0 ? `.` : Ap(n);
}
function Ap(e) {
  Mp(e);
  let t = e.codePointAt(0) === 47,
    n = jp(e, !t);
  return (
    n.length === 0 && !t && (n = `.`),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += `/`),
    t ? `/` + n : n
  );
}
function jp(e, t) {
  let n = ``,
    r = 0,
    i = -1,
    a = 0,
    o = -1,
    s,
    c;
  for (; ++o <= e.length; ) {
    if (o < e.length) s = e.codePointAt(o);
    else if (s === 47) break;
    else s = 47;
    if (s === 47) {
      if (!(i === o - 1 || a === 1))
        if (i !== o - 1 && a === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf(`/`)), c !== n.length - 1)) {
                (c < 0
                  ? ((n = ``), (r = 0))
                  : ((n = n.slice(0, c)),
                    (r = n.length - 1 - n.lastIndexOf(`/`))),
                  (i = o),
                  (a = 0));
                continue;
              }
            } else if (n.length > 0) {
              ((n = ``), (r = 0), (i = o), (a = 0));
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + `/..` : `..`), (r = 2));
        } else
          (n.length > 0
            ? (n += `/` + e.slice(i + 1, o))
            : (n = e.slice(i + 1, o)),
            (r = o - i - 1));
      ((i = o), (a = 0));
    } else s === 46 && a > -1 ? a++ : (a = -1);
  }
  return n;
}
function Mp(e) {
  if (typeof e != `string`)
    throw TypeError(`Path must be a string. Received ` + JSON.stringify(e));
}
var Np = { cwd: Pp };
function Pp() {
  return `/`;
}
function Fp(e) {
  return !!(
    typeof e == `object` &&
    e &&
    `href` in e &&
    e.href &&
    `protocol` in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Ip(e) {
  if (typeof e == `string`) e = new URL(e);
  else if (!Fp(e)) {
    let t = TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    throw ((t.code = `ERR_INVALID_ARG_TYPE`), t);
  }
  if (e.protocol !== `file:`) {
    let e = TypeError(`The URL must be of scheme file`);
    throw ((e.code = `ERR_INVALID_URL_SCHEME`), e);
  }
  return Lp(e);
}
function Lp(e) {
  if (e.hostname !== ``) {
    let e = TypeError(`File URL host must be "localhost" or empty on darwin`);
    throw ((e.code = `ERR_INVALID_FILE_URL_HOST`), e);
  }
  let t = e.pathname,
    n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      let e = t.codePointAt(n + 2);
      if (e === 70 || e === 102) {
        let e = TypeError(
          `File URL path must not include encoded / characters`,
        );
        throw ((e.code = `ERR_INVALID_FILE_URL_PATH`), e);
      }
    }
  return decodeURIComponent(t);
}
var Rp = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`],
  zp = class {
    constructor(e) {
      let t;
      ((t = e
        ? Fp(e)
          ? { path: e }
          : typeof e == `string` || Up(e)
            ? { value: e }
            : e
        : {}),
        (this.cwd = `cwd` in t ? `` : Np.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored);
      let n = -1;
      for (; ++n < Rp.length; ) {
        let e = Rp[n];
        e in t &&
          t[e] !== void 0 &&
          t[e] !== null &&
          (this[e] = e === `history` ? [...t[e]] : t[e]);
      }
      let r;
      for (r in t) Rp.includes(r) || (this[r] = t[r]);
    }
    get basename() {
      return typeof this.path == `string` ? Tp.basename(this.path) : void 0;
    }
    set basename(e) {
      (Vp(e, `basename`),
        Bp(e, `basename`),
        (this.path = Tp.join(this.dirname || ``, e)));
    }
    get dirname() {
      return typeof this.path == `string` ? Tp.dirname(this.path) : void 0;
    }
    set dirname(e) {
      (Hp(this.basename, `dirname`),
        (this.path = Tp.join(e || ``, this.basename)));
    }
    get extname() {
      return typeof this.path == `string` ? Tp.extname(this.path) : void 0;
    }
    set extname(e) {
      if ((Bp(e, `extname`), Hp(this.dirname, `extname`), e)) {
        if (e.codePointAt(0) !== 46)
          throw Error("`extname` must start with `.`");
        if (e.includes(`.`, 1))
          throw Error("`extname` cannot contain multiple dots");
      }
      this.path = Tp.join(this.dirname, this.stem + (e || ``));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(e) {
      (Fp(e) && (e = Ip(e)),
        Vp(e, `path`),
        this.path !== e && this.history.push(e));
    }
    get stem() {
      return typeof this.path == `string`
        ? Tp.basename(this.path, this.extname)
        : void 0;
    }
    set stem(e) {
      (Vp(e, `stem`),
        Bp(e, `stem`),
        (this.path = Tp.join(this.dirname || ``, e + (this.extname || ``))));
    }
    fail(e, t, n) {
      let r = this.message(e, t, n);
      throw ((r.fatal = !0), r);
    }
    info(e, t, n) {
      let r = this.message(e, t, n);
      return ((r.fatal = void 0), r);
    }
    message(e, t, n) {
      let r = new U(e, t, n);
      return (
        this.path &&
          ((r.name = this.path + `:` + r.name), (r.file = this.path)),
        (r.fatal = !1),
        this.messages.push(r),
        r
      );
    }
    toString(e) {
      return this.value === void 0
        ? ``
        : typeof this.value == `string`
          ? this.value
          : new TextDecoder(e || void 0).decode(this.value);
    }
  };
function Bp(e, t) {
  if (e && e.includes(Tp.sep))
    throw Error(
      "`" + t + "` cannot be a path: did not expect `" + Tp.sep + "`",
    );
}
function Vp(e, t) {
  if (!e) throw Error("`" + t + "` cannot be empty");
}
function Hp(e, t) {
  if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Up(e) {
  return !!(
    e &&
    typeof e == `object` &&
    `byteLength` in e &&
    `byteOffset` in e
  );
}
var Wp = function (e) {
    let t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments);
      };
    return (Object.setPrototypeOf(r, t), r);
  },
  Gp = l(xp(), 1),
  Kp = {}.hasOwnProperty,
  qp = new (class e extends Wp {
    constructor() {
      (super(`copy`),
        (this.Compiler = void 0),
        (this.Parser = void 0),
        (this.attachers = []),
        (this.compiler = void 0),
        (this.freezeIndex = -1),
        (this.frozen = void 0),
        (this.namespace = {}),
        (this.parser = void 0),
        (this.transformers = Cp()));
    }
    copy() {
      let t = new e(),
        n = -1;
      for (; ++n < this.attachers.length; ) {
        let e = this.attachers[n];
        t.use(...e);
      }
      return (t.data((0, Gp.default)(!0, {}, this.namespace)), t);
    }
    data(e, t) {
      return typeof e == `string`
        ? arguments.length === 2
          ? (Xp(`data`, this.frozen), (this.namespace[e] = t), this)
          : (Kp.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
          ? (Xp(`data`, this.frozen), (this.namespace = e), this)
          : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      let e = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        let [t, ...n] = this.attachers[this.freezeIndex];
        if (n[0] === !1) continue;
        n[0] === !0 && (n[0] = void 0);
        let r = t.call(e, ...n);
        typeof r == `function` && this.transformers.use(r);
      }
      return ((this.frozen = !0), (this.freezeIndex = 1 / 0), this);
    }
    parse(e) {
      this.freeze();
      let t = $p(e),
        n = this.parser || this.Parser;
      return (Jp(`parse`, n), n(String(t), t));
    }
    process(e, t) {
      let n = this;
      return (
        this.freeze(),
        Jp(`process`, this.parser || this.Parser),
        Yp(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r)
      );
      function r(r, i) {
        let a = $p(e),
          o = n.parse(a);
        n.run(o, a, function (e, t, r) {
          if (e || !t || !r) return s(e);
          let i = t,
            a = n.stringify(i, r);
          (tm(a) ? (r.value = a) : (r.result = a), s(e, r));
        });
        function s(e, n) {
          e || !n ? i(e) : r ? r(n) : t(void 0, n);
        }
      }
    }
    processSync(e) {
      let t = !1,
        n;
      return (
        this.freeze(),
        Jp(`processSync`, this.parser || this.Parser),
        Yp(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        Qp(`processSync`, `process`, t),
        n
      );
      function r(e, r) {
        ((t = !0), bp(e), (n = r));
      }
    }
    run(e, t, n) {
      (Zp(e), this.freeze());
      let r = this.transformers;
      return (
        !n && typeof t == `function` && ((n = t), (t = void 0)),
        n ? i(void 0, n) : new Promise(i)
      );
      function i(i, a) {
        let o = $p(t);
        r.run(e, o, s);
        function s(t, r, o) {
          let s = r || e;
          t ? a(t) : i ? i(s) : n(void 0, s, o);
        }
      }
    }
    runSync(e, t) {
      let n = !1,
        r;
      return (this.run(e, t, i), Qp(`runSync`, `run`, n), r);
      function i(e, t) {
        (bp(e), (r = t), (n = !0));
      }
    }
    stringify(e, t) {
      this.freeze();
      let n = $p(t),
        r = this.compiler || this.Compiler;
      return (Yp(`stringify`, r), Zp(e), r(e, n));
    }
    use(e, ...t) {
      let n = this.attachers,
        r = this.namespace;
      if ((Xp(`use`, this.frozen), e != null))
        if (typeof e == `function`) s(e, t);
        else if (typeof e == `object`) Array.isArray(e) ? o(e) : a(e);
        else throw TypeError("Expected usable value, not `" + e + "`");
      return this;
      function i(e) {
        if (typeof e == `function`) s(e, []);
        else if (typeof e == `object`)
          if (Array.isArray(e)) {
            let [t, ...n] = e;
            s(t, n);
          } else a(e);
        else throw TypeError("Expected usable value, not `" + e + "`");
      }
      function a(e) {
        if (!(`plugins` in e) && !(`settings` in e))
          throw Error(
            "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
          );
        (o(e.plugins),
          e.settings &&
            (r.settings = (0, Gp.default)(!0, r.settings, e.settings)));
      }
      function o(e) {
        let t = -1;
        if (e != null)
          if (Array.isArray(e))
            for (; ++t < e.length; ) {
              let n = e[t];
              i(n);
            }
          else throw TypeError("Expected a list of plugins, not `" + e + "`");
      }
      function s(e, t) {
        let r = -1,
          i = -1;
        for (; ++r < n.length; )
          if (n[r][0] === e) {
            i = r;
            break;
          }
        if (i === -1) n.push([e, ...t]);
        else if (t.length > 0) {
          let [r, ...a] = t,
            o = n[i][1];
          (Sp(o) && Sp(r) && (r = (0, Gp.default)(!0, o, r)),
            (n[i] = [e, r, ...a]));
        }
      }
    }
  })().freeze();
function Jp(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `parser`");
}
function Yp(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Xp(e, t) {
  if (t)
    throw Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function Zp(e) {
  if (!Sp(e) || typeof e.type != `string`)
    throw TypeError("Expected node, got `" + e + "`");
}
function Qp(e, t, n) {
  if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function $p(e) {
  return em(e) ? e : new zp(e);
}
function em(e) {
  return !!(e && typeof e == `object` && `message` in e && `messages` in e);
}
function tm(e) {
  return typeof e == `string` || nm(e);
}
function nm(e) {
  return !!(
    e &&
    typeof e == `object` &&
    `byteLength` in e &&
    `byteOffset` in e
  );
}
var rm = [],
  im = { allowDangerousHtml: !0 },
  am = /^(https?|ircs?|mailto|xmpp)$/i,
  om = [
    { from: `astPlugins`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `allowDangerousHtml`, id: `remove-buggy-html-in-markdown-parser` },
    {
      from: `allowNode`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowElement`,
    },
    {
      from: `allowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `allowedElements`,
    },
    { from: `className`, id: `remove-classname` },
    {
      from: `disallowedTypes`,
      id: `replace-allownode-allowedtypes-and-disallowedtypes`,
      to: `disallowedElements`,
    },
    { from: `escapeHtml`, id: `remove-buggy-html-in-markdown-parser` },
    { from: `includeElementIndex`, id: `#remove-includeelementindex` },
    {
      from: `includeNodeIndex`,
      id: `change-includenodeindex-to-includeelementindex`,
    },
    { from: `linkTarget`, id: `remove-linktarget` },
    {
      from: `plugins`,
      id: `change-plugins-to-remarkplugins`,
      to: `remarkPlugins`,
    },
    { from: `rawSourcePos`, id: `#remove-rawsourcepos` },
    {
      from: `renderers`,
      id: `change-renderers-to-components`,
      to: `components`,
    },
    { from: `source`, id: `change-source-to-children`, to: `children` },
    { from: `sourcePos`, id: `#remove-sourcepos` },
    { from: `transformImageUri`, id: `#add-urltransform`, to: `urlTransform` },
    { from: `transformLinkUri`, id: `#add-urltransform`, to: `urlTransform` },
  ];
function Xm(e, t) {
  let n = e.replace(/\r/g, ``).split(`\n`),
    r = document.createElement(`canvas`),
    i = r.getContext(`2d`);
  (i.font = `${t || 12}px "Noto Sans Symbols", "Segoe UI Symbol", "Apple Symbols", "JetBrains Mono", monospace`),
    (i.textBaseline = `top`),
    (i.fillStyle = `#111`);
  let a = Math.max(...n.map((e) => i.measureText(e).width)),
    o = n.length * (t || 12) * 1.15;
  (r.width = Math.ceil(a)), (r.height = Math.ceil(o)), (i.font = `${t || 12}px "Noto Sans Symbols", "Segoe UI Symbol", "Apple Symbols", "JetBrains Mono", monospace`), (i.textBaseline = `top`), (i.fillStyle = `#111`), i.fillRect(0, 0, r.width, r.height), (i.fillStyle = `#fff`), n.forEach((e, n) => { i.fillText(e, 0, n * (t || 12) * 1.15) });
  return r.toDataURL(`image/png`);
}
function Ym(e, t) {
  let n = e.replace(/\r/g, ``),
    r = n.split(`\n`),
    i = [],
    a = ``,
    o = !1;
  r.forEach((e) => {
    let r = (e.match(/[\u2800-\u28FF]/g) || []).length / Math.max(e.length, 1) > 0.5;
    if (r && !o) { i.push({ type: `text`, content: a }), (a = ``), (o = !0); } else if (!r && o) { i.push({ type: `braille`, content: a }), (a = ``), (o = !1); }
    a += (a ? `\n` : ``) + e;
  });
  a && i.push({ type: o ? `braille` : `text`, content: a });
  let l = [];
  return i.forEach((e) => { e.type === `text` ? l.push({ type: `md`, data: e.content }) : l.push({ type: `img`, src: Xm(e.content, t) }); }), l;
}
function Zm(e) {
  let t = { "log-7ae0": "log-7ae0/1c0c" };
  return t[e] || e;
}
function sm(e) {
  let t = cm(e),
    n = lm(e);
  return um(t.runSync(t.parse(n), n), e);
}
function cm(e) {
  let t = e.rehypePlugins || rm,
    n = e.remarkPlugins || rm,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...im } : im;
  return qp().use(af).use(n).use(yp, r).use(t);
}
function lm(e) {
  let t = e.children || ``,
    n = new zp();
  return (typeof t == `string` ? (n.value = t) : `` + t, n);
}
function um(e, t) {
  let n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    a = t.disallowedElements,
    o = t.skipHtml,
    s = t.unwrapDisallowed,
    c = t.urlTransform || dm;
  for (let e of om)
    Object.hasOwn(t, e.from) &&
      `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id;
  return (
    lp(e, l),
    Wc(e, {
      Fragment: z.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: z.jsx,
      jsxs: z.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function l(e, t, i) {
    if (e.type === `raw` && i && typeof t == `number`)
      return (
        o
          ? i.children.splice(t, 1)
          : (i.children[t] = { type: `text`, value: e.value }),
        t
      );
    if (e.type === `element`) {
      let t;
      for (t in fl)
        if (Object.hasOwn(fl, t) && Object.hasOwn(e.properties, t)) {
          let n = e.properties[t],
            r = fl[t];
          (r === null || r.includes(e.tagName)) &&
            (e.properties[t] = c(String(n || ``), t, e));
        }
    }
    if (e.type === `element`) {
      let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
      if (
        (!o && r && typeof t == `number` && (o = !r(e, t, i)),
        o && i && typeof t == `number`)
      )
        return (
          s && e.children
            ? i.children.splice(t, 1, ...e.children)
            : i.children.splice(t, 1),
          t
        );
    }
  }
}
function dm(e) {
  let t = e.indexOf(`:`),
    n = e.indexOf(`?`),
    r = e.indexOf(`#`),
    i = e.indexOf(`/`);
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    am.test(e.slice(0, t))
    ? e
    : ``;
}
var fm = Math.max(
    Object.keys(ms)
      .map((e) => e.length)
      .sort((e, t) => (e > t ? -1 : 1))[0],
    14,
  ),
  pm = ({ disabled: e }) => {
    let [
        { activeDoc: t, notFound: n, lastQuery: r, error: i },
        { setQuery: a, talkToApos: o },
      ] = Ls(),
      [s, c] = P.useState(``),
      l = P.useCallback(() => {
        e ||
          (go(t)
            .with(`apos`, () => {
              o(s);
            })
            .otherwise(() => {
              a(s);
            }),
          c(``));
      }, [s, e, a, c, o]);
    return (0, z.jsxs)(`form`, {
      className: `computer-input`,
      onSubmit: (e) => {
        (e.preventDefault(), l());
      },
      children: [
        (0, z.jsx)(`div`, {
          className: `computer-input-feedback`,
          children:
            i ??
            (n && r
              ? r.length > fm
                ? `[ERR] - Query cannot exceed ${fm} characters`
                : `[ERR] - Invalid document or command "${r}"`
              : `-----`),
        }),
        (0, z.jsxs)(`div`, {
          className: `computer-input-wrapper`,
          children: [
            (0, z.jsx)(`input`, {
              disabled: e,
              type: `text`,
              value: s,
              onChange: (e) => {
                c(e.currentTarget.value);
              },
              placeholder: `请输入查询...`,
            }),
            t !== `root` &&
              !e &&
              (0, z.jsx)(`button`, {
                type: `button`,
                onClick: () => {
                  a(`root`);
                },
                children: `返回 根目录root`,
              }),
          ],
        }),
      ],
    });
  },
  mm = {
    "arc-nv": [`qms-vs`, `trip-13`, `ftcm-52`],
    "cpt-fc": [`log-2111-1-11`, `qms-vs`, `cpt-lb`, `log-2120-1-8`],
    "cpt-lb": [`log-2120-1-8`, `msg-12ea`, `ftcm-76`],
    "crew-jc": [`qms-vs`],
    "crew-pc": [`qms-vs`, `trs-2111-5-24`],
    "ftcm-1": [`trip-17`, `qms-vs`],
    "ftcm-333": [`qms-vs`, `ftcm-19c5`],
    "ftcm-76": [`log-7ae0`],
    "ftcm-52": [`arc-nv`],
    "ftcm-19c5": [`trs-2120-4-5`],
    "log-2111-1-11": [`log-2111-1-18`, `trs-2111-1-12`],
    "log-2111-1-18": [`trip-1`],
    "log-2111-6-1": [`trs-2111-6-1`],
    "log-2119-12-30": [`log-1b74`],
    "log-2120-1-8": [`crew-jc`],
    "log-2120-2-3": [`trip-17`, `ftcm-333`, `ftcm-19c5`],
    "log-1b74": [`ftcm-19c5`],
    "mem-1": [`trip-17`],
    "mem-2": [`qms-vs`, `arc-nv`, `cpt-fc`, `crew-av`, `crew-pc`, `crew-pn`],
    "mem-3": [`ftcm-1`],
    "mem-5": [`ftcm-19c5`],
    "msg-1": [`trip-18`, `trs-2111-1-12`],
    "msg-2": [`log-2120-2-3`],
    "msg-12ea": [`trs-2120-1-10`],
    "qms-vs": [
      `trip-17`,
      `cpt-fc`,
      `mem-1`,
      `mem-2`,
      `mem-3`,
      `mem-4`,
      `mem-5`,
    ],
    "trip-1": [`log-2111-6-1`],
    "trip-17": [`cca-dm`],
    "trip-18": [`ftcm-333`],
    "trs-2111-1-12": [`cpt-fc`],
    "trs-2111-6-1": [`cpt-fc`, `arc-nv`],
    "trs-2120-1-10": [`log-2119-12-30`],
    "trs-2120-4-5": [`trs-2120-4-6`],
    "trs-2120-4-6": [`trs-2120-4-6-2`],
    "trs-2120-4-6-2": [`mem-1eff`],
  },
  hm = `` + new URL(`monitor_on-BlZvynnc.ogg`, import.meta.url).href,
  gm = `` + new URL(`monitor_off-Dr6R259j.ogg`, import.meta.url).href,
  _m = `` + new URL(`power-icon-BzySW8VJ.png`, import.meta.url).href,
  vm = `` + new URL(`crt-frame-B4NIujKt.png`, import.meta.url).href;
(`` + new URL(`thermokinesy-DI0R6YY3.png`, import.meta.url).href,
  `` + new URL(`mentalism-CPCdtDUv.png`, import.meta.url).href,
  `` + new URL(`telekinesy-CzRa9sLn.png`, import.meta.url).href,
  `` + new URL(`chronomancy-C-q3oAmw.png`, import.meta.url).href);
var ym = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣿⡏⢹⡧⠹⣿⣿⢹⣿⡇⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⠹⠘⢛⣁⡈⢥⣤⡄⠰⡆⢰⣶⠆⣠⢠⠁⣌⠃⡙⠿⠏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣏⠻⢓⡈⠢⡐⠈⡛⠧⠀⠙⠃⠀⠁⠈⠃⠂⠂⠀⠐⢁⡼⠟⠡⣠⣬⡙⠿⣹⣿⣿⢿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣍⠻⠛⠡⢶⣤⡉⠁⢈⣠⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⢀⡀⢤⣄⣀⠚⠛⠉⣡⣶⡬⠛⢋⡾⣻⣿⣿⣿⣿⣿\r
⣿⣿⣿⠻⠟⣡⣶⡤⠄⢀⣤⣾⣿⠇⣐⣷⣿⣾⠋⠀⠀⠀⢉⣛⣂⠸⣷⠀⣿⣿⣷⣦⣄⡉⠁⠄⠒⣀⡔⠿⠋⢉⣼⣿⣿\r
⣿⡛⠿⠣⠶⠖⠂⣀⣴⣿⣿⣿⣿⠀⣷⣿⣿⡇⠀⠀⠀⠀⠿⣿⣿⣇⣸⡇⢸⣿⣿⣿⣿⣿⣧⣤⡉⠉⠁⠄⢐⣻⣿⠟⣻\r
⣿⣛⣓⡒⠀⠀⣴⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⡀⠀⠀⠀⢀⣴⣾⣿⣿⠃⣾⣿⣿⣿⣿⣿⡿⠋⠔⠰⠦⣤⣭⣥⣴⣾⣿\r
⢫⡿⢊⣴⡘⡆⢿⣿⣿⣿⣿⣿⣿⣷⡈⢿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⠏⣰⣿⣿⣿⣿⣿⠟⠁⠀⢤⣤⣤⣬⣙⣿⣿⣿⣿\r
⠸⣧⣌⣙⣃⣘⣈⠻⠿⣿⣿⣿⣿⣿⣿⣌⡛⠿⣿⣿⣿⣿⣿⡿⠟⣁⣼⣿⣿⣿⠿⠋⠄⠠⢴⣶⣶⡄⣉⣿⣿⣿⣿⣿⣿\r
⣷⣮⣭⣭⣿⣿⡻⠿⢋⠐⠊⠩⠙⣛⠿⠿⠿⣶⣦⣭⣭⣭⣥⣶⡾⠿⠟⡛⠩⠀⠈⡐⢶⣶⣦⠍⣡⣾⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣷⣦⣜⡛⢡⣶⡶⢀⣭⡄⡀⢀⣒⠒⢒⣀⠀⢀⣭⣄⠐⢈⢻⣶⣌⠓⣈⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣅⣛⠻⠟⢰⣿⣿⢀⣿⣿⣧⢁⣿⡿⠷⢘⣋⣭⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣭⣬⣭⣭⣥⣤⣶⣶⣾⣿⣿`,
  bm = js.length,
  xm = () => {
    let e = P.useRef(null),
      [t, n] = P.useState(`off`),
      [r, i] = P.useState(!1),
      [a, o] = P.useState(!1),
      [s, c] = P.useState(!1),
      [l, u] = P.useState(!1),
      [
        {
          activeDoc: d,
          eyeAnomaly: f,
          notification: p,
          gameData: m,
          newQueryAdded: h,
          lastQuery: g,
          status: _,
        },
        { setQuery: v, setConfig: y, setStatus: b },
      ] = Ls(),
      x = P.useMemo(() => ms[d], [d]);
    P.useEffect(() => {
      e.current?.scrollTo({ top: 0 });
    }, [d]);
    let ee = P.useCallback(() => {
        (b(`loading`),
          window.setTimeout(() => {
            (b(`loaded`), i(!1));
          }, 2500));
      }, [b, i]),
      S = P.useMemo(() => Object.keys(ms).length - bm, []),
      C = P.useMemo(() => m.foundReferences.length - bm, [m]),
      w = P.useMemo(
        () => ({ monitor: { on: new Audio(hm), off: new Audio(gm) } }),
        [],
      );
    (P.useEffect(() => {
      ((w.monitor.on.preload = `auto`), (w.monitor.off.preload = `auto`));
    }, []),
      P.useEffect(() => {
        (m.conversation1Started && m.conversation1Completed && _ === `initial`
          ? o(!0)
          : m.conversation1Started &&
            m.conversation1Completed &&
            !a &&
            (w.monitor.off.play(), n(`off`), b(`initial`), o(!0)),
          m.conversation2Started && m.conversation2Completed && _ === `initial`
            ? c(!0)
            : m.conversation2Started &&
              m.conversation2Completed &&
              !s &&
              (w.monitor.off.play(), n(`off`), b(`initial`), c(!0)),
          m.adminApproved && m.gameFinished && _ === `initial`
            ? u(!0)
            : m.adminApproved &&
              m.gameFinished &&
              !l &&
              (w.monitor.off.play(), n(`off`), b(`initial`), u(!0)));
      }, [m]));
    let T = P.useCallback(() => {
        r ||
          (i(!0),
          go(_)
            .with(`initial`, () => {
              (w.monitor.on.play(),
                n(`pushed`),
                window.setTimeout(() => {
                  ee();
                }, 900));
            })
            .with(`loaded`, () => {
              (w.monitor.off.play(), n(`off`), b(`initial`), i(!1));
            }));
      }, [_, r, b, ee, i, n]),
      te = P.useMemo(
        () =>
          (m.conversation1Started && !m.conversation1Completed) ||
          (m.conversation2Started && !m.conversation2Completed) ||
          (m.adminApproved && !m.gameFinished),
        [m],
      );
    return (0, z.jsxs)(`div`, {
      className: `computer-frame-wrapper`,
      children: [
        (0, z.jsx)(`img`, { src: vm, className: `computer-frame-shell` }),
        (0, z.jsx)(`button`, {
          className: `power-button ${_} ${t}`,
          onClick: T,
          disabled: te,
          children: (0, z.jsx)(`img`, { src: _m }),
        }),
        (0, z.jsxs)(`div`, {
          className: `computer-frame`,
          children: [
            f &&
              (0, z.jsx)(`div`, {
                className: `eye-anomaly`,
                children: (0, z.jsx)(`img`, {
                  src: Xm(`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣿⡏⢹⡧⠹⣿⣿⢹⣿⡇⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⠹⠘⢛⣁⡈⢥⣤⡄⠰⡆⢰⣶⠆⣠⢠⠁⣌⠃⡙⠿⠏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣏⠻⢓⡈⠢⡐⠈⡛⠧⠀⠙⠃⠀⠁⠈⠃⠂⠂⠀⠐⢁⡼⠟⠡⣠⣬⡙⠿⣹⣿⣿⢿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣍⠻⠛⠡⢶⣤⡉⠁⢈⣠⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⢀⡀⢤⣄⣀⠚⠛⠉⣡⣶⡬⠛⢋⡾⣻⣿⣿⣿⣿⣿\r
⣿⣿⣿⠻⠟⣡⣶⡤⠄⢀⣤⣾⣿⠇⣐⣷⣿⣾⠋⠀⠀⠀⢉⣛⣂⠸⣷⠀⣿⣿⣷⣦⣄⡉⠁⠄⠒⣀⡔⠿⠋⢉⣼⣿⣿\r
⣿⡛⠿⠣⠶⠖⠂⣀⣴⣿⣿⣿⣿⠀⣷⣿⣿⡇⠀⠀⠀⠀⠿⣿⣿⣇⣸⡇⢸⣿⣿⣿⣿⣿⣧⣤⡉⠉⠁⠄⢐⣻⣿⠟⣻\r
⣿⣛⣓⡒⠀⠀⣴⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⡀⠀⠀⠀⢀⣴⣾⣿⣿⠃⣾⣿⣿⣿⣿⣿⡿⠋⠔⠰⠦⣤⣭⣥⣴⣾⣿\r
⢫⡿⢊⣴⡘⡆⢿⣿⣿⣿⣿⣿⣿⣷⡈⢿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⠏⣰⣿⣿⣿⣿⣿⠟⠁⠀⢤⣤⣤⣬⣙⣿⣿⣿⣿\r
⠸⣧⣌⣙⣃⣘⣈⠻⠿⣿⣿⣿⣿⣿⣿⣌⡛⠿⣿⣿⣿⣿⣿⡿⠟⣁⣼⣿⣿⣿⠿⠋⠄⠠⢴⣶⣶⡄⣉⣿⣿⣿⣿⣿⣿\r
⣷⣮⣭⣭⣿⣿⡻⠿⢋⠐⠊⠩⠙⣛⠿⠿⠿⣶⣦⣭⣭⣭⣥⣶⡾⠿⠟⡛⠩⠀⠈⡐⢶⣶⣦⠍⣡⣾⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣷⣦⣜⡛⢡⣶⡶⢀⣭⡄⡀⢀⣒⠒⢒⣀⠀⢀⣭⣄⠐⢈⢻⣶⣌⠓⣈⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣅⣛⠻⠟⢰⣿⣿⢀⣿⣿⣧⢁⣿⡿⠷⢘⣋⣭⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣭⣬⣭⣭⣥⣤⣶⣶⣾⣿⣿`, 14),
                }),
              }),
            go([_, te])
              .with([`initial`, L._], () => null)
              .with([`loading`, L._], () =>
                (0, z.jsx)(`div`, { className: `apos-logo`, children: `APOS` }),
              )
              .with([`loaded`, !0], () =>
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsx)(`div`, {
                      className: `computer-frame-content`,
                      ref: e,
                      children: (0, z.jsx)(`img`, {
                        src: Xm(m.adminApproved ? ps : ym, 12),
                        style: { display: `block`, margin: `auto` },
                      }),
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `bottom-bar`,
                      children: [
                        p &&
                          (0, z.jsx)(`span`, {
                            className: `new-doc-notif`,
                            children: p,
                          }),
                        (0, z.jsx)(`span`, {
                          className: `apos-version`,
                          children: `AP0S v#.?.$`,
                        }),
                      ],
                    }),
                    (0, z.jsx)(pm, { disabled: !0 }),
                  ],
                }),
              )
              .otherwise(() =>
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: `computer-frame-content`,
                      ref: e,
                      id: d,
                      children: [
                        /[\u2800-\u28FF]/.test(x)
                          ? Ym(x, 17).map((e, t) =>
                              e.type === `md`
                                ? (0, z.jsx)(sm, { children: e.data }, `md-` + t)
                                : (0, z.jsx)(`img`, { src: e.src, className: `braille-art-img`, style: { display: `block`, margin: `8px auto`, maxWidth: `100%` } }, `br-` + t),
                            )
                          : (0, z.jsx)(sm, { children: x }),
                        d === `mem-5` &&
                          (0, z.jsx)(`img`, {
                            src:
                              `` +
                              new URL(
                                `thermokinesy-DI0R6YY3.png`,
                                import.meta.url,
                              ).href,
                            className: `computer-rune tksy`,
                          }),
                        d === `log-7ae0` &&
                          (0, z.jsx)(`img`, {
                            src:
                              `` +
                              new URL(`mentalism-CPCdtDUv.png`, import.meta.url)
                                .href,
                            className: `computer-rune mtls`,
                          }),
                        d === `ftcm-19c5` &&
                          (0, z.jsx)(`img`, {
                            src:
                              `` +
                              new URL(
                                `telekinesy-CzRa9sLn.png`,
                                import.meta.url,
                              ).href,
                            className: `computer-rune tlky`,
                          }),
                        d === `apos` &&
                          m.aposConvoStep === `located` &&
                          (0, z.jsx)(`img`, {
                            src:
                              `` +
                              new URL(
                                `chronomancy-C-q3oAmw.png`,
                                import.meta.url,
                              ).href,
                            className: `computer-rune cnmy`,
                          }),
                        d === `config` &&
                          (0, z.jsxs)(z.Fragment, {
                            children: [
                              (0, z.jsx)(`h3`, { children: `提示` }),
                              (0, z.jsxs)(`ul`, {
                                children: [
                                  (0, z.jsx)(`li`, {
                                    children: (0, z.jsx)(`button`, {
                                      onClick: () => {
                                        y({ hints: `none` });
                                      },
                                      disabled: m.config.hints === `none`,
                                      children: `关闭`,
                                    }),
                                  }),
                                  (0, z.jsx)(`li`, {
                                    children: (0, z.jsx)(`button`, {
                                      onClick: () => {
                                        y({ hints: `limited` });
                                      },
                                      disabled: m.config.hints === `limited`,
                                      children: `精简`,
                                    }),
                                  }),
                                  (0, z.jsx)(`li`, {
                                    children: (0, z.jsx)(`button`, {
                                      onClick: () => {
                                        y({ hints: `full` });
                                      },
                                      disabled: m.config.hints === `full`,
                                      children: `完整`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        d === `root` &&
                          Object.entries(gs).map(([e, t]) => {
                            let n = m.foundReferences.filter((e) =>
                              t.patterns.some((t) => e.startsWith(t)),
                            );
                            if (n.length < 1) return null;
                            let r = Object.keys(ms).filter((e) =>
                                t.patterns.some((t) => e.startsWith(t)),
                              ).length,
                              i = go(m.config.hints)
                                .with(`full`, () =>
                                  n.length < r ? `  (*)` : null,
                                )
                                .otherwise(() => null),
                              a = n.filter((e) => e === `msg-4`),
                              o = m.gameFinished ? a : n;
                            return (0, z.jsxs)(
                              `div`,
                              {
                                children: [
                                  o.length > 0 &&
                                    (0, z.jsxs)(`h3`, {
                                      children: [t.name, i],
                                    }),
                                  (0, z.jsx)(`ul`, {
                                    children: o.sort().map((t) =>
                                      (0, z.jsx)(
                                        `li`,
                                        {
                                          children: (0, z.jsxs)(`button`, {
                                            onClick: () => {
                                              v(t);
                                            },
                                            className: t,
                                            children: [
                                              Zm(t),
                                              go(m.config.hints)
                                                .with(L.not(`none`), () =>
                                                  (mm[t]?.filter(
                                                    (e) =>
                                                      !m.foundReferences.includes(
                                                        e,
                                                      ),
                                                  ).length ?? 0) < 1
                                                    ? null
                                                    : ` (*)`,
                                                )
                                                .otherwise(() => null),
                                            ],
                                          }),
                                        },
                                        `cat-${e}-entry-${t}`,
                                      ),
                                    ),
                                  }),
                                ],
                              },
                              `cat-${e}-title`,
                            );
                          }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: `bottom-bar`,
                      children: [
                        (0, z.jsxs)(`span`, { children: [C, `/`, S] }),
                        p
                          ? (0, z.jsx)(`span`, {
                              className: `new-doc-notif`,
                              children: p,
                            })
                          : h &&
                            (0, z.jsxs)(`span`, {
                              className: `new-doc-notif`,
                              children: [
                                `文档 [`,
                                g,
                                `] 已添加到根目录Root 索引`,
                              ],
                            }),
                        (0, z.jsxs)(`span`, {
                          className: `apos-version`,
                          children: [`APOS v`, bs],
                        }),
                      ],
                    }),
                    (0, z.jsx)(pm, {}),
                  ],
                }),
              ),
          ],
        }),
      ],
    });
  },
  Sm = () => (0, z.jsx)(Is, { children: (0, z.jsx)(xm, {}) }),
  Cm = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), E()));
        else {
          var t = n(l);
          t !== null && ie(x, t.startTime - e);
        }
    }
    var ee = !1,
      S = -1,
      C = 5,
      w = -1;
    function T() {
      return g ? !0 : !(e.unstable_now() - w < C);
    }
    function te() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        w = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && T());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ie(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? E() : (ee = !1);
        }
      }
    }
    var E;
    if (typeof y == `function`)
      E = function () {
        y(te);
      };
    else if (typeof MessageChannel < `u`) {
      var ne = new MessageChannel(),
        re = ne.port2;
      ((ne.port1.onmessage = te),
        (E = function () {
          re.postMessage(null);
        }));
    } else
      E = function () {
        _(te, 0);
      };
    function ie(t, n) {
      S = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), ie(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), E()))),
          r
        );
      }),
      (e.unstable_shouldYield = T),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  wm = o((e, t) => {
    t.exports = Cm();
  }),
  Tm = o((e) => {
    var t = d();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.5`));
  }),
  Em = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = Tm()));
  }),
  Dm = o((e) => {
    var t = wm(),
      n = d(),
      r = Em();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
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
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function f(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = f(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var p = Object.assign,
      m = Symbol.for(`react.element`),
      h = Symbol.for(`react.transitional.element`),
      g = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      v = Symbol.for(`react.strict_mode`),
      y = Symbol.for(`react.profiler`),
      b = Symbol.for(`react.consumer`),
      x = Symbol.for(`react.context`),
      ee = Symbol.for(`react.forward_ref`),
      S = Symbol.for(`react.suspense`),
      C = Symbol.for(`react.suspense_list`),
      w = Symbol.for(`react.memo`),
      T = Symbol.for(`react.lazy`),
      te = Symbol.for(`react.activity`),
      E = Symbol.for(`react.memo_cache_sentinel`),
      ne = Symbol.iterator;
    function re(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ne && e[ne]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ie = Symbol.for(`react.client.reference`);
    function ae(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ie ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case _:
          return `Fragment`;
        case y:
          return `Profiler`;
        case v:
          return `StrictMode`;
        case S:
          return `Suspense`;
        case C:
          return `SuspenseList`;
        case te:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case g:
            return `Portal`;
          case x:
            return e.displayName || `Context`;
          case b:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case ee:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case w:
            return (
              (t = e.displayName || null),
              t === null ? ae(e.type) || `Memo` : t
            );
          case T:
            ((t = e._payload), (e = e._init));
            try {
              return ae(e(t));
            } catch {}
        }
      return null;
    }
    var oe = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = { pending: !1, data: null, method: null, action: null },
      se = [],
      ce = -1;
    function le(e) {
      return { current: e };
    }
    function ue(e) {
      0 > ce || ((e.current = se[ce]), (se[ce] = null), ce--);
    }
    function A(e, t) {
      (ce++, (se[ce] = e.current), (e.current = t));
    }
    var de = le(null),
      fe = le(null),
      pe = le(null),
      me = le(null);
    function he(e, t) {
      switch ((A(pe, t), A(fe, e), A(de, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? zd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = zd(t)), (e = Bd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (ue(de), A(de, e));
    }
    function ge() {
      (ue(de), ue(fe), ue(pe));
    }
    function _e(e) {
      e.memoizedState !== null && A(me, e);
      var t = de.current,
        n = Bd(t, e.type);
      t !== n && (A(fe, e), A(de, n));
    }
    function ve(e) {
      (fe.current === e && (ue(de), ue(fe)),
        me.current === e && (ue(me), (Xf._currentValue = k)));
    }
    var ye, be;
    function xe(e) {
      if (ye === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ye = (t && t[1]) || ``),
            (be =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        ye +
        e +
        be
      );
    }
    var Se = !1;
    function Ce(e, t) {
      if (!e || Se) return ``;
      Se = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Se = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? xe(n) : ``;
    }
    function we(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return xe(e.type);
        case 16:
          return xe(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? xe(`Suspense Fallback`)
            : xe(`Suspense`);
        case 19:
          return xe(`SuspenseList`);
        case 0:
        case 15:
          return Ce(e.type, !1);
        case 11:
          return Ce(e.type.render, !1);
        case 1:
          return Ce(e.type, !0);
        case 31:
          return xe(`Activity`);
        default:
          return ``;
      }
    }
    function Te(e) {
      try {
        var t = ``,
          n = null;
        do ((t += we(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ee = Object.prototype.hasOwnProperty,
      De = t.unstable_scheduleCallback,
      Oe = t.unstable_cancelCallback,
      ke = t.unstable_shouldYield,
      Ae = t.unstable_requestPaint,
      je = t.unstable_now,
      Me = t.unstable_getCurrentPriorityLevel,
      Ne = t.unstable_ImmediatePriority,
      Pe = t.unstable_UserBlockingPriority,
      Fe = t.unstable_NormalPriority,
      Ie = t.unstable_LowPriority,
      Le = t.unstable_IdlePriority,
      Re = t.log,
      ze = t.unstable_setDisableYieldValue,
      Be = null,
      Ve = null;
    function He(e) {
      if (
        (typeof Re == `function` && ze(e),
        Ve && typeof Ve.setStrictMode == `function`)
      )
        try {
          Ve.setStrictMode(Be, e);
        } catch {}
    }
    var Ue = Math.clz32 ? Math.clz32 : Ke,
      We = Math.log,
      Ge = Math.LN2;
    function Ke(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((We(e) / Ge) | 0)) | 0);
    }
    var qe = 256,
      Je = 262144,
      Ye = 4194304;
    function Xe(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ze(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Xe(n)))
                : (i = Xe(o))
              : (i = Xe(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Xe(n)))
                  : (i = Xe(o)))
              : (i = Xe(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function Qe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function $e(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function et() {
      var e = Ye;
      return ((Ye <<= 1), !(Ye & 62914560) && (Ye = 4194304), e);
    }
    function tt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function nt(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function rt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ue(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && it(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function it(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ue(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function at(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ue(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ot(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : st(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function st(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ct(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function lt() {
      var e = O.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : fp(e.type)) : e;
    }
    function ut(e, t) {
      var n = O.p;
      try {
        return ((O.p = e), t());
      } finally {
        O.p = n;
      }
    }
    var dt = Math.random().toString(36).slice(2),
      ft = `__reactFiber$` + dt,
      pt = `__reactProps$` + dt,
      mt = `__reactContainer$` + dt,
      ht = `__reactEvents$` + dt,
      gt = `__reactListeners$` + dt,
      _t = `__reactHandles$` + dt,
      vt = `__reactResources$` + dt,
      yt = `__reactMarker$` + dt;
    function bt(e) {
      (delete e[ft], delete e[pt], delete e[ht], delete e[gt], delete e[_t]);
    }
    function xt(e) {
      var t = e[ft];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[mt] || n[ft])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = lf(e); e !== null; ) {
              if ((n = e[ft])) return n;
              e = lf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function St(e) {
      if ((e = e[ft] || e[mt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Ct(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function wt(e) {
      var t = e[vt];
      return (
        (t ||= e[vt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Tt(e) {
      e[yt] = !0;
    }
    var Et = new Set(),
      Dt = {};
    function Ot(e, t) {
      (j(e, t), j(e + `Capture`, t));
    }
    function j(e, t) {
      for (Dt[e] = t, e = 0; e < t.length; e++) Et.add(t[e]);
    }
    var kt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      At = {},
      jt = {};
    function Mt(e) {
      return Ee.call(jt, e)
        ? !0
        : Ee.call(At, e)
          ? !1
          : kt.test(e)
            ? (jt[e] = !0)
            : ((At[e] = !0), !1);
    }
    function Nt(e, t, n) {
      if (Mt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Pt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Ft(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function It(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Lt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Rt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function zt(e) {
      if (!e._valueTracker) {
        var t = Lt(e) ? `checked` : `value`;
        e._valueTracker = Rt(e, t, `` + e[t]);
      }
    }
    function Bt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Lt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Vt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ht = /[\n"\\]/g;
    function Ut(e) {
      return e.replace(Ht, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Wt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + It(t))
            : e.value !== `` + It(t) && (e.value = `` + It(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Kt(e, o, It(n))
          : Kt(e, o, It(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + It(s))
          : e.removeAttribute(`name`));
    }
    function Gt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          zt(e);
          return;
        }
        ((n = n == null ? `` : `` + It(n)),
          (t = t == null ? n : `` + It(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        zt(e));
    }
    function Kt(e, t, n) {
      (t === `number` && Vt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + It(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Jt(e, t, n) {
      if (
        t != null &&
        ((t = `` + It(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + It(n);
    }
    function Yt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (oe(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = It(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        zt(e));
    }
    function Xt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Zt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Qt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Zt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function $t(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Qt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o]);
    }
    function en(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var tn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      nn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function rn(e) {
      return nn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function an() {}
    var on = null;
    function sn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var cn = null,
      ln = null;
    function un(e) {
      var t = St(e);
      if (t && (e = t.stateNode)) {
        var n = e[pt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Wt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ut(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[pt] || null;
                  if (!a) throw Error(i(90));
                  Wt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Bt(r));
            }
            break a;
          case `textarea`:
            Jt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && qt(e, !!n.multiple, t, !1));
        }
      }
    }
    var dn = !1;
    function fn(e, t, n) {
      if (dn) return e(t, n);
      dn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((dn = !1),
          (cn !== null || ln !== null) &&
            (vu(), cn && ((t = cn), (e = ln), (ln = cn = null), un(t), e)))
        )
          for (t = 0; t < e.length; t++) un(e[t]);
      }
    }
    function pn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[pt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var mn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      hn = !1;
    if (mn)
      try {
        var gn = {};
        (Object.defineProperty(gn, `passive`, {
          get: function () {
            hn = !0;
          },
        }),
          window.addEventListener(`test`, gn, gn),
          window.removeEventListener(`test`, gn, gn));
      } catch {
        hn = !1;
      }
    var _n = null,
      vn = null,
      yn = null;
    function bn() {
      if (yn) return yn;
      var e,
        t = vn,
        n = t.length,
        r,
        i = `value` in _n ? _n.value : _n.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (yn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function xn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Sn() {
      return !0;
    }
    function Cn() {
      return !1;
    }
    function wn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Sn
            : Cn),
          (this.isPropagationStopped = Cn),
          this
        );
      }
      return (
        p(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Sn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Sn));
          },
          persist: function () {},
          isPersistent: Sn,
        }),
        t
      );
    }
    var Tn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      En = wn(Tn),
      Dn = p({}, Tn, { view: 0, detail: 0 }),
      On = wn(Dn),
      kn,
      An,
      jn,
      Mn = p({}, Dn, {
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
        getModifierState: Un,
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
          return `movementX` in e
            ? e.movementX
            : (e !== jn &&
                (jn && e.type === `mousemove`
                  ? ((kn = e.screenX - jn.screenX),
                    (An = e.screenY - jn.screenY))
                  : (An = kn = 0),
                (jn = e)),
              kn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : An;
        },
      }),
      Nn = wn(Mn),
      Pn = wn(p({}, Mn, { dataTransfer: 0 })),
      Fn = wn(p({}, Dn, { relatedTarget: 0 })),
      In = wn(
        p({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Ln = wn(
        p({}, Tn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Rn = wn(p({}, Tn, { data: 0 })),
      zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Bn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Vn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Hn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Vn[e])
          ? !!t[e]
          : !1;
    }
    function Un() {
      return Hn;
    }
    var Wn = wn(
        p({}, Dn, {
          key: function (e) {
            if (e.key) {
              var t = zn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = xn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Bn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Un,
          charCode: function (e) {
            return e.type === `keypress` ? xn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? xn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Gn = wn(
        p({}, Mn, {
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
      ),
      Kn = wn(
        p({}, Dn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Un,
        }),
      ),
      qn = wn(p({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Jn = wn(
        p({}, Mn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Yn = wn(p({}, Tn, { newState: 0, oldState: 0 })),
      Xn = [9, 13, 27, 32],
      Zn = mn && `CompositionEvent` in window,
      Qn = null;
    mn && `documentMode` in document && (Qn = document.documentMode);
    var $n = mn && `TextEvent` in window && !Qn,
      er = mn && (!Zn || (Qn && 8 < Qn && 11 >= Qn)),
      tr = ` `,
      nr = !1;
    function rr(e, t) {
      switch (e) {
        case `keyup`:
          return Xn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function ir(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var ar = !1;
    function or(e, t) {
      switch (e) {
        case `compositionend`:
          return ir(t);
        case `keypress`:
          return t.which === 32 ? ((nr = !0), tr) : null;
        case `textInput`:
          return ((e = t.data), e === tr && nr ? null : e);
        default:
          return null;
      }
    }
    function sr(e, t) {
      if (ar)
        return e === `compositionend` || (!Zn && rr(e, t))
          ? ((e = bn()), (yn = vn = _n = null), (ar = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return er && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var cr = {
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
    function lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!cr[e.type] : t === `textarea`;
    }
    function ur(e, t, n, r) {
      (cn ? (ln ? ln.push(r) : (ln = [r])) : (cn = r),
        (t = wd(t, `onChange`)),
        0 < t.length &&
          ((n = new En(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var dr = null,
      fr = null;
    function pr(e) {
      _d(e, 0);
    }
    function mr(e) {
      if (Bt(Ct(e))) return e;
    }
    function hr(e, t) {
      if (e === `change`) return t;
    }
    var gr = !1;
    if (mn) {
      var _r;
      if (mn) {
        var vr = `oninput` in document;
        if (!vr) {
          var yr = document.createElement(`div`);
          (yr.setAttribute(`oninput`, `return;`),
            (vr = typeof yr.oninput == `function`));
        }
        _r = vr;
      } else _r = !1;
      gr = _r && (!document.documentMode || 9 < document.documentMode);
    }
    function br() {
      dr && (dr.detachEvent(`onpropertychange`, xr), (fr = dr = null));
    }
    function xr(e) {
      if (e.propertyName === `value` && mr(fr)) {
        var t = [];
        (ur(t, fr, e, sn(e)), fn(pr, t));
      }
    }
    function Sr(e, t, n) {
      e === `focusin`
        ? (br(), (dr = t), (fr = n), dr.attachEvent(`onpropertychange`, xr))
        : e === `focusout` && br();
    }
    function Cr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return mr(fr);
    }
    function wr(e, t) {
      if (e === `click`) return mr(t);
    }
    function Tr(e, t) {
      if (e === `input` || e === `change`) return mr(t);
    }
    function Er(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Dr = typeof Object.is == `function` ? Object.is : Er;
    function Or(e, t) {
      if (Dr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ee.call(t, i) || !Dr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function kr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ar(e, t) {
      var n = kr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = kr(n);
      }
    }
    function jr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? jr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Mr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Vt(e.document);
      }
      return t;
    }
    function Nr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Pr = mn && `documentMode` in document && 11 >= document.documentMode,
      Fr = null,
      Ir = null,
      Lr = null,
      Rr = !1;
    function zr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Rr ||
        Fr == null ||
        Fr !== Vt(r) ||
        ((r = Fr),
        `selectionStart` in r && Nr(r)
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
        (Lr && Or(Lr, r)) ||
          ((Lr = r),
          (r = wd(Ir, `onSelect`)),
          0 < r.length &&
            ((t = new En(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Fr))));
    }
    function Br(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Vr = {
        animationend: Br(`Animation`, `AnimationEnd`),
        animationiteration: Br(`Animation`, `AnimationIteration`),
        animationstart: Br(`Animation`, `AnimationStart`),
        transitionrun: Br(`Transition`, `TransitionRun`),
        transitionstart: Br(`Transition`, `TransitionStart`),
        transitioncancel: Br(`Transition`, `TransitionCancel`),
        transitionend: Br(`Transition`, `TransitionEnd`),
      },
      Hr = {},
      Ur = {};
    mn &&
      ((Ur = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Vr.animationend.animation,
        delete Vr.animationiteration.animation,
        delete Vr.animationstart.animation),
      `TransitionEvent` in window || delete Vr.transitionend.transition);
    function Wr(e) {
      if (Hr[e]) return Hr[e];
      if (!Vr[e]) return e;
      var t = Vr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Ur) return (Hr[e] = t[n]);
      return e;
    }
    var Gr = Wr(`animationend`),
      Kr = Wr(`animationiteration`),
      qr = Wr(`animationstart`),
      Jr = Wr(`transitionrun`),
      Yr = Wr(`transitionstart`),
      Xr = Wr(`transitioncancel`),
      Zr = Wr(`transitionend`),
      Qr = new Map(),
      $r =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    $r.push(`scrollEnd`);
    function ei(e, t) {
      (Qr.set(e, t), Ot(t, [e]));
    }
    var ti =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ni = [],
      ri = 0,
      ii = 0;
    function ai() {
      for (var e = ri, t = (ii = ri = 0); t < e; ) {
        var n = ni[t];
        ni[t++] = null;
        var r = ni[t];
        ni[t++] = null;
        var i = ni[t];
        ni[t++] = null;
        var a = ni[t];
        if (((ni[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && li(n, i, a);
      }
    }
    function oi(e, t, n, r) {
      ((ni[ri++] = e),
        (ni[ri++] = t),
        (ni[ri++] = n),
        (ni[ri++] = r),
        (ii |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function si(e, t, n, r) {
      return (oi(e, t, n, r), ui(e));
    }
    function ci(e, t) {
      return (oi(e, null, null, t), ui(e));
    }
    function li(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ue(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ui(e) {
      if (50 < lu) throw ((lu = 0), (uu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var di = {};
    function fi(e, t, n, r) {
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
        (this.refCleanup = this.ref = null),
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
    function pi(e, t, n, r) {
      return new fi(e, t, n, r);
    }
    function mi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = pi(e.tag, t, e.key, e.mode)),
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
        (n.flags = e.flags & 65011712),
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
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function gi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function _i(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) mi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Vf(e, n, de.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case te:
            return (
              (e = pi(31, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          case _:
            return vi(n.children, a, o, t);
          case v:
            ((s = 8), (a |= 24));
            break;
          case y:
            return (
              (e = pi(12, n, t, a | 2)),
              (e.elementType = y),
              (e.lanes = o),
              e
            );
          case S:
            return (
              (e = pi(13, n, t, a)),
              (e.elementType = S),
              (e.lanes = o),
              e
            );
          case C:
            return (
              (e = pi(19, n, t, a)),
              (e.elementType = C),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case x:
                  s = 10;
                  break a;
                case b:
                  s = 9;
                  break a;
                case ee:
                  s = 11;
                  break a;
                case w:
                  s = 14;
                  break a;
                case T:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = pi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function vi(e, t, n, r) {
      return ((e = pi(7, e, r, t)), (e.lanes = n), e);
    }
    function yi(e, t, n) {
      return ((e = pi(6, e, null, t)), (e.lanes = n), e);
    }
    function bi(e) {
      var t = pi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function xi(e, t, n) {
      return (
        (t = pi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Si = new WeakMap();
    function Ci(e, t) {
      if (typeof e == `object` && e) {
        var n = Si.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Te(t) }), Si.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Te(t) };
    }
    var wi = [],
      Ti = 0,
      Ei = null,
      Di = 0,
      Oi = [],
      ki = 0,
      M = null,
      Ai = 1,
      ji = ``;
    function Mi(e, t) {
      ((wi[Ti++] = Di), (wi[Ti++] = Ei), (Ei = e), (Di = t));
    }
    function Ni(e, t, n) {
      ((Oi[ki++] = Ai), (Oi[ki++] = ji), (Oi[ki++] = M), (M = e));
      var r = Ai;
      e = ji;
      var i = 32 - Ue(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ue(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ai = (1 << (32 - Ue(t) + i)) | (n << i) | r),
          (ji = a + e));
      } else ((Ai = (1 << a) | (n << i) | r), (ji = e));
    }
    function Pi(e) {
      e.return !== null && (Mi(e, 1), Ni(e, 1, 0));
    }
    function Fi(e) {
      for (; e === Ei; )
        ((Ei = wi[--Ti]), (wi[Ti] = null), (Di = wi[--Ti]), (wi[Ti] = null));
      for (; e === M; )
        ((M = Oi[--ki]),
          (Oi[ki] = null),
          (ji = Oi[--ki]),
          (Oi[ki] = null),
          (Ai = Oi[--ki]),
          (Oi[ki] = null));
    }
    function Ii(e, t) {
      ((Oi[ki++] = Ai),
        (Oi[ki++] = ji),
        (Oi[ki++] = M),
        (Ai = t.id),
        (ji = t.overflow),
        (M = e));
    }
    var Li = null,
      Ri = null,
      N = !1,
      zi = null,
      Bi = !1,
      Vi = Error(i(519));
    function Hi(e) {
      throw (
        Ji(
          Ci(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Vi
      );
    }
    function Ui(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ft] = e), (t[pt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < hd.length; n++) Q(hd[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Gt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Yt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Ad(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = an),
            (t = !0))
          : (t = !1),
        t || Hi(e, !0));
    }
    function Wi(e) {
      for (Li = e.return; Li; )
        switch (Li.tag) {
          case 5:
          case 31:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            Li = Li.return;
        }
    }
    function Gi(e) {
      if (e !== Li) return !1;
      if (!N) return (Wi(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Vd(e.type, e.memoizedProps))),
          (n = !n)),
        n && Ri && Hi(e),
        Wi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Ri = cf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Ri = cf(e);
      } else
        t === 27
          ? ((t = Ri),
            Yd(e.type) ? ((e = sf), (sf = null), (Ri = e)) : (Ri = t))
          : (Ri = Li ? of(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Ki() {
      ((Ri = Li = null), (N = !1));
    }
    function qi() {
      var e = zi;
      return (
        e !== null &&
          (Yl === null ? (Yl = e) : Yl.push.apply(Yl, e), (zi = null)),
        e
      );
    }
    function Ji(e) {
      zi === null ? (zi = [e]) : zi.push(e);
    }
    var Yi = le(null),
      Xi = null,
      Zi = null;
    function Qi(e, t, n) {
      (A(Yi, t._currentValue), (t._currentValue = n));
    }
    function $i(e) {
      ((e._currentValue = Yi.current), ue(Yi));
    }
    function ea(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function ta(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ea(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ea(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function na(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Dr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === me.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Xf]) : e.push(Xf));
        }
        a = a.return;
      }
      (e !== null && ta(t, e, n, r), (t.flags |= 262144));
    }
    function ra(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Dr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ia(e) {
      ((Xi = e),
        (Zi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function aa(e) {
      return sa(Xi, e);
    }
    function oa(e, t) {
      return (Xi === null && ia(e), sa(e, t));
    }
    function sa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Zi === null)) {
        if (e === null) throw Error(i(308));
        ((Zi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Zi = Zi.next = t;
      return n;
    }
    var ca =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      la = t.unstable_scheduleCallback,
      ua = t.unstable_NormalPriority,
      da = {
        $$typeof: x,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function fa() {
      return { controller: new ca(), data: new Map(), refCount: 0 };
    }
    function pa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          la(ua, function () {
            e.controller.abort();
          }));
    }
    var ma = null,
      ha = 0,
      ga = 0,
      _a = null;
    function va(e, t) {
      if (ma === null) {
        var n = (ma = []);
        ((ha = 0),
          (ga = ld()),
          (_a = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ha++, t.then(ya, ya), t);
    }
    function ya() {
      if (--ha === 0 && ma !== null) {
        _a !== null && (_a.status = `fulfilled`);
        var e = ma;
        ((ma = null), (ga = 0), (_a = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ba(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var xa = D.S;
    D.S = function (e, t) {
      ((Ql = je()),
        typeof t == `object` && t && typeof t.then == `function` && va(e, t),
        xa !== null && xa(e, t));
    };
    var Sa = le(null);
    function Ca() {
      var e = Sa.current;
      return e === null ? q.pooledCache : e;
    }
    function wa(e, t) {
      t === null ? A(Sa, Sa.current) : A(Sa, t.pool);
    }
    function Ta() {
      var e = Ca();
      return e === null ? null : { parent: da._currentValue, pool: e };
    }
    var Ea = Error(i(460)),
      Da = Error(i(474)),
      Oa = Error(i(542)),
      ka = { then: function () {} };
    function Aa(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function ja(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(an, an), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Fa(e), e);
        default:
          if (typeof t.status == `string`) t.then(an, an);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Fa(e), e);
          }
          throw ((Na = t), Ea);
      }
    }
    function Ma(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Na = e), Ea)
          : e;
      }
    }
    var Na = null;
    function Pa() {
      if (Na === null) throw Error(i(459));
      var e = Na;
      return ((Na = null), e);
    }
    function Fa(e) {
      if (e === Ea || e === Oa) throw Error(i(483));
    }
    var Ia = null,
      La = 0;
    function Ra(e) {
      var t = La;
      return ((La += 1), Ia === null && (Ia = []), ja(Ia, e, t));
    }
    function P(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function za(e, t) {
      throw t.$$typeof === m
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ba(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === _
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === T &&
                  Ma(i) === t.type))
            ? ((t = a(t, n.props)), P(t, n), (t.return = e), t)
            : ((t = _i(n.type, n.key, n.props, null, e.mode, r)),
              P(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = vi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = yi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case h:
              return (
                (n = _i(t.type, t.key, t.props, null, e.mode, n)),
                P(n, t),
                (n.return = e),
                n
              );
            case g:
              return ((t = xi(t, e.mode, n)), (t.return = e), t);
            case T:
              return ((t = Ma(t)), f(e, t, n));
          }
          if (oe(t) || re(t))
            return ((t = vi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ra(t), n);
          if (t.$$typeof === x) return f(e, oa(e, t), n);
          za(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case h:
              return n.key === i ? l(e, t, n, r) : null;
            case g:
              return n.key === i ? u(e, t, n, r) : null;
            case T:
              return ((n = Ma(n)), p(e, t, n, r));
          }
          if (oe(n) || re(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ra(n), r);
          if (n.$$typeof === x) return p(e, t, oa(e, n), r);
          za(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case h:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case g:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case T:
              return ((r = Ma(r)), m(e, t, n, r, i));
          }
          if (oe(r) || re(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Ra(r), i);
          if (r.$$typeof === x) return m(e, t, n, oa(t, r), i);
          za(t, r);
        }
        return null;
      }
      function v(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), N && Mi(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (N && Mi(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          N && Mi(i, h),
          l
        );
      }
      function y(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), N && Mi(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (N && Mi(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          N && Mi(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === _ &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case h:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === _)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === T &&
                        Ma(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        P(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === _
                  ? ((c = vi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = _i(o.type, o.key, o.props, null, e.mode, c)),
                    P(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case g:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = xi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case T:
              return ((o = Ma(o)), b(e, r, o, c));
          }
          if (oe(o)) return v(e, r, o, c);
          if (re(o)) {
            if (((l = re(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Ra(o), c);
          if (o.$$typeof === x) return b(e, r, oa(e, o), c);
          za(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = yi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          La = 0;
          var i = b(e, t, n, r);
          return ((Ia = null), i);
        } catch (t) {
          if (t === Ea || t === Oa) throw t;
          var a = pi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Va = Ba(!0),
      Ha = Ba(!1),
      Ua = !1;
    function Wa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ga(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ka(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function qa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ui(e)),
          li(e, null, n),
          t
        );
      }
      return (oi(e, r, t, n), ui(e));
    }
    function Ja(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n));
      }
    }
    function Ya(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Xa = !1;
    function Za() {
      if (Xa) {
        var e = _a;
        if (e !== null) throw e;
      }
    }
    function Qa(e, t, n, r) {
      Xa = !1;
      var i = e.updateQueue;
      Ua = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            m = f !== s.lane;
          if (m ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === ga && (Xa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a;
                  d = p({}, d, f);
                  break a;
                case 2:
                  Ua = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [f]) : m.push(f)));
          } else
            ((m = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Ul |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function $a(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function eo(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) $a(n[e], t);
    }
    var to = le(null),
      F = le(0);
    function no(e, t) {
      ((e = Vl), A(F, e), A(to, t), (Vl = e | t.baseLanes));
    }
    function ro() {
      (A(F, Vl), A(to, to.current));
    }
    function io() {
      ((Vl = F.current), ue(to), ue(F));
    }
    var ao = le(null),
      oo = null;
    function so(e) {
      var t = e.alternate;
      (A(I, I.current & 1),
        A(ao, e),
        oo === null &&
          (t === null || to.current !== null || t.memoizedState !== null) &&
          (oo = e));
    }
    function co(e) {
      (A(I, I.current), A(ao, e), oo === null && (oo = e));
    }
    function lo(e) {
      e.tag === 22
        ? (A(I, I.current), A(ao, e), oo === null && (oo = e))
        : uo(e);
    }
    function uo() {
      (A(I, I.current), A(ao, ao.current));
    }
    function fo(e) {
      (ue(ao), oo === e && (oo = null), ue(I));
    }
    var I = le(0);
    function po(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || nf(n) || rf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
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
    var mo = 0,
      L = null,
      R = null,
      ho = null,
      go = !1,
      _o = !1,
      vo = !1,
      yo = 0,
      bo = 0,
      xo = null,
      So = 0;
    function Co() {
      throw Error(i(321));
    }
    function wo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dr(e[n], t[n])) return !1;
      return !0;
    }
    function To(e, t, n, r, i, a) {
      return (
        (mo = a),
        (L = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? Vs : Hs),
        (vo = !1),
        (a = n(r, i)),
        (vo = !1),
        _o && (a = Do(t, n, r, i)),
        Eo(e),
        a
      );
    }
    function Eo(e) {
      D.H = Bs;
      var t = R !== null && R.next !== null;
      if (((mo = 0), (ho = R = L = null), (go = !1), (bo = 0), (xo = null), t))
        throw Error(i(300));
      e === null ||
        nc ||
        ((e = e.dependencies), e !== null && ra(e) && (nc = !0));
    }
    function Do(e, t, n, r) {
      L = e;
      var a = 0;
      do {
        if ((_o && (xo = null), (bo = 0), (_o = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (ho = R = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((D.H = Us), (o = t(n, r)));
      } while (_o);
      return o;
    }
    function Oo() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Fo(t) : t),
        (e = e.useState()[0]),
        (R === null ? null : R.memoizedState) !== e && (L.flags |= 1024),
        t
      );
    }
    function ko() {
      var e = yo !== 0;
      return ((yo = 0), e);
    }
    function Ao(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function jo(e) {
      if (go) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        go = !1;
      }
      ((mo = 0), (ho = R = L = null), (_o = !1), (bo = yo = 0), (xo = null));
    }
    function Mo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        ho === null ? (L.memoizedState = ho = e) : (ho = ho.next = e),
        ho
      );
    }
    function No() {
      if (R === null) {
        var e = L.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = R.next;
      var t = ho === null ? L.memoizedState : ho.next;
      if (t !== null) ((ho = t), (R = e));
      else {
        if (e === null)
          throw L.alternate === null ? Error(i(467)) : Error(i(310));
        ((R = e),
          (e = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null,
          }),
          ho === null ? (L.memoizedState = ho = e) : (ho = ho.next = e));
      }
      return ho;
    }
    function Po() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fo(e) {
      var t = bo;
      return (
        (bo += 1),
        xo === null && (xo = []),
        (e = ja(xo, e, t)),
        (t = L),
        (ho === null ? t.memoizedState : ho.next) === null &&
          ((t = t.alternate),
          (D.H = t === null || t.memoizedState === null ? Vs : Hs)),
        e
      );
    }
    function Io(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Fo(e);
        if (e.$$typeof === x) return aa(e);
      }
      throw Error(i(438, String(e)));
    }
    function Lo(e) {
      var t = null,
        n = L.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = L.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Po()), (L.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = E;
      return (t.index++, n);
    }
    function Ro(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function zo(e) {
      return Bo(No(), R, e);
    }
    function Bo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (mo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ga && (d = !0));
            else if ((mo & p) === p) {
              ((u = u.next), p === ga && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (L.lanes |= p),
                (Ul |= p));
            ((f = u.action),
              vo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (L.lanes |= f),
              (Ul |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Dr(o, e.memoizedState) && ((nc = !0), d && ((n = _a), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Vo(e) {
      var t = No(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Dr(o, t.memoizedState) || (nc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Ho(e, t, n) {
      var r = L,
        a = No(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Dr((R || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (nc = !0)),
        (a = a.queue),
        ps(Go.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (ho !== null && ho.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          cs(9, { destroy: void 0 }, Wo.bind(null, r, a, n, t), null),
          q === null)
        )
          throw Error(i(349));
        o || mo & 127 || Uo(r, t, n);
      }
      return n;
    }
    function Uo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = L.updateQueue),
        t === null
          ? ((t = Po()), (L.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Wo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ko(t) && qo(e));
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e);
      });
    }
    function Ko(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Dr(e, n);
      } catch {
        return !0;
      }
    }
    function qo(e) {
      var t = ci(e, 2);
      t !== null && pu(t, e, 2);
    }
    function Jo(e) {
      var t = Mo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), vo)) {
          He(!0);
          try {
            n();
          } finally {
            He(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Yo(e, t, n, r) {
      return ((e.baseState = n), Bo(e, R, typeof r == `function` ? r : Ro));
    }
    function Xo(e, t, n, r, a) {
      if (Ls(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (D.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Zo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Zo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        D.T = o;
        try {
          var s = n(i, r),
            c = D.S;
          (c !== null && c(o, s), Qo(e, t, s));
        } catch (n) {
          es(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (D.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Qo(e, t, a));
        } catch (n) {
          es(e, t, n);
        }
    }
    function Qo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              $o(e, t, n);
            },
            function (n) {
              return es(e, t, n);
            },
          )
        : $o(e, t, n);
    }
    function $o(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        ts(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Zo(e, n))));
    }
    function es(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), ts(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function ts(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ns(e, t) {
      return t;
    }
    function rs(e, t) {
      if (N) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = L;
            if (N) {
              if (Ri) {
                b: {
                  for (var i = Ri, a = Bi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = of(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((Ri = of(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Hi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Mo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ps.bind(null, L, r)),
        (r.dispatch = n),
        (r = Jo(!1)),
        (a = Is.bind(null, L, !1, r.queue)),
        (r = Mo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Xo.bind(null, L, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function is(e) {
      return as(No(), R, e);
    }
    function as(e, t, n) {
      if (
        ((t = Bo(e, t, ns)[0]),
        (e = zo(Ro)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Fo(t);
        } catch (e) {
          throw e === Ea ? Oa : e;
        }
      else r = t;
      t = No();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((L.flags |= 2048),
          cs(9, { destroy: void 0 }, os.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function os(e, t) {
      e.action = t;
    }
    function ss(e) {
      var t = No(),
        n = R;
      if (n !== null) return as(t, n, e);
      (No(), (t = t.memoizedState), (n = No()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function cs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = L.updateQueue),
        t === null && ((t = Po()), (L.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ls() {
      return No().memoizedState;
    }
    function us(e, t, n, r) {
      var i = Mo();
      ((L.flags |= e),
        (i.memoizedState = cs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ds(e, t, n, r) {
      var i = No();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      R !== null && r !== null && wo(r, R.memoizedState.deps)
        ? (i.memoizedState = cs(t, a, n, r))
        : ((L.flags |= e), (i.memoizedState = cs(1 | t, a, n, r)));
    }
    function fs(e, t) {
      us(8390656, 8, e, t);
    }
    function ps(e, t) {
      ds(2048, 8, e, t);
    }
    function ms(e) {
      L.flags |= 4;
      var t = L.updateQueue;
      if (t === null) ((t = Po()), (L.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function hs(e) {
      var t = No().memoizedState;
      return (
        ms({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function gs(e, t) {
      return ds(4, 2, e, t);
    }
    function _s(e, t) {
      return ds(4, 4, e, t);
    }
    function vs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ds(4, 4, vs.bind(null, t, e), n));
    }
    function bs() {}
    function xs(e, t) {
      var n = No();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && wo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = No();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && wo(t, r[1])) return r[0];
      if (((r = e()), vo)) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (mo & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = fu()), (L.lanes |= e), (Ul |= e), n);
    }
    function ws(e, t, n, r) {
      return Dr(n, t)
        ? n
        : to.current === null
          ? !(mo & 42) || (mo & 1073741824 && !(Y & 261930))
            ? ((nc = !0), (e.memoizedState = n))
            : ((e = fu()), (L.lanes |= e), (Ul |= e), t)
          : ((e = Cs(e, n, r)), Dr(e, t) || (nc = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      ((D.T = s), Is(e, !1, t, n));
      try {
        var c = i(),
          l = D.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Fs(e, t, ba(c, r), du(e))
            : Fs(e, t, r, du(e)));
      } catch (n) {
        Fs(e, t, { then: function () {}, status: `rejected`, reason: n }, du());
      } finally {
        ((O.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (D.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = z(e).queue;
      Ts(
        e,
        a,
        t,
        k,
        n === null
          ? Es
          : function () {
              return (Os(e), n(r));
            },
      );
    }
    function z(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: k,
        baseState: k,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: k,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ro,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Os(e) {
      var t = z(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Fs(e, t.next.queue, {}, du()));
    }
    function ks() {
      return aa(Xf);
    }
    function As() {
      return No().memoizedState;
    }
    function js() {
      return No().memoizedState;
    }
    function Ms(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = du();
            e = Ka(n);
            var r = qa(t, e, n);
            (r !== null && (pu(r, t, n), Ja(r, t, n)),
              (t = { cache: fa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ns(e, t, n) {
      var r = du();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ls(e)
          ? Rs(t, n)
          : ((n = si(e, t, n, r)), n !== null && (pu(n, e, r), zs(n, t, r))));
    }
    function Ps(e, t, n) {
      Fs(e, t, n, du());
    }
    function Fs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Ls(e)) Rs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Dr(s, o)))
              return (oi(e, t, i, 0), q === null && ai(), !1);
          } catch {}
        if (((n = si(e, t, i, r)), n !== null))
          return (pu(n, e, r), zs(n, t, r), !0);
      }
      return !1;
    }
    function Is(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: ld(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Ls(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = si(e, n, r, 2)), t !== null && pu(t, e, 2));
    }
    function Ls(e) {
      var t = e.alternate;
      return e === L || (t !== null && t === L);
    }
    function Rs(e, t) {
      _o = go = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function zs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n));
      }
    }
    var Bs = {
      readContext: aa,
      use: Io,
      useCallback: Co,
      useContext: Co,
      useEffect: Co,
      useImperativeHandle: Co,
      useLayoutEffect: Co,
      useInsertionEffect: Co,
      useMemo: Co,
      useReducer: Co,
      useRef: Co,
      useState: Co,
      useDebugValue: Co,
      useDeferredValue: Co,
      useTransition: Co,
      useSyncExternalStore: Co,
      useId: Co,
      useHostTransitionStatus: Co,
      useFormState: Co,
      useActionState: Co,
      useOptimistic: Co,
      useMemoCache: Co,
      useCacheRefresh: Co,
    };
    Bs.useEffectEvent = Co;
    var Vs = {
        readContext: aa,
        use: Io,
        useCallback: function (e, t) {
          return ((Mo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: aa,
        useEffect: fs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            us(4194308, 4, vs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return us(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          us(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Mo();
          t = t === void 0 ? null : t;
          var r = e();
          if (vo) {
            He(!0);
            try {
              e();
            } finally {
              He(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Mo();
          if (n !== void 0) {
            var i = n(t);
            if (vo) {
              He(!0);
              try {
                n(t);
              } finally {
                He(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ns.bind(null, L, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Mo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Jo(e);
          var t = e.queue,
            n = Ps.bind(null, L, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(Mo(), e, t);
        },
        useTransition: function () {
          var e = Jo(!1);
          return (
            (e = Ts.bind(null, L, e.queue, !0, !1)),
            (Mo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = L,
            a = Mo();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(i(349));
            Y & 127 || Uo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            fs(Go.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            cs(9, { destroy: void 0 }, Wo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Mo(),
            t = q.identifierPrefix;
          if (N) {
            var n = ji,
              r = Ai;
            ((n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = yo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = So++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ks,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: function (e) {
          var t = Mo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Is.bind(null, L, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Lo,
        useCacheRefresh: function () {
          return (Mo().memoizedState = Ms.bind(null, L));
        },
        useEffectEvent: function (e) {
          var t = Mo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Hs = {
        readContext: aa,
        use: Io,
        useCallback: xs,
        useContext: aa,
        useEffect: ps,
        useImperativeHandle: ys,
        useInsertionEffect: gs,
        useLayoutEffect: _s,
        useMemo: Ss,
        useReducer: zo,
        useRef: ls,
        useState: function () {
          return zo(Ro);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(No(), R.memoizedState, e, t);
        },
        useTransition: function () {
          var e = zo(Ro)[0],
            t = No().memoizedState;
          return [typeof e == `boolean` ? e : Fo(e), t];
        },
        useSyncExternalStore: Ho,
        useId: As,
        useHostTransitionStatus: ks,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e, t) {
          return Yo(No(), R, e, t);
        },
        useMemoCache: Lo,
        useCacheRefresh: js,
      };
    Hs.useEffectEvent = hs;
    var Us = {
      readContext: aa,
      use: Io,
      useCallback: xs,
      useContext: aa,
      useEffect: ps,
      useImperativeHandle: ys,
      useInsertionEffect: gs,
      useLayoutEffect: _s,
      useMemo: Ss,
      useReducer: Vo,
      useRef: ls,
      useState: function () {
        return Vo(Ro);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = No();
        return R === null ? Cs(n, e, t) : ws(n, R.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vo(Ro)[0],
          t = No().memoizedState;
        return [typeof e == `boolean` ? e : Fo(e), t];
      },
      useSyncExternalStore: Ho,
      useId: As,
      useHostTransitionStatus: ks,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var n = No();
        return R === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Yo(n, R, e, t);
      },
      useMemoCache: Lo,
      useCacheRefresh: js,
    };
    Us.useEffectEvent = hs;
    function Ws(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : p({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Gs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = du(),
          i = Ka(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (pu(t, e, r), Ja(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = du(),
          i = Ka(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (pu(t, e, r), Ja(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = du(),
          r = Ka(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = qa(e, r, n)),
          t !== null && (pu(t, e, n), Ja(t, e, n)));
      },
    };
    function Ks(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Or(n, r) || !Or(i, a)
            : !0
      );
    }
    function qs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
    }
    function Js(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = p({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ys(e) {
      ti(e);
    }
    function Xs(e) {
      console.error(e);
    }
    function Zs(e) {
      ti(e);
    }
    function B(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      return (
        (n = Ka(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          B(e, t);
        }),
        n
      );
    }
    function V(e) {
      return ((e = Ka(e)), (e.tag = 3), e);
    }
    function H(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Qs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Qs(t, n, r),
            typeof i != `function` &&
              (tu === null ? (tu = new Set([this])) : tu.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ec(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && na(t, n, a, !0),
          (n = ao.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                oo === null
                  ? Tu()
                  : n.alternate === null && Hl === 0 && (Hl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ka
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Uu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === ka
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Uu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Uu(e, r, a), Tu(), !1);
      }
      if (N)
        return (
          (t = ao.current),
          t === null
            ? (r !== Vi && ((t = Error(i(423), { cause: r })), Ji(Ci(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Ci(r, n)),
              (a = $s(e.stateNode, r, a)),
              Ya(e, a),
              Hl !== 4 && (Hl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Vi && ((e = Error(i(422), { cause: r })), Ji(Ci(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Ci(o, n)),
        Jl === null ? (Jl = [o]) : Jl.push(o),
        Hl !== 4 && (Hl = 2),
        t === null)
      )
        return !0;
      ((r = Ci(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = $s(n.stateNode, r, e)),
              Ya(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (tu === null || !tu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = V(a)),
                H(a, e, n, r),
                Ya(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var tc = Error(i(461)),
      nc = !1;
    function rc(e, t, n, r) {
      t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
    }
    function ic(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ia(t),
        (r = To(e, t, n, o, a, i)),
        (s = ko()),
        e !== null && !nc
          ? (Ao(e, t, i), Oc(e, t, i))
          : (N && s && Pi(t), (t.flags |= 1), rc(e, t, r, i), t.child)
      );
    }
    function ac(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !mi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), oc(e, t, a, r, i))
          : ((e = _i(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !kc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Or : n),
          n(o, r) && e.ref === t.ref)
        )
          return Oc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = hi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function oc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Or(a, r) && e.ref === t.ref)
          if (((nc = !1), (t.pendingProps = r = a), kc(e, i)))
            e.flags & 131072 && (nc = !0);
          else return ((t.lanes = e.lanes), Oc(e, t, i));
      }
      return mc(e, t, n, r, i);
    }
    function sc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return lc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && wa(t, a === null ? null : a.cachePool),
            a === null ? ro() : no(t, a),
            lo(t));
        else
          return (
            (r = t.lanes = 536870912),
            lc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && wa(t, null), ro(), uo(t))
          : (wa(t, a.cachePool), no(t, a), uo(t), (t.memoizedState = null));
      return (rc(e, t, i, n), t.child);
    }
    function cc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function lc(e, t, n, r, i) {
      var a = Ca();
      return (
        (a = a === null ? null : { parent: da._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && wa(t, null),
        ro(),
        lo(t),
        e !== null && na(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function uc(e, t) {
      return (
        (t = Cc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function dc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = uc(t, t.pendingProps)),
        (e.flags |= 2),
        fo(t),
        (t.memoizedState = null),
        e
      );
    }
    function fc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`)
            return ((e = uc(t, r)), (t.lanes = 536870912), cc(null, e));
          if (
            (co(t),
            (e = Ri)
              ? ((e = tf(e, Bi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: M === null ? null : { id: Ai, overflow: ji },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Li = t),
                  (Ri = null)))
              : (e = null),
            e === null)
          )
            throw Hi(t);
          return ((t.lanes = 536870912), null);
        }
        return uc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((co(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = dc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (nc || na(e, t, n, !1), (a = (n & e.childLanes) !== 0), nc || a)
        ) {
          if (
            ((r = q),
            r !== null && ((s = ot(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ci(e, s), pu(r, e, s), tc);
          (Tu(), (t = dc(e, t, n)));
        } else
          ((e = o.treeContext),
            (Ri = of(s.nextSibling)),
            (Li = t),
            (N = !0),
            (zi = null),
            (Bi = !1),
            e !== null && Ii(t, e),
            (t = uc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function pc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function mc(e, t, n, r, i) {
      return (
        ia(t),
        (n = To(e, t, n, r, void 0, i)),
        (r = ko()),
        e !== null && !nc
          ? (Ao(e, t, i), Oc(e, t, i))
          : (N && r && Pi(t), (t.flags |= 1), rc(e, t, n, i), t.child)
      );
    }
    function hc(e, t, n, r, i, a) {
      return (
        ia(t),
        (t.updateQueue = null),
        (n = Do(t, r, n, i)),
        Eo(e),
        (r = ko()),
        e !== null && !nc
          ? (Ao(e, t, a), Oc(e, t, a))
          : (N && r && Pi(t), (t.flags |= 1), rc(e, t, n, a), t.child)
      );
    }
    function gc(e, t, n, r, i) {
      if ((ia(t), t.stateNode === null)) {
        var a = di,
          o = n.contextType;
        (typeof o == `object` && o && (a = aa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Gs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Wa(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? aa(o) : di),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Ws(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Gs.enqueueReplaceState(a, a.state, null),
            Qa(t, r, a, i),
            Za(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Js(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = di), typeof u == `object` && u && (o = aa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && qs(t, a, r, o)),
          (Ua = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Qa(t, r, a, i),
          Za(),
          (l = t.memoizedState),
          s || f !== l || Ua
            ? (typeof d == `function` &&
                (Ws(t, n, d, r), (l = t.memoizedState)),
              (c = Ua || Ks(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ga(e, t),
          (o = t.memoizedProps),
          (u = Js(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = di),
          typeof l == `object` && l && (c = aa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && qs(t, a, r, c)),
          (Ua = !1),
          (f = t.memoizedState),
          (a.state = f),
          Qa(t, r, a, i),
          Za());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ua ||
        (e !== null && e.dependencies !== null && ra(e.dependencies))
          ? (typeof s == `function` && (Ws(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ua ||
              Ks(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ra(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        pc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Va(t, e.child, null, i)),
                (t.child = Va(t, null, n, i)))
              : rc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Oc(e, t, i)),
        e
      );
    }
    function _c(e, t, n, r) {
      return (Ki(), (t.flags |= 256), rc(e, t, n, r), t.child);
    }
    var vc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function yc(e) {
      return { baseLanes: e, cachePool: Ta() };
    }
    function bc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Kl), e);
    }
    function xc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (I.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (a ? so(t) : uo(t),
            (e = Ri)
              ? ((e = tf(e, Bi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: M === null ? null : { id: Ai, overflow: ji },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Li = t),
                  (Ri = null)))
              : (e = null),
            e === null)
          )
            throw Hi(t);
          return (rf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (uo(t),
              (a = t.mode),
              (c = Cc({ mode: `hidden`, children: c }, a)),
              (r = vi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = yc(n)),
              (r.childLanes = bc(e, s, n)),
              (t.memoizedState = vc),
              cc(null, r))
            : (so(t), Sc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (so(t), (t.flags &= -257), (t = wc(e, t, n)))
            : t.memoizedState === null
              ? (uo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Cc({ mode: `visible`, children: r.children }, a)),
                (c = vi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Va(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = yc(n)),
                (r.childLanes = bc(e, s, n)),
                (t.memoizedState = vc),
                (t = cc(null, r)))
              : (uo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((so(t), rf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Ji({ value: r, source: null, stack: null }),
            (t = wc(e, t, n)));
        } else if (
          (nc || na(e, t, n, !1), (s = (n & e.childLanes) !== 0), nc || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = ot(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ci(e, r), pu(s, e, r), tc);
          (nf(c) || Tu(), (t = wc(e, t, n)));
        } else
          nf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Ri = of(c.nextSibling)),
              (Li = t),
              (N = !0),
              (zi = null),
              (Bi = !1),
              e !== null && Ii(t, e),
              (t = Sc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (uo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = hi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = vi(c, a, n, null)), (c.flags |= 2))
            : (c = hi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          cc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = yc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ta())
                : ((l = da._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = bc(e, s, n)),
          (t.memoizedState = vc),
          cc(e.child, r))
        : (so(t),
          (n = e.child),
          (e = n.sibling),
          (n = hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Sc(e, t) {
      return (
        (t = Cc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Cc(e, t) {
      return ((e = pi(22, e, null, t)), (e.lanes = 0), e);
    }
    function wc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = Sc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Tc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ea(e.return, t, n));
    }
    function Ec(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Dc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = I.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        A(I, o),
        rc(e, t, r, n),
        (r = N ? Di : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
          else if (e.tag === 19) Tc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && po(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ec(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && po(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ec(t, !0, n, null, a, r);
          break;
        case `together`:
          Ec(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Oc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ul |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((na(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = hi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function kc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && ra(e)))
        : !0;
    }
    function Ac(e, t, n) {
      switch (t.tag) {
        case 3:
          (he(t, t.stateNode.containerInfo),
            Qi(t, da, e.memoizedState.cache),
            Ki());
          break;
        case 27:
        case 5:
          _e(t);
          break;
        case 4:
          he(t, t.stateNode.containerInfo);
          break;
        case 10:
          Qi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), co(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (so(t), (e = Oc(e, t, n)), e === null ? null : e.sibling)
                : xc(e, t, n)
              : (so(t), (t.flags |= 128), null);
          so(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (na(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Dc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            A(I, I.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), sc(e, t, n, t.pendingProps));
        case 24:
          Qi(t, da, e.memoizedState.cache);
      }
      return Oc(e, t, n);
    }
    function jc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) nc = !0;
        else {
          if (!kc(e, n) && !(t.flags & 128)) return ((nc = !1), Ac(e, t, n));
          nc = !!(e.flags & 131072);
        }
      else ((nc = !1), N && t.flags & 1048576 && Ni(t, Di, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ma(t.elementType)), (t.type = e), typeof e == `function`))
              mi(e)
                ? ((r = Js(e, r)), (t.tag = 1), (t = gc(null, t, e, r, n)))
                : ((t.tag = 0), (t = mc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === ee) {
                  ((t.tag = 11), (t = ic(null, t, e, r, n)));
                  break a;
                } else if (a === w) {
                  ((t.tag = 14), (t = ac(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ae(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return mc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Js(r, t.pendingProps)), gc(e, t, r, a, n));
        case 3:
          a: {
            if ((he(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ga(e, t), Qa(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Qi(t, da, r),
              r !== o.cache && ta(t, [da], n, !0),
              Za(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = _c(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = Ci(Error(i(424)), t)), Ji(a), (t = _c(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  Ri = of(e.firstChild),
                    Li = t,
                    N = !0,
                    zi = null,
                    Bi = !0,
                    n = Ha(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Ki(), r === a)) {
                t = Oc(e, t, n);
                break a;
              }
              rc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            pc(e, t),
            e === null
              ? (n = Df(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Rd(pe.current).createElement(n)),
                  (r[ft] = t),
                  (r[pt] = e),
                  Md(r, n, e),
                  Tt(r),
                  (t.stateNode = r))
              : (t.memoizedState = Df(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            _e(t),
            e === null &&
              N &&
              ((r = t.stateNode = uf(t.type, t.pendingProps, pe.current)),
              (Li = t),
              (Bi = !0),
              (a = Ri),
              Yd(t.type) ? ((sf = a), (Ri = of(r.firstChild))) : (Ri = a)),
            rc(e, t, t.pendingProps.children, n),
            pc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = Ri) &&
                ((r = $d(r, t.type, t.pendingProps, Bi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Li = t),
                    (Ri = of(r.firstChild)),
                    (Bi = !1),
                    (a = !0))),
              a || Hi(t)),
            _e(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Vd(a, o) ? (r = null) : s !== null && Vd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = To(e, t, Oo, null, null, n)), (Xf._currentValue = a)),
            pc(e, t),
            rc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = Ri) &&
                ((n = ef(n, t.pendingProps, Bi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Li = t), (Ri = null), (e = !0))),
              e || Hi(t)),
            null
          );
        case 13:
          return xc(e, t, n);
        case 4:
          return (
            he(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Va(t, null, r, n)) : rc(e, t, r, n),
            t.child
          );
        case 11:
          return ic(e, t, t.type, t.pendingProps, n);
        case 7:
          return (rc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Qi(t, t.type, r.value),
            rc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ia(t),
            (a = aa(a)),
            (r = r(a)),
            (t.flags |= 1),
            rc(e, t, r, n),
            t.child
          );
        case 14:
          return ac(e, t, t.type, t.pendingProps, n);
        case 15:
          return oc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Dc(e, t, n);
        case 31:
          return fc(e, t, n);
        case 22:
          return sc(e, t, n, t.pendingProps);
        case 24:
          return (
            ia(t),
            (r = aa(da)),
            e === null
              ? ((a = Ca()),
                a === null &&
                  ((a = q),
                  (o = fa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Wa(t),
                Qi(t, da, a))
              : ((e.lanes & n) !== 0 && (Ga(e, t), Qa(t, null, null, n), Za()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Qi(t, da, r),
                    r !== a.cache && ta(t, [da], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Qi(t, da, r))),
            rc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Mc(e) {
      e.flags |= 4;
    }
    function Nc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Su()) e.flags |= 8192;
          else throw ((Na = ka), Da);
      } else e.flags &= -16777217;
    }
    function Pc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Hf(t)))
        if (Su()) e.flags |= 8192;
        else throw ((Na = ka), Da);
    }
    function Fc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : et()), (e.lanes |= t), (ql |= t)));
    }
    function Ic(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
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
    function U(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Lc(e, t, n) {
      var r = t.pendingProps;
      switch ((Fi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (U(t), null);
        case 1:
          return (U(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            $i(da),
            ge(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Gi(t)
                ? Mc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), qi())),
            U(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Mc(t),
                o === null ? (U(t), Nc(t, a, null, r, n)) : (U(t), Pc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (U(t), (t.flags &= -16777217))
                  : (Mc(t), U(t), Pc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Mc(t),
                  U(t),
                  Nc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (ve(t),
            (n = pe.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (U(t), null);
            }
            ((e = de.current),
              Gi(t) ? Ui(t, e) : ((e = uf(a, r, n)), (t.stateNode = e), Mc(t)));
          }
          return (U(t), null);
        case 5:
          if ((ve(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (U(t), null);
            }
            if (((o = de.current), Gi(t))) Ui(t, o);
            else {
              var s = Rd(pe.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[ft] = t), (o[pt] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Md(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Mc(t);
            }
          }
          return (
            U(t),
            Nc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Mc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = pe.current), Gi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Li),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[ft] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Ad(e.nodeValue, n)
                )),
                e || Hi(t, !0));
            } else
              ((e = Rd(e).createTextNode(r)), (e[ft] = t), (t.stateNode = e));
          }
          return (U(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Gi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[ft] = t;
              } else
                (Ki(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (e = !1));
            } else
              ((n = qi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (fo(t), t) : (fo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (U(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Gi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[ft] = t;
              } else
                (Ki(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (U(t), (a = !1));
            } else
              ((a = qi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (fo(t), t) : (fo(t), null);
          }
          return (
            fo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Fc(t, t.updateQueue),
                U(t),
                null)
          );
        case 4:
          return (
            ge(),
            e === null && bd(t.stateNode.containerInfo),
            U(t),
            null
          );
        case 10:
          return ($i(t.type), U(t), null);
        case 19:
          if ((ue(I), (r = t.memoizedState), r === null)) return (U(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Ic(r, !1);
            else {
              if (Hl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = po(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Ic(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Fc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (gi(n, e), (n = n.sibling));
                    return (
                      A(I, (I.current & 1) | 2),
                      N && Mi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                je() > $l &&
                ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = po(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Fc(t, e),
                  Ic(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !N)
                )
                  return (U(t), null);
              } else
                2 * je() - r.renderingStartTime > $l &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (U(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = je()),
              (e.sibling = null),
              (n = I.current),
              A(I, a ? (n & 1) | 2 : n & 1),
              N && Mi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            fo(t),
            io(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (U(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : U(t),
            (n = t.updateQueue),
            n !== null && Fc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && ue(Sa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            $i(da),
            U(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Rc(e, t) {
      switch ((Fi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            $i(da),
            ge(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (ve(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((fo(t), t.alternate === null)) throw Error(i(340));
            Ki();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (fo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Ki();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (ue(I), null);
        case 4:
          return (ge(), null);
        case 10:
          return ($i(t.type), null);
        case 22:
        case 23:
          return (
            fo(t),
            io(),
            e !== null && ue(Sa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return ($i(da), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function zc(e, t) {
      switch ((Fi(t), t.tag)) {
        case 3:
          ($i(da), ge());
          break;
        case 26:
        case 27:
        case 5:
          ve(t);
          break;
        case 4:
          ge();
          break;
        case 31:
          t.memoizedState !== null && fo(t);
          break;
        case 13:
          fo(t);
          break;
        case 19:
          ue(I);
          break;
        case 10:
          $i(t.type);
          break;
        case 22:
        case 23:
          (fo(t), io(), e !== null && ue(Sa));
          break;
        case 24:
          $i(da);
      }
    }
    function Bc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Vc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Hc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          eo(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Uc(e, t, n) {
      ((n.props = Js(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Wc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Gc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Kc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function qc(e, t, n) {
      try {
        var r = e.stateNode;
        (Nd(r, e.type, n, t), (r[pt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Jc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Yd(e.type)) ||
        e.tag === 4
      );
    }
    function Yc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Jc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Yd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = an)));
      else if (
        r !== 4 &&
        (r === 27 && Yd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Xc(e, t, n), e = e.sibling; e !== null; )
          (Xc(e, t, n), (e = e.sibling));
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Yd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Zc(e, t, n), e = e.sibling; e !== null; )
          (Zc(e, t, n), (e = e.sibling));
    }
    function Qc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Md(t, r, n), (t[ft] = e), (t[pt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var $c = !1,
      el = !1,
      tl = !1,
      nl = typeof WeakSet == `function` ? WeakSet : Set,
      rl = null;
    function il(e, t) {
      if (((e = e.containerInfo), (Id = ap), (e = Mr(e)), Nr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ld = { focusedElem: e, selectionRange: n }, ap = !1, rl = t;
        rl !== null;
      )
        if (((t = rl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (rl = e));
        else
          for (; rl !== null; ) {
            switch (((t = rl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Js(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    Qd(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        Qd(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (rl = e));
              break;
            }
            rl = t.return;
          }
    }
    function al(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && Bc(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Js(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Hc(n), r & 512 && Wc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              eo(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Qc(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && Kc(n), r & 512 && Wc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ku.bind(null, n)), af(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || $c), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || el), (i = $c));
            var a = el;
            (($c = r),
              (el = t) && !a
                ? Sl(e, n, (n.subtreeFlags & 8772) != 0)
                : bl(e, n),
              ($c = i),
              (el = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function ol(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), ol(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && bt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var sl = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null; ) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (Ve && typeof Ve.onCommitFiberUnmount == `function`)
        try {
          Ve.onCommitFiberUnmount(Be, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (el || Gc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          el || Gc(n, t);
          var r = sl,
            i = cl;
          (Yd(n.type) && ((sl = n.stateNode), (cl = !1)),
            ll(e, t, n),
            df(n.stateNode),
            (sl = r),
            (cl = i));
          break;
        case 5:
          el || Gc(n, t);
        case 6:
          if (
            ((r = sl),
            (i = cl),
            (sl = null),
            ll(e, t, n),
            (sl = r),
            (cl = i),
            sl !== null)
          )
            if (cl)
              try {
                (sl.nodeType === 9
                  ? sl.body
                  : sl.nodeName === `HTML`
                    ? sl.ownerDocument.body
                    : sl
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                sl.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          sl !== null &&
            (cl
              ? ((e = sl),
                Xd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                jp(e))
              : Xd(sl, n.stateNode));
          break;
        case 4:
          ((r = sl),
            (i = cl),
            (sl = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (sl = r),
            (cl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Vc(2, n, t), el || Vc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (el ||
            (Gc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Uc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((el = (r = el) || n.memoizedState !== null), ll(e, t, n), (el = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          jp(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          jp(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new nl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new nl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = qu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Yd(c.type)) {
                  ((sl = c.stateNode), (cl = !1));
                  break a;
                }
                break;
              case 5:
                ((sl = c.stateNode), (cl = !1));
                break a;
              case 3:
              case 4:
                ((sl = c.stateNode.containerInfo), (cl = !0));
                break a;
            }
            c = c.return;
          }
          if (sl === null) throw Error(i(160));
          (ul(o, s, a),
            (sl = null),
            (cl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e),
            vl(e),
            r & 4 && (Vc(3, e, e.return), Bc(3, e), Vc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 64 &&
              $c &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[yt] ||
                            o[ft] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Md(o, r, n),
                          (o[ft] = e),
                          Tt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = zf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Md(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = zf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Md(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[ft] = e), Tt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Bf(a, e.type, e.stateNode);
              else e.stateNode = Pf(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  qc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Bf(a, e.type, e.stateNode)
                    : Pf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            n !== null && r & 4 && qc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Xt(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), qc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (tl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Rf = null),
            (a = gl),
            (gl = mf(t.containerInfo)),
            hl(t, e),
            (gl = a),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              jp(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          tl && ((tl = !1), yl(e));
          break;
        case 4:
          ((r = gl),
            (gl = mf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (Zl = je()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = $c,
            d = el;
          if (
            (($c = u || a),
            (el = d || l),
            hl(t, e),
            (el = d),
            ($c = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || $c || el || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? Zd(m, !0) : Zd(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Jc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Zc(e, Yc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Xt(o, ``), (n.flags &= -33)), Zc(e, Yc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Xc(e, Yc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (al(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Vc(4, t, t.return), xl(t));
            break;
          case 1:
            Gc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Uc(t, t.return, n),
              xl(t));
            break;
          case 27:
            df(t.stateNode);
          case 26:
          case 5:
            (Gc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), Bc(4, a));
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    $a(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Hc(a), Wc(a, a.return));
            break;
          case 27:
            Qc(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && Kc(a), Wc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Wc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && pa(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && pa(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && Bc(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && pa(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), Bc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null; ) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Uf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = mf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Fl(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Vc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), W(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function W(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Fl(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Vc(8, t, t.return), W(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), W(t)));
            break;
          default:
            W(t);
        }
        e = e.sibling;
      }
    }
    function Fl(e, t) {
      for (; rl !== null; ) {
        var n = rl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Vc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            pa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (rl = r));
        else
          a: for (n = e; rl !== null; ) {
            r = rl;
            var i = r.sibling,
              a = r.return;
            if ((ol(r), r === n)) {
              rl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (rl = i));
              break a;
            }
            rl = a;
          }
      }
    }
    var G = {
        getCacheForType: function (e) {
          var t = aa(da),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return aa(da).controller.signal;
        },
      },
      Il = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      Ll = null,
      Rl = !1,
      zl = !1,
      Bl = !1,
      Vl = 0,
      Hl = 0,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = null,
      Yl = null,
      Xl = !1,
      Zl = 0,
      Ql = 0,
      $l = 1 / 0,
      eu = null,
      tu = null,
      nu = 0,
      ru = null,
      iu = null,
      au = 0,
      ou = 0,
      su = null,
      cu = null,
      lu = 0,
      uu = null;
    function du() {
      return K & 2 && Y !== 0 ? Y & -Y : D.T === null ? lt() : ld();
    }
    function fu() {
      if (Kl === 0)
        if (!(Y & 536870912) || N) {
          var e = Je;
          ((Je <<= 1), !(Je & 3932160) && (Je = 262144), (Kl = e));
        } else Kl = 536870912;
      return ((e = ao.current), e !== null && (e.flags |= 32), Kl);
    }
    function pu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (bu(e, 0), _u(e, Y, Kl, !1)),
        nt(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Wl |= n), Hl === 4 && _u(e, Y, Kl, !1)),
          td(e)));
    }
    function mu(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || Qe(e, t),
        a = r ? Ou(e, t) : Eu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          zl && !r && _u(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !gu(n))) {
            ((a = Eu(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = Jl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (bu(c, s).flags |= 256), (s = Eu(c, s, !1)), s !== 2)
                ) {
                  if (Bl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Wl |= o), (a = 4));
                    break a;
                  }
                  ((o = Yl),
                    (Yl = a),
                    o !== null &&
                      (Yl === null ? (Yl = o) : Yl.push.apply(Yl, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (bu(e, 0), _u(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                _u(r, t, Kl, !Rl);
                break a;
              case 2:
                Yl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = Zl + 300 - je()), 10 < a)) {
              if ((_u(r, t, Kl, !Rl), Ze(r, 0, !0) !== 0)) break a;
              ((au = t),
                (r.timeoutHandle = Wd(
                  hu.bind(
                    null,
                    r,
                    n,
                    Yl,
                    eu,
                    Xl,
                    t,
                    Kl,
                    Wl,
                    ql,
                    Rl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            hu(r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      td(e);
    }
    function hu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: an,
        }),
          jl(t, a, d));
        var m =
          (a & 62914560) === a
            ? Zl - je()
            : (a & 4194048) === a
              ? Ql - je()
              : 0;
        if (((m = Gf(d, m)), m !== null)) {
          ((au = a),
            (e.cancelPendingCommit = m(
              Fu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            _u(e, a, o, !l));
          return;
        }
      }
      Fu(e, t, a, n, r, i, o, s, c);
    }
    function gu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Dr(a(), i)) return !1;
            } catch {
              return !1;
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
    function _u(e, t, n, r) {
      ((t &= ~Gl),
        (t &= ~Wl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Ue(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && it(e, n, t);
    }
    function vu() {
      return K & 6 ? !0 : (nd(0, !1), !1);
    }
    function yu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (Zi = Xi = null), jo(e), (Ia = null), (La = 0), (e = J));
        for (; e !== null; ) (zc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function bu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Gd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (au = 0),
        yu(),
        (q = e),
        (J = n = hi(e.current, null)),
        (Y = t),
        (X = 0),
        (Ll = null),
        (Rl = !1),
        (zl = Qe(e, t)),
        (Bl = !1),
        (ql = Kl = Gl = Wl = Ul = Hl = 0),
        (Yl = Jl = null),
        (Xl = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ue(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Vl = t), ai(), n);
    }
    function xu(e, t) {
      ((L = null),
        (D.H = Bs),
        t === Ea || t === Oa
          ? ((t = Pa()), (X = 3))
          : t === Da
            ? ((t = Pa()), (X = 4))
            : (X =
                t === tc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Ll = t),
        J === null && ((Hl = 1), B(e, Ci(t, e.current))));
    }
    function Su() {
      var e = ao.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? oo === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === oo
            : !1;
    }
    function Cu() {
      var e = D.H;
      return ((D.H = Bs), e === null ? Bs : e);
    }
    function wu() {
      var e = D.A;
      return ((D.A = G), e);
    }
    function Tu() {
      ((Hl = 4),
        Rl || ((Y & 4194048) !== Y && ao.current !== null) || (zl = !0),
        (!(Ul & 134217727) && !(Wl & 134217727)) ||
          q === null ||
          _u(q, Y, Kl, !1));
    }
    function Eu(e, t, n) {
      var r = K;
      K |= 2;
      var i = Cu(),
        a = wu();
      ((q !== e || Y !== t) && ((eu = null), bu(e, t)), (t = !1));
      var o = Hl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = Ll;
            switch (X) {
              case 8:
                (yu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                ao.current === null && (t = !0);
                var l = X;
                if (((X = 0), (Ll = null), Mu(e, s, c, l), n && zl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (Ll = null), Mu(e, s, c, l));
            }
          }
          (Du(), (o = Hl));
          break;
        } catch (t) {
          xu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Zi = Xi = null),
        (K = r),
        (D.H = i),
        (D.A = a),
        J === null && ((q = null), (Y = 0), ai()),
        o
      );
    }
    function Du() {
      for (; J !== null; ) Au(J);
    }
    function Ou(e, t) {
      var n = K;
      K |= 2;
      var r = Cu(),
        a = wu();
      q !== e || Y !== t
        ? ((eu = null), ($l = je() + 500), bu(e, t))
        : (zl = Qe(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = Ll;
            b: switch (X) {
              case 1:
                ((X = 0), (Ll = null), Mu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Aa(o)) {
                  ((X = 0), (Ll = null), ju(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), td(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                Aa(o)
                  ? ((X = 0), (Ll = null), ju(t))
                  : ((X = 0), (Ll = null), Mu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Hf(s) : c.stateNode.complete) {
                      ((X = 0), (Ll = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Nu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (Ll = null), Mu(e, t, o, 5));
                break;
              case 6:
                ((X = 0), (Ll = null), Mu(e, t, o, 6));
                break;
              case 8:
                (yu(), (Hl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          ku();
          break;
        } catch (t) {
          xu(e, t);
        }
      while (1);
      return (
        (Zi = Xi = null),
        (D.H = r),
        (D.A = a),
        (K = n),
        J === null ? ((q = null), (Y = 0), ai(), Hl) : 0
      );
    }
    function ku() {
      for (; J !== null && !ke(); ) Au(J);
    }
    function Au(e) {
      var t = jc(e.alternate, e, Vl);
      ((e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (J = t));
    }
    function ju(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = hc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = hc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          jo(t);
        default:
          (zc(n, t), (t = J = gi(t, Vl)), (t = jc(n, t, Vl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (J = t));
    }
    function Mu(e, t, n, r) {
      ((Zi = Xi = null), jo(t), (Ia = null), (La = 0));
      var i = t.return;
      try {
        if (ec(e, i, t, n, Y)) {
          ((Hl = 1), B(e, Ci(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Hl = 1), B(e, Ci(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : zl || Y & 536870912
              ? (e = !1)
              : ((Rl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = ao.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Pu(t, e))
        : Nu(t);
    }
    function Nu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Pu(t, Rl);
          return;
        }
        e = t.return;
        var n = Lc(t.alternate, t, Vl);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Hl === 0 && (Hl = 5);
    }
    function Pu(e, t) {
      do {
        var n = Rc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Hl = 6), (J = null));
    }
    function Fu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Bu();
      while (nu !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ii),
          rt(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (iu = t),
          (ru = e),
          (au = n),
          (ou = o),
          (su = a),
          (cu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Ju(Fe, function () {
                return (Vu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = D.T), (D.T = null), (a = O.p), (O.p = 2), (s = K), (K |= 4));
          try {
            il(e, t, n);
          } finally {
            ((K = s), (O.p = a), (D.T = r));
          }
        }
        ((nu = 1), Iu(), Lu(), Ru());
      }
    }
    function Iu() {
      if (nu === 1) {
        nu = 0;
        var e = ru,
          t = iu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = Ld,
              o = Mr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              jr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Nr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Ar(s, h),
                      v = Ar(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((ap = !!Id), (Ld = Id = null));
          } finally {
            ((K = i), (O.p = r), (D.T = n));
          }
        }
        ((e.current = t), (nu = 2));
      }
    }
    function Lu() {
      if (nu === 2) {
        nu = 0;
        var e = ru,
          t = iu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = K;
          K |= 4;
          try {
            al(e, t.alternate, t);
          } finally {
            ((K = i), (O.p = r), (D.T = n));
          }
        }
        nu = 3;
      }
    }
    function Ru() {
      if (nu === 4 || nu === 3) {
        ((nu = 0), Ae());
        var e = ru,
          t = iu,
          n = au,
          r = cu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (nu = 5)
          : ((nu = 0), (iu = ru = null), zu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (tu = null),
          ct(n),
          (t = t.stateNode),
          Ve && typeof Ve.onCommitFiberRoot == `function`)
        )
          try {
            Ve.onCommitFiberRoot(Be, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = D.T), (i = O.p), (O.p = 2), (D.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((D.T = t), (O.p = i));
          }
        }
        (au & 3 && Bu(),
          td(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === uu
              ? lu++
              : ((lu = 0), (uu = e))
            : (lu = 0),
          nd(0, !1));
      }
    }
    function zu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), pa(t)));
    }
    function Bu() {
      return (Iu(), Lu(), Ru(), Vu());
    }
    function Vu() {
      if (nu !== 5) return !1;
      var e = ru,
        t = ou;
      ou = 0;
      var n = ct(au),
        r = D.T,
        a = O.p;
      try {
        ((O.p = 32 > n ? 32 : n), (D.T = null), (n = su), (su = null));
        var o = ru,
          s = au;
        if (((nu = 0), (iu = ru = null), (au = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          nd(0, !1),
          Ve && typeof Ve.onPostCommitFiberRoot == `function`)
        )
          try {
            Ve.onPostCommitFiberRoot(Be, o);
          } catch {}
        return !0;
      } finally {
        ((O.p = a), (D.T = r), zu(e, t));
      }
    }
    function Hu(e, t, n) {
      ((t = Ci(n, t)),
        (t = $s(e.stateNode, t, 2)),
        (e = qa(e, t, 2)),
        e !== null && (nt(e, 2), td(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Hu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Hu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (tu === null || !tu.has(r)))
            ) {
              ((e = Ci(n, e)),
                (n = V(2)),
                (r = qa(t, n, 2)),
                r !== null && (H(n, r, t, e), nt(r, 2), td(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Uu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Il();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Bl = !0), i.add(n), (e = Wu.bind(null, e, t, n)), t.then(e, e));
    }
    function Wu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Hl === 4 || (Hl === 3 && (Y & 62914560) === Y && 300 > je() - Zl)
            ? !(K & 2) && bu(e, 0)
            : (Gl |= n),
          ql === Y && (ql = 0)),
        td(e));
    }
    function Gu(e, t) {
      (t === 0 && (t = et()), (e = ci(e, t)), e !== null && (nt(e, t), td(e)));
    }
    function Ku(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Gu(e, n));
    }
    function qu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Gu(e, n));
    }
    function Ju(e, t) {
      return De(e, t);
    }
    var Yu = null,
      Xu = null,
      Zu = !1,
      Qu = !1,
      $u = !1,
      ed = 0;
    function td(e) {
      (e !== Xu &&
        e.next === null &&
        (Xu === null ? (Yu = Xu = e) : (Xu = Xu.next = e)),
        (Qu = !0),
        Zu || ((Zu = !0), cd()));
    }
    function nd(e, t) {
      if (!$u && Qu) {
        $u = !0;
        do
          for (var n = !1, r = Yu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ue(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), sd(r, a));
              } else
                ((a = Y),
                  (a = Ze(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Qe(r, a) || ((n = !0), sd(r, a)));
            r = r.next;
          }
        while (n);
        $u = !1;
      }
    }
    function rd() {
      id();
    }
    function id() {
      Qu = Zu = !1;
      var e = 0;
      ed !== 0 && Ud() && (e = ed);
      for (var t = je(), n = null, r = Yu; r !== null; ) {
        var i = r.next,
          a = ad(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Yu = i) : (n.next = i),
            i === null && (Xu = n))
          : ((n = r), (e !== 0 || a & 3) && (Qu = !0)),
          (r = i));
      }
      ((nu !== 0 && nu !== 5) || nd(e, !1), ed !== 0 && (ed = 0));
    }
    function ad(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ue(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = $e(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = Ze(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Oe(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Qe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Oe(r), ct(n))) {
          case 2:
          case 8:
            n = Pe;
            break;
          case 32:
            n = Fe;
            break;
          case 268435456:
            n = Le;
            break;
          default:
            n = Fe;
        }
        return (
          (r = od.bind(null, e)),
          (n = De(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Oe(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function od(e, t) {
      if (nu !== 0 && nu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Bu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = Ze(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (mu(e, r, t),
            ad(e, je()),
            e.callbackNode != null && e.callbackNode === n
              ? od.bind(null, e)
              : null)
      );
    }
    function sd(e, t) {
      if (Bu()) return null;
      mu(e, t, !0);
    }
    function cd() {
      qd(function () {
        K & 6 ? De(Ne, rd) : id();
      });
    }
    function ld() {
      if (ed === 0) {
        var e = ga;
        (e === 0 && ((e = qe), (qe <<= 1), !(qe & 261888) && (qe = 256)),
          (ed = e));
      }
      return ed;
    }
    function ud(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : rn(`` + e);
    }
    function dd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function fd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = ud((i[pt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[pt] || null)
            ? ud(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new En(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (ed !== 0) {
                    var e = o ? dd(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? dd(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var pd = 0; pd < $r.length; pd++) {
      var md = $r[pd];
      ei(md.toLowerCase(), `on` + (md[0].toUpperCase() + md.slice(1)));
    }
    (ei(Gr, `onAnimationEnd`),
      ei(Kr, `onAnimationIteration`),
      ei(qr, `onAnimationStart`),
      ei(`dblclick`, `onDoubleClick`),
      ei(`focusin`, `onFocus`),
      ei(`focusout`, `onBlur`),
      ei(Jr, `onTransitionRun`),
      ei(Yr, `onTransitionStart`),
      ei(Xr, `onTransitionCancel`),
      ei(Zr, `onTransitionEnd`),
      j(`onMouseEnter`, [`mouseout`, `mouseover`]),
      j(`onMouseLeave`, [`mouseout`, `mouseover`]),
      j(`onPointerEnter`, [`pointerout`, `pointerover`]),
      j(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Ot(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Ot(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Ot(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Ot(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ot(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ot(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var hd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      gd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(hd),
      );
    function _d(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[ht];
      n === void 0 && (n = t[ht] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (xd(t, e, 2, !1), n.add(r));
    }
    function vd(e, t, n) {
      var r = 0;
      (t && (r |= 4), xd(n, e, r, t));
    }
    var yd = `_reactListening` + Math.random().toString(36).slice(2);
    function bd(e) {
      if (!e[yd]) {
        ((e[yd] = !0),
          Et.forEach(function (t) {
            t !== `selectionchange` &&
              (gd.has(t) || vd(t, !1, e), vd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[yd] || ((t[yd] = !0), vd(`selectionchange`, !1, t));
      }
    }
    function xd(e, t, n, r) {
      switch (fp(t)) {
        case 2:
          var i = op;
          break;
        case 8:
          i = sp;
          break;
        default:
          i = cp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !hn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Sd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = xt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      fn(function () {
        var r = a,
          i = sn(n),
          s = [];
        a: {
          var c = Qr.get(e);
          if (c !== void 0) {
            var l = En,
              u = e;
            switch (e) {
              case `keypress`:
                if (xn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Wn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Fn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Fn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Fn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Nn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Pn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Kn;
                break;
              case Gr:
              case Kr:
              case qr:
                l = In;
                break;
              case Zr:
                l = qn;
                break;
              case `scroll`:
              case `scrollend`:
                l = On;
                break;
              case `wheel`:
                l = Jn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Ln;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Gn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Yn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = pn(m, p)), g != null && d.push(Cd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== on &&
                (u = n.relatedTarget || n.fromElement) &&
                (xt(u) || u[mt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? xt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Nn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Gn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Ct(l)),
                (h = u == null ? c : Ct(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                xt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Td, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Ed(s, c, l, d, !1),
                u !== null && f !== null && Ed(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Ct(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = hr;
            else if (lr(c))
              if (gr) v = Tr;
              else {
                v = Cr;
                var y = Sr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && en(r.elementType) && (v = hr)
                  : (v = wr));
            if ((v &&= v(e, r))) {
              ur(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Kt(c, `number`, c.value));
          }
          switch (((y = r ? Ct(r) : window), e)) {
            case `focusin`:
              (lr(y) || y.contentEditable === `true`) &&
                ((Fr = y), (Ir = r), (Lr = null));
              break;
            case `focusout`:
              Lr = Ir = Fr = null;
              break;
            case `mousedown`:
              Rr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Rr = !1), zr(s, n, i));
              break;
            case `selectionchange`:
              if (Pr) break;
            case `keydown`:
            case `keyup`:
              zr(s, n, i);
          }
          var b;
          if (Zn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            ar
              ? rr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (er &&
              n.locale !== `ko` &&
              (ar || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ar && (b = bn())
                : ((_n = i),
                  (vn = `value` in _n ? _n.value : _n.textContent),
                  (ar = !0))),
            (y = wd(r, x)),
            0 < y.length &&
              ((x = new Rn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ir(n)), b !== null && (x.data = b)))),
            (b = $n ? or(e, n) : sr(e, n)) &&
              ((x = wd(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Rn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            fd(s, e, r, n, i));
        }
        _d(s, t);
      });
    }
    function Cd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function wd(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = pn(e, n)),
            i != null && r.unshift(Cd(e, i, a)),
            (i = pn(e, t)),
            i != null && r.push(Cd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Td(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Ed(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = pn(n, a)), l != null && o.unshift(Cd(n, l, c)))
            : i || ((l = pn(n, a)), l != null && o.push(Cd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Dd = /\r\n?/g,
      Od = /\u0000|\uFFFD/g;
    function kd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Dd,
          `
`,
        )
        .replace(Od, ``);
    }
    function Ad(e, t) {
      return ((t = kd(t)), kd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Xt(e, `` + r);
          break;
        case `className`:
          Pt(e, `class`, r);
          break;
        case `tabIndex`:
          Pt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Pt(e, n, r);
          break;
        case `style`:
          $t(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Pt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = an);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = rn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Nt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Nt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = tn.get(n) || n), Nt(e, n, r));
      }
    }
    function jd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          $t(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Xt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = an);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Dt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[pt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Nt(e, n, r);
            }
      }
    }
    function Md(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Gt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          Yt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < hd.length; r++) Q(hd[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (en(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && jd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Nd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Wt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? qt(e, !!n, n ? [] : ``, !1) : qt(e, !!n, t, !0))
              : qt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Jt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (en(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  jd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  jd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Pd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Fd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Pd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Pd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Id = null,
      Ld = null;
    function Rd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function zd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Bd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Vd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Hd = null;
    function Ud() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Hd
          ? !1
          : ((Hd = e), !0)
        : ((Hd = null), !1);
    }
    var Wd = typeof setTimeout == `function` ? setTimeout : void 0,
      Gd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Kd = typeof Promise == `function` ? Promise : void 0,
      qd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Kd === void 0
            ? Wd
            : function (e) {
                return Kd.resolve(null).then(e).catch(Jd);
              };
    function Jd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Yd(e) {
      return e === `head`;
    }
    function Xd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), jp(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) df(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), df(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[yt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && df(e.ownerDocument.body);
        n = i;
      } while (n);
      jp(t);
    }
    function Zd(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function Qd(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (Qd(n), bt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function $d(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[yt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = of(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function ef(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = of(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function tf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = of(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function nf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function rf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function af(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function of(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var sf = null;
    function cf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return of(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function lf(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function uf(e, t, n) {
      switch (((t = Rd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function df(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      bt(e);
    }
    var ff = new Map(),
      pf = new Set();
    function mf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var hf = O.d;
    O.d = { f: gf, r: _f, D: bf, C: xf, L: Sf, m: Cf, X: Tf, S: wf, M: Ef };
    function gf() {
      var e = hf.f(),
        t = vu();
      return e || t;
    }
    function _f(e) {
      var t = St(e);
      t !== null && t.tag === 5 && t.type === `form` ? Os(t) : hf.r(e);
    }
    var vf = typeof document > `u` ? null : document;
    function yf(e, t, n) {
      var r = vf;
      if (r && typeof t == `string` && t) {
        var i = Ut(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          pf.has(i) ||
            (pf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Md(t, `link`, e),
              Tt(t),
              r.head.appendChild(t))));
      }
    }
    function bf(e) {
      (hf.D(e), yf(`dns-prefetch`, e, null));
    }
    function xf(e, t) {
      (hf.C(e, t), yf(`preconnect`, e, t));
    }
    function Sf(e, t, n) {
      hf.L(e, t, n);
      var r = vf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ut(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ut(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ut(n.imageSizes) + `"]`))
          : (i += `[href="` + Ut(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Of(e);
            break;
          case `script`:
            a = Mf(e);
        }
        ff.has(a) ||
          ((e = p(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          ff.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(kf(a))) ||
            (t === `script` && r.querySelector(Nf(a))) ||
            ((t = r.createElement(`link`)),
            Md(t, `link`, e),
            Tt(t),
            r.head.appendChild(t)));
      }
    }
    function Cf(e, t) {
      hf.m(e, t);
      var n = vf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ut(r) +
            `"][href="` +
            Ut(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Mf(e);
        }
        if (
          !ff.has(a) &&
          ((e = p({ rel: `modulepreload`, href: e }, t)),
          ff.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Nf(a))) return;
          }
          ((r = n.createElement(`link`)),
            Md(r, `link`, e),
            Tt(r),
            n.head.appendChild(r));
        }
      }
    }
    function wf(e, t, n) {
      hf.S(e, t, n);
      var r = vf;
      if (r && e) {
        var i = wt(r).hoistableStyles,
          a = Of(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(kf(a)))) s.loading = 5;
          else {
            ((e = p({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = ff.get(a)) && If(e, n));
            var c = (o = r.createElement(`link`));
            (Tt(c),
              Md(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Ff(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Tf(e, t) {
      hf.X(e, t);
      var n = vf;
      if (n && e) {
        var r = wt(n).hoistableScripts,
          i = Mf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Nf(i))),
          a ||
            ((e = p({ src: e, async: !0 }, t)),
            (t = ff.get(i)) && Lf(e, t),
            (a = n.createElement(`script`)),
            Tt(a),
            Md(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Ef(e, t) {
      hf.M(e, t);
      var n = vf;
      if (n && e) {
        var r = wt(n).hoistableScripts,
          i = Mf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Nf(i))),
          a ||
            ((e = p({ src: e, async: !0, type: `module` }, t)),
            (t = ff.get(i)) && Lf(e, t),
            (a = n.createElement(`script`)),
            Tt(a),
            Md(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Df(e, t, n, r) {
      var a = (a = pe.current) ? mf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Of(n.href)),
              (n = wt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Of(n.href);
            var o = wt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(kf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                ff.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  ff.set(e, n),
                  o || jf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Mf(n)),
                (n = wt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Of(e) {
      return `href="` + Ut(e) + `"`;
    }
    function kf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Af(e) {
      return p({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function jf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Md(t, `link`, n),
          Tt(t),
          e.head.appendChild(t));
    }
    function Mf(e) {
      return `[src="` + Ut(e) + `"]`;
    }
    function Nf(e) {
      return `script[async]` + e;
    }
    function Pf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ut(n.href) + `"]`);
            if (r) return ((t.instance = r), Tt(r), r);
            var a = p({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Tt(r),
              Md(r, `style`, a),
              Ff(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Of(n.href);
            var o = e.querySelector(kf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Tt(o), o);
            ((r = Af(n)),
              (a = ff.get(a)) && If(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Tt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Md(o, `link`, r),
              (t.state.loading |= 4),
              Ff(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Mf(n.src)),
              (a = e.querySelector(Nf(o)))
                ? ((t.instance = a), Tt(a), a)
                : ((r = n),
                  (a = ff.get(o)) && ((r = p({}, n)), Lf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Tt(a),
                  Md(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Ff(r, n.precedence, e));
      return t.instance;
    }
    function Ff(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function If(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Lf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Rf = null;
    function zf(e, t, n) {
      if (Rf === null) {
        var r = new Map(),
          i = (Rf = new Map());
        i.set(n, r);
      } else ((i = Rf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[yt] ||
            a[ft] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Bf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Vf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Hf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Uf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Of(r.href),
            a = t.querySelector(kf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Kf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Tt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Af(r)),
            (i = ff.get(i)) && If(r, i),
            (a = a.createElement(`link`)),
            Tt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Md(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Kf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Wf = 0;
    function Gf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Jf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Jf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Wf === 0 && (Wf = 62500 * Fd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Jf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Wf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Kf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Jf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var qf = null;
    function Jf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (qf = new Map()),
          t.forEach(Yf, e),
          (qf = null),
          Kf.call(e)));
    }
    function Yf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = qf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), qf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Kf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Xf = {
      $$typeof: x,
      Provider: null,
      Consumer: null,
      _currentValue: k,
      _currentValue2: k,
      _threadCount: 0,
    };
    function Zf(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = tt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = tt(0)),
        (this.hiddenUpdates = tt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function Qf(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new Zf(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = pi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = fa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Wa(a),
        e
      );
    }
    function $f(e) {
      return e ? ((e = di), e) : di;
    }
    function ep(e, t, n, r, i, a) {
      ((i = $f(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ka(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = qa(e, r, t)),
        n !== null && (pu(n, e, t), Ja(n, e, t)));
    }
    function tp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function np(e, t) {
      (tp(e, t), (e = e.alternate) && tp(e, t));
    }
    function rp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ci(e, 67108864);
        (t !== null && pu(t, e, 67108864), np(e, 67108864));
      }
    }
    function ip(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = du();
        t = st(t);
        var n = ci(e, t);
        (n !== null && pu(n, e, t), np(e, t));
      }
    }
    var ap = !0;
    function op(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 2), cp(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function sp(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 8), cp(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function cp(e, t, n, r) {
      if (ap) {
        var i = lp(r);
        if (i === null) (Sd(e, t, r, up, n), xp(e, r));
        else if (Cp(i, e, t, n, r)) r.stopPropagation();
        else if ((xp(e, r), t & 4 && -1 < bp.indexOf(e))) {
          for (; i !== null; ) {
            var a = St(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Xe(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ue(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (td(a), !(K & 6) && (($l = je() + 500), nd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ci(a, 2)), s !== null && pu(s, a, 2), vu(), np(a, 2));
              }
            if (((a = lp(r)), a === null && Sd(e, t, r, up, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Sd(e, t, r, null, n);
      }
    }
    function lp(e) {
      return ((e = sn(e)), dp(e));
    }
    var up = null;
    function dp(e) {
      if (((up = null), (e = xt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((up = e), null);
    }
    function fp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Me()) {
            case Ne:
              return 2;
            case Pe:
              return 8;
            case Fe:
            case Ie:
              return 32;
            case Le:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var pp = !1,
      mp = null,
      hp = null,
      gp = null,
      _p = new Map(),
      vp = new Map(),
      yp = [],
      bp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function xp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          mp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          hp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          gp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          _p.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          vp.delete(t.pointerId);
      }
    }
    function Sp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = St(t)), t !== null && rp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Cp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((mp = Sp(mp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((hp = Sp(hp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((gp = Sp(gp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (_p.set(a, Sp(_p.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            vp.set(a, Sp(vp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function wp(e) {
      var t = xt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                ut(e.priority, function () {
                  ip(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                ut(e.priority, function () {
                  ip(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Tp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = lp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((on = r), n.target.dispatchEvent(r), (on = null));
        } else return ((t = St(n)), t !== null && rp(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Ep(e, t, n) {
      Tp(e) && n.delete(t);
    }
    function Dp() {
      ((pp = !1),
        mp !== null && Tp(mp) && (mp = null),
        hp !== null && Tp(hp) && (hp = null),
        gp !== null && Tp(gp) && (gp = null),
        _p.forEach(Ep),
        vp.forEach(Ep));
    }
    function Op(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        pp ||
          ((pp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Dp)));
    }
    var kp = null;
    function Ap(e) {
      kp !== e &&
        ((kp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          kp === e && (kp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (dp(r || n) === null) continue;
              break;
            }
            var a = St(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function jp(e) {
      function t(t) {
        return Op(t, e);
      }
      (mp !== null && Op(mp, e),
        hp !== null && Op(hp, e),
        gp !== null && Op(gp, e),
        _p.forEach(t),
        vp.forEach(t));
      for (var n = 0; n < yp.length; n++) {
        var r = yp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < yp.length && ((n = yp[0]), n.blockedOn === null); )
        (wp(n), n.blockedOn === null && yp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[pt] || null;
          if (typeof a == `function`) o || Ap(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[pt] || null))) s = o.formAction;
              else if (dp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Ap(n));
          }
        }
    }
    function Mp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Np(e) {
      this._internalRoot = e;
    }
    ((Pp.prototype.render = Np.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        ep(n, du(), e, t, null, null);
      }),
      (Pp.prototype.unmount = Np.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (ep(e.current, 2, null, e, null, null), vu(), (t[mt] = null));
          }
        }));
    function Pp(e) {
      this._internalRoot = e;
    }
    Pp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = lt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < yp.length && t !== 0 && t < yp[n].priority; n++);
        (yp.splice(n, 0, e), n === 0 && wp(e));
      }
    };
    var Fp = n.version;
    if (Fp !== `19.2.5`) throw Error(i(527, Fp, `19.2.5`));
    O.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : f(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Ip = {
      bundleType: 0,
      version: `19.2.5`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.2.5`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Lp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Lp.isDisabled && Lp.supportsFiber)
        try {
          ((Be = Lp.inject(Ip)), (Ve = Lp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Ys,
        s = Xs,
        c = Zs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = Qf(e, 1, !1, null, null, n, r, null, o, s, c, Mp)),
        (e[mt] = t.current),
        bd(e),
        new Np(t)
      );
    };
  }),
  Om = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = Dm()));
  })(),
  km = `manifest333-root`,
  Am = document.getElementById(km);
if (!Am) throw Error(`Game root "${km}" not found`);
(0, Om.createRoot)(Am).render((0, z.jsx)(Sm, {}));
