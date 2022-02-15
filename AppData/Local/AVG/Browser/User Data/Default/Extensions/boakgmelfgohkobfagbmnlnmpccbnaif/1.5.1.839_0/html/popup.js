!function() {
    "use strict";
    let t, e, n, r, i, o, a, s, c, l, d, u, p;
    var f, v;
    let h;
    !function(t) {
        t.Connect = "public.AvastSecureLine.Connect", t.ConnectToOptimal = "public.AvastSecureLine.ConnectToOptimal", 
        t.Disconnect = "public.AvastSecureLine.Disconnect", t.GetApiVersion = "public.AvastSecureLine.GetApiVersion", 
        t.GetOptimalGateway = "public.AvastSecureLine.GetOptimalGateway", t.GetState = "public.AvastSecureLine.GetState", 
        t.OnErrorOccurred = "public.AvastSecureLine.OnErrorOccurred", t.OnStateChanged = "public.AvastSecureLine.OnStateChanged", 
        t.SetLanguage = "public.AvastSecureLine.SetLanguage", t.ShowNag = "public.AvastSecureLine.Ui.ShowNag";
    }(t || (t = {})), function(t) {
        t.Connect = "public.AVGSecureVPN.Connect", t.ConnectToOptimal = "public.AVGSecureVPN.ConnectToOptimal", 
        t.Disconnect = "public.AVGSecureVPN.Disconnect", t.GetApiVersion = "public.AVGSecureVPN.GetApiVersion", 
        t.GetOptimalGateway = "public.AVGSecureVPN.GetOptimalGateway", t.GetState = "public.AVGSecureVPN.GetState", 
        t.OnErrorOccurred = "public.AVGSecureVPN.OnErrorOccurred", t.OnStateChanged = "public.AVGSecureVPN.OnStateChanged", 
        t.SetLanguage = "public.AVGSecureVPN.SetLanguage", t.ShowNag = "public.AVGSecureVPN.Ui.ShowNag";
    }(e || (e = {})), function(t) {
        t[t.VpnStatus = 1] = "VpnStatus", t[t.Gateways = 2] = "Gateways", t[t.LicenseInfo = 4] = "LicenseInfo", 
        t[t.ActiveGateway = 8] = "ActiveGateway", t[t.LastError = 32] = "LastError";
    }(n || (n = {})), function(t) {
        t.Connected = "connected", t.Connecting = "connecting", t.Reconnecting = "reconnecting", 
        t.Disconnected = "disconnected", t.Disconnecting = "disconnecting", t.Error = "error", 
        t.Initializing = "initializing";
    }(r || (r = {})), function(t) {
        t.Trial = "trial", t.Subscription = "subscription", t.Free = "free";
    }(i || (i = {})), function(t) {
        t.Valid = "valid", t.Expired = "expired", t.NoSubscription = "noSubscription", t.NoLicenseFile = "noLicenseFile", 
        t.Banned = "banned";
    }(o || (o = {})), function(t) {
        t.SecureVpn = "com.avg.vpn", t.SecureLine = "com.avast.vpn";
    }(a || (a = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/how-to-install", t.SecureLine = "https://extension.avastbrowser.com/vpn/how-to-install";
    }(s || (s = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/download", t.SecureLine = "https://extension.avastbrowser.com/vpn/download";
    }(c || (c = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/about", t.SecureLine = "https://extension.avastbrowser.com/vpn/about";
    }(l || (l = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/offer", t.SecureLine = "https://extension.avastbrowser.com/vpn/offer";
    }(d || (d = {})), function(t) {
        t.Compatible = "Compatible", t.ExtensionOld = "ExtensionOld", t.VpnClientOld = "VpnClientOld";
    }(u || (u = {})), function(t) {
        t.SetState = "setState", t.GetState = "getState", t.UpgradeNow = "upgradeNow";
    }(p || (p = {})), function(t) {
        t.Connection = "connection";
    }(f || (f = {})), function(t) {
        t.LicenseRefused = "licenseRefused", t.NoInternetConnection = "noInternetConnection", 
        t.LicenseExpired = "licenseExpired", t.ConnectionLimitReached = "connectionLimitReached", 
        t.DataLimitReached = "dataLimitReached", t.VpnNameBanned = "vpnNameBanned", t.PlatformNotAllowed = "platformNotAllowed", 
        t.LicenseBanned = "licenseBanned", t.AuthorizationFailed = "authorizationFailed", 
        t.LocationNotAllowed = "locationNotAllowed", t.InternalError = "internalError", 
        t.MissingMandatoryParameters = "missingMandatoryParameters", t.NoLicenseInAccount = "noLicenseInAccount";
    }(v || (v = {})), function(t) {
        t.Exception = "exception";
    }(h || (h = {}));
    var m = 1e3, _ = 6e4, g = 36e5, y = 24 * g, C = function(t, e) {
        e = e || {};
        var n, r, i = typeof t;
        if ("string" === i && t.length > 0) return function(t) {
            if (!((t = String(t)).length > 100)) {
                var e = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
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
                        return n * y;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * g;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * _;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * m;

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
        }(t);
        if ("number" === i && !1 === isNaN(t)) return e.long ? (n = t, (r = Math.abs(n)) >= y ? w(n, r, y, "day") : r >= g ? w(n, r, g, "hour") : r >= _ ? w(n, r, _, "minute") : r >= m ? w(n, r, m, "second") : n + " ms") : function(t) {
            var e = Math.abs(t);
            return e >= y ? Math.round(t / y) + "d" : e >= g ? Math.round(t / g) + "h" : e >= _ ? Math.round(t / _) + "m" : e >= m ? Math.round(t / m) + "s" : t + "ms";
        }(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function w(t, e, n, r) {
        var i = e >= 1.5 * n;
        return Math.round(t / n) + " " + r + (i ? "s" : "");
    }
    var b, S = (function(t, e) {
        e.log = function(...t) {
            return "object" == typeof console && console.log && console.log(...t);
        }, e.formatArgs = function(e) {
            if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            let r = 0, i = 0;
            e[0].replace(/%[a-zA-Z%]/g, t => {
                "%%" !== t && (r++, "%c" === t && (i = r));
            }), e.splice(i, 0, n);
        }, e.save = function(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
        }, e.load = function() {
            let t;
            try {
                t = e.storage.getItem("debug");
            } catch (t) {}
            return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), 
            t;
        }, e.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, e.storage = function() {
            try {
                return localStorage;
            } catch (t) {}
        }(), e.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        t.exports = function(t) {
            function e(t) {
                let e = 0;
                for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                return n.colors[Math.abs(e) % n.colors.length];
            }
            function n(t) {
                let o;
                function a(...t) {
                    if (!a.enabled) return;
                    const e = a, r = Number(new Date()), i = r - (o || r);
                    e.diff = i, e.prev = o, e.curr = r, o = r, t[0] = n.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                    let s = 0;
                    t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, i) => {
                        if ("%%" === r) return r;
                        s++;
                        const o = n.formatters[i];
                        if ("function" == typeof o) {
                            const n = t[s];
                            r = o.call(e, n), t.splice(s, 1), s--;
                        }
                        return r;
                    }), n.formatArgs.call(e, t), (e.log || n.log).apply(e, t);
                }
                return a.namespace = t, a.enabled = n.enabled(t), a.useColors = n.useColors(), a.color = e(t), 
                a.destroy = r, a.extend = i, "function" == typeof n.init && n.init(a), n.instances.push(a), 
                a;
            }
            function r() {
                const t = n.instances.indexOf(this);
                return -1 !== t && (n.instances.splice(t, 1), !0);
            }
            function i(t, e) {
                return n(this.namespace + (void 0 === e ? ":" : e) + t);
            }
            function o(t) {
                return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t;
            }, n.disable = function() {
                const t = [ ...n.names.map(o), ...n.skips.map(o).map(t => "-" + t) ].join(",");
                return n.enable(""), t;
            }, n.enable = function(t) {
                let e;
                n.save(t), n.names = [], n.skips = [];
                const r = ("string" == typeof t ? t : "").split(/[\s,]+/), i = r.length;
                for (e = 0; e < i; e++) r[e] && ("-" === (t = r[e].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
                for (e = 0; e < n.instances.length; e++) {
                    const t = n.instances[e];
                    t.enabled = n.enabled(t.namespace);
                }
            }, n.enabled = function(t) {
                if ("*" === t[t.length - 1]) return !0;
                let e, r;
                for (e = 0, r = n.skips.length; e < r; e++) if (n.skips[e].test(t)) return !1;
                for (e = 0, r = n.names.length; e < r; e++) if (n.names[e].test(t)) return !0;
                return !1;
            }, n.humanize = C, Object.keys(t).forEach(e => {
                n[e] = t[e];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = e, 
            n.enable(n.load()), n;
        }(e);
        const {formatters: n} = t.exports;
        n.j = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message;
            }
        };
    }(b = {
        exports: {}
    }, b.exports), b.exports);
    S.log, S.formatArgs, S.save, S.load, S.useColors, S.storage, S.colors;
    const k = S("messages");
    function A(t, e) {
        k("sending message to background, action: %O", t), chrome.runtime.sendMessage(t, function(n) {
            e && e(n), chrome.runtime.lastError && k("sendActionToBg for %s generated error", t.type, chrome.runtime.lastError);
        });
    }
    function x(t, e) {
        return void 0 === e ? {
            type: t
        } : {
            type: t,
            value: e
        };
    }
    let O;
    !function(t) {
        t.ApiCompatibilityResolved = "vpn.apiCompatibilityResolved", t.ActiveGatewayUpdated = "vpn.activeGatewayUpdated", 
        t.GatewaysUpdated = "vpn.gatewaysUpdated", t.LastErrorUpdated = "vpn.lastErrorUpdated", 
        t.ErrorOccurred = "vpn.ErrorOccurred", t.VpnApiReturnedError = "vpn.VpnApiReturnedError", 
        t.LicenseInfoUpdated = "vpn.licenseInfoUpdated", t.VpnStatusUpdated = "vpn.vpnStatusUpdated", 
        t.Connect = "vpn.connect", t.Disconnect = "vpn.disconnect", t.OptimalGatewayUpdated = "vpn.optimalGatewayUpdated", 
        t.SelectGateway = "vpn.selectGateway", t.IpAddressChanged = "vpn.ipAddressChanged", 
        t.ReconnectingToAnotherGatewayStatusChanged = "vpn.reconnectingToAnotherGatewayStatusChanged", 
        t.HandleNetworkConnectivityChange = "vpn.handleNetworkConnectivityChange", t.SetBrowserApiAvailability = "vpn.setBrowserApiAvailability", 
        t.SetIsInitialized = "vpn.setIsInitialized", t.SetNativeMessagingHostFound = "vpn.setNativeMessagingHostFound", 
        t.VpnClientApiVersionUpdated = "vpn.VpnClientApiVersionUpdated", t.ShowLicenseUpgradePage = "vpn.showLicenseUpgradePage";
    }(O || (O = {}));
    const $ = t => x(O.SelectGateway, t), F = {
        methods: {
            onBtnClicked() {
                A((() => x(O.ShowLicenseUpgradePage))());
            }
        }
    };
    var E = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("activate_vpn_product")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("learn_more")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    E._withStripped = !0;
    var I = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof F ? F.options : F) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/ActivateVpnLicenseBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: E,
        staticRenderFns: []
    });
    const R = {
        props: {
            bgState: Object,
            country: String,
            countryMap: Object,
            showCities: Boolean,
            selectedMultiCityCountry: String
        },
        data() {
            return {
                selectedGateway: this.bgState.vpn.selectedGateway
            };
        },
        computed: {
            isSingleCity() {
                return 1 === this.countryMap[this.country].length;
            },
            isMultiCity() {
                return this.countryMap[this.country].length > 1;
            }
        },
        methods: {
            cities(t) {
                return this.countryMap[t];
            }
        }
    };
    var L = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("li", {
            class: {
                sublist__toggle: t.isSingleCity,
                sublist__has__sub: t.isMultiCity,
                active: t.selectedGateway.country.name === t.country
            },
            on: {
                click: function(e) {
                    t.$emit("country-clicked", t.country);
                }
            }
        }, [ n("div", {
            staticClass: "green-tick"
        }), t._v(" "), n("a", {
            staticClass: "link",
            attrs: {
                href: "#"
            }
        }, [ t._v("\n\t\t" + t._s(t.country) + "\n\t\t"), t.isMultiCity ? [ n("span", {
            attrs: {
                id: "count"
            }
        }, [ t._v("\n\t\t\t\t(" + t._s(t.countryMap[t.country].length) + ")\n\t\t\t") ]), t._v(" "), n("img", {
            staticClass: "shape",
            attrs: {
                src: "/img/chevron.svg"
            },
            on: {
                click: function(e) {
                    e.stopPropagation(), t.$emit("chevron-clicked", t.country);
                }
            }
        }) ] : t._e() ], 2), t._v(" "), t.isMultiCity ? n("ul", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showCities && t.country === t.selectedMultiCityCountry,
                expression: "showCities && country === selectedMultiCityCountry"
            } ],
            staticClass: "sublist__toggle__body"
        }, t._l(t.cities(t.country), function(e) {
            return n("li", {
                key: t.country + "-" + e,
                class: {
                    selected: e === t.selectedGateway.city.name
                },
                on: {
                    click: function(n) {
                        n.stopPropagation(), t.$emit("city-clicked", t.country, e);
                    }
                }
            }, [ n("div", {
                staticClass: "green-sub-tick"
            }), t._v(" "), n("a", {
                staticClass: "sublist--link",
                attrs: {
                    href: "#"
                }
            }, [ t._v("\n\t\t\t\t" + t._s(e) + "\n\t\t\t") ]) ]);
        })) : t._e() ]);
    };
    L._withStripped = !0;
    var N = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof R ? R.options : R) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/LocationMenuItem.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: L,
        staticRenderFns: []
    });
    const D = S("vpn-dashboard-location-menu"), T = {
        components: {
            LocationMenuItem: N
        },
        props: {
            bgState: Object,
            optimalGatewayDisplayName: String
        },
        data() {
            return {
                showCities: !1,
                selectedMultiCityCountry: "",
                selectedGateway: this.bgState.vpn.selectedGateway,
                optimalGateway: this.bgState.vpn.optimalGateway
            };
        },
        computed: {
            gateways() {
                return this.bgState.vpn.gateways;
            },
            countryMap() {
                return D(this.bgState), this.bgState.vpn.gateways.reduce((t, e) => ("optimal_unknown" !== e.id && (t[e.country.name] = t[e.country.name] || [], 
                t[e.country.name].push(e.city.name)), t), {});
            },
            countries() {
                return Object.keys(this.countryMap);
            }
        },
        methods: {
            isMultiCity(t) {
                return this.countryMap[t].length > 1;
            },
            onChevronClicked(t) {
                D("Chevron clicked for multicity country: %s", t), this.selectedMultiCityCountry = t, 
                this.showCities = !this.showCities;
            },
            onCountryClicked(t) {
                if (this.isMultiCity(t)) {
                    const e = this.gateways.filter(e => e.country.name === t);
                    this.selectedGateway = e[Math.floor(Math.random() * e.length)];
                } else this.showCities = !1, this.selectedGateway = this.gateways.find(e => e.country.name === t);
                this.$emit("toggleDropdown"), D("Selected country: %s. Selected gateway id: %s", t, this.selectedGateway.id), 
                A($(this.selectedGateway));
            },
            onCityClicked(t, e) {
                this.$emit("toggleDropdown"), this.selectedGateway = this.bgState.vpn.gateways.find(n => n.country.name === t && n.city.name === e), 
                D("Selected city: %s. Selected gateway id: %s", e, this.selectedGateway.id), A($(this.selectedGateway));
            },
            onOptimalLocationClicked() {
                this.$emit("toggleDropdown"), this.selectedGateway = this.bgState.vpn.optimalGateway, 
                D("Selected optimal location. Selected gateway id: %s", this.selectedGateway.id), 
                A($(this.selectedGateway));
            }
        }
    };
    var G = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("ul", {
            staticClass: "nav-dropdown-menu"
        }, [ n("li", {
            staticClass: "opt__loc",
            class: {
                active: t.optimalGateway.id === t.selectedGateway.id
            },
            on: {
                click: t.onOptimalLocationClicked
            }
        }, [ n("div", {
            staticClass: "green-tick"
        }), t._v(" "), n("p", [ n("a", {
            attrs: {
                href: "#"
            }
        }, [ n("span", {
            attrs: {
                id: "optimal_state"
            }
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.optimalGatewayDisplayName) + "\n\t\t\t\t") ]) ]) ]) ]), t._v(" "), t._l(t.countries, function(e) {
            return n("location-menu-item", {
                key: e,
                attrs: {
                    "bg-state": t.bgState,
                    country: e,
                    "country-map": t.countryMap,
                    "show-cities": t.showCities,
                    "selected-multi-city-country": t.selectedMultiCityCountry
                },
                on: {
                    "city-clicked": t.onCityClicked,
                    "chevron-clicked": t.onChevronClicked,
                    "country-clicked": t.onCountryClicked
                }
            });
        }) ], 2);
    };
    G._withStripped = !0;
    var P = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof T ? T.options : T) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/LocationMenu.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: G,
        staticRenderFns: []
    });
    const M = S("vpn-dashboard-location"), B = {
        components: {
            LocationMenu: P
        },
        props: {
            bgState: Object
        },
        data() {
            return {
                showDropdown: !1,
                selectedGateway: this.bgState.vpn.selectedGateway,
                optimalGateway: this.bgState.vpn.optimalGateway
            };
        },
        computed: {
            selectedGatewayDisplayName() {
                return this.bgState.vpn.selectedGateway.id === this.bgState.vpn.optimalGateway.id ? this.optimalGatewayDisplayName : this.bgState.vpn.selectedGateway.city.name + ", " + this.bgState.vpn.selectedGateway.country.name;
            },
            optimalGatewayDisplayName() {
                let t = this.translate("optimal_location");
                return "optimal_unknown" !== this.bgState.vpn.optimalGateway.id && (t += " (" + this.bgState.vpn.optimalGateway.city.name + ", " + this.bgState.vpn.optimalGateway.country.name + ")"), 
                t;
            }
        },
        methods: {
            onDropdownToggleClicked() {
                this.showDropdown = !this.showDropdown, M("Dropdown menu clicked! showDropdown = %s", this.showDropdown), 
                M("selectedGateway: %s. optimalGateway: %s.", this.selectedGateway.id, this.optimalGateway.id);
            }
        }
    };
    var j = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper-select"
        }, [ n("div", {
            staticClass: "location-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("vpn_location")) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "nav-dropdown"
        }, [ n("div", {
            staticClass: "nav-toggle-dropdown",
            on: {
                click: t.onDropdownToggleClicked
            }
        }, [ n("button", [ n("span", [ t._v(t._s(t.selectedGatewayDisplayName)) ]) ]), t._v(" "), n("img", {
            staticClass: "shape",
            attrs: {
                src: "/img/chevron.svg"
            }
        }) ]), t._v(" "), n("location-menu", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showDropdown,
                expression: "showDropdown"
            } ],
            attrs: {
                "bg-state": t.bgState,
                "optimal-gateway-display-name": t.optimalGatewayDisplayName
            },
            on: {
                toggleDropdown: t.onDropdownToggleClicked
            }
        }) ], 1) ]);
    };
    j._withStripped = !0;
    var V = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof B ? B.options : B) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/Location.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: j,
        staticRenderFns: []
    });
    const U = {
        props: {
            bgState: Object
        },
        computed: {
            status() {
                return this.bgState.vpn.vpnStatus;
            },
            isConnecting() {
                return this.bgState.vpn.vpnStatus === r.Connecting;
            },
            isReconnectingToAnotherGateway() {
                return this.bgState.vpn.isReconnectingToAnotherGateway;
            },
            isReconnecting() {
                return this.bgState.vpn.vpnStatus === r.Reconnecting;
            },
            isConnected() {
                return this.bgState.vpn.vpnStatus === r.Connected;
            },
            isDisconnecting() {
                return this.bgState.vpn.vpnStatus === r.Disconnecting;
            },
            isDisconnected() {
                return this.bgState.vpn.vpnStatus === r.Disconnected;
            },
            isConnectionFailed: () => !1
        },
        methods: {
            onConnectToggle() {
                switch (this.status) {
                  case r.Disconnected:
                    A((() => x(O.Connect))());
                    break;

                  case r.Connecting:
                  case r.Connected:
                    A((() => x(O.Disconnect))());
                }
            }
        }
    };
    var H = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper-switch-block"
        }, [ t.isConnecting ? n("h3", {
            staticClass: "state__connect connecting"
        }, [ t._v("\n\t\t" + t._s(t.translate("connecting")) + "\n\t") ]) : t.isReconnecting || t.isReconnectingToAnotherGateway ? n("h3", {
            staticClass: "state__connect reconnecting"
        }, [ t._v("\n\t\t" + t._s(t.translate("reconnecting")) + "\n\t") ]) : t.isConnected ? n("h3", {
            staticClass: "state__connect connected"
        }, [ t._v("\n\t\t" + t._s(t.translate("connected")) + "\n\t") ]) : t.isDisconnecting ? n("h3", {
            staticClass: "state__connect disconnecting"
        }, [ t._v("\n\t\t" + t._s(t.translate("disconnecting")) + "\n\t") ]) : t.isDisconnected ? n("h3", {
            staticClass: "state__connect disconnected"
        }, [ t._v("\n\t\t" + t._s(t.translate("disconnected")) + "\n\t") ]) : t.isConnectionFailed ? n("h3", {
            staticClass: "state__connect fail"
        }, [ t._v("\n\t\t" + t._s(t.translate("connection_failed")) + "\n\t") ]) : t._e(), t._v(" "), n("div", {
            staticClass: "switch"
        }, [ n("label", [ n("input", {
            attrs: {
                id: "switch_box",
                type: "checkbox"
            },
            domProps: {
                checked: t.isConnecting || t.isConnected || t.isReconnecting
            },
            on: {
                click: t.onConnectToggle
            }
        }), t._v(" "), n("span", {
            staticClass: "lever"
        }) ]) ]) ]);
    };
    H._withStripped = !0;
    const z = {
        components: {
            Location: V,
            ConnectionSwitch: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof U ? U.options : U) || {};
                return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/ConnectionSwitch.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: H,
                staticRenderFns: []
            })
        },
        props: {
            bgState: Object
        }
    };
    var W = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("div", {
            staticClass: "wrapper-main"
        }, [ e("location", {
            attrs: {
                "bg-state": this.bgState
            }
        }), this._v(" "), e("connection-switch", {
            attrs: {
                "bg-state": this.bgState
            }
        }) ], 1) ]);
    };
    W._withStripped = !0;
    var q = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof z ? z.options : z) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/DashboardBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: W,
        staticRenderFns: []
    });
    const K = {
        methods: {
            onBtnClicked() {
                A((t => x(O.ErrorOccurred, t))(null)), A((t => x(O.VpnApiReturnedError, t))(null));
            }
        }
    };
    var J = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("something_is_not_right")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("dismiss")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    J._withStripped = !0;
    var X = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof K ? K.options : K) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/ErrorBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: J,
        staticRenderFns: []
    });
    function Z(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    const Q = S("runtimeInfo");
    let Y, tt;
    !function(t) {
        t.Win = "win", t.Mac = "mac", t.Unknown = "unknown";
    }(Y || (Y = {})), function(t) {
        t.Chrome = "chrome", t.Firefox = "firefox", t.Other = "other";
    }(tt || (tt = {}));
    const et = new class {
        constructor(t) {
            Z(this, "_brand", void 0), Z(this, "_extensionVersion", void 0), Z(this, "_permissions", void 0), 
            Z(this, "_optionalPermissions", void 0), Z(this, "_contentScriptPaths", void 0), 
            Z(this, "_browser", void 0), Z(this, "_name", void 0), Z(this, "_shortName", void 0), 
            Z(this, "_os", void 0), t.short_name || Q("short_name not defined in manifest"), 
            this._brand = t.short_name, this._extensionVersion = t.version, this._permissions = t.permissions, 
            this._optionalPermissions = t.optional_permissions || [], this._name = t.name, this._shortName = t.short_name, 
            this._contentScriptPaths = this.extractPathsFromContentScripts(t.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = tt.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = tt.Firefox : this._browser = tt.Other, 
            Q("extension version: %s", this._extensionVersion);
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
              case Y.Mac:
              case Y.Win:
                return this._os;

              default:
                return Y.Unknown;
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
        handleGetPlatformInfo(t) {
            t && (this._os = t.os);
        }
        extractPathsFromContentScripts(t) {
            if (!t) return [];
            const e = t.reduce(function(t, e) {
                return e.js.forEach(e => {
                    const n = e.split("/");
                    t.add(n[n.length - 1]);
                }), t;
            }, new Set());
            return Array.from(e);
        }
    }(chrome.runtime.getManifest());
    chrome.runtime.getPlatformInfo(et.handleGetPlatformInfo.bind(et));
    const nt = {
        props: {
            isShowDashboard: Boolean
        },
        computed: {
            vpnProductInfoLink: () => s[et.brand]
        }
    };
    var rt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("header", {
            staticClass: "header"
        }, [ n("div", {
            staticClass: "header-text",
            class: {
                "text-center": !t.isShowDashboard
            }
        }, [ t._v("\n\t\t" + t._s(t.translate("product_name")) + "\n\t") ]), t._v(" "), t.isShowDashboard ? n("a", {
            staticClass: "info-link",
            attrs: {
                target: "_blank",
                href: t.vpnProductInfoLink
            }
        }, [ n("div", {
            staticClass: "info-icon"
        }, [ n("div", {
            staticClass: "info-text-block"
        }, [ n("p", {
            staticClass: "info_descript"
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("learn_more")) + "\n\t\t\t\t") ]) ]) ]) ]) : t._e() ]);
    };
    rt._withStripped = !0;
    var it = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof nt ? nt.options : nt) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/HeaderBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: rt,
        staticRenderFns: []
    });
    function ot(t) {
        chrome.tabs.create({
            url: t
        });
    }
    const at = {
        methods: {
            onBtnClicked() {
                ot(s[et.brand]);
            }
        }
    };
    var st = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("install_vpn_product")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("learn_more")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    st._withStripped = !0;
    var ct = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof at ? at.options : at) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/InstallVpnClientBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: st,
        staticRenderFns: []
    });
    const lt = {
        props: {
            bgState: Object,
            isShowDashboard: Boolean
        },
        computed: {
            ipAddress() {
                return this.bgState.vpn.ipAddress;
            },
            isConnectedToNetwork() {
                return this.bgState.vpn.isConnectedToNetwork;
            },
            isDisconnected() {
                return this.bgState.vpn.vpnStatus === r.Disconnected;
            },
            isConnected() {
                return this.bgState.vpn.vpnStatus === r.Connected;
            },
            isReconnectingToAnotherGateway() {
                return this.bgState.vpn.isReconnectingToAnotherGateway;
            }
        },
        methods: {
            getIpAddressTooltipText() {
                let t;
                return this.isShowDashboard ? this.isConnected ? t = "virtual_ip_address_explanation" : this.isDisconnected && (t = "turn_on_vpn_reason") : t = "this_is_your_current_ip_address", 
                this.translate(t);
            }
        }
    };
    var dt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("footer", [ t.isConnectedToNetwork ? n("div", {
            staticClass: "footer-wrap"
        }, [ n("div", {
            staticClass: "footer-text"
        }, [ t._v("\n\t\t\t" + t._s(t.isConnected ? t.translate("virtual_ip_address") : t.translate("your_ip_address")) + "\n\t\t") ]), t._v(" "), t.isDisconnected && !t.isReconnectingToAnotherGateway || t.isConnected || !t.isShowDashboard ? n("div", {
            staticClass: "footer-text ip--numb",
            class: {
                users: t.isDisconnected && !t.isReconnectingToAnotherGateway || !t.isShowDashboard,
                virtual: t.isConnected
            }
        }, [ "" === t.ipAddress ? n("a", {
            staticClass: "locating",
            attrs: {
                href: "#"
            }
        }, [ n("div", {
            staticClass: "locating-text"
        }, [ n("span", [ t._v("\n\t\t\t\t\t\t" + t._s(t.translate("locating")) + "\n\t\t\t\t\t") ]), t._v(" "), n("div", {
            staticClass: "pre-ellipsis"
        }), t._v(" "), n("div", {
            staticClass: "ip-info"
        }, [ n("p", {
            staticClass: "ip-info-text"
        }, [ t._v("\n\t\t\t\t\t\t\t" + t._s(t.translate("waiting_for_ip_address_to_be_assigned_to_your_computer")) + "\n\t\t\t\t\t\t") ]) ]) ]) ]) : n("a", {
            staticClass: "addr-link",
            attrs: {
                href: "#"
            }
        }, [ n("span", [ t._v(" " + t._s(t.ipAddress) + " ") ]), t._v(" "), n("div", {
            staticClass: "ip-info"
        }, [ n("p", {
            staticClass: "ip-info-text"
        }, [ t._v("\n\t\t\t\t\t\t" + t._s(t.getIpAddressTooltipText()) + "\n\t\t\t\t\t") ]) ]) ]) ]) : t._e() ]) : t._e() ]);
    };
    dt._withStripped = !0;
    var ut = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof lt ? lt.options : lt) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/IpAddressBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: dt,
        staticRenderFns: []
    }), pt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("div", {
            staticClass: "wrapper-loading"
        }, [ e("span", [ this._v("\n\t\t\t" + this._s(this.translate("loading")) + "\n\t\t") ]), this._v(" "), e("div", {
            staticClass: "pre-ellipsis"
        }) ]) ]);
    };
    pt._withStripped = !0;
    var ft = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/LoadingBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: pt,
        staticRenderFns: []
    }, 0, {}), vt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("div", {
            staticClass: "wrapper-main"
        }, [ e("div", {
            staticClass: "wrpper-icon-block"
        }, [ e("div", {
            staticClass: "icon offline"
        }), this._v(" "), e("div", {
            staticClass: "txt"
        }, [ this._v("\n\t\t\t\t" + this._s(this.translate("make_sure_your_internet_connection_works_properly")) + "\n\t\t\t") ]) ]) ]) ]);
    };
    vt._withStripped = !0;
    var ht = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/OfflineBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: vt,
        staticRenderFns: []
    }, 0, {});
    const mt = {
        computed: {
            reinstallVpnProductHelpPageUrl: () => s[et.brand],
            reinstallBrowserHelpPageUrl: () => l[et.brand]
        }
    };
    var _t = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt wide"
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("something_is_not_right")) + "\n\t\t\t\t") ]), n("br"), n("br"), t._v(" "), n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("please_try_reinstalling_vpn_product")) + "\n\t\t\t\t") ]), t._v(" "), n("span", [ t._v(" (") ]), t._v(" "), n("a", {
            staticClass: "txt-how-link",
            attrs: {
                target: "_blank",
                href: t.reinstallVpnProductHelpPageUrl
            }
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("see_how")) + "\n\t\t\t\t") ]), t._v(" "), n("span", [ t._v("). ") ]), t._v(" "), n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("if_that_does_not_work_try_reinstalling_browser_product")) + "\n\t\t\t\t") ]), t._v(" "), n("span", [ t._v(" (") ]), t._v(" "), n("a", {
            staticClass: "txt-how-link",
            attrs: {
                target: "_blank",
                href: t.reinstallBrowserHelpPageUrl
            }
        }, [ t._v("\n\t\t\t\t\t" + t._s(t.translate("see_how")) + "\n\t\t\t\t") ]), t._v(" "), n("span", [ t._v(").") ]) ]) ]) ]) ]);
    };
    _t._withStripped = !0;
    var gt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof mt ? mt.options : mt) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/ReinstallBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: _t,
        staticRenderFns: []
    }), yt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("div", {
            staticClass: "wrapper-main"
        }, [ e("div", {
            staticClass: "wrpper-icon-block"
        }, [ e("div", {
            staticClass: "icon icon update-download"
        }), this._v(" "), e("div", {
            staticClass: "txt"
        }, [ this._v("\n\t\t\t\t" + this._s(this.translate("something_not_right_please_restart")) + "\n\t\t\t") ]) ]) ]) ]);
    };
    yt._withStripped = !0;
    var Ct = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/RestartBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: yt,
        staticRenderFns: []
    }, 0, {});
    const wt = {
        methods: {
            onBtnClicked() {
                ot("secure://settings/help");
            }
        }
    };
    var bt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("update_browser_product_to_use_this_feature")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("update_now")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    bt._withStripped = !0;
    var St = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof wt ? wt.options : wt) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/UpdateBrowserBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: bt,
        staticRenderFns: []
    });
    const kt = {
        methods: {
            onBtnClicked() {
                ot(`secure://extensions/?id=${chrome.runtime.id}`);
            }
        }
    };
    var At = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("you_need_to_update_your_vpn_product_extension")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("update_now")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    At._withStripped = !0;
    var xt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof kt ? kt.options : kt) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/UpdateExtensionBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: At,
        staticRenderFns: []
    });
    const Ot = {
        methods: {
            onBtnClicked() {
                ot(c[et.brand]);
            }
        }
    };
    var $t = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper"
        }, [ n("div", {
            staticClass: "wrapper-main"
        }, [ n("div", {
            staticClass: "wrpper-icon-block"
        }, [ n("div", {
            staticClass: "icon update-download"
        }), t._v(" "), n("div", {
            staticClass: "txt"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("update_vpn_product_to_use_this_feature")) + "\n\t\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "wrapper-btn"
        }, [ n("a", {
            staticClass: "btn",
            attrs: {
                href: "#"
            },
            on: {
                click: t.onBtnClicked
            }
        }, [ n("span", [ t._v("\n\t\t\t\t\t" + t._s(t.translate("update_now")) + "\n\t\t\t\t") ]) ]) ]) ]) ]);
    };
    $t._withStripped = !0;
    const Ft = {
        components: {
            ActivateVpnLicenseBase: I,
            DashboardBase: q,
            ErrorBase: X,
            HeaderBase: it,
            InstallVpnClientBase: ct,
            IpAddressBase: ut,
            LoadingBase: ft,
            OfflineBase: ht,
            ReinstallBase: gt,
            RestartBase: Ct,
            UpdateBrowserBase: St,
            UpdateExtensionBase: xt,
            UpdateVpnClientBase: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof Ot ? Ot.options : Ot) || {};
                return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/notifications/UpdateVpnClientBase.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: $t,
                staticRenderFns: []
            })
        },
        props: {
            bgState: Object
        },
        computed: {
            isConnectedToNetwork() {
                return this.bgState.vpn.isConnectedToNetwork;
            },
            isExtensionOld() {
                return this.bgState.vpn.apiCompatibility === u.ExtensionOld;
            },
            isVpnClientOld() {
                return this.bgState.vpn.apiCompatibility === u.VpnClientOld;
            },
            isShowUpdateBrowser() {
                return !!this.bgState.spc && !this.bgState.spc.isBrowserApiAvailable;
            },
            isNativeMessagingHostFound() {
                return this.bgState.vpn.isNativeMessagingHostFound;
            },
            isVpnLicenseActive() {
                return this.bgState.vpn.licenseInfo && this.bgState.vpn.licenseInfo.status === o.Valid;
            },
            isReinstallRequired: () => !1,
            isRestartRequired: () => !1,
            isErrorOccurred() {
                return this.bgState.vpn.errorInfo || this.bgState.vpn.vpnApiError;
            },
            isShowDashboard() {
                return this.isConnectedToNetwork && !this.isExtensionOld && !this.isVpnClientOld && this.isBrowserApiAvailable && this.isNativeMessagingHostFound && this.isVpnLicenseActive && !this.isReinstallRequired && !this.isRestartRequired && !this.isErrorOccurred;
            },
            isLoading() {
                const t = !(this.bgState.vpn.licenseInfo && this.bgState.vpn.selectedGateway && this.bgState.vpn.optimalGateway && this.bgState.vpn.gateways.length);
                return !this.isErrorOccurred && t;
            }
        }
    };
    var Et = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "container"
        }, [ n("HeaderBase", {
            attrs: {
                "is-show-dashboard": t.isShowDashboard
            }
        }), t._v(" "), t.isConnectedToNetwork ? t.isErrorOccurred ? n("ErrorBase") : t.isShowUpdateBrowser ? n("UpdateBrowserBase") : t.isNativeMessagingHostFound ? t.isLoading ? n("LoadingBase") : t.isExtensionOld ? n("UpdateExtensionBase") : t.isVpnClientOld ? n("UpdateVpnClientBase") : t.isVpnLicenseActive ? t.isReinstallRequired ? n("ReinstallBase") : t.isRestartRequired ? n("RestartBase") : n("DashboardBase", {
            attrs: {
                "bg-state": t.bgState
            }
        }) : n("ActivateVpnLicenseBase") : n("InstallVpnClientBase") : n("OfflineBase"), t._v(" "), n("IpAddressBase", {
            attrs: {
                "bg-state": t.bgState,
                "is-show-dashboard": t.isShowDashboard
            }
        }) ], 1);
    };
    Et._withStripped = !0;
    var It = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/avg/Popup.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({}, 0, {
        extends: function(t, e, n, r, i, o, a, s) {
            const c = ("function" == typeof Ft ? Ft.options : Ft) || {};
            return c.__file = "/home/docker-agent/work/18efcff4248d8e85/src/html/popup/generic/PopupBase.vue", 
            c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
            c._scopeId = void 0, c;
        }({
            render: Et,
            staticRenderFns: []
        })
    }), Rt = Object.freeze({});
    function Lt(t) {
        return null == t;
    }
    function Nt(t) {
        return null != t;
    }
    function Dt(t) {
        return !0 === t;
    }
    function Tt(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
    }
    function Gt(t) {
        return null !== t && "object" == typeof t;
    }
    var Pt = Object.prototype.toString;
    function Mt(t) {
        return "[object Object]" === Pt.call(t);
    }
    function Bt(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
    }
    function jt(t) {
        return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
    }
    function Vt(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
    }
    function Ut(t, e) {
        for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()];
        } : function(t) {
            return n[t];
        };
    }
    Ut("slot,component", !0);
    var Ht = Ut("key,ref,slot,slot-scope,is");
    function zt(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
        }
    }
    var Wt = Object.prototype.hasOwnProperty;
    function qt(t, e) {
        return Wt.call(t, e);
    }
    function Kt(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n));
        };
    }
    var Jt = /-(\w)/g, Xt = Kt(function(t) {
        return t.replace(Jt, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }), Zt = Kt(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }), Qt = /\B([A-Z])/g, Yt = Kt(function(t) {
        return t.replace(Qt, "-$1").toLowerCase();
    }), te = Function.prototype.bind ? function(t, e) {
        return t.bind(e);
    } : function(t, e) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
        }
        return n._length = t.length, n;
    };
    function ee(t, e) {
        e = e || 0;
        for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
        return r;
    }
    function ne(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
    }
    function re(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && ne(e, t[n]);
        return e;
    }
    function ie(t, e, n) {}
    var oe = function(t, e, n) {
        return !1;
    }, ae = function(t) {
        return t;
    };
    function se(t, e) {
        if (t === e) return !0;
        var n = Gt(t), r = Gt(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
            var i = Array.isArray(t), o = Array.isArray(e);
            if (i && o) return t.length === e.length && t.every(function(t, n) {
                return se(t, e[n]);
            });
            if (i || o) return !1;
            var a = Object.keys(t), s = Object.keys(e);
            return a.length === s.length && a.every(function(n) {
                return se(t[n], e[n]);
            });
        } catch (t) {
            return !1;
        }
    }
    function ce(t, e) {
        for (var n = 0; n < t.length; n++) if (se(t[n], e)) return n;
        return -1;
    }
    function le(t) {
        var e = !1;
        return function() {
            e || (e = !0, t.apply(this, arguments));
        };
    }
    var de = [ "component", "directive", "filter" ], ue = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], pe = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: oe,
        isReservedAttr: oe,
        isUnknownElement: oe,
        getTagNamespace: ie,
        parsePlatformTagName: ae,
        mustUseProp: oe,
        _lifecycleHooks: ue
    };
    function fe(t, e, n, r) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        });
    }
    var ve, he = /[^\w.$]/, me = "__proto__" in {}, _e = "undefined" != typeof window, ge = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, ye = ge && WXEnvironment.platform.toLowerCase(), Ce = _e && window.navigator.userAgent.toLowerCase(), we = Ce && /msie|trident/.test(Ce), be = Ce && Ce.indexOf("msie 9.0") > 0, Se = Ce && Ce.indexOf("edge/") > 0, ke = (Ce && Ce.indexOf("android"), 
    Ce && /iphone|ipad|ipod|ios/.test(Ce) || "ios" === ye), Ae = (Ce && /chrome\/\d+/.test(Ce), 
    {}.watch), xe = !1;
    if (_e) try {
        var Oe = {};
        Object.defineProperty(Oe, "passive", {
            get: function() {
                xe = !0;
            }
        }), window.addEventListener("test-passive", null, Oe);
    } catch (t) {}
    var $e = function() {
        return void 0 === ve && (ve = !_e && !ge && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), 
        ve;
    }, Fe = _e && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function Ee(t) {
        return "function" == typeof t && /native code/.test(t.toString());
    }
    var Ie, Re = "undefined" != typeof Symbol && Ee(Symbol) && "undefined" != typeof Reflect && Ee(Reflect.ownKeys);
    Ie = "undefined" != typeof Set && Ee(Set) ? Set : function() {
        function t() {
            this.set = Object.create(null);
        }
        return t.prototype.has = function(t) {
            return !0 === this.set[t];
        }, t.prototype.add = function(t) {
            this.set[t] = !0;
        }, t.prototype.clear = function() {
            this.set = Object.create(null);
        }, t;
    }();
    var Le = ie, Ne = 0, De = function() {
        this.id = Ne++, this.subs = [];
    };
    De.prototype.addSub = function(t) {
        this.subs.push(t);
    }, De.prototype.removeSub = function(t) {
        zt(this.subs, t);
    }, De.prototype.depend = function() {
        De.target && De.target.addDep(this);
    }, De.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
    }, De.target = null;
    var Te = [];
    function Ge(t) {
        De.target && Te.push(De.target), De.target = t;
    }
    function Pe() {
        De.target = Te.pop();
    }
    var Me = function(t, e, n, r, i, o, a, s) {
        this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, 
        this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
        this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
        this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
        this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
        this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }, Be = {
        child: {
            configurable: !0
        }
    };
    Be.child.get = function() {
        return this.componentInstance;
    }, Object.defineProperties(Me.prototype, Be);
    var je = function(t) {
        void 0 === t && (t = "");
        var e = new Me();
        return e.text = t, e.isComment = !0, e;
    };
    function Ve(t) {
        return new Me(void 0, void 0, void 0, String(t));
    }
    function Ue(t) {
        var e = new Me(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
        return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
        e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
        e.isCloned = !0, e;
    }
    var He = Array.prototype, ze = Object.create(He);
    [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
        var e = He[t];
        fe(ze, t, function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i, o = e.apply(this, n), a = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                i = n;
                break;

              case "splice":
                i = n.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), o;
        });
    });
    var We = Object.getOwnPropertyNames(ze), qe = !0;
    function Ke(t) {
        qe = t;
    }
    var Je = function(t) {
        this.value = t, this.dep = new De(), this.vmCount = 0, fe(t, "__ob__", this), Array.isArray(t) ? ((me ? function(t, e, n) {
            t.__proto__ = e;
        } : function(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                fe(t, o, e[o]);
            }
        })(t, ze, We), this.observeArray(t)) : this.walk(t);
    };
    function Xe(t, e) {
        var n;
        if (Gt(t) && !(t instanceof Me)) return qt(t, "__ob__") && t.__ob__ instanceof Je ? n = t.__ob__ : qe && !$e() && (Array.isArray(t) || Mt(t)) && Object.isExtensible(t) && !t._isVue && (n = new Je(t)), 
        e && n && n.vmCount++, n;
    }
    function Ze(t, e, n, r, i) {
        var o = new De(), a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get;
            s || 2 !== arguments.length || (n = t[e]);
            var c = a && a.set, l = !i && Xe(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = s ? s.call(t) : n;
                    return De.target && (o.depend(), l && (l.dep.depend(), Array.isArray(e) && function t(e) {
                        for (var n = void 0, r = 0, i = e.length; r < i; r++) (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), 
                        Array.isArray(n) && t(n);
                    }(e))), e;
                },
                set: function(e) {
                    var r = s ? s.call(t) : n;
                    e === r || e != e && r != r || (c ? c.call(t, e) : n = e, l = !i && Xe(e), o.notify());
                }
            });
        }
    }
    function Qe(t, e, n) {
        if (Array.isArray(t) && Bt(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
        n;
        if (e in t && !(e in Object.prototype)) return t[e] = n, n;
        var r = t.__ob__;
        return t._isVue || r && r.vmCount ? n : r ? (Ze(r.value, e, n), r.dep.notify(), 
        n) : (t[e] = n, n);
    }
    function Ye(t, e) {
        if (Array.isArray(t) && Bt(e)) t.splice(e, 1); else {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || qt(t, e) && (delete t[e], n && n.dep.notify());
        }
    }
    Je.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) Ze(t, e[n]);
    }, Je.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++) Xe(t[e]);
    };
    var tn = pe.optionMergeStrategies;
    function en(t, e) {
        if (!e) return t;
        for (var n, r, i, o = Object.keys(e), a = 0; a < o.length; a++) r = t[n = o[a]], 
        i = e[n], qt(t, n) ? Mt(r) && Mt(i) && en(r, i) : Qe(t, n, i);
        return t;
    }
    function nn(t, e, n) {
        return n ? function() {
            var r = "function" == typeof e ? e.call(n, n) : e, i = "function" == typeof t ? t.call(n, n) : t;
            return r ? en(r, i) : i;
        } : e ? t ? function() {
            return en("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
        } : e : t;
    }
    function rn(t, e) {
        return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
    }
    function on(t, e, n, r) {
        var i = Object.create(t || null);
        return e ? ne(i, e) : i;
    }
    tn.data = function(t, e, n) {
        return n ? nn(t, e, n) : e && "function" != typeof e ? t : nn(t, e);
    }, ue.forEach(function(t) {
        tn[t] = rn;
    }), de.forEach(function(t) {
        tn[t + "s"] = on;
    }), tn.watch = function(t, e, n, r) {
        if (t === Ae && (t = void 0), e === Ae && (e = void 0), !e) return Object.create(t || null);
        if (!t) return e;
        var i = {};
        for (var o in ne(i, t), e) {
            var a = i[o], s = e[o];
            a && !Array.isArray(a) && (a = [ a ]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
        }
        return i;
    }, tn.props = tn.methods = tn.inject = tn.computed = function(t, e, n, r) {
        if (!t) return e;
        var i = Object.create(null);
        return ne(i, t), e && ne(i, e), i;
    }, tn.provide = nn;
    var an = function(t, e) {
        return void 0 === e ? t : e;
    };
    function sn(t, e, n) {
        "function" == typeof e && (e = e.options), function(t, e) {
            var n = t.props;
            if (n) {
                var r, i, o = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (i = n[r]) && (o[Xt(i)] = {
                    type: null
                }); else if (Mt(n)) for (var a in n) i = n[a], o[Xt(a)] = Mt(i) ? i : {
                    type: i
                };
                t.props = o;
            }
        }(e), function(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {
                    from: n[i]
                }; else if (Mt(n)) for (var o in n) {
                    var a = n[o];
                    r[o] = Mt(a) ? ne({
                        from: o
                    }, a) : {
                        from: a
                    };
                }
            }
        }(e), function(t) {
            var n = e.directives;
            if (n) for (var r in n) {
                var i = n[r];
                "function" == typeof i && (n[r] = {
                    bind: i,
                    update: i
                });
            }
        }();
        var r = e.extends;
        if (r && (t = sn(t, r, n)), e.mixins) for (var i = 0, o = e.mixins.length; i < o; i++) t = sn(t, e.mixins[i], n);
        var a, s = {};
        for (a in t) c(a);
        for (a in e) qt(t, a) || c(a);
        function c(r) {
            var i = tn[r] || an;
            s[r] = i(t[r], e[r], n, r);
        }
        return s;
    }
    function cn(t, e, n, r) {
        if ("string" == typeof n) {
            var i = t[e];
            if (qt(i, n)) return i[n];
            var o = Xt(n);
            if (qt(i, o)) return i[o];
            var a = Zt(o);
            return qt(i, a) ? i[a] : i[n] || i[o] || i[a];
        }
    }
    function ln(t, e, n, r) {
        var i = e[t], o = !qt(n, t), a = n[t], s = pn(Boolean, i.type);
        if (s > -1) if (o && !qt(i, "default")) a = !1; else if ("" === a || a === Yt(t)) {
            var c = pn(String, i.type);
            (c < 0 || s < c) && (a = !0);
        }
        if (void 0 === a) {
            a = function(t, e, n) {
                if (qt(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== dn(e.type) ? r.call(t) : r;
                }
            }(r, i, t);
            var l = qe;
            Ke(!0), Xe(a), Ke(l);
        }
        return a;
    }
    function dn(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
    }
    function un(t, e) {
        return dn(t) === dn(e);
    }
    function pn(t, e) {
        if (!Array.isArray(e)) return un(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++) if (un(e[n], t)) return n;
        return -1;
    }
    function fn(t, e, n) {
        if (e) for (var r = e; r = r.$parent; ) {
            var i = r.$options.errorCaptured;
            if (i) for (var o = 0; o < i.length; o++) try {
                if (!1 === i[o].call(r, t, e, n)) return;
            } catch (t) {
                vn(t, r, "errorCaptured hook");
            }
        }
        vn(t, e, n);
    }
    function vn(t, e, n) {
        if (pe.errorHandler) try {
            return pe.errorHandler.call(null, t, e, n);
        } catch (t) {
            hn(t);
        }
        hn(t);
    }
    function hn(t, e, n) {
        if (!_e && !ge || "undefined" == typeof console) throw t;
        console.error(t);
    }
    var mn, _n, gn = [], yn = !1;
    function Cn() {
        yn = !1;
        var t = gn.slice(0);
        gn.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
    }
    var wn = !1;
    if ("undefined" != typeof setImmediate && Ee(setImmediate)) _n = function() {
        setImmediate(Cn);
    }; else if ("undefined" == typeof MessageChannel || !Ee(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) _n = function() {
        setTimeout(Cn, 0);
    }; else {
        var bn = new MessageChannel(), Sn = bn.port2;
        bn.port1.onmessage = Cn, _n = function() {
            Sn.postMessage(1);
        };
    }
    if ("undefined" != typeof Promise && Ee(Promise)) {
        var kn = Promise.resolve();
        mn = function() {
            kn.then(Cn), ke && setTimeout(ie);
        };
    } else mn = _n;
    function An(t, e) {
        var n;
        if (gn.push(function() {
            if (t) try {
                t.call(e);
            } catch (t) {
                fn(t, e, "nextTick");
            } else n && n(e);
        }), yn || (yn = !0, wn ? _n() : mn()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
            n = t;
        });
    }
    var xn = new Ie();
    function On(t) {
        !function t(e, n) {
            var r, i, o = Array.isArray(e);
            if (!(!o && !Gt(e) || Object.isFrozen(e) || e instanceof Me)) {
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a);
                }
                if (o) for (r = e.length; r--; ) t(e[r], n); else for (r = (i = Object.keys(e)).length; r--; ) t(e[i[r]], n);
            }
        }(t, xn), xn.clear();
    }
    var $n, Fn = Kt(function(t) {
        var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return {
            name: t = r ? t.slice(1) : t,
            once: n,
            capture: r,
            passive: e
        };
    });
    function En(t) {
        function e() {
            var t = arguments, n = e.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
        }
        return e.fns = t, e;
    }
    function In(t, e, n, r, i) {
        var o, a, s, c;
        for (o in t) a = t[o], s = e[o], c = Fn(o), Lt(a) || (Lt(s) ? (Lt(a.fns) && (a = t[o] = En(a)), 
        n(c.name, a, c.once, c.capture, c.passive, c.params)) : a !== s && (s.fns = a, t[o] = s));
        for (o in e) Lt(t[o]) && r((c = Fn(o)).name, e[o], c.capture);
    }
    function Rn(t, e, n) {
        var r;
        t instanceof Me && (t = t.data.hook || (t.data.hook = {}));
        var i = t[e];
        function o() {
            n.apply(this, arguments), zt(r.fns, o);
        }
        Lt(i) ? r = En([ o ]) : Nt(i.fns) && Dt(i.merged) ? (r = i).fns.push(o) : r = En([ i, o ]), 
        r.merged = !0, t[e] = r;
    }
    function Ln(t, e, n, r, i) {
        if (Nt(e)) {
            if (qt(e, n)) return t[n] = e[n], i || delete e[n], !0;
            if (qt(e, r)) return t[n] = e[r], i || delete e[r], !0;
        }
        return !1;
    }
    function Nn(t) {
        return Tt(t) ? [ Ve(t) ] : Array.isArray(t) ? function t(e, n) {
            var r, i, o, a, s = [];
            for (r = 0; r < e.length; r++) Lt(i = e[r]) || "boolean" == typeof i || (a = s[o = s.length - 1], 
            Array.isArray(i) ? i.length > 0 && (Dn((i = t(i, (n || "") + "_" + r))[0]) && Dn(a) && (s[o] = Ve(a.text + i[0].text), 
            i.shift()), s.push.apply(s, i)) : Tt(i) ? Dn(a) ? s[o] = Ve(a.text + i) : "" !== i && s.push(Ve(i)) : Dn(i) && Dn(a) ? s[o] = Ve(a.text + i.text) : (Dt(e._isVList) && Nt(i.tag) && Lt(i.key) && Nt(n) && (i.key = "__vlist" + n + "_" + r + "__"), 
            s.push(i)));
            return s;
        }(t) : void 0;
    }
    function Dn(t) {
        return Nt(t) && Nt(t.text) && !1 === t.isComment;
    }
    function Tn(t, e) {
        return (t.__esModule || Re && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
        Gt(t) ? e.extend(t) : t;
    }
    function Gn(t) {
        return t.isComment && t.asyncFactory;
    }
    function Pn(t) {
        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (Nt(n) && (Nt(n.componentOptions) || Gn(n))) return n;
        }
    }
    function Mn(t, e, n) {
        n ? $n.$once(t, e) : $n.$on(t, e);
    }
    function Bn(t, e) {
        $n.$off(t, e);
    }
    function jn(t, e, n) {
        $n = t, In(e, n || {}, Mn, Bn), $n = void 0;
    }
    function Vn(t, e) {
        var n = {};
        if (!t) return n;
        for (var r = 0, i = t.length; r < i; r++) {
            var o = t[r], a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(o); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
            }
        }
        for (var l in n) n[l].every(Un) && delete n[l];
        return n;
    }
    function Un(t) {
        return t.isComment && !t.asyncFactory || " " === t.text;
    }
    function Hn(t, e) {
        e = e || {};
        for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? Hn(t[n], e) : e[t[n].key] = t[n].fn;
        return e;
    }
    var zn = null;
    function Wn(t) {
        for (;t && (t = t.$parent); ) if (t._inactive) return !0;
        return !1;
    }
    function qn(t, e) {
        if (e) {
            if (t._directInactive = !1, Wn(t)) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) qn(t.$children[n]);
            Kn(t, "activated");
        }
    }
    function Kn(t, e) {
        Ge();
        var n = t.$options[e];
        if (n) for (var r = 0, i = n.length; r < i; r++) try {
            n[r].call(t);
        } catch (n) {
            fn(n, t, e + " hook");
        }
        t._hasHookEvent && t.$emit("hook:" + e), Pe();
    }
    var Jn = [], Xn = [], Zn = {}, Qn = !1, Yn = !1, tr = 0;
    function er() {
        var t, e;
        for (Yn = !0, Jn.sort(function(t, e) {
            return t.id - e.id;
        }), tr = 0; tr < Jn.length; tr++) e = (t = Jn[tr]).id, Zn[e] = null, t.run();
        var n = Xn.slice(), r = Jn.slice();
        tr = Jn.length = Xn.length = 0, Zn = {}, Qn = Yn = !1, function(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, qn(t[e], !0);
        }(n), function(t) {
            for (var e = t.length; e--; ) {
                var n = t[e], r = n.vm;
                r._watcher === n && r._isMounted && Kn(r, "updated");
            }
        }(r), Fe && pe.devtools && Fe.emit("flush");
    }
    var nr = 0, rr = function(t, e, n, r, i) {
        this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
        this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
        this.cb = n, this.id = ++nr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
        this.newDeps = [], this.depIds = new Ie(), this.newDepIds = new Ie(), this.expression = "", 
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            if (!he.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]];
                    }
                    return t;
                };
            }
        }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
    };
    rr.prototype.get = function() {
        var t;
        Ge(this);
        var e = this.vm;
        try {
            t = this.getter.call(e, e);
        } catch (t) {
            if (!this.user) throw t;
            fn(t, e, 'getter for watcher "' + this.expression + '"');
        } finally {
            this.deep && On(t), Pe(), this.cleanupDeps();
        }
        return t;
    }, rr.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, rr.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
        this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, rr.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
            var e = t.id;
            if (null == Zn[e]) {
                if (Zn[e] = !0, Yn) {
                    for (var n = Jn.length - 1; n > tr && Jn[n].id > t.id; ) n--;
                    Jn.splice(n + 1, 0, t);
                } else Jn.push(t);
                Qn || (Qn = !0, An(er));
            }
        }(this);
    }, rr.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || Gt(t) || this.deep) {
                var e = this.value;
                if (this.value = t, this.user) try {
                    this.cb.call(this.vm, t, e);
                } catch (t) {
                    fn(t, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, t, e);
            }
        }
    }, rr.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
    }, rr.prototype.depend = function() {
        for (var t = this.deps.length; t--; ) this.deps[t].depend();
    }, rr.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || zt(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            this.active = !1;
        }
    };
    var ir = {
        enumerable: !0,
        configurable: !0,
        get: ie,
        set: ie
    };
    function or(t, e, n) {
        ir.get = function() {
            return this[e][n];
        }, ir.set = function(t) {
            this[e][n] = t;
        }, Object.defineProperty(t, n, ir);
    }
    var ar = {
        lazy: !0
    };
    function sr(t, e, n) {
        var r = !$e();
        "function" == typeof n ? (ir.get = r ? cr(e) : n, ir.set = ie) : (ir.get = n.get ? r && !1 !== n.cache ? cr(e) : n.get : ie, 
        ir.set = n.set ? n.set : ie), Object.defineProperty(t, e, ir);
    }
    function cr(t) {
        return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e) return e.dirty && e.evaluate(), De.target && e.depend(), e.value;
        };
    }
    function lr(t, e, n, r) {
        return Mt(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
    }
    function dr(t, e) {
        if (t) {
            for (var n = Object.create(null), r = Re ? Reflect.ownKeys(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }) : Object.keys(t), i = 0; i < r.length; i++) {
                for (var o = r[i], a = t[o].from, s = e; s; ) {
                    if (s._provided && qt(s._provided, a)) {
                        n[o] = s._provided[a];
                        break;
                    }
                    s = s.$parent;
                }
                if (!s && "default" in t[o]) {
                    var c = t[o].default;
                    n[o] = "function" == typeof c ? c.call(e) : c;
                }
            }
            return n;
        }
    }
    function ur(t, e) {
        var n, r, i, o, a;
        if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
        i = t.length; r < i; r++) n[r] = e(t[r], r); else if ("number" == typeof t) for (n = new Array(t), 
        r = 0; r < t; r++) n[r] = e(r + 1, r); else if (Gt(t)) for (o = Object.keys(t), 
        n = new Array(o.length), r = 0, i = o.length; r < i; r++) a = o[r], n[r] = e(t[a], a, r);
        return Nt(n) && (n._isVList = !0), n;
    }
    function pr(t, e, n, r) {
        var i, o = this.$scopedSlots[t];
        if (o) n = n || {}, r && (n = ne(ne({}, r), n)), i = o(n) || e; else {
            var a = this.$slots[t];
            a && (a._rendered = !0), i = a || e;
        }
        var s = n && n.slot;
        return s ? this.$createElement("template", {
            slot: s
        }, i) : i;
    }
    function fr(t) {
        return cn(this.$options, "filters", t) || ae;
    }
    function vr(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
    }
    function hr(t, e, n, r, i) {
        var o = pe.keyCodes[e] || n;
        return i && r && !pe.keyCodes[e] ? vr(i, r) : o ? vr(o, t) : r ? Yt(r) !== e : void 0;
    }
    function mr(t, e, n, r, i) {
        if (n && Gt(n)) {
            var o;
            Array.isArray(n) && (n = re(n));
            var a = function(a) {
                if ("class" === a || "style" === a || Ht(a)) o = t; else {
                    var s = t.attrs && t.attrs.type;
                    o = r || pe.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                a in o || (o[a] = n[a], i && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                    n[a] = t;
                }));
            };
            for (var s in n) a(s);
        }
        return t;
    }
    function _r(t, e) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[t];
        return r && !e ? r : (yr(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), 
        r);
    }
    function gr(t, e, n) {
        return yr(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }
    function yr(t, e, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Cr(t[r], e + "_" + r, n); else Cr(t, e, n);
    }
    function Cr(t, e, n) {
        t.isStatic = !0, t.key = e, t.isOnce = n;
    }
    function wr(t, e) {
        if (e && Mt(e)) {
            var n = t.on = t.on ? ne({}, t.on) : {};
            for (var r in e) {
                var i = n[r], o = e[r];
                n[r] = i ? [].concat(i, o) : o;
            }
        }
        return t;
    }
    function br(t) {
        t._o = gr, t._n = Vt, t._s = jt, t._l = ur, t._t = pr, t._q = se, t._i = ce, t._m = _r, 
        t._f = fr, t._k = hr, t._b = mr, t._v = Ve, t._e = je, t._u = Hn, t._g = wr;
    }
    function Sr(t, e, n, r, i) {
        var o, a = i.options;
        qt(r, "_uid") ? (o = Object.create(r))._original = r : (o = r, r = r._original);
        var s = Dt(a._compiled), c = !s;
        this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || Rt, 
        this.injections = dr(a.inject, r), this.slots = function() {
            return Vn(n, r);
        }, s && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || Rt), 
        a._scopeId ? this._c = function(t, e, n, i) {
            var s = Ir(o, t, e, n, i, c);
            return s && !Array.isArray(s) && (s.fnScopeId = a._scopeId, s.fnContext = r), s;
        } : this._c = function(t, e, n, r) {
            return Ir(o, t, e, n, r, c);
        };
    }
    function kr(t, e, n, r) {
        var i = Ue(t);
        return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), 
        i;
    }
    function Ar(t, e) {
        for (var n in e) t[Xt(n)] = e[n];
    }
    br(Sr.prototype);
    var xr = {
        init: function(t, e, n, r) {
            if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var i = t;
                xr.prepatch(i, i);
            } else (t.componentInstance = function(t, e, n, r) {
                var i = {
                    _isComponent: !0,
                    parent: zn,
                    _parentVnode: t,
                    _parentElm: n || null,
                    _refElm: r || null
                }, o = t.data.inlineTemplate;
                return Nt(o) && (i.render = o.render, i.staticRenderFns = o.staticRenderFns), new t.componentOptions.Ctor(i);
            }(t, 0, n, r)).$mount(e ? t.elm : void 0, e);
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            !function(t, e, n, r, i) {
                var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== Rt);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = i, t.$attrs = r.data.attrs || Rt, t.$listeners = n || Rt, 
                e && t.$options.props) {
                    Ke(!1);
                    for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var l = s[c], d = t.$options.props;
                        a[l] = ln(l, d, e, t);
                    }
                    Ke(!0), t.$options.propsData = e;
                }
                n = n || Rt;
                var u = t.$options._parentListeners;
                t.$options._parentListeners = n, jn(t, n, u), o && (t.$slots = Vn(i, r.context), 
                t.$forceUpdate());
            }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
        },
        insert: function(t) {
            var e, n = t.context, r = t.componentInstance;
            r._isMounted || (r._isMounted = !0, Kn(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, 
            Xn.push(e)) : qn(r, !0));
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                if (!(n && (e._directInactive = !0, Wn(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                    Kn(e, "deactivated");
                }
            }(e, !0) : e.$destroy());
        }
    }, Or = Object.keys(xr);
    function $r(t, e, n, r, i) {
        if (!Lt(t)) {
            var o = n.$options._base;
            if (Gt(t) && (t = o.extend(t)), "function" == typeof t) {
                var a;
                if (Lt(t.cid) && void 0 === (t = function(t, e, n) {
                    if (Dt(t.error) && Nt(t.errorComp)) return t.errorComp;
                    if (Nt(t.resolved)) return t.resolved;
                    if (Dt(t.loading) && Nt(t.loadingComp)) return t.loadingComp;
                    if (!Nt(t.contexts)) {
                        var r = t.contexts = [ n ], i = !0, o = function() {
                            for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
                        }, a = le(function(n) {
                            t.resolved = Tn(n, e), i || o();
                        }), s = le(function(e) {
                            Nt(t.errorComp) && (t.error = !0, o());
                        }), c = t(a, s);
                        return Gt(c) && ("function" == typeof c.then ? Lt(t.resolved) && c.then(a, s) : Nt(c.component) && "function" == typeof c.component.then && (c.component.then(a, s), 
                        Nt(c.error) && (t.errorComp = Tn(c.error, e)), Nt(c.loading) && (t.loadingComp = Tn(c.loading, e), 
                        0 === c.delay ? t.loading = !0 : setTimeout(function() {
                            Lt(t.resolved) && Lt(t.error) && (t.loading = !0, o());
                        }, c.delay || 200)), Nt(c.timeout) && setTimeout(function() {
                            Lt(t.resolved) && s(null);
                        }, c.timeout))), i = !1, t.loading ? t.loadingComp : t.resolved;
                    }
                    t.contexts.push(n);
                }(a = t, o, n))) return function(t, e, n, r, i) {
                    var o = je();
                    return o.asyncFactory = t, o.asyncMeta = {
                        data: e,
                        context: n,
                        children: r,
                        tag: i
                    }, o;
                }(a, e, n, r, i);
                e = e || {}, Lr(t), Nt(e.model) && function(t, e) {
                    var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                    (e.props || (e.props = {}))[n] = e.model.value;
                    var i = e.on || (e.on = {});
                    Nt(i[r]) ? i[r] = [ e.model.callback ].concat(i[r]) : i[r] = e.model.callback;
                }(t.options, e);
                var s = function(t, e, n) {
                    var r = e.options.props;
                    if (!Lt(r)) {
                        var i = {}, o = t.attrs, a = t.props;
                        if (Nt(o) || Nt(a)) for (var s in r) {
                            var c = Yt(s);
                            Ln(i, a, s, c, !0) || Ln(i, o, s, c, !1);
                        }
                        return i;
                    }
                }(e, t);
                if (Dt(t.options.functional)) return function(t, e, n, r, i) {
                    var o = t.options, a = {}, s = o.props;
                    if (Nt(s)) for (var c in s) a[c] = ln(c, s, e || Rt); else Nt(n.attrs) && Ar(a, n.attrs), 
                    Nt(n.props) && Ar(a, n.props);
                    var l = new Sr(n, a, i, r, t), d = o.render.call(null, l._c, l);
                    if (d instanceof Me) return kr(d, n, l.parent, o);
                    if (Array.isArray(d)) {
                        for (var u = Nn(d) || [], p = new Array(u.length), f = 0; f < u.length; f++) p[f] = kr(u[f], n, l.parent, o);
                        return p;
                    }
                }(t, s, e, n, r);
                var c = e.on;
                if (e.on = e.nativeOn, Dt(t.options.abstract)) {
                    var l = e.slot;
                    e = {}, l && (e.slot = l);
                }
                !function(t) {
                    for (var e = t.hook || (t.hook = {}), n = 0; n < Or.length; n++) {
                        var r = Or[n];
                        e[r] = xr[r];
                    }
                }(e);
                var d = t.options.name || i;
                return new Me("vue-component-" + t.cid + (d ? "-" + d : ""), e, void 0, void 0, void 0, n, {
                    Ctor: t,
                    propsData: s,
                    listeners: c,
                    tag: i,
                    children: r
                }, a);
            }
        }
    }
    var Fr = 1, Er = 2;
    function Ir(t, e, n, r, i, o) {
        return (Array.isArray(n) || Tt(n)) && (i = r, r = n, n = void 0), Dt(o) && (i = Er), 
        function(t, e, n, r, i) {
            if (Nt(n) && Nt(n.__ob__)) return je();
            if (Nt(n) && Nt(n.is) && (e = n.is), !e) return je();
            var o, a, s;
            (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                default: r[0]
            }, r.length = 0), i === Er ? r = Nn(r) : i === Fr && (r = function(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }(r)), "string" == typeof e) ? (a = t.$vnode && t.$vnode.ns || pe.getTagNamespace(e), 
            o = pe.isReservedTag(e) ? new Me(pe.parsePlatformTagName(e), n, r, void 0, void 0, t) : Nt(s = cn(t.$options, "components", e)) ? $r(s, n, t, r, e) : new Me(e, n, r, void 0, void 0, t)) : o = $r(e, n, t, r);
            return Array.isArray(o) ? o : Nt(o) ? (Nt(a) && function t(e, n, r) {
                if (e.ns = n, "foreignObject" === e.tag && (n = void 0, r = !0), Nt(e.children)) for (var i = 0, o = e.children.length; i < o; i++) {
                    var a = e.children[i];
                    Nt(a.tag) && (Lt(a.ns) || Dt(r) && "svg" !== a.tag) && t(a, n, r);
                }
            }(o, a), Nt(n) && function(t) {
                Gt(t.style) && On(t.style), Gt(t.class) && On(t.class);
            }(n), o) : je();
        }(t, e, n, r, i);
    }
    var Rr = 0;
    function Lr(t) {
        var e = t.options;
        if (t.super) {
            var n = Lr(t.super);
            if (n !== t.superOptions) {
                t.superOptions = n;
                var r = function(t) {
                    var e, n = t.options, r = t.extendOptions, i = t.sealedOptions;
                    for (var o in n) n[o] !== i[o] && (e || (e = {}), e[o] = Nr(n[o], r[o], i[o]));
                    return e;
                }(t);
                r && ne(t.extendOptions, r), (e = t.options = sn(n, t.extendOptions)).name && (e.components[e.name] = t);
            }
        }
        return e;
    }
    function Nr(t, e, n) {
        if (Array.isArray(t)) {
            var r = [];
            n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
            for (var i = 0; i < t.length; i++) (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
            return r;
        }
        return t;
    }
    function Dr(t) {
        this._init(t);
    }
    function Tr(t) {
        return t && (t.Ctor.options.name || t.tag);
    }
    function Gr(t, e) {
        return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : (n = t, 
        "[object RegExp]" === Pt.call(n) && t.test(e));
        var n;
    }
    function Pr(t, e) {
        var n = t.cache, r = t.keys, i = t._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = Tr(a.componentOptions);
                s && !e(s) && Mr(n, o, r, i);
            }
        }
    }
    function Mr(t, e, n, r) {
        var i = t[e];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, zt(n, e);
    }
    !function(t) {
        t.prototype._init = function(t) {
            var e = this;
            e._uid = Rr++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
                var i = r.componentOptions;
                n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, 
                n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }(e, t) : e.$options = sn(Lr(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
            function(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }(e), function(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && jn(t, e);
            }(e), function(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = Vn(e._renderChildren, r), t.$scopedSlots = Rt, t._c = function(e, n, r, i) {
                    return Ir(t, e, n, r, i, !1);
                }, t.$createElement = function(e, n, r, i) {
                    return Ir(t, e, n, r, i, !0);
                };
                var i = n && n.data;
                Ze(t, "$attrs", i && i.attrs || Rt, null, !0), Ze(t, "$listeners", e._parentListeners || Rt, null, !0);
            }(e), Kn(e, "beforeCreate"), function(t) {
                var e = dr(t.$options.inject, t);
                e && (Ke(!1), Object.keys(e).forEach(function(n) {
                    Ze(t, n, e[n]);
                }), Ke(!0));
            }(e), function(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {}, r = t._props = {}, i = t.$options._propKeys = [];
                    t.$parent && Ke(!1);
                    var o = function(o) {
                        i.push(o);
                        var a = ln(o, e, n, t);
                        Ze(r, o, a), o in t || or(t, "_props", o);
                    };
                    for (var a in e) o(a);
                    Ke(!0);
                }(t, e.props), e.methods && function(t, e) {
                    for (var n in t.$options.props, e) t[n] = null == e[n] ? ie : te(e[n], t);
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    Mt(e = t._data = "function" == typeof e ? function(t, e) {
                        Ge();
                        try {
                            return t.call(e, e);
                        } catch (t) {
                            return fn(t, e, "data()"), {};
                        } finally {
                            Pe();
                        }
                    }(e, t) : e || {}) || (e = {});
                    for (var n, r = Object.keys(e), i = t.$options.props, o = (t.$options.methods, r.length); o--; ) {
                        var a = r[o];
                        i && qt(i, a) || 36 !== (n = (a + "").charCodeAt(0)) && 95 !== n && or(t, "_data", a);
                    }
                    Xe(e, !0);
                }(t) : Xe(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null), r = $e();
                    for (var i in e) {
                        var o = e[i], a = "function" == typeof o ? o : o.get;
                        r || (n[i] = new rr(t, a || ie, ie, ar)), i in t || sr(t, i, o);
                    }
                }(t, e.computed), e.watch && e.watch !== Ae && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r)) for (var i = 0; i < r.length; i++) lr(t, n, r[i]); else lr(t, n, r);
                    }
                }(t, e.watch);
            }(e), function(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }(e), Kn(e, "created"), e.$options.el && e.$mount(e.$options.el);
        };
    }(Dr), function(t) {
        Object.defineProperty(t.prototype, "$data", {
            get: function() {
                return this._data;
            }
        }), Object.defineProperty(t.prototype, "$props", {
            get: function() {
                return this._props;
            }
        }), t.prototype.$set = Qe, t.prototype.$delete = Ye, t.prototype.$watch = function(t, e, n) {
            if (Mt(e)) return lr(this, t, e, n);
            (n = n || {}).user = !0;
            var r = new rr(this, t, e, n);
            return n.immediate && e.call(this, r.value), function() {
                r.teardown();
            };
        };
    }(Dr), function(t) {
        var e = /^hook:/;
        t.prototype.$on = function(t, n) {
            if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n); else (this._events[t] || (this._events[t] = [])).push(n), 
            e.test(t) && (this._hasHookEvent = !0);
            return this;
        }, t.prototype.$once = function(t, e) {
            var n = this;
            function r() {
                n.$off(t, r), e.apply(n, arguments);
            }
            return r.fn = e, n.$on(t, r), n;
        }, t.prototype.$off = function(t, e) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(t)) {
                for (var r = 0, i = t.length; r < i; r++) this.$off(t[r], e);
                return n;
            }
            var o = n._events[t];
            if (!o) return n;
            if (!e) return n._events[t] = null, n;
            if (e) for (var a, s = o.length; s--; ) if ((a = o[s]) === e || a.fn === e) {
                o.splice(s, 1);
                break;
            }
            return n;
        }, t.prototype.$emit = function(t) {
            var e = this._events[t];
            if (e) {
                e = e.length > 1 ? ee(e) : e;
                for (var n = ee(arguments, 1), r = 0, i = e.length; r < i; r++) try {
                    e[r].apply(this, n);
                } catch (e) {
                    fn(e, this, 'event handler for "' + t + '"');
                }
            }
            return this;
        };
    }(Dr), function(t) {
        t.prototype._update = function(t, e) {
            var n = this;
            n._isMounted && Kn(n, "beforeUpdate");
            var r = n.$el, i = n._vnode, o = zn;
            zn = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), 
            n.$options._parentElm = n.$options._refElm = null), zn = o, r && (r.__vue__ = null), 
            n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, t.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update();
        }, t.prototype.$destroy = function() {
            var t = this;
            if (!t._isBeingDestroyed) {
                Kn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                var e = t.$parent;
                !e || e._isBeingDestroyed || t.$options.abstract || zt(e.$children, t), t._watcher && t._watcher.teardown();
                for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                Kn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
            }
        };
    }(Dr), function(t) {
        br(t.prototype), t.prototype.$nextTick = function(t) {
            return An(t, this);
        }, t.prototype._render = function() {
            var t, e = this, n = e.$options, r = n.render, i = n._parentVnode;
            i && (e.$scopedSlots = i.data.scopedSlots || Rt), e.$vnode = i;
            try {
                t = r.call(e._renderProxy, e.$createElement);
            } catch (n) {
                fn(n, e, "render"), t = e._vnode;
            }
            return t instanceof Me || (t = je()), t.parent = i, t;
        };
    }(Dr);
    var Br = [ String, RegExp, Array ], jr = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Br,
                exclude: Br,
                max: [ String, Number ]
            },
            created: function() {
                this.cache = Object.create(null), this.keys = [];
            },
            destroyed: function() {
                for (var t in this.cache) Mr(this.cache, t, this.keys);
            },
            mounted: function() {
                var t = this;
                this.$watch("include", function(e) {
                    Pr(t, function(t) {
                        return Gr(e, t);
                    });
                }), this.$watch("exclude", function(e) {
                    Pr(t, function(t) {
                        return !Gr(e, t);
                    });
                });
            },
            render: function() {
                var t = this.$slots.default, e = Pn(t), n = e && e.componentOptions;
                if (n) {
                    var r = Tr(n), i = this.include, o = this.exclude;
                    if (i && (!r || !Gr(i, r)) || o && r && Gr(o, r)) return e;
                    var a = this.cache, s = this.keys, c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    a[c] ? (e.componentInstance = a[c].componentInstance, zt(s, c), s.push(c)) : (a[c] = e, 
                    s.push(c), this.max && s.length > parseInt(this.max) && Mr(a, s[0], s, this._vnode)), 
                    e.data.keepAlive = !0;
                }
                return e || t && t[0];
            }
        }
    };
    !function(t) {
        var e = {
            get: function() {
                return pe;
            }
        };
        Object.defineProperty(t, "config", e), t.util = {
            warn: Le,
            extend: ne,
            mergeOptions: sn,
            defineReactive: Ze
        }, t.set = Qe, t.delete = Ye, t.nextTick = An, t.options = Object.create(null), 
        de.forEach(function(e) {
            t.options[e + "s"] = Object.create(null);
        }), t.options._base = t, ne(t.options.components, jr), function(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = ee(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                e.push(t), this;
            };
        }(t), function(t) {
            t.mixin = function(t) {
                return this.options = sn(this.options, t), this;
            };
        }(t), function(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this, r = n.cid, i = t._Ctor || (t._Ctor = {});
                if (i[r]) return i[r];
                var o = t.name || n.options.name, a = function(t) {
                    this._init(t);
                };
                return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                a.options = sn(n.options, t), a.super = n, a.options.props && function(t) {
                    var e = t.options.props;
                    for (var n in e) or(t.prototype, "_props", n);
                }(a), a.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var n in e) sr(t.prototype, n, e[n]);
                }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, de.forEach(function(t) {
                    a[t] = n[t];
                }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, 
                a.sealedOptions = ne({}, a.options), i[r] = a, a;
            };
        }(t), function(t) {
            de.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && Mt(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                    "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                };
            });
        }(t);
    }(Dr), Object.defineProperty(Dr.prototype, "$isServer", {
        get: $e
    }), Object.defineProperty(Dr.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext;
        }
    }), Object.defineProperty(Dr, "FunctionalRenderContext", {
        value: Sr
    }), Dr.version = "2.5.17";
    var Vr = Ut("style,class"), Ur = Ut("input,textarea,option,select,progress"), Hr = Ut("contenteditable,draggable,spellcheck"), zr = Ut("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), Wr = "http://www.w3.org/1999/xlink", qr = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    }, Kr = function(t) {
        return qr(t) ? t.slice(6, t.length) : "";
    }, Jr = function(t) {
        return null == t || !1 === t;
    };
    function Xr(t, e) {
        return {
            staticClass: Zr(t.staticClass, e.staticClass),
            class: Nt(t.class) ? [ t.class, e.class ] : e.class
        };
    }
    function Zr(t, e) {
        return t ? e ? t + " " + e : t : e || "";
    }
    function Qr(t) {
        return Array.isArray(t) ? function(t) {
            for (var e, n = "", r = 0, i = t.length; r < i; r++) Nt(e = Qr(t[r])) && "" !== e && (n && (n += " "), 
            n += e);
            return n;
        }(t) : Gt(t) ? function(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e;
        }(t) : "string" == typeof t ? t : "";
    }
    var Yr = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, ti = Ut("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), ei = Ut("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), ni = function(t) {
        return ti(t) || ei(t);
    }, ri = Object.create(null), ii = Ut("text,number,password,search,email,tel,url"), oi = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), 
            n);
        },
        createElementNS: function(t, e) {
            return document.createElementNS(Yr[t], e);
        },
        createTextNode: function(t) {
            return document.createTextNode(t);
        },
        createComment: function(t) {
            return document.createComment(t);
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n);
        },
        removeChild: function(t, e) {
            t.removeChild(e);
        },
        appendChild: function(t, e) {
            t.appendChild(e);
        },
        parentNode: function(t) {
            return t.parentNode;
        },
        nextSibling: function(t) {
            return t.nextSibling;
        },
        tagName: function(t) {
            return t.tagName;
        },
        setTextContent: function(t, e) {
            t.textContent = e;
        },
        setStyleScope: function(t, e) {
            t.setAttribute(e, "");
        }
    }), ai = {
        create: function(t, e) {
            si(e);
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (si(t, !0), si(e));
        },
        destroy: function(t) {
            si(t, !0);
        }
    };
    function si(t, e) {
        var n = t.data.ref;
        if (Nt(n)) {
            var r = t.context, i = t.componentInstance || t.elm, o = r.$refs;
            e ? Array.isArray(o[n]) ? zt(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [ i ] : o[n] = i;
        }
    }
    var ci = new Me("", {}, []), li = [ "create", "activate", "update", "remove", "destroy" ];
    function di(t, e) {
        return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && Nt(t.data) === Nt(e.data) && function(t, e) {
            if ("input" !== t.tag) return !0;
            var n, r = Nt(n = t.data) && Nt(n = n.attrs) && n.type, i = Nt(n = e.data) && Nt(n = n.attrs) && n.type;
            return r === i || ii(r) && ii(i);
        }(t, e) || Dt(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && Lt(e.asyncFactory.error));
    }
    function ui(t, e, n) {
        var r, i, o = {};
        for (r = e; r <= n; ++r) Nt(i = t[r].key) && (o[i] = r);
        return o;
    }
    var pi = {
        create: fi,
        update: fi,
        destroy: function(t) {
            fi(t, ci);
        }
    };
    function fi(t, e) {
        (t.data.directives || e.data.directives) && function(t, e) {
            var n, r, i, o = t === ci, a = e === ci, s = hi(t.data.directives, t.context), c = hi(e.data.directives, e.context), l = [], d = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, _i(i, "update", e, t), 
            i.def && i.def.componentUpdated && d.push(i)) : (_i(i, "bind", e, t), i.def && i.def.inserted && l.push(i));
            if (l.length) {
                var u = function() {
                    for (var n = 0; n < l.length; n++) _i(l[n], "inserted", e, t);
                };
                o ? Rn(e, "insert", u) : u();
            }
            if (d.length && Rn(e, "postpatch", function() {
                for (var n = 0; n < d.length; n++) _i(d[n], "componentUpdated", e, t);
            }), !o) for (n in s) c[n] || _i(s[n], "unbind", t, t, a);
        }(t, e);
    }
    var vi = Object.create(null);
    function hi(t, e) {
        var n, r, i = Object.create(null);
        if (!t) return i;
        for (n = 0; n < t.length; n++) (r = t[n]).modifiers || (r.modifiers = vi), i[mi(r)] = r, 
        r.def = cn(e.$options, "directives", r.name);
        return i;
    }
    function mi(t) {
        return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
    }
    function _i(t, e, n, r, i) {
        var o = t.def && t.def[e];
        if (o) try {
            o(n.elm, t, n, r, i);
        } catch (r) {
            fn(r, n.context, "directive " + t.name + " " + e + " hook");
        }
    }
    var gi = [ ai, pi ];
    function yi(t, e) {
        var n = e.componentOptions;
        if (!(Nt(n) && !1 === n.Ctor.options.inheritAttrs || Lt(t.data.attrs) && Lt(e.data.attrs))) {
            var r, i, o = e.elm, a = t.data.attrs || {}, s = e.data.attrs || {};
            for (r in Nt(s.__ob__) && (s = e.data.attrs = ne({}, s)), s) i = s[r], a[r] !== i && Ci(o, r, i);
            for (r in (we || Se) && s.value !== a.value && Ci(o, "value", s.value), a) Lt(s[r]) && (qr(r) ? o.removeAttributeNS(Wr, Kr(r)) : Hr(r) || o.removeAttribute(r));
        }
    }
    function Ci(t, e, n) {
        t.tagName.indexOf("-") > -1 ? wi(t, e, n) : zr(e) ? Jr(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, 
        t.setAttribute(e, n)) : Hr(e) ? t.setAttribute(e, Jr(n) || "false" === n ? "false" : "true") : qr(e) ? Jr(n) ? t.removeAttributeNS(Wr, Kr(e)) : t.setAttributeNS(Wr, e, n) : wi(t, e, n);
    }
    function wi(t, e, n) {
        if (Jr(n)) t.removeAttribute(e); else {
            if (we && !be && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                var r = function(e) {
                    e.stopImmediatePropagation(), t.removeEventListener("input", r);
                };
                t.addEventListener("input", r), t.__ieph = !0;
            }
            t.setAttribute(e, n);
        }
    }
    var bi = {
        create: yi,
        update: yi
    };
    function Si(t, e) {
        var n = e.elm, r = e.data, i = t.data;
        if (!(Lt(r.staticClass) && Lt(r.class) && (Lt(i) || Lt(i.staticClass) && Lt(i.class)))) {
            var o = function(t) {
                for (var e = t.data, n = t, r = t; Nt(r.componentInstance); ) (r = r.componentInstance._vnode) && r.data && (e = Xr(r.data, e));
                for (;Nt(n = n.parent); ) n && n.data && (e = Xr(e, n.data));
                return i = e.staticClass, o = e.class, Nt(i) || Nt(o) ? Zr(i, Qr(o)) : "";
                var i, o;
            }(e), a = n._transitionClasses;
            Nt(a) && (o = Zr(o, Qr(a))), o !== n._prevClass && (n.setAttribute("class", o), 
            n._prevClass = o);
        }
    }
    var ki, Ai = {
        create: Si,
        update: Si
    }, xi = "__r", Oi = "__c";
    function $i(t, e, n, r, i) {
        var o;
        e = (o = e)._withTask || (o._withTask = function() {
            wn = !0;
            var t = o.apply(null, arguments);
            return wn = !1, t;
        }), n && (e = function(t, e, n) {
            var r = ki;
            return function i() {
                null !== t.apply(null, arguments) && Fi(e, i, n, r);
            };
        }(e, t, r)), ki.addEventListener(t, e, xe ? {
            capture: r,
            passive: i
        } : r);
    }
    function Fi(t, e, n, r) {
        (r || ki).removeEventListener(t, e._withTask || e, n);
    }
    function Ei(t, e) {
        if (!Lt(t.data.on) || !Lt(e.data.on)) {
            var n = e.data.on || {}, r = t.data.on || {};
            ki = e.elm, function(t) {
                if (Nt(t[xi])) {
                    var e = we ? "change" : "input";
                    t[e] = [].concat(t[xi], t[e] || []), delete t[xi];
                }
                Nt(t[Oi]) && (t.change = [].concat(t[Oi], t.change || []), delete t[Oi]);
            }(n), In(n, r, $i, Fi, e.context), ki = void 0;
        }
    }
    var Ii = {
        create: Ei,
        update: Ei
    };
    function Ri(t, e) {
        if (!Lt(t.data.domProps) || !Lt(e.data.domProps)) {
            var n, r, i = e.elm, o = t.data.domProps || {}, a = e.data.domProps || {};
            for (n in Nt(a.__ob__) && (a = e.data.domProps = ne({}, a)), o) Lt(a[n]) && (i[n] = "");
            for (n in a) {
                if (r = a[n], "textContent" === n || "innerHTML" === n) {
                    if (e.children && (e.children.length = 0), r === o[n]) continue;
                    1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
                }
                if ("value" === n) {
                    i._value = r;
                    var s = Lt(r) ? "" : String(r);
                    Li(i, s) && (i.value = s);
                } else i[n] = r;
            }
        }
    }
    function Li(t, e) {
        return !t.composing && ("OPTION" === t.tagName || function(t, e) {
            var n = !0;
            try {
                n = document.activeElement !== t;
            } catch (t) {}
            return n && t.value !== e;
        }(t, e) || function(t, e) {
            var n = t.value, r = t._vModifiers;
            if (Nt(r)) {
                if (r.lazy) return !1;
                if (r.number) return Vt(n) !== Vt(e);
                if (r.trim) return n.trim() !== e.trim();
            }
            return n !== e;
        }(t, e));
    }
    var Ni = {
        create: Ri,
        update: Ri
    }, Di = Kt(function(t) {
        var e = {}, n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            if (t) {
                var r = t.split(n);
                r.length > 1 && (e[r[0].trim()] = r[1].trim());
            }
        }), e;
    });
    function Ti(t) {
        var e = Gi(t.style);
        return t.staticStyle ? ne(t.staticStyle, e) : e;
    }
    function Gi(t) {
        return Array.isArray(t) ? re(t) : "string" == typeof t ? Di(t) : t;
    }
    var Pi, Mi = /^--/, Bi = /\s*!important$/, ji = function(t, e, n) {
        if (Mi.test(e)) t.style.setProperty(e, n); else if (Bi.test(n)) t.style.setProperty(e, n.replace(Bi, ""), "important"); else {
            var r = Ui(e);
            if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i]; else t.style[r] = n;
        }
    }, Vi = [ "Webkit", "Moz", "ms" ], Ui = Kt(function(t) {
        if (Pi = Pi || document.createElement("div").style, "filter" !== (t = Xt(t)) && t in Pi) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Vi.length; n++) {
            var r = Vi[n] + e;
            if (r in Pi) return r;
        }
    });
    function Hi(t, e) {
        var n = e.data, r = t.data;
        if (!(Lt(n.staticStyle) && Lt(n.style) && Lt(r.staticStyle) && Lt(r.style))) {
            var i, o, a = e.elm, s = r.staticStyle, c = r.normalizedStyle || r.style || {}, l = s || c, d = Gi(e.data.style) || {};
            e.data.normalizedStyle = Nt(d.__ob__) ? ne({}, d) : d;
            var u = function(t, e) {
                for (var n, r = {}, i = t; i.componentInstance; ) (i = i.componentInstance._vnode) && i.data && (n = Ti(i.data)) && ne(r, n);
                (n = Ti(t.data)) && ne(r, n);
                for (var o = t; o = o.parent; ) o.data && (n = Ti(o.data)) && ne(r, n);
                return r;
            }(e);
            for (o in l) Lt(u[o]) && ji(a, o, "");
            for (o in u) (i = u[o]) !== l[o] && ji(a, o, null == i ? "" : i);
        }
    }
    var zi = {
        create: Hi,
        update: Hi
    };
    function Wi(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.add(e);
        }) : t.classList.add(e); else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
        }
    }
    function qi(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.remove(e);
        }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
            for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
            (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
        }
    }
    function Ki(t) {
        if (t) {
            if ("object" == typeof t) {
                var e = {};
                return !1 !== t.css && ne(e, Ji(t.name || "v")), ne(e, t), e;
            }
            return "string" == typeof t ? Ji(t) : void 0;
        }
    }
    var Ji = Kt(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        };
    }), Xi = _e && !be, Zi = "transition", Qi = "animation", Yi = "transition", to = "transitionend", eo = "animation", no = "animationend";
    Xi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Yi = "WebkitTransition", 
    to = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (eo = "WebkitAnimation", 
    no = "webkitAnimationEnd"));
    var ro = _e ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t();
    };
    function io(t) {
        ro(function() {
            ro(t);
        });
    }
    function oo(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), Wi(t, e));
    }
    function ao(t, e) {
        t._transitionClasses && zt(t._transitionClasses, e), qi(t, e);
    }
    function so(t, e, n) {
        var r = lo(t, e), i = r.type, o = r.timeout, a = r.propCount;
        if (!i) return n();
        var s = i === Zi ? to : no, c = 0, l = function() {
            t.removeEventListener(s, d), n();
        }, d = function(e) {
            e.target === t && ++c >= a && l();
        };
        setTimeout(function() {
            c < a && l();
        }, o + 1), t.addEventListener(s, d);
    }
    var co = /\b(transform|all)(,|$)/;
    function lo(t, e) {
        var n, r = window.getComputedStyle(t), i = r[Yi + "Delay"].split(", "), o = r[Yi + "Duration"].split(", "), a = uo(i, o), s = r[eo + "Delay"].split(", "), c = r[eo + "Duration"].split(", "), l = uo(s, c), d = 0, u = 0;
        return e === Zi ? a > 0 && (n = Zi, d = a, u = o.length) : e === Qi ? l > 0 && (n = Qi, 
        d = l, u = c.length) : u = (n = (d = Math.max(a, l)) > 0 ? a > l ? Zi : Qi : null) ? n === Zi ? o.length : c.length : 0, 
        {
            type: n,
            timeout: d,
            propCount: u,
            hasTransform: n === Zi && co.test(r[Yi + "Property"])
        };
    }
    function uo(t, e) {
        for (;t.length < e.length; ) t = t.concat(t);
        return Math.max.apply(null, e.map(function(e, n) {
            return po(e) + po(t[n]);
        }));
    }
    function po(t) {
        return 1e3 * Number(t.slice(0, -1));
    }
    function fo(t, e) {
        var n = t.elm;
        Nt(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = Ki(t.data.transition);
        if (!Lt(r) && !Nt(n._enterCb) && 1 === n.nodeType) {
            for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, l = r.appearClass, d = r.appearToClass, u = r.appearActiveClass, p = r.beforeEnter, f = r.enter, v = r.afterEnter, h = r.enterCancelled, m = r.beforeAppear, _ = r.appear, g = r.afterAppear, y = r.appearCancelled, C = r.duration, w = zn, b = zn.$vnode; b && b.parent; ) w = (b = b.parent).context;
            var S = !w._isMounted || !t.isRootInsert;
            if (!S || _ || "" === _) {
                var k = S && l ? l : a, A = S && u ? u : c, x = S && d ? d : s, O = S && m || p, $ = S && "function" == typeof _ ? _ : f, F = S && g || v, E = S && y || h, I = Vt(Gt(C) ? C.enter : C), R = !1 !== i && !be, L = mo($), N = n._enterCb = le(function() {
                    R && (ao(n, x), ao(n, A)), N.cancelled ? (R && ao(n, k), E && E(n)) : F && F(n), 
                    n._enterCb = null;
                });
                t.data.show || Rn(t, "insert", function() {
                    var e = n.parentNode, r = e && e._pending && e._pending[t.key];
                    r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), $ && $(n, N);
                }), O && O(n), R && (oo(n, k), oo(n, A), io(function() {
                    ao(n, k), N.cancelled || (oo(n, x), L || (ho(I) ? setTimeout(N, I) : so(n, o, N)));
                })), t.data.show && (e && e(), $ && $(n, N)), R || L || N();
            }
        }
    }
    function vo(t, e) {
        var n = t.elm;
        Nt(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = Ki(t.data.transition);
        if (Lt(r) || 1 !== n.nodeType) return e();
        if (!Nt(n._leaveCb)) {
            var i = r.css, o = r.type, a = r.leaveClass, s = r.leaveToClass, c = r.leaveActiveClass, l = r.beforeLeave, d = r.leave, u = r.afterLeave, p = r.leaveCancelled, f = r.delayLeave, v = r.duration, h = !1 !== i && !be, m = mo(d), _ = Vt(Gt(v) ? v.leave : v), g = n._leaveCb = le(function() {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), 
                h && (ao(n, s), ao(n, c)), g.cancelled ? (h && ao(n, a), p && p(n)) : (e(), u && u(n)), 
                n._leaveCb = null;
            });
            f ? f(y) : y();
        }
        function y() {
            g.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), 
            l && l(n), h && (oo(n, a), oo(n, c), io(function() {
                ao(n, a), g.cancelled || (oo(n, s), m || (ho(_) ? setTimeout(g, _) : so(n, o, g)));
            })), d && d(n, g), h || m || g());
        }
    }
    function ho(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function mo(t) {
        if (Lt(t)) return !1;
        var e = t.fns;
        return Nt(e) ? mo(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
    }
    function _o(t, e) {
        !0 !== e.data.show && fo(e);
    }
    var go = function(t) {
        var e, n, r = {}, i = t.modules, o = t.nodeOps;
        for (e = 0; e < li.length; ++e) for (r[li[e]] = [], n = 0; n < i.length; ++n) Nt(i[n][li[e]]) && r[li[e]].push(i[n][li[e]]);
        function a(t) {
            var e = o.parentNode(t);
            Nt(e) && o.removeChild(e, t);
        }
        function s(t, e, n, i, a, s, u) {
            if (Nt(t.elm) && Nt(s) && (t = s[u] = Ue(t)), t.isRootInsert = !a, !function(t, e, n, i) {
                var o = t.data;
                if (Nt(o)) {
                    var a = Nt(t.componentInstance) && o.keepAlive;
                    if (Nt(o = o.hook) && Nt(o = o.init) && o(t, !1, n, i), Nt(t.componentInstance)) return c(t, e), 
                    Dt(a) && function(t, e, n, i) {
                        for (var o, a = t; a.componentInstance; ) if (Nt(o = (a = a.componentInstance._vnode).data) && Nt(o = o.transition)) {
                            for (o = 0; o < r.activate.length; ++o) r.activate[o](ci, a);
                            e.push(a);
                            break;
                        }
                        l(n, t.elm, i);
                    }(t, e, n, i), !0;
                }
            }(t, e, n, i)) {
                var v = t.data, h = t.children, m = t.tag;
                Nt(m) ? (t.elm = t.ns ? o.createElementNS(t.ns, m) : o.createElement(m, t), f(t), 
                d(t, h, e), Nt(v) && p(t, e), l(n, t.elm, i)) : Dt(t.isComment) ? (t.elm = o.createComment(t.text), 
                l(n, t.elm, i)) : (t.elm = o.createTextNode(t.text), l(n, t.elm, i));
            }
        }
        function c(t, e) {
            Nt(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), 
            t.elm = t.componentInstance.$el, u(t) ? (p(t, e), f(t)) : (si(t), e.push(t));
        }
        function l(t, e, n) {
            Nt(t) && (Nt(n) ? n.parentNode === t && o.insertBefore(t, e, n) : o.appendChild(t, e));
        }
        function d(t, e, n) {
            if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) s(e[r], n, t.elm, null, !0, e, r); else Tt(t.text) && o.appendChild(t.elm, o.createTextNode(String(t.text)));
        }
        function u(t) {
            for (;t.componentInstance; ) t = t.componentInstance._vnode;
            return Nt(t.tag);
        }
        function p(t, n) {
            for (var i = 0; i < r.create.length; ++i) r.create[i](ci, t);
            Nt(e = t.data.hook) && (Nt(e.create) && e.create(ci, t), Nt(e.insert) && n.push(t));
        }
        function f(t) {
            var e;
            if (Nt(e = t.fnScopeId)) o.setStyleScope(t.elm, e); else for (var n = t; n; ) Nt(e = n.context) && Nt(e = e.$options._scopeId) && o.setStyleScope(t.elm, e), 
            n = n.parent;
            Nt(e = zn) && e !== t.context && e !== t.fnContext && Nt(e = e.$options._scopeId) && o.setStyleScope(t.elm, e);
        }
        function v(t, e, n, r, i, o) {
            for (;r <= i; ++r) s(n[r], o, t, e, !1, n, r);
        }
        function h(t) {
            var e, n, i = t.data;
            if (Nt(i)) for (Nt(e = i.hook) && Nt(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
            if (Nt(e = t.children)) for (n = 0; n < t.children.length; ++n) h(t.children[n]);
        }
        function m(t, e, n, r) {
            for (;n <= r; ++n) {
                var i = e[n];
                Nt(i) && (Nt(i.tag) ? (_(i), h(i)) : a(i.elm));
            }
        }
        function _(t, e) {
            if (Nt(e) || Nt(t.data)) {
                var n, i = r.remove.length + 1;
                for (Nt(e) ? e.listeners += i : e = function(t, e) {
                    function n() {
                        0 == --n.listeners && a(t);
                    }
                    return n.listeners = e, n;
                }(t.elm, i), Nt(n = t.componentInstance) && Nt(n = n._vnode) && Nt(n.data) && _(n, e), 
                n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                Nt(n = t.data.hook) && Nt(n = n.remove) ? n(t, e) : e();
            } else a(t.elm);
        }
        function g(t, e, n, r) {
            for (var i = n; i < r; i++) {
                var o = e[i];
                if (Nt(o) && di(t, o)) return i;
            }
        }
        function y(t, e, n) {
            if (Dt(n) && Nt(t.parent)) t.parent.data.pendingInsert = e; else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
        }
        var C = Ut("attrs,class,staticClass,staticStyle,key");
        function w(t, e, n, r) {
            var i, o = e.tag, a = e.data, s = e.children;
            if (r = r || a && a.pre, e.elm = t, Dt(e.isComment) && Nt(e.asyncFactory)) return e.isAsyncPlaceholder = !0, 
            !0;
            if (Nt(a) && (Nt(i = a.hook) && Nt(i = i.init) && i(e, !0), Nt(i = e.componentInstance))) return c(e, n), 
            !0;
            if (Nt(o)) {
                if (Nt(s)) if (t.hasChildNodes()) if (Nt(i = a) && Nt(i = i.domProps) && Nt(i = i.innerHTML)) {
                    if (i !== t.innerHTML) return !1;
                } else {
                    for (var l = !0, u = t.firstChild, f = 0; f < s.length; f++) {
                        if (!u || !w(u, s[f], n, r)) {
                            l = !1;
                            break;
                        }
                        u = u.nextSibling;
                    }
                    if (!l || u) return !1;
                } else d(e, s, n);
                if (Nt(a)) {
                    var v = !1;
                    for (var h in a) if (!C(h)) {
                        v = !0, p(e, n);
                        break;
                    }
                    !v && a.class && On(a.class);
                }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
        }
        return function(t, e, n, i, a, c) {
            if (!Lt(e)) {
                var l, d = !1, p = [];
                if (Lt(t)) d = !0, s(e, p, a, c); else {
                    var f = Nt(t.nodeType);
                    if (!f && di(t, e)) !function t(e, n, i, a) {
                        if (e !== n) {
                            var c = n.elm = e.elm;
                            if (Dt(e.isAsyncPlaceholder)) Nt(n.asyncFactory.resolved) ? w(e.elm, n, i) : n.isAsyncPlaceholder = !0; else if (Dt(n.isStatic) && Dt(e.isStatic) && n.key === e.key && (Dt(n.isCloned) || Dt(n.isOnce))) n.componentInstance = e.componentInstance; else {
                                var l, d = n.data;
                                Nt(d) && Nt(l = d.hook) && Nt(l = l.prepatch) && l(e, n);
                                var p = e.children, f = n.children;
                                if (Nt(d) && u(n)) {
                                    for (l = 0; l < r.update.length; ++l) r.update[l](e, n);
                                    Nt(l = d.hook) && Nt(l = l.update) && l(e, n);
                                }
                                Lt(n.text) ? Nt(p) && Nt(f) ? p !== f && function(e, n, r, i, a) {
                                    for (var c, l, d, u = 0, p = 0, f = n.length - 1, h = n[0], _ = n[f], y = r.length - 1, C = r[0], w = r[y], b = !a; u <= f && p <= y; ) Lt(h) ? h = n[++u] : Lt(_) ? _ = n[--f] : di(h, C) ? (t(h, C, i), 
                                    h = n[++u], C = r[++p]) : di(_, w) ? (t(_, w, i), _ = n[--f], w = r[--y]) : di(h, w) ? (t(h, w, i), 
                                    b && o.insertBefore(e, h.elm, o.nextSibling(_.elm)), h = n[++u], w = r[--y]) : di(_, C) ? (t(_, C, i), 
                                    b && o.insertBefore(e, _.elm, h.elm), _ = n[--f], C = r[++p]) : (Lt(c) && (c = ui(n, u, f)), 
                                    Lt(l = Nt(C.key) ? c[C.key] : g(C, n, u, f)) ? s(C, i, e, h.elm, !1, r, p) : di(d = n[l], C) ? (t(d, C, i), 
                                    n[l] = void 0, b && o.insertBefore(e, d.elm, h.elm)) : s(C, i, e, h.elm, !1, r, p), 
                                    C = r[++p]);
                                    u > f ? v(e, Lt(r[y + 1]) ? null : r[y + 1].elm, r, p, y, i) : p > y && m(0, n, u, f);
                                }(c, p, f, i, a) : Nt(f) ? (Nt(e.text) && o.setTextContent(c, ""), v(c, null, f, 0, f.length - 1, i)) : Nt(p) ? m(0, p, 0, p.length - 1) : Nt(e.text) && o.setTextContent(c, "") : e.text !== n.text && o.setTextContent(c, n.text), 
                                Nt(d) && Nt(l = d.hook) && Nt(l = l.postpatch) && l(e, n);
                            }
                        }
                    }(t, e, p, i); else {
                        if (f) {
                            if (1 === t.nodeType && t.hasAttribute("data-server-rendered") && (t.removeAttribute("data-server-rendered"), 
                            n = !0), Dt(n) && w(t, e, p)) return y(e, p, !0), t;
                            l = t, t = new Me(o.tagName(l).toLowerCase(), {}, [], void 0, l);
                        }
                        var _ = t.elm, C = o.parentNode(_);
                        if (s(e, p, _._leaveCb ? null : C, o.nextSibling(_)), Nt(e.parent)) for (var b = e.parent, S = u(e); b; ) {
                            for (var k = 0; k < r.destroy.length; ++k) r.destroy[k](b);
                            if (b.elm = e.elm, S) {
                                for (var A = 0; A < r.create.length; ++A) r.create[A](ci, b);
                                var x = b.data.hook.insert;
                                if (x.merged) for (var O = 1; O < x.fns.length; O++) x.fns[O]();
                            } else si(b);
                            b = b.parent;
                        }
                        Nt(C) ? m(0, [ t ], 0, 0) : Nt(t.tag) && h(t);
                    }
                }
                return y(e, p, d), e.elm;
            }
            Nt(t) && h(t);
        };
    }({
        nodeOps: oi,
        modules: [ bi, Ai, Ii, Ni, zi, _e ? {
            create: _o,
            activate: _o,
            remove: function(t, e) {
                !0 !== t.data.show ? vo(t, e) : e();
            }
        } : {} ].concat(gi)
    });
    be && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && xo(t, "input");
    });
    var yo = {
        inserted: function(t, e, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? Rn(n, "postpatch", function() {
                yo.componentUpdated(t, e, n);
            }) : Co(t, e, n.context), t._vOptions = [].map.call(t.options, So)) : ("textarea" === n.tag || ii(t.type)) && (t._vModifiers = e.modifiers, 
            e.modifiers.lazy || (t.addEventListener("compositionstart", ko), t.addEventListener("compositionend", Ao), 
            t.addEventListener("change", Ao), be && (t.vmodel = !0)));
        },
        componentUpdated: function(t, e, n) {
            if ("select" === n.tag) {
                Co(t, e, n.context);
                var r = t._vOptions, i = t._vOptions = [].map.call(t.options, So);
                i.some(function(t, e) {
                    return !se(t, r[e]);
                }) && (t.multiple ? e.value.some(function(t) {
                    return bo(t, i);
                }) : e.value !== e.oldValue && bo(e.value, i)) && xo(t, "change");
            }
        }
    };
    function Co(t, e, n) {
        wo(t, e), (we || Se) && setTimeout(function() {
            wo(t, e);
        }, 0);
    }
    function wo(t, e, n) {
        var r = e.value, i = t.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = t.options.length; s < c; s++) if (a = t.options[s], i) o = ce(r, So(a)) > -1, 
            a.selected !== o && (a.selected = o); else if (se(So(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
            i || (t.selectedIndex = -1);
        }
    }
    function bo(t, e) {
        return e.every(function(e) {
            return !se(e, t);
        });
    }
    function So(t) {
        return "_value" in t ? t._value : t.value;
    }
    function ko(t) {
        t.target.composing = !0;
    }
    function Ao(t) {
        t.target.composing && (t.target.composing = !1, xo(t.target, "input"));
    }
    function xo(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function Oo(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : Oo(t.componentInstance._vnode);
    }
    var $o = {
        model: yo,
        show: {
            bind: function(t, e, n) {
                var r = e.value, i = (n = Oo(n)).data && n.data.transition, o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && i ? (n.data.show = !0, fo(n, function() {
                    t.style.display = o;
                })) : t.style.display = r ? o : "none";
            },
            update: function(t, e, n) {
                var r = e.value;
                !r != !e.oldValue && ((n = Oo(n)).data && n.data.transition ? (n.data.show = !0, 
                r ? fo(n, function() {
                    t.style.display = t.__vOriginalDisplay;
                }) : vo(n, function() {
                    t.style.display = "none";
                })) : t.style.display = r ? t.__vOriginalDisplay : "none");
            },
            unbind: function(t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
            }
        }
    }, Fo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [ Number, String, Object ]
    };
    function Eo(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? Eo(Pn(e.children)) : t;
    }
    function Io(t) {
        var e = {}, n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var i = n._parentListeners;
        for (var o in i) e[Xt(o)] = i[o];
        return e;
    }
    function Ro(t, e) {
        if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
            props: e.componentOptions.propsData
        });
    }
    var Lo = {
        name: "transition",
        props: Fo,
        abstract: !0,
        render: function(t) {
            var e = this, n = this.$slots.default;
            if (n && (n = n.filter(function(t) {
                return t.tag || Gn(t);
            })).length) {
                var r = this.mode, i = n[0];
                if (function(t) {
                    for (;t = t.parent; ) if (t.data.transition) return !0;
                }(this.$vnode)) return i;
                var o = Eo(i);
                if (!o) return i;
                if (this._leaving) return Ro(t, i);
                var a = "__transition-" + this._uid + "-";
                o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : Tt(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                var s = (o.data || (o.data = {})).transition = Io(this), c = this._vnode, l = Eo(c);
                if (o.data.directives && o.data.directives.some(function(t) {
                    return "show" === t.name;
                }) && (o.data.show = !0), l && l.data && !function(t, e) {
                    return e.key === t.key && e.tag === t.tag;
                }(o, l) && !Gn(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var d = l.data.transition = ne({}, s);
                    if ("out-in" === r) return this._leaving = !0, Rn(d, "afterLeave", function() {
                        e._leaving = !1, e.$forceUpdate();
                    }), Ro(t, i);
                    if ("in-out" === r) {
                        if (Gn(o)) return c;
                        var u, p = function() {
                            u();
                        };
                        Rn(s, "afterEnter", p), Rn(s, "enterCancelled", p), Rn(d, "delayLeave", function(t) {
                            u = t;
                        });
                    }
                }
                return i;
            }
        }
    }, No = ne({
        tag: String,
        moveClass: String
    }, Fo);
    function Do(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function To(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
    }
    function Go(t) {
        var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, i = e.top - n.top;
        if (r || i) {
            t.data.moved = !0;
            var o = t.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
        }
    }
    delete No.mode;
    var Po = {
        Transition: Lo,
        TransitionGroup: {
            props: No,
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Io(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), 
                    n[c.key] = c, (c.data || (c.data = {})).transition = a);
                }
                if (r) {
                    for (var l = [], d = [], u = 0; u < r.length; u++) {
                        var p = r[u];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? l.push(p) : d.push(p);
                    }
                    this.kept = t(e, null, l), this.removed = d;
                }
                return t(e, null, o);
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
            },
            updated: function() {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, e) && (t.forEach(Do), t.forEach(To), t.forEach(Go), 
                this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                    if (t.data.moved) {
                        var n = t.elm, r = n.style;
                        oo(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(to, n._moveCb = function t(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(to, t), n._moveCb = null, 
                            ao(n, e));
                        });
                    }
                }));
            },
            methods: {
                hasMove: function(t, e) {
                    if (!Xi) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        qi(n, t);
                    }), Wi(n, e), n.style.display = "none", this.$el.appendChild(n);
                    var r = lo(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform;
                }
            }
        }
    };
    Dr.config.mustUseProp = function(t, e, n) {
        return "value" === n && Ur(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    }, Dr.config.isReservedTag = ni, Dr.config.isReservedAttr = Vr, Dr.config.getTagNamespace = function(t) {
        return ei(t) ? "svg" : "math" === t ? "math" : void 0;
    }, Dr.config.isUnknownElement = function(t) {
        if (!_e) return !0;
        if (ni(t)) return !1;
        if (t = t.toLowerCase(), null != ri[t]) return ri[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1 ? ri[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : ri[t] = /HTMLUnknownElement/.test(e.toString());
    }, ne(Dr.options.directives, $o), ne(Dr.options.components, Po), Dr.prototype.__patch__ = _e ? go : ie, 
    Dr.prototype.$mount = function(t, e) {
        return function(t, e, n) {
            var r;
            return t.$el = e, t.$options.render || (t.$options.render = je), Kn(t, "beforeMount"), 
            r = function() {
                t._update(t._render(), n);
            }, new rr(t, r, ie, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, Kn(t, "mounted")), 
            t;
        }(this, t = t && _e ? function(t) {
            return "string" == typeof t ? document.querySelector(t) || document.createElement("div") : t;
        }(t) : void 0, e);
    }, _e && setTimeout(function() {
        pe.devtools && Fe && Fe.emit("init", Dr);
    }, 0);
    const Mo = S("browserStorage");
    let Bo;
    !function(t) {
        t.Startup = "startup", t.GetState = "getState", t.StateChange = "stateChange", t.Installed = "installed", 
        t.Updated = "updated";
    }(Bo || (Bo = {}));
    const jo = () => x(Bo.GetState);
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = browser);
    const Vo = new class {
        constructor() {
            Z(this, "cache", void 0), Z(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(t) {
            return new Promise(e => {
                chrome && chrome.storage || e(), this.usingStorage = !0, chrome.storage.local.get(t || null, t => {
                    this.cache = t, e();
                });
            });
        }
        get(t) {
            return this.cache[t];
        }
        set(t, e) {
            null == e || void 0 === e ? (this.usingStorage && chrome.storage.local.remove(t, () => {
                chrome.runtime.lastError && Mo('could not remove key "%s" from browser storage (%O)', t, chrome.runtime.lastError);
            }), delete this.cache[t]) : (this.usingStorage && chrome.storage.local.set({
                [t]: e
            }, () => {
                chrome.runtime.lastError && Mo('could not set key "%s" in browser storage (%O)', t, chrome.runtime.lastError);
            }), this.cache[t] = e);
        }
    }();
    let Uo;
    const Ho = S("popup");
    Vo.init().then(function() {
        var t, e;
        return t = Bo.StateChange, e = (t => {
            Ho("background state changed: %O", t.state), Uo && Uo(t.state);
        }), chrome.runtime.onMessage.addListener(function(n, r, i) {
            n && n.type && n.value && n.type === t && e && e(n.value);
        }), new Promise(function(t) {
            A(jo(), e => {
                Ho("background state: %O", e.state), t(e.state);
            });
        });
    }).then(function(t) {
        Dr.mixin({
            methods: {
                translate: t => (function(t) {
                    return chrome.i18n.getMessage(t);
                })(t)
            }
        });
        const e = new Dr({
            components: {
                Popup: It
            },
            data: {
                bgState: t,
                hash: location.hash
            },
            el: "#app",
            render(t) {
                return t(It, {
                    props: {
                        bgState: this.bgState,
                        hash: this.hash,
                        storage: Vo
                    }
                });
            }
        });
        Uo = (t => {
            e.bgState = t;
        }), window.addEventListener("hashchange", () => {
            e.hash = location.hash.replace("#", "");
        }, !1);
    });
}();
