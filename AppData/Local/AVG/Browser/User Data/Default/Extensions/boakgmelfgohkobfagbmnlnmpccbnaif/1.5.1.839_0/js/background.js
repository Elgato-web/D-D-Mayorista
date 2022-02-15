var background = function(e) {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    function r(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var i = 1e3, o = 6e4, a = 36e5, s = 24 * a, c = function(e, t) {
        t = t || {};
        var n, r, c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return 315576e5 * n;

                      case "weeks":
                      case "week":
                      case "w":
                        return 6048e5 * n;

                      case "days":
                      case "day":
                      case "d":
                        return n * s;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * a;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * o;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * i;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? (n = e, (r = Math.abs(n)) >= s ? l(n, r, s, "day") : r >= a ? l(n, r, a, "hour") : r >= o ? l(n, r, o, "minute") : r >= i ? l(n, r, i, "second") : n + " ms") : function(e) {
            var t = Math.abs(e);
            return t >= s ? Math.round(e / s) + "d" : t >= a ? Math.round(e / a) + "h" : t >= o ? Math.round(e / o) + "m" : t >= i ? Math.round(e / i) + "s" : e + "ms";
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
    function l(e, t, n, r) {
        var i = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (i ? "s" : "");
    }
    var u = r(function(e, t) {
        t.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e);
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (r++, "%c" === e && (i = r));
            }), t.splice(i, 0, n);
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug");
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }, t.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, t.storage = function() {
            try {
                return localStorage;
            } catch (e) {}
        }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        e.exports = function(e) {
            function t(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return n.colors[Math.abs(t) % n.colors.length];
            }
            function n(e) {
                let o;
                function a(...e) {
                    if (!a.enabled) return;
                    const t = a, r = Number(new Date()), i = r - (o || r);
                    t.diff = i, t.prev = o, t.curr = r, o = r, e[0] = n.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, i) => {
                        if ("%%" === r) return r;
                        s++;
                        const o = n.formatters[i];
                        if ("function" == typeof o) {
                            const n = e[s];
                            r = o.call(t, n), e.splice(s, 1), s--;
                        }
                        return r;
                    }), n.formatArgs.call(t, e), (t.log || n.log).apply(t, e);
                }
                return a.namespace = e, a.enabled = n.enabled(e), a.useColors = n.useColors(), a.color = t(e), 
                a.destroy = r, a.extend = i, "function" == typeof n.init && n.init(a), n.instances.push(a), 
                a;
            }
            function r() {
                const e = n.instances.indexOf(this);
                return -1 !== e && (n.instances.splice(e, 1), !0);
            }
            function i(e, t) {
                return n(this.namespace + (void 0 === t ? ":" : t) + e);
            }
            function o(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, n.disable = function() {
                const e = [ ...n.names.map(o), ...n.skips.map(o).map(e => "-" + e) ].join(",");
                return n.enable(""), e;
            }, n.enable = function(e) {
                let t;
                n.save(e), n.names = [], n.skips = [];
                const r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
                for (t = 0; t < i; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < n.instances.length; t++) {
                    const e = n.instances[t];
                    e.enabled = n.enabled(e.namespace);
                }
            }, n.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let t, r;
                for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
                for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
                return !1;
            }, n.humanize = c, Object.keys(e).forEach(t => {
                n[t] = e[t];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = t, 
            n.enable(n.load()), n;
        }(t);
        const {formatters: n} = e.exports;
        n.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        };
    });
    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    u.log, u.formatArgs, u.save, u.load, u.useColors, u.storage, u.colors;
    const p = u("browserStorage");
    function h(e, t) {
        return void 0 === t ? {
            type: e
        } : {
            type: e,
            value: t
        };
    }
    let f;
    !function(e) {
        e.Startup = "startup", e.GetState = "getState", e.StateChange = "stateChange", e.Installed = "installed", 
        e.Updated = "updated";
    }(f || (f = {}));
    const g = () => h(f.Installed), v = () => h(f.Startup), m = e => h(f.Updated, {
        previousVersion: e
    }), w = new class {
        constructor() {
            d(this, "store", void 0);
        }
        setStore(e) {
            this.store = e;
        }
        dispatch(e) {
            return this.store.dispatch(e);
        }
        getState() {
            return this.store.getState();
        }
    }();
    var y = Array.isArray, b = Object.keys, C = Object.prototype.hasOwnProperty, S = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
            var r, i, o, a = y(t), s = y(n);
            if (a && s) {
                if ((i = t.length) != n.length) return !1;
                for (r = i; 0 != r--; ) if (!e(t[r], n[r])) return !1;
                return !0;
            }
            if (a != s) return !1;
            var c = t instanceof Date, l = n instanceof Date;
            if (c != l) return !1;
            if (c && l) return t.getTime() == n.getTime();
            var u = t instanceof RegExp, d = n instanceof RegExp;
            if (u != d) return !1;
            if (u && d) return t.toString() == n.toString();
            var p = b(t);
            if ((i = p.length) !== b(n).length) return !1;
            for (r = i; 0 != r--; ) if (!C.call(n, p[r])) return !1;
            for (r = i; 0 != r--; ) if (!e(t[o = p[r]], n[o])) return !1;
            return !0;
        }
        return t != t && n != n;
    };
    const A = u("statePersist"), E = "_state";
    class x {
        constructor(e, t) {
            d(this, "browserStorage", void 0), d(this, "paths", void 0);
            const n = [];
            Object.keys(t).forEach(function(e) {
                t[e].forEach(function(t) {
                    t.includes(".") ? A("no support for persisting nested properties: %s:%s", e, t) : n.push({
                        root: e,
                        subpath: t
                    });
                });
            }), this.browserStorage = e, this.paths = n;
        }
        load() {
            return this.browserStorage.get(E) || null;
        }
        clear() {
            this.browserStorage.set(E, null);
        }
        buildMiddleware() {
            let e = null;
            return t => n => r => {
                let i;
                const o = n(r), a = t.getState();
                return a !== e && (i = this.paths.reduce((e, t) => (e[t.root] = e[t.root] || {}, 
                e[t.root][t.subpath] = a[t.root][t.subpath], e), {})), e = a, !i || S(this.browserStorage.get(E), i) ? o : (this.browserStorage.set(E, i), 
                o);
            };
        }
    }
    var O = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }(), _ = {
        INIT: "@@redux/INIT" + Math.random().toString(36).substring(7).split("").join("."),
        REPLACE: "@@redux/REPLACE" + Math.random().toString(36).substring(7).split("").join(".")
    }, I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, N = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function V(e, t, n) {
        var r;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(V)(e, t);
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var i = e, o = t, a = [], s = a, c = !1;
        function l() {
            s === a && (s = a.slice());
        }
        function u() {
            if (c) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return o;
        }
        function d(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (c) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return l(), s.push(e), function() {
                if (t) {
                    if (c) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    t = !1, l();
                    var n = s.indexOf(e);
                    s.splice(n, 1);
                }
            };
        }
        function p(e) {
            if (!function(e) {
                if ("object" !== (void 0 === e ? "undefined" : I(e)) || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (c) throw new Error("Reducers may not dispatch actions.");
            try {
                c = !0, o = i(o, e);
            } finally {
                c = !1;
            }
            for (var t = a = s, n = 0; n < t.length; n++) (0, t[n])();
            return e;
        }
        return p({
            type: _.INIT
        }), (r = {
            dispatch: p,
            subscribe: d,
            getState: u,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                i = e, p({
                    type: _.REPLACE
                });
            }
        })[O] = function() {
            var e, t = d;
            return (e = {
                subscribe: function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : I(e)) || null === e) throw new TypeError("Expected the observer to be an object.");
                    function n() {
                        e.next && e.next(u());
                    }
                    return n(), {
                        unsubscribe: t(n)
                    };
                }
            })[O] = function() {
                return this;
            }, e;
        }, r;
    }
    function G(e, t) {
        var n = t && t.type;
        return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    var L = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.repeat = function(e, t) {
            return new Array(t + 1).join(e);
        }, r = t.pad = function(e, t) {
            return n("0", t - e.toString().length) + e;
        };
        t.formatTime = function(e) {
            return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3);
        }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date;
    });
    n(L), L.repeat, L.pad, L.formatTime, L.timer;
    var R = r(function(e, n) {
        e.exports = function(e) {
            var n, r, i = [];
            function o(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
            }
            function a(e, t) {
                Object.defineProperty(this, "kind", {
                    value: e,
                    enumerable: !0
                }), t && t.length && Object.defineProperty(this, "path", {
                    value: t,
                    enumerable: !0
                });
            }
            function s(e, t, n) {
                s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "rhs", {
                    value: n,
                    enumerable: !0
                });
            }
            function c(e, t) {
                c.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function l(e, t) {
                l.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function u(e, t, n) {
                u.super_.call(this, "A", e), Object.defineProperty(this, "index", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "item", {
                    value: n,
                    enumerable: !0
                });
            }
            function d(e, t, n) {
                var r = e.slice((n || t) + 1 || e.length);
                return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e;
            }
            function p(e) {
                var t = typeof e;
                return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
            }
            function h(t, n, r, i, o, a, f) {
                var g = (o = o || []).slice(0);
                if (void 0 !== a) {
                    if (i) {
                        if ("function" == typeof i && i(g, a)) return;
                        if ("object" == typeof i) {
                            if (i.prefilter && i.prefilter(g, a)) return;
                            if (i.normalize) {
                                var v = i.normalize(g, a, t, n);
                                v && (t = v[0], n = v[1]);
                            }
                        }
                    }
                    g.push(a);
                }
                "regexp" === p(t) && "regexp" === p(n) && (t = t.toString(), n = n.toString());
                var m = typeof t, w = typeof n;
                if ("undefined" === m) "undefined" !== w && r(new c(g, n)); else if ("undefined" === w) r(new l(g, t)); else if (p(t) !== p(n)) r(new s(g, t, n)); else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0) r(new s(g, t, n)); else if ("object" === m && null !== t && null !== n) {
                    if ((f = f || []).indexOf(t) < 0) {
                        if (f.push(t), Array.isArray(t)) {
                            var y;
                            for (t.length, y = 0; y < t.length; y++) y >= n.length ? r(new u(g, y, new l(e, t[y]))) : h(t[y], n[y], r, i, g, y, f);
                            for (;y < n.length; ) r(new u(g, y, new c(e, n[y++])));
                        } else {
                            var b = Object.keys(t), C = Object.keys(n);
                            b.forEach(function(o, a) {
                                var s = C.indexOf(o);
                                s >= 0 ? (h(t[o], n[o], r, i, g, o, f), C = d(C, s)) : h(t[o], e, r, i, g, o, f);
                            }), C.forEach(function(t) {
                                h(e, n[t], r, i, g, t, f);
                            });
                        }
                        f.length = f.length - 1;
                    }
                } else t !== n && ("number" === m && isNaN(t) && isNaN(n) || r(new s(g, t, n)));
            }
            function f(t, n, r, i) {
                return i = i || [], h(t, n, function(e) {
                    e && i.push(e);
                }, r), i.length ? i : e;
            }
            function g(e, t, n) {
                if (e && t && n && n.kind) {
                    for (var r = e, i = -1, o = n.path ? n.path.length - 1 : 0; ++i < o; ) void 0 === r[n.path[i]] && (r[n.path[i]] = "number" == typeof n.path[i] ? [] : {}), 
                    r = r[n.path[i]];
                    switch (n.kind) {
                      case "A":
                        !function e(t, n, r) {
                            if (r.path && r.path.length) {
                                var i, o = t[n], a = r.path.length - 1;
                                for (i = 0; i < a; i++) o = o[r.path[i]];
                                switch (r.kind) {
                                  case "A":
                                    e(o[r.path[i]], r.index, r.item);
                                    break;

                                  case "D":
                                    delete o[r.path[i]];
                                    break;

                                  case "E":
                                  case "N":
                                    o[r.path[i]] = r.rhs;
                                }
                            } else switch (r.kind) {
                              case "A":
                                e(t[n], r.index, r.item);
                                break;

                              case "D":
                                t = d(t, n);
                                break;

                              case "E":
                              case "N":
                                t[n] = r.rhs;
                            }
                            return t;
                        }(n.path ? r[n.path[i]] : r, n.index, n.item);
                        break;

                      case "D":
                        delete r[n.path[i]];
                        break;

                      case "E":
                      case "N":
                        r[n.path[i]] = n.rhs;
                    }
                }
            }
            return n = "object" == typeof t && t ? t : "undefined" != typeof window ? window : {}, 
            (r = n.DeepDiff) && i.push(function() {
                void 0 !== r && n.DeepDiff === f && (n.DeepDiff = r, r = e);
            }), o(s, a), o(c, a), o(l, a), o(u, a), Object.defineProperties(f, {
                diff: {
                    value: f,
                    enumerable: !0
                },
                observableDiff: {
                    value: h,
                    enumerable: !0
                },
                applyDiff: {
                    value: function(e, t, n) {
                        e && t && h(e, t, function(r) {
                            n && !n(e, t, r) || g(e, t, r);
                        });
                    },
                    enumerable: !0
                },
                applyChange: {
                    value: g,
                    enumerable: !0
                },
                revertChange: {
                    value: function(e, t, n) {
                        if (e && t && n && n.kind) {
                            var r, i, o = e;
                            for (i = n.path.length - 1, r = 0; r < i; r++) void 0 === o[n.path[r]] && (o[n.path[r]] = {}), 
                            o = o[n.path[r]];
                            switch (n.kind) {
                              case "A":
                                !function e(t, n, r) {
                                    if (r.path && r.path.length) {
                                        var i, o = t[n], a = r.path.length - 1;
                                        for (i = 0; i < a; i++) o = o[r.path[i]];
                                        switch (r.kind) {
                                          case "A":
                                            e(o[r.path[i]], r.index, r.item);
                                            break;

                                          case "D":
                                          case "E":
                                            o[r.path[i]] = r.lhs;
                                            break;

                                          case "N":
                                            delete o[r.path[i]];
                                        }
                                    } else switch (r.kind) {
                                      case "A":
                                        e(t[n], r.index, r.item);
                                        break;

                                      case "D":
                                      case "E":
                                        t[n] = r.lhs;
                                        break;

                                      case "N":
                                        t = d(t, n);
                                    }
                                    return t;
                                }(o[n.path[r]], n.index, n.item);
                                break;

                              case "D":
                              case "E":
                                o[n.path[r]] = n.lhs;
                                break;

                              case "N":
                                delete o[n.path[r]];
                            }
                        }
                    },
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return void 0 !== r;
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return i && (i.forEach(function(e) {
                            e();
                        }), i = null), f;
                    },
                    enumerable: !0
                }
            }), f;
        }();
    }), F = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n, o) {
            var a = (0, r.default)(e, t);
            try {
                o ? n.groupCollapsed("diff") : n.group("diff");
            } catch (e) {
                n.log("diff");
            }
            a ? a.forEach(function(e) {
                var t = e.kind, r = function(e) {
                    var t = e.kind, n = e.path, r = e.lhs, i = e.rhs, o = e.index, a = e.item;
                    switch (t) {
                      case "E":
                        return [ n.join("."), r, "→", i ];

                      case "N":
                        return [ n.join("."), i ];

                      case "D":
                        return [ n.join(".") ];

                      case "A":
                        return [ n.join(".") + "[" + o + "]", a ];

                      default:
                        return [];
                    }
                }(e);
                n.log.apply(n, [ "%c " + i[t].text, function(e) {
                    return "color: " + i[e].color + "; font-weight: bold";
                }(t) ].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)));
            }) : n.log("—— no diff ——");
            try {
                n.groupEnd();
            } catch (e) {
                n.log("—— diff end —— ");
            }
        };
        var n, r = (n = R) && n.__esModule ? n : {
            default: n
        }, i = {
            E: {
                color: "#2196F3",
                text: "CHANGED:"
            },
            N: {
                color: "#4CAF50",
                text: "ADDED:"
            },
            D: {
                color: "#F44336",
                text: "DELETED:"
            },
            A: {
                color: "#2196F3",
                text: "ARRAY:"
            }
        };
        e.exports = t.default;
    });
    n(F);
    var M = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.printBuffer = function(e, t) {
            var n = t.logger, r = t.actionTransformer, a = t.titleFormatter, s = void 0 === a ? function(e) {
                var t = e.timestamp, n = e.duration;
                return function(e, r, i) {
                    var o = [ "action" ];
                    return o.push("%c" + String(e.type)), t && o.push("%c@ " + r), n && o.push("%c(in " + i.toFixed(2) + " ms)"), 
                    o.join(" ");
                };
            }(t) : a, c = t.collapsed, l = t.colors, u = t.level, d = t.diff, p = void 0 === t.titleFormatter;
            e.forEach(function(a, h) {
                var f = a.started, g = a.startedTime, v = a.action, m = a.prevState, w = a.error, y = a.took, b = a.nextState, C = e[h + 1];
                C && (b = C.prevState, y = C.started - f);
                var S = r(v), A = "function" == typeof c ? c(function() {
                    return b;
                }, v, a) : c, E = (0, L.formatTime)(g), x = l.title ? "color: " + l.title(S) + ";" : "", O = [ "color: gray; font-weight: lighter;" ];
                O.push(x), t.timestamp && O.push("color: gray; font-weight: lighter;"), t.duration && O.push("color: gray; font-weight: lighter;");
                var _ = s(S, E, y);
                try {
                    A ? l.title && p ? n.groupCollapsed.apply(n, [ "%c " + _ ].concat(O)) : n.groupCollapsed(_) : l.title && p ? n.group.apply(n, [ "%c " + _ ].concat(O)) : n.group(_);
                } catch (e) {
                    n.log(_);
                }
                var I = o(u, S, [ m ], "prevState"), N = o(u, S, [ S ], "action"), V = o(u, S, [ w, m ], "error"), G = o(u, S, [ b ], "nextState");
                I && (l.prevState ? n[I]("%c prev state", "color: " + l.prevState(m) + "; font-weight: bold", m) : n[I]("prev state", m)), 
                N && (l.action ? n[N]("%c action    ", "color: " + l.action(S) + "; font-weight: bold", S) : n[N]("action    ", S)), 
                w && V && (l.error ? n[V]("%c error     ", "color: " + l.error(w, m) + "; font-weight: bold;", w) : n[V]("error     ", w)), 
                G && (l.nextState ? n[G]("%c next state", "color: " + l.nextState(b) + "; font-weight: bold", b) : n[G]("next state", b)), 
                d && (0, i.default)(m, b, n, A);
                try {
                    n.groupEnd();
                } catch (e) {
                    n.log("—— log end ——");
                }
            });
        };
        var r, i = (r = F) && r.__esModule ? r : {
            default: r
        };
        function o(e, t, r, i) {
            switch (void 0 === e ? "undefined" : n(e)) {
              case "object":
                return "function" == typeof e[i] ? e[i].apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)) : e[i];

              case "function":
                return e(t);

              default:
                return e;
            }
        }
    });
    n(M), M.printBuffer;
    var P = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            level: "log",
            logger: console,
            logErrors: !0,
            collapsed: void 0,
            predicate: void 0,
            duration: !1,
            timestamp: !0,
            stateTransformer: function(e) {
                return e;
            },
            actionTransformer: function(e) {
                return e;
            },
            errorTransformer: function(e) {
                return e;
            },
            colors: {
                title: function() {
                    return "inherit";
                },
                prevState: function() {
                    return "#9E9E9E";
                },
                action: function() {
                    return "#03A9F4";
                },
                nextState: function() {
                    return "#4CAF50";
                },
                error: function() {
                    return "#F20404";
                }
            },
            diff: !1,
            diffPredicate: void 0,
            transformer: void 0
        }, e.exports = t.default;
    });
    n(P);
    var k = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logger = t.createLogger = t.defaults = void 0;
        var n, r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, i = (n = P) && n.__esModule ? n : {
            default: n
        };
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r({}, i.default, e), n = t.logger, o = t.stateTransformer, a = t.errorTransformer, s = t.predicate, c = t.logErrors, l = t.diffPredicate;
            if (void 0 === n) return function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
            function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            var u = [];
            return function(e) {
                var n = e.getState;
                return function(e) {
                    return function(i) {
                        if ("function" == typeof s && !s(n, i)) return e(i);
                        var d = {};
                        u.push(d), d.started = L.timer.now(), d.startedTime = new Date(), d.prevState = o(n()), 
                        d.action = i;
                        var p = void 0;
                        if (c) try {
                            p = e(i);
                        } catch (e) {
                            d.error = a(e);
                        } else p = e(i);
                        d.took = L.timer.now() - d.started, d.nextState = o(n());
                        var h = t.diff && "function" == typeof l ? l(n, i) : t.diff;
                        if ((0, M.printBuffer)(u, r({}, t, {
                            diff: h
                        })), u.length = 0, d.error) throw d.error;
                        return p;
                    };
                };
            };
        }
        var a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, n = e.getState;
            if ("function" == typeof t || "function" == typeof n) return o()({
                dispatch: t,
                getState: n
            });
            console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
        };
        t.defaults = i.default, t.createLogger = o, t.logger = a, t.default = a;
    });
    n(k), k.logger;
    var j = k.createLogger, D = (k.defaults, n(r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t) {
                return function(n) {
                    return function(r) {
                        var i = t.getState(), o = n(r), a = t.getState();
                        return e(i, a, r, t.dispatch), o;
                    };
                };
            };
        };
    })));
    const U = u("store");
    function T(e, t) {
        S(e, t) || chrome.runtime.sendMessage({
            type: f.StateChange,
            value: {
                state: t
            }
        }, function() {
            chrome.runtime.lastError;
        });
    }
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = window.browser);
    const H = new class {
        constructor() {
            d(this, "cache", void 0), d(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(e) {
            return new Promise(t => {
                chrome && chrome.storage || t(), this.usingStorage = !0, chrome.storage.local.get(e || null, e => {
                    this.cache = e, t();
                });
            });
        }
        get(e) {
            return this.cache[e];
        }
        set(e, t) {
            null == t || void 0 === t ? (this.usingStorage && chrome.storage.local.remove(e, () => {
                chrome.runtime.lastError && p('could not remove key "%s" from browser storage (%O)', e, chrome.runtime.lastError);
            }), delete this.cache[e]) : (this.usingStorage && chrome.storage.local.set({
                [e]: t
            }, () => {
                chrome.runtime.lastError && p('could not set key "%s" in browser storage (%O)', e, chrome.runtime.lastError);
            }), this.cache[e] = t);
        }
    }(), B = u("bgLdr"), z = u("runtimeInfo");
    let q, W;
    !function(e) {
        e.Win = "win", e.Mac = "mac", e.Unknown = "unknown";
    }(q || (q = {})), function(e) {
        e.Chrome = "chrome", e.Firefox = "firefox", e.Other = "other";
    }(W || (W = {}));
    const $ = new class {
        constructor(e) {
            d(this, "_brand", void 0), d(this, "_extensionVersion", void 0), d(this, "_permissions", void 0), 
            d(this, "_optionalPermissions", void 0), d(this, "_contentScriptPaths", void 0), 
            d(this, "_browser", void 0), d(this, "_name", void 0), d(this, "_shortName", void 0), 
            d(this, "_os", void 0), e.short_name || z("short_name not defined in manifest"), 
            this._brand = e.short_name, this._extensionVersion = e.version, this._permissions = e.permissions, 
            this._optionalPermissions = e.optional_permissions || [], this._name = e.name, this._shortName = e.short_name, 
            this._contentScriptPaths = this.extractPathsFromContentScripts(e.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = W.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = W.Firefox : this._browser = W.Other, 
            z("extension version: %s", this._extensionVersion);
        }
        get brand() {
            if (!this._brand) throw new Error("Invalid runtime info brand value.");
            return this._brand;
        }
        get extensionVersion() {
            return this._extensionVersion;
        }
        get permissions() {
            return this._permissions;
        }
        get optionalPermissions() {
            return this._optionalPermissions;
        }
        get contentScriptPaths() {
            return this._contentScriptPaths;
        }
        get os() {
            switch (this._os) {
              case q.Mac:
              case q.Win:
                return this._os;

              default:
                return q.Unknown;
            }
        }
        get browser() {
            return this._browser;
        }
        get name() {
            return this._name;
        }
        get shortName() {
            return this._shortName;
        }
        handleGetPlatformInfo(e) {
            e && (this._os = e.os);
        }
        extractPathsFromContentScripts(e) {
            if (!e) return [];
            const t = e.reduce(function(e, t) {
                return t.js.forEach(t => {
                    const n = t.split("/");
                    e.add(n[n.length - 1]);
                }), e;
            }, new Set());
            return Array.from(t);
        }
    }(chrome.runtime.getManifest());
    let K, Y;
    chrome.runtime.getPlatformInfo($.handleGetPlatformInfo.bind($)), u("features"), 
    function(e) {
        e.Proxy = "proxy", e.Vpn = "vpn", e.WebRtc = "webRtc", e.TabKiller = "tabKiller", 
        e.Shepherd = "shepherd", e.Analytics = "analytics", e.Spc = "spc", e.Notifications = "notifications";
    }(K || (K = {})), function(e) {
        e.ApiCompatibilityResolved = "vpn.apiCompatibilityResolved", e.ActiveGatewayUpdated = "vpn.activeGatewayUpdated", 
        e.GatewaysUpdated = "vpn.gatewaysUpdated", e.LastErrorUpdated = "vpn.lastErrorUpdated", 
        e.ErrorOccurred = "vpn.ErrorOccurred", e.VpnApiReturnedError = "vpn.VpnApiReturnedError", 
        e.LicenseInfoUpdated = "vpn.licenseInfoUpdated", e.VpnStatusUpdated = "vpn.vpnStatusUpdated", 
        e.Connect = "vpn.connect", e.Disconnect = "vpn.disconnect", e.OptimalGatewayUpdated = "vpn.optimalGatewayUpdated", 
        e.SelectGateway = "vpn.selectGateway", e.IpAddressChanged = "vpn.ipAddressChanged", 
        e.ReconnectingToAnotherGatewayStatusChanged = "vpn.reconnectingToAnotherGatewayStatusChanged", 
        e.HandleNetworkConnectivityChange = "vpn.handleNetworkConnectivityChange", e.SetBrowserApiAvailability = "vpn.setBrowserApiAvailability", 
        e.SetIsInitialized = "vpn.setIsInitialized", e.SetNativeMessagingHostFound = "vpn.setNativeMessagingHostFound", 
        e.VpnClientApiVersionUpdated = "vpn.VpnClientApiVersionUpdated", e.ShowLicenseUpgradePage = "vpn.showLicenseUpgradePage";
    }(Y || (Y = {}));
    const J = {
        activeGatewayUpdated: e => h(Y.ActiveGatewayUpdated, e),
        apiCompatibilityResolved: e => h(Y.ApiCompatibilityResolved, e),
        connect: () => h(Y.Connect),
        disconnect: () => h(Y.Disconnect),
        errorOccurred: e => h(Y.ErrorOccurred, e),
        gatewaySelected: e => h(Y.SelectGateway, e),
        gatewaysUpdated: e => h(Y.GatewaysUpdated, e),
        handleNetworkConnectivityChange: e => h(Y.HandleNetworkConnectivityChange, e),
        ipAddressChanged: e => h(Y.IpAddressChanged, e),
        lastErrorUpdated: e => h(Y.LastErrorUpdated, e),
        licenseInfoUpdated: e => h(Y.LicenseInfoUpdated, e),
        optimalGatewayUpdated: e => h(Y.OptimalGatewayUpdated, e),
        setBrowserApiAvailability: e => h(Y.SetBrowserApiAvailability, e),
        setIsInitialized: e => h(Y.SetIsInitialized, e),
        setNativeMessagingHostFound: e => h(Y.SetNativeMessagingHostFound, e),
        showLicenseUpgradePage: () => h(Y.ShowLicenseUpgradePage),
        statusUpdated: e => h(Y.VpnStatusUpdated, e),
        updateReconnectingToAnotherGatewayStatus: e => h(Y.ReconnectingToAnotherGatewayStatusChanged, e),
        vpnApiReturnedError: e => h(Y.VpnApiReturnedError, e),
        vpnClientApiVersionUpdated: e => h(Y.VpnClientApiVersionUpdated, e)
    };
    function Z(e, ...t) {
        return Object.assign.apply(this, [].concat({}, e, ...t));
    }
    function Q(e) {
        return chrome.i18n.getMessage(e);
    }
    function X() {
        return chrome.i18n.getUILanguage().split("-")[0];
    }
    const ee = "optimal_unknown", te = 2;
    let ne, re, ie, oe, ae, se, ce, le, ue, de, pe, he, fe;
    var ge, ve;
    let me, we;
    !function(e) {
        e.Connect = "public.AvastSecureLine.Connect", e.ConnectToOptimal = "public.AvastSecureLine.ConnectToOptimal", 
        e.Disconnect = "public.AvastSecureLine.Disconnect", e.GetApiVersion = "public.AvastSecureLine.GetApiVersion", 
        e.GetOptimalGateway = "public.AvastSecureLine.GetOptimalGateway", e.GetState = "public.AvastSecureLine.GetState", 
        e.OnErrorOccurred = "public.AvastSecureLine.OnErrorOccurred", e.OnStateChanged = "public.AvastSecureLine.OnStateChanged", 
        e.SetLanguage = "public.AvastSecureLine.SetLanguage", e.ShowNag = "public.AvastSecureLine.Ui.ShowNag";
    }(ne || (ne = {})), function(e) {
        e.Connect = "public.AVGSecureVPN.Connect", e.ConnectToOptimal = "public.AVGSecureVPN.ConnectToOptimal", 
        e.Disconnect = "public.AVGSecureVPN.Disconnect", e.GetApiVersion = "public.AVGSecureVPN.GetApiVersion", 
        e.GetOptimalGateway = "public.AVGSecureVPN.GetOptimalGateway", e.GetState = "public.AVGSecureVPN.GetState", 
        e.OnErrorOccurred = "public.AVGSecureVPN.OnErrorOccurred", e.OnStateChanged = "public.AVGSecureVPN.OnStateChanged", 
        e.SetLanguage = "public.AVGSecureVPN.SetLanguage", e.ShowNag = "public.AVGSecureVPN.Ui.ShowNag";
    }(re || (re = {})), function(e) {
        e[e.VpnStatus = 1] = "VpnStatus", e[e.Gateways = 2] = "Gateways", e[e.LicenseInfo = 4] = "LicenseInfo", 
        e[e.ActiveGateway = 8] = "ActiveGateway", e[e.LastError = 32] = "LastError";
    }(ie || (ie = {})), function(e) {
        e.Connected = "connected", e.Connecting = "connecting", e.Reconnecting = "reconnecting", 
        e.Disconnected = "disconnected", e.Disconnecting = "disconnecting", e.Error = "error", 
        e.Initializing = "initializing";
    }(oe || (oe = {})), function(e) {
        e.Trial = "trial", e.Subscription = "subscription", e.Free = "free";
    }(ae || (ae = {})), function(e) {
        e.Valid = "valid", e.Expired = "expired", e.NoSubscription = "noSubscription", e.NoLicenseFile = "noLicenseFile", 
        e.Banned = "banned";
    }(se || (se = {})), function(e) {
        e.SecureVpn = "com.avg.vpn", e.SecureLine = "com.avast.vpn";
    }(ce || (ce = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/how-to-install", e.SecureLine = "https://extension.avastbrowser.com/vpn/how-to-install";
    }(le || (le = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/download", e.SecureLine = "https://extension.avastbrowser.com/vpn/download";
    }(ue || (ue = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/about", e.SecureLine = "https://extension.avastbrowser.com/vpn/about";
    }(de || (de = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/offer", e.SecureLine = "https://extension.avastbrowser.com/vpn/offer";
    }(pe || (pe = {})), function(e) {
        e.Compatible = "Compatible", e.ExtensionOld = "ExtensionOld", e.VpnClientOld = "VpnClientOld";
    }(he || (he = {})), function(e) {
        e.SetState = "setState", e.GetState = "getState", e.UpgradeNow = "upgradeNow";
    }(fe || (fe = {})), function(e) {
        e.Connection = "connection";
    }(ge || (ge = {})), function(e) {
        e.LicenseRefused = "licenseRefused", e.NoInternetConnection = "noInternetConnection", 
        e.LicenseExpired = "licenseExpired", e.ConnectionLimitReached = "connectionLimitReached", 
        e.DataLimitReached = "dataLimitReached", e.VpnNameBanned = "vpnNameBanned", e.PlatformNotAllowed = "platformNotAllowed", 
        e.LicenseBanned = "licenseBanned", e.AuthorizationFailed = "authorizationFailed", 
        e.LocationNotAllowed = "locationNotAllowed", e.InternalError = "internalError", 
        e.MissingMandatoryParameters = "missingMandatoryParameters", e.NoLicenseInAccount = "noLicenseInAccount";
    }(ve || (ve = {})), function(e) {
        e.Exception = "exception";
    }(me || (me = {}));
    class ye extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, ye);
        }
    }
    class be extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, be);
        }
    }
    class Ce extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, Ce);
        }
    }
    !function(e) {
        e.SetBrowserApiAvailability = "spc.setBrowserApiAvailability", e.SetSelectedGatewayId = "spc.SetSelectedGatewayId";
    }(we || (we = {}));
    const Se = {
        setBrowserApiAvailability: e => h(we.SetBrowserApiAvailability, e),
        setSelectedGatewayId: e => h(we.SetSelectedGatewayId, e)
    };
    let Ae, Ee;
    function xe(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case we.SetBrowserApiAvailability:
            return Z(e, {
                isBrowserApiAvailable: t.value
            });

          case we.SetSelectedGatewayId:
            return Z(e, {
                selectedGatewayId: t.value
            });

          case Y.ApiCompatibilityResolved:
            let r;
            const i = t.value;
            return i === he.ExtensionOld ? r = Ee.UpdateExtension : i === he.VpnClientOld && (r = Ee.UpdateVpnClient), 
            Z(e, {
                error: r
            });

          case Y.OptimalGatewayUpdated:
            {
                const n = t.value, r = {
                    spcVpnLocation: _e(n),
                    id: n.id
                };
                let i = [];
                return r && r.id === ee && i.push(r), i = i.concat(e.locations.map(e => {
                    let t;
                    return {
                        spcVpnLocation: t = e.id === n.id ? function(e) {
                            const t = {
                                name: "",
                                value: ""
                            };
                            return e && (e.id === ee ? (t.name = e.spcVpnLocation.name, t.value = e.spcVpnLocation.value) : (t.name = Q("optimal_location") + " (" + e.spcVpnLocation.name + ")", 
                            t.value = "optimal_" + e.spcVpnLocation.value)), t;
                        }(e) : e.spcVpnLocation,
                        id: e.id
                    };
                })), Z(e, {
                    locations: i,
                    optimalLocation: r
                });
            }

          case Y.GatewaysUpdated:
            {
                let n = [];
                const r = e.optimalLocation;
                return r && r.id === ee && n.push(r), n = n.concat(t.value.map(t => {
                    let n;
                    return {
                        spcVpnLocation: n = e.optimalLocation && t.id === e.optimalLocation.id ? _e(t) : Oe(t),
                        id: t.id
                    };
                })), Z(e, {
                    locations: n
                });
            }

          case Y.LicenseInfoUpdated:
            return Z(e, {
                expiresIn: function(e) {
                    let t;
                    if (e.status === se.Valid) {
                        if (e.type === ae.Trial) {
                            const n = Math.floor(Date.now() / 1e3);
                            t = Math.floor((e.expirationTimestamp - n) / 60 / 60 / 24);
                        }
                    } else t = e.status === se.Expired ? 0 : -1;
                    return t;
                }(t.value)
            });

          case Y.VpnStatusUpdated:
            return Z(e, {
                active: (n = t.value, n === oe.Connecting || n === oe.Reconnecting || n === oe.Connected)
            });

          case Y.SelectGateway:
            {
                const n = t.value;
                let r;
                const i = {
                    spcVpnLocation: r = e.optimalLocation && n.id === e.optimalLocation.id ? _e(n) : Oe(n),
                    id: n.id
                };
                return Z(e, {
                    location: i
                });
            }

          case Y.HandleNetworkConnectivityChange:
            return Z(e, {
                error: t.value ? null : Ee.Offline
            });

          case Y.SetNativeMessagingHostFound:
            return Z(e, {
                error: t.value ? null : Ee.InstallVpnClient
            });

          case Y.ErrorOccurred:
          case Y.VpnApiReturnedError:
            return Z(e, {
                error: t.value ? Ee.VpnClientError : null
            });
        }
        var n;
        return e;
    }
    function Oe(e) {
        const t = {
            name: "",
            value: ""
        };
        return e && (t.name = Ie(e), t.value = Ne(e)), t;
    }
    function _e(e) {
        const t = {
            name: "",
            value: ""
        };
        if (e) if (e.id === ee) t.name = Q("optimal_location"), t.value = "optimal_" + ee; else {
            const n = Ie(e), r = Ne(e);
            t.name = Q("optimal_location") + " (" + n + ")", t.value = "optimal_" + r;
        }
        return t;
    }
    function Ie(e) {
        return e.city.name + ", " + e.country.name;
    }
    function Ne(e) {
        return e.country.id + "_" + e.city.name;
    }
    !function(e) {
        e.SetState = "setState", e.GetState = "getState", e.UpgradeNow = "upgradeNow";
    }(Ae || (Ae = {})), function(e) {
        e.InstallVpnClient = "install_vpn_client", e.UpdateExtension = "update_extension", 
        e.UpdateVpnClient = "update_vpn_client", e.ReinstallVpnClient = "reinstall_vpn_client", 
        e.ReinstallBrowser = "reinstall_browser", e.Offline = "offline", e.VpnClientError = "vpn_client_error";
    }(Ee || (Ee = {}));
    const Ve = u("spc");
    class Ge {
        constructor() {
            d(this, "_secureBrowserApi", void 0);
        }
        static getSecureBrowserApi() {
            let e;
            return "SecureVpn" === $.brand ? e = chrome.avg : "SecureLine" === $.brand && (e = chrome.avast), 
            e;
        }
        init() {
            Ve("Spc.init()");
            const e = this.verifyBrowserApiAvailability();
            w.dispatch(Se.setBrowserApiAvailability(e)), e && (this._secureBrowserApi = Ge.getSecureBrowserApi(), 
            this._secureBrowserApi.onExtensionCall.addListener(this.onExtensionCall.bind(this)));
        }
        updateSpcState(e = !0) {
            const t = w.getState().spc, n = {
                active: t.active,
                location: t.location ? t.location.spcVpnLocation : null,
                locations: null,
                expires_in: t.expiresIn,
                error: t.error
            };
            void 0 === n.expires_in && delete n.expires_in, n.error || delete n.error, e ? n.locations = t.locations.map(e => e.spcVpnLocation) : delete n.locations, 
            Ve("Vpn.updateSpcState(): Sending state %O", n), this._secureBrowserApi.browserCall("spc", "state", n);
        }
        verifyBrowserApiAvailability() {
            let e = !1;
            const t = e => `ERROR: ${e} is not defined`;
            let n, r;
            return "SecureVpn" === $.brand ? (n = chrome.avg, r = "chrome.avg") : "SecureLine" === $.brand && (n = chrome.avast, 
            r = "chrome.avast"), "object" != typeof n ? Ve(t(r)) : "function" != typeof n.browserCall ? Ve(t(r + ".browserCall")) : "object" != typeof n.onExtensionCall ? Ve(t(r + ".onExtensionCall")) : "function" != typeof n.onExtensionCall.addListener ? Ve(t(r + ".onExtensionCall.addListener")) : "SecureLine" === $.brand && "function" != typeof n.checkAVInstalled ? Ve(t(r + ".checkAVInstalled")) : e = !0, 
            e;
        }
        onExtensionCall(e, t, n) {
            if (Ve("Vpn.onExtensionCall(): caller = %O, method = %O, args = %O", e, t, n), "spc" !== e.browserPartId) return;
            const r = w.getState();
            switch (t) {
              case Ae.SetState:
                if (n.active) w.dispatch(J.connect()); else {
                    const e = r.vpn.vpnStatus;
                    e !== oe.Connecting && e !== oe.Connected && e !== oe.Reconnecting || w.dispatch(J.disconnect());
                }
                if (n.location) {
                    const e = n.location.name;
                    Ve("SPC selected new location: %s", e);
                    const t = r.spc.locations.find(t => t.spcVpnLocation.name === e);
                    if (!t) throw new Error(`Gateway ${e} not found.`);
                    {
                        const e = r.vpn.gateways.find(e => e.id === t.id);
                        if (!e) throw new Error(`Gateway with id ${e.id} not found.`);
                        w.dispatch(Se.setSelectedGatewayId(e.id)), w.dispatch(J.gatewaySelected(e));
                    }
                }
                break;

              case Ae.GetState:
                this.updateSpcState(n.with_locations);
                break;

              case Ae.UpgradeNow:
                w.dispatch(J.showLicenseUpgradePage());
            }
        }
    }
    const Le = {
        active: !1,
        error: null,
        expiresIn: null,
        isBrowserApiAvailable: !1,
        location: null,
        locations: [],
        optimalLocation: null,
        selectedGatewayId: ""
    }, Re = [], Fe = new class {
        constructor() {
            d(this, "extensionInitialized", void 0), d(this, "onInstalledDetails", void 0), 
            this.extensionInitialized = !1, chrome.runtime.onInstalled.addListener(this.handleInstalled.bind(this));
        }
        init() {
            this.extensionInitialized = !0, this.onInstalledDetails && this.dispatchInstalled(this.onInstalledDetails);
        }
        handleInstalled(e) {
            this.extensionInitialized ? this.dispatchInstalled(e) : this.onInstalledDetails = e;
        }
        dispatchInstalled(e) {
            switch (e.reason) {
              case "install":
                w.dispatch(g());
                break;

              case "update":
                w.dispatch(m(e.previousVersion));
            }
            this.onInstalledDetails = null;
        }
    }(), Me = {
        [f.Startup]() {
            Fe.init();
        },
        [f.GetState](e, t, n) {
            n.meta && n.meta.callback && n.meta.callback({
                state: t()
            });
        }
    }, Pe = "https://ip-info.ff.avast.com/v2/info", ke = u("dashboard");
    async function je() {
        const e = await fetch(Pe);
        if (ke("GeoIp service response status = %d", e.status), e.ok) {
            const t = (await e.json()).ip;
            return ke("Public IP: %s", t), t;
        }
        throw new Error("GeoIp response failed. Offline(?)");
    }
    class De {
        constructor(e, t) {
            d(this, "_major", void 0), d(this, "_minor", void 0), this._major = e, this._minor = t;
        }
        get major() {
            return this._major;
        }
        get minor() {
            return this._minor;
        }
        toString() {
            return this.major + "." + this.minor;
        }
        compare(e) {
            return e ? this.major > e.major ? 1 : this.major === e.major ? this.minor > e.minor ? 1 : this.minor === e.minor ? 0 : -1 : -1 : 1;
        }
    }
    function Ue() {
        return "SecureLine" === $.brand ? ne.GetApiVersion : re.GetApiVersion;
    }
    function Te() {
        return "SecureLine" === $.brand ? ne.GetState : re.GetState;
    }
    function He() {
        return "SecureLine" === $.brand ? ne.GetOptimalGateway : re.GetOptimalGateway;
    }
    const Be = u("nativeMessagingClient");
    class ze {
        constructor() {
            d(this, "_port", void 0), d(this, "_disconnectedHandler", void 0), this._port = null, 
            this._disconnectedHandler = null;
        }
        connect(e, t, n) {
            Be("Connecting to %s", e), this._disconnectedHandler = n, this._port = chrome.runtime.connectNative(e), 
            this._port.onMessage.addListener(t), this._port.onDisconnect.addListener(this.disconnectedHandlerInner.bind(this));
        }
        postMessage(e) {
            if (!this._port) throw new be("Native Messaging client port is not opened.");
            this._port.postMessage(e);
        }
        disconnectedHandlerInner(e) {
            let t;
            Be("Native messaging port disconnected"), chrome.runtime.lastError && (Be("NM port onDisconnect error: %O", chrome.runtime.lastError), 
            chrome.runtime.lastError.message && (Be("NM port onDisconnect error message: %s", chrome.runtime.lastError.message), 
            t = chrome.runtime.lastError.message)), this._disconnectedHandler(t), this._port = null;
        }
    }
    const qe = u("vpnNativeMessagingClient");
    class We {
        constructor() {
            d(this, "_nativeMessagingClient", void 0), this._nativeMessagingClient = new ze(), 
            this._nativeMessagingClient.connect(ce[$.brand], this.onNativeMessagingMessage.bind(this), this.onNativeMessagingDisconnected.bind(this));
        }
        setLanguage() {
            const e = {
                action: "SecureLine" === $.brand ? ne.SetLanguage : re.SetLanguage,
                languageTag: X(),
                countryTag: X()
            };
            qe("VpnNativeMessagingClient.setLanguage() will post message %O", e), this._nativeMessagingClient.postMessage(e);
        }
        requestOptimalGateway() {
            this.postAction(He());
        }
        requestVpnState() {
            const e = ie.VpnStatus | ie.Gateways | ie.LicenseInfo | ie.ActiveGateway | ie.LastError;
            this.postAction(Te(), e);
        }
        onNativeMessagingMessage(e) {
            qe("VpnNativeMessagingClient.onNativeMessagingMessage(): message = %O", e), chrome.runtime.lastError && qe("onNativeMessagingMessage() error: %O", chrome.runtime.lastError);
            const t = new De(1, 5);
            switch (e.action) {
              case He():
                if (e.data) w.dispatch(J.optimalGatewayUpdated(e.data)); else {
                    e.error && qe("WARNING: GetOptimalGateway response contains error: %O", e.error);
                    const t = {
                        city: {
                            name: ""
                        },
                        country: {
                            id: "",
                            name: ""
                        },
                        id: ee
                    };
                    w.dispatch(J.optimalGatewayUpdated(t));
                }
                break;

              case "Vpn_OnStateChanged_SvcNm":
                if (w.getState().vpn.vpnClientApiVersion.compare(t) >= 0) break;

              case "SecureLine" === $.brand ? ne.OnStateChanged : re.OnStateChanged:
              case Te():
                if (e.data) {
                    const t = e.action === Te() ? e.data : e.data.data;
                    t.activeGateway && w.dispatch(J.activeGatewayUpdated(t.activeGateway)), t.gateways && w.dispatch(J.gatewaysUpdated(t.gateways)), 
                    t.lastError && w.dispatch(J.lastErrorUpdated(t.lastError)), t.licenseInfo && w.dispatch(J.licenseInfoUpdated(t.licenseInfo)), 
                    t.vpnStatus && w.dispatch(J.statusUpdated(t.vpnStatus));
                } else e.error && (qe("ERROR: GetState/OnStateChanged response is error: %O", e.error), 
                w.dispatch(J.vpnApiReturnedError(e.error)));
                break;

              case "Vpn_OnErrorOccurred_SvcNm":
                if (w.getState().vpn.vpnClientApiVersion.compare(t) >= 0) break;

              case "SecureLine" === $.brand ? ne.OnErrorOccurred : re.OnErrorOccurred:
                e.data ? w.dispatch(J.errorOccurred(e.data)) : e.error && (qe("ERROR: OnErrorOccurred message is error: %O", e.error), 
                w.dispatch(J.vpnApiReturnedError(e.error)));
            }
        }
        onNativeMessagingDisconnected(e) {
            qe("VpnNativeMessagingClient.onNativeMessagingDisconnected(): Native Messaging host disconnected"), 
            "Native host has exited." === e && w.dispatch(J.setNativeMessagingHostFound(!1));
        }
        postAction(e, t) {
            const n = {
                action: e,
                itemMask: t
            };
            qe("VpnNativeMessagingClient.postAction() will post message %O", n), this._nativeMessagingClient.postMessage(n);
        }
    }
    const $e = u("vpn"), Ke = {
        Connected: Q("extension_icon_overlay_text_connected"),
        Connecting: Q("extension_icon_overlay_text_connecting"),
        Disconnected: Q("extension_icon_overlay_text_disconnected"),
        Disconnecting: Q("extension_icon_overlay_text_disconnecting"),
        Reconnecting: Q("extension_icon_overlay_text_reconnecting")
    };
    class Ye {
        constructor() {
            d(this, "_vpnNativeMessagingClient", void 0);
        }
        static async connect() {
            let e;
            e = w.getState().vpn.selectedGateway.id === ee ? Ye.createConnectToOptimalRequestMessage() : Ye.createConnectRequestMessage(), 
            await Ye.sendRequest(e);
        }
        static async disconnect() {
            const e = Ye.createDisconnectRequestMessage();
            await Ye.sendRequest(e);
        }
        static updateIcon(e) {
            let t = "img/icon19-active.png", n = "";
            switch (e) {
              case oe.Connecting:
                n = Ke.Connecting;
                break;

              case oe.Reconnecting:
                n = Ke.Reconnecting;
                break;

              case oe.Connected:
                n = Ke.Connected;
                break;

              case oe.Disconnecting:
                n = Ke.Disconnecting, t = "img/icon19.png";
                break;

              case oe.Disconnected:
              default:
                n = Ke.Disconnected, t = "img/icon19.png";
            }
            chrome.browserAction.setIcon({
                path: t
            }, () => {
                chrome.runtime.lastError && $e("chrome.browserAction.setIcon failed with error %O", chrome.runtime.lastError);
            }), chrome.browserAction.setTitle({
                title: n
            }, () => {
                chrome.runtime.lastError && $e("chrome.browserAction.setTitle failed with error %O", chrome.runtime.lastError);
            });
        }
        static async checkVpnClientConnectivity() {
            try {
                const e = await Ye.fetchVpnClientApiVersion();
                e && w.dispatch(J.vpnClientApiVersionUpdated(e));
            } catch (e) {
                w.dispatch(J.setNativeMessagingHostFound(!1));
            }
        }
        static async fetchPublicIpAddress() {
            let e = "";
            try {
                e = await je();
            } catch (e) {
                $e("Retrieving current public IP address failed. Error: %O", e);
            }
            w.dispatch(J.ipAddressChanged(e));
        }
        static async showNag(e) {
            const t = Ye.createShowNagRequestMessage(e);
            $e("Vpn.showNag(). Sending request: %O", t), await Ye.sendRequest(t);
        }
        static createGetApiVersionRequestMessage() {
            return {
                action: Ue(),
                clientApiVersion: Ye.ClientApiVersion.toString()
            };
        }
        static createConnectRequestMessage() {
            return {
                action: "SecureLine" === $.brand ? ne.Connect : re.Connect,
                location: {
                    gatewayId: w.getState().vpn.selectedGateway.id
                }
            };
        }
        static createConnectToOptimalRequestMessage() {
            return {
                action: "SecureLine" === $.brand ? ne.ConnectToOptimal : re.ConnectToOptimal
            };
        }
        static createDisconnectRequestMessage() {
            return {
                action: "SecureLine" === $.brand ? ne.Disconnect : re.Disconnect
            };
        }
        static createShowNagRequestMessage(e) {
            return {
                action: "SecureLine" === $.brand ? ne.ShowNag : re.ShowNag,
                elementId: e,
                extraUrlParameters: {
                    p_scr: "vpnbrowser"
                }
            };
        }
        static sendNativeMessageAsync(e) {
            return new Promise((t, n) => {
                chrome.runtime.sendNativeMessage(ce[$.brand], e, function(e) {
                    chrome.runtime.lastError ? ($e("chrome.runtime.sendNativeMessage failed with error: %O", chrome.runtime.lastError), 
                    "Specified native messaging host not found." === chrome.runtime.lastError.message ? n(new ye()) : n(new be(`chrome.runtime.sendNativeMessage failed. Error: ${chrome.runtime.lastError.message}`))) : ($e("chrome.runtime.sendNativeMessage received response: %o.", e), 
                    t(e));
                });
            });
        }
        static extractApiVersion(e) {
            const t = e.publicApiVersion;
            if (!t) throw new Ce("Missing value for property publicApiVersion.");
            const [n, r] = t.split(".").map(e => parseInt(e, 10));
            if (isNaN(n)) throw new Ce("Failed to parse Major part of VPN Client's public API version.");
            if (isNaN(r)) throw new Ce("Failed to parse Minor part of VPN Client's public API version.");
            return new De(n, r);
        }
        static async fetchVpnClientApiVersion() {
            const e = Ye.createGetApiVersionRequestMessage(), t = await Ye.sendRequest(e);
            if ("object" != typeof (n = t) || n.action !== Ue() || !function(e) {
                return "object" == typeof e && "string" == typeof e.publicApiVersion;
            }(n.data)) throw new Ce("object is not IGetApiVersionResponse");
            var n;
            return Ye.extractApiVersion(t.data);
        }
        static async sendRequest(e) {
            let t = null;
            try {
                t = await Ye.sendNativeMessageAsync(e);
            } catch (e) {
                $e("Sending request to VPN client failed. Error: %O", e), w.dispatch(J.setNativeMessagingHostFound(!1));
            }
            return t;
        }
        async init() {
            window.addEventListener("online", this.handleNetworkConnectivityChange.bind(this)), 
            window.addEventListener("offline", this.handleNetworkConnectivityChange.bind(this)), 
            await this.handleNetworkConnectivityChange();
        }
        async fetchInitData() {
            try {
                this._vpnNativeMessagingClient = new We(), this._vpnNativeMessagingClient.setLanguage(), 
                this._vpnNativeMessagingClient.requestVpnState(), this._vpnNativeMessagingClient.requestOptimalGateway();
            } catch (e) {
                $e("Failed to fetch initial data. Error: %O", e), w.dispatch(J.setNativeMessagingHostFound(!1));
            }
        }
        async handleNetworkConnectivityChange() {
            const e = navigator.onLine;
            $e("Network connectivity: %s", e ? "online" : "offline"), w.dispatch(J.handleNetworkConnectivityChange(e));
        }
    }
    d(Ye, "ClientApiVersion", new De(1, 5));
    const Je = u("vpn");
    function Ze(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case Y.VpnClientApiVersionUpdated:
            return Z(e, {
                vpnClientApiVersion: t.value
            });

          case Y.ApiCompatibilityResolved:
            return Z(e, {
                apiCompatibility: t.value
            });

          case Y.OptimalGatewayUpdated:
            {
                const n = t.value, r = n && n.id === ee, i = void 0 !== e.gateways.find(e => e.id === ee);
                if (r && !i) {
                    let r = [];
                    return r.push(n), Z(e, {
                        gateways: r = r.concat(e.gateways),
                        optimalGateway: t.value
                    });
                }
                return Z(e, {
                    optimalGateway: t.value
                });
            }

          case Y.ActiveGatewayUpdated:
            return Z(e, {
                activeGateway: t.value
            });

          case Y.GatewaysUpdated:
            {
                let n = [];
                const r = e.optimalGateway;
                return r && r.id === ee && n.push(r), Z(e, {
                    gateways: n = n.concat(t.value)
                });
            }

          case Y.LastErrorUpdated:
            return Z(e, {
                lastError: t.value
            });

          case Y.ErrorOccurred:
            return Z(e, {
                errorInfo: t.value
            });

          case Y.VpnApiReturnedError:
            return Z(e, {
                vpnApiError: t.value
            });

          case Y.LicenseInfoUpdated:
            return Z(e, {
                licenseInfo: t.value
            });

          case Y.VpnStatusUpdated:
            return Z(e, {
                vpnStatus: t.value
            });

          case Y.SelectGateway:
            return Z(e, {
                selectedGateway: t.value
            });

          case Y.IpAddressChanged:
            return Z(e, {
                ipAddress: t.value
            });

          case Y.ReconnectingToAnotherGatewayStatusChanged:
            return Z(e, {
                isReconnectingToAnotherGateway: t.value
            });

          case Y.HandleNetworkConnectivityChange:
            return Z(e, {
                isConnectedToNetwork: t.value
            });

          case Y.SetNativeMessagingHostFound:
            return Z(e, {
                isNativeMessagingHostFound: t.value
            });

          case Y.SetIsInitialized:
            return Z(e, {
                isInitialized: t.value
            });
        }
        return e;
    }
    const Qe = {
        apiCompatibility: null,
        optimalGateway: null,
        activeGateway: null,
        gateways: [],
        lastError: null,
        errorInfo: null,
        vpnApiError: null,
        licenseInfo: null,
        vpnStatus: null,
        selectedGateway: null,
        ipAddress: "",
        isInitialized: !1,
        isReconnectingToAnotherGateway: !1,
        isConnectedToNetwork: !1,
        isNativeMessagingHostFound: !0,
        vpnClientApiVersion: null
    }, Xe = [], et = u("management");
    function tt(e) {
        return new Promise(t => {
            chrome.management.setEnabled(e, !1, () => {
                chrome.runtime.lastError ? et("could not disable extension %s: %s", e, chrome.runtime.lastError) : et("extension %s disabled", e), 
                t();
            });
        });
    }
    let nt;
    !function(e) {
        e.IsSupportedChange = "webrtc.isSupportedChange", e.IsAvailableChange = "webrtc.isAvailableChange", 
        e.IsEnabledChange = "webrtc.isEnabledChange", e.Toggle = "webrtc.toggle", e.DisableConflictingExtensions = "webrtc.disableConflictingExtensions";
    }(nt || (nt = {}));
    const rt = {
        disableConflictingExtensions: () => h(nt.DisableConflictingExtensions),
        isAvailableChange: e => h(nt.IsAvailableChange, e),
        isEnabledChange: e => h(nt.IsEnabledChange, e),
        isSupportedChange: e => h(nt.IsSupportedChange, e),
        toggle: () => h(nt.Toggle)
    };
    function it(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case nt.IsSupportedChange:
            return Z(e, {
                isSupported: t.value
            });

          case nt.IsEnabledChange:
            return Z(e, {
                isEnabled: t.value
            });

          case nt.IsAvailableChange:
            return Z(e, {
                isAvailable: t.value
            });
        }
        return e;
    }
    const ot = {
        isSupported: null,
        isAvailable: null,
        isEnabled: null
    }, at = [];
    let st, ct;
    !function(e) {
        e.Controllable = "controllable_by_this_extension", e.Controlled = "controlled_by_this_extension";
    }(st || (st = {})), function(e) {
        e.DisableNonProxiedUdp = "disable_non_proxied_udp", e.Default = "default";
    }(ct || (ct = {}));
    const lt = u("webRtc");
    class ut {
        constructor(e = !1) {
            d(this, "enableByDefault", void 0), d(this, "webRtcIpHandlingPolicy", void 0), this.enableByDefault = e, 
            chrome.privacy && chrome.privacy.network && (this.webRtcIpHandlingPolicy = chrome.privacy.network.webRTCIPHandlingPolicy);
        }
        init() {
            lt("initializing");
            const e = !!this.webRtcIpHandlingPolicy;
            w.dispatch(rt.isSupportedChange(e)), e && (this.webRtcIpHandlingPolicy.get({}, this.handleConfig), 
            this.webRtcIpHandlingPolicy.onChange && this.webRtcIpHandlingPolicy.onChange.addListener(this.handleConfig));
        }
        installed() {
            const e = w.getState();
            this.enableByDefault && !e.webRtc.isEnabled && (lt("enabling by default"), this.toggle());
        }
        toggle() {
            const e = w.getState();
            if (!e.webRtc.isSupported) return;
            const t = e.webRtc.isEnabled ? ct.Default : ct.DisableNonProxiedUdp;
            this.webRtcIpHandlingPolicy.set({
                value: t,
                scope: "regular"
            }, () => {
                this.webRtcIpHandlingPolicy.onChange || this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
            });
        }
        refreshSettings() {
            this.webRtcIpHandlingPolicy && this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
        }
        handleConfig(e) {
            lt("handling settings change: %O", e);
            const t = w.getState(), n = function(e) {
                return e.levelOfControl === st.Controlled || e.levelOfControl === st.Controllable;
            }(e);
            n !== t.webRtc.isAvailable && w.dispatch(rt.isAvailableChange(n));
            const r = function(e) {
                return e.levelOfControl === st.Controlled;
            }(e), i = e.value === ct.DisableNonProxiedUdp, o = r && i;
            o !== t.webRtc.isEnabled && w.dispatch(rt.isEnabledChange(o));
        }
    }
    function dt() {
        const e = new Ye(), t = new ut(), n = {
            [K.Vpn]: Ze,
            [K.WebRtc]: it
        }, r = {
            [K.Vpn]: Qe,
            [K.WebRtc]: ot
        }, i = {
            [K.Vpn]: Xe,
            [K.WebRtc]: at
        }, o = [ Me, function(e) {
            const t = {};
            return t[f.Startup] = (() => {
                e.init();
            }), t[Y.Connect] = (() => {
                Ye.connect();
            }), t[Y.Disconnect] = (() => {
                Ye.disconnect();
            }), t[Y.ShowLicenseUpgradePage] = ((e, t) => {
                t().vpn.vpnClientApiVersion.compare(new De(1, 5)) >= 0 ? Ye.showNag(te) : function(e) {
                    chrome.tabs.create({
                        url: e
                    });
                }(pe[$.brand]);
            }), t[Y.VpnStatusUpdated] = (async (e, t) => {
                Je("Generated function for action: VpnActionTypes.VpnStatusUpdated");
                const n = t().vpn.vpnStatus;
                Ye.updateIcon(n);
                const r = t().vpn.isReconnectingToAnotherGateway;
                if (r && (n === oe.Disconnected ? (Je("Reconnecting to another gateway: Connecting..."), 
                await Ye.connect()) : n === oe.Connected && w.dispatch(J.updateReconnectingToAnotherGatewayStatus(!1))), 
                n === oe.Connected || n === oe.Disconnected && !r) {
                    let e = "";
                    try {
                        e = await je();
                    } catch (e) {
                        Je("Retrieving current public IP address failed. Error: %O", e);
                    }
                    w.dispatch(J.ipAddressChanged(e));
                }
            }), t[Y.OptimalGatewayUpdated] = ((e, t) => {
                const n = t().vpn.optimalGateway, r = t().vpn.selectedGateway;
                n && !r && (Je("Selecting optimal gateway: %s", n.id), w.dispatch(J.gatewaySelected(n)));
            }), t[Y.ActiveGatewayUpdated] = ((e, t) => {
                const n = t().vpn.activeGateway, r = t().vpn.selectedGateway;
                if (n && n.id) {
                    if (r && r.id === n.id) return;
                    Je("Selecting active gateway: %s", n.id), w.dispatch(J.gatewaySelected(n));
                }
            }), t[Y.SelectGateway] = (async (e, t) => {
                const n = t().vpn.vpnStatus;
                n !== oe.Connected && n !== oe.Connecting || (w.dispatch(J.updateReconnectingToAnotherGatewayStatus(!0)), 
                Je("Reconnecting to another gateway: Disconnecting..."), await Ye.disconnect());
            }), t[Y.HandleNetworkConnectivityChange] = (async (e, t) => {
                t().vpn.isConnectedToNetwork ? (await Ye.fetchPublicIpAddress(), t().vpn.isInitialized || (await Ye.checkVpnClientConnectivity(), 
                w.dispatch(J.setIsInitialized(!0)))) : Ye.updateIcon(oe.Disconnected);
            }), t[Y.ErrorOccurred] = ((e, t) => {
                const n = t().vpn.errorInfo;
                n ? Je("Error occurred. Source: %s. Code: %s", n.source, n.code) : Je("Error cleared.");
            }), t[Y.VpnApiReturnedError] = ((e, t) => {
                const n = t().vpn.vpnApiError;
                n ? Je("VPN API returned error: %O", n) : Je("VPN API error cleared.");
            }), t[Y.VpnClientApiVersionUpdated] = ((e, t) => {
                const n = t().vpn.vpnClientApiVersion;
                let r;
                Je("Vpn Client API Version: %d.%d", n.major, n.minor), r = n.major === Ye.ClientApiVersion.major ? he.Compatible : n.major <= Ye.ClientApiVersion.major ? he.VpnClientOld : he.ExtensionOld, 
                w.dispatch(J.apiCompatibilityResolved(r));
            }), t[Y.ApiCompatibilityResolved] = (async (t, n) => {
                if (n().vpn.apiCompatibility === he.Compatible) try {
                    await e.fetchInitData();
                } catch (e) {
                    Je("fetchInitData() failed. Error %O", e), w.dispatch(J.setNativeMessagingHostFound(!1));
                }
            }), t;
        }(e), function(e) {
            const t = {};
            return t[f.Startup] = (() => {
                e.init();
            }), t[f.Installed] = (() => {
                e.installed();
            }), t[nt.Toggle] = (() => {
                e.toggle();
            }), t[nt.DisableConflictingExtensions] = (async () => {
                await async function(e) {
                    et("going to disable all extensions with %s permission", e);
                    const t = await new Promise(e => {
                        chrome.management.getAll(t => {
                            e(t);
                        });
                    });
                    for (const n of t) n.id !== chrome.runtime.id && n.enabled && n.permissions && n.permissions.includes(e) && (et("trying to disable extension: %s / %s", n.name, n.id), 
                    await tt(n.id));
                }("privacy"), e.refreshSettings();
            }), t;
        }(t) ];
        if (function() {
            let e;
            return "SecureVpn" === $.brand ? e = chrome.avg : "SecureLine" === $.brand && (e = chrome.avast), 
            !!e;
        }()) {
            const e = new Ge();
            n[K.Spc] = xe, r[K.Spc] = Le, i[K.Spc] = Re, o.push(function(e) {
                const t = {};
                function n() {
                    e.updateSpcState();
                }
                return t[f.Startup] = (() => {
                    e.init();
                }), t[Y.VpnStatusUpdated] = n, t[Y.OptimalGatewayUpdated] = n, t[Y.HandleNetworkConnectivityChange] = n, 
                t[Y.GatewaysUpdated] = n, t[Y.LicenseInfoUpdated] = n, t[Y.SetNativeMessagingHostFound] = n, 
                t[Y.ApiCompatibilityResolved] = n, t[Y.ErrorOccurred] = n, t[Y.VpnApiReturnedError] = n, 
                t[Y.SelectGateway] = ((e, t) => {
                    t().spc.location.id !== t().spc.selectedGatewayId && n();
                }), t;
            }(e));
        }
        return {
            reducers: n,
            initialState: r,
            persistedPaths: i,
            generators: o
        };
    }
    return async function(e) {
        await H.init();
        const {reducers: t, generators: n, initialState: r, persistedPaths: i} = e(H), o = new x(H, i), a = o.load();
        a && (B("persisted state: %O", a), Object.keys(a).forEach(e => {
            r[e] && a[e] && ("function" == typeof r[e] ? r[e] = r[e](a[e]) : r[e] = {
                ...r[e],
                ...a[e]
            });
        })), Object.keys(r).forEach(e => {
            "function" == typeof r[e] && (r[e] = r[e]());
        }), B("initial state: %O", r);
        const s = function(e, t, n, r) {
            const i = t.map(e => (function(e) {
                return function(t) {
                    const n = t.dispatch, r = t.getState;
                    return function(t) {
                        return function(i) {
                            const o = t(i), a = e[i.type];
                            return a && a.call(e, n, r, i), o;
                        };
                    };
                };
            })(e)).concat([ D(T), U.enabled && j({
                diff: !0,
                predicate: (e, t) => (t.type || console.error("unknown action type", t), !t.type.includes("getState")),
                collapsed: () => !0,
                duration: !0,
                timestamp: !0
            }), r && r.buildMiddleware() ]).filter(e => e);
            return V(function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var i = t[r];
                    "function" == typeof e[i] && (n[i] = e[i]);
                }
                var o = Object.keys(n), a = void 0;
                try {
                    !function(e) {
                        Object.keys(e).forEach(function(t) {
                            var n = e[t];
                            if (void 0 === n(void 0, {
                                type: _.INIT
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if (void 0 === n(void 0, {
                                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + _.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
                        });
                    }(n);
                } catch (e) {
                    a = e;
                }
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
                    if (a) throw a;
                    for (var r = !1, i = {}, s = 0; s < o.length; s++) {
                        var c = o[s], l = n[c], u = e[c], d = l(u, t);
                        if (void 0 === d) {
                            var p = G(c, t);
                            throw new Error(p);
                        }
                        i[c] = d, r = r || d !== u;
                    }
                    return r ? i : e;
                };
            }(e), n, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var o = e.apply(void 0, r), a = function() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                        }, s = {
                            getState: o.getState,
                            dispatch: function() {
                                return a.apply(void 0, arguments);
                            }
                        }, c = t.map(function(e) {
                            return e(s);
                        });
                        return a = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return 0 === t.length ? function(e) {
                                return e;
                            } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                                return function() {
                                    return e(t.apply(void 0, arguments));
                                };
                            });
                        }.apply(void 0, c)(o.dispatch), N({}, o, {
                            dispatch: a
                        });
                    };
                };
            }.apply(null, i));
        }(t, n, r, o);
        w.setStore(s), w.dispatch(v()), chrome.runtime.onMessage.addListener(function(e, t, n) {
            if (e.type) return w.dispatch({
                ...e,
                meta: {
                    sender: t,
                    callback: n
                }
            }), void 0 !== n;
        });
    }(dt), e.bootstrap = dt, e;
}({});
