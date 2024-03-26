let func_dict = require("./all_func_dicts.js")
let modules_list = [];//定义一个使用模块列表

const {JSDOM} = require("jsdom")
const dom = new JSDOM('<!DOCTYPE html><p>hello</p>', {url: "https://yun.139.com/w/#/"});
window = dom.window
document = window.document
localStorage = {
    getItem: function (e) {
    }
};
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
};


(function (t) {
        function e(e) {
            for (var n, o, s = e[0], c = e[1], u = e[2], d = 0, l = []; d < s.length; d++)
                o = s[d],
                Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]),
                    r[o] = 0;
            for (n in c)
                Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
            f && f(e);
            while (l.length)
                l.shift()();
            return i.push.apply(i, u || []),
                a()
        }

        function a() {
            for (var t, e = 0; e < i.length; e++) {
                for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
                    var s = a[o];
                    0 !== r[s] && (n = !1)
                }
                n && (i.splice(e--, 1),
                    t = c(c.s = a[0]))
            }
            return t
        }

        var n = {}
            , o = {
            app: 0
        }
            , r = {
            app: 0
        }
            , i = [];

        function s(t) {
            return c.p + "static/js/" + ({}[t] || t) + "." + {
                "chunk-01de6064": "60c37a51",
                "chunk-232818a2": "05959568",
                "chunk-0930291b": "cb77f11a",
                "chunk-21ff3f70": "192ddb78",
                "chunk-728d776a": "7b24d63d",
                "chunk-99f7d6b8": "ef7752eb",
                "chunk-25c1d33d": "883e1576",
                "chunk-3d342612": "36f64640",
                "chunk-7fc0bf1c": "e4673477",
                "chunk-2d222773": "2a097bbf",
                "chunk-46223b42": "3a371b61",
                "chunk-6afd6732": "57857c4c",
                "chunk-6c3eeed2": "fa0e7c1d",
                "chunk-550ede60": "5047c444",
                "chunk-ee97fc16": "b101d37f",
                "chunk-1f4bb1a8": "5958c923",
                "chunk-68757f1e": "4b77f683",
                "chunk-78d700ec": "f6a38223",
                "chunk-dfa56f0c": "9e1b58dc",
                "chunk-bba68bf6": "c784be4c",
                "chunk-fb29a670": "14dc9666",
                "chunk-047845ed": "278d5fde",
                "chunk-229dd5d3": "a29eea57",
                "chunk-433a89dc": "3cd81461",
                "chunk-5f9189ab": "193bf967",
                "chunk-8a4255d2": "4dece520",
                "chunk-9c06120c": "85e36aca",
                "chunk-b8a0776c": "43eb723c",
                "chunk-0ce48594": "e2baedef",
                "chunk-174c3cf5": "13fc5b9e",
                "chunk-1b6d4bd2": "ebd96eda",
                "chunk-2db0fdce": "6e11bc47",
                "chunk-41198432": "677c42a2",
                "chunk-45edef7e": "f82048a5",
                "chunk-755efede": "49630d4b",
                "chunk-7c2a22c8": "8697001d",
                "chunk-9b71ab22": "2d671c20",
                "chunk-adcd0a8a": "79a009d9",
                "chunk-7af58ff6": "29c67ab1",
                "chunk-bdc9b0ea": "76076508",
                "chunk-1e55a438": "ddcaccec",
                "chunk-9b1927d4": "c6dbebda",
                "chunk-1d767162": "5b1f359f",
                "chunk-8f378478": "d7570532",
                "chunk-5cf71668": "9d5dd86f"
            }[t] + ".js"
        }

        function c(e) {
            if (!modules_list.includes(e)) {
                modules_list.push(e)
            }

            if (n[e])
                return n[e].exports;
            var a = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(a.exports, a, a.exports, c),
                a.l = !0,
                a.exports
        }

        c.e = function (t) {
            var e = []
                , a = {
                "chunk-01de6064": 1,
                "chunk-232818a2": 1,
                "chunk-0930291b": 1,
                "chunk-21ff3f70": 1,
                "chunk-728d776a": 1,
                "chunk-99f7d6b8": 1,
                "chunk-25c1d33d": 1,
                "chunk-3d342612": 1,
                "chunk-7fc0bf1c": 1,
                "chunk-46223b42": 1,
                "chunk-6afd6732": 1,
                "chunk-6c3eeed2": 1,
                "chunk-550ede60": 1,
                "chunk-ee97fc16": 1,
                "chunk-1f4bb1a8": 1,
                "chunk-68757f1e": 1,
                "chunk-78d700ec": 1,
                "chunk-dfa56f0c": 1,
                "chunk-bba68bf6": 1,
                "chunk-fb29a670": 1,
                "chunk-047845ed": 1,
                "chunk-229dd5d3": 1,
                "chunk-433a89dc": 1,
                "chunk-5f9189ab": 1,
                "chunk-8a4255d2": 1,
                "chunk-9c06120c": 1,
                "chunk-b8a0776c": 1,
                "chunk-0ce48594": 1,
                "chunk-174c3cf5": 1,
                "chunk-1b6d4bd2": 1,
                "chunk-2db0fdce": 1,
                "chunk-41198432": 1,
                "chunk-45edef7e": 1,
                "chunk-755efede": 1,
                "chunk-7c2a22c8": 1,
                "chunk-9b71ab22": 1,
                "chunk-adcd0a8a": 1,
                "chunk-7af58ff6": 1,
                "chunk-bdc9b0ea": 1,
                "chunk-1e55a438": 1,
                "chunk-9b1927d4": 1,
                "chunk-1d767162": 1,
                "chunk-8f378478": 1,
                "chunk-5cf71668": 1
            };
            o[t] ? e.push(o[t]) : 0 !== o[t] && a[t] && e.push(o[t] = new Promise((function (e, a) {
                    for (var n = "static/css/" + ({}[t] || t) + "." + {
                        "chunk-01de6064": "af51729f",
                        "chunk-232818a2": "ae00ea60",
                        "chunk-0930291b": "0f75e45d",
                        "chunk-21ff3f70": "ac9977e9",
                        "chunk-728d776a": "4f6189b3",
                        "chunk-99f7d6b8": "937daba0",
                        "chunk-25c1d33d": "492fd58f",
                        "chunk-3d342612": "8db6ac4e",
                        "chunk-7fc0bf1c": "d2692fb7",
                        "chunk-2d222773": "31d6cfe0",
                        "chunk-46223b42": "426f6b91",
                        "chunk-6afd6732": "8a0e3af6",
                        "chunk-6c3eeed2": "c19c9d26",
                        "chunk-550ede60": "f26be81a",
                        "chunk-ee97fc16": "31c3c468",
                        "chunk-1f4bb1a8": "15e2064b",
                        "chunk-68757f1e": "581b9a0f",
                        "chunk-78d700ec": "4ae66efa",
                        "chunk-dfa56f0c": "efd8f001",
                        "chunk-bba68bf6": "ef6e7b74",
                        "chunk-fb29a670": "d3f41a98",
                        "chunk-047845ed": "502e3c4c",
                        "chunk-229dd5d3": "a6da4e17",
                        "chunk-433a89dc": "0d45e12e",
                        "chunk-5f9189ab": "6360625d",
                        "chunk-8a4255d2": "6f20cc3a",
                        "chunk-9c06120c": "d29065b6",
                        "chunk-b8a0776c": "c6c80cb4",
                        "chunk-0ce48594": "1b3606f1",
                        "chunk-174c3cf5": "a563fa69",
                        "chunk-1b6d4bd2": "da081fc6",
                        "chunk-2db0fdce": "b72d3d9f",
                        "chunk-41198432": "8ed24bb6",
                        "chunk-45edef7e": "c4aca996",
                        "chunk-755efede": "b7be8d44",
                        "chunk-7c2a22c8": "703d3566",
                        "chunk-9b71ab22": "181a0685",
                        "chunk-adcd0a8a": "e1f4944a",
                        "chunk-7af58ff6": "f5b4a146",
                        "chunk-bdc9b0ea": "bf7fdff0",
                        "chunk-1e55a438": "e1067081",
                        "chunk-9b1927d4": "8b638d55",
                        "chunk-1d767162": "3eeca8d5",
                        "chunk-8f378478": "8e4ec7b5",
                        "chunk-5cf71668": "1e1b0e9f"
                    }[t] + ".css", r = c.p + n, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                        var u = i[s]
                            , d = u.getAttribute("data-href") || u.getAttribute("href");
                        if ("stylesheet" === u.rel && (d === n || d === r))
                            return e()
                    }
                    var l = document.getElementsByTagName("style");
                    for (s = 0; s < l.length; s++) {
                        u = l[s],
                            d = u.getAttribute("data-href");
                        if (d === n || d === r)
                            return e()
                    }
                    var f = document.createElement("link");
                    f.rel = "stylesheet",
                        f.type = "text/css",
                        f.onload = e,
                        f.onerror = function (e) {
                            var n = e && e.target && e.target.src || r
                                , i = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
                            i.code = "CSS_CHUNK_LOAD_FAILED",
                                i.request = n,
                                delete o[t],
                                f.parentNode.removeChild(f),
                                a(i)
                        }
                        ,
                        f.href = r;
                    var A = document.getElementsByTagName("head")[0];
                    A.appendChild(f)
                }
            )).then((function () {
                    o[t] = 0
                }
            )));
            var n = r[t];
            if (0 !== n)
                if (n)
                    e.push(n[2]);
                else {
                    var i = new Promise((function (e, a) {
                            n = r[t] = [e, a]
                        }
                    ));
                    e.push(n[2] = i);
                    var u, d = document.createElement("script");
                    d.charset = "utf-8",
                        d.timeout = 120,
                    c.nc && d.setAttribute("nonce", c.nc),
                        d.src = s(t);
                    var l = new Error;
                    u = function (e) {
                        d.onerror = d.onload = null,
                            clearTimeout(f);
                        var a = r[t];
                        if (0 !== a) {
                            if (a) {
                                var n = e && ("load" === e.type ? "missing" : e.type)
                                    , o = e && e.target && e.target.src;
                                l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")",
                                    l.name = "ChunkLoadError",
                                    l.type = n,
                                    l.request = o,
                                    a[1](l)
                            }
                            r[t] = void 0
                        }
                    }
                    ;
                    var f = setTimeout((function () {
                            u({
                                type: "timeout",
                                target: d
                            })
                        }
                    ), 12e4);
                    d.onerror = d.onload = u,
                        document.head.appendChild(d)
                }
            return Promise.all(e)
        }
            ,
            c.m = t,
            c.c = n,
            c.d = function (t, e, a) {
                c.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: a
                })
            }
            ,
            c.r = function (t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ,
            c.t = function (t, e) {
                if (1 & e && (t = c(t)),
                8 & e)
                    return t;
                if (4 & e && "object" === typeof t && t && t.__esModule)
                    return t;
                var a = Object.create(null);
                if (c.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: t
                    }),
                2 & e && "string" != typeof t)
                    for (var n in t)
                        c.d(a, n, function (e) {
                            return t[e]
                        }
                            .bind(null, n));
                return a
            }
            ,
            c.n = function (t) {
                var e = t && t.__esModule ? function () {
                        return t["default"]
                    }
                    : function () {
                        return t
                    }
                ;
                return c.d(e, "a", e),
                    e
            }
            ,
            c.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            c.p = "",
            c.oe = function (t) {
                throw t
            }
        ;
        var u = window["webpackJsonp"] = window["webpackJsonp"] || []
            , d = u.push.bind(u);
        u.push = e,
            u = u.slice();
        for (var l = 0; l < u.length; l++)
            e(u[l]);
        var f = d;
        i.push([0, "chunk-vendors"]), func_call = c
    }
)(func_dict)


module.exports = {modules_list, func_dict};