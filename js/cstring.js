var EnlighterJS = function (e) {
    "use strict";
    var u = {
        indent: 4,
        ampersandCleanup: !0,
        linehover: !0,
        rawcodeDbclick: !1,
        textOverflow: "break",
        collapse: !1,
        retainCssClasses: !1,
        cssClasses: "",
        toolbarOuter: "{BTN_TABS}",
        toolbarTop: "{BTN_RAW}{BTN_COPY}{BTN_WINDOW}{BTN_WEBSITE}",
        toolbarBottom: "{BTN_COLLAPSE}",
        linenumbers: !0,
        lineoffset: 0,
        highlight: "",
        layout: "standard",
        language: "generic",
        theme: "enlighter",
        title: ""
    };

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && o(e, t)
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function o(e, t) {
        return (o = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch (e) {
            return !1
        }
    }

    function g(e, t, n) {
        return (g = l() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            r = new(Function.bind.apply(e, r));
            return n && o(r, n.prototype), r
        }).apply(null, arguments)
    }

    function p(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function c(n) {
        var r = l();
        return function () {
            var e, t = s(n);
            return p(this, r ? (e = s(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function y(e, t, n) {
        return (y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
            e = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)););
                return e
            }(e, t);
            if (e) {
                t = Object.getOwnPropertyDescriptor(e, t);
                return t.get ? t.get.call(n) : t.value
            }
        })(e, t, n || e)
    }

    function f(e) {
        return function (e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || b(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var h = {
        sqStrings: {
            regex: /('(?:[^'\\]|\\.)*')/g,
            type: "s0"
        },
        dqStrings: {
            regex: /"(?:[^"\\]|\\.)*"/g,
            type: "s0"
        },
        bqStrings: {
            regex: /`(?:[^`\\]|\\.)*`/g,
            type: "s0"
        },
        char: {
            regex: /('(\\.|.|\\\w+)')/g,
            type: "s1"
        },
        slashComments: {
            regex: /(?:^|[^\\])(\/\/.*)$/gm,
            type: "c0"
        },
        poundComments: {
            regex: /(?:^|[^\\])(#.*)$/gm,
            type: "c0"
        },
        blockComments: {
            regex: /\/\*[\s\S]*?\*\//g,
            type: "c1"
        },
        docComments: {
            regex: /\/\*\*[\s\S]*?\*\//g,
            type: "c2"
        },
        heredoc: {
            regex: /(<<[<-]?\s*?(['"]?)([A-Z0-9_]+)\2\s*\n[\s\S]*?\n\3)/gi,
            type: "s5"
        },
        brackets: {
            regex: /[[\](){}<>]+/g,
            type: "g1"
        },
        floats: {
            regex: /[\b\W](-?((?:\d+\.\d+|\.\d+|\d+\.)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+))/gi,
            type: "n0"
        },
        complex: {
            regex: /[\b\W](?:-?(?:(?:\d+\.\d+|\.\d+|\d+\.|\d+)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+))[ij]/gi,
            type: "n5"
        },
        int: {
            regex: /[\b\W](-?\d+)(?!\.)\b/g,
            type: "n1"
        },
        hex: {
            regex: /[\b\W](-?0x[A-F0-9]+)\b/gi,
            type: "n2"
        },
        bin: {
            regex: /[\b\W](-?0b[01]+)\b/gi,
            type: "n3"
        },
        octal: {
            regex: /[\b\W](-?0[0-7]+)(?!\.)\b/g,
            type: "n4"
        },
        prop: {
            regex: /[\w\])]\.(\w+)\b/g,
            type: "m3"
        },
        fCalls: {
            regex: /\b([\w]+)\s*\(/gm,
            type: "m0"
        },
        mCalls: {
            regex: /\.([\w]+)\s*\(/gm,
            type: "m1"
        },
        boolean: {
            regex: /\b(true|false)\b/gi,
            type: "e0"
        },
        null: {
            regex: /\b(null)\b/gi,
            type: "e1"
        }
    };

    function m(e, t, n, r, i) {
        return {
            text: e,
            type: t,
            index: r || 0,
            end: e.length + r,
            filter: n || null,
            priority: i || 0
        }
    }

    function x() {
        (console.error || console.log || function () {}).apply(void 0, arguments)
    }

    function k(e, t, n) {
        for (var r = 2 < arguments.length && void 0 !== n ? n : "text", i = [], a = 0; a < t.length; a++) {
            var s = t[a];
            if (!s || !s.type || !s.regex) return;
            try {
                var o = function (e, t, n) {
                        for (var r, i = [], a = 0; null != (r = t.regex.exec(e));) {
                            if (5e4 < ++a) throw new Error("Infinite tokenizer loop detected; more than 50k tokens - language rule [" + n + "] " + t.regex + " seems to be broken");
                            if (0 != r[0].length) {
                                t.regex.lastIndex = r.index + 1 + r[0].length / 3;
                                var s = Array.isArray(t.type) ? t.type[0] : t.type,
                                    o = (Array.isArray(t.filter) ? t.filter[0] : t.filter) || null;
                                if (1 < r.length)
                                    for (var l, g, u, p = 0, c = 1; c < r.length; c++) r[c] && (l = Array.isArray(t.type) && t.type.length >= c ? t.type[c - 1] : s, g = Array.isArray(t.filter) && t.filter.length >= c ? t.filter[c - 1] : o, p = u = r[0].indexOf(r[c], p), i.push(m(r[c], l, g, r.index + u, n)));
                                else i.push(m(r[0], s, o, r.index, n))
                            }
                        }
                        return i
                    }(e, s, a),
                    i = i.concat(o)
            } catch (e) {
                x(e)
            }
        }
        i = i.sort(function (e, t) {
            return e.index == t.index ? e.priority < t.priority ? -1 : 1 : e.index < t.index ? -1 : 1
        });
        for (var l = [], g = 0, u = 0; u < i.length; u++) {
            if (g < i[u].index && l.push(m(e.substring(g, i[u].index), r, null, g)), i[u].filter)
                for (var p = i[u].filter(i[u]) || [], c = 0; c < p.length; c++) l.push(p[c]);
            else l.push(i[u]);
            g = i[u].end;
            for (var y = !1, f = u + 1; f < i.length; f++)
                if (i[f].index >= g) {
                    u = f - 1, y = !0;
                    break
                } if (!1 === y) break
        }
        return g < e.length && l.push(m(e.substring(g), r, null, g)), l
    }
    var v = function () {
            function e() {
                n(this, e), this.rules = [], this.setupLanguage()
            }
            return i(e, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.sqStrings, h.dqStrings, h.prop, h.slashComments, h.poundComments, h.blockComments, h.brackets, {
                        regex: /\b(true|false|null|nil|if|then|else|for|while|do|class|implements|extends|function|end|void|return|in|of|new|this|try|catch|def|except)\b/gi,
                        type: "k1"
                    }, h.mCalls, h.fCalls, h.octal, h.bin, h.hex, h.floats, h.int, {
                        regex: /[\b\s]([$&|~*:;]+)[\b\s]/g,
                        type: "g0"
                    }]
                }
            }, {
                key: "analyze",
                value: function (e) {
                    return k(e, this.rules)
                }
            }]), e
        }(),
        t = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.sqStrings, {
                        regex: /\|.*?\|/g,
                        type: "s2"
                    }, {
                        regex: /(".*)$/gm,
                        type: "c0"
                    }, {
                        regex: /^\s*(\*.*)$/gm,
                        type: "c0"
                    }, {
                        regex: /(data):?\s*(\w+)\s*/gi,
                        type: ["k2", "k7"]
                    }, {
                        regex: /(type)\s+(\w+)\s*/gi,
                        type: ["k2", "k5"]
                    }, {
                        regex: /\b(abap_true|abap_false)\b/gi,
                        type: "e0"
                    }, {
                        regex: /\b(abap_undefined)\b/gi,
                        type: "e1"
                    }, {
                        regex: /\b[A-Z_][A-Za-z0-9_]*\b/g,
                        type: "k0"
                    }, h.fCalls, h.int, h.brackets]
                }
            }]), t
        }();

    function w(e, t, n) {
        for (var r, i = [], a = 0; null != (r = t.exec(e.text));) {
            a < r.index && i.push(m(e.text.substring(a, r.index), e.type, null, a));
            for (var s = n(r, e.type) || [], o = 0; o < s.length; o++) i.push(s[o]);
            a = r.index + r[0].length, t.lastIndex = a
        }
        return 0 == i.length ? [e] : (a < e.text.length && i.push(m(e.text.substring(a), e.type, null, a)), i)
    }
    var C = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.poundComments, {
                        regex: /(<)([A-Z:_][A-Z0-9:.-]*)([\s\S]*?)(\/?>)/gi,
                        type: ["g1", "x1", "text", "g1"],
                        filter: [null, null, function (e) {
                            return w(e, h.dqStrings.regex, function (e) {
                                return [m(e[0], "s0")]
                            })
                        }, null]
                    }, {
                        regex: /(<\/)([A-Z:_][A-Z0-9:.-]*\s*)(>)/gi,
                        type: ["g1", "x1", "g1"]
                    }, {
                        regex: /^\s*([A-Z]\w+)\b/gm,
                        type: "k0"
                    }, {
                        regex: /%\{\w+\}/g,
                        type: "k7"
                    }, {
                        regex: /\b(on|off)\b/gi,
                        type: "e0"
                    }, h.int]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["apacheconf", "httpd"]
                }
            }]), t
        }(),
        S = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /(;.*)$/gm,
                        type: "co0"
                    }, {
                        regex: /(\$.*)$/gm,
                        type: "k4"
                    }, h.sqStrings, h.dqStrings, {
                        regex: /(^|:)\s*?(\w+)\s+/gm,
                        type: "k0"
                    }, {
                        regex: /^\s*?([A-Z?_][A-Z0-9?_]+:)\s*?/gim,
                        type: "k6"
                    }, {
                        regex: /@\w+/gi,
                        type: "k9"
                    }, {
                        regex: /#\w+/gi,
                        type: "k9"
                    }, {
                        regex: /[A-F0-9][A-F0-9$]+?H/gi,
                        type: "n2"
                    }, {
                        regex: /\d[\d$]+?D/gi,
                        type: "n1"
                    }, {
                        regex: /[01][01$]+?B/gi,
                        type: "n3"
                    }, {
                        regex: /[0-7][0-7$]+?(?:Q|O)/gi,
                        type: "nu4"
                    }, {
                        regex: /(0x[A-F0-9]+|\$[A-F0-9]+)/gi,
                        type: "n2"
                    }, {
                        regex: /(0b[01]+)/g,
                        type: "n3"
                    }, {
                        regex: /\b(\d+)/g,
                        type: "n1"
                    }, h.fCalls]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["asm"]
                }
            }]), t
        }(),
        _ = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /(;.*)$/gm,
                        type: "co0"
                    }, h.sqStrings, h.dqStrings, {
                        regex: /^\s*?\.\w+\s+/gm,
                        type: "kw4"
                    }, {
                        regex: /\b(r\d{1,2})/gi,
                        type: "kw0"
                    }, {
                        regex: /(@[0-9])/gi,
                        type: "k2"
                    }, {
                        regex: /^\s*?(\w+:)\s*?/gm,
                        type: "kw6"
                    }, {
                        regex: /(^|:)\s*?(\w+)\s+/gm,
                        type: "kw0"
                    }, {
                        regex: /(0x[A-F0-9]+|\$[A-F0-9]+)/gi,
                        type: "nu2"
                    }, h.bin, h.int, h.fCalls, {
                        regex: /\b[A-Z]{2,}[0-9]?[0-9]?\b/g,
                        type: "kw9"
                    }]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["avrasm"]
                }
            }]), t
        }(),
        E = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.char, {
                        regex: /@[\W\w_][\w]+/gm,
                        type: "k11"
                    }, h.boolean, h.null, h.prop, {
                        regex: /#.*$/gm,
                        type: "k4"
                    }, {
                        regex: /\b(break|case|catch|continue|do|else|for|if|goto|switch|try|throw|while)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(__[A-Z][A-Z0-9_]+__|__cplusplus)\b/g,
                        type: "e3"
                    }, {
                        regex: /\b(\w+\d+?_t)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(bool|char|double|float|int|long|short|void)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(enum|struct|typedef|union)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const|volatile|unsigned|signed|restrict)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(asm|auto|class|auto|default|explicit|export|extern|friend|inline|thread_local|static_assert|nullptr|noexcept|friend|decltype|constexpr|alignof|alignas|virtual|using|typename|typeid|this|template|static|return|register|public|protected|private|operator|namespace|mutable|inline)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(new|delete|cast|const_cast|dynamic_cast|static_cast|reinterpret_cast|sizeof|and|bitand|and_eq|not|not_eq|or|bitor|or_eq|xor|xor_eq|compl)\b/g,
                        type: "k3"
                    }, h.mCalls, h.fCalls, h.slashComments, h.blockComments, h.octal, h.bin, h.hex, h.floats, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["c++", "c"]
                }
            }]), t
        }(),
        A = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /\$("(?:[^"\\]|\\.)*")/g,
                        type: "s0",
                        filter: function (e) {
                            return w(e, /\{.*?}/g, function (e) {
                                return [m(e[0], "s3")]
                            })
                        }
                    }, h.dqStrings, h.char, h.null, h.boolean, h.prop, {
                        regex: /\b(bool|byte|char|decimal|double|float|int|long|sbyte|short|uint|ulong|ushort|void|string)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(while|try|throw|switch|if|goto|foreach|for|finally|else|do|continue|catch|case|break)\b/g,
                        type: "k1"
                    }, {
                        regex: /^((?:using|namespace)\s+)(\w[\w._]+[;{\n])/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(enum|struct|var)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const|in|out)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(using|volatile|virtual|using|unsafe|unchecked|static|stackalloc|sealed|return|ref|readonly|public|protected|private|params|override|operator|object|namespace|lock|is|internal|interface|implicit|fixed|extern|explicit|event|delegate|default|class|checked|base|as|abstract)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(add|alias|ascending|async|await|by|descending|dynamic|equals|from|get|global|group|into|join|let|nameof|on|orderby|partial|remove|select|set|unmanaged|value|var|when|where|yield)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(this)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(new|sizeof|typeof)\b/g,
                        type: "k3"
                    }, h.fCalls, h.mCalls, h.slashComments, h.blockComments, h.docComments, h.int, h.floats, h.bin, h.hex, h.octal, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["c#"]
                }
            }]), t
        }(),
        L = {
            pseudoElements: {
                regex: /[\w\])](::?[\w-]+)\b/g,
                type: "x15"
            },
            idSelector: {
                regex: /(#[\w-]+)/g,
                type: "x10"
            },
            classSelector: {
                regex: /(\.[\w-]+)/g,
                type: "x11"
            },
            elementSelector: {
                regex: /\b([\w-]+)/g,
                type: "x16"
            }
        },
        I = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    var t = [L.pseudoElements, L.idSelector, L.classSelector, L.elementSelector, h.dqStrings, h.sqStrings];
                    this.rules = [{
                        regex: /(?:^|}|\*\/|;|{)\s*([^{};/]+?)\s*{/g,
                        type: "text",
                        filter: function (e) {
                            return k(e.text, t)
                        }
                    }, h.dqStrings, h.sqStrings, {
                        regex: /\W@(charset|import|namespace|page|font-face|keyframes|viewport|document|supports)\b/gi,
                        type: "k4"
                    }, {
                        regex: /(url\s*)(\(.*?\))/gi,
                        type: ["m0", "s0"]
                    }, {
                        regex: /(#[a-z0-9]+)\W/gi,
                        type: "x14"
                    }, {
                        regex: /(-?\.?\d+[.\d]*(%|[a-z]{2,4})?)/gim,
                        type: "x13"
                    }, {
                        regex: /([\w-]+)\s*:/g,
                        type: "x12"
                    }, h.blockComments, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["styles"]
                }
            }]), t
        }(),
        q = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /^("""[\s\S]*?"""|'''[\s\S]*?''')/gm,
                        type: "c9"
                    }, {
                        regex: /("""[\s\S]*?"""|'''[\s\S]*?''')/g,
                        type: "s5"
                    }, h.dqStrings, h.sqStrings, {
                        regex: /\b(__[a-z]+__)\b/g,
                        type: "e3"
                    }, {
                        regex: /[^;]\s*(from\s+)([\w.]+)(\s+import)/gi,
                        type: ["k0", "k10", "k0"]
                    }, {
                        regex: /\b(raise|while|try|if|for|finally|else|elif|continue|break)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(yield|with|return|pass|lambda|is|in|import|global|from|except|def|class|assert|as|async|await)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(and|or|not|del)\b/g,
                        type: "k3"
                    }, {
                        regex: /\b(True|False)\b/g,
                        type: "e0"
                    }, {
                        regex: /\b(None)\b/g,
                        type: "e1"
                    }, h.mCalls, h.fCalls, h.poundComments, h.int, h.hex, h.floats, h.octal, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["py"]
                }
            }]), t
        }(),
        N = function () {
            a(t, q);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    this.rules = [{
                        regex: /\b(bool|char|double|float|int|long|short|void)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(enum|struct|typedef|union|object)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const|volatile|unsigned|signed|restrict)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(readonly|extern|namespace|public|privat|include|cimport|pyximport|cythonize|cdef|cpdef|ctypedef|property|IF|ELIF|ELSE|DEF)\b/g,
                        type: "k0"
                    }].concat(this.rules)
                }
            }]), t
        }(),
        W = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.poundComments, h.brackets, {
                        regex: /\[(\w+)\]/gm,
                        type: "k9"
                    }, {
                        regex: /\{([\w_-]+)\s*(?::\s*(.*?))?}/gm,
                        type: ["k7", "s0"]
                    }]
                }
            }]), t
        }(),
        D = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /^([+-]{3}.*)$/gm,
                        type: "c0"
                    }, {
                        regex: /^(@@.*@@\s*)/gm,
                        type: "t2"
                    }, {
                        regex: /^(\+.*)/gm,
                        type: "t5"
                    }, {
                        regex: /^(-.*)/gm,
                        type: "t6"
                    }]
                }
            }]), t
        }(),
        O = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, {
                        regex: /\$\{\w+\}/gi,
                        type: "k7"
                    }, {
                        regex: /ARG\s+(\w+)(?:(=)(.*?)$)?/gim,
                        type: ["k7", "k3", "s0"]
                    }, {
                        regex: /ENV\s+(\w+)(?:(\s+|=)(.*?)$)?/gim,
                        type: ["k7", "k3", "s0"]
                    }, {
                        regex: /(?:^|[^\\])#\s*\w+=.*$/gm,
                        type: "k4"
                    }, h.poundComments, {
                        regex: /^([a-z]+)\b/gim,
                        type: "k0"
                    }, {
                        regex: /\b(AS)\b/gi,
                        type: "k0"
                    }, {
                        regex: /^\s+(&&)/gim,
                        type: "k3"
                    }, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["docker"]
                }
            }]), t
        }(),
        $ = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.bqStrings, h.char, h.boolean, {
                        regex: /\b(nil)\b/gi,
                        type: "e1"
                    }, h.prop, {
                        regex: /\b(var)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(case|break|default|else|goto|switch|if|continue|for)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(func|interface|select|defer|go|map|chan|package|fallthrough|range|import|return)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(iota)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(bool|string|u?int(8|16|32|64)?|uintptr|byte|rune|float32|float64|complex64|complex128)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(struct|type)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const)\b/g,
                        type: "k8"
                    }, h.mCalls, h.fCalls, h.slashComments, h.octal, h.int, h.complex, h.floats, h.hex, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["golang"]
                }
            }]), t
        }(),
        T = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /("""[\s\S]*?"""|'''[\s\S]*?''')/g,
                        type: "s5"
                    }, h.dqStrings, h.sqStrings, h.char, h.slashComments, h.blockComments, h.docComments, {
                        regex: /(\/(?:[^/\\]|\\.)*\/)/g,
                        type: "s5"
                    }, h.prop, {
                        regex: /\b(byte|char|short|int|long|float|double|String)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(break|case|catch|continue|default|do|else|finally|for|goto|if|switch|throw|try|while)\b/g,
                        type: "k1"
                    }, {
                        regex: /^(package|import)(\s+[\w.]+)/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(const|enum|def)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(as|assert|class|extends|goto|implements|in|interface|return|thows|trait)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(this|super)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(instanceof|new)\b/g,
                        type: "k3"
                    }, h.fCalls, h.mCalls, h.null, h.boolean, {
                        regex: /^#.*/g,
                        type: "k9"
                    }, {
                        regex: /[\b\W](-?0[0-7][0-7_]+[GLIDF]?)\b/gi,
                        type: "n4"
                    }, {
                        regex: /[\b\W](-?\d[\d_]*[GLIDF]?)(?!\.)\b/gi,
                        type: "n1"
                    }, {
                        regex: /[\b\W](-?0x[A-F0-9][A-F0-9_]+[GLIDF]?)\b/gi,
                        type: "n2"
                    }, {
                        regex: /[\b\W](-?0b[01][01_]+[GLIDF]?)\b/gi,
                        type: "n3"
                    }, {
                        regex: /(-?((?:\d+\.\d+|\.\d+|\d+\.)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+)?)/gi,
                        type: "n0"
                    }, h.brackets]
                }
            }]), t
        }(),
        R = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, {
                        regex: /(;.*)$/gm,
                        type: "c0"
                    }, h.poundComments, {
                        regex: /^\s*?(\[.*])\s*?$/gm,
                        type: "t2"
                    }, {
                        regex: /^(\s*?[a-z0-9._-]+\s*?)(=)/gim,
                        type: ["k2", "k3"]
                    }, {
                        regex: /\b(true|false|on|off|yes|no)\b/gim,
                        type: "e0"
                    }, h.octal, h.bin, h.hex, h.floats, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["conf", "cnf"]
                }
            }]), t
        }(),
        F = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.char, {
                        regex: /@[\W\w_][\w]+/gm,
                        type: "k11"
                    }, h.prop, {
                        regex: /\b(boolean|byte|char|short|int|long|float|double|String|void|Integer|Double|BigInt|Float|Boolean|Byte|Char|Long)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(while|try|catch|case|else|throw|break|if|do|goto|switch|for|continue)\b/g,
                        type: "k1"
                    }, {
                        regex: /^(package|import)(\s+[\w.]+)/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(enum)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(native|volatile|strictfp|finally|class|static|interface|final|extends|transient|return|throws|public|protected|implements|private|synchronized|default|assert|abstract)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(this|super)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(instanceof|new)\b/g,
                        type: "k3"
                    }, h.fCalls, h.mCalls, h.null, h.boolean, h.slashComments, h.blockComments, h.docComments, h.int, h.floats, h.bin, h.hex, h.octal, h.brackets]
                }
            }]), t
        }(),
        j = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    function e(e) {
                        return w(e, /\\(x[A-F0-9]{2}|u[A-F0-9]{4}|.)/gi, function (e) {
                            return [m(e[0], "s4")]
                        })
                    }
                    this.rules = [{
                        regex: h.sqStrings.regex,
                        type: "s0",
                        filter: e
                    }, {
                        regex: h.dqStrings.regex,
                        type: "s0",
                        filter: e
                    }, {
                        regex: /`(?:[^`\\]|\\.)*`/g,
                        type: "s2",
                        filter: function (e) {
                            return w(e, /\$\{.*?}/g, function (e) {
                                return [m(e[0], "s3")]
                            })
                        }
                    }, h.boolean, h.null, h.prop, {
                        regex: /\b(var|let|enum|const)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(document|window|console)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(break|case|catch|continue|do|else|finally|for|if|switch|try|while|throw)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(as|async|class|constructor|debugger|default|export|extends|function|import|return|with|yield|implements|package|protected|static|interface|private|public|await|module)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(this|super)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(instanceof|new|delete|typeof|void|in)\b/g,
                        type: "k3"
                    }, {
                        regex: /\W(=>)\W/g,
                        type: "k3"
                    }, h.slashComments, h.blockComments, {
                        regex: /\W(\/(?:[^/\\]|\\.)*\/\w*)/g,
                        type: "e2"
                    }, h.mCalls, h.fCalls, {
                        regex: /\{|}|\(|\)|\[|]/g,
                        type: "g1"
                    }, {
                        regex: /[\b\W](-?0o[0-7]+)(?!\.)\b/g,
                        type: "n4"
                    }, h.bin, h.hex, h.floats, h.int]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["js"]
                }
            }]), t
        }(),
        z = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /"(?:[^"\\]|\\.)*"\s*:/g,
                        type: "k2"
                    }, h.dqStrings, h.boolean, h.null, {
                        regex: /\{|}|\(|\)|\[|]/g,
                        type: "g1"
                    }, h.int, h.floats, {
                        regex: /,|:/g,
                        type: "g0"
                    }]
                }
            }]), t
        }(),
        Z = function () {
            a(t, j);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    this.rules = this.rules.concat([{
                        regex: /(<)([A-Z:_][A-Z0-9:.-]*)([\s\S]*?)(\/?>)/gi,
                        type: ["g1", "x1", "text", "g1"],
                        filter: [null, null, null, null]
                    }, {
                        regex: /(<\/)([A-Z:_][A-Z0-9:.-]*\s*)(>)/gi,
                        type: ["g1", "x1", "g1"]
                    }])
                }
            }]), t
        }(),
        B = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    function e(e) {
                        return w(e, /\$(?:\{.*?}|\w+)/g, function (e) {
                            return [m(e[0], "s3")]
                        })
                    }
                    this.rules = [{
                        regex: /"""[\s\S]*?"""/g,
                        type: "s5",
                        filter: e
                    }, {
                        regex: h.dqStrings.regex,
                        type: "s0",
                        filter: e
                    }, h.char, h.prop, {
                        regex: /\b(Double|Float|Long|Int|Short|Byte|Any|String|Array)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(break|continue|do|else|for|if|throw|try|when|while|catch|finally)\b/g,
                        type: "k1"
                    }, {
                        regex: /^(package|import)(\s+[\w.]+)/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(enum|typealias|object|companion|val|var)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(actual|abstract|annotation|companion|crossinline|data|expect|external|final|infix|inline|inner|internal|lateinit|noinline|open|operator|out|override|private|protected|public|reified|sealed|suspend|tailrec|vararg)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(as|class|fun|in|interface|is|return|by|constructor|delegate|dynamic|field|file|get|init|param|property|receiver|set|setparam|where|field|it)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(this|super)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(instanceof|new)\b/g,
                        type: "k3"
                    }, {
                        regex: /(@\w+|\w+@)/gm,
                        type: "k6"
                    }, h.fCalls, h.mCalls, h.null, h.boolean, h.slashComments, h.blockComments, {
                        regex: /[\b\W](-?\d[\d_]*L?)(?!\.)\b/g,
                        type: "n1"
                    }, h.floats, {
                        regex: /[\b\W](-?0x[A-F0-9][A-F0-9_]+)\b/gi,
                        type: "n2"
                    }, {
                        regex: /[\b\W](-?0b[01][01_]+)\b/gi,
                        type: "n3"
                    }, h.brackets]
                }
            }]), t
        }(),
        M = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /(?:^|[^\\])%.*$/gm,
                        type: "c0"
                    }, {
                        regex: /[^\\](\\\w+)(?:[\W\s])/gm,
                        type: "k0"
                    }, {
                        regex: /[$()]/g,
                        type: ["s3"]
                    }, h.int, h.floats, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["tex"]
                }
            }]), t
        }(),
        P = function () {
            a(t, I);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this), this.rules.shift();
                    var e = [h.slashComments, L.pseudoElements, L.idSelector, L.classSelector, {
                        regex: /\b([\w][\w-]+)\s*\(/gm,
                        type: "m0"
                    }, {
                        regex: /@[\w-]+\b/g,
                        type: "k7"
                    }, {
                        regex: /&/gi,
                        type: "k3"
                    }];
                    this.rules = this.rules.concat(e)
                }
            }]), t
        }(),
        U = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.poundComments, {
                        regex: /[\w\])]\.([\w-]+)\b/g,
                        type: "m3"
                    }, {
                        regex: /\b(else)\b/g,
                        type: "k1"
                    }, {
                        regex: /\s\$[A-Z_]+/g,
                        type: "k7"
                    }, {
                        regex: /(==|!=|=~|!~)/g,
                        type: "k3"
                    }, {
                        regex: /\b(\w[\w-]+)\.\w/g,
                        type: "k9"
                    }, h.int, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return []
                }
            }]), t
        }(),
        G = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /---\[\[[\s\S]*?(]])/g,
                        type: "c1"
                    }, {
                        regex: /--\[\[[\s\S]*?]]/g,
                        type: "c1"
                    }, {
                        regex: /(--.*)$/gm,
                        type: "c0"
                    }, h.dqStrings, h.sqStrings, {
                        regex: /(\[(=*)\[[\S\s]*?]\2])/g,
                        type: "s5"
                    }, {
                        regex: /\b(true|false)\b/gi,
                        type: "e0"
                    }, {
                        regex: /\b(nil)\b/gi,
                        type: "e1"
                    }, {
                        regex: /\b(local)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(break|do|else|elseif|end|for|if|repeat|then|until|while)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(function|return|and|in|or|not)\b/g,
                        type: "k0"
                    }, h.brackets, h.floats, h.mCalls, h.fCalls]
                }
            }]), t
        }(),
        H = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.blockComments, {
                        regex: /--.*$/gm,
                        type: "c0"
                    }, h.null, h.sqStrings, {
                        regex: /\b(NOT NULL|UNIQUE|PRIMARY KEY|FOREIGN KEY|CHECK|DEFAULT|INDEX)\b/gi,
                        type: "k4"
                    }, {
                        regex: /`\S+?`(?:\.`\S+?`)*/g,
                        type: "k9"
                    }, {
                        regex: /\b(all|and|any|between|exists|in|like|not|or|is null|is not null|=|!=|<>|>|<|>=|<=|!<|!>)\b/gi,
                        type: "k3"
                    }, {
                        regex: /\b(SELECT|INSERT|UPDATE|DELETE|INTO|FROM|CREATE|TABLE|VIEW|WHERE|TRIGGER|ALTER|ORDER BY|DESC|ASC|AS|BETWEEN|JOIN|LEFT|RIGHT|INNER|OUTER|USING|ON|UNION)\b/gi,
                        type: "k0"
                    }, {
                        regex: /\b[A-Z]+\b/g,
                        type: "k0"
                    }, h.int, h.floats]
                }
            }]), t
        }(),
        V = function () {
            a(t, H);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    var e = [h.poundComments, {
                        regex: /\b(tinyint|smallint|mediumint|bigint|int|integer|boolean|decimal|number|float|double|bit|double precision|real|dec|numeric|fixed)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(unsigned|signed|zerofill)\b/g,
                        type: "k8"
                    }];
                    this.rules = this.rules.concat(e)
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["mysql"]
                }
            }]), t
        }(),
        J = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /[\r|\n](```[a-z_-]*[\r|\n][\S\s]+?```)/gi,
                        type: "t8"
                    }, {
                        regex: /^\s*#{1,6}.+$/gm,
                        type: "t1"
                    }, {
                        regex: /(.+[\r|\n][=-]{3,})[\r|\n]/g,
                        type: "t1"
                    }, {
                        regex: /`.+?`/g,
                        type: "t8"
                    }, {
                        regex: /^(?:\*|_|-){3,}$/gm,
                        type: "t2"
                    }, {
                        regex: /\W(\*\*|\*|~~|~|__|_)(.*?\1)\W/gm,
                        type: "t4"
                    }, {
                        regex: /!?\[.*?]\(.*?\)/g,
                        type: "t3"
                    }]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["md", "gfm"]
                }
            }]), t
        }(),
        Y = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /%.*$/gm,
                        type: "c0"
                    }, {
                        regex: /%%.*$/gm,
                        type: "c1"
                    }, h.sqStrings, h.dqStrings, h.boolean, h.mCalls, h.prop, {
                        regex: /\b(break|case|catch|continue|do|else|elseif|end|end_try_catch|endfor|endif|endmethods|endparfor|endproperties|endswitch|endwhile|for|if|switch|try|until|while)\b/gi,
                        type: "k1"
                    }, {
                        regex: /\b(__FILE__|__LINE__|classdef|end_unwind_protect|endclassdef|endenumeration|endevents|endfunctionenumeration|events|function|global|methods|otherwise|parfor|persistent|properties|return|static|unwind_protect|unwind_protect_cleanup)\b/gi,
                        type: "k0"
                    }, {
                        regex: /(@[\w]+)\s*/gm,
                        type: "k7"
                    }, h.fCalls, h.floats, h.brackets]
                }
            }]), t
        }(),
        X = function () {
            a(t, H);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    this.rules = this.rules.concat([])
                }
            }]), t
        }(),
        K = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.sqStrings, h.poundComments, {
                        regex: /([a-z]+)\s*\{/g,
                        type: "k9"
                    }, {
                        regex: /^\s*([a-z]\w+)\s/gm,
                        type: "k0"
                    }, {
                        regex: /\W([a-z]+:\/\/.*?);/g,
                        type: "k9"
                    }, {
                        regex: /\b(\d+\.\d+\.\d+\.\d+(?::\d+))\b/g,
                        type: "k9"
                    }, {
                        regex: /(?:\W)\$[a-z_]+/g,
                        type: "k7"
                    }, {
                        regex: /[\b\W](\d+[kmgdyw])\b/g,
                        type: "n0"
                    }, h.int, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return []
                }
            }]), t
        }(),
        Q = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.sqStrings, h.bqStrings, {
                        regex: /^\s*(Var(\s+\\GLOBAL)?)(\s+\w+)\b/g,
                        type: ["k2", "k7"]
                    }, {
                        regex: /\W(\$\{\w+})\W/g,
                        type: "k9"
                    }, {
                        regex: /\W(\$\w+)\b/g,
                        type: "k7"
                    }, {
                        regex: /^\s*([A-Z]\w+)\s+/gm,
                        type: "k0"
                    }, {
                        regex: /\b[A-Z][A-Z_]*[A-Z]\b/g,
                        type: "e3"
                    }, {
                        regex: /^\s*(!\w+)\s+/gm,
                        type: "k4"
                    }, {
                        regex: /^\s*(\w+:)\s*$/gim,
                        type: "k6"
                    }, {
                        regex: /\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user)\b/gi,
                        type: "k9"
                    }, h.blockComments, {
                        regex: /[#;].*?$/gm,
                        type: "c0"
                    }, h.int, h.hex, h.octal, h.brackets]
                }
            }]), t
        }(),
        ee = function () {
            a(t, H);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    this.rules = this.rules.concat([])
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["oracle"]
                }
            }]), t
        }(),
        te = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.sqStrings, h.dqStrings, h.heredoc, h.boolean, h.null, {
                        regex: /(self|parent|\$this)/gi,
                        type: "k9"
                    }, {
                        regex: /\b(as|break|case|catch|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|finally|for|foreach|goto|if|switch|throw|try|while)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b__[A-Z][A-Z0-9_]+__\b/g,
                        type: "e3"
                    }, {
                        regex: /\b(__halt_compiler|abstract|array|callable|class|const|continue|declare|default|die|echo|empty|eval|exit|extends|final|function|global|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|print|private|protected|public|require|require_once|return|static|trait|use|var|yield)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(and|or|xor|clone|new|unset)\b/g,
                        type: "k3"
                    }, {
                        regex: /\b(int|float|bool|string|resource|object|mixed|numeric)\b/g,
                        type: "k5"
                    }, h.slashComments, h.poundComments, h.blockComments, {
                        regex: /\$[^\s=;()]+/gim,
                        type: "k7"
                    }, {
                        regex: /\b([^\s(]+)\s*\(/gm,
                        type: "m0"
                    }, {
                        regex: /->([\w]+)/gim,
                        type: "m1"
                    }, {
                        regex: /::([\w]+)/gim,
                        type: "m2"
                    }, h.octal, h.bin, h.hex, h.floats, h.brackets]
                }
            }]), t
        }(),
        ne = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    function e(e) {
                        return w(e, /\$(?:\w+|\(.*?\))/g, function (e) {
                            return [m(e[0], "k7")]
                        })
                    }
                    this.rules = [{
                        regex: /"(?:[^"`]|`.)*"/g,
                        type: "s2",
                        filter: e
                    }, h.sqStrings, {
                        regex: /@"[\S\s]*?\n\s*"@/g,
                        type: "s5",
                        filter: e
                    }, {
                        regex: /@'[\S\s]*?\n\s*'@/g,
                        type: "s5"
                    }, {
                        regex: /\b(Begin|Break|Catch|Continue|Else|Elseif|End|Finally|For|ForEach|If|Switch|Throw|Try|Until|While)\b/gi,
                        type: "k1"
                    }, {
                        regex: /\b(Data|Do|DynamicParam|Exit|Filter|From|Function|In|InlineScript|Hidden|Parallel|Param|Process|Return|Sequence|Trap|Workflow)\b/gi,
                        type: "k0"
                    }, {
                        regex: /\b([A-Z]\w+(?:-\w+)+)\b/gi,
                        type: "m0"
                    }, {
                        regex: /<#[\S\s]+?#>/gi,
                        type: "c1"
                    }, h.poundComments, {
                        regex: /\$[A-Z_][\w]*/gim,
                        type: "k7"
                    }, h.mCalls, h.fCalls, h.int, h.floats, h.brackets]
                }
            }]), t
        }(),
        re = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /(%.*)$/gm,
                        type: "c0"
                    }, h.blockComments, h.dqStrings, h.sqStrings, {
                        regex: /^(\w+)(?:\(.*?\))?\s*(?::-|\.)/gm,
                        type: "k9"
                    }, {
                        regex: /\b(true|false|Yes|No|not|fail)\b/gi,
                        type: "e0"
                    }, {
                        regex: /\b(catch|throw|repeat)\b/g,
                        type: "k1"
                    }, {
                        regex: /^(\?-)/g,
                        type: "k9"
                    }, {
                        regex: /\b(is)\b/g,
                        type: "k3"
                    }, {
                        regex: /[A-Z_][\w]*/g,
                        type: "k7"
                    }, h.brackets, h.floats, h.int, h.fCalls]
                }
            }]), t
        }(),
        ie = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.int, h.floats, {
                        regex: /[\b\W](-?\$[A-F0-9]+)\b/gi,
                        type: "n2"
                    }, {
                        regex: /[\b\W](-?%[01]+)\b/gi,
                        type: "n3"
                    }, {
                        regex: /[\b\W](\*\w+)\b/gi,
                        type: "text"
                    }, h.dqStrings, {
                        regex: /[[\]()]+/g,
                        type: "g0"
                    }, {
                        regex: /#\w+/gim,
                        type: "g0"
                    }, {
                        regex: /[@?]\w+/gim,
                        type: "g1"
                    }, {
                        regex: /(IncludeFile|XIncludeFile|IncludeBinary|IncludePath) (.*?)$/gim,
                        type: "k0"
                    }, {
                        regex: /\b(Break|Case|Continue|Default|Else|ElseIf|End|EndIf|EndSelect|For|ForEver|ForEach|Gosub|Goto|If|Next|Repeat|Return|FakeReturn|Select|Until|Wend|While|To|Step)\b/gi,
                        type: "k1"
                    }, {
                        regex: /\b(Array|List|Map|Procedure(?:C|Dll|CDll)?|ProcedureReturn|EndProcedure|Declare(?:C|Dll|CDll)?|ImportC?|EndImport|As|Macro|MacroExpandedCount|EndMacro|UndefineMacro|DeclareModule|EndDeclareModule|Module|EndModule|UseModule|UnuseModule|With|EndWith|PrototypeC?|Runtime|Swap|Data|DataSection|EndDataSection|Read|Restore)\b/gi,
                        type: "k2"
                    }, {
                        regex: /\b(ReDim|Dim|NewList|NewMap|Enumeration|EndEnumeration|Interface|Extends|EndInterface|Structure(?:Union)?|EndStructure(?:Union)?)\b/gi,
                        type: "k4"
                    }, {
                        regex: /\b(?:ReDim|Dim|NewList|NewMap)\s*([\w]+)\(/gim,
                        type: "text"
                    }, {
                        regex: /\b(Define|Global|Protected|Shared|Static|Threaded)\b/gi,
                        type: "k3"
                    }, {
                        regex: /[\w\])]\.(s{\d+}|(?:p-ascii|p-utf8|p-bstr|p-unicode|p-variant)|\w+)(?:\([\d,]*\))?/gi,
                        type: "k4"
                    }, {
                        regex: /\b(CompilerIf|CompilerElse|CompilerElseIf|CompilerEndIf|CompilerSelect|CompilerCase|CompilerDefault|CompilerEndSelect|CompilerError|CompilerWarning|EnableExplicit|DisableExplicit|EnableASM|DisableASM|EnableDebugger|DisableDebugger|Debug|DebugLevel|CallDebugger)\b/gi,
                        type: "k5"
                    }, {
                        regex: /\W(And|Not|Or|Xor)\W/gi,
                        type: "k6"
                    }, {
                        regex: /(<=|=<|>=|=>|<>|<<|>>|=|-|\+|\/|%|<|>|&|\||!|~)/gi,
                        type: "k6"
                    }, {
                        regex: /(\*)(?:\d|\s*(?:\b|-|\(|%|\$|\*))/gi,
                        type: "k6"
                    }, {
                        regex: /(\w+)::/gi,
                        type: "k7"
                    }, {
                        regex: /(\w+):/gi,
                        type: "k8"
                    }, h.fCalls, {
                        regex: /;.*$/gm,
                        type: "c0"
                    }, {
                        regex: /\\(\w+)\b/g,
                        type: "m3"
                    }]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["pb"]
                }
            }]), t
        }(),
        ae = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.prop, {
                        regex: /\b([A-Z]\w+)\b/g,
                        type: "k5"
                    }, {
                        regex: /^(import)(\s+[\w.]+)/gm,
                        type: ["k0", "k5"]
                    }, {
                        regex: /\b(bool|char|double|float|int|long|short|void|string)\b/g,
                        type: "k5"
                    }, h.mCalls, h.null, h.boolean, h.slashComments, h.blockComments, h.int, h.floats, h.brackets]
                }
            }]), t
        }(),
        se = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, null, [{
                key: "alias",
                value: function () {
                    return []
                }
            }]), t
        }(),
        oe = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /^(.*?)$/g,
                        type: "text"
                    }]
                }
            }]), t
        }(),
        le = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, {
                        regex: /("[\s\S]*?")/g,
                        type: "s5"
                    }, {
                        regex: /\b(yes|no)\b/gi,
                        type: "e0"
                    }, {
                        regex: /\b([\w-]+)(=)/gi,
                        type: ["k6", "k3"]
                    }, {
                        regex: /[^\b](:local|:global)\s/gm,
                        type: "k2"
                    }, {
                        regex: /^\/\w+(?:\s+[a-z-]+)*\s*$/gm,
                        type: "k10"
                    }, {
                        regex: /\b(add|set|print|enable|disable|export|find|get|move|remove)\b/gi,
                        type: "k9"
                    }, {
                        regex: /[^\b](:[a-z-]+)\s/gm,
                        type: "k0"
                    }, {
                        regex: /\$[\w]*/gi,
                        type: "k7"
                    }, {
                        regex: /(?:[a-f0-9]{2}:){5}(?:[a-f0-9]{2})/gi,
                        type: "s0"
                    }, {
                        regex: /(?:\d{1,3}\.){3}(?:\d{1,3})(?:\/\d{1,2})?/gi,
                        type: "s0"
                    }, h.poundComments, {
                        regex: /[\b\W](-?\d+)([a-z]{1,4})?[\b\W]/gi,
                        type: "n0"
                    }, h.int, h.hex, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["mikrotik", "mt", "switchos", "ros"]
                }
            }]), t
        }(),
        ge = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    function e(e) {
                        return e.text.match(/^%r/) ? e.type = "e2" : e.text.match(/^%x/) && (e.type = "e4"), [e]
                    }
                    this.rules = [h.dqStrings, h.sqStrings, h.heredoc, {
                        regex: /(`(?:[^`\\]|\\.)*`)/g,
                        type: "e4"
                    }, h.boolean, {
                        regex: /\b(nil)\b/gi,
                        type: "e1"
                    }, h.fCalls, h.prop, {
                        regex: /@{1,2}[A-Za-z_]\w*\W/g,
                        type: "k7"
                    }, {
                        regex: /[^:](:[\w]+)\b/g,
                        type: "k6"
                    }, {
                        regex: /(\$[a-z0-9_-]+|\$.)\W/gi,
                        type: "k9"
                    }, {
                        regex: /\b(begin|break|case|do|else|elsif|end|ensure|for|if|in|next|redo|rescue|retry|then|unless|until|when|while)\b/gi,
                        type: "k1"
                    }, {
                        regex: /\b((?:__)?[A-Z][A-Z0-9_]+)\b/g,
                        type: "e3"
                    }, {
                        regex: /\b(alias|class|defined\?|undef|def|module|return|self|super|yield)\W/gi,
                        type: "k0"
                    }, {
                        regex: /\b(and|not|or)\b/gi,
                        type: "k3"
                    }, h.poundComments, {
                        regex: /^=begin[\S\s]*?^=end/gim,
                        type: "c2"
                    }, {
                        regex: /(%[iqrswx](\W)(?:[^\2\n\\]|\\.)*\2[iomx]*)/gim,
                        type: "s2",
                        filter: e
                    }, {
                        regex: /(%[iqrswx]?(\{(?:[^}\\]|\\.)*}|\[(?:[^}\\]|\\.)*]|\((?:[^)\\]|\\.)*\))[iomx]*)/gim,
                        type: "s2",
                        filter: e
                    }, {
                        regex: /\W(\/(?:[^/\\]|\\.)*\/\w*)\W/g,
                        type: "e2"
                    }, {
                        regex: /\W\?(?:\w|\\M|\\C)(?:-\w|-\\M|-\\C)*\b/g,
                        type: "n1"
                    }, {
                        regex: /[\b\W](-?\d[\d_]+?)(?!\.)\b/g,
                        type: "n1"
                    }, {
                        regex: /[\b\W](-?0x[A-F0-9][A-F0-9_]+)\b/gi,
                        type: "n2"
                    }, {
                        regex: /[\b\W](-?0b[01][01_]+)\b/gi,
                        type: "n3"
                    }, {
                        regex: /[\b\W](-?[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?[ji]?)\b/gi,
                        type: "n0"
                    }, h.brackets]
                }
            }]), t
        }(),
        ue = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.char, {
                        regex: /r((#+)".*?"\2)/gm,
                        type: "s0"
                    }, {
                        regex: /("(?:\\.|\\\s*\n|\\s*\r\n|[^\\"])*")/g,
                        type: "s0"
                    }, {
                        regex: /^\s*#.*$/gm,
                        type: "k4"
                    }, {
                        regex: /fn\s+([\w]+)\s*(<\w+\s*>)?\(/gm,
                        type: "k0"
                    }, {
                        regex: /\b\.?([\w]+)\s*(\(|::)/gm,
                        type: "k1"
                    }, {
                        regex: /\b([\w]+)!/gm,
                        type: "k9"
                    }, {
                        regex: /\bself\b/gi,
                        type: "k9"
                    }, h.boolean, {
                        regex: /\b(while|loop|in|for|if|else|do|continue|break)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(type|struct|let|enum)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(const)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(yield|where|virtual|use|unsized|unsafe|trait|super|static|return|ref|pure|pub|proc|priv|override|offsetof|mut|move|mod|match|macro|impl|fn|final|extern|crate|box|become|as|alignof|abstract)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(sizeof|typeof)\b/g,
                        type: "k3"
                    }, {
                        regex: /\b([0-9_]+\.?[0-9_]+?(e\+[0-9_]+)?)(?:f32|f64)?\b/gim,
                        type: "n0"
                    }, {
                        regex: /\b([0-9_]+|0o[0-9_]+|0x[A-F0-9_]+|0b[0-1_]+)(?:u8|i8|u16|i16|u32|i32|u64|i64|isize|usize)?\b/gim,
                        type: "n1"
                    }, h.slashComments, h.blockComments, {
                        regex: /(?:^|[^\\])\/\/[/!].*$/gm,
                        type: "c2"
                    }, {
                        regex: /\/\*[*!][\s\S]*?\*\//gm,
                        type: "c2"
                    }, h.brackets, {
                        regex: /\W(&)\w/g,
                        type: "k3"
                    }]
                }
            }]), t
        }(),
        pe = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.char, {
                        regex: /s"(?:[^"\\]|\\.)*"/g,
                        type: "s2"
                    }, {
                        regex: /`(?:[^`\\]|\\.)*`/g,
                        type: "k7"
                    }, {
                        regex: /@[\W\w_][\w]+/g,
                        type: "k11"
                    }, {
                        regex: /\b([A-Z]\w*)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(while|try|catch|else|throw|break|if|do|goto|switch|for|match)\b/g,
                        type: "k1"
                    }, {
                        regex: /(package|import)(\s+[\w.]+)/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /[\b\w\s)](_|:|@|#|<-|←|<:|<%|=|=>|⇒|>:)[\b\w\s]/g,
                        type: "k3"
                    }, {
                        regex: /\b(abstract|class|case|extends|final|finally|forSome|implicit|lazy|object|override|private|protected|return|sealed|trait|with|yield)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(def)\s+(\w+)\b/gm,
                        type: ["k2", "m0"]
                    }, {
                        regex: /\b(type)\s+(\w+)\b/gm,
                        type: ["k2", "k5"]
                    }, {
                        regex: /\b(val)\s+(\w+)\b/gm,
                        type: ["k2", "k7"]
                    }, {
                        regex: /\b(var)\s+(\w+)\b/gm,
                        type: ["k2", "k7"]
                    }, {
                        regex: /\b(this|super)\b/g,
                        type: "k9"
                    }, {
                        regex: /\b(new)\b/g,
                        type: "k3"
                    }, h.mCalls, h.fCalls, h.null, h.boolean, h.slashComments, h.blockComments, h.docComments, h.int, h.floats, h.bin, h.brackets]
                }
            }]), t
        }(),
        ce = function () {
            a(t, I);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this), this.rules.shift();
                    var e = [h.slashComments, L.pseudoElements, L.idSelector, L.classSelector, {
                        regex: /\b([\w-]+)\s*\(/gm,
                        type: "m0"
                    }, {
                        regex: /\$[\w-]+\b/g,
                        type: "k7"
                    }, {
                        regex: /@[\w-]+\b/g,
                        type: "k9"
                    }, {
                        regex: /&/gi,
                        type: "k3"
                    }];
                    this.rules = this.rules.concat(e)
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["sass"]
                }
            }]), t
        }(),
        ye = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /(^#!.*?)\n/gi,
                        type: "k4"
                    }, h.poundComments, {
                        regex: /[^\\]("(?:[^"\\]|\\.)*")/g,
                        type: "s0"
                    }, {
                        regex: /`.*?`/gm,
                        type: "s2"
                    }, {
                        regex: /(\$)\(/gm,
                        type: "s2"
                    }, {
                        regex: /(\$\d)\b/gim,
                        type: "k9"
                    }, {
                        regex: /(\$\w+)\b/gim,
                        type: "k7"
                    }, {
                        regex: /^(\s*\w+)=/gm,
                        type: "k7"
                    }, {
                        regex: /^\s*\w+\)\s*$/gm,
                        type: "k6"
                    }, {
                        regex: /\b(if|fi|then|elif|else|for|do|done|until|while|break|continue|case|esac|in|eq|ne|gt|lt|ge|le)\b/gi,
                        type: "k1"
                    }, {
                        regex: /\b(return|function)\b/gi,
                        type: "k0"
                    }, {
                        regex: /^\s*\w+\(\)\s*\{/gm,
                        type: "k0"
                    }, h.int]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["bash", "sh", "zsh"]
                }
            }]), t
        }(),
        fe = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, {
                        regex: h.sqStrings.regex,
                        type: "n0"
                    }, h.prop, h.slashComments, h.poundComments, h.blockComments, h.brackets, {
                        regex: /\b(const|enum|local)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(break|case|catch|continue|else|for|foreach|if|switch|while|try|do)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(base|class|clone|constructor|default|extends|false|function|null|resume|return|static|this|throw|true|yield)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(delete|in|instanceof|typeof)\b/g,
                        type: "k3"
                    }, h.mCalls, h.fCalls, h.octal, h.hex, h.floats, h.int]
                }
            }]), t
        }(),
        be = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.boolean, {
                        regex: /#.*$/gm,
                        type: "k4"
                    }, h.prop, {
                        regex: /(import )(.*?)$/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(nil)\b/gi,
                        type: "e1"
                    }, {
                        regex: /\b(break|case|continue|default|do|else|for|if|switch|while|catch|throw|try)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(var|let|enum|struct)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(Int|UInt|Float|Double|Bool|String|Character|Optional|Array|Dictionary)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(associatedtype|class|deinit|extension|func|init|inout|internal|operator|private|protocol|public|static|subscript|typealias|defer|fallthrough|guard|in|as|repeat|return|where|dynamicType|is|rethrows|super|self|Self|throws|associativity|convenience|dynamic|didSet|final|get|infix|indirect|lazy|left|mutating|none|nonmutating|optional|override|postfix|precedence|prefix|Protocol|required|right|set|Type|unowned|weak|willSet)\b/g,
                        type: "k0"
                    }, h.mCalls, h.fCalls, {
                        regex: /(?:^|[^\\])\/\/\/.*$/gm,
                        type: "c2"
                    }, h.docComments, h.slashComments, h.blockComments, {
                        regex: /[\b\W](-?0b[01_]+)\b/gi,
                        type: "n3"
                    }, {
                        regex: /[\b\W](-?0x[A-F0-9_]+)(?!\.)\b/gi,
                        type: "n2"
                    }, {
                        regex: /[\b\W](-?0o[0-7_]+)(?!\.)\b/g,
                        type: "n4"
                    }, {
                        regex: /[\b\W](-?[\d_]+)(?!\.)\b/g,
                        type: "n1"
                    }, {
                        regex: /(-?(?:[\d_]+\.[\d_]+(?:e[+-]?[\d_]+)?))/gi,
                        type: "n0"
                    }, {
                        regex: /(-?0x(?:[A-F0-9_]+\.[A-F0-9_]+(?:p[+-]?[A-F0-9_]+)?))/gi,
                        type: "n2"
                    }, h.brackets]
                }
            }]), t
        }(),
        de = function () {
            a(t, j);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    y(s(t.prototype), "setupLanguage", this).call(this);
                    this.rules = [{
                        regex: /\b(boolean|number|string|any|void|undefined|never|symbol)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(type|interface)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(abstract|implements|readonly)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(declare|namespace)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b([\w]+)\s*</gm,
                        type: "m0"
                    }, {
                        regex: /[<>]/g,
                        type: "g1"
                    }].concat(this.rules)
                }
            }]), t
        }(),
        he = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /((?:^\s*|\s+)--.*$)/gm,
                        type: "c0"
                    }, {
                        regex: /^\s*(?:use|library)\s*(\S+);/gim,
                        type: "k9"
                    }, h.fCalls, {
                        regex: /\*\*|\*|\/|\+|-|&|=|\/=|<|<=|>|>=/g,
                        type: "g0"
                    }, h.dqStrings, {
                        regex: /('.')/g,
                        type: "s0"
                    }, h.brackets, {
                        regex: /\b(alias|array|variable|downto|range|to|type|units)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(array|buffer|bus|file)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(if|else|elsif|end|for|while|loop|when|begin|block|case|exit|next|then)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(access|after|all|architecture|attribute|assert|body|component|configuration|constant|disconnect|entity|function|generate|generic|group|guarded|impure|in|inertial|inout|is|label|library|linkage|literal|map|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|record|return|select|severity|signal|shared|subtype|transport|unaffected|use|vaiable|with|wait|until)\b/g,
                        type: "k0"
                    }, {
                        regex: /\b(abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|nor|xor|xnor|new)\b/g,
                        type: "k3"
                    }, h.floats]
                }
            }]), t
        }(),
        me = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, h.boolean, h.prop, {
                        regex: /(#.*?)(?:'|$)/gim,
                        type: "k4"
                    }, {
                        regex: /\b(Case|Catch|Continue|Each|Else|ElseIf|End|EndIf|Do|Finally|For|If|Loop|Next|OrElse|Then|Throw|Try|When|While)\b/g,
                        type: "k1"
                    }, {
                        regex: /(Imports )(.*?)$/gm,
                        type: ["k0", "k10"]
                    }, {
                        regex: /\b(Boolean|Byte|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|CLng|CObj|CSByte|CShort|CSng|CStr|CType|CUInt|CULng|CUShort|Decimal|Double|Integer|Long|ParamArray|SByte|Short|Single|String|UInteger|ULong|UShort)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(Dim|Enum|Let|ReDim)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(Const|Shared|Static)\b/g,
                        type: "k8"
                    }, {
                        regex: /\b(AddHandler|AddressOf|Alias|As|ByRef|ByVal|Call|Class|Date|Declare|Default|Delegate|DirectCast|Erase|Error|Event|Exit|Friend|Function|Get|GetType|GetXMLNamespace|Global|GoSub|GoTo|Handles|Implements|In|Inherits|Interface|Lib|Like|Me|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|Narrowing|Nothing|NotInheritable|NotOverridable|Object|Of|On|Operator|Option|Optional|Out|Overloads|Overridable|Overrides|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|REM|RemoveHandler|Resume|Return|Select|Set|Shadows|Step|Stop|Structure|Sub|SyncLock|To|TryCast|Using|Variant|Wend|Widening|With|WithEvents|WriteOnly)\b/gi,
                        type: "k0"
                    }, {
                        regex: /\b(And|AndAlso|Is|IsNot|Mod|New|Not|Or|TypeOf|Xor)\b/g,
                        type: "k3"
                    }, h.mCalls, h.fCalls, {
                        regex: /'.*$/gm,
                        type: "c0"
                    }, h.int, h.floats, h.brackets]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["vb"]
                }
            }]), t
        }(),
        xe = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [{
                        regex: /<!DOCTYPE[\s\S]+?>/g,
                        type: "k9"
                    }, {
                        regex: /<\?xml[\s\S]+\?>/gi,
                        type: "k4"
                    }, {
                        regex: /<!--[\s\S]*?-->/g,
                        type: "c1"
                    }, {
                        regex: /(<!\[CDATA\[)([\s\S]*?)(]]>)/gim,
                        type: ["c9", "text", "c9"]
                    }, {
                        regex: /(<)([A-Z:_][A-Z0-9:.-]*)([\s\S]*?)(\/?>)/gi,
                        type: ["g1", "x1", "text", "g1"],
                        filter: [null, null, function (e) {
                            return w(e, /\b([^\s\0"'>/=]+)(\s*=\s*)((['"]).*?\4|[^'" \t]+)/gi, function (e) {
                                return [m(e[1], "x2"), m(e[2], "k3"), m(e[3], "s0")]
                            })
                        }, null]
                    }, {
                        regex: /(<\/)([A-Z:_][A-Z0-9:.-]*\s*)(>)/gi,
                        type: ["g1", "x1", "g1"]
                    }]
                }
            }], [{
                key: "alias",
                value: function () {
                    return ["html"]
                }
            }]), t
        }(),
        ke = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.poundComments, h.boolean, h.null, {
                        regex: /^%[A-Z]+\s+.*$/gm,
                        type: "k4"
                    }, {
                        regex: /\b!{1,2}[A-Z]+\b/gi,
                        type: "k5"
                    }, {
                        regex: /\b[a-z][a-z0-9_-]*:/gim,
                        type: "k7"
                    }, {
                        regex: /\{|}|\(|\)|\[|]/g,
                        type: "g1"
                    }, {
                        regex: /\s+(?:>|\|)[\r|\n]+((?:\s+[^\r\n]+[\r|\n]+)+)/gi,
                        type: "s5"
                    }, h.dqStrings, h.sqStrings, h.floats]
                }
            }]), t
        }(),
        ve = function () {
            a(t, v);
            var e = c(t);

            function t() {
                return n(this, t), e.apply(this, arguments)
            }
            return i(t, [{
                key: "setupLanguage",
                value: function () {
                    this.rules = [h.dqStrings, {
                        regex: /`\w*\b/g,
                        type: "k4"
                    }, {
                        regex: /\[( *\d+(?: *\: *\d+) *)\]/g,
                        type: "e3"
                    }, {
                        regex: /\b(for|generate|if|else|repeat|case|endcase|begin|end|ifnone)\b/g,
                        type: "k1"
                    }, {
                        regex: /\b(output|input|inout|reg|wire|assign)\b/g,
                        type: "k5"
                    }, {
                        regex: /\b(module|endmodule|always|function|endfunction)\b/g,
                        type: "k2"
                    }, {
                        regex: /\b(or|rpmos|tranif1|and|initial|rtran|tri|parameter|rtranif0|tri0|pmos|rtranif1|tri1|buf|endprimitive|integer|posedge|scalared|triand|bufif0|endspecify|join|primitive|small|trior|bufif1|endtable|large|pull0|specify|trireg|endtask|macromodule|pull1|specparam|vectored|casex|event|medium|pullup|strong0|wait|casez|pulldown|strong1|wand|cmos|force|nand|rcmos|supply0|weak0|deassign|forever|negedge|real|supply1|weak1|default|nmos|realtime|table|defparam|nor|task|disable|highz0|not|release|time|wor|edge|highz1|notif0|tran|xnor|notif1|rnmos|tranif0|xor)\b/g,
                        type: "k0"
                    }, h.slashComments, h.blockComments, {
                        regex: /-?\d*'s?d[0-9_xz]+\b/gi,
                        type: "n1"
                    }, {
                        regex: /-?\d*'s?h[0-9a-f_xz]+\b/gi,
                        type: "n2"
                    }, {
                        regex: /-?\d*'s?b[01_xz]+\b/gi,
                        type: "n3"
                    }, {
                        regex: /-?\d*'s?o[0-7_xz]+\b/gi,
                        type: "n4"
                    }, h.int, h.brackets]
                }
            }]), t
        }(),
        we = Object.freeze({
            __proto__: null,
            generic: v,
            abap: t,
            apache: C,
            assembly: S,
            avrassembly: _,
            cpp: E,
            csharp: A,
            css: I,
            cython: N,
            cordpro: W,
            diff: D,
            dockerfile: O,
            go: $,
            groovy: T,
            ini: R,
            java: F,
            javascript: j,
            json: z,
            jsx: Z,
            kotlin: B,
            latex: M,
            less: P,
            lighttpd: U,
            lua: G,
            mariadb: V,
            markdown: J,
            matlab: Y,
            mssql: X,
            nginx: K,
            nsis: Q,
            oracledb: ee,
            php: te,
            powershell: ne,
            prolog: re,
            purebasic: ie,
            python: q,
            qml: ae,
            r: se,
            raw: oe,
            routeros: le,
            ruby: ge,
            rust: ue,
            scala: pe,
            scss: ce,
            shell: ye,
            sql: H,
            squirrel: fe,
            swift: be,
            typescript: de,
            vhdl: he,
            visualbasic: me,
            xml: xe,
            yaml: ke,
            verilog: ve
        }),
        Ce = {
            standard: "generic"
        },
        Se = {},
        _e = !1;

    function Ee(e) {
        if (!_e)
            for (var t in _e = !0, we)
                if ("function" == typeof we[t].alias) {
                    var n = function (e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    t = function () {};
                                return {
                                    s: t,
                                    n: function () {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function (e) {
                                        throw e
                                    },
                                    f: t
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, a = !0,
                            s = !1;
                        return {
                            s: function () {
                                n = e[Symbol.iterator]()
                            },
                            n: function () {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function (e) {
                                s = !0, i = e
                            },
                            f: function () {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                        }
                    }(we[t].alias());
                    try {
                        for (n.s(); !(r = n.n()).done;) {
                            var r = r.value;
                            Ce[r] = t
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                } return Ce[e]
    }

    function Ae(e) {
        return e = Ee(e = (e || "").toLowerCase()) || e, we[e] ? e : null
    }
    ve = {
        document: document,
        window: window
    };

    function Le() {
        return document
    }

    function Ie() {
        return window
    }

    function qe(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        e.style.display = !0 === t ? "block" : "none"
    }

    function Ne(e) {
        e.parentNode.removeChild(e)
    }

    function We(e) {
        return null != e && 0 < e.length ? Le().querySelectorAll(e) : []
    }

    function De(e, t) {
        return e.getAttribute("data-" + t) || null
    }

    function Oe(e, t) {
        return e.getAttribute(t) || null
    }

    function $e(e, t) {
        return e.parentNode.insertBefore(t, e)
    }

    function Te(e, t, n) {
        var r, i = Le(),
            a = i.createElement(e);
        if (0 < n.length)
            for (var s = 0; s < n.length; s++) {
                var o = n[s];
                if (null !== o && !1 !== o)
                    if (void 0 !== o)
                        if (o.push)
                            for (var l = 0; l < o.length; l++) {
                                var g = o[l];
                                null !== g && !1 !== g && (void 0 !== g ? g.appendChild ? a.appendChild(g) : a.appendChild(i.createTextNode(g)) : a.appendChild(i.createTextNode("#INVALID_ELEMENT#")))
                            } else o.appendChild ? a.appendChild(o) : a.appendChild(i.createTextNode(o));
                        else a.appendChild(i.createTextNode("#INVALID_ELEMENT#"))
            }

        function u(e, t) {
            a.addEventListener(e, function (e) {
                e.preventDefault(), e.stopPropagation(), t && t.apply(a, [e, a])
            })
        }
        for (r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                var p = t[r];
                if ("on" === r.substr(0, 2)) null !== p && u(r.substr(2).toLowerCase(), p);
                else if (null != p) switch (r) {
                    case "className":
                        a.setAttribute("class", p);
                        break;
                    case "htmlFor":
                        a.setAttribute("for", p);
                        break;
                    default:
                        a.setAttribute(r, p)
                }
            } return a.on = u, a
    }

    function Re(e, t) {
        for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        if ("function" != typeof e) return Te(e, t, r);
        t = g(e, [t || {}].concat(r));
        return "function" == typeof t.render ? t.render() : t instanceof HTMLElement ? t : void Le().createTextNode("#INVALID_JSX_ELEMENT#")
    }

    function Fe(e, t) {
        e.classList.contains(t) || e.classList.add(t)
    }

    function je(e, t) {
        e.classList.contains(t) && e.classList.remove(t)
    }

    function ze(e, t) {
        return e.classList.contains(t)
    }

    function Ze(e, t) {
        e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
    }
    var Be = Ie();

    function Me() {
        var e;
        void 0 !== Be.console && Be.console.log && (e = Be.console).log.apply(e, arguments)
    }
    var Pe = Object.freeze({
        __proto__: null,
        globals: ve,
        getDocument: Le,
        getWindow: Ie,
        displayElement: qe,
        disposeElement: Ne,
        getElements: We,
        getElement: function (e) {
            return null != e && 0 < e.length ? Le().querySelector(e) : null
        },
        getElementDataAttribute: De,
        getElementAttribute: Oe,
        insertBefore: $e,
        createNode: Te,
        createElement: Re,
        renderComponent: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            return null !== t && t.appendChild(e), e
        },
        addClass: Fe,
        removeClass: je,
        hasClass: ze,
        toggleClass: Ze,
        logInfo: Me,
        logError: function () {
            var e;
            void 0 !== Be.console && Be.console.error ? (e = Be.console).error.apply(e, arguments) : Me.apply(void 0, arguments)
        }
    });

    function Ue(e) {
        var t = e.tokens,
            e = e.options,
            n = function (e, t) {
                if ("string" != typeof e || 0 === e.length) return function () {
                    return !1
                };
                var t = parseInt(t),
                    a = !isNaN(t) && 1 < t ? t - 1 : 0,
                    s = {};
                return e.split(",").forEach(function (e) {
                        var t = e.match(/([0-9]+)-([0-9]+)/);
                        if (null != t) {
                            var n = parseInt(t[1]) - a,
                                r = parseInt(t[2]) - a;
                            if (n < r)
                                for (var i = n; i <= r; i++) s["" + i] = !0
                        } else s["" + (parseInt(e) - a)] = !0
                    }),
                    function (e) {
                        return s["" + e] || !1
                    }
            }(e.highlight, e.lineoffset),
            r = [],
            i = [];
        t.forEach(function (t) {
            var e = t.text.split("\n");
            1 === e.length ? i.push([t.type, t.text]) : (i.push([t.type, e.shift()]), e.forEach(function (e) {
                r.push(i), (i = []).push([t.type, e])
            }))
        }), r.push(i);
        t = [];
        return 0 < e.lineoffset && t.push("counter-reset: enlighter " + (parseInt(e.lineoffset) - 1)), Re("div", {
            className: "enlighter",
            style: t.join(";")
        }, r.map(function (e, t) {
            return Re("div", {
                className: n(t + 1) ? "enlighter-special" : ""
            }, Re("div", null, e.map(function (e) {
                return Re("span", {
                    className: "enlighter-" + e[0]
                }, e[1])
            })))
        }))
    }

    function Ge(e) {
        var t = [];
        e.name && t.push("enlighter-" + e.name), e.className && ("string" == typeof e.className ? t.push(e.className) : t.push.apply(t, f(e.className)));
        for (var n = arguments.length, r = new Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return Re.apply(Pe, ["div", {
            className: t.join(" ")
        }].concat(r))
    }

    function He(e) {
        var t = ["enlighter-btn"];
        return e.name && t.push("enlighter-btn-" + e.name), Re("div", {
            className: t.join(" "),
            onClick: e.onClick,
            title: e.tooltip
        }, e.text || null)
    }

    function Ve() {
        Ie().open("https://enlighterjs.org")
    }
    var Je = Object.freeze({
        __proto__: null,
        raw: function (e) {
            return Re(He, {
                name: "raw",
                tooltip: "Plain text",
                onClick: function () {
                    e.toggleClass("enlighter-show-rawcode")
                }
            })
        },
        copy: function (e) {
            return Re(He, {
                name: "copy",
                tooltip: "Copy to clipboard",
                onClick: function () {
                    ! function (e) {
                        var t = Le(),
                            n = Ie(),
                            r = Re("pre", {
                                className: "enlighter-clipboard"
                            }, e);
                        t.body.appendChild(r);
                        try {
                            var i = t.createRange();
                            i.selectNodeContents(r);
                            var a = n.getSelection();
                            a.removeAllRanges(), a.addRange(i)
                        } catch (e) {
                            return
                        }
                        e = function () {
                            try {
                                return t.execCommand("copy")
                            } catch (e) {
                                return !1
                            }
                        }(), n.getSelection().removeAllRanges(), Ne(r)
                    }(e.getRawCode())
                }
            })
        },
        window: function (n) {
            var r = Ie();
            return Re(He, {
                name: "window",
                tooltip: "Open code in new window",
                onClick: function () {
                    var e = r.open("", "", "width=" + r.screen.width / 2 + ", height=" + r.screen.height / 2 + ", menubar=no, titlebar=no, toolbar=no, top=100, left=100, scrollbars=yes, status=no"),
                        t = n.getRawCode().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    e.document.body.innerHTML = "<pre>" + t + "</pre>", e.document.title = "Sourcecode | EnlighterJS Syntax Highlighter"
                }
            })
        }
    });

    function Ye(t) {
        var e = function (e) {
            for (var t, n = [], r = /{BTN_([A-Z_]+)}/g; null != (t = r.exec(e));) n.push(t[1].toLowerCase());
            return n
        }(t.layout).map(function (e) {
            return Je[e] ? Re(Je[e], {
                getRawCode: t.getRawCode,
                toggleClass: t.toggleClass
            }) : null
        }).filter(function (e) {
            return null !== e
        });
        return Re(Ge, {
            name: "toolbar-" + t.name,
            className: "enlighter-toolbar"
        }, e)
    }

    function Xe(e, t) {
        return Re("div", {
            className: "enlighter-raw"
        }, t)
    }

    function Ke(e) {
        var t = null,
            n = e[0].params,
            r = ["enlighter-default", "enlighter-v-standard", "enlighter-t-" + e[0].params.theme];

        function i(e) {
            Ze(t, e)
        }

        function a() {
            return e[0].code
        }
        return !0 === n.linehover && r.push("enlighter-hover"), !0 === n.linenumbers && r.push("enlighter-linenumbers"), "scroll" === n.textOverflow && r.push("enlighter-overflow-scroll"), !0 === n.collapse && r.push("enlighter-collapse"), 0 < n.cssClasses.length && r.push.apply(r, f(n.cssClasses)), t = Re(Ge, {
            className: r
        }, Re(Ye, {
            name: "top",
            layout: n.toolbarTop,
            toggleClass: i,
            getRawCode: a
        }), Re(Ue, {
            tokens: e[0].tokens,
            options: e[0].params
        }), Re(Xe, null, e[0].code), Re(Ye, {
            name: "bottom",
            layout: n.toolbarBottom,
            toggleClass: i,
            getRawCode: a
        })), n.rawcodeDbclick && t.on("dblclick", function () {
            i("enlighter-show-rawcode")
        }), t
    }

    function Qe(e) {
        return Re("span", {
            className: "enlighter"
        }, e.tokens.map(function (e) {
            return Re("span", {
                className: "enlighter-" + e.type
            }, e.text)
        }))
    }

    function et(n) {
        var r = 0,
            i = [];
        return i = n.dataset.map(function (e, t) {
            return Re(He, {
                onClick: function () {
                    return e = t, je(i[r], "enlighter-active"), Fe(i[e], "enlighter-active"), r = e, void n.onChange(e);
                    var e
                },
                text: e.params.title || e.params.language
            })
        }), Fe(i[0], "enlighter-active"), Re(Ge, {
            name: "codegroup-switch"
        }, i)
    }
    var tt = Object.freeze({
        __proto__: null,
        standard: Ke,
        inline: function (e) {
            var t = e[0].params,
                n = ["enlighter-default", "enlighter-v-inline", "enlighter-t-" + t.theme];
            return 0 < t.cssClasses.length && n.push.apply(n, f(t.cssClasses)), Re(Ge, {
                className: n
            }, Re(Qe, {
                tokens: e[0].tokens,
                options: t
            }))
        },
        codegroup: function (e) {
            var t, n = null,
                r = e[0].params,
                i = 0,
                a = ["enlighter-default", "enlighter-v-codegroup", "enlighter-t-" + r.theme];

            function s(e) {
                Ze(n, e)
            }

            function o() {
                return e[i].code
            }

            function l(e) {
                qe(t[i], !1), qe(t[e], !0), i = e
            }
            return !0 === r.linehover && a.push("enlighter-hover"), !0 === r.linenumbers && a.push("enlighter-linenumbers"), "scroll" === r.textOverflow && a.push("enlighter-overflow-scroll"), !0 === r.collapse && a.push("enlighter-collapse"), 0 < r.cssClasses.length && a.push.apply(a, f(r.cssClasses)), t = e.map(function (e) {
                return Re("div", {
                    style: "display:none"
                }, Re(Ue, {
                    tokens: e.tokens,
                    options: e.params
                }), Re(Xe, null, e.code))
            }), l(0), n = Re(Ge, {
                className: a
            }, Re(et, {
                onChange: l,
                dataset: e
            }), Re(Ge, {
                name: "codegroup-wrapper"
            }, Re(Ye, {
                name: "top",
                layout: r.toolbarTop,
                toggleClass: s,
                getRawCode: o
            }), t, Re(Ye, {
                name: "bottom",
                layout: r.toolbarBottom,
                toggleClass: s,
                getRawCode: o
            }))), r.rawcodeDbclick && n.on("dblclick", function () {
                s("enlighter-show-rawcode")
            }), n
        }
    });

    function nt(e) {
        var t;
        return (t = ((t = e[0].params.layout) || "").toLowerCase(), tt[t] || Ke)(e.map(function (e) {
            var t, n = e.code,
                r = e.params;
            if ("string" != typeof n) throw new TypeError("EnlighterJS Engine requires string input");
            return {
                tokens: (t = r.language, e = u.language || null, e = Ae(t) || Ae(e) || "generic", Se[e] || (Se[e] = new we[e]), Se[e]).analyze(n),
                params: r,
                code: n
            }
        }))
    }

    function rt(i, t) {
        function a(e) {
            return function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                for (var r = t.pop(), i = 0; i < t.length; i++) {
                    var a = t[i];
                    if (null != a) return a
                }
                return r
            }(t[e], u[e], null)
        }

        function e(e, t) {
            var n = De(i, "enlighter-" + e),
                r = a(e);
            if (!(n && 0 < n.length)) return r;
            switch (t) {
                case "boolean":
                    return "true" === (n = n.toLowerCase().trim()) || "false" !== n && r;
                case "int":
                    return n = parseInt(n), isNaN(n) ? r : n;
                default:
                    return n
            }
        }
        var n = a("cssClasses") || "";
        !0 === a("retainCssClasses") && (n += " " + (Oe(i, "class") || ""));
        n = n.replace(/\s+/g, " ").trim().split(" ");
        return {
            language: e("language"),
            theme: e("theme"),
            layout: e("layout"),
            title: e("title"),
            highlight: e("highlight"),
            linenumbers: e("linenumbers", "boolean"),
            lineoffset: e("lineoffset", "int"),
            indent: a("indent"),
            ampersandCleanup: a("ampersandCleanup"),
            linehover: a("linehover"),
            rawcodeDbclick: a("rawcodeDbclick"),
            textOverflow: a("textOverflow"),
            collapse: a("collapse"),
            cssClasses: n,
            toolbarTop: a("toolbarTop"),
            toolbarBottom: a("toolbarBottom"),
            toolbarHeader: a("toolbarHeader")
        }
    }
    var it = [];

    function at(e) {
        e = function (e) {
            for (var t = 0; t < it.length; t++)
                for (var n = 0; n < it[t].elements.length; n++)
                    if (it[t].elements[n] === e) return t;
            return !1
        }(e);
        if (!1 === e) return !1;
        e = it.splice(e, 1);
        return Ne(e[0].wrapper), e[0].elements.map(function (e) {
            return je(e, "enlighter-origin")
        }), !0
    }

    function st(e) {
        var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            if (Array.isArray(e) || (e = [e]), 0 === e.length) return !1;
            if (!1 === r) return at(e[0]);
            if (ze(e[0], "enlighter-origin")) return !1;
            var n = nt(e.map(function (e) {
                var t = rt(e, r),
                    n = function (e, t) {
                        e = (e = (e = e.innerHTML || "").replace(/(^\s*\n|\n\s*$)/gi, "")).replace(/&lt;/gim, "<").replace(/&gt;/gim, ">").replace(/&nbsp;/gim, " "), !0 === t.ampersandCleanup && (e = e.replace(/&amp;/gim, "&"));
                        var n = t.indent;
                        return !1 !== n && -1 < n && (e = e.replace(/(\t*)/gim, function (e, t) {
                            return new Array(n * t.length + 1).join(" ")
                        })), e
                    }(e, t);
                return Fe(e, "enlighter-origin"), {
                    element: e,
                    code: n,
                    params: t
                }
            }));
            return $e(e[0], n), t = e, n = n, it.push({
                elements: t,
                wrapper: n
            }), !0
        } catch (e) {
            return x("EnlighterJS Internal Error:", e), !1
        }
    }
    return e.enlight = st, e.init = function () {
        var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "pre.ejs",
            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "code.ejs",
            r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, Object.assign(u, e || {});
        for (var t = We(t), i = We(n), a = (t = function (e) {
                for (var t = {}, n = [], r = 0; r < e.length; r++) {
                    var i = De(e[r], "enlighter-group");
                    i ? (t[i] || (t[i] = []), t[i].push(e[r])) : n.push(e[r])
                }
                return {
                    standalone: n,
                    groups: Object.keys(t).map(function (e) {
                        return t[e]
                    })
                }
            }(t)).standalone, s = t.groups, o = 0; o < a.length; o++) st(a[o], {
            layout: r.block || "standard"
        });
        for (var l = 0; l < s.length; l++) st(s[l], {
            layout: r.codegroup || "codegroup"
        });
        for (var g = 0; g < i.length; g++) st(i[g], {
            layout: r.inline || "inline"
        })
    }, e.version = "3.5.0", Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
! function (n) {
    "function" == typeof n && n.fn && (n.fn.enlight = function (n) {
        return n = !0 === (n = void 0 === n ? {} : n) ? {} : n, this.each(function () {
            EnlighterJS.enlight(this, n)
        })
    })
}(window.jQuery);