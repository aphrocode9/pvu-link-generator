(window.webpackJsonp = window.webpackJsonp || []).push([[164, 64], {
    1055: function(t, e, n) {
        var content = n(1210);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(59).default)("1923afa8", content, !0, {
            sourceMap: !1
        })
    },
    1134: function(t, e, n) {
        "use strict";
        n.r(e);
        n(25),
        n(21),
        n(31),
        n(35),
        n(24),
        n(36);
        var r = n(9)
          , o = (n(96),
        n(51),
        n(43),
        n(82));
        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var d = {
            props: {
                show: Boolean,
                title: String,
                text: String,
                timeout: {
                    type: [Number, String],
                    default: 5e3
                }
            },
            data: function() {
                return {
                    activeTimeout: -1
                }
            },
            mounted: function() {
                this.showSnackbar && this.setTimeout()
            },
            watch: {
                showSnackbar: function(t, e) {
                    !0 === t && this.setTimeout()
                }
            },
            methods: {
                close: function() {
                    this.$store.dispatch("farm/closeSnackbar")
                },
                setTimeout: function() {
                    var t = this;
                    window.clearTimeout(this.activeTimeout);
                    var e = Number(this.timeout);
                    this.showSnackbar && (this.activeTimeout = window.setTimeout((function() {
                        t.$store.dispatch("farm/closeSnackbar")
                    }
                    ), e))
                }
            },
            computed: l(l({}, Object(o.b)({
                showSnackbar: function(t) {
                    return t.farm.showSnackbar
                },
                snackBarTitle: function(t) {
                    return t.farm.snackBarTitle
                },
                snackBarContent: function(t) {
                    return t.farm.snackBarContent
                },
                snackBarType: function(t) {
                    return t.farm.snackBarType
                }
            })), {}, {
                isInLoginPage: function() {
                    return "login" === this.$route.name
                }
            })
        }
          , f = (n(1209),
        n(50))
          , component = Object(f.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "tw-flex tw-flex-row snack-bar tw-p-2",
                class: {
                    show: t.showSnackbar,
                    showBottom: t.isInLoginPage
                },
                attrs: {
                    id: "snackbar"
                }
            }, [r("div", {
                staticClass: "tw-flex tw-flex-grow-0 tw-w-10"
            }, ["success" == t.snackBarType ? r("img", {
                staticClass: "tw-m-auto",
                attrs: {
                    src: n(450),
                    alt: ""
                }
            }) : t._e(), t._v(" "), "error" == t.snackBarType ? r("img", {
                staticClass: "tw-m-auto",
                attrs: {
                    src: n(451),
                    alt: ""
                }
            }) : t._e(), t._v(" "), "info" == t.snackBarType ? r("img", {
                staticClass: "tw-m-auto",
                attrs: {
                    src: n(452),
                    alt: ""
                }
            }) : t._e()]), t._v(" "), r("div", {
                staticClass: "seperate tw-ml-2"
            }), t._v(" "), r("div", {
                staticClass: "tw-flex tw-flex-grow tw-flex-col tw-ml-2"
            }, [r("div", {
                staticClass: "title"
            }, [t._v(t._s(t.snackBarTitle))]), t._v(" "), r("div", {
                staticClass: "content tw-mt-2"
            }, [t._v(t._s(t.snackBarContent))])]), t._v(" "), r("div", {
                staticClass: "tw-w-8 tw-flex tw-justify-end tw-ml-2"
            }, [r("div", {
                staticClass: "tw-sticky tw-cursor-pointer",
                on: {
                    click: t.close
                }
            }, [r("img", {
                staticClass: "tw-top-0 tw-w-4 tw-h-4 tw-right-0",
                attrs: {
                    src: n(453),
                    alt: ""
                }
            })])])])
        }
        ), [], !1, null, "2e53af70", null);
        e.default = component.exports
    },
    1209: function(t, e, n) {
        "use strict";
        n(1055)
    },
    1210: function(t, e, n) {
        var r = n(58)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, "#snackbar[data-v-2e53af70]{\n  visibility:hidden;\n  background:#fff;\n  box-shadow:0 12px 24px rgba(65,99,187,.1);\n  border-radius:4px;\n  position:fixed;\n  max-width:324px;\n  min-height:72px;\n  right:30px;\n  top:40px;\n  z-index:5000\n}\n#snackbar.show[data-v-2e53af70]{\n  visibility:visible\n}\n.title[data-v-2e53af70]{\n  font-size:20px;\n  line-height:18px;\n  color:#303759\n}\n.content[data-v-2e53af70],.title[data-v-2e53af70]{\n  font-family:Poppins;\n  font-style:normal;\n  font-weight:500\n}\n.content[data-v-2e53af70]{\n  font-size:14px;\n  line-height:1.6;\n  color:#6a748e\n}\n.seperate[data-v-2e53af70]{\n  width:2px;\n  background:#5e71a0;\n  opacity:.2\n}\n@-webkit-keyframes fadein-data-v-2e53af70{\n0%{\n    right:0;\n    opacity:0\n}\nto{\n    right:30px;\n    opacity:1\n}\n}\n@keyframes fadein-data-v-2e53af70{\n0%{\n    right:0;\n    opacity:0\n}\nto{\n    right:30px;\n    opacity:1\n}\n}\n@-webkit-keyframes fadeout-data-v-2e53af70{\n0%{\n    right:30px;\n    opacity:1\n}\nto{\n    right:0;\n    opacity:0\n}\n}\n@keyframes fadeout-data-v-2e53af70{\n0%{\n    right:30px;\n    opacity:1\n}\nto{\n    right:0;\n    opacity:0\n}\n}\n@media only screen and (min-width:577px){\n#snackbar.showBottom[data-v-2e53af70]{\n    top:unset;\n    bottom:30px\n}\n}\n@media only screen and (max-width:576px){\n#snackbar[data-v-2e53af70]{\n    right:10px;\n    top:70px\n}\n}", ""]),
        r.locals = {},
        t.exports = r
    },
    1463: function(t, e, n) {
        "use strict";
        var r = n(1)
          , o = n(13);
        e.a = {
            showInfo: function(t, e) {
                var n = e.title
                  , title = void 0 === n ? "Information" : n
                  , content = e.content;
                t.dispatch("notify/showInfo", {
                    title: title,
                    content: content
                })
            },
            showSuccess: function(t, e) {
                var n = e.title
                  , title = void 0 === n ? "Success" : n
                  , content = e.content;
                t.dispatch("notify/showSuccess", {
                    title: title,
                    content: content
                })
            },
            showError: function(t, e) {
                var n = e.serverStatus
                  , c = void 0 === n ? r.c.ERR_EXCEPTION : n
                  , l = e.title
                  , title = void 0 === l ? "Error" : l
                  , content = Object(o.a)(c);
                t.dispatch("notify/showError", {
                    title: title,
                    content: content
                })
            },
            error: function(t, e) {
                var n = e.title
                  , title = void 0 === n ? "Error" : n
                  , r = e.content
                  , content = void 0 === r ? "" : r;
                t.dispatch("notify/showError", {
                    title: title,
                    content: content
                })
            }
        }
    },
    1584: function(t, e, n) {
        t.exports = n.p + "img/metamask.898e510.svg"
    },
    1761: function(t, e, n) {
        var content = n(1866);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(59).default)("1c6983da", content, !0, {
            sourceMap: !1
        })
    },
    1862: function(t, e, n) {
        t.exports = n.p + "img/login-img.e124fba.svg"
    },
    1863: function(t, e, n) {
        t.exports = n.p + "img/signup.889215b.svg"
    },
    1865: function(t, e, n) {
        "use strict";
        n(1761)
    },
    1866: function(t, e, n) {
        var r = n(58)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, ".login[data-v-16aeba68]{\n  height:calc(100vh - 52px);\n  background:#242735\n}\n.hi[data-v-16aeba68]{\n  font-size:20px;\n  line-height:30px;\n  color:#000\n}\n.signup[data-v-16aeba68]{\n  font-size:14px;\n  line-height:21px;\n  color:#2f8be6\n}\n.left[data-v-16aeba68]{\n  background:#3b4878\n}\n.right[data-v-16aeba68]{\n  background:#1a1d28\n}\n.metamask[data-v-16aeba68]{\n  background:#11131b;\n  border-radius:8px\n}\n.metamask__bg-green[data-v-16aeba68]{\n  background:#238636\n}\n.field[data-v-16aeba68]{\n  background:#11131b;\n  padding:22px 16px;\n  outline:none\n}\n.btn-login[data-v-16aeba68],.field[data-v-16aeba68]{\n  border-radius:8px;\n  color:#fff;\n  width:100%\n}\n.btn-login[data-v-16aeba68]{\n  font-size:14px;\n  line-height:18px;\n  background:#238636;\n  padding:11px 0\n}\n.forgot[data-v-16aeba68],.or[data-v-16aeba68]{\n  font-size:12px;\n  line-height:18px;\n  color:#6a748e\n}\n.already[data-v-16aeba68]{\n  color:#3fb950\n}\n.free_join[data-v-16aeba68]{\n  color:#fff!important\n}\n.text__blue[data-v-16aeba68]{\n  color:#2f8be6!important\n}\n.text__privacy[data-v-16aeba68]{\n  font-size:12px;\n  line-height:18px;\n  color:#6a748e\n}\n.text__note[data-v-16aeba68]{\n  font-size:10px;\n  line-height:15px;\n  color:#6a748e\n}", ""]),
        r.locals = {},
        t.exports = r
    },
    1952: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0)
          , o = (n(20),
        n(1704))
          , c = n(106)
          , l = n.n(c)
          , d = n(257)
          , f = (n(11),
        n(1134))
          , v = n(1)
          , w = n(13)
          , m = n(1463)
          , h = {
            mixins: [d.a],
            components: {
                SnackBar: f.default
            },
            data: function() {
                return {
                    web3: null,
                    dialog: !0,
                    registryDialog: !1,
                    username: "",
                    email: "",
                    password: ""
                }
            },
            mounted: function() {
                localStorage.getItem("changeAccount") && (m.a.error(this.$store, {
                    content: "Multi-account detected."
                }),
                localStorage.removeItem("changeAccount")),
                this.web3 = new l.a(window.ethereum)
            },
            methods: {
                loginWithEmail: function() {},
                loginWithMetamask: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, c, l, d, f, h, x, _, k;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.a.isMetaMaskInstalled()) {
                                        e.next = 3;
                                        break
                                    }
                                    return alert("Please install metamask"),
                                    e.abrupt("return");
                                case 3:
                                    return e.prev = 3,
                                    e.next = 6,
                                    ethereum.request({
                                        method: "eth_requestAccounts"
                                    });
                                case 6:
                                    return n = e.sent,
                                    r = n[0].toLowerCase(),
                                    t.updateBNB(r),
                                    t.updatePvU(r),
                                    e.next = 12,
                                    t.$axios.$get("v2/login?publicAddress=".concat(r));
                                case 12:
                                    if (7 !== (c = e.sent).status) {
                                        e.next = 31;
                                        break
                                    }
                                    return e.next = 16,
                                    t.$axios.$post("registry", {
                                        publicAddress: r,
                                        nickname: r
                                    });
                                case 16:
                                    return e.next = 18,
                                    t.$axios.$get("v2/login?publicAddress=".concat(r));
                                case 18:
                                    return l = e.sent,
                                    d = l.data.nonce,
                                    e.next = 22,
                                    t.handleSignMessage(r, d);
                                case 22:
                                    return f = e.sent,
                                    e.next = 25,
                                    t.$axios.$post("v2/auth", {
                                        publicAddress: r,
                                        signature: f,
                                        message: "PVU plantvsundead.com signing:"
                                    });
                                case 25:
                                    return h = e.sent,
                                    t.$store.commit("wallet/updateToken", h.data.token),
                                    localStorage.setItem("token", h.data.token),
                                    t.$router.push("/profile/inventory"),
                                    t.$store.commit("wallet/updateWalletAddress", r),
                                    e.abrupt("return");
                                case 31:
                                    if (c.status === v.c.ERR_SUCCESS) {
                                        e.next = 33;
                                        break
                                    }
                                    throw Object(w.a)(c.status);
                                case 33:
                                    return x = c.data.nonce,
                                    e.next = 36,
                                    t.handleSignMessage(r, x);
                                case 36:
                                    return _ = e.sent,
                                    e.next = 39,
                                    t.$axios.$post("v2/auth", {
                                        publicAddress: r,
                                        signature: _,
                                        message: "PVU plantvsundead.com signing:"
                                    });
                                case 39:
                                    k = e.sent,
                                    t.$store.commit("wallet/updateToken", k.data.token),
                                    localStorage.setItem("token", k.data.token),
                                    t.$router.push("/profile/inventory"),
                                    t.$store.commit("wallet/updateWalletAddress", r),
                                    e.next = 50;
                                    break;
                                case 50:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3]])
                    }
                    )))()
                },
                handleSignMessage: function(t, e) {
                    var n = this;
                    return Object(r.a)(regeneratorRuntime.mark((function r() {
                        var o;
                        return regeneratorRuntime.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    n.web3.eth.personal.sign(n.web3.utils.fromUtf8("PVU plantvsundead.com signing: " + e), t);
                                case 2:
                                    return o = r.sent,
                                    r.abrupt("return", o);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                }
            }
        }
          , x = (n(1865),
        n(50))
          , component = Object(x.a)(h, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "tw-flex tw-justify-center tw-items-center login"
            }, [t.dialog ? r("div", {
                staticClass: "tw-flex"
            }, [r("div", {
                staticClass: "\n        tw-flex-1 tw-p-10\n        left\n        tw-flex tw-flex-col tw-justify-evenly tw-hidden\n        md:tw-block\n      "
            }, [r("p", {
                staticClass: "hi"
            }, [t._v("Hi there, welcome back!")]), t._v(" "), r("img", {
                attrs: {
                    src: n(1862),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "signup tw-cursor-pointer",
                on: {
                    click: function(e) {
                        t.registryDialog = !0,
                        t.dialog = !1
                    }
                }
            }, [t._v("\n        Don't have an account? Click here to sign up\n      ")])]), t._v(" "), r("div", {
                staticClass: "tw-flex-1 tw-px-5 md:tw-px-28 tw-py-14 right tw-justify-evenly"
            }, [r("div", {
                staticClass: "metamask tw-flex tw-items-center tw-p-3 tw-cursor-pointer",
                on: {
                    click: t.loginWithMetamask
                }
            }, [r("img", {
                attrs: {
                    src: n(1584),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-text-white tw-flex-1 tw-text-center"
            }, [t._v("\n          Log in with MetaMask\n        ")])]), t._v(" "), r("p", {
                staticClass: "tw-py-4 tw-text-center or"
            }, [t._v("or")]), t._v(" "), r("div", {
                staticClass: "tw-mb-9"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.email,
                    expression: "email"
                }],
                staticClass: "field tw-mb-8",
                attrs: {
                    type: "text",
                    placeholder: "Email"
                },
                domProps: {
                    value: t.email
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.email = e.target.value)
                    }
                }
            }), t._v(" "), r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.password,
                    expression: "password"
                }],
                staticClass: "field",
                attrs: {
                    type: "password",
                    placeholder: "Password"
                },
                domProps: {
                    value: t.password
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.password = e.target.value)
                    }
                }
            })]), t._v(" "), r("button", {
                staticClass: "btn-login tw-mb-7 tw-cursor-pointer",
                on: {
                    click: t.loginWithEmail
                }
            }, [t._v("\n        Login\n      ")]), t._v(" "), r("p", {
                staticClass: "forgot tw-text-center tw-cursor-pointer"
            }, [t._v("Forgot password?")])])]) : t._e(), t._v(" "), t.registryDialog ? r("div", {
                staticClass: "tw-flex"
            }, [r("div", {
                staticClass: "tw-flex-1 tw-p-10 left tw-flex tw-flex-col tw-justify-evenly"
            }, [r("p", {
                staticClass: "hi free_join"
            }, [t._v("Free to join. Premium benefits!")]), t._v(" "), r("img", {
                attrs: {
                    src: n(1863),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "signup tw-cursor-pointer already",
                on: {
                    click: function(e) {
                        t.registryDialog = !1,
                        t.dialog = !0
                    }
                }
            }, [t._v("\n        Already have an account?\n      ")])]), t._v(" "), r("div", {
                staticClass: "\n        tw-flex-1 tw-px-28 tw-py-14\n        right\n        tw-flex tw-flex-col tw-justify-evenly\n      "
            }, [r("div", [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.username,
                    expression: "username"
                }],
                staticClass: "field",
                attrs: {
                    type: "text",
                    placeholder: "Username"
                },
                domProps: {
                    value: t.username
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.username = e.target.value)
                    }
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-mt-1 text__note"
            }, [t._v("\n          This name will be displayed in the game\n        ")])]), t._v(" "), r("div", {
                staticClass: "\n          metamask metamask__bg-green\n          tw-flex tw-items-center tw-p-3 tw-cursor-pointer tw-mt-3\n        ",
                on: {
                    click: t.registry
                }
            }, [r("img", {
                attrs: {
                    src: n(1584),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-text-white tw-flex-1 tw-text-center"
            }, [t._v("\n          Sign up with MetaMask\n        ")])]), t._v(" "), t._m(0)])]) : t._e()])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("p", {
                staticClass: "text__privacy tw-mt-14 tw-text-center"
            }, [t._v("\n          By connecting your wallet, you agree to our\n          "), n("span", {
                staticClass: "text__blue text__privacy"
            }, [t._v("Terms of Service")]), t._v(",\n          "), n("span", {
                staticClass: "text__blue text__privacy"
            }, [t._v("Privacy Policy")]), t._v(" and our\n          "), n("span", {
                staticClass: "text__blue text__privacy"
            }, [t._v("Code of conduct")]), t._v(".\n        ")])])
        }
        ], !1, null, "16aeba68", null);
        e.default = component.exports
    }
}]);
