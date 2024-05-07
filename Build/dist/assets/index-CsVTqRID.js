function sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var uc = { exports: {} },
  Si = {},
  cc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  d1 = Symbol.for("react.portal"),
  f1 = Symbol.for("react.fragment"),
  h1 = Symbol.for("react.strict_mode"),
  p1 = Symbol.for("react.profiler"),
  m1 = Symbol.for("react.provider"),
  v1 = Symbol.for("react.context"),
  g1 = Symbol.for("react.forward_ref"),
  y1 = Symbol.for("react.suspense"),
  x1 = Symbol.for("react.memo"),
  w1 = Symbol.for("react.lazy"),
  Ms = Symbol.iterator;
function S1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ms && e[Ms]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fc = Object.assign,
  hc = {};
function sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hc),
    (this.updater = n || dc);
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pc() {}
pc.prototype = sr.prototype;
function xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hc),
    (this.updater = n || dc);
}
var wa = (xa.prototype = new pc());
wa.constructor = xa;
fc(wa, sr.prototype);
wa.isPureReactComponent = !0;
var zs = Array.isArray,
  mc = Object.prototype.hasOwnProperty,
  Sa = { current: null },
  vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function gc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      mc.call(t, r) && !vc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: cl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Sa.current,
  };
}
function E1(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ea(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function k1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ds = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? k1("" + e.key)
    : t.toString(36);
}
function Il(e, t, n, r, l) {
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
          case cl:
          case d1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Wi(o, 0) : r),
      zs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ds, "$&/") + "/"),
          Il(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ea(l) &&
            (l = E1(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ds, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), zs(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Wi(i, a);
      o += Il(i, t, n, s, l);
    }
  else if (((s = S1(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Wi(i, a++)), (o += Il(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Sl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Il(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function C1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Al = { transition: null },
  j1 = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: Sa,
  };
K.Children = {
  map: Sl,
  forEach: function (e, t, n) {
    Sl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ea(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = sr;
K.Fragment = f1;
K.Profiler = p1;
K.PureComponent = xa;
K.StrictMode = h1;
K.Suspense = y1;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Sa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      mc.call(t, s) &&
        !vc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: cl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: v1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: m1, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = gc;
K.createFactory = function (e) {
  var t = gc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: g1, render: e };
};
K.isValidElement = Ea;
K.lazy = function (e) {
  return { $$typeof: w1, _payload: { _status: -1, _result: e }, _init: C1 };
};
K.memo = function (e, t) {
  return { $$typeof: x1, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Al.transition;
  Al.transition = {};
  try {
    e();
  } finally {
    Al.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Oe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
K.useId = function () {
  return Oe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Oe.current.useRef(e);
};
K.useState = function (e) {
  return Oe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Oe.current.useTransition();
};
K.version = "18.2.0";
cc.exports = K;
var C = cc.exports;
const yc = ya(C),
  N1 = sc({ __proto__: null, default: yc }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P1 = C,
  L1 = Symbol.for("react.element"),
  _1 = Symbol.for("react.fragment"),
  R1 = Object.prototype.hasOwnProperty,
  T1 = P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  M1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) R1.call(t, r) && !M1.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: L1,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: T1.current,
  };
}
Si.Fragment = _1;
Si.jsx = xc;
Si.jsxs = xc;
uc.exports = Si;
var u = uc.exports,
  wo = {},
  wc = { exports: {} },
  Xe = {},
  Sc = { exports: {} },
  Ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, A) {
    var V = _.length;
    _.push(A);
    e: for (; 0 < V; ) {
      var J = (V - 1) >>> 1,
        q = _[J];
      if (0 < l(q, A)) (_[J] = A), (_[V] = q), (V = J);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var A = _[0],
      V = _.pop();
    if (V !== A) {
      _[0] = V;
      e: for (var J = 0, q = _.length, st = q >>> 1; J < st; ) {
        var $e = 2 * (J + 1) - 1,
          He = _[$e],
          Te = $e + 1,
          Je = _[Te];
        if (0 > l(He, V))
          Te < q && 0 > l(Je, He)
            ? ((_[J] = Je), (_[Te] = V), (J = Te))
            : ((_[J] = He), (_[$e] = V), (J = $e));
        else if (Te < q && 0 > l(Je, V)) (_[J] = Je), (_[Te] = V), (J = Te);
        else break e;
      }
    }
    return A;
  }
  function l(_, A) {
    var V = _.sortIndex - A.sortIndex;
    return V !== 0 ? V : _.id - A.id;
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
  var s = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    S = !1,
    w = !1,
    E = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= _)
        r(c), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(c);
    }
  }
  function j(_) {
    if (((E = !1), v(_), !w))
      if (n(s) !== null) (w = !0), Ot(R);
      else {
        var A = n(c);
        A !== null && Ft(j, A.startTime - _);
      }
  }
  function R(_, A) {
    (w = !1), E && ((E = !1), m(T), (T = -1)), (S = !0);
    var V = p;
    try {
      for (
        v(A), f = n(s);
        f !== null && (!(f.expirationTime > A) || (_ && !Y()));

      ) {
        var J = f.callback;
        if (typeof J == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var q = J(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(s) && r(s),
            v(A);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var st = !0;
      else {
        var $e = n(c);
        $e !== null && Ft(j, $e.startTime - A), (st = !1);
      }
      return st;
    } finally {
      (f = null), (p = V), (S = !1);
    }
  }
  var M = !1,
    g = null,
    T = -1,
    U = 5,
    O = -1;
  function Y() {
    return !(e.unstable_now() - O < U);
  }
  function de() {
    if (g !== null) {
      var _ = e.unstable_now();
      O = _;
      var A = !0;
      try {
        A = g(!0, _);
      } finally {
        A ? ie() : ((M = !1), (g = null));
      }
    } else M = !1;
  }
  var ie;
  if (typeof h == "function")
    ie = function () {
      h(de);
    };
  else if (typeof MessageChannel < "u") {
    var we = new MessageChannel(),
      at = we.port2;
    (we.port1.onmessage = de),
      (ie = function () {
        at.postMessage(null);
      });
  } else
    ie = function () {
      P(de, 0);
    };
  function Ot(_) {
    (g = _), M || ((M = !0), ie());
  }
  function Ft(_, A) {
    T = P(function () {
      _(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), Ot(R));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var V = p;
      p = A;
      try {
        return _();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, A) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var V = p;
      p = _;
      try {
        return A();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (_, A, V) {
      var J = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? J + V : J))
          : (V = J),
        _)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = V + q),
        (_ = {
          id: d++,
          callback: A,
          priorityLevel: _,
          startTime: V,
          expirationTime: q,
          sortIndex: -1,
        }),
        V > J
          ? ((_.sortIndex = V),
            t(c, _),
            n(s) === null &&
              _ === n(c) &&
              (E ? (m(T), (T = -1)) : (E = !0), Ft(j, V - J)))
          : ((_.sortIndex = q), t(s, _), w || S || ((w = !0), Ot(R))),
        _
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (_) {
      var A = p;
      return function () {
        var V = p;
        p = A;
        try {
          return _.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    });
})(Ec);
Sc.exports = Ec;
var z1 = Sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = C,
  Ge = z1;
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
var Cc = new Set(),
  Wr = {};
function Nn(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) Cc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  So = Object.prototype.hasOwnProperty,
  D1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Os = {},
  Fs = {};
function O1(e) {
  return So.call(Fs, e)
    ? !0
    : So.call(Os, e)
    ? !1
    : D1.test(e)
    ? (Fs[e] = !0)
    : ((Os[e] = !0), !1);
}
function F1(e, t, n, r) {
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
function U1(e, t, n, r) {
  if (t === null || typeof t > "u" || F1(e, t, n, r)) return !0;
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
function Fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ka = /[\-:]([a-z])/g;
function Ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    Ne[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ka, Ca);
  Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ja(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (U1(t, n, l, r) && (n = null),
    r || l === null
      ? O1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  El = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Na = Symbol.for("react.strict_mode"),
  Eo = Symbol.for("react.profiler"),
  jc = Symbol.for("react.provider"),
  Nc = Symbol.for("react.context"),
  Pa = Symbol.for("react.forward_ref"),
  ko = Symbol.for("react.suspense"),
  Co = Symbol.for("react.suspense_list"),
  La = Symbol.for("react.memo"),
  $t = Symbol.for("react.lazy"),
  Pc = Symbol.for("react.offscreen"),
  Us = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Us && e[Us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Qi;
function Rr(e) {
  if (Qi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qi = (t && t[1]) || "";
    }
  return (
    `
` +
    Qi +
    e
  );
}
var Ki = !1;
function Yi(e, t) {
  if (!e || Ki) return "";
  Ki = !0;
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
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ki = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
}
function I1(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yi(e.type, !1)), e;
    case 11:
      return (e = Yi(e.type.render, !1)), e;
    case 1:
      return (e = Yi(e.type, !0)), e;
    default:
      return "";
  }
}
function jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case On:
      return "Portal";
    case Eo:
      return "Profiler";
    case Na:
      return "StrictMode";
    case ko:
      return "Suspense";
    case Co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nc:
        return (e.displayName || "Context") + ".Consumer";
      case jc:
        return (e._context.displayName || "Context") + ".Provider";
      case Pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case La:
        return (
          (t = e.displayName || null), t !== null ? t : jo(e.type) || "Memo"
        );
      case $t:
        (t = e._payload), (e = e._init);
        try {
          return jo(e(t));
        } catch {}
    }
  return null;
}
function A1(e) {
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
      return jo(t);
    case 8:
      return t === Na ? "StrictMode" : "Mode";
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
function nn(e) {
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
function Lc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function B1(e) {
  var t = Lc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
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
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kl(e) {
  e._valueTracker || (e._valueTracker = B1(e));
}
function _c(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function No(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Is(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rc(e, t) {
  (t = t.checked), t != null && ja(e, "checked", t, !1);
}
function Po(e, t) {
  Rc(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Lo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Lo(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function As(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Lo(e, t, n) {
  (t !== "number" || Zl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tr = Array.isArray;
function Gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Tr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Tc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Mc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cl,
  zc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cl = Cl || document.createElement("div"),
          Cl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
  V1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  V1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function Dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var $1 = ue(
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
  }
);
function To(e, t) {
  if (t) {
    if ($1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Mo(e, t) {
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
var zo = null;
function _a(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  Xn = null,
  Zn = null;
function $s(e) {
  if ((e = hl(e))) {
    if (typeof Do != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Ni(t)), Do(e.stateNode, e.type, t));
  }
}
function Fc(e) {
  Xn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Xn = e);
}
function Uc() {
  if (Xn) {
    var e = Xn,
      t = Zn;
    if (((Zn = Xn = null), $s(e), t)) for (e = 0; e < t.length; e++) $s(t[e]);
  }
}
function Ic(e, t) {
  return e(t);
}
function Ac() {}
var Gi = !1;
function Bc(e, t, n) {
  if (Gi) return e(t, n);
  Gi = !0;
  try {
    return Ic(e, t, n);
  } finally {
    (Gi = !1), (Xn !== null || Zn !== null) && (Ac(), Uc());
  }
}
function Kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ni(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Oo = !1;
if (_t)
  try {
    var wr = {};
    Object.defineProperty(wr, "passive", {
      get: function () {
        Oo = !0;
      },
    }),
      window.addEventListener("test", wr, wr),
      window.removeEventListener("test", wr, wr);
  } catch {
    Oo = !1;
  }
function H1(e, t, n, r, l, i, o, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Or = !1,
  Jl = null,
  ql = !1,
  Fo = null,
  W1 = {
    onError: function (e) {
      (Or = !0), (Jl = e);
    },
  };
function Q1(e, t, n, r, l, i, o, a, s) {
  (Or = !1), (Jl = null), H1.apply(W1, arguments);
}
function K1(e, t, n, r, l, i, o, a, s) {
  if ((Q1.apply(this, arguments), Or)) {
    if (Or) {
      var c = Jl;
      (Or = !1), (Jl = null);
    } else throw Error(N(198));
    ql || ((ql = !0), (Fo = c));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vc(e) {
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
function Hs(e) {
  if (Pn(e) !== e) throw Error(N(188));
}
function Y1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Hs(l), e;
        if (i === r) return Hs(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
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
function $c(e) {
  return (e = Y1(e)), e !== null ? Hc(e) : null;
}
function Hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wc = Ge.unstable_scheduleCallback,
  Ws = Ge.unstable_cancelCallback,
  G1 = Ge.unstable_shouldYield,
  X1 = Ge.unstable_requestPaint,
  he = Ge.unstable_now,
  Z1 = Ge.unstable_getCurrentPriorityLevel,
  Ra = Ge.unstable_ImmediatePriority,
  Qc = Ge.unstable_UserBlockingPriority,
  bl = Ge.unstable_NormalPriority,
  J1 = Ge.unstable_LowPriority,
  Kc = Ge.unstable_IdlePriority,
  Ei = null,
  St = null;
function q1(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : th,
  b1 = Math.log,
  eh = Math.LN2;
function th(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((b1(e) / eh) | 0)) | 0;
}
var jl = 64,
  Nl = 4194304;
function Mr(e) {
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
function ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Mr(a)) : ((i &= o), i !== 0 && (r = Mr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Mr(o)) : i !== 0 && (r = Mr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nh(e, t) {
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
function rh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - pt(i),
      a = 1 << o,
      s = l[o];
    s === -1
      ? (!(a & n) || a & r) && (l[o] = nh(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Uo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Yc() {
  var e = jl;
  return (jl <<= 1), !(jl & 4194240) && (jl = 64), e;
}
function Xi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function lh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ta(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Gc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xc,
  Ma,
  Zc,
  Jc,
  qc,
  Io = !1,
  Pl = [],
  Gt = null,
  Xt = null,
  Zt = null,
  Yr = new Map(),
  Gr = new Map(),
  Wt = [],
  ih =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = hl(t)), t !== null && Ma(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function oh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Gt = Sr(Gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Xt = Sr(Xt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Zt = Sr(Zt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Yr.set(i, Sr(Yr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Gr.set(i, Sr(Gr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function bc(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vc(n)), t !== null)) {
          (e.blockedOn = t),
            qc(e.priority, function () {
              Zc(n);
            });
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
function Bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zo = r), n.target.dispatchEvent(r), (zo = null);
    } else return (t = hl(n)), t !== null && Ma(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ks(e, t, n) {
  Bl(e) && n.delete(t);
}
function ah() {
  (Io = !1),
    Gt !== null && Bl(Gt) && (Gt = null),
    Xt !== null && Bl(Xt) && (Xt = null),
    Zt !== null && Bl(Zt) && (Zt = null),
    Yr.forEach(Ks),
    Gr.forEach(Ks);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Io ||
      ((Io = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, ah)));
}
function Xr(e) {
  function t(l) {
    return Er(l, e);
  }
  if (0 < Pl.length) {
    Er(Pl[0], e);
    for (var n = 1; n < Pl.length; n++) {
      var r = Pl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && Er(Gt, e),
      Xt !== null && Er(Xt, e),
      Zt !== null && Er(Zt, e),
      Yr.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    bc(n), n.blockedOn === null && Wt.shift();
}
var Jn = zt.ReactCurrentBatchConfig,
  ti = !0;
function sh(e, t, n, r) {
  var l = Z,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (Z = 1), za(e, t, n, r);
  } finally {
    (Z = l), (Jn.transition = i);
  }
}
function uh(e, t, n, r) {
  var l = Z,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (Z = 4), za(e, t, n, r);
  } finally {
    (Z = l), (Jn.transition = i);
  }
}
function za(e, t, n, r) {
  if (ti) {
    var l = Ao(e, t, n, r);
    if (l === null) io(e, t, r, ni, n), Qs(e, r);
    else if (oh(l, e, t, n, r)) r.stopPropagation();
    else if ((Qs(e, r), t & 4 && -1 < ih.indexOf(e))) {
      for (; l !== null; ) {
        var i = hl(l);
        if (
          (i !== null && Xc(i),
          (i = Ao(e, t, n, r)),
          i === null && io(e, t, r, ni, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else io(e, t, r, null, n);
  }
}
var ni = null;
function Ao(e, t, n, r) {
  if (((ni = null), (e = _a(r)), (e = fn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ni = e), null;
}
function ed(e) {
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
      switch (Z1()) {
        case Ra:
          return 1;
        case Qc:
          return 4;
        case bl:
        case J1:
          return 16;
        case Kc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  Da = null,
  Vl = null;
function td() {
  if (Vl) return Vl;
  var e,
    t = Da,
    n = t.length,
    r,
    l = "value" in Kt ? Kt.value : Kt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Vl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function $l(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ll() {
  return !0;
}
function Ys() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ll
        : Ys),
      (this.isPropagationStopped = Ys),
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
          (this.isDefaultPrevented = Ll));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ll));
      },
      persist: function () {},
      isPersistent: Ll,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oa = Ze(ur),
  fl = ue({}, ur, { view: 0, detail: 0 }),
  ch = Ze(fl),
  Zi,
  Ji,
  kr,
  ki = ue({}, fl, {
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
    getModifierState: Fa,
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
        : (e !== kr &&
            (kr && e.type === "mousemove"
              ? ((Zi = e.screenX - kr.screenX), (Ji = e.screenY - kr.screenY))
              : (Ji = Zi = 0),
            (kr = e)),
          Zi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ji;
    },
  }),
  Gs = Ze(ki),
  dh = ue({}, ki, { dataTransfer: 0 }),
  fh = Ze(dh),
  hh = ue({}, fl, { relatedTarget: 0 }),
  qi = Ze(hh),
  ph = ue({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mh = Ze(ph),
  vh = ue({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gh = Ze(vh),
  yh = ue({}, ur, { data: 0 }),
  Xs = Ze(yh),
  xh = {
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
  wh = {
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
  Sh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Eh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1;
}
function Fa() {
  return Eh;
}
var kh = ue({}, fl, {
    key: function (e) {
      if (e.key) {
        var t = xh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wh[e.keyCode] || "Unidentified"
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
    getModifierState: Fa,
    charCode: function (e) {
      return e.type === "keypress" ? $l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $l(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ch = Ze(kh),
  jh = ue({}, ki, {
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
  Zs = Ze(jh),
  Nh = ue({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa,
  }),
  Ph = Ze(Nh),
  Lh = ue({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _h = Ze(Lh),
  Rh = ue({}, ki, {
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
  Th = Ze(Rh),
  Mh = [9, 13, 27, 32],
  Ua = _t && "CompositionEvent" in window,
  Fr = null;
_t && "documentMode" in document && (Fr = document.documentMode);
var zh = _t && "TextEvent" in window && !Fr,
  nd = _t && (!Ua || (Fr && 8 < Fr && 11 >= Fr)),
  Js = " ",
  qs = !1;
function rd(e, t) {
  switch (e) {
    case "keyup":
      return Mh.indexOf(t.keyCode) !== -1;
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
function ld(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Dh(e, t) {
  switch (e) {
    case "compositionend":
      return ld(t);
    case "keypress":
      return t.which !== 32 ? null : ((qs = !0), Js);
    case "textInput":
      return (e = t.data), e === Js && qs ? null : e;
    default:
      return null;
  }
}
function Oh(e, t) {
  if (Un)
    return e === "compositionend" || (!Ua && rd(e, t))
      ? ((e = td()), (Vl = Da = Kt = null), (Un = !1), e)
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
      return nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fh = {
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
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fh[e.type] : t === "textarea";
}
function id(e, t, n, r) {
  Fc(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new Oa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  Zr = null;
function Uh(e) {
  vd(e, 0);
}
function Ci(e) {
  var t = Bn(e);
  if (_c(t)) return e;
}
function Ih(e, t) {
  if (e === "change") return t;
}
var od = !1;
if (_t) {
  var bi;
  if (_t) {
    var eo = "oninput" in document;
    if (!eo) {
      var eu = document.createElement("div");
      eu.setAttribute("oninput", "return;"),
        (eo = typeof eu.oninput == "function");
    }
    bi = eo;
  } else bi = !1;
  od = bi && (!document.documentMode || 9 < document.documentMode);
}
function tu() {
  Ur && (Ur.detachEvent("onpropertychange", ad), (Zr = Ur = null));
}
function ad(e) {
  if (e.propertyName === "value" && Ci(Zr)) {
    var t = [];
    id(t, Zr, e, _a(e)), Bc(Uh, t);
  }
}
function Ah(e, t, n) {
  e === "focusin"
    ? (tu(), (Ur = t), (Zr = n), Ur.attachEvent("onpropertychange", ad))
    : e === "focusout" && tu();
}
function Bh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ci(Zr);
}
function Vh(e, t) {
  if (e === "click") return Ci(t);
}
function $h(e, t) {
  if (e === "input" || e === "change") return Ci(t);
}
function Hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Hh;
function Jr(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!So.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ru(e, t) {
  var n = nu(e);
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
    n = nu(n);
  }
}
function sd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ud() {
  for (var e = window, t = Zl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zl(e.document);
  }
  return t;
}
function Ia(e) {
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
function Wh(e) {
  var t = ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ia(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ru(n, i));
        var o = ru(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
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
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qh = _t && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  Bo = null,
  Ir = null,
  Vo = !1;
function lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo ||
    In == null ||
    In !== Zl(r) ||
    ((r = In),
    "selectionStart" in r && Ia(r)
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
    (Ir && Jr(Ir, r)) ||
      ((Ir = r),
      (r = ri(Bo, "onSelect")),
      0 < r.length &&
        ((t = new Oa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
}
function _l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  to = {},
  cd = {};
_t &&
  ((cd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function ji(e) {
  if (to[e]) return to[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cd) return (to[e] = t[n]);
  return e;
}
var dd = ji("animationend"),
  fd = ji("animationiteration"),
  hd = ji("animationstart"),
  pd = ji("transitionend"),
  md = new Map(),
  iu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  md.set(e, t), Nn(t, [e]);
}
for (var no = 0; no < iu.length; no++) {
  var ro = iu[no],
    Kh = ro.toLowerCase(),
    Yh = ro[0].toUpperCase() + ro.slice(1);
  ln(Kh, "on" + Yh);
}
ln(dd, "onAnimationEnd");
ln(fd, "onAnimationIteration");
ln(hd, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(pd, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gh = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function ou(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), K1(r, t, void 0, e), (e.currentTarget = null);
}
function vd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          ou(l, a, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          ou(l, a, c), (i = s);
        }
    }
  }
  if (ql) throw ((e = Fo), (ql = !1), (Fo = null), e);
}
function ee(e, t) {
  var n = t[Ko];
  n === void 0 && (n = t[Ko] = new Set());
  var r = e + "__bubble";
  n.has(r) || (gd(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
  var r = 0;
  t && (r |= 4), gd(n, e, r, t);
}
var Rl = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
  if (!e[Rl]) {
    (e[Rl] = !0),
      Cc.forEach(function (n) {
        n !== "selectionchange" && (Gh.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rl] || ((t[Rl] = !0), lo("selectionchange", !1, t));
  }
}
function gd(e, t, n, r) {
  switch (ed(t)) {
    case 1:
      var l = sh;
      break;
    case 4:
      l = uh;
      break;
    default:
      l = za;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Oo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function io(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = fn(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Bc(function () {
    var c = i,
      d = _a(n),
      f = [];
    e: {
      var p = md.get(e);
      if (p !== void 0) {
        var S = Oa,
          w = e;
        switch (e) {
          case "keypress":
            if ($l(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Ch;
            break;
          case "focusin":
            (w = "focus"), (S = qi);
            break;
          case "focusout":
            (w = "blur"), (S = qi);
            break;
          case "beforeblur":
          case "afterblur":
            S = qi;
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
            S = Gs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = fh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Ph;
            break;
          case dd:
          case fd:
          case hd:
            S = mh;
            break;
          case pd:
            S = _h;
            break;
          case "scroll":
            S = ch;
            break;
          case "wheel":
            S = Th;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = gh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Zs;
        }
        var E = (t & 4) !== 0,
          P = !E && e === "scroll",
          m = E ? (p !== null ? p + "Capture" : null) : p;
        E = [];
        for (var h = c, v; h !== null; ) {
          v = h;
          var j = v.stateNode;
          if (
            (v.tag === 5 &&
              j !== null &&
              ((v = j),
              m !== null && ((j = Kr(h, m)), j != null && E.push(br(h, j, v)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < E.length &&
          ((p = new S(p, w, null, n, d)), f.push({ event: p, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== zo &&
            (w = n.relatedTarget || n.fromElement) &&
            (fn(w) || w[Rt]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = c),
              (w = w ? fn(w) : null),
              w !== null &&
                ((P = Pn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = c)),
          S !== w)
        ) {
          if (
            ((E = Gs),
            (j = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = Zs),
              (j = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (P = S == null ? p : Bn(S)),
            (v = w == null ? p : Bn(w)),
            (p = new E(j, h + "leave", S, n, d)),
            (p.target = P),
            (p.relatedTarget = v),
            (j = null),
            fn(d) === c &&
              ((E = new E(m, h + "enter", w, n, d)),
              (E.target = v),
              (E.relatedTarget = P),
              (j = E)),
            (P = j),
            S && w)
          )
            t: {
              for (E = S, m = w, h = 0, v = E; v; v = Mn(v)) h++;
              for (v = 0, j = m; j; j = Mn(j)) v++;
              for (; 0 < h - v; ) (E = Mn(E)), h--;
              for (; 0 < v - h; ) (m = Mn(m)), v--;
              for (; h--; ) {
                if (E === m || (m !== null && E === m.alternate)) break t;
                (E = Mn(E)), (m = Mn(m));
              }
              E = null;
            }
          else E = null;
          S !== null && au(f, p, S, E, !1),
            w !== null && P !== null && au(f, P, w, E, !0);
        }
      }
      e: {
        if (
          ((p = c ? Bn(c) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var R = Ih;
        else if (bs(p))
          if (od) R = $h;
          else {
            R = Bh;
            var M = Ah;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (R = Vh);
        if (R && (R = R(e, c))) {
          id(f, R, n, d);
          break e;
        }
        M && M(e, p, c),
          e === "focusout" &&
            (M = p._wrapperState) &&
            M.controlled &&
            p.type === "number" &&
            Lo(p, "number", p.value);
      }
      switch (((M = c ? Bn(c) : window), e)) {
        case "focusin":
          (bs(M) || M.contentEditable === "true") &&
            ((In = M), (Bo = c), (Ir = null));
          break;
        case "focusout":
          Ir = Bo = In = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vo = !1), lu(f, n, d);
          break;
        case "selectionchange":
          if (Qh) break;
        case "keydown":
        case "keyup":
          lu(f, n, d);
      }
      var g;
      if (Ua)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Un
          ? rd(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (nd &&
          n.locale !== "ko" &&
          (Un || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Un && (g = td())
            : ((Kt = d),
              (Da = "value" in Kt ? Kt.value : Kt.textContent),
              (Un = !0))),
        (M = ri(c, T)),
        0 < M.length &&
          ((T = new Xs(T, e, null, n, d)),
          f.push({ event: T, listeners: M }),
          g ? (T.data = g) : ((g = ld(n)), g !== null && (T.data = g)))),
        (g = zh ? Dh(e, n) : Oh(e, n)) &&
          ((c = ri(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Xs("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = g)));
    }
    vd(f, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kr(e, n)),
      i != null && r.unshift(br(e, i, l)),
      (i = Kr(e, t)),
      i != null && r.push(br(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((s = Kr(n, i)), s != null && o.unshift(br(n, s, a)))
        : l || ((s = Kr(n, i)), s != null && o.push(br(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xh = /\r\n?/g,
  Zh = /\u0000|\uFFFD/g;
function su(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xh,
      `
`
    )
    .replace(Zh, "");
}
function Tl(e, t, n) {
  if (((t = su(t)), su(e) !== t && n)) throw Error(N(425));
}
function li() {}
var $o = null,
  Ho = null;
function Wo(e, t) {
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
var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
  Jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uu = typeof Promise == "function" ? Promise : void 0,
  qh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uu < "u"
      ? function (e) {
          return uu.resolve(null).then(e).catch(bh);
        }
      : Qo;
function bh(e) {
  setTimeout(function () {
    throw e;
  });
}
function oo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
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
function cu(e) {
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
var cr = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + cr,
  el = "__reactProps$" + cr,
  Rt = "__reactContainer$" + cr,
  Ko = "__reactEvents$" + cr,
  ep = "__reactListeners$" + cr,
  tp = "__reactHandles$" + cr;
function fn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cu(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hl(e) {
  return (
    (e = e[wt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Ni(e) {
  return e[el] || null;
}
var Yo = [],
  Vn = -1;
function on(e) {
  return { current: e };
}
function te(e) {
  0 > Vn || ((e.current = Yo[Vn]), (Yo[Vn] = null), Vn--);
}
function b(e, t) {
  Vn++, (Yo[Vn] = e.current), (e.current = t);
}
var rn = {},
  Re = on(rn),
  Ae = on(!1),
  wn = rn;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function ii() {
  te(Ae), te(Re);
}
function du(e, t, n) {
  if (Re.current !== rn) throw Error(N(168));
  b(Re, t), b(Ae, n);
}
function yd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, A1(e) || "Unknown", l));
  return ue({}, n, r);
}
function oi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (wn = Re.current),
    b(Re, e),
    b(Ae, Ae.current),
    !0
  );
}
function fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = yd(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(Re),
      b(Re, e))
    : te(Ae),
    b(Ae, n);
}
var Ct = null,
  Pi = !1,
  ao = !1;
function xd(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function np(e) {
  (Pi = !0), xd(e);
}
function an() {
  if (!ao && Ct !== null) {
    ao = !0;
    var e = 0,
      t = Z;
    try {
      var n = Ct;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Pi = !1);
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Wc(Ra, an), l);
    } finally {
      (Z = t), (ao = !1);
    }
  }
  return null;
}
var $n = [],
  Hn = 0,
  ai = null,
  si = 0,
  et = [],
  tt = 0,
  Sn = null,
  jt = 1,
  Nt = "";
function cn(e, t) {
  ($n[Hn++] = si), ($n[Hn++] = ai), (ai = e), (si = t);
}
function wd(e, t, n) {
  (et[tt++] = jt), (et[tt++] = Nt), (et[tt++] = Sn), (Sn = e);
  var r = jt;
  e = Nt;
  var l = 32 - pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - pt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (jt = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (Nt = i + e);
  } else (jt = (1 << i) | (n << l) | r), (Nt = e);
}
function Aa(e) {
  e.return !== null && (cn(e, 1), wd(e, 1, 0));
}
function Ba(e) {
  for (; e === ai; )
    (ai = $n[--Hn]), ($n[Hn] = null), (si = $n[--Hn]), ($n[Hn] = null);
  for (; e === Sn; )
    (Sn = et[--tt]),
      (et[tt] = null),
      (Nt = et[--tt]),
      (et[tt] = null),
      (jt = et[--tt]),
      (et[tt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  ht = null;
function Sd(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sn !== null ? { id: jt, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xo(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (Go(e)) throw Error(N(418));
        t = Jt(n.nextSibling);
        var r = Ye;
        t && hu(e, t)
          ? Sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Go(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Ml(e) {
  if (e !== Ye) return !1;
  if (!le) return pu(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Go(e)) throw (Ed(), Error(N(418)));
    for (; t; ) Sd(e, t), (t = Jt(t.nextSibling));
  }
  if ((pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ed() {
  for (var e = Ke; e; ) e = Jt(e.nextSibling);
}
function nr() {
  (Ke = Ye = null), (le = !1);
}
function Va(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var rp = zt.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ui = on(null),
  ci = null,
  Wn = null,
  $a = null;
function Ha() {
  $a = Wn = ci = null;
}
function Wa(e) {
  var t = ui.current;
  te(ui), (e._currentValue = t);
}
function Zo(e, t, n) {
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
function qn(e, t) {
  (ci = e),
    ($a = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if ($a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (ci === null) throw Error(N(308));
      (Wn = e), (ci.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var hn = null;
function Qa(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function kd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Qa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Qa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Hl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ta(e, n);
  }
}
function mu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
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
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function di(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = l.baseState;
    (o = 0), (d = c = s = null), (a = i);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            E = a;
          switch (((p = t), (S = n), E.tag)) {
            case 1:
              if (((w = E.payload), typeof w == "function")) {
                f = w.call(S, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = E.payload),
                (p = typeof w == "function" ? w.call(S, f, p) : w),
                p == null)
              )
                break e;
              f = ue({}, f, p);
              break e;
            case 2:
              Ht = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = S), (s = f)) : (d = d.next = S),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = f),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (kn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var jd = new kc.Component().refs;
function Jo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = en(e),
      i = Pt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), Hl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = en(e),
      i = Pt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), Hl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = en(e),
      l = Pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (mt(t, e, r, n), Hl(t, e, r));
  },
};
function gu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jr(n, r) || !Jr(l, i)
      : !0
  );
}
function Nd(e, t, n) {
  var r = !1,
    l = rn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((l = Be(t) ? wn : Re.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tr(e, l) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function qo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = jd), Ka(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = it(i))
    : ((i = Be(t) ? wn : Re.current), (l.context = tr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Jo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Li.enqueueReplaceState(l, l.state, null),
      di(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === jd && (a = l.refs = {}),
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
function zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function Pd(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function l(m, h) {
    return (m = tn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, j) {
    return h === null || h.tag !== 6
      ? ((h = mo(v, m.mode, j)), (h.return = m), h)
      : ((h = l(h, v)), (h.return = m), h);
  }
  function s(m, h, v, j) {
    var R = v.type;
    return R === Fn
      ? d(m, h, v.props.children, j, v.key)
      : h !== null &&
        (h.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === $t &&
            xu(R) === h.type))
      ? ((j = l(h, v.props)), (j.ref = Cr(m, h, v)), (j.return = m), j)
      : ((j = Xl(v.type, v.key, v.props, null, m.mode, j)),
        (j.ref = Cr(m, h, v)),
        (j.return = m),
        j);
  }
  function c(m, h, v, j) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = vo(v, m.mode, j)), (h.return = m), h)
      : ((h = l(h, v.children || [])), (h.return = m), h);
  }
  function d(m, h, v, j, R) {
    return h === null || h.tag !== 7
      ? ((h = yn(v, m.mode, j, R)), (h.return = m), h)
      : ((h = l(h, v)), (h.return = m), h);
  }
  function f(m, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = mo("" + h, m.mode, v)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case El:
          return (
            (v = Xl(h.type, h.key, h.props, null, m.mode, v)),
            (v.ref = Cr(m, null, h)),
            (v.return = m),
            v
          );
        case On:
          return (h = vo(h, m.mode, v)), (h.return = m), h;
        case $t:
          var j = h._init;
          return f(m, j(h._payload), v);
      }
      if (Tr(h) || xr(h))
        return (h = yn(h, m.mode, v, null)), (h.return = m), h;
      zl(m, h);
    }
    return null;
  }
  function p(m, h, v, j) {
    var R = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return R !== null ? null : a(m, h, "" + v, j);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case El:
          return v.key === R ? s(m, h, v, j) : null;
        case On:
          return v.key === R ? c(m, h, v, j) : null;
        case $t:
          return (R = v._init), p(m, h, R(v._payload), j);
      }
      if (Tr(v) || xr(v)) return R !== null ? null : d(m, h, v, j, null);
      zl(m, v);
    }
    return null;
  }
  function S(m, h, v, j, R) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (m = m.get(v) || null), a(h, m, "" + j, R);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case El:
          return (m = m.get(j.key === null ? v : j.key) || null), s(h, m, j, R);
        case On:
          return (m = m.get(j.key === null ? v : j.key) || null), c(h, m, j, R);
        case $t:
          var M = j._init;
          return S(m, h, v, M(j._payload), R);
      }
      if (Tr(j) || xr(j)) return (m = m.get(v) || null), d(h, m, j, R, null);
      zl(h, j);
    }
    return null;
  }
  function w(m, h, v, j) {
    for (
      var R = null, M = null, g = h, T = (h = 0), U = null;
      g !== null && T < v.length;
      T++
    ) {
      g.index > T ? ((U = g), (g = null)) : (U = g.sibling);
      var O = p(m, g, v[T], j);
      if (O === null) {
        g === null && (g = U);
        break;
      }
      e && g && O.alternate === null && t(m, g),
        (h = i(O, h, T)),
        M === null ? (R = O) : (M.sibling = O),
        (M = O),
        (g = U);
    }
    if (T === v.length) return n(m, g), le && cn(m, T), R;
    if (g === null) {
      for (; T < v.length; T++)
        (g = f(m, v[T], j)),
          g !== null &&
            ((h = i(g, h, T)), M === null ? (R = g) : (M.sibling = g), (M = g));
      return le && cn(m, T), R;
    }
    for (g = r(m, g); T < v.length; T++)
      (U = S(g, m, T, v[T], j)),
        U !== null &&
          (e && U.alternate !== null && g.delete(U.key === null ? T : U.key),
          (h = i(U, h, T)),
          M === null ? (R = U) : (M.sibling = U),
          (M = U));
    return (
      e &&
        g.forEach(function (Y) {
          return t(m, Y);
        }),
      le && cn(m, T),
      R
    );
  }
  function E(m, h, v, j) {
    var R = xr(v);
    if (typeof R != "function") throw Error(N(150));
    if (((v = R.call(v)), v == null)) throw Error(N(151));
    for (
      var M = (R = null), g = h, T = (h = 0), U = null, O = v.next();
      g !== null && !O.done;
      T++, O = v.next()
    ) {
      g.index > T ? ((U = g), (g = null)) : (U = g.sibling);
      var Y = p(m, g, O.value, j);
      if (Y === null) {
        g === null && (g = U);
        break;
      }
      e && g && Y.alternate === null && t(m, g),
        (h = i(Y, h, T)),
        M === null ? (R = Y) : (M.sibling = Y),
        (M = Y),
        (g = U);
    }
    if (O.done) return n(m, g), le && cn(m, T), R;
    if (g === null) {
      for (; !O.done; T++, O = v.next())
        (O = f(m, O.value, j)),
          O !== null &&
            ((h = i(O, h, T)), M === null ? (R = O) : (M.sibling = O), (M = O));
      return le && cn(m, T), R;
    }
    for (g = r(m, g); !O.done; T++, O = v.next())
      (O = S(g, m, T, O.value, j)),
        O !== null &&
          (e && O.alternate !== null && g.delete(O.key === null ? T : O.key),
          (h = i(O, h, T)),
          M === null ? (R = O) : (M.sibling = O),
          (M = O));
    return (
      e &&
        g.forEach(function (de) {
          return t(m, de);
        }),
      le && cn(m, T),
      R
    );
  }
  function P(m, h, v, j) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Fn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case El:
          e: {
            for (var R = v.key, M = h; M !== null; ) {
              if (M.key === R) {
                if (((R = v.type), R === Fn)) {
                  if (M.tag === 7) {
                    n(m, M.sibling),
                      (h = l(M, v.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  M.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === $t &&
                    xu(R) === M.type)
                ) {
                  n(m, M.sibling),
                    (h = l(M, v.props)),
                    (h.ref = Cr(m, M, v)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, M);
                break;
              } else t(m, M);
              M = M.sibling;
            }
            v.type === Fn
              ? ((h = yn(v.props.children, m.mode, j, v.key)),
                (h.return = m),
                (m = h))
              : ((j = Xl(v.type, v.key, v.props, null, m.mode, j)),
                (j.ref = Cr(m, h, v)),
                (j.return = m),
                (m = j));
          }
          return o(m);
        case On:
          e: {
            for (M = v.key; h !== null; ) {
              if (h.key === M)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(m, h.sibling),
                    (h = l(h, v.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = vo(v, m.mode, j)), (h.return = m), (m = h);
          }
          return o(m);
        case $t:
          return (M = v._init), P(m, h, M(v._payload), j);
      }
      if (Tr(v)) return w(m, h, v, j);
      if (xr(v)) return E(m, h, v, j);
      zl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = l(h, v)), (h.return = m), (m = h))
          : (n(m, h), (h = mo(v, m.mode, j)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return P;
}
var rr = Pd(!0),
  Ld = Pd(!1),
  pl = {},
  Et = on(pl),
  tl = on(pl),
  nl = on(pl);
function pn(e) {
  if (e === pl) throw Error(N(174));
  return e;
}
function Ya(e, t) {
  switch ((b(nl, t), b(tl, e), b(Et, pl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ro(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ro(t, e));
  }
  te(Et), b(Et, t);
}
function lr() {
  te(Et), te(tl), te(nl);
}
function _d(e) {
  pn(nl.current);
  var t = pn(Et.current),
    n = Ro(t, e.type);
  t !== n && (b(tl, e), b(Et, n));
}
function Ga(e) {
  tl.current === e && (te(Et), te(tl));
}
var ae = on(0);
function fi(e) {
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
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var so = [];
function Xa() {
  for (var e = 0; e < so.length; e++)
    so[e]._workInProgressVersionPrimary = null;
  so.length = 0;
}
var Wl = zt.ReactCurrentDispatcher,
  uo = zt.ReactCurrentBatchConfig,
  En = 0,
  se = null,
  me = null,
  ye = null,
  hi = !1,
  Ar = !1,
  rl = 0,
  lp = 0;
function Pe() {
  throw Error(N(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Ja(e, t, n, r, l, i) {
  if (
    ((En = i),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wl.current = e === null || e.memoizedState === null ? sp : up),
    (e = n(r, l)),
    Ar)
  ) {
    i = 0;
    do {
      if (((Ar = !1), (rl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (ye = me = null),
        (t.updateQueue = null),
        (Wl.current = cp),
        (e = n(r, l));
    } while (Ar);
  }
  if (
    ((Wl.current = pi),
    (t = me !== null && me.next !== null),
    (En = 0),
    (ye = me = se = null),
    (hi = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function qa() {
  var e = rl !== 0;
  return (rl = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function ot() {
  if (me === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ye === null ? se.memoizedState : ye.next;
  if (t !== null) (ye = t), (me = e);
  else {
    if (e === null) throw Error(N(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function ll(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function co(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      c = i;
    do {
      var d = c.lane;
      if ((En & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (o = r)) : (s = s.next = f),
          (se.lanes |= d),
          (kn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = a),
      vt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (se.lanes |= i), (kn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fo(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    vt(i, t.memoizedState) || (Ie = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Rd() {}
function Td(e, t) {
  var n = se,
    r = ot(),
    l = t(),
    i = !vt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ie = !0)),
    (r = r.queue),
    ba(Dd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      il(9, zd.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(N(349));
    En & 30 || Md(n, t, l);
  }
  return l;
}
function Md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Od(t) && Fd(e);
}
function Dd(e, t, n) {
  return n(function () {
    Od(t) && Fd(e);
  });
}
function Od(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Fd(e) {
  var t = Tt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function wu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ap.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function il(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ud() {
  return ot().memoizedState;
}
function Ql(e, t, n, r) {
  var l = xt();
  (se.flags |= e),
    (l.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r));
}
function _i(e, t, n, r) {
  var l = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((i = o.destroy), r !== null && Za(r, o.deps))) {
      l.memoizedState = il(t, n, i, r);
      return;
    }
  }
  (se.flags |= e), (l.memoizedState = il(1 | t, n, i, r));
}
function Su(e, t) {
  return Ql(8390656, 8, e, t);
}
function ba(e, t) {
  return _i(2048, 8, e, t);
}
function Id(e, t) {
  return _i(4, 2, e, t);
}
function Ad(e, t) {
  return _i(4, 4, e, t);
}
function Bd(e, t) {
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
function Vd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _i(4, 4, Bd.bind(null, t, e), n)
  );
}
function es() {}
function $d(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hd(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wd(e, t, n) {
  return En & 21
    ? (vt(n, t) || ((n = Yc()), (se.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function ip(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (uo.transition = r);
  }
}
function Qd() {
  return ot().memoizedState;
}
function op(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Kd(e))
  )
    Yd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var l = De();
    mt(n, e, r, l), Gd(n, t, r);
  }
}
function ap(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kd(e)) Yd(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = a), vt(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Qa(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, l, r)),
      n !== null && ((l = De()), mt(n, e, r, l), Gd(n, t, r));
  }
}
function Kd(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function Yd(e, t) {
  Ar = hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ta(e, n);
  }
}
var pi = {
    readContext: it,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  sp = {
    readContext: it,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: Su,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ql(4194308, 4, Bd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ql(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
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
        (e = e.dispatch = op.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wu,
    useDebugValue: es,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = wu(!1),
        t = e[0];
      return (e = ip.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        l = xt();
      if (le) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(N(349));
        En & 30 || Md(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Su(Dd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        il(9, zd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = xe.identifierPrefix;
      if (le) {
        var n = Nt,
          r = jt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  up = {
    readContext: it,
    useCallback: $d,
    useContext: it,
    useEffect: ba,
    useImperativeHandle: Vd,
    useInsertionEffect: Id,
    useLayoutEffect: Ad,
    useMemo: Hd,
    useReducer: co,
    useRef: Ud,
    useState: function () {
      return co(ll);
    },
    useDebugValue: es,
    useDeferredValue: function (e) {
      var t = ot();
      return Wd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = co(ll)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Td,
    useId: Qd,
    unstable_isNewReconciler: !1,
  },
  cp = {
    readContext: it,
    useCallback: $d,
    useContext: it,
    useEffect: ba,
    useImperativeHandle: Vd,
    useInsertionEffect: Id,
    useLayoutEffect: Ad,
    useMemo: Hd,
    useReducer: fo,
    useRef: Ud,
    useState: function () {
      return fo(ll);
    },
    useDebugValue: es,
    useDeferredValue: function (e) {
      var t = ot();
      return me === null ? (t.memoizedState = e) : Wd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = fo(ll)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Td,
    useId: Qd,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += I1(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dp = typeof WeakMap == "function" ? WeakMap : Map;
function Xd(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vi || ((vi = !0), (ua = r)), bo(e, t);
    }),
    n
  );
}
function Zd(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        bo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        bo(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = jp.bind(null, e, t, n)), t.then(e, e));
}
function ku(e) {
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
function Cu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Pt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var fp = zt.ReactCurrentOwner,
  Ie = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Ld(t, null, n, r) : rr(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    qn(t, l),
    (r = Ja(e, t, n, r, i, l)),
    (n = qa()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && n && Aa(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function Nu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ss(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Jd(e, t, i, r, l))
      : ((e = Xl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(o, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return ea(e, t, n, r, l);
}
function qd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Kn, Qe),
        (Qe |= n);
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
          b(Kn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Kn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Kn, Qe),
      (Qe |= r);
  return ze(e, t, l, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ea(e, t, n, r, l) {
  var i = Be(n) ? wn : Re.current;
  return (
    (i = tr(t, i)),
    qn(t, l),
    (n = Ja(e, t, n, r, i, l)),
    (r = qa()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && r && Aa(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (Be(n)) {
    var i = !0;
    oi(t);
  } else i = !1;
  if ((qn(t, l), t.stateNode === null))
    Kl(e, t), Nd(t, n, r), qo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = Be(n) ? wn : Re.current), (c = tr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && yu(t, o, r, c)),
      (Ht = !1);
    var p = t.memoizedState;
    (o.state = p),
      di(t, r, o, l),
      (s = t.memoizedState),
      a !== r || p !== s || Ae.current || Ht
        ? (typeof d == "function" && (Jo(t, n, d, r), (s = t.memoizedState)),
          (a = Ht || gu(t, n, a, r, p, s, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Cd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = it(s))
        : ((s = Be(n) ? wn : Re.current), (s = tr(t, s)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || p !== s) && yu(t, o, r, s)),
      (Ht = !1),
      (p = t.memoizedState),
      (o.state = p),
      di(t, r, o, l);
    var w = t.memoizedState;
    a !== f || p !== w || Ae.current || Ht
      ? (typeof S == "function" && (Jo(t, n, S, r), (w = t.memoizedState)),
        (c = Ht || gu(t, n, c, r, p, w, s) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ta(e, t, n, r, i, l);
}
function ta(e, t, n, r, l, i) {
  bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && fu(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (fp.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rr(t, e.child, null, i)), (t.child = rr(t, null, a, i)))
      : ze(e, t, a, i),
    (t.memoizedState = r.state),
    l && fu(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && du(e, t.context, !1),
    Ya(e, t.containerInfo);
}
function Lu(e, t, n, r, l) {
  return nr(), Va(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var na = { dehydrated: null, treeContext: null, retryLane: 0 };
function ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ae, l & 1),
    e === null)
  )
    return (
      Xo(t),
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
                : (i = Mi(o, r, 0, null)),
              (e = yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ra(n)),
              (t.memoizedState = na),
              e)
            : ts(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return hp(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = tn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = tn(a, i)) : ((i = yn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ra(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = na),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tn(i, { mode: "visible", children: r.children })),
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
function ts(e, t) {
  return (
    (t = Mi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && Va(r),
    rr(t, e.child, null, n),
    (e = ts(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ho(Error(N(422)))), Dl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Mi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = yn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rr(t, e.child, null, o),
        (t.child.memoizedState = ra(o)),
        (t.memoizedState = na),
        i);
  if (!(t.mode & 1)) return Dl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = ho(i, r, void 0)), Dl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ie || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Tt(e, l), mt(r, e, l, -1));
    }
    return as(), (r = ho(Error(N(421)))), Dl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Np.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Jt(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (ht = null),
      e !== null &&
        ((et[tt++] = jt),
        (et[tt++] = Nt),
        (et[tt++] = Sn),
        (jt = e.id),
        (Nt = e.overflow),
        (Sn = t)),
      (t = ts(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function po(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _u(e, n, t);
        else if (e.tag === 19) _u(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && fi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          po(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        po(t, !0, n, null, i);
        break;
      case "together":
        po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pp(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), nr();
      break;
    case 5:
      _d(t);
      break;
    case 1:
      Be(t.type) && oi(t);
      break;
    case 4:
      Ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(ui, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? tf(e, t, n)
          : (b(ae, ae.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      b(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qd(e, t, n);
  }
  return Mt(e, t, n);
}
var rf, la, lf, of;
rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
la = function () {};
lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), pn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        (l = No(e, l)), (r = No(e, r)), (i = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = _o(e, l)), (r = _o(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = li);
    }
    To(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Wr.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && ee("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ba(t), t.tag)) {
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
      return Le(t), null;
    case 1:
      return Be(t.type) && ii(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        lr(),
        te(Ae),
        te(Re),
        Xa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (fa(ht), (ht = null)))),
        la(e, t),
        Le(t),
        null
      );
    case 5:
      Ga(t);
      var l = pn(nl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Le(t), null;
        }
        if (((e = pn(Et.current)), Ml(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[wt] = t), (r[el] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zr.length; l++) ee(zr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Is(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Bs(r, i), ee("invalid", r);
          }
          To(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Wr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              kl(r), As(r, i, !0);
              break;
            case "textarea":
              kl(r), Vs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = li);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Mc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
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
            (e[wt] = t),
            (e[el] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Mo(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < zr.length; l++) ee(zr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Is(e, r), (l = No(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Bs(e, r), (l = _o(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            To(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Oc(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && zc(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Qr(e, s)
                    : typeof s == "number" && Qr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Wr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ee("scroll", e)
                      : s != null && ja(e, i, s, o));
              }
            switch (n) {
              case "input":
                kl(e), As(e, r, !1);
                break;
              case "textarea":
                kl(e), Vs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Gn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = li);
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
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = pn(nl.current)), pn(Et.current), Ml(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Ed(), nr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[wt] = t;
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (i = !1);
        } else ht !== null && (fa(ht), (ht = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : as())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        lr(), la(e, t), e === null && qr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Wa(t.type._context), Le(t), null;
    case 17:
      return Be(t.type) && ii(), Le(t), null;
    case 19:
      if ((te(ae), (i = t.memoizedState), i === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) jr(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = fi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    jr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
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
                    (n = n.sibling);
                return b(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > or &&
            ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * he() - i.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ae.current),
          b(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        os(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function vp(e, t) {
  switch ((Ba(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        lr(),
        te(Ae),
        te(Re),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ga(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        nr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return lr(), null;
    case 10:
      return Wa(t.type._context), null;
    case 22:
    case 23:
      return os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ol = !1,
  _e = !1,
  gp = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ia(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ru = !1;
function yp(e, t) {
  if ((($o = ti), (e = ud()), Ia(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = o + l),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (S = f.firstChild) !== null;

            )
              (p = f), (f = S);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === l && (a = o),
                p === i && ++d === r && (s = o),
                (S = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = S;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ho = { focusedElem: e, selectionRange: n }, ti = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var E = w.memoizedProps,
                    P = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : ct(t.type, E),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
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
        } catch (j) {
          ce(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (w = Ru), (Ru = !1), w;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ia(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ri(e, t) {
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
function oa(e) {
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
function af(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), af(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[el], delete t[Ko], delete t[ep], delete t[tp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = li));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
function sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
var Ce = null,
  dt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) uf(e, t, n), (n = n.sibling);
}
function uf(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Ei, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Qn(n, t);
    case 6:
      var r = Ce,
        l = dt;
      (Ce = null),
        Bt(e, t, n),
        (Ce = r),
        (dt = l),
        Ce !== null &&
          (dt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (dt
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? oo(e.parentNode, n)
              : e.nodeType === 1 && oo(e, n),
            Xr(e))
          : oo(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = dt),
        (Ce = n.stateNode.containerInfo),
        (dt = !0),
        Bt(e, t, n),
        (Ce = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ia(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Bt(e, t, n), (_e = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Mu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gp()),
      t.forEach(function (r) {
        var l = Pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ce = a.stateNode), (dt = !1);
              break e;
            case 3:
              (Ce = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (Ce = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ce === null) throw Error(N(160));
        uf(i, o, l), (Ce = null), (dt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        ce(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cf(t, e), (t = t.sibling);
}
function cf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), yt(e), r & 4)) {
        try {
          Br(3, e, e.return), Ri(3, e);
        } catch (E) {
          ce(e, e.return, E);
        }
        try {
          Br(5, e, e.return);
        } catch (E) {
          ce(e, e.return, E);
        }
      }
      break;
    case 1:
      ut(t, e), yt(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        yt(e),
        r & 512 && n !== null && Qn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qr(l, "");
        } catch (E) {
          ce(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Rc(l, i),
              Mo(a, o);
            var c = Mo(a, i);
            for (o = 0; o < s.length; o += 2) {
              var d = s[o],
                f = s[o + 1];
              d === "style"
                ? Oc(l, f)
                : d === "dangerouslySetInnerHTML"
                ? zc(l, f)
                : d === "children"
                ? Qr(l, f)
                : ja(l, d, f, c);
            }
            switch (a) {
              case "input":
                Po(l, i);
                break;
              case "textarea":
                Tc(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Gn(l, !!i.multiple, S, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Gn(l, !!i.multiple, i.defaultValue, !0)
                      : Gn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[el] = i;
          } catch (E) {
            ce(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((ut(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (E) {
          ce(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (E) {
          ce(e, e.return, E);
        }
      break;
    case 4:
      ut(t, e), yt(e);
      break;
    case 13:
      ut(t, e),
        yt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ls = he())),
        r & 4 && Mu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (c = _e) || d), ut(t, e), (_e = c)) : ut(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (f = z = d; z !== null; ) {
              switch (((p = z), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, p, p.return);
                  break;
                case 1:
                  Qn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (E) {
                      ce(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Qn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Du(f);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (z = S)) : Du(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Dc("display", o)));
              } catch (E) {
                ce(e, e.return, E);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (E) {
                ce(e, e.return, E);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), yt(e), r & 4 && Mu(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qr(l, ""), (r.flags &= -33));
          var i = Tu(e);
          sa(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Tu(e);
          aa(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      ce(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xp(e, t, n) {
  (z = e), df(e);
}
function df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ol;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || _e;
        a = Ol;
        var c = _e;
        if (((Ol = o), (_e = s) && !c))
          for (z = l; z !== null; )
            (o = z),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ou(l)
                : s !== null
                ? ((s.return = o), (z = s))
                : Ou(l);
        for (; i !== null; ) (z = i), df(i), (i = i.sibling);
        (z = l), (Ol = a), (_e = c);
      }
      zu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : zu(e);
  }
}
function zu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Ri(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && vu(t, i, r);
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
                vu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                    var f = d.dehydrated;
                    f !== null && Xr(f);
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
        _e || (t.flags & 512 && oa(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Du(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ou(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ri(4, t);
          } catch (s) {
            ce(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ce(t, l, s);
            }
          }
          var i = t.return;
          try {
            oa(t);
          } catch (s) {
            ce(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            oa(t);
          } catch (s) {
            ce(t, o, s);
          }
      }
    } catch (s) {
      ce(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var wp = Math.ceil,
  mi = zt.ReactCurrentDispatcher,
  ns = zt.ReactCurrentOwner,
  lt = zt.ReactCurrentBatchConfig,
  X = 0,
  xe = null,
  pe = null,
  je = 0,
  Qe = 0,
  Kn = on(0),
  ve = 0,
  ol = null,
  kn = 0,
  Ti = 0,
  rs = 0,
  Vr = null,
  Ue = null,
  ls = 0,
  or = 1 / 0,
  kt = null,
  vi = !1,
  ua = null,
  bt = null,
  Fl = !1,
  Yt = null,
  gi = 0,
  $r = 0,
  ca = null,
  Yl = -1,
  Gl = 0;
function De() {
  return X & 6 ? he() : Yl !== -1 ? Yl : (Yl = he());
}
function en(e) {
  return e.mode & 1
    ? X & 2 && je !== 0
      ? je & -je
      : rp.transition !== null
      ? (Gl === 0 && (Gl = Yc()), Gl)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ed(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (ca = null), Error(N(185)));
  dl(e, n, r),
    (!(X & 2) || e !== xe) &&
      (e === xe && (!(X & 2) && (Ti |= n), ve === 4 && Qt(e, je)),
      Ve(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((or = he() + 500), Pi && an()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  rh(e, t);
  var r = ei(e, e === xe ? je : 0);
  if (r === 0)
    n !== null && Ws(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ws(n), t === 1))
      e.tag === 0 ? np(Fu.bind(null, e)) : xd(Fu.bind(null, e)),
        qh(function () {
          !(X & 6) && an();
        }),
        (n = null);
    else {
      switch (Gc(r)) {
        case 1:
          n = Ra;
          break;
        case 4:
          n = Qc;
          break;
        case 16:
          n = bl;
          break;
        case 536870912:
          n = Kc;
          break;
        default:
          n = bl;
      }
      n = xf(n, ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ff(e, t) {
  if (((Yl = -1), (Gl = 0), X & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = ei(e, e === xe ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yi(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = pf();
    (xe !== e || je !== t) && ((kt = null), (or = he() + 500), gn(e, t));
    do
      try {
        kp();
        break;
      } catch (a) {
        hf(e, a);
      }
    while (!0);
    Ha(),
      (mi.current = i),
      (X = l),
      pe !== null ? (t = 0) : ((xe = null), (je = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Uo(e)), l !== 0 && ((r = l), (t = da(e, l)))), t === 1)
    )
      throw ((n = ol), gn(e, 0), Qt(e, r), Ve(e, he()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Sp(l) &&
          ((t = yi(e, r)),
          t === 2 && ((i = Uo(e)), i !== 0 && ((r = i), (t = da(e, i)))),
          t === 1))
      )
        throw ((n = ol), gn(e, 0), Qt(e, r), Ve(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          dn(e, Ue, kt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = ls + 500 - he()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Qo(dn.bind(null, e, Ue, kt), t);
            break;
          }
          dn(e, Ue, kt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - pt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
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
                : 1960 * wp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qo(dn.bind(null, e, Ue, kt), r);
            break;
          }
          dn(e, Ue, kt);
          break;
        case 5:
          dn(e, Ue, kt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ve(e, he()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function da(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = yi(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && fa(t)),
    e
  );
}
function fa(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function Sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~rs,
      t &= ~Ti,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fu(e) {
  if (X & 6) throw Error(N(327));
  bn();
  var t = ei(e, 0);
  if (!(t & 1)) return Ve(e, he()), null;
  var n = yi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Uo(e);
    r !== 0 && ((t = r), (n = da(e, r)));
  }
  if (n === 1) throw ((n = ol), gn(e, 0), Qt(e, t), Ve(e, he()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ue, kt),
    Ve(e, he()),
    null
  );
}
function is(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((or = he() + 500), Pi && an());
  }
}
function Cn(e) {
  Yt !== null && Yt.tag === 0 && !(X & 6) && bn();
  var t = X;
  X |= 1;
  var n = lt.transition,
    r = Z;
  try {
    if (((lt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (lt.transition = n), (X = t), !(X & 6) && an();
  }
}
function os() {
  (Qe = Kn.current), te(Kn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jh(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Ba(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          lr(), te(Ae), te(Re), Xa();
          break;
        case 5:
          Ga(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          Wa(r.type._context);
          break;
        case 22:
        case 23:
          os();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (pe = e = tn(e.current, null)),
    (je = Qe = t),
    (ve = 0),
    (ol = null),
    (rs = Ti = kn = 0),
    (Ue = Vr = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function hf(e, t) {
  do {
    var n = pe;
    try {
      if ((Ha(), (Wl.current = pi), hi)) {
        for (var r = se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((En = 0),
        (ye = me = se = null),
        (Ar = !1),
        (rl = 0),
        (ns.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (ol = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = ku(o);
          if (S !== null) {
            (S.flags &= -257),
              Cu(S, o, a, i, t),
              S.mode & 1 && Eu(i, c, t),
              (t = S),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(i, c, t), as();
              break e;
            }
            s = Error(N(426));
          }
        } else if (le && a.mode & 1) {
          var P = ku(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Cu(P, o, a, i, t),
              Va(ir(s, a));
            break e;
          }
        }
        (i = s = ir(s, a)),
          ve !== 4 && (ve = 2),
          Vr === null ? (Vr = [i]) : Vr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Xd(i, s, t);
              mu(i, m);
              break e;
            case 1:
              a = s;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (bt === null || !bt.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var j = Zd(i, a, t);
                mu(i, j);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vf(n);
    } catch (R) {
      (t = R), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pf() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}
function as() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    xe === null || (!(kn & 268435455) && !(Ti & 268435455)) || Qt(xe, je);
}
function yi(e, t) {
  var n = X;
  X |= 2;
  var r = pf();
  (xe !== e || je !== t) && ((kt = null), gn(e, t));
  do
    try {
      Ep();
      break;
    } catch (l) {
      hf(e, l);
    }
  while (!0);
  if ((Ha(), (X = n), (mi.current = r), pe !== null)) throw Error(N(261));
  return (xe = null), (je = 0), ve;
}
function Ep() {
  for (; pe !== null; ) mf(pe);
}
function kp() {
  for (; pe !== null && !G1(); ) mf(pe);
}
function mf(e) {
  var t = yf(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vf(e) : (pe = t),
    (ns.current = null);
}
function vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vp(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (pe = null);
        return;
      }
    } else if (((n = mp(n, t, Qe)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function dn(e, t, n) {
  var r = Z,
    l = lt.transition;
  try {
    (lt.transition = null), (Z = 1), Cp(e, t, n, r);
  } finally {
    (lt.transition = l), (Z = r);
  }
  return null;
}
function Cp(e, t, n, r) {
  do bn();
  while (Yt !== null);
  if (X & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (lh(e, i),
    e === xe && ((pe = xe = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fl ||
      ((Fl = !0),
      xf(bl, function () {
        return bn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = lt.transition), (lt.transition = null);
    var o = Z;
    Z = 1;
    var a = X;
    (X |= 4),
      (ns.current = null),
      yp(e, n),
      cf(n, e),
      Wh(Ho),
      (ti = !!$o),
      (Ho = $o = null),
      (e.current = n),
      xp(n),
      X1(),
      (X = a),
      (Z = o),
      (lt.transition = i);
  } else e.current = n;
  if (
    (Fl && ((Fl = !1), (Yt = e), (gi = l)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    q1(n.stateNode),
    Ve(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vi) throw ((vi = !1), (e = ua), (ua = null), e);
  return (
    gi & 1 && e.tag !== 0 && bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ca ? $r++ : (($r = 0), (ca = e))) : ($r = 0),
    an(),
    null
  );
}
function bn() {
  if (Yt !== null) {
    var e = Gc(gi),
      t = lt.transition,
      n = Z;
    try {
      if (((lt.transition = null), (Z = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (gi = 0), X & 6)) throw Error(N(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (z = c; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (z = f);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var p = d.sibling,
                        S = d.return;
                      if ((af(d), d === c)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (z = p);
                        break;
                      }
                      z = S;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var E = w.child;
                if (E !== null) {
                  w.child = null;
                  do {
                    var P = E.sibling;
                    (E.sibling = null), (E = P);
                  } while (E !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (z = m);
                break e;
              }
              z = i.return;
            }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          o = z;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (z = v);
          else
            e: for (o = h; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, a);
                  }
                } catch (R) {
                  ce(a, a.return, R);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var j = a.sibling;
              if (j !== null) {
                (j.return = a.return), (z = j);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((X = l), an(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Ei, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (lt.transition = t);
    }
  }
  return !1;
}
function Uu(e, t, n) {
  (t = ir(n, t)),
    (t = Xd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = De()),
    e !== null && (dl(e, 1, t), Ve(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = ir(n, e)),
            (e = Zd(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = De()),
            t !== null && (dl(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (je & n) === n &&
      (ve === 4 || (ve === 3 && (je & 130023424) === je && 500 > he() - ls)
        ? gn(e, 0)
        : (rs |= n)),
    Ve(e, t);
}
function gf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304))
      : (t = 1));
  var n = De();
  (e = Tt(e, t)), e !== null && (dl(e, t, n), Ve(e, n));
}
function Np(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gf(e, n);
}
function Pp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), gf(e, n);
}
var yf;
yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), pp(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), le && t.flags & 1048576 && wd(t, si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Kl(e, t), (e = t.pendingProps);
      var l = tr(t, Re.current);
      qn(t, n), (l = Ja(null, t, r, e, l, n));
      var i = qa();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), oi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ka(t),
            (l.updater = Li),
            (t.stateNode = l),
            (l._reactInternals = t),
            qo(t, r, e, n),
            (t = ta(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Aa(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _p(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ea(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Nu(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ea(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Cd(e, t),
          di(t, r, null, n);
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
            (l = ir(Error(N(423)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ir(Error(N(424)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Jt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                ht = null,
                n = Ld(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _d(t),
        e === null && Xo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Wo(r, l) ? (o = null) : i !== null && Wo(r, i) && (t.flags |= 32),
        bd(e, t),
        ze(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Xo(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        Ya(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(ui, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (vt(i.value, o)) {
            if (i.children === l.children && !Ae.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Pt(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Zo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Zo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qn(t, n),
        (l = it(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Nu(e, t, r, l, n)
      );
    case 15:
      return Jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Kl(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), oi(t)) : (e = !1),
        qn(t, n),
        Nd(t, r, l),
        qo(t, r, l, n),
        ta(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return qd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function xf(e, t) {
  return Wc(e, t);
}
function Lp(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new Lp(e, t, n, r);
}
function ss(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _p(e) {
  if (typeof e == "function") return ss(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pa)) return 11;
    if (e === La) return 14;
  }
  return 2;
}
function tn(e, t) {
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
function Xl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ss(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Fn:
        return yn(n.children, l, i, t);
      case Na:
        (o = 8), (l |= 8);
        break;
      case Eo:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = Eo), (e.lanes = i), e
        );
      case ko:
        return (e = rt(13, n, t, l)), (e.elementType = ko), (e.lanes = i), e;
      case Co:
        return (e = rt(19, n, t, l)), (e.elementType = Co), (e.lanes = i), e;
      case Pc:
        return Mi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jc:
              o = 10;
              break e;
            case Nc:
              o = 9;
              break e;
            case Pa:
              o = 11;
              break e;
            case La:
              o = 14;
              break e;
            case $t:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function yn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Mi(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mo(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function vo(e, t, n) {
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
function Rp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xi(0)),
    (this.expirationTimes = Xi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function us(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new Rp(e, t, n, a, s)),
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
    Ka(i),
    e
  );
}
function Tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wf(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
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
    if (Be(n)) return yd(e, n, t);
  }
  return t;
}
function Sf(e, t, n, r, l, i, o, a, s) {
  return (
    (e = us(n, r, !0, e, l, i, o, a, s)),
    (e.context = wf(null)),
    (n = e.current),
    (r = De()),
    (l = en(n)),
    (i = Pt(r, l)),
    (i.callback = t ?? null),
    qt(n, i, l),
    (e.current.lanes = l),
    dl(e, l, r),
    Ve(e, r),
    e
  );
}
function zi(e, t, n, r) {
  var l = t.current,
    i = De(),
    o = en(l);
  return (
    (n = wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, o)),
    e !== null && (mt(e, l, o, i), Hl(e, l, o)),
    o
  );
}
function xi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Iu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cs(e, t) {
  Iu(e, t), (e = e.alternate) && Iu(e, t);
}
function Mp() {
  return null;
}
var Ef =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ds(e) {
  this._internalRoot = e;
}
Di.prototype.render = ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  zi(e, t, null, null);
};
Di.prototype.unmount = ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      zi(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function Di(e) {
  this._internalRoot = e;
}
Di.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && bc(e);
  }
};
function fs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Au() {}
function zp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = xi(o);
        i.call(c);
      };
    }
    var o = Sf(t, r, e, 0, null, !1, !1, "", Au);
    return (
      (e._reactRootContainer = o),
      (e[Rt] = o.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = xi(s);
      a.call(c);
    };
  }
  var s = us(e, 0, !1, null, null, !1, !1, "", Au);
  return (
    (e._reactRootContainer = s),
    (e[Rt] = s.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      zi(t, s, n, r);
    }),
    s
  );
}
function Fi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = xi(o);
        a.call(s);
      };
    }
    zi(t, o, e, l);
  } else o = zp(n, t, e, l, r);
  return xi(o);
}
Xc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 &&
          (Ta(t, n | 1), Ve(t, he()), !(X & 6) && ((or = he() + 500), an()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var l = De();
          mt(r, e, 1, l);
        }
      }),
        cs(e, 1);
  }
};
Ma = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = De();
      mt(t, e, 134217728, n);
    }
    cs(e, 134217728);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = De();
      mt(n, e, t, r);
    }
    cs(e, t);
  }
};
Jc = function () {
  return Z;
};
qc = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ni(r);
            if (!l) throw Error(N(90));
            _c(r), Po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
  }
};
Ic = is;
Ac = Cn;
var Dp = { usingClientEntryPoint: !1, Events: [hl, Bn, Ni, Fc, Uc, is] },
  Nr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Op = {
    bundleType: Nr.bundleType,
    version: Nr.version,
    rendererPackageName: Nr.rendererPackageName,
    rendererConfig: Nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nr.findFiberByHostInstance || Mp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ul.isDisabled && Ul.supportsFiber)
    try {
      (Ei = Ul.inject(Op)), (St = Ul);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fs(t)) throw Error(N(200));
  return Tp(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!fs(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = Ef;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = us(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new ds(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = $c(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Cn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Oi(t)) throw Error(N(200));
  return Fi(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!fs(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Ef;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Sf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Rt] = t.current),
    qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Di(t);
};
Xe.render = function (e, t, n) {
  if (!Oi(t)) throw Error(N(200));
  return Fi(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Oi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Cn(function () {
        Fi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = is;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Fi(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function kf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), (wc.exports = Xe);
var hs = wc.exports;
const Fp = ya(hs),
  Up = sc({ __proto__: null, default: Fp }, [hs]);
var Bu = hs;
(wo.createRoot = Bu.createRoot), (wo.hydrateRoot = Bu.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var fe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fe || (fe = {}));
const Vu = "popstate";
function Ip(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return al(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : jn(l);
  }
  return Bp(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ar(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ap() {
  return Math.random().toString(36).substr(2, 8);
}
function $u(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    oe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || Ap() }
    )
  );
}
function jn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Bp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = fe.Pop,
    s = null,
    c = d();
  c == null && ((c = 0), o.replaceState(oe({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = fe.Pop;
    let P = d(),
      m = P == null ? null : P - c;
    (c = P), s && s({ action: a, location: E.location, delta: m });
  }
  function p(P, m) {
    a = fe.Push;
    let h = al(E.location, P, m);
    n && n(h, P), (c = d() + 1);
    let v = $u(h, c),
      j = E.createHref(h);
    try {
      o.pushState(v, "", j);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      l.location.assign(j);
    }
    i && s && s({ action: a, location: E.location, delta: 1 });
  }
  function S(P, m) {
    a = fe.Replace;
    let h = al(E.location, P, m);
    n && n(h, P), (c = d());
    let v = $u(h, c),
      j = E.createHref(h);
    o.replaceState(v, "", j),
      i && s && s({ action: a, location: E.location, delta: 0 });
  }
  function w(P) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      h = typeof P == "string" ? P : jn(P);
    return (
      (h = h.replace(/ $/, "%20")),
      Q(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let E = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(P) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Vu, f),
        (s = P),
        () => {
          l.removeEventListener(Vu, f), (s = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: w,
    encodeLocation(P) {
      let m = w(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: S,
    go(P) {
      return o.go(P);
    },
  };
  return E;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const Vp = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function $p(e) {
  return e.index === !0;
}
function ha(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        $p(l))
      ) {
        let s = oe({}, l, t(l), { id: a });
        return (r[a] = s), s;
      } else {
        let s = oe({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = s), l.children && (s.children = ha(l.children, t, o, r)), s
        );
      }
    })
  );
}
function Yn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dt(t) : t,
    l = dr(r.pathname || "/", n);
  if (l == null) return null;
  let i = Cf(e);
  Wp(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let s = n0(l);
    o = bp(i[a], s);
  }
  return o;
}
function Hp(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Cf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (Q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = Lt([r, s.relativePath]),
      d = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Cf(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Jp(c, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let s of jf(i.path)) l(i, o, s);
    }),
    t
  );
}
function jf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = jf(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && a.push(...o),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Wp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : qp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Qp = /^:[\w-]+$/,
  Kp = 3,
  Yp = 2,
  Gp = 1,
  Xp = 10,
  Zp = -2,
  Hu = (e) => e === "*";
function Jp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hu) && (r += Zp),
    t && (r += Yp),
    n
      .filter((l) => !Hu(l))
      .reduce((l, i) => l + (Qp.test(i) ? Kp : i === "" ? Gp : Xp), r)
  );
}
function qp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function bp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      s = o === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      d = e0(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        c
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: Lt([l, d.pathname]),
      pathnameBase: i0(Lt([l, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (l = Lt([l, d.pathnameBase]));
  }
  return i;
}
function e0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = t0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: p, isOptional: S } = d;
      if (p === "*") {
        let E = a[f] || "";
        o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        S && !w ? (c[p] = void 0) : (c[p] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function t0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ar(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function n0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ar(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function dr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function r0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : l0(n, t)) : t,
    search: o0(r),
    hash: a0(l),
  };
}
function l0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function go(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Nf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ps(e, t) {
  let n = Nf(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ms(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Dt(e))
    : ((l = oe({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        go("?", "pathname", "search", l)
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        go("#", "pathname", "hash", l)
      ),
      Q(!l.search || !l.search.includes("#"), go("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      l.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let s = r0(l, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s;
}
const Lt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  o0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  a0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class vs {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function gs(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Pf = ["post", "put", "patch", "delete"],
  s0 = new Set(Pf),
  u0 = ["get", ...Pf],
  c0 = new Set(u0),
  d0 = new Set([301, 302, 303, 307, 308]),
  f0 = new Set([307, 308]),
  yo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  h0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Pr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ys = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  p0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Lf = "remix-router-transitions";
function m0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: y(x) });
  } else l = p0;
  let i = {},
    o = ha(e.routes, l, void 0, i),
    a,
    s = e.basename || "/",
    c = e.unstable_dataStrategy || x0,
    d = oe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    f = null,
    p = new Set(),
    S = null,
    w = null,
    E = null,
    P = e.hydrationData != null,
    m = Yn(o, e.history.location, s),
    h = null;
  if (m == null) {
    let y = be(404, { pathname: e.history.location.pathname }),
      { matches: x, route: k } = bu(o);
    (m = x), (h = { [k.id]: y });
  }
  let v,
    j = m.some((y) => y.route.lazy),
    R = m.some((y) => y.route.loader);
  if (j) v = !1;
  else if (!R) v = !0;
  else if (d.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      x = e.hydrationData ? e.hydrationData.errors : null,
      k = (L) =>
        L.route.loader
          ? typeof L.route.loader == "function" && L.route.loader.hydrate === !0
            ? !1
            : (y && y[L.route.id] !== void 0) || (x && x[L.route.id] !== void 0)
          : !0;
    if (x) {
      let L = m.findIndex((D) => x[D.route.id] !== void 0);
      v = m.slice(0, L + 1).every(k);
    } else v = m.every(k);
  } else v = e.hydrationData != null;
  let M,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: m,
      initialized: v,
      navigation: yo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = fe.Pop,
    U = !1,
    O,
    Y = !1,
    de = new Map(),
    ie = null,
    we = !1,
    at = !1,
    Ot = [],
    Ft = [],
    _ = new Map(),
    A = 0,
    V = -1,
    J = new Map(),
    q = new Set(),
    st = new Map(),
    $e = new Map(),
    He = new Set(),
    Te = new Map(),
    Je = new Map(),
    Vi = !1;
  function Zf() {
    if (
      ((f = e.history.listen((y) => {
        let { action: x, location: k, delta: L } = y;
        if (Vi) {
          Vi = !1;
          return;
        }
        ar(
          Je.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let D = Ls({
          currentLocation: g.location,
          nextLocation: k,
          historyAction: x,
        });
        if (D && L != null) {
          (Vi = !0),
            e.history.go(L * -1),
            gl(D, {
              state: "blocked",
              location: k,
              proceed() {
                gl(D, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(L);
              },
              reset() {
                let H = new Map(g.blockers);
                H.set(D, Pr), We({ blockers: H });
              },
            });
          return;
        }
        return un(x, k);
      })),
      n)
    ) {
      T0(t, de);
      let y = () => M0(t, de);
      t.addEventListener("pagehide", y),
        (ie = () => t.removeEventListener("pagehide", y));
    }
    return g.initialized || un(fe.Pop, g.location, { initialHydration: !0 }), M;
  }
  function Jf() {
    f && f(),
      ie && ie(),
      p.clear(),
      O && O.abort(),
      g.fetchers.forEach((y, x) => vl(x)),
      g.blockers.forEach((y, x) => Ps(x));
  }
  function qf(y) {
    return p.add(y), () => p.delete(y);
  }
  function We(y, x) {
    x === void 0 && (x = {}), (g = oe({}, g, y));
    let k = [],
      L = [];
    d.v7_fetcherPersist &&
      g.fetchers.forEach((D, H) => {
        D.state === "idle" && (He.has(H) ? L.push(H) : k.push(H));
      }),
      [...p].forEach((D) =>
        D(g, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (k.forEach((D) => g.fetchers.delete(D)), L.forEach((D) => vl(D)));
  }
  function hr(y, x, k) {
    var L, D;
    let { flushSync: H } = k === void 0 ? {} : k,
      I =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        ft(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((L = y.state) == null ? void 0 : L._isRedirect) !== !0,
      F;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (F = x.actionData)
        : (F = null)
      : I
      ? (F = g.actionData)
      : (F = null);
    let W = x.loaderData
        ? Ju(g.loaderData, x.loaderData, x.matches || [], x.errors)
        : g.loaderData,
      $ = g.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((B, ne) => $.set(ne, Pr)));
    let Se =
      U === !0 ||
      (g.navigation.formMethod != null &&
        ft(g.navigation.formMethod) &&
        ((D = y.state) == null ? void 0 : D._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      we ||
        T === fe.Pop ||
        (T === fe.Push
          ? e.history.push(y, y.state)
          : T === fe.Replace && e.history.replace(y, y.state));
    let Ee;
    if (T === fe.Pop) {
      let B = de.get(g.location.pathname);
      B && B.has(y.pathname)
        ? (Ee = { currentLocation: g.location, nextLocation: y })
        : de.has(y.pathname) &&
          (Ee = { currentLocation: y, nextLocation: g.location });
    } else if (Y) {
      let B = de.get(g.location.pathname);
      B
        ? B.add(y.pathname)
        : ((B = new Set([y.pathname])), de.set(g.location.pathname, B)),
        (Ee = { currentLocation: g.location, nextLocation: y });
    }
    We(
      oe({}, x, {
        actionData: F,
        loaderData: W,
        historyAction: T,
        location: y,
        initialized: !0,
        navigation: yo,
        revalidation: "idle",
        restoreScrollPosition: Rs(y, x.matches || g.matches),
        preventScrollReset: Se,
        blockers: $,
      }),
      { viewTransitionOpts: Ee, flushSync: H === !0 }
    ),
      (T = fe.Pop),
      (U = !1),
      (Y = !1),
      (we = !1),
      (at = !1),
      (Ot = []),
      (Ft = []);
  }
  async function Ss(y, x) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = pa(
        g.location,
        g.matches,
        s,
        d.v7_prependBasename,
        y,
        d.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: L,
        submission: D,
        error: H,
      } = Wu(d.v7_normalizeFormMethod, !1, k, x),
      I = g.location,
      F = al(g.location, L, x && x.state);
    F = oe({}, F, e.history.encodeLocation(F));
    let W = x && x.replace != null ? x.replace : void 0,
      $ = fe.Push;
    W === !0
      ? ($ = fe.Replace)
      : W === !1 ||
        (D != null &&
          ft(D.formMethod) &&
          D.formAction === g.location.pathname + g.location.search &&
          ($ = fe.Replace));
    let Se =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      Ee = (x && x.unstable_flushSync) === !0,
      B = Ls({ currentLocation: I, nextLocation: F, historyAction: $ });
    if (B) {
      gl(B, {
        state: "blocked",
        location: F,
        proceed() {
          gl(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            Ss(y, x);
        },
        reset() {
          let ne = new Map(g.blockers);
          ne.set(B, Pr), We({ blockers: ne });
        },
      });
      return;
    }
    return await un($, F, {
      submission: D,
      pendingError: H,
      preventScrollReset: Se,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: Ee,
    });
  }
  function bf() {
    if (
      ($i(),
      We({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        un(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      un(T || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function un(y, x, k) {
    O && O.abort(),
      (O = null),
      (T = y),
      (we = (k && k.startUninterruptedRevalidation) === !0),
      s1(g.location, g.matches),
      (U = (k && k.preventScrollReset) === !0),
      (Y = (k && k.enableViewTransition) === !0);
    let L = a || o,
      D = k && k.overrideNavigation,
      H = Yn(L, x, s),
      I = (k && k.flushSync) === !0;
    if (!H) {
      let B = be(404, { pathname: x.pathname }),
        { matches: ne, route: ge } = bu(L);
      Hi(),
        hr(
          x,
          { matches: ne, loaderData: {}, errors: { [ge.id]: B } },
          { flushSync: I }
        );
      return;
    }
    if (
      g.initialized &&
      !at &&
      j0(g.location, x) &&
      !(k && k.submission && ft(k.submission.formMethod))
    ) {
      hr(x, { matches: H }, { flushSync: I });
      return;
    }
    O = new AbortController();
    let F = zn(e.history, x, O.signal, k && k.submission),
      W;
    if (k && k.pendingError)
      W = [Hr(H).route.id, { type: re.error, error: k.pendingError }];
    else if (k && k.submission && ft(k.submission.formMethod)) {
      let B = await e1(F, x, k.submission, H, {
        replace: k.replace,
        flushSync: I,
      });
      if (B.shortCircuited) return;
      (W = B.pendingActionResult),
        (D = xo(x, k.submission)),
        (I = !1),
        (F = zn(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: $,
      loaderData: Se,
      errors: Ee,
    } = await t1(
      F,
      x,
      H,
      D,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      I,
      W
    );
    $ ||
      ((O = null),
      hr(x, oe({ matches: H }, qu(W), { loaderData: Se, errors: Ee })));
  }
  async function e1(y, x, k, L, D) {
    D === void 0 && (D = {}), $i();
    let H = _0(x, k);
    We({ navigation: H }, { flushSync: D.flushSync === !0 });
    let I,
      F = va(L, x);
    if (!F.route.action && !F.route.lazy)
      I = {
        type: re.error,
        error: be(405, {
          method: y.method,
          pathname: x.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((I = (await mr("action", y, [F], L))[0]), y.signal.aborted))
      return { shortCircuited: !0 };
    if (vn(I)) {
      let W;
      return (
        D && D.replace != null
          ? (W = D.replace)
          : (W =
              Gu(I.response.headers.get("Location"), new URL(y.url), s) ===
              g.location.pathname + g.location.search),
        await pr(y, I, { submission: k, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (mn(I)) throw be(400, { type: "defer-action" });
    if (nt(I)) {
      let W = Hr(L, F.route.id);
      return (
        (D && D.replace) !== !0 && (T = fe.Push),
        { pendingActionResult: [W.route.id, I] }
      );
    }
    return { pendingActionResult: [F.route.id, I] };
  }
  async function t1(y, x, k, L, D, H, I, F, W, $) {
    let Se = L || xo(x, D),
      Ee = D || H || nc(Se),
      B = a || o,
      [ne, ge] = Qu(
        e.history,
        g,
        k,
        Ee,
        x,
        d.v7_partialHydration && F === !0,
        d.unstable_skipActionErrorRevalidation,
        at,
        Ot,
        Ft,
        He,
        st,
        q,
        B,
        s,
        $
      );
    if (
      (Hi(
        (G) =>
          !(k && k.some((Me) => Me.route.id === G)) ||
          (ne && ne.some((Me) => Me.route.id === G))
      ),
      (V = ++A),
      ne.length === 0 && ge.length === 0)
    ) {
      let G = js();
      return (
        hr(
          x,
          oe(
            {
              matches: k,
              loaderData: {},
              errors: $ && nt($[1]) ? { [$[0]]: $[1].error } : null,
            },
            qu($),
            G ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!we && (!d.v7_partialHydration || !F)) {
      ge.forEach((Me) => {
        let qe = g.fetchers.get(Me.key),
          ke = Lr(void 0, qe ? qe.data : void 0);
        g.fetchers.set(Me.key, ke);
      });
      let G;
      $ && !nt($[1])
        ? (G = { [$[0]]: $[1].data })
        : g.actionData &&
          (Object.keys(g.actionData).length === 0
            ? (G = null)
            : (G = g.actionData)),
        We(
          oe(
            { navigation: Se },
            G !== void 0 ? { actionData: G } : {},
            ge.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: W }
        );
    }
    ge.forEach((G) => {
      _.has(G.key) && It(G.key), G.controller && _.set(G.key, G.controller);
    });
    let gr = () => ge.forEach((G) => It(G.key));
    O && O.signal.addEventListener("abort", gr);
    let { loaderResults: At, fetcherResults: _n } = await Es(
      g.matches,
      k,
      ne,
      ge,
      y
    );
    if (y.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", gr),
      ge.forEach((G) => _.delete(G.key));
    let Rn = ec([...At, ..._n]);
    if (Rn) {
      if (Rn.idx >= ne.length) {
        let G = ge[Rn.idx - ne.length].key;
        q.add(G);
      }
      return await pr(y, Rn.result, { replace: I }), { shortCircuited: !0 };
    }
    let { loaderData: Tn, errors: gt } = Zu(g, k, ne, At, $, ge, _n, Te);
    Te.forEach((G, Me) => {
      G.subscribe((qe) => {
        (qe || G.done) && Te.delete(Me);
      });
    }),
      d.v7_partialHydration &&
        F &&
        g.errors &&
        Object.entries(g.errors)
          .filter((G) => {
            let [Me] = G;
            return !ne.some((qe) => qe.route.id === Me);
          })
          .forEach((G) => {
            let [Me, qe] = G;
            gt = Object.assign(gt || {}, { [Me]: qe });
          });
    let yl = js(),
      xl = Ns(V),
      wl = yl || xl || ge.length > 0;
    return oe(
      { loaderData: Tn, errors: gt },
      wl ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function n1(y, x, k, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    _.has(y) && It(y);
    let D = (L && L.unstable_flushSync) === !0,
      H = a || o,
      I = pa(
        g.location,
        g.matches,
        s,
        d.v7_prependBasename,
        k,
        d.v7_relativeSplatPath,
        x,
        L == null ? void 0 : L.relative
      ),
      F = Yn(H, I, s);
    if (!F) {
      vr(y, x, be(404, { pathname: I }), { flushSync: D });
      return;
    }
    let {
      path: W,
      submission: $,
      error: Se,
    } = Wu(d.v7_normalizeFormMethod, !0, I, L);
    if (Se) {
      vr(y, x, Se, { flushSync: D });
      return;
    }
    let Ee = va(F, W);
    if (((U = (L && L.preventScrollReset) === !0), $ && ft($.formMethod))) {
      r1(y, x, W, Ee, F, D, $);
      return;
    }
    st.set(y, { routeId: x, path: W }), l1(y, x, W, Ee, F, D, $);
  }
  async function r1(y, x, k, L, D, H, I) {
    if (($i(), st.delete(y), !L.route.action && !L.route.lazy)) {
      let ke = be(405, { method: I.formMethod, pathname: k, routeId: x });
      vr(y, x, ke, { flushSync: H });
      return;
    }
    let F = g.fetchers.get(y);
    Ut(y, R0(I, F), { flushSync: H });
    let W = new AbortController(),
      $ = zn(e.history, k, W.signal, I);
    _.set(y, W);
    let Se = A,
      B = (await mr("action", $, [L], D))[0];
    if ($.signal.aborted) {
      _.get(y) === W && _.delete(y);
      return;
    }
    if (d.v7_fetcherPersist && He.has(y)) {
      if (vn(B) || nt(B)) {
        Ut(y, Vt(void 0));
        return;
      }
    } else {
      if (vn(B))
        if ((_.delete(y), V > Se)) {
          Ut(y, Vt(void 0));
          return;
        } else
          return q.add(y), Ut(y, Lr(I)), pr($, B, { fetcherSubmission: I });
      if (nt(B)) {
        vr(y, x, B.error);
        return;
      }
    }
    if (mn(B)) throw be(400, { type: "defer-action" });
    let ne = g.navigation.location || g.location,
      ge = zn(e.history, ne, W.signal),
      gr = a || o,
      At =
        g.navigation.state !== "idle"
          ? Yn(gr, g.navigation.location, s)
          : g.matches;
    Q(At, "Didn't find any matches after fetcher action");
    let _n = ++A;
    J.set(y, _n);
    let Rn = Lr(I, B.data);
    g.fetchers.set(y, Rn);
    let [Tn, gt] = Qu(
      e.history,
      g,
      At,
      I,
      ne,
      !1,
      d.unstable_skipActionErrorRevalidation,
      at,
      Ot,
      Ft,
      He,
      st,
      q,
      gr,
      s,
      [L.route.id, B]
    );
    gt
      .filter((ke) => ke.key !== y)
      .forEach((ke) => {
        let yr = ke.key,
          Ts = g.fetchers.get(yr),
          c1 = Lr(void 0, Ts ? Ts.data : void 0);
        g.fetchers.set(yr, c1),
          _.has(yr) && It(yr),
          ke.controller && _.set(yr, ke.controller);
      }),
      We({ fetchers: new Map(g.fetchers) });
    let yl = () => gt.forEach((ke) => It(ke.key));
    W.signal.addEventListener("abort", yl);
    let { loaderResults: xl, fetcherResults: wl } = await Es(
      g.matches,
      At,
      Tn,
      gt,
      ge
    );
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", yl),
      J.delete(y),
      _.delete(y),
      gt.forEach((ke) => _.delete(ke.key));
    let G = ec([...xl, ...wl]);
    if (G) {
      if (G.idx >= Tn.length) {
        let ke = gt[G.idx - Tn.length].key;
        q.add(ke);
      }
      return pr(ge, G.result);
    }
    let { loaderData: Me, errors: qe } = Zu(
      g,
      g.matches,
      Tn,
      xl,
      void 0,
      gt,
      wl,
      Te
    );
    if (g.fetchers.has(y)) {
      let ke = Vt(B.data);
      g.fetchers.set(y, ke);
    }
    Ns(_n),
      g.navigation.state === "loading" && _n > V
        ? (Q(T, "Expected pending action"),
          O && O.abort(),
          hr(g.navigation.location, {
            matches: At,
            loaderData: Me,
            errors: qe,
            fetchers: new Map(g.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: Ju(g.loaderData, Me, At, qe),
            fetchers: new Map(g.fetchers),
          }),
          (at = !1));
  }
  async function l1(y, x, k, L, D, H, I) {
    let F = g.fetchers.get(y);
    Ut(y, Lr(I, F ? F.data : void 0), { flushSync: H });
    let W = new AbortController(),
      $ = zn(e.history, k, W.signal);
    _.set(y, W);
    let Se = A,
      B = (await mr("loader", $, [L], D))[0];
    if (
      (mn(B) && (B = (await Mf(B, $.signal, !0)) || B),
      _.get(y) === W && _.delete(y),
      !$.signal.aborted)
    ) {
      if (He.has(y)) {
        Ut(y, Vt(void 0));
        return;
      }
      if (vn(B))
        if (V > Se) {
          Ut(y, Vt(void 0));
          return;
        } else {
          q.add(y), await pr($, B);
          return;
        }
      if (nt(B)) {
        vr(y, x, B.error);
        return;
      }
      Q(!mn(B), "Unhandled fetcher deferred data"), Ut(y, Vt(B.data));
    }
  }
  async function pr(y, x, k) {
    let {
      submission: L,
      fetcherSubmission: D,
      replace: H,
    } = k === void 0 ? {} : k;
    x.response.headers.has("X-Remix-Revalidate") && (at = !0);
    let I = x.response.headers.get("Location");
    Q(I, "Expected a Location header on the redirect Response"),
      (I = Gu(I, new URL(y.url), s));
    let F = al(g.location, I, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (ys.test(I)) {
        const ge = e.history.createURL(I);
        ne = ge.origin !== t.location.origin || dr(ge.pathname, s) == null;
      }
      if (ne) {
        H ? t.location.replace(I) : t.location.assign(I);
        return;
      }
    }
    O = null;
    let W = H === !0 ? fe.Replace : fe.Push,
      { formMethod: $, formAction: Se, formEncType: Ee } = g.navigation;
    !L && !D && $ && Se && Ee && (L = nc(g.navigation));
    let B = L || D;
    if (f0.has(x.response.status) && B && ft(B.formMethod))
      await un(W, F, {
        submission: oe({}, B, { formAction: I }),
        preventScrollReset: U,
      });
    else {
      let ne = xo(F, L);
      await un(W, F, {
        overrideNavigation: ne,
        fetcherSubmission: D,
        preventScrollReset: U,
      });
    }
  }
  async function mr(y, x, k, L) {
    try {
      let D = await w0(c, y, x, k, L, i, l);
      return await Promise.all(
        D.map((H, I) => {
          if (N0(H)) {
            let F = H.result;
            return {
              type: re.redirect,
              response: k0(F, x, k[I].route.id, L, s, d.v7_relativeSplatPath),
            };
          }
          return E0(H);
        })
      );
    } catch (D) {
      return k.map(() => ({ type: re.error, error: D }));
    }
  }
  async function Es(y, x, k, L, D) {
    let [H, ...I] = await Promise.all([
      k.length ? mr("loader", D, k, x) : [],
      ...L.map((F) => {
        if (F.matches && F.match && F.controller) {
          let W = zn(e.history, F.path, F.controller.signal);
          return mr("loader", W, [F.match], F.matches).then(($) => $[0]);
        } else
          return Promise.resolve({
            type: re.error,
            error: be(404, { pathname: F.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        tc(
          y,
          k,
          H,
          H.map(() => D.signal),
          !1,
          g.loaderData
        ),
        tc(
          y,
          L.map((F) => F.match),
          I,
          L.map((F) => (F.controller ? F.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: H, fetcherResults: I }
    );
  }
  function $i() {
    (at = !0),
      Ot.push(...Hi()),
      st.forEach((y, x) => {
        _.has(x) && (Ft.push(x), It(x));
      });
  }
  function Ut(y, x, k) {
    k === void 0 && (k = {}),
      g.fetchers.set(y, x),
      We(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function vr(y, x, k, L) {
    L === void 0 && (L = {});
    let D = Hr(g.matches, x);
    vl(y),
      We(
        { errors: { [D.route.id]: k }, fetchers: new Map(g.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function ks(y) {
    return (
      d.v7_fetcherPersist &&
        ($e.set(y, ($e.get(y) || 0) + 1), He.has(y) && He.delete(y)),
      g.fetchers.get(y) || h0
    );
  }
  function vl(y) {
    let x = g.fetchers.get(y);
    _.has(y) && !(x && x.state === "loading" && J.has(y)) && It(y),
      st.delete(y),
      J.delete(y),
      q.delete(y),
      He.delete(y),
      g.fetchers.delete(y);
  }
  function i1(y) {
    if (d.v7_fetcherPersist) {
      let x = ($e.get(y) || 0) - 1;
      x <= 0 ? ($e.delete(y), He.add(y)) : $e.set(y, x);
    } else vl(y);
    We({ fetchers: new Map(g.fetchers) });
  }
  function It(y) {
    let x = _.get(y);
    Q(x, "Expected fetch controller: " + y), x.abort(), _.delete(y);
  }
  function Cs(y) {
    for (let x of y) {
      let k = ks(x),
        L = Vt(k.data);
      g.fetchers.set(x, L);
    }
  }
  function js() {
    let y = [],
      x = !1;
    for (let k of q) {
      let L = g.fetchers.get(k);
      Q(L, "Expected fetcher: " + k),
        L.state === "loading" && (q.delete(k), y.push(k), (x = !0));
    }
    return Cs(y), x;
  }
  function Ns(y) {
    let x = [];
    for (let [k, L] of J)
      if (L < y) {
        let D = g.fetchers.get(k);
        Q(D, "Expected fetcher: " + k),
          D.state === "loading" && (It(k), J.delete(k), x.push(k));
      }
    return Cs(x), x.length > 0;
  }
  function o1(y, x) {
    let k = g.blockers.get(y) || Pr;
    return Je.get(y) !== x && Je.set(y, x), k;
  }
  function Ps(y) {
    g.blockers.delete(y), Je.delete(y);
  }
  function gl(y, x) {
    let k = g.blockers.get(y) || Pr;
    Q(
      (k.state === "unblocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "proceeding") ||
        (k.state === "blocked" && x.state === "unblocked") ||
        (k.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + x.state
    );
    let L = new Map(g.blockers);
    L.set(y, x), We({ blockers: L });
  }
  function Ls(y) {
    let { currentLocation: x, nextLocation: k, historyAction: L } = y;
    if (Je.size === 0) return;
    Je.size > 1 && ar(!1, "A router only supports one blocker at a time");
    let D = Array.from(Je.entries()),
      [H, I] = D[D.length - 1],
      F = g.blockers.get(H);
    if (
      !(F && F.state === "proceeding") &&
      I({ currentLocation: x, nextLocation: k, historyAction: L })
    )
      return H;
  }
  function Hi(y) {
    let x = [];
    return (
      Te.forEach((k, L) => {
        (!y || y(L)) && (k.cancel(), x.push(L), Te.delete(L));
      }),
      x
    );
  }
  function a1(y, x, k) {
    if (((S = y), (E = x), (w = k || null), !P && g.navigation === yo)) {
      P = !0;
      let L = Rs(g.location, g.matches);
      L != null && We({ restoreScrollPosition: L });
    }
    return () => {
      (S = null), (E = null), (w = null);
    };
  }
  function _s(y, x) {
    return (
      (w &&
        w(
          y,
          x.map((L) => Hp(L, g.loaderData))
        )) ||
      y.key
    );
  }
  function s1(y, x) {
    if (S && E) {
      let k = _s(y, x);
      S[k] = E();
    }
  }
  function Rs(y, x) {
    if (S) {
      let k = _s(y, x),
        L = S[k];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function u1(y) {
    (i = {}), (a = ha(y, l, void 0, i));
  }
  return (
    (M = {
      get basename() {
        return s;
      },
      get future() {
        return d;
      },
      get state() {
        return g;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Zf,
      subscribe: qf,
      enableScrollRestoration: a1,
      navigate: Ss,
      fetch: n1,
      revalidate: bf,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: ks,
      deleteFetcher: i1,
      dispose: Jf,
      getBlocker: o1,
      deleteBlocker: Ps,
      _internalFetchControllers: _,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: u1,
    }),
    M
  );
}
function v0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function pa(e, t, n, r, l, i, o, a) {
  let s, c;
  if (o) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === o)) {
        c = f;
        break;
      }
  } else (s = t), (c = t[t.length - 1]);
  let d = ms(l || ".", ps(s, i), dr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      c &&
      c.route.index &&
      !xs(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Lt([n, d.pathname])),
    jn(d)
  );
}
function Wu(e, t, n, r) {
  if (!r || !v0(r)) return { path: n };
  if (r.formMethod && !L0(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Rf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ft(o)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, w) => {
              let [E, P] = w;
              return (
                "" +
                S +
                E +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ft(o)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, c;
  if (r.formData) (s = ma(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (s = ma(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (c = Xu(s));
  else if (r.body == null) (s = new URLSearchParams()), (c = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (c = Xu(s));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (ft(d.formMethod)) return { path: n, submission: d };
  let f = Dt(n);
  return (
    t && f.search && xs(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: jn(f), submission: d }
  );
}
function g0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Qu(e, t, n, r, l, i, o, a, s, c, d, f, p, S, w, E) {
  let P = E ? (nt(E[1]) ? E[1].error : E[1].data) : void 0,
    m = e.createURL(t.location),
    h = e.createURL(l),
    v = E && nt(E[1]) ? E[0] : void 0,
    j = v ? g0(n, v) : n,
    R = E ? E[1].statusCode : void 0,
    M = o && R && R >= 400,
    g = j.filter((U, O) => {
      let { route: Y } = U;
      if (Y.lazy) return !0;
      if (Y.loader == null) return !1;
      if (i)
        return typeof Y.loader != "function" || Y.loader.hydrate
          ? !0
          : t.loaderData[Y.id] === void 0 &&
              (!t.errors || t.errors[Y.id] === void 0);
      if (
        y0(t.loaderData, t.matches[O], U) ||
        s.some((we) => we === U.route.id)
      )
        return !0;
      let de = t.matches[O],
        ie = U;
      return Ku(
        U,
        oe(
          {
            currentUrl: m,
            currentParams: de.params,
            nextUrl: h,
            nextParams: ie.params,
          },
          r,
          {
            actionResult: P,
            unstable_actionStatus: R,
            defaultShouldRevalidate: M
              ? !1
              : a ||
                m.pathname + m.search === h.pathname + h.search ||
                m.search !== h.search ||
                _f(de, ie),
          }
        )
      );
    }),
    T = [];
  return (
    f.forEach((U, O) => {
      if (i || !n.some((at) => at.route.id === U.routeId) || d.has(O)) return;
      let Y = Yn(S, U.path, w);
      if (!Y) {
        T.push({
          key: O,
          routeId: U.routeId,
          path: U.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let de = t.fetchers.get(O),
        ie = va(Y, U.path),
        we = !1;
      p.has(O)
        ? (we = !1)
        : c.includes(O)
        ? (we = !0)
        : de && de.state !== "idle" && de.data === void 0
        ? (we = a)
        : (we = Ku(
            ie,
            oe(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: P,
                unstable_actionStatus: R,
                defaultShouldRevalidate: M ? !1 : a,
              }
            )
          )),
        we &&
          T.push({
            key: O,
            routeId: U.routeId,
            path: U.path,
            matches: Y,
            match: ie,
            controller: new AbortController(),
          });
    }),
    [g, T]
  );
}
function y0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function _f(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ku(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Yu(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let s = l[o] !== void 0 && o !== "hasErrorBoundary";
    ar(
      !s,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !s && !Vp.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, oe({}, t(l), { lazy: void 0 }));
}
function x0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function w0(e, t, n, r, l, i, o, a) {
  let s = r.reduce((f, p) => f.add(p.route.id), new Set()),
    c = new Set(),
    d = await e({
      matches: l.map((f) => {
        let p = s.has(f.route.id);
        return oe({}, f, {
          shouldLoad: p,
          resolve: (w) => (
            c.add(f.route.id),
            p
              ? S0(t, n, f, i, o, w, a)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((f) =>
      Q(
        c.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    d.filter((f, p) => s.has(l[p].route.id))
  );
}
async function S0(e, t, n, r, l, i, o) {
  let a,
    s,
    c = (d) => {
      let f,
        p = new Promise((E, P) => (f = P));
      (s = () => f()), t.signal.addEventListener("abort", s);
      let S = (E) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : d(
                { request: t, params: n.params, context: o },
                ...(E !== void 0 ? [E] : [])
              ),
        w;
      return (
        i
          ? (w = i((E) => S(E)))
          : (w = (async () => {
              try {
                return { type: "data", result: await S() };
              } catch (E) {
                return { type: "error", result: E };
              }
            })()),
        Promise.race([w, p])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let f,
          [p] = await Promise.all([
            c(d).catch((S) => {
              f = S;
            }),
            Yu(n.route, l, r),
          ]);
        if (f !== void 0) throw f;
        a = p;
      } else if ((await Yu(n.route, l, r), (d = n.route[e]), d)) a = await c(d);
      else if (e === "action") {
        let f = new URL(t.url),
          p = f.pathname + f.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (d) a = await c(d);
    else {
      let f = new URL(t.url),
        p = f.pathname + f.search;
      throw be(404, { pathname: p });
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (d) {
    return { type: re.error, result: d };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function E0(e) {
  let { result: t, type: n, status: r } = e;
  if (Tf(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: re.error, error: a };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new vs(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error)
    return { type: re.error, error: t, statusCode: gs(t) ? t.status : r };
  if (P0(t)) {
    var l, i;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: re.data, data: t, statusCode: r };
}
function k0(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (Q(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !ys.test(o))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (o = pa(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function Gu(e, t, n) {
  if (ys.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = dr(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function zn(e, t, n, r) {
  let l = e.createURL(Rf(t)).toString(),
    i = { signal: n };
  if (r && ft(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = ma(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function ma(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Xu(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function C0(e, t, n, r, l, i) {
  let o = {},
    a = null,
    s,
    c = !1,
    d = {},
    f = r && nt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let w = t[S].route.id;
      if (
        (Q(!vn(p), "Cannot handle redirect results in processLoaderData"),
        nt(p))
      ) {
        let E = p.error;
        if ((f !== void 0 && ((E = f), (f = void 0)), (a = a || {}), i))
          a[w] = E;
        else {
          let P = Hr(e, w);
          a[P.route.id] == null && (a[P.route.id] = E);
        }
        (o[w] = void 0),
          c || ((c = !0), (s = gs(p.error) ? p.error.status : 500)),
          p.headers && (d[w] = p.headers);
      } else
        mn(p)
          ? (l.set(w, p.deferredData),
            (o[w] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !c &&
              (s = p.statusCode),
            p.headers && (d[w] = p.headers))
          : ((o[w] = p.data),
            p.statusCode && p.statusCode !== 200 && !c && (s = p.statusCode),
            p.headers && (d[w] = p.headers));
    }),
    f !== void 0 && r && ((a = { [r[0]]: f }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: s || 200, loaderHeaders: d }
  );
}
function Zu(e, t, n, r, l, i, o, a) {
  let { loaderData: s, errors: c } = C0(t, n, r, l, a, !1);
  for (let d = 0; d < i.length; d++) {
    let { key: f, match: p, controller: S } = i[d];
    Q(
      o !== void 0 && o[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = o[d];
    if (!(S && S.signal.aborted))
      if (nt(w)) {
        let E = Hr(e.matches, p == null ? void 0 : p.route.id);
        (c && c[E.route.id]) || (c = oe({}, c, { [E.route.id]: w.error })),
          e.fetchers.delete(f);
      } else if (vn(w)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (mn(w)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let E = Vt(w.data);
        e.fetchers.set(f, E);
      }
  }
  return { loaderData: s, errors: c };
}
function Ju(e, t, n, r) {
  let l = oe({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function qu(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Hr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function bu(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (a = "defer() is not supported in actions")
          : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new vs(e || 500, o, new Error(a), !0)
  );
}
function ec(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (vn(n)) return { result: n, idx: t };
  }
}
function Rf(e) {
  let t = typeof e == "string" ? Dt(e) : e;
  return jn(oe({}, t, { hash: "" }));
}
function j0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function N0(e) {
  return Tf(e.result) && d0.has(e.result.status);
}
function mn(e) {
  return e.type === re.deferred;
}
function nt(e) {
  return e.type === re.error;
}
function vn(e) {
  return (e && e.type) === re.redirect;
}
function P0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Tf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function L0(e) {
  return c0.has(e.toLowerCase());
}
function ft(e) {
  return s0.has(e.toLowerCase());
}
async function tc(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      s = t[o];
    if (!s) continue;
    let c = e.find((f) => f.route.id === s.route.id),
      d = c != null && !_f(c, s) && (i && i[s.route.id]) !== void 0;
    if (mn(a) && (l || d)) {
      let f = r[o];
      Q(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Mf(a, f, l).then((p) => {
          p && (n[o] = p || n[o]);
        });
    }
  }
}
async function Mf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function xs(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function va(e, t) {
  let n = typeof t == "string" ? Dt(t).search : t.search;
  if (e[e.length - 1].route.index && xs(n || "")) return e[e.length - 1];
  let r = Nf(e);
  return r[r.length - 1];
}
function nc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function xo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function _0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Lr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function R0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Vt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function T0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Lf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function M0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Lf, JSON.stringify(n));
    } catch (r) {
      ar(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
const Ui = C.createContext(null),
  zf = C.createContext(null),
  Ln = C.createContext(null),
  Ii = C.createContext(null),
  sn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Df = C.createContext(null);
function z0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ml() || Q(!1);
  let { basename: r, navigator: l } = C.useContext(Ln),
    { hash: i, pathname: o, search: a } = If(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Lt([r, o])),
    l.createHref({ pathname: s, search: a, hash: i })
  );
}
function ml() {
  return C.useContext(Ii) != null;
}
function Ai() {
  return ml() || Q(!1), C.useContext(Ii).location;
}
function Of(e) {
  C.useContext(Ln).static || C.useLayoutEffect(e);
}
function Ff() {
  let { isDataRoute: e } = C.useContext(sn);
  return e ? K0() : D0();
}
function D0() {
  ml() || Q(!1);
  let e = C.useContext(Ui),
    { basename: t, future: n, navigator: r } = C.useContext(Ln),
    { matches: l } = C.useContext(sn),
    { pathname: i } = Ai(),
    o = JSON.stringify(ps(l, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    Of(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = ms(c, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Lt([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, o, i, e]
    )
  );
}
const Uf = C.createContext(null);
function ws() {
  return C.useContext(Uf);
}
function O0(e) {
  let t = C.useContext(sn).outlet;
  return t && C.createElement(Uf.Provider, { value: e }, t);
}
function If(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Ln),
    { matches: l } = C.useContext(sn),
    { pathname: i } = Ai(),
    o = JSON.stringify(ps(l, r.v7_relativeSplatPath));
  return C.useMemo(() => ms(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function F0(e, t, n, r) {
  ml() || Q(!1);
  let { navigator: l } = C.useContext(Ln),
    { matches: i } = C.useContext(sn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Ai(),
    d;
  if (t) {
    var f;
    let P = typeof t == "string" ? Dt(t) : t;
    s === "/" || ((f = P.pathname) != null && f.startsWith(s)) || Q(!1),
      (d = P);
  } else d = c;
  let p = d.pathname || "/",
    S = p;
  if (s !== "/") {
    let P = s.replace(/^\//, "").split("/");
    S = "/" + p.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let w = Yn(e, { pathname: S }),
    E = V0(
      w &&
        w.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, a, P.params),
            pathname: Lt([
              s,
              l.encodeLocation
                ? l.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? s
                : Lt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && E
    ? C.createElement(
        Ii.Provider,
        {
          value: {
            location: sl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: fe.Pop,
          },
        },
        E
      )
    : E;
}
function U0() {
  let e = Q0(),
    t = gs(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    null
  );
}
const I0 = C.createElement(U0, null);
class A0 extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          C.createElement(Df.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function B0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Ui);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(sn.Provider, { value: t }, r)
  );
}
function V0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let d = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          w =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!S || S[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (s = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, p) => {
    let S,
      w = !1,
      E = null,
      P = null;
    n &&
      ((S = a && f.route.id ? a[f.route.id] : void 0),
      (E = f.route.errorElement || I0),
      s &&
        (c < 0 && p === 0
          ? (Y0("route-fallback", !1), (w = !0), (P = null))
          : c === p &&
            ((w = !0), (P = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, p + 1)),
      h = () => {
        let v;
        return (
          S
            ? (v = E)
            : w
            ? (v = P)
            : f.route.Component
            ? (v = C.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = d),
          C.createElement(B0, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? C.createElement(A0, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: S,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Af = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Af || {}),
  wi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(wi || {});
function $0(e) {
  let t = C.useContext(Ui);
  return t || Q(!1), t;
}
function H0(e) {
  let t = C.useContext(zf);
  return t || Q(!1), t;
}
function W0(e) {
  let t = C.useContext(sn);
  return t || Q(!1), t;
}
function Bf(e) {
  let t = W0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function Q0() {
  var e;
  let t = C.useContext(Df),
    n = H0(wi.UseRouteError),
    r = Bf(wi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function K0() {
  let { router: e } = $0(Af.UseNavigateStable),
    t = Bf(wi.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Of(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, sl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const rc = {};
function Y0(e, t, n) {
  !t && !rc[e] && (rc[e] = !0);
}
function G0(e) {
  return O0(e.context);
}
function Dn(e) {
  Q(!1);
}
function X0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = fe.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  ml() && Q(!1);
  let s = t.replace(/^\/*/, "/"),
    c = C.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: sl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, o]
    );
  typeof r == "string" && (r = Dt(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: S = null,
      key: w = "default",
    } = r,
    E = C.useMemo(() => {
      let P = dr(d, s);
      return P == null
        ? null
        : {
            location: { pathname: P, search: f, hash: p, state: S, key: w },
            navigationType: l,
          };
    }, [s, d, f, p, S, w, l]);
  return E == null
    ? null
    : C.createElement(
        Ln.Provider,
        { value: c },
        C.createElement(Ii.Provider, { children: n, value: E })
      );
}
new Promise(() => {});
function ga(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, l) => {
      if (!C.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === C.Fragment) {
        n.push.apply(n, ga(r.props.children, i));
        return;
      }
      r.type !== Dn && Q(!1), !r.props.index || !r.props.children || Q(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = ga(r.props.children, i)), n.push(o);
    }),
    n
  );
}
function Z0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ul.apply(this, arguments)
  );
}
function J0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function q0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function b0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !q0(e);
}
const e2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  t2 = "6";
try {
  window.__reactRouterVersion = t2;
} catch {}
function n2(e, t) {
  return m0({
    basename: t == null ? void 0 : t.basename,
    future: ul({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Ip({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || r2(),
    routes: e,
    mapRouteProperties: Z0,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function r2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ul({}, t, { errors: l2(t.errors) })), t;
}
function l2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new vs(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const i2 = C.createContext({ isTransitioning: !1 }),
  o2 = C.createContext(new Map()),
  a2 = "startTransition",
  lc = N1[a2],
  s2 = "flushSync",
  ic = Up[s2];
function u2(e) {
  lc ? lc(e) : e();
}
function _r(e) {
  ic ? ic(e) : e();
}
class c2 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function d2(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = C.useState(n.state),
    [o, a] = C.useState(),
    [s, c] = C.useState({ isTransitioning: !1 }),
    [d, f] = C.useState(),
    [p, S] = C.useState(),
    [w, E] = C.useState(),
    P = C.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = C.useCallback(
      (g) => {
        m ? u2(g) : g();
      },
      [m]
    ),
    v = C.useCallback(
      (g, T) => {
        let {
          deletedFetchers: U,
          unstable_flushSync: O,
          unstable_viewTransitionOpts: Y,
        } = T;
        U.forEach((ie) => P.current.delete(ie)),
          g.fetchers.forEach((ie, we) => {
            ie.data !== void 0 && P.current.set(we, ie.data);
          });
        let de =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || de) {
          O ? _r(() => i(g)) : h(() => i(g));
          return;
        }
        if (O) {
          _r(() => {
            p && (d && d.resolve(), p.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            _r(() => i(g));
          });
          ie.finished.finally(() => {
            _r(() => {
              f(void 0), S(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            _r(() => S(ie));
          return;
        }
        p
          ? (d && d.resolve(),
            p.skipTransition(),
            E({
              state: g,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(g),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, p, d, P, h]
    );
  C.useLayoutEffect(() => n.subscribe(v), [n, v]),
    C.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new c2());
    }, [s]),
    C.useEffect(() => {
      if (d && o && n.window) {
        let g = o,
          T = d.promise,
          U = n.window.document.startViewTransition(async () => {
            h(() => i(g)), await T;
          });
        U.finished.finally(() => {
          f(void 0), S(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          S(U);
      }
    }, [h, o, d, n.window]),
    C.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, p, l.location, o]),
    C.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (a(w.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        E(void 0));
    }, [s.isTransitioning, w]),
    C.useEffect(() => {}, []);
  let j = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, T, U) =>
          n.navigate(g, {
            state: T,
            preventScrollReset: U == null ? void 0 : U.preventScrollReset,
          }),
        replace: (g, T, U) =>
          n.navigate(g, {
            replace: !0,
            state: T,
            preventScrollReset: U == null ? void 0 : U.preventScrollReset,
          }),
      }),
      [n]
    ),
    R = n.basename || "/",
    M = C.useMemo(
      () => ({ router: n, navigator: j, static: !1, basename: R }),
      [n, j, R]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Ui.Provider,
      { value: M },
      C.createElement(
        zf.Provider,
        { value: l },
        C.createElement(
          o2.Provider,
          { value: P.current },
          C.createElement(
            i2.Provider,
            { value: s },
            C.createElement(
              X0,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: j,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? C.createElement(f2, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function f2(e) {
  let { routes: t, future: n, state: r } = e;
  return F0(t, void 0, r, n);
}
const h2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  p2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xn = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      p = J0(t, e2),
      { basename: S } = C.useContext(Ln),
      w,
      E = !1;
    if (typeof c == "string" && p2.test(c) && ((w = c), h2))
      try {
        let v = new URL(window.location.href),
          j = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          R = dr(j.pathname, S);
        j.origin === v.origin && R != null
          ? (c = R + j.search + j.hash)
          : (E = !0);
      } catch {}
    let P = z0(c, { relative: l }),
      m = m2(c, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: f,
      });
    function h(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return C.createElement(
      "a",
      ul({}, p, { href: w || P, onClick: E || i ? r : h, ref: n, target: s })
    );
  });
var oc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(oc || (oc = {}));
var ac;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ac || (ac = {}));
function m2(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = Ff(),
    c = Ai(),
    d = If(e, { relative: o });
  return C.useCallback(
    (f) => {
      if (b0(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : jn(c) === jn(d);
        s(e, {
          replace: p,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [c, s, d, r, l, n, e, i, o, a]
  );
}
var Vf = { exports: {} },
  v2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  g2 = v2,
  y2 = g2;
function $f() {}
function Hf() {}
Hf.resetWarningCache = $f;
var x2 = function () {
  function e(r, l, i, o, a, s) {
    if (s !== y2) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Hf,
    resetWarningCache: $f,
  };
  return (n.PropTypes = n), n;
};
Vf.exports = x2();
var w2 = Vf.exports;
const Bi = ya(w2),
  Wf = C.createContext(null);
function Qf({ children: e }) {
  const [t, n] = C.useState({});
  return u.jsx(Wf.Provider, { value: { user: t, setUser: n }, children: e });
}
Qf.propTypes = { children: Bi.node };
function S2() {
  const e = Ff();
  return u.jsx(u.Fragment, {
    children: u.jsx(G0, { context: { navigator: e, dta: "hello" } }),
  });
}
const E2 = "/assets/hero-DUT5LMb8.jpg",
  k2 = "/assets/plane-66nqZluV.png",
  C2 = "/assets/planet-XwfINOdE.png",
  j2 = "/assets/rainbow-C92-KZbP.png",
  N2 = "/assets/rocket-D5b9Pvvr.png";
function P2() {
  return u.jsxs("section", {
    className: "index hero",
    children: [
      u.jsx("nav", {
        className: "index navbar",
        children: u.jsxs("div", {
          className: "index navbar-container",
          children: [
            u.jsx("div", {
              className: "index navbar-inner-left",
              children: u.jsx(xn, {
                to: "/",
                className: "index website",
                children: "Quick Link",
              }),
            }),
            u.jsxs("div", {
              className: "index navbar-inner-right",
              children: [
                u.jsx(xn, {
                  to: "/login",
                  children: u.jsx("button", {
                    style: {
                      background:
                        "linear-gradient(to bottom, #368DCA, #1B6DAA)",
                      padding: "10px 18px 10px 18px",
                    },
                    children: "Sign in",
                  }),
                }),
                u.jsx(xn, {
                  to: "/login",
                  children: u.jsx("button", {
                    style: {
                      background:
                        "linear-gradient(to bottom, #82B133, #6F972B)",
                    },
                    children: "Sign up",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: "index hero-main",
        children: u.jsxs("div", {
          className: "index hero-container",
          children: [
            u.jsxs("div", {
              className: "index hero-text",
              children: [
                u.jsx("h1", {
                  children: "Build stronger digital connections.",
                }),
                u.jsx("br", {}),
                u.jsx("p", {
                  children:
                    "Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.",
                }),
                u.jsxs("div", {
                  className: "index btn-container",
                  children: [
                    u.jsx("button", {
                      className: "index ui-btn",
                      children: u.jsx("span", { children: "Free Trial" }),
                    }),
                    u.jsx("button", {
                      className: "index ui-btn",
                      children: u.jsx("span", { children: "Short URL" }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className: "index hero-img-container",
              children: u.jsx("img", {
                src: E2,
                alt: "",
                className: "index hero-img",
              }),
            }),
            u.jsx("img", { src: k2, alt: "", className: "index-rocket" }),
            u.jsx("img", { src: C2, alt: "", className: "index-planet" }),
            u.jsx("img", { src: j2, alt: "", className: "index-rainbow" }),
            u.jsx("img", { src: N2, alt: "", className: "index-rocket2" }),
          ],
        }),
      }),
    ],
  });
}
function L2() {
  return u.jsxs("div", {
    className: "index trusted-container",
    children: [
      u.jsx("h1", { className: "index trusted-title", children: "Trusted By" }),
      u.jsxs("ul", {
        className: "index trusted-companies",
        children: [
          u.jsx("li", {
            children: u.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "150px",
              height: "150px",
              viewBox: "7.082 -380.929 957.518 957.518",
              children: [
                u.jsx("path", {
                  d: "M380.724 149.019c-34.999 25.798-85.729 39.562-129.406 39.562-61.243 0-116.377-22.652-158.088-60.325-3.277-2.962-.341-7 3.592-4.692 45.015 26.189 100.673 41.947 158.166 41.947 38.774 0 81.43-8.023 120.65-24.671 5.925-2.517 10.88 3.879 5.086 8.179",
                  fill: "#696969",
                }),
                u.jsx("path", {
                  d: "M395.275 132.372c-4.457-5.715-29.573-2.701-40.847-1.363-3.434.42-3.958-2.569-.865-4.719 20.004-14.079 52.827-10.016 56.655-5.297 3.827 4.746-.996 37.648-19.794 53.352-2.884 2.412-5.637 1.127-4.352-2.07 4.222-10.54 13.686-34.162 9.203-39.903",
                  fill: "#696969",
                }),
                u.jsx("path", {
                  d: "M355.216 26.901V13.216c0-2.071 1.573-3.46 3.46-3.46h61.27c1.966 0 3.539 1.416 3.539 3.46v11.719c-.026 1.966-1.678 4.536-4.614 8.599l-31.749 45.329c11.798-.289 24.251 1.468 34.947 7.498 2.412 1.363 3.067 3.356 3.251 5.322v14.603c0 1.992-2.202 4.326-4.509 3.119-18.851-9.883-43.888-10.958-64.729.105-2.124 1.154-4.353-1.153-4.353-3.146V92.496c0-2.229.026-6.03 2.255-9.412l36.782-52.749h-32.011c-1.967 0-3.539-1.389-3.539-3.434M131.717 112.29h-18.641c-1.782-.131-3.198-1.469-3.329-3.172V13.452c0-1.914 1.6-3.434 3.592-3.434h17.382c1.809.078 3.251 1.468 3.382 3.198v12.505h.341c4.535-12.086 13.056-17.723 24.539-17.723 11.666 0 18.955 5.637 24.198 17.723 4.509-12.086 14.76-17.723 25.745-17.723 7.812 0 16.359 3.225 21.576 10.46 5.898 8.049 4.692 19.741 4.692 29.992l-.025 60.377c0 1.914-1.6 3.461-3.592 3.461h-18.614c-1.861-.131-3.355-1.626-3.355-3.461V58.125c0-4.037.366-14.104-.524-17.932-1.39-6.423-5.559-8.232-10.959-8.232-4.509 0-9.229 3.015-11.143 7.839-1.913 4.824-1.729 12.898-1.729 18.325v50.704c0 1.914-1.6 3.461-3.592 3.461h-18.614c-1.888-.131-3.355-1.626-3.355-3.461l-.026-50.704c0-10.67 1.757-26.374-11.483-26.374-13.396 0-12.872 15.311-12.872 26.374v50.704c-.003 1.914-1.602 3.461-3.594 3.461M476.232 7.999c27.659 0 42.629 23.752 42.629 53.955 0 29.179-16.543 52.329-42.629 52.329-27.16 0-41.947-23.752-41.947-53.351 0-29.784 14.971-52.933 41.947-52.933m.157 19.531c-13.737 0-14.603 18.719-14.603 30.385 0 11.693-.184 36.651 14.445 36.651 14.445 0 15.127-20.134 15.127-32.404 0-8.075-.341-17.723-2.778-25.378-2.097-6.659-6.266-9.254-12.191-9.254M554.725 112.29h-18.562c-1.861-.131-3.355-1.625-3.355-3.461l-.026-95.691c.157-1.756 1.704-3.12 3.592-3.12h17.277c1.625.078 2.962 1.18 3.329 2.674V27.32h.341c5.217-13.082 12.531-19.322 25.404-19.322 8.363 0 16.517 3.015 21.76 11.273 4.876 7.655 4.876 20.528 4.876 29.782v60.22c-.209 1.678-1.756 3.016-3.592 3.016h-18.692c-1.704-.131-3.119-1.39-3.303-3.016V57.312c0-10.46 1.205-25.771-11.667-25.771-4.535 0-8.704 3.041-10.775 7.655-2.621 5.846-2.962 11.667-2.962 18.116v51.516c-.026 1.915-1.652 3.462-3.645 3.462M621.028 104.686c0-4.824 4.116-8.704 9.176-8.704s9.176 3.879 9.176 8.704c0 4.798-4.116 8.73-9.176 8.73s-9.176-3.932-9.176-8.73M818.519 112.315c-1.94-.078-3.461-1.572-3.461-3.46V13.189c.105-1.704 1.547-3.041 3.33-3.146h6.843c1.888 0 3.408 1.363 3.565 3.146v13.947c4.876-11.063 13.947-19.715 25.404-19.715h1.389c12.165 0 21.053 8.966 24.355 21.996 5.165-12.873 14.865-21.996 27.659-21.996h1.416c9.045 0 17.748 5.82 22.258 14.682 4.352 8.468 4.194 19.741 4.194 29.206l-.026 57.546c.026 1.835-1.468 3.329-3.329 3.46h-8.18c-1.782-.078-3.225-1.336-3.461-2.988V51.309c0-6.843.341-14.105-2.438-20.344-2.832-6.371-8.259-10.356-14.079-10.645-6.501.315-12.479 5.06-16.359 11.457-5.033 8.258-4.85 15.704-4.85 25.352v52.25c-.236 1.572-1.625 2.805-3.33 2.936h-8.127c-1.939-.078-3.486-1.572-3.486-3.46l-.053-61.374c0-5.637-.341-12.27-2.937-17.33-3.015-5.768-8.415-9.543-14.078-9.832-5.872.341-11.798 4.824-15.311 10.042-4.535 6.659-5.4 14.891-5.4 23.359v55.134c0 1.835-1.495 3.329-3.356 3.46h-8.152M762.363 114.308c-26.453 0-38.303-26.977-38.303-53.955 0-28.366 13.921-52.932 40.558-52.932h1.415c25.902 0 38.802 26.165 38.802 53.142 0 28.576-14.289 53.745-41.082 53.745H762.363m1.94-13.083c8.703-.287 15.572-5.688 19.636-14.681 3.645-8.075 4.353-17.33 4.353-26.191 0-9.647-1.049-19.715-5.585-27.973-4.063-7.21-11.037-11.798-18.43-12.06-8.232.289-15.6 5.873-19.296 14.472-3.329 7.446-4.352 17.33-4.352 25.562 0 9.255 1.205 19.951 5.033 28 3.723 7.628 10.881 12.583 18.641 12.871M679.701 100.806c11.877-.366 18.116-9.883 20.686-22.206.524-1.547 1.704-2.727 3.435-2.727l7.839-.026c1.861.079 3.565 1.495 3.408 3.225-3.618 21-16.281 35.235-34.318 35.235h-1.416c-26.269 0-37.595-26.375-37.595-53.142 0-26.558 11.483-53.745 37.752-53.745h1.416c18.247 0 31.251 14.052 34.082 35.052 0 1.573-1.468 2.937-3.198 3.12l-8.206-.105c-1.73-.236-2.857-1.704-3.12-3.355-1.966-11.719-8.704-21.052-19.925-21.419-17.855.578-22.941 22.547-22.941 39.457 0 16.281 4.247 40.059 22.101 40.636M339.564 94.75c-3.408-4.719-7.026-8.547-7.026-17.277V48.425c0-12.296.865-23.595-8.206-32.063-7.157-6.869-19.007-9.281-28.078-9.281-17.723 0-37.543 6.606-41.685 28.524-.446 2.333 1.258 3.565 2.778 3.906l18.063 1.94c1.704-.079 2.937-1.73 3.251-3.408 1.547-7.55 7.865-11.194 14.97-11.194 3.854 0 8.206 1.416 10.461 4.85 2.622 3.828 2.281 9.071 2.281 13.501v2.412c-10.802 1.232-24.933 2.019-35.053 6.476-11.692 5.034-19.872 15.337-19.872 30.464 0 19.375 12.19 29.048 27.895 29.048 13.239 0 20.502-3.119 30.727-13.555 3.382 4.903 4.509 7.289 10.696 12.428 1.39.734 3.172.655 4.404-.445l.026.052c3.723-3.304 10.486-9.202 14.288-12.374 1.522-1.259 1.26-3.278.08-4.956zm-36.678-8.389c-2.963 5.244-7.682 8.468-12.898 8.468-7.157 0-11.353-5.453-11.353-13.502 0-15.887 14.236-18.771 27.738-18.771v4.037c.001 7.262.184 13.319-3.487 19.768zM95.196 94.75c-3.408-4.719-7.025-8.547-7.025-17.277V48.425c0-12.296.865-23.595-8.206-32.063-7.157-6.869-19.008-9.281-28.078-9.281-17.723 0-37.517 6.606-41.685 28.524-.42 2.333 1.258 3.565 2.778 3.906l18.09 1.94c1.678-.079 2.91-1.73 3.225-3.408 1.547-7.55 7.892-11.194 14.996-11.194 3.828 0 8.18 1.416 10.461 4.85 2.595 3.828 2.254 9.071 2.254 13.501v2.412c-10.801 1.232-24.932 2.019-35.052 6.476C15.288 59.122 7.082 69.425 7.082 84.552c0 19.375 12.217 29.048 27.895 29.048 13.266 0 20.502-3.119 30.727-13.555 3.408 4.903 4.509 7.289 10.696 12.428 1.39.734 3.172.655 4.404-.445l.053.052c3.723-3.304 10.486-9.202 14.288-12.374 1.52-1.259 1.257-3.278.051-4.956zm-36.677-8.389c-2.963 5.244-7.655 8.468-12.898 8.468-7.157 0-11.326-5.453-11.326-13.502 0-15.887 14.235-18.771 27.711-18.771v4.037c0 7.262.183 13.319-3.487 19.768zM954.821 11.066c4.482 0 8.206 3.618 8.206 8.18 0 4.457-3.671 8.206-8.206 8.206-4.51 0-8.18-3.67-8.18-8.206 0-4.615 3.723-8.18 8.18-8.18m.026-1.573c-5.244 0-9.779 4.247-9.779 9.779 0 5.427 4.457 9.752 9.779 9.752 5.348 0 9.752-4.378 9.752-9.752 0-5.532-4.482-9.779-9.752-9.779m-3.67 15.258h2.098v-4.404h1.939c.761 0 .971.315 1.128.944 0 .157.367 2.937.394 3.46h2.333c-.288-.524-.446-2.019-.551-2.91-.21-1.39-.314-2.36-1.809-2.464.76-.262 2.071-.682 2.071-2.701 0-2.884-2.544-2.884-3.854-2.884h-3.749v10.959m2.044-9.202h1.757c.576 0 1.625 0 1.625 1.494 0 .577-.262 1.547-1.678 1.547h-1.704v-3.041",
                  fill: "#696969",
                }),
              ],
            }),
          }),
          u.jsx("li", {
            children: u.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#696969",
              height: "125px",
              width: "125px",
              version: "1.1",
              id: "Layer_1",
              viewBox: "0 0 2500 583",
              style: { marginTop: "-12px" },
              children: [
                u.jsx("path", {
                  d: "M508.9,501.4c0,39.3-32.8,71.2-57.5,71.2H172.1L523.4,11.4H53.7v93h24.1c0-39.3,25.4-71.1,50.2-71.1h241.3L15.9,594.4h509.6  l0-93H508.9",
                }),
                u.jsxs("g", {
                  children: [
                    u.jsx("polygon", {
                      points: "918.3,576.1 918.3,576.1 918.3,576.1  ",
                    }),
                    u.jsx("path", {
                      d: "M1118.4,549L846.6,11.4l-249.1,538c-4.4,11.8-28.4,26.7-62.4,26.7v18.2h132.6v-18.2c-24.6,0-51-12.2-44.6-26.8L683,419.4   h229.8L978.1,549c7.4,13.1-25.7,27.2-59.8,27.2v18.2h276l0.1-18.2C1152.6,576.1,1127.1,563.1,1118.4,549z M693,398.4l99.4-218.2   l111,218.2H693z",
                    }),
                  ],
                }),
                u.jsx("path", {
                  d: "M1226,33.9c40.4,0,73.8,10.4,73.8,23c0,100-0.2,491.5,0,491.5c0,13.4-32.9,28.3-73.4,28.3l-0.1,17.6h270.2v-16.4  c-40.1,0-72.6-16-72.6-29.4V29h77.9c75,0,135.8,62.3,135.8,133c0,70.7-60.8,128.1-135.9,128.1h-53.9c0,0,182.6,276.5,182.9,276.5  c7.2,10.5,10.8,27.8,10.8,27.8h196.9v-16.4c-37.9,0-57.7-15.7-68.7-29.5l-175.8-229.4c84.4-5.6,149.7-73.8,149.7-154.8  c0-84.6-72.7-152.9-162.4-152.9H1226V33.9",
                }),
                u.jsx("path", {
                  d: "M2440,549L2168.2,11.4l-249.1,538c-4.4,11.8-28.3,27.3-62.4,27.3v17.6h132.6v-16.4c-24.6,0-50.9-14-44.6-28.6l59.9-129.9  h229.8l65.3,129.6c7.5,13.1-25.7,27.8-59.8,27.8h0v17.6h276l0.1-17C2474.2,577.4,2448.7,563.1,2440,549z M2014.5,398.4l99.4-218.2  l111,218.2H2014.5z",
                }),
              ],
            }),
          }),
          u.jsx("li", {
            children: u.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "175px",
              height: "175px",
              viewBox: "0.501 -326.942 760.825 760.825",
              style: { marginTop: "-12px" },
              children: [
                u.jsx("path", {
                  d: "M.5 15.075l43.446-5.972v41.924H.504L.5 15.075zm43.446 41.317v41.45L.506 91.879.505 56.394h43.442v-.002zM48.75 8.444l57.81-7.947v50.53H48.75V8.444zm57.81 47.948v50.049L48.75 98.5V56.392h57.81z",
                  fill: "#696969",
                }),
                u.jsx("g", {
                  fill: "#696969",
                  children: u.jsx("path", {
                    d: "M204.703 84.786H194.66V45.955c0-3.183.199-7.07.596-11.677h-.168c-.627 2.622-1.18 4.504-1.66 5.652l-18.212 44.856h-6.979l-18.256-44.52c-.51-1.31-1.05-3.306-1.616-5.983h-.168c.229 2.4.341 6.318.341 11.757v38.746h-9.363V24.782h14.255l16.043 39.962c1.219 3.068 2.014 5.358 2.381 6.862h.212c1.05-3.153 1.9-5.498 2.553-7.032l16.342-39.792h13.745l-.004 60.004zM223.555 32.94c-1.616 0-3.003-.514-4.148-1.547-1.15-1.032-1.724-2.345-1.724-3.934s.574-2.915 1.724-3.977c1.15-1.058 2.532-1.59 4.148-1.59 1.672 0 3.094.532 4.256 1.59 1.162 1.062 1.746 2.383 1.746 3.977 0 1.504-.584 2.796-1.746 3.87-1.167 1.076-2.584 1.611-4.256 1.611zm4.891 51.846h-9.869v-42.85h9.87v42.85zM272.576 82.819c-3.487 1.98-7.618 2.97-12.384 2.97-6.468 0-11.688-1.988-15.66-5.961-3.97-3.973-5.958-9.127-5.958-15.462 0-7.058 2.135-12.726 6.404-17.01 4.27-4.282 9.977-6.424 17.128-6.424 3.971 0 7.475.684 10.509 2.053v9.037c-3.038-2.23-6.27-3.348-9.7-3.348-4.17 0-7.588 1.39-10.254 4.164-2.666 2.775-4.002 6.408-4.002 10.899 0 4.436 1.253 7.937 3.764 10.503 2.51 2.567 5.88 3.85 10.107 3.85 3.547 0 6.891-1.24 10.041-3.722l.005 8.451zM307.679 51.185c-1.193-.922-2.908-1.38-5.15-1.38-2.922 0-5.363 1.295-7.32 3.891-1.958 2.592-2.938 6.123-2.938 10.585v20.505h-9.874v-42.85h9.874v8.829h.168c.964-3.013 2.446-5.363 4.446-7.05 2-1.686 4.235-2.532 6.702-2.532 1.789 0 3.15.268 4.088.795l.004 9.207zM334.062 85.789c-6.723 0-12.09-2.001-16.108-6.004-4.014-4.002-6.023-9.31-6.023-15.92 0-7.199 2.091-12.82 6.278-16.865 4.187-4.045 9.821-6.068 16.916-6.068 6.81 0 12.112 1.968 15.914 5.902 3.803 3.935 5.7 9.386 5.7 16.359 0 6.837-2.048 12.31-6.149 16.422-4.096 4.118-9.605 6.174-16.528 6.174zm.467-37.115c-3.858 0-6.909 1.326-9.147 3.973-2.243 2.651-3.362 6.305-3.362 10.962 0 4.491 1.136 8.027 3.405 10.606 2.268 2.579 5.306 3.87 9.108 3.87 3.89 0 6.875-1.27 8.958-3.806 2.082-2.541 3.128-6.153 3.128-10.84 0-4.712-1.041-8.353-3.128-10.92-2.087-2.562-5.073-3.845-8.962-3.845zM364.106 83.448v-8.995c3.69 2.762 7.76 4.142 12.21 4.142 5.96 0 8.936-1.729 8.936-5.188 0-.977-.254-1.805-.764-2.49-.51-.684-1.197-1.291-2.066-1.818s-1.888-1.003-3.063-1.423c-1.18-.421-2.49-.893-3.937-1.424a41.822 41.822 0 0 1-4.83-2.218c-1.435-.782-2.623-1.665-3.574-2.655a9.937 9.937 0 0 1-2.147-3.37c-.484-1.253-.722-2.72-.722-4.393 0-2.065.497-3.884 1.49-5.46.995-1.577 2.325-2.902 3.998-3.973 1.676-1.075 3.573-1.882 5.703-2.426a26.507 26.507 0 0 1 6.594-.816c4.027 0 7.63.599 10.807 1.797v8.494c-3.064-2.065-6.581-3.098-10.552-3.098-1.249 0-2.377.128-3.383.374-1.007.251-1.867.6-2.576 1.046-.708.446-1.261.981-1.659 1.61a3.793 3.793 0 0 0-.596 2.07c0 .921.199 1.703.596 2.345.398.641.985 1.206 1.767 1.695.778.489 1.716.935 2.809 1.338 1.093.404 2.346.846 3.768 1.318a55.287 55.287 0 0 1 5.042 2.303c1.491.781 2.761 1.665 3.811 2.655a10.36 10.36 0 0 1 2.424 3.433c.567 1.296.852 2.839.852 4.623 0 2.176-.51 4.07-1.534 5.69-1.02 1.619-2.385 2.957-4.083 4.015-1.703 1.062-3.669 1.848-5.894 2.362-2.23.519-4.576.774-7.043.774-4.77.004-8.897-.774-12.384-2.337zM423.765 85.789c-6.723 0-12.094-2.001-16.109-6.004-4.014-4.002-6.019-9.31-6.019-15.92 0-7.199 2.092-12.82 6.279-16.865 4.182-4.045 9.821-6.068 16.912-6.068 6.81 0 12.111 1.968 15.914 5.902 3.802 3.935 5.703 9.386 5.703 16.359 0 6.837-2.048 12.31-6.148 16.422-4.1 4.118-9.614 6.174-16.532 6.174zm.467-37.115c-3.859 0-6.91 1.326-9.152 3.973-2.243 2.651-3.362 6.305-3.362 10.962 0 4.491 1.137 8.027 3.405 10.606 2.269 2.579 5.306 3.87 9.109 3.87 3.884 0 6.87-1.27 8.957-3.806 2.087-2.541 3.128-6.153 3.128-10.84 0-4.712-1.041-8.353-3.128-10.92-2.087-2.562-5.073-3.845-8.957-3.845zM481.168 29.26c-1.33-.752-2.851-1.13-4.554-1.13-4.796 0-7.19 2.664-7.19 7.992v5.817h10.128v7.615h-10.085v35.232h-9.873V49.554h-7.445v-7.615h7.445v-6.947c0-4.52 1.504-8.081 4.511-10.69 3.007-2.61 6.767-3.914 11.278-3.914 2.441 0 4.368.264 5.785.795v8.077zM509.635 84.327c-1.927.948-4.468 1.424-7.618 1.424-8.452 0-12.678-3.99-12.678-11.965V49.558h-7.276v-7.614h7.276v-9.918l9.874-2.761v12.679h10.426v7.614h-10.426V70.98c0 2.537.466 4.351 1.404 5.439s2.497 1.632 4.68 1.632c1.672 0 3.12-.472 4.338-1.424v7.7zM593.379 84.786h-11.105l-5.488-15.275h-23.998l-5.276 15.275h-11.066l22.849-60.004h11.403l22.68 60.004zm-19.276-23.39l-8.465-23.935c-.255-.782-.527-2.035-.808-3.765h-.168c-.255 1.59-.54 2.847-.852 3.765l-8.382 23.935h18.675zM632.867 45.997L609.336 77.21h23.445v7.576h-37.277v-3.641l24.042-31.634h-21.743v-7.576h35.064v4.062zM679.205 84.786h-9.869v-6.781h-.168c-2.865 5.188-7.32 7.784-13.36 7.784-10.298 0-15.448-6.08-15.448-18.245V41.935h9.873v24.606c0 7.7 3.02 11.549 9.066 11.549 2.92 0 5.323-1.058 7.211-3.178s2.83-4.895 2.83-8.328V41.935h9.874l-.009 42.851zM717.376 51.185c-1.192-.922-2.908-1.38-5.15-1.38-2.921 0-5.363 1.295-7.32 3.891-1.957 2.592-2.938 6.123-2.938 10.585v20.505h-9.87v-42.85h9.87v8.829h.168c.964-3.013 2.446-5.363 4.446-7.05 2.001-1.686 4.235-2.532 6.702-2.532 1.785 0 3.15.268 4.083.795l.01 9.207zM761.333 65.997H731.63c.112 3.96 1.352 7.015 3.724 9.165 2.368 2.146 5.622 3.221 9.766 3.221 4.653 0 8.922-1.368 12.807-4.1v7.822c-3.97 2.456-9.22 3.684-15.745 3.684-6.413 0-11.438-1.946-15.085-5.838-3.647-3.892-5.466-9.365-5.466-16.422 0-6.667 2.005-12.102 6.024-16.3 4.014-4.198 9-6.297 14.959-6.297 5.958 0 10.564 1.883 13.827 5.647 3.262 3.765 4.895 8.995 4.895 15.692l-.004 3.726zm-9.532-6.862c-.043-3.488-.864-6.2-2.51-8.137-1.647-1.937-3.915-2.906-6.81-2.906-2.835 0-5.242 1.02-7.212 3.055s-3.184 4.7-3.638 7.992h20.17z",
                  }),
                }),
              ],
            }),
          }),
          u.jsx("li", {
            children: u.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "150px",
              height: "150px",
              viewBox: "0 -179.5 512 512",
              version: "1.1",
              preserveAspectRatio: "xMidYMid",
              style: { marginTop: "-12px" },
              children: u.jsxs("g", {
                children: [
                  u.jsx("path", {
                    d: "M140.106589,96.6278184 C131.785652,96.6278184 123.989458,93.1045388 116.905417,87.3698389 L118.629575,79.2737921 L118.704539,78.9739385 C120.241288,70.3531479 125.113909,55.8852123 140.106589,55.8852123 C151.351098,55.8852123 160.496633,65.0307467 160.496633,76.2752562 C160.459151,87.482284 151.313616,96.6278184 140.106589,96.6278184 L140.106589,96.6278184 Z M140.106589,35.2327965 C120.953441,35.2327965 106.110688,47.6767204 100.076135,68.1417277 C90.8556369,54.310981 83.884041,37.7065886 79.7985359,23.7259151 L59.1836018,23.7259151 L59.1836018,77.3622255 C59.1836018,87.9320644 50.5628111,96.5528551 39.9929722,96.5528551 C29.4231332,96.5528551 20.8023426,87.9320644 20.8023426,77.3622255 L20.8023426,23.7259151 L0.187408492,23.7259151 L0.187408492,77.3622255 C0.112445095,99.3265007 17.9912152,117.355198 39.9554905,117.355198 C61.9197657,117.355198 79.7985359,99.3265007 79.7985359,77.3622255 L79.7985359,68.3666179 C83.8090776,76.7250366 88.7191801,85.1584187 94.6787701,92.6547584 L82.0474378,152.025769 L103.149634,152.025769 L112.295168,108.959297 C120.316252,114.09429 129.53675,117.317716 140.106589,117.317716 C162.708053,117.317716 181.111567,98.801757 181.111567,76.2002928 C181.111567,53.6363104 162.708053,35.2327965 140.106589,35.2327965 L140.106589,35.2327965 Z",
                    fill: "#696969",
                  }),
                  u.jsx("path", {
                    d: "M244.043338,37.5566618 L257.349341,91.1929722 L272.004685,37.5566618 L289.471157,37.5566618 L266.944656,115.068814 L249.478184,115.068814 L235.647438,61.0951684 L221.854173,115.031332 L204.387701,115.031332 L181.861201,37.5191801 L199.327672,37.5191801 L213.983016,91.1554905 L227.289019,37.5191801 L244.043338,37.5191801 L244.043338,37.5566618 Z M331.26325,35.2327965 C308.586823,35.2327965 290.220791,53.6363104 290.220791,76.2752562 C290.220791,98.9516837 308.624305,117.317716 331.26325,117.317716 C353.939678,117.317716 372.343192,98.9516837 372.343192,76.2752562 C372.343192,53.5988287 353.939678,35.2327965 331.26325,35.2327965 Z M331.26325,100.450952 C317.919766,100.450952 307.125037,89.6562225 307.125037,76.3127379 C307.125037,62.9692533 317.957247,52.1745242 331.26325,52.1745242 C344.606735,52.1745242 355.401464,62.9692533 355.401464,76.3127379 C355.401464,89.6187408 344.606735,100.450952 331.26325,100.450952 Z M422.231332,54.9106881 C410.499561,54.9106881 401.016691,64.4310395 401.016691,76.1253294 L401.016691,115.031332 L383.437775,115.031332 L383.437775,37.5566618 L401.016691,37.5566618 L401.016691,49.4758419 C401.016691,49.4758419 408.513031,37.5191801 423.918009,37.5191801 L429.315373,37.5191801 L429.315373,54.9106881 L422.231332,54.9106881 Z M481.227526,73.2767204 C493.708931,66.2301611 502.179795,52.8491947 502.179795,37.5191801 L484.600878,37.5191801 C484.600878,50.450366 474.106003,60.9452416 461.174817,60.9452416 L458.81347,60.9452416 L458.81347,0.149926794 L441.234553,0.149926794 L441.234553,115.031332 L458.81347,115.031332 L458.81347,78.5241581 L460.912445,78.5241581 C462.636603,78.5241581 464.885505,79.6486091 465.897511,81.0354319 L490.860322,115.031332 L511.925037,115.031332 L481.227526,73.2767204 Z",
                    fill: "#696969",
                  }),
                ],
              }),
            }),
          }),
          u.jsx("li", {
            children: u.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "150px",
              height: "150px",
              viewBox: "0 0 192.744 192.744",
              style: { marginTop: "-12px" },
              fill: "#696969",
              children: [
                u.jsx("path", {
                  d: "M187.035 106.442a2.852 2.852 0 1 0 0 5.703 2.847 2.847 0 0 0 2.844-2.858 2.844 2.844 0 0 0-2.844-2.845zm0 5.36a2.505 2.505 0 0 1-2.508-2.515 2.502 2.502 0 0 1 2.508-2.501 2.5 2.5 0 0 1 2.5 2.501 2.503 2.503 0 0 1-2.5 2.515z",
                }),
                u.jsx("path", {
                  d: "M188.498 108.54c0-.269-.119-.552-.357-.687-.24-.142-.508-.156-.777-.156h-1.389v3.187h.389v-1.47h.717l.91 1.47h.463l-.963-1.47c.568-.016 1.007-.247 1.007-.874zm-1.537.567h-.598v-1.127h.91c.396 0 .83.06.83.553.001.649-.695.574-1.142.574zM170.32 93.132l5.83-6.225c.338-.457.506-.777.506-1.051 0-.457-.393-.64-1.629-.64h-1.471v-3.93h15.922v3.93h-2.092c-2.416 0-2.865.365-6.236 4.615l-9.223 9.96v6.078c0 1.555.785 2.102 3.033 2.102h3.482v3.792h-22.301v-3.792h3.482c2.246 0 3.033-.547 3.033-2.102v-6.078l-10.863-12.017c-1.795-2.101-1.547-2.558-6.545-2.558v-3.93h20.168v3.93h-1.436c-1.461 0-2.08.274-2.08.822 0 .458.449.823.73 1.188l5.496 5.99c.653.679 1.45.767 2.194-.084zM35.003 81.285h4.865v10.966h-4.493c-.398-2.192-1.77-3.045-3.021-4.195-2.257-2.074-7.145-3.801-11.256-3.801-5.306 0-9.784 1.646-9.784 4.066 0 6.718 30.345 1.372 30.345 14.074 0 6.625-6.5 10.326-18.173 10.326-4.041 0-10.156-1.254-13.764-3.17-1.131-.653-1.611.618-1.823 2.211H2.911V100.43h4.512c.995 2.879 2.366 3.472 3.627 4.615 2.188 2.011 7.396 3.474 12.172 3.427 7.201-.071 9.677-1.645 9.677-3.93 0-2.284-2.449-2.833-10.34-4.066l-6.7-1.097c-7.561-1.143-13.066-2.833-13.066-8.864 0-6.26 6.964-10.19 17.975-10.19 4.64 0 8.522.62 12.248 2.726 1.032.671 2 .751 1.987-1.766zM129.947 99.645l.096-12.188c0-1.599-.832-2.147-3.209-2.147h-2.793v-3.792h17.77v3.792h-2.316c-2.379 0-3.211.549-3.211 2.147v24.537l-6.955-.055-22.524-21.329v15.49c0 1.554.832 2.147 3.209 2.147h3.092v3.747H94.651v-3.747h3.058c2.377 0 3.209-.594 3.209-2.147V87.457c0-1.599-.832-2.147-3.209-2.147h-3.058v-3.792h15.956l19.34 18.127zM70.424 80.095c-14.162 0-23.027 6.261-23.027 16.312 0 9.871 8.742 16.084 22.595 16.084 14.714 0 23.273-6.122 23.273-16.586.001-9.412-9.235-15.81-22.841-15.81zm-.322 28.422c-7.839 0-12.345-4.524-12.345-12.338 0-7.63 4.702-12.154 12.737-12.154 7.708 0 12.214 4.616 12.214 12.475 0 7.676-4.572 12.017-12.606 12.017z",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const _2 = "/assets/security-BGjGC9dv.svg",
  R2 = "/assets/fast-BxCSJQAQ.svg",
  T2 = "/assets/community-s6OCt45l.svg",
  M2 = "/assets/analytics-C2ROebKB.svg";
function z2() {
  return u.jsxs("div", {
    className: "index features",
    children: [
      u.jsxs("div", {
        className: "index features-container",
        children: [
          u.jsx("h1", {
            className: "index features-heading",
            children: "Things we offer",
          }),
          u.jsx("p", {
            className: "index features-text",
            children: "View all",
          }),
        ],
      }),
      u.jsx("div", {
        children: u.jsxs("ul", {
          className: "index features-card",
          children: [
            u.jsx("li", {
              children: u.jsxs("div", {
                className: "index features-card-inner",
                children: [
                  u.jsx("div", {
                    style: {
                      width: "250px",
                      height: "250px",
                      overflow: "hidden",
                    },
                    children: u.jsx("img", {
                      src: _2,
                      alt: "",
                      className: "index features-card-img",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "index features-card-text",
                    children: [
                      u.jsx("h1", { children: "Security!!" }),
                      u.jsx("p", {
                        children:
                          "Complete security of your links and your brand at fingertips.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs("div", {
                className: "index features-card-inner",
                children: [
                  u.jsx("div", {
                    style: {
                      width: "250px",
                      height: "250px",
                      overflow: "hidden",
                    },
                    children: u.jsx("img", {
                      src: R2,
                      alt: "",
                      className: "index features-card-img",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "index features-card-text",
                    children: [
                      u.jsx("h1", { children: "Fast!!" }),
                      u.jsx("p", {
                        children:
                          "We at QuickLink provides the fastest redirects among our competitors.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs("div", {
                className: "index features-card-inner",
                children: [
                  u.jsx("div", {
                    style: {
                      width: "250px",
                      height: "250px",
                      overflow: "hidden",
                    },
                    children: u.jsx("img", {
                      src: T2,
                      alt: "",
                      className: "index features-card-img",
                      style: { scale: "1.2" },
                    }),
                  }),
                  u.jsxs("div", {
                    className: "index features-card-text",
                    children: [
                      u.jsx("h1", { children: "Amazing Community." }),
                      u.jsx("p", {
                        children:
                          "At quickLinks we provide amazing community for your help over a single call or text.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs("div", {
                className: "index features-card-inner",
                children: [
                  u.jsx("div", {
                    style: {
                      width: "250px",
                      height: "250px",
                      overflow: "hidden",
                    },
                    children: u.jsx("img", {
                      src: M2,
                      alt: "",
                      className: "index features-card-img",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "index features-card-text",
                    children: [
                      u.jsx("h1", { children: "Analytics" }),
                      u.jsx("p", {
                        children:
                          "Our best lies in how we serve where your links have been and how did people react.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Kf() {
  return u.jsxs("div", {
    className: "footer main-logo-container",
    children: [
      u.jsxs("div", {
        className: "footer text",
        children: [
          u.jsxs("div", {
            className: "footer logo-container",
            children: [
              u.jsx("i", { className: "bx bxl-facebook" }),
              u.jsx("i", { className: "bx bxl-instagram" }),
              u.jsx("i", { className: "bx bxl-twitter" }),
              u.jsx("i", { className: "bx bxl-youtube" }),
              u.jsx("i", { className: "bx bxl-whatsapp" }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("p", {
            children: [
              "A URL shortener is a tool used to condense long URLs into shorter, more manageable links. These shortened URLs redirect users to the original, longer URL when clicked.",
              " ",
            ],
          }),
        ],
      }),
      u.jsx("h1", {
        className: "foot company-name btn-shine",
        children: "QuickLinks",
      }),
    ],
  });
}
function D2() {
  return u.jsx("section", {
    className: "customer main",
    style: { margin: "5rem" },
    children: u.jsx("div", {
      className: "customer main-container",
      children: u.jsxs("div", {
        className: "customer inner-container",
        children: [
          u.jsx("div", {
            className: "customer col-1",
            children: u.jsx("img", {
              loading: "lazy",
              decoding: "async",
              className: "customer col-1-img",
              style: { marginBottom: "30px" },
              src: "https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe.png",
              alt: "Globe",
              width: "550",
              height: "420",
              srcSet:
                "https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe.png 550w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-300x229.png 300w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-24x18.png 24w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-36x27.png 36w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-48x37.png 48w",
              sizes: "(max-width: 550px) 100vw, 550px",
            }),
          }),
          u.jsxs("div", {
            className: "customer col-2",
            children: [
              u.jsx("table", {
                className: "customer-Table",
                children: u.jsxs("tbody", {
                  children: [
                    u.jsxs("tr", {
                      className: "customer-table-1",
                      children: [
                        u.jsx("td", {
                          className: "customer-table-1-left",
                          children: u.jsx("h3", { children: "500K" }),
                        }),
                        u.jsx("td", {
                          className: "customer-table-1-right",
                          children: "global paying customers",
                        }),
                      ],
                    }),
                    u.jsxs("tr", {
                      className: "customer-table-2",
                      children: [
                        u.jsx("td", {
                          className: "customer-table-2-left",
                          children: u.jsx("h3", { children: "256M" }),
                        }),
                        u.jsx("td", {
                          className: "customer-table-2-right",
                          children: "links & QR Codes created monthly",
                        }),
                      ],
                    }),
                    u.jsxs("tr", {
                      className: "customer-table-3",
                      children: [
                        u.jsx("td", {
                          className: "customer-table-3-left",
                          children: u.jsx("h3", { children: "10B" }),
                        }),
                        u.jsx("td", {
                          className: "customer-table-3-right",
                          children: "connections (clicks & scans) monthly",
                        }),
                      ],
                    }),
                    u.jsxs("tr", {
                      className: "customer-table-4",
                      children: [
                        u.jsx("td", {
                          className: "customer-table-4-left",
                          children: u.jsx("h3", { children: "800+" }),
                        }),
                        u.jsx("td", {
                          className: "customer-table-4-right",
                          children: "app integrations",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("p", { children: " " }),
            ],
          }),
        ],
      }),
    }),
  });
}
function O2() {
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(P2, {}),
      u.jsx(L2, {}),
      u.jsx(z2, {}),
      u.jsx(D2, {}),
      u.jsx(Kf, {}),
    ],
  });
}
const fr = () => C.useContext(Wf);
function Yf({ data: e }) {
  const t = Object.keys(e),
    n = location.origin;
  return u.jsx("section", {
    className: "details-container",
    id: "details-container",
    children: u.jsxs("div", {
      className: "details-container-inner",
      children: [
        u.jsx("div", {
          className: "details-header-container",
          children: u.jsx("h1", {
            className: "details-header",
            children: "My links",
          }),
        }),
        u.jsxs("table", {
          className: "details-table",
          children: [
            u.jsx("thead", {
              children: u.jsxs("tr", {
                children: [
                  u.jsx("th", { children: "S. No." }),
                  u.jsx("th", { children: "Short Url" }),
                  u.jsx("th", { children: "Long Url" }),
                  u.jsx("th", { children: "More Information" }),
                ],
              }),
            }),
            u.jsx("tbody", {
              children:
                t.length > 0
                  ? t.map((r, l) =>
                      u.jsxs(
                        "tr",
                        {
                          children: [
                            u.jsx("td", { children: l + 1 }),
                            u.jsx("td", {
                              style: { whiteSpace: "nowrap" },
                              children: u.jsx("p", {
                                style: { cursor: "pointer" },
                                children: `${n}/${r}`,
                              }),
                            }),
                            u.jsx("td", {
                              style: {
                                maxWidth: "250px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              },
                              children: u.jsx("p", {
                                style: { cursor: "pointer" },
                                children: e[r],
                              }),
                            }),
                            u.jsxs("td", {
                              className: "details-redirect",
                              children: [
                                u.jsx("p", {
                                  onClick: () => {
                                    navigator(`${n}/${r}`);
                                  },
                                  children: "Open in Browser",
                                }),
                                u.jsx("i", {
                                  className: "bx bx-right-top-arrow-circle",
                                }),
                              ],
                            }),
                          ],
                        },
                        l
                      )
                    )
                  : u.jsx("tr", {
                      children: u.jsx("td", {
                        colSpan: "4",
                        children: "No long URLs found.",
                      }),
                    }),
            }),
          ],
        }),
      ],
    }),
  });
}
Yf.propTypes = { data: Bi.object };
function Gf({ modifyUrls: e }) {
  const t = C.useRef(null),
    [n, r] = C.useState(""),
    { user: l } = fr(),
    i =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;
  async function o(a) {
    if (((a.target.innerHTML = "<i class='bx bx-loader'></i>"), n.match(i))) {
      let s = await fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: n, userName: l.userName }),
      });
      if (s.ok) {
        let c = await s.json();
        e((d) => ({ ...d, [c.shortUrl]: n })),
          (t.current.className = "generator-result generator-result-success"),
          (t.current.innerHTML = location.origin + "/" + c.shortUrl);
      } else
        (t.current.className = "generator-result generator-result-error"),
          (t.current.innerHTML = "Some server Errror occured");
    } else
      (t.current.className = "generator-result generator-result-error"),
        (t.current.innerHTML = "Please enter a valid url");
    a.target.innerHTML = "Submit";
  }
  return u.jsx("section", {
    className: "generator",
    id: "generator",
    children: u.jsxs("div", {
      className: "generator-inner",
      children: [
        u.jsx("h1", {
          className: "generator-header",
          children: "Enter a Link you want to make short",
        }),
        u.jsxs("div", {
          className: "generator-input-container",
          children: [
            u.jsx("input", {
              type: "url",
              className: "generator-input",
              id: "url",
              onChange: (a) => r(a.target.value),
            }),
            u.jsx("button", {
              className: "generator-submit",
              onClick: o,
              children: "Submit",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "generator-result-container",
          children: [
            u.jsx("h1", { children: "Your shorten Link: " }),
            u.jsx("p", {
              className: "generator-result generator-result-pending",
              ref: t,
              children: "Please enter a url first.",
            }),
          ],
        }),
      ],
    }),
  });
}
Gf.propTypes = { modifyUrls: Bi.func };
function Xf() {
  const { user: e } = fr(),
    { navigator: t } = ws(),
    [n, r] = C.useState(e.urls || {});
  return (
    C.useEffect(() => {
      e.userName || t("/login");
    }, []),
    u.jsx(u.Fragment, {
      children: u.jsxs("main", {
        children: [
          u.jsx("nav", {
            className: "index navbar",
            children: u.jsxs("div", {
              className: "index navbar-container",
              children: [
                u.jsx("div", {
                  className: "index navbar-inner-left",
                  children: u.jsx(xn, {
                    to: "/",
                    className: "index website",
                    children: "Quick Link",
                  }),
                }),
                u.jsx("div", {
                  className: "index navbar-inner-right",
                  children: u.jsxs("ul", {
                    className: "dashboard-nav-right",
                    children: [
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#details-container",
                          children: "Your Links",
                        }),
                      }),
                      u.jsx("li", {
                        children: u.jsx("a", {
                          href: "#generator",
                          children: "Generate",
                        }),
                      }),
                      u.jsx("li", {
                        className: "dashboard-pfp",
                        onClick: () => {
                          t("/account");
                        },
                        children: u.jsx("i", {
                          className: "bx bx-user",
                          style: {
                            fontSize: "larger",
                            borderRadius: "50%",
                            padding: "10px",
                            background: "rgba(105, 105, 105, 0.4)",
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          u.jsx(Gf, { modifyUrls: r }),
          u.jsx(Yf, { data: n }),
          u.jsx(Kf, {}),
        ],
      }),
    })
  );
}
Xf.propTypes = { navigator: Bi.func };
function F2() {
  const { user: e, setUser: t } = fr(),
    { navigator: n } = ws(),
    r = C.useRef(null),
    l = C.useRef(null),
    i = C.useRef(null),
    o = C.useRef(null),
    [a, s] = C.useState({ userName: "", password: "", email: "" });
  async function c(d) {
    d.preventDefault();
    const f = d.target.getElementsByTagName("button")[0],
      p = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      ((f.innerHTML = "<i class='bx bx-loader'></i>"),
      a.email.match(p) && a.userName.length > 4 && a.password.length >= 8)
    ) {
      let w = await (
        await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(a),
        })
      ).json();
      w.success
        ? (t({ email: w.email, userName: w.userName, urls: {} }),
          n("/dashboard"))
        : w.userExist &&
          ((o.current.style.display = "block"),
          (o.current.style.color = "red"));
    } else if (a.userName.length > 4 && a.password.length >= 8) {
      let w = await (
        await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(a),
        })
      ).json();
      w.success
        ? (t({ userName: w.userName, email: w.email, urls: w.urls }),
          n("/dashboard"))
        : w.userExist &&
          ((o.current.style.display = "block"),
          (o.current.style.color = "red"));
    }
    f.innerHTML = "Submit";
  }
  return (
    C.useEffect(() => {
      const d = l.current,
        f = i.current,
        p = () => {
          s({ userName: "", password: "", email: "" }),
            r.current.classList.add("sign-up-mode");
        },
        S = () => {
          s({ userName: "", password: "", email: "" }),
            r.current.classList.remove("sign-up-mode");
        };
      return (
        d.addEventListener("click", p),
        f.addEventListener("click", S),
        () => {
          d.removeEventListener("click", p), f.removeEventListener("click", S);
        }
      );
    }, []),
    u.jsx(u.Fragment, {
      children:
        e != null && e.userName
          ? n("/dashboard")
          : u.jsxs("div", {
              className: "container",
              ref: r,
              children: [
                u.jsx("div", {
                  className: "forms-container",
                  children: u.jsxs("div", {
                    className: "signin-signup",
                    children: [
                      u.jsxs("form", {
                        className: "sign-in-form",
                        onSubmit: c,
                        children: [
                          u.jsx("h2", {
                            className: "title",
                            children: "Sign in",
                          }),
                          u.jsxs("div", {
                            className: "input-field",
                            children: [
                              u.jsx("i", {
                                className: "bx bx-log-in-circle",
                                style: { fontSize: "x-large" },
                              }),
                              u.jsx("input", {
                                type: "text",
                                placeholder: "Username",
                                onChange: (d) =>
                                  s((f) => ({
                                    ...f,
                                    userName: d.target.value,
                                  })),
                                required: !0,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "input-field",
                            children: [
                              u.jsx("i", {
                                className: "bx bxs-lock-alt",
                                style: { fontSize: "x-large" },
                              }),
                              u.jsx("input", {
                                type: "password",
                                placeholder: "Password",
                                onChange: (d) =>
                                  s((f) => ({
                                    ...f,
                                    password: d.target.value,
                                  })),
                                required: !0,
                              }),
                            ],
                          }),
                          u.jsx("button", {
                            type: "submit",
                            className: "btn solid",
                            children: "Submit",
                          }),
                        ],
                      }),
                      u.jsxs("form", {
                        className: "sign-up-form",
                        onSubmit: c,
                        children: [
                          u.jsx("h2", {
                            className: "title",
                            children: "Sign up",
                          }),
                          u.jsxs("div", {
                            className: "input-field",
                            children: [
                              u.jsx("i", {
                                className: "bx bx-log-in-circle",
                                style: { fontSize: "x-large" },
                              }),
                              u.jsx("input", {
                                type: "text",
                                placeholder: "Username",
                                onChange: (d) =>
                                  s((f) => ({
                                    ...f,
                                    userName: d.target.value,
                                  })),
                                required: !0,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "input-field",
                            children: [
                              u.jsx("i", {
                                className: "bx bx-envelope",
                                style: { fontSize: "x-large" },
                              }),
                              u.jsx("input", {
                                type: "email",
                                placeholder: "Email",
                                onChange: (d) =>
                                  s((f) => ({ ...f, email: d.target.value })),
                                required: !0,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "input-field",
                            children: [
                              u.jsx("i", {
                                className: "bx bxs-lock-alt",
                                style: { fontSize: "x-large" },
                              }),
                              u.jsx("input", {
                                type: "password",
                                placeholder: "Password",
                                onChange: (d) =>
                                  s((f) => ({
                                    ...f,
                                    password: d.target.value,
                                  })),
                                required: !0,
                              }),
                            ],
                          }),
                          u.jsx("p", {
                            ref: o,
                            style: { display: "none" },
                            children: "Username already exist.",
                          }),
                          u.jsx("button", {
                            type: "submit",
                            className: "btn",
                            children: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                u.jsxs("div", {
                  className: "panels-container",
                  children: [
                    u.jsxs("div", {
                      className: "panel left-panel",
                      children: [
                        u.jsxs("div", {
                          className: "content",
                          children: [
                            u.jsx("h3", { children: "New to our community ?" }),
                            u.jsx("p", {
                              children:
                                "Discover a world of possibilities! Join us and explore a vibrant community where ideas flourish and connections thrive.",
                            }),
                            u.jsx("button", {
                              className: "btn transparent",
                              id: "sign-up-btn",
                              ref: l,
                              children: "Sign up",
                            }),
                          ],
                        }),
                        u.jsx("img", {
                          src: "https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png",
                          className: "image",
                          alt: "",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "panel right-panel",
                      children: [
                        u.jsxs("div", {
                          className: "content",
                          children: [
                            u.jsx("h3", {
                              children: "One of Our Valued Members",
                            }),
                            u.jsx("p", {
                              children:
                                "Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!",
                            }),
                            u.jsx("button", {
                              className: "btn transparent",
                              id: "sign-in-btn",
                              ref: i,
                              children: "Sign in",
                            }),
                          ],
                        }),
                        u.jsx("img", {
                          src: "https://i.ibb.co/nP8H853/Mobile-login-rafiki.png",
                          className: "image",
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
    })
  );
}
function U2() {
  const e = C.useRef(null),
    { user: t } = fr(),
    [n, r] = C.useState(null),
    [l, i] = C.useState(null),
    [o, a] = C.useState(null),
    s = C.useRef(null);
  async function c() {
    if (!e.current.classList.contains("lock")) {
      if (l != o)
        (s.current.innerHTML =
          "Make sure your new password matches the confirm password."),
          (s.current.style.color = "red");
      else {
        const d = { "Content-Type": "application/json", passwordUpdate: !0 },
          f = JSON.stringify({ owner: t.userName, oldPass: n, newPass: o });
        let p = await fetch("/update", { method: "POST", headers: d, body: f });
        a(""),
          r(""),
          i(""),
          (await p.json()).success
            ? ((s.current.innerHTML = "Password was changed succesfully"),
              (s.current.style.color = "lightgreen"))
            : ((s.current.innerHTML = "Old password was incorrect."),
              (s.current.style.color = "red"));
      }
      (s.current.style.display = "block"), e.current.classList.add("lock");
    }
  }
  return u.jsxs("div", {
    className: "passowrd-container-main",
    children: [
      u.jsx("div", {
        className: "Password-header",
        children: u.jsx("h1", { children: "Password" }),
      }),
      u.jsx("br", {}),
      u.jsxs("div", {
        className: "Password-container",
        children: [
          u.jsx("label", {
            htmlFor: "oldPassword",
            children: "Current Password - ",
          }),
          u.jsx("input", {
            type: "Password",
            id: "oldPassword",
            placeholder: "Password",
            value: n,
            onChange: (d) => {
              r(d.target.value),
                o && l && n && e.current.classList.remove("lock");
            },
          }),
        ],
      }),
      u.jsx("br", {}),
      u.jsxs("div", {
        className: "Password-container",
        children: [
          u.jsx("label", {
            htmlFor: "newPassword",
            children: "New Password - ",
          }),
          u.jsx("input", {
            type: "Password",
            id: "newPassword",
            placeholder: "Password",
            value: l,
            onChange: (d) => {
              i(d.target.value),
                o && l && n && e.current.classList.remove("lock");
            },
          }),
        ],
      }),
      u.jsx("br", {}),
      u.jsxs("div", {
        className: "Password-container",
        children: [
          u.jsx("label", {
            htmlFor: "cnfPassword",
            children: "Re-Enter Password - ",
          }),
          u.jsx("input", {
            type: "Password",
            id: "cnfPassword",
            placeholder: "Password",
            value: o,
            onChange: (d) => {
              a(d.target.value),
                o && l && n && e.current.classList.remove("lock");
            },
          }),
          u.jsx("br", {}),
          u.jsx("p", {
            ref: s,
            style: { margin: "0 0 6px 0", display: "none" },
            children: "Make sure your old password is correct",
          }),
          u.jsx("div", {
            className: "Password-submit lock",
            onClick: c,
            ref: e,
            children: u.jsx("button", { type: "submit", children: "Submit" }),
          }),
        ],
      }),
    ],
  });
}
function I2() {
  const { user: e, setUser: t } = fr(),
    n = C.useRef(null),
    [r, l] = C.useState(e.userName),
    [i, o] = C.useState(e.email),
    [a, s] = C.useState(!1);
  async function c() {
    if (n.current.classList.contains("lock")) return;
    const d = { "Content-Type": "application/json" };
    e.userName != r && (d.usernameupdate = !0),
      e.email != i && (d.emailupdate = !0);
    const f = JSON.stringify({ owner: e.userName, userName: r, email: i }),
      S = await (
        await fetch("/update", { method: "POST", headers: d, body: f })
      ).json();
    S.success
      ? t((w) => ({ ...w, userName: r, email: i }))
      : S.userExist && (s(S.userExist), l(e.userName)),
      n.current.classList.add("lock");
  }
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("div", {
        className: "account-content-header",
        children: u.jsx("h1", { children: "Account" }),
      }),
      u.jsxs("div", {
        className: "account-content-inner",
        children: [
          u.jsx("label", { htmlFor: "name", children: "User Name" }),
          u.jsx("input", {
            type: "text",
            id: "name",
            value: r,
            onChange: (d) => {
              l(d.target.value), n.current.classList.remove("lock");
            },
          }),
        ],
      }),
      u.jsxs("div", {
        className: "account-content-inner",
        children: [
          u.jsx("label", { htmlFor: "email", children: "Email Address" }),
          u.jsx("input", {
            type: "email",
            id: "email",
            value: i,
            onChange: (d) => {
              o(d.target.value), n.current.classList.remove("lock");
            },
          }),
        ],
      }),
      a &&
        u.jsx("p", {
          style: { color: "red", margin: "0 0 -20px 0" },
          children: "UserName Already exist",
        }),
      u.jsx("div", {
        className: "Password-submit lock",
        onClick: c,
        ref: n,
        children: u.jsx("button", { children: "Submit" }),
      }),
    ],
  });
}
function A2() {
  const { user: e } = fr(),
    { navigator: t } = ws(),
    [n, r] = C.useState(!0);
  return (
    C.useEffect(() => {
      (!e.userName || !e.email) && t("/login");
    }, []),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx("nav", {
          className: "index navbar",
          children: u.jsxs("div", {
            className: "index navbar-container",
            children: [
              u.jsx("div", {
                className: "index navbar-inner-left",
                children: u.jsx(xn, {
                  to: "/",
                  className: "index website",
                  children: "Quick Link",
                }),
              }),
              u.jsx("div", {
                className: "index navbar-inner-right",
                children: u.jsxs("ul", {
                  className: "dashboard-nav-right",
                  children: [
                    u.jsx("li", {
                      children: u.jsx(xn, {
                        to: "/dashboard",
                        children: "Your Links",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(xn, {
                        to: "/dashboard",
                        children: "Generate",
                      }),
                    }),
                    u.jsx("li", {
                      className: "dashboard-pfp",
                      onClick: () => {
                        t("/account");
                      },
                      children: u.jsx("i", {
                        className: "bx bx-user",
                        style: {
                          fontSize: "larger",
                          borderRadius: "50%",
                          padding: "10px",
                          background: "rgba(105, 105, 105, 0.4)",
                        },
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        u.jsx("div", {
          className: "account main-div",
          children: u.jsxs("div", {
            className: "account main-container",
            children: [
              u.jsx("div", {
                className: "account-selection",
                children: u.jsxs("ul", {
                  className: "account-selection-inner",
                  style: { cursor: "pointer" },
                  children: [
                    u.jsx("li", {
                      className: `${n && "selection-selected"}`,
                      onClick: () => {
                        r(!0);
                      },
                      children: "Settings",
                    }),
                    u.jsx("li", {
                      className: `${!n && "selection-selected"}`,
                      onClick: () => {
                        r(!1);
                      },
                      children: "Password",
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className: "account-content",
                children: u.jsxs("div", {
                  className: "account-content-container",
                  children: [n && u.jsx(I2, {}), !n && u.jsx(U2, {})],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const B2 = n2(
  ga(
    u.jsxs(Dn, {
      path: "/",
      element: u.jsx(S2, {}),
      children: [
        u.jsx(Dn, { index: !0, element: u.jsx(O2, {}) }),
        u.jsx(Dn, { path: "/login/", element: u.jsx(F2, {}) }),
        u.jsx(Dn, { path: "/dashboard", element: u.jsx(Xf, {}) }),
        u.jsx(Dn, { path: "/account/", element: u.jsx(A2, {}) }),
      ],
    })
  )
);
wo.createRoot(document.getElementById("root")).render(
  u.jsx(yc.StrictMode, {
    children: u.jsx(Qf, { children: u.jsx(d2, { router: B2 }) }),
  })
);
