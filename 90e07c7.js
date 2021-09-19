(window.webpackJsonp = window.webpackJsonp || []).push([[177], {
    1003: function(t, e, n) {
        t.exports = n.p + "img/pvu.961d439.svg"
    },
    1062: function(t, e, n) {
        t.exports = n.p + "img/common.bbf8e32.svg"
    },
    1063: function(t, e, n) {
        t.exports = n.p + "img/uncommon.d9ee395.svg"
    },
    1064: function(t, e, n) {
        t.exports = n.p + "img/rare.d7b6aee.svg"
    },
    1065: function(t, e, n) {
        t.exports = n.p + "img/mythic.370450c.svg"
    },
    1234: function(t, e, n) {
        t.exports = n.p + "img/physic.4fff40a.svg"
    },
    1235: function(t, e, n) {
        t.exports = n.p + "img/hp.c6760b1.svg"
    },
    1236: function(t, e, n) {
        t.exports = n.p + "img/magic.9cad8f5.svg"
    },
    1237: function(t, e, n) {
        t.exports = n.p + "img/pure.e512111.svg"
    },
    1324: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NiA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTYgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiM2M0NDNEIiLz4KPHBhdGggZD0iTTQ5Ljg0MDYgNjguNjUyM0M0Ny41MzIxIDcxLjAyMDEgNDMuOTY3MiA2OS40ODExIDQyLjEzNDEgNjcuNjk0QzM5LjY5MDEgNjUuMzExMiAzOC41OTU5IDYyLjMwNzggNDAuOTA0MyA1OS45NEM0OS43NjUxIDUwLjg1MTQgNjEuNDI5IDM2Ljc0ODIgNzAuMjg5OCAyNy42NTk2QzczLjE5MzggMjQuNjgxIDc3LjI3NjEgMjUuMzgzMiA4MC40MDc3IDI4LjQzNjNDODMuMzg2NCAzMS4zNDAzIDg0LjI2ODcgMzUuNDc3NyA4MS4zNjQ0IDM4LjQ1NjdDNzIuNTA0IDQ3LjU0NTUgNTguNzAxNiA1OS41NjM0IDQ5Ljg0MDYgNjguNjUyM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OS43NzcxIDYyLjUwMzZDNTEuNzM5NSA2My45Mjk1IDUwLjk5ODcgNjYuNjc5NyA0OS44OTQ4IDY4LjE5OUM0OC40MjMxIDcwLjIyNDYgNDYuMzU4NCA3MS4zMzU5IDQ0LjM5NTkgNjkuOTEwMUMzNi44NjMyIDY0LjQzNzIgMjUuMzk0NCA1Ny40NTg3IDE3Ljg2MTcgNTEuOTg1OEMxNS4zOTI5IDUwLjE5MjEgMTUuNDcxOCA0Ny4xNTQ2IDE3LjM1NzYgNDQuNTU5MUMxOS4xNTEyIDQyLjA5MDMgMjIuMDYxNSA0MS4wMTMxIDI0LjUzMDUgNDIuODA3QzMyLjA2MzQgNDguMjc5NyA0Mi4yNDQxIDU3LjAzMDYgNDkuNzc3MSA2Mi41MDM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
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
    1515: function(t, e, n) {
        t.exports = n.p + "img/big-arrow-back.c2ee022.svg"
    },
    1651: function(t, e, n) {
        t.exports = n.p + "img/question.1f27d2d.svg"
    },
    1652: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        var r = [{
            inputs: [{
                internalType: "address",
                name: "_nftAddr",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_cut",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }],
            name: "AuctionCancelled",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "startingPrice",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "endingPrice",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }],
            name: "AuctionCreated",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "totalPrice",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "address",
                name: "winner",
                type: "address"
            }],
            name: "AuctionSuccessful",
            type: "event"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "bid",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }],
            name: "cancelAuction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }],
            name: "cancelAuctionWhenPaused",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_cut",
                type: "uint256"
            }],
            name: "changeCut",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_startingPrice",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_endingPrice",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_duration",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_seller",
                type: "address"
            }],
            name: "createAuction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "pause",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [],
            name: "Pause",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "unpause",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            anonymous: !1,
            inputs: [],
            name: "Unpause",
            type: "event"
        }, {
            inputs: [],
            name: "withdrawBalance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "averageGen0SalePrice",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "gen0SaleCount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }],
            name: "getAuction",
            outputs: [{
                internalType: "address",
                name: "seller",
                type: "address"
            }, {
                internalType: "uint256",
                name: "startingPrice",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "endingPrice",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }],
            name: "getCurrentPrice",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "isSaleClockAuction",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "lastGen0SalePrices",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "nonFungibleContract",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "ownerCut",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "paused",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PVUToken",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }]
    },
    1787: function(t, e, n) {
        var content = n(1918);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(59).default)("578c65e6", content, !0, {
            sourceMap: !1
        })
    },
    1917: function(t, e, n) {
        "use strict";
        n(1787)
    },
    1918: function(t, e, n) {
        var r = n(58)
          , o = n(465)
          , c = n(1919)
          , l = r((function(i) {
            return i[1]
        }
        ))
          , d = o(c);
        l.push([t.i, ".wrapper[data-v-1f75cea6]{\n  background-image:url(" + d + ');\n  background-size:cover;\n  background-repeat:no-repeat;\n  width:100vw;\n  height:calc(100vh - 56px);\n  position:relative\n}\n.wrapper[data-v-1f75cea6]:after{\n  content:"";\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  bottom:0;\n  background:rgba(26,29,40,.3);\n  z-index:1\n}\n.wrap[data-v-1f75cea6]{\n  height:100%;\n  position:relative;\n  z-index:2\n}\n.left[data-v-1f75cea6]{\n  padding:28px;\n  height:100%;\n  background:rgba(26,29,40,.3);\n  mix-blend-mode:normal;\n  border-radius:24px;\n  flex:2\n}\n.right[data-v-1f75cea6]{\n  flex:1.25\n}\n.title[data-v-1f75cea6]{\n  font-weight:700;\n  font-size:32px;\n  color:#fff\n}\n._wrap[data-v-1f75cea6]{\n  position:relative\n}\n.id[data-v-1f75cea6]{\n  font-size:20px;\n  line-height:30px;\n  color:#fff\n}\n.id[data-v-1f75cea6],.img[data-v-1f75cea6]{\n  position:absolute;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%)\n}\n.box[data-v-1f75cea6]{\n  padding:12px 16px\n}\n.box[data-v-1f75cea6],.box1[data-v-1f75cea6]{\n  background:rgba(26,29,40,.3);\n  mix-blend-mode:normal;\n  -webkit-backdrop-filter:blur(35px);\n          backdrop-filter:blur(35px);\n  border-radius:24px\n}\n.box1[data-v-1f75cea6]{\n  padding:40px 104px\n}\n.btn__sell[data-v-1f75cea6]{\n  background:#1eb73b!important;\n  border-radius:12px;\n  padding:16px 12px;\n  width:140px\n}\n.btn__sell[data-v-1f75cea6],.headline[data-v-1f75cea6]{\n  font-weight:700;\n  line-height:18px;\n  color:#fff\n}\n.headline[data-v-1f75cea6]{\n  font-size:20px\n}\n.le[data-v-1f75cea6]{\n  border:.5px solid #fff;\n  border-radius:2px;\n  font-size:14px;\n  line-height:21px;\n  color:#fff;\n  padding:2px 4px\n}\n.dialog[data-v-1f75cea6]{\n  background:#1a1d28;\n  padding:36px 96px 84px\n}\n.dialog__title[data-v-1f75cea6]{\n  font-weight:600;\n  font-size:16px;\n  line-height:24px;\n  text-align:center;\n  color:#fff\n}\n.dialog__subtitle[data-v-1f75cea6]{\n  font-size:14px;\n  line-height:21px;\n  text-align:center;\n  color:#6a748e\n}\n.label[data-v-1f75cea6]{\n  font-weight:600;\n  font-size:16px;\n  line-height:24px;\n  color:#fff\n}\n.input[data-v-1f75cea6]{\n  background:#11131b;\n  border-radius:8px;\n  padding:22px 16px;\n  outline:none;\n  color:#fff\n}\n.remove[data-v-1f75cea6]{\n  line-height:21px;\n  color:#6a748e\n}\n.remove[data-v-1f75cea6],.sell[data-v-1f75cea6]{\n  font-size:14px;\n  text-align:center\n}\n.sell[data-v-1f75cea6]{\n  padding:11px 48px!important;\n  background:linear-gradient(270.52deg,#1eb73b 14.84%,#9dd500 83.89%);\n  border-radius:8px;\n  font-weight:700;\n  line-height:18px;\n  color:#fff;\n  margin-bottom:20px\n}\n.stat__img[data-v-1f75cea6]{\n  background:#292d3e;\n  border-radius:2px;\n  padding:4px\n}\n.btn__cancel[data-v-1f75cea6]{\n  background:transparent!important;\n  border:1px solid #6a748e;\n  border-radius:12px;\n  padding:16px 12px!important;\n  text-transform:capitalize;\n  font-weight:700;\n  line-height:18px;\n  color:#fff!important\n}\n.box__cancel[data-v-1f75cea6]{\n  background:rgba(26,29,40,.3);\n  -webkit-backdrop-filter:blur(35px);\n  backdrop-filter:blur(35px);\n  border-radius:24px;\n  padding:36px 28px\n}\n.btn__quit[data-v-1f75cea6]{\n  background:transparent!important;\n  border:1px solid #6a748e;\n  border-radius:12px\n}\n.btn__quit[data-v-1f75cea6],.btn__sure[data-v-1f75cea6]{\n  padding:16px 12px!important;\n  color:#fff\n}\n.btn__sure[data-v-1f75cea6]{\n  background:#238636!important;\n  border-radius:12px\n}\n.starting__price[data-v-1f75cea6]{\n  font-weight:600;\n  font-size:32px;\n  line-height:48px;\n  color:#9fde47\n}\n.owner[data-v-1f75cea6]{\n  font-size:12px;\n  line-height:18px;\n  color:#fff\n}\n.publicAddress[data-v-1f75cea6]{\n  font-size:10px;\n  line-height:15px;\n  color:#fff\n}\n.land__status[data-v-1f75cea6]{\n  font-size:12px;\n  line-height:18px;\n  text-align:center;\n  text-transform:capitalize;\n  color:#1eb73b;\n  background:#1c271e;\n  border-radius:12px 0;\n  padding:5px 9px;\n  width:84px\n}\n.error[data-v-1f75cea6]{\n  font-size:10px;\n  line-height:15px;\n  color:#ea3737;\n  margin-top:4px\n}\n.errorBorder[data-v-1f75cea6]{\n  border:1px solid red\n}\n@media only screen and (max-width:600px){\n.wrapper[data-v-1f75cea6]{\n    height:auto\n}\n.dialog[data-v-1f75cea6]{\n    padding:36px 10px 84px\n}\n}', ""]),
        l.locals = {},
        t.exports = l
    },
    1919: function(t, e, n) {
        t.exports = n.p + "img/bg.d95d77e.jpg"
    },
    1971: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0)
          , o = (n(96),
        n(28),
        n(97),
        n(20),
        n(263))
          , c = n.n(o)
          , l = n(106)
          , d = n.n(l)
          , f = n(1516)
          , w = n(1652)
          , x = n(83)
          , m = n(1027)
          , v = n(259)
          , y = n(261)
          , _ = n(257)
          , h = n(1463)
          , M = {
            mixins: [_.a],
            computed: {
                walletAddress: function() {
                    return this.$store.state.wallet.walletAddress
                },
                pvu: function() {
                    return this.$store.state.wallet.pvu
                }
            },
            data: function() {
                return {
                    info: null,
                    twoDigit: null,
                    ownerId: null,
                    plantId: null,
                    isLoading: !1,
                    isLoadingCancel: !1,
                    isLoadingBuy: !1,
                    txSuccessDialog: !1,
                    dialogSell: !1,
                    dialogCancel: !1,
                    tokenId: null,
                    day: 1e3,
                    price: 0,
                    status: null,
                    startingPrice: 0,
                    isEndTransaction: !1,
                    priceError: null
                }
            },
            mounted: function() {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.getPlantDetail();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            methods: {
                getPlantDetail: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o, c, l, d, f, w;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    t.plantId = t.$route.params.id,
                                    r = localStorage.getItem("token"),
                                    e.next = 5,
                                    t.$axios.$get("get-plant-detail-v2", {
                                        params: {
                                            plantId: t.plantId
                                        },
                                        headers: {
                                            Authorization: "Bearer Token: ".concat(r)
                                        }
                                    });
                                case 5:
                                    o = e.sent,
                                    t.ownerId = o.data.ownerId || o.data.buyerId,
                                    t.tokenId = o.data.tokenId,
                                    t.status = o.data.status,
                                    t.startingPrice = 0,
                                    t.twoDigit = Number(t.plantId.substring(6, 8)),
                                    c = o.data.plant,
                                    l = c.animUrl,
                                    d = c.farmConfig,
                                    f = c.iconUrl,
                                    w = c.stats,
                                    t.info = {
                                        animUrl: l,
                                        farmConfig: d,
                                        iconUrl: f,
                                        stats: w
                                    },
                                    t.renderAnimationImage(l.json, l.atlas, ["showoff"]),
                                    e.next = 19;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(0),
                                    console.log(e.t0);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 16]])
                    }
                    )))()
                },
                verify: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    t.$recaptcha.getResponse();
                                case 3:
                                    return n = e.sent,
                                    r = localStorage.getItem("token"),
                                    e.next = 7,
                                    t.$axios.$get("get-plant-token", {
                                        params: {
                                            plantId: t.plantId,
                                            token: n
                                        },
                                        headers: {
                                            Authorization: "Bearer Token: ".concat(r)
                                        }
                                    });
                                case 7:
                                    o = e.sent,
                                    t.tokenId = o.data.tokenId,
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(0),
                                    console.log(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 11]])
                    }
                    )))()
                },
                createSaleAuction: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o, c, l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.price && t.day) {
                                        e.next = 3;
                                        break
                                    }
                                    return alert("Please fill price and day"),
                                    e.abrupt("return");
                                case 3:
                                    return e.prev = 3,
                                    n = new d.a(window.ethereum),
                                    r = Object(v.c)(f.a, Object(x.l)(t.$nuxt.context), n),
                                    o = n.utils.toWei(t.price, "ether"),
                                    c = (new Date).getTime() + 864e5 * t.day,
                                    t.isLoading = !0,
                                    l = Object(v.c)(y.a, Object(x.m)(t.$nuxt.context), n),
                                    e.next = 12,
                                    Object(m.a)(l, Object(x.l)(t.$nuxt.context), t.walletAddress);
                                case 12:
                                    if (!(e.sent > 0)) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(m.k)(r, t.walletAddress, t.tokenId, o, o, c);
                                case 16:
                                    return t.status = 1,
                                    t.startingPrice = 0,
                                    t.isLoading = !1,
                                    t.dialogSell = !1,
                                    t.txSuccessDialog = !0,
                                    e.abrupt("return");
                                case 22:
                                    return e.next = 24,
                                    Object(m.c)(l, Object(x.l)(t.$nuxt.context), t.walletAddress, n);
                                case 24:
                                    if (!e.sent.status) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.next = 28,
                                    Object(m.k)(r, t.walletAddress, t.tokenId, o, o, c);
                                case 28:
                                    t.status = 1,
                                    t.startingPrice = 0,
                                    t.isLoading = !1,
                                    t.dialogSell = !1,
                                    t.txSuccessDialog = !0;
                                case 33:
                                    e.next = 39;
                                    break;
                                case 35:
                                    e.prev = 35,
                                    e.t0 = e.catch(3),
                                    console.log(e.t0),
                                    t.isLoading = !1;
                                case 39:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 35]])
                    }
                    )))()
                },
                buyNow: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o, l, f;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    !(t.startingPrice > Number(t.pvu))) {
                                        e.next = 4;
                                        break
                                    }
                                    return h.a.error(t.$store, {
                                        content: "Not enough PVU"
                                    }),
                                    e.abrupt("return");
                                case 4:
                                    return n = new d.a(window.ethereum),
                                    r = Object(v.c)(w.a, Object(x.k)(t.$nuxt.context), n),
                                    o = Object(v.c)(y.a, Object(x.m)(t.$nuxt.context), n),
                                    l = new c.a(t.startingPrice).toString(),
                                    f = n.utils.toWei(l, "ether"),
                                    t.isLoadingBuy = !0,
                                    e.next = 12,
                                    Object(m.a)(o, Object(x.k)(t.$nuxt.context), t.walletAddress);
                                case 12:
                                    if (!(e.sent > 0)) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.next = 16,
                                    Object(m.d)(r, t.walletAddress, t.tokenId, f);
                                case 16:
                                    return t.status = 0,
                                    t.ownerId = t.walletAddress,
                                    t.updatePvU(t.walletAddress),
                                    t.updateBNB(t.walletAddress),
                                    t.isLoadingBuy = !1,
                                    t.dialogSell = !1,
                                    t.txSuccessDialog = !0,
                                    e.abrupt("return");
                                case 24:
                                    return e.next = 26,
                                    Object(m.c)(o, Object(x.k)(t.$nuxt.context), t.walletAddress, n);
                                case 26:
                                    if (!e.sent.status) {
                                        e.next = 37;
                                        break
                                    }
                                    return e.next = 30,
                                    Object(m.d)(r, t.walletAddress, t.tokenId, f);
                                case 30:
                                    t.status = 0,
                                    t.ownerId = t.walletAddress,
                                    t.updatePvU(t.walletAddress),
                                    t.updateBNB(t.walletAddress),
                                    t.isLoadingBuy = !1,
                                    t.dialogSell = !1,
                                    t.txSuccessDialog = !0;
                                case 37:
                                    e.next = 43;
                                    break;
                                case 39:
                                    e.prev = 39,
                                    e.t0 = e.catch(0),
                                    console.log(e.t0),
                                    t.isLoadingBuy = !1;
                                case 43:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 39]])
                    }
                    )))()
                },
                cancelSelling: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    n = new d.a(window.ethereum),
                                    r = Object(v.c)(w.a, Object(x.k)(t.$nuxt.context), n),
                                    t.isLoadingCancel = !0,
                                    e.next = 6,
                                    Object(m.g)(r, t.tokenId, t.walletAddress);
                                case 6:
                                    t.status = 0,
                                    t.isLoadingCancel = !1,
                                    t.dialogCancel = !1,
                                    t.txSuccessDialog = !0,
                                    e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    console.log(e.t0),
                                    t.isLoadingCancel = !1;
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 12]])
                    }
                    )))()
                }
            },
            watch: {
                price: function(t) {
                    Number(t) <= 0 ? this.priceError = !0 : this.priceError = !1
                }
            }
        }
          , C = (n(1917),
        n(50))
          , j = n(256)
          , I = n.n(j)
          , k = n(1815)
          , D = n(847)
          , component = Object(C.a)(M, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "wrapper"
            }, [r("div", {
                staticClass: "\n      tw-container tw-flex tw-flex-col\n      md:tw-flex-row\n      tw-px-3\n      md:tw-px-0\n      tw-py-4 tw-mx-auto tw-space-xp-0\n      md:tw-space-x-5\n      tw-space-y-3\n      md:tw-space-y-0\n      wrap\n    "
            }, [r("div", {
                staticClass: "left tw-relative"
            }, [r("div", {
                staticClass: "tw-flex tw-items-center tw-mb-5 tw-cursor-pointer",
                on: {
                    click: function(e) {
                        return t.$router.go(-1)
                    }
                }
            }, [r("img", {
                attrs: {
                    src: n(1515),
                    alt: "back"
                }
            })]), t._v(" "), r("p", {
                staticClass: "title tw-mb-2"
            }, [t._v("Plants")]), t._v(" "), 2 == t.status ? r("p", {
                staticClass: "land__status"
            }, [t._v("Farming")]) : t._e(), t._v(" "), r("div", {
                staticClass: "tw-flex tw-justify-center",
                attrs: {
                    id: "plant"
                }
            }), t._v(" "), r("div", {
                staticClass: "tw-flex tw-justify-center _wrap tw-mt-20"
            }, [t.twoDigit >= 0 && t.twoDigit <= 59 ? r("img", {
                attrs: {
                    src: n(1062),
                    alt: ""
                }
            }) : t._e(), t._v(" "), t.twoDigit >= 60 && t.twoDigit <= 88 ? r("img", {
                attrs: {
                    src: n(1063),
                    alt: ""
                }
            }) : t._e(), t._v(" "), t.twoDigit >= 89 && t.twoDigit <= 98 ? r("img", {
                attrs: {
                    src: n(1064),
                    alt: ""
                }
            }) : t._e(), t._v(" "), 99 == t.twoDigit ? r("img", {
                attrs: {
                    src: n(1065),
                    alt: ""
                }
            }) : t._e(), t._v(" "), r("p", {
                staticClass: "id"
            }, [t._v("# " + t._s(t.plantId))])])]), t._v(" "), r("div", {
                staticClass: "right"
            }, [t.ownerId !== t.walletAddress && 1 == t.status ? r("div", {
                staticClass: "box1 tw-mb-3 tw-flex tw-justify-center tw-items-center"
            }, [r("img", {
                attrs: {
                    src: n(1003),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "starting__price tw-ml-3 tw-mr-8"
            }, [t._v(t._s(t.startingPrice))]), t._v(" "), 0 == t.isEndTransaction ? r("v-btn", {
                staticClass: "btn__sell",
                attrs: {
                    loading: t.isLoadingBuy
                },
                on: {
                    click: function(e) {
                        return t.buyNow()
                    }
                }
            }, [t._v("Buy now")]) : t._e()], 1) : t._e(), t._v(" "), t.ownerId != t.walletAddress || 0 != t.status && 3 != t.status ? t._e() : r("div", {
                staticClass: "box1 tw-mb-3 tw-flex tw-justify-center tw-items-center"
            }, [r("Button", {
                staticClass: "btn__sell",
                on: {
                    click: function(e) {
                        t.dialogSell = !0
                    }
                }
            }, [t._v("Sell now")])], 1), t._v(" "), t.ownerId == t.walletAddress && 1 == t.status ? r("div", {
                staticClass: "box__cancel tw-mb-3 tw-flex tw-justify-between tw-items-center"
            }, [r("svg", {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [r("rect", {
                attrs: {
                    x: "0.5",
                    y: "0.5",
                    width: "23",
                    height: "23",
                    rx: "11.5",
                    fill: "#1A1D28",
                    stroke: "black"
                }
            }), t._v(" "), r("path", {
                attrs: {
                    d: "M10.8379 7.296C10.8379 6.9216 10.9723 6.6144 11.2411 6.3744C11.5099 6.1248 11.8651 6 12.3067 6C12.7483 6 13.1035 6.1248 13.3723 6.3744C13.6411 6.6144 13.7755 6.9216 13.7755 7.296C13.7755 7.6608 13.6411 7.968 13.3723 8.2176C13.1035 8.4576 12.7483 8.5776 12.3067 8.5776C11.8651 8.5776 11.5099 8.4576 11.2411 8.2176C10.9723 7.968 10.8379 7.6608 10.8379 7.296ZM13.5307 9.5568V17.592H11.0683V9.5568H13.5307Z",
                    fill: "white"
                }
            })]), t._v(" "), r("div", {
                staticClass: "tw-flex tw-space-x-3"
            }, [r("img", {
                attrs: {
                    src: n(1003),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "starting__price"
            }, [t._v("\n            " + t._s(t.startingPrice ? t.startingPrice : "") + "\n          ")])]), t._v(" "), r("v-btn", {
                staticClass: "btn__cancel",
                on: {
                    click: function(e) {
                        t.dialogCancel = !0
                    }
                }
            }, [t._v("Cancel Selling")])], 1) : t._e(), t._v(" "), r("div", {
                staticClass: "box tw-mb-3"
            }, [r("p", {
                staticClass: "tw-text-white headline tw-mb-6"
            }, [t._v("About")]), t._v(" "), r("div", {
                staticClass: "tw-flex tw-justify-between"
            }, [r("div", [r("img", {
                attrs: {
                    src: t.info ? t.getElementIconUrl(t.info.stats.type) : "",
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "le tw-mt-1"
            }, [t._v("\n              LE:\n              " + t._s(t.info ? t.info.farmConfig.le + "/" + t.info.farmConfig.hours : "") + "\n              Hour\n            ")])]), t._v(" "), r("div", [r("p", {
                staticClass: "owner tw-mb-2"
            }, [t._v("Owner")]), t._v(" "), r("p", {
                staticClass: "publicAddress tw-cursor-pointer",
                on: {
                    click: function(e) {
                        return t.openLink("https://bscscan.com/address/" + t.ownerId)
                    }
                }
            }, [t._v("\n              " + t._s(t.ownerId ? t.truncate(t.ownerId, 10, 10) : "") + "\n            ")])])])]), t._v(" "), r("div", {
                staticClass: "box tw-mb-3"
            }, [r("p", {
                staticClass: "tw-text-white headline tw-mb-4"
            }, [t._v("Stats")]), t._v(" "), r("div", {
                staticClass: "tw-flex tw-items-center"
            }, [r("img", {
                staticClass: "stat__img",
                attrs: {
                    src: n(1234),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-ml-1 tw-text-white tw-ml-1 tw-mr-6"
            }, [t._v("\n            " + t._s(t.info ? t.info.stats.damagePhysics : "") + "\n          ")]), t._v(" "), r("img", {
                staticClass: "stat__img",
                attrs: {
                    src: n(1235),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-ml-1 tw-text-white tw-ml-1 tw-mr-6"
            }, [t._v("\n            " + t._s(t.info ? t.info.stats.damageHpLoss : "") + "\n          ")]), t._v(" "), r("img", {
                staticClass: "stat__img",
                attrs: {
                    src: n(1236),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-ml-1 tw-text-white tw-ml-1 tw-mr-6"
            }, [t._v("\n            " + t._s(t.info ? t.info.stats.damageMagic : "") + "\n          ")]), t._v(" "), r("img", {
                staticClass: "stat__img",
                attrs: {
                    src: n(1237),
                    alt: ""
                }
            }), t._v(" "), r("p", {
                staticClass: "tw-ml-1 tw-text-white tw-ml-1"
            }, [t._v("\n            " + t._s(t.info ? t.info.stats.damagePure : "") + "\n          ")])])])])]), t._v(" "), r("div", {
                attrs: {
                    "data-app": ""
                }
            }, [r("v-dialog", {
                attrs: {
                    width: "595px",
                    height: "538px"
                },
                model: {
                    value: t.dialogSell,
                    callback: function(e) {
                        t.dialogSell = e
                    },
                    expression: "dialogSell"
                }
            }, [r("div", {
                staticClass: "dialog"
            }, [r("div", {
                staticClass: "tw-flex tw-justify-center tw-flex-col tw-items-center"
            }, [r("p", {
                staticClass: "dialog__title tw-mb-16"
            }, [t._v("\n            Sell " + t._s(t.plantId ? "<" + t.plantId + ">" : "") + "\n          ")]), t._v(" "), r("div", {
                staticClass: "\n              tw-flex tw-flex-col\n              md:tw-flex-row\n              tw-items-center tw-justify-between tw-w-full tw-mb-8\n            "
            }, [r("div", [r("p", {
                staticClass: "label"
            }, [t._v("Price")])]), t._v(" "), r("div", {
                staticClass: "tw-flex tw-items-center"
            }, [r("img", {
                attrs: {
                    src: n(1003),
                    alt: ""
                }
            }), t._v(" "), r("div", {
                staticClass: "tw-flex tw-flex-col"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.price,
                    expression: "price"
                }],
                staticClass: "input tw-ml-4",
                class: {
                    errorBorder: t.priceError
                },
                attrs: {
                    type: "number",
                    min: "0"
                },
                domProps: {
                    value: t.price
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.price = e.target.value)
                    }
                }
            }), t._v(" "), t.priceError ? r("p", {
                staticClass: "error tw-ml-4"
            }, [t._v("\n                  Please enter positive number\n                ")]) : t._e()])])]), t._v(" "), r("v-btn", {
                staticClass: "sell tw-mt-10",
                attrs: {
                    loading: t.isLoading,
                    disabled: t.priceError
                },
                on: {
                    click: function(e) {
                        return t.createSaleAuction()
                    }
                }
            }, [t._v("\n            Start Auctions\n          ")])], 1)])])], 1), t._v(" "), r("div", {
                attrs: {
                    "data-app": ""
                }
            }, [r("v-dialog", {
                attrs: {
                    width: "560",
                    height: "286px"
                },
                model: {
                    value: t.txSuccessDialog,
                    callback: function(e) {
                        t.txSuccessDialog = e
                    },
                    expression: "txSuccessDialog"
                }
            }, [r("div", {
                staticClass: "dialog"
            }, [r("div", {
                staticClass: "tw-flex tw-justify-center"
            }, [r("img", {
                staticStyle: {
                    width: "96px",
                    height: "96px"
                },
                attrs: {
                    src: n(1324),
                    alt: ""
                }
            })]), t._v(" "), r("p", {
                staticClass: "tw-text-white tw-text-center tw-mt-10"
            }, [t._v("\n          Transaction Complete!\n        ")])])])], 1), t._v(" "), r("div", {
                attrs: {
                    "data-app": ""
                }
            }, [r("v-dialog", {
                attrs: {
                    width: "560",
                    height: "286px"
                },
                model: {
                    value: t.dialogCancel,
                    callback: function(e) {
                        t.dialogCancel = e
                    },
                    expression: "dialogCancel"
                }
            }, [r("div", {
                staticClass: "dialog"
            }, [r("div", {
                staticClass: "tw-flex tw-justify-center"
            }, [r("img", {
                attrs: {
                    src: n(1651),
                    alt: ""
                }
            })]), t._v(" "), r("p", {
                staticClass: "tw-text-white tw-text-center tw-mb-3 tw-mt-12 tw-text-center"
            }, [t._v("\n          Stop selling\n        ")]), t._v(" "), r("p", {
                staticClass: "tw-text-white tw-mb-10 tw-text-center"
            }, [t._v("\n          You are selling this plant. Are you sure you want to cancel?\n        ")]), t._v(" "), r("div", {
                staticClass: "tw-flex tw-justify-center tw-space-x-6"
            }, [r("v-btn", {
                staticClass: "btn__quit",
                on: {
                    click: function(e) {
                        t.dialogCancel = !1
                    }
                }
            }, [t._v("\n            Quit\n          ")]), t._v(" "), r("v-btn", {
                staticClass: "btn__sure",
                attrs: {
                    loading: t.isLoadingCancel
                },
                on: {
                    click: function(e) {
                        return t.cancelSelling()
                    }
                }
            }, [t._v("\n            Sure\n          ")])], 1)])])], 1)])
        }
        ), [], !1, null, "1f75cea6", null);
        e.default = component.exports;
        I()(component, {
            VBtn: k.a,
            VDialog: D.a
        })
    }
}]);
