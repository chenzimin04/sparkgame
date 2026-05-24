var t = window.egret, eClass = function (t, e, o) {
    t.__class__ = e, o ? o.push(e) : o = [e], t.__types__ = t.__types__ ? o.concat(t.__types__) : o;
}, o = function (t, e) {
    function o() {
        this.constructor = t;
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    o.prototype = e.prototype, t.prototype = new o();
}, n = function (t, e, o, n) {
    return new (o || (o = Promise))(function (i, r) {
        function a(t) {
            try {
                h(n.next(t));
            } catch (t) {
                r(t);
            }
        }
        function s(t) {
            try {
                h(n.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function h(t) {
            t.done ? i(t.value) : new o(function (e) {
                e(t.value);
            }).then(a, s);
        }
        h((n = n.apply(t, e || [])).next());
    });
}, i = function (t, e) {
    function o(t) {
        return function (e) {
            return n([t, e]);
        };
    }
    function n(o) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (i = 1, r && (a = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(a = a.call(r, o[1])).done) return a;
            switch (r = 0, a && (o = [0, a.value]), o[0]) {
                case 0:
                case 1:
                    a = o;
                    break;

                case 4:
                    return h.label++, {
                        value: o[1],
                        done: !1
                    };

                case 5:
                    h.label++, r = o[1], o = [0];
                    continue;

                case 7:
                    o = h.ops.pop(), h.trys.pop();
                    continue;

                default:
                    if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        h = 0;
                        continue;
                    }
                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                        h.label = o[1];
                        break;
                    }
                    if (6 === o[0] && h.label < a[1]) {
                        h.label = a[1], a = o;
                        break;
                    }
                    if (a && h.label < a[2]) {
                        h.label = a[2], h.ops.push(o);
                        break;
                    }
                    a[2] && h.ops.pop(), h.trys.pop();
                    continue;
            }
            o = e.call(t, h);
        } catch (t) {
            o = [6, t], r = 0;
        } finally {
                i = a = 0;
            }
        if (5 & o[0]) throw o[1];
        return {
            value: o[0] ? o[1] : void 0,
            done: !0
        };
    }
    var i, r, a, s, h = {
        label: 0,
        sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
        },
        trys: [],
        ops: []
    };
    return s = {
        next: o(0),
        throw: o(1),
        return: o(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
        return this;
    }), s;
};

!function (n) {
    var i = function (e) {
        function n() {
            var o = e.call(this) || this;
            return o._data = null, o.data2 = null, d.clearEventOnRemove(o), o.addEventListener(t.Event.ADDED_TO_STAGE, o.__onEnter, o),
                o.addEventListener(t.Event.REMOVED_FROM_STAGE, o.__onExit, o), o;
        }
        return o(n, e), Object.defineProperty(n.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (t) {
                this._data = t, eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data"),
                    null != t && this.dataChanged();
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.dataChanged = function () { }, n.prototype.__onExit = function () {
            this._onExit(), this.data2 = null, this.data = null, this._preData = null;
        }, n.prototype._onExit = function () { }, n.prototype.__onEnter = function () {
            this._onEnter();
        }, n.prototype._onEnter = function () { }, n;
    }(eui.Component);
    n.DataComponent = i, eClass(i.prototype, "ui.DataComponent"), eui.registerBindable(i.prototype, "data");
    var r = function (e) {
        function n() {
            var o = e.call(this) || this;
            return o.noMask = !1, o.easyClose = !0, o.isMiddle = !0, o.maskAlpha = .7, o.isTween = !0,
                o.addEventListener(t.TouchEvent.TOUCH_TAP, o.__onTap, o), o;
        }
        return o(n, e), n.prototype.show = function () {
            if (!this.noMask) {
                var e = this._mask = new eui.Rect();
                this.easyClose && e.once(t.TouchEvent.TOUCH_TAP, this.close, this), e.fillColor = 0,
                    e.alpha = this.maskAlpha, e.width = d.stageWidth(), e.height = d.stageHeight(),
                    d.getStage().addChild(e);
            }
            return this.isTween ? this.tween() : d.getStage().addChild(this), this.adjustPosition(),
                this;
        }, n.prototype.adjustPosition = function () {
            this.validateNow(), this.x = Math.ceil((d.stageWidth() - this.width) / 2) + this.anchorOffsetX,
                this.y = Math.ceil((d.stageHeight() - this.height) / (this.isMiddle ? 2 : 1)) + this.anchorOffsetY;
        }, n.prototype.showLayer = function () {
            this.height = d.stageHeight(), d.getStage().addChild(this);
        }, n.prototype.__onExit = function () {
            d.remove(this._mask), this.isTween && d.remove(this._tweenGroup), this.mask = null,
                e.prototype.__onExit.call(this);
        }, n.prototype.tween = function () {
            var e = this._tweenGroup = new eui.Group();
            e.width = d.stageWidth(), e.height = d.stageHeight(), e.addChild(this), d.getStage().addChild(e),
                e.anchorOffsetX = d.stageWidth() / 2, e.anchorOffsetY = d.stageHeight() / 2, e.x = d.stageWidth() / 2,
                e.y = d.stageHeight() / 2, e.scaleX = 0, e.scaleY = 0, e.touchEnabled = !1, t.Tween.get(e).wait(100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300, t.Ease.backInOut);
        }, n.prototype.__onTap = function (t) {
            switch (t.target.name) {
                case "close":
                    this.close(), t.stopImmediatePropagation();
                    break;

                default:
                    this.onTapTarget(t.target, t);
            }
        }, n.prototype.close = function () {
            d.remove(this), this.isTween && d.remove(this._tweenGroup);
        }, n.prototype.onRemove = function (e, o) {
            return this.once(t.Event.REMOVED_FROM_STAGE, e, o), this;
        }, n.prototype.onTapTarget = function (t, e) { }, n;
    }(i);
    n.UIPanel = r, eClass(r.prototype, "ui.UIPanel");
    var a = function (e) {
        function n() {
            var o = e.call(this) || this;
            return d.clearEventOnRemove(o), o.addEventListener(t.Event.REMOVED_FROM_STAGE, o.onExit, o),
                o.addEventListener(t.Event.ADDED_TO_STAGE, o.onEnter, o), o;
        }
        return o(n, e), n.prototype.onEnter = function () { }, n.prototype.onExit = function () {
            this.data = null;
        }, n.prototype.childrenCreated = function () { }, n.prototype.getCurrentState = function () {
            return this.selected ? "down" : "up";
        }, Object.defineProperty(n.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (t) {
                this._data = t, eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data"),
                    null != t && this.dataChanged();
            },
            enumerable: !0,
            configurable: !0
        }), n;
    }(eui.ItemRenderer);
    n.ItemRenderer = a, eClass(a.prototype, "ui.ItemRenderer");
}(S || (S = {}));

!function (t) {
    var n = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = AuthPanelSkin, t;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            this.createLoginButton();
        }, n.prototype._onExit = function () {
            this._loginBtn && this._loginBtn.destroy();
        }, n.prototype.createLoginButton = function () {
            var e = this, o = g.info.windowWidth / 720, n = 251 * o, i = this._loginBtn = platforms.createUserInfoButton({
                type: "image",
                image: "res/btn_root.png",
                style: {
                    left: (g.info.windowWidth - n) / 2,
                    top: g.info.windowHeight / 2 + 10 * o,
                    width: n,
                    height: 120 * o
                }
            });
            i && (i.onTap(function (o) {
                console.log(o), "getUserInfo:ok" == o.errMsg ? (i.destroy(), f.local.authorized = !0,
                    f.local.name = encodeURIComponent(o.userInfo.nickName), f.local.avatar = o.userInfo.avatarUrl,
                    f.saveLocal(), d.requestForUnionId(o.encryptedData, o.iv, f.local.openId), e.close()) : t.Toast.show("获取用户信息失败");
            }), i.show());
        }, n;
    }(t.UIPanel);
    t.AuthorizedPanel = n, eClass(n.prototype, "ui.AuthorizedPanel");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = EnergyPanelSkin, f.watch("video-energy", t, t.onVideoEnergy),
                t;
        }
        return o(i, e), i.prototype.onVideoEnergy = function () {
            // new n.RewardPanel("power", 2).show(),
            f.addPower(5)
            this.close();
        }, i.prototype.childrenCreated = function () {
            t.Tween.get(this.lightImg, {
                loop: !0
            }).to({
                rotation: 360
            }, 5e3), this.currentState = "video";
        }, i.prototype.onTapTarget = function (t, e) {
            var o = t.name;
            "video" == o && r.showVideoAd("video-energy");
        }, i;
    }(n.UIPanel);
    n.EnergyPanel = i, eClass(i.prototype, "ui.EnergyPanel");
}(S || (S = {}));

var r = function () {
    function t() { }
    return t.init = function () {
    }, t.initVideoAd = function () {
    }, t.isEnable = function () {
        return 0;
    }, t.reload = function () {
    }, t.showVideoAd = function (e) {
        var o = this;
        platform.getInstance().showReward(() => {
            f.trigger(e)
        })
    }, t.initBannerAdPanel = function () {
    }, t.showBannerAdPanel = function () {
    }, t.hideBannerAdPanel = function () {
    }, t.hasVideo = !1, t.videoName = "", t.bannerAdPanel = null, t.bannerLoaded = !1,
        t;
}();

eClass(r.prototype, "AdManager");

var a = function () {
    function t() { }
    return t.prototype.getAsset = function (t, e, o) {
        function n(n) {
            e.call(o, n, t);
        }
        if (RES.hasRes(t)) {
            var i = RES.getRes(t);
            i ? n(i) : RES.getResAsync(t, n, this);
        } else RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_IMAGE);
    }, t;
}();

eClass(a.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);

!function (t) {
    function e(t) {
        var e, o = new XMLHttpRequest();
        console.error("t.url", t.url)
        o.open(t.method.toUpperCase(), t.url, 0 != t.async), t.contentType && o.setRequestHeader("Content-Type", t.contentType),
            o.setRequestHeader("Accept", "*/*"), t.withCredentials && (o.withCredentials = !0),
            o.onreadystatechange = function () {
                if (4 == o.readyState) {
                    o.onreadystatechange = function () { }, clearTimeout(e);
                    var n = t.callback;
                    if (!_.isFunction(n)) return;
                    200 == o.status ? n(o.status, o.responseText) : (console.log("[ajax] " + t.url + " response status error :" + o.status),
                        o.status <= 0 ? n(o.status, null) : n(o.status, o.responseText));
                }
            }, t.timeout > 0 && (e = setTimeout(function () {
                o.onreadystatechange = function () { }, o.abort(), t.callback && t.callback("timeout", null);
            }, t.timeout)), o.send(t.body ? t.body : null);
    }
    t.randomHost = function () {
        return "";
    };
    var o = function () {
        return t.randomHost();
    };
    t.subscribeEnergy = function () {
        t.http({
            url: "subscribe",
            method: "POST",
            params: {
                uniqueid: f.local.openId,
                time: 0
            },
            success: function (t) { }
        });
    }, t.powerUpdate = function () {
        var e = 0;
        f.local.power < 5 && (e = moment(f.local.powerTime).add(5 * (4 - f.local.power), "minute").toDate().getTime())
    }, t.checkMp = function (e) {
        t.http({
            url: "",
            method: "POST",
            params: {
                uniqueid: f.local.openId
            },
            error: function (t) {
                new S.EnergyGetPanel("mp").show();
            },
            success: function (t) {
                e(t);
            }
        });
    }, t.adFinish = function (e) {
        var o = {
            type: {
                "video-triple": 1,
                "video-energy": 2,
                "video-tip": 3,
                "video-slots-recap": 4,
                "video-prop": 5
            }[e],
            time: Date.now(),
            sign: ""
        }, n = g.getSign([o.type, o.time]);
        o.sign = n, t.http({
            url: "videoNew",
            method: "POST",
            params: o,
            success: function (t) { }
        });
    }, t.getCard = function () {
        t.http({
            url: "getcard",
            method: "POST",
            params: {
                user_id: f.local.id
            },
            error: function (t) { },
            success: function (t) {
                _.each(t.card, function (t, e) {
                    var o = t.split(","), n = _.map(o, function (t) {
                        return parseInt(t);
                    });
                    f.chips[e] = [0].concat(n);
                }), new S.PuzzlePanel().show();
            }
        });
    }, t.requestForCatchUser = function (e, o) {
        t.http({
            url: "catchuser",
            method: "POST",
            params: {
                user_id: f.local.id,
                level: e,
                flag: o,
                levels: f.local.level
            },
            error: function (t) { },
            success: function (t) { }
        });
    }, t.requestForCatch = function () {
        t.http({
            url: "catch",
            method: "POST",
            params: {},
            error: function (t) { },
            success: function (t) { }
        });
    }, t.requestForRedPack = function (e) {
        t.http({
            url: "draw30",
            method: "POST",
            params: {
                user_id: f.local.id
            },
            error: function (t) {
                S.Toast.show("满30元开启兑换");
            },
            success: function (o) {
                S.Toast.show("兑换成功，请查看微信红包"), f.setLocalData("redpack", 0), t.invokeFunction(e);
            }
        });
    }, t.statSlots = function (e) {
        t.http({
            url: "redmini",
            method: "POST",
            params: {
                type: e
            },
            success: function (t) { }
        });
    }, t.requestForUnionId = function (e, o, n) {
        var i = {
            encryptedData: e,
            iv: o,
            uniqueid: n
        };
        t.http({
            url: "encryptedData",
            method: "POST",
            params: i,
            success: function (t) { }
        });
    }, t.requestForUpload = function (e) {
        if (f.local.id && 80604965 != f.local.id) {
            var o = {
                user_id: f.local.id,
                user_json: t.toJSONString(f.local),
                time: Date.now(),
                sign: ""
            }, n = g.getSign([o.user_id, o.user_json, o.time]);
            o.sign = n, t.http({
                url: "upload",
                method: "POST",
                params: o,
                success: function (o) {
                    t.invokeFunction(e);
                }
            });
        }
    }, t.requestForCollect = function (e) {
        var o = this;
        platforms.showLoading({});
        var n = {
            uniqueid: f.uniqueId
        };
        t.http({
            url: "collect",
            method: "POST",
            params: n,
            error: function (t, n) {
                platforms.hideLoading({}), platforms.showModal({
                    title: "网络异常",
                    content: "检测网络后重试",
                    showCancel: !1,
                    success: function (t) {
                        o.requestForCollect(e);
                    }
                });
            },
            success: function (t) {
                platforms.hideLoading({}), 0 == t.errcode ? e() : S.Toast.show(t.errmsg);
            }
        });
    };
    var n = [];
    t.http = function (t) {

    };
    var i = function (t, e) {
        return e.params && e.params._ts && delete e.params._ts, 0 == e.url.indexOf(t.url) && JSON.stringify(t.params || {}) == JSON.stringify(e.params);
    }, r = function o(i) {
        if (!i) {
            if (0 == n.length) return;
            i = n[0];
        }
        var r = function (t) {
            if (i.success) try {
                i.success(t);
            } catch (t) { }
        }, a = function (t, e) {
            if (i.error) try {
                i.error(e);
            } catch (t) { }
        };
        if (i.silent || window.alert, i.callback = function (e, s) {
            var h = t.parseJSON(s);
            200 != e || null == h ? (console.log("request " + i.url + " failed, status: " + e + ", res: " + s),
                a(0, h)) : (console.error(h), h.errcode ? a(0, h) : r(h.data)), i.notQueued || (n.shift(),
                    n.length, _.defer(o));
        }, "get" == i.method.toLowerCase()) {
            i.params = i.params || {}, i.params._ts = Date.now(), i.params._platform = g.platforms;
            var s = "";
            s = "?", _.each(i.params, function (t, e) {
                s.length > 1 && (s += "&"), s += encodeURIComponent(e) + "=" + encodeURIComponent(t);
            }), i.url += s;
        } else i.contentType = "application/json;charset=UTF-8", i.body = JSON.stringify(i.params);
        e(i), i.notQueued;
    };
    t.ajax = e;
}(d || (d = {}));

var s = function () {
    function t() {
        this.hexcase = 0, this.b64pad = "";
    }
    return t.prototype.hex_md5 = function (t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)));
    }, t.prototype.b64_md5 = function (t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)));
    }, t.prototype.any_md5 = function (t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e);
    }, t.prototype.hex_hmac_md5 = function (t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }, t.prototype.b64_hmac_md5 = function (t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
    }, t.prototype.any_hmac_md5 = function (t, e, o) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), o);
    }, t.prototype.md5_vm_test = function () {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
    }, t.prototype.rstr_md5 = function (t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length));
    }, t.prototype.rstr_hmac_md5 = function (t, e) {
        var o = this.rstr2binl(t);
        o.length > 16 && (o = this.binl_md5(o, 8 * t.length));
        for (var n = Array(16), i = Array(16), r = 0; 16 > r; r++) n[r] = 909522486 ^ o[r],
            i[r] = 1549556828 ^ o[r];
        var a = this.binl_md5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(i.concat(a), 640));
    }, t.prototype.rstr2hex = function (t) {
        try {
            this.hexcase;
        } catch (t) {
            this.hexcase = 0;
        }
        for (var e, o = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < t.length; i++) e = t.charCodeAt(i),
            n += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);
        return n;
    }, t.prototype.rstr2b64 = function (t) {
        try {
            this.b64pad;
        } catch (t) {
            this.b64pad = "";
        }
        for (var e = "", o = t.length, n = 0; o > n; n += 3) for (var i = t.charCodeAt(n) << 16 | (o > n + 1 ? t.charCodeAt(n + 1) << 8 : 0) | (o > n + 2 ? t.charCodeAt(n + 2) : 0), r = 0; 4 > r; r++) e += 8 * n + 6 * r > 8 * t.length ? this.b64pad : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - r) & 63);
        return e;
    }, t.prototype.rstr2any = function (t, e) {
        var o, n, i, r, a, s = e.length, h = Array(Math.ceil(t.length / 2));
        for (o = 0; o < h.length; o++) h[o] = t.charCodeAt(2 * o) << 8 | t.charCodeAt(2 * o + 1);
        var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))), c = Array(l);
        for (n = 0; l > n; n++) {
            for (a = Array(), r = 0, o = 0; o < h.length; o++) r = (r << 16) + h[o], r -= (i = Math.floor(r / s)) * s,
                (a.length > 0 || i > 0) && (a[a.length] = i);
            c[n] = r, h = a;
        }
        var u = "";
        for (o = c.length - 1; o >= 0; o--) u += e.charAt(c[o]);
        return u;
    }, t.prototype.str2rstr_utf8 = function (t) {
        for (var e, o, n = "", i = -1; ++i < t.length;) e = t.charCodeAt(i), o = i + 1 < t.length ? t.charCodeAt(i + 1) : 0,
            e >= 55296 && 56319 >= e && o >= 56320 && 57343 >= o && (e = 65536 + ((1023 & e) << 10) + (1023 & o),
                i++), 127 >= e ? n += String.fromCharCode(e) : 2047 >= e ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : 65535 >= e ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : 2097151 >= e && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return n;
    }, t.prototype.str2rstr_utf16le = function (t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(255 & t.charCodeAt(o), t.charCodeAt(o) >>> 8 & 255);
        return e;
    }, t.prototype.str2rstr_utf16be = function (t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(t.charCodeAt(o) >>> 8 & 255, 255 & t.charCodeAt(o));
        return e;
    }, t.prototype.rstr2binl = function (t) {
        for (var e = Array(t.length >> 2), o = 0; o < e.length; o++) e[o] = 0;
        for (o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
        return e;
    }, t.prototype.binl2rstr = function (t) {
        for (var e = "", o = 0; o < 32 * t.length; o += 8) e += String.fromCharCode(t[o >> 5] >>> o % 32 & 255);
        return e;
    }, t.prototype.binl_md5 = function (t, e) {
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var o = 1732584193, n = -271733879, i = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
            var s = o, h = n, l = i, c = r;
            o = this.md5_ff(o, n, i, r, t[a + 0], 7, -680876936), r = this.md5_ff(r, o, n, i, t[a + 1], 12, -389564586),
                i = this.md5_ff(i, r, o, n, t[a + 2], 17, 606105819), n = this.md5_ff(n, i, r, o, t[a + 3], 22, -1044525330),
                o = this.md5_ff(o, n, i, r, t[a + 4], 7, -176418897), r = this.md5_ff(r, o, n, i, t[a + 5], 12, 1200080426),
                i = this.md5_ff(i, r, o, n, t[a + 6], 17, -1473231341), n = this.md5_ff(n, i, r, o, t[a + 7], 22, -45705983),
                o = this.md5_ff(o, n, i, r, t[a + 8], 7, 1770035416), r = this.md5_ff(r, o, n, i, t[a + 9], 12, -1958414417),
                i = this.md5_ff(i, r, o, n, t[a + 10], 17, -42063), n = this.md5_ff(n, i, r, o, t[a + 11], 22, -1990404162),
                o = this.md5_ff(o, n, i, r, t[a + 12], 7, 1804603682), r = this.md5_ff(r, o, n, i, t[a + 13], 12, -40341101),
                i = this.md5_ff(i, r, o, n, t[a + 14], 17, -1502002290), n = this.md5_ff(n, i, r, o, t[a + 15], 22, 1236535329),
                o = this.md5_gg(o, n, i, r, t[a + 1], 5, -165796510), r = this.md5_gg(r, o, n, i, t[a + 6], 9, -1069501632),
                i = this.md5_gg(i, r, o, n, t[a + 11], 14, 643717713), n = this.md5_gg(n, i, r, o, t[a + 0], 20, -373897302),
                o = this.md5_gg(o, n, i, r, t[a + 5], 5, -701558691), r = this.md5_gg(r, o, n, i, t[a + 10], 9, 38016083),
                i = this.md5_gg(i, r, o, n, t[a + 15], 14, -660478335), n = this.md5_gg(n, i, r, o, t[a + 4], 20, -405537848),
                o = this.md5_gg(o, n, i, r, t[a + 9], 5, 568446438), r = this.md5_gg(r, o, n, i, t[a + 14], 9, -1019803690),
                i = this.md5_gg(i, r, o, n, t[a + 3], 14, -187363961), n = this.md5_gg(n, i, r, o, t[a + 8], 20, 1163531501),
                o = this.md5_gg(o, n, i, r, t[a + 13], 5, -1444681467), r = this.md5_gg(r, o, n, i, t[a + 2], 9, -51403784),
                i = this.md5_gg(i, r, o, n, t[a + 7], 14, 1735328473), n = this.md5_gg(n, i, r, o, t[a + 12], 20, -1926607734),
                o = this.md5_hh(o, n, i, r, t[a + 5], 4, -378558), r = this.md5_hh(r, o, n, i, t[a + 8], 11, -2022574463),
                i = this.md5_hh(i, r, o, n, t[a + 11], 16, 1839030562), n = this.md5_hh(n, i, r, o, t[a + 14], 23, -35309556),
                o = this.md5_hh(o, n, i, r, t[a + 1], 4, -1530992060), r = this.md5_hh(r, o, n, i, t[a + 4], 11, 1272893353),
                i = this.md5_hh(i, r, o, n, t[a + 7], 16, -155497632), n = this.md5_hh(n, i, r, o, t[a + 10], 23, -1094730640),
                o = this.md5_hh(o, n, i, r, t[a + 13], 4, 681279174), r = this.md5_hh(r, o, n, i, t[a + 0], 11, -358537222),
                i = this.md5_hh(i, r, o, n, t[a + 3], 16, -722521979), n = this.md5_hh(n, i, r, o, t[a + 6], 23, 76029189),
                o = this.md5_hh(o, n, i, r, t[a + 9], 4, -640364487), r = this.md5_hh(r, o, n, i, t[a + 12], 11, -421815835),
                i = this.md5_hh(i, r, o, n, t[a + 15], 16, 530742520), n = this.md5_hh(n, i, r, o, t[a + 2], 23, -995338651),
                o = this.md5_ii(o, n, i, r, t[a + 0], 6, -198630844), r = this.md5_ii(r, o, n, i, t[a + 7], 10, 1126891415),
                i = this.md5_ii(i, r, o, n, t[a + 14], 15, -1416354905), n = this.md5_ii(n, i, r, o, t[a + 5], 21, -57434055),
                o = this.md5_ii(o, n, i, r, t[a + 12], 6, 1700485571), r = this.md5_ii(r, o, n, i, t[a + 3], 10, -1894986606),
                i = this.md5_ii(i, r, o, n, t[a + 10], 15, -1051523), n = this.md5_ii(n, i, r, o, t[a + 1], 21, -2054922799),
                o = this.md5_ii(o, n, i, r, t[a + 8], 6, 1873313359), r = this.md5_ii(r, o, n, i, t[a + 15], 10, -30611744),
                i = this.md5_ii(i, r, o, n, t[a + 6], 15, -1560198380), n = this.md5_ii(n, i, r, o, t[a + 13], 21, 1309151649),
                o = this.md5_ii(o, n, i, r, t[a + 4], 6, -145523070), r = this.md5_ii(r, o, n, i, t[a + 11], 10, -1120210379),
                i = this.md5_ii(i, r, o, n, t[a + 2], 15, 718787259), n = this.md5_ii(n, i, r, o, t[a + 9], 21, -343485551),
                o = this.safe_add(o, s), n = this.safe_add(n, h), i = this.safe_add(i, l), r = this.safe_add(r, c);
        }
        return [o, n, i, r];
    }, t.prototype.md5_cmn = function (t, e, o, n, i, r) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, r)), i), o);
    }, t.prototype.md5_ff = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(e & o | ~e & n, t, e, i, r, a);
    }, t.prototype.md5_gg = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(e & n | o & ~n, t, e, i, r, a);
    }, t.prototype.md5_hh = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(e ^ o ^ n, t, e, i, r, a);
    }, t.prototype.md5_ii = function (t, e, o, n, i, r, a) {
        return this.md5_cmn(o ^ (e | ~n), t, e, i, r, a);
    }, t.prototype.safe_add = function (t, e) {
        var o = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o;
    }, t.prototype.bit_rol = function (t, e) {
        return t << e | t >>> 32 - e;
    }, t;
}();

eClass(s.prototype, "md5");

!function (e) {
    var o = {};
    e.createMovieClip = function (n, i) {
        void 0 === i && (i = !0);
        var r = o[n];
        if (!r) {
            var a = RES.getRes(n + "_json"), s = RES.getRes(n + "_png");
            r = o[n] = new t.MovieClipDataFactory(a, s);
        }
        var h = new t.MovieClip(r.generateMovieClipData(n));
        i && h.addEventListener(t.Event.COMPLETE, function o() {
            e.remove(h), h.removeEventListener(t.Event.COMPLETE, o, null);
        }, null);
        return h;
    }, e.createArmature = function (o, n) {
        void 0 === n && (n = !1);
        var i = RES.getRes(o + "_ske_json"), r = RES.getRes(o + "_tex_json"), a = RES.getRes(o + "_tex_png");
        if (!i || !r || !a) return null;
        var s = dragonBones.EgretFactory.factory;
        s.getDragonBonesData(o) || (s.parseDragonBonesData(i, o), s.parseTextureAtlasData(r, a, o));
        var h = i.armature[0].name, l = s.buildArmatureDisplay(h);
        n && l.addEventListener(dragonBones.EventObject.COMPLETE, function t() {
            e.remove(l), l.removeEventListener(dragonBones.EventObject.COMPLETE, t, null);
        }, null);
        return l.once(t.Event.REMOVED_FROM_STAGE, function () {
            l.dispose();
        }, null), l;
    };
}(d || (d = {}));

var h = function () {
    function t(t) {
        this.COLOR_D_SLEEP = 10066329, this.COLOR_D_WAKE = 15053490, this.COLOR_K = 10329589,
            this.COLOR_S = 8381823, this.lineWidth = 1, this.world = t;
    }
    return t.prototype.setSprite = function (t) {
        this.sprite = t;
    }, t.prototype.setLineWidth = function (t) {
        this.lineWidth = t;
    }, t.prototype.drawDebug = function () {
        this.sprite.graphics.clear();
        for (var t = this.world.bodies.length, e = 0; t > e; e++) for (var o = this.world.bodies[e], n = 0; n < o.shapes.length; n++) {
            var i = o.shapes[n];
            i instanceof p2.Box ? this.drawBox(i, o) : i instanceof p2.Convex ? this.drawConvex(i, o) : i instanceof p2.Circle ? this.drawCircle(i, o) : i instanceof p2.Line ? this.drawLine(i, o) : i instanceof p2.Particle ? this.drawParticle(i, o) : i instanceof p2.Plane ? this.drawPlane(i, o) : i instanceof p2.Capsule ? this.drawCapsule(i, o) : i instanceof p2.Heightfield && this.drawHeightfield(i, o);
        }
    }, t.prototype.drawRay = function (t, e, o) {
        var n = this.sprite.graphics;
        n.lineStyle(this.lineWidth, o), n.moveTo(t[0], t[1]), n.lineTo(e[0], e[1]), n.endFill();
    }, t.prototype.drawBox = function (t, e) {
        this.drawConvex(t, e);
    }, t.prototype.drawCircle = function (t, e) {
        var o = this.getColor(e), n = this.sprite.graphics;
        n.lineStyle(this.lineWidth, o), n.beginFill(o, .5);
        var i = t.position[0], r = t.position[1], a = [];
        e.toWorldFrame(a, [i, r]), n.drawCircle(a[0], a[1], t.radius);
        var s = i + t.radius, h = r + 0, l = new Array();
        e.toWorldFrame(l, [s, h]), n.moveTo(a[0], a[1]), n.lineTo(l[0], l[1]), n.endFill();
    }, t.prototype.drawCapsule = function (t, e) {
        var o = this.getColor(e), n = t.position[0], i = t.position[1], r = t.angle, a = t.length, s = t.radius, h = new Array(), l = new Array(), c = new Array(), u = new Array(), p = new Array(), d = new Array();
        p2.vec2.rotate(h, [-a / 2, -s], r), p2.vec2.rotate(l, [a / 2, -s], r), p2.vec2.rotate(c, [a / 2, s], r),
            p2.vec2.rotate(u, [-a / 2, s], r), p2.vec2.rotate(p, [a / 2, 0], r), p2.vec2.rotate(d, [-a / 2, 0], r);
        var f = new Array(), m = new Array(), g = new Array(), v = new Array(), y = new Array(), w = new Array();
        e.toWorldFrame(f, [n + h[0], i + h[1]]), e.toWorldFrame(m, [n + l[0], i + l[1]]),
            e.toWorldFrame(g, [n + c[0], i + c[1]]), e.toWorldFrame(v, [n + u[0], i + u[1]]),
            e.toWorldFrame(y, [n + p[0], i + p[1]]), e.toWorldFrame(w, [n + d[0], i + d[1]]);
        var _ = this.sprite.graphics;
        _.lineStyle(this.lineWidth, o), _.beginFill(o, .5), _.drawCircle(y[0], y[1], s),
            _.endFill(), _.lineStyle(this.lineWidth, o), _.beginFill(o, .5), _.drawCircle(w[0], w[1], s),
            _.endFill(), _.lineStyle(this.lineWidth, o), _.beginFill(o, .5), _.moveTo(f[0], f[1]),
            _.lineTo(m[0], m[1]), _.lineTo(g[0], g[1]), _.lineTo(v[0], v[1]), _.endFill();
    }, t.prototype.drawLine = function (t, e) {
        var o = this.getColor(e), n = t.position[0], i = t.position[1], r = t.angle, a = t.length, s = new Array(), h = new Array();
        p2.vec2.rotate(s, [-a / 2, 0], r), p2.vec2.rotate(h, [a / 2, 0], r);
        var l = [], c = [];
        e.toWorldFrame(l, [n + s[0], i + s[1]]), e.toWorldFrame(c, [n + h[0], i + h[1]]);
        var u = this.sprite.graphics;
        u.lineStyle(this.lineWidth, o), u.moveTo(l[0], l[1]), u.lineTo(c[0], c[1]), u.endFill();
    }, t.prototype.drawHeightfield = function (t, e) {
        var o = this.getColor(e), n = t.heights, i = n.length, r = t.elementWidth;
        if (i > 0) {
            var a = t.position[0], s = t.position[1], h = [], l = [], c = this.sprite.graphics;
            c.lineStyle(this.lineWidth, o), c.beginFill(o, .5), e.toWorldFrame(l, [a + 0, s - 100]),
                c.moveTo(l[0], l[1]);
            for (var u = 0; i > u; u++) {
                var p = n[u];
                e.toWorldFrame(h, [a + 0 + u * r, s + p]), c.lineTo(h[0], h[1]);
            }
            e.toWorldFrame(h, [a + 0 + i * r, s - 100]), c.lineTo(h[0], h[1]), c.endFill();
        }
    }, t.prototype.drawParticle = function (t, e) {
        var o = this.getColor(e), n = this.sprite.graphics;
        n.lineStyle(this.lineWidth, o), n.beginFill(o, .5);
        var i = t.position[0], r = t.position[1], a = e.position[0] + i, s = e.position[1] + r;
        n.drawCircle(a, s, this.lineWidth), n.endFill(), n.lineStyle(this.lineWidth, o),
            n.drawCircle(a, s, 5 * this.lineWidth), n.endFill();
    }, t.prototype.drawConvex = function (t, e) {
        var o = this.getColor(e), n = t.vertices.length, i = this.sprite.graphics;
        i.lineStyle(this.lineWidth, o), i.beginFill(o, .5);
        var r = t.position[0], a = t.position[1], s = new Array();
        e.toWorldFrame(s, [r, a]);
        var h = t.vertices[0], l = [r + h[0], a + h[1]], c = new Array();
        e.toWorldFrame(c, l), i.moveTo(s[0], s[1]), i.lineTo(c[0], c[1]);
        for (var u = 1; n >= u; u++) l = [r + (h = t.vertices[u % n])[0], a + h[1]], e.toWorldFrame(c, l),
            i.lineTo(c[0], c[1]);
        i.endFill();
    }, t.prototype.drawPlane = function (t, e) {
        var o = this.COLOR_D_SLEEP, n = this.sprite.graphics;
        n.lineStyle(this.lineWidth, o), n.beginFill(o, 1);
        var i = t.position[0], r = t.position[1], a = t.angle, s = new Array(), h = new Array(), l = [], c = [];
        p2.vec2.rotate(s, [-1e3, 0], a), e.toWorldFrame(l, [i + s[0], r + s[1]]), n.moveTo(l[0], l[1]),
            p2.vec2.rotate(h, [1e3, 0], a), e.toWorldFrame(c, [i + h[0], r + h[1]]), n.lineTo(c[0], c[1]),
            p2.vec2.rotate(h, [1e3, -1e3], a), e.toWorldFrame(c, [i + h[0], r + h[1]]),
            n.lineTo(c[0], c[1]), p2.vec2.rotate(h, [-1e3, -1e3], a), e.toWorldFrame(c, [i + h[0], r + h[1]]),
            n.lineTo(c[0], c[1]), p2.vec2.rotate(h, [-1e3, -0], a), e.toWorldFrame(c, [i + h[0], r + h[1]]),
            n.lineTo(c[0], c[1]), n.endFill();
    }, t.prototype.getColor = function (t) {
        var e = this.COLOR_D_SLEEP;
        return t.type == p2.Body.KINEMATIC ? e = this.COLOR_K : t.type == p2.Body.STATIC ? e = this.COLOR_S : t.sleepState == p2.Body.AWAKE && (e = this.COLOR_D_WAKE),
            e;
    }, t;
}();

eClass(h.prototype, "p2DebugDraw");

var l = function () {
    function t() { }
    return t.createGroupAndLoad = function (t, e, o, n) {
        var i = [];
        _.each(e, function (t) {
            RES.$addResourceData(t), i.push(t.name);
        }), RES.createGroup(t, i), RES.loadGroup(t, n).then(o);
    }, t;
}();

eClass(l.prototype, "ServerRes");

var c = function () {
    function t() { }
    return t.randomContent = function () {
        return _.sample(["不要频繁分享到同一个群，换个群试试", "注意，请分享到30人以上的群。"]);
    }, t.onShow = function () {
        var e = this;
        if (this.curShareName) {
            switch (this.retryTime = 0, this.curShareName) {
                case "shareForEnergy":
                    f.local.shareEnergyTime++, new S.RewardPanel("power", 2).show();
                    break;

                case "shareForMoreTime":
                    f.trigger("share-moretime");
                    break;

                case "shareForSlots":
                    f.trigger("video-slot");
                default:
                    break;
            }
            this.curShareName = "";
        }
    }, t.shareForNormal = function () {

    }, t.shareForEnergy = function () {

    }, t.shareForSlots = function () {

    }, t.shareForMoreTime = function () {

    }, t.shareForSy = function (t, e) {
        platforms.shareAppMessage({
            title: "",
            imageUrl: "",
            query: "shareCode=" + f.local.shareCode + "" + t + "&chip=" + e
        });
    }, t.shareForZs = function (t, e) {
        platforms.shareAppMessage({
            title: "",
            imageUrl: "",
            query: "shareCode=" + f.local.shareCode + "" + t + "&chip=" + e + "$zsid=" + Date.now()
        });
    }, t.retryTime = 0, t;
}();

eClass(c.prototype, "ShareManager");

var u = function () {
    function t() { }
    return t.playSound = function (t) {
        // if (f.local.sound && g.isMiniGame) {
        //     var e = this.soundCache[t];
        //     if (e) e.seek(0), e.play(); else {
        //         e = this.soundCache[t] = platforms.createInnerAudioContext();
        //         var o = "https://cdn.ldtgames.com/games/wegameresource/differences/sound/effect/" + t + ".mp3", n = platforms.getFilePath(o);
        //         console.log(111111111111111, o);
        //         n ? (e.src = n, e.autoplay = !0) : platforms.downloadFile(o).then(function (t) {
        //             e.src = t, e.autoplay = !0;
        //         }).catch(function (t) {
        //             console.log(t);
        //         });
        //     }
        // }
		RES.getResAsync(`${t}_mp3`).then((data)=>{
			if (data != null)
			{
				data.play(0,1);
			}
		});
        // window.WebAudioEngine && (window.WebAudioEngine.playSound("sound/effect/" + t + ".mp3"));
    }, t.soundCache = {}, t;
}();

eClass(u.prototype, "Sound");

var p = function () {
    function e() { }
    return e.prototype.getTheme = function (e, o, n, i) {
        function r(t) {
            t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null),
                n.call(i));
        }
        "undefined" != typeof generateEUI ? t.callLater(function () {
            o.call(i, generateEUI);
        }, this) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), RES.getResByUrl(e, function (t) {
            o.call(i, t);
        }, this, RES.ResourceItem.TYPE_TEXT));
    }, e;
}();

eClass(p.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);

!function (e) {
    function o(t, e) {
        for (var o = t.split("&"), n = 0; n < o.length; n++) {
            var i = o[n].split("=");
            e[i[0]] = decodeURIComponent(i[1]);
        }
    }
    function n(t) {
        var e = function (e) {
            var o = t.$EventDispatcher, n = e ? o[2] : o[1];
            _.each(n, function (o, i) {
                for (; o && o.length;) t.removeEventListener(i, o[0].listener, o[0].thisObject, e),
                    o = n[i];
            });
        };
        e(!0), e(!1);
    }
    e.getUrlParamMap = function () {
        var t = location.hash || window.HASH;
        if (!location.search && !t) return {};
        var e = {};
        if (location.search && o(location.search.substr(1), e), t) {
            var n = t.indexOf("?");
            -1 != n && (t = t.substr(n + 1), t = t.split("!")[0], o(t, e));
        }
        return e;
    }, e.safeAdd = function (t, e) {
        return _.isNumber(t) ? t + e : e;
    }, e.randomInt = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
    }, e.randomRate = function (t) {
        return Math.random() < t;
    }, e.randomReal = function (t, e) {
        return Math.random() * (e - t) + t;
    }, e.randomByWeight = function (t) {
        for (var e = _.reduce(t, function (t, e) {
            return t + e;
        }, 0) || 0, o = Math.random() * e, n = 0; o > t[n];) o -= t[n], n++;
        return n;
    }, e.arrayRemoveItem = function (t, e) {
        var o = t.indexOf(e);
        return -1 !== o && t.splice(o, 1), o;
    }, e.invokeFunction = function (t, e) {
        for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
        return _.isFunction(t) ? e ? t.apply(e, o) : t() : void 0;
    }, e.clearEventOnRemove = function (e) {
        e.once(t.Event.REMOVED_FROM_STAGE, function () {
            n(this);
        }, e);
    }, e.removeAllEventListeners = n, e.toJSONString = function (t) {
        return JSON.stringify(t);
    }, e.parseJSON = function (t) {
        return JSON.parse(t);
    }, e.loopNum = function (t, e, o, n) {
        var i = e - t + 1;
        return n += o - t, o = t, n %= i, (o += n) > e && (o -= i), t > o && (o += i), o;
    }, e.formatNumberWithUnit = function (t) {
        return this.formatNumber(t) + this.getUnit(t);
    }, e.formatNumber = function (t) {
        if (!t) return "0";
        if (1e3 > t) return t + "";
        t = parseFloat(t.toFixed(2));
        var e = Math.floor(this.getExponent(t)), o = Math.floor(e / 3), n = e % 3;
        return String(t / Math.pow(10, 3 * o)).substr(0, 4 + n);
    }, e.getExponent = function (t) {
        return Math.floor(_.toNumber(Math.log(t) / Math.log(10) + "", 2));
    }, e.getUnit = function (t) {
        if (!t || 1e3 > t) return "";
        t = Math.floor(t);
        var e = Math.floor(this.getExponent(t)), o = Math.floor(e / 3);
        if (15 > e) return ["", "K", "M", "B", "T"][o];
        if (93 > e) {
            var n = 92 + o, i = String.fromCharCode(n);
            return i + i;
        }
        return "e+" + 3 * (o = Math.floor(e / 3));
    }, e.clamp = function (t, e, o) {
        return Math.max(Math.min(t, o), e);
    }, e.vibrateShort = function () {
        f.local.vibrate && (g.info.SDKVersion < "1.2.0" || platforms.vibrateShort({}));
    }, e.incr = function (t, e, o) {
        return void 0 === o && (o = 1), t[e] = t[e] ? t[e] + o : o;
    }, e.radToDeg = function (t) {
        return 180 * t / Math.PI;
    }, e.degToRad = function (t) {
        return t * Math.PI / 180;
    }, e.pointsAngle = function (t, o, n, i) {
        return e.radToDeg(Math.atan2(i - o, n - t));
    }, e.unicodeToChar = function (t) {
        return _.truncate(decodeURIComponent(t), 5);
    }, e.compareVersion = function (t, e) {
        t = t.split("."), e = e.split(".");
        for (var o = Math.max(t.length, e.length); t.length < o;) t.push("0");
        for (; e.length < o;) e.push("0");
        for (var n = 0; o > n; n++) {
            var i = parseInt(t[n]), r = parseInt(e[n]);
            if (i > r) return 1;
            if (r > i) return -1;
        }
        return 0;
    }, e.wxVersionLow = function () {
        platforms.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    }, e.isGroupLoad = function (t) {
        return RES.getGroupByName(t).length > 0 && RES.isGroupLoaded(t);
    }, e.puzzleRemainDays = function () {
        return 8 - moment().isoWeekday();
    };
}(d || (d = {}));

var d;

!function (e) {
    e.getStage = function () {
        return t.MainContext.instance.stage;
    }, e.stageWidth = function () {
        return t.MainContext.instance.stage.stageWidth;
    }, e.stageHeight = function () {
        return t.MainContext.instance.stage.stageHeight;
    }, e.remove = function (t) {
        t && t.parent && t.parent.removeChild(t);
    }, e.setScale = function (t, e) {
        t.scaleX = t.scaleY = e;
    }, e.setAnchor = function (t, e) {
        t.anchorOffsetX = t.width * e, t.anchorOffsetY = t.height * e;
    }, e.sortTiles = function (t) {
        t.sort(function (t, e) {
            return t.x + t.y + 1e4 * t.pos.z - (e.x + e.y + 1e4 * e.pos.z);
        });
    }, e.setText = function (e, o) {
        -1 == o.indexOf("</") ? e.text = o : e.textFlow = new t.HtmlTextParser().parser(o);
    }, e.setGray = function (e) {
        var o = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0], n = new t.ColorMatrixFilter(o);
        e.filters = [n];
    }, e.runNumberLabel = function (e, o) {
        e.hasOwnProperty("factor") || Object.defineProperty(e, "factor", {
            get: function () {
                return parseInt(this.text);
            },
            set: function (t) {
                this.text = "+" == o[0] ? "+" + parseInt(t) : parseInt(t);
            }
        }), t.Tween.get(e).to({
            factor: o
        }, 500);
    }, e.bezierMove = function (e, o, n, i) {
        var r = {
            x: e.x,
            y: e.y
        };
        e.hasOwnProperty("factor") || Object.defineProperty(e, "factor", {
            get: function () {
                return 0;
            },
            set: function (t) {
                this.x = (1 - t) * (1 - t) * r.x + 2 * t * (1 - t) * o.x + t * t * n.x, this.y = (1 - t) * (1 - t) * r.y + 2 * t * (1 - t) * o.y + t * t * n.y;
            }
        }), t.Tween.get(e).to({
            factor: 1
        }, 500).call(i);
    }, e.isNumberString = function (t) {
        return /^[-+]?\d+\.?\d+$/.test(t);
    };
}(d || (d = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.shareCode = "", t.local = {}, t.isNew = !1, t._listeners = [], t.maxLevel = 99,
                t.reAuth = 0, t.chipInfo = [0, 0], t.chips = {}, t;
        }
        return o(i, e), i.prototype.init = function () {
            this.loadLocal(), this.checkLocalVersion(), this.checkNewDay();
        }, i.prototype.checkMyGameEnergy = function () {
            this.mygameOpenTime && !this.local.mygame && Date.now() - this.mygameOpenTime < 3e4 && (new S.RewardPanel("power", 5, !1).show(),
                this.setLocalData("mygame", !0));
        }, i.prototype.checkNewDay = function () {
            this.local.day != moment().date() && (this.local.day = moment().date(), this.local.shareEnergyTime = 0,
                this.local.kefu = !1, this.local.sub = !1, this.local.subSign = [], this.local.shareEnergy = [],
                this.saveLocal());
        }, i.prototype.onServerData = function (t) {
            if (this.maxLevel = t.maxLevel, this.reAuth = t.reAuth, this.createTime = t.created_at,
                !this.local.id) {
                if (this.local.id = t.user_id, this.local.shareCode = t.share_code, this.local.openId = t.open_id,
                    this.local.redLock = t.red_lock, t.user_json) {
                    var e = d.parseJSON(t.user_json);
                    _.extend(this.local, e), f.trigger("server-data");
                }
                this.saveLocal();
            }
            g.checkInvite();
        }, i.prototype.setLocalData = function (t, e) {
            if ((t == "level" || t == "rpMaxLv") && e >= this.maxLevel) {
                e = this.maxLevel;
            }
            this.local[t] = e, this.saveLocal();
        }, i.prototype.rescuePower = function () {
            for (; this.local.power < 5 && moment().isAfter(this.local.powerTime);) this.local.power++,
                this.local.powerTime = moment(this.local.powerTime).add(5, "minute").toDate();
            this.local.power >= 5 && (this.local.powerTime = null), this.saveLocal();
        }, i.prototype.addPower = function (t) {
            this.local.power += t, this.saveLocal();
        }, i.prototype.hasPower = function () {
            return this.local.power > 0;
        }, i.prototype.costPower = function () {
            return !(this.local.power < 1) && (4 == --this.local.power && (this.local.powerTime = moment().add(3, "minute").toDate()),
                this.local.power < 5 && d.powerUpdate(), this.saveLocal(), !0);
        }, i.prototype.createLevelMgr = function () {
            this.local.level > 100 && f.setLocalData("showRp", !0), this.levelMgr = new n.LevelMgr(this.local.level);
        }, i.prototype.getChipNum = function (t, e) {
            return this.chips[t] = this.chips[t] || {}, this.chips[t][e] = this.chips[t][e] || 0,
                this.chips[t][e];
        }, i.prototype.getChipVariety = function (t) {
            var e = 0;
            return this.chips[t] = this.chips[t] || {}, _.each(this.chips[t], function (t) {
                t && e++;
            }), e;
        }, i.prototype.exchangeChips = function (t) {
            for (var e = [0, 4, 4, 6, 6, 9, 9, 12], o = 0; o < e[t]; o++) this.getChipNum(t, o + 1) && this.chips[t][o + 1]--;
            this.saveLocal();
        }, i.prototype.isChipPackReady = function (t) {
            for (var e = [0, 4, 4, 6, 6, 9, 9, 12], o = !0, n = 0; n < e[t]; n++) if (!this.getChipNum(t, n + 1)) {
                o = !1;
                break;
            }
            return o;
        }, i.prototype.checkLocalVersion = function () {
            var t = this.local, e = {
                showRp: !1,
                sound: !0,
                volume: 1,
                vibrate: !0,
                name: "",
                avatar: "",
                roundNum: 0,
                authorized: !1,
                id: 0,
                shareCode: "",
                level: 1,
                power: 99,
                coin: 300,
                redpack: 0,
                powerTime: new Date(),
                grade: 1,
                subGrade: 5,
                gradeProgress: 0,
                gradeStar: 0,
                shareEnergyTime: 0,
                fubiao: !1,
                mygame: !1,
                kefu: !1,
                mp: !1,
                sub: !1,
                inviteEnergy: 0,
                rankpack: !1,
                inviteArr: [],
                redLock: 0,
                subSign: [],
                rpMaxLv: 1,
                createTime: new Date(),
                day: moment().date(),
                plantLevel: 1,
                potLevel: 1,
                exp: 0,
                chips: {},
                shareEnergy: [],
                zsids: []
            };
            _.defaults(t, e), this.local.potLevel = Math.min(29, this.local.potLevel), this.local.plantLevel = Math.min(29, this.local.plantLevel),
                this.saveLocal();
        }, i.prototype.isOld = function () {
            return !this.createTime || moment("2019-11-08").isAfter(1e3 * this.createTime);
        }, i.prototype.applyLocal = function () {
            _.extend(this, this.local);
        }, i.prototype.updateLocal = function () {
            this.saveLocal();
        }, i.prototype.hasItem = function (t, e) {
            return this.itemNum(t) >= e;
        }, i.prototype.itemNum = function (t) {
            return this.local[t] || 0;
        }, i.prototype.addItem = function (t, e) {
            e && (d.incr(this.local, t, e), this.saveLocal());
        }, i.prototype.useItem = function (t, e) {
            return !!this.hasItem(t, e) && (this.addItem(t, -e), !0);
        }, i.prototype.watch = function (e, o, n) {
            var i = this;
            this._listeners.push({
                target: e,
                host: o,
                callback: n
            }), o.once(t.Event.REMOVED_FROM_STAGE, function () {
                return i.unwatch(o);
            }, this);
        }, i.prototype.trigger = function (t) {
            for (var e = this._listeners.length - 1; e >= 0; e--) {
                var o = this._listeners[e];
                o && o.target == t && d.invokeFunction(o.callback, o.host);
            }
        }, i.prototype.unwatch = function (t) {
            var e = this, o = _.filter(this._listeners, function (e) {
                return e.host == t;
            });
            _.each(o, function (t) {
                d.arrayRemoveItem(e._listeners, t);
            });
        }, i.prototype.saveLocal = function () {
            window.localStorage.setItem("Find-The-Differences-local-data", JSON.stringify(this.local));
        }, i.prototype.loadLocal = function () {
            try {
                var t = window.localStorage.getItem("Find-The-Differences-local-data");
                if (t && !_.isEmpty(t)) {
                    var e = JSON.parse(t);
                    _.isEmpty(e) || (this.local = e);
                } else this.isNew = !0;
            } catch (t) {
                console.log(t);
            }
        }, i;
    }(t.EventDispatcher);
    n.DataStore = i, eClass(i.prototype, "model.DataStore");
}(m || (m = {}));

var f, m;

!function (t) {
    var o = function () {
        function t(t) {
            this.cache = {}, this.queue = [], this.step = 1, this.isLoading = !1, t > 5296 && (t = d.loopNum(1e3, 5296, t, 0)),
                this.level = t, this.loadLevel(t);
        }
        return t.prototype.getUrl = function (t, e) {
            return "differences/levels/" + t + "/" + e;
        }, t.prototype.loadLevel = function (t) {
            var e = this;
            return this.isCurLevelComplete(t) ? void this.checkPreloadLevel(t + 1) : (this.isLoading = !0,
                void (1 == t ? this.onLevelJsonComplete({
                    skins: {
                        slots: [{
                            name: "Layer_0",
                            layer: "standart",
                            x: 800,
                            y: -500,
                            width: 1602,
                            height: 1002
                        }, {
                            name: "flower",
                            layer: "LayerAMiddle",
                            x: 643,
                            y: -397,
                            width: 100,
                            height: 164
                        }, {
                            name: "pillow",
                            layer: "LayerBMiddle",
                            x: 936,
                            y: -556.5,
                            width: 118,
                            height: 119
                        }, {
                            name: "books",
                            layer: "LayerBMiddle",
                            x: 1394.5,
                            y: -745.5,
                            width: 169,
                            height: 181
                        }, {
                            name: "clock",
                            layer: "LayerBMiddle",
                            x: 1505,
                            y: -282.5,
                            width: 144,
                            height: 91
                        }, {
                            name: "picture",
                            layer: "LayerAMiddle",
                            x: 35.5,
                            y: -435,
                            width: 73,
                            height: 182
                        }]
                    }
                }, 1) :
                    RES.getResByUrl("loadLevel/" + t + ".json", (res) => {
                        console.log("res", res)
                        e.onLevelJsonComplete(res, t);
                    }, this)
                ));
        }, t.prototype.onLevelJsonComplete = function (t, e) {
            var o = this;
            this.cache[e] = {
                conf: t.skins.slots,
                img: {}
            };
            var n = [];
            1 == e ? this.cacheImgData(t.skins.slots, e) : (_.each(t.skins.slots, function (t) {
                var i = "standart" == t.layer ? ".jpg" : ".png";
                n.push({
                    url: o.getUrl(e, t.name + i),
                    name: "level" + e + "." + t.name,
                    type: RES.ResourceItem.TYPE_IMAGE
                });
            }), l.createGroupAndLoad("level" + e, n, function () {
                o.cacheImgData(t.skins.slots, e);
            }, 5 > e ? 1 : 0));
        }, t.prototype.checkPreloadLevel = function (t) {
            t > f.maxLevel && (t = d.loopNum(1e3, f.maxLevel, t, 0)), t >= f.maxLevel + 1 || t > this.level + 2 || this.isCurLevelComplete(t) || this.loadLevel(t);
        }, t.prototype.cacheImgData = function (t, e) {
            var o = this;
            this.step = 3, _.each(t, function (t) {
                var n = t.name;
                o.cache[e].img[n] = 1 == e ? "Layer_0" == n ? RES.getRes("Layer_0_jpg") : RES.getRes("ui_game_json." + n) : RES.getRes("level" + e + "." + n);
            }), f.trigger("level-res-complete"), this.isLoading = !1, this.checkPreloadLevel(e + 1);
        }, t.prototype.isCurLevelComplete = function (t) {
            this.level = f.local.level;
            return t = t || this.level, this.cache[t] && !_.isEmpty(this.cache[t].img);
        }, t.prototype.getCurLevelCache = function () {
            return this.cache[this.level];
        }, t.prototype.removeCache = function (t) {
            1 != t && RES.destroyRes("level" + t), delete this.cache[t];
        }, t.prototype.reloadLevel = function () {
            this.loadLevel(this.level);
        }, t.prototype.setUserCloudStorage = function () {
            d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || (platforms.setUserCloudStorage({
                KVDataList: [{
                    key: "score",
                    value: f.local.level + ""
                }],
                success: function (t) {
                    console.log(t);
                },
                fail: function (t) {
                    console.log(t);
                }
            }), d.requestForUpload());
        }, t.prototype.levelComplete = function () {
            this.removeCache(this.level), 80604965 != f.local.id && g.isMiniGame && (d.http({
                url: "level",
                method: "POST",
                params: {
                    level: f.local.level
                },
                success: function (t) { }
            }), this.setUserCloudStorage()), this.level > 1 && platforms.removeDir("differences/levels/" + this.level),
                ++this.level > 5296 && (this.level = d.loopNum(1e3, 5296, this.level, 0)), this.checkPreloadLevel(this.level + 1);
        }, t;
    }();
    t.LevelMgr = o, eClass(o.prototype, "model.LevelMgr");
}(m || (m = {}));

var g, v = {
    earthAngelExchangeCoe: 150,
    eventAngelExchangeCoe: 90,
    eventExpireDate: "2017-02-20",
    marsAngelExchangeCoe: 300,
    marsBuildPrice: 1e24,
    moonAngelExchangeCoe: 165,
    moonBuildPrice: 1e12,
    sportsAngelExchangeCoe: 170,
    grade: {
        1: {
            id: 1,
            level: 2,
            name: "新手黄铜",
            star: 2,
            sub: 5
        },
        2: {
            id: 2,
            level: 3,
            name: "优秀白银",
            star: 3,
            sub: 5
        },
        3: {
            id: 3,
            level: 4,
            name: "不屈黄金",
            star: 4,
            sub: 5
        },
        4: {
            id: 4,
            level: 5,
            name: "卓越白金",
            star: 5,
            sub: 5
        },
        5: {
            id: 5,
            level: 6,
            name: "璀璨钻石",
            star: 5,
            sub: 5
        },
        6: {
            id: 6,
            level: 7,
            name: "找茬大师",
            star: 5,
            sub: 5
        },
        7: {
            id: 7,
            level: 8,
            name: "最强王者",
            star: 5,
            sub: 5
        }
    },
    plant: {
        1: {
            id: 1,
            plant: 1,
            pot: 6
        },
        2: {
            id: 2,
            plant: 16,
            pot: 23
        },
        3: {
            id: 3,
            plant: 44,
            pot: 60
        },
        4: {
            id: 4,
            plant: 100,
            pot: 120
        },
        5: {
            id: 5,
            plant: 160,
            pot: 180
        },
        6: {
            id: 6,
            plant: 220,
            pot: 240
        },
        7: {
            id: 7,
            plant: 280,
            pot: 300
        },
        8: {
            id: 8,
            plant: 340,
            pot: 360
        },
        9: {
            id: 9,
            plant: 400,
            pot: 420
        },
        10: {
            id: 10,
            plant: 460,
            pot: 480
        },
        11: {
            id: 11,
            plant: 520,
            pot: 540
        },
        12: {
            id: 12,
            plant: 580,
            pot: 600
        },
        13: {
            id: 13,
            plant: 640,
            pot: 660
        },
        14: {
            id: 14,
            plant: 700,
            pot: 720
        },
        15: {
            id: 15,
            plant: 760,
            pot: 780
        },
        16: {
            id: 16,
            plant: 820,
            pot: 840
        },
        17: {
            id: 17,
            plant: 880,
            pot: 900
        },
        18: {
            id: 18,
            plant: 940,
            pot: 960
        },
        19: {
            id: 19,
            plant: 1e3,
            pot: 1040
        },
        20: {
            id: 20,
            plant: 1080,
            pot: 1120
        },
        21: {
            id: 21,
            plant: 1160,
            pot: 1200
        },
        22: {
            id: 22,
            plant: 1240,
            pot: 1280
        },
        23: {
            id: 23,
            plant: 1320,
            pot: 1480
        },
        24: {
            id: 24,
            plant: 1520,
            pot: 1680
        },
        25: {
            id: 25,
            plant: 1720,
            pot: 1880
        },
        26: {
            id: 26,
            plant: 1920,
            pot: 2080
        },
        27: {
            id: 27,
            plant: 2120,
            pot: 2280
        },
        28: {
            id: 28,
            plant: 2320,
            pot: 2480
        },
        29: {
            id: 29,
            plant: 9999,
            pot: 1e4
        }
    },
    puzzle: {
        1: {
            count: 9,
            daily: 1500,
            id: 1,
            num: .3
        },
        2: {
            count: 9,
            daily: 1e3,
            id: 2,
            num: .5
        },
        3: {
            count: 9,
            daily: 500,
            id: 3,
            num: 1
        },
        4: {
            count: 9,
            daily: 150,
            id: 4,
            num: 3
        },
        5: {
            count: 9,
            daily: 100,
            id: 5,
            num: 5
        },
        6: {
            count: 9,
            daily: 50,
            id: 6,
            num: 10
        },
        7: {
            count: 9,
            daily: 10,
            id: 7,
            num: 50
        }
    }
}, y = {
    RESOURCE: "resource/",
    SIGN_KEY: "diff_ldt131415926",
    MOVE_X: 30,
    MOVE_Y: 150,
    TILE_SIZE_ARR: [0, 0, 0, 200, 180, 150, 120, 100, 130],
    KIND_OF_CHESS: 7,
    ORI_OF_CHECK: 4,
    HP_MAX: 150,
    COMBO_CD: 1e3,
    hotGames: [{
        id: "wx29cef75bd89d29b1",
        path: "icon_game2_png"
    }]
}, w = function () {
    function t() {
        this.serverId = "1", this.platforms = "ldt", this.isAuditing = !1, this.serverCome = !1,
            this.appStatus = 1, this.host = "",
            this.info = platforms.getSystemInfoSync(), console.log("systemInfo: ", this.info),
            platforms.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
            }), this.params = d.getUrlParamMap(), this.friendCode && (this.params.shareCode = this.friendCode),
            this.uniqueId = this.params.uniqueId;
    }
    return t.prototype.init = function () {
        this.isMiniGame && (this._initWechatSDK(), g.parseLaunchInfo(platforms.getLaunchOptionsSync()),
            r.init());
    }, t.prototype.parseLaunchInfo = function (t) {
        var e = t.query;
        console.log("parseLaunchInfo: ", t);
        var o = t.scene;
        !g.serverCome && "kefu" != e.from && 1073 != o || f.local.kefu || (console.log("客服进入，签到成功"),
            f.setLocalData("kefu", !0), new S.RewardPanel("power", 5, !1).show()), "notice" != e.from || _.contains(f.local.subSign, e.sign) || (f.local.subSign.push(e.sign),
                f.setLocalData("sub", !1), new S.EnergyGetPanel("sub").show()), g.serverCome = !1,
            this.lastScene = o, 1131 == o && (f.local.fubiao || (console.log("浮标进入"), f.setLocalData("fubiao", !0),
                new S.RewardPanel("power", 5, !1).show())), (1069 == o || e.shareCode) && f.setLocalData("showRp", !0),
            this.checkChipTransport(t);
    }, t.prototype.checkInvite = function () {
        var t = platforms.getLaunchOptionsSync().query;
        t.shareCode && t.shareCode != f.shareCode && d.http({
            url: "invitePacket",
            method: "POST",
            params: {
                user_id: f.local.id,
                share_code: t.shareCode
            },
            success: function (t) { }
        });
    }, Object.defineProperty(t.prototype, "friendCode", {
        get: function () {
            var t = platforms.getLaunchOptionsSync().query;
            return t ? (console.log("query: ", t), t.shareCode) : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isProd", {
        get: function () {
            return !!this.info.model || (this.params.server ? "production" == this.params.server : "h5static.ledongtian.com" == location.hostname.toLowerCase());
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isLocal", {
        get: function () {
            var t = location.hostname;
            return "localhost" == t || "127.0.0.1" == t || _.startsWith(t, "192.168");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isTT", {
        get: function () {
            return !1;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isMiniGame", {
        get: function () {
            return !_.isEmpty(this.info);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isIphoneX", {
        get: function () {
            return _.startsWith(this.info.model, "iPhone X");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "statusBarHeight", {
        get: function () {
            return d.stageWidth() * this.info.statusBarHeight / this.info.screenWidth;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.backToGame = function (t) {
        this.parseLaunchInfo(t), c.onShow(), f.trigger("ON_SHOW"), f.checkMyGameEnergy();
    }, t.prototype.checkChipTransport = function (t) {
        if (f.local.shareCode && t.query.shareCode != f.local.shareCode) {
            if (1 == t.query.zs && !_.contains(f.local.zsids, t.query.zsid)) {
                var e = {
                    user_id: f.local.id,
                    share_code: t.query.shareCode,
                    red_id: parseInt(t.query.red),
                    card_id: parseInt(t.query.chip),
                    type: 0,
                    time: Date.now(),
                    sign: ""
                };
                e.sign = g.getSign([e.user_id, e.share_code, e.red_id, e.card_id, e.type, e.time]),
                    d.http({
                        url: "cardTransport",
                        method: "POST",
                        params: e,
                        success: function (e) {
                            f.local.zsids.push(t.query.zsid), f.saveLocal(), new S.PuzzleGetChipPanel(parseInt(t.query.red), parseInt(t.query.chip)).show();
                        }
                    });
            }
            0 == t.query.zs && new S.PuzzleRequestPanel(parseInt(t.query.red), parseInt(t.query.chip), t.query.shareCode).show();
        }
    }, t.prototype._initWechatSDK = function () {

    }, t.prototype.randomShareImg = function () {
        return "";
    }, t.prototype.previewImage = function (t) {
        platforms.previewImage({
            urls: [t]
        });
    }, t.prototype.getSign = function (t) {
        for (var e = "", o = 0; o < t.length; o++) e += t[o];
        return e += y.SIGN_KEY, new s().hex_md5(e).toLowerCase();
    }, t.prototype.showModal = function (t, e) {
        platforms.showModal({
            title: t,
            content: e,
            showCancel: !1
        });
    }, Object.defineProperty(t.prototype, "isIOS", {
        get: function () {
            return "ios" == this.info.platforms;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

eClass(w.prototype, "System");

var b = function (e) {
    function n() {
        var t = e.call(this) || this;
        return t.createView(), t;
    }
    return o(n, e), n.prototype.createView = function () {
        var t = d.stageHeight(), e = d.stageWidth(), o = new eui.Rect(e, t, 10223359);
        this.addChild(o), this.addTitle(), this.addLbl(), this.addProgress();
    }, n.prototype.addTitle = function () {
        var e = new eui.Image("ui_loading_json.image_fdj");
        this.addChild(e), e.fillMode = t.BitmapFillMode.REPEAT, e.width = d.stageWidth(),
            e.height = d.stageHeight();
    }, n.prototype.addProgress = function () {
        var t = new eui.Image("ui_loading_json.process_bg");
        this.addChild(t), t.x = d.stageWidth() / 2 - 173, t.y = d.stageHeight() / 2;
        var e = this.progressFg = new eui.Image("ui_loading_json.process");
        this.addChild(e), e.x = t.x, e.y = t.y, e.width = 0;
    }, n.prototype.addLbl = function () {
        var t = new eui.Image("ui_loading_json.loading");
        this.addChild(t), t.anchorOffsetX = 100, t.anchorOffsetY = 12, t.x = d.stageWidth() / 2,
            t.y = d.stageHeight() / 2 - 100;
    }, n.prototype.onProgress = function (t, e) {
        this.progressFg.width = 346 * Math.min(t / e, 1);
    }, n;
}(t.Sprite);

eClass(b.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);

!function (t) {
    var n = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = BackHomePanelSkin, t;
        }
        return o(n, e), n.prototype.onTapTarget = function (e, o) {
            "home" == e.name && (t.main.addHome(), platforms.hideLoading({}), this.close());
        }, n;
    }(t.UIPanel);
    t.BackHomePanel = n, eClass(n.prototype, "ui.BackHomePanel");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i(t) {
            var o = e.call(this) || this;
            return o.isSubscribe = !1, o.skinName = EnergyGetPanelSkin, o.currentState = t,
                "mygame" == t && (f.mygameOpenTime = Date.now()), o;
        }
        return o(i, e), i.prototype._onExit = function () {
            this._loginBtn && this._loginBtn.destroy();
        }, i.prototype.createLoginButton = function () {
            var t = this, e = g.info.windowWidth / 720, o = 251 * e, i = this._loginBtn = platforms.createUserInfoButton({
                type: "image",
                image: "res/btn_root.png",
                style: {
                    left: (g.info.windowWidth - o) / 2,
                    top: g.info.windowHeight / 2,
                    width: o,
                    height: 120 * e
                }
            });
            i && (i.onTap(function (e) {
                console.log(e), "getUserInfo:ok" == e.errMsg ? (i.destroy(), t.mainGroup.visible = !0,
                    f.local.authorized = !0, f.local.name = encodeURIComponent(e.userInfo.nickName),
                    f.local.avatar = e.userInfo.avatarUrl, f.reAuth = 0, f.saveLocal(), d.requestForUnionId(e.encryptedData, e.iv, f.local.openId)) : n.Toast.show("获取用户信息失败");
            }), i.show());
        }, i.prototype.childrenCreated = function () {
            var e = this;
            this.mygameBtn.visible = !f.local.mygame, this.fubiaoBtn.visible = !f.local.fubiao,
                this.kefuBtn.visible = !f.local.kefu, this.mpBtn.visible = !f.local.mp, this.subBtn.visible = !f.local.sub,
                this.subGetBtn.visible = !f.local.sub, "mp" == this.currentState && ((f.reAuth || !f.local.authorized) && (this.mainGroup.visible = !1,
                    t.Tween.get(this).wait(500).call(this.createLoginButton, this)), d.setGray(this.mpGetBtn),
                    this.mpGetBtn.visible = !f.local.mp, d.http({
                        url: "",
                        method: "POST",
                        params: {
                            uniqueid: f.local.openId
                        },
                        success: function (t) {
                            e.isSubscribe = !!t.subscribe, e.mpGetBtn.filters = null;
                        }
                    }));
        }, i.prototype.onTapTarget = function (t, e) {
            var o = this, r = t.name;
            switch (r) {
                case "mp":
                case "kefu":
                case "mygame":
                case "fubiao":
                case "sub":
                    this.close(), new i(r).show();
                    break;

                case "subget":
                    platforms.requestSubscribeMessage({
                        tmplIds: ["ggknxj9dLUYI8h_uD8cqmIXffuLVc-HBylNR7Dva2wE"],
                        success: function (t) {
                            "accept" == t["ggknxj9dLUYI8h_uD8cqmIXffuLVc-HBylNR7Dva2wE"] && (new n.RewardPanel("power", 2, !1).show(),
                                o.subGetBtn.visible = !1, f.setLocalData("sub", !0), d.subscribeEnergy(), o.close());
                        }
                    });
                    break;

                case "mpget":
                    this.isSubscribe && (new n.RewardPanel("power", 5, !1).show(), this.mpGetBtn.visible = !1,
                        f.setLocalData("mp", !0));
                    break;

                case "kefugo":
                    platforms.openCustomerServiceConversation({
                        sessionFrom: "game",
                        showMessageCard: !0,
                        sendMessageTitle: "",
                        sendMessagePath: "from=kefu",
                        sendMessageImg: "",
                        success: function () {
                            g.serverCome = !0;
                        }
                    });

                default:
                    break;
            }
        }, i;
    }(n.UIPanel);
    n.EnergyGetPanel = i, eClass(i.prototype, "ui.EnergyGetPanel");
}(S || (S = {}));

var C = function (e) {
    function r() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return o(r, e), r.prototype.createChildren = function () {
        e.prototype.createChildren.call(this), t.lifecycle.addLifecycleListener(function (t) { }),
            t.lifecycle.onPause = function () {
                t.ticker.pause();
            }, t.lifecycle.onResume = function () {
                t.ticker.resume();
            };
        var o = new a();
        t.registerImplementation("eui.IAssetAdapter", o), t.registerImplementation("eui.IThemeAdapter", new p()),
            g = new w(), (f = new m.DataStore()).init(), this.runGame().catch(function (t) {
                console.log(t);
            });
    }, r.prototype.loginByUserInfo = function (t) {
        var e = platforms.getLaunchOptionsSync();
        e.query ? t.channel = e.query.channel || "ldt" : t.channel = "test", this.getTokenFromServer(t);
        platform.getInstance().yadstartup("Find-The-Differences", () => {
            this.createGameScene();
        })
    }, r.prototype.wxLoginFail = function (t) {
        var e = this;
    }, r.prototype.runGame = function () {
        return n(this, void 0, void 0, function () {
            var t = this;
            return i(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, this.loadResource().catch(function (t) {
                            return console.log(t);
                        })];

                    case 1:
                        return e.sent(), RES.config.config.fileSystem ? (g.isMiniGame ? platforms.login({
                            timeout: 2e3,
                            success: function (e) {
                                console.log("login success"), e.code ? t.loginByUserInfo(e) : t.wxLoginFail(JSON.stringify(e));
                            },
                            fail: function (e) {
                                t.wxLoginFail(JSON.stringify(e));
                            }
                        }) : this.loginByUserInfo({}), [2]) : (this.runGame().catch(), [2]);
                    default:
                        break;
                }
            });
        });
    }, r.prototype.getTokenFromServer = function (t) {
        t.versions = "2.1.6"
    }, r.prototype.checkCacheFileVersion = function () {
        "3" != platforms.getStorageSync("cache-ver") && (platforms.setStorageSync("cache-ver", "3"),
            platforms.clearCacheFile());
    }, r.prototype.loadResource = function () {
        return n(this, void 0, void 0, function () {
            var t, e;
            return i(this, function (o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 9, , 10]), [4, RES.loadConfig("default.res.json", "differences/resource/").catch(function (t) {
                            console.log("debug: ", t);
                        })];

                    case 1:
                        return o.sent(), RES.config.config.fileSystem ? [4, RES.setMaxLoadingThread(1)] : [3, 8];

                    case 2:
                        return o.sent(), [4, RES.loadGroup("loading")];

                    case 3:

                        var imgLoader = new egret.ImageLoader;
                        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
                        imgLoader.load("yad.png");
                        return o.sent(), t = this.loadingView = new b(), this.stage.addChild(t), [4, this.loadTheme().then().catch()];

                    case 4:
                        return o.sent(), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.postLoadError, this),
                            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.postLoadProgress, this),
                            1 != f.local.level ? [3, 6] : [4, RES.loadGroup("preload", 0, t)];

                    case 5:
                        return o.sent(), [3, 8];

                    case 6:
                        return [4, RES.loadGroup("total", 0, t)];

                    case 7:
                        o.sent(), o.label = 8;

                    case 8:
                        return [3, 10];

                    case 9:
                        return e = o.sent(), console.error(e), [3, 10];

                    case 10:
                        return [2];
                    default:
                        break;
                }
            });
        });
    }, r.prototype.createGameScene = function () {
        try {
            window.ggmgr.glc();
        } catch (error) {
            
        }
        
		console.log(111111111111111111111);
        this.stage.removeChild(this.loadingView)
            , this.stage.addChild(new S.MainUI())
            , 1 == f.local.level ? RES.loadGroup("postload") : RES.loadGroup("totalpost");
    }, r.prototype.imgLoadHandler = function (evt) {
        // var loader = evt.currentTarget;
        // var bmd = loader.data;
        // let texture = new egret.Texture();
        // texture.bitmapData = bmd;
        // var bmp = new egret.Image(texture);
        // bmp.zindex=5000;
        // this.stage.addChild(bmp);

        var bmp = new eui.Image("yad.png");
        window.yad = bmp;
        this.stage.addChild(window.yad);
        bmp.once(egret.Event.COMPLETE, () => {
            bmp.x = this.stage.width - bmp.width;
        }, this);
    }, r.prototype.loadTheme = function () {
        var t = this;
        return new Promise(function (e, o) {
            new eui.Theme(y.RESOURCE + "default.thm.json", t.stage).addEventListener(eui.UIEvent.COMPLETE, function () {
                e();
            }, t);
        });
    }, r.prototype.postLoadError = function (t) {
        console.log("postload error", t);
    }, r.prototype.postLoadProgress = function (t) {
        console.log("postload progress", t.itemsLoaded);
    }, r.prototype.postLoadComplete = function () {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.postLoadComplete, this),
            console.log("postload res complete."), f.trigger("postResOk");
    }, r;
}(eui.UILayer);

eClass(C.prototype, "Main");

!function (n) {
    var i = function (e) {
        function n(t, o, n) {
            var i = e.call(this) || this;
            return i.easyClose = !1, i.skinName = PropGetSkin, i.msg = n, i.redId = t, i.cardId = o,
                i.iconPath = "big_chips_json.icon" + t + "_" + o, f.watch("video-prop", i, i.onVideoProp),
                i;
        }
        return o(n, e), n.prototype.onVideoProp = function () {
            d.http({
                url: "newCard2",
                method: "POST",
                params: {
                    user_id: f.local.id,
                    red_id: this.redId,
                    card_id: this.cardId
                },
                error: function (t) { },
                success: function (t) { }
            }), this.close();
        }, n.prototype.childrenCreated = function () {
            t.Tween.get(this.lightImg, {
                loop: !0
            }).to({
                rotation: 360
            }, 5e3), this.iconImg.source = this.iconPath, this.textLbl.text = this.msg, t.Tween.get(this.getLbl).wait(3e3).to({
                alpha: 1
            }, 1e3);
        }, n.prototype.onTapTarget = function (t, e) {
            "get" == t.name && r.showVideoAd("video-prop");
        }, n;
    }(n.UIPanel);
    n.PropGetPanel = i, eClass(i.prototype, "ui.PropGetPanel");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i(t, o, n) {
            void 0 === n && (n = !0);
            var i = e.call(this) || this;
            return i.easyClose = !1, i.maskAlpha = 1, i.id = t, i.num = o, i.skinName = RewardPanelSkin,
                i.showVideo = n, f.watch("video-triple", i, i.onVideoFinish), i;
        }
        return o(i, e), i.prototype.onVideoFinish = function () {
            n.Toast.show("Get x" + 3 * this.num + " Physical"), f.addItem(this.id, 3 * this.num), this.close();
        }, i.prototype.childrenCreated = function () {
            var e = this;
            this.numLbl.text = "x" + this.num, t.Tween.get(this.lightImg, {
                loop: !0
            }).to({
                rotation: 360
            }, 5e3), this.showVideo && t.callLater(function () {
                t.Tween.get(e.getLbl).wait(3e3).to({
                    alpha: 1
                }, 1e3);
            }, this), this.getBtn.visible = !this.showVideo;
        }, i.prototype.onTapTarget = function (t, e) {
            var o = t.name;
            "get" == o && (f.addItem(this.id, this.num), this.close()), "video" == o && r.showVideoAd("video-triple");
        }, i;
    }(n.UIPanel);
    n.RewardPanel = i, eClass(i.prototype, "ui.RewardPanel");
}(S || (S = {}));

!function (t) {
    var n = function (t) {
        function e(e) {
            var o = t.call(this) || this;
            return o.skinName = TipsSkin, o.msg = e, o;
        }
        return o(e, t), e.prototype.childrenCreated = function () {
            this.textLabel.text = this.msg.text;
        }, e.prototype.onTapTarget = function (t, e) {
            var o = t.name;
            switch (console.log(o), o) {
                case "ok":
                    // u.playSound("click"),
                    this.msg.cd || this.close();
                default:
                    break;
            }
        }, e;
    }(t.UIPanel);
    t.Tips = n, eClass(n.prototype, "ui.Tips");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function n(t) {
            var o = e.call(this) || this;
            return o.text = t, o.skinName = ToastSkin, o;
        }
        return o(n, e), n.show = function (e) {
            this._toast && (d.remove(this._toast), this._toast = null);
            var o = this._toast = new n(e);
            d.getStage().addChild(o), o.x = (d.stageWidth() - o.width) / 2, o.y = d.stageHeight() / 2 - 200,
                t.Tween.get(o).wait(1e3).to({
                    y: o.y - 50,
                    alpha: 0
                }, 1e3).call(function () {
                    return d.remove(o);
                });
        }, n;
    }(eui.Component);
    n.Toast = i, eClass(i.prototype, "ui.Toast");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            var e = this;
            this.touchChildren = !1, this.$hitTest = function (o, n) {
                if (!e.$visible || !e.touchEnabled || 0 === e.scaleX || 0 === e.scaleY || 0 === e.width || 0 === e.height) return null;
                var i = e.globalToLocal(o, n, t.$TempPoint), r = e.$UIComponent, a = t.$TempRectangle.setTo(0, 0, r[10], r[11]), s = e.$scrollRect;
                return s && (a.x = s.x, a.y = s.y), a.contains(i.x, i.y) ? e : null;
            }, this.checkAnchor(), this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        }, n.prototype.checkAnchor = function () {
            0 == this.anchorOffsetX && (this.anchorOffsetX = Math.ceil(this.width / 2), this.anchorOffsetY = Math.ceil(this.height / 2),
                this.x += this.anchorOffsetX, this.y += this.anchorOffsetY);
        }, n.prototype.onTouchBegin = function (e) {
            this.bounceIn(), this.addEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                this.addEventListener(t.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.addEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
        }, n.prototype.onTouchEnd = function (e) {
            this.bounceOut(), this.removeEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                this.$stage && this.$stage.removeEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                this.removeEventListener(t.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.removeEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
        }, n.prototype.onTouchCancel = function () {
            this.$stage.once(t.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }, Object.defineProperty(n.prototype, "bounceTarget", {
            get: function () {
                return this.parent;
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.bounceIn = function () {
            t.Tween.get(this.bounceTarget).to({
                scaleX: .95,
                scaleY: .95
            }, 50);
        }, n.prototype.bounceOut = function () {
            this.bounceTarget && (t.Tween.removeTweens(this.bounceTarget), t.Tween.get(this.bounceTarget).to({
                scaleX: 1.04,
                scaleY: 1.04
            }, 50).to({
                scaleX: 1,
                scaleY: 1
            }, 50));
        }, n.prototype.tempt = function () {
            t.Tween.get(this.bounceTarget, {
                loop: !0
            }).wait(1500).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 150).to({
                scaleX: 1.05,
                scaleY: 1.05
            }, 150).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 150).to({
                scaleX: 1,
                scaleY: 1
            }, 150);
        }, n.prototype.showRedPoint = function (e) {
            this.redpoint || (this.redpoint = new eui.Image("ui_main_json.warn"), this.addChild(this.redpoint),
                this.redpoint.x = this.width - 20, t.Tween.get(this.redpoint, {
                    loop: !0
                }).to({
                    alpha: 0
                }, 1e3, t.Ease.sineIn).to({
                    alpha: 1
                }, 1e3, t.Ease.sineOut)), this.redpoint.visible = e;
        }, n;
    }(eui.Group);
    n.ButtonBounce = i, eClass(i.prototype, "ui.ButtonBounce");
    var r = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return o(e, t), Object.defineProperty(e.prototype, "bounceTarget", {
            get: function () {
                return this;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(i);
    n.ButtonBounceSelf = r, eClass(r.prototype, "ui.ButtonBounceSelf");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function n() {
            var o = e.call(this) || this;
            return o.labelFontSize = 0, o.skinName = ButtonExSkin, o.touchChildren = !1, o.addEventListener(t.TouchEvent.TOUCH_BEGIN, function () {
                return o._addMask(!0);
            }, o), o.addEventListener(t.TouchEvent.TOUCH_END, function () {
                return o._addMask(!1);
            }, o), o.addEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
                return o._addMask(!1);
            }, o), o;
        }
        return o(n, e), n.prototype.$setWidth = function (t) {
            if (e.prototype.$setWidth.call(this, t), this.numChildren > 0) {
                var o = this.getChildAt(0);
                o instanceof eui.Group && (o.width = t, o.x = o.anchorOffsetX = t / 2);
            }
        }, n.prototype.childrenCreated = function () {
            this._mask = new eui.Image(), this._mask.source = this.iconDisplay.source, this._mask.visible = !1,
                this.addChild(this._mask), this.invalidateState();
        }, n.prototype._scaleTo = function (e) {
            var o = this.getChildAt(0);
            t.Tween.removeTweens(o), t.Tween.get(o).to({
                scaleX: e,
                scaleY: e
            }, 100);
        }, n.prototype._addMask = function (t) {
            if (!this._shadow) {
                var e = this._mask, o = new eui.Rect(this.width, this.height, 0);
                o.fillAlpha = .1, o.mask = e, this._shadow = o, this.addChild(this._shadow);
            }
            this._shadow.visible = t;
        }, n.prototype.partAdded = function (e, o) {
            if ("iconDisplay" == e) this.iconDisplay.once(t.Event.COMPLETE, this._onImageLoaded, this),
                this.icon && (this.iconDisplay.source = this.icon, this.iconDisplay.scale9Grid = null); else if ("labelDisplay" == e && this.label) {
                    var n = o;
                    n.text = this.label, n.size = this.labelFontSize || n.size;
                }
        }, n.prototype._onImageLoaded = function () {
            var t = this.getChildAt(0);
            this.explicitWidth ? t.width = this.explicitWidth : "ButtonExSkin" == this.skinName && (this.width = t.width,
                this.height = t.height), t.includeInLayout = !1, this.validateNow(), t.x = t.anchorOffsetX = this.iconDisplay.width / 2,
                t.y = t.anchorOffsetY = this.iconDisplay.height / 2;
        }, n.prototype.setGray = function (e) {
            if (void 0 === e && (e = !0), !e) return this.removeGray();
            var o = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0], n = new t.ColorMatrixFilter(o);
            this.filters = [n];
        }, n.prototype.removeGray = function () {
            this.filters = null;
        }, n.prototype.showRedPoint = function (t) {
            void 0 === t && (t = !0), this.redImg.visible = t;
        }, n.prototype.isRedPointShow = function () {
            return this.redImg && this.redImg.visible;
        }, n.prototype.getCurrentState = function () {
            return e.prototype.getCurrentState.call(this);
        }, n;
    }(eui.Button);
    n.ButtonEx = i, eClass(i.prototype, "ui.ButtonEx");
}(S || (S = {}));

!function (t) {
    var n = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = TabButtonSkin, e;
        }
        return o(e, t), e.prototype.dataChanged = function () {
            var t = {
                fd: "ui_panel_json.btn_frd2",
                wd: "ui_panel_json.btn_wrd2"
            }, e = {
                fd: "ui_panel_json.btn_frd1",
                wd: "ui_panel_json.btn_wrd1"
            };
            this.up = t[this.data], this.down = e[this.data];
        }, e;
    }(t.ItemRenderer);
    t.TabButton = n, eClass(n.prototype, "ui.TabButton");
}(S || (S = {}));

var T = function () {
    function t() { }
    return t.prototype.getUserInfo = function (t) {
        return {
            nickName: "username"
        };
    }, t.prototype.login = function (t) { }, t.prototype.clearCacheFile = function () { },
        t.prototype.getFilePath = function (t) { }, t.prototype.downloadFile = function (t) {
            return n(this, void 0, void 0, function () {
                return i(this, function (t) {
                    return [2];
                });
            });
        }, t.prototype.getSystemInfoSync = function () {
            return {};
        }, t.prototype.shareAppMessage = function (t) { }, t.prototype.connectSocket = function (t) { },
        t.prototype.requestMidasPayment = function (t) { }, t.prototype.createInnerAudioContext = function () {
            return {
                ended: function () { },
                onError: function () { },
                play: function () { },
                stop: function () { }
            };
        }, t.prototype.onShareAppMessage = function (t) { }, t.prototype.onShareTimeline = function (t) { },
        t.prototype.onShow = function (t) { }, t.prototype.onHide = function (t) { }, t.prototype.getLaunchOptionsSync = function () {
            return {};
        }, t.prototype.showShareMenu = function (t) { }, t.prototype.setUserCloudStorage = function (t) { },
        t.prototype.createUserInfoButton = function (t) { }, t.prototype.showLoading = function (t) { },
        t.prototype.hideLoading = function (t) { }, t.prototype.showModal = function (t) { },
        t.prototype.getStorageSync = function (t) {
            return {};
        }, t.prototype.setStorageSync = function (t, e) { }, t.prototype.createRewardedVideoAd = function (t) {
            return {};
        }, t.prototype.previewImage = function (t) { }, t.prototype.createBannerAd = function (t) {
            return {};
        }, t.prototype.setMessageToFriendQuery = function (t) {
            return !0;
        }, t.prototype.vibrateShort = function (t) {
            return {};
        }, t.prototype.openCustomerServiceConversation = function (t) {
            return {};
        }, t.prototype.navigateToMiniProgram = function (t) {
            return {};
        }, t.prototype.requestSubscribeMessage = function (t) {
            return {};
        }, t.prototype.openDataContext = function () {
            return {};
        }, t.prototype.getNetworkType = function () {
            return {};
        }, t.prototype.getGameRecorderManager = function () { }, t.prototype.removeDir = function (t) { },
        t.prototype.onShareMessageToFriend = function (t) { }, t;
}();

eClass(T.prototype, "DebugPlatform", ["Platform"]), window.platforms || (window.platforms = new T());

!function (n) {
    var i = function (e) {
        function i(o) {
            var n = e.call(this) || this;
            return n.skinName = FinishSkin, n.width = d.stageWidth(), n.height = d.stageHeight(),
                n.currentState = o, n.addEventListener(t.TouchEvent.TOUCH_TAP, n._onTap, n), f.watch("share-moretime", n, n.close),
                n;
        }
        return o(i, e), i.prototype.close = function () {
            var e = this;
            t.callLater(function () {
                d.remove(e);
            }, this);
        }, i.prototype.childrenCreated = function () {
			console.log(66666666666666666,'成功');
			platform.getInstance().showInterstitial()
            this.updateTime(), this._interval = t.setInterval(this.updateTime, this, 1e3), this.powerLbl.text = f.local.power,
                r.showBannerAdPanel(), f.local.redpack && (this.packLbl.text = f.local.redpack.toFixed(1) + "元"),
                this.homeBtn.visible = d.isGroupLoad("postload") || d.isGroupLoad("total"), this.tipGroup.visible = this.homeBtn.visible,
                this.refreshTip(), this.createFriendRank(), this.rpBtn.visible = false,
                "lose" == this.currentState ? this.moreTimeBtn.tempt() : (this.requestChip(), this.winMaxLevelUI());
            this.getChildAt(1).getChildAt(1).getChildAt(1).visible = false;
            this.tipImg.visible = false;


        }, i.prototype.winMaxLevelUI = function () {
            this.homeBtn.x = 54;
            // this.getChildAt(1).getChildAt(1).getChildAt(5).visible = true;
            // this.tipImg.visible = true;
            if (f.local.level + 1 > f.maxLevel) {
                // this.moreTimeBtn.visible = false;
                // this.getChildAt(1).getChildAt(1).getChildAt(5).visible = false;
                // this.tipImg.visible = false;
                // this.homeBtn.x = 300;
                f.setLocalData("roundNum", f.local.roundNum + 1);
                f.setLocalData("level", 5);
            }
        }, i.prototype.requestChip = function () {
            // d.puzzleRemainDays() <= 0 || d.http({
            //     url: "newCard",
            //     method: "POST",
            //     params: {
            //         user_id: f.local.id,
            //         level: f.local.level
            //     },
            //     error: function (t) { },
            //     success: function (t) {
            //         f.chipInfo = [t.redId, t.cardId];
            //     }
            // });
        }, i.prototype.refreshTip = function () {
            var t, e = f.local.exp, o = f.local.plantLevel, n = f.local.potLevel;
            t = v.plant[o].plant < v.plant[n].pot ? v.plant[o].plant : v.plant[n].pot, this.nextLbl.text = (t - e) + " Levels To Upgrade";
            var i = e >= t;
            this.nextLbl.width = 150;
            this.nextLbl.y = 10;
            this.nextLbl.size = 18;
            this.nextLbl.verticalAlign = "middle";
            this.nextLbl.textAlign = "center";
            this.nextLbl.height = 48;
            this.nextLbl.visible = !i;
            this.tipImg.source = i ? "ui_finish_json.warn2" : "ui_finish_json.warn1";
        }, i.prototype.createFriendRank = function () {

        }, i.prototype.updateTime = function () {
            if (this.powerLbl.text = f.local.power, !f.local.powerTime || f.local.power >= 5) this.timeLbl.visible = !1; else {
                var t = -moment().diff(f.local.powerTime, "s");
                0 >= t ? f.local.power >= 5 ? this.timeLbl.visible = !1 : (this.timeLbl.text = "00:00",
                    f.rescuePower()) : (this.timeLbl.visible = !0, this.timeLbl.text = moment(1e3 * t).utcOffset(0).format("mm:ss")),
                    this.powerLbl.text = f.local.power;
            }
        }, i.prototype._onExit = function () {
            t.clearInterval(this._interval), r.hideBannerAdPanel();
        }, i.prototype.checkPower = function (t) {
            f.hasPower() ?
                platform.getInstance().showInterstitial(() => {
                    n.main.addGameUI()
                })
                :
                new n.EnergyPanel().show();
        }, i.prototype._onTap = function (t) {
            var e = this, o = t.target.name;
            switch (o) {
                case "restart":
                case "next":
                    this.checkPower(o);
                    break;
                case "power":
                    new n.EnergyPanel().show();
                    break;
                case "home":
                    n.main.addHome();
                    break;
                case "moretime":
                    platform.getInstance().showReward(() => {
                        f.trigger("share-moretime");
                    });
                    break;

                case "mypack":
                    break;
                case "cuo1":
                    break;
                case "cuo2":
                default:
                    break;
            }
        }, i;
    }(n.DataComponent);
    n.FinishLayer = i, eClass(i.prototype, "ui.FinishLayer");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var o = e.call(this) || this;
            return o.findCount = 0, o.noPic = !0, o.findArr = [], o.findRingArr = [], o.timeRemain = 90,
                o.isTimeOut = !1, o.hotGameIdx = 0, o.pause = !1, o.catchReport = !1, o.tipCd = 10,
                o.totalDiff = 5, o._isTempt = !1, o.skinName = GameUISkin, o.width = d.stageWidth(),
                o.height = d.stageHeight(), f.watch("level-res-complete", o, o.onResComplete), f.watch("video-tip", o, o.onVideoTip),
                f.watch("server-data", o, o.onServerData), f.watch("video-show", o, o.onVideoShow),
                f.watch("video-close", o, o.onVideoClose), f.watch("share-moretime", o, o.onMoreTime),
                o.addEventListener(t.TouchEvent.TOUCH_TAP, o._onTap, o), o;
        }
        return o(i, e), i.prototype.onMoreTime = function () {
            this.timeRemain = 60, this.isTimeOut = !1, n.Toast.show("Prolong 60s Successfully");
        }, i.prototype.onVideoClose = function () {
            this.pause = !1;
        }, i.prototype.onVideoShow = function () {
            this.pause = !0;
        }, i.prototype.onVideoTip = function (ss) {
			ss = ss;
            // this.timeRemain += 20,
            this.showTip();
        }, i.prototype.checkGuideLbl = function () {
            this.guideLbl.visible = !1;
        }, i.prototype.onServerData = function () {

        }, i.prototype.showTip = function () {
            if (!this._tipUI) {
                var t = this.picGroup.$children[1];
                if (t) for (var e = 0; e < this.totalDiff; e++) {
                    var o = t.targets[e];
                    if (!_.contains(this.findArr, o.sign)) {
                        var i = this._tipUI = new n.TipUI();
                        t.addChild(i), i.x = o.x, i.y = o.y;
                        break;
                    }
                }
            }
        }, i.prototype.childrenCreated = function () {
            var e = this;
            this.totalDiff = f.levelMgr.level < 4 ? 3 : 5, this.currentState = f.levelMgr.level < 4 ? "easy" : "normal",
                this.levelLbl.text = "Level " + (f.local.level + 95 * f.local.roundNum), this.refreshStar(), this.checkGuideLbl(),
                this.createFriendRank(), this.homeBtn.visible = d.isGroupLoad("postload") || d.isGroupLoad("total"),
                f.levelMgr.isCurLevelComplete() ? this.initPic() : (
                    //     platforms.showLoading({
                    //     title: "Loading..."
                    // }), this._interval = t.setInterval(function () {
                    e.noPic ? (e.catchReport || (e.catchReport = !0, d.requestForCatchUser(f.levelMgr.step, 0)),
                        f.levelMgr.reloadLevel()) : (e.catchReport && d.requestForCatchUser(0, 1), t.clearInterval(e._interval))
                    // }, this, 8e3)
                );


            this.hotGameImg.$parent.visible = false;
			this.tipBtn.y = Math.min(1400,this.stage.stageHeight)  - this.tipBtn.height;
        }, i.prototype.initPic = function () {
            f.local.level > f.maxLevel ? f.local.level = f.maxLevel : null;
            (f.costPower(), this.noPic = !1, this.addPics(1), this.addPics(2), this.checkGuide(!1),
                this.randomHotGame(), this.startCountDown(), void f.setLocalData("rpMaxLv", f.local.level + 1));
        }, i.prototype.formatSecond = function (t) {
            var e = t >= 60 ? "01:" : "00:", o = t % 60;
            return e += 10 > o ? "0" + o : o;
        }, i.prototype.showTimeout = function () {
            this.isTimeOut || (this.isTimeOut = !0, this.showFinish("lose"));
        }, i.prototype.randomHotGame = function () {
            // this.hotGameIdx = 0;
            // var t = y.hotGames[this.hotGameIdx];
            // this.hotGameImg.source = t.path;
        }, i.prototype.startCountDown = function () {
            u.playSound("start"), this._timer = t.setInterval(this.updateTime, this, 1e3);
        }, i.prototype.updateTime = function () {
            this.pause || (this.timeRemain > 0 ? (this.timeRemain--, _.contains([10, 30, 60], this.timeRemain) && (u.playSound("time")),
                this.timeLbl.text = this.formatSecond(this.timeRemain)) : (this.timeLbl.text = "00:00",
                    this.showTimeout()), --this.tipCd <= 0 && (this.tipCd = 3e4, this.checkGuide(!0)),
                this.timeBg.source = this.timeRemain <= 10 ? "ui_game_json.bg_time2" : "ui_game_json.bg_time1");
        }, i.prototype._onExit = function () {
            t.clearInterval(this._interval), t.clearInterval(this._timer);
        }, i.prototype.onResComplete = function () {
            platforms.hideLoading({}), f.levelMgr.isCurLevelComplete() && this.noPic && this.initPic();
        }, i.prototype.refreshStar = function () {
            for (var t = 0; t < this.totalDiff; t++) this.starGroup.$children[t].$children[1].visible = this.findCount > t;
        }, i.prototype.addPics = function (t) {
            var e = f.levelMgr.getCurLevelCache(), o = new a(t, e);
            this.picGroup.addChild(o);
        }, i.prototype.addCorrectRing = function (t, e, o) {
            var n = new eui.Image("ui_game_json.icon_corret");
            t.addChild(n), d.setAnchor(n, .5), n.x = e, n.y = o, this.bounceImg(n, 0, function () { }),
                this.findRingArr.push(n);
        }, i.prototype.bounceImg = function (e, o, n) {
            t.Tween.get(e).wait(o).to({
                scaleX: .85,
                scaleY: .85
            }, 80).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 80).to({
                scaleX: 1,
                scaleY: 1
            }, 80).call(n);
        }, i.prototype.onFindDiff = function (e) {
            var o = e.sign;
            if (!_.contains(this.findArr, o)) {
                d.remove(this._tipUI), this._tipUI = null, this.tipCd = 10, this.findArr.push(o),
                    this.findCount++, u.playSound("step" + this.findCount), this.addCorrectRing(this.picGroup.$children[0], e.x, e.y),
                    this.addCorrectRing(this.picGroup.$children[1], e.x, e.y), this.findCount == this.totalDiff && t.clearInterval(this._timer);
                var n = e.localToGlobal(e.width / 2, e.height / 2);
                n = this.globalToLocal(n.x, n.y), this.showParticle(n), this.checkGuide(!1);
            }
        }, i.prototype.checkGuide = function (t) {
            if (1 == f.levelMgr.level && !t && this.findArr.length < 3 ? this.showTip() : t && f.levelMgr.level < 10 ? this.showTip() : !this._isTempt && t && (this._isTempt = !0,
                this.tipBtn.tempt()), 1 == f.levelMgr.level && !t) switch (this.findCount) {
                    case 1:
                        this.guideLbl.text = "请按提示找出第二处不同";
                        break;

                    case 2:
                        this.guideLbl.text = "请按提示找出第三处不同";
                        break;

                    case 3:
                        this.guideLbl.text = "恭喜过关！";
                    default:
                        break;
                }
        }, i.prototype.onFindWrong = function (e, o) {
            var n = this.globalToLocal(e, o), i = new eui.Image("ui_game_json.icon_wrong");
            this.addChild(i), d.setAnchor(i, .5), i.x = n.x, i.y = n.y, t.Tween.get(i).to({
                alpha: .5,
                scaleX: .5,
                scaleY: .5
            }, 500).call(function () {
                d.remove(i);
            }), u.playSound("wrong"), this.timeRemain -= 10, this.timeRemain = Math.max(0, this.timeRemain),
                this.updateTime();
        }, i.prototype.getStarPos = function (t) {
            var e = this.starGroup.$children[t - 1].$children[1], o = e.localToGlobal(e.width / 2, e.height / 2);
            return this.globalToLocal(o.x, o.y);
        }, i.prototype.showParticle = function (t) {
            var e = this, o = this.findCount, i = this.getStarPos(o), r = new n.StarParticle(t, i);
            this.addChild(r), r.addEventListener("finish", function () {
                e.starGroup.$children[o - 1].$children[1].visible = !0, o == e.totalDiff && e.showWin();
            }, this);
        }, i.prototype.showWin = function () {
            for (var e = this, o = this, n = 0; n < 2 * this.totalDiff; n++) !function (t) {
                var e = o.findRingArr[t];
                o.bounceImg(e, d.randomInt(0, 300), function () {
                    e.source = "ui_game_json.icon_finish";
                });
            }(n);
            u.playSound("win"), t.Tween.get(this).wait(600).call(function () {
                e.showFinish("win");
            });
        }, i.prototype.showFinish = function (t) {
            "win" == t && (f.levelMgr.levelComplete(), f.local.exp++, f.setLocalData("level", f.local.level + 1));
            var e = new n.FinishLayer(t);
            this.addChild(e);
        }, i.prototype.createFriendRank = function () {
            !g.isMiniGame || f.levelMgr.level < 5 || d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || (n.RankPanel.openDataContext || (n.RankPanel.openDataContext = platforms.openDataContext,
                n.RankPanel.sharedCanvas = n.RankPanel.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight)),
                n.RankPanel.openDataContext.postMessage({
                    command: "pk",
                    openId: f.local.openId
                }), this.pkGroup.addChild(n.RankPanel.sharedCanvas));
        }, i.prototype.closeFriendRank = function () {
            d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || n.RankPanel.openDataContext && n.RankPanel.openDataContext.postMessage({
                command: "close"
            });
        }, i.prototype._onTap = function (t) {
            switch (t.target.name) {
                case "chip":
                    var e = v.puzzle[t.target.sign[0]];
                    d.remove(t.target), new n.PropGetPanel(t.target.sign[0], t.target.sign[1], e.num + "元红包碎片x1").show();
                    break;

                case "redpack":
                    d.remove(t.target);
                    var o = 1, i = f.local.redpack;
                    o = 2 > i ? d.randomInt(1, 10) : 10 > i ? d.randomInt(1, 5) : 1, o = parseFloat((.1 * o).toFixed(1)),
                        f.addItem("Find-The-Differences-redpack", o), new n.RedPackPanel(o).show();
                    break;

                case "diff":
                    this.onFindDiff(t.target);
                    break;

                case "standart":
                    this.onFindWrong(t.stageX, t.stageY);
                    break;

                case "tip":
                    r.showVideoAd("video-tip");
                    break;

                case "home":
                    new n.BackHomePanel().show();
                    break;

                case "hotGame":
                default:
                    break;
            }
        }, i;
    }(n.DataComponent);
    n.GameUI = i, eClass(i.prototype, "ui.GameUI");
    var a = function (t) {
        function e(e, o) {
            var n = t.call(this) || this;
            return n.targets = [], n.idx = e, n.picInfo = o, n;
        }
        return o(e, t), e.prototype.childrenCreated = function () {
            this.width = 681, this.height = 429, this.addBox(), this.addImg(), this.addRedPack();
        }, e.prototype.addChip = function () {
            var t = new eui.Image("ui_game_json.chip");
            t.name = "chip", t.sign = f.chipInfo, this.addChild(t), t.x = d.randomInt(30, 580),
                t.y = d.randomInt(20, 350), f.chipInfo = [0, 0];
        }, e.prototype.addBox = function () {
            var t = new eui.Image("ui_game_json.box");
            this.addChild(t), t.touchEnabled = !1;
        }, e.prototype.hasRedPack = function () {
            if (f.isOld() && f.local.redpack >= 29.4) return !1;
            if (!f.local.showRp && f.local.redpack < 5) return !1;
            var t = [2, 9, 10, 14, 16, 22, 28], e = f.local.level;
            if (e < f.local.rpMaxLv || 1 == e) return !1;
            if (f.local.redpack > 10) return e % 20 == 0 && this.idx == e / 20 % 2 + 1;
            var o = f.local.redpack > 10 ? .1 : .15;
            return _.contains(t, e) && this.idx == e % 2 + 1 || d.randomRate(o);
        }, e.prototype.addRedPack = function () {
            if (f.chipInfo[0]) this.addChip(); else if (this.hasRedPack()) {
                var t = new eui.Image("ui_main_json.red");
                t.name = "redpack", this.addChild(t), t.x = d.randomInt(30, 580), t.y = d.randomInt(20, 350);
            }
        }, e.prototype.addImg = function () {
            var t = this, e = this.picInfo.conf, o = _.find(e, function (t) {
                return "standart" == t.layer;
            }), n = this.picInfo.img[o.name], i = new eui.Image(n);
            this.addChild(i), i.name = "standart", i.x = 4, i.y = 4;
            var r = 0;
            _.each(e, function (e) {
                3 == r && f.levelMgr.level < 4 || "standart" != e.layer && (r++, t.addIcon(e, t.picInfo.img[e.name]));
            });
        }, e.prototype.addRectDebug = function (t) {
            var e = new eui.Rect(Math.max(100, .42 * t.width), Math.max(100, .42 * t.height), 16711680);
            this.addChild(e), d.setAnchor(e, .5), e.x = .42 * t.x + 4, e.y = .42 * -t.y + 4;
        }, e.prototype.addIcon = function (t, e) {
            var o = new eui.Group();
            o.name = "diff", o.sign = t.name, o.touchChildren = !1, o.width = Math.max(100, .42 * t.width),
                o.height = Math.max(100, .42 * t.height), this.addChild(o), this.targets.push(o),
                d.setAnchor(o, .5), o.x = .42 * t.x + 4, o.y = .42 * -t.y + 4;
            var n = new eui.Image(e);
            o.addChild(n), d.setAnchor(n, .5), n.x = o.width / 2, n.y = o.height / 2;
            var i = 1 == this.idx ? "LayerAMiddle" : "LayerBMiddle";
            n.alpha = t.layer == i ? 1 : 0;
        }, e;
    }(n.DataComponent);
    n.Pic = a, eClass(a.prototype, "ui.Pic");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var o = e.call(this) || this;
            return o._inFly = !1, o.skinName = HomeSkin, o.width = d.stageWidth(), o.height = d.stageHeight(),
                o.addEventListener(t.TouchEvent.TOUCH_TAP, o._onTap, o), o;
        }
        return o(i, e), i.prototype.childrenCreated = function () {
            var e = this;
            this.updateTime(), this._interval = t.setInterval(this.updateTime, this, 1e3), this.idLbl.text = "ID:" + f.local.id,
                this.levelLbl.text = "Level " + (f.local.level + 95 * f.local.roundNum), this.startGroup.tempt(), f.local.redpack && (this.packLbl.text = f.local.redpack.toFixed(1) + "元"),
                this.refreshSoundBtn(), this.energyBtn.showRedPoint(!f.local.mygame || !f.local.fubiao || !f.local.kefu),
                t.Tween.get(this.cloudGroup).to({
                    rotation: 360
                }, 9e5), this.refreshUpgradeInfo(), this.addArmature(), this.checkPuzzle(), this.rpBtn.visible = f.local.showRp || f.local.redpack >= 5,
                // this.addSlotsBtn();
                this.inviteBtn.visible = false;
            this.energyBtn.visible = false;
            this.puzzleBtn.visible = false;
            this.idLbl.visible = false;
            this.kefu.visible = false;
            this.rank.visible = false;
            this.mftl.visible = false;
			this.soundImg.visible = false;
            //startGroup 开始游戏按钮  levelLbl 开始按钮显示的等级文本
            //powerGroup 左上角体力文本
            //upgradeBtn 花盆下升级按钮
        }, i.prototype.addSlotsBtn = function () {
            var t = d.createArmature("btn_slot", !1);
            t && (this.slotsBtn.addChild(t), t.x = 50, t.y = 50, t.animation.play("slot", 0));
        }, i.prototype.checkPuzzle = function () {
            var t = d.puzzleRemainDays();
            this.puzzleBtn.visible = t > 0, this.remainLbl.text = "剩余" + t + "天";
        }, i.prototype.doUpgrade = function () {
            if (this._arm && this._arm.animation) {
                this.upgradeBtn.visible = !1;
                var t = f.local.plantLevel, e = f.local.potLevel;
                v.plant[t].plant < v.plant[e].pot ? this.upgradePlant() : this.upgradePot(), f.saveLocal();
            } else n.Toast.show("正在生成植物，请稍等");
        }, i.prototype.addSmoke = function () {
            if (RES.getRes("smoke_ske_json")) {
                var t = d.createArmature("smoke", !0);
                t && (this.armGroup.addChild(t), t.animation.play("smoke", 1));
            }
        }, i.prototype.upgradePlant = function () {
            var t = this;
            f.local.plantLevel++, this.addSmoke(), this._arm.animation.play("go", 1);
            var e = "plant" + f.local.plantLevel;
            RES.$addResourceData({
                name: e + "_ske_json",
                type: RES.ResourceItem.TYPE_JSON,
                url: g.host + "needcache/armature/" + e + "_ske.json"
            }), RES.$addResourceData({
                name: e + "_tex_json",
                type: RES.ResourceItem.TYPE_JSON,
                url: g.host + "needcache/armature/" + e + "_tex.json"
            }), RES.$addResourceData({
                name: e + "_tex_png",
                type: RES.ResourceItem.TYPE_IMAGE,
                url: g.host + "needcache/armature/" + e + "_tex.png"
            }), RES.createGroup(e, [e + "_ske_json", e + "_tex_json", e + "_tex_png"]), RES.loadGroup(e).then(function () {
                d.remove(t._arm), t.createArmature(e), t.refreshUpgradeInfo();
            });
        }, i.prototype.addPotEffect = function () {
            var t = d.createArmature("pot", !0);
            t && (this.armGroup.parent.addChild(t), t.animation.play("pot", 1), t.x = 135, t.y = 100);
        }, i.prototype.upgradePot = function () {
            var t = this;
            f.local.potLevel++, f.local.potLevel = Math.min(29, f.local.potLevel), this.addPotEffect();
            var e = f.local.potLevel;
            RES.$addResourceData({
                name: "pot" + e + "_a_png",
                type: RES.ResourceItem.TYPE_IMAGE,
                url: g.host + "needcache/image/pot" + e + "_a.png"
            }), RES.$addResourceData({
                name: "pot" + e + "_b_png",
                type: RES.ResourceItem.TYPE_IMAGE,
                url: g.host + "needcache/image/pot" + e + "_b.png"
            }), RES.createGroup("pot", ["pot" + e + "_a_png", "pot" + e + "_b_png"], !0),
                RES.loadGroup("pot").then(function () {
                    t.potImg1.source = "pot" + e + "_a_png", t.potImg2.source = "pot" + e + "_b_png",
                        t.refreshUpgradeInfo();
                });
        }, i.prototype.refreshUpgradeInfo = function () {
            var t, e = f.local.exp, o = f.local.plantLevel, n = f.local.potLevel;
            v.plant[o].plant < v.plant[n].pot ? (t = v.plant[o].plant, this.upgradeLbl.text = (t - e) + " Levels To Upgrade Plants") : (t = v.plant[n].pot,
                this.upgradeLbl.text = (t - e) + " Levels To Upgrade Flowerpot");
            this.upgradeLbl.size = 20;
            var i = e >= t;
            this.upgradeGroup.visible = !i, this.upgradeBtn.visible = i;
        }, i.prototype.addArmature = function () {
            var t = this, e = "plant" + f.local.plantLevel, o = f.local.potLevel;
            if (1 == f.local.plantLevel) return this.createArmature(e), this.potImg1.source = "pot" + o + "_a_png",
                void (this.potImg2.source = "pot" + o + "_b_png");
            if (d.isGroupLoad(e)) this.createArmature(e), this.potImg1.source = "pot" + o + "_a_png",
                this.potImg2.source = "pot" + o + "_b_png"; else {
                var n = [];
                n.push({
                    name: e + "_ske_json",
                    type: RES.ResourceItem.TYPE_JSON,
                    url: g.host + "needcache/armature/" + e + "_ske.json"
                }), n.push({
                    name: e + "_tex_json",
                    type: RES.ResourceItem.TYPE_JSON,
                    url: g.host + "needcache/armature/" + e + "_tex.json"
                }), n.push({
                    name: e + "_tex_png",
                    type: RES.ResourceItem.TYPE_IMAGE,
                    url: g.host + "needcache/armature/" + e + "_tex.png"
                }), n.push({
                    name: "pot" + o + "_a_png",
                    type: RES.ResourceItem.TYPE_IMAGE,
                    url: g.host + "needcache/image/pot" + o + "_a.png"
                }), n.push({
                    name: "pot" + o + "_b_png",
                    type: RES.ResourceItem.TYPE_IMAGE,
                    url: g.host + "needcache/image/pot" + o + "_b.png"
                }), l.createGroupAndLoad(e, n, function () {
                    t.createArmature(e), t.potImg1.source = "pot" + o + "_a_png", t.potImg2.source = "pot" + o + "_b_png";
                });
            }
        }, i.prototype.createArmature = function (t) {
            var e = this._arm = d.createArmature(t);
            e && (this.armGroup.addChild(e), e.animation.play("come", 1), e.addEventListener(dragonBones.EventObject.COMPLETE, function (t) {
                "go" != t.animationName && e.animation.play("stay" + d.randomInt(1, 2), 1);
            }, this));
        }, i.prototype.updateTime = function () {
            if (this.powerLbl.text = f.local.power, !f.local.powerTime || f.local.power >= 5) this.timeLbl.visible = !1; else {
                var t = -moment().diff(f.local.powerTime, "s");
                0 >= t ? f.local.power >= 5 ? this.timeLbl.visible = !1 : (this.timeLbl.text = "00:00",
                    f.rescuePower()) : (this.timeLbl.visible = !0, this.timeLbl.text = moment(1e3 * t).utcOffset(0).format("mm:ss")),
                    this.powerLbl.text = f.local.power;
            }
        }, i.prototype.showPowerFly = function () {
            if (!this._inFly) if (f.hasPower()) {
                platform.getInstance().showInterstitial(() => {
                    this._inFly = !0;
                    var e = new eui.Image("ui_main_json.flash");
                    this.addChild(e), e.x = this.powerGroup.x, e.y = this.powerGroup.y, t.Tween.get(e).to({
                        x: 425,
                        y: this.startGroup.y - 55
                    }, 700).wait(200).call(function () {
                        n.main.addGameUI();
                    });
                })
            } else new n.EnergyPanel().show();
        }, i.prototype.refreshSoundBtn = function () {
            f.local.sound ? this.soundImg.source = "ui_main_json.btn_sound1" : this.soundImg.source = "ui_main_json.btn_sound2";
        }, i.prototype._onTap = function (t) {
            var e = this;
            switch (t.target.name) {
                case "mftl":
                    d.compareVersion(g.info.SDKVersion, "2.9.4") >= 0 ? new n.InviteFriendPanel().show() : d.wxVersionLow();
                    break;
                case "tuan":
                    new n.TuanPanel().show();
                    break;
                case "start":
                    this.showPowerFly();
                    break;
                case "power":
                    new n.EnergyPanel().show();
                    break;
                case "sound":
                    f.setLocalData("sound", !f.local.sound), window.WebAudioEngine && (window.WebAudioEngine.pause = !f.local.sound), this.refreshSoundBtn();
                    break;
                case "rank":
                    // new n.RankPanel().show();
                    break;
                case "kf":
                    platforms.openCustomerServiceConversation({
                        sessionFrom: "main"
                    });
                    break;
                case "energy":
                    this.energyBtn.showRedPoint(!1), new n.EnergyGetPanel("free").show();
                    break;
                case "redpack":
                    // f.local.redpack >= 29.4 ? d.requestForRedPack(function () {
                    //     e.packLbl.text = "0.0元";
                    // }) : n.Toast.show("满30元开启兑换");
                    break;
                case "upgrade":
                    this.doUpgrade();
                    break;
                case "invite":
                    this.inviteBtn.showRedPoint(!1), new n.InvitePanel().show();
                    break;
                case "plant":
                    this._arm && this._arm.animation && this._arm.animation.play("click", 1);
                    break;
                case "puzzle":
                    d.getCard();
                    break;
                case "slots":
                // n.SlotsGame.show();
                default:
                    break;
            }
        }, i.prototype._onExit = function () {
            t.clearInterval(this._interval), r.hideBannerAdPanel();
        }, i;
    }(n.DataComponent);
    n.HomePage = i, eClass(i.prototype, "ui.HomePage");
}(S || (S = {}));

!function (t) {
    var n = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = InviteFriendPanelSkin, t;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            this.createFriendRank(), f.watch("onShareMessageToFriend", this, this.onShareMessageToFriend),
                this.listData = new eui.ArrayCollection(_.range(1, 6));
        }, n.prototype.onShareMessageToFriend = function () {
            f.local.shareEnergy[this.selIdx] = 1, new t.RewardPanel("power", 2, !0).show(),
                f.saveLocal(), this.listData.refresh();
        }, n.prototype.createFriendRank = function () {
            g.isMiniGame && (d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || (t.RankPanel.openDataContext || (t.RankPanel.openDataContext = platforms.openDataContext,
                t.RankPanel.sharedCanvas = t.RankPanel.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight)),
                t.RankPanel.openDataContext.postMessage({
                    command: "friend"
                }), this.openGroup.addChild(t.RankPanel.sharedCanvas)));
        }, n.prototype.onTapTarget = function (e, o) {
            if ("inv" == e.name) {
                var n = e.parent.itemIndex;
                this.selIdx = n, t.RankPanel.openDataContext.postMessage({
                    command: "invite",
                    idx: n
                });
            }
        }, n;
    }(t.UIPanel);
    t.InviteFriendPanel = n, eClass(n.prototype, "ui.InviteFriendPanel");
    var i = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = InviteFriendListItemSkin, e;
        }
        return o(e, t), e.prototype.dataChanged = function () {
            this.currentState = f.local.shareEnergy[this.itemIndex] ? "got" : "normal";
        }, e;
    }(t.ItemRenderer);
    t.InviteFriendListItem = i, eClass(i.prototype, "ui.InviteFriendListItem");
}(S || (S = {}));

!function (t) {
    var n = 0, i = function (e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = InviteEnergySkin, t;
        }
        return o(i, e), i.prototype.childrenCreated = function () {
            var t = this;
            f.local.inviteEnergy = f.local.inviteEnergy || 0, d.http({
                url: "InviteCount",
                method: "POST",
                params: {
                    user_id: f.local.id
                },
                success: function (e) {
                    n = e.count, t.listData = new eui.ArrayCollection(_.range(1, 101));
                }
            });
        }, i.prototype.onTapTarget = function (e, o) {
            var i = e.name;
            if ("get" == i && n > f.local.inviteEnergy) {
                var r = e.parent.parent;
                r.data % 5 == 0 ? f.reAuth ? new t.EnergyGetPanel("mp").show() : d.checkMp(function (e) {
                    e.subscribe && d.http({
                        url: "InviteRedpackGet",
                        method: "POST",
                        params: {
                            user_id: f.local.id
                        },
                        error: function (e) {
                            t.Toast.show(e.errmsg);
                        },
                        success: function (e) {
                            t.Toast.show("领取成功，请查看微信红包"), f.local.inviteArr[r.data] = 1, f.saveLocal(), r.onGetEnergy();
                        }
                    });
                }) : (new t.RewardPanel("power", 5, !1).show(), f.local.inviteArr[r.data] = 1, f.saveLocal(),
                    r.onGetEnergy());
            }
        }, i;
    }(t.UIPanel);
    t.InvitePanel = i, eClass(i.prototype, "ui.InvitePanel");
    var r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = InviteListItemSkin, e;
        }
        return o(e, t), e.prototype.onGetEnergy = function () {
            this.currentState = "got";
        }, e.prototype.dataChanged = function () {
            var t = this.data;
            this.typeIcon.source = t % 5 == 0 ? "ui_panel_json.invite_pack" : "ui_panel_json.add5",
                this.idxLbl.text = "邀请到第" + t + "位好友", f.local.inviteArr[t] ? this.currentState = "got" : this.currentState = t > n ? "invite" : "energy";
        }, e;
    }(t.ItemRenderer);
    t.InviteListItem = r, eClass(r.prototype, "ui.InviteListItem");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var o = e.call(this) || this;
            return o._lastTickTime = t.getTimer(), n.main = o, o.skinName = MainUISkin, o.width = d.stageWidth(),
                o.height = d.stageHeight(), o;
        }
        return o(i, e), i.prototype.childrenCreated = function () {
            f.createLevelMgr(), 1 == f.local.level ? this.addGameUI() : this.addHome();
        }, i.prototype.addHome = function () {
            this.removeChildren(), this.homeUI = new n.HomePage(), this.addChild(this.homeUI);
        }, i.prototype.addGameUI = function () {
            this.removeChildren(), this.gameUI = new n.GameUI(), this.addChild(this.gameUI);
        }, i.prototype._onEnter = function () {
            g.init();
        }, i;
    }(n.DataComponent);
    n.MainUI = i, eClass(i.prototype, "ui.MainUI");
}(S || (S = {})), window.ui = S;

!function (n) {
    var i, r = 1, a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.idx = 1, e.listData = new eui.ArrayCollection(), e.skinName = PuzzlePanelSkin,
                e;
        }
        return o(e, t), e.prototype.createList = function () {
            for (var t = v.puzzle[this.idx], e = [], o = 0; o < t.count; o++) e.push({
                img: "big_chips_json.icon" + this.idx + "_" + (o + 1),
                text: "x" + f.getChipNum(this.idx, o + 1)
            });
            return e;
        }, e.prototype._onExit = function () {
            d.remove(i);
        }, e.prototype.refreshRedPack = function () {
            this.listData.replaceAll(this.createList()), this.chipGroup.removeChildren();
            for (var t = v.puzzle[this.idx], e = 0; e < t.count; e++) {
                var o = new eui.Image("chips_json.chip" + this.idx + "_" + (e + 1));
                f.getChipNum(this.idx, e + 1) || d.setGray(o), this.chipGroup.addChild(o);
            }
            this.nameLbl.text = t.num + "元红包", this.getBtn.visible = f.isChipPackReady(this.idx),
                this.countLbl.text = "已收集" + f.getChipVariety(this.idx) + "/" + t.count, this.leftBtn.visible = 1 != this.idx,
                this.rightBtn.visible = 7 != this.idx;
        }, e.prototype.childrenCreated = function () {
            this.refreshRedPack(), (!f.local.authorized || f.reAuth) && new n.AuthorizedPanel().show();
        }, e.prototype.getRedPack = function () {
            var t = this;
            d.checkMp(function (e) {
                e.subscribe && d.http({
                    url: "drawcard",
                    method: "POST",
                    params: {
                        user_id: f.local.id,
                        red_id: t.idx
                    },
                    error: function (t) {
                        n.Toast.show("领取红包失败");
                    },
                    success: function (e) {
                        n.Toast.show("红包已到账，请查看微信领钱"), f.exchangeChips(t.idx), t.refreshRedPack();
                    }
                });
            });
        }, e.prototype.onTapTarget = function (t, e) {
            var o = t.name;
            switch ("sp" != o && (d.remove(i), i = null), o) {
                case "right":
                    this.idx = d.clamp(this.idx + 1, 1, 7), r = this.idx, this.refreshRedPack();
                    break;

                case "left":
                    this.idx = d.clamp(this.idx - 1, 1, 7), r = this.idx, this.refreshRedPack();
                    break;

                case "get":
                    f.local.authorized && !f.reAuth ? this.getRedPack() : new n.AuthorizedPanel().show();
                    break;

                case "info":
                    new h().show();
                default:
                    break;
            }
        }, e;
    }(n.UIPanel);
    n.PuzzlePanel = a, eClass(a.prototype, "ui.PuzzlePanel");
    var s = function (e) {
        function n() {
            var o = e.call(this) || this;
            return o.skinName = PuzzleListItemSkin, o.addEventListener(t.TouchEvent.TOUCH_TAP, o.__onTap, o),
                o;
        }
        return o(n, e), n.prototype.__onTap = function (t) {
            if (i) d.remove(i), i = null; else {
                i = new l(r, this.itemIndex + 1), d.getStage().addChild(i);
                var e = this.localToGlobal();
                i.x = e.x - 35, i.y = e.y - 230;
            }
        }, n;
    }(n.ItemRenderer);
    n.PuzzleListItem = s, eClass(s.prototype, "ui.PuzzleListItem");
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.maskAlpha = 0, e.skinName = InfoPanelSkin, e;
        }
        return o(e, t), e;
    }(n.UIPanel);
    n.InfoPanel = h, eClass(h.prototype, "ui.InfoPanel");
    var l = function (e) {
        function n(o, n) {
            var i = e.call(this) || this;
            return i.skinName = PuzzleMiniSkin, i.addEventListener(t.TouchEvent.TOUCH_TAP, i.__onTap, i),
                i.redNum = o, i.chipNum = n, i;
        }
        return o(n, e), n.prototype.__onTap = function (t) {
            switch (t.target.name) {
                case "sy":
                    c.shareForSy(this.redNum, this.chipNum);
                    break;

                case "zs":
                    c.shareForZs(this.redNum, this.chipNum);
                default:
                    break;
            }
        }, n;
    }(n.DataComponent);
    n.PuzzleMini = l, eClass(l.prototype, "ui.PuzzleMini");
    var u = function (t) {
        function e(e, o, n) {
            var i = t.call(this) || this;
            return i.skinName = PuzzleRequestPanelSkin, i.redNum = e, i.chipNum = o, i.shareCode = n,
                i;
        }
        return o(e, t), e.prototype.childrenCreated = function () {
            var t = v.puzzle[this.redNum];
            this.nameLbl.text = t.num + "元碎片#" + this.chipNum, this.iconImg.source = "big_chips_json.icon" + this.redNum + "_" + this.chipNum;
        }, e.prototype.onTapTarget = function (t, e) {
            var o = this;
            if ("ok" == t.name) {
                var i = {
                    user_id: f.local.id,
                    share_code: this.shareCode,
                    red_id: this.redNum,
                    card_id: this.chipNum,
                    type: 1,
                    time: Date.now(),
                    sign: ""
                };
                i.sign = g.getSign([i.user_id, i.share_code, i.red_id, i.card_id, i.type, i.time]),
                    d.http({
                        url: "cardTransport",
                        method: "POST",
                        params: i,
                        error: function (t) {
                            n.Toast.show("赠送失败，您没有这个碎片！");
                        },
                        success: function (t) {
                            n.Toast.show("赠送成功！"), o.close();
                        }
                    });
            }
        }, e;
    }(n.UIPanel);
    n.PuzzleRequestPanel = u, eClass(u.prototype, "ui.PuzzleRequestPanel");
    var p = function (t) {
        function e(e, o) {
            var n = t.call(this) || this;
            return n.skinName = PuzzleRequestPanelSkin, n.currentState = "got", n.redNum = e,
                n.chipNum = o, n;
        }
        return o(e, t), e.prototype.childrenCreated = function () {
            var t = v.puzzle[this.redNum];
            this.nameLbl.text = t.num + "元碎片#" + this.chipNum, this.iconImg.source = "big_chips_json.icon" + this.redNum + "_" + this.chipNum;
        }, e.prototype.onTapTarget = function (t, e) {
            "goto" == t.name && (d.getCard(), this.close());
        }, e;
    }(n.UIPanel);
    n.PuzzleGetChipPanel = p, eClass(p.prototype, "ui.PuzzleGetChipPanel");
}(S || (S = {}));

!function (t) {
    var n = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.listData = new eui.ArrayCollection(), t.request = !0, t.skinName = RankPanelSkin,
                t.tabData = new eui.ArrayCollection(["wd", "fd"]), t;
        }
        return o(n, e), n.prototype._onExit = function () {
            this._loginBtn && this._loginBtn.destroy(), this.closeFriendRank();
        }, n.prototype.childrenCreated = function () {
            this.redBtn.visible = !f.local.rankpack, this.tabBar.addEventListener(eui.PropertyEvent.PROPERTY_CHANGE, this._onTabChanged, this);
        }, n.prototype._onTabChanged = function (t) {
            "selectedIndex" == t.property && (this.tabBar.selectedIndex ? (this.worldLayer.visible = !1,
                this.friendLayer.visible = !0, this.redpackGroup.visible = !1, this.createFriendRank()) : (this.worldLayer.visible = !0,
                    this.friendLayer.visible = !1, this.redpackGroup.visible = !0, this._updateRankData()));
        }, n.prototype.getRedPack = function () {
            var e = this;
            d.checkMp(function (o) {
                o.subscribe && d.http({
                    url: "drawWorld",
                    method: "POST",
                    params: {
                        user_id: f.local.id
                    },
                    error: function (e) {
                        var o = "";
                        switch (e.errcode) {
                            case 102:
                                o = "已经领取过排行榜红包";
                                break;

                            case 104:
                                o = "请点击排行榜授权";
                                break;

                            case 105:
                                o = "获取排行榜信息失败";
                                break;

                            case 106:
                                o = "您还没有进入世界榜前20名，请继续努力";
                                break;

                            case 107:
                                o = "今日提现额度已达上限";
                            default:
                                break;
                        }
                        t.Toast.show(o);
                    },
                    success: function (o) {
                        t.Toast.show("领取成功，请查看微信红包"), e.redBtn.visible = !1, f.setLocalData("rankpack", !0);
                    }
                });
            });
        }, n.prototype.onTapTarget = function (t, e) {
            "get" == t.name && this.getRedPack();
        }, n.prototype._updateRankData = function () {
            var t = this;
            return n.cachedData && Date.now() - n.cachedTime < 2e5 ? void this.listData.replaceAll(n.cachedData) : void (f.local.authorized && !f.reAuth ? d.http({
                url: "rankWorld",
                method: "POST",
                params: {
                    user_id: f.local.id
                },
                success: function (e) {
                    n.cachedData = e.list, n.cachedTime = Date.now(), t.listData.replaceAll(e.list);
                }
            }) : this.createLoginButton());
        }, n.prototype.createLoginButton = function () {
            var e = this, o = g.info.windowWidth / 720, n = 251 * o, i = this._loginBtn = platforms.createUserInfoButton({
                type: "image",
                image: "res/btn_root.png",
                style: {
                    left: (g.info.windowWidth - n) / 2,
                    top: g.info.windowHeight / 2,
                    width: n,
                    height: 120 * o
                }
            });
            i && (i.onTap(function (o) {
                console.log(o), "getUserInfo:ok" == o.errMsg ? (i.destroy(), f.local.authorized = !0,
                    f.local.name = encodeURIComponent(o.userInfo.nickName), f.local.avatar = o.userInfo.avatarUrl,
                    f.saveLocal(), d.requestForUpload(function () {
                        e._updateRankData();
                    }), d.requestForUnionId(o.encryptedData, o.iv, f.local.openId)) : t.Toast.show("获取用户信息失败");
            }), i.show());
        }, n.prototype.createFriendRank = function () {
            this.request && g.isMiniGame && (d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || (n.openDataContext || (n.openDataContext = platforms.openDataContext,
                n.sharedCanvas = n.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight)),
                n.openDataContext.postMessage({
                    command: "open",
                    request: !0,
                    openId: f.local.openId
                }), this.friendLayer.addChild(n.sharedCanvas), this.request = !1));
        }, n.prototype.closeFriendRank = function () {
            d.compareVersion(g.info.SDKVersion, "1.9.92") < 0 || n.openDataContext && n.openDataContext.postMessage({
                command: "close"
            });
        }, n.cachedData = null, n.cachedTime = 0, n.openDataContext = null, n.sharedCanvas = null,
            n;
    }(t.UIPanel);
    t.RankPanel = n, eClass(n.prototype, "ui.RankPanel");
    var i = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = RankListItemSkin, e;
        }
        return o(e, t), e.prototype.dataChanged = function () {
            var t = this.itemIndex + 1;
            this.data.rank = t, this.data.name = _.truncate(decodeURIComponent(this.data.name), 5),
                _.endsWith(this.data.score, "关") || (this.data.score += "关"), this.data.headImg = this.data.headImg || "ui_main_json.avatar",
                4 > t ? (this.data.rank = "", this.rankImg.visible = !0, this.rankImg.source = "ui_panel_json.rank" + t) : this.rankImg.visible = !1;
        }, e;
    }(t.ItemRenderer);
    t.RankListItem = i, eClass(i.prototype, "ui.RankListItem");
}(S || (S = {}));

!function (t) {
    var n = function (t) {
        function e(e) {
            var o = t.call(this) || this;
            return o.num = e, o.skinName = RedPackPanelSkin, o;
        }
        return o(e, t), e.prototype.childrenCreated = function () {
            this.numLbl.text = this.num + "元" + (f.local.redLock ? "话费" : "红包");
        }, e;
    }(t.UIPanel);
    t.RedPackPanel = n, eClass(n.prototype, "ui.RedPackPanel");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function i() {
            var o = e.call(this) || this;
            return o.ballStatus = 0, o.gameStatus = 0, o.swingDir = 1, o.recap = 0, o._hitIdx = [],
                o._curLine = 0, o.curCoin = 0, o._ballsArr = [], o.skinName = SlotsGameSkin, o.height = d.stageHeight(),
                o.listData = new eui.ArrayCollection(o._createList()), o.once(t.Event.ADDED_TO_STAGE, o.onAddToStage, o),
                f.watch("video-slot", o, o.onVideoSlot), f.watch("video-slots-recap", o, o.onVideoSlotRecap),
                o;
        }
        return o(i, e), i.prototype.onVideoSlot = function () {
            d.http({
                url: "videomini",
                method: "POST",
                params: {},
                success: function (t) { }
            }), f.addItem("coin", 100), this.totalLbl.text = f.local.coin, this.videoBtn.visible = f.local.coin < 100;
        }, i.prototype._createList = function () {
            for (var t = [], e = 0; 9 > e; e++) t.push({
                on: "ui_slots_json.icon" + (e + 1) + "a",
                off: "ui_slots_json.icon" + (e + 1) + "b"
            });
            return t;
        }, i.prototype._onExit = function () {
            this.world.clear();
        }, i.show = function () {
            d.getStage().addChild(new i());
        }, i.prototype.onAddToStage = function () {
            this.addEventListener(t.Event.ENTER_FRAME, this.loop, this), this.addEventListener(t.TouchEvent.TOUCH_TAP, this._onTap, this),
                this.createWorld(), this.createGround(), t.setTimeout(this.prepareGame, this, 2e3),
                this.createDebug(), this.createSwing(), this._timeOnEnterFrame = t.getTimer();
        }, i.prototype.childrenCreated = function () {
            this.totalLbl.text = f.local.coin, this.board = new a(), this.bdGroup.addChild(this.board),
                this.videoBtn.visible = f.local.coin < 100;
        }, i.prototype.prepareGame = function () {
            this.createHinders(this.hinderGroup1), this.createHinders(this.hinderGroup2), this.createBoard();
        }, i.prototype.createWorld = function () {
            var t = new p2.World();
            t.sleepMode = p2.World.BODY_SLEEPING, t.gravity = [0, 200], this.world = t, this.world.defaultContactMaterial.restitution = .6;
        }, i.prototype.createGround = function () {
            var t = new p2.Plane(), e = new p2.Body();
            e.position[1] = 790, e.angle = Math.PI, e.addShape(t), this.world.addBody(e);
            var o = new p2.Plane(), n = new p2.Body();
            n.position[0] = 10, n.angle = -Math.PI / 2, n.addShape(o), this.world.addBody(n);
            var i = new p2.Plane(), r = new p2.Body();
            r.position[0] = 560, r.angle = Math.PI / 2, r.addShape(i), this.world.addBody(r);
        }, i.prototype.createHinders = function (t) {
            var e = this;
            _.each(t.$children, function (o) {
                var n = new p2.Circle({
                    radius: 6
                }), i = new p2.Body({
                    position: [t.x + o.x + 6, t.y + o.y + 6]
                });
                i.addShape(n), e.world.addBody(i);
            });
        }, i.prototype.createBoard = function () {
            var t = this;
            _.each(this.boardGroup.$children, function (e) {
                var o = new p2.Box({
                    width: e.width,
                    height: e.height
                }), n = new p2.Body({
                    position: [t.boardGroup.x + e.x + e.width / 2, t.boardGroup.y + e.y + e.height / 2]
                });
                n.addShape(o), t.world.addBody(n);
            });
        }, i.prototype.createSwing = function () {
            var t = this.createOneSwing([this.swingImg1.x, this.swingImg1.y]);
            this._swingBody1 = t, this._swingBody1.displays = [this.swingImg1], this._swingBody2 = this.createOneSwing([this.swingImg2.x, this.swingImg2.y]),
                this._swingBody2.displays = [this.swingImg2], t.angle = -Math.PI;
        }, i.prototype.createOneSwing = function (t) {
            var e = new p2.Body({
                position: t
            }), o = new p2.Circle({
                radius: 10
            });
            e.addShape(o);
            var n = new p2.Convex({
                vertices: [[-10, 0], [0, -90], [10, 0]]
            });
            return e.addShape(n), this.world.addBody(e), e;
        }, i.prototype.createDebug = function () {
            this.debugDraw = new h(this.world);
            var e = new t.Sprite();
            this.addChild(e), this.debugDraw.setSprite(e);
        }, i.prototype.loop = function () {
            var e = this, o = t.getTimer() - this._timeOnEnterFrame;
            if (this._timeOnEnterFrame = t.getTimer(), this.gameStatus) {
                this.world.step(1 / 60, o / 200, 5), this._swingBody1.angle += .018 * this.swingDir,
                    this._swingBody2.angle = this._swingBody1.angle, (this._swingBody1.angle < -1.25 * Math.PI || this._swingBody1.angle > -.75 * Math.PI) && (this.swingDir *= -1);
                for (var n = !1, i = this.world.bodies.length - 1; i >= 0; i--) {
                    var a = this.world.bodies[i];
                    if (a.displays) {
                        var s = a.displays[0];
                        if (s) {
                            var h = (s.x = a.position[0], s.y = a.position[1]);
                            s.rotation = 180 * a.angle / Math.PI, 768 == Math.floor(h) && a.type != p2.Body.STATIC ? (a.sleep(),
                                a.type = p2.Body.STATIC, this.calcBallIdx(a), 8 == this._curLine && (this.getRp(),
                                    n = !0)) : h > 723 && a.sleepState == p2.Body.SLEEPING && a.type != p2.Body.STATIC && (a.type = p2.Body.STATIC,
                                        this.recap ? n = !0 : (this._bodyCache = a, platforms.showModal({
                                            title: "复活",
                                            content: "是否观看一段视频复活？",
                                            success: function (t) {
                                                t.confirm ? r.showVideoAd("video-slots-recap") : t.cancel && e.roundOver();
                                            },
                                            fail: function (t) {
                                                e.roundOver();
                                            }
                                        }))), 723 > h && a.sleepState == p2.Body.SLEEPING && a.type != p2.Body.STATIC && (d.remove(a.displays[0]),
                                            this.world.removeBody(a), this.gameStatus = 1);
                        }
                    }
                }
                n && this.roundOver();
            }
        }, i.prototype.onVideoSlotRecap = function () {
            this.recap = 1, d.remove(this._bodyCache.displays[0]), this.world.removeBody(this._bodyCache),
                this.gameStatus = 1;
        }, i.prototype.calcBallIdx = function (t) {
            var e = t.position[0], o = Math.floor((e - 31.5) / 57.5);
            this._hitIdx.push(o), this.list.setSelectedIndices(this._hitIdx), this.board.lightFruit(o + 1),
                this.checkLine(o), this.gameStatus = 1;
        }, i.prototype.checkLine = function (t) {
            for (var e = [[0, 4, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]], o = 0; 8 > o; o++) {
                var n = e[o];
                _.contains(n, t) && 3 == _.intersection(n, this._hitIdx).length && (this.board.blinkArrow(o),
                    this._curLine++);
            }
            if (_.each(this.rewardListGroup.$children, function (t) {
                return t.visible = !1;
            }), this._curLine > 0) {
                var i = Math.min(6, this._curLine - 1);
                this.rewardListGroup.$children[i].visible = !0;
                var r = [40, 110, 220, 380, 600, 900, 3e3];
                this.curCoin = r[i], this.coinLbl.text = this.curCoin + "";
            }
        }, i.prototype.getRp = function () {
            if (f.reAuth) new n.EnergyGetPanel("mp").show(); else {
                var t = {
                    user_id: f.local.id,
                    time: Date.now(),
                    sign: ""
                }, e = g.getSign([t.user_id, t.time]);
                t.sign = e, d.checkMp(function (e) {
                    e.subscribe && d.http({
                        url: "onceRed",
                        method: "POST",
                        params: t,
                        error: function (t) {
                            n.Toast.show(t.errmsg);
                        },
                        success: function (t) {
                            n.Toast.show("领取成功，请查看微信红包");
                        }
                    });
                });
            }
        }, i.prototype.roundOver = function () {
            var e = this;
            _.each(this._ballsArr, function (t) {
                d.remove(t.displays[0]), e.world.removeBody(t);
            }), this.list.selectedIndices = [], this._ballsArr = [], this._hitIdx = [], this.gameStatus = 0,
                this.recap = 0, this.startBtn.visible = !0, this.shootBtn.visible = !1, this.board.reset(),
                this.endGroup.visible = !0, t.Tween.get(this.endGroup).wait(2e3).set({
                    visible: !1
                }), this.endLbl.text = this.curCoin + "", f.addItem("coin", this.curCoin), this.curCoin = 0,
                this.coinLbl.text = "0", this.totalLbl.text = f.local.coin, this._curLine > 0 && new n.RewardPanel("power", this._curLine, !1).show(),
                d.statSlots(this._curLine), this._curLine = 0, this.videoBtn.visible = f.local.coin < 100,
                _.each(this.rewardListGroup.$children, function (t) {
                    return t.visible = !1;
                });
        }, i.prototype.addOneBall = function () {
            if (1 == this.gameStatus) {
                this.gameStatus = 2;
                var t = new p2.Body({
                    mass: .7,
                    position: [270, 10]
                }), e = new p2.Circle({
                    radius: 22
                });
                t.addShape(e), this.world.addBody(t);
                var o = new eui.Image("ui_slots_json.ball");
                this._ballsArr.push(t), t.displays = [o], this.gameGroup.addChild(o), d.setAnchor(o, .5);
            }
        }, i.prototype.roundStart = function () {
            f.useItem("coin", 100) && (this.gameStatus = 1, this.startBtn.visible = !1, this.shootBtn.visible = !0,
                this.totalLbl.text = f.local.coin);
        }, i.prototype._onTap = function (t) {
            switch (t.target.name) {
                case "ex":
                    new s().show();
                    break;

                case "guide":
                    new l().show();
                    break;

                case "close":
                    d.remove(this);
                    break;

                case "video":
                    c.shareForSlots();
                    break;

                case "start":
                    0 == this.gameStatus && this.roundStart();
                    break;

                case "shoot":
                    1 == this.gameStatus && this.addOneBall();
                default:
                    break;
            }
        }, i;
    }(n.DataComponent);
    n.SlotsGame = i, eClass(i.prototype, "ui.SlotsGame");
    var a = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = SlotsBoardSkin, t;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            this.reset();
        }, n.prototype.reset = function () {
            for (var t = 1; 9 >= t; t++) this["fruit" + t].visible = !1;
        }, n.prototype.lightFruit = function (e) {
            var o = this["fruit" + e];
            t.Tween.get(o).set({
                visible: !0
            }).wait(500).set({
                visible: !1
            }).wait(500).set({
                visible: !0
            }).wait(500).set({
                visible: !1
            }).wait(500).set({
                visible: !0
            });
        }, n.prototype.blinkArrow = function (e) {
            var o = this["arrow" + e];
            t.Tween.get(o).set({
                visible: !0
            }).wait(500).set({
                visible: !1
            }).wait(500).set({
                visible: !0
            }).wait(500).set({
                visible: !1
            }).wait(500).set({
                visible: !0
            });
        }, n;
    }(n.DataComponent);
    n.SlotsBoard = a, eClass(a.prototype, "ui.SlotsBoard");
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SlotsExchangeSkin, e.listData = new eui.ArrayCollection(e._createList()),
                e;
        }
        return o(e, t), e.prototype._createList = function () {
            for (var t = [], e = [10, 20, 30, 50, 100, 200], o = 0; 6 > o; o++) t.push({
                rmb: e[o] + "元"
            });
            return t;
        }, e.prototype._onChanged = function (t) {
            if ("selectedIndex" == t.property) {
                var e = [10, 20, 30, 50, 100, 200][this.list.selectedIndex];
                this.exLbl.text = "" + 1e4 * e;
            }
        }, e.prototype.childrenCreated = function () {
            this.coinLbl.text = f.local.coin, this.list.selectedIndex = 0, this.list.addEventListener(eui.PropertyEvent.PROPERTY_CHANGE, this._onChanged, this);
        }, e.prototype.onTapTarget = function (t, e) {
            "exchange" == t.name && n.Toast.show("条件未达成");
        }, e;
    }(n.UIPanel);
    n.SlotsExchangePanel = s, eClass(s.prototype, "ui.SlotsExchangePanel");
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SlotsGuideSkin, e;
        }
        return o(e, t), e;
    }(n.UIPanel);
    n.SlotsGuidePanel = l, eClass(l.prototype, "ui.SlotsGuidePanel");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function n(t, o) {
            var n = e.call(this) || this;
            return n.stopAdd = !1, n.ps = t, n.pe = o, n;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            var e = this;
            this.posGroup = new eui.Group(), this.posGroup.x = this.ps.x, this.posGroup.y = this.ps.y,
                this.addChild(this.posGroup), t.Tween.get(this.posGroup).to({
                    x: this.pe.x,
                    y: this.pe.y
                }, 1e3).call(function () {
                    e.stopAdd = !0, e.dispatchEvent(new t.Event("finish"));
                }).wait(1e3).call(function () {
                    d.remove(e);
                }), t.startTick(this._onTick, this);
        }, n.prototype._onTick = function () {
            return this.stopAdd || this.addOneParticle(), !1;
        }, n.prototype._onExit = function () {
            t.stopTick(this._onTick, this);
        }, n.prototype.addOneParticle = function () {
            var t = RES.getRes("star_png"), e = RES.getRes("star_json");
            if (t && e) {
                var o = new particle.GravityParticleSystem(t, e);
                this.addChild(o), o.x = this.posGroup.x, o.y = this.posGroup.y, o.start(100);
            }
        }, n;
    }(n.DataComponent);
    n.StarParticle = i, eClass(i.prototype, "ui.StarParticle");
}(S || (S = {}));

!function (n) {
    var i = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = TipUISkin, t.width = 128, t.height = 128, t.touchEnabled = !1,
                t.touchChildren = !1, t;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            d.setAnchor(this, .5), t.Tween.get(this.circleImg, {
                loop: !0
            }).to({
                scaleX: .9,
                scaleY: .9
            }, 500).to({
                scaleX: 1,
                scaleY: 1
            }, 500), t.Tween.get(this.arrowImg, {
                loop: !0
            }).to({
                y: -100
            }, 500).to({
                y: -120
            }, 500);
        }, n;
    }(n.DataComponent);
    n.TipUI = i, eClass(i.prototype, "ui.TipUI");
}(S || (S = {}));

var S;

!function (t) {
    var n = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = TuanPanelSkin, t;
        }
        return o(n, e), n.prototype.childrenCreated = function () {
            this.requestData();
        }, n.prototype.requestData = function () {
            var t = this;
            d.http({
                url: "info",
                method: "POST",
                params: {
                    user_id: f.local.id
                },
                success: function (e) {
                    t.money = e.userMoney, t.moneyLbl.text = (e.userMoney / 100).toFixed(2) + "元", t.countLbl.text = "参团人数：" + e.friendAmount,
                        t.friendLbl.text = (e.todayMoney / 100).toFixed(2) + "元", t.totalLbl.text = (e.todayMoney1 / 100).toFixed(2) + "元",
                        t.extendLbl.text = (e.todayMoney2 / 100).toFixed(2) + "元", t.friendMoneyLbl.text = (e.bossTodayMoney / 100).toFixed(2) + "元",
                        t.friendCountLbl.text = "他邀请了" + e.bossFriendAmount + "个人，今日收益", e.bossAvatar && (t.headImg.source = e.bossAvatar),
                        e.bossName && (t.nameLbl.text = decodeURIComponent(e.bossName));
                }
            });
        }, n.prototype.onTapTarget = function (e, o) {
            var n = this, i = e.name;
            if ("tixian" == i) {
                if (this.money < 50) return void t.Toast.show("满0.5元可提现");
                f.reAuth ? new t.EnergyGetPanel("mp").show() : d.checkMp(function (e) {
                    e.subscribe && d.http({
                        url: "draw",
                        method: "POST",
                        params: {
                            user_id: f.local.id
                        },
                        error: function (e) {
                            t.Toast.show(e.errmsg);
                        },
                        success: function (e) {
                            t.Toast.show("提现成功！"), n.moneyLbl.text = "0.00元";
                        }
                    });
                });
            }
        }, n;
    }(t.UIPanel);
    t.TuanPanel = n, eClass(n.prototype, "ui.TuanPanel");
}(S || (S = {})), window.Main = C;

setTimeout(()=>{
    window.ggmgr.slp(100,true);
 },3000)